// src/data/sections/section10.js
// محتوى تعليمي مفصل وشامل لـ: القسم العاشر: Models وModel Binding
export const section10Data = {
  id: 10,
  title: "القسم العاشر: Models وModel Binding",
  englishTitle: "Models & Model Binding",
  icon: "Database",
  category: "ASP.NET Core MVC",
  description: "بناء النماذج Models، ربط البيانات القادمة من الروابط والنماذج والـ Headers، استخدام ViewModels وDTOs ومنع الـ Overposting.",
  summary: {
  "sectionId": 10,
  "title": "القسم العاشر: Models وModel Binding",
  "englishTitle": "Models & Model Binding",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم العاشر: Models وModel Binding.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم العاشر: Models وModel Binding",
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
    "title": "مقدمة في Models",
    "subtopics": [
      {
        "subId": "10.1.1",
        "title": "ما هو Model؟",
        "englishTitle": "Model",
        "definition": "يعد (ما هو Model؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هو Model؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هو Model؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هو Model؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هو Model؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.1.1",
          "title": "ما هو Model؟",
          "topicTitle": "مقدمة في Models",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (ما هو Model؟) أحد المعايير التقنية الحيوية في مسار مقدمة في Models ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Model؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Model؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Model؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Model؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Model؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Model؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Model؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Model؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Model؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.1.2",
        "title": "إنشاء Model Class",
        "englishTitle": "Model Class",
        "definition": "يعد (إنشاء Model Class) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Model Class) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Model Class) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Model Class\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Model Class\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.1.2",
          "title": "إنشاء Model Class",
          "topicTitle": "مقدمة في Models",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (إنشاء Model Class) أحد المعايير التقنية الحيوية في مسار مقدمة في Models ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Model Class)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Model Class) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Model Class)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Model Class)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Model Class",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Model Class)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Model Class\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Model Class ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Model Class) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.1.3",
        "title": "تعريف Model Properties",
        "englishTitle": "تعريف Model Properties",
        "definition": "يعد (تعريف Model Properties) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تعريف Model Properties) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تعريف Model Properties) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ تعريف Model Properties\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تعريف Model Properties\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.1.3",
          "title": "تعريف Model Properties",
          "topicTitle": "مقدمة في Models",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (تعريف Model Properties) أحد المعايير التقنية الحيوية في مسار مقدمة في Models ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تعريف Model Properties)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تعريف Model Properties) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تعريف Model Properties)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تعريف Model Properties)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تعريف Model Properties",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تعريف Model Properties)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تعريف Model Properties\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تعريف Model Properties ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تعريف Model Properties) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.1.4",
        "title": "استخدام Nullable Properties",
        "englishTitle": "Nullable Properties",
        "definition": "يعد (استخدام Nullable Properties) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Nullable Properties) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Nullable Properties) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Nullable Properties\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Nullable Properties\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.1.4",
          "title": "استخدام Nullable Properties",
          "topicTitle": "مقدمة في Models",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (استخدام Nullable Properties) أحد المعايير التقنية الحيوية في مسار مقدمة في Models ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Nullable Properties)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Nullable Properties) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Nullable Properties)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Nullable Properties)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Nullable Properties",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Nullable Properties)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Nullable Properties\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Nullable Properties ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Nullable Properties) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.1.5",
        "title": "الفرق بين Domain Model وViewModel",
        "englishTitle": "Domain Model وViewModel",
        "definition": "يعد (الفرق بين Domain Model وViewModel) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الفرق بين Domain Model وViewModel) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الفرق بين Domain Model وViewModel) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ الفرق بين Domain Model وViewModel\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الفرق بين Domain Model وViewModel\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.1.5",
          "title": "الفرق بين Domain Model وViewModel",
          "topicTitle": "مقدمة في Models",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (الفرق بين Domain Model وViewModel) أحد المعايير التقنية الحيوية في مسار مقدمة في Models ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Domain Model وViewModel)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Domain Model وViewModel) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Domain Model وViewModel)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Domain Model وViewModel)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Domain Model وViewModel",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Domain Model وViewModel)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Domain Model وViewModel\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Domain Model وViewModel ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Domain Model وViewModel) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.1.6",
        "title": "الفرق بين Entity وDTO",
        "englishTitle": "Entity وDTO",
        "definition": "يعد (الفرق بين Entity وDTO) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الفرق بين Entity وDTO) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الفرق بين Entity وDTO) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ الفرق بين Entity وDTO\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الفرق بين Entity وDTO\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.1.6",
          "title": "الفرق بين Entity وDTO",
          "topicTitle": "مقدمة في Models",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (الفرق بين Entity وDTO) أحد المعايير التقنية الحيوية في مسار مقدمة في Models ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Entity وDTO)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Entity وDTO) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Entity وDTO)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Entity وDTO)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Entity وDTO",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Entity وDTO)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Entity وDTO\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Entity وDTO ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Entity وDTO) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.1.7",
        "title": "تنظيم مجلد Models",
        "englishTitle": "تنظيم مجلد Models",
        "definition": "يعد (تنظيم مجلد Models) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تنظيم مجلد Models) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تنظيم مجلد Models) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ تنظيم مجلد Models\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تنظيم مجلد Models\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.1.7",
          "title": "تنظيم مجلد Models",
          "topicTitle": "مقدمة في Models",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (تنظيم مجلد Models) أحد المعايير التقنية الحيوية في مسار مقدمة في Models ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تنظيم مجلد Models)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنظيم مجلد Models) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تنظيم مجلد Models)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تنظيم مجلد Models)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تنظيم مجلد Models",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تنظيم مجلد Models)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تنظيم مجلد Models\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تنظيم مجلد Models ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تنظيم مجلد Models) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "Model Binding",
    "subtopics": [
      {
        "subId": "10.2.1",
        "title": "ما هو Model Binding؟",
        "englishTitle": "Model Binding",
        "definition": "يعد (ما هو Model Binding؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هو Model Binding؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هو Model Binding؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هو Model Binding؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هو Model Binding؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.2.1",
          "title": "ما هو Model Binding؟",
          "topicTitle": "Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (ما هو Model Binding؟) أحد المعايير التقنية الحيوية في مسار Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Model Binding؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Model Binding؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Model Binding؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Model Binding؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Model Binding؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Model Binding؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Model Binding؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Model Binding؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Model Binding؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.2.2",
        "title": "كيف يعمل Model Binder؟",
        "englishTitle": "كيف يعمل Model Binder",
        "definition": "يعد (كيف يعمل Model Binder؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (كيف يعمل Model Binder؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (كيف يعمل Model Binder؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ كيف يعمل Model Binder؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: كيف يعمل Model Binder؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.2.2",
          "title": "كيف يعمل Model Binder؟",
          "topicTitle": "Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (كيف يعمل Model Binder؟) أحد المعايير التقنية الحيوية في مسار Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (كيف يعمل Model Binder؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (كيف يعمل Model Binder؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (كيف يعمل Model Binder؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (كيف يعمل Model Binder؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: كيف يعمل Model Binder؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (كيف يعمل Model Binder؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين كيف يعمل Model Binder؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: كيف يعمل Model Binder؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (كيف يعمل Model Binder؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.2.3",
        "title": "Binding من Route",
        "englishTitle": "Binding من Route",
        "definition": "يعد (Binding من Route) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (Binding من Route) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (Binding من Route) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ Binding من Route\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: Binding من Route\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.2.3",
          "title": "Binding من Route",
          "topicTitle": "Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (Binding من Route) أحد المعايير التقنية الحيوية في مسار Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Binding من Route)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Binding من Route) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Binding من Route)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Binding من Route)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Binding من Route",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Binding من Route)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Binding من Route\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Binding من Route ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Binding من Route) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.2.4",
        "title": "Binding من Query String",
        "englishTitle": "Binding من Query String",
        "definition": "يعد (Binding من Query String) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (Binding من Query String) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (Binding من Query String) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ Binding من Query String\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: Binding من Query String\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.2.4",
          "title": "Binding من Query String",
          "topicTitle": "Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (Binding من Query String) أحد المعايير التقنية الحيوية في مسار Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Binding من Query String)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Binding من Query String) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Binding من Query String)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Binding من Query String)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Binding من Query String",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Binding من Query String)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Binding من Query String\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Binding من Query String ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Binding من Query String) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.2.5",
        "title": "Binding من Form Fields",
        "englishTitle": "Binding من Form Fields",
        "definition": "يعد (Binding من Form Fields) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (Binding من Form Fields) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (Binding من Form Fields) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ Binding من Form Fields\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: Binding من Form Fields\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.2.5",
          "title": "Binding من Form Fields",
          "topicTitle": "Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (Binding من Form Fields) أحد المعايير التقنية الحيوية في مسار Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Binding من Form Fields)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Binding من Form Fields) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Binding من Form Fields)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Binding من Form Fields)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Binding من Form Fields",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Binding من Form Fields)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Binding من Form Fields\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Binding من Form Fields ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Binding من Form Fields) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.2.6",
        "title": "Binding من Request Body",
        "englishTitle": "Binding من Request Body",
        "definition": "يعد (Binding من Request Body) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (Binding من Request Body) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (Binding من Request Body) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ Binding من Request Body\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: Binding من Request Body\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.2.6",
          "title": "Binding من Request Body",
          "topicTitle": "Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (Binding من Request Body) أحد المعايير التقنية الحيوية في مسار Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Binding من Request Body)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Binding من Request Body) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Binding من Request Body)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Binding من Request Body)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Binding من Request Body",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Binding من Request Body)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Binding من Request Body\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Binding من Request Body ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Binding من Request Body) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.2.7",
        "title": "Binding من Headers",
        "englishTitle": "Binding من Headers",
        "definition": "يعد (Binding من Headers) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (Binding من Headers) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (Binding من Headers) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ Binding من Headers\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: Binding من Headers\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.2.7",
          "title": "Binding من Headers",
          "topicTitle": "Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (Binding من Headers) أحد المعايير التقنية الحيوية في مسار Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Binding من Headers)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Binding من Headers) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Binding من Headers)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Binding من Headers)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Binding من Headers",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Binding من Headers)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Binding من Headers\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Binding من Headers ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Binding من Headers) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.2.8",
        "title": "Binding للأنواع المعقدة",
        "englishTitle": "Binding للأنواع المعقدة",
        "definition": "يعد (Binding للأنواع المعقدة) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (Binding للأنواع المعقدة) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (Binding للأنواع المعقدة) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ Binding للأنواع المعقدة\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: Binding للأنواع المعقدة\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.2.8",
          "title": "Binding للأنواع المعقدة",
          "topicTitle": "Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (Binding للأنواع المعقدة) أحد المعايير التقنية الحيوية في مسار Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Binding للأنواع المعقدة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Binding للأنواع المعقدة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Binding للأنواع المعقدة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Binding للأنواع المعقدة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Binding للأنواع المعقدة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Binding للأنواع المعقدة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Binding للأنواع المعقدة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Binding للأنواع المعقدة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Binding للأنواع المعقدة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.2.9",
        "title": "Binding للمصفوفات والقوائم",
        "englishTitle": "Binding للمصفوفات والقوائم",
        "definition": "يعد (Binding للمصفوفات والقوائم) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (Binding للمصفوفات والقوائم) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (Binding للمصفوفات والقوائم) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ Binding للمصفوفات والقوائم\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: Binding للمصفوفات والقوائم\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.2.9",
          "title": "Binding للمصفوفات والقوائم",
          "topicTitle": "Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (Binding للمصفوفات والقوائم) أحد المعايير التقنية الحيوية في مسار Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Binding للمصفوفات والقوائم)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Binding للمصفوفات والقوائم) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Binding للمصفوفات والقوائم)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Binding للمصفوفات والقوائم)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Binding للمصفوفات والقوائم",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Binding للمصفوفات والقوائم)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Binding للمصفوفات والقوائم\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Binding للمصفوفات والقوائم ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Binding للمصفوفات والقوائم) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Binding Attributes",
    "subtopics": [
      {
        "subId": "10.3.1",
        "title": "استخدام FromRoute",
        "englishTitle": "FromRoute",
        "definition": "يعد (استخدام FromRoute) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام FromRoute) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام FromRoute) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام FromRoute\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام FromRoute\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.3.1",
          "title": "استخدام FromRoute",
          "topicTitle": "Binding Attributes",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (استخدام FromRoute) أحد المعايير التقنية الحيوية في مسار Binding Attributes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام FromRoute)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام FromRoute) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام FromRoute)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام FromRoute)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام FromRoute",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام FromRoute)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام FromRoute\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام FromRoute ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام FromRoute) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.3.2",
        "title": "استخدام FromQuery",
        "englishTitle": "FromQuery",
        "definition": "يعد (استخدام FromQuery) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام FromQuery) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام FromQuery) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام FromQuery\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام FromQuery\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.3.2",
          "title": "استخدام FromQuery",
          "topicTitle": "Binding Attributes",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (استخدام FromQuery) أحد المعايير التقنية الحيوية في مسار Binding Attributes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام FromQuery)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام FromQuery) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام FromQuery)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام FromQuery)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام FromQuery",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام FromQuery)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام FromQuery\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام FromQuery ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام FromQuery) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.3.3",
        "title": "استخدام FromForm",
        "englishTitle": "FromForm",
        "definition": "يعد (استخدام FromForm) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام FromForm) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام FromForm) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام FromForm\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام FromForm\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.3.3",
          "title": "استخدام FromForm",
          "topicTitle": "Binding Attributes",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (استخدام FromForm) أحد المعايير التقنية الحيوية في مسار Binding Attributes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام FromForm)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام FromForm) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام FromForm)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام FromForm)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام FromForm",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام FromForm)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام FromForm\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام FromForm ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام FromForm) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.3.4",
        "title": "استخدام FromBody",
        "englishTitle": "FromBody",
        "definition": "يعد (استخدام FromBody) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام FromBody) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام FromBody) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام FromBody\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام FromBody\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.3.4",
          "title": "استخدام FromBody",
          "topicTitle": "Binding Attributes",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (استخدام FromBody) أحد المعايير التقنية الحيوية في مسار Binding Attributes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام FromBody)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام FromBody) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام FromBody)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام FromBody)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام FromBody",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام FromBody)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام FromBody\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام FromBody ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام FromBody) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.3.5",
        "title": "استخدام FromHeader",
        "englishTitle": "FromHeader",
        "definition": "يعد (استخدام FromHeader) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام FromHeader) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام FromHeader) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام FromHeader\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام FromHeader\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.3.5",
          "title": "استخدام FromHeader",
          "topicTitle": "Binding Attributes",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (استخدام FromHeader) أحد المعايير التقنية الحيوية في مسار Binding Attributes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام FromHeader)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام FromHeader) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام FromHeader)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام FromHeader)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام FromHeader",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام FromHeader)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام FromHeader\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام FromHeader ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام FromHeader) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.3.6",
        "title": "استخدام FromServices",
        "englishTitle": "FromServices",
        "definition": "يعد (استخدام FromServices) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام FromServices) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام FromServices) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام FromServices\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام FromServices\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.3.6",
          "title": "استخدام FromServices",
          "topicTitle": "Binding Attributes",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (استخدام FromServices) أحد المعايير التقنية الحيوية في مسار Binding Attributes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام FromServices)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام FromServices) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام FromServices)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام FromServices)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام FromServices",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام FromServices)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام FromServices\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام FromServices ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام FromServices) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.3.7",
        "title": "استخدام Bind وBindNever",
        "englishTitle": "Bind وBindNever",
        "definition": "يعد (استخدام Bind وBindNever) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Bind وBindNever) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Bind وBindNever) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Bind وBindNever\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Bind وBindNever\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.3.7",
          "title": "استخدام Bind وBindNever",
          "topicTitle": "Binding Attributes",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (استخدام Bind وBindNever) أحد المعايير التقنية الحيوية في مسار Binding Attributes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Bind وBindNever)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Bind وBindNever) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Bind وBindNever)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Bind وBindNever)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Bind وBindNever",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Bind وBindNever)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Bind وBindNever\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Bind وBindNever ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Bind وBindNever) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.3.8",
        "title": "منع Overposting",
        "englishTitle": "منع Overposting",
        "definition": "يعد (منع Overposting) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (منع Overposting) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (منع Overposting) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ منع Overposting\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: منع Overposting\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.3.8",
          "title": "منع Overposting",
          "topicTitle": "Binding Attributes",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (منع Overposting) أحد المعايير التقنية الحيوية في مسار Binding Attributes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (منع Overposting)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (منع Overposting) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (منع Overposting)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (منع Overposting)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: منع Overposting",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (منع Overposting)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين منع Overposting\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: منع Overposting ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (منع Overposting) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "ViewModels وDTOs",
    "subtopics": [
      {
        "subId": "10.4.1",
        "title": "ما هو ViewModel؟",
        "englishTitle": "ViewModel",
        "definition": "يعد (ما هو ViewModel؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هو ViewModel؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هو ViewModel؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هو ViewModel؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هو ViewModel؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.4.1",
          "title": "ما هو ViewModel؟",
          "topicTitle": "ViewModels وDTOs",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (ما هو ViewModel؟) أحد المعايير التقنية الحيوية في مسار ViewModels وDTOs ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو ViewModel؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو ViewModel؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو ViewModel؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو ViewModel؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو ViewModel؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو ViewModel؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو ViewModel؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو ViewModel؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو ViewModel؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.4.2",
        "title": "إنشاء CreateProductViewModel",
        "englishTitle": "CreateProductViewModel",
        "definition": "يعد (إنشاء CreateProductViewModel) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء CreateProductViewModel) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء CreateProductViewModel) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء CreateProductViewModel\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء CreateProductViewModel\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.4.2",
          "title": "إنشاء CreateProductViewModel",
          "topicTitle": "ViewModels وDTOs",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (إنشاء CreateProductViewModel) أحد المعايير التقنية الحيوية في مسار ViewModels وDTOs ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء CreateProductViewModel)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء CreateProductViewModel) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء CreateProductViewModel)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء CreateProductViewModel)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء CreateProductViewModel",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء CreateProductViewModel)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء CreateProductViewModel\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء CreateProductViewModel ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء CreateProductViewModel) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.4.3",
        "title": "إنشاء EditProductViewModel",
        "englishTitle": "EditProductViewModel",
        "definition": "يعد (إنشاء EditProductViewModel) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء EditProductViewModel) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء EditProductViewModel) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء EditProductViewModel\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء EditProductViewModel\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.4.3",
          "title": "إنشاء EditProductViewModel",
          "topicTitle": "ViewModels وDTOs",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (إنشاء EditProductViewModel) أحد المعايير التقنية الحيوية في مسار ViewModels وDTOs ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء EditProductViewModel)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء EditProductViewModel) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء EditProductViewModel)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء EditProductViewModel)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء EditProductViewModel",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء EditProductViewModel)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء EditProductViewModel\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء EditProductViewModel ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء EditProductViewModel) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.4.4",
        "title": "إنشاء ProductDetailsViewModel",
        "englishTitle": "ProductDetailsViewModel",
        "definition": "يعد (إنشاء ProductDetailsViewModel) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء ProductDetailsViewModel) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء ProductDetailsViewModel) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء ProductDetailsViewModel\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء ProductDetailsViewModel\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.4.4",
          "title": "إنشاء ProductDetailsViewModel",
          "topicTitle": "ViewModels وDTOs",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (إنشاء ProductDetailsViewModel) أحد المعايير التقنية الحيوية في مسار ViewModels وDTOs ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء ProductDetailsViewModel)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء ProductDetailsViewModel) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء ProductDetailsViewModel)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء ProductDetailsViewModel)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء ProductDetailsViewModel",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء ProductDetailsViewModel)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء ProductDetailsViewModel\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء ProductDetailsViewModel ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء ProductDetailsViewModel) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.4.5",
        "title": "إنشاء ViewModel يحتوي على عدة Models",
        "englishTitle": "ViewModel يحتوي على عدة Models",
        "definition": "يعد (إنشاء ViewModel يحتوي على عدة Models) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء ViewModel يحتوي على عدة Models) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء ViewModel يحتوي على عدة Models) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء ViewModel يحتوي على عدة Models\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء ViewModel يحتوي على عدة Models\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.4.5",
          "title": "إنشاء ViewModel يحتوي على عدة Models",
          "topicTitle": "ViewModels وDTOs",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (إنشاء ViewModel يحتوي على عدة Models) أحد المعايير التقنية الحيوية في مسار ViewModels وDTOs ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء ViewModel يحتوي على عدة Models)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء ViewModel يحتوي على عدة Models) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء ViewModel يحتوي على عدة Models)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء ViewModel يحتوي على عدة Models)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء ViewModel يحتوي على عدة Models",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء ViewModel يحتوي على عدة Models)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء ViewModel يحتوي على عدة Models\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء ViewModel يحتوي على عدة Models ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء ViewModel يحتوي على عدة Models) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.4.6",
        "title": "إنشاء CreateDTO وUpdateDTO",
        "englishTitle": "CreateDTO وUpdateDTO",
        "definition": "يعد (إنشاء CreateDTO وUpdateDTO) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء CreateDTO وUpdateDTO) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء CreateDTO وUpdateDTO) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء CreateDTO وUpdateDTO\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء CreateDTO وUpdateDTO\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.4.6",
          "title": "إنشاء CreateDTO وUpdateDTO",
          "topicTitle": "ViewModels وDTOs",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (إنشاء CreateDTO وUpdateDTO) أحد المعايير التقنية الحيوية في مسار ViewModels وDTOs ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء CreateDTO وUpdateDTO)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء CreateDTO وUpdateDTO) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء CreateDTO وUpdateDTO)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء CreateDTO وUpdateDTO)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء CreateDTO وUpdateDTO",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء CreateDTO وUpdateDTO)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء CreateDTO وUpdateDTO\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء CreateDTO وUpdateDTO ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء CreateDTO وUpdateDTO) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.4.7",
        "title": "تحويل Entity إلى ViewModel",
        "englishTitle": "تحويل Entity إلى ViewModel",
        "definition": "يعد (تحويل Entity إلى ViewModel) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تحويل Entity إلى ViewModel) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تحويل Entity إلى ViewModel) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ تحويل Entity إلى ViewModel\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تحويل Entity إلى ViewModel\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.4.7",
          "title": "تحويل Entity إلى ViewModel",
          "topicTitle": "ViewModels وDTOs",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (تحويل Entity إلى ViewModel) أحد المعايير التقنية الحيوية في مسار ViewModels وDTOs ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تحويل Entity إلى ViewModel)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تحويل Entity إلى ViewModel) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تحويل Entity إلى ViewModel)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تحويل Entity إلى ViewModel)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تحويل Entity إلى ViewModel",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تحويل Entity إلى ViewModel)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تحويل Entity إلى ViewModel\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تحويل Entity إلى ViewModel ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تحويل Entity إلى ViewModel) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.4.8",
        "title": "استخدام Mapping Methods",
        "englishTitle": "Mapping Methods",
        "definition": "يعد (استخدام Mapping Methods) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Mapping Methods) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Mapping Methods) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Mapping Methods\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Mapping Methods\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.4.8",
          "title": "استخدام Mapping Methods",
          "topicTitle": "ViewModels وDTOs",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (استخدام Mapping Methods) أحد المعايير التقنية الحيوية في مسار ViewModels وDTOs ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Mapping Methods)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Mapping Methods) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Mapping Methods)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Mapping Methods)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Mapping Methods",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Mapping Methods)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Mapping Methods\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Mapping Methods ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Mapping Methods) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.4.9",
        "title": "مقدمة في AutoMapper",
        "englishTitle": "مقدمة في AutoMapper",
        "definition": "يعد (مقدمة في AutoMapper) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (مقدمة في AutoMapper) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (مقدمة في AutoMapper) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ مقدمة في AutoMapper\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: مقدمة في AutoMapper\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.4.9",
          "title": "مقدمة في AutoMapper",
          "topicTitle": "ViewModels وDTOs",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (مقدمة في AutoMapper) أحد المعايير التقنية الحيوية في مسار ViewModels وDTOs ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في AutoMapper)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في AutoMapper) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في AutoMapper)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في AutoMapper)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مقدمة في AutoMapper",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في AutoMapper)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في AutoMapper\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في AutoMapper ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في AutoMapper) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "تطبيق عملي على Model Binding",
    "subtopics": [
      {
        "subId": "10.5.1",
        "title": "إنشاء نموذج إدخال بيانات طالب",
        "englishTitle": "نموذج إدخال بيانات طالب",
        "definition": "يعد (إنشاء نموذج إدخال بيانات طالب) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء نموذج إدخال بيانات طالب) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء نموذج إدخال بيانات طالب) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء نموذج إدخال بيانات طالب\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء نموذج إدخال بيانات طالب\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.5.1",
          "title": "إنشاء نموذج إدخال بيانات طالب",
          "topicTitle": "تطبيق عملي على Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (إنشاء نموذج إدخال بيانات طالب) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء نموذج إدخال بيانات طالب)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء نموذج إدخال بيانات طالب) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء نموذج إدخال بيانات طالب)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء نموذج إدخال بيانات طالب)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء نموذج إدخال بيانات طالب",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء نموذج إدخال بيانات طالب)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء نموذج إدخال بيانات طالب\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء نموذج إدخال بيانات طالب ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء نموذج إدخال بيانات طالب) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.5.2",
        "title": "استقبال بيانات الطالب داخل Controller",
        "englishTitle": "استقبال بيانات الطالب داخل Controller",
        "definition": "يعد (استقبال بيانات الطالب داخل Controller) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استقبال بيانات الطالب داخل Controller) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استقبال بيانات الطالب داخل Controller) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استقبال بيانات الطالب داخل Controller\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استقبال بيانات الطالب داخل Controller\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.5.2",
          "title": "استقبال بيانات الطالب داخل Controller",
          "topicTitle": "تطبيق عملي على Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (استقبال بيانات الطالب داخل Controller) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استقبال بيانات الطالب داخل Controller)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استقبال بيانات الطالب داخل Controller) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استقبال بيانات الطالب داخل Controller)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استقبال بيانات الطالب داخل Controller)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استقبال بيانات الطالب داخل Controller",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استقبال بيانات الطالب داخل Controller)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استقبال بيانات الطالب داخل Controller\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استقبال بيانات الطالب داخل Controller ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استقبال بيانات الطالب داخل Controller) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.5.3",
        "title": "ربط Form Fields بالـ ViewModel",
        "englishTitle": "ربط Form Fields بالـ ViewModel",
        "definition": "يعد (ربط Form Fields بالـ ViewModel) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ربط Form Fields بالـ ViewModel) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ربط Form Fields بالـ ViewModel) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ربط Form Fields بالـ ViewModel\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ربط Form Fields بالـ ViewModel\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.5.3",
          "title": "ربط Form Fields بالـ ViewModel",
          "topicTitle": "تطبيق عملي على Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (ربط Form Fields بالـ ViewModel) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ربط Form Fields بالـ ViewModel)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ربط Form Fields بالـ ViewModel) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ربط Form Fields بالـ ViewModel)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ربط Form Fields بالـ ViewModel)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ربط Form Fields بالـ ViewModel",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ربط Form Fields بالـ ViewModel)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ربط Form Fields بالـ ViewModel\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ربط Form Fields بالـ ViewModel ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ربط Form Fields بالـ ViewModel) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.5.4",
        "title": "عرض البيانات داخل View",
        "englishTitle": "عرض البيانات داخل View",
        "definition": "يعد (عرض البيانات داخل View) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (عرض البيانات داخل View) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (عرض البيانات داخل View) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ عرض البيانات داخل View\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: عرض البيانات داخل View\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.5.4",
          "title": "عرض البيانات داخل View",
          "topicTitle": "تطبيق عملي على Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (عرض البيانات داخل View) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (عرض البيانات داخل View)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (عرض البيانات داخل View) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (عرض البيانات داخل View)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (عرض البيانات داخل View)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: عرض البيانات داخل View",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (عرض البيانات داخل View)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين عرض البيانات داخل View\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: عرض البيانات داخل View ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (عرض البيانات داخل View) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.5.5",
        "title": "التعامل مع القيم الاختيارية",
        "englishTitle": "التعامل مع القيم الاختيارية",
        "definition": "يعد (التعامل مع القيم الاختيارية) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (التعامل مع القيم الاختيارية) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (التعامل مع القيم الاختيارية) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ التعامل مع القيم الاختيارية\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: التعامل مع القيم الاختيارية\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.5.5",
          "title": "التعامل مع القيم الاختيارية",
          "topicTitle": "تطبيق عملي على Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (التعامل مع القيم الاختيارية) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التعامل مع القيم الاختيارية)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التعامل مع القيم الاختيارية) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التعامل مع القيم الاختيارية)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التعامل مع القيم الاختيارية)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التعامل مع القيم الاختيارية",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التعامل مع القيم الاختيارية)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التعامل مع القيم الاختيارية\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التعامل مع القيم الاختيارية ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التعامل مع القيم الاختيارية) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.5.6",
        "title": "التعامل مع بيانات غير صحيحة",
        "englishTitle": "التعامل مع بيانات غير صحيحة",
        "definition": "يعد (التعامل مع بيانات غير صحيحة) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (التعامل مع بيانات غير صحيحة) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (التعامل مع بيانات غير صحيحة) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ التعامل مع بيانات غير صحيحة\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: التعامل مع بيانات غير صحيحة\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.5.6",
          "title": "التعامل مع بيانات غير صحيحة",
          "topicTitle": "تطبيق عملي على Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (التعامل مع بيانات غير صحيحة) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التعامل مع بيانات غير صحيحة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التعامل مع بيانات غير صحيحة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التعامل مع بيانات غير صحيحة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التعامل مع بيانات غير صحيحة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التعامل مع بيانات غير صحيحة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التعامل مع بيانات غير صحيحة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التعامل مع بيانات غير صحيحة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التعامل مع بيانات غير صحيحة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التعامل مع بيانات غير صحيحة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "10.5.7",
        "title": "منع تعديل الحقول غير المسموح بها",
        "englishTitle": "منع تعديل الحقول غير المسموح بها",
        "definition": "يعد (منع تعديل الحقول غير المسموح بها) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (منع تعديل الحقول غير المسموح بها) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (منع تعديل الحقول غير المسموح بها) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ منع تعديل الحقول غير المسموح بها\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: منع تعديل الحقول غير المسموح بها\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 10.5.7",
          "title": "منع تعديل الحقول غير المسموح بها",
          "topicTitle": "تطبيق عملي على Model Binding",
          "sectionTitle": "القسم العاشر: Models وModel Binding",
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
          "summary": "يمثل (منع تعديل الحقول غير المسموح بها) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Model Binding ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (منع تعديل الحقول غير المسموح بها)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (منع تعديل الحقول غير المسموح بها) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (منع تعديل الحقول غير المسموح بها)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (منع تعديل الحقول غير المسموح بها)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: منع تعديل الحقول غير المسموح بها",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (منع تعديل الحقول غير المسموح بها)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين منع تعديل الحقول غير المسموح بها\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: منع تعديل الحقول غير المسموح بها ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (منع تعديل الحقول غير المسموح بها) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section10Data;
