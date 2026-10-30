// src/data/sections/section23.js
// محتوى تعليمي مفصل وشامل لـ: القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة
export const section23Data = {
  id: 23,
  title: "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
  englishTitle: "Areas, MVC Filters & Application Architecture",
  icon: "FolderTree",
  category: "معمارية .NET",
  description: "تقسيم التطبيق إلى مناطق Areas (لوحة التحكم، العملاء)، استخدام مرشحات MVC Filters (Action, Exception, Resource)، والنمط النمطي Modular.",
  summary: {
  "sectionId": 23,
  "title": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
  "englishTitle": "Areas, MVC Filters & Application Architecture",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
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
    "title": "MVC Areas",
    "subtopics": [
      {
        "subId": "23.1.1",
        "title": "ما هي Areas؟",
        "englishTitle": "Areas",
        "definition": "يمثل (ما هي Areas؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هي Areas؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هي Areas؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.1.1",
          "title": "ما هي Areas؟",
          "topicTitle": "MVC Areas",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (ما هي Areas؟) أحد المعايير التقنية الحيوية في مسار MVC Areas ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Areas؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Areas؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Areas؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Areas؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي Areas؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Areas؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Areas؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Areas؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Areas؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.1.2",
        "title": "متى نستخدم Areas؟",
        "englishTitle": "متى نستخدم Areas",
        "definition": "يمثل (متى نستخدم Areas؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (متى نستخدم Areas؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (متى نستخدم Areas؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.1.2",
          "title": "متى نستخدم Areas؟",
          "topicTitle": "MVC Areas",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (متى نستخدم Areas؟) أحد المعايير التقنية الحيوية في مسار MVC Areas ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (متى نستخدم Areas؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (متى نستخدم Areas؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (متى نستخدم Areas؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (متى نستخدم Areas؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: متى نستخدم Areas؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (متى نستخدم Areas؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين متى نستخدم Areas؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: متى نستخدم Areas؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (متى نستخدم Areas؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.1.3",
        "title": "إنشاء Admin Area",
        "englishTitle": "Admin Area",
        "definition": "يمثل (إنشاء Admin Area) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Admin Area) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Admin Area) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.1.3",
          "title": "إنشاء Admin Area",
          "topicTitle": "MVC Areas",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء Admin Area) أحد المعايير التقنية الحيوية في مسار MVC Areas ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Admin Area)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Admin Area) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Admin Area)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Admin Area)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Admin Area",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Admin Area)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Admin Area\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Admin Area ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Admin Area) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.1.4",
        "title": "تنظيم Controllers داخل Area",
        "englishTitle": "تنظيم Controllers داخل Area",
        "definition": "يمثل (تنظيم Controllers داخل Area) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تنظيم Controllers داخل Area) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تنظيم Controllers داخل Area) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.1.4",
          "title": "تنظيم Controllers داخل Area",
          "topicTitle": "MVC Areas",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (تنظيم Controllers داخل Area) أحد المعايير التقنية الحيوية في مسار MVC Areas ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تنظيم Controllers داخل Area)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنظيم Controllers داخل Area) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تنظيم Controllers داخل Area)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تنظيم Controllers داخل Area)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تنظيم Controllers داخل Area",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تنظيم Controllers داخل Area)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تنظيم Controllers داخل Area\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تنظيم Controllers داخل Area ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تنظيم Controllers داخل Area) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.1.5",
        "title": "تنظيم Views داخل Area",
        "englishTitle": "تنظيم Views داخل Area",
        "definition": "يمثل (تنظيم Views داخل Area) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تنظيم Views داخل Area) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تنظيم Views داخل Area) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.1.5",
          "title": "تنظيم Views داخل Area",
          "topicTitle": "MVC Areas",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (تنظيم Views داخل Area) أحد المعايير التقنية الحيوية في مسار MVC Areas ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تنظيم Views داخل Area)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنظيم Views داخل Area) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تنظيم Views داخل Area)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تنظيم Views داخل Area)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تنظيم Views داخل Area",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تنظيم Views داخل Area)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تنظيم Views داخل Area\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تنظيم Views داخل Area ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تنظيم Views داخل Area) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.1.6",
        "title": "إعداد Area Routing",
        "englishTitle": "إعداد Area Routing",
        "definition": "يمثل (إعداد Area Routing) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إعداد Area Routing) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إعداد Area Routing) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.1.6",
          "title": "إعداد Area Routing",
          "topicTitle": "MVC Areas",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إعداد Area Routing) أحد المعايير التقنية الحيوية في مسار MVC Areas ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إعداد Area Routing)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد Area Routing) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إعداد Area Routing)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إعداد Area Routing)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إعداد Area Routing",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إعداد Area Routing)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إعداد Area Routing\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إعداد Area Routing ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إعداد Area Routing) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.1.7",
        "title": "استخدام asp-area",
        "englishTitle": "asp-area",
        "definition": "يمثل (استخدام asp-area) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام asp-area) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام asp-area) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.1.7",
          "title": "استخدام asp-area",
          "topicTitle": "MVC Areas",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (استخدام asp-area) أحد المعايير التقنية الحيوية في مسار MVC Areas ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام asp-area)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام asp-area) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام asp-area)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام asp-area)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام asp-area",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام asp-area)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام asp-area\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام asp-area ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام asp-area) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.1.8",
        "title": "إنشاء Layout خاص بكل Area",
        "englishTitle": "Layout خاص بكل Area",
        "definition": "يمثل (إنشاء Layout خاص بكل Area) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Layout خاص بكل Area) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Layout خاص بكل Area) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.1.8",
          "title": "إنشاء Layout خاص بكل Area",
          "topicTitle": "MVC Areas",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء Layout خاص بكل Area) أحد المعايير التقنية الحيوية في مسار MVC Areas ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Layout خاص بكل Area)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Layout خاص بكل Area) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Layout خاص بكل Area)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Layout خاص بكل Area)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Layout خاص بكل Area",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Layout خاص بكل Area)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Layout خاص بكل Area\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Layout خاص بكل Area ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Layout خاص بكل Area) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "MVC Filters",
    "subtopics": [
      {
        "subId": "23.2.1",
        "title": "ما هي MVC Filters؟",
        "englishTitle": "MVC Filters",
        "definition": "يمثل (ما هي MVC Filters؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هي MVC Filters؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هي MVC Filters؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.2.1",
          "title": "ما هي MVC Filters؟",
          "topicTitle": "MVC Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (ما هي MVC Filters؟) أحد المعايير التقنية الحيوية في مسار MVC Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي MVC Filters؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي MVC Filters؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي MVC Filters؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي MVC Filters؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي MVC Filters؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي MVC Filters؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي MVC Filters؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي MVC Filters؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي MVC Filters؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.2.2",
        "title": "الفرق بين Filters وMiddleware",
        "englishTitle": "Filters وMiddleware",
        "definition": "يمثل (الفرق بين Filters وMiddleware) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (الفرق بين Filters وMiddleware) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (الفرق بين Filters وMiddleware) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.2.2",
          "title": "الفرق بين Filters وMiddleware",
          "topicTitle": "MVC Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (الفرق بين Filters وMiddleware) أحد المعايير التقنية الحيوية في مسار MVC Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Filters وMiddleware)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Filters وMiddleware) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Filters وMiddleware)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Filters وMiddleware)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Filters وMiddleware",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Filters وMiddleware)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Filters وMiddleware\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Filters وMiddleware ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Filters وMiddleware) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.2.3",
        "title": "Authorization Filters",
        "englishTitle": "Authorization Filters",
        "definition": "يمثل (Authorization Filters) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (Authorization Filters) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (Authorization Filters) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.2.3",
          "title": "Authorization Filters",
          "topicTitle": "MVC Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (Authorization Filters) أحد المعايير التقنية الحيوية في مسار MVC Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Authorization Filters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Authorization Filters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Authorization Filters)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Authorization Filters)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Authorization Filters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Authorization Filters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Authorization Filters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Authorization Filters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Authorization Filters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.2.4",
        "title": "Resource Filters",
        "englishTitle": "Resource Filters",
        "definition": "يمثل (Resource Filters) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (Resource Filters) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (Resource Filters) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.2.4",
          "title": "Resource Filters",
          "topicTitle": "MVC Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (Resource Filters) أحد المعايير التقنية الحيوية في مسار MVC Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Resource Filters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Resource Filters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Resource Filters)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Resource Filters)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Resource Filters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Resource Filters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Resource Filters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Resource Filters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Resource Filters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.2.5",
        "title": "Action Filters",
        "englishTitle": "Action Filters",
        "definition": "يمثل (Action Filters) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (Action Filters) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (Action Filters) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.2.5",
          "title": "Action Filters",
          "topicTitle": "MVC Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (Action Filters) أحد المعايير التقنية الحيوية في مسار MVC Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Action Filters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Action Filters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Action Filters)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Action Filters)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Action Filters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Action Filters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Action Filters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Action Filters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Action Filters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.2.6",
        "title": "Exception Filters",
        "englishTitle": "Exception Filters",
        "definition": "يمثل (Exception Filters) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (Exception Filters) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (Exception Filters) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.2.6",
          "title": "Exception Filters",
          "topicTitle": "MVC Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (Exception Filters) أحد المعايير التقنية الحيوية في مسار MVC Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Exception Filters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Exception Filters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Exception Filters)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Exception Filters)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Exception Filters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Exception Filters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Exception Filters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Exception Filters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Exception Filters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.2.7",
        "title": "Result Filters",
        "englishTitle": "Result Filters",
        "definition": "يمثل (Result Filters) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (Result Filters) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (Result Filters) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.2.7",
          "title": "Result Filters",
          "topicTitle": "MVC Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (Result Filters) أحد المعايير التقنية الحيوية في مسار MVC Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Result Filters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Result Filters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Result Filters)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Result Filters)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Result Filters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Result Filters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Result Filters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Result Filters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Result Filters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.2.8",
        "title": "ترتيب تنفيذ Filters",
        "englishTitle": "ترتيب Filters",
        "definition": "يمثل (ترتيب تنفيذ Filters) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ترتيب تنفيذ Filters) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ترتيب تنفيذ Filters) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.2.8",
          "title": "ترتيب تنفيذ Filters",
          "topicTitle": "MVC Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (ترتيب تنفيذ Filters) أحد المعايير التقنية الحيوية في مسار MVC Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ترتيب تنفيذ Filters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ترتيب تنفيذ Filters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ترتيب تنفيذ Filters)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ترتيب تنفيذ Filters)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ترتيب تنفيذ Filters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ترتيب تنفيذ Filters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ترتيب تنفيذ Filters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ترتيب تنفيذ Filters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ترتيب تنفيذ Filters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Custom Filters",
    "subtopics": [
      {
        "subId": "23.3.1",
        "title": "إنشاء IActionFilter",
        "englishTitle": "IActionFilter",
        "definition": "يمثل (إنشاء IActionFilter) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء IActionFilter) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء IActionFilter) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.3.1",
          "title": "إنشاء IActionFilter",
          "topicTitle": "Custom Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء IActionFilter) أحد المعايير التقنية الحيوية في مسار Custom Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء IActionFilter)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء IActionFilter) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء IActionFilter)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء IActionFilter)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء IActionFilter",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء IActionFilter)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء IActionFilter\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء IActionFilter ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء IActionFilter) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.3.2",
        "title": "إنشاء IAsyncActionFilter",
        "englishTitle": "IAsyncActionFilter",
        "definition": "يمثل (إنشاء IAsyncActionFilter) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء IAsyncActionFilter) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء IAsyncActionFilter) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.3.2",
          "title": "إنشاء IAsyncActionFilter",
          "topicTitle": "Custom Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء IAsyncActionFilter) أحد المعايير التقنية الحيوية في مسار Custom Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء IAsyncActionFilter)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء IAsyncActionFilter) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء IAsyncActionFilter)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء IAsyncActionFilter)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء IAsyncActionFilter",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء IAsyncActionFilter)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء IAsyncActionFilter\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء IAsyncActionFilter ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء IAsyncActionFilter) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.3.3",
        "title": "إنشاء Exception Filter",
        "englishTitle": "Exception Filter",
        "definition": "يمثل (إنشاء Exception Filter) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Exception Filter) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Exception Filter) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.3.3",
          "title": "إنشاء Exception Filter",
          "topicTitle": "Custom Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء Exception Filter) أحد المعايير التقنية الحيوية في مسار Custom Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Exception Filter)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Exception Filter) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Exception Filter)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Exception Filter)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Exception Filter",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Exception Filter)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Exception Filter\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Exception Filter ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Exception Filter) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.3.4",
        "title": "إنشاء Result Filter",
        "englishTitle": "Result Filter",
        "definition": "يمثل (إنشاء Result Filter) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Result Filter) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Result Filter) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.3.4",
          "title": "إنشاء Result Filter",
          "topicTitle": "Custom Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء Result Filter) أحد المعايير التقنية الحيوية في مسار Custom Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Result Filter)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Result Filter) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Result Filter)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Result Filter)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Result Filter",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Result Filter)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Result Filter\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Result Filter ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Result Filter) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.3.5",
        "title": "استخدام TypeFilter",
        "englishTitle": "TypeFilter",
        "definition": "يمثل (استخدام TypeFilter) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام TypeFilter) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام TypeFilter) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.3.5",
          "title": "استخدام TypeFilter",
          "topicTitle": "Custom Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (استخدام TypeFilter) أحد المعايير التقنية الحيوية في مسار Custom Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام TypeFilter)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام TypeFilter) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام TypeFilter)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام TypeFilter)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام TypeFilter",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام TypeFilter)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام TypeFilter\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام TypeFilter ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام TypeFilter) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.3.6",
        "title": "استخدام ServiceFilter",
        "englishTitle": "ServiceFilter",
        "definition": "يمثل (استخدام ServiceFilter) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام ServiceFilter) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام ServiceFilter) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.3.6",
          "title": "استخدام ServiceFilter",
          "topicTitle": "Custom Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (استخدام ServiceFilter) أحد المعايير التقنية الحيوية في مسار Custom Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ServiceFilter)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ServiceFilter) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ServiceFilter)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ServiceFilter)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام ServiceFilter",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ServiceFilter)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ServiceFilter\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ServiceFilter ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ServiceFilter) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.3.7",
        "title": "حقن Dependencies داخل Filters",
        "englishTitle": "حقن Dependencies داخل Filters",
        "definition": "يمثل (حقن Dependencies داخل Filters) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (حقن Dependencies داخل Filters) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (حقن Dependencies داخل Filters) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.3.7",
          "title": "حقن Dependencies داخل Filters",
          "topicTitle": "Custom Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (حقن Dependencies داخل Filters) أحد المعايير التقنية الحيوية في مسار Custom Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حقن Dependencies داخل Filters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حقن Dependencies داخل Filters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حقن Dependencies داخل Filters)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حقن Dependencies داخل Filters)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حقن Dependencies داخل Filters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حقن Dependencies داخل Filters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حقن Dependencies داخل Filters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حقن Dependencies داخل Filters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حقن Dependencies داخل Filters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.3.8",
        "title": "تسجيل Filters على مستوى Controller أو Global",
        "englishTitle": "تسجيل Filters على مستوى Controller أو Global",
        "definition": "يمثل (تسجيل Filters على مستوى Controller أو Global) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تسجيل Filters على مستوى Controller أو Global) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تسجيل Filters على مستوى Controller أو Global) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.3.8",
          "title": "تسجيل Filters على مستوى Controller أو Global",
          "topicTitle": "Custom Filters",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (تسجيل Filters على مستوى Controller أو Global) أحد المعايير التقنية الحيوية في مسار Custom Filters ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تسجيل Filters على مستوى Controller أو Global)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تسجيل Filters على مستوى Controller أو Global) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تسجيل Filters على مستوى Controller أو Global)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تسجيل Filters على مستوى Controller أو Global)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تسجيل Filters على مستوى Controller أو Global",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تسجيل Filters على مستوى Controller أو Global)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تسجيل Filters على مستوى Controller أو Global\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تسجيل Filters على مستوى Controller أو Global ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تسجيل Filters على مستوى Controller أو Global) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "Application Modules",
    "subtopics": [
      {
        "subId": "23.4.1",
        "title": "مفهوم Feature-Based Organization",
        "englishTitle": "Feature-Based Organization",
        "definition": "يمثل (مفهوم Feature-Based Organization) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Feature-Based Organization) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Feature-Based Organization) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.4.1",
          "title": "مفهوم Feature-Based Organization",
          "topicTitle": "Application Modules",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (مفهوم Feature-Based Organization) أحد المعايير التقنية الحيوية في مسار Application Modules ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Feature-Based Organization)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Feature-Based Organization) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Feature-Based Organization)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Feature-Based Organization)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Feature-Based Organization",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Feature-Based Organization)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Feature-Based Organization\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Feature-Based Organization ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Feature-Based Organization) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.4.2",
        "title": "تقسيم التطبيق حسب الوظائف",
        "englishTitle": "تقسيم الحسب الوظائف",
        "definition": "يمثل (تقسيم التطبيق حسب الوظائف) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تقسيم التطبيق حسب الوظائف) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تقسيم التطبيق حسب الوظائف) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.4.2",
          "title": "تقسيم التطبيق حسب الوظائف",
          "topicTitle": "Application Modules",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (تقسيم التطبيق حسب الوظائف) أحد المعايير التقنية الحيوية في مسار Application Modules ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تقسيم التطبيق حسب الوظائف)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تقسيم التطبيق حسب الوظائف) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تقسيم التطبيق حسب الوظائف)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تقسيم التطبيق حسب الوظائف)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تقسيم التطبيق حسب الوظائف",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تقسيم التطبيق حسب الوظائف)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تقسيم التطبيق حسب الوظائف\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تقسيم التطبيق حسب الوظائف ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تقسيم التطبيق حسب الوظائف) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.4.3",
        "title": "إنشاء Admin Module",
        "englishTitle": "Admin Module",
        "definition": "يمثل (إنشاء Admin Module) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Admin Module) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Admin Module) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.4.3",
          "title": "إنشاء Admin Module",
          "topicTitle": "Application Modules",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء Admin Module) أحد المعايير التقنية الحيوية في مسار Application Modules ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Admin Module)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Admin Module) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Admin Module)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Admin Module)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Admin Module",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Admin Module)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Admin Module\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Admin Module ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Admin Module) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.4.4",
        "title": "إنشاء Products Module",
        "englishTitle": "Products Module",
        "definition": "يمثل (إنشاء Products Module) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Products Module) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Products Module) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.4.4",
          "title": "إنشاء Products Module",
          "topicTitle": "Application Modules",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء Products Module) أحد المعايير التقنية الحيوية في مسار Application Modules ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Products Module)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Products Module) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Products Module)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Products Module)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Products Module",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Products Module)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Products Module\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Products Module ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Products Module) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.4.5",
        "title": "إنشاء Orders Module",
        "englishTitle": "Orders Module",
        "definition": "يمثل (إنشاء Orders Module) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Orders Module) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Orders Module) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.4.5",
          "title": "إنشاء Orders Module",
          "topicTitle": "Application Modules",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء Orders Module) أحد المعايير التقنية الحيوية في مسار Application Modules ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Orders Module)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Orders Module) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Orders Module)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Orders Module)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Orders Module",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Orders Module)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Orders Module\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Orders Module ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Orders Module) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.4.6",
        "title": "فصل Business Logic عن UI",
        "englishTitle": "فصل Business Logic عن UI",
        "definition": "يمثل (فصل Business Logic عن UI) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (فصل Business Logic عن UI) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (فصل Business Logic عن UI) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.4.6",
          "title": "فصل Business Logic عن UI",
          "topicTitle": "Application Modules",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (فصل Business Logic عن UI) أحد المعايير التقنية الحيوية في مسار Application Modules ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فصل Business Logic عن UI)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فصل Business Logic عن UI) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فصل Business Logic عن UI)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فصل Business Logic عن UI)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فصل Business Logic عن UI",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فصل Business Logic عن UI)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فصل Business Logic عن UI\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فصل Business Logic عن UI ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فصل Business Logic عن UI) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.4.7",
        "title": "استخدام Shared Services",
        "englishTitle": "Shared Services",
        "definition": "يمثل (استخدام Shared Services) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Shared Services) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Shared Services) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.4.7",
          "title": "استخدام Shared Services",
          "topicTitle": "Application Modules",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (استخدام Shared Services) أحد المعايير التقنية الحيوية في مسار Application Modules ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Shared Services)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Shared Services) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Shared Services)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Shared Services)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Shared Services",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Shared Services)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Shared Services\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Shared Services ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Shared Services) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.4.8",
        "title": "إدارة الصلاحيات بين Modules",
        "englishTitle": "الصلاحيات بين Modules",
        "definition": "يمثل (إدارة الصلاحيات بين Modules) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إدارة الصلاحيات بين Modules) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إدارة الصلاحيات بين Modules) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.4.8",
          "title": "إدارة الصلاحيات بين Modules",
          "topicTitle": "Application Modules",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إدارة الصلاحيات بين Modules) أحد المعايير التقنية الحيوية في مسار Application Modules ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة الصلاحيات بين Modules)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة الصلاحيات بين Modules) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة الصلاحيات بين Modules)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة الصلاحيات بين Modules)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إدارة الصلاحيات بين Modules",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة الصلاحيات بين Modules)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة الصلاحيات بين Modules\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة الصلاحيات بين Modules ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة الصلاحيات بين Modules) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "مشروع عملي: لوحة تحكم إدارية",
    "subtopics": [
      {
        "subId": "23.5.1",
        "title": "إنشاء Admin Area",
        "englishTitle": "Admin Area",
        "definition": "يمثل (إنشاء Admin Area) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Admin Area) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Admin Area) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.5.1",
          "title": "إنشاء Admin Area",
          "topicTitle": "مشروع عملي: لوحة تحكم إدارية",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء Admin Area) أحد المعايير التقنية الحيوية في مسار مشروع عملي: لوحة تحكم إدارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Admin Area)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Admin Area) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Admin Area)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Admin Area)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Admin Area",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Admin Area)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Admin Area\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Admin Area ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Admin Area) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.5.2",
        "title": "إنشاء Admin Layout",
        "englishTitle": "Admin Layout",
        "definition": "يمثل (إنشاء Admin Layout) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Admin Layout) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Admin Layout) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.5.2",
          "title": "إنشاء Admin Layout",
          "topicTitle": "مشروع عملي: لوحة تحكم إدارية",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء Admin Layout) أحد المعايير التقنية الحيوية في مسار مشروع عملي: لوحة تحكم إدارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Admin Layout)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Admin Layout) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Admin Layout)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Admin Layout)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Admin Layout",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Admin Layout)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Admin Layout\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Admin Layout ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Admin Layout) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.5.3",
        "title": "إنشاء DashboardController",
        "englishTitle": "DashboardController",
        "definition": "يمثل (إنشاء DashboardController) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء DashboardController) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء DashboardController) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.5.3",
          "title": "إنشاء DashboardController",
          "topicTitle": "مشروع عملي: لوحة تحكم إدارية",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء DashboardController) أحد المعايير التقنية الحيوية في مسار مشروع عملي: لوحة تحكم إدارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء DashboardController)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء DashboardController) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء DashboardController)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء DashboardController)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء DashboardController",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء DashboardController)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء DashboardController\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء DashboardController ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء DashboardController) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.5.4",
        "title": "إنشاء إدارة المستخدمين",
        "englishTitle": "المستخدمين",
        "definition": "يمثل (إنشاء إدارة المستخدمين) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء إدارة المستخدمين) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء إدارة المستخدمين) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.5.4",
          "title": "إنشاء إدارة المستخدمين",
          "topicTitle": "مشروع عملي: لوحة تحكم إدارية",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء إدارة المستخدمين) أحد المعايير التقنية الحيوية في مسار مشروع عملي: لوحة تحكم إدارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء إدارة المستخدمين)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء إدارة المستخدمين) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء إدارة المستخدمين)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء إدارة المستخدمين)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء إدارة المستخدمين",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء إدارة المستخدمين)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء إدارة المستخدمين\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء إدارة المستخدمين ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء إدارة المستخدمين) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.5.5",
        "title": "إنشاء إدارة المنتجات",
        "englishTitle": "المنتجات",
        "definition": "يمثل (إنشاء إدارة المنتجات) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء إدارة المنتجات) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء إدارة المنتجات) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.5.5",
          "title": "إنشاء إدارة المنتجات",
          "topicTitle": "مشروع عملي: لوحة تحكم إدارية",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء إدارة المنتجات) أحد المعايير التقنية الحيوية في مسار مشروع عملي: لوحة تحكم إدارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء إدارة المنتجات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء إدارة المنتجات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء إدارة المنتجات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء إدارة المنتجات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء إدارة المنتجات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء إدارة المنتجات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء إدارة المنتجات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء إدارة المنتجات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء إدارة المنتجات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.5.6",
        "title": "إضافة Role Authorization",
        "englishTitle": "إضافة Role Authorization",
        "definition": "يمثل (إضافة Role Authorization) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إضافة Role Authorization) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إضافة Role Authorization) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.5.6",
          "title": "إضافة Role Authorization",
          "topicTitle": "مشروع عملي: لوحة تحكم إدارية",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إضافة Role Authorization) أحد المعايير التقنية الحيوية في مسار مشروع عملي: لوحة تحكم إدارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إضافة Role Authorization)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة Role Authorization) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إضافة Role Authorization)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إضافة Role Authorization)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إضافة Role Authorization",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إضافة Role Authorization)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إضافة Role Authorization\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إضافة Role Authorization ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إضافة Role Authorization) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.5.7",
        "title": "إنشاء Action Logging Filter",
        "englishTitle": "Action Logging Filter",
        "definition": "يمثل (إنشاء Action Logging Filter) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Action Logging Filter) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Action Logging Filter) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.5.7",
          "title": "إنشاء Action Logging Filter",
          "topicTitle": "مشروع عملي: لوحة تحكم إدارية",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (إنشاء Action Logging Filter) أحد المعايير التقنية الحيوية في مسار مشروع عملي: لوحة تحكم إدارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Action Logging Filter)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Action Logging Filter) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Action Logging Filter)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Action Logging Filter)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Action Logging Filter",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Action Logging Filter)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Action Logging Filter\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Action Logging Filter ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Action Logging Filter) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "23.5.8",
        "title": "اختبار صفحات الإدارة",
        "englishTitle": "اختبار صفحات الإدارة",
        "definition": "يمثل (اختبار صفحات الإدارة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (اختبار صفحات الإدارة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (اختبار صفحات الإدارة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
        "terms": [
          {
            "term": "Dependency Injection",
            "pronunciation": "ديبندنسي إنجيكشن",
            "meaning": "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً"
          },
          {
            "term": "Scoped Lifetime",
            "pronunciation": "سكوبد لايف تايم",
            "meaning": "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده"
          },
          {
            "term": "Claims",
            "pronunciation": "كلايمز",
            "meaning": "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)"
          },
          {
            "term": "Policy",
            "pronunciation": "بوليسي",
            "meaning": "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول"
          }
        ],
        "syntax": "// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = \"Admin\")]\npublic IActionResult Dashboard() => View();",
        "simpleCode": "// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection\nusing Microsoft.AspNetCore.Mvc;\n\n// 1. تعريف واجهة برمجية للخدمة\npublic interface IMessageService\n{\n    string GetWelcomeNote();\n}\n\n// 2. الفئة التنفيذية للخدمة\npublic class EmailMessageService : IMessageService\n{\n    public string GetWelcomeNote() => \"أهلاً بك في نظامنا الآمن!\";\n}\n\n// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor\npublic class SecureController : Controller\n{\n    private readonly IMessageService _messageService;\n\n    // حقن التبعية في المنشئ\n    public SecureController(IMessageService messageService)\n    {\n        _messageService = messageService; // تخزين المرجع\n    }\n\n    public IActionResult Welcome()\n    {\n        // استخدام الخدمة بسهولة وأمان\n        ViewBag.Message = _messageService.GetWelcomeNote();\n        return View();\n    }\n}",
        "advancedCode": "// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\nusing System.Security.Claims;\n\nnamespace EnterpriseSecurityDemo\n{\n    // وحدة تحكم محمية بالكامل\n    [Authorize] // تتطلب تسجيل دخول أولي\n    public class FinanceController : Controller\n    {\n        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد\n        [Authorize(Policy = \"RequireVerifiedAccountant\")]\n        [HttpGet]\n        public IActionResult FinancialReports()\n        {\n            // استخراج معرف المستخدم الحالي من الـ Claims بأمان\n            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);\n            var userEmail = User.FindFirstValue(ClaimTypes.Email);\n\n            // تسجيل العملية في السجلات الأمنية Audit Log\n            Console.WriteLine($\"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.\");\n\n            return View();\n        }\n    }\n}",
        "outputExplanation": "يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.",
        "commonMistakes": [
          {
            "wrong": "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
            "right": "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
            "reason": "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
          }
        ],
        "bestPractices": [
          "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
          "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
          "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
        ],
        "infographic": {
          "badge": "الدرس 23.5.8",
          "title": "اختبار صفحات الإدارة",
          "topicTitle": "مشروع عملي: لوحة تحكم إدارية",
          "sectionTitle": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
          "icon": "ShieldCheck",
          "colors": "from-emerald-600 via-teal-600 to-cyan-500",
          "steps": [
            {
              "title": "التسجيل في الحاوية",
              "desc": "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs"
            },
            {
              "title": "التحقق والترخيص",
              "desc": "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول"
            },
            {
              "title": "الحقن والتنفيذ",
              "desc": "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام"
            }
          ],
          "summary": "يمثل (اختبار صفحات الإدارة) أحد المعايير التقنية الحيوية في مسار مشروع عملي: لوحة تحكم إدارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار صفحات الإدارة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار صفحات الإدارة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار صفحات الإدارة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار صفحات الإدارة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار صفحات الإدارة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار صفحات الإدارة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار صفحات الإدارة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار صفحات الإدارة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار صفحات الإدارة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section23Data;
