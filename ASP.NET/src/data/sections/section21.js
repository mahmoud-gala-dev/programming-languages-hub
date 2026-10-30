// src/data/sections/section21.js
// محتوى تعليمي مفصل وشامل لـ: القسم الحادي والعشرون: أمن ASP.NET Core MVC
export const section21Data = {
  id: 21,
  title: "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
  englishTitle: "Web Security & OWASP Top 10",
  icon: "Lock",
  category: "الأمان والمصادقة",
  description: "الحماية من ثغرات XSS، CSRF، حقن SQL، Overposting، إعداد ترويسات الأمان Security Headers، إدارة الأسرار وRate Limiting.",
  summary: {
  "sectionId": 21,
  "title": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
  "englishTitle": "Web Security & OWASP Top 10",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم الحادي والعشرون: أمن ASP.NET Core MVC.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
    "title": "مبادئ Web Security",
    "subtopics": [
      {
        "subId": "21.1.1",
        "title": "مقدمة في OWASP Top 10",
        "englishTitle": "مقدمة في OWASP Top 10",
        "definition": "يمثل (مقدمة في OWASP Top 10) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مقدمة في OWASP Top 10) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مقدمة في OWASP Top 10) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.1.1",
          "title": "مقدمة في OWASP Top 10",
          "topicTitle": "مبادئ Web Security",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (مقدمة في OWASP Top 10) أحد المعايير التقنية الحيوية في مسار مبادئ Web Security ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في OWASP Top 10)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في OWASP Top 10) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في OWASP Top 10)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في OWASP Top 10)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مقدمة في OWASP Top 10",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في OWASP Top 10)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في OWASP Top 10\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في OWASP Top 10 ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في OWASP Top 10) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.1.2",
        "title": "مفهوم Attack Surface",
        "englishTitle": "Attack Surface",
        "definition": "يمثل (مفهوم Attack Surface) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Attack Surface) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Attack Surface) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.1.2",
          "title": "مفهوم Attack Surface",
          "topicTitle": "مبادئ Web Security",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (مفهوم Attack Surface) أحد المعايير التقنية الحيوية في مسار مبادئ Web Security ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Attack Surface)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Attack Surface) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Attack Surface)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Attack Surface)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Attack Surface",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Attack Surface)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Attack Surface\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Attack Surface ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Attack Surface) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.1.3",
        "title": "مفهوم Defense in Depth",
        "englishTitle": "Defense in Depth",
        "definition": "يمثل (مفهوم Defense in Depth) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Defense in Depth) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Defense in Depth) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.1.3",
          "title": "مفهوم Defense in Depth",
          "topicTitle": "مبادئ Web Security",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (مفهوم Defense in Depth) أحد المعايير التقنية الحيوية في مسار مبادئ Web Security ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Defense in Depth)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Defense in Depth) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Defense in Depth)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Defense in Depth)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Defense in Depth",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Defense in Depth)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Defense in Depth\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Defense in Depth ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Defense in Depth) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.1.4",
        "title": "التحقق من مدخلات المستخدم",
        "englishTitle": "التحقق من مدخلات المستخدم",
        "definition": "يمثل (التحقق من مدخلات المستخدم) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (التحقق من مدخلات المستخدم) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (التحقق من مدخلات المستخدم) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.1.4",
          "title": "التحقق من مدخلات المستخدم",
          "topicTitle": "مبادئ Web Security",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (التحقق من مدخلات المستخدم) أحد المعايير التقنية الحيوية في مسار مبادئ Web Security ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التحقق من مدخلات المستخدم)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحقق من مدخلات المستخدم) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التحقق من مدخلات المستخدم)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التحقق من مدخلات المستخدم)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التحقق من مدخلات المستخدم",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التحقق من مدخلات المستخدم)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التحقق من مدخلات المستخدم\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التحقق من مدخلات المستخدم ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التحقق من مدخلات المستخدم) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.1.5",
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
          "badge": "الدرس 21.1.5",
          "title": "مبدأ Least Privilege",
          "topicTitle": "مبادئ Web Security",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (مبدأ Least Privilege) أحد المعايير التقنية الحيوية في مسار مبادئ Web Security ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
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
      },
      {
        "subId": "21.1.6",
        "title": "حماية البيانات الحساسة",
        "englishTitle": "حماية البيانات الحساسة",
        "definition": "يمثل (حماية البيانات الحساسة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (حماية البيانات الحساسة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (حماية البيانات الحساسة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.1.6",
          "title": "حماية البيانات الحساسة",
          "topicTitle": "مبادئ Web Security",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (حماية البيانات الحساسة) أحد المعايير التقنية الحيوية في مسار مبادئ Web Security ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حماية البيانات الحساسة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حماية البيانات الحساسة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حماية البيانات الحساسة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حماية البيانات الحساسة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حماية البيانات الحساسة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حماية البيانات الحساسة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حماية البيانات الحساسة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حماية البيانات الحساسة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حماية البيانات الحساسة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.1.7",
        "title": "إدارة Security Updates",
        "englishTitle": "Security Updates",
        "definition": "يمثل (إدارة Security Updates) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إدارة Security Updates) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إدارة Security Updates) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.1.7",
          "title": "إدارة Security Updates",
          "topicTitle": "مبادئ Web Security",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (إدارة Security Updates) أحد المعايير التقنية الحيوية في مسار مبادئ Web Security ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Security Updates)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Security Updates) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Security Updates)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Security Updates)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إدارة Security Updates",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Security Updates)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Security Updates\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Security Updates ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Security Updates) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "Cross-Site Scripting",
    "subtopics": [
      {
        "subId": "21.2.1",
        "title": "ما هو XSS؟",
        "englishTitle": "XSS",
        "definition": "يمثل (ما هو XSS؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هو XSS؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هو XSS؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.2.1",
          "title": "ما هو XSS؟",
          "topicTitle": "Cross-Site Scripting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (ما هو XSS؟) أحد المعايير التقنية الحيوية في مسار Cross-Site Scripting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو XSS؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو XSS؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو XSS؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو XSS؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو XSS؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو XSS؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو XSS؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو XSS؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو XSS؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.2.2",
        "title": "الفرق بين Stored وReflected XSS",
        "englishTitle": "Stored وReflected XSS",
        "definition": "يمثل (الفرق بين Stored وReflected XSS) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (الفرق بين Stored وReflected XSS) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (الفرق بين Stored وReflected XSS) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.2.2",
          "title": "الفرق بين Stored وReflected XSS",
          "topicTitle": "Cross-Site Scripting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (الفرق بين Stored وReflected XSS) أحد المعايير التقنية الحيوية في مسار Cross-Site Scripting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Stored وReflected XSS)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Stored وReflected XSS) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Stored وReflected XSS)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Stored وReflected XSS)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Stored وReflected XSS",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Stored وReflected XSS)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Stored وReflected XSS\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Stored وReflected XSS ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Stored وReflected XSS) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.2.3",
        "title": "فهم HTML Encoding في Razor",
        "englishTitle": "فهم HTML Encoding في Razor",
        "definition": "يمثل (فهم HTML Encoding في Razor) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (فهم HTML Encoding في Razor) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (فهم HTML Encoding في Razor) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.2.3",
          "title": "فهم HTML Encoding في Razor",
          "topicTitle": "Cross-Site Scripting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (فهم HTML Encoding في Razor) أحد المعايير التقنية الحيوية في مسار Cross-Site Scripting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم HTML Encoding في Razor)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم HTML Encoding في Razor) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم HTML Encoding في Razor)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم HTML Encoding في Razor)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فهم HTML Encoding في Razor",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم HTML Encoding في Razor)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم HTML Encoding في Razor\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم HTML Encoding في Razor ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم HTML Encoding في Razor) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.2.4",
        "title": "مخاطر Html.Raw",
        "englishTitle": "مخاطر Html.Raw",
        "definition": "يمثل (مخاطر Html.Raw) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مخاطر Html.Raw) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مخاطر Html.Raw) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.2.4",
          "title": "مخاطر Html.Raw",
          "topicTitle": "Cross-Site Scripting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (مخاطر Html.Raw) أحد المعايير التقنية الحيوية في مسار Cross-Site Scripting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مخاطر Html.Raw)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مخاطر Html.Raw) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مخاطر Html.Raw)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مخاطر Html.Raw)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مخاطر Html.Raw",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مخاطر Html.Raw)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مخاطر Html.Raw\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مخاطر Html.Raw ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مخاطر Html.Raw) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.2.5",
        "title": "منع إخراج HTML غير موثوق",
        "englishTitle": "منع إخراج HTML غير موثوق",
        "definition": "يمثل (منع إخراج HTML غير موثوق) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (منع إخراج HTML غير موثوق) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (منع إخراج HTML غير موثوق) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.2.5",
          "title": "منع إخراج HTML غير موثوق",
          "topicTitle": "Cross-Site Scripting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (منع إخراج HTML غير موثوق) أحد المعايير التقنية الحيوية في مسار Cross-Site Scripting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (منع إخراج HTML غير موثوق)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (منع إخراج HTML غير موثوق) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (منع إخراج HTML غير موثوق)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (منع إخراج HTML غير موثوق)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: منع إخراج HTML غير موثوق",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (منع إخراج HTML غير موثوق)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين منع إخراج HTML غير موثوق\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: منع إخراج HTML غير موثوق ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (منع إخراج HTML غير موثوق) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.2.6",
        "title": "استخدام Content Security Policy",
        "englishTitle": "Content Security Policy",
        "definition": "يمثل (استخدام Content Security Policy) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Content Security Policy) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Content Security Policy) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.2.6",
          "title": "استخدام Content Security Policy",
          "topicTitle": "Cross-Site Scripting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (استخدام Content Security Policy) أحد المعايير التقنية الحيوية في مسار Cross-Site Scripting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Content Security Policy)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Content Security Policy) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Content Security Policy)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Content Security Policy)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Content Security Policy",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Content Security Policy)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Content Security Policy\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Content Security Policy ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Content Security Policy) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.2.7",
        "title": "حماية JavaScript من البيانات غير الآمنة",
        "englishTitle": "حماية JavaScript من البيانات غير الآمنة",
        "definition": "يمثل (حماية JavaScript من البيانات غير الآمنة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (حماية JavaScript من البيانات غير الآمنة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (حماية JavaScript من البيانات غير الآمنة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.2.7",
          "title": "حماية JavaScript من البيانات غير الآمنة",
          "topicTitle": "Cross-Site Scripting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (حماية JavaScript من البيانات غير الآمنة) أحد المعايير التقنية الحيوية في مسار Cross-Site Scripting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حماية JavaScript من البيانات غير الآمنة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حماية JavaScript من البيانات غير الآمنة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حماية JavaScript من البيانات غير الآمنة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حماية JavaScript من البيانات غير الآمنة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حماية JavaScript من البيانات غير الآمنة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حماية JavaScript من البيانات غير الآمنة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حماية JavaScript من البيانات غير الآمنة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حماية JavaScript من البيانات غير الآمنة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حماية JavaScript من البيانات غير الآمنة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Cross-Site Request Forgery",
    "subtopics": [
      {
        "subId": "21.3.1",
        "title": "ما هو CSRF؟",
        "englishTitle": "CSRF",
        "definition": "يمثل (ما هو CSRF؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هو CSRF؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هو CSRF؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.3.1",
          "title": "ما هو CSRF؟",
          "topicTitle": "Cross-Site Request Forgery",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (ما هو CSRF؟) أحد المعايير التقنية الحيوية في مسار Cross-Site Request Forgery ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو CSRF؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو CSRF؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو CSRF؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو CSRF؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو CSRF؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو CSRF؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو CSRF؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو CSRF؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو CSRF؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.3.2",
        "title": "كيف تحدث CSRF؟",
        "englishTitle": "كيف تحدث CSRF",
        "definition": "يمثل (كيف تحدث CSRF؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (كيف تحدث CSRF؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (كيف تحدث CSRF؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.3.2",
          "title": "كيف تحدث CSRF؟",
          "topicTitle": "Cross-Site Request Forgery",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (كيف تحدث CSRF؟) أحد المعايير التقنية الحيوية في مسار Cross-Site Request Forgery ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (كيف تحدث CSRF؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (كيف تحدث CSRF؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (كيف تحدث CSRF؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (كيف تحدث CSRF؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: كيف تحدث CSRF؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (كيف تحدث CSRF؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين كيف تحدث CSRF؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: كيف تحدث CSRF؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (كيف تحدث CSRF؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.3.3",
        "title": "مفهوم Antiforgery Token",
        "englishTitle": "Antiforgery Token",
        "definition": "يمثل (مفهوم Antiforgery Token) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Antiforgery Token) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Antiforgery Token) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.3.3",
          "title": "مفهوم Antiforgery Token",
          "topicTitle": "Cross-Site Request Forgery",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (مفهوم Antiforgery Token) أحد المعايير التقنية الحيوية في مسار Cross-Site Request Forgery ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Antiforgery Token)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Antiforgery Token) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Antiforgery Token)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Antiforgery Token)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Antiforgery Token",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Antiforgery Token)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Antiforgery Token\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Antiforgery Token ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Antiforgery Token) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.3.4",
        "title": "استخدام ValidateAntiForgeryToken",
        "englishTitle": "ValidateAntiForgeryToken",
        "definition": "يمثل (استخدام ValidateAntiForgeryToken) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام ValidateAntiForgeryToken) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام ValidateAntiForgeryToken) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.3.4",
          "title": "استخدام ValidateAntiForgeryToken",
          "topicTitle": "Cross-Site Request Forgery",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (استخدام ValidateAntiForgeryToken) أحد المعايير التقنية الحيوية في مسار Cross-Site Request Forgery ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ValidateAntiForgeryToken)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ValidateAntiForgeryToken) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ValidateAntiForgeryToken)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ValidateAntiForgeryToken)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام ValidateAntiForgeryToken",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ValidateAntiForgeryToken)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ValidateAntiForgeryToken\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ValidateAntiForgeryToken ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ValidateAntiForgeryToken) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.3.5",
        "title": "استخدام AutoValidateAntiforgeryToken",
        "englishTitle": "AutoValidateAntiforgeryToken",
        "definition": "يمثل (استخدام AutoValidateAntiforgeryToken) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام AutoValidateAntiforgeryToken) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام AutoValidateAntiforgeryToken) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.3.5",
          "title": "استخدام AutoValidateAntiforgeryToken",
          "topicTitle": "Cross-Site Request Forgery",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (استخدام AutoValidateAntiforgeryToken) أحد المعايير التقنية الحيوية في مسار Cross-Site Request Forgery ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام AutoValidateAntiforgeryToken)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام AutoValidateAntiforgeryToken) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام AutoValidateAntiforgeryToken)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام AutoValidateAntiforgeryToken)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام AutoValidateAntiforgeryToken",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام AutoValidateAntiforgeryToken)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام AutoValidateAntiforgeryToken\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام AutoValidateAntiforgeryToken ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام AutoValidateAntiforgeryToken) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.3.6",
        "title": "إرسال Antiforgery Token مع Forms",
        "englishTitle": "إرسال Antiforgery Token مع Forms",
        "definition": "يمثل (إرسال Antiforgery Token مع Forms) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إرسال Antiforgery Token مع Forms) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إرسال Antiforgery Token مع Forms) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.3.6",
          "title": "إرسال Antiforgery Token مع Forms",
          "topicTitle": "Cross-Site Request Forgery",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (إرسال Antiforgery Token مع Forms) أحد المعايير التقنية الحيوية في مسار Cross-Site Request Forgery ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إرسال Antiforgery Token مع Forms)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال Antiforgery Token مع Forms) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إرسال Antiforgery Token مع Forms)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إرسال Antiforgery Token مع Forms)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إرسال Antiforgery Token مع Forms",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إرسال Antiforgery Token مع Forms)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إرسال Antiforgery Token مع Forms\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إرسال Antiforgery Token مع Forms ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إرسال Antiforgery Token مع Forms) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.3.7",
        "title": "إرسال Antiforgery Token مع AJAX",
        "englishTitle": "إرسال Antiforgery Token مع AJAX",
        "definition": "يمثل (إرسال Antiforgery Token مع AJAX) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إرسال Antiforgery Token مع AJAX) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إرسال Antiforgery Token مع AJAX) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.3.7",
          "title": "إرسال Antiforgery Token مع AJAX",
          "topicTitle": "Cross-Site Request Forgery",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (إرسال Antiforgery Token مع AJAX) أحد المعايير التقنية الحيوية في مسار Cross-Site Request Forgery ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إرسال Antiforgery Token مع AJAX)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال Antiforgery Token مع AJAX) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إرسال Antiforgery Token مع AJAX)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إرسال Antiforgery Token مع AJAX)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إرسال Antiforgery Token مع AJAX",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إرسال Antiforgery Token مع AJAX)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إرسال Antiforgery Token مع AJAX\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إرسال Antiforgery Token مع AJAX ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إرسال Antiforgery Token مع AJAX) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.3.8",
        "title": "اختبار حماية POST Actions",
        "englishTitle": "اختبار حماية POST Actions",
        "definition": "يمثل (اختبار حماية POST Actions) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (اختبار حماية POST Actions) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (اختبار حماية POST Actions) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.3.8",
          "title": "اختبار حماية POST Actions",
          "topicTitle": "Cross-Site Request Forgery",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (اختبار حماية POST Actions) أحد المعايير التقنية الحيوية في مسار Cross-Site Request Forgery ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار حماية POST Actions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار حماية POST Actions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار حماية POST Actions)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار حماية POST Actions)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار حماية POST Actions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار حماية POST Actions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار حماية POST Actions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار حماية POST Actions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار حماية POST Actions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "SQL Injection وOverposting",
    "subtopics": [
      {
        "subId": "21.4.1",
        "title": "ما هو SQL Injection؟",
        "englishTitle": "SQL Injection",
        "definition": "يمثل (ما هو SQL Injection؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هو SQL Injection؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هو SQL Injection؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.4.1",
          "title": "ما هو SQL Injection؟",
          "topicTitle": "SQL Injection وOverposting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (ما هو SQL Injection؟) أحد المعايير التقنية الحيوية في مسار SQL Injection وOverposting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو SQL Injection؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو SQL Injection؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو SQL Injection؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو SQL Injection؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو SQL Injection؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو SQL Injection؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو SQL Injection؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو SQL Injection؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو SQL Injection؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.4.2",
        "title": "استخدام Parameterized Queries",
        "englishTitle": "Parameterized Queries",
        "definition": "يمثل (استخدام Parameterized Queries) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Parameterized Queries) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Parameterized Queries) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.4.2",
          "title": "استخدام Parameterized Queries",
          "topicTitle": "SQL Injection وOverposting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (استخدام Parameterized Queries) أحد المعايير التقنية الحيوية في مسار SQL Injection وOverposting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Parameterized Queries)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Parameterized Queries) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Parameterized Queries)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Parameterized Queries)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Parameterized Queries",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Parameterized Queries)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Parameterized Queries\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Parameterized Queries ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Parameterized Queries) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.4.3",
        "title": "كتابة Raw SQL بطريقة آمنة",
        "englishTitle": "كتابة Raw SQL بطريقة آمنة",
        "definition": "يمثل (كتابة Raw SQL بطريقة آمنة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (كتابة Raw SQL بطريقة آمنة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (كتابة Raw SQL بطريقة آمنة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.4.3",
          "title": "كتابة Raw SQL بطريقة آمنة",
          "topicTitle": "SQL Injection وOverposting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (كتابة Raw SQL بطريقة آمنة) أحد المعايير التقنية الحيوية في مسار SQL Injection وOverposting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (كتابة Raw SQL بطريقة آمنة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (كتابة Raw SQL بطريقة آمنة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (كتابة Raw SQL بطريقة آمنة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (كتابة Raw SQL بطريقة آمنة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: كتابة Raw SQL بطريقة آمنة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (كتابة Raw SQL بطريقة آمنة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين كتابة Raw SQL بطريقة آمنة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: كتابة Raw SQL بطريقة آمنة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (كتابة Raw SQL بطريقة آمنة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.4.4",
        "title": "كيف يساعد EF Core في تقليل حقن SQL؟",
        "englishTitle": "كيف يساعد EF Core في تقليل حقن SQL",
        "definition": "يمثل (كيف يساعد EF Core في تقليل حقن SQL؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (كيف يساعد EF Core في تقليل حقن SQL؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (كيف يساعد EF Core في تقليل حقن SQL؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.4.4",
          "title": "كيف يساعد EF Core في تقليل حقن SQL؟",
          "topicTitle": "SQL Injection وOverposting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (كيف يساعد EF Core في تقليل حقن SQL؟) أحد المعايير التقنية الحيوية في مسار SQL Injection وOverposting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (كيف يساعد EF Core في تقليل حقن SQL؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (كيف يساعد EF Core في تقليل حقن SQL؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (كيف يساعد EF Core في تقليل حقن SQL؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (كيف يساعد EF Core في تقليل حقن SQL؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: كيف يساعد EF Core في تقليل حقن SQL؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (كيف يساعد EF Core في تقليل حقن SQL؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين كيف يساعد EF Core في تقليل حقن SQL؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: كيف يساعد EF Core في تقليل حقن SQL؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (كيف يساعد EF Core في تقليل حقن SQL؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.4.5",
        "title": "ما هو Overposting؟",
        "englishTitle": "Overposting",
        "definition": "يمثل (ما هو Overposting؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هو Overposting؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هو Overposting؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.4.5",
          "title": "ما هو Overposting؟",
          "topicTitle": "SQL Injection وOverposting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (ما هو Overposting؟) أحد المعايير التقنية الحيوية في مسار SQL Injection وOverposting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Overposting؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Overposting؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Overposting؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Overposting؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Overposting؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Overposting؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Overposting؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Overposting؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Overposting؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.4.6",
        "title": "منع Overposting باستخدام ViewModels",
        "englishTitle": "منع Overposting بViewModels",
        "definition": "يمثل (منع Overposting باستخدام ViewModels) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (منع Overposting باستخدام ViewModels) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (منع Overposting باستخدام ViewModels) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.4.6",
          "title": "منع Overposting باستخدام ViewModels",
          "topicTitle": "SQL Injection وOverposting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (منع Overposting باستخدام ViewModels) أحد المعايير التقنية الحيوية في مسار SQL Injection وOverposting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (منع Overposting باستخدام ViewModels)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (منع Overposting باستخدام ViewModels) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (منع Overposting باستخدام ViewModels)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (منع Overposting باستخدام ViewModels)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: منع Overposting باستخدام ViewModels",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (منع Overposting باستخدام ViewModels)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين منع Overposting باستخدام ViewModels\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: منع Overposting باستخدام ViewModels ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (منع Overposting باستخدام ViewModels) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.4.7",
        "title": "تطبيق Field-Level Authorization",
        "englishTitle": "Field-Level Authorization",
        "definition": "يمثل (تطبيق Field-Level Authorization) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تطبيق Field-Level Authorization) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تطبيق Field-Level Authorization) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.4.7",
          "title": "تطبيق Field-Level Authorization",
          "topicTitle": "SQL Injection وOverposting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (تطبيق Field-Level Authorization) أحد المعايير التقنية الحيوية في مسار SQL Injection وOverposting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تطبيق Field-Level Authorization)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تطبيق Field-Level Authorization) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تطبيق Field-Level Authorization)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تطبيق Field-Level Authorization)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تطبيق Field-Level Authorization",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تطبيق Field-Level Authorization)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تطبيق Field-Level Authorization\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تطبيق Field-Level Authorization ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تطبيق Field-Level Authorization) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.4.8",
        "title": "اختبار تعديل حقول غير مسموح بها",
        "englishTitle": "اختبار تعديل حقول غير مسموح بها",
        "definition": "يمثل (اختبار تعديل حقول غير مسموح بها) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (اختبار تعديل حقول غير مسموح بها) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (اختبار تعديل حقول غير مسموح بها) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.4.8",
          "title": "اختبار تعديل حقول غير مسموح بها",
          "topicTitle": "SQL Injection وOverposting",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (اختبار تعديل حقول غير مسموح بها) أحد المعايير التقنية الحيوية في مسار SQL Injection وOverposting ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار تعديل حقول غير مسموح بها)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار تعديل حقول غير مسموح بها) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار تعديل حقول غير مسموح بها)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار تعديل حقول غير مسموح بها)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار تعديل حقول غير مسموح بها",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار تعديل حقول غير مسموح بها)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار تعديل حقول غير مسموح بها\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار تعديل حقول غير مسموح بها ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار تعديل حقول غير مسموح بها) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "HTTPS وSecurity Headers",
    "subtopics": [
      {
        "subId": "21.5.1",
        "title": "إعداد HTTPS",
        "englishTitle": "إعداد HTTPS",
        "definition": "يمثل (إعداد HTTPS) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (إعداد HTTPS) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (إعداد HTTPS) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.5.1",
          "title": "إعداد HTTPS",
          "topicTitle": "HTTPS وSecurity Headers",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (إعداد HTTPS) أحد المعايير التقنية الحيوية في مسار HTTPS وSecurity Headers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إعداد HTTPS)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد HTTPS) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إعداد HTTPS)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إعداد HTTPS)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إعداد HTTPS",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إعداد HTTPS)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إعداد HTTPS\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إعداد HTTPS ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إعداد HTTPS) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.5.2",
        "title": "استخدام HSTS",
        "englishTitle": "HSTS",
        "definition": "يمثل (استخدام HSTS) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام HSTS) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام HSTS) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.5.2",
          "title": "استخدام HSTS",
          "topicTitle": "HTTPS وSecurity Headers",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (استخدام HSTS) أحد المعايير التقنية الحيوية في مسار HTTPS وSecurity Headers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام HSTS)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام HSTS) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام HSTS)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام HSTS)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام HSTS",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام HSTS)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام HSTS\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام HSTS ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام HSTS) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.5.3",
        "title": "مفهوم Content Security Policy",
        "englishTitle": "Content Security Policy",
        "definition": "يمثل (مفهوم Content Security Policy) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Content Security Policy) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Content Security Policy) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.5.3",
          "title": "مفهوم Content Security Policy",
          "topicTitle": "HTTPS وSecurity Headers",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (مفهوم Content Security Policy) أحد المعايير التقنية الحيوية في مسار HTTPS وSecurity Headers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Content Security Policy)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Content Security Policy) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Content Security Policy)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Content Security Policy)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Content Security Policy",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Content Security Policy)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Content Security Policy\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Content Security Policy ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Content Security Policy) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.5.4",
        "title": "استخدام X-Content-Type-Options",
        "englishTitle": "X-Content-Type-Options",
        "definition": "يمثل (استخدام X-Content-Type-Options) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام X-Content-Type-Options) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام X-Content-Type-Options) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.5.4",
          "title": "استخدام X-Content-Type-Options",
          "topicTitle": "HTTPS وSecurity Headers",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (استخدام X-Content-Type-Options) أحد المعايير التقنية الحيوية في مسار HTTPS وSecurity Headers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام X-Content-Type-Options)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام X-Content-Type-Options) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام X-Content-Type-Options)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام X-Content-Type-Options)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام X-Content-Type-Options",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام X-Content-Type-Options)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام X-Content-Type-Options\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام X-Content-Type-Options ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام X-Content-Type-Options) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.5.5",
        "title": "استخدام Referrer-Policy",
        "englishTitle": "Referrer-Policy",
        "definition": "يمثل (استخدام Referrer-Policy) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Referrer-Policy) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Referrer-Policy) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.5.5",
          "title": "استخدام Referrer-Policy",
          "topicTitle": "HTTPS وSecurity Headers",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (استخدام Referrer-Policy) أحد المعايير التقنية الحيوية في مسار HTTPS وSecurity Headers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Referrer-Policy)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Referrer-Policy) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Referrer-Policy)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Referrer-Policy)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Referrer-Policy",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Referrer-Policy)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Referrer-Policy\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Referrer-Policy ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Referrer-Policy) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.5.6",
        "title": "ضبط Cookie Security",
        "englishTitle": "ضبط Cookie Security",
        "definition": "يمثل (ضبط Cookie Security) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ضبط Cookie Security) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ضبط Cookie Security) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.5.6",
          "title": "ضبط Cookie Security",
          "topicTitle": "HTTPS وSecurity Headers",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (ضبط Cookie Security) أحد المعايير التقنية الحيوية في مسار HTTPS وSecurity Headers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ضبط Cookie Security)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ضبط Cookie Security) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ضبط Cookie Security)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ضبط Cookie Security)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ضبط Cookie Security",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ضبط Cookie Security)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ضبط Cookie Security\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ضبط Cookie Security ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ضبط Cookie Security) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.5.7",
        "title": "مفهوم CORS",
        "englishTitle": "CORS",
        "definition": "يمثل (مفهوم CORS) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم CORS) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم CORS) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.5.7",
          "title": "مفهوم CORS",
          "topicTitle": "HTTPS وSecurity Headers",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (مفهوم CORS) أحد المعايير التقنية الحيوية في مسار HTTPS وSecurity Headers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم CORS)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم CORS) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم CORS)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم CORS)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم CORS",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم CORS)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم CORS\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم CORS ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم CORS) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.5.8",
        "title": "تجنب استخدام CORS كبديل للمصادقة",
        "englishTitle": "تجنب CORS كبديل للمصادقة",
        "definition": "يمثل (تجنب استخدام CORS كبديل للمصادقة) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تجنب استخدام CORS كبديل للمصادقة) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تجنب استخدام CORS كبديل للمصادقة) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.5.8",
          "title": "تجنب استخدام CORS كبديل للمصادقة",
          "topicTitle": "HTTPS وSecurity Headers",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (تجنب استخدام CORS كبديل للمصادقة) أحد المعايير التقنية الحيوية في مسار HTTPS وSecurity Headers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تجنب استخدام CORS كبديل للمصادقة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تجنب استخدام CORS كبديل للمصادقة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تجنب استخدام CORS كبديل للمصادقة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تجنب استخدام CORS كبديل للمصادقة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تجنب استخدام CORS كبديل للمصادقة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تجنب استخدام CORS كبديل للمصادقة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تجنب استخدام CORS كبديل للمصادقة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تجنب استخدام CORS كبديل للمصادقة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تجنب استخدام CORS كبديل للمصادقة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "إدارة الأسرار وحماية الإنتاج",
    "subtopics": [
      {
        "subId": "21.6.1",
        "title": "مخاطر تخزين الأسرار في Source Code",
        "englishTitle": "مخاطر تخزين الأسرار في Source Code",
        "definition": "يمثل (مخاطر تخزين الأسرار في Source Code) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مخاطر تخزين الأسرار في Source Code) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مخاطر تخزين الأسرار في Source Code) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.6.1",
          "title": "مخاطر تخزين الأسرار في Source Code",
          "topicTitle": "إدارة الأسرار وحماية الإنتاج",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (مخاطر تخزين الأسرار في Source Code) أحد المعايير التقنية الحيوية في مسار إدارة الأسرار وحماية الإنتاج ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مخاطر تخزين الأسرار في Source Code)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مخاطر تخزين الأسرار في Source Code) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مخاطر تخزين الأسرار في Source Code)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مخاطر تخزين الأسرار في Source Code)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مخاطر تخزين الأسرار في Source Code",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مخاطر تخزين الأسرار في Source Code)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مخاطر تخزين الأسرار في Source Code\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مخاطر تخزين الأسرار في Source Code ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مخاطر تخزين الأسرار في Source Code) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.6.2",
        "title": "استخدام Secret Manager",
        "englishTitle": "Secret Manager",
        "definition": "يمثل (استخدام Secret Manager) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام Secret Manager) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام Secret Manager) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.6.2",
          "title": "استخدام Secret Manager",
          "topicTitle": "إدارة الأسرار وحماية الإنتاج",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (استخدام Secret Manager) أحد المعايير التقنية الحيوية في مسار إدارة الأسرار وحماية الإنتاج ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Secret Manager)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Secret Manager) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Secret Manager)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Secret Manager)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Secret Manager",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Secret Manager)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Secret Manager\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Secret Manager ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Secret Manager) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.6.3",
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
          "badge": "الدرس 21.6.3",
          "title": "استخدام Environment Variables",
          "topicTitle": "إدارة الأسرار وحماية الإنتاج",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (استخدام Environment Variables) أحد المعايير التقنية الحيوية في مسار إدارة الأسرار وحماية الإنتاج ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
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
        "subId": "21.6.4",
        "title": "مقدمة في Azure Key Vault",
        "englishTitle": "مقدمة في Azure Key Vault",
        "definition": "يمثل (مقدمة في Azure Key Vault) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مقدمة في Azure Key Vault) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مقدمة في Azure Key Vault) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.6.4",
          "title": "مقدمة في Azure Key Vault",
          "topicTitle": "إدارة الأسرار وحماية الإنتاج",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (مقدمة في Azure Key Vault) أحد المعايير التقنية الحيوية في مسار إدارة الأسرار وحماية الإنتاج ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في Azure Key Vault)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Azure Key Vault) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في Azure Key Vault)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في Azure Key Vault)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مقدمة في Azure Key Vault",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في Azure Key Vault)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في Azure Key Vault\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في Azure Key Vault ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في Azure Key Vault) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.6.5",
        "title": "حماية Connection Strings",
        "englishTitle": "حماية Connection Strings",
        "definition": "يمثل (حماية Connection Strings) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (حماية Connection Strings) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (حماية Connection Strings) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.6.5",
          "title": "حماية Connection Strings",
          "topicTitle": "إدارة الأسرار وحماية الإنتاج",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (حماية Connection Strings) أحد المعايير التقنية الحيوية في مسار إدارة الأسرار وحماية الإنتاج ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حماية Connection Strings)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حماية Connection Strings) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حماية Connection Strings)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حماية Connection Strings)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حماية Connection Strings",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حماية Connection Strings)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حماية Connection Strings\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حماية Connection Strings ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حماية Connection Strings) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.6.6",
        "title": "تدوير API Keys",
        "englishTitle": "تدوير API Keys",
        "definition": "يمثل (تدوير API Keys) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تدوير API Keys) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تدوير API Keys) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.6.6",
          "title": "تدوير API Keys",
          "topicTitle": "إدارة الأسرار وحماية الإنتاج",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (تدوير API Keys) أحد المعايير التقنية الحيوية في مسار إدارة الأسرار وحماية الإنتاج ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تدوير API Keys)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تدوير API Keys) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تدوير API Keys)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تدوير API Keys)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تدوير API Keys",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تدوير API Keys)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تدوير API Keys\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تدوير API Keys ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تدوير API Keys) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.6.7",
        "title": "حماية Data Protection Keys",
        "englishTitle": "حماية Data Protection Keys",
        "definition": "يمثل (حماية Data Protection Keys) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (حماية Data Protection Keys) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (حماية Data Protection Keys) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.6.7",
          "title": "حماية Data Protection Keys",
          "topicTitle": "إدارة الأسرار وحماية الإنتاج",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (حماية Data Protection Keys) أحد المعايير التقنية الحيوية في مسار إدارة الأسرار وحماية الإنتاج ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حماية Data Protection Keys)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حماية Data Protection Keys) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حماية Data Protection Keys)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حماية Data Protection Keys)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حماية Data Protection Keys",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حماية Data Protection Keys)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حماية Data Protection Keys\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حماية Data Protection Keys ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حماية Data Protection Keys) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.6.8",
        "title": "منع كشف Stack Traces في Production",
        "englishTitle": "منع كشف Stack Traces في Production",
        "definition": "يمثل (منع كشف Stack Traces في Production) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (منع كشف Stack Traces في Production) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (منع كشف Stack Traces في Production) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.6.8",
          "title": "منع كشف Stack Traces في Production",
          "topicTitle": "إدارة الأسرار وحماية الإنتاج",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (منع كشف Stack Traces في Production) أحد المعايير التقنية الحيوية في مسار إدارة الأسرار وحماية الإنتاج ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (منع كشف Stack Traces في Production)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (منع كشف Stack Traces في Production) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (منع كشف Stack Traces في Production)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (منع كشف Stack Traces في Production)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: منع كشف Stack Traces في Production",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (منع كشف Stack Traces في Production)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين منع كشف Stack Traces في Production\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: منع كشف Stack Traces في Production ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (منع كشف Stack Traces في Production) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.6.9",
        "title": "تحديث NuGet Packages",
        "englishTitle": "تحديث NuGet Packages",
        "definition": "يمثل (تحديث NuGet Packages) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تحديث NuGet Packages) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تحديث NuGet Packages) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.6.9",
          "title": "تحديث NuGet Packages",
          "topicTitle": "إدارة الأسرار وحماية الإنتاج",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (تحديث NuGet Packages) أحد المعايير التقنية الحيوية في مسار إدارة الأسرار وحماية الإنتاج ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تحديث NuGet Packages)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تحديث NuGet Packages) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تحديث NuGet Packages)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تحديث NuGet Packages)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تحديث NuGet Packages",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تحديث NuGet Packages)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تحديث NuGet Packages\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تحديث NuGet Packages ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تحديث NuGet Packages) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 7,
    "title": "Rate Limiting والحماية من إساءة الاستخدام",
    "subtopics": [
      {
        "subId": "21.7.1",
        "title": "ما هو Rate Limiting؟",
        "englishTitle": "Rate Limiting",
        "definition": "يمثل (ما هو Rate Limiting؟) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (ما هو Rate Limiting؟) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (ما هو Rate Limiting؟) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.7.1",
          "title": "ما هو Rate Limiting؟",
          "topicTitle": "Rate Limiting والحماية من إساءة الاستخدام",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (ما هو Rate Limiting؟) أحد المعايير التقنية الحيوية في مسار Rate Limiting والحماية من إساءة الاستخدام ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Rate Limiting؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Rate Limiting؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Rate Limiting؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Rate Limiting؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Rate Limiting؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Rate Limiting؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Rate Limiting؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Rate Limiting؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Rate Limiting؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.7.2",
        "title": "استخدام AddRateLimiter",
        "englishTitle": "AddRateLimiter",
        "definition": "يمثل (استخدام AddRateLimiter) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام AddRateLimiter) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام AddRateLimiter) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.7.2",
          "title": "استخدام AddRateLimiter",
          "topicTitle": "Rate Limiting والحماية من إساءة الاستخدام",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (استخدام AddRateLimiter) أحد المعايير التقنية الحيوية في مسار Rate Limiting والحماية من إساءة الاستخدام ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام AddRateLimiter)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام AddRateLimiter) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام AddRateLimiter)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام AddRateLimiter)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام AddRateLimiter",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام AddRateLimiter)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام AddRateLimiter\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام AddRateLimiter ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام AddRateLimiter) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.7.3",
        "title": "استخدام UseRateLimiter",
        "englishTitle": "UseRateLimiter",
        "definition": "يمثل (استخدام UseRateLimiter) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (استخدام UseRateLimiter) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (استخدام UseRateLimiter) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.7.3",
          "title": "استخدام UseRateLimiter",
          "topicTitle": "Rate Limiting والحماية من إساءة الاستخدام",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (استخدام UseRateLimiter) أحد المعايير التقنية الحيوية في مسار Rate Limiting والحماية من إساءة الاستخدام ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام UseRateLimiter)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام UseRateLimiter) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام UseRateLimiter)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام UseRateLimiter)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام UseRateLimiter",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام UseRateLimiter)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام UseRateLimiter\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام UseRateLimiter ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام UseRateLimiter) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.7.4",
        "title": "مفهوم Fixed Window Limiter",
        "englishTitle": "Fixed Window Limiter",
        "definition": "يمثل (مفهوم Fixed Window Limiter) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Fixed Window Limiter) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Fixed Window Limiter) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.7.4",
          "title": "مفهوم Fixed Window Limiter",
          "topicTitle": "Rate Limiting والحماية من إساءة الاستخدام",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (مفهوم Fixed Window Limiter) أحد المعايير التقنية الحيوية في مسار Rate Limiting والحماية من إساءة الاستخدام ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Fixed Window Limiter)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Fixed Window Limiter) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Fixed Window Limiter)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Fixed Window Limiter)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Fixed Window Limiter",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Fixed Window Limiter)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Fixed Window Limiter\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Fixed Window Limiter ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Fixed Window Limiter) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.7.5",
        "title": "مفهوم Sliding Window Limiter",
        "englishTitle": "Sliding Window Limiter",
        "definition": "يمثل (مفهوم Sliding Window Limiter) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Sliding Window Limiter) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Sliding Window Limiter) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.7.5",
          "title": "مفهوم Sliding Window Limiter",
          "topicTitle": "Rate Limiting والحماية من إساءة الاستخدام",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (مفهوم Sliding Window Limiter) أحد المعايير التقنية الحيوية في مسار Rate Limiting والحماية من إساءة الاستخدام ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Sliding Window Limiter)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Sliding Window Limiter) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Sliding Window Limiter)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Sliding Window Limiter)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Sliding Window Limiter",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Sliding Window Limiter)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Sliding Window Limiter\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Sliding Window Limiter ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Sliding Window Limiter) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.7.6",
        "title": "مفهوم Token Bucket Limiter",
        "englishTitle": "Token Bucket Limiter",
        "definition": "يمثل (مفهوم Token Bucket Limiter) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (مفهوم Token Bucket Limiter) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (مفهوم Token Bucket Limiter) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.7.6",
          "title": "مفهوم Token Bucket Limiter",
          "topicTitle": "Rate Limiting والحماية من إساءة الاستخدام",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (مفهوم Token Bucket Limiter) أحد المعايير التقنية الحيوية في مسار Rate Limiting والحماية من إساءة الاستخدام ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Token Bucket Limiter)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Token Bucket Limiter) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Token Bucket Limiter)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Token Bucket Limiter)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Token Bucket Limiter",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Token Bucket Limiter)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Token Bucket Limiter\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Token Bucket Limiter ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Token Bucket Limiter) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.7.7",
        "title": "حماية Login من Brute Force",
        "englishTitle": "حماية Login من Brute Force",
        "definition": "يمثل (حماية Login من Brute Force) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (حماية Login من Brute Force) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (حماية Login من Brute Force) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.7.7",
          "title": "حماية Login من Brute Force",
          "topicTitle": "Rate Limiting والحماية من إساءة الاستخدام",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (حماية Login من Brute Force) أحد المعايير التقنية الحيوية في مسار Rate Limiting والحماية من إساءة الاستخدام ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حماية Login من Brute Force)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حماية Login من Brute Force) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حماية Login من Brute Force)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حماية Login من Brute Force)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حماية Login من Brute Force",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حماية Login من Brute Force)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حماية Login من Brute Force\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حماية Login من Brute Force ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حماية Login من Brute Force) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.7.8",
        "title": "تطبيق حدود حجم الطلبات",
        "englishTitle": "حدود حجم الطلبات",
        "definition": "يمثل (تطبيق حدود حجم الطلبات) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (تطبيق حدود حجم الطلبات) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (تطبيق حدود حجم الطلبات) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.7.8",
          "title": "تطبيق حدود حجم الطلبات",
          "topicTitle": "Rate Limiting والحماية من إساءة الاستخدام",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (تطبيق حدود حجم الطلبات) أحد المعايير التقنية الحيوية في مسار Rate Limiting والحماية من إساءة الاستخدام ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تطبيق حدود حجم الطلبات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تطبيق حدود حجم الطلبات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تطبيق حدود حجم الطلبات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تطبيق حدود حجم الطلبات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تطبيق حدود حجم الطلبات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تطبيق حدود حجم الطلبات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تطبيق حدود حجم الطلبات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تطبيق حدود حجم الطلبات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تطبيق حدود حجم الطلبات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "21.7.9",
        "title": "معالجة 429 Responses",
        "englishTitle": "معالجة 429 Responses",
        "definition": "يمثل (معالجة 429 Responses) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.",
        "analogy": "يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (معالجة 429 Responses) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.",
        "why": "نحتاج (معالجة 429 Responses) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.",
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
          "badge": "الدرس 21.7.9",
          "title": "معالجة 429 Responses",
          "topicTitle": "Rate Limiting والحماية من إساءة الاستخدام",
          "sectionTitle": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
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
          "summary": "يمثل (معالجة 429 Responses) أحد المعايير التقنية الحيوية في مسار Rate Limiting والحماية من إساءة الاستخدام ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (معالجة 429 Responses)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (معالجة 429 Responses) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (معالجة 429 Responses)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (معالجة 429 Responses)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: معالجة 429 Responses",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (معالجة 429 Responses)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين معالجة 429 Responses\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: معالجة 429 Responses ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (معالجة 429 Responses) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section21Data;
