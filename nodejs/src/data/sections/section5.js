// src/data/sections/section5.js
// القسم الخامس: إدارة المشاريع والحزم والوحدات
export const SECTION_5 = {
  "id": 5,
  "number": "05",
  "title": "القسم الخامس: إدارة المشاريع والحزم والوحدات",
  "englishTitle": "Packages, Modules & Project Management",
  "badge": "متوسط",
  "description": "منهج تعليمي شامل يغطي القسم الخامس: إدارة المشاريع والحزم والوحدات بدقة تفصيلية وأمثلة عملية وتطبيق مباشر.",
  "topics": [
    {
      "id": "5.1",
      "title": "مدير الحزم npm",
      "englishTitle": "مدير الحزم npm",
      "subtopics": [
        {
          "id": "5.1.1",
          "title": "ما هو npm؟",
          "englishTitle": "npm",
          "definition": "يُقصد بـ (ما هو npm؟) أحد الركائز الجوهرية في مسار مدير الحزم npm ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (ما هو npm؟) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (ما هو npm؟) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for ما هو npm؟\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح ما هو npm؟ في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: ما هو npm؟\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ ما هو npm؟ في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق ما هو npm؟\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"ما هو npm؟\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.1.1",
            "title": "ما هو npm؟",
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
            "summary": "يمثل (ما هو npm؟) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (ما هو npm؟) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو npm؟) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على ما هو npm؟",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (ما هو npm؟)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو npm؟\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: ما هو npm؟...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.1.2",
          "title": "إنشاء مشروع باستخدام npm init",
          "englishTitle": "مشروع بnpm init",
          "definition": "يُقصد بـ (إنشاء مشروع باستخدام npm init) أحد الركائز الجوهرية في مسار مدير الحزم npm ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء مشروع باستخدام npm init) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء مشروع باستخدام npm init) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إنشاء مشروع باستخدام npm init\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء مشروع باستخدام npm init في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء مشروع باستخدام npm init\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء مشروع باستخدام npm init في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء مشروع باستخدام npm init\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء مشروع باستخدام npm init\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.1.2",
            "title": "إنشاء مشروع باستخدام npm init",
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
            "summary": "يمثل (إنشاء مشروع باستخدام npm init) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء مشروع باستخدام npm init) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء مشروع باستخدام npm init) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء مشروع باستخدام npm init",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء مشروع باستخدام npm init)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء مشروع باستخدام npm init\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء مشروع باستخدام npm init...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.1.3",
          "title": "فهم ملف package.json",
          "englishTitle": "فهم ملف package.json",
          "definition": "يُقصد بـ (فهم ملف package.json) أحد الركائز الجوهرية في مسار مدير الحزم npm ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (فهم ملف package.json) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (فهم ملف package.json) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for فهم ملف package.json\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح فهم ملف package.json في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: فهم ملف package.json\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ فهم ملف package.json في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق فهم ملف package.json\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"فهم ملف package.json\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.1.3",
            "title": "فهم ملف package.json",
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
            "summary": "يمثل (فهم ملف package.json) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (فهم ملف package.json) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم ملف package.json) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على فهم ملف package.json",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (فهم ملف package.json)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين فهم ملف package.json\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: فهم ملف package.json...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.1.4",
          "title": "فهم package-lock.json",
          "englishTitle": "فهم package-lock.json",
          "definition": "يُقصد بـ (فهم package-lock.json) أحد الركائز الجوهرية في مسار مدير الحزم npm ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (فهم package-lock.json) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (فهم package-lock.json) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for فهم package-lock.json\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح فهم package-lock.json في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: فهم package-lock.json\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ فهم package-lock.json في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق فهم package-lock.json\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"فهم package-lock.json\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.1.4",
            "title": "فهم package-lock.json",
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
            "summary": "يمثل (فهم package-lock.json) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (فهم package-lock.json) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم package-lock.json) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على فهم package-lock.json",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (فهم package-lock.json)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين فهم package-lock.json\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: فهم package-lock.json...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.1.5",
          "title": "تثبيت الحزم باستخدام npm install",
          "englishTitle": "تثبيت الحزم بnpm install",
          "definition": "يُقصد بـ (تثبيت الحزم باستخدام npm install) أحد الركائز الجوهرية في مسار مدير الحزم npm ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تثبيت الحزم باستخدام npm install) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تثبيت الحزم باستخدام npm install) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for تثبيت الحزم باستخدام npm install\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تثبيت الحزم باستخدام npm install في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تثبيت الحزم باستخدام npm install\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تثبيت الحزم باستخدام npm install في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تثبيت الحزم باستخدام npm install\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تثبيت الحزم باستخدام npm install\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.1.5",
            "title": "تثبيت الحزم باستخدام npm install",
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
            "summary": "يمثل (تثبيت الحزم باستخدام npm install) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تثبيت الحزم باستخدام npm install) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تثبيت الحزم باستخدام npm install) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تثبيت الحزم باستخدام npm install",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تثبيت الحزم باستخدام npm install)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تثبيت الحزم باستخدام npm install\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تثبيت الحزم باستخدام npm install...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.1.6",
          "title": "إزالة الحزم وتحديثها",
          "englishTitle": "إزالة الحزم وتحديثها",
          "definition": "يُقصد بـ (إزالة الحزم وتحديثها) أحد الركائز الجوهرية في مسار مدير الحزم npm ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إزالة الحزم وتحديثها) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إزالة الحزم وتحديثها) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إزالة الحزم وتحديثها\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إزالة الحزم وتحديثها في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إزالة الحزم وتحديثها\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إزالة الحزم وتحديثها في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إزالة الحزم وتحديثها\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إزالة الحزم وتحديثها\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.1.6",
            "title": "إزالة الحزم وتحديثها",
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
            "summary": "يمثل (إزالة الحزم وتحديثها) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إزالة الحزم وتحديثها) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إزالة الحزم وتحديثها) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إزالة الحزم وتحديثها",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إزالة الحزم وتحديثها)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إزالة الحزم وتحديثها\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إزالة الحزم وتحديثها...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.1.7",
          "title": "فهم dependencies وdevDependencies",
          "englishTitle": "فهم dependencies وdevDependencies",
          "definition": "يُقصد بـ (فهم dependencies وdevDependencies) أحد الركائز الجوهرية في مسار مدير الحزم npm ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (فهم dependencies وdevDependencies) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (فهم dependencies وdevDependencies) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for فهم dependencies وdevDependencies\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح فهم dependencies وdevDependencies في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: فهم dependencies وdevDependencies\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ فهم dependencies وdevDependencies في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق فهم dependencies وdevDependencies\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"فهم dependencies وdevDependencies\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.1.7",
            "title": "فهم dependencies وdevDependencies",
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
            "summary": "يمثل (فهم dependencies وdevDependencies) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (فهم dependencies وdevDependencies) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم dependencies وdevDependencies) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على فهم dependencies وdevDependencies",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (فهم dependencies وdevDependencies)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين فهم dependencies وdevDependencies\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: فهم dependencies وdevDependencies...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.1.8",
          "title": "استخدام npm scripts",
          "englishTitle": "npm scripts",
          "definition": "يُقصد بـ (استخدام npm scripts) أحد الركائز الجوهرية في مسار مدير الحزم npm ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام npm scripts) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام npm scripts) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for استخدام npm scripts\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام npm scripts في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام npm scripts\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام npm scripts في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام npm scripts\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام npm scripts\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.1.8",
            "title": "استخدام npm scripts",
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
            "summary": "يمثل (استخدام npm scripts) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام npm scripts) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام npm scripts) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام npm scripts",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام npm scripts)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام npm scripts\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام npm scripts...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "5.2",
      "title": "إدارة الإصدارات والاعتماديات",
      "englishTitle": "إدارة الإصدارات والاعتماديات",
      "subtopics": [
        {
          "id": "5.2.1",
          "title": "فهم Semantic Versioning",
          "englishTitle": "فهم Semantic Versioning",
          "definition": "يُقصد بـ (فهم Semantic Versioning) أحد الركائز الجوهرية في مسار إدارة الإصدارات والاعتماديات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (فهم Semantic Versioning) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (فهم Semantic Versioning) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for فهم Semantic Versioning\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح فهم Semantic Versioning في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: فهم Semantic Versioning\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ فهم Semantic Versioning في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق فهم Semantic Versioning\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"فهم Semantic Versioning\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.2.1",
            "title": "فهم Semantic Versioning",
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
            "summary": "يمثل (فهم Semantic Versioning) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (فهم Semantic Versioning) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم Semantic Versioning) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على فهم Semantic Versioning",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (فهم Semantic Versioning)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين فهم Semantic Versioning\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: فهم Semantic Versioning...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.2.2",
          "title": "معنى ^ و~ في الإصدارات",
          "englishTitle": "معنى ^ و~ في الإصدارات",
          "definition": "يُقصد بـ (معنى ^ و~ في الإصدارات) أحد الركائز الجوهرية في مسار إدارة الإصدارات والاعتماديات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (معنى ^ و~ في الإصدارات) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (معنى ^ و~ في الإصدارات) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for معنى ^ و~ في الإصدارات\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح معنى ^ و~ في الإصدارات في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: معنى ^ و~ في الإصدارات\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ معنى ^ و~ في الإصدارات في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق معنى ^ و~ في الإصدارات\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"معنى ^ و~ في الإصدارات\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.2.2",
            "title": "معنى ^ و~ في الإصدارات",
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
            "summary": "يمثل (معنى ^ و~ في الإصدارات) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (معنى ^ و~ في الإصدارات) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (معنى ^ و~ في الإصدارات) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على معنى ^ و~ في الإصدارات",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (معنى ^ و~ في الإصدارات)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين معنى ^ و~ في الإصدارات\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: معنى ^ و~ في الإصدارات...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.2.3",
          "title": "استخدام npm ci",
          "englishTitle": "npm ci",
          "definition": "يُقصد بـ (استخدام npm ci) أحد الركائز الجوهرية في مسار إدارة الإصدارات والاعتماديات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام npm ci) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام npm ci) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for استخدام npm ci\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام npm ci في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام npm ci\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام npm ci في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام npm ci\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام npm ci\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.2.3",
            "title": "استخدام npm ci",
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
            "summary": "يمثل (استخدام npm ci) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام npm ci) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام npm ci) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام npm ci",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام npm ci)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام npm ci\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام npm ci...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.2.4",
          "title": "فحص الاعتماديات باستخدام npm audit",
          "englishTitle": "فحص الاعتماديات بnpm audit",
          "definition": "يُقصد بـ (فحص الاعتماديات باستخدام npm audit) أحد الركائز الجوهرية في مسار إدارة الإصدارات والاعتماديات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (فحص الاعتماديات باستخدام npm audit) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (فحص الاعتماديات باستخدام npm audit) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for فحص الاعتماديات باستخدام npm audit\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح فحص الاعتماديات باستخدام npm audit في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: فحص الاعتماديات باستخدام npm audit\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ فحص الاعتماديات باستخدام npm audit في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق فحص الاعتماديات باستخدام npm audit\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"فحص الاعتماديات باستخدام npm audit\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.2.4",
            "title": "فحص الاعتماديات باستخدام npm audit",
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
            "summary": "يمثل (فحص الاعتماديات باستخدام npm audit) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (فحص الاعتماديات باستخدام npm audit) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فحص الاعتماديات باستخدام npm audit) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على فحص الاعتماديات باستخدام npm audit",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (فحص الاعتماديات باستخدام npm audit)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين فحص الاعتماديات باستخدام npm audit\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: فحص الاعتماديات باستخدام npm audit...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.2.5",
          "title": "فهم الاعتماديات المباشرة وغير المباشرة",
          "englishTitle": "فهم الاعتماديات المباشرة وغير المباشرة",
          "definition": "يُقصد بـ (فهم الاعتماديات المباشرة وغير المباشرة) أحد الركائز الجوهرية في مسار إدارة الإصدارات والاعتماديات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (فهم الاعتماديات المباشرة وغير المباشرة) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (فهم الاعتماديات المباشرة وغير المباشرة) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for فهم الاعتماديات المباشرة وغير المباشرة\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح فهم الاعتماديات المباشرة وغير المباشرة في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: فهم الاعتماديات المباشرة وغير المباشرة\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ فهم الاعتماديات المباشرة وغير المباشرة في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق فهم الاعتماديات المباشرة وغير المباشرة\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"فهم الاعتماديات المباشرة وغير المباشرة\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.2.5",
            "title": "فهم الاعتماديات المباشرة وغير المباشرة",
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
            "summary": "يمثل (فهم الاعتماديات المباشرة وغير المباشرة) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (فهم الاعتماديات المباشرة وغير المباشرة) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم الاعتماديات المباشرة وغير المباشرة) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على فهم الاعتماديات المباشرة وغير المباشرة",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (فهم الاعتماديات المباشرة وغير المباشرة)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين فهم الاعتماديات المباشرة وغير المباشرة\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: فهم الاعتماديات المباشرة وغير المباشرة...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.2.6",
          "title": "تجنب مشاكل Dependency Conflicts",
          "englishTitle": "تجنب مشاكل Dependency Conflicts",
          "definition": "يُقصد بـ (تجنب مشاكل Dependency Conflicts) أحد الركائز الجوهرية في مسار إدارة الإصدارات والاعتماديات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تجنب مشاكل Dependency Conflicts) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تجنب مشاكل Dependency Conflicts) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for تجنب مشاكل Dependency Conflicts\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تجنب مشاكل Dependency Conflicts في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تجنب مشاكل Dependency Conflicts\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تجنب مشاكل Dependency Conflicts في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تجنب مشاكل Dependency Conflicts\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تجنب مشاكل Dependency Conflicts\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.2.6",
            "title": "تجنب مشاكل Dependency Conflicts",
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
            "summary": "يمثل (تجنب مشاكل Dependency Conflicts) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تجنب مشاكل Dependency Conflicts) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تجنب مشاكل Dependency Conflicts) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تجنب مشاكل Dependency Conflicts",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تجنب مشاكل Dependency Conflicts)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تجنب مشاكل Dependency Conflicts\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تجنب مشاكل Dependency Conflicts...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.2.7",
          "title": "مقارنة npm وpnpm وYarn",
          "englishTitle": "مقارنة npm وpnpm وYarn",
          "definition": "يُقصد بـ (مقارنة npm وpnpm وYarn) أحد الركائز الجوهرية في مسار إدارة الإصدارات والاعتماديات ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مقارنة npm وpnpm وYarn) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مقارنة npm وpnpm وYarn) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مقارنة npm وpnpm وYarn\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مقارنة npm وpnpm وYarn في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مقارنة npm وpnpm وYarn\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مقارنة npm وpnpm وYarn في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مقارنة npm وpnpm وYarn\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مقارنة npm وpnpm وYarn\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.2.7",
            "title": "مقارنة npm وpnpm وYarn",
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
            "summary": "يمثل (مقارنة npm وpnpm وYarn) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مقارنة npm وpnpm وYarn) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقارنة npm وpnpm وYarn) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مقارنة npm وpnpm وYarn",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مقارنة npm وpnpm وYarn)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مقارنة npm وpnpm وYarn\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مقارنة npm وpnpm وYarn...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "5.3",
      "title": "نظام الوحدات Modules",
      "englishTitle": "نظام الوحدات Modules",
      "subtopics": [
        {
          "id": "5.3.1",
          "title": "ما هي Modules؟",
          "englishTitle": "Modules",
          "definition": "يُقصد بـ (ما هي Modules؟) أحد الركائز الجوهرية في مسار نظام الوحدات Modules ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (ما هي Modules؟) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (ما هي Modules؟) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for ما هي Modules؟\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح ما هي Modules؟ في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: ما هي Modules؟\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ ما هي Modules؟ في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق ما هي Modules؟\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"ما هي Modules؟\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.3.1",
            "title": "ما هي Modules؟",
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
            "summary": "يمثل (ما هي Modules؟) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (ما هي Modules؟) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Modules؟) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على ما هي Modules؟",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (ما هي Modules؟)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين ما هي Modules؟\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: ما هي Modules؟...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.3.2",
          "title": "مفهوم CommonJS",
          "englishTitle": "CommonJS",
          "definition": "يُقصد بـ (مفهوم CommonJS) أحد الركائز الجوهرية في مسار نظام الوحدات Modules ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم CommonJS) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم CommonJS) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم CommonJS\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم CommonJS في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم CommonJS\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم CommonJS في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم CommonJS\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم CommonJS\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.3.2",
            "title": "مفهوم CommonJS",
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
            "summary": "يمثل (مفهوم CommonJS) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم CommonJS) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم CommonJS) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم CommonJS",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم CommonJS)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم CommonJS\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم CommonJS...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.3.3",
          "title": "استخدام require وmodule.exports",
          "englishTitle": "require وmodule.exports",
          "definition": "يُقصد بـ (استخدام require وmodule.exports) أحد الركائز الجوهرية في مسار نظام الوحدات Modules ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام require وmodule.exports) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام require وmodule.exports) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for استخدام require وmodule.exports\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام require وmodule.exports في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام require وmodule.exports\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام require وmodule.exports في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام require وmodule.exports\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام require وmodule.exports\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.3.3",
            "title": "استخدام require وmodule.exports",
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
            "summary": "يمثل (استخدام require وmodule.exports) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام require وmodule.exports) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام require وmodule.exports) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام require وmodule.exports",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام require وmodule.exports)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام require وmodule.exports\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام require وmodule.exports...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.3.4",
          "title": "مفهوم ES Modules",
          "englishTitle": "ES Modules",
          "definition": "يُقصد بـ (مفهوم ES Modules) أحد الركائز الجوهرية في مسار نظام الوحدات Modules ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم ES Modules) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم ES Modules) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم ES Modules\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم ES Modules في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم ES Modules\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم ES Modules في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم ES Modules\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم ES Modules\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.3.4",
            "title": "مفهوم ES Modules",
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
            "summary": "يمثل (مفهوم ES Modules) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم ES Modules) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم ES Modules) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم ES Modules",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم ES Modules)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم ES Modules\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم ES Modules...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.3.5",
          "title": "استخدام import وexport",
          "englishTitle": "import وexport",
          "definition": "يُقصد بـ (استخدام import وexport) أحد الركائز الجوهرية في مسار نظام الوحدات Modules ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام import وexport) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام import وexport) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for استخدام import وexport\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام import وexport في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام import وexport\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام import وexport في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام import وexport\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام import وexport\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.3.5",
            "title": "استخدام import وexport",
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
            "summary": "يمثل (استخدام import وexport) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام import وexport) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام import وexport) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام import وexport",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام import وexport)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام import وexport\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام import وexport...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.3.6",
          "title": "الفرق بين CommonJS وESM",
          "englishTitle": "CommonJS وESM",
          "definition": "يُقصد بـ (الفرق بين CommonJS وESM) أحد الركائز الجوهرية في مسار نظام الوحدات Modules ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (الفرق بين CommonJS وESM) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (الفرق بين CommonJS وESM) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for الفرق بين CommonJS وESM\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح الفرق بين CommonJS وESM في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: الفرق بين CommonJS وESM\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ الفرق بين CommonJS وESM في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق الفرق بين CommonJS وESM\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"الفرق بين CommonJS وESM\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.3.6",
            "title": "الفرق بين CommonJS وESM",
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
            "summary": "يمثل (الفرق بين CommonJS وESM) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (الفرق بين CommonJS وESM) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين CommonJS وESM) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على الفرق بين CommonJS وESM",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (الفرق بين CommonJS وESM)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين CommonJS وESM\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: الفرق بين CommonJS وESM...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.3.7",
          "title": "استخدام ملفات .mjs و.cjs",
          "englishTitle": "ملفات .mjs و.cjs",
          "definition": "يُقصد بـ (استخدام ملفات .mjs و.cjs) أحد الركائز الجوهرية في مسار نظام الوحدات Modules ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام ملفات .mjs و.cjs) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام ملفات .mjs و.cjs) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for استخدام ملفات .mjs و.cjs\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام ملفات .mjs و.cjs في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام ملفات .mjs و.cjs\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام ملفات .mjs و.cjs في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام ملفات .mjs و.cjs\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام ملفات .mjs و.cjs\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.3.7",
            "title": "استخدام ملفات .mjs و.cjs",
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
            "summary": "يمثل (استخدام ملفات .mjs و.cjs) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام ملفات .mjs و.cjs) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ملفات .mjs و.cjs) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام ملفات .mjs و.cjs",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام ملفات .mjs و.cjs)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام ملفات .mjs و.cjs\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام ملفات .mjs و.cjs...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.3.8",
          "title": "تنظيم المشروع باستخدام Modules",
          "englishTitle": "تنظيم المشروع بModules",
          "definition": "يُقصد بـ (تنظيم المشروع باستخدام Modules) أحد الركائز الجوهرية في مسار نظام الوحدات Modules ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تنظيم المشروع باستخدام Modules) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تنظيم المشروع باستخدام Modules) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for تنظيم المشروع باستخدام Modules\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تنظيم المشروع باستخدام Modules في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تنظيم المشروع باستخدام Modules\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تنظيم المشروع باستخدام Modules في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تنظيم المشروع باستخدام Modules\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تنظيم المشروع باستخدام Modules\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.3.8",
            "title": "تنظيم المشروع باستخدام Modules",
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
            "summary": "يمثل (تنظيم المشروع باستخدام Modules) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تنظيم المشروع باستخدام Modules) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنظيم المشروع باستخدام Modules) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تنظيم المشروع باستخدام Modules",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تنظيم المشروع باستخدام Modules)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تنظيم المشروع باستخدام Modules\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تنظيم المشروع باستخدام Modules...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.3.9",
          "title": "حل مسارات استيراد الحزم",
          "englishTitle": "حل مسارات استيراد الحزم",
          "definition": "يُقصد بـ (حل مسارات استيراد الحزم) أحد الركائز الجوهرية في مسار نظام الوحدات Modules ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (حل مسارات استيراد الحزم) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (حل مسارات استيراد الحزم) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for حل مسارات استيراد الحزم\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح حل مسارات استيراد الحزم في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: حل مسارات استيراد الحزم\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ حل مسارات استيراد الحزم في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق حل مسارات استيراد الحزم\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"حل مسارات استيراد الحزم\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.3.9",
            "title": "حل مسارات استيراد الحزم",
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
            "summary": "يمثل (حل مسارات استيراد الحزم) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (حل مسارات استيراد الحزم) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حل مسارات استيراد الحزم) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على حل مسارات استيراد الحزم",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (حل مسارات استيراد الحزم)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين حل مسارات استيراد الحزم\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: حل مسارات استيراد الحزم...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "5.4",
      "title": "أدوات تحسين بيئة التطوير",
      "englishTitle": "أدوات تحسين بيئة التطوير",
      "subtopics": [
        {
          "id": "5.4.1",
          "title": "إعادة التشغيل التلقائي باستخدام node --watch",
          "englishTitle": "إعادة التشغيل التلقائي بnode --watch",
          "definition": "يُقصد بـ (إعادة التشغيل التلقائي باستخدام node --watch) أحد الركائز الجوهرية في مسار أدوات تحسين بيئة التطوير ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إعادة التشغيل التلقائي باستخدام node --watch) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إعادة التشغيل التلقائي باستخدام node --watch) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إعادة التشغيل التلقائي باستخدام node --watch\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إعادة التشغيل التلقائي باستخدام node --watch في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إعادة التشغيل التلقائي باستخدام node --watch\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إعادة التشغيل التلقائي باستخدام node --watch في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إعادة التشغيل التلقائي باستخدام node --watch\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إعادة التشغيل التلقائي باستخدام node --watch\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.4.1",
            "title": "إعادة التشغيل التلقائي باستخدام node --watch",
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
            "summary": "يمثل (إعادة التشغيل التلقائي باستخدام node --watch) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إعادة التشغيل التلقائي باستخدام node --watch) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعادة التشغيل التلقائي باستخدام node --watch) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إعادة التشغيل التلقائي باستخدام node --watch",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إعادة التشغيل التلقائي باستخدام node --watch)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إعادة التشغيل التلقائي باستخدام node --watch\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إعادة التشغيل التلقائي باستخدام node --watch...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.4.2",
          "title": "استخدام Nodemon عند الحاجة",
          "englishTitle": "Nodemon عند الحاجة",
          "definition": "يُقصد بـ (استخدام Nodemon عند الحاجة) أحد الركائز الجوهرية في مسار أدوات تحسين بيئة التطوير ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام Nodemon عند الحاجة) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام Nodemon عند الحاجة) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for استخدام Nodemon عند الحاجة\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام Nodemon عند الحاجة في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام Nodemon عند الحاجة\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام Nodemon عند الحاجة في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام Nodemon عند الحاجة\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام Nodemon عند الحاجة\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.4.2",
            "title": "استخدام Nodemon عند الحاجة",
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
            "summary": "يمثل (استخدام Nodemon عند الحاجة) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام Nodemon عند الحاجة) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Nodemon عند الحاجة) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام Nodemon عند الحاجة",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام Nodemon عند الحاجة)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Nodemon عند الحاجة\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام Nodemon عند الحاجة...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.4.3",
          "title": "إدارة المتغيرات البيئية باستخدام ملفات .env",
          "englishTitle": "المتغيرات البيئية بملفات .env",
          "definition": "يُقصد بـ (إدارة المتغيرات البيئية باستخدام ملفات .env) أحد الركائز الجوهرية في مسار أدوات تحسين بيئة التطوير ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إدارة المتغيرات البيئية باستخدام ملفات .env) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إدارة المتغيرات البيئية باستخدام ملفات .env) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إدارة المتغيرات البيئية باستخدام ملفات .env\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إدارة المتغيرات البيئية باستخدام ملفات .env في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إدارة المتغيرات البيئية باستخدام ملفات .env\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إدارة المتغيرات البيئية باستخدام ملفات .env في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إدارة المتغيرات البيئية باستخدام ملفات .env\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إدارة المتغيرات البيئية باستخدام ملفات .env\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.4.3",
            "title": "إدارة المتغيرات البيئية باستخدام ملفات .env",
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
            "summary": "يمثل (إدارة المتغيرات البيئية باستخدام ملفات .env) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إدارة المتغيرات البيئية باستخدام ملفات .env) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة المتغيرات البيئية باستخدام ملفات .env) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إدارة المتغيرات البيئية باستخدام ملفات .env",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إدارة المتغيرات البيئية باستخدام ملفات .env)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة المتغيرات البيئية باستخدام ملفات .env\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إدارة المتغيرات البيئية باستخدام ملفات .env...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.4.4",
          "title": "استخدام دعم Node.js المدمج لملفات البيئة",
          "englishTitle": "دعم Node.js المدمج لملفات البيئة",
          "definition": "يُقصد بـ (استخدام دعم Node.js المدمج لملفات البيئة) أحد الركائز الجوهرية في مسار أدوات تحسين بيئة التطوير ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (استخدام دعم Node.js المدمج لملفات البيئة) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (استخدام دعم Node.js المدمج لملفات البيئة) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for استخدام دعم Node.js المدمج لملفات البيئة\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح استخدام دعم Node.js المدمج لملفات البيئة في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: استخدام دعم Node.js المدمج لملفات البيئة\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ استخدام دعم Node.js المدمج لملفات البيئة في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق استخدام دعم Node.js المدمج لملفات البيئة\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"استخدام دعم Node.js المدمج لملفات البيئة\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.4.4",
            "title": "استخدام دعم Node.js المدمج لملفات البيئة",
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
            "summary": "يمثل (استخدام دعم Node.js المدمج لملفات البيئة) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (استخدام دعم Node.js المدمج لملفات البيئة) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام دعم Node.js المدمج لملفات البيئة) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على استخدام دعم Node.js المدمج لملفات البيئة",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (استخدام دعم Node.js المدمج لملفات البيئة)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام دعم Node.js المدمج لملفات البيئة\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: استخدام دعم Node.js المدمج لملفات البيئة...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.4.5",
          "title": "تنسيق الأكواد باستخدام Prettier",
          "englishTitle": "تنسيق الأكواد بPrettier",
          "definition": "يُقصد بـ (تنسيق الأكواد باستخدام Prettier) أحد الركائز الجوهرية في مسار أدوات تحسين بيئة التطوير ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تنسيق الأكواد باستخدام Prettier) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تنسيق الأكواد باستخدام Prettier) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for تنسيق الأكواد باستخدام Prettier\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تنسيق الأكواد باستخدام Prettier في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تنسيق الأكواد باستخدام Prettier\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تنسيق الأكواد باستخدام Prettier في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تنسيق الأكواد باستخدام Prettier\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تنسيق الأكواد باستخدام Prettier\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.4.5",
            "title": "تنسيق الأكواد باستخدام Prettier",
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
            "summary": "يمثل (تنسيق الأكواد باستخدام Prettier) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تنسيق الأكواد باستخدام Prettier) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنسيق الأكواد باستخدام Prettier) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تنسيق الأكواد باستخدام Prettier",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تنسيق الأكواد باستخدام Prettier)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تنسيق الأكواد باستخدام Prettier\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تنسيق الأكواد باستخدام Prettier...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.4.6",
          "title": "فحص الأكواد باستخدام ESLint",
          "englishTitle": "فحص الأكواد بESLint",
          "definition": "يُقصد بـ (فحص الأكواد باستخدام ESLint) أحد الركائز الجوهرية في مسار أدوات تحسين بيئة التطوير ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (فحص الأكواد باستخدام ESLint) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (فحص الأكواد باستخدام ESLint) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for فحص الأكواد باستخدام ESLint\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح فحص الأكواد باستخدام ESLint في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: فحص الأكواد باستخدام ESLint\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ فحص الأكواد باستخدام ESLint في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق فحص الأكواد باستخدام ESLint\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"فحص الأكواد باستخدام ESLint\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.4.6",
            "title": "فحص الأكواد باستخدام ESLint",
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
            "summary": "يمثل (فحص الأكواد باستخدام ESLint) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (فحص الأكواد باستخدام ESLint) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فحص الأكواد باستخدام ESLint) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على فحص الأكواد باستخدام ESLint",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (فحص الأكواد باستخدام ESLint)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين فحص الأكواد باستخدام ESLint\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: فحص الأكواد باستخدام ESLint...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.4.7",
          "title": "إعداد Git Hooks",
          "englishTitle": "إعداد Git Hooks",
          "definition": "يُقصد بـ (إعداد Git Hooks) أحد الركائز الجوهرية في مسار أدوات تحسين بيئة التطوير ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إعداد Git Hooks) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إعداد Git Hooks) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إعداد Git Hooks\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إعداد Git Hooks في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إعداد Git Hooks\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إعداد Git Hooks في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إعداد Git Hooks\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إعداد Git Hooks\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.4.7",
            "title": "إعداد Git Hooks",
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
            "summary": "يمثل (إعداد Git Hooks) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إعداد Git Hooks) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد Git Hooks) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إعداد Git Hooks",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إعداد Git Hooks)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إعداد Git Hooks\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إعداد Git Hooks...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "5.5",
      "title": "إنشاء حزم Node.js",
      "englishTitle": "إنشاء حزم Node.js",
      "subtopics": [
        {
          "id": "5.5.1",
          "title": "إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام",
          "englishTitle": "مكتبة JavaScript قابلة لإعادة الاستخدام",
          "definition": "يُقصد بـ (إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام) أحد الركائز الجوهرية في مسار إنشاء حزم Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.5.1",
            "title": "إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام",
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
            "summary": "يمثل (إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء مكتبة JavaScript قابلة لإعادة الاستخدام...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.5.2",
          "title": "إعداد exports في package.json",
          "englishTitle": "إعداد exports في package.json",
          "definition": "يُقصد بـ (إعداد exports في package.json) أحد الركائز الجوهرية في مسار إنشاء حزم Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إعداد exports في package.json) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إعداد exports في package.json) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إعداد exports في package.json\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إعداد exports في package.json في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إعداد exports في package.json\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إعداد exports في package.json في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إعداد exports في package.json\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إعداد exports في package.json\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.5.2",
            "title": "إعداد exports في package.json",
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
            "summary": "يمثل (إعداد exports في package.json) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إعداد exports في package.json) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد exports في package.json) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إعداد exports في package.json",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إعداد exports في package.json)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إعداد exports في package.json\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إعداد exports في package.json...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.5.3",
          "title": "إنشاء Command Line Package",
          "englishTitle": "Command Line Package",
          "definition": "يُقصد بـ (إنشاء Command Line Package) أحد الركائز الجوهرية في مسار إنشاء حزم Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء Command Line Package) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء Command Line Package) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إنشاء Command Line Package\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء Command Line Package في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء Command Line Package\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء Command Line Package في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء Command Line Package\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء Command Line Package\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.5.3",
            "title": "إنشاء Command Line Package",
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
            "summary": "يمثل (إنشاء Command Line Package) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء Command Line Package) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Command Line Package) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء Command Line Package",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء Command Line Package)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Command Line Package\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء Command Line Package...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.5.4",
          "title": "كتابة README وتوثيق الحزمة",
          "englishTitle": "كتابة README وتوثيق الحزمة",
          "definition": "يُقصد بـ (كتابة README وتوثيق الحزمة) أحد الركائز الجوهرية في مسار إنشاء حزم Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (كتابة README وتوثيق الحزمة) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (كتابة README وتوثيق الحزمة) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for كتابة README وتوثيق الحزمة\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح كتابة README وتوثيق الحزمة في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: كتابة README وتوثيق الحزمة\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ كتابة README وتوثيق الحزمة في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق كتابة README وتوثيق الحزمة\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"كتابة README وتوثيق الحزمة\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.5.4",
            "title": "كتابة README وتوثيق الحزمة",
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
            "summary": "يمثل (كتابة README وتوثيق الحزمة) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (كتابة README وتوثيق الحزمة) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (كتابة README وتوثيق الحزمة) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على كتابة README وتوثيق الحزمة",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (كتابة README وتوثيق الحزمة)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين كتابة README وتوثيق الحزمة\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: كتابة README وتوثيق الحزمة...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.5.5",
          "title": "نشر حزمة على npm",
          "englishTitle": "نشر حزمة على npm",
          "definition": "يُقصد بـ (نشر حزمة على npm) أحد الركائز الجوهرية في مسار إنشاء حزم Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (نشر حزمة على npm) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (نشر حزمة على npm) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for نشر حزمة على npm\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح نشر حزمة على npm في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: نشر حزمة على npm\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ نشر حزمة على npm في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق نشر حزمة على npm\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"نشر حزمة على npm\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.5.5",
            "title": "نشر حزمة على npm",
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
            "summary": "يمثل (نشر حزمة على npm) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (نشر حزمة على npm) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (نشر حزمة على npm) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على نشر حزمة على npm",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (نشر حزمة على npm)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين نشر حزمة على npm\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: نشر حزمة على npm...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "5.5.6",
          "title": "تحديث الحزمة وإدارة إصداراتها",
          "englishTitle": "تحديث الحزمة وإصداراتها",
          "definition": "يُقصد بـ (تحديث الحزمة وإدارة إصداراتها) أحد الركائز الجوهرية في مسار إنشاء حزم Node.js ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تحديث الحزمة وإدارة إصداراتها) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تحديث الحزمة وإدارة إصداراتها) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for تحديث الحزمة وإدارة إصداراتها\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تحديث الحزمة وإدارة إصداراتها في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تحديث الحزمة وإدارة إصداراتها\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تحديث الحزمة وإدارة إصداراتها في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تحديث الحزمة وإدارة إصداراتها\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تحديث الحزمة وإدارة إصداراتها\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 5.5.6",
            "title": "تحديث الحزمة وإدارة إصداراتها",
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
            "summary": "يمثل (تحديث الحزمة وإدارة إصداراتها) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تحديث الحزمة وإدارة إصداراتها) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تحديث الحزمة وإدارة إصداراتها) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تحديث الحزمة وإدارة إصداراتها",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تحديث الحزمة وإدارة إصداراتها)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تحديث الحزمة وإدارة إصداراتها\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تحديث الحزمة وإدارة إصداراتها...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    }
  ]
};

export default SECTION_5;
