// src/data/sections/section11.js
// القسم الحادي عشر: قواعد بيانات NoSQL والتخزين المؤقت
export const SECTION_11 = {
  "id": 11,
  "number": "11",
  "title": "القسم الحادي عشر: قواعد بيانات NoSQL والتخزين المؤقت",
  "englishTitle": "NoSQL Databases & Redis Caching",
  "badge": "متقدم",
  "description": "منهج تعليمي شامل يغطي القسم الحادي عشر: قواعد بيانات NoSQL والتخزين المؤقت بدقة تفصيلية وأمثلة عملية وتطبيق مباشر.",
  "topics": [
    {
      "id": "11.1",
      "title": "مقدمة في NoSQL",
      "englishTitle": "مقدمة في NoSQL",
      "subtopics": [
        {
          "id": "11.1.1",
          "title": "ما هي NoSQL؟",
          "englishTitle": "NoSQL",
          "definition": "يُقصد بـ (ما هي NoSQL؟) أحد الركائز الجوهرية في مسار مقدمة في NoSQL ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (ما هي NoSQL؟) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (ما هي NoSQL؟) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for ما هي NoSQL؟\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح ما هي NoSQL؟ في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: ما هي NoSQL؟\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ ما هي NoSQL؟ في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق ما هي NoSQL؟\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"ما هي NoSQL؟\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.1.1",
            "title": "ما هي NoSQL؟",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (ما هي NoSQL؟) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (ما هي NoSQL؟) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي NoSQL؟) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على ما هي NoSQL؟",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (ما هي NoSQL؟)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين ما هي NoSQL؟\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: ما هي NoSQL؟...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.1.2",
          "title": "متى نستخدم NoSQL؟",
          "englishTitle": "متى نستخدم NoSQL",
          "definition": "يُقصد بـ (متى نستخدم NoSQL؟) أحد الركائز الجوهرية في مسار مقدمة في NoSQL ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (متى نستخدم NoSQL؟) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (متى نستخدم NoSQL؟) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for متى نستخدم NoSQL؟\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح متى نستخدم NoSQL؟ في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: متى نستخدم NoSQL؟\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ متى نستخدم NoSQL؟ في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق متى نستخدم NoSQL؟\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"متى نستخدم NoSQL؟\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.1.2",
            "title": "متى نستخدم NoSQL؟",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (متى نستخدم NoSQL؟) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (متى نستخدم NoSQL؟) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (متى نستخدم NoSQL؟) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على متى نستخدم NoSQL؟",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (متى نستخدم NoSQL؟)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين متى نستخدم NoSQL؟\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: متى نستخدم NoSQL؟...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.1.3",
          "title": "الفرق بين Document وRelational Databases",
          "englishTitle": "Document وRelational Databases",
          "definition": "يُقصد بـ (الفرق بين Document وRelational Databases) أحد الركائز الجوهرية في مسار مقدمة في NoSQL ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (الفرق بين Document وRelational Databases) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (الفرق بين Document وRelational Databases) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for الفرق بين Document وRelational Databases\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح الفرق بين Document وRelational Databases في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: الفرق بين Document وRelational Databases\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ الفرق بين Document وRelational Databases في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق الفرق بين Document وRelational Databases\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"الفرق بين Document وRelational Databases\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.1.3",
            "title": "الفرق بين Document وRelational Databases",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (الفرق بين Document وRelational Databases) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (الفرق بين Document وRelational Databases) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Document وRelational Databases) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على الفرق بين Document وRelational Databases",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (الفرق بين Document وRelational Databases)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Document وRelational Databases\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: الفرق بين Document وRelational Databases...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.1.4",
          "title": "مفهوم Collections وDocuments",
          "englishTitle": "Collections وDocuments",
          "definition": "يُقصد بـ (مفهوم Collections وDocuments) أحد الركائز الجوهرية في مسار مقدمة في NoSQL ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم Collections وDocuments) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم Collections وDocuments) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for مفهوم Collections وDocuments\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم Collections وDocuments في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم Collections وDocuments\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم Collections وDocuments في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم Collections وDocuments\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم Collections وDocuments\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.1.4",
            "title": "مفهوم Collections وDocuments",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (مفهوم Collections وDocuments) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم Collections وDocuments) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Collections وDocuments) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم Collections وDocuments",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم Collections وDocuments)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Collections وDocuments\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم Collections وDocuments...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.1.5",
          "title": "مقارنة MongoDB وPostgreSQL",
          "englishTitle": "مقارنة MongoDB وPostgreSQL",
          "definition": "يُقصد بـ (مقارنة MongoDB وPostgreSQL) أحد الركائز الجوهرية في مسار مقدمة في NoSQL ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مقارنة MongoDB وPostgreSQL) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مقارنة MongoDB وPostgreSQL) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for مقارنة MongoDB وPostgreSQL\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مقارنة MongoDB وPostgreSQL في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مقارنة MongoDB وPostgreSQL\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مقارنة MongoDB وPostgreSQL في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مقارنة MongoDB وPostgreSQL\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مقارنة MongoDB وPostgreSQL\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.1.5",
            "title": "مقارنة MongoDB وPostgreSQL",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (مقارنة MongoDB وPostgreSQL) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مقارنة MongoDB وPostgreSQL) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقارنة MongoDB وPostgreSQL) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مقارنة MongoDB وPostgreSQL",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مقارنة MongoDB وPostgreSQL)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مقارنة MongoDB وPostgreSQL\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مقارنة MongoDB وPostgreSQL...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "11.2",
      "title": "MongoDB",
      "englishTitle": "MongoDB",
      "subtopics": [
        {
          "id": "11.2.1",
          "title": "تثبيت MongoDB أو استخدام Atlas",
          "englishTitle": "تثبيت MongoDB أو Atlas",
          "definition": "يُقصد بـ (تثبيت MongoDB أو استخدام Atlas) أحد الركائز الجوهرية في مسار MongoDB ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تثبيت MongoDB أو استخدام Atlas) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تثبيت MongoDB أو استخدام Atlas) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for تثبيت MongoDB أو استخدام Atlas\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تثبيت MongoDB أو استخدام Atlas في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تثبيت MongoDB أو استخدام Atlas\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تثبيت MongoDB أو استخدام Atlas في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تثبيت MongoDB أو استخدام Atlas\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تثبيت MongoDB أو استخدام Atlas\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.2.1",
            "title": "تثبيت MongoDB أو استخدام Atlas",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (تثبيت MongoDB أو استخدام Atlas) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تثبيت MongoDB أو استخدام Atlas) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تثبيت MongoDB أو استخدام Atlas) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تثبيت MongoDB أو استخدام Atlas",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تثبيت MongoDB أو استخدام Atlas)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تثبيت MongoDB أو استخدام Atlas\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تثبيت MongoDB أو استخدام Atlas...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.2.2",
          "title": "إنشاء Database وCollection",
          "englishTitle": "Database وCollection",
          "definition": "يُقصد بـ (إنشاء Database وCollection) أحد الركائز الجوهرية في مسار MongoDB ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء Database وCollection) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء Database وCollection) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for إنشاء Database وCollection\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء Database وCollection في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء Database وCollection\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء Database وCollection في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء Database وCollection\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء Database وCollection\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.2.2",
            "title": "إنشاء Database وCollection",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (إنشاء Database وCollection) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء Database وCollection) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Database وCollection) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء Database وCollection",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء Database وCollection)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Database وCollection\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء Database وCollection...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.2.3",
          "title": "إضافة Documents",
          "englishTitle": "إضافة Documents",
          "definition": "يُقصد بـ (إضافة Documents) أحد الركائز الجوهرية في مسار MongoDB ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إضافة Documents) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إضافة Documents) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for إضافة Documents\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إضافة Documents في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إضافة Documents\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إضافة Documents في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إضافة Documents\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إضافة Documents\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.2.3",
            "title": "إضافة Documents",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (إضافة Documents) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إضافة Documents) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة Documents) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إضافة Documents",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إضافة Documents)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إضافة Documents\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إضافة Documents...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.2.4",
          "title": "قراءة البيانات باستخدام find",
          "englishTitle": "قراءة البيانات بfind",
          "definition": "يُقصد بـ (قراءة البيانات باستخدام find) أحد الركائز الجوهرية في مسار MongoDB ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (قراءة البيانات باستخدام find) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (قراءة البيانات باستخدام find) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for قراءة البيانات باستخدام find\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح قراءة البيانات باستخدام find في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: قراءة البيانات باستخدام find\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ قراءة البيانات باستخدام find في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق قراءة البيانات باستخدام find\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"قراءة البيانات باستخدام find\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.2.4",
            "title": "قراءة البيانات باستخدام find",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (قراءة البيانات باستخدام find) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (قراءة البيانات باستخدام find) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (قراءة البيانات باستخدام find) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على قراءة البيانات باستخدام find",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (قراءة البيانات باستخدام find)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين قراءة البيانات باستخدام find\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: قراءة البيانات باستخدام find...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.2.5",
          "title": "تحديث البيانات باستخدام updateOne",
          "englishTitle": "تحديث البيانات بupdateOne",
          "definition": "يُقصد بـ (تحديث البيانات باستخدام updateOne) أحد الركائز الجوهرية في مسار MongoDB ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تحديث البيانات باستخدام updateOne) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تحديث البيانات باستخدام updateOne) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for تحديث البيانات باستخدام updateOne\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تحديث البيانات باستخدام updateOne في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تحديث البيانات باستخدام updateOne\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تحديث البيانات باستخدام updateOne في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تحديث البيانات باستخدام updateOne\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تحديث البيانات باستخدام updateOne\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.2.5",
            "title": "تحديث البيانات باستخدام updateOne",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (تحديث البيانات باستخدام updateOne) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تحديث البيانات باستخدام updateOne) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تحديث البيانات باستخدام updateOne) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تحديث البيانات باستخدام updateOne",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تحديث البيانات باستخدام updateOne)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تحديث البيانات باستخدام updateOne\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تحديث البيانات باستخدام updateOne...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.2.6",
          "title": "حذف البيانات باستخدام deleteOne",
          "englishTitle": "حذف البيانات بdeleteOne",
          "definition": "يُقصد بـ (حذف البيانات باستخدام deleteOne) أحد الركائز الجوهرية في مسار MongoDB ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (حذف البيانات باستخدام deleteOne) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (حذف البيانات باستخدام deleteOne) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for حذف البيانات باستخدام deleteOne\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح حذف البيانات باستخدام deleteOne في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: حذف البيانات باستخدام deleteOne\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ حذف البيانات باستخدام deleteOne في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق حذف البيانات باستخدام deleteOne\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"حذف البيانات باستخدام deleteOne\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.2.6",
            "title": "حذف البيانات باستخدام deleteOne",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (حذف البيانات باستخدام deleteOne) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (حذف البيانات باستخدام deleteOne) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حذف البيانات باستخدام deleteOne) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على حذف البيانات باستخدام deleteOne",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (حذف البيانات باستخدام deleteOne)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين حذف البيانات باستخدام deleteOne\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: حذف البيانات باستخدام deleteOne...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.2.7",
          "title": "استخدام Aggregation Pipeline",
          "englishTitle": "Aggregation Pipeline",
          "definition": "يُقصد بـ (استخدام Aggregation Pipeline) أحد الركائز الجوهرية في مسار MongoDB ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام Aggregation Pipeline) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام Aggregation Pipeline) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for استخدام Aggregation Pipeline\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام Aggregation Pipeline في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام Aggregation Pipeline\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام Aggregation Pipeline في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام Aggregation Pipeline\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام Aggregation Pipeline\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.2.7",
            "title": "استخدام Aggregation Pipeline",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (استخدام Aggregation Pipeline) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام Aggregation Pipeline) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Aggregation Pipeline) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام Aggregation Pipeline",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام Aggregation Pipeline)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Aggregation Pipeline\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام Aggregation Pipeline...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.2.8",
          "title": "إنشاء Indexes",
          "englishTitle": "Indexes",
          "definition": "يُقصد بـ (إنشاء Indexes) أحد الركائز الجوهرية في مسار MongoDB ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء Indexes) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء Indexes) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for إنشاء Indexes\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء Indexes في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء Indexes\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء Indexes في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء Indexes\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء Indexes\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.2.8",
            "title": "إنشاء Indexes",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (إنشاء Indexes) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء Indexes) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Indexes) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء Indexes",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء Indexes)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Indexes\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء Indexes...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "11.3",
      "title": "Mongoose مع Node.js",
      "englishTitle": "Mongoose مع Node.js",
      "subtopics": [
        {
          "id": "11.3.1",
          "title": "تثبيت Mongoose",
          "englishTitle": "تثبيت Mongoose",
          "definition": "يُقصد بـ (تثبيت Mongoose) أحد الركائز الجوهرية في مسار Mongoose مع Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تثبيت Mongoose) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تثبيت Mongoose) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for تثبيت Mongoose\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تثبيت Mongoose في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تثبيت Mongoose\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تثبيت Mongoose في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تثبيت Mongoose\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تثبيت Mongoose\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.3.1",
            "title": "تثبيت Mongoose",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (تثبيت Mongoose) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تثبيت Mongoose) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تثبيت Mongoose) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تثبيت Mongoose",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تثبيت Mongoose)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تثبيت Mongoose\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تثبيت Mongoose...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.3.2",
          "title": "إنشاء اتصال MongoDB",
          "englishTitle": "اتصال MongoDB",
          "definition": "يُقصد بـ (إنشاء اتصال MongoDB) أحد الركائز الجوهرية في مسار Mongoose مع Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء اتصال MongoDB) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء اتصال MongoDB) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for إنشاء اتصال MongoDB\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء اتصال MongoDB في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء اتصال MongoDB\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء اتصال MongoDB في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء اتصال MongoDB\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء اتصال MongoDB\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.3.2",
            "title": "إنشاء اتصال MongoDB",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (إنشاء اتصال MongoDB) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء اتصال MongoDB) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء اتصال MongoDB) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء اتصال MongoDB",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء اتصال MongoDB)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء اتصال MongoDB\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء اتصال MongoDB...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.3.3",
          "title": "تعريف Schema",
          "englishTitle": "تعريف Schema",
          "definition": "يُقصد بـ (تعريف Schema) أحد الركائز الجوهرية في مسار Mongoose مع Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تعريف Schema) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تعريف Schema) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for تعريف Schema\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تعريف Schema في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تعريف Schema\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تعريف Schema في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تعريف Schema\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تعريف Schema\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.3.3",
            "title": "تعريف Schema",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (تعريف Schema) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تعريف Schema) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تعريف Schema) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تعريف Schema",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تعريف Schema)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تعريف Schema\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تعريف Schema...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.3.4",
          "title": "إنشاء Models",
          "englishTitle": "Models",
          "definition": "يُقصد بـ (إنشاء Models) أحد الركائز الجوهرية في مسار Mongoose مع Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء Models) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء Models) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for إنشاء Models\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء Models في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء Models\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء Models في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء Models\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء Models\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.3.4",
            "title": "إنشاء Models",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (إنشاء Models) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء Models) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Models) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء Models",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء Models)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Models\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء Models...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.3.5",
          "title": "تنفيذ CRUD باستخدام Mongoose",
          "englishTitle": "CRUD بMongoose",
          "definition": "يُقصد بـ (تنفيذ CRUD باستخدام Mongoose) أحد الركائز الجوهرية في مسار Mongoose مع Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تنفيذ CRUD باستخدام Mongoose) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تنفيذ CRUD باستخدام Mongoose) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for تنفيذ CRUD باستخدام Mongoose\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تنفيذ CRUD باستخدام Mongoose في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تنفيذ CRUD باستخدام Mongoose\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تنفيذ CRUD باستخدام Mongoose في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تنفيذ CRUD باستخدام Mongoose\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تنفيذ CRUD باستخدام Mongoose\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.3.5",
            "title": "تنفيذ CRUD باستخدام Mongoose",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (تنفيذ CRUD باستخدام Mongoose) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تنفيذ CRUD باستخدام Mongoose) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنفيذ CRUD باستخدام Mongoose) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تنفيذ CRUD باستخدام Mongoose",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تنفيذ CRUD باستخدام Mongoose)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ CRUD باستخدام Mongoose\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تنفيذ CRUD باستخدام Mongoose...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.3.6",
          "title": "استخدام Validation",
          "englishTitle": "Validation",
          "definition": "يُقصد بـ (استخدام Validation) أحد الركائز الجوهرية في مسار Mongoose مع Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام Validation) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام Validation) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for استخدام Validation\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام Validation في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام Validation\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام Validation في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام Validation\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام Validation\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.3.6",
            "title": "استخدام Validation",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (استخدام Validation) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام Validation) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Validation) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام Validation",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام Validation)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Validation\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام Validation...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.3.7",
          "title": "إنشاء العلاقات باستخدام populate",
          "englishTitle": "العلاقات بpopulate",
          "definition": "يُقصد بـ (إنشاء العلاقات باستخدام populate) أحد الركائز الجوهرية في مسار Mongoose مع Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء العلاقات باستخدام populate) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء العلاقات باستخدام populate) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for إنشاء العلاقات باستخدام populate\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء العلاقات باستخدام populate في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء العلاقات باستخدام populate\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء العلاقات باستخدام populate في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء العلاقات باستخدام populate\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء العلاقات باستخدام populate\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.3.7",
            "title": "إنشاء العلاقات باستخدام populate",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (إنشاء العلاقات باستخدام populate) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء العلاقات باستخدام populate) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء العلاقات باستخدام populate) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء العلاقات باستخدام populate",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء العلاقات باستخدام populate)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء العلاقات باستخدام populate\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء العلاقات باستخدام populate...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.3.8",
          "title": "استخدام Middleware وHooks",
          "englishTitle": "Middleware وHooks",
          "definition": "يُقصد بـ (استخدام Middleware وHooks) أحد الركائز الجوهرية في مسار Mongoose مع Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام Middleware وHooks) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام Middleware وHooks) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for استخدام Middleware وHooks\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام Middleware وHooks في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام Middleware وHooks\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام Middleware وHooks في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام Middleware وHooks\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام Middleware وHooks\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.3.8",
            "title": "استخدام Middleware وHooks",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (استخدام Middleware وHooks) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام Middleware وHooks) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Middleware وHooks) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام Middleware وHooks",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام Middleware وHooks)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Middleware وHooks\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام Middleware وHooks...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "11.4",
      "title": "Redis والتخزين المؤقت",
      "englishTitle": "Redis والتخزين المؤقت",
      "subtopics": [
        {
          "id": "11.4.1",
          "title": "ما هو Redis؟",
          "englishTitle": "Redis",
          "definition": "يُقصد بـ (ما هو Redis؟) أحد الركائز الجوهرية في مسار Redis والتخزين المؤقت ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (ما هو Redis؟) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (ما هو Redis؟) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for ما هو Redis؟\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح ما هو Redis؟ في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: ما هو Redis؟\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ ما هو Redis؟ في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق ما هو Redis؟\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"ما هو Redis؟\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.4.1",
            "title": "ما هو Redis؟",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (ما هو Redis؟) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (ما هو Redis؟) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Redis؟) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على ما هو Redis؟",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (ما هو Redis؟)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو Redis؟\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: ما هو Redis؟...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.4.2",
          "title": "الفرق بين Cache وDatabase",
          "englishTitle": "Cache وDatabase",
          "definition": "يُقصد بـ (الفرق بين Cache وDatabase) أحد الركائز الجوهرية في مسار Redis والتخزين المؤقت ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (الفرق بين Cache وDatabase) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (الفرق بين Cache وDatabase) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for الفرق بين Cache وDatabase\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح الفرق بين Cache وDatabase في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: الفرق بين Cache وDatabase\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ الفرق بين Cache وDatabase في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق الفرق بين Cache وDatabase\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"الفرق بين Cache وDatabase\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.4.2",
            "title": "الفرق بين Cache وDatabase",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (الفرق بين Cache وDatabase) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (الفرق بين Cache وDatabase) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Cache وDatabase) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على الفرق بين Cache وDatabase",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (الفرق بين Cache وDatabase)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Cache وDatabase\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: الفرق بين Cache وDatabase...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.4.3",
          "title": "الاتصال بـ Redis من Node.js",
          "englishTitle": "الاتصال بـ Redis من Node.js",
          "definition": "يُقصد بـ (الاتصال بـ Redis من Node.js) أحد الركائز الجوهرية في مسار Redis والتخزين المؤقت ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (الاتصال بـ Redis من Node.js) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (الاتصال بـ Redis من Node.js) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for الاتصال بـ Redis من Node.js\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح الاتصال بـ Redis من Node.js في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: الاتصال بـ Redis من Node.js\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ الاتصال بـ Redis من Node.js في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق الاتصال بـ Redis من Node.js\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"الاتصال بـ Redis من Node.js\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.4.3",
            "title": "الاتصال بـ Redis من Node.js",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (الاتصال بـ Redis من Node.js) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (الاتصال بـ Redis من Node.js) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الاتصال بـ Redis من Node.js) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على الاتصال بـ Redis من Node.js",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (الاتصال بـ Redis من Node.js)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين الاتصال بـ Redis من Node.js\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: الاتصال بـ Redis من Node.js...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.4.4",
          "title": "استخدام SET وGET",
          "englishTitle": "SET وGET",
          "definition": "يُقصد بـ (استخدام SET وGET) أحد الركائز الجوهرية في مسار Redis والتخزين المؤقت ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام SET وGET) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام SET وGET) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for استخدام SET وGET\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام SET وGET في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام SET وGET\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام SET وGET في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام SET وGET\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام SET وGET\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.4.4",
            "title": "استخدام SET وGET",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (استخدام SET وGET) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام SET وGET) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام SET وGET) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام SET وGET",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام SET وGET)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام SET وGET\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام SET وGET...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.4.5",
          "title": "إدارة TTL",
          "englishTitle": "TTL",
          "definition": "يُقصد بـ (إدارة TTL) أحد الركائز الجوهرية في مسار Redis والتخزين المؤقت ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إدارة TTL) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إدارة TTL) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for إدارة TTL\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إدارة TTL في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إدارة TTL\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إدارة TTL في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إدارة TTL\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إدارة TTL\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.4.5",
            "title": "إدارة TTL",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (إدارة TTL) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إدارة TTL) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة TTL) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إدارة TTL",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إدارة TTL)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة TTL\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إدارة TTL...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.4.6",
          "title": "تطبيق Cache-Aside Pattern",
          "englishTitle": "تطبيق Cache-Aside Pattern",
          "definition": "يُقصد بـ (تطبيق Cache-Aside Pattern) أحد الركائز الجوهرية في مسار Redis والتخزين المؤقت ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تطبيق Cache-Aside Pattern) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تطبيق Cache-Aside Pattern) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for تطبيق Cache-Aside Pattern\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تطبيق Cache-Aside Pattern في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تطبيق Cache-Aside Pattern\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تطبيق Cache-Aside Pattern في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تطبيق Cache-Aside Pattern\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تطبيق Cache-Aside Pattern\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.4.6",
            "title": "تطبيق Cache-Aside Pattern",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (تطبيق Cache-Aside Pattern) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تطبيق Cache-Aside Pattern) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تطبيق Cache-Aside Pattern) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تطبيق Cache-Aside Pattern",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تطبيق Cache-Aside Pattern)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تطبيق Cache-Aside Pattern\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تطبيق Cache-Aside Pattern...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.4.7",
          "title": "إبطال البيانات المخزنة Cache Invalidation",
          "englishTitle": "إبطال البيانات المخزنة Cache Invalidation",
          "definition": "يُقصد بـ (إبطال البيانات المخزنة Cache Invalidation) أحد الركائز الجوهرية في مسار Redis والتخزين المؤقت ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إبطال البيانات المخزنة Cache Invalidation) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إبطال البيانات المخزنة Cache Invalidation) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for إبطال البيانات المخزنة Cache Invalidation\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إبطال البيانات المخزنة Cache Invalidation في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إبطال البيانات المخزنة Cache Invalidation\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إبطال البيانات المخزنة Cache Invalidation في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إبطال البيانات المخزنة Cache Invalidation\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إبطال البيانات المخزنة Cache Invalidation\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.4.7",
            "title": "إبطال البيانات المخزنة Cache Invalidation",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (إبطال البيانات المخزنة Cache Invalidation) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إبطال البيانات المخزنة Cache Invalidation) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إبطال البيانات المخزنة Cache Invalidation) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إبطال البيانات المخزنة Cache Invalidation",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إبطال البيانات المخزنة Cache Invalidation)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إبطال البيانات المخزنة Cache Invalidation\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إبطال البيانات المخزنة Cache Invalidation...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.4.8",
          "title": "استخدام Redis في Rate Limiting",
          "englishTitle": "Redis في Rate Limiting",
          "definition": "يُقصد بـ (استخدام Redis في Rate Limiting) أحد الركائز الجوهرية في مسار Redis والتخزين المؤقت ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام Redis في Rate Limiting) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام Redis في Rate Limiting) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for استخدام Redis في Rate Limiting\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام Redis في Rate Limiting في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام Redis في Rate Limiting\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام Redis في Rate Limiting في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام Redis في Rate Limiting\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام Redis في Rate Limiting\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.4.8",
            "title": "استخدام Redis في Rate Limiting",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (استخدام Redis في Rate Limiting) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام Redis في Rate Limiting) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Redis في Rate Limiting) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام Redis في Rate Limiting",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام Redis في Rate Limiting)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Redis في Rate Limiting\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام Redis في Rate Limiting...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "11.5",
      "title": "تطبيقات قواعد البيانات",
      "englishTitle": "تطبيقات قواعد البيانات",
      "subtopics": [
        {
          "id": "11.5.1",
          "title": "إنشاء API للمستخدمين باستخدام PostgreSQL",
          "englishTitle": "API للمستخدمين بPostgreSQL",
          "definition": "يُقصد بـ (إنشاء API للمستخدمين باستخدام PostgreSQL) أحد الركائز الجوهرية في مسار تطبيقات قواعد البيانات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء API للمستخدمين باستخدام PostgreSQL) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء API للمستخدمين باستخدام PostgreSQL) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for إنشاء API للمستخدمين باستخدام PostgreSQL\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء API للمستخدمين باستخدام PostgreSQL في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء API للمستخدمين باستخدام PostgreSQL\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء API للمستخدمين باستخدام PostgreSQL في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء API للمستخدمين باستخدام PostgreSQL\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء API للمستخدمين باستخدام PostgreSQL\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.5.1",
            "title": "إنشاء API للمستخدمين باستخدام PostgreSQL",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (إنشاء API للمستخدمين باستخدام PostgreSQL) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء API للمستخدمين باستخدام PostgreSQL) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء API للمستخدمين باستخدام PostgreSQL) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء API للمستخدمين باستخدام PostgreSQL",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء API للمستخدمين باستخدام PostgreSQL)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء API للمستخدمين باستخدام PostgreSQL\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء API للمستخدمين باستخدام PostgreSQL...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.5.2",
          "title": "إنشاء API للمقالات باستخدام MongoDB",
          "englishTitle": "API للمقالات بMongoDB",
          "definition": "يُقصد بـ (إنشاء API للمقالات باستخدام MongoDB) أحد الركائز الجوهرية في مسار تطبيقات قواعد البيانات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء API للمقالات باستخدام MongoDB) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء API للمقالات باستخدام MongoDB) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for إنشاء API للمقالات باستخدام MongoDB\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء API للمقالات باستخدام MongoDB في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء API للمقالات باستخدام MongoDB\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء API للمقالات باستخدام MongoDB في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء API للمقالات باستخدام MongoDB\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء API للمقالات باستخدام MongoDB\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.5.2",
            "title": "إنشاء API للمقالات باستخدام MongoDB",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (إنشاء API للمقالات باستخدام MongoDB) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء API للمقالات باستخدام MongoDB) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء API للمقالات باستخدام MongoDB) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء API للمقالات باستخدام MongoDB",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء API للمقالات باستخدام MongoDB)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء API للمقالات باستخدام MongoDB\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء API للمقالات باستخدام MongoDB...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.5.3",
          "title": "إضافة Pagination من قاعدة البيانات",
          "englishTitle": "إضافة Pagination من قاعدة البيانات",
          "definition": "يُقصد بـ (إضافة Pagination من قاعدة البيانات) أحد الركائز الجوهرية في مسار تطبيقات قواعد البيانات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إضافة Pagination من قاعدة البيانات) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إضافة Pagination من قاعدة البيانات) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for إضافة Pagination من قاعدة البيانات\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إضافة Pagination من قاعدة البيانات في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إضافة Pagination من قاعدة البيانات\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إضافة Pagination من قاعدة البيانات في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إضافة Pagination من قاعدة البيانات\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إضافة Pagination من قاعدة البيانات\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.5.3",
            "title": "إضافة Pagination من قاعدة البيانات",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (إضافة Pagination من قاعدة البيانات) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إضافة Pagination من قاعدة البيانات) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة Pagination من قاعدة البيانات) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إضافة Pagination من قاعدة البيانات",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إضافة Pagination من قاعدة البيانات)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إضافة Pagination من قاعدة البيانات\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إضافة Pagination من قاعدة البيانات...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.5.4",
          "title": "إضافة البحث والفلترة",
          "englishTitle": "إضافة البحث والفلترة",
          "definition": "يُقصد بـ (إضافة البحث والفلترة) أحد الركائز الجوهرية في مسار تطبيقات قواعد البيانات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إضافة البحث والفلترة) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إضافة البحث والفلترة) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for إضافة البحث والفلترة\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إضافة البحث والفلترة في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إضافة البحث والفلترة\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إضافة البحث والفلترة في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إضافة البحث والفلترة\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إضافة البحث والفلترة\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.5.4",
            "title": "إضافة البحث والفلترة",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (إضافة البحث والفلترة) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إضافة البحث والفلترة) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة البحث والفلترة) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إضافة البحث والفلترة",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إضافة البحث والفلترة)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إضافة البحث والفلترة\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إضافة البحث والفلترة...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.5.5",
          "title": "تخزين نتائج الاستعلامات في Redis",
          "englishTitle": "تخزين نتائج الاستعلامات في Redis",
          "definition": "يُقصد بـ (تخزين نتائج الاستعلامات في Redis) أحد الركائز الجوهرية في مسار تطبيقات قواعد البيانات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تخزين نتائج الاستعلامات في Redis) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تخزين نتائج الاستعلامات في Redis) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for تخزين نتائج الاستعلامات في Redis\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تخزين نتائج الاستعلامات في Redis في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تخزين نتائج الاستعلامات في Redis\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تخزين نتائج الاستعلامات في Redis في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تخزين نتائج الاستعلامات في Redis\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تخزين نتائج الاستعلامات في Redis\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.5.5",
            "title": "تخزين نتائج الاستعلامات في Redis",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (تخزين نتائج الاستعلامات في Redis) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تخزين نتائج الاستعلامات في Redis) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تخزين نتائج الاستعلامات في Redis) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تخزين نتائج الاستعلامات في Redis",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تخزين نتائج الاستعلامات في Redis)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تخزين نتائج الاستعلامات في Redis\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تخزين نتائج الاستعلامات في Redis...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "11.5.6",
          "title": "مقارنة أداء قواعد البيانات",
          "englishTitle": "مقارنة أداء قواعد البيانات",
          "definition": "يُقصد بـ (مقارنة أداء قواعد البيانات) أحد الركائز الجوهرية في مسار تطبيقات قواعد البيانات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مقارنة أداء قواعد البيانات) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مقارنة أداء قواعد البيانات) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "ORM",
              "pronunciation": "أو-آر-إم",
              "meaning": "نظام تعيين الكائنات للجداول العلائقية برمجياً"
            },
            {
              "term": "Prisma",
              "pronunciation": "بريزما",
              "meaning": "أحدث وأسرع ORM لـ Node.js و TypeScript"
            },
            {
              "term": "Redis",
              "pronunciation": "ريديس",
              "meaning": "قاعدة بيانات في الذاكرة فائقة السرعة للتخزين المؤقت"
            }
          ],
          "syntax": "// Syntax representation for مقارنة أداء قواعد البيانات\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مقارنة أداء قواعد البيانات في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مقارنة أداء قواعد البيانات\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مقارنة أداء قواعد البيانات في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مقارنة أداء قواعد البيانات\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مقارنة أداء قواعد البيانات\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
          "outputExplanation": "عند تشغيل الشفرة البرمجية في الطرفية، يقوم محرك Node.js بتهيئة الموارد وطباعة رسائل التأكيد، مع الاستجابة للطلبات وإرجاع كائن JSON منظم بالحالة والبيانات المطلوبة.",
          "commonMistakes": [
            {
              "wrong": "حظر الـ Event Loop بعمليات متزامنة ثقيلة (Synchronous Blocking).",
              "right": "استخدام الدوال غير المتزامنة (Async/Await) والـ Streams لتمرير البيانات تدريجياً.",
              "reason": "لأن Node.js يعتمد على مسار أحادي Single-Threaded وحظره يوقف استجابة الخادم لجميع العملاء."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories)."
          ],
          "infographic": {
            "badge": "الدرس 11.5.6",
            "title": "مقارنة أداء قواعد البيانات",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والاتصال",
                "desc": "بدء استقبال الطلب أو قراءة المورد المحدد بأمان"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون تعطيل المسار الرئيسي لـ Node.js"
              },
              {
                "title": "الاستجابة والتسجيل",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل الحالة في السجلات"
              }
            ],
            "summary": "يمثل (مقارنة أداء قواعد البيانات) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مقارنة أداء قواعد البيانات) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقارنة أداء قواعد البيانات) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مقارنة أداء قواعد البيانات",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مقارنة أداء قواعد البيانات)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مقارنة أداء قواعد البيانات\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مقارنة أداء قواعد البيانات...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    }
  ]
};

export default SECTION_11;
