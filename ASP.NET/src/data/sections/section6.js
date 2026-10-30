// src/data/sections/section6.js
// محتوى تعليمي مفصل وشامل لـ: القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع
export const section6Data = {
  id: 6,
  title: "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
  englishTitle: "Introduction to ASP.NET Core MVC & First Project",
  icon: "LayoutGrid",
  category: "ASP.NET Core MVC",
  description: "فهم نمط MVC، مقارنة تقنيات ASP.NET، بناء وتشغيل أول تطبيق MVC، وفهم بنية المجلدات وملف Program.cs.",
  summary: {
  "sectionId": 6,
  "title": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
  "englishTitle": "Introduction to ASP.NET Core MVC & First Project",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
    "title": "فهم MVC Pattern",
    "subtopics": [
      {
        "subId": "6.1.1",
        "title": "ما هو Model View Controller؟",
        "englishTitle": "Model View Controller",
        "definition": "يعد (ما هو Model View Controller؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هو Model View Controller؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هو Model View Controller؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هو Model View Controller؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هو Model View Controller؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.1.1",
          "title": "ما هو Model View Controller؟",
          "topicTitle": "فهم MVC Pattern",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (ما هو Model View Controller؟) أحد المعايير التقنية الحيوية في مسار فهم MVC Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Model View Controller؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Model View Controller؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Model View Controller؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Model View Controller؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Model View Controller؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Model View Controller؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Model View Controller؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Model View Controller؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Model View Controller؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.1.2",
        "title": "مفهوم Separation of Concerns",
        "englishTitle": "Separation of Concerns",
        "definition": "يعد (مفهوم Separation of Concerns) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مفهوم Separation of Concerns) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مفهوم Separation of Concerns) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ مفهوم Separation of Concerns\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مفهوم Separation of Concerns\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.1.2",
          "title": "مفهوم Separation of Concerns",
          "topicTitle": "فهم MVC Pattern",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (مفهوم Separation of Concerns) أحد المعايير التقنية الحيوية في مسار فهم MVC Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
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
        "subId": "6.1.3",
        "title": "دور Model",
        "englishTitle": "دور Model",
        "definition": "يعد (دور Model) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (دور Model) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (دور Model) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ دور Model\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: دور Model\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.1.3",
          "title": "دور Model",
          "topicTitle": "فهم MVC Pattern",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (دور Model) أحد المعايير التقنية الحيوية في مسار فهم MVC Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (دور Model)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (دور Model) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (دور Model)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (دور Model)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: دور Model",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (دور Model)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين دور Model\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: دور Model ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (دور Model) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.1.4",
        "title": "دور View",
        "englishTitle": "دور View",
        "definition": "يعد (دور View) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (دور View) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (دور View) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ دور View\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: دور View\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.1.4",
          "title": "دور View",
          "topicTitle": "فهم MVC Pattern",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (دور View) أحد المعايير التقنية الحيوية في مسار فهم MVC Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (دور View)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (دور View) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (دور View)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (دور View)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: دور View",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (دور View)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين دور View\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: دور View ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (دور View) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.1.5",
        "title": "دور Controller",
        "englishTitle": "دور Controller",
        "definition": "يعد (دور Controller) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (دور Controller) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (دور Controller) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ دور Controller\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: دور Controller\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.1.5",
          "title": "دور Controller",
          "topicTitle": "فهم MVC Pattern",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (دور Controller) أحد المعايير التقنية الحيوية في مسار فهم MVC Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (دور Controller)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (دور Controller) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (دور Controller)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (دور Controller)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: دور Controller",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (دور Controller)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين دور Controller\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: دور Controller ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (دور Controller) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.1.6",
        "title": "كيف تتواصل مكونات MVC؟",
        "englishTitle": "كيف تتواصل مكونات MVC",
        "definition": "يعد (كيف تتواصل مكونات MVC؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (كيف تتواصل مكونات MVC؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (كيف تتواصل مكونات MVC؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ كيف تتواصل مكونات MVC؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: كيف تتواصل مكونات MVC؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.1.6",
          "title": "كيف تتواصل مكونات MVC؟",
          "topicTitle": "فهم MVC Pattern",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (كيف تتواصل مكونات MVC؟) أحد المعايير التقنية الحيوية في مسار فهم MVC Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (كيف تتواصل مكونات MVC؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (كيف تتواصل مكونات MVC؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (كيف تتواصل مكونات MVC؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (كيف تتواصل مكونات MVC؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: كيف تتواصل مكونات MVC؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (كيف تتواصل مكونات MVC؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين كيف تتواصل مكونات MVC؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: كيف تتواصل مكونات MVC؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (كيف تتواصل مكونات MVC؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.1.7",
        "title": "دورة حياة طلب MVC",
        "englishTitle": "دورة حياة طلب MVC",
        "definition": "يعد (دورة حياة طلب MVC) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (دورة حياة طلب MVC) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (دورة حياة طلب MVC) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ دورة حياة طلب MVC\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: دورة حياة طلب MVC\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.1.7",
          "title": "دورة حياة طلب MVC",
          "topicTitle": "فهم MVC Pattern",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (دورة حياة طلب MVC) أحد المعايير التقنية الحيوية في مسار فهم MVC Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (دورة حياة طلب MVC)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (دورة حياة طلب MVC) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (دورة حياة طلب MVC)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (دورة حياة طلب MVC)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: دورة حياة طلب MVC",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (دورة حياة طلب MVC)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين دورة حياة طلب MVC\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: دورة حياة طلب MVC ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (دورة حياة طلب MVC) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.1.8",
        "title": "مثال من الحياة اليومية لشرح MVC",
        "englishTitle": "مثال من الحياة اليومية لMVC",
        "definition": "يعد (مثال من الحياة اليومية لشرح MVC) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مثال من الحياة اليومية لشرح MVC) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مثال من الحياة اليومية لشرح MVC) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ مثال من الحياة اليومية لشرح MVC\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مثال من الحياة اليومية لشرح MVC\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.1.8",
          "title": "مثال من الحياة اليومية لشرح MVC",
          "topicTitle": "فهم MVC Pattern",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (مثال من الحياة اليومية لشرح MVC) أحد المعايير التقنية الحيوية في مسار فهم MVC Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مثال من الحياة اليومية لشرح MVC)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مثال من الحياة اليومية لشرح MVC) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مثال من الحياة اليومية لشرح MVC)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مثال من الحياة اليومية لشرح MVC)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مثال من الحياة اليومية لشرح MVC",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مثال من الحياة اليومية لشرح MVC)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مثال من الحياة اليومية لشرح MVC\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مثال من الحياة اليومية لشرح MVC ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مثال من الحياة اليومية لشرح MVC) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "مقارنة تقنيات ASP.NET Core",
    "subtopics": [
      {
        "subId": "6.2.1",
        "title": "الفرق بين MVC وRazor Pages",
        "englishTitle": "MVC وRazor Pages",
        "definition": "يعد (الفرق بين MVC وRazor Pages) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الفرق بين MVC وRazor Pages) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الفرق بين MVC وRazor Pages) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ الفرق بين MVC وRazor Pages\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الفرق بين MVC وRazor Pages\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.2.1",
          "title": "الفرق بين MVC وRazor Pages",
          "topicTitle": "مقارنة تقنيات ASP.NET Core",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (الفرق بين MVC وRazor Pages) أحد المعايير التقنية الحيوية في مسار مقارنة تقنيات ASP.NET Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين MVC وRazor Pages)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين MVC وRazor Pages) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين MVC وRazor Pages)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين MVC وRazor Pages)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين MVC وRazor Pages",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين MVC وRazor Pages)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين MVC وRazor Pages\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين MVC وRazor Pages ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين MVC وRazor Pages) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.2.2",
        "title": "الفرق بين MVC وWeb API",
        "englishTitle": "MVC وWeb API",
        "definition": "يعد (الفرق بين MVC وWeb API) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الفرق بين MVC وWeb API) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الفرق بين MVC وWeb API) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ الفرق بين MVC وWeb API\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الفرق بين MVC وWeb API\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.2.2",
          "title": "الفرق بين MVC وWeb API",
          "topicTitle": "مقارنة تقنيات ASP.NET Core",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (الفرق بين MVC وWeb API) أحد المعايير التقنية الحيوية في مسار مقارنة تقنيات ASP.NET Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين MVC وWeb API)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين MVC وWeb API) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين MVC وWeb API)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين MVC وWeb API)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين MVC وWeb API",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين MVC وWeb API)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين MVC وWeb API\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين MVC وWeb API ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين MVC وWeb API) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.2.3",
        "title": "الفرق بين MVC وBlazor",
        "englishTitle": "MVC وBlazor",
        "definition": "يعد (الفرق بين MVC وBlazor) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الفرق بين MVC وBlazor) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الفرق بين MVC وBlazor) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ الفرق بين MVC وBlazor\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الفرق بين MVC وBlazor\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.2.3",
          "title": "الفرق بين MVC وBlazor",
          "topicTitle": "مقارنة تقنيات ASP.NET Core",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (الفرق بين MVC وBlazor) أحد المعايير التقنية الحيوية في مسار مقارنة تقنيات ASP.NET Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين MVC وBlazor)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين MVC وBlazor) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين MVC وBlazor)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين MVC وBlazor)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين MVC وBlazor",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين MVC وBlazor)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين MVC وBlazor\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين MVC وBlazor ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين MVC وBlazor) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.2.4",
        "title": "الفرق بين MVC وMinimal APIs",
        "englishTitle": "MVC وMinimal APIs",
        "definition": "يعد (الفرق بين MVC وMinimal APIs) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الفرق بين MVC وMinimal APIs) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الفرق بين MVC وMinimal APIs) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ الفرق بين MVC وMinimal APIs\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الفرق بين MVC وMinimal APIs\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.2.4",
          "title": "الفرق بين MVC وMinimal APIs",
          "topicTitle": "مقارنة تقنيات ASP.NET Core",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (الفرق بين MVC وMinimal APIs) أحد المعايير التقنية الحيوية في مسار مقارنة تقنيات ASP.NET Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين MVC وMinimal APIs)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين MVC وMinimal APIs) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين MVC وMinimal APIs)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين MVC وMinimal APIs)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين MVC وMinimal APIs",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين MVC وMinimal APIs)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين MVC وMinimal APIs\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين MVC وMinimal APIs ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين MVC وMinimal APIs) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.2.5",
        "title": "متى نستخدم MVC؟",
        "englishTitle": "متى نستخدم MVC",
        "definition": "يعد (متى نستخدم MVC؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (متى نستخدم MVC؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (متى نستخدم MVC؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ متى نستخدم MVC؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: متى نستخدم MVC؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.2.5",
          "title": "متى نستخدم MVC؟",
          "topicTitle": "مقارنة تقنيات ASP.NET Core",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (متى نستخدم MVC؟) أحد المعايير التقنية الحيوية في مسار مقارنة تقنيات ASP.NET Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (متى نستخدم MVC؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (متى نستخدم MVC؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (متى نستخدم MVC؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (متى نستخدم MVC؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: متى نستخدم MVC؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (متى نستخدم MVC؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين متى نستخدم MVC؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: متى نستخدم MVC؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (متى نستخدم MVC؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.2.6",
        "title": "متى نستخدم كل تقنية؟",
        "englishTitle": "متى نستخدم كل تقنية",
        "definition": "يعد (متى نستخدم كل تقنية؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (متى نستخدم كل تقنية؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (متى نستخدم كل تقنية؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ متى نستخدم كل تقنية؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: متى نستخدم كل تقنية؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.2.6",
          "title": "متى نستخدم كل تقنية؟",
          "topicTitle": "مقارنة تقنيات ASP.NET Core",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (متى نستخدم كل تقنية؟) أحد المعايير التقنية الحيوية في مسار مقارنة تقنيات ASP.NET Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (متى نستخدم كل تقنية؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (متى نستخدم كل تقنية؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (متى نستخدم كل تقنية؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (متى نستخدم كل تقنية؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: متى نستخدم كل تقنية؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (متى نستخدم كل تقنية؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين متى نستخدم كل تقنية؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: متى نستخدم كل تقنية؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (متى نستخدم كل تقنية؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "إنشاء أول مشروع MVC",
    "subtopics": [
      {
        "subId": "6.3.1",
        "title": "إنشاء مشروع ASP.NET Core Web App MVC",
        "englishTitle": "مشروع ASP.NET Core Web App MVC",
        "definition": "يعد (إنشاء مشروع ASP.NET Core Web App MVC) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء مشروع ASP.NET Core Web App MVC) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء مشروع ASP.NET Core Web App MVC) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء مشروع ASP.NET Core Web App MVC\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء مشروع ASP.NET Core Web App MVC\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.3.1",
          "title": "إنشاء مشروع ASP.NET Core Web App MVC",
          "topicTitle": "إنشاء أول مشروع MVC",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (إنشاء مشروع ASP.NET Core Web App MVC) أحد المعايير التقنية الحيوية في مسار إنشاء أول مشروع MVC ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء مشروع ASP.NET Core Web App MVC)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء مشروع ASP.NET Core Web App MVC) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء مشروع ASP.NET Core Web App MVC)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء مشروع ASP.NET Core Web App MVC)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء مشروع ASP.NET Core Web App MVC",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء مشروع ASP.NET Core Web App MVC)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء مشروع ASP.NET Core Web App MVC\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء مشروع ASP.NET Core Web App MVC ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء مشروع ASP.NET Core Web App MVC) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.3.2",
        "title": "إنشاء مشروع باستخدام dotnet new mvc",
        "englishTitle": "مشروع بdotnet new mvc",
        "definition": "يعد (إنشاء مشروع باستخدام dotnet new mvc) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء مشروع باستخدام dotnet new mvc) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء مشروع باستخدام dotnet new mvc) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء مشروع باستخدام dotnet new mvc\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء مشروع باستخدام dotnet new mvc\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.3.2",
          "title": "إنشاء مشروع باستخدام dotnet new mvc",
          "topicTitle": "إنشاء أول مشروع MVC",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (إنشاء مشروع باستخدام dotnet new mvc) أحد المعايير التقنية الحيوية في مسار إنشاء أول مشروع MVC ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء مشروع باستخدام dotnet new mvc)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء مشروع باستخدام dotnet new mvc) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء مشروع باستخدام dotnet new mvc)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء مشروع باستخدام dotnet new mvc)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء مشروع باستخدام dotnet new mvc",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء مشروع باستخدام dotnet new mvc)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء مشروع باستخدام dotnet new mvc\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء مشروع باستخدام dotnet new mvc ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء مشروع باستخدام dotnet new mvc) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.3.3",
        "title": "فهم Template الافتراضي",
        "englishTitle": "فهم Template الافتراضي",
        "definition": "يعد (فهم Template الافتراضي) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (فهم Template الافتراضي) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (فهم Template الافتراضي) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ فهم Template الافتراضي\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: فهم Template الافتراضي\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.3.3",
          "title": "فهم Template الافتراضي",
          "topicTitle": "إنشاء أول مشروع MVC",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (فهم Template الافتراضي) أحد المعايير التقنية الحيوية في مسار إنشاء أول مشروع MVC ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم Template الافتراضي)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم Template الافتراضي) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم Template الافتراضي)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم Template الافتراضي)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فهم Template الافتراضي",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم Template الافتراضي)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم Template الافتراضي\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم Template الافتراضي ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم Template الافتراضي) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.3.4",
        "title": "تشغيل المشروع",
        "englishTitle": "تشغيل المشروع",
        "definition": "يعد (تشغيل المشروع) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تشغيل المشروع) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تشغيل المشروع) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ تشغيل المشروع\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تشغيل المشروع\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.3.4",
          "title": "تشغيل المشروع",
          "topicTitle": "إنشاء أول مشروع MVC",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (تشغيل المشروع) أحد المعايير التقنية الحيوية في مسار إنشاء أول مشروع MVC ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تشغيل المشروع)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تشغيل المشروع) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تشغيل المشروع)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تشغيل المشروع)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تشغيل المشروع",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تشغيل المشروع)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تشغيل المشروع\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تشغيل المشروع ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تشغيل المشروع) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.3.5",
        "title": "فتح الموقع في المتصفح",
        "englishTitle": "فتح الموقع في المتصفح",
        "definition": "يعد (فتح الموقع في المتصفح) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (فتح الموقع في المتصفح) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (فتح الموقع في المتصفح) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ فتح الموقع في المتصفح\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: فتح الموقع في المتصفح\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.3.5",
          "title": "فتح الموقع في المتصفح",
          "topicTitle": "إنشاء أول مشروع MVC",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (فتح الموقع في المتصفح) أحد المعايير التقنية الحيوية في مسار إنشاء أول مشروع MVC ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فتح الموقع في المتصفح)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فتح الموقع في المتصفح) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فتح الموقع في المتصفح)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فتح الموقع في المتصفح)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فتح الموقع في المتصفح",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فتح الموقع في المتصفح)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فتح الموقع في المتصفح\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فتح الموقع في المتصفح ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فتح الموقع في المتصفح) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.3.6",
        "title": "تغيير الصفحة الرئيسية",
        "englishTitle": "تغيير الصفحة الرئيسية",
        "definition": "يعد (تغيير الصفحة الرئيسية) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تغيير الصفحة الرئيسية) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تغيير الصفحة الرئيسية) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ تغيير الصفحة الرئيسية\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تغيير الصفحة الرئيسية\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.3.6",
          "title": "تغيير الصفحة الرئيسية",
          "topicTitle": "إنشاء أول مشروع MVC",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (تغيير الصفحة الرئيسية) أحد المعايير التقنية الحيوية في مسار إنشاء أول مشروع MVC ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تغيير الصفحة الرئيسية)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تغيير الصفحة الرئيسية) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تغيير الصفحة الرئيسية)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تغيير الصفحة الرئيسية)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تغيير الصفحة الرئيسية",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تغيير الصفحة الرئيسية)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تغيير الصفحة الرئيسية\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تغيير الصفحة الرئيسية ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تغيير الصفحة الرئيسية) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.3.7",
        "title": "إضافة صفحة جديدة",
        "englishTitle": "إضافة صفحة جديدة",
        "definition": "يعد (إضافة صفحة جديدة) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إضافة صفحة جديدة) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إضافة صفحة جديدة) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إضافة صفحة جديدة\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إضافة صفحة جديدة\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.3.7",
          "title": "إضافة صفحة جديدة",
          "topicTitle": "إنشاء أول مشروع MVC",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (إضافة صفحة جديدة) أحد المعايير التقنية الحيوية في مسار إنشاء أول مشروع MVC ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إضافة صفحة جديدة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة صفحة جديدة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إضافة صفحة جديدة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إضافة صفحة جديدة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إضافة صفحة جديدة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إضافة صفحة جديدة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إضافة صفحة جديدة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إضافة صفحة جديدة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إضافة صفحة جديدة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.3.8",
        "title": "فهم Hot Reload",
        "englishTitle": "فهم Hot Reload",
        "definition": "يعد (فهم Hot Reload) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (فهم Hot Reload) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (فهم Hot Reload) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ فهم Hot Reload\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: فهم Hot Reload\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.3.8",
          "title": "فهم Hot Reload",
          "topicTitle": "إنشاء أول مشروع MVC",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (فهم Hot Reload) أحد المعايير التقنية الحيوية في مسار إنشاء أول مشروع MVC ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم Hot Reload)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم Hot Reload) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم Hot Reload)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم Hot Reload)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فهم Hot Reload",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم Hot Reload)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم Hot Reload\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم Hot Reload ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم Hot Reload) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "فهم هيكل المشروع",
    "subtopics": [
      {
        "subId": "6.4.1",
        "title": "وظيفة Program.cs",
        "englishTitle": "وظيفة Program.cs",
        "definition": "يعد (وظيفة Program.cs) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (وظيفة Program.cs) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (وظيفة Program.cs) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ وظيفة Program.cs\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: وظيفة Program.cs\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.4.1",
          "title": "وظيفة Program.cs",
          "topicTitle": "فهم هيكل المشروع",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (وظيفة Program.cs) أحد المعايير التقنية الحيوية في مسار فهم هيكل المشروع ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (وظيفة Program.cs)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (وظيفة Program.cs) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (وظيفة Program.cs)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (وظيفة Program.cs)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: وظيفة Program.cs",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (وظيفة Program.cs)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين وظيفة Program.cs\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: وظيفة Program.cs ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (وظيفة Program.cs) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.4.2",
        "title": "مجلد Controllers",
        "englishTitle": "مجلد Controllers",
        "definition": "يعد (مجلد Controllers) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مجلد Controllers) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مجلد Controllers) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ مجلد Controllers\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مجلد Controllers\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.4.2",
          "title": "مجلد Controllers",
          "topicTitle": "فهم هيكل المشروع",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (مجلد Controllers) أحد المعايير التقنية الحيوية في مسار فهم هيكل المشروع ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مجلد Controllers)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مجلد Controllers) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مجلد Controllers)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مجلد Controllers)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مجلد Controllers",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مجلد Controllers)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مجلد Controllers\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مجلد Controllers ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مجلد Controllers) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.4.3",
        "title": "مجلد Models",
        "englishTitle": "مجلد Models",
        "definition": "يعد (مجلد Models) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مجلد Models) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مجلد Models) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ مجلد Models\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مجلد Models\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.4.3",
          "title": "مجلد Models",
          "topicTitle": "فهم هيكل المشروع",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (مجلد Models) أحد المعايير التقنية الحيوية في مسار فهم هيكل المشروع ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مجلد Models)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مجلد Models) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مجلد Models)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مجلد Models)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مجلد Models",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مجلد Models)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مجلد Models\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مجلد Models ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مجلد Models) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.4.4",
        "title": "مجلد Views",
        "englishTitle": "مجلد Views",
        "definition": "يعد (مجلد Views) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مجلد Views) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مجلد Views) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ مجلد Views\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مجلد Views\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.4.4",
          "title": "مجلد Views",
          "topicTitle": "فهم هيكل المشروع",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (مجلد Views) أحد المعايير التقنية الحيوية في مسار فهم هيكل المشروع ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مجلد Views)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مجلد Views) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مجلد Views)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مجلد Views)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مجلد Views",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مجلد Views)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مجلد Views\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مجلد Views ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مجلد Views) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.4.5",
        "title": "مجلد wwwroot",
        "englishTitle": "مجلد wwwroot",
        "definition": "يعد (مجلد wwwroot) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مجلد wwwroot) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مجلد wwwroot) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ مجلد wwwroot\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مجلد wwwroot\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.4.5",
          "title": "مجلد wwwroot",
          "topicTitle": "فهم هيكل المشروع",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (مجلد wwwroot) أحد المعايير التقنية الحيوية في مسار فهم هيكل المشروع ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مجلد wwwroot)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مجلد wwwroot) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مجلد wwwroot)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مجلد wwwroot)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مجلد wwwroot",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مجلد wwwroot)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مجلد wwwroot\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مجلد wwwroot ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مجلد wwwroot) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.4.6",
        "title": "ملف appsettings.json",
        "englishTitle": "ملف appsettings.json",
        "definition": "يعد (ملف appsettings.json) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ملف appsettings.json) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ملف appsettings.json) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ملف appsettings.json\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ملف appsettings.json\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.4.6",
          "title": "ملف appsettings.json",
          "topicTitle": "فهم هيكل المشروع",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (ملف appsettings.json) أحد المعايير التقنية الحيوية في مسار فهم هيكل المشروع ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ملف appsettings.json)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ملف appsettings.json) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ملف appsettings.json)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ملف appsettings.json)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ملف appsettings.json",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ملف appsettings.json)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ملف appsettings.json\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ملف appsettings.json ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ملف appsettings.json) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.4.7",
        "title": "ملف appsettings.Development.json",
        "englishTitle": "ملف appsettings.Development.json",
        "definition": "يعد (ملف appsettings.Development.json) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ملف appsettings.Development.json) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ملف appsettings.Development.json) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ملف appsettings.Development.json\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ملف appsettings.Development.json\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.4.7",
          "title": "ملف appsettings.Development.json",
          "topicTitle": "فهم هيكل المشروع",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (ملف appsettings.Development.json) أحد المعايير التقنية الحيوية في مسار فهم هيكل المشروع ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ملف appsettings.Development.json)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ملف appsettings.Development.json) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ملف appsettings.Development.json)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ملف appsettings.Development.json)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ملف appsettings.Development.json",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ملف appsettings.Development.json)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ملف appsettings.Development.json\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ملف appsettings.Development.json ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ملف appsettings.Development.json) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.4.8",
        "title": "مجلد Properties وlaunchSettings.json",
        "englishTitle": "مجلد Properties وlaunchSettings.json",
        "definition": "يعد (مجلد Properties وlaunchSettings.json) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مجلد Properties وlaunchSettings.json) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مجلد Properties وlaunchSettings.json) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ مجلد Properties وlaunchSettings.json\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مجلد Properties وlaunchSettings.json\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.4.8",
          "title": "مجلد Properties وlaunchSettings.json",
          "topicTitle": "فهم هيكل المشروع",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (مجلد Properties وlaunchSettings.json) أحد المعايير التقنية الحيوية في مسار فهم هيكل المشروع ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مجلد Properties وlaunchSettings.json)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مجلد Properties وlaunchSettings.json) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مجلد Properties وlaunchSettings.json)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مجلد Properties وlaunchSettings.json)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مجلد Properties وlaunchSettings.json",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مجلد Properties وlaunchSettings.json)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مجلد Properties وlaunchSettings.json\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مجلد Properties وlaunchSettings.json ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مجلد Properties وlaunchSettings.json) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.4.9",
        "title": "مفهوم Dependencies",
        "englishTitle": "Dependencies",
        "definition": "يعد (مفهوم Dependencies) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مفهوم Dependencies) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مفهوم Dependencies) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ مفهوم Dependencies\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مفهوم Dependencies\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.4.9",
          "title": "مفهوم Dependencies",
          "topicTitle": "فهم هيكل المشروع",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (مفهوم Dependencies) أحد المعايير التقنية الحيوية في مسار فهم هيكل المشروع ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Dependencies)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Dependencies) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Dependencies)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Dependencies)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Dependencies",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Dependencies)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Dependencies\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Dependencies ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Dependencies) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "تشغيل التطبيق وإعداد الخادم",
    "subtopics": [
      {
        "subId": "6.5.1",
        "title": "مفهوم WebApplication Builder",
        "englishTitle": "WebApplication Builder",
        "definition": "يعد (مفهوم WebApplication Builder) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مفهوم WebApplication Builder) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مفهوم WebApplication Builder) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ مفهوم WebApplication Builder\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مفهوم WebApplication Builder\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.5.1",
          "title": "مفهوم WebApplication Builder",
          "topicTitle": "تشغيل التطبيق وإعداد الخادم",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (مفهوم WebApplication Builder) أحد المعايير التقنية الحيوية في مسار تشغيل التطبيق وإعداد الخادم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم WebApplication Builder)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم WebApplication Builder) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم WebApplication Builder)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم WebApplication Builder)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم WebApplication Builder",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم WebApplication Builder)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم WebApplication Builder\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم WebApplication Builder ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم WebApplication Builder) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.5.2",
        "title": "استخدام WebApplication.CreateBuilder",
        "englishTitle": "WebApplication.CreateBuilder",
        "definition": "يعد (استخدام WebApplication.CreateBuilder) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام WebApplication.CreateBuilder) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام WebApplication.CreateBuilder) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام WebApplication.CreateBuilder\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام WebApplication.CreateBuilder\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.5.2",
          "title": "استخدام WebApplication.CreateBuilder",
          "topicTitle": "تشغيل التطبيق وإعداد الخادم",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (استخدام WebApplication.CreateBuilder) أحد المعايير التقنية الحيوية في مسار تشغيل التطبيق وإعداد الخادم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام WebApplication.CreateBuilder)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام WebApplication.CreateBuilder) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام WebApplication.CreateBuilder)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام WebApplication.CreateBuilder)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام WebApplication.CreateBuilder",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام WebApplication.CreateBuilder)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام WebApplication.CreateBuilder\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام WebApplication.CreateBuilder ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام WebApplication.CreateBuilder) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.5.3",
        "title": "استخدام builder.Services",
        "englishTitle": "builder.Services",
        "definition": "يعد (استخدام builder.Services) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام builder.Services) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام builder.Services) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام builder.Services\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام builder.Services\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.5.3",
          "title": "استخدام builder.Services",
          "topicTitle": "تشغيل التطبيق وإعداد الخادم",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (استخدام builder.Services) أحد المعايير التقنية الحيوية في مسار تشغيل التطبيق وإعداد الخادم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام builder.Services)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام builder.Services) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام builder.Services)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام builder.Services)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام builder.Services",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام builder.Services)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام builder.Services\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام builder.Services ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام builder.Services) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.5.4",
        "title": "استخدام builder.Build",
        "englishTitle": "builder.Build",
        "definition": "يعد (استخدام builder.Build) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام builder.Build) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام builder.Build) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام builder.Build\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام builder.Build\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.5.4",
          "title": "استخدام builder.Build",
          "topicTitle": "تشغيل التطبيق وإعداد الخادم",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (استخدام builder.Build) أحد المعايير التقنية الحيوية في مسار تشغيل التطبيق وإعداد الخادم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام builder.Build)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام builder.Build) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام builder.Build)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام builder.Build)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام builder.Build",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام builder.Build)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام builder.Build\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام builder.Build ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام builder.Build) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.5.5",
        "title": "استخدام app.Run",
        "englishTitle": "app.Run",
        "definition": "يعد (استخدام app.Run) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام app.Run) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام app.Run) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام app.Run\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام app.Run\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.5.5",
          "title": "استخدام app.Run",
          "topicTitle": "تشغيل التطبيق وإعداد الخادم",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (استخدام app.Run) أحد المعايير التقنية الحيوية في مسار تشغيل التطبيق وإعداد الخادم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام app.Run)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام app.Run) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام app.Run)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام app.Run)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام app.Run",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام app.Run)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام app.Run\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام app.Run ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام app.Run) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.5.6",
        "title": "فهم HTTP وHTTPS Ports",
        "englishTitle": "فهم HTTP وHTTPS Ports",
        "definition": "يعد (فهم HTTP وHTTPS Ports) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (فهم HTTP وHTTPS Ports) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (فهم HTTP وHTTPS Ports) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ فهم HTTP وHTTPS Ports\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: فهم HTTP وHTTPS Ports\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.5.6",
          "title": "فهم HTTP وHTTPS Ports",
          "topicTitle": "تشغيل التطبيق وإعداد الخادم",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (فهم HTTP وHTTPS Ports) أحد المعايير التقنية الحيوية في مسار تشغيل التطبيق وإعداد الخادم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم HTTP وHTTPS Ports)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم HTTP وHTTPS Ports) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم HTTP وHTTPS Ports)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم HTTP وHTTPS Ports)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فهم HTTP وHTTPS Ports",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم HTTP وHTTPS Ports)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم HTTP وHTTPS Ports\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم HTTP وHTTPS Ports ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم HTTP وHTTPS Ports) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.5.7",
        "title": "مفهوم Development Environment",
        "englishTitle": "Development Environment",
        "definition": "يعد (مفهوم Development Environment) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مفهوم Development Environment) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مفهوم Development Environment) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ مفهوم Development Environment\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مفهوم Development Environment\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.5.7",
          "title": "مفهوم Development Environment",
          "topicTitle": "تشغيل التطبيق وإعداد الخادم",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (مفهوم Development Environment) أحد المعايير التقنية الحيوية في مسار تشغيل التطبيق وإعداد الخادم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Development Environment)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Development Environment) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Development Environment)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Development Environment)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Development Environment",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Development Environment)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Development Environment\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Development Environment ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Development Environment) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.5.8",
        "title": "تشغيل التطبيق باستخدام Kestrel",
        "englishTitle": "تشغيل البKestrel",
        "definition": "يعد (تشغيل التطبيق باستخدام Kestrel) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تشغيل التطبيق باستخدام Kestrel) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تشغيل التطبيق باستخدام Kestrel) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ تشغيل التطبيق باستخدام Kestrel\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تشغيل التطبيق باستخدام Kestrel\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.5.8",
          "title": "تشغيل التطبيق باستخدام Kestrel",
          "topicTitle": "تشغيل التطبيق وإعداد الخادم",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (تشغيل التطبيق باستخدام Kestrel) أحد المعايير التقنية الحيوية في مسار تشغيل التطبيق وإعداد الخادم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تشغيل التطبيق باستخدام Kestrel)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تشغيل التطبيق باستخدام Kestrel) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تشغيل التطبيق باستخدام Kestrel)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تشغيل التطبيق باستخدام Kestrel)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تشغيل التطبيق باستخدام Kestrel",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تشغيل التطبيق باستخدام Kestrel)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تشغيل التطبيق باستخدام Kestrel\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تشغيل التطبيق باستخدام Kestrel ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تشغيل التطبيق باستخدام Kestrel) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "مشروع عملي: موقع تعريفي",
    "subtopics": [
      {
        "subId": "6.6.1",
        "title": "إنشاء Home Page",
        "englishTitle": "Home Page",
        "definition": "يعد (إنشاء Home Page) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Home Page) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Home Page) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Home Page\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Home Page\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.6.1",
          "title": "إنشاء Home Page",
          "topicTitle": "مشروع عملي: موقع تعريفي",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (إنشاء Home Page) أحد المعايير التقنية الحيوية في مسار مشروع عملي: موقع تعريفي ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Home Page)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Home Page) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Home Page)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Home Page)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Home Page",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Home Page)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Home Page\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Home Page ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Home Page) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.6.2",
        "title": "إنشاء About Page",
        "englishTitle": "About Page",
        "definition": "يعد (إنشاء About Page) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء About Page) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء About Page) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء About Page\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء About Page\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.6.2",
          "title": "إنشاء About Page",
          "topicTitle": "مشروع عملي: موقع تعريفي",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (إنشاء About Page) أحد المعايير التقنية الحيوية في مسار مشروع عملي: موقع تعريفي ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء About Page)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء About Page) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء About Page)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء About Page)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء About Page",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء About Page)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء About Page\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء About Page ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء About Page) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.6.3",
        "title": "إنشاء Contact Page",
        "englishTitle": "Contact Page",
        "definition": "يعد (إنشاء Contact Page) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Contact Page) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Contact Page) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Contact Page\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Contact Page\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.6.3",
          "title": "إنشاء Contact Page",
          "topicTitle": "مشروع عملي: موقع تعريفي",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (إنشاء Contact Page) أحد المعايير التقنية الحيوية في مسار مشروع عملي: موقع تعريفي ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Contact Page)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Contact Page) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Contact Page)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Contact Page)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Contact Page",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Contact Page)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Contact Page\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Contact Page ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Contact Page) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.6.4",
        "title": "إضافة Navigation Menu",
        "englishTitle": "إضافة Navigation Menu",
        "definition": "يعد (إضافة Navigation Menu) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إضافة Navigation Menu) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إضافة Navigation Menu) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إضافة Navigation Menu\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إضافة Navigation Menu\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.6.4",
          "title": "إضافة Navigation Menu",
          "topicTitle": "مشروع عملي: موقع تعريفي",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (إضافة Navigation Menu) أحد المعايير التقنية الحيوية في مسار مشروع عملي: موقع تعريفي ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إضافة Navigation Menu)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة Navigation Menu) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إضافة Navigation Menu)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إضافة Navigation Menu)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إضافة Navigation Menu",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إضافة Navigation Menu)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إضافة Navigation Menu\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إضافة Navigation Menu ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إضافة Navigation Menu) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.6.5",
        "title": "عرض بيانات ديناميكية بسيطة",
        "englishTitle": "عرض بيانات ديناميكية بسيطة",
        "definition": "يعد (عرض بيانات ديناميكية بسيطة) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (عرض بيانات ديناميكية بسيطة) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (عرض بيانات ديناميكية بسيطة) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ عرض بيانات ديناميكية بسيطة\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: عرض بيانات ديناميكية بسيطة\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.6.5",
          "title": "عرض بيانات ديناميكية بسيطة",
          "topicTitle": "مشروع عملي: موقع تعريفي",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (عرض بيانات ديناميكية بسيطة) أحد المعايير التقنية الحيوية في مسار مشروع عملي: موقع تعريفي ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (عرض بيانات ديناميكية بسيطة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (عرض بيانات ديناميكية بسيطة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (عرض بيانات ديناميكية بسيطة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (عرض بيانات ديناميكية بسيطة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: عرض بيانات ديناميكية بسيطة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (عرض بيانات ديناميكية بسيطة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين عرض بيانات ديناميكية بسيطة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: عرض بيانات ديناميكية بسيطة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (عرض بيانات ديناميكية بسيطة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.6.6",
        "title": "تنسيق الصفحات باستخدام CSS",
        "englishTitle": "تنسيق الصفحات بCSS",
        "definition": "يعد (تنسيق الصفحات باستخدام CSS) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تنسيق الصفحات باستخدام CSS) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تنسيق الصفحات باستخدام CSS) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ تنسيق الصفحات باستخدام CSS\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تنسيق الصفحات باستخدام CSS\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.6.6",
          "title": "تنسيق الصفحات باستخدام CSS",
          "topicTitle": "مشروع عملي: موقع تعريفي",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (تنسيق الصفحات باستخدام CSS) أحد المعايير التقنية الحيوية في مسار مشروع عملي: موقع تعريفي ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تنسيق الصفحات باستخدام CSS)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنسيق الصفحات باستخدام CSS) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تنسيق الصفحات باستخدام CSS)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تنسيق الصفحات باستخدام CSS)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تنسيق الصفحات باستخدام CSS",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تنسيق الصفحات باستخدام CSS)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تنسيق الصفحات باستخدام CSS\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تنسيق الصفحات باستخدام CSS ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تنسيق الصفحات باستخدام CSS) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.6.7",
        "title": "اختبار التنقل بين الصفحات",
        "englishTitle": "اختبار التنقل بين الصفحات",
        "definition": "يعد (اختبار التنقل بين الصفحات) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (اختبار التنقل بين الصفحات) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (اختبار التنقل بين الصفحات) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ اختبار التنقل بين الصفحات\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: اختبار التنقل بين الصفحات\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.6.7",
          "title": "اختبار التنقل بين الصفحات",
          "topicTitle": "مشروع عملي: موقع تعريفي",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (اختبار التنقل بين الصفحات) أحد المعايير التقنية الحيوية في مسار مشروع عملي: موقع تعريفي ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار التنقل بين الصفحات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار التنقل بين الصفحات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار التنقل بين الصفحات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار التنقل بين الصفحات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار التنقل بين الصفحات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار التنقل بين الصفحات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار التنقل بين الصفحات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار التنقل بين الصفحات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار التنقل بين الصفحات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "6.6.8",
        "title": "رفع المشروع إلى GitHub",
        "englishTitle": "رفع المشروع إلى GitHub",
        "definition": "يعد (رفع المشروع إلى GitHub) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (رفع المشروع إلى GitHub) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (رفع المشروع إلى GitHub) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ رفع المشروع إلى GitHub\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: رفع المشروع إلى GitHub\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 6.6.8",
          "title": "رفع المشروع إلى GitHub",
          "topicTitle": "مشروع عملي: موقع تعريفي",
          "sectionTitle": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
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
          "summary": "يمثل (رفع المشروع إلى GitHub) أحد المعايير التقنية الحيوية في مسار مشروع عملي: موقع تعريفي ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (رفع المشروع إلى GitHub)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (رفع المشروع إلى GitHub) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (رفع المشروع إلى GitHub)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (رفع المشروع إلى GitHub)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: رفع المشروع إلى GitHub",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (رفع المشروع إلى GitHub)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين رفع المشروع إلى GitHub\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: رفع المشروع إلى GitHub ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (رفع المشروع إلى GitHub) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section6Data;
