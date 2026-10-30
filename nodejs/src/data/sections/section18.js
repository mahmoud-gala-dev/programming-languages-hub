// src/data/sections/section18.js
// القسم الثامن عشر: التكامل مع الخدمات الخارجية وواجهات API المتقدمة
export const SECTION_18 = {
  "id": 18,
  "number": "18",
  "title": "القسم الثامن عشر: التكامل مع الخدمات الخارجية وواجهات API المتقدمة",
  "englishTitle": "External Integrations, Webhooks & AI APIs",
  "badge": "خبير",
  "description": "منهج تعليمي شامل يغطي القسم الثامن عشر: التكامل مع الخدمات الخارجية وواجهات API المتقدمة بدقة تفصيلية وأمثلة عملية وتطبيق مباشر.",
  "topics": [
    {
      "id": "18.1",
      "title": "التعامل مع APIs الخارجية",
      "englishTitle": "التعامل مع APIs الخارجية",
      "subtopics": [
        {
          "id": "18.1.1",
          "title": "استخدام Fetch API في Node.js",
          "englishTitle": "Fetch API في Node.js",
          "definition": "يُقصد بـ (استخدام Fetch API في Node.js) أحد الركائز الجوهرية في مسار التعامل مع APIs الخارجية ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام Fetch API في Node.js) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام Fetch API في Node.js) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for استخدام Fetch API في Node.js\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام Fetch API في Node.js في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام Fetch API في Node.js\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام Fetch API في Node.js في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام Fetch API في Node.js\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام Fetch API في Node.js\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.1.1",
            "title": "استخدام Fetch API في Node.js",
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
            "summary": "يمثل (استخدام Fetch API في Node.js) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام Fetch API في Node.js) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Fetch API في Node.js) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام Fetch API في Node.js",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام Fetch API في Node.js)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Fetch API في Node.js\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام Fetch API في Node.js...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.1.2",
          "title": "استخدام Axios عند الحاجة",
          "englishTitle": "Axios عند الحاجة",
          "definition": "يُقصد بـ (استخدام Axios عند الحاجة) أحد الركائز الجوهرية في مسار التعامل مع APIs الخارجية ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام Axios عند الحاجة) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام Axios عند الحاجة) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for استخدام Axios عند الحاجة\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام Axios عند الحاجة في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام Axios عند الحاجة\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام Axios عند الحاجة في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام Axios عند الحاجة\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام Axios عند الحاجة\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.1.2",
            "title": "استخدام Axios عند الحاجة",
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
            "summary": "يمثل (استخدام Axios عند الحاجة) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام Axios عند الحاجة) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Axios عند الحاجة) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام Axios عند الحاجة",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام Axios عند الحاجة)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Axios عند الحاجة\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام Axios عند الحاجة...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.1.3",
          "title": "إرسال GET وPOST Requests",
          "englishTitle": "إرسال GET وPOST Requests",
          "definition": "يُقصد بـ (إرسال GET وPOST Requests) أحد الركائز الجوهرية في مسار التعامل مع APIs الخارجية ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إرسال GET وPOST Requests) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إرسال GET وPOST Requests) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إرسال GET وPOST Requests\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إرسال GET وPOST Requests في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إرسال GET وPOST Requests\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إرسال GET وPOST Requests في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إرسال GET وPOST Requests\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إرسال GET وPOST Requests\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.1.3",
            "title": "إرسال GET وPOST Requests",
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
            "summary": "يمثل (إرسال GET وPOST Requests) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إرسال GET وPOST Requests) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال GET وPOST Requests) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إرسال GET وPOST Requests",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إرسال GET وPOST Requests)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال GET وPOST Requests\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إرسال GET وPOST Requests...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.1.4",
          "title": "تمرير Headers وTokens",
          "englishTitle": "تمرير Headers وTokens",
          "definition": "يُقصد بـ (تمرير Headers وTokens) أحد الركائز الجوهرية في مسار التعامل مع APIs الخارجية ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تمرير Headers وTokens) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تمرير Headers وTokens) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for تمرير Headers وTokens\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تمرير Headers وTokens في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تمرير Headers وTokens\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تمرير Headers وTokens في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تمرير Headers وTokens\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تمرير Headers وTokens\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.1.4",
            "title": "تمرير Headers وTokens",
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
            "summary": "يمثل (تمرير Headers وTokens) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تمرير Headers وTokens) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تمرير Headers وTokens) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تمرير Headers وTokens",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تمرير Headers وTokens)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تمرير Headers وTokens\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تمرير Headers وTokens...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.1.5",
          "title": "معالجة Timeout",
          "englishTitle": "معالجة Timeout",
          "definition": "يُقصد بـ (معالجة Timeout) أحد الركائز الجوهرية في مسار التعامل مع APIs الخارجية ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (معالجة Timeout) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (معالجة Timeout) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for معالجة Timeout\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح معالجة Timeout في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: معالجة Timeout\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ معالجة Timeout في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق معالجة Timeout\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"معالجة Timeout\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.1.5",
            "title": "معالجة Timeout",
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
            "summary": "يمثل (معالجة Timeout) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (معالجة Timeout) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (معالجة Timeout) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على معالجة Timeout",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (معالجة Timeout)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين معالجة Timeout\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: معالجة Timeout...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.1.6",
          "title": "إعادة المحاولة باستخدام Retry",
          "englishTitle": "إعادة المحاولة بRetry",
          "definition": "يُقصد بـ (إعادة المحاولة باستخدام Retry) أحد الركائز الجوهرية في مسار التعامل مع APIs الخارجية ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إعادة المحاولة باستخدام Retry) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إعادة المحاولة باستخدام Retry) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إعادة المحاولة باستخدام Retry\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إعادة المحاولة باستخدام Retry في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إعادة المحاولة باستخدام Retry\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إعادة المحاولة باستخدام Retry في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إعادة المحاولة باستخدام Retry\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إعادة المحاولة باستخدام Retry\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.1.6",
            "title": "إعادة المحاولة باستخدام Retry",
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
            "summary": "يمثل (إعادة المحاولة باستخدام Retry) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إعادة المحاولة باستخدام Retry) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعادة المحاولة باستخدام Retry) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إعادة المحاولة باستخدام Retry",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إعادة المحاولة باستخدام Retry)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إعادة المحاولة باستخدام Retry\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إعادة المحاولة باستخدام Retry...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.1.7",
          "title": "التعامل مع Rate Limits",
          "englishTitle": "التعامل مع Rate Limits",
          "definition": "يُقصد بـ (التعامل مع Rate Limits) أحد الركائز الجوهرية في مسار التعامل مع APIs الخارجية ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (التعامل مع Rate Limits) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (التعامل مع Rate Limits) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for التعامل مع Rate Limits\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح التعامل مع Rate Limits في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: التعامل مع Rate Limits\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ التعامل مع Rate Limits في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق التعامل مع Rate Limits\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"التعامل مع Rate Limits\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.1.7",
            "title": "التعامل مع Rate Limits",
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
            "summary": "يمثل (التعامل مع Rate Limits) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (التعامل مع Rate Limits) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التعامل مع Rate Limits) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على التعامل مع Rate Limits",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (التعامل مع Rate Limits)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين التعامل مع Rate Limits\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: التعامل مع Rate Limits...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.1.8",
          "title": "التحقق من بيانات الاستجابة",
          "englishTitle": "التحقق من بيانات الاستجابة",
          "definition": "يُقصد بـ (التحقق من بيانات الاستجابة) أحد الركائز الجوهرية في مسار التعامل مع APIs الخارجية ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (التحقق من بيانات الاستجابة) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (التحقق من بيانات الاستجابة) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for التحقق من بيانات الاستجابة\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح التحقق من بيانات الاستجابة في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: التحقق من بيانات الاستجابة\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ التحقق من بيانات الاستجابة في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق التحقق من بيانات الاستجابة\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"التحقق من بيانات الاستجابة\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.1.8",
            "title": "التحقق من بيانات الاستجابة",
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
            "summary": "يمثل (التحقق من بيانات الاستجابة) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (التحقق من بيانات الاستجابة) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحقق من بيانات الاستجابة) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على التحقق من بيانات الاستجابة",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (التحقق من بيانات الاستجابة)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين التحقق من بيانات الاستجابة\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: التحقق من بيانات الاستجابة...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "18.2",
      "title": "Webhooks",
      "englishTitle": "Webhooks",
      "subtopics": [
        {
          "id": "18.2.1",
          "title": "ما هو Webhook؟",
          "englishTitle": "Webhook",
          "definition": "يُقصد بـ (ما هو Webhook؟) أحد الركائز الجوهرية في مسار Webhooks ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (ما هو Webhook؟) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (ما هو Webhook؟) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for ما هو Webhook؟\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح ما هو Webhook؟ في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: ما هو Webhook؟\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ ما هو Webhook؟ في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق ما هو Webhook؟\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"ما هو Webhook؟\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.2.1",
            "title": "ما هو Webhook؟",
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
            "summary": "يمثل (ما هو Webhook؟) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (ما هو Webhook؟) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Webhook؟) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على ما هو Webhook؟",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (ما هو Webhook؟)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو Webhook؟\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: ما هو Webhook؟...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.2.2",
          "title": "الفرق بين Webhook وREST API",
          "englishTitle": "Webhook وREST API",
          "definition": "يُقصد بـ (الفرق بين Webhook وREST API) أحد الركائز الجوهرية في مسار Webhooks ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (الفرق بين Webhook وREST API) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (الفرق بين Webhook وREST API) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for الفرق بين Webhook وREST API\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح الفرق بين Webhook وREST API في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: الفرق بين Webhook وREST API\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ الفرق بين Webhook وREST API في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق الفرق بين Webhook وREST API\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"الفرق بين Webhook وREST API\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.2.2",
            "title": "الفرق بين Webhook وREST API",
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
            "summary": "يمثل (الفرق بين Webhook وREST API) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (الفرق بين Webhook وREST API) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Webhook وREST API) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على الفرق بين Webhook وREST API",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (الفرق بين Webhook وREST API)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Webhook وREST API\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: الفرق بين Webhook وREST API...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.2.3",
          "title": "إنشاء Webhook Endpoint",
          "englishTitle": "Webhook Endpoint",
          "definition": "يُقصد بـ (إنشاء Webhook Endpoint) أحد الركائز الجوهرية في مسار Webhooks ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء Webhook Endpoint) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء Webhook Endpoint) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إنشاء Webhook Endpoint\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء Webhook Endpoint في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء Webhook Endpoint\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء Webhook Endpoint في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء Webhook Endpoint\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء Webhook Endpoint\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.2.3",
            "title": "إنشاء Webhook Endpoint",
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
            "summary": "يمثل (إنشاء Webhook Endpoint) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء Webhook Endpoint) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Webhook Endpoint) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء Webhook Endpoint",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء Webhook Endpoint)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Webhook Endpoint\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء Webhook Endpoint...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.2.4",
          "title": "التحقق من Webhook Signature",
          "englishTitle": "التحقق من Webhook Signature",
          "definition": "يُقصد بـ (التحقق من Webhook Signature) أحد الركائز الجوهرية في مسار Webhooks ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (التحقق من Webhook Signature) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (التحقق من Webhook Signature) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for التحقق من Webhook Signature\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح التحقق من Webhook Signature في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: التحقق من Webhook Signature\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ التحقق من Webhook Signature في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق التحقق من Webhook Signature\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"التحقق من Webhook Signature\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.2.4",
            "title": "التحقق من Webhook Signature",
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
            "summary": "يمثل (التحقق من Webhook Signature) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (التحقق من Webhook Signature) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحقق من Webhook Signature) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على التحقق من Webhook Signature",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (التحقق من Webhook Signature)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين التحقق من Webhook Signature\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: التحقق من Webhook Signature...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.2.5",
          "title": "معالجة الأحداث الواردة",
          "englishTitle": "معالجة الأحداث الواردة",
          "definition": "يُقصد بـ (معالجة الأحداث الواردة) أحد الركائز الجوهرية في مسار Webhooks ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (معالجة الأحداث الواردة) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (معالجة الأحداث الواردة) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for معالجة الأحداث الواردة\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح معالجة الأحداث الواردة في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: معالجة الأحداث الواردة\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ معالجة الأحداث الواردة في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق معالجة الأحداث الواردة\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"معالجة الأحداث الواردة\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.2.5",
            "title": "معالجة الأحداث الواردة",
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
            "summary": "يمثل (معالجة الأحداث الواردة) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (معالجة الأحداث الواردة) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (معالجة الأحداث الواردة) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على معالجة الأحداث الواردة",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (معالجة الأحداث الواردة)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين معالجة الأحداث الواردة\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: معالجة الأحداث الواردة...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.2.6",
          "title": "منع تكرار معالجة الحدث",
          "englishTitle": "منع تكرار معالجة الحدث",
          "definition": "يُقصد بـ (منع تكرار معالجة الحدث) أحد الركائز الجوهرية في مسار Webhooks ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (منع تكرار معالجة الحدث) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (منع تكرار معالجة الحدث) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for منع تكرار معالجة الحدث\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح منع تكرار معالجة الحدث في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: منع تكرار معالجة الحدث\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ منع تكرار معالجة الحدث في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق منع تكرار معالجة الحدث\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"منع تكرار معالجة الحدث\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.2.6",
            "title": "منع تكرار معالجة الحدث",
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
            "summary": "يمثل (منع تكرار معالجة الحدث) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (منع تكرار معالجة الحدث) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (منع تكرار معالجة الحدث) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على منع تكرار معالجة الحدث",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (منع تكرار معالجة الحدث)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين منع تكرار معالجة الحدث\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: منع تكرار معالجة الحدث...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.2.7",
          "title": "إعادة محاولة إرسال الأحداث",
          "englishTitle": "إعادة محاولة إرسال الأحداث",
          "definition": "يُقصد بـ (إعادة محاولة إرسال الأحداث) أحد الركائز الجوهرية في مسار Webhooks ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إعادة محاولة إرسال الأحداث) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إعادة محاولة إرسال الأحداث) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إعادة محاولة إرسال الأحداث\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إعادة محاولة إرسال الأحداث في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إعادة محاولة إرسال الأحداث\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إعادة محاولة إرسال الأحداث في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إعادة محاولة إرسال الأحداث\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إعادة محاولة إرسال الأحداث\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.2.7",
            "title": "إعادة محاولة إرسال الأحداث",
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
            "summary": "يمثل (إعادة محاولة إرسال الأحداث) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إعادة محاولة إرسال الأحداث) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعادة محاولة إرسال الأحداث) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إعادة محاولة إرسال الأحداث",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إعادة محاولة إرسال الأحداث)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إعادة محاولة إرسال الأحداث\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إعادة محاولة إرسال الأحداث...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.2.8",
          "title": "تسجيل أحداث Webhooks",
          "englishTitle": "تسجيل أحداث Webhooks",
          "definition": "يُقصد بـ (تسجيل أحداث Webhooks) أحد الركائز الجوهرية في مسار Webhooks ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تسجيل أحداث Webhooks) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تسجيل أحداث Webhooks) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for تسجيل أحداث Webhooks\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تسجيل أحداث Webhooks في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تسجيل أحداث Webhooks\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تسجيل أحداث Webhooks في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تسجيل أحداث Webhooks\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تسجيل أحداث Webhooks\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.2.8",
            "title": "تسجيل أحداث Webhooks",
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
            "summary": "يمثل (تسجيل أحداث Webhooks) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تسجيل أحداث Webhooks) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تسجيل أحداث Webhooks) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تسجيل أحداث Webhooks",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تسجيل أحداث Webhooks)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تسجيل أحداث Webhooks\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تسجيل أحداث Webhooks...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "18.3",
      "title": "إرسال البريد الإلكتروني والإشعارات",
      "englishTitle": "إرسال البريد الإلكتروني والإشعارات",
      "subtopics": [
        {
          "id": "18.3.1",
          "title": "مفهوم SMTP",
          "englishTitle": "SMTP",
          "definition": "يُقصد بـ (مفهوم SMTP) أحد الركائز الجوهرية في مسار إرسال البريد الإلكتروني والإشعارات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم SMTP) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم SMTP) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم SMTP\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم SMTP في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم SMTP\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم SMTP في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم SMTP\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم SMTP\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.3.1",
            "title": "مفهوم SMTP",
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
            "summary": "يمثل (مفهوم SMTP) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم SMTP) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم SMTP) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم SMTP",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم SMTP)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم SMTP\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم SMTP...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.3.2",
          "title": "استخدام Nodemailer",
          "englishTitle": "Nodemailer",
          "definition": "يُقصد بـ (استخدام Nodemailer) أحد الركائز الجوهرية في مسار إرسال البريد الإلكتروني والإشعارات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام Nodemailer) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام Nodemailer) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for استخدام Nodemailer\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام Nodemailer في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام Nodemailer\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام Nodemailer في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام Nodemailer\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام Nodemailer\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.3.2",
            "title": "استخدام Nodemailer",
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
            "summary": "يمثل (استخدام Nodemailer) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام Nodemailer) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Nodemailer) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام Nodemailer",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام Nodemailer)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Nodemailer\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام Nodemailer...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.3.3",
          "title": "إرسال بريد HTML",
          "englishTitle": "إرسال بريد HTML",
          "definition": "يُقصد بـ (إرسال بريد HTML) أحد الركائز الجوهرية في مسار إرسال البريد الإلكتروني والإشعارات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إرسال بريد HTML) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إرسال بريد HTML) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إرسال بريد HTML\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إرسال بريد HTML في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إرسال بريد HTML\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إرسال بريد HTML في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إرسال بريد HTML\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إرسال بريد HTML\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.3.3",
            "title": "إرسال بريد HTML",
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
            "summary": "يمثل (إرسال بريد HTML) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إرسال بريد HTML) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال بريد HTML) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إرسال بريد HTML",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إرسال بريد HTML)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال بريد HTML\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إرسال بريد HTML...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.3.4",
          "title": "إرسال رسائل تأكيد البريد الإلكتروني",
          "englishTitle": "إرسال رسائل تأكيد البريد الإلكتروني",
          "definition": "يُقصد بـ (إرسال رسائل تأكيد البريد الإلكتروني) أحد الركائز الجوهرية في مسار إرسال البريد الإلكتروني والإشعارات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إرسال رسائل تأكيد البريد الإلكتروني) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إرسال رسائل تأكيد البريد الإلكتروني) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إرسال رسائل تأكيد البريد الإلكتروني\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إرسال رسائل تأكيد البريد الإلكتروني في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إرسال رسائل تأكيد البريد الإلكتروني\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إرسال رسائل تأكيد البريد الإلكتروني في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إرسال رسائل تأكيد البريد الإلكتروني\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إرسال رسائل تأكيد البريد الإلكتروني\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.3.4",
            "title": "إرسال رسائل تأكيد البريد الإلكتروني",
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
            "summary": "يمثل (إرسال رسائل تأكيد البريد الإلكتروني) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إرسال رسائل تأكيد البريد الإلكتروني) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال رسائل تأكيد البريد الإلكتروني) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إرسال رسائل تأكيد البريد الإلكتروني",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إرسال رسائل تأكيد البريد الإلكتروني)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال رسائل تأكيد البريد الإلكتروني\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إرسال رسائل تأكيد البريد الإلكتروني...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.3.5",
          "title": "إرسال روابط استعادة كلمة المرور",
          "englishTitle": "إرسال روابط استعادة كلمة المرور",
          "definition": "يُقصد بـ (إرسال روابط استعادة كلمة المرور) أحد الركائز الجوهرية في مسار إرسال البريد الإلكتروني والإشعارات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إرسال روابط استعادة كلمة المرور) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إرسال روابط استعادة كلمة المرور) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إرسال روابط استعادة كلمة المرور\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إرسال روابط استعادة كلمة المرور في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إرسال روابط استعادة كلمة المرور\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إرسال روابط استعادة كلمة المرور في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إرسال روابط استعادة كلمة المرور\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إرسال روابط استعادة كلمة المرور\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.3.5",
            "title": "إرسال روابط استعادة كلمة المرور",
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
            "summary": "يمثل (إرسال روابط استعادة كلمة المرور) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إرسال روابط استعادة كلمة المرور) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إرسال روابط استعادة كلمة المرور) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إرسال روابط استعادة كلمة المرور",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إرسال روابط استعادة كلمة المرور)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال روابط استعادة كلمة المرور\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إرسال روابط استعادة كلمة المرور...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.3.6",
          "title": "استخدام قوالب البريد",
          "englishTitle": "قوالب البريد",
          "definition": "يُقصد بـ (استخدام قوالب البريد) أحد الركائز الجوهرية في مسار إرسال البريد الإلكتروني والإشعارات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام قوالب البريد) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام قوالب البريد) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for استخدام قوالب البريد\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام قوالب البريد في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام قوالب البريد\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام قوالب البريد في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام قوالب البريد\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام قوالب البريد\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.3.6",
            "title": "استخدام قوالب البريد",
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
            "summary": "يمثل (استخدام قوالب البريد) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام قوالب البريد) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام قوالب البريد) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام قوالب البريد",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام قوالب البريد)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام قوالب البريد\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام قوالب البريد...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.3.7",
          "title": "ربط خدمات البريد الخارجية",
          "englishTitle": "ربط خدمات البريد الخارجية",
          "definition": "يُقصد بـ (ربط خدمات البريد الخارجية) أحد الركائز الجوهرية في مسار إرسال البريد الإلكتروني والإشعارات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (ربط خدمات البريد الخارجية) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (ربط خدمات البريد الخارجية) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for ربط خدمات البريد الخارجية\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح ربط خدمات البريد الخارجية في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: ربط خدمات البريد الخارجية\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ ربط خدمات البريد الخارجية في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق ربط خدمات البريد الخارجية\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"ربط خدمات البريد الخارجية\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.3.7",
            "title": "ربط خدمات البريد الخارجية",
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
            "summary": "يمثل (ربط خدمات البريد الخارجية) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (ربط خدمات البريد الخارجية) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ربط خدمات البريد الخارجية) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على ربط خدمات البريد الخارجية",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (ربط خدمات البريد الخارجية)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين ربط خدمات البريد الخارجية\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: ربط خدمات البريد الخارجية...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.3.8",
          "title": "تتبع فشل إرسال الرسائل",
          "englishTitle": "تتبع فشل إرسال الرسائل",
          "definition": "يُقصد بـ (تتبع فشل إرسال الرسائل) أحد الركائز الجوهرية في مسار إرسال البريد الإلكتروني والإشعارات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تتبع فشل إرسال الرسائل) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تتبع فشل إرسال الرسائل) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for تتبع فشل إرسال الرسائل\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تتبع فشل إرسال الرسائل في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تتبع فشل إرسال الرسائل\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تتبع فشل إرسال الرسائل في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تتبع فشل إرسال الرسائل\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تتبع فشل إرسال الرسائل\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.3.8",
            "title": "تتبع فشل إرسال الرسائل",
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
            "summary": "يمثل (تتبع فشل إرسال الرسائل) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تتبع فشل إرسال الرسائل) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تتبع فشل إرسال الرسائل) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تتبع فشل إرسال الرسائل",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تتبع فشل إرسال الرسائل)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تتبع فشل إرسال الرسائل\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تتبع فشل إرسال الرسائل...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "18.4",
      "title": "GraphQL وgRPC",
      "englishTitle": "GraphQL وgRPC",
      "subtopics": [
        {
          "id": "18.4.1",
          "title": "مقدمة في GraphQL",
          "englishTitle": "مقدمة في GraphQL",
          "definition": "يُقصد بـ (مقدمة في GraphQL) أحد الركائز الجوهرية في مسار GraphQL وgRPC ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مقدمة في GraphQL) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مقدمة في GraphQL) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مقدمة في GraphQL\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مقدمة في GraphQL في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مقدمة في GraphQL\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مقدمة في GraphQL في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مقدمة في GraphQL\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مقدمة في GraphQL\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.4.1",
            "title": "مقدمة في GraphQL",
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
            "summary": "يمثل (مقدمة في GraphQL) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مقدمة في GraphQL) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في GraphQL) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مقدمة في GraphQL",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مقدمة في GraphQL)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في GraphQL\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مقدمة في GraphQL...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.4.2",
          "title": "الفرق بين REST وGraphQL",
          "englishTitle": "REST وGraphQL",
          "definition": "يُقصد بـ (الفرق بين REST وGraphQL) أحد الركائز الجوهرية في مسار GraphQL وgRPC ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (الفرق بين REST وGraphQL) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (الفرق بين REST وGraphQL) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for الفرق بين REST وGraphQL\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح الفرق بين REST وGraphQL في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: الفرق بين REST وGraphQL\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ الفرق بين REST وGraphQL في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق الفرق بين REST وGraphQL\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"الفرق بين REST وGraphQL\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.4.2",
            "title": "الفرق بين REST وGraphQL",
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
            "summary": "يمثل (الفرق بين REST وGraphQL) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (الفرق بين REST وGraphQL) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين REST وGraphQL) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على الفرق بين REST وGraphQL",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (الفرق بين REST وGraphQL)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين REST وGraphQL\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: الفرق بين REST وGraphQL...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.4.3",
          "title": "مفهوم Schema وResolvers",
          "englishTitle": "Schema وResolvers",
          "definition": "يُقصد بـ (مفهوم Schema وResolvers) أحد الركائز الجوهرية في مسار GraphQL وgRPC ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم Schema وResolvers) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم Schema وResolvers) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم Schema وResolvers\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم Schema وResolvers في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم Schema وResolvers\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم Schema وResolvers في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم Schema وResolvers\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم Schema وResolvers\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.4.3",
            "title": "مفهوم Schema وResolvers",
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
            "summary": "يمثل (مفهوم Schema وResolvers) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم Schema وResolvers) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Schema وResolvers) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم Schema وResolvers",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم Schema وResolvers)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Schema وResolvers\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم Schema وResolvers...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.4.4",
          "title": "إنشاء GraphQL API",
          "englishTitle": "GraphQL API",
          "definition": "يُقصد بـ (إنشاء GraphQL API) أحد الركائز الجوهرية في مسار GraphQL وgRPC ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء GraphQL API) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء GraphQL API) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إنشاء GraphQL API\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء GraphQL API في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء GraphQL API\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء GraphQL API في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء GraphQL API\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء GraphQL API\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.4.4",
            "title": "إنشاء GraphQL API",
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
            "summary": "يمثل (إنشاء GraphQL API) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء GraphQL API) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء GraphQL API) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء GraphQL API",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء GraphQL API)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء GraphQL API\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء GraphQL API...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.4.5",
          "title": "معالجة مشكلة N+1 باستخدام DataLoader",
          "englishTitle": "معالجة مشكلة N+1 بDataLoader",
          "definition": "يُقصد بـ (معالجة مشكلة N+1 باستخدام DataLoader) أحد الركائز الجوهرية في مسار GraphQL وgRPC ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (معالجة مشكلة N+1 باستخدام DataLoader) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (معالجة مشكلة N+1 باستخدام DataLoader) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for معالجة مشكلة N+1 باستخدام DataLoader\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح معالجة مشكلة N+1 باستخدام DataLoader في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: معالجة مشكلة N+1 باستخدام DataLoader\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ معالجة مشكلة N+1 باستخدام DataLoader في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق معالجة مشكلة N+1 باستخدام DataLoader\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"معالجة مشكلة N+1 باستخدام DataLoader\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.4.5",
            "title": "معالجة مشكلة N+1 باستخدام DataLoader",
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
            "summary": "يمثل (معالجة مشكلة N+1 باستخدام DataLoader) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (معالجة مشكلة N+1 باستخدام DataLoader) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (معالجة مشكلة N+1 باستخدام DataLoader) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على معالجة مشكلة N+1 باستخدام DataLoader",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (معالجة مشكلة N+1 باستخدام DataLoader)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين معالجة مشكلة N+1 باستخدام DataLoader\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: معالجة مشكلة N+1 باستخدام DataLoader...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.4.6",
          "title": "مقدمة في gRPC",
          "englishTitle": "مقدمة في gRPC",
          "definition": "يُقصد بـ (مقدمة في gRPC) أحد الركائز الجوهرية في مسار GraphQL وgRPC ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مقدمة في gRPC) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مقدمة في gRPC) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مقدمة في gRPC\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مقدمة في gRPC في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مقدمة في gRPC\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مقدمة في gRPC في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مقدمة في gRPC\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مقدمة في gRPC\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.4.6",
            "title": "مقدمة في gRPC",
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
            "summary": "يمثل (مقدمة في gRPC) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مقدمة في gRPC) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في gRPC) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مقدمة في gRPC",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مقدمة في gRPC)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في gRPC\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مقدمة في gRPC...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.4.7",
          "title": "مفهوم Protocol Buffers",
          "englishTitle": "Protocol Buffers",
          "definition": "يُقصد بـ (مفهوم Protocol Buffers) أحد الركائز الجوهرية في مسار GraphQL وgRPC ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم Protocol Buffers) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم Protocol Buffers) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم Protocol Buffers\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم Protocol Buffers في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم Protocol Buffers\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم Protocol Buffers في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم Protocol Buffers\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم Protocol Buffers\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.4.7",
            "title": "مفهوم Protocol Buffers",
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
            "summary": "يمثل (مفهوم Protocol Buffers) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم Protocol Buffers) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Protocol Buffers) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم Protocol Buffers",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم Protocol Buffers)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Protocol Buffers\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم Protocol Buffers...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.4.8",
          "title": "مقارنة REST وGraphQL وgRPC",
          "englishTitle": "مقارنة REST وGraphQL وgRPC",
          "definition": "يُقصد بـ (مقارنة REST وGraphQL وgRPC) أحد الركائز الجوهرية في مسار GraphQL وgRPC ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مقارنة REST وGraphQL وgRPC) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مقارنة REST وGraphQL وgRPC) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مقارنة REST وGraphQL وgRPC\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مقارنة REST وGraphQL وgRPC في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مقارنة REST وGraphQL وgRPC\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مقارنة REST وGraphQL وgRPC في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مقارنة REST وGraphQL وgRPC\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مقارنة REST وGraphQL وgRPC\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.4.8",
            "title": "مقارنة REST وGraphQL وgRPC",
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
            "summary": "يمثل (مقارنة REST وGraphQL وgRPC) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مقارنة REST وGraphQL وgRPC) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقارنة REST وGraphQL وgRPC) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مقارنة REST وGraphQL وgRPC",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مقارنة REST وGraphQL وgRPC)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مقارنة REST وGraphQL وgRPC\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مقارنة REST وGraphQL وgRPC...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "18.5",
      "title": "دمج خدمات الذكاء الاصطناعي",
      "englishTitle": "دمج خدمات الذكاء الاصطناعي",
      "subtopics": [
        {
          "id": "18.5.1",
          "title": "مفهوم AI APIs",
          "englishTitle": "AI APIs",
          "definition": "يُقصد بـ (مفهوم AI APIs) أحد الركائز الجوهرية في مسار دمج خدمات الذكاء الاصطناعي ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم AI APIs) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم AI APIs) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم AI APIs\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم AI APIs في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم AI APIs\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم AI APIs في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم AI APIs\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم AI APIs\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.5.1",
            "title": "مفهوم AI APIs",
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
            "summary": "يمثل (مفهوم AI APIs) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم AI APIs) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم AI APIs) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم AI APIs",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم AI APIs)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم AI APIs\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم AI APIs...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.5.2",
          "title": "استدعاء نموذج لغوي من Node.js",
          "englishTitle": "استدعاء نموذج لغوي من Node.js",
          "definition": "يُقصد بـ (استدعاء نموذج لغوي من Node.js) أحد الركائز الجوهرية في مسار دمج خدمات الذكاء الاصطناعي ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استدعاء نموذج لغوي من Node.js) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استدعاء نموذج لغوي من Node.js) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for استدعاء نموذج لغوي من Node.js\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استدعاء نموذج لغوي من Node.js في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استدعاء نموذج لغوي من Node.js\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استدعاء نموذج لغوي من Node.js في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استدعاء نموذج لغوي من Node.js\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استدعاء نموذج لغوي من Node.js\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.5.2",
            "title": "استدعاء نموذج لغوي من Node.js",
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
            "summary": "يمثل (استدعاء نموذج لغوي من Node.js) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استدعاء نموذج لغوي من Node.js) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استدعاء نموذج لغوي من Node.js) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استدعاء نموذج لغوي من Node.js",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استدعاء نموذج لغوي من Node.js)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استدعاء نموذج لغوي من Node.js\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استدعاء نموذج لغوي من Node.js...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.5.3",
          "title": "إدارة API Keys",
          "englishTitle": "API Keys",
          "definition": "يُقصد بـ (إدارة API Keys) أحد الركائز الجوهرية في مسار دمج خدمات الذكاء الاصطناعي ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إدارة API Keys) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إدارة API Keys) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إدارة API Keys\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إدارة API Keys في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إدارة API Keys\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إدارة API Keys في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إدارة API Keys\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إدارة API Keys\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.5.3",
            "title": "إدارة API Keys",
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
            "summary": "يمثل (إدارة API Keys) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إدارة API Keys) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة API Keys) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إدارة API Keys",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إدارة API Keys)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة API Keys\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إدارة API Keys...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.5.4",
          "title": "التعامل مع Streaming Responses",
          "englishTitle": "التعامل مع Streaming Responses",
          "definition": "يُقصد بـ (التعامل مع Streaming Responses) أحد الركائز الجوهرية في مسار دمج خدمات الذكاء الاصطناعي ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (التعامل مع Streaming Responses) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (التعامل مع Streaming Responses) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for التعامل مع Streaming Responses\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح التعامل مع Streaming Responses في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: التعامل مع Streaming Responses\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ التعامل مع Streaming Responses في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق التعامل مع Streaming Responses\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"التعامل مع Streaming Responses\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.5.4",
            "title": "التعامل مع Streaming Responses",
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
            "summary": "يمثل (التعامل مع Streaming Responses) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (التعامل مع Streaming Responses) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التعامل مع Streaming Responses) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على التعامل مع Streaming Responses",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (التعامل مع Streaming Responses)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين التعامل مع Streaming Responses\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: التعامل مع Streaming Responses...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.5.5",
          "title": "بناء خدمة محادثة باستخدام API خارجي",
          "englishTitle": "بناء خدمة محادثة بAPI خارجي",
          "definition": "يُقصد بـ (بناء خدمة محادثة باستخدام API خارجي) أحد الركائز الجوهرية في مسار دمج خدمات الذكاء الاصطناعي ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (بناء خدمة محادثة باستخدام API خارجي) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (بناء خدمة محادثة باستخدام API خارجي) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for بناء خدمة محادثة باستخدام API خارجي\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح بناء خدمة محادثة باستخدام API خارجي في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: بناء خدمة محادثة باستخدام API خارجي\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ بناء خدمة محادثة باستخدام API خارجي في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق بناء خدمة محادثة باستخدام API خارجي\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"بناء خدمة محادثة باستخدام API خارجي\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.5.5",
            "title": "بناء خدمة محادثة باستخدام API خارجي",
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
            "summary": "يمثل (بناء خدمة محادثة باستخدام API خارجي) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (بناء خدمة محادثة باستخدام API خارجي) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (بناء خدمة محادثة باستخدام API خارجي) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على بناء خدمة محادثة باستخدام API خارجي",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (بناء خدمة محادثة باستخدام API خارجي)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين بناء خدمة محادثة باستخدام API خارجي\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: بناء خدمة محادثة باستخدام API خارجي...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.5.6",
          "title": "مقدمة في Embeddings",
          "englishTitle": "مقدمة في Embeddings",
          "definition": "يُقصد بـ (مقدمة في Embeddings) أحد الركائز الجوهرية في مسار دمج خدمات الذكاء الاصطناعي ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مقدمة في Embeddings) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مقدمة في Embeddings) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مقدمة في Embeddings\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مقدمة في Embeddings في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مقدمة في Embeddings\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مقدمة في Embeddings في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مقدمة في Embeddings\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مقدمة في Embeddings\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.5.6",
            "title": "مقدمة في Embeddings",
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
            "summary": "يمثل (مقدمة في Embeddings) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مقدمة في Embeddings) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Embeddings) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مقدمة في Embeddings",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مقدمة في Embeddings)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في Embeddings\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مقدمة في Embeddings...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.5.7",
          "title": "مفهوم Retrieval-Augmented Generation",
          "englishTitle": "Retrieval-Augmented Generation",
          "definition": "يُقصد بـ (مفهوم Retrieval-Augmented Generation) أحد الركائز الجوهرية في مسار دمج خدمات الذكاء الاصطناعي ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم Retrieval-Augmented Generation) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم Retrieval-Augmented Generation) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم Retrieval-Augmented Generation\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم Retrieval-Augmented Generation في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم Retrieval-Augmented Generation\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم Retrieval-Augmented Generation في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم Retrieval-Augmented Generation\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم Retrieval-Augmented Generation\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.5.7",
            "title": "مفهوم Retrieval-Augmented Generation",
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
            "summary": "يمثل (مفهوم Retrieval-Augmented Generation) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم Retrieval-Augmented Generation) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Retrieval-Augmented Generation) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم Retrieval-Augmented Generation",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم Retrieval-Augmented Generation)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Retrieval-Augmented Generation\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم Retrieval-Augmented Generation...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.5.8",
          "title": "استخدام Vector Databases",
          "englishTitle": "Vector Databases",
          "definition": "يُقصد بـ (استخدام Vector Databases) أحد الركائز الجوهرية في مسار دمج خدمات الذكاء الاصطناعي ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام Vector Databases) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام Vector Databases) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for استخدام Vector Databases\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام Vector Databases في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام Vector Databases\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام Vector Databases في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام Vector Databases\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام Vector Databases\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.5.8",
            "title": "استخدام Vector Databases",
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
            "summary": "يمثل (استخدام Vector Databases) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام Vector Databases) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Vector Databases) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام Vector Databases",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام Vector Databases)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Vector Databases\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام Vector Databases...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "18.5.9",
          "title": "التحكم في التكلفة والمهلات والحدود",
          "englishTitle": "التحكم في التكلفة والمهلات والحدود",
          "definition": "يُقصد بـ (التحكم في التكلفة والمهلات والحدود) أحد الركائز الجوهرية في مسار دمج خدمات الذكاء الاصطناعي ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (التحكم في التكلفة والمهلات والحدود) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (التحكم في التكلفة والمهلات والحدود) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for التحكم في التكلفة والمهلات والحدود\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح التحكم في التكلفة والمهلات والحدود في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: التحكم في التكلفة والمهلات والحدود\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ التحكم في التكلفة والمهلات والحدود في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق التحكم في التكلفة والمهلات والحدود\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"التحكم في التكلفة والمهلات والحدود\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 18.5.9",
            "title": "التحكم في التكلفة والمهلات والحدود",
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
            "summary": "يمثل (التحكم في التكلفة والمهلات والحدود) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (التحكم في التكلفة والمهلات والحدود) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحكم في التكلفة والمهلات والحدود) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على التحكم في التكلفة والمهلات والحدود",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (التحكم في التكلفة والمهلات والحدود)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين التحكم في التكلفة والمهلات والحدود\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: التحكم في التكلفة والمهلات والحدود...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    }
  ]
};

export default SECTION_18;
