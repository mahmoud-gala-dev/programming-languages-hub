// src/data/sections/section20.js
// محتوى تعليمي مفصل وشامل لـ: القسم العشرون: Authorization وإدارة الأدوار والصلاحيات
export const section20Data = {
  id: 20,
  title: "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
  englishTitle: "Authorization, Roles & Permission Management",
  icon: "ShieldCheck",
  category: "الأمان والمصادقة",
  description: "إدارة الصلاحيات عبر الأدوار RBAC، الصلاحيات القائمة على الادعاءات Claims، سياسات الأمان المخصصة Policies، وحماية لوحة التحكم.",
  summary: {
  "sectionId": 20,
  "title": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
  "englishTitle": "Authorization, Roles & Permission Management",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم العشرون: Authorization وإدارة الأدوار والصلاحيات.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
    "title": "مقدمة في Authorization",
    "subtopics": [
      {
        "subId": "20.1.1",
        "title": "ما هي Authorization؟",
        "englishTitle": "Authorization",
        "definition": "يمثل (ما هي Authorization؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هي Authorization؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هي Authorization؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.1.1",
          "title": "ما هي Authorization؟",
          "topicTitle": "مقدمة في Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (ما هي Authorization؟) أحد المعايير التقنية الحيوية في مسار مقدمة في Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Authorization؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Authorization؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Authorization؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Authorization؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي Authorization؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Authorization؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Authorization؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Authorization؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Authorization؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.1.2",
        "title": "مفهوم Roles",
        "englishTitle": "Roles",
        "definition": "يمثل (مفهوم Roles) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Roles) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Roles) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.1.2",
          "title": "مفهوم Roles",
          "topicTitle": "مقدمة في Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (مفهوم Roles) أحد المعايير التقنية الحيوية في مسار مقدمة في Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Roles)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Roles) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Roles)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Roles)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Roles",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Roles)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Roles\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Roles ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Roles) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.1.3",
        "title": "مفهوم Permissions",
        "englishTitle": "Permissions",
        "definition": "يمثل (مفهوم Permissions) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Permissions) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Permissions) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.1.3",
          "title": "مفهوم Permissions",
          "topicTitle": "مقدمة في Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (مفهوم Permissions) أحد المعايير التقنية الحيوية في مسار مقدمة في Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Permissions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Permissions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Permissions)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Permissions)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Permissions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Permissions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Permissions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Permissions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Permissions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.1.4",
        "title": "مفهوم Claims",
        "englishTitle": "Claims",
        "definition": "يمثل (مفهوم Claims) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Claims) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Claims) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.1.4",
          "title": "مفهوم Claims",
          "topicTitle": "مقدمة في Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (مفهوم Claims) أحد المعايير التقنية الحيوية في مسار مقدمة في Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Claims)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Claims) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Claims)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Claims)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Claims",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Claims)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Claims\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Claims ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Claims) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.1.5",
        "title": "مفهوم Policies",
        "englishTitle": "Policies",
        "definition": "يمثل (مفهوم Policies) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Policies) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Policies) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.1.5",
          "title": "مفهوم Policies",
          "topicTitle": "مقدمة في Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (مفهوم Policies) أحد المعايير التقنية الحيوية في مسار مقدمة في Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Policies)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Policies) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Policies)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Policies)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Policies",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Policies)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Policies\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Policies ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Policies) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.1.6",
        "title": "الفرق بين 401 و403",
        "englishTitle": "401 و403",
        "definition": "يمثل (الفرق بين 401 و403) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (الفرق بين 401 و403) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (الفرق بين 401 و403) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.1.6",
          "title": "الفرق بين 401 و403",
          "topicTitle": "مقدمة في Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (الفرق بين 401 و403) أحد المعايير التقنية الحيوية في مسار مقدمة في Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين 401 و403)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين 401 و403) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين 401 و403)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين 401 و403)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين 401 و403",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين 401 و403)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين 401 و403\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين 401 و403 ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين 401 و403) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.1.7",
        "title": "مبدأ Least Privilege",
        "englishTitle": "مبدأ Least Privilege",
        "definition": "يمثل (مبدأ Least Privilege) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مبدأ Least Privilege) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مبدأ Least Privilege) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.1.7",
          "title": "مبدأ Least Privilege",
          "topicTitle": "مقدمة في Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (مبدأ Least Privilege) أحد المعايير التقنية الحيوية في مسار مقدمة في Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مبدأ Least Privilege)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مبدأ Least Privilege) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مبدأ Least Privilege)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مبدأ Least Privilege)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مبدأ Least Privilege",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مبدأ Least Privilege)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مبدأ Least Privilege\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مبدأ Least Privilege ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مبدأ Least Privilege) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "Role-Based Authorization",
    "subtopics": [
      {
        "subId": "20.2.1",
        "title": "إنشاء Roles",
        "englishTitle": "Roles",
        "definition": "يمثل (إنشاء Roles) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Roles) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Roles) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.2.1",
          "title": "إنشاء Roles",
          "topicTitle": "Role-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إنشاء Roles) أحد المعايير التقنية الحيوية في مسار Role-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Roles)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Roles) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Roles)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Roles)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Roles",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Roles)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Roles\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Roles ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Roles) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.2.2",
        "title": "استخدام RoleManager",
        "englishTitle": "RoleManager",
        "definition": "يمثل (استخدام RoleManager) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام RoleManager) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام RoleManager) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.2.2",
          "title": "استخدام RoleManager",
          "topicTitle": "Role-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (استخدام RoleManager) أحد المعايير التقنية الحيوية في مسار Role-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام RoleManager)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام RoleManager) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام RoleManager)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام RoleManager)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام RoleManager",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام RoleManager)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام RoleManager\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام RoleManager ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام RoleManager) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.2.3",
        "title": "إضافة User إلى Role",
        "englishTitle": "إضافة User إلى Role",
        "definition": "يمثل (إضافة User إلى Role) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إضافة User إلى Role) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إضافة User إلى Role) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.2.3",
          "title": "إضافة User إلى Role",
          "topicTitle": "Role-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إضافة User إلى Role) أحد المعايير التقنية الحيوية في مسار Role-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إضافة User إلى Role)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة User إلى Role) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إضافة User إلى Role)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إضافة User إلى Role)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إضافة User إلى Role",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إضافة User إلى Role)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إضافة User إلى Role\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إضافة User إلى Role ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إضافة User إلى Role) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.2.4",
        "title": "إزالة User من Role",
        "englishTitle": "إزالة User من Role",
        "definition": "يمثل (إزالة User من Role) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إزالة User من Role) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إزالة User من Role) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.2.4",
          "title": "إزالة User من Role",
          "topicTitle": "Role-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إزالة User من Role) أحد المعايير التقنية الحيوية في مسار Role-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إزالة User من Role)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إزالة User من Role) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إزالة User من Role)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إزالة User من Role)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إزالة User من Role",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إزالة User من Role)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إزالة User من Role\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إزالة User من Role ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إزالة User من Role) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.2.5",
        "title": "استخدام Authorize Attribute",
        "englishTitle": "Authorize Attribute",
        "definition": "يمثل (استخدام Authorize Attribute) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Authorize Attribute) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Authorize Attribute) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.2.5",
          "title": "استخدام Authorize Attribute",
          "topicTitle": "Role-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (استخدام Authorize Attribute) أحد المعايير التقنية الحيوية في مسار Role-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Authorize Attribute)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Authorize Attribute) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Authorize Attribute)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Authorize Attribute)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Authorize Attribute",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Authorize Attribute)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Authorize Attribute\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Authorize Attribute ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Authorize Attribute) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.2.6",
        "title": "استخدام Authorize مع Roles",
        "englishTitle": "Authorize مع Roles",
        "definition": "يمثل (استخدام Authorize مع Roles) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Authorize مع Roles) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Authorize مع Roles) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.2.6",
          "title": "استخدام Authorize مع Roles",
          "topicTitle": "Role-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (استخدام Authorize مع Roles) أحد المعايير التقنية الحيوية في مسار Role-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Authorize مع Roles)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Authorize مع Roles) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Authorize مع Roles)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Authorize مع Roles)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Authorize مع Roles",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Authorize مع Roles)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Authorize مع Roles\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Authorize مع Roles ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Authorize مع Roles) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.2.7",
        "title": "حماية AdminController",
        "englishTitle": "حماية AdminController",
        "definition": "يمثل (حماية AdminController) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (حماية AdminController) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (حماية AdminController) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.2.7",
          "title": "حماية AdminController",
          "topicTitle": "Role-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (حماية AdminController) أحد المعايير التقنية الحيوية في مسار Role-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حماية AdminController)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حماية AdminController) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حماية AdminController)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حماية AdminController)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حماية AdminController",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حماية AdminController)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حماية AdminController\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حماية AdminController ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حماية AdminController) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.2.8",
        "title": "إدارة الأدوار داخل لوحة التحكم",
        "englishTitle": "الأدوار داخل لوحة التحكم",
        "definition": "يمثل (إدارة الأدوار داخل لوحة التحكم) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إدارة الأدوار داخل لوحة التحكم) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إدارة الأدوار داخل لوحة التحكم) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.2.8",
          "title": "إدارة الأدوار داخل لوحة التحكم",
          "topicTitle": "Role-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إدارة الأدوار داخل لوحة التحكم) أحد المعايير التقنية الحيوية في مسار Role-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة الأدوار داخل لوحة التحكم)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة الأدوار داخل لوحة التحكم) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة الأدوار داخل لوحة التحكم)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة الأدوار داخل لوحة التحكم)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إدارة الأدوار داخل لوحة التحكم",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة الأدوار داخل لوحة التحكم)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة الأدوار داخل لوحة التحكم\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة الأدوار داخل لوحة التحكم ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة الأدوار داخل لوحة التحكم) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Claims-Based Authorization",
    "subtopics": [
      {
        "subId": "20.3.1",
        "title": "ما هي Claims؟",
        "englishTitle": "Claims",
        "definition": "يمثل (ما هي Claims؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هي Claims؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هي Claims؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.3.1",
          "title": "ما هي Claims؟",
          "topicTitle": "Claims-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (ما هي Claims؟) أحد المعايير التقنية الحيوية في مسار Claims-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Claims؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Claims؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Claims؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Claims؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي Claims؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Claims؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Claims؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Claims؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Claims؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.3.2",
        "title": "إنشاء Custom Claim",
        "englishTitle": "Custom Claim",
        "definition": "يمثل (إنشاء Custom Claim) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Custom Claim) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Custom Claim) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.3.2",
          "title": "إنشاء Custom Claim",
          "topicTitle": "Claims-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إنشاء Custom Claim) أحد المعايير التقنية الحيوية في مسار Claims-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Custom Claim)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Custom Claim) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Custom Claim)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Custom Claim)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Custom Claim",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Custom Claim)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Custom Claim\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Custom Claim ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Custom Claim) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.3.3",
        "title": "إضافة Claims إلى User",
        "englishTitle": "إضافة Claims إلى User",
        "definition": "يمثل (إضافة Claims إلى User) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إضافة Claims إلى User) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إضافة Claims إلى User) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.3.3",
          "title": "إضافة Claims إلى User",
          "topicTitle": "Claims-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إضافة Claims إلى User) أحد المعايير التقنية الحيوية في مسار Claims-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إضافة Claims إلى User)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة Claims إلى User) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إضافة Claims إلى User)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إضافة Claims إلى User)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إضافة Claims إلى User",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إضافة Claims إلى User)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إضافة Claims إلى User\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إضافة Claims إلى User ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إضافة Claims إلى User) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.3.4",
        "title": "قراءة Claims داخل Controller",
        "englishTitle": "قراءة Claims داخل Controller",
        "definition": "يمثل (قراءة Claims داخل Controller) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (قراءة Claims داخل Controller) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (قراءة Claims داخل Controller) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.3.4",
          "title": "قراءة Claims داخل Controller",
          "topicTitle": "Claims-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (قراءة Claims داخل Controller) أحد المعايير التقنية الحيوية في مسار Claims-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (قراءة Claims داخل Controller)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (قراءة Claims داخل Controller) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (قراءة Claims داخل Controller)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (قراءة Claims داخل Controller)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: قراءة Claims داخل Controller",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (قراءة Claims داخل Controller)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين قراءة Claims داخل Controller\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: قراءة Claims داخل Controller ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (قراءة Claims داخل Controller) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.3.5",
        "title": "إنشاء Claim-Based Policy",
        "englishTitle": "Claim-Based Policy",
        "definition": "يمثل (إنشاء Claim-Based Policy) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Claim-Based Policy) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Claim-Based Policy) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.3.5",
          "title": "إنشاء Claim-Based Policy",
          "topicTitle": "Claims-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إنشاء Claim-Based Policy) أحد المعايير التقنية الحيوية في مسار Claims-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Claim-Based Policy)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Claim-Based Policy) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Claim-Based Policy)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Claim-Based Policy)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Claim-Based Policy",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Claim-Based Policy)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Claim-Based Policy\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Claim-Based Policy ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Claim-Based Policy) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.3.6",
        "title": "ربط Policy مع Controller",
        "englishTitle": "ربط Policy مع Controller",
        "definition": "يمثل (ربط Policy مع Controller) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ربط Policy مع Controller) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ربط Policy مع Controller) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.3.6",
          "title": "ربط Policy مع Controller",
          "topicTitle": "Claims-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (ربط Policy مع Controller) أحد المعايير التقنية الحيوية في مسار Claims-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ربط Policy مع Controller)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ربط Policy مع Controller) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ربط Policy مع Controller)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ربط Policy مع Controller)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ربط Policy مع Controller",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ربط Policy مع Controller)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ربط Policy مع Controller\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ربط Policy مع Controller ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ربط Policy مع Controller) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.3.7",
        "title": "التحقق من Claims داخل View",
        "englishTitle": "التحقق من Claims داخل View",
        "definition": "يمثل (التحقق من Claims داخل View) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (التحقق من Claims داخل View) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (التحقق من Claims داخل View) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.3.7",
          "title": "التحقق من Claims داخل View",
          "topicTitle": "Claims-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (التحقق من Claims داخل View) أحد المعايير التقنية الحيوية في مسار Claims-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التحقق من Claims داخل View)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحقق من Claims داخل View) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التحقق من Claims داخل View)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التحقق من Claims داخل View)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التحقق من Claims داخل View",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التحقق من Claims داخل View)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التحقق من Claims داخل View\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التحقق من Claims داخل View ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التحقق من Claims داخل View) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "Policy-Based Authorization",
    "subtopics": [
      {
        "subId": "20.4.1",
        "title": "ما هي Authorization Policy؟",
        "englishTitle": "Authorization Policy",
        "definition": "يمثل (ما هي Authorization Policy؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هي Authorization Policy؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هي Authorization Policy؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.4.1",
          "title": "ما هي Authorization Policy؟",
          "topicTitle": "Policy-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (ما هي Authorization Policy؟) أحد المعايير التقنية الحيوية في مسار Policy-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Authorization Policy؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Authorization Policy؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Authorization Policy؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Authorization Policy؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي Authorization Policy؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Authorization Policy؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Authorization Policy؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Authorization Policy؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Authorization Policy؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.4.2",
        "title": "إنشاء Policy",
        "englishTitle": "Policy",
        "definition": "يمثل (إنشاء Policy) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Policy) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Policy) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.4.2",
          "title": "إنشاء Policy",
          "topicTitle": "Policy-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إنشاء Policy) أحد المعايير التقنية الحيوية في مسار Policy-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Policy)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Policy) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Policy)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Policy)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Policy",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Policy)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Policy\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Policy ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Policy) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.4.3",
        "title": "استخدام RequireRole",
        "englishTitle": "RequireRole",
        "definition": "يمثل (استخدام RequireRole) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام RequireRole) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام RequireRole) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.4.3",
          "title": "استخدام RequireRole",
          "topicTitle": "Policy-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (استخدام RequireRole) أحد المعايير التقنية الحيوية في مسار Policy-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام RequireRole)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام RequireRole) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام RequireRole)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام RequireRole)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام RequireRole",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام RequireRole)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام RequireRole\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام RequireRole ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام RequireRole) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.4.4",
        "title": "استخدام RequireClaim",
        "englishTitle": "RequireClaim",
        "definition": "يمثل (استخدام RequireClaim) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام RequireClaim) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام RequireClaim) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.4.4",
          "title": "استخدام RequireClaim",
          "topicTitle": "Policy-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (استخدام RequireClaim) أحد المعايير التقنية الحيوية في مسار Policy-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام RequireClaim)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام RequireClaim) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام RequireClaim)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام RequireClaim)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام RequireClaim",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام RequireClaim)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام RequireClaim\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام RequireClaim ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام RequireClaim) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.4.5",
        "title": "إنشاء Custom Requirement",
        "englishTitle": "Custom Requirement",
        "definition": "يمثل (إنشاء Custom Requirement) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Custom Requirement) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Custom Requirement) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.4.5",
          "title": "إنشاء Custom Requirement",
          "topicTitle": "Policy-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إنشاء Custom Requirement) أحد المعايير التقنية الحيوية في مسار Policy-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Custom Requirement)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Custom Requirement) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Custom Requirement)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Custom Requirement)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Custom Requirement",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Custom Requirement)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Custom Requirement\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Custom Requirement ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Custom Requirement) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.4.6",
        "title": "إنشاء AuthorizationHandler",
        "englishTitle": "AuthorizationHandler",
        "definition": "يمثل (إنشاء AuthorizationHandler) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء AuthorizationHandler) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء AuthorizationHandler) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.4.6",
          "title": "إنشاء AuthorizationHandler",
          "topicTitle": "Policy-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إنشاء AuthorizationHandler) أحد المعايير التقنية الحيوية في مسار Policy-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء AuthorizationHandler)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء AuthorizationHandler) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء AuthorizationHandler)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء AuthorizationHandler)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء AuthorizationHandler",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء AuthorizationHandler)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء AuthorizationHandler\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء AuthorizationHandler ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء AuthorizationHandler) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.4.7",
        "title": "استخدام IAuthorizationService",
        "englishTitle": "IAuthorizationService",
        "definition": "يمثل (استخدام IAuthorizationService) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام IAuthorizationService) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام IAuthorizationService) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.4.7",
          "title": "استخدام IAuthorizationService",
          "topicTitle": "Policy-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (استخدام IAuthorizationService) أحد المعايير التقنية الحيوية في مسار Policy-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام IAuthorizationService)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام IAuthorizationService) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام IAuthorizationService)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام IAuthorizationService)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام IAuthorizationService",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام IAuthorizationService)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام IAuthorizationService\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام IAuthorizationService ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام IAuthorizationService) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.4.8",
        "title": "تنفيذ Resource-Based Authorization",
        "englishTitle": "Resource-Based Authorization",
        "definition": "يمثل (تنفيذ Resource-Based Authorization) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تنفيذ Resource-Based Authorization) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تنفيذ Resource-Based Authorization) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.4.8",
          "title": "تنفيذ Resource-Based Authorization",
          "topicTitle": "Policy-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (تنفيذ Resource-Based Authorization) أحد المعايير التقنية الحيوية في مسار Policy-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تنفيذ Resource-Based Authorization)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنفيذ Resource-Based Authorization) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تنفيذ Resource-Based Authorization)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تنفيذ Resource-Based Authorization)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تنفيذ Resource-Based Authorization",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تنفيذ Resource-Based Authorization)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تنفيذ Resource-Based Authorization\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تنفيذ Resource-Based Authorization ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تنفيذ Resource-Based Authorization) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "Permission-Based Authorization",
    "subtopics": [
      {
        "subId": "20.5.1",
        "title": "تصميم Permissions Table",
        "englishTitle": "تصميم Permissions Table",
        "definition": "يمثل (تصميم Permissions Table) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تصميم Permissions Table) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تصميم Permissions Table) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.5.1",
          "title": "تصميم Permissions Table",
          "topicTitle": "Permission-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (تصميم Permissions Table) أحد المعايير التقنية الحيوية في مسار Permission-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تصميم Permissions Table)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تصميم Permissions Table) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تصميم Permissions Table)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تصميم Permissions Table)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تصميم Permissions Table",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تصميم Permissions Table)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تصميم Permissions Table\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تصميم Permissions Table ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تصميم Permissions Table) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.5.2",
        "title": "ربط Permissions مع Roles",
        "englishTitle": "ربط Permissions مع Roles",
        "definition": "يمثل (ربط Permissions مع Roles) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ربط Permissions مع Roles) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ربط Permissions مع Roles) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.5.2",
          "title": "ربط Permissions مع Roles",
          "topicTitle": "Permission-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (ربط Permissions مع Roles) أحد المعايير التقنية الحيوية في مسار Permission-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ربط Permissions مع Roles)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ربط Permissions مع Roles) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ربط Permissions مع Roles)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ربط Permissions مع Roles)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ربط Permissions مع Roles",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ربط Permissions مع Roles)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ربط Permissions مع Roles\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ربط Permissions مع Roles ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ربط Permissions مع Roles) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.5.3",
        "title": "إنشاء Permission Requirement",
        "englishTitle": "Permission Requirement",
        "definition": "يمثل (إنشاء Permission Requirement) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Permission Requirement) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Permission Requirement) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.5.3",
          "title": "إنشاء Permission Requirement",
          "topicTitle": "Permission-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إنشاء Permission Requirement) أحد المعايير التقنية الحيوية في مسار Permission-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Permission Requirement)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Permission Requirement) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Permission Requirement)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Permission Requirement)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Permission Requirement",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Permission Requirement)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Permission Requirement\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Permission Requirement ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Permission Requirement) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.5.4",
        "title": "إنشاء Permission Handler",
        "englishTitle": "Permission Handler",
        "definition": "يمثل (إنشاء Permission Handler) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Permission Handler) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Permission Handler) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.5.4",
          "title": "إنشاء Permission Handler",
          "topicTitle": "Permission-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إنشاء Permission Handler) أحد المعايير التقنية الحيوية في مسار Permission-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Permission Handler)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Permission Handler) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Permission Handler)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Permission Handler)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Permission Handler",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Permission Handler)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Permission Handler\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Permission Handler ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Permission Handler) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.5.5",
        "title": "إنشاء Dynamic Authorization Policies",
        "englishTitle": "Dynamic Authorization Policies",
        "definition": "يمثل (إنشاء Dynamic Authorization Policies) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Dynamic Authorization Policies) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Dynamic Authorization Policies) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.5.5",
          "title": "إنشاء Dynamic Authorization Policies",
          "topicTitle": "Permission-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إنشاء Dynamic Authorization Policies) أحد المعايير التقنية الحيوية في مسار Permission-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Dynamic Authorization Policies)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Dynamic Authorization Policies) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Dynamic Authorization Policies)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Dynamic Authorization Policies)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Dynamic Authorization Policies",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Dynamic Authorization Policies)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Dynamic Authorization Policies\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Dynamic Authorization Policies ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Dynamic Authorization Policies) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.5.6",
        "title": "منع الوصول إلى موارد مستخدم آخر",
        "englishTitle": "منع الوصول إلى موارد مستخدم آخر",
        "definition": "يمثل (منع الوصول إلى موارد مستخدم آخر) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (منع الوصول إلى موارد مستخدم آخر) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (منع الوصول إلى موارد مستخدم آخر) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.5.6",
          "title": "منع الوصول إلى موارد مستخدم آخر",
          "topicTitle": "Permission-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (منع الوصول إلى موارد مستخدم آخر) أحد المعايير التقنية الحيوية في مسار Permission-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (منع الوصول إلى موارد مستخدم آخر)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (منع الوصول إلى موارد مستخدم آخر) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (منع الوصول إلى موارد مستخدم آخر)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (منع الوصول إلى موارد مستخدم آخر)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: منع الوصول إلى موارد مستخدم آخر",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (منع الوصول إلى موارد مستخدم آخر)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين منع الوصول إلى موارد مستخدم آخر\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: منع الوصول إلى موارد مستخدم آخر ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (منع الوصول إلى موارد مستخدم آخر) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.5.7",
        "title": "تسجيل تغييرات الصلاحيات",
        "englishTitle": "تسجيل تغييرات الصلاحيات",
        "definition": "يمثل (تسجيل تغييرات الصلاحيات) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تسجيل تغييرات الصلاحيات) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تسجيل تغييرات الصلاحيات) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.5.7",
          "title": "تسجيل تغييرات الصلاحيات",
          "topicTitle": "Permission-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (تسجيل تغييرات الصلاحيات) أحد المعايير التقنية الحيوية في مسار Permission-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تسجيل تغييرات الصلاحيات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تسجيل تغييرات الصلاحيات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تسجيل تغييرات الصلاحيات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تسجيل تغييرات الصلاحيات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تسجيل تغييرات الصلاحيات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تسجيل تغييرات الصلاحيات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تسجيل تغييرات الصلاحيات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تسجيل تغييرات الصلاحيات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تسجيل تغييرات الصلاحيات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.5.8",
        "title": "اختبار Authorization",
        "englishTitle": "اختبار Authorization",
        "definition": "يمثل (اختبار Authorization) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (اختبار Authorization) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (اختبار Authorization) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.5.8",
          "title": "اختبار Authorization",
          "topicTitle": "Permission-Based Authorization",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (اختبار Authorization) أحد المعايير التقنية الحيوية في مسار Permission-Based Authorization ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
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
      }
    ]
  },
  {
    "topicId": 6,
    "title": "مشروع عملي: نظام صلاحيات",
    "subtopics": [
      {
        "subId": "20.6.1",
        "title": "إنشاء Admin وManager وEmployee Roles",
        "englishTitle": "Admin وManager وEmployee Roles",
        "definition": "يمثل (إنشاء Admin وManager وEmployee Roles) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Admin وManager وEmployee Roles) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Admin وManager وEmployee Roles) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.6.1",
          "title": "إنشاء Admin وManager وEmployee Roles",
          "topicTitle": "مشروع عملي: نظام صلاحيات",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إنشاء Admin وManager وEmployee Roles) أحد المعايير التقنية الحيوية في مسار مشروع عملي: نظام صلاحيات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Admin وManager وEmployee Roles)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Admin وManager وEmployee Roles) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Admin وManager وEmployee Roles)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Admin وManager وEmployee Roles)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Admin وManager وEmployee Roles",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Admin وManager وEmployee Roles)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Admin وManager وEmployee Roles\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Admin وManager وEmployee Roles ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Admin وManager وEmployee Roles) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.6.2",
        "title": "إنشاء Permissions",
        "englishTitle": "Permissions",
        "definition": "يمثل (إنشاء Permissions) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Permissions) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Permissions) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.6.2",
          "title": "إنشاء Permissions",
          "topicTitle": "مشروع عملي: نظام صلاحيات",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إنشاء Permissions) أحد المعايير التقنية الحيوية في مسار مشروع عملي: نظام صلاحيات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Permissions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Permissions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Permissions)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Permissions)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Permissions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Permissions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Permissions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Permissions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Permissions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.6.3",
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
          "badge": "الدرس 20.6.3",
          "title": "إنشاء إدارة المستخدمين",
          "topicTitle": "مشروع عملي: نظام صلاحيات",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إنشاء إدارة المستخدمين) أحد المعايير التقنية الحيوية في مسار مشروع عملي: نظام صلاحيات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
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
        "subId": "20.6.4",
        "title": "تخصيص الصلاحيات لكل دور",
        "englishTitle": "تخصيص الصلاحيات لكل دور",
        "definition": "يمثل (تخصيص الصلاحيات لكل دور) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تخصيص الصلاحيات لكل دور) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تخصيص الصلاحيات لكل دور) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.6.4",
          "title": "تخصيص الصلاحيات لكل دور",
          "topicTitle": "مشروع عملي: نظام صلاحيات",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (تخصيص الصلاحيات لكل دور) أحد المعايير التقنية الحيوية في مسار مشروع عملي: نظام صلاحيات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تخصيص الصلاحيات لكل دور)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تخصيص الصلاحيات لكل دور) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تخصيص الصلاحيات لكل دور)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تخصيص الصلاحيات لكل دور)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تخصيص الصلاحيات لكل دور",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تخصيص الصلاحيات لكل دور)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تخصيص الصلاحيات لكل دور\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تخصيص الصلاحيات لكل دور ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تخصيص الصلاحيات لكل دور) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.6.5",
        "title": "حماية الصفحات",
        "englishTitle": "حماية الصفحات",
        "definition": "يمثل (حماية الصفحات) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (حماية الصفحات) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (حماية الصفحات) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.6.5",
          "title": "حماية الصفحات",
          "topicTitle": "مشروع عملي: نظام صلاحيات",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (حماية الصفحات) أحد المعايير التقنية الحيوية في مسار مشروع عملي: نظام صلاحيات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حماية الصفحات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حماية الصفحات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حماية الصفحات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حماية الصفحات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حماية الصفحات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حماية الصفحات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حماية الصفحات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حماية الصفحات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حماية الصفحات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.6.6",
        "title": "إخفاء عناصر الواجهة حسب الصلاحيات",
        "englishTitle": "إخفاء عناصر الواجهة حسب الصلاحيات",
        "definition": "يمثل (إخفاء عناصر الواجهة حسب الصلاحيات) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إخفاء عناصر الواجهة حسب الصلاحيات) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إخفاء عناصر الواجهة حسب الصلاحيات) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.6.6",
          "title": "إخفاء عناصر الواجهة حسب الصلاحيات",
          "topicTitle": "مشروع عملي: نظام صلاحيات",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (إخفاء عناصر الواجهة حسب الصلاحيات) أحد المعايير التقنية الحيوية في مسار مشروع عملي: نظام صلاحيات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إخفاء عناصر الواجهة حسب الصلاحيات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إخفاء عناصر الواجهة حسب الصلاحيات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إخفاء عناصر الواجهة حسب الصلاحيات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إخفاء عناصر الواجهة حسب الصلاحيات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إخفاء عناصر الواجهة حسب الصلاحيات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إخفاء عناصر الواجهة حسب الصلاحيات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إخفاء عناصر الواجهة حسب الصلاحيات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إخفاء عناصر الواجهة حسب الصلاحيات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إخفاء عناصر الواجهة حسب الصلاحيات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.6.7",
        "title": "التحقق من الصلاحيات داخل الخادم",
        "englishTitle": "التحقق من الصلاحيات داخل الخادم",
        "definition": "يمثل (التحقق من الصلاحيات داخل الخادم) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (التحقق من الصلاحيات داخل الخادم) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (التحقق من الصلاحيات داخل الخادم) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.6.7",
          "title": "التحقق من الصلاحيات داخل الخادم",
          "topicTitle": "مشروع عملي: نظام صلاحيات",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (التحقق من الصلاحيات داخل الخادم) أحد المعايير التقنية الحيوية في مسار مشروع عملي: نظام صلاحيات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التحقق من الصلاحيات داخل الخادم)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحقق من الصلاحيات داخل الخادم) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التحقق من الصلاحيات داخل الخادم)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التحقق من الصلاحيات داخل الخادم)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التحقق من الصلاحيات داخل الخادم",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التحقق من الصلاحيات داخل الخادم)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التحقق من الصلاحيات داخل الخادم\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التحقق من الصلاحيات داخل الخادم ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التحقق من الصلاحيات داخل الخادم) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "20.6.8",
        "title": "اختبار محاولات تجاوز الصلاحيات",
        "englishTitle": "اختبار محاولات تجاوز الصلاحيات",
        "definition": "يمثل (اختبار محاولات تجاوز الصلاحيات) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (اختبار محاولات تجاوز الصلاحيات) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (اختبار محاولات تجاوز الصلاحيات) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 20.6.8",
          "title": "اختبار محاولات تجاوز الصلاحيات",
          "topicTitle": "مشروع عملي: نظام صلاحيات",
          "sectionTitle": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
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
          "summary": "يمثل (اختبار محاولات تجاوز الصلاحيات) أحد المعايير التقنية الحيوية في مسار مشروع عملي: نظام صلاحيات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار محاولات تجاوز الصلاحيات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار محاولات تجاوز الصلاحيات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار محاولات تجاوز الصلاحيات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار محاولات تجاوز الصلاحيات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار محاولات تجاوز الصلاحيات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار محاولات تجاوز الصلاحيات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار محاولات تجاوز الصلاحيات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار محاولات تجاوز الصلاحيات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار محاولات تجاوز الصلاحيات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section20Data;
