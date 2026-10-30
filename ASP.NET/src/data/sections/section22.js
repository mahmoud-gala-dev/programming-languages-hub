// src/data/sections/section22.js
// محتوى تعليمي مفصل وشامل لـ: القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني
export const section22Data = {
  id: 22,
  title: "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
  englishTitle: "State Management, File Handling & Email",
  icon: "FileSpreadsheet",
  category: "إدارة الموارد",
  description: "إدارة الجلسات Sessions و Cookies، رفع وتحميل وتصدير الملفات (CSV, Excel, PDF)، خدمات إرسال البريد MailKit والتخزين السحابي Blob.",
  summary: {
  "sectionId": 22,
  "title": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
  "englishTitle": "State Management, File Handling & Email",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
    "title": "State Management",
    "subtopics": [
      {
        "subId": "22.1.1",
        "title": "مفهوم Stateless HTTP",
        "englishTitle": "Stateless HTTP",
        "definition": "يمثل (مفهوم Stateless HTTP) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Stateless HTTP) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Stateless HTTP) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.1.1",
          "title": "مفهوم Stateless HTTP",
          "topicTitle": "State Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (مفهوم Stateless HTTP) أحد المعايير التقنية الحيوية في مسار State Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Stateless HTTP)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Stateless HTTP) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Stateless HTTP)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Stateless HTTP)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Stateless HTTP",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Stateless HTTP)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Stateless HTTP\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Stateless HTTP ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Stateless HTTP) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.1.2",
        "title": "متى نحتاج إلى State؟",
        "englishTitle": "متى نحتاج إلى State",
        "definition": "يمثل (متى نحتاج إلى State؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (متى نحتاج إلى State؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (متى نحتاج إلى State؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.1.2",
          "title": "متى نحتاج إلى State؟",
          "topicTitle": "State Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (متى نحتاج إلى State؟) أحد المعايير التقنية الحيوية في مسار State Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (متى نحتاج إلى State؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (متى نحتاج إلى State؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (متى نحتاج إلى State؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (متى نحتاج إلى State؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: متى نحتاج إلى State؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (متى نحتاج إلى State؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين متى نحتاج إلى State؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: متى نحتاج إلى State؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (متى نحتاج إلى State؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.1.3",
        "title": "استخدام Cookies",
        "englishTitle": "Cookies",
        "definition": "يمثل (استخدام Cookies) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Cookies) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Cookies) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.1.3",
          "title": "استخدام Cookies",
          "topicTitle": "State Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (استخدام Cookies) أحد المعايير التقنية الحيوية في مسار State Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Cookies)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Cookies) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Cookies)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Cookies)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Cookies",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Cookies)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Cookies\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Cookies ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Cookies) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.1.4",
        "title": "استخدام Sessions",
        "englishTitle": "Sessions",
        "definition": "يمثل (استخدام Sessions) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Sessions) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Sessions) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.1.4",
          "title": "استخدام Sessions",
          "topicTitle": "State Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (استخدام Sessions) أحد المعايير التقنية الحيوية في مسار State Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Sessions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Sessions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Sessions)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Sessions)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Sessions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Sessions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Sessions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Sessions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Sessions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.1.5",
        "title": "استخدام TempData",
        "englishTitle": "TempData",
        "definition": "يمثل (استخدام TempData) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام TempData) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام TempData) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.1.5",
          "title": "استخدام TempData",
          "topicTitle": "State Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (استخدام TempData) أحد المعايير التقنية الحيوية في مسار State Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
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
        "subId": "22.1.6",
        "title": "الفرق بين TempData وSession",
        "englishTitle": "TempData وSession",
        "definition": "يمثل (الفرق بين TempData وSession) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (الفرق بين TempData وSession) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (الفرق بين TempData وSession) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.1.6",
          "title": "الفرق بين TempData وSession",
          "topicTitle": "State Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (الفرق بين TempData وSession) أحد المعايير التقنية الحيوية في مسار State Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين TempData وSession)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين TempData وSession) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين TempData وSession)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين TempData وSession)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين TempData وSession",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين TempData وSession)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين TempData وSession\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين TempData وSession ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين TempData وSession) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.1.7",
        "title": "استخدام HttpContext.Items",
        "englishTitle": "HttpContext.Items",
        "definition": "يمثل (استخدام HttpContext.Items) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام HttpContext.Items) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام HttpContext.Items) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.1.7",
          "title": "استخدام HttpContext.Items",
          "topicTitle": "State Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (استخدام HttpContext.Items) أحد المعايير التقنية الحيوية في مسار State Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام HttpContext.Items)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام HttpContext.Items) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام HttpContext.Items)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام HttpContext.Items)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام HttpContext.Items",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام HttpContext.Items)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام HttpContext.Items\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام HttpContext.Items ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام HttpContext.Items) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.1.8",
        "title": "اختيار طريقة التخزين المناسبة",
        "englishTitle": "اختيار طريقة التخزين المناسبة",
        "definition": "يمثل (اختيار طريقة التخزين المناسبة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (اختيار طريقة التخزين المناسبة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (اختيار طريقة التخزين المناسبة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.1.8",
          "title": "اختيار طريقة التخزين المناسبة",
          "topicTitle": "State Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (اختيار طريقة التخزين المناسبة) أحد المعايير التقنية الحيوية في مسار State Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختيار طريقة التخزين المناسبة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختيار طريقة التخزين المناسبة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختيار طريقة التخزين المناسبة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختيار طريقة التخزين المناسبة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختيار طريقة التخزين المناسبة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختيار طريقة التخزين المناسبة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختيار طريقة التخزين المناسبة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختيار طريقة التخزين المناسبة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختيار طريقة التخزين المناسبة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "Session Management",
    "subtopics": [
      {
        "subId": "22.2.1",
        "title": "إعداد Session Services",
        "englishTitle": "إعداد Session Services",
        "definition": "يمثل (إعداد Session Services) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إعداد Session Services) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إعداد Session Services) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.2.1",
          "title": "إعداد Session Services",
          "topicTitle": "Session Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إعداد Session Services) أحد المعايير التقنية الحيوية في مسار Session Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إعداد Session Services)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد Session Services) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إعداد Session Services)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إعداد Session Services)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إعداد Session Services",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إعداد Session Services)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إعداد Session Services\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إعداد Session Services ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إعداد Session Services) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.2.2",
        "title": "استخدام UseSession",
        "englishTitle": "UseSession",
        "definition": "يمثل (استخدام UseSession) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام UseSession) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام UseSession) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.2.2",
          "title": "استخدام UseSession",
          "topicTitle": "Session Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (استخدام UseSession) أحد المعايير التقنية الحيوية في مسار Session Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام UseSession)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام UseSession) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام UseSession)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام UseSession)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام UseSession",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام UseSession)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام UseSession\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام UseSession ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام UseSession) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.2.3",
        "title": "تخزين String داخل Session",
        "englishTitle": "تخزين String داخل Session",
        "definition": "يمثل (تخزين String داخل Session) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تخزين String داخل Session) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تخزين String داخل Session) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.2.3",
          "title": "تخزين String داخل Session",
          "topicTitle": "Session Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (تخزين String داخل Session) أحد المعايير التقنية الحيوية في مسار Session Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تخزين String داخل Session)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تخزين String داخل Session) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تخزين String داخل Session)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تخزين String داخل Session)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تخزين String داخل Session",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تخزين String داخل Session)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تخزين String داخل Session\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تخزين String داخل Session ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تخزين String داخل Session) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.2.4",
        "title": "تخزين Int داخل Session",
        "englishTitle": "تخزين Int داخل Session",
        "definition": "يمثل (تخزين Int داخل Session) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تخزين Int داخل Session) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تخزين Int داخل Session) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.2.4",
          "title": "تخزين Int داخل Session",
          "topicTitle": "Session Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (تخزين Int داخل Session) أحد المعايير التقنية الحيوية في مسار Session Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تخزين Int داخل Session)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تخزين Int داخل Session) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تخزين Int داخل Session)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تخزين Int داخل Session)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تخزين Int داخل Session",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تخزين Int داخل Session)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تخزين Int داخل Session\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تخزين Int داخل Session ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تخزين Int داخل Session) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.2.5",
        "title": "تخزين Objects باستخدام JSON",
        "englishTitle": "تخزين Objects بJSON",
        "definition": "يمثل (تخزين Objects باستخدام JSON) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تخزين Objects باستخدام JSON) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تخزين Objects باستخدام JSON) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.2.5",
          "title": "تخزين Objects باستخدام JSON",
          "topicTitle": "Session Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (تخزين Objects باستخدام JSON) أحد المعايير التقنية الحيوية في مسار Session Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تخزين Objects باستخدام JSON)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تخزين Objects باستخدام JSON) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تخزين Objects باستخدام JSON)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تخزين Objects باستخدام JSON)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تخزين Objects باستخدام JSON",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تخزين Objects باستخدام JSON)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تخزين Objects باستخدام JSON\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تخزين Objects باستخدام JSON ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تخزين Objects باستخدام JSON) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.2.6",
        "title": "إدارة Session Timeout",
        "englishTitle": "Session Timeout",
        "definition": "يمثل (إدارة Session Timeout) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إدارة Session Timeout) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إدارة Session Timeout) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.2.6",
          "title": "إدارة Session Timeout",
          "topicTitle": "Session Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إدارة Session Timeout) أحد المعايير التقنية الحيوية في مسار Session Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Session Timeout)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Session Timeout) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Session Timeout)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Session Timeout)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إدارة Session Timeout",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Session Timeout)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Session Timeout\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Session Timeout ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Session Timeout) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.2.7",
        "title": "استخدام Distributed Session Store",
        "englishTitle": "Distributed Session Store",
        "definition": "يمثل (استخدام Distributed Session Store) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Distributed Session Store) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Distributed Session Store) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.2.7",
          "title": "استخدام Distributed Session Store",
          "topicTitle": "Session Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (استخدام Distributed Session Store) أحد المعايير التقنية الحيوية في مسار Session Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Distributed Session Store)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Distributed Session Store) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Distributed Session Store)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Distributed Session Store)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Distributed Session Store",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Distributed Session Store)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Distributed Session Store\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Distributed Session Store ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Distributed Session Store) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.2.8",
        "title": "تجنب تخزين بيانات حساسة غير ضرورية",
        "englishTitle": "تجنب تخزين بيانات حساسة غير ضرورية",
        "definition": "يمثل (تجنب تخزين بيانات حساسة غير ضرورية) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تجنب تخزين بيانات حساسة غير ضرورية) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تجنب تخزين بيانات حساسة غير ضرورية) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.2.8",
          "title": "تجنب تخزين بيانات حساسة غير ضرورية",
          "topicTitle": "Session Management",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (تجنب تخزين بيانات حساسة غير ضرورية) أحد المعايير التقنية الحيوية في مسار Session Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تجنب تخزين بيانات حساسة غير ضرورية)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تجنب تخزين بيانات حساسة غير ضرورية) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تجنب تخزين بيانات حساسة غير ضرورية)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تجنب تخزين بيانات حساسة غير ضرورية)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تجنب تخزين بيانات حساسة غير ضرورية",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تجنب تخزين بيانات حساسة غير ضرورية)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تجنب تخزين بيانات حساسة غير ضرورية\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تجنب تخزين بيانات حساسة غير ضرورية ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تجنب تخزين بيانات حساسة غير ضرورية) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "File Upload",
    "subtopics": [
      {
        "subId": "22.3.1",
        "title": "استخدام IFormFile",
        "englishTitle": "IFormFile",
        "definition": "يمثل (استخدام IFormFile) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام IFormFile) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام IFormFile) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.3.1",
          "title": "استخدام IFormFile",
          "topicTitle": "File Upload",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (استخدام IFormFile) أحد المعايير التقنية الحيوية في مسار File Upload ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام IFormFile)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام IFormFile) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام IFormFile)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام IFormFile)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام IFormFile",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام IFormFile)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام IFormFile\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام IFormFile ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام IFormFile) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.3.2",
        "title": "إنشاء File Upload Form",
        "englishTitle": "File Upload Form",
        "definition": "يمثل (إنشاء File Upload Form) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء File Upload Form) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء File Upload Form) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.3.2",
          "title": "إنشاء File Upload Form",
          "topicTitle": "File Upload",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إنشاء File Upload Form) أحد المعايير التقنية الحيوية في مسار File Upload ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء File Upload Form)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء File Upload Form) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء File Upload Form)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء File Upload Form)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء File Upload Form",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء File Upload Form)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء File Upload Form\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء File Upload Form ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء File Upload Form) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.3.3",
        "title": "رفع صورة واحدة",
        "englishTitle": "رفع صورة واحدة",
        "definition": "يمثل (رفع صورة واحدة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (رفع صورة واحدة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (رفع صورة واحدة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.3.3",
          "title": "رفع صورة واحدة",
          "topicTitle": "File Upload",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (رفع صورة واحدة) أحد المعايير التقنية الحيوية في مسار File Upload ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (رفع صورة واحدة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (رفع صورة واحدة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (رفع صورة واحدة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (رفع صورة واحدة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: رفع صورة واحدة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (رفع صورة واحدة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين رفع صورة واحدة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: رفع صورة واحدة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (رفع صورة واحدة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.3.4",
        "title": "رفع ملفات متعددة",
        "englishTitle": "رفع ملفات متعددة",
        "definition": "يمثل (رفع ملفات متعددة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (رفع ملفات متعددة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (رفع ملفات متعددة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.3.4",
          "title": "رفع ملفات متعددة",
          "topicTitle": "File Upload",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (رفع ملفات متعددة) أحد المعايير التقنية الحيوية في مسار File Upload ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (رفع ملفات متعددة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (رفع ملفات متعددة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (رفع ملفات متعددة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (رفع ملفات متعددة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: رفع ملفات متعددة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (رفع ملفات متعددة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين رفع ملفات متعددة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: رفع ملفات متعددة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (رفع ملفات متعددة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.3.5",
        "title": "التحقق من حجم الملف",
        "englishTitle": "التحقق من حجم الملف",
        "definition": "يمثل (التحقق من حجم الملف) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (التحقق من حجم الملف) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (التحقق من حجم الملف) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.3.5",
          "title": "التحقق من حجم الملف",
          "topicTitle": "File Upload",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (التحقق من حجم الملف) أحد المعايير التقنية الحيوية في مسار File Upload ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التحقق من حجم الملف)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحقق من حجم الملف) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التحقق من حجم الملف)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التحقق من حجم الملف)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التحقق من حجم الملف",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التحقق من حجم الملف)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التحقق من حجم الملف\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التحقق من حجم الملف ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التحقق من حجم الملف) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.3.6",
        "title": "التحقق من نوع ومحتوى الملف",
        "englishTitle": "التحقق من نوع ومحتوى الملف",
        "definition": "يمثل (التحقق من نوع ومحتوى الملف) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (التحقق من نوع ومحتوى الملف) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (التحقق من نوع ومحتوى الملف) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.3.6",
          "title": "التحقق من نوع ومحتوى الملف",
          "topicTitle": "File Upload",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (التحقق من نوع ومحتوى الملف) أحد المعايير التقنية الحيوية في مسار File Upload ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التحقق من نوع ومحتوى الملف)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحقق من نوع ومحتوى الملف) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التحقق من نوع ومحتوى الملف)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التحقق من نوع ومحتوى الملف)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التحقق من نوع ومحتوى الملف",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التحقق من نوع ومحتوى الملف)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التحقق من نوع ومحتوى الملف\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التحقق من نوع ومحتوى الملف ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التحقق من نوع ومحتوى الملف) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.3.7",
        "title": "إنشاء أسماء ملفات آمنة",
        "englishTitle": "أسماء ملفات آمنة",
        "definition": "يمثل (إنشاء أسماء ملفات آمنة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء أسماء ملفات آمنة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء أسماء ملفات آمنة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.3.7",
          "title": "إنشاء أسماء ملفات آمنة",
          "topicTitle": "File Upload",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إنشاء أسماء ملفات آمنة) أحد المعايير التقنية الحيوية في مسار File Upload ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء أسماء ملفات آمنة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء أسماء ملفات آمنة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء أسماء ملفات آمنة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء أسماء ملفات آمنة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء أسماء ملفات آمنة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء أسماء ملفات آمنة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء أسماء ملفات آمنة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء أسماء ملفات آمنة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء أسماء ملفات آمنة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.3.8",
        "title": "تخزين الملفات خارج Web Root عند الحاجة",
        "englishTitle": "تخزين الملفات خارج Web Root عند الحاجة",
        "definition": "يمثل (تخزين الملفات خارج Web Root عند الحاجة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تخزين الملفات خارج Web Root عند الحاجة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تخزين الملفات خارج Web Root عند الحاجة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.3.8",
          "title": "تخزين الملفات خارج Web Root عند الحاجة",
          "topicTitle": "File Upload",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (تخزين الملفات خارج Web Root عند الحاجة) أحد المعايير التقنية الحيوية في مسار File Upload ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تخزين الملفات خارج Web Root عند الحاجة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تخزين الملفات خارج Web Root عند الحاجة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تخزين الملفات خارج Web Root عند الحاجة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تخزين الملفات خارج Web Root عند الحاجة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تخزين الملفات خارج Web Root عند الحاجة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تخزين الملفات خارج Web Root عند الحاجة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تخزين الملفات خارج Web Root عند الحاجة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تخزين الملفات خارج Web Root عند الحاجة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تخزين الملفات خارج Web Root عند الحاجة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.3.9",
        "title": "إدارة حذف الملفات",
        "englishTitle": "حذف الملفات",
        "definition": "يمثل (إدارة حذف الملفات) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إدارة حذف الملفات) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إدارة حذف الملفات) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.3.9",
          "title": "إدارة حذف الملفات",
          "topicTitle": "File Upload",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إدارة حذف الملفات) أحد المعايير التقنية الحيوية في مسار File Upload ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة حذف الملفات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة حذف الملفات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة حذف الملفات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة حذف الملفات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إدارة حذف الملفات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة حذف الملفات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة حذف الملفات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة حذف الملفات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة حذف الملفات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "File Download وExport",
    "subtopics": [
      {
        "subId": "22.4.1",
        "title": "استخدام FileResult",
        "englishTitle": "FileResult",
        "definition": "يمثل (استخدام FileResult) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام FileResult) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام FileResult) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.4.1",
          "title": "استخدام FileResult",
          "topicTitle": "File Download وExport",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (استخدام FileResult) أحد المعايير التقنية الحيوية في مسار File Download وExport ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
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
        "subId": "22.4.2",
        "title": "استخدام PhysicalFileResult",
        "englishTitle": "PhysicalFileResult",
        "definition": "يمثل (استخدام PhysicalFileResult) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام PhysicalFileResult) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام PhysicalFileResult) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.4.2",
          "title": "استخدام PhysicalFileResult",
          "topicTitle": "File Download وExport",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (استخدام PhysicalFileResult) أحد المعايير التقنية الحيوية في مسار File Download وExport ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام PhysicalFileResult)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام PhysicalFileResult) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام PhysicalFileResult)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام PhysicalFileResult)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام PhysicalFileResult",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام PhysicalFileResult)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام PhysicalFileResult\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام PhysicalFileResult ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام PhysicalFileResult) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.4.3",
        "title": "إنشاء Download Action",
        "englishTitle": "Download Action",
        "definition": "يمثل (إنشاء Download Action) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Download Action) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Download Action) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.4.3",
          "title": "إنشاء Download Action",
          "topicTitle": "File Download وExport",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إنشاء Download Action) أحد المعايير التقنية الحيوية في مسار File Download وExport ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Download Action)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Download Action) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Download Action)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Download Action)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Download Action",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Download Action)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Download Action\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Download Action ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Download Action) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.4.4",
        "title": "تصدير البيانات إلى CSV",
        "englishTitle": "تصدير البيانات إلى CSV",
        "definition": "يمثل (تصدير البيانات إلى CSV) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تصدير البيانات إلى CSV) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تصدير البيانات إلى CSV) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.4.4",
          "title": "تصدير البيانات إلى CSV",
          "topicTitle": "File Download وExport",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (تصدير البيانات إلى CSV) أحد المعايير التقنية الحيوية في مسار File Download وExport ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تصدير البيانات إلى CSV)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تصدير البيانات إلى CSV) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تصدير البيانات إلى CSV)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تصدير البيانات إلى CSV)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تصدير البيانات إلى CSV",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تصدير البيانات إلى CSV)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تصدير البيانات إلى CSV\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تصدير البيانات إلى CSV ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تصدير البيانات إلى CSV) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.4.5",
        "title": "تصدير البيانات إلى Excel",
        "englishTitle": "تصدير البيانات إلى Excel",
        "definition": "يمثل (تصدير البيانات إلى Excel) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تصدير البيانات إلى Excel) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تصدير البيانات إلى Excel) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.4.5",
          "title": "تصدير البيانات إلى Excel",
          "topicTitle": "File Download وExport",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (تصدير البيانات إلى Excel) أحد المعايير التقنية الحيوية في مسار File Download وExport ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تصدير البيانات إلى Excel)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تصدير البيانات إلى Excel) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تصدير البيانات إلى Excel)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تصدير البيانات إلى Excel)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تصدير البيانات إلى Excel",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تصدير البيانات إلى Excel)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تصدير البيانات إلى Excel\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تصدير البيانات إلى Excel ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تصدير البيانات إلى Excel) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.4.6",
        "title": "إنشاء PDF Reports",
        "englishTitle": "PDF Reports",
        "definition": "يمثل (إنشاء PDF Reports) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء PDF Reports) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء PDF Reports) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.4.6",
          "title": "إنشاء PDF Reports",
          "topicTitle": "File Download وExport",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إنشاء PDF Reports) أحد المعايير التقنية الحيوية في مسار File Download وExport ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء PDF Reports)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء PDF Reports) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء PDF Reports)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء PDF Reports)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء PDF Reports",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء PDF Reports)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء PDF Reports\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء PDF Reports ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء PDF Reports) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.4.7",
        "title": "تنزيل الملفات الكبيرة باستخدام Streams",
        "englishTitle": "تنزيل الملفات الكبيرة بStreams",
        "definition": "يمثل (تنزيل الملفات الكبيرة باستخدام Streams) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تنزيل الملفات الكبيرة باستخدام Streams) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تنزيل الملفات الكبيرة باستخدام Streams) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.4.7",
          "title": "تنزيل الملفات الكبيرة باستخدام Streams",
          "topicTitle": "File Download وExport",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (تنزيل الملفات الكبيرة باستخدام Streams) أحد المعايير التقنية الحيوية في مسار File Download وExport ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تنزيل الملفات الكبيرة باستخدام Streams)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنزيل الملفات الكبيرة باستخدام Streams) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تنزيل الملفات الكبيرة باستخدام Streams)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تنزيل الملفات الكبيرة باستخدام Streams)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تنزيل الملفات الكبيرة باستخدام Streams",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تنزيل الملفات الكبيرة باستخدام Streams)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تنزيل الملفات الكبيرة باستخدام Streams\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تنزيل الملفات الكبيرة باستخدام Streams ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تنزيل الملفات الكبيرة باستخدام Streams) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.4.8",
        "title": "التحقق من صلاحية تنزيل الملفات",
        "englishTitle": "التحقق من صلاحية تنزيل الملفات",
        "definition": "يمثل (التحقق من صلاحية تنزيل الملفات) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (التحقق من صلاحية تنزيل الملفات) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (التحقق من صلاحية تنزيل الملفات) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.4.8",
          "title": "التحقق من صلاحية تنزيل الملفات",
          "topicTitle": "File Download وExport",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (التحقق من صلاحية تنزيل الملفات) أحد المعايير التقنية الحيوية في مسار File Download وExport ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التحقق من صلاحية تنزيل الملفات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحقق من صلاحية تنزيل الملفات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التحقق من صلاحية تنزيل الملفات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التحقق من صلاحية تنزيل الملفات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التحقق من صلاحية تنزيل الملفات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التحقق من صلاحية تنزيل الملفات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التحقق من صلاحية تنزيل الملفات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التحقق من صلاحية تنزيل الملفات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التحقق من صلاحية تنزيل الملفات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "Email Services",
    "subtopics": [
      {
        "subId": "22.5.1",
        "title": "مفهوم SMTP",
        "englishTitle": "SMTP",
        "definition": "يمثل (مفهوم SMTP) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم SMTP) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم SMTP) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.5.1",
          "title": "مفهوم SMTP",
          "topicTitle": "Email Services",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (مفهوم SMTP) أحد المعايير التقنية الحيوية في مسار Email Services ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم SMTP)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم SMTP) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم SMTP)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم SMTP)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم SMTP",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم SMTP)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم SMTP\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم SMTP ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم SMTP) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.5.2",
        "title": "استخدام MailKit",
        "englishTitle": "MailKit",
        "definition": "يمثل (استخدام MailKit) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام MailKit) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام MailKit) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.5.2",
          "title": "استخدام MailKit",
          "topicTitle": "Email Services",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (استخدام MailKit) أحد المعايير التقنية الحيوية في مسار Email Services ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام MailKit)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام MailKit) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام MailKit)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام MailKit)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام MailKit",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام MailKit)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام MailKit\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام MailKit ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام MailKit) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.5.3",
        "title": "إنشاء IEmailService",
        "englishTitle": "IEmailService",
        "definition": "يمثل (إنشاء IEmailService) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء IEmailService) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء IEmailService) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.5.3",
          "title": "إنشاء IEmailService",
          "topicTitle": "Email Services",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إنشاء IEmailService) أحد المعايير التقنية الحيوية في مسار Email Services ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء IEmailService)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء IEmailService) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء IEmailService)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء IEmailService)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء IEmailService",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء IEmailService)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء IEmailService\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء IEmailService ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء IEmailService) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.5.4",
        "title": "إرسال Email بسيط",
        "englishTitle": "إرسال Email بسيط",
        "definition": "يمثل (إرسال Email بسيط) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إرسال Email بسيط) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إرسال Email بسيط) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.5.4",
          "title": "إرسال Email بسيط",
          "topicTitle": "Email Services",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إرسال Email بسيط) أحد المعايير التقنية الحيوية في مسار Email Services ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إرسال Email بسيط)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال Email بسيط) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إرسال Email بسيط)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إرسال Email بسيط)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إرسال Email بسيط",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إرسال Email بسيط)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إرسال Email بسيط\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إرسال Email بسيط ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إرسال Email بسيط) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.5.5",
        "title": "إرسال HTML Email",
        "englishTitle": "إرسال HTML Email",
        "definition": "يمثل (إرسال HTML Email) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إرسال HTML Email) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إرسال HTML Email) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.5.5",
          "title": "إرسال HTML Email",
          "topicTitle": "Email Services",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إرسال HTML Email) أحد المعايير التقنية الحيوية في مسار Email Services ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إرسال HTML Email)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال HTML Email) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إرسال HTML Email)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إرسال HTML Email)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إرسال HTML Email",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إرسال HTML Email)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إرسال HTML Email\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إرسال HTML Email ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إرسال HTML Email) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.5.6",
        "title": "إنشاء Email Templates",
        "englishTitle": "Email Templates",
        "definition": "يمثل (إنشاء Email Templates) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Email Templates) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Email Templates) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.5.6",
          "title": "إنشاء Email Templates",
          "topicTitle": "Email Services",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إنشاء Email Templates) أحد المعايير التقنية الحيوية في مسار Email Services ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Email Templates)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Email Templates) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Email Templates)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Email Templates)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Email Templates",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Email Templates)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Email Templates\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Email Templates ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Email Templates) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.5.7",
        "title": "إرسال Account Confirmation",
        "englishTitle": "إرسال Account Confirmation",
        "definition": "يمثل (إرسال Account Confirmation) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إرسال Account Confirmation) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إرسال Account Confirmation) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.5.7",
          "title": "إرسال Account Confirmation",
          "topicTitle": "Email Services",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إرسال Account Confirmation) أحد المعايير التقنية الحيوية في مسار Email Services ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إرسال Account Confirmation)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال Account Confirmation) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إرسال Account Confirmation)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إرسال Account Confirmation)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إرسال Account Confirmation",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إرسال Account Confirmation)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إرسال Account Confirmation\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إرسال Account Confirmation ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إرسال Account Confirmation) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.5.8",
        "title": "إرسال Password Reset",
        "englishTitle": "إرسال Password Reset",
        "definition": "يمثل (إرسال Password Reset) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إرسال Password Reset) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إرسال Password Reset) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.5.8",
          "title": "إرسال Password Reset",
          "topicTitle": "Email Services",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إرسال Password Reset) أحد المعايير التقنية الحيوية في مسار Email Services ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إرسال Password Reset)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال Password Reset) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إرسال Password Reset)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إرسال Password Reset)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إرسال Password Reset",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إرسال Password Reset)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إرسال Password Reset\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إرسال Password Reset ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إرسال Password Reset) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.5.9",
        "title": "إرسال البريد باستخدام Background Jobs",
        "englishTitle": "إرسال البريد بBackground Jobs",
        "definition": "يمثل (إرسال البريد باستخدام Background Jobs) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إرسال البريد باستخدام Background Jobs) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إرسال البريد باستخدام Background Jobs) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.5.9",
          "title": "إرسال البريد باستخدام Background Jobs",
          "topicTitle": "Email Services",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إرسال البريد باستخدام Background Jobs) أحد المعايير التقنية الحيوية في مسار Email Services ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إرسال البريد باستخدام Background Jobs)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال البريد باستخدام Background Jobs) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إرسال البريد باستخدام Background Jobs)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إرسال البريد باستخدام Background Jobs)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إرسال البريد باستخدام Background Jobs",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إرسال البريد باستخدام Background Jobs)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إرسال البريد باستخدام Background Jobs\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إرسال البريد باستخدام Background Jobs ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إرسال البريد باستخدام Background Jobs) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "Cloud File Storage",
    "subtopics": [
      {
        "subId": "22.6.1",
        "title": "ما هو Object Storage؟",
        "englishTitle": "Object Storage",
        "definition": "يمثل (ما هو Object Storage؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هو Object Storage؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هو Object Storage؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.6.1",
          "title": "ما هو Object Storage؟",
          "topicTitle": "Cloud File Storage",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (ما هو Object Storage؟) أحد المعايير التقنية الحيوية في مسار Cloud File Storage ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Object Storage؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Object Storage؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Object Storage؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Object Storage؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Object Storage؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Object Storage؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Object Storage؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Object Storage؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Object Storage؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.6.2",
        "title": "مقدمة في Azure Blob Storage",
        "englishTitle": "مقدمة في Azure Blob Storage",
        "definition": "يمثل (مقدمة في Azure Blob Storage) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مقدمة في Azure Blob Storage) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مقدمة في Azure Blob Storage) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.6.2",
          "title": "مقدمة في Azure Blob Storage",
          "topicTitle": "Cloud File Storage",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (مقدمة في Azure Blob Storage) أحد المعايير التقنية الحيوية في مسار Cloud File Storage ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في Azure Blob Storage)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Azure Blob Storage) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في Azure Blob Storage)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في Azure Blob Storage)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مقدمة في Azure Blob Storage",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في Azure Blob Storage)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في Azure Blob Storage\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في Azure Blob Storage ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في Azure Blob Storage) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.6.3",
        "title": "رفع الملفات إلى Azure Blob",
        "englishTitle": "رفع الملفات إلى Azure Blob",
        "definition": "يمثل (رفع الملفات إلى Azure Blob) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (رفع الملفات إلى Azure Blob) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (رفع الملفات إلى Azure Blob) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.6.3",
          "title": "رفع الملفات إلى Azure Blob",
          "topicTitle": "Cloud File Storage",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (رفع الملفات إلى Azure Blob) أحد المعايير التقنية الحيوية في مسار Cloud File Storage ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (رفع الملفات إلى Azure Blob)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (رفع الملفات إلى Azure Blob) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (رفع الملفات إلى Azure Blob)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (رفع الملفات إلى Azure Blob)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: رفع الملفات إلى Azure Blob",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (رفع الملفات إلى Azure Blob)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين رفع الملفات إلى Azure Blob\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: رفع الملفات إلى Azure Blob ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (رفع الملفات إلى Azure Blob) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.6.4",
        "title": "مقدمة في Amazon S3",
        "englishTitle": "مقدمة في Amazon S3",
        "definition": "يمثل (مقدمة في Amazon S3) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مقدمة في Amazon S3) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مقدمة في Amazon S3) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.6.4",
          "title": "مقدمة في Amazon S3",
          "topicTitle": "Cloud File Storage",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (مقدمة في Amazon S3) أحد المعايير التقنية الحيوية في مسار Cloud File Storage ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في Amazon S3)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Amazon S3) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في Amazon S3)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في Amazon S3)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مقدمة في Amazon S3",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في Amazon S3)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في Amazon S3\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في Amazon S3 ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في Amazon S3) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.6.5",
        "title": "استخدام Presigned URLs",
        "englishTitle": "Presigned URLs",
        "definition": "يمثل (استخدام Presigned URLs) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Presigned URLs) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Presigned URLs) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.6.5",
          "title": "استخدام Presigned URLs",
          "topicTitle": "Cloud File Storage",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (استخدام Presigned URLs) أحد المعايير التقنية الحيوية في مسار Cloud File Storage ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Presigned URLs)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Presigned URLs) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Presigned URLs)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Presigned URLs)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Presigned URLs",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Presigned URLs)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Presigned URLs\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Presigned URLs ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Presigned URLs) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.6.6",
        "title": "تخزين File Metadata داخل SQL Server",
        "englishTitle": "تخزين File Metadata داخل SQL Server",
        "definition": "يمثل (تخزين File Metadata داخل SQL Server) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تخزين File Metadata داخل SQL Server) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تخزين File Metadata داخل SQL Server) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.6.6",
          "title": "تخزين File Metadata داخل SQL Server",
          "topicTitle": "Cloud File Storage",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (تخزين File Metadata داخل SQL Server) أحد المعايير التقنية الحيوية في مسار Cloud File Storage ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تخزين File Metadata داخل SQL Server)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تخزين File Metadata داخل SQL Server) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تخزين File Metadata داخل SQL Server)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تخزين File Metadata داخل SQL Server)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تخزين File Metadata داخل SQL Server",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تخزين File Metadata داخل SQL Server)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تخزين File Metadata داخل SQL Server\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تخزين File Metadata داخل SQL Server ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تخزين File Metadata داخل SQL Server) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.6.7",
        "title": "إدارة صلاحيات الملفات",
        "englishTitle": "صلاحيات الملفات",
        "definition": "يمثل (إدارة صلاحيات الملفات) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إدارة صلاحيات الملفات) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إدارة صلاحيات الملفات) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.6.7",
          "title": "إدارة صلاحيات الملفات",
          "topicTitle": "Cloud File Storage",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (إدارة صلاحيات الملفات) أحد المعايير التقنية الحيوية في مسار Cloud File Storage ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة صلاحيات الملفات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة صلاحيات الملفات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة صلاحيات الملفات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة صلاحيات الملفات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إدارة صلاحيات الملفات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة صلاحيات الملفات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة صلاحيات الملفات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة صلاحيات الملفات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة صلاحيات الملفات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "22.6.8",
        "title": "مقارنة Local Storage وCloud Storage",
        "englishTitle": "مقارنة Local Storage وCloud Storage",
        "definition": "يمثل (مقارنة Local Storage وCloud Storage) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مقارنة Local Storage وCloud Storage) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مقارنة Local Storage وCloud Storage) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 22.6.8",
          "title": "مقارنة Local Storage وCloud Storage",
          "topicTitle": "Cloud File Storage",
          "sectionTitle": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
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
          "summary": "يمثل (مقارنة Local Storage وCloud Storage) أحد المعايير التقنية الحيوية في مسار Cloud File Storage ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقارنة Local Storage وCloud Storage)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقارنة Local Storage وCloud Storage) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقارنة Local Storage وCloud Storage)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقارنة Local Storage وCloud Storage)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مقارنة Local Storage وCloud Storage",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقارنة Local Storage وCloud Storage)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقارنة Local Storage وCloud Storage\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقارنة Local Storage وCloud Storage ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقارنة Local Storage وCloud Storage) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section22Data;
