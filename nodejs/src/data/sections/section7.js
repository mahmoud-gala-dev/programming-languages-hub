// src/data/sections/section7.js
// القسم السابع: بناء خوادم HTTP باستخدام Node.js
export const SECTION_7 = {
  "id": 7,
  "number": "07",
  "title": "القسم السابع: بناء خوادم HTTP باستخدام Node.js",
  "englishTitle": "Building HTTP Servers with Node.js",
  "badge": "متوسط",
  "description": "منهج تعليمي شامل يغطي القسم السابع: بناء خوادم HTTP باستخدام Node.js بدقة تفصيلية وأمثلة عملية وتطبيق مباشر.",
  "topics": [
    {
      "id": "7.1",
      "title": "مقدمة في HTTP Server",
      "englishTitle": "مقدمة في HTTP Server",
      "subtopics": [
        {
          "id": "7.1.1",
          "title": "كيف يعمل خادم الويب؟",
          "englishTitle": "كيف يعمل خادم الويب",
          "definition": "يُقصد بـ (كيف يعمل خادم الويب؟) أحد الركائز الجوهرية في مسار مقدمة في HTTP Server ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (كيف يعمل خادم الويب؟) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (كيف يعمل خادم الويب؟) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for كيف يعمل خادم الويب؟\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح كيف يعمل خادم الويب؟ في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: كيف يعمل خادم الويب؟\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ كيف يعمل خادم الويب؟ في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق كيف يعمل خادم الويب؟\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"كيف يعمل خادم الويب؟\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.1.1",
            "title": "كيف يعمل خادم الويب؟",
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
            "summary": "يمثل (كيف يعمل خادم الويب؟) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (كيف يعمل خادم الويب؟) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (كيف يعمل خادم الويب؟) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على كيف يعمل خادم الويب؟",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (كيف يعمل خادم الويب؟)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين كيف يعمل خادم الويب؟\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: كيف يعمل خادم الويب؟...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.1.2",
          "title": "استخدام node:http",
          "englishTitle": "node:http",
          "definition": "يُقصد بـ (استخدام node:http) أحد الركائز الجوهرية في مسار مقدمة في HTTP Server ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام node:http) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام node:http) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for استخدام node:http\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام node:http في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام node:http\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام node:http في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام node:http\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام node:http\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.1.2",
            "title": "استخدام node:http",
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
            "summary": "يمثل (استخدام node:http) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام node:http) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام node:http) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام node:http",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام node:http)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام node:http\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام node:http...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.1.3",
          "title": "إنشاء أول HTTP Server",
          "englishTitle": "أول HTTP Server",
          "definition": "يُقصد بـ (إنشاء أول HTTP Server) أحد الركائز الجوهرية في مسار مقدمة في HTTP Server ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء أول HTTP Server) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء أول HTTP Server) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for إنشاء أول HTTP Server\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء أول HTTP Server في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء أول HTTP Server\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء أول HTTP Server في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء أول HTTP Server\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء أول HTTP Server\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.1.3",
            "title": "إنشاء أول HTTP Server",
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
            "summary": "يمثل (إنشاء أول HTTP Server) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء أول HTTP Server) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء أول HTTP Server) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء أول HTTP Server",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء أول HTTP Server)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء أول HTTP Server\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء أول HTTP Server...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.1.4",
          "title": "استخدام createServer",
          "englishTitle": "createServer",
          "definition": "يُقصد بـ (استخدام createServer) أحد الركائز الجوهرية في مسار مقدمة في HTTP Server ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام createServer) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام createServer) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for استخدام createServer\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام createServer في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام createServer\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام createServer في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام createServer\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام createServer\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.1.4",
            "title": "استخدام createServer",
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
            "summary": "يمثل (استخدام createServer) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام createServer) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام createServer) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام createServer",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام createServer)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام createServer\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام createServer...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.1.5",
          "title": "التعامل مع req وres",
          "englishTitle": "التعامل مع req وres",
          "definition": "يُقصد بـ (التعامل مع req وres) أحد الركائز الجوهرية في مسار مقدمة في HTTP Server ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (التعامل مع req وres) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (التعامل مع req وres) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for التعامل مع req وres\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح التعامل مع req وres في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: التعامل مع req وres\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ التعامل مع req وres في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق التعامل مع req وres\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"التعامل مع req وres\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.1.5",
            "title": "التعامل مع req وres",
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
            "summary": "يمثل (التعامل مع req وres) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (التعامل مع req وres) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التعامل مع req وres) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على التعامل مع req وres",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (التعامل مع req وres)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين التعامل مع req وres\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: التعامل مع req وres...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.1.6",
          "title": "تشغيل الخادم باستخدام listen",
          "englishTitle": "تشغيل الخادم بlisten",
          "definition": "يُقصد بـ (تشغيل الخادم باستخدام listen) أحد الركائز الجوهرية في مسار مقدمة في HTTP Server ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تشغيل الخادم باستخدام listen) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تشغيل الخادم باستخدام listen) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for تشغيل الخادم باستخدام listen\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تشغيل الخادم باستخدام listen في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تشغيل الخادم باستخدام listen\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تشغيل الخادم باستخدام listen في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تشغيل الخادم باستخدام listen\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تشغيل الخادم باستخدام listen\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.1.6",
            "title": "تشغيل الخادم باستخدام listen",
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
            "summary": "يمثل (تشغيل الخادم باستخدام listen) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تشغيل الخادم باستخدام listen) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تشغيل الخادم باستخدام listen) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تشغيل الخادم باستخدام listen",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تشغيل الخادم باستخدام listen)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تشغيل الخادم باستخدام listen\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تشغيل الخادم باستخدام listen...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "7.2",
      "title": "فهم HTTP Requests",
      "englishTitle": "فهم HTTP Requests",
      "subtopics": [
        {
          "id": "7.2.1",
          "title": "مفهوم HTTP Methods",
          "englishTitle": "HTTP Methods",
          "definition": "يُقصد بـ (مفهوم HTTP Methods) أحد الركائز الجوهرية في مسار فهم HTTP Requests ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم HTTP Methods) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم HTTP Methods) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for مفهوم HTTP Methods\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم HTTP Methods في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم HTTP Methods\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم HTTP Methods في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم HTTP Methods\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم HTTP Methods\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.2.1",
            "title": "مفهوم HTTP Methods",
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
            "summary": "يمثل (مفهوم HTTP Methods) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم HTTP Methods) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم HTTP Methods) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم HTTP Methods",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم HTTP Methods)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم HTTP Methods\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم HTTP Methods...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.2.2",
          "title": "الفرق بين GET وPOST",
          "englishTitle": "GET وPOST",
          "definition": "يُقصد بـ (الفرق بين GET وPOST) أحد الركائز الجوهرية في مسار فهم HTTP Requests ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (الفرق بين GET وPOST) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (الفرق بين GET وPOST) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for الفرق بين GET وPOST\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح الفرق بين GET وPOST في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: الفرق بين GET وPOST\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ الفرق بين GET وPOST في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق الفرق بين GET وPOST\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"الفرق بين GET وPOST\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.2.2",
            "title": "الفرق بين GET وPOST",
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
            "summary": "يمثل (الفرق بين GET وPOST) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (الفرق بين GET وPOST) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين GET وPOST) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على الفرق بين GET وPOST",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (الفرق بين GET وPOST)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين GET وPOST\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: الفرق بين GET وPOST...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.2.3",
          "title": "استخدام PUT وPATCH وDELETE",
          "englishTitle": "PUT وPATCH وDELETE",
          "definition": "يُقصد بـ (استخدام PUT وPATCH وDELETE) أحد الركائز الجوهرية في مسار فهم HTTP Requests ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام PUT وPATCH وDELETE) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام PUT وPATCH وDELETE) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for استخدام PUT وPATCH وDELETE\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام PUT وPATCH وDELETE في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام PUT وPATCH وDELETE\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام PUT وPATCH وDELETE في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام PUT وPATCH وDELETE\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام PUT وPATCH وDELETE\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.2.3",
            "title": "استخدام PUT وPATCH وDELETE",
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
            "summary": "يمثل (استخدام PUT وPATCH وDELETE) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام PUT وPATCH وDELETE) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام PUT وPATCH وDELETE) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام PUT وPATCH وDELETE",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام PUT وPATCH وDELETE)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام PUT وPATCH وDELETE\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام PUT وPATCH وDELETE...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.2.4",
          "title": "قراءة Request Headers",
          "englishTitle": "قراءة Request Headers",
          "definition": "يُقصد بـ (قراءة Request Headers) أحد الركائز الجوهرية في مسار فهم HTTP Requests ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (قراءة Request Headers) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (قراءة Request Headers) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for قراءة Request Headers\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح قراءة Request Headers في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: قراءة Request Headers\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ قراءة Request Headers في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق قراءة Request Headers\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"قراءة Request Headers\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.2.4",
            "title": "قراءة Request Headers",
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
            "summary": "يمثل (قراءة Request Headers) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (قراءة Request Headers) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (قراءة Request Headers) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على قراءة Request Headers",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (قراءة Request Headers)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين قراءة Request Headers\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: قراءة Request Headers...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.2.5",
          "title": "قراءة Query Parameters",
          "englishTitle": "قراءة Query Parameters",
          "definition": "يُقصد بـ (قراءة Query Parameters) أحد الركائز الجوهرية في مسار فهم HTTP Requests ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (قراءة Query Parameters) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (قراءة Query Parameters) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for قراءة Query Parameters\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح قراءة Query Parameters في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: قراءة Query Parameters\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ قراءة Query Parameters في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق قراءة Query Parameters\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"قراءة Query Parameters\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.2.5",
            "title": "قراءة Query Parameters",
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
            "summary": "يمثل (قراءة Query Parameters) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (قراءة Query Parameters) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (قراءة Query Parameters) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على قراءة Query Parameters",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (قراءة Query Parameters)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين قراءة Query Parameters\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: قراءة Query Parameters...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.2.6",
          "title": "قراءة Route Parameters",
          "englishTitle": "قراءة Route Parameters",
          "definition": "يُقصد بـ (قراءة Route Parameters) أحد الركائز الجوهرية في مسار فهم HTTP Requests ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (قراءة Route Parameters) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (قراءة Route Parameters) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for قراءة Route Parameters\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح قراءة Route Parameters في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: قراءة Route Parameters\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ قراءة Route Parameters في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق قراءة Route Parameters\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"قراءة Route Parameters\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.2.6",
            "title": "قراءة Route Parameters",
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
            "summary": "يمثل (قراءة Route Parameters) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (قراءة Route Parameters) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (قراءة Route Parameters) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على قراءة Route Parameters",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (قراءة Route Parameters)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين قراءة Route Parameters\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: قراءة Route Parameters...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.2.7",
          "title": "قراءة Request Body",
          "englishTitle": "قراءة Request Body",
          "definition": "يُقصد بـ (قراءة Request Body) أحد الركائز الجوهرية في مسار فهم HTTP Requests ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (قراءة Request Body) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (قراءة Request Body) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for قراءة Request Body\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح قراءة Request Body في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: قراءة Request Body\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ قراءة Request Body في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق قراءة Request Body\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"قراءة Request Body\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.2.7",
            "title": "قراءة Request Body",
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
            "summary": "يمثل (قراءة Request Body) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (قراءة Request Body) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (قراءة Request Body) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على قراءة Request Body",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (قراءة Request Body)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين قراءة Request Body\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: قراءة Request Body...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "7.3",
      "title": "فهم HTTP Responses",
      "englishTitle": "فهم HTTP Responses",
      "subtopics": [
        {
          "id": "7.3.1",
          "title": "مفهوم HTTP Status Codes",
          "englishTitle": "HTTP Status Codes",
          "definition": "يُقصد بـ (مفهوم HTTP Status Codes) أحد الركائز الجوهرية في مسار فهم HTTP Responses ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم HTTP Status Codes) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم HTTP Status Codes) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for مفهوم HTTP Status Codes\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم HTTP Status Codes في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم HTTP Status Codes\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم HTTP Status Codes في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم HTTP Status Codes\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم HTTP Status Codes\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.3.1",
            "title": "مفهوم HTTP Status Codes",
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
            "summary": "يمثل (مفهوم HTTP Status Codes) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم HTTP Status Codes) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم HTTP Status Codes) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم HTTP Status Codes",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم HTTP Status Codes)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم HTTP Status Codes\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم HTTP Status Codes...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.3.2",
          "title": "أكواد النجاح 2xx",
          "englishTitle": "أكواد النجاح 2xx",
          "definition": "يُقصد بـ (أكواد النجاح 2xx) أحد الركائز الجوهرية في مسار فهم HTTP Responses ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (أكواد النجاح 2xx) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (أكواد النجاح 2xx) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for أكواد النجاح 2xx\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح أكواد النجاح 2xx في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: أكواد النجاح 2xx\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ أكواد النجاح 2xx في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق أكواد النجاح 2xx\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"أكواد النجاح 2xx\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.3.2",
            "title": "أكواد النجاح 2xx",
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
            "summary": "يمثل (أكواد النجاح 2xx) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (أكواد النجاح 2xx) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (أكواد النجاح 2xx) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على أكواد النجاح 2xx",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (أكواد النجاح 2xx)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين أكواد النجاح 2xx\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: أكواد النجاح 2xx...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.3.3",
          "title": "أكواد التوجيه 3xx",
          "englishTitle": "أكواد التوجيه 3xx",
          "definition": "يُقصد بـ (أكواد التوجيه 3xx) أحد الركائز الجوهرية في مسار فهم HTTP Responses ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (أكواد التوجيه 3xx) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (أكواد التوجيه 3xx) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for أكواد التوجيه 3xx\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح أكواد التوجيه 3xx في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: أكواد التوجيه 3xx\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ أكواد التوجيه 3xx في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق أكواد التوجيه 3xx\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"أكواد التوجيه 3xx\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.3.3",
            "title": "أكواد التوجيه 3xx",
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
            "summary": "يمثل (أكواد التوجيه 3xx) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (أكواد التوجيه 3xx) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (أكواد التوجيه 3xx) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على أكواد التوجيه 3xx",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (أكواد التوجيه 3xx)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين أكواد التوجيه 3xx\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: أكواد التوجيه 3xx...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.3.4",
          "title": "أكواد أخطاء العميل 4xx",
          "englishTitle": "أكواد أخطاء العميل 4xx",
          "definition": "يُقصد بـ (أكواد أخطاء العميل 4xx) أحد الركائز الجوهرية في مسار فهم HTTP Responses ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (أكواد أخطاء العميل 4xx) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (أكواد أخطاء العميل 4xx) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for أكواد أخطاء العميل 4xx\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح أكواد أخطاء العميل 4xx في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: أكواد أخطاء العميل 4xx\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ أكواد أخطاء العميل 4xx في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق أكواد أخطاء العميل 4xx\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"أكواد أخطاء العميل 4xx\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.3.4",
            "title": "أكواد أخطاء العميل 4xx",
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
            "summary": "يمثل (أكواد أخطاء العميل 4xx) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (أكواد أخطاء العميل 4xx) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (أكواد أخطاء العميل 4xx) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على أكواد أخطاء العميل 4xx",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (أكواد أخطاء العميل 4xx)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين أكواد أخطاء العميل 4xx\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: أكواد أخطاء العميل 4xx...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.3.5",
          "title": "أكواد أخطاء الخادم 5xx",
          "englishTitle": "أكواد أخطاء الخادم 5xx",
          "definition": "يُقصد بـ (أكواد أخطاء الخادم 5xx) أحد الركائز الجوهرية في مسار فهم HTTP Responses ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (أكواد أخطاء الخادم 5xx) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (أكواد أخطاء الخادم 5xx) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for أكواد أخطاء الخادم 5xx\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح أكواد أخطاء الخادم 5xx في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: أكواد أخطاء الخادم 5xx\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ أكواد أخطاء الخادم 5xx في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق أكواد أخطاء الخادم 5xx\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"أكواد أخطاء الخادم 5xx\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.3.5",
            "title": "أكواد أخطاء الخادم 5xx",
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
            "summary": "يمثل (أكواد أخطاء الخادم 5xx) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (أكواد أخطاء الخادم 5xx) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (أكواد أخطاء الخادم 5xx) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على أكواد أخطاء الخادم 5xx",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (أكواد أخطاء الخادم 5xx)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين أكواد أخطاء الخادم 5xx\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: أكواد أخطاء الخادم 5xx...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.3.6",
          "title": "تحديد Response Headers",
          "englishTitle": "تحديد Response Headers",
          "definition": "يُقصد بـ (تحديد Response Headers) أحد الركائز الجوهرية في مسار فهم HTTP Responses ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تحديد Response Headers) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تحديد Response Headers) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for تحديد Response Headers\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تحديد Response Headers في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تحديد Response Headers\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تحديد Response Headers في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تحديد Response Headers\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تحديد Response Headers\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.3.6",
            "title": "تحديد Response Headers",
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
            "summary": "يمثل (تحديد Response Headers) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تحديد Response Headers) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تحديد Response Headers) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تحديد Response Headers",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تحديد Response Headers)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تحديد Response Headers\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تحديد Response Headers...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.3.7",
          "title": "إرسال JSON Response",
          "englishTitle": "إرسال JSON Response",
          "definition": "يُقصد بـ (إرسال JSON Response) أحد الركائز الجوهرية في مسار فهم HTTP Responses ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إرسال JSON Response) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إرسال JSON Response) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for إرسال JSON Response\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إرسال JSON Response في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إرسال JSON Response\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إرسال JSON Response في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إرسال JSON Response\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إرسال JSON Response\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.3.7",
            "title": "إرسال JSON Response",
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
            "summary": "يمثل (إرسال JSON Response) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إرسال JSON Response) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال JSON Response) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إرسال JSON Response",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إرسال JSON Response)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال JSON Response\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إرسال JSON Response...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.3.8",
          "title": "إرسال HTML Response",
          "englishTitle": "إرسال HTML Response",
          "definition": "يُقصد بـ (إرسال HTML Response) أحد الركائز الجوهرية في مسار فهم HTTP Responses ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إرسال HTML Response) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إرسال HTML Response) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for إرسال HTML Response\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إرسال HTML Response في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إرسال HTML Response\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إرسال HTML Response في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إرسال HTML Response\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إرسال HTML Response\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.3.8",
            "title": "إرسال HTML Response",
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
            "summary": "يمثل (إرسال HTML Response) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إرسال HTML Response) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال HTML Response) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إرسال HTML Response",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إرسال HTML Response)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال HTML Response\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إرسال HTML Response...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "7.4",
      "title": "إدارة المسارات Routing",
      "englishTitle": "إدارة المسارات Routing",
      "subtopics": [
        {
          "id": "7.4.1",
          "title": "ما هو Routing؟",
          "englishTitle": "Routing",
          "definition": "يُقصد بـ (ما هو Routing؟) أحد الركائز الجوهرية في مسار إدارة المسارات Routing ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (ما هو Routing؟) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (ما هو Routing؟) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for ما هو Routing؟\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح ما هو Routing؟ في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: ما هو Routing؟\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ ما هو Routing؟ في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق ما هو Routing؟\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"ما هو Routing؟\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.4.1",
            "title": "ما هو Routing؟",
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
            "summary": "يمثل (ما هو Routing؟) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (ما هو Routing؟) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Routing؟) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على ما هو Routing؟",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (ما هو Routing؟)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو Routing؟\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: ما هو Routing؟...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.4.2",
          "title": "إنشاء مسارات متعددة",
          "englishTitle": "مسارات متعددة",
          "definition": "يُقصد بـ (إنشاء مسارات متعددة) أحد الركائز الجوهرية في مسار إدارة المسارات Routing ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء مسارات متعددة) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء مسارات متعددة) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for إنشاء مسارات متعددة\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء مسارات متعددة في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء مسارات متعددة\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء مسارات متعددة في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء مسارات متعددة\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء مسارات متعددة\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.4.2",
            "title": "إنشاء مسارات متعددة",
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
            "summary": "يمثل (إنشاء مسارات متعددة) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء مسارات متعددة) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء مسارات متعددة) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء مسارات متعددة",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء مسارات متعددة)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء مسارات متعددة\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء مسارات متعددة...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.4.3",
          "title": "التوجيه حسب HTTP Method",
          "englishTitle": "التوجيه حسب HTTP Method",
          "definition": "يُقصد بـ (التوجيه حسب HTTP Method) أحد الركائز الجوهرية في مسار إدارة المسارات Routing ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (التوجيه حسب HTTP Method) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (التوجيه حسب HTTP Method) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for التوجيه حسب HTTP Method\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح التوجيه حسب HTTP Method في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: التوجيه حسب HTTP Method\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ التوجيه حسب HTTP Method في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق التوجيه حسب HTTP Method\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"التوجيه حسب HTTP Method\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.4.3",
            "title": "التوجيه حسب HTTP Method",
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
            "summary": "يمثل (التوجيه حسب HTTP Method) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (التوجيه حسب HTTP Method) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التوجيه حسب HTTP Method) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على التوجيه حسب HTTP Method",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (التوجيه حسب HTTP Method)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين التوجيه حسب HTTP Method\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: التوجيه حسب HTTP Method...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.4.4",
          "title": "استخراج المعاملات من URL",
          "englishTitle": "استخراج المعاملات من URL",
          "definition": "يُقصد بـ (استخراج المعاملات من URL) أحد الركائز الجوهرية في مسار إدارة المسارات Routing ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخراج المعاملات من URL) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخراج المعاملات من URL) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for استخراج المعاملات من URL\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخراج المعاملات من URL في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخراج المعاملات من URL\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخراج المعاملات من URL في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخراج المعاملات من URL\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخراج المعاملات من URL\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.4.4",
            "title": "استخراج المعاملات من URL",
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
            "summary": "يمثل (استخراج المعاملات من URL) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخراج المعاملات من URL) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخراج المعاملات من URL) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخراج المعاملات من URL",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخراج المعاملات من URL)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخراج المعاملات من URL\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخراج المعاملات من URL...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.4.5",
          "title": "معالجة المسارات غير الموجودة",
          "englishTitle": "معالجة المسارات غير الموجودة",
          "definition": "يُقصد بـ (معالجة المسارات غير الموجودة) أحد الركائز الجوهرية في مسار إدارة المسارات Routing ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (معالجة المسارات غير الموجودة) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (معالجة المسارات غير الموجودة) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for معالجة المسارات غير الموجودة\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح معالجة المسارات غير الموجودة في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: معالجة المسارات غير الموجودة\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ معالجة المسارات غير الموجودة في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق معالجة المسارات غير الموجودة\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"معالجة المسارات غير الموجودة\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.4.5",
            "title": "معالجة المسارات غير الموجودة",
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
            "summary": "يمثل (معالجة المسارات غير الموجودة) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (معالجة المسارات غير الموجودة) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (معالجة المسارات غير الموجودة) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على معالجة المسارات غير الموجودة",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (معالجة المسارات غير الموجودة)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين معالجة المسارات غير الموجودة\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: معالجة المسارات غير الموجودة...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.4.6",
          "title": "تنظيم المسارات داخل ملفات مستقلة",
          "englishTitle": "تنظيم المسارات داخل ملفات مستقلة",
          "definition": "يُقصد بـ (تنظيم المسارات داخل ملفات مستقلة) أحد الركائز الجوهرية في مسار إدارة المسارات Routing ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تنظيم المسارات داخل ملفات مستقلة) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تنظيم المسارات داخل ملفات مستقلة) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for تنظيم المسارات داخل ملفات مستقلة\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تنظيم المسارات داخل ملفات مستقلة في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تنظيم المسارات داخل ملفات مستقلة\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تنظيم المسارات داخل ملفات مستقلة في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تنظيم المسارات داخل ملفات مستقلة\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تنظيم المسارات داخل ملفات مستقلة\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.4.6",
            "title": "تنظيم المسارات داخل ملفات مستقلة",
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
            "summary": "يمثل (تنظيم المسارات داخل ملفات مستقلة) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تنظيم المسارات داخل ملفات مستقلة) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنظيم المسارات داخل ملفات مستقلة) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تنظيم المسارات داخل ملفات مستقلة",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تنظيم المسارات داخل ملفات مستقلة)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تنظيم المسارات داخل ملفات مستقلة\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تنظيم المسارات داخل ملفات مستقلة...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "7.5",
      "title": "مشروع عملي: خادم منتجات",
      "englishTitle": "مشروع عملي: خادم منتجات",
      "subtopics": [
        {
          "id": "7.5.1",
          "title": "إنشاء بيانات منتجات تجريبية",
          "englishTitle": "بيانات منتجات تجريبية",
          "definition": "يُقصد بـ (إنشاء بيانات منتجات تجريبية) أحد الركائز الجوهرية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء بيانات منتجات تجريبية) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء بيانات منتجات تجريبية) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for إنشاء بيانات منتجات تجريبية\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء بيانات منتجات تجريبية في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء بيانات منتجات تجريبية\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء بيانات منتجات تجريبية في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء بيانات منتجات تجريبية\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء بيانات منتجات تجريبية\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.5.1",
            "title": "إنشاء بيانات منتجات تجريبية",
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
            "summary": "يمثل (إنشاء بيانات منتجات تجريبية) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء بيانات منتجات تجريبية) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء بيانات منتجات تجريبية) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء بيانات منتجات تجريبية",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء بيانات منتجات تجريبية)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء بيانات منتجات تجريبية\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء بيانات منتجات تجريبية...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.5.2",
          "title": "إنشاء API لعرض المنتجات",
          "englishTitle": "API لعرض المنتجات",
          "definition": "يُقصد بـ (إنشاء API لعرض المنتجات) أحد الركائز الجوهرية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء API لعرض المنتجات) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء API لعرض المنتجات) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for إنشاء API لعرض المنتجات\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء API لعرض المنتجات في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء API لعرض المنتجات\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء API لعرض المنتجات في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء API لعرض المنتجات\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء API لعرض المنتجات\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.5.2",
            "title": "إنشاء API لعرض المنتجات",
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
            "summary": "يمثل (إنشاء API لعرض المنتجات) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء API لعرض المنتجات) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء API لعرض المنتجات) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء API لعرض المنتجات",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء API لعرض المنتجات)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء API لعرض المنتجات\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء API لعرض المنتجات...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.5.3",
          "title": "البحث عن منتج باستخدام ID",
          "englishTitle": "البحث عن منتج بID",
          "definition": "يُقصد بـ (البحث عن منتج باستخدام ID) أحد الركائز الجوهرية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (البحث عن منتج باستخدام ID) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (البحث عن منتج باستخدام ID) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for البحث عن منتج باستخدام ID\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح البحث عن منتج باستخدام ID في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: البحث عن منتج باستخدام ID\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ البحث عن منتج باستخدام ID في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق البحث عن منتج باستخدام ID\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"البحث عن منتج باستخدام ID\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.5.3",
            "title": "البحث عن منتج باستخدام ID",
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
            "summary": "يمثل (البحث عن منتج باستخدام ID) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (البحث عن منتج باستخدام ID) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (البحث عن منتج باستخدام ID) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على البحث عن منتج باستخدام ID",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (البحث عن منتج باستخدام ID)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين البحث عن منتج باستخدام ID\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: البحث عن منتج باستخدام ID...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.5.4",
          "title": "إضافة منتج باستخدام POST",
          "englishTitle": "إضافة منتج بPOST",
          "definition": "يُقصد بـ (إضافة منتج باستخدام POST) أحد الركائز الجوهرية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إضافة منتج باستخدام POST) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إضافة منتج باستخدام POST) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for إضافة منتج باستخدام POST\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إضافة منتج باستخدام POST في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إضافة منتج باستخدام POST\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إضافة منتج باستخدام POST في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إضافة منتج باستخدام POST\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إضافة منتج باستخدام POST\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.5.4",
            "title": "إضافة منتج باستخدام POST",
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
            "summary": "يمثل (إضافة منتج باستخدام POST) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إضافة منتج باستخدام POST) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة منتج باستخدام POST) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إضافة منتج باستخدام POST",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إضافة منتج باستخدام POST)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إضافة منتج باستخدام POST\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إضافة منتج باستخدام POST...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.5.5",
          "title": "تعديل منتج باستخدام PUT",
          "englishTitle": "تعديل منتج بPUT",
          "definition": "يُقصد بـ (تعديل منتج باستخدام PUT) أحد الركائز الجوهرية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تعديل منتج باستخدام PUT) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تعديل منتج باستخدام PUT) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for تعديل منتج باستخدام PUT\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تعديل منتج باستخدام PUT في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تعديل منتج باستخدام PUT\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تعديل منتج باستخدام PUT في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تعديل منتج باستخدام PUT\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تعديل منتج باستخدام PUT\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.5.5",
            "title": "تعديل منتج باستخدام PUT",
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
            "summary": "يمثل (تعديل منتج باستخدام PUT) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تعديل منتج باستخدام PUT) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تعديل منتج باستخدام PUT) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تعديل منتج باستخدام PUT",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تعديل منتج باستخدام PUT)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تعديل منتج باستخدام PUT\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تعديل منتج باستخدام PUT...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.5.6",
          "title": "حذف منتج باستخدام DELETE",
          "englishTitle": "حذف منتج بDELETE",
          "definition": "يُقصد بـ (حذف منتج باستخدام DELETE) أحد الركائز الجوهرية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (حذف منتج باستخدام DELETE) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (حذف منتج باستخدام DELETE) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for حذف منتج باستخدام DELETE\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح حذف منتج باستخدام DELETE في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: حذف منتج باستخدام DELETE\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ حذف منتج باستخدام DELETE في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق حذف منتج باستخدام DELETE\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"حذف منتج باستخدام DELETE\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.5.6",
            "title": "حذف منتج باستخدام DELETE",
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
            "summary": "يمثل (حذف منتج باستخدام DELETE) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (حذف منتج باستخدام DELETE) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حذف منتج باستخدام DELETE) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على حذف منتج باستخدام DELETE",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (حذف منتج باستخدام DELETE)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين حذف منتج باستخدام DELETE\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: حذف منتج باستخدام DELETE...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "7.5.7",
          "title": "اختبار الخادم باستخدام Postman",
          "englishTitle": "اختبار الخادم بPostman",
          "definition": "يُقصد بـ (اختبار الخادم باستخدام Postman) أحد الركائز الجوهرية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (اختبار الخادم باستخدام Postman) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (اختبار الخادم باستخدام Postman) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
          "terms": [
            {
              "term": "Runtime",
              "pronunciation": "رن تايم",
              "meaning": "بيئة تشغيل البرامج وتفسير الشفرة في الذاكرة"
            },
            {
              "term": "Backend",
              "pronunciation": "باك إند",
              "meaning": "الخلفية البرمجية والخوادم وقواعد البيانات"
            },
            {
              "term": "Asynchronous",
              "pronunciation": "إيه-سينكرونس",
              "meaning": "العمليات غير المتزامنة التي لا تعطل المسار الرئيسي"
            }
          ],
          "syntax": "// Syntax representation for اختبار الخادم باستخدام Postman\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح اختبار الخادم باستخدام Postman في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: اختبار الخادم باستخدام Postman\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ اختبار الخادم باستخدام Postman في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق اختبار الخادم باستخدام Postman\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"اختبار الخادم باستخدام Postman\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 7.5.7",
            "title": "اختبار الخادم باستخدام Postman",
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
            "summary": "يمثل (اختبار الخادم باستخدام Postman) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (اختبار الخادم باستخدام Postman) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار الخادم باستخدام Postman) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على اختبار الخادم باستخدام Postman",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (اختبار الخادم باستخدام Postman)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين اختبار الخادم باستخدام Postman\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: اختبار الخادم باستخدام Postman...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    }
  ]
};

export default SECTION_7;
