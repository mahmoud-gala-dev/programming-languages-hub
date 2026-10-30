// src/data/sections/section13.js
// محتوى تعليمي مفصل وشامل لـ: القسم الثالث عشر: Layouts وPartial Views وTag Helpers
export const section13Data = {
  id: 13,
  title: "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
  englishTitle: "Layouts, Partial Views & Tag Helpers",
  icon: "LayoutTemplate",
  category: "ASP.NET Core MVC",
  description: "تصميم القوالب العامة Layouts، إعادة استخدام أجزاء الواجهة Partial Views، استخدام Tag Helpers وبناء View Components المخصصة.",
  summary: {
  "sectionId": 13,
  "title": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
  "englishTitle": "Layouts, Partial Views & Tag Helpers",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم الثالث عشر: Layouts وPartial Views وTag Helpers.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
    "title": "Layouts",
    "subtopics": [
      {
        "subId": "13.1.1",
        "title": "ما هو Layout؟",
        "englishTitle": "Layout",
        "definition": "يعد (ما هو Layout؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هو Layout؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هو Layout؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هو Layout؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هو Layout؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.1.1",
          "title": "ما هو Layout؟",
          "topicTitle": "Layouts",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (ما هو Layout؟) أحد المعايير التقنية الحيوية في مسار Layouts ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Layout؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Layout؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Layout؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Layout؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Layout؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Layout؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Layout؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Layout؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Layout؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.1.2",
        "title": "إنشاء _Layout.cshtml",
        "englishTitle": "_Layout.cshtml",
        "definition": "يعد (إنشاء _Layout.cshtml) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء _Layout.cshtml) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء _Layout.cshtml) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء _Layout.cshtml\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء _Layout.cshtml\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.1.2",
          "title": "إنشاء _Layout.cshtml",
          "topicTitle": "Layouts",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (إنشاء _Layout.cshtml) أحد المعايير التقنية الحيوية في مسار Layouts ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء _Layout.cshtml)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء _Layout.cshtml) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء _Layout.cshtml)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء _Layout.cshtml)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء _Layout.cshtml",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء _Layout.cshtml)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء _Layout.cshtml\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء _Layout.cshtml ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء _Layout.cshtml) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.1.3",
        "title": "استخدام RenderBody",
        "englishTitle": "RenderBody",
        "definition": "يعد (استخدام RenderBody) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام RenderBody) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام RenderBody) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام RenderBody\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام RenderBody\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.1.3",
          "title": "استخدام RenderBody",
          "topicTitle": "Layouts",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام RenderBody) أحد المعايير التقنية الحيوية في مسار Layouts ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام RenderBody)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام RenderBody) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام RenderBody)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام RenderBody)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام RenderBody",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام RenderBody)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام RenderBody\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام RenderBody ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام RenderBody) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.1.4",
        "title": "استخدام RenderSection",
        "englishTitle": "RenderSection",
        "definition": "يعد (استخدام RenderSection) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام RenderSection) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام RenderSection) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام RenderSection\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام RenderSection\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.1.4",
          "title": "استخدام RenderSection",
          "topicTitle": "Layouts",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام RenderSection) أحد المعايير التقنية الحيوية في مسار Layouts ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام RenderSection)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام RenderSection) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام RenderSection)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام RenderSection)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام RenderSection",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام RenderSection)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام RenderSection\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام RenderSection ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام RenderSection) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.1.5",
        "title": "استخدام Sections",
        "englishTitle": "Sections",
        "definition": "يعد (استخدام Sections) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Sections) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Sections) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Sections\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Sections\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.1.5",
          "title": "استخدام Sections",
          "topicTitle": "Layouts",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام Sections) أحد المعايير التقنية الحيوية في مسار Layouts ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Sections)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Sections) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Sections)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Sections)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Sections",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Sections)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Sections\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Sections ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Sections) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.1.6",
        "title": "إنشاء Header وFooter مشتركين",
        "englishTitle": "Header وFooter مشتركين",
        "definition": "يعد (إنشاء Header وFooter مشتركين) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Header وFooter مشتركين) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Header وFooter مشتركين) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Header وFooter مشتركين\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Header وFooter مشتركين\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.1.6",
          "title": "إنشاء Header وFooter مشتركين",
          "topicTitle": "Layouts",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (إنشاء Header وFooter مشتركين) أحد المعايير التقنية الحيوية في مسار Layouts ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Header وFooter مشتركين)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Header وFooter مشتركين) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Header وFooter مشتركين)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Header وFooter مشتركين)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Header وFooter مشتركين",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Header وFooter مشتركين)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Header وFooter مشتركين\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Header وFooter مشتركين ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Header وFooter مشتركين) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.1.7",
        "title": "إنشاء Layout خاص بلوحة التحكم",
        "englishTitle": "Layout خاص بلوحة التحكم",
        "definition": "يعد (إنشاء Layout خاص بلوحة التحكم) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Layout خاص بلوحة التحكم) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Layout خاص بلوحة التحكم) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Layout خاص بلوحة التحكم\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Layout خاص بلوحة التحكم\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.1.7",
          "title": "إنشاء Layout خاص بلوحة التحكم",
          "topicTitle": "Layouts",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (إنشاء Layout خاص بلوحة التحكم) أحد المعايير التقنية الحيوية في مسار Layouts ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Layout خاص بلوحة التحكم)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Layout خاص بلوحة التحكم) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Layout خاص بلوحة التحكم)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Layout خاص بلوحة التحكم)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Layout خاص بلوحة التحكم",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Layout خاص بلوحة التحكم)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Layout خاص بلوحة التحكم\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Layout خاص بلوحة التحكم ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Layout خاص بلوحة التحكم) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.1.8",
        "title": "تغيير Layout حسب الصفحة",
        "englishTitle": "تغيير Layout حسب الصفحة",
        "definition": "يعد (تغيير Layout حسب الصفحة) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تغيير Layout حسب الصفحة) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تغيير Layout حسب الصفحة) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ تغيير Layout حسب الصفحة\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تغيير Layout حسب الصفحة\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.1.8",
          "title": "تغيير Layout حسب الصفحة",
          "topicTitle": "Layouts",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (تغيير Layout حسب الصفحة) أحد المعايير التقنية الحيوية في مسار Layouts ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تغيير Layout حسب الصفحة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تغيير Layout حسب الصفحة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تغيير Layout حسب الصفحة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تغيير Layout حسب الصفحة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تغيير Layout حسب الصفحة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تغيير Layout حسب الصفحة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تغيير Layout حسب الصفحة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تغيير Layout حسب الصفحة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تغيير Layout حسب الصفحة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "Partial Views",
    "subtopics": [
      {
        "subId": "13.2.1",
        "title": "ما هي Partial View؟",
        "englishTitle": "Partial View",
        "definition": "يعد (ما هي Partial View؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هي Partial View؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هي Partial View؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هي Partial View؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هي Partial View؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.2.1",
          "title": "ما هي Partial View؟",
          "topicTitle": "Partial Views",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (ما هي Partial View؟) أحد المعايير التقنية الحيوية في مسار Partial Views ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Partial View؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Partial View؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Partial View؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Partial View؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي Partial View؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Partial View؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Partial View؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Partial View؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Partial View؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.2.2",
        "title": "إنشاء Partial View",
        "englishTitle": "Partial View",
        "definition": "يعد (إنشاء Partial View) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Partial View) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Partial View) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Partial View\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Partial View\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.2.2",
          "title": "إنشاء Partial View",
          "topicTitle": "Partial Views",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (إنشاء Partial View) أحد المعايير التقنية الحيوية في مسار Partial Views ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Partial View)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Partial View) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Partial View)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Partial View)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Partial View",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Partial View)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Partial View\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Partial View ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Partial View) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.2.3",
        "title": "استخدام Partial Tag Helper",
        "englishTitle": "Partial Tag Helper",
        "definition": "يعد (استخدام Partial Tag Helper) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Partial Tag Helper) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Partial Tag Helper) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Partial Tag Helper\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Partial Tag Helper\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.2.3",
          "title": "استخدام Partial Tag Helper",
          "topicTitle": "Partial Views",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام Partial Tag Helper) أحد المعايير التقنية الحيوية في مسار Partial Views ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Partial Tag Helper)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Partial Tag Helper) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Partial Tag Helper)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Partial Tag Helper)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Partial Tag Helper",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Partial Tag Helper)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Partial Tag Helper\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Partial Tag Helper ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Partial Tag Helper) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.2.4",
        "title": "استخدام PartialAsync",
        "englishTitle": "PartialAsync",
        "definition": "يعد (استخدام PartialAsync) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام PartialAsync) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام PartialAsync) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام PartialAsync\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام PartialAsync\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.2.4",
          "title": "استخدام PartialAsync",
          "topicTitle": "Partial Views",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام PartialAsync) أحد المعايير التقنية الحيوية في مسار Partial Views ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام PartialAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام PartialAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام PartialAsync)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام PartialAsync)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام PartialAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام PartialAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام PartialAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام PartialAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام PartialAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.2.5",
        "title": "تمرير Model إلى Partial View",
        "englishTitle": "تمرير Model إلى Partial View",
        "definition": "يعد (تمرير Model إلى Partial View) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تمرير Model إلى Partial View) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تمرير Model إلى Partial View) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ تمرير Model إلى Partial View\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تمرير Model إلى Partial View\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.2.5",
          "title": "تمرير Model إلى Partial View",
          "topicTitle": "Partial Views",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (تمرير Model إلى Partial View) أحد المعايير التقنية الحيوية في مسار Partial Views ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تمرير Model إلى Partial View)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تمرير Model إلى Partial View) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تمرير Model إلى Partial View)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تمرير Model إلى Partial View)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تمرير Model إلى Partial View",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تمرير Model إلى Partial View)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تمرير Model إلى Partial View\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تمرير Model إلى Partial View ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تمرير Model إلى Partial View) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.2.6",
        "title": "إنشاء Product Card قابلة لإعادة الاستخدام",
        "englishTitle": "Product Card قابلة لإعادة الاستخدام",
        "definition": "يعد (إنشاء Product Card قابلة لإعادة الاستخدام) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Product Card قابلة لإعادة الاستخدام) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Product Card قابلة لإعادة الاستخدام) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Product Card قابلة لإعادة الاستخدام\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Product Card قابلة لإعادة الاستخدام\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.2.6",
          "title": "إنشاء Product Card قابلة لإعادة الاستخدام",
          "topicTitle": "Partial Views",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (إنشاء Product Card قابلة لإعادة الاستخدام) أحد المعايير التقنية الحيوية في مسار Partial Views ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Product Card قابلة لإعادة الاستخدام)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Product Card قابلة لإعادة الاستخدام) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Product Card قابلة لإعادة الاستخدام)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Product Card قابلة لإعادة الاستخدام)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Product Card قابلة لإعادة الاستخدام",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Product Card قابلة لإعادة الاستخدام)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Product Card قابلة لإعادة الاستخدام\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Product Card قابلة لإعادة الاستخدام ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Product Card قابلة لإعادة الاستخدام) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.2.7",
        "title": "الفرق بين Partial View وLayout",
        "englishTitle": "Partial View وLayout",
        "definition": "يعد (الفرق بين Partial View وLayout) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الفرق بين Partial View وLayout) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الفرق بين Partial View وLayout) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ الفرق بين Partial View وLayout\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الفرق بين Partial View وLayout\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.2.7",
          "title": "الفرق بين Partial View وLayout",
          "topicTitle": "Partial Views",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (الفرق بين Partial View وLayout) أحد المعايير التقنية الحيوية في مسار Partial Views ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Partial View وLayout)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Partial View وLayout) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Partial View وLayout)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Partial View وLayout)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Partial View وLayout",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Partial View وLayout)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Partial View وLayout\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Partial View وLayout ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Partial View وLayout) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.2.8",
        "title": "متى نستخدم Partial Views؟",
        "englishTitle": "متى نستخدم Partial Views",
        "definition": "يعد (متى نستخدم Partial Views؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (متى نستخدم Partial Views؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (متى نستخدم Partial Views؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ متى نستخدم Partial Views؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: متى نستخدم Partial Views؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.2.8",
          "title": "متى نستخدم Partial Views؟",
          "topicTitle": "Partial Views",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (متى نستخدم Partial Views؟) أحد المعايير التقنية الحيوية في مسار Partial Views ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (متى نستخدم Partial Views؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (متى نستخدم Partial Views؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (متى نستخدم Partial Views؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (متى نستخدم Partial Views؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: متى نستخدم Partial Views؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (متى نستخدم Partial Views؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين متى نستخدم Partial Views؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: متى نستخدم Partial Views؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (متى نستخدم Partial Views؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Tag Helpers الأساسية",
    "subtopics": [
      {
        "subId": "13.3.1",
        "title": "ما هي Tag Helpers؟",
        "englishTitle": "Tag Helpers",
        "definition": "يعد (ما هي Tag Helpers؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هي Tag Helpers؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هي Tag Helpers؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هي Tag Helpers؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هي Tag Helpers؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.3.1",
          "title": "ما هي Tag Helpers؟",
          "topicTitle": "Tag Helpers الأساسية",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (ما هي Tag Helpers؟) أحد المعايير التقنية الحيوية في مسار Tag Helpers الأساسية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Tag Helpers؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Tag Helpers؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Tag Helpers؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Tag Helpers؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي Tag Helpers؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Tag Helpers؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Tag Helpers؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Tag Helpers؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Tag Helpers؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.3.2",
        "title": "استخدام asp-controller",
        "englishTitle": "asp-controller",
        "definition": "يعد (استخدام asp-controller) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام asp-controller) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام asp-controller) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام asp-controller\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام asp-controller\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.3.2",
          "title": "استخدام asp-controller",
          "topicTitle": "Tag Helpers الأساسية",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام asp-controller) أحد المعايير التقنية الحيوية في مسار Tag Helpers الأساسية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام asp-controller)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام asp-controller) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام asp-controller)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام asp-controller)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام asp-controller",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام asp-controller)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام asp-controller\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام asp-controller ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام asp-controller) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.3.3",
        "title": "استخدام asp-action",
        "englishTitle": "asp-action",
        "definition": "يعد (استخدام asp-action) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام asp-action) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام asp-action) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام asp-action\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام asp-action\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.3.3",
          "title": "استخدام asp-action",
          "topicTitle": "Tag Helpers الأساسية",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام asp-action) أحد المعايير التقنية الحيوية في مسار Tag Helpers الأساسية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام asp-action)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام asp-action) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام asp-action)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام asp-action)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام asp-action",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام asp-action)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام asp-action\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام asp-action ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام asp-action) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.3.4",
        "title": "استخدام asp-route-id",
        "englishTitle": "asp-route-id",
        "definition": "يعد (استخدام asp-route-id) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام asp-route-id) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام asp-route-id) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام asp-route-id\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام asp-route-id\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.3.4",
          "title": "استخدام asp-route-id",
          "topicTitle": "Tag Helpers الأساسية",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام asp-route-id) أحد المعايير التقنية الحيوية في مسار Tag Helpers الأساسية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام asp-route-id)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام asp-route-id) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام asp-route-id)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام asp-route-id)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام asp-route-id",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام asp-route-id)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام asp-route-id\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام asp-route-id ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام asp-route-id) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.3.5",
        "title": "استخدام asp-for",
        "englishTitle": "asp-for",
        "definition": "يعد (استخدام asp-for) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام asp-for) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام asp-for) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام asp-for\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام asp-for\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.3.5",
          "title": "استخدام asp-for",
          "topicTitle": "Tag Helpers الأساسية",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام asp-for) أحد المعايير التقنية الحيوية في مسار Tag Helpers الأساسية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام asp-for)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام asp-for) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام asp-for)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام asp-for)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام asp-for",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام asp-for)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام asp-for\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام asp-for ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام asp-for) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.3.6",
        "title": "استخدام asp-items",
        "englishTitle": "asp-items",
        "definition": "يعد (استخدام asp-items) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام asp-items) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام asp-items) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام asp-items\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام asp-items\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.3.6",
          "title": "استخدام asp-items",
          "topicTitle": "Tag Helpers الأساسية",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام asp-items) أحد المعايير التقنية الحيوية في مسار Tag Helpers الأساسية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام asp-items)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام asp-items) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام asp-items)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام asp-items)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام asp-items",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام asp-items)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام asp-items\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام asp-items ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام asp-items) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.3.7",
        "title": "استخدام asp-validation-for",
        "englishTitle": "asp-validation-for",
        "definition": "يعد (استخدام asp-validation-for) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام asp-validation-for) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام asp-validation-for) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام asp-validation-for\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام asp-validation-for\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.3.7",
          "title": "استخدام asp-validation-for",
          "topicTitle": "Tag Helpers الأساسية",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام asp-validation-for) أحد المعايير التقنية الحيوية في مسار Tag Helpers الأساسية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام asp-validation-for)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام asp-validation-for) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام asp-validation-for)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام asp-validation-for)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام asp-validation-for",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام asp-validation-for)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام asp-validation-for\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام asp-validation-for ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام asp-validation-for) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.3.8",
        "title": "استخدام asp-validation-summary",
        "englishTitle": "asp-validation-summary",
        "definition": "يعد (استخدام asp-validation-summary) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام asp-validation-summary) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام asp-validation-summary) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام asp-validation-summary\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام asp-validation-summary\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.3.8",
          "title": "استخدام asp-validation-summary",
          "topicTitle": "Tag Helpers الأساسية",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام asp-validation-summary) أحد المعايير التقنية الحيوية في مسار Tag Helpers الأساسية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام asp-validation-summary)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام asp-validation-summary) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام asp-validation-summary)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام asp-validation-summary)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام asp-validation-summary",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام asp-validation-summary)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام asp-validation-summary\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام asp-validation-summary ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام asp-validation-summary) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.3.9",
        "title": "استخدام Environment Tag Helper",
        "englishTitle": "Environment Tag Helper",
        "definition": "يعد (استخدام Environment Tag Helper) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Environment Tag Helper) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Environment Tag Helper) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Environment Tag Helper\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Environment Tag Helper\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.3.9",
          "title": "استخدام Environment Tag Helper",
          "topicTitle": "Tag Helpers الأساسية",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام Environment Tag Helper) أحد المعايير التقنية الحيوية في مسار Tag Helpers الأساسية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Environment Tag Helper)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Environment Tag Helper) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Environment Tag Helper)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Environment Tag Helper)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Environment Tag Helper",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Environment Tag Helper)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Environment Tag Helper\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Environment Tag Helper ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Environment Tag Helper) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "HTML Helpers",
    "subtopics": [
      {
        "subId": "13.4.1",
        "title": "ما هي HTML Helpers؟",
        "englishTitle": "HTML Helpers",
        "definition": "يعد (ما هي HTML Helpers؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هي HTML Helpers؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هي HTML Helpers؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هي HTML Helpers؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هي HTML Helpers؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.4.1",
          "title": "ما هي HTML Helpers؟",
          "topicTitle": "HTML Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (ما هي HTML Helpers؟) أحد المعايير التقنية الحيوية في مسار HTML Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي HTML Helpers؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي HTML Helpers؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي HTML Helpers؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي HTML Helpers؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي HTML Helpers؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي HTML Helpers؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي HTML Helpers؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي HTML Helpers؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي HTML Helpers؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.4.2",
        "title": "استخدام Html.DisplayFor",
        "englishTitle": "Html.DisplayFor",
        "definition": "يعد (استخدام Html.DisplayFor) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Html.DisplayFor) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Html.DisplayFor) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Html.DisplayFor\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Html.DisplayFor\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.4.2",
          "title": "استخدام Html.DisplayFor",
          "topicTitle": "HTML Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام Html.DisplayFor) أحد المعايير التقنية الحيوية في مسار HTML Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Html.DisplayFor)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Html.DisplayFor) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Html.DisplayFor)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Html.DisplayFor)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Html.DisplayFor",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Html.DisplayFor)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Html.DisplayFor\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Html.DisplayFor ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Html.DisplayFor) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.4.3",
        "title": "استخدام Html.EditorFor",
        "englishTitle": "Html.EditorFor",
        "definition": "يعد (استخدام Html.EditorFor) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Html.EditorFor) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Html.EditorFor) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Html.EditorFor\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Html.EditorFor\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.4.3",
          "title": "استخدام Html.EditorFor",
          "topicTitle": "HTML Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام Html.EditorFor) أحد المعايير التقنية الحيوية في مسار HTML Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Html.EditorFor)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Html.EditorFor) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Html.EditorFor)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Html.EditorFor)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Html.EditorFor",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Html.EditorFor)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Html.EditorFor\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Html.EditorFor ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Html.EditorFor) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.4.4",
        "title": "استخدام Html.TextBoxFor",
        "englishTitle": "Html.TextBoxFor",
        "definition": "يعد (استخدام Html.TextBoxFor) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Html.TextBoxFor) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Html.TextBoxFor) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Html.TextBoxFor\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Html.TextBoxFor\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.4.4",
          "title": "استخدام Html.TextBoxFor",
          "topicTitle": "HTML Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام Html.TextBoxFor) أحد المعايير التقنية الحيوية في مسار HTML Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Html.TextBoxFor)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Html.TextBoxFor) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Html.TextBoxFor)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Html.TextBoxFor)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Html.TextBoxFor",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Html.TextBoxFor)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Html.TextBoxFor\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Html.TextBoxFor ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Html.TextBoxFor) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.4.5",
        "title": "استخدام Html.LabelFor",
        "englishTitle": "Html.LabelFor",
        "definition": "يعد (استخدام Html.LabelFor) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Html.LabelFor) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Html.LabelFor) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Html.LabelFor\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Html.LabelFor\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.4.5",
          "title": "استخدام Html.LabelFor",
          "topicTitle": "HTML Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام Html.LabelFor) أحد المعايير التقنية الحيوية في مسار HTML Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Html.LabelFor)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Html.LabelFor) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Html.LabelFor)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Html.LabelFor)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Html.LabelFor",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Html.LabelFor)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Html.LabelFor\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Html.LabelFor ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Html.LabelFor) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.4.6",
        "title": "استخدام Html.ValidationMessageFor",
        "englishTitle": "Html.ValidationMessageFor",
        "definition": "يعد (استخدام Html.ValidationMessageFor) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Html.ValidationMessageFor) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Html.ValidationMessageFor) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Html.ValidationMessageFor\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Html.ValidationMessageFor\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.4.6",
          "title": "استخدام Html.ValidationMessageFor",
          "topicTitle": "HTML Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام Html.ValidationMessageFor) أحد المعايير التقنية الحيوية في مسار HTML Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Html.ValidationMessageFor)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Html.ValidationMessageFor) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Html.ValidationMessageFor)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Html.ValidationMessageFor)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Html.ValidationMessageFor",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Html.ValidationMessageFor)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Html.ValidationMessageFor\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Html.ValidationMessageFor ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Html.ValidationMessageFor) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.4.7",
        "title": "الفرق بين HTML Helpers وTag Helpers",
        "englishTitle": "HTML Helpers وTag Helpers",
        "definition": "يعد (الفرق بين HTML Helpers وTag Helpers) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الفرق بين HTML Helpers وTag Helpers) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الفرق بين HTML Helpers وTag Helpers) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ الفرق بين HTML Helpers وTag Helpers\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الفرق بين HTML Helpers وTag Helpers\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.4.7",
          "title": "الفرق بين HTML Helpers وTag Helpers",
          "topicTitle": "HTML Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (الفرق بين HTML Helpers وTag Helpers) أحد المعايير التقنية الحيوية في مسار HTML Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين HTML Helpers وTag Helpers)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين HTML Helpers وTag Helpers) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين HTML Helpers وTag Helpers)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين HTML Helpers وTag Helpers)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين HTML Helpers وTag Helpers",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين HTML Helpers وTag Helpers)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين HTML Helpers وTag Helpers\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين HTML Helpers وTag Helpers ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين HTML Helpers وTag Helpers) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.4.8",
        "title": "اختيار الأسلوب المناسب لبناء Forms",
        "englishTitle": "اختيار الأسلوب المناسب لبناء Forms",
        "definition": "يعد (اختيار الأسلوب المناسب لبناء Forms) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (اختيار الأسلوب المناسب لبناء Forms) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (اختيار الأسلوب المناسب لبناء Forms) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ اختيار الأسلوب المناسب لبناء Forms\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: اختيار الأسلوب المناسب لبناء Forms\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.4.8",
          "title": "اختيار الأسلوب المناسب لبناء Forms",
          "topicTitle": "HTML Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (اختيار الأسلوب المناسب لبناء Forms) أحد المعايير التقنية الحيوية في مسار HTML Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختيار الأسلوب المناسب لبناء Forms)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختيار الأسلوب المناسب لبناء Forms) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختيار الأسلوب المناسب لبناء Forms)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختيار الأسلوب المناسب لبناء Forms)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختيار الأسلوب المناسب لبناء Forms",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختيار الأسلوب المناسب لبناء Forms)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختيار الأسلوب المناسب لبناء Forms\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختيار الأسلوب المناسب لبناء Forms ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختيار الأسلوب المناسب لبناء Forms) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "View Components",
    "subtopics": [
      {
        "subId": "13.5.1",
        "title": "ما هي View Components؟",
        "englishTitle": "View Components",
        "definition": "يعد (ما هي View Components؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هي View Components؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هي View Components؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هي View Components؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هي View Components؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.5.1",
          "title": "ما هي View Components؟",
          "topicTitle": "View Components",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (ما هي View Components؟) أحد المعايير التقنية الحيوية في مسار View Components ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي View Components؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي View Components؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي View Components؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي View Components؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي View Components؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي View Components؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي View Components؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي View Components؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي View Components؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.5.2",
        "title": "إنشاء ViewComponent",
        "englishTitle": "ViewComponent",
        "definition": "يعد (إنشاء ViewComponent) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء ViewComponent) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء ViewComponent) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء ViewComponent\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء ViewComponent\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.5.2",
          "title": "إنشاء ViewComponent",
          "topicTitle": "View Components",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (إنشاء ViewComponent) أحد المعايير التقنية الحيوية في مسار View Components ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء ViewComponent)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء ViewComponent) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء ViewComponent)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء ViewComponent)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء ViewComponent",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء ViewComponent)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء ViewComponent\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء ViewComponent ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء ViewComponent) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.5.3",
        "title": "استخدام InvokeAsync",
        "englishTitle": "InvokeAsync",
        "definition": "يعد (استخدام InvokeAsync) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام InvokeAsync) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام InvokeAsync) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام InvokeAsync\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام InvokeAsync\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.5.3",
          "title": "استخدام InvokeAsync",
          "topicTitle": "View Components",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام InvokeAsync) أحد المعايير التقنية الحيوية في مسار View Components ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام InvokeAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام InvokeAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام InvokeAsync)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام InvokeAsync)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام InvokeAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام InvokeAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام InvokeAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام InvokeAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام InvokeAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.5.4",
        "title": "إنشاء View خاصة بالمكون",
        "englishTitle": "View خاصة بالمكون",
        "definition": "يعد (إنشاء View خاصة بالمكون) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء View خاصة بالمكون) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء View خاصة بالمكون) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء View خاصة بالمكون\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء View خاصة بالمكون\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.5.4",
          "title": "إنشاء View خاصة بالمكون",
          "topicTitle": "View Components",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (إنشاء View خاصة بالمكون) أحد المعايير التقنية الحيوية في مسار View Components ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء View خاصة بالمكون)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء View خاصة بالمكون) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء View خاصة بالمكون)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء View خاصة بالمكون)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء View خاصة بالمكون",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء View خاصة بالمكون)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء View خاصة بالمكون\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء View خاصة بالمكون ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء View خاصة بالمكون) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.5.5",
        "title": "استخدام Dependency Injection داخل ViewComponent",
        "englishTitle": "Dependency Injection داخل ViewComponent",
        "definition": "يعد (استخدام Dependency Injection داخل ViewComponent) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Dependency Injection داخل ViewComponent) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Dependency Injection داخل ViewComponent) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Dependency Injection داخل ViewComponent\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Dependency Injection داخل ViewComponent\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.5.5",
          "title": "استخدام Dependency Injection داخل ViewComponent",
          "topicTitle": "View Components",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام Dependency Injection داخل ViewComponent) أحد المعايير التقنية الحيوية في مسار View Components ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Dependency Injection داخل ViewComponent)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Dependency Injection داخل ViewComponent) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Dependency Injection داخل ViewComponent)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Dependency Injection داخل ViewComponent)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Dependency Injection داخل ViewComponent",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Dependency Injection داخل ViewComponent)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Dependency Injection داخل ViewComponent\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Dependency Injection داخل ViewComponent ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Dependency Injection داخل ViewComponent) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.5.6",
        "title": "إنشاء ShoppingCart ViewComponent",
        "englishTitle": "ShoppingCart ViewComponent",
        "definition": "يعد (إنشاء ShoppingCart ViewComponent) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء ShoppingCart ViewComponent) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء ShoppingCart ViewComponent) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء ShoppingCart ViewComponent\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء ShoppingCart ViewComponent\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.5.6",
          "title": "إنشاء ShoppingCart ViewComponent",
          "topicTitle": "View Components",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (إنشاء ShoppingCart ViewComponent) أحد المعايير التقنية الحيوية في مسار View Components ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء ShoppingCart ViewComponent)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء ShoppingCart ViewComponent) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء ShoppingCart ViewComponent)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء ShoppingCart ViewComponent)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء ShoppingCart ViewComponent",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء ShoppingCart ViewComponent)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء ShoppingCart ViewComponent\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء ShoppingCart ViewComponent ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء ShoppingCart ViewComponent) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.5.7",
        "title": "إنشاء Categories Menu Component",
        "englishTitle": "Categories Menu Component",
        "definition": "يعد (إنشاء Categories Menu Component) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Categories Menu Component) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Categories Menu Component) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Categories Menu Component\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Categories Menu Component\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.5.7",
          "title": "إنشاء Categories Menu Component",
          "topicTitle": "View Components",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (إنشاء Categories Menu Component) أحد المعايير التقنية الحيوية في مسار View Components ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Categories Menu Component)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Categories Menu Component) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Categories Menu Component)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Categories Menu Component)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Categories Menu Component",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Categories Menu Component)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Categories Menu Component\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Categories Menu Component ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Categories Menu Component) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.5.8",
        "title": "الفرق بين ViewComponent وPartial View",
        "englishTitle": "ViewComponent وPartial View",
        "definition": "يعد (الفرق بين ViewComponent وPartial View) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الفرق بين ViewComponent وPartial View) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الفرق بين ViewComponent وPartial View) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ الفرق بين ViewComponent وPartial View\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الفرق بين ViewComponent وPartial View\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.5.8",
          "title": "الفرق بين ViewComponent وPartial View",
          "topicTitle": "View Components",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (الفرق بين ViewComponent وPartial View) أحد المعايير التقنية الحيوية في مسار View Components ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين ViewComponent وPartial View)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين ViewComponent وPartial View) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين ViewComponent وPartial View)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين ViewComponent وPartial View)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين ViewComponent وPartial View",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين ViewComponent وPartial View)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين ViewComponent وPartial View\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين ViewComponent وPartial View ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين ViewComponent وPartial View) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "Custom Tag Helpers",
    "subtopics": [
      {
        "subId": "13.6.1",
        "title": "إنشاء Tag Helper مخصصة",
        "englishTitle": "Tag Helper مخصصة",
        "definition": "يعد (إنشاء Tag Helper مخصصة) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Tag Helper مخصصة) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Tag Helper مخصصة) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Tag Helper مخصصة\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Tag Helper مخصصة\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.6.1",
          "title": "إنشاء Tag Helper مخصصة",
          "topicTitle": "Custom Tag Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (إنشاء Tag Helper مخصصة) أحد المعايير التقنية الحيوية في مسار Custom Tag Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Tag Helper مخصصة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Tag Helper مخصصة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Tag Helper مخصصة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Tag Helper مخصصة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Tag Helper مخصصة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Tag Helper مخصصة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Tag Helper مخصصة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Tag Helper مخصصة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Tag Helper مخصصة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.6.2",
        "title": "استخدام TagHelper Class",
        "englishTitle": "TagHelper Class",
        "definition": "يعد (استخدام TagHelper Class) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام TagHelper Class) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام TagHelper Class) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام TagHelper Class\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام TagHelper Class\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.6.2",
          "title": "استخدام TagHelper Class",
          "topicTitle": "Custom Tag Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام TagHelper Class) أحد المعايير التقنية الحيوية في مسار Custom Tag Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام TagHelper Class)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام TagHelper Class) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام TagHelper Class)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام TagHelper Class)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام TagHelper Class",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام TagHelper Class)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام TagHelper Class\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام TagHelper Class ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام TagHelper Class) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.6.3",
        "title": "استخدام ProcessAsync",
        "englishTitle": "ProcessAsync",
        "definition": "يعد (استخدام ProcessAsync) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام ProcessAsync) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام ProcessAsync) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام ProcessAsync\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام ProcessAsync\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.6.3",
          "title": "استخدام ProcessAsync",
          "topicTitle": "Custom Tag Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (استخدام ProcessAsync) أحد المعايير التقنية الحيوية في مسار Custom Tag Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ProcessAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ProcessAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ProcessAsync)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ProcessAsync)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام ProcessAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ProcessAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ProcessAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ProcessAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ProcessAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.6.4",
        "title": "إضافة Custom Attributes",
        "englishTitle": "إضافة Custom Attributes",
        "definition": "يعد (إضافة Custom Attributes) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إضافة Custom Attributes) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إضافة Custom Attributes) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إضافة Custom Attributes\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إضافة Custom Attributes\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.6.4",
          "title": "إضافة Custom Attributes",
          "topicTitle": "Custom Tag Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (إضافة Custom Attributes) أحد المعايير التقنية الحيوية في مسار Custom Tag Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إضافة Custom Attributes)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة Custom Attributes) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إضافة Custom Attributes)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إضافة Custom Attributes)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إضافة Custom Attributes",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إضافة Custom Attributes)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إضافة Custom Attributes\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إضافة Custom Attributes ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إضافة Custom Attributes) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.6.5",
        "title": "إنشاء Status Badge Tag Helper",
        "englishTitle": "Status Badge Tag Helper",
        "definition": "يعد (إنشاء Status Badge Tag Helper) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Status Badge Tag Helper) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Status Badge Tag Helper) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Status Badge Tag Helper\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Status Badge Tag Helper\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.6.5",
          "title": "إنشاء Status Badge Tag Helper",
          "topicTitle": "Custom Tag Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (إنشاء Status Badge Tag Helper) أحد المعايير التقنية الحيوية في مسار Custom Tag Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Status Badge Tag Helper)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Status Badge Tag Helper) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Status Badge Tag Helper)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Status Badge Tag Helper)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Status Badge Tag Helper",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Status Badge Tag Helper)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Status Badge Tag Helper\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Status Badge Tag Helper ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Status Badge Tag Helper) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.6.6",
        "title": "إنشاء Pagination Tag Helper",
        "englishTitle": "Pagination Tag Helper",
        "definition": "يعد (إنشاء Pagination Tag Helper) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Pagination Tag Helper) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Pagination Tag Helper) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Pagination Tag Helper\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Pagination Tag Helper\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.6.6",
          "title": "إنشاء Pagination Tag Helper",
          "topicTitle": "Custom Tag Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (إنشاء Pagination Tag Helper) أحد المعايير التقنية الحيوية في مسار Custom Tag Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Pagination Tag Helper)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Pagination Tag Helper) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Pagination Tag Helper)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Pagination Tag Helper)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Pagination Tag Helper",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Pagination Tag Helper)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Pagination Tag Helper\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Pagination Tag Helper ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Pagination Tag Helper) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "13.6.7",
        "title": "تسجيل Tag Helpers داخل المشروع",
        "englishTitle": "تسجيل Tag Helpers داخل المشروع",
        "definition": "يعد (تسجيل Tag Helpers داخل المشروع) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تسجيل Tag Helpers داخل المشروع) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تسجيل Tag Helpers داخل المشروع) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ تسجيل Tag Helpers داخل المشروع\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تسجيل Tag Helpers داخل المشروع\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 13.6.7",
          "title": "تسجيل Tag Helpers داخل المشروع",
          "topicTitle": "Custom Tag Helpers",
          "sectionTitle": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
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
          "summary": "يمثل (تسجيل Tag Helpers داخل المشروع) أحد المعايير التقنية الحيوية في مسار Custom Tag Helpers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تسجيل Tag Helpers داخل المشروع)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تسجيل Tag Helpers داخل المشروع) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تسجيل Tag Helpers داخل المشروع)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تسجيل Tag Helpers داخل المشروع)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تسجيل Tag Helpers داخل المشروع",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تسجيل Tag Helpers داخل المشروع)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تسجيل Tag Helpers داخل المشروع\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تسجيل Tag Helpers داخل المشروع ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تسجيل Tag Helpers داخل المشروع) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section13Data;
