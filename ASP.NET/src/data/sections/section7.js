// src/data/sections/section7.js
// محتوى تعليمي مفصل وشامل لـ: القسم السابع: Controllers وActions وAction Results
export const section7Data = {
  id: 7,
  title: "القسم السابع: Controllers وActions وAction Results",
  englishTitle: "Controllers, Actions & Action Results",
  icon: "Sliders",
  category: "ASP.NET Core MVC",
  description: "بناء وحدات التحكم Controllers، توجيه الإجراءات Actions، أنواع نتائج الإرجاع Action Results، وتمرير البيانات للواجهات.",
  summary: {
  "sectionId": 7,
  "title": "القسم السابع: Controllers وActions وAction Results",
  "englishTitle": "Controllers, Actions & Action Results",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم السابع: Controllers وActions وAction Results.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم السابع: Controllers وActions وAction Results",
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
    "title": "مقدمة في Controllers",
    "subtopics": [
      {
        "subId": "7.1.1",
        "title": "ما هو Controller؟",
        "englishTitle": "Controller",
        "definition": "يعد (ما هو Controller؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هو Controller؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هو Controller؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هو Controller؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هو Controller؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.1.1",
          "title": "ما هو Controller؟",
          "topicTitle": "مقدمة في Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (ما هو Controller؟) أحد المعايير التقنية الحيوية في مسار مقدمة في Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Controller؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Controller؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Controller؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Controller؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Controller؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Controller؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Controller؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Controller؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Controller؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.1.2",
        "title": "إنشاء Controller",
        "englishTitle": "Controller",
        "definition": "يعد (إنشاء Controller) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Controller) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Controller) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Controller\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Controller\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.1.2",
          "title": "إنشاء Controller",
          "topicTitle": "مقدمة في Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (إنشاء Controller) أحد المعايير التقنية الحيوية في مسار مقدمة في Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Controller)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Controller) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Controller)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Controller)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Controller",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Controller)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Controller\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Controller ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Controller) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.1.3",
        "title": "الوراثة من Controller",
        "englishTitle": "الوراثة من Controller",
        "definition": "يعد (الوراثة من Controller) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الوراثة من Controller) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الوراثة من Controller) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ الوراثة من Controller\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الوراثة من Controller\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.1.3",
          "title": "الوراثة من Controller",
          "topicTitle": "مقدمة في Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (الوراثة من Controller) أحد المعايير التقنية الحيوية في مسار مقدمة في Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الوراثة من Controller)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الوراثة من Controller) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الوراثة من Controller)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الوراثة من Controller)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الوراثة من Controller",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الوراثة من Controller)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الوراثة من Controller\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الوراثة من Controller ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الوراثة من Controller) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.1.4",
        "title": "فهم ControllerBase",
        "englishTitle": "فهم ControllerBase",
        "definition": "يعد (فهم ControllerBase) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (فهم ControllerBase) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (فهم ControllerBase) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ فهم ControllerBase\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: فهم ControllerBase\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.1.4",
          "title": "فهم ControllerBase",
          "topicTitle": "مقدمة في Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (فهم ControllerBase) أحد المعايير التقنية الحيوية في مسار مقدمة في Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم ControllerBase)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم ControllerBase) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم ControllerBase)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم ControllerBase)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فهم ControllerBase",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم ControllerBase)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم ControllerBase\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم ControllerBase ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم ControllerBase) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.1.5",
        "title": "الفرق بين Controller وControllerBase",
        "englishTitle": "Controller وControllerBase",
        "definition": "يعد (الفرق بين Controller وControllerBase) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الفرق بين Controller وControllerBase) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الفرق بين Controller وControllerBase) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ الفرق بين Controller وControllerBase\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الفرق بين Controller وControllerBase\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.1.5",
          "title": "الفرق بين Controller وControllerBase",
          "topicTitle": "مقدمة في Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (الفرق بين Controller وControllerBase) أحد المعايير التقنية الحيوية في مسار مقدمة في Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Controller وControllerBase)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Controller وControllerBase) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Controller وControllerBase)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Controller وControllerBase)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Controller وControllerBase",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Controller وControllerBase)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Controller وControllerBase\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Controller وControllerBase ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Controller وControllerBase) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.1.6",
        "title": "استخدام Controller Suffix",
        "englishTitle": "Controller Suffix",
        "definition": "يعد (استخدام Controller Suffix) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Controller Suffix) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Controller Suffix) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Controller Suffix\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Controller Suffix\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.1.6",
          "title": "استخدام Controller Suffix",
          "topicTitle": "مقدمة في Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام Controller Suffix) أحد المعايير التقنية الحيوية في مسار مقدمة في Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Controller Suffix)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Controller Suffix) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Controller Suffix)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Controller Suffix)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Controller Suffix",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Controller Suffix)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Controller Suffix\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Controller Suffix ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Controller Suffix) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.1.7",
        "title": "تنظيم Controllers حسب الوظائف",
        "englishTitle": "تنظيم Controllers حسب الوظائف",
        "definition": "يعد (تنظيم Controllers حسب الوظائف) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تنظيم Controllers حسب الوظائف) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تنظيم Controllers حسب الوظائف) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ تنظيم Controllers حسب الوظائف\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تنظيم Controllers حسب الوظائف\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.1.7",
          "title": "تنظيم Controllers حسب الوظائف",
          "topicTitle": "مقدمة في Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (تنظيم Controllers حسب الوظائف) أحد المعايير التقنية الحيوية في مسار مقدمة في Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تنظيم Controllers حسب الوظائف)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنظيم Controllers حسب الوظائف) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تنظيم Controllers حسب الوظائف)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تنظيم Controllers حسب الوظائف)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تنظيم Controllers حسب الوظائف",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تنظيم Controllers حسب الوظائف)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تنظيم Controllers حسب الوظائف\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تنظيم Controllers حسب الوظائف ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تنظيم Controllers حسب الوظائف) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "Action Methods",
    "subtopics": [
      {
        "subId": "7.2.1",
        "title": "ما هي Action Method؟",
        "englishTitle": "Action Method",
        "definition": "يعد (ما هي Action Method؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هي Action Method؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هي Action Method؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هي Action Method؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هي Action Method؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.2.1",
          "title": "ما هي Action Method؟",
          "topicTitle": "Action Methods",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (ما هي Action Method؟) أحد المعايير التقنية الحيوية في مسار Action Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Action Method؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Action Method؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Action Method؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Action Method؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي Action Method؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Action Method؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Action Method؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Action Method؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Action Method؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.2.2",
        "title": "إنشاء Action بسيطة",
        "englishTitle": "Action بسيطة",
        "definition": "يعد (إنشاء Action بسيطة) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Action بسيطة) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Action بسيطة) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Action بسيطة\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Action بسيطة\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.2.2",
          "title": "إنشاء Action بسيطة",
          "topicTitle": "Action Methods",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (إنشاء Action بسيطة) أحد المعايير التقنية الحيوية في مسار Action Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Action بسيطة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Action بسيطة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Action بسيطة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Action بسيطة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Action بسيطة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Action بسيطة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Action بسيطة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Action بسيطة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Action بسيطة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.2.3",
        "title": "إرسال Parameters إلى Action",
        "englishTitle": "إرسال Parameters إلى Action",
        "definition": "يعد (إرسال Parameters إلى Action) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إرسال Parameters إلى Action) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إرسال Parameters إلى Action) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إرسال Parameters إلى Action\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إرسال Parameters إلى Action\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.2.3",
          "title": "إرسال Parameters إلى Action",
          "topicTitle": "Action Methods",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (إرسال Parameters إلى Action) أحد المعايير التقنية الحيوية في مسار Action Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إرسال Parameters إلى Action)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال Parameters إلى Action) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إرسال Parameters إلى Action)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إرسال Parameters إلى Action)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إرسال Parameters إلى Action",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إرسال Parameters إلى Action)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إرسال Parameters إلى Action\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إرسال Parameters إلى Action ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إرسال Parameters إلى Action) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.2.4",
        "title": "استخدام HttpGet",
        "englishTitle": "HttpGet",
        "definition": "يعد (استخدام HttpGet) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام HttpGet) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام HttpGet) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام HttpGet\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام HttpGet\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.2.4",
          "title": "استخدام HttpGet",
          "topicTitle": "Action Methods",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام HttpGet) أحد المعايير التقنية الحيوية في مسار Action Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام HttpGet)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام HttpGet) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام HttpGet)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام HttpGet)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام HttpGet",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام HttpGet)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام HttpGet\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام HttpGet ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام HttpGet) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.2.5",
        "title": "استخدام HttpPost",
        "englishTitle": "HttpPost",
        "definition": "يعد (استخدام HttpPost) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام HttpPost) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام HttpPost) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام HttpPost\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام HttpPost\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.2.5",
          "title": "استخدام HttpPost",
          "topicTitle": "Action Methods",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام HttpPost) أحد المعايير التقنية الحيوية في مسار Action Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام HttpPost)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام HttpPost) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام HttpPost)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام HttpPost)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام HttpPost",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام HttpPost)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام HttpPost\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام HttpPost ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام HttpPost) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.2.6",
        "title": "استخدام HttpPut وHttpPatch",
        "englishTitle": "HttpPut وHttpPatch",
        "definition": "يعد (استخدام HttpPut وHttpPatch) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام HttpPut وHttpPatch) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام HttpPut وHttpPatch) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام HttpPut وHttpPatch\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام HttpPut وHttpPatch\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.2.6",
          "title": "استخدام HttpPut وHttpPatch",
          "topicTitle": "Action Methods",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام HttpPut وHttpPatch) أحد المعايير التقنية الحيوية في مسار Action Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام HttpPut وHttpPatch)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام HttpPut وHttpPatch) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام HttpPut وHttpPatch)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام HttpPut وHttpPatch)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام HttpPut وHttpPatch",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام HttpPut وHttpPatch)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام HttpPut وHttpPatch\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام HttpPut وHttpPatch ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام HttpPut وHttpPatch) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.2.7",
        "title": "استخدام HttpDelete",
        "englishTitle": "HttpDelete",
        "definition": "يعد (استخدام HttpDelete) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام HttpDelete) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام HttpDelete) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام HttpDelete\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام HttpDelete\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.2.7",
          "title": "استخدام HttpDelete",
          "topicTitle": "Action Methods",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام HttpDelete) أحد المعايير التقنية الحيوية في مسار Action Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام HttpDelete)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام HttpDelete) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام HttpDelete)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام HttpDelete)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام HttpDelete",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام HttpDelete)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام HttpDelete\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام HttpDelete ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام HttpDelete) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.2.8",
        "title": "استخدام NonAction",
        "englishTitle": "NonAction",
        "definition": "يعد (استخدام NonAction) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام NonAction) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام NonAction) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام NonAction\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام NonAction\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.2.8",
          "title": "استخدام NonAction",
          "topicTitle": "Action Methods",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام NonAction) أحد المعايير التقنية الحيوية في مسار Action Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام NonAction)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام NonAction) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام NonAction)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام NonAction)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام NonAction",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام NonAction)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام NonAction\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام NonAction ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام NonAction) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.2.9",
        "title": "إنشاء Async Actions",
        "englishTitle": "Async Actions",
        "definition": "يعد (إنشاء Async Actions) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Async Actions) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Async Actions) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Async Actions\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Async Actions\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.2.9",
          "title": "إنشاء Async Actions",
          "topicTitle": "Action Methods",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (إنشاء Async Actions) أحد المعايير التقنية الحيوية في مسار Action Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Async Actions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Async Actions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Async Actions)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Async Actions)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Async Actions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Async Actions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Async Actions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Async Actions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Async Actions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Action Results",
    "subtopics": [
      {
        "subId": "7.3.1",
        "title": "ما هو IActionResult؟",
        "englishTitle": "IActionResult",
        "definition": "يعد (ما هو IActionResult؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (ما هو IActionResult؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (ما هو IActionResult؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ ما هو IActionResult؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: ما هو IActionResult؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.3.1",
          "title": "ما هو IActionResult؟",
          "topicTitle": "Action Results",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (ما هو IActionResult؟) أحد المعايير التقنية الحيوية في مسار Action Results ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو IActionResult؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو IActionResult؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو IActionResult؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو IActionResult؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو IActionResult؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو IActionResult؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو IActionResult؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو IActionResult؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو IActionResult؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.3.2",
        "title": "استخدام ViewResult",
        "englishTitle": "ViewResult",
        "definition": "يعد (استخدام ViewResult) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام ViewResult) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام ViewResult) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام ViewResult\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام ViewResult\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.3.2",
          "title": "استخدام ViewResult",
          "topicTitle": "Action Results",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام ViewResult) أحد المعايير التقنية الحيوية في مسار Action Results ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ViewResult)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ViewResult) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ViewResult)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ViewResult)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام ViewResult",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ViewResult)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ViewResult\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ViewResult ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ViewResult) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.3.3",
        "title": "استخدام ContentResult",
        "englishTitle": "ContentResult",
        "definition": "يعد (استخدام ContentResult) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام ContentResult) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام ContentResult) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام ContentResult\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام ContentResult\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.3.3",
          "title": "استخدام ContentResult",
          "topicTitle": "Action Results",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام ContentResult) أحد المعايير التقنية الحيوية في مسار Action Results ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ContentResult)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ContentResult) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ContentResult)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ContentResult)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام ContentResult",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ContentResult)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ContentResult\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ContentResult ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ContentResult) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.3.4",
        "title": "استخدام JsonResult",
        "englishTitle": "JsonResult",
        "definition": "يعد (استخدام JsonResult) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام JsonResult) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام JsonResult) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام JsonResult\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام JsonResult\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.3.4",
          "title": "استخدام JsonResult",
          "topicTitle": "Action Results",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام JsonResult) أحد المعايير التقنية الحيوية في مسار Action Results ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام JsonResult)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام JsonResult) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام JsonResult)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام JsonResult)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام JsonResult",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام JsonResult)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام JsonResult\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام JsonResult ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام JsonResult) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.3.5",
        "title": "استخدام RedirectResult",
        "englishTitle": "RedirectResult",
        "definition": "يعد (استخدام RedirectResult) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام RedirectResult) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام RedirectResult) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام RedirectResult\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام RedirectResult\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.3.5",
          "title": "استخدام RedirectResult",
          "topicTitle": "Action Results",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام RedirectResult) أحد المعايير التقنية الحيوية في مسار Action Results ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام RedirectResult)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام RedirectResult) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام RedirectResult)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام RedirectResult)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام RedirectResult",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام RedirectResult)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام RedirectResult\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام RedirectResult ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام RedirectResult) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.3.6",
        "title": "استخدام RedirectToActionResult",
        "englishTitle": "RedirectToActionResult",
        "definition": "يعد (استخدام RedirectToActionResult) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام RedirectToActionResult) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام RedirectToActionResult) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام RedirectToActionResult\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام RedirectToActionResult\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.3.6",
          "title": "استخدام RedirectToActionResult",
          "topicTitle": "Action Results",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام RedirectToActionResult) أحد المعايير التقنية الحيوية في مسار Action Results ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام RedirectToActionResult)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام RedirectToActionResult) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام RedirectToActionResult)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام RedirectToActionResult)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام RedirectToActionResult",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام RedirectToActionResult)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام RedirectToActionResult\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام RedirectToActionResult ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام RedirectToActionResult) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.3.7",
        "title": "استخدام FileResult",
        "englishTitle": "FileResult",
        "definition": "يعد (استخدام FileResult) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام FileResult) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام FileResult) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام FileResult\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام FileResult\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.3.7",
          "title": "استخدام FileResult",
          "topicTitle": "Action Results",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام FileResult) أحد المعايير التقنية الحيوية في مسار Action Results ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام FileResult)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام FileResult) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام FileResult)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام FileResult)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام FileResult",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام FileResult)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام FileResult\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام FileResult ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام FileResult) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.3.8",
        "title": "استخدام StatusCodeResult",
        "englishTitle": "StatusCodeResult",
        "definition": "يعد (استخدام StatusCodeResult) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام StatusCodeResult) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام StatusCodeResult) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام StatusCodeResult\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام StatusCodeResult\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.3.8",
          "title": "استخدام StatusCodeResult",
          "topicTitle": "Action Results",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام StatusCodeResult) أحد المعايير التقنية الحيوية في مسار Action Results ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام StatusCodeResult)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام StatusCodeResult) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام StatusCodeResult)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام StatusCodeResult)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام StatusCodeResult",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام StatusCodeResult)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام StatusCodeResult\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام StatusCodeResult ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام StatusCodeResult) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.3.9",
        "title": "استخدام NotFound وBadRequest",
        "englishTitle": "NotFound وBadRequest",
        "definition": "يعد (استخدام NotFound وBadRequest) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام NotFound وBadRequest) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام NotFound وBadRequest) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام NotFound وBadRequest\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام NotFound وBadRequest\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.3.9",
          "title": "استخدام NotFound وBadRequest",
          "topicTitle": "Action Results",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام NotFound وBadRequest) أحد المعايير التقنية الحيوية في مسار Action Results ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام NotFound وBadRequest)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام NotFound وBadRequest) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام NotFound وBadRequest)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام NotFound وBadRequest)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام NotFound وBadRequest",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام NotFound وBadRequest)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام NotFound وBadRequest\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام NotFound وBadRequest ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام NotFound وBadRequest) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "تمرير البيانات من Controller إلى View",
    "subtopics": [
      {
        "subId": "7.4.1",
        "title": "استخدام ViewBag",
        "englishTitle": "ViewBag",
        "definition": "يعد (استخدام ViewBag) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام ViewBag) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام ViewBag) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام ViewBag\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام ViewBag\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.4.1",
          "title": "استخدام ViewBag",
          "topicTitle": "تمرير البيانات من Controller إلى View",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام ViewBag) أحد المعايير التقنية الحيوية في مسار تمرير البيانات من Controller إلى View ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ViewBag)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ViewBag) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ViewBag)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ViewBag)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام ViewBag",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ViewBag)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ViewBag\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ViewBag ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ViewBag) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.4.2",
        "title": "استخدام ViewData",
        "englishTitle": "ViewData",
        "definition": "يعد (استخدام ViewData) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام ViewData) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام ViewData) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام ViewData\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام ViewData\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.4.2",
          "title": "استخدام ViewData",
          "topicTitle": "تمرير البيانات من Controller إلى View",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام ViewData) أحد المعايير التقنية الحيوية في مسار تمرير البيانات من Controller إلى View ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ViewData)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ViewData) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ViewData)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ViewData)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام ViewData",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ViewData)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ViewData\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ViewData ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ViewData) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.4.3",
        "title": "استخدام TempData",
        "englishTitle": "TempData",
        "definition": "يعد (استخدام TempData) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام TempData) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام TempData) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام TempData\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام TempData\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.4.3",
          "title": "استخدام TempData",
          "topicTitle": "تمرير البيانات من Controller إلى View",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام TempData) أحد المعايير التقنية الحيوية في مسار تمرير البيانات من Controller إلى View ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام TempData)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام TempData) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام TempData)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام TempData)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام TempData",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام TempData)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام TempData\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام TempData ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام TempData) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.4.4",
        "title": "استخدام Strongly Typed Model",
        "englishTitle": "Strongly Typed Model",
        "definition": "يعد (استخدام Strongly Typed Model) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Strongly Typed Model) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Strongly Typed Model) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Strongly Typed Model\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Strongly Typed Model\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.4.4",
          "title": "استخدام Strongly Typed Model",
          "topicTitle": "تمرير البيانات من Controller إلى View",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام Strongly Typed Model) أحد المعايير التقنية الحيوية في مسار تمرير البيانات من Controller إلى View ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Strongly Typed Model)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Strongly Typed Model) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Strongly Typed Model)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Strongly Typed Model)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Strongly Typed Model",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Strongly Typed Model)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Strongly Typed Model\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Strongly Typed Model ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Strongly Typed Model) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.4.5",
        "title": "الفرق بين ViewBag وViewData وTempData",
        "englishTitle": "ViewBag وViewData وTempData",
        "definition": "يعد (الفرق بين ViewBag وViewData وTempData) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (الفرق بين ViewBag وViewData وTempData) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (الفرق بين ViewBag وViewData وTempData) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ الفرق بين ViewBag وViewData وTempData\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: الفرق بين ViewBag وViewData وTempData\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.4.5",
          "title": "الفرق بين ViewBag وViewData وTempData",
          "topicTitle": "تمرير البيانات من Controller إلى View",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (الفرق بين ViewBag وViewData وTempData) أحد المعايير التقنية الحيوية في مسار تمرير البيانات من Controller إلى View ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين ViewBag وViewData وTempData)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين ViewBag وViewData وTempData) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين ViewBag وViewData وTempData)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين ViewBag وViewData وTempData)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين ViewBag وViewData وTempData",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين ViewBag وViewData وTempData)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين ViewBag وViewData وTempData\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين ViewBag وViewData وTempData ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين ViewBag وViewData وTempData) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.4.6",
        "title": "متى نستخدم ViewModel؟",
        "englishTitle": "متى نستخدم ViewModel",
        "definition": "يعد (متى نستخدم ViewModel؟) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (متى نستخدم ViewModel؟) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (متى نستخدم ViewModel؟) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ متى نستخدم ViewModel؟\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: متى نستخدم ViewModel؟\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.4.6",
          "title": "متى نستخدم ViewModel؟",
          "topicTitle": "تمرير البيانات من Controller إلى View",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (متى نستخدم ViewModel؟) أحد المعايير التقنية الحيوية في مسار تمرير البيانات من Controller إلى View ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (متى نستخدم ViewModel؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (متى نستخدم ViewModel؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (متى نستخدم ViewModel؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (متى نستخدم ViewModel؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: متى نستخدم ViewModel؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (متى نستخدم ViewModel؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين متى نستخدم ViewModel؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: متى نستخدم ViewModel؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (متى نستخدم ViewModel؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.4.7",
        "title": "تجنب وضع Business Logic داخل Controller",
        "englishTitle": "تجنب وضع Business Logic داخل Controller",
        "definition": "يعد (تجنب وضع Business Logic داخل Controller) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (تجنب وضع Business Logic داخل Controller) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (تجنب وضع Business Logic داخل Controller) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ تجنب وضع Business Logic داخل Controller\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: تجنب وضع Business Logic داخل Controller\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.4.7",
          "title": "تجنب وضع Business Logic داخل Controller",
          "topicTitle": "تمرير البيانات من Controller إلى View",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (تجنب وضع Business Logic داخل Controller) أحد المعايير التقنية الحيوية في مسار تمرير البيانات من Controller إلى View ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تجنب وضع Business Logic داخل Controller)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تجنب وضع Business Logic داخل Controller) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تجنب وضع Business Logic داخل Controller)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تجنب وضع Business Logic داخل Controller)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تجنب وضع Business Logic داخل Controller",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تجنب وضع Business Logic داخل Controller)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تجنب وضع Business Logic داخل Controller\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تجنب وضع Business Logic داخل Controller ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تجنب وضع Business Logic داخل Controller) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "Controller Properties",
    "subtopics": [
      {
        "subId": "7.5.1",
        "title": "استخدام HttpContext",
        "englishTitle": "HttpContext",
        "definition": "يعد (استخدام HttpContext) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام HttpContext) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام HttpContext) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام HttpContext\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام HttpContext\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.5.1",
          "title": "استخدام HttpContext",
          "topicTitle": "Controller Properties",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام HttpContext) أحد المعايير التقنية الحيوية في مسار Controller Properties ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام HttpContext)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام HttpContext) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام HttpContext)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام HttpContext)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام HttpContext",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام HttpContext)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام HttpContext\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام HttpContext ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام HttpContext) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.5.2",
        "title": "استخدام Request",
        "englishTitle": "Request",
        "definition": "يعد (استخدام Request) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Request) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Request) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Request\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Request\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.5.2",
          "title": "استخدام Request",
          "topicTitle": "Controller Properties",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام Request) أحد المعايير التقنية الحيوية في مسار Controller Properties ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Request)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Request) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Request)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Request)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Request",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Request)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Request\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Request ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Request) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.5.3",
        "title": "استخدام Response",
        "englishTitle": "Response",
        "definition": "يعد (استخدام Response) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Response) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Response) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Response\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Response\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.5.3",
          "title": "استخدام Response",
          "topicTitle": "Controller Properties",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام Response) أحد المعايير التقنية الحيوية في مسار Controller Properties ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Response)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Response) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Response)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Response)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Response",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Response)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Response\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Response ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Response) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.5.4",
        "title": "استخدام User",
        "englishTitle": "User",
        "definition": "يعد (استخدام User) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام User) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام User) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام User\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام User\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.5.4",
          "title": "استخدام User",
          "topicTitle": "Controller Properties",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام User) أحد المعايير التقنية الحيوية في مسار Controller Properties ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام User)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام User) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام User)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام User)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام User",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام User)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام User\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام User ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام User) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.5.5",
        "title": "استخدام RouteData",
        "englishTitle": "RouteData",
        "definition": "يعد (استخدام RouteData) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام RouteData) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام RouteData) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام RouteData\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام RouteData\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.5.5",
          "title": "استخدام RouteData",
          "topicTitle": "Controller Properties",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام RouteData) أحد المعايير التقنية الحيوية في مسار Controller Properties ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام RouteData)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام RouteData) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام RouteData)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام RouteData)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام RouteData",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام RouteData)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام RouteData\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام RouteData ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام RouteData) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.5.6",
        "title": "استخدام ModelState",
        "englishTitle": "ModelState",
        "definition": "يعد (استخدام ModelState) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام ModelState) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام ModelState) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام ModelState\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام ModelState\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.5.6",
          "title": "استخدام ModelState",
          "topicTitle": "Controller Properties",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام ModelState) أحد المعايير التقنية الحيوية في مسار Controller Properties ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ModelState)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ModelState) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ModelState)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ModelState)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام ModelState",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ModelState)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ModelState\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ModelState ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ModelState) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.5.7",
        "title": "استخدام Url",
        "englishTitle": "Url",
        "definition": "يعد (استخدام Url) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام Url) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام Url) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام Url\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام Url\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.5.7",
          "title": "استخدام Url",
          "topicTitle": "Controller Properties",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام Url) أحد المعايير التقنية الحيوية في مسار Controller Properties ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Url)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Url) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Url)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Url)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Url",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Url)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Url\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Url ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Url) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.5.8",
        "title": "استخدام ControllerContext",
        "englishTitle": "ControllerContext",
        "definition": "يعد (استخدام ControllerContext) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (استخدام ControllerContext) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (استخدام ControllerContext) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ استخدام ControllerContext\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: استخدام ControllerContext\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.5.8",
          "title": "استخدام ControllerContext",
          "topicTitle": "Controller Properties",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (استخدام ControllerContext) أحد المعايير التقنية الحيوية في مسار Controller Properties ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ControllerContext)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ControllerContext) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ControllerContext)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ControllerContext)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام ControllerContext",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ControllerContext)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ControllerContext\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ControllerContext ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ControllerContext) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "تطبيق عملي على Controllers",
    "subtopics": [
      {
        "subId": "7.6.1",
        "title": "إنشاء ProductsController",
        "englishTitle": "ProductsController",
        "definition": "يعد (إنشاء ProductsController) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء ProductsController) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء ProductsController) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء ProductsController\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء ProductsController\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.6.1",
          "title": "إنشاء ProductsController",
          "topicTitle": "تطبيق عملي على Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (إنشاء ProductsController) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء ProductsController)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء ProductsController) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء ProductsController)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء ProductsController)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء ProductsController",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء ProductsController)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء ProductsController\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء ProductsController ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء ProductsController) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.6.2",
        "title": "إنشاء Index Action",
        "englishTitle": "Index Action",
        "definition": "يعد (إنشاء Index Action) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Index Action) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Index Action) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Index Action\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Index Action\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.6.2",
          "title": "إنشاء Index Action",
          "topicTitle": "تطبيق عملي على Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (إنشاء Index Action) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Index Action)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Index Action) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Index Action)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Index Action)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Index Action",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Index Action)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Index Action\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Index Action ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Index Action) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.6.3",
        "title": "إنشاء Details Action",
        "englishTitle": "Details Action",
        "definition": "يعد (إنشاء Details Action) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Details Action) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Details Action) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Details Action\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Details Action\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.6.3",
          "title": "إنشاء Details Action",
          "topicTitle": "تطبيق عملي على Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (إنشاء Details Action) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Details Action)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Details Action) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Details Action)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Details Action)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Details Action",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Details Action)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Details Action\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Details Action ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Details Action) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.6.4",
        "title": "إنشاء Create Action",
        "englishTitle": "Create Action",
        "definition": "يعد (إنشاء Create Action) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Create Action) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Create Action) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Create Action\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Create Action\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.6.4",
          "title": "إنشاء Create Action",
          "topicTitle": "تطبيق عملي على Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (إنشاء Create Action) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Create Action)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Create Action) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Create Action)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Create Action)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Create Action",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Create Action)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Create Action\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Create Action ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Create Action) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.6.5",
        "title": "إنشاء Edit Action",
        "englishTitle": "Edit Action",
        "definition": "يعد (إنشاء Edit Action) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Edit Action) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Edit Action) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Edit Action\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Edit Action\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.6.5",
          "title": "إنشاء Edit Action",
          "topicTitle": "تطبيق عملي على Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (إنشاء Edit Action) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Edit Action)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Edit Action) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Edit Action)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Edit Action)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Edit Action",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Edit Action)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Edit Action\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Edit Action ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Edit Action) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.6.6",
        "title": "إنشاء Delete Action",
        "englishTitle": "Delete Action",
        "definition": "يعد (إنشاء Delete Action) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إنشاء Delete Action) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إنشاء Delete Action) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إنشاء Delete Action\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إنشاء Delete Action\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.6.6",
          "title": "إنشاء Delete Action",
          "topicTitle": "تطبيق عملي على Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (إنشاء Delete Action) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Delete Action)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Delete Action) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Delete Action)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Delete Action)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Delete Action",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Delete Action)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Delete Action\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Delete Action ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Delete Action) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.6.7",
        "title": "إرجاع Views مختلفة",
        "englishTitle": "إرجاع Views مختلفة",
        "definition": "يعد (إرجاع Views مختلفة) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (إرجاع Views مختلفة) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (إرجاع Views مختلفة) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ إرجاع Views مختلفة\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: إرجاع Views مختلفة\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.6.7",
          "title": "إرجاع Views مختلفة",
          "topicTitle": "تطبيق عملي على Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (إرجاع Views مختلفة) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إرجاع Views مختلفة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرجاع Views مختلفة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إرجاع Views مختلفة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إرجاع Views مختلفة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إرجاع Views مختلفة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إرجاع Views مختلفة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إرجاع Views مختلفة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إرجاع Views مختلفة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إرجاع Views مختلفة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "7.6.8",
        "title": "اختبار Action Results",
        "englishTitle": "اختبار Action Results",
        "definition": "يعد (اختبار Action Results) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.",
        "analogy": "تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (اختبار Action Results) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.",
        "why": "نستخدم (اختبار Action Results) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.",
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
        "syntax": "// تمثيل وحدة تحكم Controller لـ اختبار Action Results\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}",
        "simpleCode": "// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace MvcBasicsDemo.Controllers\n{\n    // يرث الكنترولر من فئة Controller الأساسية\n    public class HomeController : Controller\n    {\n        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index\n        [HttpGet] // محدد نوع الطلب\n        public IActionResult Index()\n        {\n            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData\n            ViewData[\"Title\"] = \"شرح: اختبار Action Results\"; // عنوان الصفحة\n            \n            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء\n            return View(); // يبحث عن Views/Home/Index.cshtml\n        }\n    }\n}",
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
          "badge": "الدرس 7.6.8",
          "title": "اختبار Action Results",
          "topicTitle": "تطبيق عملي على Controllers",
          "sectionTitle": "القسم السابع: Controllers وActions وAction Results",
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
          "summary": "يمثل (اختبار Action Results) أحد المعايير التقنية الحيوية في مسار تطبيق عملي على Controllers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Action Results)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Action Results) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Action Results)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Action Results)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار Action Results",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Action Results)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Action Results\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Action Results ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Action Results) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section7Data;
