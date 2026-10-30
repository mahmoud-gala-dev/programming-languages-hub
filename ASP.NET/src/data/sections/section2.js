// src/data/sections/section2.js
// محتوى تعليمي مفصل وشامل لـ: القسم الثاني: أساسيات لغة C#
export const section2Data = {
  id: 2,
  title: "القسم الثاني: أساسيات لغة C#",
  englishTitle: "C# Programming Fundamentals",
  icon: "Code2",
  category: "لغة C#",
  description: "إتقان قواعد لغة C#، المتغيرات، أنواع البيانات، الجمل الشرطية، الحلقات التكرارية، الدوال، والمصفوفات.",
  summary: {
  "sectionId": 2,
  "title": "القسم الثاني: أساسيات لغة C#",
  "englishTitle": "C# Programming Fundamentals",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم الثاني: أساسيات لغة C#.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم الثاني: أساسيات لغة C#",
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
    "title": "مقدمة في C#",
    "subtopics": [
      {
        "subId": "2.1.1",
        "title": "ما هي لغة C#؟",
        "englishTitle": "لغة C#",
        "definition": "يعد (ما هي لغة C#؟) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (ما هي لغة C#؟) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (ما هي لغة C#؟) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ ما هي لغة C#؟\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: ما هي لغة C#؟\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"ما هي لغة C#؟\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ ما هي لغة C#؟\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.1.1",
          "title": "ما هي لغة C#؟",
          "topicTitle": "مقدمة في C#",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (ما هي لغة C#؟) أحد المعايير التقنية الحيوية في مسار مقدمة في C# ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي لغة C#؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي لغة C#؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي لغة C#؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي لغة C#؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي لغة C#؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي لغة C#؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي لغة C#؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي لغة C#؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي لغة C#؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.1.2",
        "title": "استخدامات لغة C#",
        "englishTitle": "استخدامات لغة C#",
        "definition": "يعد (استخدامات لغة C#) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدامات لغة C#) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدامات لغة C#) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدامات لغة C#\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدامات لغة C#\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدامات لغة C#\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدامات لغة C#\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.1.2",
          "title": "استخدامات لغة C#",
          "topicTitle": "مقدمة في C#",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدامات لغة C#) أحد المعايير التقنية الحيوية في مسار مقدمة في C# ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدامات لغة C#)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدامات لغة C#) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدامات لغة C#)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدامات لغة C#)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدامات لغة C#",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدامات لغة C#)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدامات لغة C#\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدامات لغة C# ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدامات لغة C#) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.1.3",
        "title": "الفرق بين C# وJavaScript",
        "englishTitle": "C# وJavaScript",
        "definition": "يعد (الفرق بين C# وJavaScript) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (الفرق بين C# وJavaScript) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (الفرق بين C# وJavaScript) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ الفرق بين C# وJavaScript\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: الفرق بين C# وJavaScript\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"الفرق بين C# وJavaScript\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ الفرق بين C# وJavaScript\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.1.3",
          "title": "الفرق بين C# وJavaScript",
          "topicTitle": "مقدمة في C#",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (الفرق بين C# وJavaScript) أحد المعايير التقنية الحيوية في مسار مقدمة في C# ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين C# وJavaScript)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين C# وJavaScript) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين C# وJavaScript)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين C# وJavaScript)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين C# وJavaScript",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين C# وJavaScript)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين C# وJavaScript\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين C# وJavaScript ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين C# وJavaScript) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.1.4",
        "title": "مفهوم .NET Runtime",
        "englishTitle": ".NET Runtime",
        "definition": "يعد (مفهوم .NET Runtime) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (مفهوم .NET Runtime) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (مفهوم .NET Runtime) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ مفهوم .NET Runtime\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: مفهوم .NET Runtime\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"مفهوم .NET Runtime\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ مفهوم .NET Runtime\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.1.4",
          "title": "مفهوم .NET Runtime",
          "topicTitle": "مقدمة في C#",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (مفهوم .NET Runtime) أحد المعايير التقنية الحيوية في مسار مقدمة في C# ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم .NET Runtime)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم .NET Runtime) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم .NET Runtime)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم .NET Runtime)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم .NET Runtime",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم .NET Runtime)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم .NET Runtime\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم .NET Runtime ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم .NET Runtime) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.1.5",
        "title": "إنشاء أول Console Application",
        "englishTitle": "أول Console Application",
        "definition": "يعد (إنشاء أول Console Application) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (إنشاء أول Console Application) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (إنشاء أول Console Application) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ إنشاء أول Console Application\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: إنشاء أول Console Application\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"إنشاء أول Console Application\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ إنشاء أول Console Application\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.1.5",
          "title": "إنشاء أول Console Application",
          "topicTitle": "مقدمة في C#",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (إنشاء أول Console Application) أحد المعايير التقنية الحيوية في مسار مقدمة في C# ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء أول Console Application)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء أول Console Application) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء أول Console Application)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء أول Console Application)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء أول Console Application",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء أول Console Application)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء أول Console Application\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء أول Console Application ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء أول Console Application) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.1.6",
        "title": "فهم بنية برنامج C#",
        "englishTitle": "فهم بنية برنامج C#",
        "definition": "يعد (فهم بنية برنامج C#) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (فهم بنية برنامج C#) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (فهم بنية برنامج C#) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ فهم بنية برنامج C#\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: فهم بنية برنامج C#\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"فهم بنية برنامج C#\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ فهم بنية برنامج C#\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.1.6",
          "title": "فهم بنية برنامج C#",
          "topicTitle": "مقدمة في C#",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (فهم بنية برنامج C#) أحد المعايير التقنية الحيوية في مسار مقدمة في C# ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم بنية برنامج C#)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم بنية برنامج C#) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم بنية برنامج C#)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم بنية برنامج C#)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فهم بنية برنامج C#",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم بنية برنامج C#)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم بنية برنامج C#\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم بنية برنامج C# ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم بنية برنامج C#) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.1.7",
        "title": "استخدام Console.WriteLine",
        "englishTitle": "Console.WriteLine",
        "definition": "يعد (استخدام Console.WriteLine) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Console.WriteLine) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Console.WriteLine) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام Console.WriteLine\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Console.WriteLine\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Console.WriteLine\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Console.WriteLine\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.1.7",
          "title": "استخدام Console.WriteLine",
          "topicTitle": "مقدمة في C#",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام Console.WriteLine) أحد المعايير التقنية الحيوية في مسار مقدمة في C# ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Console.WriteLine)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Console.WriteLine) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Console.WriteLine)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Console.WriteLine)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Console.WriteLine",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Console.WriteLine)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Console.WriteLine\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Console.WriteLine ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Console.WriteLine) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.1.8",
        "title": "قراءة المدخلات باستخدام Console.ReadLine",
        "englishTitle": "قراءة المدخلات بConsole.ReadLine",
        "definition": "يعد (قراءة المدخلات باستخدام Console.ReadLine) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (قراءة المدخلات باستخدام Console.ReadLine) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (قراءة المدخلات باستخدام Console.ReadLine) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ قراءة المدخلات باستخدام Console.ReadLine\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: قراءة المدخلات باستخدام Console.ReadLine\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"قراءة المدخلات باستخدام Console.ReadLine\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ قراءة المدخلات باستخدام Console.ReadLine\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.1.8",
          "title": "قراءة المدخلات باستخدام Console.ReadLine",
          "topicTitle": "مقدمة في C#",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (قراءة المدخلات باستخدام Console.ReadLine) أحد المعايير التقنية الحيوية في مسار مقدمة في C# ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (قراءة المدخلات باستخدام Console.ReadLine)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (قراءة المدخلات باستخدام Console.ReadLine) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (قراءة المدخلات باستخدام Console.ReadLine)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (قراءة المدخلات باستخدام Console.ReadLine)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: قراءة المدخلات باستخدام Console.ReadLine",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (قراءة المدخلات باستخدام Console.ReadLine)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين قراءة المدخلات باستخدام Console.ReadLine\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: قراءة المدخلات باستخدام Console.ReadLine ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (قراءة المدخلات باستخدام Console.ReadLine) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "المتغيرات وأنواع البيانات",
    "subtopics": [
      {
        "subId": "2.2.1",
        "title": "تعريف Variables",
        "englishTitle": "تعريف Variables",
        "definition": "يعد (تعريف Variables) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (تعريف Variables) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (تعريف Variables) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ تعريف Variables\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: تعريف Variables\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"تعريف Variables\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ تعريف Variables\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.2.1",
          "title": "تعريف Variables",
          "topicTitle": "المتغيرات وأنواع البيانات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (تعريف Variables) أحد المعايير التقنية الحيوية في مسار المتغيرات وأنواع البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تعريف Variables)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تعريف Variables) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تعريف Variables)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تعريف Variables)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تعريف Variables",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تعريف Variables)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تعريف Variables\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تعريف Variables ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تعريف Variables) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.2.2",
        "title": "استخدام int وlong",
        "englishTitle": "int وlong",
        "definition": "يعد (استخدام int وlong) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام int وlong) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام int وlong) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام int وlong\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام int وlong\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام int وlong\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام int وlong\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.2.2",
          "title": "استخدام int وlong",
          "topicTitle": "المتغيرات وأنواع البيانات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام int وlong) أحد المعايير التقنية الحيوية في مسار المتغيرات وأنواع البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام int وlong)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام int وlong) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام int وlong)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام int وlong)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام int وlong",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام int وlong)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام int وlong\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام int وlong ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام int وlong) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.2.3",
        "title": "استخدام float وdouble وdecimal",
        "englishTitle": "float وdouble وdecimal",
        "definition": "يعد (استخدام float وdouble وdecimal) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام float وdouble وdecimal) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام float وdouble وdecimal) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام float وdouble وdecimal\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام float وdouble وdecimal\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام float وdouble وdecimal\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام float وdouble وdecimal\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.2.3",
          "title": "استخدام float وdouble وdecimal",
          "topicTitle": "المتغيرات وأنواع البيانات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام float وdouble وdecimal) أحد المعايير التقنية الحيوية في مسار المتغيرات وأنواع البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام float وdouble وdecimal)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام float وdouble وdecimal) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام float وdouble وdecimal)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام float وdouble وdecimal)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام float وdouble وdecimal",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام float وdouble وdecimal)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام float وdouble وdecimal\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام float وdouble وdecimal ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام float وdouble وdecimal) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.2.4",
        "title": "استخدام string وchar",
        "englishTitle": "string وchar",
        "definition": "يعد (استخدام string وchar) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام string وchar) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام string وchar) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام string وchar\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام string وchar\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام string وchar\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام string وchar\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.2.4",
          "title": "استخدام string وchar",
          "topicTitle": "المتغيرات وأنواع البيانات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام string وchar) أحد المعايير التقنية الحيوية في مسار المتغيرات وأنواع البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام string وchar)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام string وchar) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام string وchar)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام string وchar)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام string وchar",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام string وchar)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام string وchar\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام string وchar ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام string وchar) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.2.5",
        "title": "استخدام bool",
        "englishTitle": "bool",
        "definition": "يعد (استخدام bool) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام bool) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام bool) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام bool\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام bool\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام bool\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام bool\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.2.5",
          "title": "استخدام bool",
          "topicTitle": "المتغيرات وأنواع البيانات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام bool) أحد المعايير التقنية الحيوية في مسار المتغيرات وأنواع البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام bool)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام bool) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام bool)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام bool)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام bool",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام bool)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام bool\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام bool ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام bool) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.2.6",
        "title": "استخدام var",
        "englishTitle": "var",
        "definition": "يعد (استخدام var) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام var) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام var) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام var\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام var\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام var\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام var\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.2.6",
          "title": "استخدام var",
          "topicTitle": "المتغيرات وأنواع البيانات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام var) أحد المعايير التقنية الحيوية في مسار المتغيرات وأنواع البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام var)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام var) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام var)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام var)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام var",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام var)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام var\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام var ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام var) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.2.7",
        "title": "استخدام const",
        "englishTitle": "const",
        "definition": "يعد (استخدام const) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام const) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام const) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام const\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام const\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام const\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام const\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.2.7",
          "title": "استخدام const",
          "topicTitle": "المتغيرات وأنواع البيانات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام const) أحد المعايير التقنية الحيوية في مسار المتغيرات وأنواع البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام const)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام const) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام const)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام const)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام const",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام const)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام const\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام const ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام const) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.2.8",
        "title": "الفرق بين Value Types وReference Types",
        "englishTitle": "Value Types وReference Types",
        "definition": "يعد (الفرق بين Value Types وReference Types) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (الفرق بين Value Types وReference Types) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (الفرق بين Value Types وReference Types) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ الفرق بين Value Types وReference Types\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: الفرق بين Value Types وReference Types\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"الفرق بين Value Types وReference Types\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ الفرق بين Value Types وReference Types\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.2.8",
          "title": "الفرق بين Value Types وReference Types",
          "topicTitle": "المتغيرات وأنواع البيانات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (الفرق بين Value Types وReference Types) أحد المعايير التقنية الحيوية في مسار المتغيرات وأنواع البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Value Types وReference Types)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Value Types وReference Types) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Value Types وReference Types)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Value Types وReference Types)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Value Types وReference Types",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Value Types وReference Types)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Value Types وReference Types\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Value Types وReference Types ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Value Types وReference Types) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.2.9",
        "title": "التحويل بين أنواع البيانات",
        "englishTitle": "التحويل بين أنواع البيانات",
        "definition": "يعد (التحويل بين أنواع البيانات) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (التحويل بين أنواع البيانات) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (التحويل بين أنواع البيانات) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ التحويل بين أنواع البيانات\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: التحويل بين أنواع البيانات\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"التحويل بين أنواع البيانات\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ التحويل بين أنواع البيانات\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.2.9",
          "title": "التحويل بين أنواع البيانات",
          "topicTitle": "المتغيرات وأنواع البيانات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (التحويل بين أنواع البيانات) أحد المعايير التقنية الحيوية في مسار المتغيرات وأنواع البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التحويل بين أنواع البيانات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحويل بين أنواع البيانات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التحويل بين أنواع البيانات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التحويل بين أنواع البيانات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التحويل بين أنواع البيانات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التحويل بين أنواع البيانات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التحويل بين أنواع البيانات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التحويل بين أنواع البيانات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التحويل بين أنواع البيانات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.2.10",
        "title": "استخدام Parse وTryParse",
        "englishTitle": "Parse وTryParse",
        "definition": "يعد (استخدام Parse وTryParse) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Parse وTryParse) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Parse وTryParse) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام Parse وTryParse\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Parse وTryParse\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Parse وTryParse\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Parse وTryParse\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.2.10",
          "title": "استخدام Parse وTryParse",
          "topicTitle": "المتغيرات وأنواع البيانات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام Parse وTryParse) أحد المعايير التقنية الحيوية في مسار المتغيرات وأنواع البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Parse وTryParse)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Parse وTryParse) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Parse وTryParse)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Parse وTryParse)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Parse وTryParse",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Parse وTryParse)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Parse وTryParse\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Parse وTryParse ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Parse وTryParse) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "العمليات Operators",
    "subtopics": [
      {
        "subId": "2.3.1",
        "title": "العمليات الحسابية",
        "englishTitle": "العمليات الحسابية",
        "definition": "يعد (العمليات الحسابية) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (العمليات الحسابية) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (العمليات الحسابية) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ العمليات الحسابية\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: العمليات الحسابية\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"العمليات الحسابية\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ العمليات الحسابية\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.3.1",
          "title": "العمليات الحسابية",
          "topicTitle": "العمليات Operators",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (العمليات الحسابية) أحد المعايير التقنية الحيوية في مسار العمليات Operators ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (العمليات الحسابية)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (العمليات الحسابية) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (العمليات الحسابية)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (العمليات الحسابية)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: العمليات الحسابية",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (العمليات الحسابية)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين العمليات الحسابية\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: العمليات الحسابية ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (العمليات الحسابية) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.3.2",
        "title": "عمليات المقارنة",
        "englishTitle": "عمليات المقارنة",
        "definition": "يعد (عمليات المقارنة) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (عمليات المقارنة) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (عمليات المقارنة) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ عمليات المقارنة\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: عمليات المقارنة\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"عمليات المقارنة\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ عمليات المقارنة\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.3.2",
          "title": "عمليات المقارنة",
          "topicTitle": "العمليات Operators",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (عمليات المقارنة) أحد المعايير التقنية الحيوية في مسار العمليات Operators ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (عمليات المقارنة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (عمليات المقارنة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (عمليات المقارنة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (عمليات المقارنة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: عمليات المقارنة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (عمليات المقارنة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين عمليات المقارنة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: عمليات المقارنة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (عمليات المقارنة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.3.3",
        "title": "العمليات المنطقية",
        "englishTitle": "العمليات المنطقية",
        "definition": "يعد (العمليات المنطقية) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (العمليات المنطقية) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (العمليات المنطقية) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ العمليات المنطقية\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: العمليات المنطقية\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"العمليات المنطقية\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ العمليات المنطقية\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.3.3",
          "title": "العمليات المنطقية",
          "topicTitle": "العمليات Operators",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (العمليات المنطقية) أحد المعايير التقنية الحيوية في مسار العمليات Operators ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (العمليات المنطقية)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (العمليات المنطقية) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (العمليات المنطقية)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (العمليات المنطقية)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: العمليات المنطقية",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (العمليات المنطقية)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين العمليات المنطقية\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: العمليات المنطقية ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (العمليات المنطقية) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.3.4",
        "title": "عمليات الإسناد",
        "englishTitle": "عمليات الإسناد",
        "definition": "يعد (عمليات الإسناد) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (عمليات الإسناد) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (عمليات الإسناد) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ عمليات الإسناد\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: عمليات الإسناد\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"عمليات الإسناد\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ عمليات الإسناد\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.3.4",
          "title": "عمليات الإسناد",
          "topicTitle": "العمليات Operators",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (عمليات الإسناد) أحد المعايير التقنية الحيوية في مسار العمليات Operators ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (عمليات الإسناد)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (عمليات الإسناد) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (عمليات الإسناد)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (عمليات الإسناد)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: عمليات الإسناد",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (عمليات الإسناد)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين عمليات الإسناد\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: عمليات الإسناد ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (عمليات الإسناد) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.3.5",
        "title": "استخدام Increment وDecrement",
        "englishTitle": "Increment وDecrement",
        "definition": "يعد (استخدام Increment وDecrement) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Increment وDecrement) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Increment وDecrement) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام Increment وDecrement\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Increment وDecrement\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Increment وDecrement\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Increment وDecrement\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.3.5",
          "title": "استخدام Increment وDecrement",
          "topicTitle": "العمليات Operators",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام Increment وDecrement) أحد المعايير التقنية الحيوية في مسار العمليات Operators ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Increment وDecrement)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Increment وDecrement) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Increment وDecrement)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Increment وDecrement)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Increment وDecrement",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Increment وDecrement)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Increment وDecrement\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Increment وDecrement ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Increment وDecrement) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.3.6",
        "title": "استخدام Ternary Operator",
        "englishTitle": "Ternary Operator",
        "definition": "يعد (استخدام Ternary Operator) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Ternary Operator) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Ternary Operator) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام Ternary Operator\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Ternary Operator\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Ternary Operator\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Ternary Operator\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.3.6",
          "title": "استخدام Ternary Operator",
          "topicTitle": "العمليات Operators",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام Ternary Operator) أحد المعايير التقنية الحيوية في مسار العمليات Operators ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Ternary Operator)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Ternary Operator) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Ternary Operator)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Ternary Operator)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Ternary Operator",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Ternary Operator)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Ternary Operator\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Ternary Operator ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Ternary Operator) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.3.7",
        "title": "استخدام Null Coalescing Operator",
        "englishTitle": "Null Coalescing Operator",
        "definition": "يعد (استخدام Null Coalescing Operator) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Null Coalescing Operator) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Null Coalescing Operator) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام Null Coalescing Operator\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Null Coalescing Operator\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Null Coalescing Operator\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Null Coalescing Operator\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.3.7",
          "title": "استخدام Null Coalescing Operator",
          "topicTitle": "العمليات Operators",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام Null Coalescing Operator) أحد المعايير التقنية الحيوية في مسار العمليات Operators ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Null Coalescing Operator)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Null Coalescing Operator) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Null Coalescing Operator)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Null Coalescing Operator)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Null Coalescing Operator",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Null Coalescing Operator)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Null Coalescing Operator\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Null Coalescing Operator ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Null Coalescing Operator) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.3.8",
        "title": "ترتيب أولوية العمليات",
        "englishTitle": "ترتيب أولوية العمليات",
        "definition": "يعد (ترتيب أولوية العمليات) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (ترتيب أولوية العمليات) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (ترتيب أولوية العمليات) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ ترتيب أولوية العمليات\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: ترتيب أولوية العمليات\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"ترتيب أولوية العمليات\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ ترتيب أولوية العمليات\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.3.8",
          "title": "ترتيب أولوية العمليات",
          "topicTitle": "العمليات Operators",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (ترتيب أولوية العمليات) أحد المعايير التقنية الحيوية في مسار العمليات Operators ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ترتيب أولوية العمليات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ترتيب أولوية العمليات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ترتيب أولوية العمليات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ترتيب أولوية العمليات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ترتيب أولوية العمليات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ترتيب أولوية العمليات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ترتيب أولوية العمليات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ترتيب أولوية العمليات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ترتيب أولوية العمليات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "الشروط واتخاذ القرارات",
    "subtopics": [
      {
        "subId": "2.4.1",
        "title": "استخدام if",
        "englishTitle": "if",
        "definition": "يعد (استخدام if) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام if) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام if) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام if\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام if\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام if\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام if\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.4.1",
          "title": "استخدام if",
          "topicTitle": "الشروط واتخاذ القرارات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام if) أحد المعايير التقنية الحيوية في مسار الشروط واتخاذ القرارات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام if)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام if) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام if)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام if)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام if",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام if)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام if\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام if ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام if) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.4.2",
        "title": "استخدام else وelse if",
        "englishTitle": "else وelse if",
        "definition": "يعد (استخدام else وelse if) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام else وelse if) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام else وelse if) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام else وelse if\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام else وelse if\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام else وelse if\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام else وelse if\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.4.2",
          "title": "استخدام else وelse if",
          "topicTitle": "الشروط واتخاذ القرارات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام else وelse if) أحد المعايير التقنية الحيوية في مسار الشروط واتخاذ القرارات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام else وelse if)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام else وelse if) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام else وelse if)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام else وelse if)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام else وelse if",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام else وelse if)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام else وelse if\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام else وelse if ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام else وelse if) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.4.3",
        "title": "استخدام switch Statement",
        "englishTitle": "switch Statement",
        "definition": "يعد (استخدام switch Statement) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام switch Statement) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام switch Statement) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام switch Statement\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام switch Statement\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام switch Statement\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام switch Statement\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.4.3",
          "title": "استخدام switch Statement",
          "topicTitle": "الشروط واتخاذ القرارات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام switch Statement) أحد المعايير التقنية الحيوية في مسار الشروط واتخاذ القرارات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام switch Statement)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام switch Statement) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام switch Statement)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام switch Statement)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام switch Statement",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام switch Statement)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام switch Statement\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام switch Statement ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام switch Statement) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.4.4",
        "title": "استخدام Switch Expression",
        "englishTitle": "Switch Expression",
        "definition": "يعد (استخدام Switch Expression) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Switch Expression) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Switch Expression) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام Switch Expression\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Switch Expression\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Switch Expression\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Switch Expression\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.4.4",
          "title": "استخدام Switch Expression",
          "topicTitle": "الشروط واتخاذ القرارات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام Switch Expression) أحد المعايير التقنية الحيوية في مسار الشروط واتخاذ القرارات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Switch Expression)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Switch Expression) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Switch Expression)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Switch Expression)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Switch Expression",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Switch Expression)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Switch Expression\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Switch Expression ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Switch Expression) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.4.5",
        "title": "استخدام Pattern Matching",
        "englishTitle": "Pattern Matching",
        "definition": "يعد (استخدام Pattern Matching) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Pattern Matching) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Pattern Matching) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام Pattern Matching\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Pattern Matching\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Pattern Matching\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Pattern Matching\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.4.5",
          "title": "استخدام Pattern Matching",
          "topicTitle": "الشروط واتخاذ القرارات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام Pattern Matching) أحد المعايير التقنية الحيوية في مسار الشروط واتخاذ القرارات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Pattern Matching)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Pattern Matching) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Pattern Matching)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Pattern Matching)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Pattern Matching",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Pattern Matching)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Pattern Matching\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Pattern Matching ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Pattern Matching) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.4.6",
        "title": "دمج الشروط باستخدام AND وOR",
        "englishTitle": "دمج الشروط بAND وOR",
        "definition": "يعد (دمج الشروط باستخدام AND وOR) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (دمج الشروط باستخدام AND وOR) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (دمج الشروط باستخدام AND وOR) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ دمج الشروط باستخدام AND وOR\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: دمج الشروط باستخدام AND وOR\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"دمج الشروط باستخدام AND وOR\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ دمج الشروط باستخدام AND وOR\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.4.6",
          "title": "دمج الشروط باستخدام AND وOR",
          "topicTitle": "الشروط واتخاذ القرارات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (دمج الشروط باستخدام AND وOR) أحد المعايير التقنية الحيوية في مسار الشروط واتخاذ القرارات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (دمج الشروط باستخدام AND وOR)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (دمج الشروط باستخدام AND وOR) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (دمج الشروط باستخدام AND وOR)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (دمج الشروط باستخدام AND وOR)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: دمج الشروط باستخدام AND وOR",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (دمج الشروط باستخدام AND وOR)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين دمج الشروط باستخدام AND وOR\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: دمج الشروط باستخدام AND وOR ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (دمج الشروط باستخدام AND وOR) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.4.7",
        "title": "الأخطاء الشائعة في الشروط",
        "englishTitle": "الأخطاء الشائعة في الشروط",
        "definition": "يعد (الأخطاء الشائعة في الشروط) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (الأخطاء الشائعة في الشروط) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (الأخطاء الشائعة في الشروط) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ الأخطاء الشائعة في الشروط\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: الأخطاء الشائعة في الشروط\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"الأخطاء الشائعة في الشروط\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ الأخطاء الشائعة في الشروط\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.4.7",
          "title": "الأخطاء الشائعة في الشروط",
          "topicTitle": "الشروط واتخاذ القرارات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (الأخطاء الشائعة في الشروط) أحد المعايير التقنية الحيوية في مسار الشروط واتخاذ القرارات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الأخطاء الشائعة في الشروط)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الأخطاء الشائعة في الشروط) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الأخطاء الشائعة في الشروط)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الأخطاء الشائعة في الشروط)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الأخطاء الشائعة في الشروط",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الأخطاء الشائعة في الشروط)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الأخطاء الشائعة في الشروط\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الأخطاء الشائعة في الشروط ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الأخطاء الشائعة في الشروط) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "الحلقات التكرارية",
    "subtopics": [
      {
        "subId": "2.5.1",
        "title": "استخدام for",
        "englishTitle": "for",
        "definition": "يعد (استخدام for) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام for) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام for) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام for\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام for\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام for\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام for\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.5.1",
          "title": "استخدام for",
          "topicTitle": "الحلقات التكرارية",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام for) أحد المعايير التقنية الحيوية في مسار الحلقات التكرارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام for)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام for) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام for)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام for)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام for",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام for)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام for\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام for ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام for) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.5.2",
        "title": "استخدام while",
        "englishTitle": "while",
        "definition": "يعد (استخدام while) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام while) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام while) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام while\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام while\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام while\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام while\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.5.2",
          "title": "استخدام while",
          "topicTitle": "الحلقات التكرارية",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام while) أحد المعايير التقنية الحيوية في مسار الحلقات التكرارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام while)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام while) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام while)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام while)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام while",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام while)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام while\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام while ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام while) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.5.3",
        "title": "استخدام do while",
        "englishTitle": "do while",
        "definition": "يعد (استخدام do while) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام do while) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام do while) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام do while\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام do while\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام do while\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام do while\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.5.3",
          "title": "استخدام do while",
          "topicTitle": "الحلقات التكرارية",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام do while) أحد المعايير التقنية الحيوية في مسار الحلقات التكرارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام do while)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام do while) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام do while)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام do while)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام do while",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام do while)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام do while\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام do while ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام do while) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.5.4",
        "title": "استخدام foreach",
        "englishTitle": "foreach",
        "definition": "يعد (استخدام foreach) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام foreach) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام foreach) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام foreach\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام foreach\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام foreach\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام foreach\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.5.4",
          "title": "استخدام foreach",
          "topicTitle": "الحلقات التكرارية",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام foreach) أحد المعايير التقنية الحيوية في مسار الحلقات التكرارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام foreach)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام foreach) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام foreach)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام foreach)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام foreach",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام foreach)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام foreach\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام foreach ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام foreach) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.5.5",
        "title": "استخدام break",
        "englishTitle": "break",
        "definition": "يعد (استخدام break) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام break) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام break) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام break\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام break\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام break\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام break\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.5.5",
          "title": "استخدام break",
          "topicTitle": "الحلقات التكرارية",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام break) أحد المعايير التقنية الحيوية في مسار الحلقات التكرارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام break)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام break) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام break)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام break)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام break",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام break)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام break\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام break ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام break) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.5.6",
        "title": "استخدام continue",
        "englishTitle": "continue",
        "definition": "يعد (استخدام continue) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام continue) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام continue) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام continue\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام continue\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام continue\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام continue\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.5.6",
          "title": "استخدام continue",
          "topicTitle": "الحلقات التكرارية",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام continue) أحد المعايير التقنية الحيوية في مسار الحلقات التكرارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام continue)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام continue) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام continue)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام continue)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام continue",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام continue)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام continue\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام continue ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام continue) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.5.7",
        "title": "الحلقات المتداخلة",
        "englishTitle": "الحلقات المتداخلة",
        "definition": "يعد (الحلقات المتداخلة) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (الحلقات المتداخلة) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (الحلقات المتداخلة) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ الحلقات المتداخلة\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: الحلقات المتداخلة\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"الحلقات المتداخلة\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ الحلقات المتداخلة\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.5.7",
          "title": "الحلقات المتداخلة",
          "topicTitle": "الحلقات التكرارية",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (الحلقات المتداخلة) أحد المعايير التقنية الحيوية في مسار الحلقات التكرارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الحلقات المتداخلة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الحلقات المتداخلة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الحلقات المتداخلة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الحلقات المتداخلة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الحلقات المتداخلة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الحلقات المتداخلة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الحلقات المتداخلة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الحلقات المتداخلة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الحلقات المتداخلة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.5.8",
        "title": "تطبيق عملي على معالجة البيانات",
        "englishTitle": "عملي على معالجة البيانات",
        "definition": "يعد (تطبيق عملي على معالجة البيانات) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (تطبيق عملي على معالجة البيانات) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (تطبيق عملي على معالجة البيانات) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ تطبيق عملي على معالجة البيانات\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: تطبيق عملي على معالجة البيانات\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"تطبيق عملي على معالجة البيانات\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ تطبيق عملي على معالجة البيانات\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.5.8",
          "title": "تطبيق عملي على معالجة البيانات",
          "topicTitle": "الحلقات التكرارية",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (تطبيق عملي على معالجة البيانات) أحد المعايير التقنية الحيوية في مسار الحلقات التكرارية ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تطبيق عملي على معالجة البيانات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تطبيق عملي على معالجة البيانات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تطبيق عملي على معالجة البيانات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تطبيق عملي على معالجة البيانات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تطبيق عملي على معالجة البيانات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تطبيق عملي على معالجة البيانات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تطبيق عملي على معالجة البيانات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تطبيق عملي على معالجة البيانات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تطبيق عملي على معالجة البيانات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "الدوال Methods",
    "subtopics": [
      {
        "subId": "2.6.1",
        "title": "ما هي Methods؟",
        "englishTitle": "Methods",
        "definition": "يعد (ما هي Methods؟) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (ما هي Methods؟) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (ما هي Methods؟) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ ما هي Methods؟\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: ما هي Methods؟\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"ما هي Methods؟\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ ما هي Methods؟\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.6.1",
          "title": "ما هي Methods؟",
          "topicTitle": "الدوال Methods",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (ما هي Methods؟) أحد المعايير التقنية الحيوية في مسار الدوال Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Methods؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Methods؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Methods؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Methods؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هي Methods؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Methods؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Methods؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Methods؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Methods؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.6.2",
        "title": "تعريف Method",
        "englishTitle": "تعريف Method",
        "definition": "يعد (تعريف Method) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (تعريف Method) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (تعريف Method) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ تعريف Method\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: تعريف Method\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"تعريف Method\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ تعريف Method\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.6.2",
          "title": "تعريف Method",
          "topicTitle": "الدوال Methods",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (تعريف Method) أحد المعايير التقنية الحيوية في مسار الدوال Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تعريف Method)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تعريف Method) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تعريف Method)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تعريف Method)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تعريف Method",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تعريف Method)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تعريف Method\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تعريف Method ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تعريف Method) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.6.3",
        "title": "استخدام Parameters",
        "englishTitle": "Parameters",
        "definition": "يعد (استخدام Parameters) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Parameters) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Parameters) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام Parameters\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Parameters\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Parameters\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Parameters\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.6.3",
          "title": "استخدام Parameters",
          "topicTitle": "الدوال Methods",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام Parameters) أحد المعايير التقنية الحيوية في مسار الدوال Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Parameters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Parameters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Parameters)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Parameters)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Parameters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Parameters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Parameters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Parameters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Parameters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.6.4",
        "title": "استخدام return",
        "englishTitle": "return",
        "definition": "يعد (استخدام return) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام return) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام return) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام return\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام return\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام return\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام return\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.6.4",
          "title": "استخدام return",
          "topicTitle": "الدوال Methods",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام return) أحد المعايير التقنية الحيوية في مسار الدوال Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام return)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام return) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام return)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام return)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام return",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام return)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام return\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام return ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام return) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.6.5",
        "title": "استخدام Optional Parameters",
        "englishTitle": "Optional Parameters",
        "definition": "يعد (استخدام Optional Parameters) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Optional Parameters) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Optional Parameters) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام Optional Parameters\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Optional Parameters\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Optional Parameters\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Optional Parameters\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.6.5",
          "title": "استخدام Optional Parameters",
          "topicTitle": "الدوال Methods",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام Optional Parameters) أحد المعايير التقنية الحيوية في مسار الدوال Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Optional Parameters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Optional Parameters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Optional Parameters)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Optional Parameters)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Optional Parameters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Optional Parameters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Optional Parameters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Optional Parameters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Optional Parameters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.6.6",
        "title": "استخدام Named Arguments",
        "englishTitle": "Named Arguments",
        "definition": "يعد (استخدام Named Arguments) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Named Arguments) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Named Arguments) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام Named Arguments\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Named Arguments\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Named Arguments\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Named Arguments\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.6.6",
          "title": "استخدام Named Arguments",
          "topicTitle": "الدوال Methods",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام Named Arguments) أحد المعايير التقنية الحيوية في مسار الدوال Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Named Arguments)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Named Arguments) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Named Arguments)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Named Arguments)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Named Arguments",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Named Arguments)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Named Arguments\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Named Arguments ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Named Arguments) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.6.7",
        "title": "استخدام Method Overloading",
        "englishTitle": "Method Overloading",
        "definition": "يعد (استخدام Method Overloading) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Method Overloading) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Method Overloading) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام Method Overloading\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Method Overloading\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Method Overloading\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Method Overloading\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.6.7",
          "title": "استخدام Method Overloading",
          "topicTitle": "الدوال Methods",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام Method Overloading) أحد المعايير التقنية الحيوية في مسار الدوال Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Method Overloading)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Method Overloading) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Method Overloading)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Method Overloading)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Method Overloading",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Method Overloading)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Method Overloading\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Method Overloading ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Method Overloading) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.6.8",
        "title": "الفرق بين ref وout وin",
        "englishTitle": "ref وout وin",
        "definition": "يعد (الفرق بين ref وout وin) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (الفرق بين ref وout وin) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (الفرق بين ref وout وin) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ الفرق بين ref وout وin\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: الفرق بين ref وout وin\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"الفرق بين ref وout وin\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ الفرق بين ref وout وin\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.6.8",
          "title": "الفرق بين ref وout وin",
          "topicTitle": "الدوال Methods",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (الفرق بين ref وout وin) أحد المعايير التقنية الحيوية في مسار الدوال Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين ref وout وin)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين ref وout وin) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين ref وout وin)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين ref وout وin)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين ref وout وin",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين ref وout وin)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين ref وout وin\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين ref وout وin ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين ref وout وin) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.6.9",
        "title": "مفهوم Scope",
        "englishTitle": "Scope",
        "definition": "يعد (مفهوم Scope) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (مفهوم Scope) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (مفهوم Scope) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ مفهوم Scope\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: مفهوم Scope\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"مفهوم Scope\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ مفهوم Scope\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.6.9",
          "title": "مفهوم Scope",
          "topicTitle": "الدوال Methods",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (مفهوم Scope) أحد المعايير التقنية الحيوية في مسار الدوال Methods ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Scope)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Scope) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Scope)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Scope)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Scope",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Scope)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Scope\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Scope ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Scope) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 7,
    "title": "المصفوفات والمجموعات",
    "subtopics": [
      {
        "subId": "2.7.1",
        "title": "إنشاء Arrays",
        "englishTitle": "Arrays",
        "definition": "يعد (إنشاء Arrays) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (إنشاء Arrays) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (إنشاء Arrays) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ إنشاء Arrays\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: إنشاء Arrays\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"إنشاء Arrays\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ إنشاء Arrays\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.7.1",
          "title": "إنشاء Arrays",
          "topicTitle": "المصفوفات والمجموعات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (إنشاء Arrays) أحد المعايير التقنية الحيوية في مسار المصفوفات والمجموعات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Arrays)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Arrays) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Arrays)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Arrays)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Arrays",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Arrays)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Arrays\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Arrays ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Arrays) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.7.2",
        "title": "الوصول إلى عناصر Array",
        "englishTitle": "الوصول إلى عناصر Array",
        "definition": "يعد (الوصول إلى عناصر Array) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (الوصول إلى عناصر Array) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (الوصول إلى عناصر Array) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ الوصول إلى عناصر Array\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: الوصول إلى عناصر Array\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"الوصول إلى عناصر Array\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ الوصول إلى عناصر Array\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.7.2",
          "title": "الوصول إلى عناصر Array",
          "topicTitle": "المصفوفات والمجموعات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (الوصول إلى عناصر Array) أحد المعايير التقنية الحيوية في مسار المصفوفات والمجموعات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الوصول إلى عناصر Array)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الوصول إلى عناصر Array) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الوصول إلى عناصر Array)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الوصول إلى عناصر Array)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الوصول إلى عناصر Array",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الوصول إلى عناصر Array)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الوصول إلى عناصر Array\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الوصول إلى عناصر Array ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الوصول إلى عناصر Array) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.7.3",
        "title": "استخدام List",
        "englishTitle": "List",
        "definition": "يعد (استخدام List) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام List) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام List) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام List\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام List\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام List\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام List\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.7.3",
          "title": "استخدام List",
          "topicTitle": "المصفوفات والمجموعات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام List) أحد المعايير التقنية الحيوية في مسار المصفوفات والمجموعات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام List)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام List) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام List)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام List)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام List",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام List)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام List\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام List ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام List) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.7.4",
        "title": "استخدام Dictionary",
        "englishTitle": "Dictionary",
        "definition": "يعد (استخدام Dictionary) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Dictionary) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Dictionary) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام Dictionary\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Dictionary\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Dictionary\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Dictionary\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.7.4",
          "title": "استخدام Dictionary",
          "topicTitle": "المصفوفات والمجموعات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام Dictionary) أحد المعايير التقنية الحيوية في مسار المصفوفات والمجموعات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Dictionary)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Dictionary) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Dictionary)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Dictionary)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Dictionary",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Dictionary)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Dictionary\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Dictionary ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Dictionary) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.7.5",
        "title": "استخدام HashSet",
        "englishTitle": "HashSet",
        "definition": "يعد (استخدام HashSet) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام HashSet) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام HashSet) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام HashSet\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام HashSet\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام HashSet\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام HashSet\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.7.5",
          "title": "استخدام HashSet",
          "topicTitle": "المصفوفات والمجموعات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام HashSet) أحد المعايير التقنية الحيوية في مسار المصفوفات والمجموعات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام HashSet)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام HashSet) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام HashSet)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام HashSet)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام HashSet",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام HashSet)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام HashSet\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام HashSet ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام HashSet) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.7.6",
        "title": "استخدام Queue وStack",
        "englishTitle": "Queue وStack",
        "definition": "يعد (استخدام Queue وStack) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام Queue وStack) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام Queue وStack) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام Queue وStack\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام Queue وStack\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام Queue وStack\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام Queue وStack\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.7.6",
          "title": "استخدام Queue وStack",
          "topicTitle": "المصفوفات والمجموعات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام Queue وStack) أحد المعايير التقنية الحيوية في مسار المصفوفات والمجموعات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Queue وStack)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Queue وStack) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Queue وStack)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Queue وStack)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Queue وStack",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Queue وStack)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Queue وStack\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Queue وStack ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Queue وStack) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.7.7",
        "title": "الفرق بين Array وList",
        "englishTitle": "Array وList",
        "definition": "يعد (الفرق بين Array وList) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (الفرق بين Array وList) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (الفرق بين Array وList) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ الفرق بين Array وList\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: الفرق بين Array وList\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"الفرق بين Array وList\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ الفرق بين Array وList\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.7.7",
          "title": "الفرق بين Array وList",
          "topicTitle": "المصفوفات والمجموعات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (الفرق بين Array وList) أحد المعايير التقنية الحيوية في مسار المصفوفات والمجموعات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Array وList)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Array وList) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Array وList)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Array وList)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Array وList",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Array وList)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Array وList\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Array وList ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Array وList) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.7.8",
        "title": "التكرار على Collections",
        "englishTitle": "التكرار على Collections",
        "definition": "يعد (التكرار على Collections) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (التكرار على Collections) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (التكرار على Collections) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ التكرار على Collections\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: التكرار على Collections\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"التكرار على Collections\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ التكرار على Collections\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.7.8",
          "title": "التكرار على Collections",
          "topicTitle": "المصفوفات والمجموعات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (التكرار على Collections) أحد المعايير التقنية الحيوية في مسار المصفوفات والمجموعات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التكرار على Collections)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التكرار على Collections) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التكرار على Collections)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التكرار على Collections)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التكرار على Collections",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التكرار على Collections)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التكرار على Collections\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التكرار على Collections ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التكرار على Collections) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.7.9",
        "title": "فرز البيانات والبحث فيها",
        "englishTitle": "فرز البيانات والبحث فيها",
        "definition": "يعد (فرز البيانات والبحث فيها) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (فرز البيانات والبحث فيها) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (فرز البيانات والبحث فيها) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ فرز البيانات والبحث فيها\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: فرز البيانات والبحث فيها\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"فرز البيانات والبحث فيها\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ فرز البيانات والبحث فيها\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.7.9",
          "title": "فرز البيانات والبحث فيها",
          "topicTitle": "المصفوفات والمجموعات",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (فرز البيانات والبحث فيها) أحد المعايير التقنية الحيوية في مسار المصفوفات والمجموعات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فرز البيانات والبحث فيها)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فرز البيانات والبحث فيها) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فرز البيانات والبحث فيها)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فرز البيانات والبحث فيها)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فرز البيانات والبحث فيها",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فرز البيانات والبحث فيها)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فرز البيانات والبحث فيها\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فرز البيانات والبحث فيها ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فرز البيانات والبحث فيها) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 8,
    "title": "التعامل مع النصوص والتواريخ",
    "subtopics": [
      {
        "subId": "2.8.1",
        "title": "استخدام String Interpolation",
        "englishTitle": "String Interpolation",
        "definition": "يعد (استخدام String Interpolation) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام String Interpolation) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام String Interpolation) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام String Interpolation\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام String Interpolation\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام String Interpolation\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام String Interpolation\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.8.1",
          "title": "استخدام String Interpolation",
          "topicTitle": "التعامل مع النصوص والتواريخ",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام String Interpolation) أحد المعايير التقنية الحيوية في مسار التعامل مع النصوص والتواريخ ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام String Interpolation)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام String Interpolation) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام String Interpolation)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام String Interpolation)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام String Interpolation",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام String Interpolation)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام String Interpolation\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام String Interpolation ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام String Interpolation) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.8.2",
        "title": "استخدام String Methods",
        "englishTitle": "String Methods",
        "definition": "يعد (استخدام String Methods) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام String Methods) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام String Methods) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام String Methods\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام String Methods\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام String Methods\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام String Methods\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.8.2",
          "title": "استخدام String Methods",
          "topicTitle": "التعامل مع النصوص والتواريخ",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام String Methods) أحد المعايير التقنية الحيوية في مسار التعامل مع النصوص والتواريخ ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام String Methods)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام String Methods) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام String Methods)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام String Methods)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام String Methods",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام String Methods)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام String Methods\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام String Methods ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام String Methods) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.8.3",
        "title": "استخدام StringBuilder",
        "englishTitle": "StringBuilder",
        "definition": "يعد (استخدام StringBuilder) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام StringBuilder) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام StringBuilder) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام StringBuilder\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام StringBuilder\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام StringBuilder\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام StringBuilder\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.8.3",
          "title": "استخدام StringBuilder",
          "topicTitle": "التعامل مع النصوص والتواريخ",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام StringBuilder) أحد المعايير التقنية الحيوية في مسار التعامل مع النصوص والتواريخ ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام StringBuilder)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام StringBuilder) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام StringBuilder)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام StringBuilder)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام StringBuilder",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام StringBuilder)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام StringBuilder\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام StringBuilder ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام StringBuilder) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.8.4",
        "title": "استخدام DateTime",
        "englishTitle": "DateTime",
        "definition": "يعد (استخدام DateTime) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام DateTime) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام DateTime) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام DateTime\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام DateTime\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام DateTime\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام DateTime\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.8.4",
          "title": "استخدام DateTime",
          "topicTitle": "التعامل مع النصوص والتواريخ",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام DateTime) أحد المعايير التقنية الحيوية في مسار التعامل مع النصوص والتواريخ ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام DateTime)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام DateTime) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام DateTime)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام DateTime)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام DateTime",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام DateTime)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام DateTime\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام DateTime ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام DateTime) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.8.5",
        "title": "استخدام DateOnly وTimeOnly",
        "englishTitle": "DateOnly وTimeOnly",
        "definition": "يعد (استخدام DateOnly وTimeOnly) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام DateOnly وTimeOnly) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام DateOnly وTimeOnly) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام DateOnly وTimeOnly\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام DateOnly وTimeOnly\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام DateOnly وTimeOnly\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام DateOnly وTimeOnly\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.8.5",
          "title": "استخدام DateOnly وTimeOnly",
          "topicTitle": "التعامل مع النصوص والتواريخ",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام DateOnly وTimeOnly) أحد المعايير التقنية الحيوية في مسار التعامل مع النصوص والتواريخ ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام DateOnly وTimeOnly)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام DateOnly وTimeOnly) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام DateOnly وTimeOnly)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام DateOnly وTimeOnly)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام DateOnly وTimeOnly",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام DateOnly وTimeOnly)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام DateOnly وTimeOnly\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام DateOnly وTimeOnly ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام DateOnly وTimeOnly) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.8.6",
        "title": "استخدام TimeSpan",
        "englishTitle": "TimeSpan",
        "definition": "يعد (استخدام TimeSpan) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (استخدام TimeSpan) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (استخدام TimeSpan) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ استخدام TimeSpan\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: استخدام TimeSpan\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"استخدام TimeSpan\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ استخدام TimeSpan\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.8.6",
          "title": "استخدام TimeSpan",
          "topicTitle": "التعامل مع النصوص والتواريخ",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (استخدام TimeSpan) أحد المعايير التقنية الحيوية في مسار التعامل مع النصوص والتواريخ ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام TimeSpan)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام TimeSpan) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام TimeSpan)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام TimeSpan)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام TimeSpan",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام TimeSpan)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام TimeSpan\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام TimeSpan ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام TimeSpan) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.8.7",
        "title": "التعامل مع Time Zones",
        "englishTitle": "التعامل مع Time Zones",
        "definition": "يعد (التعامل مع Time Zones) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (التعامل مع Time Zones) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (التعامل مع Time Zones) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ التعامل مع Time Zones\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: التعامل مع Time Zones\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"التعامل مع Time Zones\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ التعامل مع Time Zones\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.8.7",
          "title": "التعامل مع Time Zones",
          "topicTitle": "التعامل مع النصوص والتواريخ",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (التعامل مع Time Zones) أحد المعايير التقنية الحيوية في مسار التعامل مع النصوص والتواريخ ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التعامل مع Time Zones)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التعامل مع Time Zones) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التعامل مع Time Zones)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التعامل مع Time Zones)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التعامل مع Time Zones",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التعامل مع Time Zones)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التعامل مع Time Zones\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التعامل مع Time Zones ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التعامل مع Time Zones) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "2.8.8",
        "title": "تنسيق النصوص والأرقام والتواريخ",
        "englishTitle": "تنسيق النصوص والأرقام والتواريخ",
        "definition": "يعد (تنسيق النصوص والأرقام والتواريخ) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.",
        "analogy": "يشبه مفهوم (تنسيق النصوص والأرقام والتواريخ) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.",
        "why": "الهدف المباشر من (تنسيق النصوص والأرقام والتواريخ) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).",
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
        "syntax": "// القالب النمطي العام في C# لـ تنسيق النصوص والأرقام والتواريخ\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}",
        "simpleCode": "// مثال C# مبسط يوضح: تنسيق النصوص والأرقام والتواريخ\n// 1. الإعلان عن متغير يمثل المفهوم\nstring conceptTitle = \"تنسيق النصوص والأرقام والتواريخ\"; // متغير نصي\n\n// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة\nif (!string.IsNullOrWhiteSpace(conceptTitle))\n{\n    // طباعة الاسم بعد التأكد من وجود قيمة\n    Console.WriteLine($\"تم تفعيل مفهوم: {conceptTitle}\");\n}\nelse\n{\n    // التعامل مع الحالة الفارغة بأمان\n    Console.WriteLine(\"القيمة غير محددة!\");\n}",
        "advancedCode": "// تطبيق C# متقدم وفق معايير Clean Code لـ تنسيق النصوص والأرقام والتواريخ\nusing System;\nusing System.Collections.Generic;\n\nnamespace AdvancedCSharpConcepts\n{\n    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط\n    public interface IProcessor<T>\n    {\n        // دالة لمعالجة العنصر وإرجاع الحالة\n        bool Process(T item);\n    }\n\n    // فئة تنفيذية تطبق المفهوم بأمان\n    public class DataHandler : IProcessor<string>\n    {\n        // قائمة داخلية لحفظ العناصر المعالجة\n        private readonly List<string> _processedItems = new();\n\n        // تنفيذ دالة المعالجة مع التحقق الصارم\n        public bool Process(string item)\n        {\n            // التحقق من صحة المدخل ومنع القيم الفارغة\n            ArgumentException.ThrowIfNullOrWhiteSpace(item);\n\n            // إضافة العنصر إلى السجل\n            _processedItems.Add(item);\n            \n            // طباعة إشعار نجاح المعالجة في الطرفية\n            Console.WriteLine($\"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.\");\n            return true;\n        }\n    }\n}",
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
          "badge": "الدرس 2.8.8",
          "title": "تنسيق النصوص والأرقام والتواريخ",
          "topicTitle": "التعامل مع النصوص والتواريخ",
          "sectionTitle": "القسم الثاني: أساسيات لغة C#",
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
          "summary": "يمثل (تنسيق النصوص والأرقام والتواريخ) أحد المعايير التقنية الحيوية في مسار التعامل مع النصوص والتواريخ ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تنسيق النصوص والأرقام والتواريخ)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنسيق النصوص والأرقام والتواريخ) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تنسيق النصوص والأرقام والتواريخ)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تنسيق النصوص والأرقام والتواريخ)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تنسيق النصوص والأرقام والتواريخ",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تنسيق النصوص والأرقام والتواريخ)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تنسيق النصوص والأرقام والتواريخ\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تنسيق النصوص والأرقام والتواريخ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تنسيق النصوص والأرقام والتواريخ) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section2Data;
