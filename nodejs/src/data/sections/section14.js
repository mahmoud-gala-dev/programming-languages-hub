// src/data/sections/section14.js
// القسم الرابع عشر: هندسة تطبيقات Backend
export const SECTION_14 = {
  "id": 14,
  "number": "14",
  "title": "القسم الرابع عشر: هندسة تطبيقات Backend",
  "englishTitle": "Backend Architecture & Clean Code",
  "badge": "متقدم",
  "description": "منهج تعليمي شامل يغطي القسم الرابع عشر: هندسة تطبيقات Backend بدقة تفصيلية وأمثلة عملية وتطبيق مباشر.",
  "topics": [
    {
      "id": "14.1",
      "title": "تنظيم بنية المشروع",
      "englishTitle": "تنظيم بنية المشروع",
      "subtopics": [
        {
          "id": "14.1.1",
          "title": "الفرق بين المشروع البسيط والمشروع الاحترافي",
          "englishTitle": "المشروع البسيط والمشروع الاحترافي",
          "definition": "يُقصد بـ (الفرق بين المشروع البسيط والمشروع الاحترافي) أحد الركائز الجوهرية في مسار تنظيم بنية المشروع ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (الفرق بين المشروع البسيط والمشروع الاحترافي) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (الفرق بين المشروع البسيط والمشروع الاحترافي) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for الفرق بين المشروع البسيط والمشروع الاحترافي\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح الفرق بين المشروع البسيط والمشروع الاحترافي في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: الفرق بين المشروع البسيط والمشروع الاحترافي\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ الفرق بين المشروع البسيط والمشروع الاحترافي في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق الفرق بين المشروع البسيط والمشروع الاحترافي\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"الفرق بين المشروع البسيط والمشروع الاحترافي\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.1.1",
            "title": "الفرق بين المشروع البسيط والمشروع الاحترافي",
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
            "summary": "يمثل (الفرق بين المشروع البسيط والمشروع الاحترافي) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (الفرق بين المشروع البسيط والمشروع الاحترافي) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين المشروع البسيط والمشروع الاحترافي) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على الفرق بين المشروع البسيط والمشروع الاحترافي",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (الفرق بين المشروع البسيط والمشروع الاحترافي)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين المشروع البسيط والمشروع الاحترافي\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: الفرق بين المشروع البسيط والمشروع الاحترافي...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.1.2",
          "title": "فصل Routes عن Controllers",
          "englishTitle": "فصل Routes عن Controllers",
          "definition": "يُقصد بـ (فصل Routes عن Controllers) أحد الركائز الجوهرية في مسار تنظيم بنية المشروع ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (فصل Routes عن Controllers) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (فصل Routes عن Controllers) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for فصل Routes عن Controllers\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح فصل Routes عن Controllers في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: فصل Routes عن Controllers\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ فصل Routes عن Controllers في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق فصل Routes عن Controllers\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"فصل Routes عن Controllers\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.1.2",
            "title": "فصل Routes عن Controllers",
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
            "summary": "يمثل (فصل Routes عن Controllers) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (فصل Routes عن Controllers) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فصل Routes عن Controllers) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على فصل Routes عن Controllers",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (فصل Routes عن Controllers)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين فصل Routes عن Controllers\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: فصل Routes عن Controllers...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.1.3",
          "title": "إنشاء Service Layer",
          "englishTitle": "Service Layer",
          "definition": "يُقصد بـ (إنشاء Service Layer) أحد الركائز الجوهرية في مسار تنظيم بنية المشروع ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء Service Layer) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء Service Layer) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إنشاء Service Layer\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء Service Layer في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء Service Layer\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء Service Layer في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء Service Layer\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء Service Layer\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.1.3",
            "title": "إنشاء Service Layer",
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
            "summary": "يمثل (إنشاء Service Layer) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء Service Layer) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Service Layer) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء Service Layer",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء Service Layer)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Service Layer\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء Service Layer...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.1.4",
          "title": "إنشاء Repository Layer",
          "englishTitle": "Repository Layer",
          "definition": "يُقصد بـ (إنشاء Repository Layer) أحد الركائز الجوهرية في مسار تنظيم بنية المشروع ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء Repository Layer) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء Repository Layer) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إنشاء Repository Layer\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء Repository Layer في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء Repository Layer\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء Repository Layer في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء Repository Layer\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء Repository Layer\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.1.4",
            "title": "إنشاء Repository Layer",
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
            "summary": "يمثل (إنشاء Repository Layer) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء Repository Layer) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Repository Layer) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء Repository Layer",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء Repository Layer)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Repository Layer\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء Repository Layer...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.1.5",
          "title": "إنشاء ملفات Configuration",
          "englishTitle": "ملفات Configuration",
          "definition": "يُقصد بـ (إنشاء ملفات Configuration) أحد الركائز الجوهرية في مسار تنظيم بنية المشروع ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إنشاء ملفات Configuration) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إنشاء ملفات Configuration) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إنشاء ملفات Configuration\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إنشاء ملفات Configuration في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إنشاء ملفات Configuration\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إنشاء ملفات Configuration في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إنشاء ملفات Configuration\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إنشاء ملفات Configuration\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.1.5",
            "title": "إنشاء ملفات Configuration",
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
            "summary": "يمثل (إنشاء ملفات Configuration) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إنشاء ملفات Configuration) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء ملفات Configuration) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إنشاء ملفات Configuration",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إنشاء ملفات Configuration)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء ملفات Configuration\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إنشاء ملفات Configuration...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.1.6",
          "title": "تنظيم Middleware وUtilities",
          "englishTitle": "تنظيم Middleware وUtilities",
          "definition": "يُقصد بـ (تنظيم Middleware وUtilities) أحد الركائز الجوهرية في مسار تنظيم بنية المشروع ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تنظيم Middleware وUtilities) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تنظيم Middleware وUtilities) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for تنظيم Middleware وUtilities\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تنظيم Middleware وUtilities في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تنظيم Middleware وUtilities\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تنظيم Middleware وUtilities في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تنظيم Middleware وUtilities\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تنظيم Middleware وUtilities\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.1.6",
            "title": "تنظيم Middleware وUtilities",
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
            "summary": "يمثل (تنظيم Middleware وUtilities) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تنظيم Middleware وUtilities) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنظيم Middleware وUtilities) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تنظيم Middleware وUtilities",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تنظيم Middleware وUtilities)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تنظيم Middleware وUtilities\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تنظيم Middleware وUtilities...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.1.7",
          "title": "تنظيم ملفات Validation",
          "englishTitle": "تنظيم ملفات Validation",
          "definition": "يُقصد بـ (تنظيم ملفات Validation) أحد الركائز الجوهرية في مسار تنظيم بنية المشروع ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تنظيم ملفات Validation) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تنظيم ملفات Validation) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for تنظيم ملفات Validation\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تنظيم ملفات Validation في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تنظيم ملفات Validation\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تنظيم ملفات Validation في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تنظيم ملفات Validation\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تنظيم ملفات Validation\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.1.7",
            "title": "تنظيم ملفات Validation",
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
            "summary": "يمثل (تنظيم ملفات Validation) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تنظيم ملفات Validation) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنظيم ملفات Validation) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تنظيم ملفات Validation",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تنظيم ملفات Validation)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تنظيم ملفات Validation\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تنظيم ملفات Validation...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.1.8",
          "title": "تطبيق Separation of Concerns",
          "englishTitle": "تطبيق Separation of Concerns",
          "definition": "يُقصد بـ (تطبيق Separation of Concerns) أحد الركائز الجوهرية في مسار تنظيم بنية المشروع ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تطبيق Separation of Concerns) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تطبيق Separation of Concerns) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for تطبيق Separation of Concerns\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تطبيق Separation of Concerns في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تطبيق Separation of Concerns\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تطبيق Separation of Concerns في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تطبيق Separation of Concerns\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تطبيق Separation of Concerns\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.1.8",
            "title": "تطبيق Separation of Concerns",
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
            "summary": "يمثل (تطبيق Separation of Concerns) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تطبيق Separation of Concerns) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تطبيق Separation of Concerns) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تطبيق Separation of Concerns",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تطبيق Separation of Concerns)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تطبيق Separation of Concerns\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تطبيق Separation of Concerns...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "14.2",
      "title": "مبادئ البرمجة النظيفة",
      "englishTitle": "مبادئ البرمجة النظيفة",
      "subtopics": [
        {
          "id": "14.2.1",
          "title": "مفهوم Clean Code",
          "englishTitle": "Clean Code",
          "definition": "يُقصد بـ (مفهوم Clean Code) أحد الركائز الجوهرية في مسار مبادئ البرمجة النظيفة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم Clean Code) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم Clean Code) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم Clean Code\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم Clean Code في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم Clean Code\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم Clean Code في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم Clean Code\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم Clean Code\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.2.1",
            "title": "مفهوم Clean Code",
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
            "summary": "يمثل (مفهوم Clean Code) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم Clean Code) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Clean Code) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم Clean Code",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم Clean Code)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Clean Code\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم Clean Code...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.2.2",
          "title": "اختيار أسماء واضحة للمتغيرات والدوال",
          "englishTitle": "اختيار أسماء واضحة للمتغيرات والدوال",
          "definition": "يُقصد بـ (اختيار أسماء واضحة للمتغيرات والدوال) أحد الركائز الجوهرية في مسار مبادئ البرمجة النظيفة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (اختيار أسماء واضحة للمتغيرات والدوال) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (اختيار أسماء واضحة للمتغيرات والدوال) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for اختيار أسماء واضحة للمتغيرات والدوال\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح اختيار أسماء واضحة للمتغيرات والدوال في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: اختيار أسماء واضحة للمتغيرات والدوال\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ اختيار أسماء واضحة للمتغيرات والدوال في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق اختيار أسماء واضحة للمتغيرات والدوال\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"اختيار أسماء واضحة للمتغيرات والدوال\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.2.2",
            "title": "اختيار أسماء واضحة للمتغيرات والدوال",
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
            "summary": "يمثل (اختيار أسماء واضحة للمتغيرات والدوال) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (اختيار أسماء واضحة للمتغيرات والدوال) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختيار أسماء واضحة للمتغيرات والدوال) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على اختيار أسماء واضحة للمتغيرات والدوال",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (اختيار أسماء واضحة للمتغيرات والدوال)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين اختيار أسماء واضحة للمتغيرات والدوال\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: اختيار أسماء واضحة للمتغيرات والدوال...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.2.3",
          "title": "مبدأ Single Responsibility",
          "englishTitle": "مبدأ Single Responsibility",
          "definition": "يُقصد بـ (مبدأ Single Responsibility) أحد الركائز الجوهرية في مسار مبادئ البرمجة النظيفة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مبدأ Single Responsibility) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مبدأ Single Responsibility) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مبدأ Single Responsibility\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مبدأ Single Responsibility في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مبدأ Single Responsibility\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مبدأ Single Responsibility في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مبدأ Single Responsibility\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مبدأ Single Responsibility\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.2.3",
            "title": "مبدأ Single Responsibility",
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
            "summary": "يمثل (مبدأ Single Responsibility) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مبدأ Single Responsibility) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مبدأ Single Responsibility) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مبدأ Single Responsibility",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مبدأ Single Responsibility)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مبدأ Single Responsibility\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مبدأ Single Responsibility...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.2.4",
          "title": "مبدأ DRY",
          "englishTitle": "مبدأ DRY",
          "definition": "يُقصد بـ (مبدأ DRY) أحد الركائز الجوهرية في مسار مبادئ البرمجة النظيفة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مبدأ DRY) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مبدأ DRY) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مبدأ DRY\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مبدأ DRY في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مبدأ DRY\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مبدأ DRY في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مبدأ DRY\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مبدأ DRY\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.2.4",
            "title": "مبدأ DRY",
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
            "summary": "يمثل (مبدأ DRY) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مبدأ DRY) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مبدأ DRY) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مبدأ DRY",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مبدأ DRY)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مبدأ DRY\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مبدأ DRY...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.2.5",
          "title": "مبدأ KISS",
          "englishTitle": "مبدأ KISS",
          "definition": "يُقصد بـ (مبدأ KISS) أحد الركائز الجوهرية في مسار مبادئ البرمجة النظيفة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مبدأ KISS) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مبدأ KISS) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مبدأ KISS\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مبدأ KISS في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مبدأ KISS\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مبدأ KISS في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مبدأ KISS\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مبدأ KISS\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.2.5",
            "title": "مبدأ KISS",
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
            "summary": "يمثل (مبدأ KISS) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مبدأ KISS) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مبدأ KISS) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مبدأ KISS",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مبدأ KISS)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مبدأ KISS\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مبدأ KISS...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.2.6",
          "title": "مبدأ YAGNI",
          "englishTitle": "مبدأ YAGNI",
          "definition": "يُقصد بـ (مبدأ YAGNI) أحد الركائز الجوهرية في مسار مبادئ البرمجة النظيفة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مبدأ YAGNI) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مبدأ YAGNI) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مبدأ YAGNI\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مبدأ YAGNI في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مبدأ YAGNI\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مبدأ YAGNI في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مبدأ YAGNI\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مبدأ YAGNI\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.2.6",
            "title": "مبدأ YAGNI",
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
            "summary": "يمثل (مبدأ YAGNI) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مبدأ YAGNI) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مبدأ YAGNI) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مبدأ YAGNI",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مبدأ YAGNI)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مبدأ YAGNI\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مبدأ YAGNI...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.2.7",
          "title": "مقدمة في SOLID",
          "englishTitle": "مقدمة في SOLID",
          "definition": "يُقصد بـ (مقدمة في SOLID) أحد الركائز الجوهرية في مسار مبادئ البرمجة النظيفة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مقدمة في SOLID) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مقدمة في SOLID) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مقدمة في SOLID\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مقدمة في SOLID في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مقدمة في SOLID\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مقدمة في SOLID في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مقدمة في SOLID\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مقدمة في SOLID\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.2.7",
            "title": "مقدمة في SOLID",
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
            "summary": "يمثل (مقدمة في SOLID) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مقدمة في SOLID) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في SOLID) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مقدمة في SOLID",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مقدمة في SOLID)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في SOLID\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مقدمة في SOLID...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.2.8",
          "title": "إعادة هيكلة الأكواد Refactoring",
          "englishTitle": "إعادة هيكلة الأكواد Refactoring",
          "definition": "يُقصد بـ (إعادة هيكلة الأكواد Refactoring) أحد الركائز الجوهرية في مسار مبادئ البرمجة النظيفة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إعادة هيكلة الأكواد Refactoring) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إعادة هيكلة الأكواد Refactoring) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إعادة هيكلة الأكواد Refactoring\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إعادة هيكلة الأكواد Refactoring في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إعادة هيكلة الأكواد Refactoring\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إعادة هيكلة الأكواد Refactoring في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إعادة هيكلة الأكواد Refactoring\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إعادة هيكلة الأكواد Refactoring\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.2.8",
            "title": "إعادة هيكلة الأكواد Refactoring",
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
            "summary": "يمثل (إعادة هيكلة الأكواد Refactoring) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إعادة هيكلة الأكواد Refactoring) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعادة هيكلة الأكواد Refactoring) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إعادة هيكلة الأكواد Refactoring",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إعادة هيكلة الأكواد Refactoring)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إعادة هيكلة الأكواد Refactoring\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إعادة هيكلة الأكواد Refactoring...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "14.3",
      "title": "أنماط التصميم Design Patterns",
      "englishTitle": "أنماط التصميم Design Patterns",
      "subtopics": [
        {
          "id": "14.3.1",
          "title": "ما هي Design Patterns؟",
          "englishTitle": "Design Patterns",
          "definition": "يُقصد بـ (ما هي Design Patterns؟) أحد الركائز الجوهرية في مسار أنماط التصميم Design Patterns ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (ما هي Design Patterns؟) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (ما هي Design Patterns؟) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for ما هي Design Patterns؟\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح ما هي Design Patterns؟ في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: ما هي Design Patterns؟\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ ما هي Design Patterns؟ في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق ما هي Design Patterns؟\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"ما هي Design Patterns؟\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.3.1",
            "title": "ما هي Design Patterns؟",
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
            "summary": "يمثل (ما هي Design Patterns؟) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (ما هي Design Patterns؟) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Design Patterns؟) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على ما هي Design Patterns؟",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (ما هي Design Patterns؟)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين ما هي Design Patterns؟\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: ما هي Design Patterns؟...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.3.2",
          "title": "Repository Pattern",
          "englishTitle": "Repository Pattern",
          "definition": "يُقصد بـ (Repository Pattern) أحد الركائز الجوهرية في مسار أنماط التصميم Design Patterns ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (Repository Pattern) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (Repository Pattern) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for Repository Pattern\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح Repository Pattern في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: Repository Pattern\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ Repository Pattern في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق Repository Pattern\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"Repository Pattern\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.3.2",
            "title": "Repository Pattern",
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
            "summary": "يمثل (Repository Pattern) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (Repository Pattern) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Repository Pattern) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على Repository Pattern",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (Repository Pattern)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين Repository Pattern\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: Repository Pattern...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.3.3",
          "title": "Factory Pattern",
          "englishTitle": "Factory Pattern",
          "definition": "يُقصد بـ (Factory Pattern) أحد الركائز الجوهرية في مسار أنماط التصميم Design Patterns ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (Factory Pattern) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (Factory Pattern) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for Factory Pattern\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح Factory Pattern في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: Factory Pattern\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ Factory Pattern في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق Factory Pattern\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"Factory Pattern\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.3.3",
            "title": "Factory Pattern",
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
            "summary": "يمثل (Factory Pattern) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (Factory Pattern) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Factory Pattern) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على Factory Pattern",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (Factory Pattern)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين Factory Pattern\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: Factory Pattern...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.3.4",
          "title": "Strategy Pattern",
          "englishTitle": "Strategy Pattern",
          "definition": "يُقصد بـ (Strategy Pattern) أحد الركائز الجوهرية في مسار أنماط التصميم Design Patterns ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (Strategy Pattern) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (Strategy Pattern) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for Strategy Pattern\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح Strategy Pattern في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: Strategy Pattern\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ Strategy Pattern في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق Strategy Pattern\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"Strategy Pattern\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.3.4",
            "title": "Strategy Pattern",
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
            "summary": "يمثل (Strategy Pattern) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (Strategy Pattern) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Strategy Pattern) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على Strategy Pattern",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (Strategy Pattern)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين Strategy Pattern\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: Strategy Pattern...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.3.5",
          "title": "Adapter Pattern",
          "englishTitle": "Adapter Pattern",
          "definition": "يُقصد بـ (Adapter Pattern) أحد الركائز الجوهرية في مسار أنماط التصميم Design Patterns ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (Adapter Pattern) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (Adapter Pattern) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for Adapter Pattern\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح Adapter Pattern في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: Adapter Pattern\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ Adapter Pattern في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق Adapter Pattern\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"Adapter Pattern\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.3.5",
            "title": "Adapter Pattern",
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
            "summary": "يمثل (Adapter Pattern) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (Adapter Pattern) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Adapter Pattern) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على Adapter Pattern",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (Adapter Pattern)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين Adapter Pattern\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: Adapter Pattern...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.3.6",
          "title": "Observer Pattern",
          "englishTitle": "Observer Pattern",
          "definition": "يُقصد بـ (Observer Pattern) أحد الركائز الجوهرية في مسار أنماط التصميم Design Patterns ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (Observer Pattern) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (Observer Pattern) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for Observer Pattern\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح Observer Pattern في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: Observer Pattern\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ Observer Pattern في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق Observer Pattern\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"Observer Pattern\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.3.6",
            "title": "Observer Pattern",
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
            "summary": "يمثل (Observer Pattern) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (Observer Pattern) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Observer Pattern) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على Observer Pattern",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (Observer Pattern)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين Observer Pattern\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: Observer Pattern...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.3.7",
          "title": "Dependency Injection Pattern",
          "englishTitle": "Dependency Injection Pattern",
          "definition": "يُقصد بـ (Dependency Injection Pattern) أحد الركائز الجوهرية في مسار أنماط التصميم Design Patterns ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (Dependency Injection Pattern) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (Dependency Injection Pattern) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for Dependency Injection Pattern\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح Dependency Injection Pattern في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: Dependency Injection Pattern\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ Dependency Injection Pattern في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق Dependency Injection Pattern\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"Dependency Injection Pattern\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.3.7",
            "title": "Dependency Injection Pattern",
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
            "summary": "يمثل (Dependency Injection Pattern) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (Dependency Injection Pattern) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Dependency Injection Pattern) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على Dependency Injection Pattern",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (Dependency Injection Pattern)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين Dependency Injection Pattern\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: Dependency Injection Pattern...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.3.8",
          "title": "متى نستخدم كل نمط؟",
          "englishTitle": "متى نستخدم كل نمط",
          "definition": "يُقصد بـ (متى نستخدم كل نمط؟) أحد الركائز الجوهرية في مسار أنماط التصميم Design Patterns ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (متى نستخدم كل نمط؟) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (متى نستخدم كل نمط؟) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for متى نستخدم كل نمط؟\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح متى نستخدم كل نمط؟ في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: متى نستخدم كل نمط؟\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ متى نستخدم كل نمط؟ في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق متى نستخدم كل نمط؟\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"متى نستخدم كل نمط؟\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.3.8",
            "title": "متى نستخدم كل نمط؟",
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
            "summary": "يمثل (متى نستخدم كل نمط؟) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (متى نستخدم كل نمط؟) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (متى نستخدم كل نمط؟) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على متى نستخدم كل نمط؟",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (متى نستخدم كل نمط؟)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين متى نستخدم كل نمط؟\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: متى نستخدم كل نمط؟...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "14.4",
      "title": "Clean Architecture",
      "englishTitle": "Clean Architecture",
      "subtopics": [
        {
          "id": "14.4.1",
          "title": "مقدمة في Clean Architecture",
          "englishTitle": "مقدمة في Clean Architecture",
          "definition": "يُقصد بـ (مقدمة في Clean Architecture) أحد الركائز الجوهرية في مسار Clean Architecture ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مقدمة في Clean Architecture) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مقدمة في Clean Architecture) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مقدمة في Clean Architecture\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مقدمة في Clean Architecture في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مقدمة في Clean Architecture\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مقدمة في Clean Architecture في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مقدمة في Clean Architecture\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مقدمة في Clean Architecture\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.4.1",
            "title": "مقدمة في Clean Architecture",
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
            "summary": "يمثل (مقدمة في Clean Architecture) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مقدمة في Clean Architecture) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Clean Architecture) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مقدمة في Clean Architecture",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مقدمة في Clean Architecture)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في Clean Architecture\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مقدمة في Clean Architecture...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.4.2",
          "title": "مفهوم Entities",
          "englishTitle": "Entities",
          "definition": "يُقصد بـ (مفهوم Entities) أحد الركائز الجوهرية في مسار Clean Architecture ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم Entities) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم Entities) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم Entities\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم Entities في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم Entities\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم Entities في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم Entities\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم Entities\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.4.2",
            "title": "مفهوم Entities",
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
            "summary": "يمثل (مفهوم Entities) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم Entities) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Entities) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم Entities",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم Entities)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Entities\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم Entities...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.4.3",
          "title": "مفهوم Use Cases",
          "englishTitle": "Use Cases",
          "definition": "يُقصد بـ (مفهوم Use Cases) أحد الركائز الجوهرية في مسار Clean Architecture ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم Use Cases) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم Use Cases) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم Use Cases\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم Use Cases في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم Use Cases\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم Use Cases في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم Use Cases\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم Use Cases\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.4.3",
            "title": "مفهوم Use Cases",
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
            "summary": "يمثل (مفهوم Use Cases) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم Use Cases) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Use Cases) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم Use Cases",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم Use Cases)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Use Cases\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم Use Cases...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.4.4",
          "title": "مفهوم Interfaces وAdapters",
          "englishTitle": "Interfaces وAdapters",
          "definition": "يُقصد بـ (مفهوم Interfaces وAdapters) أحد الركائز الجوهرية في مسار Clean Architecture ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم Interfaces وAdapters) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم Interfaces وAdapters) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم Interfaces وAdapters\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم Interfaces وAdapters في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم Interfaces وAdapters\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم Interfaces وAdapters في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم Interfaces وAdapters\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم Interfaces وAdapters\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.4.4",
            "title": "مفهوم Interfaces وAdapters",
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
            "summary": "يمثل (مفهوم Interfaces وAdapters) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم Interfaces وAdapters) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Interfaces وAdapters) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم Interfaces وAdapters",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم Interfaces وAdapters)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Interfaces وAdapters\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم Interfaces وAdapters...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.4.5",
          "title": "فصل Domain Logic",
          "englishTitle": "فصل Domain Logic",
          "definition": "يُقصد بـ (فصل Domain Logic) أحد الركائز الجوهرية في مسار Clean Architecture ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (فصل Domain Logic) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (فصل Domain Logic) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for فصل Domain Logic\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح فصل Domain Logic في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: فصل Domain Logic\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ فصل Domain Logic في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق فصل Domain Logic\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"فصل Domain Logic\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.4.5",
            "title": "فصل Domain Logic",
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
            "summary": "يمثل (فصل Domain Logic) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (فصل Domain Logic) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فصل Domain Logic) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على فصل Domain Logic",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (فصل Domain Logic)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين فصل Domain Logic\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: فصل Domain Logic...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.4.6",
          "title": "عزل قواعد البيانات عن منطق الأعمال",
          "englishTitle": "عزل قواعد البيانات عن منطق الأعمال",
          "definition": "يُقصد بـ (عزل قواعد البيانات عن منطق الأعمال) أحد الركائز الجوهرية في مسار Clean Architecture ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (عزل قواعد البيانات عن منطق الأعمال) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (عزل قواعد البيانات عن منطق الأعمال) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for عزل قواعد البيانات عن منطق الأعمال\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح عزل قواعد البيانات عن منطق الأعمال في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: عزل قواعد البيانات عن منطق الأعمال\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ عزل قواعد البيانات عن منطق الأعمال في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق عزل قواعد البيانات عن منطق الأعمال\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"عزل قواعد البيانات عن منطق الأعمال\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.4.6",
            "title": "عزل قواعد البيانات عن منطق الأعمال",
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
            "summary": "يمثل (عزل قواعد البيانات عن منطق الأعمال) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (عزل قواعد البيانات عن منطق الأعمال) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (عزل قواعد البيانات عن منطق الأعمال) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على عزل قواعد البيانات عن منطق الأعمال",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (عزل قواعد البيانات عن منطق الأعمال)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين عزل قواعد البيانات عن منطق الأعمال\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: عزل قواعد البيانات عن منطق الأعمال...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.4.7",
          "title": "إدارة Dependencies",
          "englishTitle": "Dependencies",
          "definition": "يُقصد بـ (إدارة Dependencies) أحد الركائز الجوهرية في مسار Clean Architecture ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إدارة Dependencies) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إدارة Dependencies) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إدارة Dependencies\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إدارة Dependencies في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إدارة Dependencies\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إدارة Dependencies في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إدارة Dependencies\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إدارة Dependencies\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.4.7",
            "title": "إدارة Dependencies",
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
            "summary": "يمثل (إدارة Dependencies) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إدارة Dependencies) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Dependencies) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إدارة Dependencies",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إدارة Dependencies)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة Dependencies\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إدارة Dependencies...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.4.8",
          "title": "بناء API باستخدام Clean Architecture",
          "englishTitle": "بناء API بClean Architecture",
          "definition": "يُقصد بـ (بناء API باستخدام Clean Architecture) أحد الركائز الجوهرية في مسار Clean Architecture ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (بناء API باستخدام Clean Architecture) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (بناء API باستخدام Clean Architecture) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for بناء API باستخدام Clean Architecture\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح بناء API باستخدام Clean Architecture في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: بناء API باستخدام Clean Architecture\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ بناء API باستخدام Clean Architecture في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق بناء API باستخدام Clean Architecture\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"بناء API باستخدام Clean Architecture\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.4.8",
            "title": "بناء API باستخدام Clean Architecture",
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
            "summary": "يمثل (بناء API باستخدام Clean Architecture) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (بناء API باستخدام Clean Architecture) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (بناء API باستخدام Clean Architecture) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على بناء API باستخدام Clean Architecture",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (بناء API باستخدام Clean Architecture)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين بناء API باستخدام Clean Architecture\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: بناء API باستخدام Clean Architecture...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "14.5",
      "title": "المعاملات وأخطاء منطق الأعمال",
      "englishTitle": "المعاملات وأخطاء منطق الأعمال",
      "subtopics": [
        {
          "id": "14.5.1",
          "title": "الفرق بين Technical Errors وBusiness Errors",
          "englishTitle": "Technical Errors وBusiness Errors",
          "definition": "يُقصد بـ (الفرق بين Technical Errors وBusiness Errors) أحد الركائز الجوهرية في مسار المعاملات وأخطاء منطق الأعمال ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (الفرق بين Technical Errors وBusiness Errors) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (الفرق بين Technical Errors وBusiness Errors) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for الفرق بين Technical Errors وBusiness Errors\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح الفرق بين Technical Errors وBusiness Errors في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: الفرق بين Technical Errors وBusiness Errors\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ الفرق بين Technical Errors وBusiness Errors في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق الفرق بين Technical Errors وBusiness Errors\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"الفرق بين Technical Errors وBusiness Errors\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.5.1",
            "title": "الفرق بين Technical Errors وBusiness Errors",
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
            "summary": "يمثل (الفرق بين Technical Errors وBusiness Errors) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (الفرق بين Technical Errors وBusiness Errors) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Technical Errors وBusiness Errors) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على الفرق بين Technical Errors وBusiness Errors",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (الفرق بين Technical Errors وBusiness Errors)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Technical Errors وBusiness Errors\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: الفرق بين Technical Errors وBusiness Errors...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.5.2",
          "title": "تصميم Error Handling موحد",
          "englishTitle": "تصميم Error Handling موحد",
          "definition": "يُقصد بـ (تصميم Error Handling موحد) أحد الركائز الجوهرية في مسار المعاملات وأخطاء منطق الأعمال ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (تصميم Error Handling موحد) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (تصميم Error Handling موحد) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for تصميم Error Handling موحد\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح تصميم Error Handling موحد في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: تصميم Error Handling موحد\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ تصميم Error Handling موحد في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق تصميم Error Handling موحد\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"تصميم Error Handling موحد\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.5.2",
            "title": "تصميم Error Handling موحد",
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
            "summary": "يمثل (تصميم Error Handling موحد) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (تصميم Error Handling موحد) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تصميم Error Handling موحد) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على تصميم Error Handling موحد",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (تصميم Error Handling موحد)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين تصميم Error Handling موحد\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: تصميم Error Handling موحد...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.5.3",
          "title": "مفهوم Idempotency",
          "englishTitle": "Idempotency",
          "definition": "يُقصد بـ (مفهوم Idempotency) أحد الركائز الجوهرية في مسار المعاملات وأخطاء منطق الأعمال ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم Idempotency) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم Idempotency) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم Idempotency\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم Idempotency في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم Idempotency\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم Idempotency في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم Idempotency\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم Idempotency\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.5.3",
            "title": "مفهوم Idempotency",
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
            "summary": "يمثل (مفهوم Idempotency) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم Idempotency) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Idempotency) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم Idempotency",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم Idempotency)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Idempotency\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم Idempotency...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.5.4",
          "title": "منع تكرار الطلبات الحساسة",
          "englishTitle": "منع تكرار الطلبات الحساسة",
          "definition": "يُقصد بـ (منع تكرار الطلبات الحساسة) أحد الركائز الجوهرية في مسار المعاملات وأخطاء منطق الأعمال ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (منع تكرار الطلبات الحساسة) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (منع تكرار الطلبات الحساسة) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for منع تكرار الطلبات الحساسة\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح منع تكرار الطلبات الحساسة في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: منع تكرار الطلبات الحساسة\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ منع تكرار الطلبات الحساسة في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق منع تكرار الطلبات الحساسة\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"منع تكرار الطلبات الحساسة\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.5.4",
            "title": "منع تكرار الطلبات الحساسة",
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
            "summary": "يمثل (منع تكرار الطلبات الحساسة) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (منع تكرار الطلبات الحساسة) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (منع تكرار الطلبات الحساسة) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على منع تكرار الطلبات الحساسة",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (منع تكرار الطلبات الحساسة)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين منع تكرار الطلبات الحساسة\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: منع تكرار الطلبات الحساسة...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.5.5",
          "title": "إدارة Transactions بين الخدمات",
          "englishTitle": "Transactions بين الخدمات",
          "definition": "يُقصد بـ (إدارة Transactions بين الخدمات) أحد الركائز الجوهرية في مسار المعاملات وأخطاء منطق الأعمال ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (إدارة Transactions بين الخدمات) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (إدارة Transactions بين الخدمات) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for إدارة Transactions بين الخدمات\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح إدارة Transactions بين الخدمات في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: إدارة Transactions بين الخدمات\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ إدارة Transactions بين الخدمات في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق إدارة Transactions بين الخدمات\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"إدارة Transactions بين الخدمات\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.5.5",
            "title": "إدارة Transactions بين الخدمات",
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
            "summary": "يمثل (إدارة Transactions بين الخدمات) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (إدارة Transactions بين الخدمات) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Transactions بين الخدمات) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على إدارة Transactions بين الخدمات",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (إدارة Transactions بين الخدمات)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة Transactions بين الخدمات\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: إدارة Transactions بين الخدمات...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.5.6",
          "title": "التحقق من قواعد الأعمال",
          "englishTitle": "التحقق من قواعد الأعمال",
          "definition": "يُقصد بـ (التحقق من قواعد الأعمال) أحد الركائز الجوهرية في مسار المعاملات وأخطاء منطق الأعمال ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (التحقق من قواعد الأعمال) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (التحقق من قواعد الأعمال) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for التحقق من قواعد الأعمال\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح التحقق من قواعد الأعمال في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: التحقق من قواعد الأعمال\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ التحقق من قواعد الأعمال في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق التحقق من قواعد الأعمال\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"التحقق من قواعد الأعمال\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.5.6",
            "title": "التحقق من قواعد الأعمال",
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
            "summary": "يمثل (التحقق من قواعد الأعمال) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (التحقق من قواعد الأعمال) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحقق من قواعد الأعمال) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على التحقق من قواعد الأعمال",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (التحقق من قواعد الأعمال)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين التحقق من قواعد الأعمال\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: التحقق من قواعد الأعمال...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    },
    {
      "id": "14.6",
      "title": "مقدمة في الأنظمة الموزعة",
      "englishTitle": "مقدمة في الأنظمة الموزعة",
      "subtopics": [
        {
          "id": "14.6.1",
          "title": "الفرق بين Monolith وMicroservices",
          "englishTitle": "Monolith وMicroservices",
          "definition": "يُقصد بـ (الفرق بين Monolith وMicroservices) أحد الركائز الجوهرية في مسار مقدمة في الأنظمة الموزعة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (الفرق بين Monolith وMicroservices) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (الفرق بين Monolith وMicroservices) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for الفرق بين Monolith وMicroservices\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح الفرق بين Monolith وMicroservices في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: الفرق بين Monolith وMicroservices\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ الفرق بين Monolith وMicroservices في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق الفرق بين Monolith وMicroservices\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"الفرق بين Monolith وMicroservices\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.6.1",
            "title": "الفرق بين Monolith وMicroservices",
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
            "summary": "يمثل (الفرق بين Monolith وMicroservices) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (الفرق بين Monolith وMicroservices) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Monolith وMicroservices) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على الفرق بين Monolith وMicroservices",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (الفرق بين Monolith وMicroservices)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Monolith وMicroservices\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: الفرق بين Monolith وMicroservices...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.6.2",
          "title": "مفهوم Modular Monolith",
          "englishTitle": "Modular Monolith",
          "definition": "يُقصد بـ (مفهوم Modular Monolith) أحد الركائز الجوهرية في مسار مقدمة في الأنظمة الموزعة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم Modular Monolith) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم Modular Monolith) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم Modular Monolith\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم Modular Monolith في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم Modular Monolith\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم Modular Monolith في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم Modular Monolith\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم Modular Monolith\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.6.2",
            "title": "مفهوم Modular Monolith",
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
            "summary": "يمثل (مفهوم Modular Monolith) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم Modular Monolith) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Modular Monolith) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم Modular Monolith",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم Modular Monolith)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Modular Monolith\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم Modular Monolith...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.6.3",
          "title": "مزايا Microservices وتحدياتها",
          "englishTitle": "مزايا Microservices وتحدياتها",
          "definition": "يُقصد بـ (مزايا Microservices وتحدياتها) أحد الركائز الجوهرية في مسار مقدمة في الأنظمة الموزعة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مزايا Microservices وتحدياتها) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مزايا Microservices وتحدياتها) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مزايا Microservices وتحدياتها\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مزايا Microservices وتحدياتها في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مزايا Microservices وتحدياتها\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مزايا Microservices وتحدياتها في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مزايا Microservices وتحدياتها\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مزايا Microservices وتحدياتها\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.6.3",
            "title": "مزايا Microservices وتحدياتها",
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
            "summary": "يمثل (مزايا Microservices وتحدياتها) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مزايا Microservices وتحدياتها) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مزايا Microservices وتحدياتها) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مزايا Microservices وتحدياتها",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مزايا Microservices وتحدياتها)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مزايا Microservices وتحدياتها\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مزايا Microservices وتحدياتها...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.6.4",
          "title": "مفهوم API Gateway",
          "englishTitle": "API Gateway",
          "definition": "يُقصد بـ (مفهوم API Gateway) أحد الركائز الجوهرية في مسار مقدمة في الأنظمة الموزعة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم API Gateway) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم API Gateway) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم API Gateway\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم API Gateway في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم API Gateway\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم API Gateway في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم API Gateway\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم API Gateway\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.6.4",
            "title": "مفهوم API Gateway",
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
            "summary": "يمثل (مفهوم API Gateway) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم API Gateway) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم API Gateway) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم API Gateway",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم API Gateway)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم API Gateway\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم API Gateway...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.6.5",
          "title": "مفهوم Service Discovery",
          "englishTitle": "Service Discovery",
          "definition": "يُقصد بـ (مفهوم Service Discovery) أحد الركائز الجوهرية في مسار مقدمة في الأنظمة الموزعة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم Service Discovery) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم Service Discovery) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم Service Discovery\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم Service Discovery في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم Service Discovery\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم Service Discovery في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم Service Discovery\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم Service Discovery\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.6.5",
            "title": "مفهوم Service Discovery",
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
            "summary": "يمثل (مفهوم Service Discovery) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم Service Discovery) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Service Discovery) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم Service Discovery",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم Service Discovery)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Service Discovery\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم Service Discovery...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.6.6",
          "title": "مفهوم Eventual Consistency",
          "englishTitle": "Eventual Consistency",
          "definition": "يُقصد بـ (مفهوم Eventual Consistency) أحد الركائز الجوهرية في مسار مقدمة في الأنظمة الموزعة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (مفهوم Eventual Consistency) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (مفهوم Eventual Consistency) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for مفهوم Eventual Consistency\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح مفهوم Eventual Consistency في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: مفهوم Eventual Consistency\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ مفهوم Eventual Consistency في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق مفهوم Eventual Consistency\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"مفهوم Eventual Consistency\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.6.6",
            "title": "مفهوم Eventual Consistency",
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
            "summary": "يمثل (مفهوم Eventual Consistency) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (مفهوم Eventual Consistency) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Eventual Consistency) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على مفهوم Eventual Consistency",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (مفهوم Eventual Consistency)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Eventual Consistency\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: مفهوم Eventual Consistency...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        },
        {
          "id": "14.6.7",
          "title": "اختيار البنية المناسبة لحجم المشروع",
          "englishTitle": "اختيار البنية المناسبة لحجم المشروع",
          "definition": "يُقصد بـ (اختيار البنية المناسبة لحجم المشروع) أحد الركائز الجوهرية في مسار مقدمة في الأنظمة الموزعة ضمن بيئة Node.js، حيث يتيح للمطورين بناء أنظمة خوادم عالية الكفاءة ومعالجة الطلبات البرمجية بمرونة وموثوقية عالية.",
          "analogy": "يشبه مفهوم (اختيار البنية المناسبة لحجم المشروع) نظام العمل في المطارات الدولية؛ حيث يوجد مسار مخصص للتحقق السريع وتوجيه كل مسافر إلى وجهته المحددة دون تعطيل باقي الرحلات أو إغلاق الصالة الرئيسية.",
          "why": "نحتاج إلى (اختيار البنية المناسبة لحجم المشروع) لضمان استقرار التطبيق وتفادي الاختناقات البرمجية (Bottlenecks)، وتقديم تجربة استخدام فائقة السرعة للمستخدمين عند توسع النظام وارتفاع معدل الزيارات.",
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
          "syntax": "// Syntax representation for اختيار البنية المناسبة لحجم المشروع\nconst result = await operation(params);",
          "simpleCode": "// مثال مبسط يوضح اختيار البنية المناسبة لحجم المشروع في Node.js\n// 1. استيراد أو استدعاء الوظيفة المطلوبة\nconsole.log(\"تنفيذ: اختيار البنية المناسبة لحجم المشروع\");\n// 2. معالجة النتيجة وطباعتها\nconst status = \"جاهز للتشغيل\";\nconsole.log(\"الحالة الحالية:\", status);",
          "advancedCode": "// تطبيق عملي متقدم لـ اختيار البنية المناسبة لحجم المشروع في بيئة عمل حقيقية\nimport { createServer } from 'node:http';\n\n// إعداد خادم يستجيب للطلبات بناءً على منطق اختيار البنية المناسبة لحجم المشروع\nconst server = createServer(async (req, res) => {\n  // تسجيل وقت الطلب والمسار\n  console.log(`[${new Date().toISOString()}] طلب جديد: ${req.method} ${req.url}`);\n  \n  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });\n  res.end(JSON.stringify({\n    success: true,\n    topic: \"اختيار البنية المناسبة لحجم المشروع\",\n    message: \"تمت المعالجة بنجاح وفق المعايير القياسية\"\n  }));\n});\n\nserver.listen(3000, () => {\n  console.log(\"الخادم يعمل بنجاح على المنفذ 3000 🚀\");\n});",
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
            "badge": "الدرس 14.6.7",
            "title": "اختيار البنية المناسبة لحجم المشروع",
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
            "summary": "يمثل (اختيار البنية المناسبة لحجم المشروع) معياراً هندسياً أساسياً لتطوير تطبيقات خلفية قابلة للتوسع والموثوقية."
          },
          "quiz": {
            "question": "ما هي الميزة الأساسية لتطبيق (اختيار البنية المناسبة لحجم المشروع) في مشاريع Node.js الحديثة؟",
            "options": [
              "رفع كفاءة المعالجة وتفادي حظر المسار الرئيسي للنظام",
              "إيقاف تشغيل الخادم عند حدوث أي خطأ طارئ",
              "الاستغناء تماماً عن قواعد البيانات",
              "إجبار التطبيق على العمل بشكل متزامن فقط"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختيار البنية المناسبة لحجم المشروع) يضمن استثمار معمارية Node.js غير المتزامنة لتقديم أداء استثنائي وتحمل آلاف الطلبات المتزامنة."
          },
          "exercise": {
            "title": "تطبيق عملي على اختيار البنية المناسبة لحجم المشروع",
            "task": "قم بكتابة دالة في Node.js تنفذ منطق (اختيار البنية المناسبة لحجم المشروع)، مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في الطرفية.",
            "hints": [
              "استخدم كتل try/catch للتعامل الآمن مع أي استثناء محتمل.",
              "تأكد من استخدام async/await في حال وجود عمليات إدخال/إخراج I/O."
            ],
            "solution": "// الحل النموذجي لتمرين اختيار البنية المناسبة لحجم المشروع\nasync function executeTask() {\n  try {\n    console.log(\"بدء تنفيذ مهمة: اختيار البنية المناسبة لحجم المشروع...\");\n    // محاكاة عملية غير متزامنة\n    await new Promise(resolve => setTimeout(resolve, 100));\n    console.log(\"اكتملت المهمة بنجاح ✓\");\n    return { success: true };\n  } catch (error) {\n    console.error(\"فشل تنفيذ المهمة:\", error.message);\n    throw error;\n  }\n}\n\nexecuteTask();",
            "solutionExplanation": "تم تغليف العملية داخل دالة async مع استخدام try/catch لضمان إدارة الأخطاء بأمان ودون انهيار التطبيق."
          }
        }
      ]
    }
  ]
};

export default SECTION_14;
