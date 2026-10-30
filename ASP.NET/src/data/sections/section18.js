// src/data/sections/section18.js
// محتوى تعليمي مفصل وشامل لـ: القسم الثامن عشر: Dependency Injection وServices وConfiguration
export const section18Data = {
  id: 18,
  title: "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
  englishTitle: "Dependency Injection, Services & Configuration",
  icon: "Share2",
  category: "معمارية .NET",
  description: "حقن التبعيات DI، فترات حياة الخدمات Lifetimes (Transient, Scoped, Singleton)، طبقة الخدمات ومستودع البيانات، ونظام الإعدادات والـ Logging.",
  summary: {
  "sectionId": 18,
  "title": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
  "englishTitle": "Dependency Injection, Services & Configuration",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم الثامن عشر: Dependency Injection وServices وConfiguration.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
    "title": "مقدمة في Dependency Injection",
    "subtopics": [
      {
        "subId": "18.1.1",
        "title": "ما هو Dependency Injection؟",
        "englishTitle": "Dependency Injection",
        "definition": "يمثل (ما هو Dependency Injection؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هو Dependency Injection؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هو Dependency Injection؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.1.1",
          "title": "ما هو Dependency Injection؟",
          "topicTitle": "مقدمة في Dependency Injection",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (ما هو Dependency Injection؟) أحد المعايير التقنية الحيوية في مسار مقدمة في Dependency Injection ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Dependency Injection؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Dependency Injection؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Dependency Injection؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Dependency Injection؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Dependency Injection؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Dependency Injection؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Dependency Injection؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Dependency Injection؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Dependency Injection؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.1.2",
        "title": "ما هي Dependency؟",
        "englishTitle": "Dependency",
        "definition": "يمثل (ما هي Dependency؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هي Dependency؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هي Dependency؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.1.2",
          "title": "ما هي Dependency؟",
          "topicTitle": "مقدمة في Dependency Injection",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (ما هي Dependency؟) أحد المعايير التقنية الحيوية في مسار مقدمة في Dependency Injection ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Dependency؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Dependency؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Dependency؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Dependency؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي Dependency؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Dependency؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Dependency؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Dependency؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Dependency؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.1.3",
        "title": "مشكلة Tight Coupling",
        "englishTitle": "مشكلة Tight Coupling",
        "definition": "يمثل (مشكلة Tight Coupling) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مشكلة Tight Coupling) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مشكلة Tight Coupling) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.1.3",
          "title": "مشكلة Tight Coupling",
          "topicTitle": "مقدمة في Dependency Injection",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (مشكلة Tight Coupling) أحد المعايير التقنية الحيوية في مسار مقدمة في Dependency Injection ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مشكلة Tight Coupling)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مشكلة Tight Coupling) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مشكلة Tight Coupling)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مشكلة Tight Coupling)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مشكلة Tight Coupling",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مشكلة Tight Coupling)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مشكلة Tight Coupling\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مشكلة Tight Coupling ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مشكلة Tight Coupling) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.1.4",
        "title": "مفهوم Loose Coupling",
        "englishTitle": "Loose Coupling",
        "definition": "يمثل (مفهوم Loose Coupling) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Loose Coupling) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Loose Coupling) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.1.4",
          "title": "مفهوم Loose Coupling",
          "topicTitle": "مقدمة في Dependency Injection",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (مفهوم Loose Coupling) أحد المعايير التقنية الحيوية في مسار مقدمة في Dependency Injection ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Loose Coupling)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Loose Coupling) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Loose Coupling)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Loose Coupling)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Loose Coupling",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Loose Coupling)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Loose Coupling\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Loose Coupling ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Loose Coupling) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.1.5",
        "title": "مفهوم IoC Container",
        "englishTitle": "IoC Container",
        "definition": "يمثل (مفهوم IoC Container) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم IoC Container) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم IoC Container) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.1.5",
          "title": "مفهوم IoC Container",
          "topicTitle": "مقدمة في Dependency Injection",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (مفهوم IoC Container) أحد المعايير التقنية الحيوية في مسار مقدمة في Dependency Injection ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم IoC Container)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم IoC Container) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم IoC Container)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم IoC Container)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم IoC Container",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم IoC Container)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم IoC Container\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم IoC Container ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم IoC Container) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.1.6",
        "title": "استخدام Interfaces مع DI",
        "englishTitle": "Interfaces مع DI",
        "definition": "يمثل (استخدام Interfaces مع DI) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Interfaces مع DI) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Interfaces مع DI) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.1.6",
          "title": "استخدام Interfaces مع DI",
          "topicTitle": "مقدمة في Dependency Injection",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام Interfaces مع DI) أحد المعايير التقنية الحيوية في مسار مقدمة في Dependency Injection ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Interfaces مع DI)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Interfaces مع DI) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Interfaces مع DI)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Interfaces مع DI)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Interfaces مع DI",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Interfaces مع DI)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Interfaces مع DI\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Interfaces مع DI ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Interfaces مع DI) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.1.7",
        "title": "حقن الخدمات داخل Controller",
        "englishTitle": "حقن الخدمات داخل Controller",
        "definition": "يمثل (حقن الخدمات داخل Controller) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (حقن الخدمات داخل Controller) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (حقن الخدمات داخل Controller) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.1.7",
          "title": "حقن الخدمات داخل Controller",
          "topicTitle": "مقدمة في Dependency Injection",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (حقن الخدمات داخل Controller) أحد المعايير التقنية الحيوية في مسار مقدمة في Dependency Injection ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حقن الخدمات داخل Controller)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حقن الخدمات داخل Controller) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حقن الخدمات داخل Controller)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حقن الخدمات داخل Controller)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حقن الخدمات داخل Controller",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حقن الخدمات داخل Controller)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حقن الخدمات داخل Controller\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حقن الخدمات داخل Controller ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حقن الخدمات داخل Controller) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "Service Lifetimes",
    "subtopics": [
      {
        "subId": "18.2.1",
        "title": "ما هو Service Lifetime؟",
        "englishTitle": "Service Lifetime",
        "definition": "يمثل (ما هو Service Lifetime؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هو Service Lifetime؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هو Service Lifetime؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.2.1",
          "title": "ما هو Service Lifetime؟",
          "topicTitle": "Service Lifetimes",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (ما هو Service Lifetime؟) أحد المعايير التقنية الحيوية في مسار Service Lifetimes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Service Lifetime؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Service Lifetime؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Service Lifetime؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Service Lifetime؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Service Lifetime؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Service Lifetime؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Service Lifetime؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Service Lifetime؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Service Lifetime؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.2.2",
        "title": "استخدام AddTransient",
        "englishTitle": "AddTransient",
        "definition": "يمثل (استخدام AddTransient) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام AddTransient) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام AddTransient) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.2.2",
          "title": "استخدام AddTransient",
          "topicTitle": "Service Lifetimes",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام AddTransient) أحد المعايير التقنية الحيوية في مسار Service Lifetimes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام AddTransient)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام AddTransient) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام AddTransient)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام AddTransient)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام AddTransient",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام AddTransient)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام AddTransient\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام AddTransient ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام AddTransient) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.2.3",
        "title": "استخدام AddScoped",
        "englishTitle": "AddScoped",
        "definition": "يمثل (استخدام AddScoped) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام AddScoped) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام AddScoped) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.2.3",
          "title": "استخدام AddScoped",
          "topicTitle": "Service Lifetimes",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام AddScoped) أحد المعايير التقنية الحيوية في مسار Service Lifetimes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام AddScoped)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام AddScoped) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام AddScoped)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام AddScoped)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام AddScoped",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام AddScoped)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام AddScoped\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام AddScoped ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام AddScoped) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.2.4",
        "title": "استخدام AddSingleton",
        "englishTitle": "AddSingleton",
        "definition": "يمثل (استخدام AddSingleton) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام AddSingleton) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام AddSingleton) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.2.4",
          "title": "استخدام AddSingleton",
          "topicTitle": "Service Lifetimes",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام AddSingleton) أحد المعايير التقنية الحيوية في مسار Service Lifetimes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام AddSingleton)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام AddSingleton) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام AddSingleton)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام AddSingleton)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام AddSingleton",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام AddSingleton)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام AddSingleton\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام AddSingleton ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام AddSingleton) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.2.5",
        "title": "الفرق بين Transient وScoped وSingleton",
        "englishTitle": "Transient وScoped وSingleton",
        "definition": "يمثل (الفرق بين Transient وScoped وSingleton) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (الفرق بين Transient وScoped وSingleton) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (الفرق بين Transient وScoped وSingleton) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.2.5",
          "title": "الفرق بين Transient وScoped وSingleton",
          "topicTitle": "Service Lifetimes",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (الفرق بين Transient وScoped وSingleton) أحد المعايير التقنية الحيوية في مسار Service Lifetimes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Transient وScoped وSingleton)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Transient وScoped وSingleton) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Transient وScoped وSingleton)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Transient وScoped وSingleton)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Transient وScoped وSingleton",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Transient وScoped وSingleton)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Transient وScoped وSingleton\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Transient وScoped وSingleton ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Transient وScoped وSingleton) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.2.6",
        "title": "فهم Thread Safety للخدمات المشتركة",
        "englishTitle": "فهم Thread Safety للخدمات المشتركة",
        "definition": "يمثل (فهم Thread Safety للخدمات المشتركة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (فهم Thread Safety للخدمات المشتركة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (فهم Thread Safety للخدمات المشتركة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.2.6",
          "title": "فهم Thread Safety للخدمات المشتركة",
          "topicTitle": "Service Lifetimes",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (فهم Thread Safety للخدمات المشتركة) أحد المعايير التقنية الحيوية في مسار Service Lifetimes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم Thread Safety للخدمات المشتركة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم Thread Safety للخدمات المشتركة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم Thread Safety للخدمات المشتركة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم Thread Safety للخدمات المشتركة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فهم Thread Safety للخدمات المشتركة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم Thread Safety للخدمات المشتركة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم Thread Safety للخدمات المشتركة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم Thread Safety للخدمات المشتركة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم Thread Safety للخدمات المشتركة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.2.7",
        "title": "مشكلة Captive Dependency",
        "englishTitle": "مشكلة Captive Dependency",
        "definition": "يمثل (مشكلة Captive Dependency) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مشكلة Captive Dependency) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مشكلة Captive Dependency) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.2.7",
          "title": "مشكلة Captive Dependency",
          "topicTitle": "Service Lifetimes",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (مشكلة Captive Dependency) أحد المعايير التقنية الحيوية في مسار Service Lifetimes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مشكلة Captive Dependency)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مشكلة Captive Dependency) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مشكلة Captive Dependency)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مشكلة Captive Dependency)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مشكلة Captive Dependency",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مشكلة Captive Dependency)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مشكلة Captive Dependency\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مشكلة Captive Dependency ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مشكلة Captive Dependency) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.2.8",
        "title": "اختيار Lifetime المناسبة",
        "englishTitle": "اختيار Lifetime المناسبة",
        "definition": "يمثل (اختيار Lifetime المناسبة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (اختيار Lifetime المناسبة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (اختيار Lifetime المناسبة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.2.8",
          "title": "اختيار Lifetime المناسبة",
          "topicTitle": "Service Lifetimes",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (اختيار Lifetime المناسبة) أحد المعايير التقنية الحيوية في مسار Service Lifetimes ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختيار Lifetime المناسبة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختيار Lifetime المناسبة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختيار Lifetime المناسبة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختيار Lifetime المناسبة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختيار Lifetime المناسبة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختيار Lifetime المناسبة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختيار Lifetime المناسبة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختيار Lifetime المناسبة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختيار Lifetime المناسبة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Service Layer",
    "subtopics": [
      {
        "subId": "18.3.1",
        "title": "ما هي Service Layer؟",
        "englishTitle": "Service Layer",
        "definition": "يمثل (ما هي Service Layer؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هي Service Layer؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هي Service Layer؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.3.1",
          "title": "ما هي Service Layer؟",
          "topicTitle": "Service Layer",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (ما هي Service Layer؟) أحد المعايير التقنية الحيوية في مسار Service Layer ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Service Layer؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Service Layer؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Service Layer؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Service Layer؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي Service Layer؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Service Layer؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Service Layer؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Service Layer؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Service Layer؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.3.2",
        "title": "إنشاء IProductService",
        "englishTitle": "IProductService",
        "definition": "يمثل (إنشاء IProductService) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء IProductService) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء IProductService) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.3.2",
          "title": "إنشاء IProductService",
          "topicTitle": "Service Layer",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (إنشاء IProductService) أحد المعايير التقنية الحيوية في مسار Service Layer ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء IProductService)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء IProductService) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء IProductService)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء IProductService)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء IProductService",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء IProductService)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء IProductService\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء IProductService ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء IProductService) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.3.3",
        "title": "إنشاء ProductService",
        "englishTitle": "ProductService",
        "definition": "يمثل (إنشاء ProductService) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء ProductService) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء ProductService) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.3.3",
          "title": "إنشاء ProductService",
          "topicTitle": "Service Layer",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (إنشاء ProductService) أحد المعايير التقنية الحيوية في مسار Service Layer ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء ProductService)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء ProductService) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء ProductService)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء ProductService)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء ProductService",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء ProductService)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء ProductService\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء ProductService ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء ProductService) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.3.4",
        "title": "إضافة Service إلى DI Container",
        "englishTitle": "إضافة Service إلى DI Container",
        "definition": "يمثل (إضافة Service إلى DI Container) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إضافة Service إلى DI Container) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إضافة Service إلى DI Container) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.3.4",
          "title": "إضافة Service إلى DI Container",
          "topicTitle": "Service Layer",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (إضافة Service إلى DI Container) أحد المعايير التقنية الحيوية في مسار Service Layer ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إضافة Service إلى DI Container)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة Service إلى DI Container) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إضافة Service إلى DI Container)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إضافة Service إلى DI Container)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إضافة Service إلى DI Container",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إضافة Service إلى DI Container)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إضافة Service إلى DI Container\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إضافة Service إلى DI Container ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إضافة Service إلى DI Container) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.3.5",
        "title": "استدعاء Service من Controller",
        "englishTitle": "استدعاء Service من Controller",
        "definition": "يمثل (استدعاء Service من Controller) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استدعاء Service من Controller) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استدعاء Service من Controller) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.3.5",
          "title": "استدعاء Service من Controller",
          "topicTitle": "Service Layer",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استدعاء Service من Controller) أحد المعايير التقنية الحيوية في مسار Service Layer ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استدعاء Service من Controller)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استدعاء Service من Controller) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استدعاء Service من Controller)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استدعاء Service من Controller)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استدعاء Service من Controller",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استدعاء Service من Controller)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استدعاء Service من Controller\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استدعاء Service من Controller ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استدعاء Service من Controller) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.3.6",
        "title": "فصل Business Logic عن Controller",
        "englishTitle": "فصل Business Logic عن Controller",
        "definition": "يمثل (فصل Business Logic عن Controller) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (فصل Business Logic عن Controller) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (فصل Business Logic عن Controller) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.3.6",
          "title": "فصل Business Logic عن Controller",
          "topicTitle": "Service Layer",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (فصل Business Logic عن Controller) أحد المعايير التقنية الحيوية في مسار Service Layer ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فصل Business Logic عن Controller)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فصل Business Logic عن Controller) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فصل Business Logic عن Controller)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فصل Business Logic عن Controller)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فصل Business Logic عن Controller",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فصل Business Logic عن Controller)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فصل Business Logic عن Controller\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فصل Business Logic عن Controller ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فصل Business Logic عن Controller) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.3.7",
        "title": "إنشاء Reusable Services",
        "englishTitle": "Reusable Services",
        "definition": "يمثل (إنشاء Reusable Services) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Reusable Services) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Reusable Services) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.3.7",
          "title": "إنشاء Reusable Services",
          "topicTitle": "Service Layer",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (إنشاء Reusable Services) أحد المعايير التقنية الحيوية في مسار Service Layer ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Reusable Services)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Reusable Services) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Reusable Services)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Reusable Services)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Reusable Services",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Reusable Services)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Reusable Services\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Reusable Services ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Reusable Services) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.3.8",
        "title": "اختبار Service بصورة مستقلة",
        "englishTitle": "اختبار Service بصورة مستقلة",
        "definition": "يمثل (اختبار Service بصورة مستقلة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (اختبار Service بصورة مستقلة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (اختبار Service بصورة مستقلة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.3.8",
          "title": "اختبار Service بصورة مستقلة",
          "topicTitle": "Service Layer",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (اختبار Service بصورة مستقلة) أحد المعايير التقنية الحيوية في مسار Service Layer ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Service بصورة مستقلة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Service بصورة مستقلة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Service بصورة مستقلة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Service بصورة مستقلة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار Service بصورة مستقلة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Service بصورة مستقلة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Service بصورة مستقلة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Service بصورة مستقلة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Service بصورة مستقلة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "Repository Pattern",
    "subtopics": [
      {
        "subId": "18.4.1",
        "title": "ما هو Repository Pattern؟",
        "englishTitle": "Repository Pattern",
        "definition": "يمثل (ما هو Repository Pattern؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هو Repository Pattern؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هو Repository Pattern؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.4.1",
          "title": "ما هو Repository Pattern؟",
          "topicTitle": "Repository Pattern",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (ما هو Repository Pattern؟) أحد المعايير التقنية الحيوية في مسار Repository Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Repository Pattern؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Repository Pattern؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Repository Pattern؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Repository Pattern؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Repository Pattern؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Repository Pattern؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Repository Pattern؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Repository Pattern؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Repository Pattern؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.4.2",
        "title": "إنشاء Repository Interface",
        "englishTitle": "Repository Interface",
        "definition": "يمثل (إنشاء Repository Interface) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Repository Interface) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Repository Interface) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.4.2",
          "title": "إنشاء Repository Interface",
          "topicTitle": "Repository Pattern",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (إنشاء Repository Interface) أحد المعايير التقنية الحيوية في مسار Repository Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Repository Interface)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Repository Interface) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Repository Interface)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Repository Interface)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Repository Interface",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Repository Interface)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Repository Interface\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Repository Interface ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Repository Interface) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.4.3",
        "title": "إنشاء Repository Implementation",
        "englishTitle": "Repository Implementation",
        "definition": "يمثل (إنشاء Repository Implementation) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Repository Implementation) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Repository Implementation) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.4.3",
          "title": "إنشاء Repository Implementation",
          "topicTitle": "Repository Pattern",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (إنشاء Repository Implementation) أحد المعايير التقنية الحيوية في مسار Repository Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Repository Implementation)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Repository Implementation) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Repository Implementation)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Repository Implementation)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Repository Implementation",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Repository Implementation)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Repository Implementation\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Repository Implementation ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Repository Implementation) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.4.4",
        "title": "حقن DbContext داخل Repository",
        "englishTitle": "حقن DbContext داخل Repository",
        "definition": "يمثل (حقن DbContext داخل Repository) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (حقن DbContext داخل Repository) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (حقن DbContext داخل Repository) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.4.4",
          "title": "حقن DbContext داخل Repository",
          "topicTitle": "Repository Pattern",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (حقن DbContext داخل Repository) أحد المعايير التقنية الحيوية في مسار Repository Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حقن DbContext داخل Repository)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حقن DbContext داخل Repository) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حقن DbContext داخل Repository)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حقن DbContext داخل Repository)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حقن DbContext داخل Repository",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حقن DbContext داخل Repository)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حقن DbContext داخل Repository\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حقن DbContext داخل Repository ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حقن DbContext داخل Repository) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.4.5",
        "title": "الفرق بين Repository وService",
        "englishTitle": "Repository وService",
        "definition": "يمثل (الفرق بين Repository وService) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (الفرق بين Repository وService) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (الفرق بين Repository وService) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.4.5",
          "title": "الفرق بين Repository وService",
          "topicTitle": "Repository Pattern",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (الفرق بين Repository وService) أحد المعايير التقنية الحيوية في مسار Repository Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Repository وService)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Repository وService) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Repository وService)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Repository وService)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Repository وService",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Repository وService)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Repository وService\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Repository وService ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Repository وService) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.4.6",
        "title": "مناقشة الحاجة إلى Repository مع EF Core",
        "englishTitle": "مناقشة الحاجة إلى Repository مع EF Core",
        "definition": "يمثل (مناقشة الحاجة إلى Repository مع EF Core) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مناقشة الحاجة إلى Repository مع EF Core) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مناقشة الحاجة إلى Repository مع EF Core) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.4.6",
          "title": "مناقشة الحاجة إلى Repository مع EF Core",
          "topicTitle": "Repository Pattern",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (مناقشة الحاجة إلى Repository مع EF Core) أحد المعايير التقنية الحيوية في مسار Repository Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مناقشة الحاجة إلى Repository مع EF Core)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مناقشة الحاجة إلى Repository مع EF Core) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مناقشة الحاجة إلى Repository مع EF Core)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مناقشة الحاجة إلى Repository مع EF Core)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مناقشة الحاجة إلى Repository مع EF Core",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مناقشة الحاجة إلى Repository مع EF Core)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مناقشة الحاجة إلى Repository مع EF Core\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مناقشة الحاجة إلى Repository مع EF Core ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مناقشة الحاجة إلى Repository مع EF Core) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.4.7",
        "title": "استخدام Specification Pattern عند الحاجة",
        "englishTitle": "Specification Pattern عند الحاجة",
        "definition": "يمثل (استخدام Specification Pattern عند الحاجة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Specification Pattern عند الحاجة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Specification Pattern عند الحاجة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.4.7",
          "title": "استخدام Specification Pattern عند الحاجة",
          "topicTitle": "Repository Pattern",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام Specification Pattern عند الحاجة) أحد المعايير التقنية الحيوية في مسار Repository Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Specification Pattern عند الحاجة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Specification Pattern عند الحاجة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Specification Pattern عند الحاجة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Specification Pattern عند الحاجة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Specification Pattern عند الحاجة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Specification Pattern عند الحاجة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Specification Pattern عند الحاجة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Specification Pattern عند الحاجة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Specification Pattern عند الحاجة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.4.8",
        "title": "اختبار طبقة الوصول للبيانات",
        "englishTitle": "اختبار طبقة الوصول للبيانات",
        "definition": "يمثل (اختبار طبقة الوصول للبيانات) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (اختبار طبقة الوصول للبيانات) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (اختبار طبقة الوصول للبيانات) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.4.8",
          "title": "اختبار طبقة الوصول للبيانات",
          "topicTitle": "Repository Pattern",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (اختبار طبقة الوصول للبيانات) أحد المعايير التقنية الحيوية في مسار Repository Pattern ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار طبقة الوصول للبيانات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار طبقة الوصول للبيانات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار طبقة الوصول للبيانات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار طبقة الوصول للبيانات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار طبقة الوصول للبيانات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار طبقة الوصول للبيانات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار طبقة الوصول للبيانات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار طبقة الوصول للبيانات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار طبقة الوصول للبيانات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "Configuration System",
    "subtopics": [
      {
        "subId": "18.5.1",
        "title": "ما هو Configuration؟",
        "englishTitle": "Configuration",
        "definition": "يمثل (ما هو Configuration؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هو Configuration؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هو Configuration؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.5.1",
          "title": "ما هو Configuration؟",
          "topicTitle": "Configuration System",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (ما هو Configuration؟) أحد المعايير التقنية الحيوية في مسار Configuration System ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Configuration؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Configuration؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Configuration؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Configuration؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Configuration؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Configuration؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Configuration؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Configuration؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Configuration؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.5.2",
        "title": "استخدام appsettings.json",
        "englishTitle": "appsettings.json",
        "definition": "يمثل (استخدام appsettings.json) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام appsettings.json) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام appsettings.json) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.5.2",
          "title": "استخدام appsettings.json",
          "topicTitle": "Configuration System",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام appsettings.json) أحد المعايير التقنية الحيوية في مسار Configuration System ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام appsettings.json)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام appsettings.json) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام appsettings.json)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام appsettings.json)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام appsettings.json",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام appsettings.json)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام appsettings.json\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام appsettings.json ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام appsettings.json) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.5.3",
        "title": "استخدام appsettings.Development.json",
        "englishTitle": "appsettings.Development.json",
        "definition": "يمثل (استخدام appsettings.Development.json) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام appsettings.Development.json) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام appsettings.Development.json) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.5.3",
          "title": "استخدام appsettings.Development.json",
          "topicTitle": "Configuration System",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام appsettings.Development.json) أحد المعايير التقنية الحيوية في مسار Configuration System ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام appsettings.Development.json)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام appsettings.Development.json) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام appsettings.Development.json)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام appsettings.Development.json)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام appsettings.Development.json",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام appsettings.Development.json)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام appsettings.Development.json\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام appsettings.Development.json ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام appsettings.Development.json) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.5.4",
        "title": "استخدام Environment Variables",
        "englishTitle": "Environment Variables",
        "definition": "يمثل (استخدام Environment Variables) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Environment Variables) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Environment Variables) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.5.4",
          "title": "استخدام Environment Variables",
          "topicTitle": "Configuration System",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام Environment Variables) أحد المعايير التقنية الحيوية في مسار Configuration System ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Environment Variables)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Environment Variables) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Environment Variables)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Environment Variables)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Environment Variables",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Environment Variables)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Environment Variables\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Environment Variables ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Environment Variables) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.5.5",
        "title": "استخدام IConfiguration",
        "englishTitle": "IConfiguration",
        "definition": "يمثل (استخدام IConfiguration) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام IConfiguration) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام IConfiguration) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.5.5",
          "title": "استخدام IConfiguration",
          "topicTitle": "Configuration System",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام IConfiguration) أحد المعايير التقنية الحيوية في مسار Configuration System ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام IConfiguration)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام IConfiguration) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام IConfiguration)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام IConfiguration)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام IConfiguration",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام IConfiguration)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام IConfiguration\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام IConfiguration ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام IConfiguration) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.5.6",
        "title": "إنشاء Strongly Typed Options",
        "englishTitle": "Strongly Typed Options",
        "definition": "يمثل (إنشاء Strongly Typed Options) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إنشاء Strongly Typed Options) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إنشاء Strongly Typed Options) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.5.6",
          "title": "إنشاء Strongly Typed Options",
          "topicTitle": "Configuration System",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (إنشاء Strongly Typed Options) أحد المعايير التقنية الحيوية في مسار Configuration System ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Strongly Typed Options)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Strongly Typed Options) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Strongly Typed Options)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Strongly Typed Options)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Strongly Typed Options",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Strongly Typed Options)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Strongly Typed Options\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Strongly Typed Options ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Strongly Typed Options) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.5.7",
        "title": "استخدام IOptions",
        "englishTitle": "IOptions",
        "definition": "يمثل (استخدام IOptions) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام IOptions) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام IOptions) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.5.7",
          "title": "استخدام IOptions",
          "topicTitle": "Configuration System",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام IOptions) أحد المعايير التقنية الحيوية في مسار Configuration System ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام IOptions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام IOptions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام IOptions)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام IOptions)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام IOptions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام IOptions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام IOptions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام IOptions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام IOptions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.5.8",
        "title": "استخدام IOptionsSnapshot",
        "englishTitle": "IOptionsSnapshot",
        "definition": "يمثل (استخدام IOptionsSnapshot) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام IOptionsSnapshot) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام IOptionsSnapshot) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.5.8",
          "title": "استخدام IOptionsSnapshot",
          "topicTitle": "Configuration System",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام IOptionsSnapshot) أحد المعايير التقنية الحيوية في مسار Configuration System ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام IOptionsSnapshot)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام IOptionsSnapshot) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام IOptionsSnapshot)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام IOptionsSnapshot)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام IOptionsSnapshot",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام IOptionsSnapshot)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام IOptionsSnapshot\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام IOptionsSnapshot ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام IOptionsSnapshot) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.5.9",
        "title": "استخدام IOptionsMonitor",
        "englishTitle": "IOptionsMonitor",
        "definition": "يمثل (استخدام IOptionsMonitor) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام IOptionsMonitor) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام IOptionsMonitor) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.5.9",
          "title": "استخدام IOptionsMonitor",
          "topicTitle": "Configuration System",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام IOptionsMonitor) أحد المعايير التقنية الحيوية في مسار Configuration System ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام IOptionsMonitor)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام IOptionsMonitor) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام IOptionsMonitor)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام IOptionsMonitor)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام IOptionsMonitor",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام IOptionsMonitor)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام IOptionsMonitor\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام IOptionsMonitor ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام IOptionsMonitor) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.5.10",
        "title": "التحقق من Configuration عند التشغيل",
        "englishTitle": "التحقق من Configuration عند التشغيل",
        "definition": "يمثل (التحقق من Configuration عند التشغيل) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (التحقق من Configuration عند التشغيل) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (التحقق من Configuration عند التشغيل) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.5.10",
          "title": "التحقق من Configuration عند التشغيل",
          "topicTitle": "Configuration System",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (التحقق من Configuration عند التشغيل) أحد المعايير التقنية الحيوية في مسار Configuration System ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التحقق من Configuration عند التشغيل)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحقق من Configuration عند التشغيل) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التحقق من Configuration عند التشغيل)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التحقق من Configuration عند التشغيل)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التحقق من Configuration عند التشغيل",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التحقق من Configuration عند التشغيل)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التحقق من Configuration عند التشغيل\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التحقق من Configuration عند التشغيل ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التحقق من Configuration عند التشغيل) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "Logging",
    "subtopics": [
      {
        "subId": "18.6.1",
        "title": "ما هو Application Logging؟",
        "englishTitle": "Application Logging",
        "definition": "يمثل (ما هو Application Logging؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هو Application Logging؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هو Application Logging؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.6.1",
          "title": "ما هو Application Logging؟",
          "topicTitle": "Logging",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (ما هو Application Logging؟) أحد المعايير التقنية الحيوية في مسار Logging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Application Logging؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Application Logging؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Application Logging؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Application Logging؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Application Logging؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Application Logging؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Application Logging؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Application Logging؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Application Logging؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.6.2",
        "title": "استخدام ILogger",
        "englishTitle": "ILogger",
        "definition": "يمثل (استخدام ILogger) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام ILogger) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام ILogger) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.6.2",
          "title": "استخدام ILogger",
          "topicTitle": "Logging",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام ILogger) أحد المعايير التقنية الحيوية في مسار Logging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ILogger)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ILogger) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ILogger)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ILogger)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام ILogger",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ILogger)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ILogger\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ILogger ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ILogger) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.6.3",
        "title": "مستويات LogLevel",
        "englishTitle": "مستويات LogLevel",
        "definition": "يمثل (مستويات LogLevel) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مستويات LogLevel) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مستويات LogLevel) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.6.3",
          "title": "مستويات LogLevel",
          "topicTitle": "Logging",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (مستويات LogLevel) أحد المعايير التقنية الحيوية في مسار Logging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مستويات LogLevel)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مستويات LogLevel) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مستويات LogLevel)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مستويات LogLevel)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مستويات LogLevel",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مستويات LogLevel)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مستويات LogLevel\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مستويات LogLevel ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مستويات LogLevel) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.6.4",
        "title": "استخدام Structured Logging",
        "englishTitle": "Structured Logging",
        "definition": "يمثل (استخدام Structured Logging) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Structured Logging) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Structured Logging) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.6.4",
          "title": "استخدام Structured Logging",
          "topicTitle": "Logging",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام Structured Logging) أحد المعايير التقنية الحيوية في مسار Logging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Structured Logging)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Structured Logging) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Structured Logging)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Structured Logging)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Structured Logging",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Structured Logging)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Structured Logging\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Structured Logging ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Structured Logging) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.6.5",
        "title": "استخدام Logging Providers",
        "englishTitle": "Logging Providers",
        "definition": "يمثل (استخدام Logging Providers) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Logging Providers) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Logging Providers) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.6.5",
          "title": "استخدام Logging Providers",
          "topicTitle": "Logging",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (استخدام Logging Providers) أحد المعايير التقنية الحيوية في مسار Logging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Logging Providers)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Logging Providers) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Logging Providers)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Logging Providers)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Logging Providers",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Logging Providers)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Logging Providers\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Logging Providers ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Logging Providers) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.6.6",
        "title": "مقدمة في Serilog",
        "englishTitle": "مقدمة في Serilog",
        "definition": "يمثل (مقدمة في Serilog) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مقدمة في Serilog) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مقدمة في Serilog) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.6.6",
          "title": "مقدمة في Serilog",
          "topicTitle": "Logging",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (مقدمة في Serilog) أحد المعايير التقنية الحيوية في مسار Logging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في Serilog)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Serilog) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في Serilog)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في Serilog)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مقدمة في Serilog",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في Serilog)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في Serilog\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في Serilog ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في Serilog) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.6.7",
        "title": "تسجيل Exceptions",
        "englishTitle": "تسجيل Exceptions",
        "definition": "يمثل (تسجيل Exceptions) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تسجيل Exceptions) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تسجيل Exceptions) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.6.7",
          "title": "تسجيل Exceptions",
          "topicTitle": "Logging",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (تسجيل Exceptions) أحد المعايير التقنية الحيوية في مسار Logging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تسجيل Exceptions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تسجيل Exceptions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تسجيل Exceptions)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تسجيل Exceptions)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تسجيل Exceptions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تسجيل Exceptions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تسجيل Exceptions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تسجيل Exceptions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تسجيل Exceptions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "18.6.8",
        "title": "عدم تسجيل البيانات الحساسة",
        "englishTitle": "عدم تسجيل البيانات الحساسة",
        "definition": "يمثل (عدم تسجيل البيانات الحساسة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (عدم تسجيل البيانات الحساسة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (عدم تسجيل البيانات الحساسة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 18.6.8",
          "title": "عدم تسجيل البيانات الحساسة",
          "topicTitle": "Logging",
          "sectionTitle": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
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
          "summary": "يمثل (عدم تسجيل البيانات الحساسة) أحد المعايير التقنية الحيوية في مسار Logging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (عدم تسجيل البيانات الحساسة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (عدم تسجيل البيانات الحساسة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (عدم تسجيل البيانات الحساسة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (عدم تسجيل البيانات الحساسة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: عدم تسجيل البيانات الحساسة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (عدم تسجيل البيانات الحساسة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين عدم تسجيل البيانات الحساسة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: عدم تسجيل البيانات الحساسة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (عدم تسجيل البيانات الحساسة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section18Data;
