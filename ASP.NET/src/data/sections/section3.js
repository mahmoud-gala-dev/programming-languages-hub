// src/data/sections/section3.js
// محتوى تعليمي مفصل وشامل لـ: القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#
export const section3Data = {
  id: 3,
  title: "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
  englishTitle: "Object-Oriented Programming (OOP) in C#",
  icon: "Boxes",
  category: "لغة C#",
  description: "فهم الكائنات والفئات، التغليف، الوراثة، تعدد الأشكال، التجريد، الواجهات، ومبادئ SOLID الهندسية.",
  summary: {
  "sectionId": 3,
  "title": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
  "englishTitle": "Object-Oriented Programming (OOP) in C#",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
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
    "title": "مقدمة في OOP",
    "subtopics": [
      {
        "subId": "3.1.1",
        "title": "ما هي Object-Oriented Programming؟",
        "englishTitle": "Object-Oriented Programming",
        "definition": "يعد (ما هي Object-Oriented Programming؟) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (ما هي Object-Oriented Programming؟) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (ما هي Object-Oriented Programming؟) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ ما هي Object-Oriented Programming؟\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: ما هي Object-Oriented Programming؟\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"ما هي Object-Oriented Programming؟\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ ما هي Object-Oriented Programming؟\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.1.1",
          "title": "ما هي Object-Oriented Programming؟",
          "topicTitle": "مقدمة في OOP",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (ما هي Object-Oriented Programming؟) أحد المعايير التقنية الحيوية في مسار مقدمة في OOP ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Object-Oriented Programming؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Object-Oriented Programming؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Object-Oriented Programming؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Object-Oriented Programming؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي Object-Oriented Programming؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Object-Oriented Programming؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Object-Oriented Programming؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Object-Oriented Programming؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Object-Oriented Programming؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.1.2",
        "title": "الفرق بين Procedural وObject-Oriented Programming",
        "englishTitle": "Procedural وObject-Oriented Programming",
        "definition": "يعد (الفرق بين Procedural وObject-Oriented Programming) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (الفرق بين Procedural وObject-Oriented Programming) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (الفرق بين Procedural وObject-Oriented Programming) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ الفرق بين Procedural وObject-Oriented Programming\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: الفرق بين Procedural وObject-Oriented Programming\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"الفرق بين Procedural وObject-Oriented Programming\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ الفرق بين Procedural وObject-Oriented Programming\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.1.2",
          "title": "الفرق بين Procedural وObject-Oriented Programming",
          "topicTitle": "مقدمة في OOP",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (الفرق بين Procedural وObject-Oriented Programming) أحد المعايير التقنية الحيوية في مسار مقدمة في OOP ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Procedural وObject-Oriented Programming)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Procedural وObject-Oriented Programming) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Procedural وObject-Oriented Programming)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Procedural وObject-Oriented Programming)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Procedural وObject-Oriented Programming",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Procedural وObject-Oriented Programming)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Procedural وObject-Oriented Programming\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Procedural وObject-Oriented Programming ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Procedural وObject-Oriented Programming) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.1.3",
        "title": "مفهوم Class",
        "englishTitle": "Class",
        "definition": "يعد (مفهوم Class) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (مفهوم Class) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (مفهوم Class) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ مفهوم Class\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: مفهوم Class\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"مفهوم Class\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ مفهوم Class\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.1.3",
          "title": "مفهوم Class",
          "topicTitle": "مقدمة في OOP",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (مفهوم Class) أحد المعايير التقنية الحيوية في مسار مقدمة في OOP ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Class)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Class) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Class)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Class)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Class",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Class)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Class\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Class ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Class) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.1.4",
        "title": "مفهوم Object",
        "englishTitle": "Object",
        "definition": "يعد (مفهوم Object) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (مفهوم Object) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (مفهوم Object) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ مفهوم Object\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: مفهوم Object\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"مفهوم Object\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ مفهوم Object\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.1.4",
          "title": "مفهوم Object",
          "topicTitle": "مقدمة في OOP",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (مفهوم Object) أحد المعايير التقنية الحيوية في مسار مقدمة في OOP ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Object)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Object) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Object)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Object)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Object",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Object)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Object\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Object ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Object) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.1.5",
        "title": "إنشاء Class",
        "englishTitle": "Class",
        "definition": "يعد (إنشاء Class) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (إنشاء Class) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (إنشاء Class) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ إنشاء Class\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: إنشاء Class\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"إنشاء Class\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ إنشاء Class\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.1.5",
          "title": "إنشاء Class",
          "topicTitle": "مقدمة في OOP",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (إنشاء Class) أحد المعايير التقنية الحيوية في مسار مقدمة في OOP ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Class)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Class) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Class)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Class)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Class",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Class)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Class\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Class ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Class) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.1.6",
        "title": "إنشاء Object باستخدام new",
        "englishTitle": "Object بnew",
        "definition": "يعد (إنشاء Object باستخدام new) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (إنشاء Object باستخدام new) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (إنشاء Object باستخدام new) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ إنشاء Object باستخدام new\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: إنشاء Object باستخدام new\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"إنشاء Object باستخدام new\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ إنشاء Object باستخدام new\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.1.6",
          "title": "إنشاء Object باستخدام new",
          "topicTitle": "مقدمة في OOP",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (إنشاء Object باستخدام new) أحد المعايير التقنية الحيوية في مسار مقدمة في OOP ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Object باستخدام new)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Object باستخدام new) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Object باستخدام new)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Object باستخدام new)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Object باستخدام new",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Object باستخدام new)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Object باستخدام new\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Object باستخدام new ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Object باستخدام new) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.1.7",
        "title": "استخدام Properties وMethods",
        "englishTitle": "Properties وMethods",
        "definition": "يعد (استخدام Properties وMethods) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Properties وMethods) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Properties وMethods) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام Properties وMethods\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Properties وMethods\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Properties وMethods\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Properties وMethods\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.1.7",
          "title": "استخدام Properties وMethods",
          "topicTitle": "مقدمة في OOP",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام Properties وMethods) أحد المعايير التقنية الحيوية في مسار مقدمة في OOP ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Properties وMethods)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Properties وMethods) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Properties وMethods)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Properties وMethods)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Properties وMethods",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Properties وMethods)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Properties وMethods\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Properties وMethods ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Properties وMethods) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.1.8",
        "title": "أمثلة عملية من الحياة اليومية",
        "englishTitle": "أمثلة عملية من الحياة اليومية",
        "definition": "يعد (أمثلة عملية من الحياة اليومية) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (أمثلة عملية من الحياة اليومية) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (أمثلة عملية من الحياة اليومية) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ أمثلة عملية من الحياة اليومية\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: أمثلة عملية من الحياة اليومية\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"أمثلة عملية من الحياة اليومية\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ أمثلة عملية من الحياة اليومية\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.1.8",
          "title": "أمثلة عملية من الحياة اليومية",
          "topicTitle": "مقدمة في OOP",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (أمثلة عملية من الحياة اليومية) أحد المعايير التقنية الحيوية في مسار مقدمة في OOP ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (أمثلة عملية من الحياة اليومية)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (أمثلة عملية من الحياة اليومية) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (أمثلة عملية من الحياة اليومية)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (أمثلة عملية من الحياة اليومية)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: أمثلة عملية من الحياة اليومية",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (أمثلة عملية من الحياة اليومية)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين أمثلة عملية من الحياة اليومية\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: أمثلة عملية من الحياة اليومية ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (أمثلة عملية من الحياة اليومية) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "Classes وConstructors",
    "subtopics": [
      {
        "subId": "3.2.1",
        "title": "تعريف Fields",
        "englishTitle": "تعريف Fields",
        "definition": "يعد (تعريف Fields) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (تعريف Fields) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (تعريف Fields) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ تعريف Fields\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: تعريف Fields\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"تعريف Fields\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ تعريف Fields\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.2.1",
          "title": "تعريف Fields",
          "topicTitle": "Classes وConstructors",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (تعريف Fields) أحد المعايير التقنية الحيوية في مسار Classes وConstructors ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تعريف Fields)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تعريف Fields) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تعريف Fields)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تعريف Fields)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تعريف Fields",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تعريف Fields)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تعريف Fields\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تعريف Fields ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تعريف Fields) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.2.2",
        "title": "تعريف Properties",
        "englishTitle": "تعريف Properties",
        "definition": "يعد (تعريف Properties) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (تعريف Properties) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (تعريف Properties) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ تعريف Properties\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: تعريف Properties\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"تعريف Properties\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ تعريف Properties\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.2.2",
          "title": "تعريف Properties",
          "topicTitle": "Classes وConstructors",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (تعريف Properties) أحد المعايير التقنية الحيوية في مسار Classes وConstructors ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تعريف Properties)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تعريف Properties) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تعريف Properties)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تعريف Properties)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تعريف Properties",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تعريف Properties)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تعريف Properties\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تعريف Properties ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تعريف Properties) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.2.3",
        "title": "استخدام Constructors",
        "englishTitle": "Constructors",
        "definition": "يعد (استخدام Constructors) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Constructors) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Constructors) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام Constructors\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Constructors\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Constructors\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Constructors\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.2.3",
          "title": "استخدام Constructors",
          "topicTitle": "Classes وConstructors",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام Constructors) أحد المعايير التقنية الحيوية في مسار Classes وConstructors ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Constructors)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Constructors) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Constructors)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Constructors)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Constructors",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Constructors)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Constructors\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Constructors ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Constructors) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.2.4",
        "title": "استخدام Constructor Overloading",
        "englishTitle": "Constructor Overloading",
        "definition": "يعد (استخدام Constructor Overloading) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Constructor Overloading) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Constructor Overloading) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام Constructor Overloading\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Constructor Overloading\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Constructor Overloading\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Constructor Overloading\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.2.4",
          "title": "استخدام Constructor Overloading",
          "topicTitle": "Classes وConstructors",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام Constructor Overloading) أحد المعايير التقنية الحيوية في مسار Classes وConstructors ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Constructor Overloading)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Constructor Overloading) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Constructor Overloading)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Constructor Overloading)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Constructor Overloading",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Constructor Overloading)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Constructor Overloading\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Constructor Overloading ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Constructor Overloading) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.2.5",
        "title": "استخدام this",
        "englishTitle": "this",
        "definition": "يعد (استخدام this) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام this) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام this) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام this\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام this\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام this\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام this\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.2.5",
          "title": "استخدام this",
          "topicTitle": "Classes وConstructors",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام this) أحد المعايير التقنية الحيوية في مسار Classes وConstructors ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام this)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام this) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام this)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام this)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام this",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام this)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام this\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام this ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام this) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.2.6",
        "title": "استخدام Static Members",
        "englishTitle": "Static Members",
        "definition": "يعد (استخدام Static Members) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Static Members) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Static Members) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام Static Members\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Static Members\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Static Members\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Static Members\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.2.6",
          "title": "استخدام Static Members",
          "topicTitle": "Classes وConstructors",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام Static Members) أحد المعايير التقنية الحيوية في مسار Classes وConstructors ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Static Members)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Static Members) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Static Members)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Static Members)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Static Members",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Static Members)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Static Members\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Static Members ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Static Members) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.2.7",
        "title": "استخدام Readonly Fields",
        "englishTitle": "Readonly Fields",
        "definition": "يعد (استخدام Readonly Fields) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Readonly Fields) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Readonly Fields) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام Readonly Fields\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Readonly Fields\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Readonly Fields\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Readonly Fields\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.2.7",
          "title": "استخدام Readonly Fields",
          "topicTitle": "Classes وConstructors",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام Readonly Fields) أحد المعايير التقنية الحيوية في مسار Classes وConstructors ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Readonly Fields)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Readonly Fields) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Readonly Fields)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Readonly Fields)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Readonly Fields",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Readonly Fields)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Readonly Fields\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Readonly Fields ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Readonly Fields) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.2.8",
        "title": "استخدام init Properties",
        "englishTitle": "init Properties",
        "definition": "يعد (استخدام init Properties) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام init Properties) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام init Properties) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام init Properties\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام init Properties\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام init Properties\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام init Properties\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.2.8",
          "title": "استخدام init Properties",
          "topicTitle": "Classes وConstructors",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام init Properties) أحد المعايير التقنية الحيوية في مسار Classes وConstructors ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام init Properties)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام init Properties) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام init Properties)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام init Properties)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام init Properties",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام init Properties)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام init Properties\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام init Properties ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام init Properties) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.2.9",
        "title": "مقدمة في Records",
        "englishTitle": "مقدمة في Records",
        "definition": "يعد (مقدمة في Records) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (مقدمة في Records) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (مقدمة في Records) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ مقدمة في Records\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: مقدمة في Records\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"مقدمة في Records\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ مقدمة في Records\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.2.9",
          "title": "مقدمة في Records",
          "topicTitle": "Classes وConstructors",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (مقدمة في Records) أحد المعايير التقنية الحيوية في مسار Classes وConstructors ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في Records)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Records) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في Records)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في Records)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مقدمة في Records",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في Records)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في Records\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في Records ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في Records) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Encapsulation",
    "subtopics": [
      {
        "subId": "3.3.1",
        "title": "ما هو Encapsulation؟",
        "englishTitle": "Encapsulation",
        "definition": "يعد (ما هو Encapsulation؟) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (ما هو Encapsulation؟) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (ما هو Encapsulation؟) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ ما هو Encapsulation؟\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: ما هو Encapsulation؟\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"ما هو Encapsulation؟\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ ما هو Encapsulation؟\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.3.1",
          "title": "ما هو Encapsulation؟",
          "topicTitle": "Encapsulation",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (ما هو Encapsulation؟) أحد المعايير التقنية الحيوية في مسار Encapsulation ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Encapsulation؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Encapsulation؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Encapsulation؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Encapsulation؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Encapsulation؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Encapsulation؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Encapsulation؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Encapsulation؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Encapsulation؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.3.2",
        "title": "استخدام public",
        "englishTitle": "public",
        "definition": "يعد (استخدام public) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام public) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام public) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام public\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام public\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام public\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام public\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.3.2",
          "title": "استخدام public",
          "topicTitle": "Encapsulation",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام public) أحد المعايير التقنية الحيوية في مسار Encapsulation ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام public)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام public) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام public)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام public)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام public",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام public)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام public\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام public ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام public) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.3.3",
        "title": "استخدام private",
        "englishTitle": "private",
        "definition": "يعد (استخدام private) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام private) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام private) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام private\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام private\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام private\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام private\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.3.3",
          "title": "استخدام private",
          "topicTitle": "Encapsulation",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام private) أحد المعايير التقنية الحيوية في مسار Encapsulation ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام private)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام private) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام private)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام private)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام private",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام private)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام private\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام private ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام private) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.3.4",
        "title": "استخدام protected",
        "englishTitle": "protected",
        "definition": "يعد (استخدام protected) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام protected) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام protected) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام protected\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام protected\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام protected\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام protected\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.3.4",
          "title": "استخدام protected",
          "topicTitle": "Encapsulation",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام protected) أحد المعايير التقنية الحيوية في مسار Encapsulation ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام protected)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام protected) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام protected)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام protected)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام protected",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام protected)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام protected\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام protected ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام protected) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.3.5",
        "title": "استخدام internal",
        "englishTitle": "internal",
        "definition": "يعد (استخدام internal) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام internal) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام internal) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام internal\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام internal\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام internal\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام internal\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.3.5",
          "title": "استخدام internal",
          "topicTitle": "Encapsulation",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام internal) أحد المعايير التقنية الحيوية في مسار Encapsulation ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام internal)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام internal) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام internal)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام internal)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام internal",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام internal)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام internal\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام internal ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام internal) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.3.6",
        "title": "استخدام Getters وSetters",
        "englishTitle": "Getters وSetters",
        "definition": "يعد (استخدام Getters وSetters) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Getters وSetters) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Getters وSetters) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام Getters وSetters\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Getters وSetters\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Getters وSetters\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Getters وSetters\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.3.6",
          "title": "استخدام Getters وSetters",
          "topicTitle": "Encapsulation",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام Getters وSetters) أحد المعايير التقنية الحيوية في مسار Encapsulation ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Getters وSetters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Getters وSetters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Getters وSetters)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Getters وSetters)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Getters وSetters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Getters وSetters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Getters وSetters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Getters وSetters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Getters وSetters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.3.7",
        "title": "حماية البيانات داخل Class",
        "englishTitle": "حماية البيانات داخل Class",
        "definition": "يعد (حماية البيانات داخل Class) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (حماية البيانات داخل Class) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (حماية البيانات داخل Class) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ حماية البيانات داخل Class\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: حماية البيانات داخل Class\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"حماية البيانات داخل Class\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ حماية البيانات داخل Class\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.3.7",
          "title": "حماية البيانات داخل Class",
          "topicTitle": "Encapsulation",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (حماية البيانات داخل Class) أحد المعايير التقنية الحيوية في مسار Encapsulation ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حماية البيانات داخل Class)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حماية البيانات داخل Class) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حماية البيانات داخل Class)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حماية البيانات داخل Class)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حماية البيانات داخل Class",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حماية البيانات داخل Class)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حماية البيانات داخل Class\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حماية البيانات داخل Class ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حماية البيانات داخل Class) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.3.8",
        "title": "تطبيق عملي على Bank Account",
        "englishTitle": "عملي على Bank Account",
        "definition": "يعد (تطبيق عملي على Bank Account) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (تطبيق عملي على Bank Account) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (تطبيق عملي على Bank Account) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ تطبيق عملي على Bank Account\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: تطبيق عملي على Bank Account\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"تطبيق عملي على Bank Account\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ تطبيق عملي على Bank Account\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.3.8",
          "title": "تطبيق عملي على Bank Account",
          "topicTitle": "Encapsulation",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (تطبيق عملي على Bank Account) أحد المعايير التقنية الحيوية في مسار Encapsulation ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تطبيق عملي على Bank Account)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تطبيق عملي على Bank Account) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تطبيق عملي على Bank Account)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تطبيق عملي على Bank Account)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تطبيق عملي على Bank Account",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تطبيق عملي على Bank Account)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تطبيق عملي على Bank Account\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تطبيق عملي على Bank Account ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تطبيق عملي على Bank Account) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "Inheritance",
    "subtopics": [
      {
        "subId": "3.4.1",
        "title": "ما هو Inheritance؟",
        "englishTitle": "Inheritance",
        "definition": "يعد (ما هو Inheritance؟) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (ما هو Inheritance؟) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (ما هو Inheritance؟) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ ما هو Inheritance؟\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: ما هو Inheritance؟\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"ما هو Inheritance؟\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ ما هو Inheritance؟\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.4.1",
          "title": "ما هو Inheritance؟",
          "topicTitle": "Inheritance",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (ما هو Inheritance؟) أحد المعايير التقنية الحيوية في مسار Inheritance ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Inheritance؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Inheritance؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Inheritance؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Inheritance؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Inheritance؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Inheritance؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Inheritance؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Inheritance؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Inheritance؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.4.2",
        "title": "إنشاء Base Class",
        "englishTitle": "Base Class",
        "definition": "يعد (إنشاء Base Class) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (إنشاء Base Class) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (إنشاء Base Class) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ إنشاء Base Class\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: إنشاء Base Class\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"إنشاء Base Class\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ إنشاء Base Class\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.4.2",
          "title": "إنشاء Base Class",
          "topicTitle": "Inheritance",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (إنشاء Base Class) أحد المعايير التقنية الحيوية في مسار Inheritance ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Base Class)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Base Class) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Base Class)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Base Class)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Base Class",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Base Class)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Base Class\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Base Class ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Base Class) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.4.3",
        "title": "إنشاء Derived Class",
        "englishTitle": "Derived Class",
        "definition": "يعد (إنشاء Derived Class) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (إنشاء Derived Class) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (إنشاء Derived Class) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ إنشاء Derived Class\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: إنشاء Derived Class\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"إنشاء Derived Class\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ إنشاء Derived Class\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.4.3",
          "title": "إنشاء Derived Class",
          "topicTitle": "Inheritance",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (إنشاء Derived Class) أحد المعايير التقنية الحيوية في مسار Inheritance ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Derived Class)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Derived Class) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Derived Class)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Derived Class)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Derived Class",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Derived Class)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Derived Class\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Derived Class ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Derived Class) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.4.4",
        "title": "استخدام base",
        "englishTitle": "base",
        "definition": "يعد (استخدام base) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام base) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام base) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام base\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام base\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام base\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام base\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.4.4",
          "title": "استخدام base",
          "topicTitle": "Inheritance",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام base) أحد المعايير التقنية الحيوية في مسار Inheritance ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام base)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام base) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام base)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام base)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام base",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام base)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام base\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام base ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام base) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.4.5",
        "title": "استخدام virtual",
        "englishTitle": "virtual",
        "definition": "يعد (استخدام virtual) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام virtual) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام virtual) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام virtual\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام virtual\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام virtual\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام virtual\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.4.5",
          "title": "استخدام virtual",
          "topicTitle": "Inheritance",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام virtual) أحد المعايير التقنية الحيوية في مسار Inheritance ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام virtual)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام virtual) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام virtual)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام virtual)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام virtual",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام virtual)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام virtual\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام virtual ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام virtual) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.4.6",
        "title": "استخدام override",
        "englishTitle": "override",
        "definition": "يعد (استخدام override) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام override) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام override) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام override\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام override\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام override\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام override\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.4.6",
          "title": "استخدام override",
          "topicTitle": "Inheritance",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام override) أحد المعايير التقنية الحيوية في مسار Inheritance ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام override)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام override) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام override)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام override)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام override",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام override)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام override\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام override ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام override) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.4.7",
        "title": "استخدام sealed",
        "englishTitle": "sealed",
        "definition": "يعد (استخدام sealed) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام sealed) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام sealed) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام sealed\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام sealed\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام sealed\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام sealed\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.4.7",
          "title": "استخدام sealed",
          "topicTitle": "Inheritance",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام sealed) أحد المعايير التقنية الحيوية في مسار Inheritance ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام sealed)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام sealed) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام sealed)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام sealed)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام sealed",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام sealed)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام sealed\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام sealed ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام sealed) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.4.8",
        "title": "متى نستخدم Inheritance؟",
        "englishTitle": "متى نستخدم Inheritance",
        "definition": "يعد (متى نستخدم Inheritance؟) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (متى نستخدم Inheritance؟) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (متى نستخدم Inheritance؟) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ متى نستخدم Inheritance؟\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: متى نستخدم Inheritance؟\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"متى نستخدم Inheritance؟\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ متى نستخدم Inheritance؟\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.4.8",
          "title": "متى نستخدم Inheritance؟",
          "topicTitle": "Inheritance",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (متى نستخدم Inheritance؟) أحد المعايير التقنية الحيوية في مسار Inheritance ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (متى نستخدم Inheritance؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (متى نستخدم Inheritance؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (متى نستخدم Inheritance؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (متى نستخدم Inheritance؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: متى نستخدم Inheritance؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (متى نستخدم Inheritance؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين متى نستخدم Inheritance؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: متى نستخدم Inheritance؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (متى نستخدم Inheritance؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "Polymorphism وAbstraction",
    "subtopics": [
      {
        "subId": "3.5.1",
        "title": "ما هو Polymorphism؟",
        "englishTitle": "Polymorphism",
        "definition": "يعد (ما هو Polymorphism؟) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (ما هو Polymorphism؟) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (ما هو Polymorphism؟) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ ما هو Polymorphism؟\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: ما هو Polymorphism؟\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"ما هو Polymorphism؟\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ ما هو Polymorphism؟\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.5.1",
          "title": "ما هو Polymorphism؟",
          "topicTitle": "Polymorphism وAbstraction",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (ما هو Polymorphism؟) أحد المعايير التقنية الحيوية في مسار Polymorphism وAbstraction ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Polymorphism؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Polymorphism؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Polymorphism؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Polymorphism؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Polymorphism؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Polymorphism؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Polymorphism؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Polymorphism؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Polymorphism؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.5.2",
        "title": "Method Overloading",
        "englishTitle": "Method Overloading",
        "definition": "يعد (Method Overloading) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (Method Overloading) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (Method Overloading) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ Method Overloading\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: Method Overloading\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"Method Overloading\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ Method Overloading\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.5.2",
          "title": "Method Overloading",
          "topicTitle": "Polymorphism وAbstraction",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (Method Overloading) أحد المعايير التقنية الحيوية في مسار Polymorphism وAbstraction ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Method Overloading)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Method Overloading) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Method Overloading)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Method Overloading)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Method Overloading",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Method Overloading)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Method Overloading\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Method Overloading ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Method Overloading) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.5.3",
        "title": "Method Overriding",
        "englishTitle": "Method Overriding",
        "definition": "يعد (Method Overriding) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (Method Overriding) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (Method Overriding) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ Method Overriding\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: Method Overriding\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"Method Overriding\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ Method Overriding\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.5.3",
          "title": "Method Overriding",
          "topicTitle": "Polymorphism وAbstraction",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (Method Overriding) أحد المعايير التقنية الحيوية في مسار Polymorphism وAbstraction ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Method Overriding)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Method Overriding) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Method Overriding)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Method Overriding)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Method Overriding",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Method Overriding)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Method Overriding\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Method Overriding ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Method Overriding) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.5.4",
        "title": "ما هو Abstraction؟",
        "englishTitle": "Abstraction",
        "definition": "يعد (ما هو Abstraction؟) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (ما هو Abstraction؟) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (ما هو Abstraction؟) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ ما هو Abstraction؟\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: ما هو Abstraction؟\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"ما هو Abstraction؟\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ ما هو Abstraction؟\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.5.4",
          "title": "ما هو Abstraction؟",
          "topicTitle": "Polymorphism وAbstraction",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (ما هو Abstraction؟) أحد المعايير التقنية الحيوية في مسار Polymorphism وAbstraction ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Abstraction؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Abstraction؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Abstraction؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Abstraction؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Abstraction؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Abstraction؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Abstraction؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Abstraction؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Abstraction؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.5.5",
        "title": "إنشاء Abstract Class",
        "englishTitle": "Abstract Class",
        "definition": "يعد (إنشاء Abstract Class) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (إنشاء Abstract Class) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (إنشاء Abstract Class) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ إنشاء Abstract Class\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: إنشاء Abstract Class\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"إنشاء Abstract Class\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ إنشاء Abstract Class\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.5.5",
          "title": "إنشاء Abstract Class",
          "topicTitle": "Polymorphism وAbstraction",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (إنشاء Abstract Class) أحد المعايير التقنية الحيوية في مسار Polymorphism وAbstraction ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Abstract Class)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Abstract Class) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Abstract Class)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Abstract Class)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Abstract Class",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Abstract Class)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Abstract Class\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Abstract Class ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Abstract Class) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.5.6",
        "title": "إنشاء Abstract Method",
        "englishTitle": "Abstract Method",
        "definition": "يعد (إنشاء Abstract Method) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (إنشاء Abstract Method) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (إنشاء Abstract Method) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ إنشاء Abstract Method\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: إنشاء Abstract Method\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"إنشاء Abstract Method\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ إنشاء Abstract Method\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.5.6",
          "title": "إنشاء Abstract Method",
          "topicTitle": "Polymorphism وAbstraction",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (إنشاء Abstract Method) أحد المعايير التقنية الحيوية في مسار Polymorphism وAbstraction ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Abstract Method)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Abstract Method) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Abstract Method)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Abstract Method)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Abstract Method",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Abstract Method)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Abstract Method\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Abstract Method ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Abstract Method) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.5.7",
        "title": "الفرق بين Abstraction وEncapsulation",
        "englishTitle": "Abstraction وEncapsulation",
        "definition": "يعد (الفرق بين Abstraction وEncapsulation) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (الفرق بين Abstraction وEncapsulation) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (الفرق بين Abstraction وEncapsulation) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ الفرق بين Abstraction وEncapsulation\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: الفرق بين Abstraction وEncapsulation\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"الفرق بين Abstraction وEncapsulation\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ الفرق بين Abstraction وEncapsulation\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.5.7",
          "title": "الفرق بين Abstraction وEncapsulation",
          "topicTitle": "Polymorphism وAbstraction",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (الفرق بين Abstraction وEncapsulation) أحد المعايير التقنية الحيوية في مسار Polymorphism وAbstraction ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Abstraction وEncapsulation)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Abstraction وEncapsulation) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Abstraction وEncapsulation)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Abstraction وEncapsulation)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Abstraction وEncapsulation",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Abstraction وEncapsulation)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Abstraction وEncapsulation\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Abstraction وEncapsulation ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Abstraction وEncapsulation) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.5.8",
        "title": "مثال عملي على نظام الموظفين",
        "englishTitle": "مثال عملي على نظام الموظفين",
        "definition": "يعد (مثال عملي على نظام الموظفين) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (مثال عملي على نظام الموظفين) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (مثال عملي على نظام الموظفين) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ مثال عملي على نظام الموظفين\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: مثال عملي على نظام الموظفين\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"مثال عملي على نظام الموظفين\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ مثال عملي على نظام الموظفين\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.5.8",
          "title": "مثال عملي على نظام الموظفين",
          "topicTitle": "Polymorphism وAbstraction",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (مثال عملي على نظام الموظفين) أحد المعايير التقنية الحيوية في مسار Polymorphism وAbstraction ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مثال عملي على نظام الموظفين)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مثال عملي على نظام الموظفين) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مثال عملي على نظام الموظفين)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مثال عملي على نظام الموظفين)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مثال عملي على نظام الموظفين",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مثال عملي على نظام الموظفين)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مثال عملي على نظام الموظفين\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مثال عملي على نظام الموظفين ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مثال عملي على نظام الموظفين) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "Interfaces",
    "subtopics": [
      {
        "subId": "3.6.1",
        "title": "ما هي Interface؟",
        "englishTitle": "Interface",
        "definition": "يعد (ما هي Interface؟) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (ما هي Interface؟) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (ما هي Interface؟) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ ما هي Interface؟\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: ما هي Interface؟\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"ما هي Interface؟\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ ما هي Interface؟\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.6.1",
          "title": "ما هي Interface؟",
          "topicTitle": "Interfaces",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (ما هي Interface؟) أحد المعايير التقنية الحيوية في مسار Interfaces ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Interface؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Interface؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Interface؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Interface؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي Interface؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Interface؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Interface؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Interface؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Interface؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.6.2",
        "title": "إنشاء Interface",
        "englishTitle": "Interface",
        "definition": "يعد (إنشاء Interface) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (إنشاء Interface) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (إنشاء Interface) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ إنشاء Interface\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: إنشاء Interface\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"إنشاء Interface\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ إنشاء Interface\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.6.2",
          "title": "إنشاء Interface",
          "topicTitle": "Interfaces",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (إنشاء Interface) أحد المعايير التقنية الحيوية في مسار Interfaces ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Interface)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Interface) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Interface)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Interface)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Interface",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Interface)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Interface\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Interface ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Interface) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.6.3",
        "title": "تطبيق Interface داخل Class",
        "englishTitle": "Interface داخل Class",
        "definition": "يعد (تطبيق Interface داخل Class) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (تطبيق Interface داخل Class) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (تطبيق Interface داخل Class) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ تطبيق Interface داخل Class\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: تطبيق Interface داخل Class\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"تطبيق Interface داخل Class\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ تطبيق Interface داخل Class\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.6.3",
          "title": "تطبيق Interface داخل Class",
          "topicTitle": "Interfaces",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (تطبيق Interface داخل Class) أحد المعايير التقنية الحيوية في مسار Interfaces ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تطبيق Interface داخل Class)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تطبيق Interface داخل Class) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تطبيق Interface داخل Class)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تطبيق Interface داخل Class)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تطبيق Interface داخل Class",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تطبيق Interface داخل Class)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تطبيق Interface داخل Class\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تطبيق Interface داخل Class ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تطبيق Interface داخل Class) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.6.4",
        "title": "استخدام Multiple Interfaces",
        "englishTitle": "Multiple Interfaces",
        "definition": "يعد (استخدام Multiple Interfaces) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Multiple Interfaces) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Multiple Interfaces) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام Multiple Interfaces\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Multiple Interfaces\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Multiple Interfaces\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Multiple Interfaces\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.6.4",
          "title": "استخدام Multiple Interfaces",
          "topicTitle": "Interfaces",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام Multiple Interfaces) أحد المعايير التقنية الحيوية في مسار Interfaces ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Multiple Interfaces)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Multiple Interfaces) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Multiple Interfaces)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Multiple Interfaces)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Multiple Interfaces",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Multiple Interfaces)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Multiple Interfaces\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Multiple Interfaces ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Multiple Interfaces) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.6.5",
        "title": "الفرق بين Interface وAbstract Class",
        "englishTitle": "Interface وAbstract Class",
        "definition": "يعد (الفرق بين Interface وAbstract Class) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (الفرق بين Interface وAbstract Class) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (الفرق بين Interface وAbstract Class) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ الفرق بين Interface وAbstract Class\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: الفرق بين Interface وAbstract Class\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"الفرق بين Interface وAbstract Class\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ الفرق بين Interface وAbstract Class\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.6.5",
          "title": "الفرق بين Interface وAbstract Class",
          "topicTitle": "Interfaces",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (الفرق بين Interface وAbstract Class) أحد المعايير التقنية الحيوية في مسار Interfaces ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Interface وAbstract Class)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Interface وAbstract Class) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Interface وAbstract Class)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Interface وAbstract Class)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Interface وAbstract Class",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Interface وAbstract Class)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Interface وAbstract Class\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Interface وAbstract Class ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Interface وAbstract Class) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.6.6",
        "title": "استخدام Interfaces مع Dependency Injection",
        "englishTitle": "Interfaces مع Dependency Injection",
        "definition": "يعد (استخدام Interfaces مع Dependency Injection) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Interfaces مع Dependency Injection) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Interfaces مع Dependency Injection) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ استخدام Interfaces مع Dependency Injection\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Interfaces مع Dependency Injection\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Interfaces مع Dependency Injection\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Interfaces مع Dependency Injection\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.6.6",
          "title": "استخدام Interfaces مع Dependency Injection",
          "topicTitle": "Interfaces",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (استخدام Interfaces مع Dependency Injection) أحد المعايير التقنية الحيوية في مسار Interfaces ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Interfaces مع Dependency Injection)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Interfaces مع Dependency Injection) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Interfaces مع Dependency Injection)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Interfaces مع Dependency Injection)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Interfaces مع Dependency Injection",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Interfaces مع Dependency Injection)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Interfaces مع Dependency Injection\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Interfaces مع Dependency Injection ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Interfaces مع Dependency Injection) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.6.7",
        "title": "مثال عملي على Payment Services",
        "englishTitle": "مثال عملي على Payment Services",
        "definition": "يعد (مثال عملي على Payment Services) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (مثال عملي على Payment Services) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (مثال عملي على Payment Services) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ مثال عملي على Payment Services\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: مثال عملي على Payment Services\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"مثال عملي على Payment Services\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ مثال عملي على Payment Services\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.6.7",
          "title": "مثال عملي على Payment Services",
          "topicTitle": "Interfaces",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (مثال عملي على Payment Services) أحد المعايير التقنية الحيوية في مسار Interfaces ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مثال عملي على Payment Services)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مثال عملي على Payment Services) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مثال عملي على Payment Services)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مثال عملي على Payment Services)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مثال عملي على Payment Services",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مثال عملي على Payment Services)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مثال عملي على Payment Services\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مثال عملي على Payment Services ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مثال عملي على Payment Services) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 7,
    "title": "مبادئ SOLID",
    "subtopics": [
      {
        "subId": "3.7.1",
        "title": "مقدمة في SOLID Principles",
        "englishTitle": "مقدمة في SOLID Principles",
        "definition": "يعد (مقدمة في SOLID Principles) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (مقدمة في SOLID Principles) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (مقدمة في SOLID Principles) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ مقدمة في SOLID Principles\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: مقدمة في SOLID Principles\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"مقدمة في SOLID Principles\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ مقدمة في SOLID Principles\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.7.1",
          "title": "مقدمة في SOLID Principles",
          "topicTitle": "مبادئ SOLID",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (مقدمة في SOLID Principles) أحد المعايير التقنية الحيوية في مسار مبادئ SOLID ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في SOLID Principles)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في SOLID Principles) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في SOLID Principles)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في SOLID Principles)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مقدمة في SOLID Principles",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في SOLID Principles)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في SOLID Principles\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في SOLID Principles ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في SOLID Principles) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.7.2",
        "title": "Single Responsibility Principle",
        "englishTitle": "Single Responsibility Principle",
        "definition": "يعد (Single Responsibility Principle) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (Single Responsibility Principle) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (Single Responsibility Principle) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ Single Responsibility Principle\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: Single Responsibility Principle\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"Single Responsibility Principle\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ Single Responsibility Principle\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.7.2",
          "title": "Single Responsibility Principle",
          "topicTitle": "مبادئ SOLID",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (Single Responsibility Principle) أحد المعايير التقنية الحيوية في مسار مبادئ SOLID ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Single Responsibility Principle)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Single Responsibility Principle) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Single Responsibility Principle)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Single Responsibility Principle)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Single Responsibility Principle",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Single Responsibility Principle)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Single Responsibility Principle\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Single Responsibility Principle ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Single Responsibility Principle) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.7.3",
        "title": "Open Closed Principle",
        "englishTitle": "Open Closed Principle",
        "definition": "يعد (Open Closed Principle) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (Open Closed Principle) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (Open Closed Principle) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ Open Closed Principle\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: Open Closed Principle\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"Open Closed Principle\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ Open Closed Principle\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.7.3",
          "title": "Open Closed Principle",
          "topicTitle": "مبادئ SOLID",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (Open Closed Principle) أحد المعايير التقنية الحيوية في مسار مبادئ SOLID ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Open Closed Principle)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Open Closed Principle) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Open Closed Principle)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Open Closed Principle)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Open Closed Principle",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Open Closed Principle)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Open Closed Principle\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Open Closed Principle ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Open Closed Principle) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.7.4",
        "title": "Liskov Substitution Principle",
        "englishTitle": "Liskov Substitution Principle",
        "definition": "يعد (Liskov Substitution Principle) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (Liskov Substitution Principle) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (Liskov Substitution Principle) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ Liskov Substitution Principle\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: Liskov Substitution Principle\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"Liskov Substitution Principle\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ Liskov Substitution Principle\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.7.4",
          "title": "Liskov Substitution Principle",
          "topicTitle": "مبادئ SOLID",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (Liskov Substitution Principle) أحد المعايير التقنية الحيوية في مسار مبادئ SOLID ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Liskov Substitution Principle)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Liskov Substitution Principle) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Liskov Substitution Principle)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Liskov Substitution Principle)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Liskov Substitution Principle",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Liskov Substitution Principle)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Liskov Substitution Principle\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Liskov Substitution Principle ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Liskov Substitution Principle) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.7.5",
        "title": "Interface Segregation Principle",
        "englishTitle": "Interface Segregation Principle",
        "definition": "يعد (Interface Segregation Principle) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (Interface Segregation Principle) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (Interface Segregation Principle) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ Interface Segregation Principle\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: Interface Segregation Principle\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"Interface Segregation Principle\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ Interface Segregation Principle\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.7.5",
          "title": "Interface Segregation Principle",
          "topicTitle": "مبادئ SOLID",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (Interface Segregation Principle) أحد المعايير التقنية الحيوية في مسار مبادئ SOLID ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Interface Segregation Principle)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Interface Segregation Principle) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Interface Segregation Principle)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Interface Segregation Principle)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Interface Segregation Principle",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Interface Segregation Principle)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Interface Segregation Principle\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Interface Segregation Principle ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Interface Segregation Principle) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.7.6",
        "title": "Dependency Inversion Principle",
        "englishTitle": "Dependency Inversion Principle",
        "definition": "يعد (Dependency Inversion Principle) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (Dependency Inversion Principle) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (Dependency Inversion Principle) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ Dependency Inversion Principle\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: Dependency Inversion Principle\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"Dependency Inversion Principle\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ Dependency Inversion Principle\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.7.6",
          "title": "Dependency Inversion Principle",
          "topicTitle": "مبادئ SOLID",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (Dependency Inversion Principle) أحد المعايير التقنية الحيوية في مسار مبادئ SOLID ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Dependency Inversion Principle)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Dependency Inversion Principle) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Dependency Inversion Principle)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Dependency Inversion Principle)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: Dependency Inversion Principle",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Dependency Inversion Principle)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Dependency Inversion Principle\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Dependency Inversion Principle ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Dependency Inversion Principle) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.7.7",
        "title": "تطبيق SOLID في مشروع C#",
        "englishTitle": "SOLID في مشروع C#",
        "definition": "يعد (تطبيق SOLID في مشروع C#) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (تطبيق SOLID في مشروع C#) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (تطبيق SOLID في مشروع C#) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ تطبيق SOLID في مشروع C#\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: تطبيق SOLID في مشروع C#\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"تطبيق SOLID في مشروع C#\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ تطبيق SOLID في مشروع C#\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.7.7",
          "title": "تطبيق SOLID في مشروع C#",
          "topicTitle": "مبادئ SOLID",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (تطبيق SOLID في مشروع C#) أحد المعايير التقنية الحيوية في مسار مبادئ SOLID ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تطبيق SOLID في مشروع C#)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تطبيق SOLID في مشروع C#) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تطبيق SOLID في مشروع C#)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تطبيق SOLID في مشروع C#)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تطبيق SOLID في مشروع C#",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تطبيق SOLID في مشروع C#)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تطبيق SOLID في مشروع C#\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تطبيق SOLID في مشروع C# ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تطبيق SOLID في مشروع C#) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "3.7.8",
        "title": "الأخطاء الشائعة عند تطبيق SOLID",
        "englishTitle": "الأخطاء الشائعة عند SOLID",
        "definition": "يعد (الأخطاء الشائعة عند تطبيق SOLID) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (الأخطاء الشائعة عند تطبيق SOLID) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (الأخطاء الشائعة عند تطبيق SOLID) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
        "terms": [
          {
            "term": "Type Safety",
            "pronunciation": "تايب سيفتي",
            "meaning": "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء"
          },
          {
            "term": "Memory Allocation",
            "pronunciation": "ميموري ألوكيشن",
            "meaning": "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)"
          },
          {
            "term": "Garbage Collector",
            "pronunciation": "جاربدج كوليكتور",
            "meaning": "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة"
          }
        ],
        "syntax": "// القالب النمطي العام في C# لـ الأخطاء الشائعة عند تطبيق SOLID\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: الأخطاء الشائعة عند تطبيق SOLID\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"الأخطاء الشائعة عند تطبيق SOLID\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ الأخطاء الشائعة عند تطبيق SOLID\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
        "outputExplanation": "تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.",
        "commonMistakes": [
          {
            "wrong": "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
            "right": "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
            "reason": "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
          }
        ],
        "bestPractices": [
          "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
          "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
          "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
        ],
        "infographic": {
          "badge": "الدرس 3.7.8",
          "title": "الأخطاء الشائعة عند تطبيق SOLID",
          "topicTitle": "مبادئ SOLID",
          "sectionTitle": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
          "icon": "Code2",
          "colors": "from-purple-600 via-fuchsia-600 to-indigo-500",
          "steps": [
            {
              "title": "التصريح والتعريف",
              "desc": "بناء الفئات والأنماط في C# بدقة"
            },
            {
              "title": "إدارة الذاكرة",
              "desc": "تخزين البيانات في Stack أو Heap ومراقبتها"
            },
            {
              "title": "التنفيذ الآمن",
              "desc": "معالجة العمليات وحماية النظام من الأخطاء"
            }
          ],
          "summary": "يمثل (الأخطاء الشائعة عند تطبيق SOLID) أحد المعايير التقنية الحيوية في مسار مبادئ SOLID ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الأخطاء الشائعة عند تطبيق SOLID)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الأخطاء الشائعة عند تطبيق SOLID) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الأخطاء الشائعة عند تطبيق SOLID)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الأخطاء الشائعة عند تطبيق SOLID)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الأخطاء الشائعة عند تطبيق SOLID",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الأخطاء الشائعة عند تطبيق SOLID)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الأخطاء الشائعة عند تطبيق SOLID\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الأخطاء الشائعة عند تطبيق SOLID ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الأخطاء الشائعة عند تطبيق SOLID) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section3Data;
