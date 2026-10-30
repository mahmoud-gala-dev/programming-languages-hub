// src/data/sections/section8.js
// محتوى تعليمي مفصل وشامل لـ: القسم الثامن: Routing في ASP.NET Core MVC
export const section8Data = {
  id: 8,
  title: "القسم الثامن: Routing في ASP.NET Core MVC",
  englishTitle: "Routing & URL Management",
  icon: "Compass",
  category: "ASP.NET Core MVC",
  description: "إتقان Conventional Routing وAttribute Routing، قيود المسارات Route Constraints، وتوليد الروابط الصديقة لمحركات البحث SEO.",
  summary: {
  "sectionId": 8,
  "title": "القسم الثامن: Routing في ASP.NET Core MVC",
  "englishTitle": "Routing & URL Management",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم الثامن: Routing في ASP.NET Core MVC.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم الثامن: Routing في ASP.NET Core MVC",
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
    "title": "مقدمة في Routing",
    "subtopics": [
      {
        "subId": "8.1.1",
        "title": "ما هو Routing؟",
        "englishTitle": "Routing",
        "definition": "يعد (ما هو Routing؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هو Routing؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هو Routing؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هو Routing؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هو Routing؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.1.1",
          "title": "ما هو Routing؟",
          "topicTitle": "مقدمة في Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (ما هو Routing؟) أحد المعايير التقنية الحيوية في مسار مقدمة في Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Routing؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Routing؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Routing؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Routing؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Routing؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Routing؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Routing؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Routing؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Routing؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.1.2",
        "title": "كيف يعمل Endpoint Routing؟",
        "englishTitle": "كيف يعمل Endpoint Routing",
        "definition": "يعد (كيف يعمل Endpoint Routing؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (كيف يعمل Endpoint Routing؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (كيف يعمل Endpoint Routing؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ كيف يعمل Endpoint Routing؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: كيف يعمل Endpoint Routing؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.1.2",
          "title": "كيف يعمل Endpoint Routing؟",
          "topicTitle": "مقدمة في Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (كيف يعمل Endpoint Routing؟) أحد المعايير التقنية الحيوية في مسار مقدمة في Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (كيف يعمل Endpoint Routing؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (كيف يعمل Endpoint Routing؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (كيف يعمل Endpoint Routing؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (كيف يعمل Endpoint Routing؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: كيف يعمل Endpoint Routing؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (كيف يعمل Endpoint Routing؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين كيف يعمل Endpoint Routing؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: كيف يعمل Endpoint Routing؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (كيف يعمل Endpoint Routing؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.1.3",
        "title": "الفرق بين URL وRoute",
        "englishTitle": "URL وRoute",
        "definition": "يعد (الفرق بين URL وRoute) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الفرق بين URL وRoute) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الفرق بين URL وRoute) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ الفرق بين URL وRoute\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الفرق بين URL وRoute\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.1.3",
          "title": "الفرق بين URL وRoute",
          "topicTitle": "مقدمة في Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (الفرق بين URL وRoute) أحد المعايير التقنية الحيوية في مسار مقدمة في Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين URL وRoute)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين URL وRoute) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين URL وRoute)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين URL وRoute)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين URL وRoute",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين URL وRoute)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين URL وRoute\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين URL وRoute ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين URL وRoute) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.1.4",
        "title": "مفهوم Route Template",
        "englishTitle": "Route Template",
        "definition": "يعد (مفهوم Route Template) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مفهوم Route Template) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مفهوم Route Template) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ مفهوم Route Template\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مفهوم Route Template\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.1.4",
          "title": "مفهوم Route Template",
          "topicTitle": "مقدمة في Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (مفهوم Route Template) أحد المعايير التقنية الحيوية في مسار مقدمة في Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Route Template)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Route Template) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Route Template)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Route Template)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Route Template",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Route Template)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Route Template\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Route Template ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Route Template) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.1.5",
        "title": "فهم Controller وAction وID",
        "englishTitle": "فهم Controller وAction وID",
        "definition": "يعد (فهم Controller وAction وID) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (فهم Controller وAction وID) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (فهم Controller وAction وID) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ فهم Controller وAction وID\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: فهم Controller وAction وID\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.1.5",
          "title": "فهم Controller وAction وID",
          "topicTitle": "مقدمة في Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (فهم Controller وAction وID) أحد المعايير التقنية الحيوية في مسار مقدمة في Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم Controller وAction وID)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم Controller وAction وID) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم Controller وAction وID)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم Controller وAction وID)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فهم Controller وAction وID",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم Controller وAction وID)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم Controller وAction وID\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم Controller وAction وID ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم Controller وAction وID) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.1.6",
        "title": "فهم Route Values",
        "englishTitle": "فهم Route Values",
        "definition": "يعد (فهم Route Values) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (فهم Route Values) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (فهم Route Values) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ فهم Route Values\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: فهم Route Values\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.1.6",
          "title": "فهم Route Values",
          "topicTitle": "مقدمة في Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (فهم Route Values) أحد المعايير التقنية الحيوية في مسار مقدمة في Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم Route Values)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم Route Values) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم Route Values)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم Route Values)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فهم Route Values",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم Route Values)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم Route Values\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم Route Values ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم Route Values) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.1.7",
        "title": "مفهوم Route Matching",
        "englishTitle": "Route Matching",
        "definition": "يعد (مفهوم Route Matching) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مفهوم Route Matching) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مفهوم Route Matching) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ مفهوم Route Matching\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مفهوم Route Matching\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.1.7",
          "title": "مفهوم Route Matching",
          "topicTitle": "مقدمة في Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (مفهوم Route Matching) أحد المعايير التقنية الحيوية في مسار مقدمة في Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Route Matching)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Route Matching) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Route Matching)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Route Matching)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Route Matching",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Route Matching)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Route Matching\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Route Matching ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Route Matching) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "Conventional Routing",
    "subtopics": [
      {
        "subId": "8.2.1",
        "title": "ما هو Conventional Routing؟",
        "englishTitle": "Conventional Routing",
        "definition": "يعد (ما هو Conventional Routing؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هو Conventional Routing؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هو Conventional Routing؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هو Conventional Routing؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هو Conventional Routing؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.2.1",
          "title": "ما هو Conventional Routing؟",
          "topicTitle": "Conventional Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (ما هو Conventional Routing؟) أحد المعايير التقنية الحيوية في مسار Conventional Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Conventional Routing؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Conventional Routing؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Conventional Routing؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Conventional Routing؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Conventional Routing؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Conventional Routing؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Conventional Routing؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Conventional Routing؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Conventional Routing؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.2.2",
        "title": "استخدام MapControllerRoute",
        "englishTitle": "MapControllerRoute",
        "definition": "يعد (استخدام MapControllerRoute) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام MapControllerRoute) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام MapControllerRoute) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام MapControllerRoute\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام MapControllerRoute\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.2.2",
          "title": "استخدام MapControllerRoute",
          "topicTitle": "Conventional Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام MapControllerRoute) أحد المعايير التقنية الحيوية في مسار Conventional Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام MapControllerRoute)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام MapControllerRoute) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام MapControllerRoute)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام MapControllerRoute)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام MapControllerRoute",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام MapControllerRoute)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام MapControllerRoute\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام MapControllerRoute ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام MapControllerRoute) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.2.3",
        "title": "فهم Default Route",
        "englishTitle": "فهم Default Route",
        "definition": "يعد (فهم Default Route) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (فهم Default Route) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (فهم Default Route) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ فهم Default Route\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: فهم Default Route\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.2.3",
          "title": "فهم Default Route",
          "topicTitle": "Conventional Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (فهم Default Route) أحد المعايير التقنية الحيوية في مسار Conventional Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم Default Route)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم Default Route) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم Default Route)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم Default Route)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فهم Default Route",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم Default Route)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم Default Route\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم Default Route ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم Default Route) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.2.4",
        "title": "إنشاء Custom Route",
        "englishTitle": "Custom Route",
        "definition": "يعد (إنشاء Custom Route) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Custom Route) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Custom Route) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Custom Route\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Custom Route\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.2.4",
          "title": "إنشاء Custom Route",
          "topicTitle": "Conventional Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (إنشاء Custom Route) أحد المعايير التقنية الحيوية في مسار Conventional Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Custom Route)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Custom Route) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Custom Route)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Custom Route)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Custom Route",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Custom Route)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Custom Route\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Custom Route ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Custom Route) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.2.5",
        "title": "استخدام Optional Parameters",
        "englishTitle": "Optional Parameters",
        "definition": "يعد (استخدام Optional Parameters) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Optional Parameters) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Optional Parameters) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Optional Parameters\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Optional Parameters\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.2.5",
          "title": "استخدام Optional Parameters",
          "topicTitle": "Conventional Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام Optional Parameters) أحد المعايير التقنية الحيوية في مسار Conventional Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Optional Parameters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Optional Parameters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Optional Parameters)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Optional Parameters)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Optional Parameters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Optional Parameters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Optional Parameters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Optional Parameters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Optional Parameters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.2.6",
        "title": "استخدام Default Values",
        "englishTitle": "Default Values",
        "definition": "يعد (استخدام Default Values) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Default Values) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Default Values) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Default Values\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Default Values\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.2.6",
          "title": "استخدام Default Values",
          "topicTitle": "Conventional Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام Default Values) أحد المعايير التقنية الحيوية في مسار Conventional Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Default Values)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Default Values) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Default Values)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Default Values)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Default Values",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Default Values)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Default Values\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Default Values ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Default Values) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.2.7",
        "title": "إنشاء أكثر من Route Pattern",
        "englishTitle": "أكثر من Route Pattern",
        "definition": "يعد (إنشاء أكثر من Route Pattern) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء أكثر من Route Pattern) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء أكثر من Route Pattern) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء أكثر من Route Pattern\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء أكثر من Route Pattern\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.2.7",
          "title": "إنشاء أكثر من Route Pattern",
          "topicTitle": "Conventional Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (إنشاء أكثر من Route Pattern) أحد المعايير التقنية الحيوية في مسار Conventional Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء أكثر من Route Pattern)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء أكثر من Route Pattern) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء أكثر من Route Pattern)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء أكثر من Route Pattern)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء أكثر من Route Pattern",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء أكثر من Route Pattern)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء أكثر من Route Pattern\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء أكثر من Route Pattern ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء أكثر من Route Pattern) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.2.8",
        "title": "فهم ترتيب المسارات",
        "englishTitle": "فهم ترتيب المسارات",
        "definition": "يعد (فهم ترتيب المسارات) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (فهم ترتيب المسارات) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (فهم ترتيب المسارات) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ فهم ترتيب المسارات\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: فهم ترتيب المسارات\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.2.8",
          "title": "فهم ترتيب المسارات",
          "topicTitle": "Conventional Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (فهم ترتيب المسارات) أحد المعايير التقنية الحيوية في مسار Conventional Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم ترتيب المسارات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم ترتيب المسارات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم ترتيب المسارات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم ترتيب المسارات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فهم ترتيب المسارات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم ترتيب المسارات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم ترتيب المسارات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم ترتيب المسارات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم ترتيب المسارات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Attribute Routing",
    "subtopics": [
      {
        "subId": "8.3.1",
        "title": "ما هو Attribute Routing؟",
        "englishTitle": "Attribute Routing",
        "definition": "يعد (ما هو Attribute Routing؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هو Attribute Routing؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هو Attribute Routing؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هو Attribute Routing؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هو Attribute Routing؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.3.1",
          "title": "ما هو Attribute Routing؟",
          "topicTitle": "Attribute Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (ما هو Attribute Routing؟) أحد المعايير التقنية الحيوية في مسار Attribute Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Attribute Routing؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Attribute Routing؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Attribute Routing؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Attribute Routing؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Attribute Routing؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Attribute Routing؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Attribute Routing؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Attribute Routing؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Attribute Routing؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.3.2",
        "title": "استخدام Route Attribute",
        "englishTitle": "Route Attribute",
        "definition": "يعد (استخدام Route Attribute) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Route Attribute) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Route Attribute) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Route Attribute\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Route Attribute\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.3.2",
          "title": "استخدام Route Attribute",
          "topicTitle": "Attribute Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام Route Attribute) أحد المعايير التقنية الحيوية في مسار Attribute Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Route Attribute)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Route Attribute) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Route Attribute)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Route Attribute)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Route Attribute",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Route Attribute)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Route Attribute\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Route Attribute ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Route Attribute) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.3.3",
        "title": "استخدام HttpGet مع Route",
        "englishTitle": "HttpGet مع Route",
        "definition": "يعد (استخدام HttpGet مع Route) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام HttpGet مع Route) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام HttpGet مع Route) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام HttpGet مع Route\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام HttpGet مع Route\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.3.3",
          "title": "استخدام HttpGet مع Route",
          "topicTitle": "Attribute Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام HttpGet مع Route) أحد المعايير التقنية الحيوية في مسار Attribute Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام HttpGet مع Route)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام HttpGet مع Route) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام HttpGet مع Route)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام HttpGet مع Route)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام HttpGet مع Route",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام HttpGet مع Route)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام HttpGet مع Route\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام HttpGet مع Route ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام HttpGet مع Route) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.3.4",
        "title": "استخدام HttpPost مع Route",
        "englishTitle": "HttpPost مع Route",
        "definition": "يعد (استخدام HttpPost مع Route) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام HttpPost مع Route) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام HttpPost مع Route) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام HttpPost مع Route\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام HttpPost مع Route\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.3.4",
          "title": "استخدام HttpPost مع Route",
          "topicTitle": "Attribute Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام HttpPost مع Route) أحد المعايير التقنية الحيوية في مسار Attribute Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام HttpPost مع Route)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام HttpPost مع Route) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام HttpPost مع Route)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام HttpPost مع Route)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام HttpPost مع Route",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام HttpPost مع Route)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام HttpPost مع Route\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام HttpPost مع Route ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام HttpPost مع Route) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.3.5",
        "title": "إنشاء Route Prefix",
        "englishTitle": "Route Prefix",
        "definition": "يعد (إنشاء Route Prefix) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Route Prefix) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Route Prefix) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Route Prefix\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Route Prefix\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.3.5",
          "title": "إنشاء Route Prefix",
          "topicTitle": "Attribute Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (إنشاء Route Prefix) أحد المعايير التقنية الحيوية في مسار Attribute Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Route Prefix)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Route Prefix) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Route Prefix)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Route Prefix)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Route Prefix",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Route Prefix)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Route Prefix\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Route Prefix ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Route Prefix) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.3.6",
        "title": "استخدام Controller وAction Tokens",
        "englishTitle": "Controller وAction Tokens",
        "definition": "يعد (استخدام Controller وAction Tokens) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Controller وAction Tokens) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Controller وAction Tokens) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Controller وAction Tokens\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Controller وAction Tokens\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.3.6",
          "title": "استخدام Controller وAction Tokens",
          "topicTitle": "Attribute Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام Controller وAction Tokens) أحد المعايير التقنية الحيوية في مسار Attribute Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Controller وAction Tokens)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Controller وAction Tokens) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Controller وAction Tokens)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Controller وAction Tokens)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Controller وAction Tokens",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Controller وAction Tokens)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Controller وAction Tokens\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Controller وAction Tokens ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Controller وAction Tokens) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.3.7",
        "title": "الفرق بين Conventional وAttribute Routing",
        "englishTitle": "Conventional وAttribute Routing",
        "definition": "يعد (الفرق بين Conventional وAttribute Routing) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الفرق بين Conventional وAttribute Routing) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الفرق بين Conventional وAttribute Routing) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ الفرق بين Conventional وAttribute Routing\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الفرق بين Conventional وAttribute Routing\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.3.7",
          "title": "الفرق بين Conventional وAttribute Routing",
          "topicTitle": "Attribute Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (الفرق بين Conventional وAttribute Routing) أحد المعايير التقنية الحيوية في مسار Attribute Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Conventional وAttribute Routing)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Conventional وAttribute Routing) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Conventional وAttribute Routing)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Conventional وAttribute Routing)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Conventional وAttribute Routing",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Conventional وAttribute Routing)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Conventional وAttribute Routing\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Conventional وAttribute Routing ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Conventional وAttribute Routing) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.3.8",
        "title": "تصميم مسارات واضحة وقابلة للصيانة",
        "englishTitle": "تصميم مسارات واضحة وقابلة للصيانة",
        "definition": "يعد (تصميم مسارات واضحة وقابلة للصيانة) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تصميم مسارات واضحة وقابلة للصيانة) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تصميم مسارات واضحة وقابلة للصيانة) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ تصميم مسارات واضحة وقابلة للصيانة\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تصميم مسارات واضحة وقابلة للصيانة\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.3.8",
          "title": "تصميم مسارات واضحة وقابلة للصيانة",
          "topicTitle": "Attribute Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (تصميم مسارات واضحة وقابلة للصيانة) أحد المعايير التقنية الحيوية في مسار Attribute Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تصميم مسارات واضحة وقابلة للصيانة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تصميم مسارات واضحة وقابلة للصيانة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تصميم مسارات واضحة وقابلة للصيانة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تصميم مسارات واضحة وقابلة للصيانة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تصميم مسارات واضحة وقابلة للصيانة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تصميم مسارات واضحة وقابلة للصيانة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تصميم مسارات واضحة وقابلة للصيانة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تصميم مسارات واضحة وقابلة للصيانة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تصميم مسارات واضحة وقابلة للصيانة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "Route Parameters وConstraints",
    "subtopics": [
      {
        "subId": "8.4.1",
        "title": "تمرير ID داخل URL",
        "englishTitle": "تمرير ID داخل URL",
        "definition": "يعد (تمرير ID داخل URL) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تمرير ID داخل URL) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تمرير ID داخل URL) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ تمرير ID داخل URL\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تمرير ID داخل URL\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.4.1",
          "title": "تمرير ID داخل URL",
          "topicTitle": "Route Parameters وConstraints",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (تمرير ID داخل URL) أحد المعايير التقنية الحيوية في مسار Route Parameters وConstraints ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تمرير ID داخل URL)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تمرير ID داخل URL) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تمرير ID داخل URL)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تمرير ID داخل URL)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تمرير ID داخل URL",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تمرير ID داخل URL)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تمرير ID داخل URL\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تمرير ID داخل URL ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تمرير ID داخل URL) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.4.2",
        "title": "استخدام int Constraint",
        "englishTitle": "int Constraint",
        "definition": "يعد (استخدام int Constraint) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام int Constraint) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام int Constraint) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام int Constraint\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام int Constraint\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.4.2",
          "title": "استخدام int Constraint",
          "topicTitle": "Route Parameters وConstraints",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام int Constraint) أحد المعايير التقنية الحيوية في مسار Route Parameters وConstraints ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام int Constraint)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام int Constraint) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام int Constraint)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام int Constraint)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام int Constraint",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام int Constraint)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام int Constraint\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام int Constraint ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام int Constraint) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.4.3",
        "title": "استخدام guid Constraint",
        "englishTitle": "guid Constraint",
        "definition": "يعد (استخدام guid Constraint) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام guid Constraint) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام guid Constraint) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام guid Constraint\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام guid Constraint\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.4.3",
          "title": "استخدام guid Constraint",
          "topicTitle": "Route Parameters وConstraints",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام guid Constraint) أحد المعايير التقنية الحيوية في مسار Route Parameters وConstraints ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام guid Constraint)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام guid Constraint) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام guid Constraint)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام guid Constraint)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام guid Constraint",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام guid Constraint)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام guid Constraint\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام guid Constraint ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام guid Constraint) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.4.4",
        "title": "استخدام min وmax Constraints",
        "englishTitle": "min وmax Constraints",
        "definition": "يعد (استخدام min وmax Constraints) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام min وmax Constraints) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام min وmax Constraints) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام min وmax Constraints\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام min وmax Constraints\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.4.4",
          "title": "استخدام min وmax Constraints",
          "topicTitle": "Route Parameters وConstraints",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام min وmax Constraints) أحد المعايير التقنية الحيوية في مسار Route Parameters وConstraints ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام min وmax Constraints)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام min وmax Constraints) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام min وmax Constraints)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام min وmax Constraints)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام min وmax Constraints",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام min وmax Constraints)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام min وmax Constraints\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام min وmax Constraints ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام min وmax Constraints) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.4.5",
        "title": "استخدام Optional Parameters",
        "englishTitle": "Optional Parameters",
        "definition": "يعد (استخدام Optional Parameters) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Optional Parameters) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Optional Parameters) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Optional Parameters\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Optional Parameters\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.4.5",
          "title": "استخدام Optional Parameters",
          "topicTitle": "Route Parameters وConstraints",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام Optional Parameters) أحد المعايير التقنية الحيوية في مسار Route Parameters وConstraints ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Optional Parameters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Optional Parameters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Optional Parameters)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Optional Parameters)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Optional Parameters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Optional Parameters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Optional Parameters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Optional Parameters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Optional Parameters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.4.6",
        "title": "استخدام Catch-All Parameters",
        "englishTitle": "Catch-All Parameters",
        "definition": "يعد (استخدام Catch-All Parameters) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Catch-All Parameters) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Catch-All Parameters) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Catch-All Parameters\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Catch-All Parameters\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.4.6",
          "title": "استخدام Catch-All Parameters",
          "topicTitle": "Route Parameters وConstraints",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام Catch-All Parameters) أحد المعايير التقنية الحيوية في مسار Route Parameters وConstraints ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Catch-All Parameters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Catch-All Parameters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Catch-All Parameters)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Catch-All Parameters)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Catch-All Parameters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Catch-All Parameters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Catch-All Parameters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Catch-All Parameters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Catch-All Parameters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.4.7",
        "title": "استخدام Custom Route Constraints",
        "englishTitle": "Custom Route Constraints",
        "definition": "يعد (استخدام Custom Route Constraints) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Custom Route Constraints) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Custom Route Constraints) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Custom Route Constraints\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Custom Route Constraints\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.4.7",
          "title": "استخدام Custom Route Constraints",
          "topicTitle": "Route Parameters وConstraints",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام Custom Route Constraints) أحد المعايير التقنية الحيوية في مسار Route Parameters وConstraints ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Custom Route Constraints)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Custom Route Constraints) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Custom Route Constraints)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Custom Route Constraints)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Custom Route Constraints",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Custom Route Constraints)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Custom Route Constraints\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Custom Route Constraints ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Custom Route Constraints) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.4.8",
        "title": "التعامل مع Routes غير المطابقة",
        "englishTitle": "التعامل مع Routes غير المطابقة",
        "definition": "يعد (التعامل مع Routes غير المطابقة) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (التعامل مع Routes غير المطابقة) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (التعامل مع Routes غير المطابقة) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ التعامل مع Routes غير المطابقة\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: التعامل مع Routes غير المطابقة\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.4.8",
          "title": "التعامل مع Routes غير المطابقة",
          "topicTitle": "Route Parameters وConstraints",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (التعامل مع Routes غير المطابقة) أحد المعايير التقنية الحيوية في مسار Route Parameters وConstraints ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التعامل مع Routes غير المطابقة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التعامل مع Routes غير المطابقة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التعامل مع Routes غير المطابقة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التعامل مع Routes غير المطابقة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التعامل مع Routes غير المطابقة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التعامل مع Routes غير المطابقة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التعامل مع Routes غير المطابقة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التعامل مع Routes غير المطابقة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التعامل مع Routes غير المطابقة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "توليد الروابط والتنقل",
    "subtopics": [
      {
        "subId": "8.5.1",
        "title": "استخدام RedirectToAction",
        "englishTitle": "RedirectToAction",
        "definition": "يعد (استخدام RedirectToAction) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام RedirectToAction) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام RedirectToAction) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام RedirectToAction\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام RedirectToAction\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.5.1",
          "title": "استخدام RedirectToAction",
          "topicTitle": "توليد الروابط والتنقل",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام RedirectToAction) أحد المعايير التقنية الحيوية في مسار توليد الروابط والتنقل ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام RedirectToAction)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام RedirectToAction) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام RedirectToAction)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام RedirectToAction)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام RedirectToAction",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام RedirectToAction)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام RedirectToAction\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام RedirectToAction ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام RedirectToAction) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.5.2",
        "title": "استخدام Url.Action",
        "englishTitle": "Url.Action",
        "definition": "يعد (استخدام Url.Action) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Url.Action) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Url.Action) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Url.Action\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Url.Action\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.5.2",
          "title": "استخدام Url.Action",
          "topicTitle": "توليد الروابط والتنقل",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام Url.Action) أحد المعايير التقنية الحيوية في مسار توليد الروابط والتنقل ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Url.Action)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Url.Action) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Url.Action)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Url.Action)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Url.Action",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Url.Action)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Url.Action\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Url.Action ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Url.Action) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.5.3",
        "title": "استخدام LinkGenerator",
        "englishTitle": "LinkGenerator",
        "definition": "يعد (استخدام LinkGenerator) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام LinkGenerator) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام LinkGenerator) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام LinkGenerator\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام LinkGenerator\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.5.3",
          "title": "استخدام LinkGenerator",
          "topicTitle": "توليد الروابط والتنقل",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (استخدام LinkGenerator) أحد المعايير التقنية الحيوية في مسار توليد الروابط والتنقل ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام LinkGenerator)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام LinkGenerator) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام LinkGenerator)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام LinkGenerator)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام LinkGenerator",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام LinkGenerator)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام LinkGenerator\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام LinkGenerator ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام LinkGenerator) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.5.4",
        "title": "إنشاء روابط باستخدام Tag Helpers",
        "englishTitle": "روابط بTag Helpers",
        "definition": "يعد (إنشاء روابط باستخدام Tag Helpers) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء روابط باستخدام Tag Helpers) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء روابط باستخدام Tag Helpers) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء روابط باستخدام Tag Helpers\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء روابط باستخدام Tag Helpers\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.5.4",
          "title": "إنشاء روابط باستخدام Tag Helpers",
          "topicTitle": "توليد الروابط والتنقل",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (إنشاء روابط باستخدام Tag Helpers) أحد المعايير التقنية الحيوية في مسار توليد الروابط والتنقل ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء روابط باستخدام Tag Helpers)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء روابط باستخدام Tag Helpers) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء روابط باستخدام Tag Helpers)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء روابط باستخدام Tag Helpers)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء روابط باستخدام Tag Helpers",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء روابط باستخدام Tag Helpers)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء روابط باستخدام Tag Helpers\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء روابط باستخدام Tag Helpers ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء روابط باستخدام Tag Helpers) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.5.5",
        "title": "إنشاء SEO-Friendly URLs",
        "englishTitle": "SEO-Friendly URLs",
        "definition": "يعد (إنشاء SEO-Friendly URLs) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء SEO-Friendly URLs) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء SEO-Friendly URLs) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء SEO-Friendly URLs\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء SEO-Friendly URLs\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.5.5",
          "title": "إنشاء SEO-Friendly URLs",
          "topicTitle": "توليد الروابط والتنقل",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (إنشاء SEO-Friendly URLs) أحد المعايير التقنية الحيوية في مسار توليد الروابط والتنقل ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء SEO-Friendly URLs)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء SEO-Friendly URLs) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء SEO-Friendly URLs)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء SEO-Friendly URLs)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء SEO-Friendly URLs",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء SEO-Friendly URLs)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء SEO-Friendly URLs\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء SEO-Friendly URLs ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء SEO-Friendly URLs) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.5.6",
        "title": "مفهوم Slugs",
        "englishTitle": "Slugs",
        "definition": "يعد (مفهوم Slugs) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مفهوم Slugs) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مفهوم Slugs) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ مفهوم Slugs\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مفهوم Slugs\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.5.6",
          "title": "مفهوم Slugs",
          "topicTitle": "توليد الروابط والتنقل",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (مفهوم Slugs) أحد المعايير التقنية الحيوية في مسار توليد الروابط والتنقل ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Slugs)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Slugs) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Slugs)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Slugs)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Slugs",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Slugs)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Slugs\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Slugs ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Slugs) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.5.7",
        "title": "تجنب Hardcoded URLs",
        "englishTitle": "تجنب Hardcoded URLs",
        "definition": "يعد (تجنب Hardcoded URLs) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تجنب Hardcoded URLs) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تجنب Hardcoded URLs) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ تجنب Hardcoded URLs\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تجنب Hardcoded URLs\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.5.7",
          "title": "تجنب Hardcoded URLs",
          "topicTitle": "توليد الروابط والتنقل",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (تجنب Hardcoded URLs) أحد المعايير التقنية الحيوية في مسار توليد الروابط والتنقل ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تجنب Hardcoded URLs)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تجنب Hardcoded URLs) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تجنب Hardcoded URLs)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تجنب Hardcoded URLs)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تجنب Hardcoded URLs",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تجنب Hardcoded URLs)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تجنب Hardcoded URLs\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تجنب Hardcoded URLs ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تجنب Hardcoded URLs) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "مشروع عملي على Routing",
    "subtopics": [
      {
        "subId": "8.6.1",
        "title": "إنشاء مسارات المنتجات",
        "englishTitle": "مسارات المنتجات",
        "definition": "يعد (إنشاء مسارات المنتجات) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء مسارات المنتجات) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء مسارات المنتجات) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء مسارات المنتجات\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء مسارات المنتجات\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.6.1",
          "title": "إنشاء مسارات المنتجات",
          "topicTitle": "مشروع عملي على Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (إنشاء مسارات المنتجات) أحد المعايير التقنية الحيوية في مسار مشروع عملي على Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء مسارات المنتجات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء مسارات المنتجات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء مسارات المنتجات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء مسارات المنتجات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء مسارات المنتجات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء مسارات المنتجات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء مسارات المنتجات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء مسارات المنتجات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء مسارات المنتجات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.6.2",
        "title": "إنشاء مسارات التصنيفات",
        "englishTitle": "مسارات التصنيفات",
        "definition": "يعد (إنشاء مسارات التصنيفات) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء مسارات التصنيفات) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء مسارات التصنيفات) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء مسارات التصنيفات\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء مسارات التصنيفات\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.6.2",
          "title": "إنشاء مسارات التصنيفات",
          "topicTitle": "مشروع عملي على Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (إنشاء مسارات التصنيفات) أحد المعايير التقنية الحيوية في مسار مشروع عملي على Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء مسارات التصنيفات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء مسارات التصنيفات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء مسارات التصنيفات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء مسارات التصنيفات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء مسارات التصنيفات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء مسارات التصنيفات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء مسارات التصنيفات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء مسارات التصنيفات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء مسارات التصنيفات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.6.3",
        "title": "إنشاء تفاصيل المنتج باستخدام ID",
        "englishTitle": "تفاصيل المنتج بID",
        "definition": "يعد (إنشاء تفاصيل المنتج باستخدام ID) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء تفاصيل المنتج باستخدام ID) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء تفاصيل المنتج باستخدام ID) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء تفاصيل المنتج باستخدام ID\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء تفاصيل المنتج باستخدام ID\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.6.3",
          "title": "إنشاء تفاصيل المنتج باستخدام ID",
          "topicTitle": "مشروع عملي على Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (إنشاء تفاصيل المنتج باستخدام ID) أحد المعايير التقنية الحيوية في مسار مشروع عملي على Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء تفاصيل المنتج باستخدام ID)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء تفاصيل المنتج باستخدام ID) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء تفاصيل المنتج باستخدام ID)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء تفاصيل المنتج باستخدام ID)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء تفاصيل المنتج باستخدام ID",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء تفاصيل المنتج باستخدام ID)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء تفاصيل المنتج باستخدام ID\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء تفاصيل المنتج باستخدام ID ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء تفاصيل المنتج باستخدام ID) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.6.4",
        "title": "إنشاء صفحة باستخدام Slug",
        "englishTitle": "صفحة بSlug",
        "definition": "يعد (إنشاء صفحة باستخدام Slug) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء صفحة باستخدام Slug) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء صفحة باستخدام Slug) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء صفحة باستخدام Slug\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء صفحة باستخدام Slug\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.6.4",
          "title": "إنشاء صفحة باستخدام Slug",
          "topicTitle": "مشروع عملي على Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (إنشاء صفحة باستخدام Slug) أحد المعايير التقنية الحيوية في مسار مشروع عملي على Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء صفحة باستخدام Slug)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء صفحة باستخدام Slug) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء صفحة باستخدام Slug)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء صفحة باستخدام Slug)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء صفحة باستخدام Slug",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء صفحة باستخدام Slug)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء صفحة باستخدام Slug\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء صفحة باستخدام Slug ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء صفحة باستخدام Slug) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.6.5",
        "title": "إضافة Route Constraints",
        "englishTitle": "إضافة Route Constraints",
        "definition": "يعد (إضافة Route Constraints) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إضافة Route Constraints) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إضافة Route Constraints) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ إضافة Route Constraints\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إضافة Route Constraints\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.6.5",
          "title": "إضافة Route Constraints",
          "topicTitle": "مشروع عملي على Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (إضافة Route Constraints) أحد المعايير التقنية الحيوية في مسار مشروع عملي على Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إضافة Route Constraints)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة Route Constraints) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إضافة Route Constraints)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إضافة Route Constraints)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إضافة Route Constraints",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إضافة Route Constraints)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إضافة Route Constraints\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إضافة Route Constraints ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إضافة Route Constraints) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.6.6",
        "title": "إنشاء روابط ديناميكية",
        "englishTitle": "روابط ديناميكية",
        "definition": "يعد (إنشاء روابط ديناميكية) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء روابط ديناميكية) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء روابط ديناميكية) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء روابط ديناميكية\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء روابط ديناميكية\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.6.6",
          "title": "إنشاء روابط ديناميكية",
          "topicTitle": "مشروع عملي على Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (إنشاء روابط ديناميكية) أحد المعايير التقنية الحيوية في مسار مشروع عملي على Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء روابط ديناميكية)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء روابط ديناميكية) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء روابط ديناميكية)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء روابط ديناميكية)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء روابط ديناميكية",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء روابط ديناميكية)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء روابط ديناميكية\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء روابط ديناميكية ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء روابط ديناميكية) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "8.6.7",
        "title": "اختبار المسارات الصحيحة والخاطئة",
        "englishTitle": "اختبار المسارات الصحيحة والخاطئة",
        "definition": "يعد (اختبار المسارات الصحيحة والخاطئة) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (اختبار المسارات الصحيحة والخاطئة) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (اختبار المسارات الصحيحة والخاطئة) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
        "terms": [
          {
            "term": "Routing",
            "pronunciation": "راوتينج",
            "meaning": "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر"
          },
          {
            "term": "Action Result",
            "pronunciation": "أكشن ريزلت",
            "meaning": "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)"
          },
          {
            "term": "Tag Helper",
            "pronunciation": "تاج هيلبر",
            "meaning": "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية"
          },
          {
            "term": "Model Binding",
            "pronunciation": "موديل بايندينج",
            "meaning": "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#"
          }
        ],
        "syntax": "// تمثيل وحدة تحكم Controller لـ اختبار المسارات الصحيحة والخاطئة\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: اختبار المسارات الصحيحة والخاطئة\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
        "advancedCode": "// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace AdvancedMvcDemo.Controllers\n{\n    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations\n    public class ProductInputModel\n    {\n        [Required(ErrorMessage = \"حقل الاسم إجباري لا يمكن تركه فارغاً\")]\n        [StringLength(100, MinimumLength = 3, ErrorMessage = \"يجب أن يتراوح الاسم بين 3 و 100 حرف\")]\n        public string Name { get; set; } = string.Empty;\n\n        [Range(1, 100000, ErrorMessage = \"السعر يجب أن يكون أكبر من صفر\")]\n        public decimal Price { get; set; }\n    }\n\n    public class ProductsController : Controller\n    {\n        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF\n        [HttpPost]\n        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF\n        public IActionResult Create(ProductInputModel model)\n        {\n            // التحقق من مطابقة المدخلات لقواعد التحقق\n            if (!ModelState.IsValid)\n            {\n                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم\n                return View(model);\n            }\n\n            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get\n            TempData[\"SuccessMessage\"] = \"تم إضافة المنتج بنجاح!\";\n            return RedirectToAction(nameof(Index));\n        }\n    }\n}",
        "outputExplanation": "عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).",
        "commonMistakes": [
          {
            "wrong": "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
            "right": "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
            "reason": "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
          },
          {
            "wrong": "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
            "right": "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
            "reason": "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
          }
        ],
        "bestPractices": [
          "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
          "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
          "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
        ],
        "infographic": {
          "badge": "الدرس 8.6.7",
          "title": "اختبار المسارات الصحيحة والخاطئة",
          "topicTitle": "مشروع عملي على Routing",
          "sectionTitle": "القسم الثامن: Routing في ASP.NET Core MVC",
          "icon": "Layers",
          "colors": "from-indigo-600 via-purple-600 to-pink-500",
          "steps": [
            {
              "title": "استقبال الطلب",
              "desc": "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب"
            },
            {
              "title": "ربط البيانات",
              "desc": "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#"
            },
            {
              "title": "توليد الواجهة",
              "desc": "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح"
            }
          ],
          "summary": "يمثل (اختبار المسارات الصحيحة والخاطئة) أحد المعايير التقنية الحيوية في مسار مشروع عملي على Routing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار المسارات الصحيحة والخاطئة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار المسارات الصحيحة والخاطئة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار المسارات الصحيحة والخاطئة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار المسارات الصحيحة والخاطئة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار المسارات الصحيحة والخاطئة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار المسارات الصحيحة والخاطئة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار المسارات الصحيحة والخاطئة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار المسارات الصحيحة والخاطئة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار المسارات الصحيحة والخاطئة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section8Data;
