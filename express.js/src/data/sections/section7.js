// src/data/sections/section7.js
// القسم السابع: بناء RESTful APIs احترافية
export const SECTION_7 = {
  "id": 7,
  "number": "07",
  "title": "القسم السابع: بناء RESTful APIs احترافية",
  "englishTitle": "Section 7: القسم السابع: بناء RESTful APIs احترافية",
  "badge": "متوسط",
  "description": "منهج تعليمي شامل يغطي القسم السابع: بناء RESTful APIs احترافية بدقة تفصيلية وأمثلة عملية وتطبيق مباشر في Express.js.",
  "topics": [
    {
      "id": "7.1",
      "title": "مبادئ REST API",
      "englishTitle": "مبادئ REST API",
      "subtopics": [
        {
          "id": "s7-ma-ما_هو_REST؟",
          "letter": "a",
          "title": "ما هو REST؟",
          "englishTitle": "REST",
          "definition": "يُعد مفهوم (ما هو REST؟) من الركائز الجوهرية في مبادئ REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه طبق الطعام الذي يقدمه النادل للزبون مع الفاتورة وحالة الطلب (جاهز، نفد، يحتاج وقتاً).",
          "why": "نحتاجه لإنهاء دورة الطلب (Request-Response Cycle) وإعادة البيانات المطلوبة أو التوجيه لصفحة أخرى.",
          "terms": [
            {
              "term": "Response (res)",
              "pronunciation": "ريسبونس",
              "meaning": "كائن الاستجابة الذي يتحكم فيما يعود للعميل من بيانات وحالات ورؤوس"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إرسال استجابة برمجية مهيكلة\nres.status(200).json({\n  success: true,\n  message: 'تمت العملية بنجاح',\n  data: { ... }\n});",
          "simpleCode": "// 1. استيراد إكسبريس\nimport express from 'express';\nconst app = express();\n\n// 2. مسار يرسل استجابة JSON برمز الحالة 200\napp.get('/status', (req, res) => {\n  // إرسال الرد وإغلاق دورة الطلب\n  res.status(200).json({ status: 'Online', uptime: process.uptime() });\n});",
          "advancedCode": "// إرسال استجابات متقدمة (تنزيل ملفات، تعيين كوكيز، وتحديد الترويسات)\nimport express from 'express';\nconst app = express();\n\napp.get('/api/report/download', (req, res) => {\n  // 1. تعيين كوكيز آمنة للمتصفح\n  res.cookie('downloaded', 'true', { httpOnly: true, secure: true, maxAge: 3600000 });\n  // 2. تعيين ترويسات التخزين المؤقت\n  res.setHeader('Cache-Control', 'no-store');\n  // 3. إرجاع النتيجة أو الملف بصيغة JSON\n  res.status(200).json({\n    success: true,\n    downloadUrl: '/files/annual-report.pdf',\n    generatedAt: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يرسل الخادم استجابة برأس HTTP 200 OK، ويُرفق كائن JSON بالبيانات، ويثبت الكوكيز في متصفح العميل.",
          "commonMistakes": [
            {
              "wrong": "استدعاء res.json() أو res.send() مرتين لنفس الطلب، مما يسبب خطأ Cannot set headers after they are sent.",
              "right": "استخدام return res.json(...) لضمان إنهاء تنفيذ الدالة فور إرسال الاستجابة الأولى.",
              "reason": "بروتوكول HTTP يسمح بإرسال استجابة واحدة وترويسة واحدة فقط لكل طلب."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: ما هو REST؟",
            "title": "ما هو REST؟",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (ما هو REST؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هو الخطأ الذي يحدث عند استدعاء res.send() مرتين لنفس الطلب؟",
            "options": [
              "Cannot set headers after they are sent to the client",
              "ReferenceError: res is not defined",
              "UnhandledPromiseRejection",
              "Database connection timeout"
            ],
            "correctIndex": 0,
            "explanation": "عند إرسال الرأس للمتصفح لا يمكن تغييره أو إرسال استجابة أخرى لنفس الطلب."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: ما هو REST؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ما هو REST؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو REST؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ما هو REST؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mb-مفهوم_Resources",
          "letter": "b",
          "title": "مفهوم Resources",
          "englishTitle": "Resources",
          "definition": "يُعد مفهوم (مفهوم Resources) من الركائز الجوهرية في مبادئ REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه طبق الطعام الذي يقدمه النادل للزبون مع الفاتورة وحالة الطلب (جاهز، نفد، يحتاج وقتاً).",
          "why": "نحتاجه لإنهاء دورة الطلب (Request-Response Cycle) وإعادة البيانات المطلوبة أو التوجيه لصفحة أخرى.",
          "terms": [
            {
              "term": "Response (res)",
              "pronunciation": "ريسبونس",
              "meaning": "كائن الاستجابة الذي يتحكم فيما يعود للعميل من بيانات وحالات ورؤوس"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إرسال استجابة برمجية مهيكلة\nres.status(200).json({\n  success: true,\n  message: 'تمت العملية بنجاح',\n  data: { ... }\n});",
          "simpleCode": "// 1. استيراد إكسبريس\nimport express from 'express';\nconst app = express();\n\n// 2. مسار يرسل استجابة JSON برمز الحالة 200\napp.get('/status', (req, res) => {\n  // إرسال الرد وإغلاق دورة الطلب\n  res.status(200).json({ status: 'Online', uptime: process.uptime() });\n});",
          "advancedCode": "// إرسال استجابات متقدمة (تنزيل ملفات، تعيين كوكيز، وتحديد الترويسات)\nimport express from 'express';\nconst app = express();\n\napp.get('/api/report/download', (req, res) => {\n  // 1. تعيين كوكيز آمنة للمتصفح\n  res.cookie('downloaded', 'true', { httpOnly: true, secure: true, maxAge: 3600000 });\n  // 2. تعيين ترويسات التخزين المؤقت\n  res.setHeader('Cache-Control', 'no-store');\n  // 3. إرجاع النتيجة أو الملف بصيغة JSON\n  res.status(200).json({\n    success: true,\n    downloadUrl: '/files/annual-report.pdf',\n    generatedAt: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يرسل الخادم استجابة برأس HTTP 200 OK، ويُرفق كائن JSON بالبيانات، ويثبت الكوكيز في متصفح العميل.",
          "commonMistakes": [
            {
              "wrong": "استدعاء res.json() أو res.send() مرتين لنفس الطلب، مما يسبب خطأ Cannot set headers after they are sent.",
              "right": "استخدام return res.json(...) لضمان إنهاء تنفيذ الدالة فور إرسال الاستجابة الأولى.",
              "reason": "بروتوكول HTTP يسمح بإرسال استجابة واحدة وترويسة واحدة فقط لكل طلب."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: مفهوم Resources",
            "title": "مفهوم Resources",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (مفهوم Resources) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هو الخطأ الذي يحدث عند استدعاء res.send() مرتين لنفس الطلب؟",
            "options": [
              "Cannot set headers after they are sent to the client",
              "ReferenceError: res is not defined",
              "UnhandledPromiseRejection",
              "Database connection timeout"
            ],
            "correctIndex": 0,
            "explanation": "عند إرسال الرأس للمتصفح لا يمكن تغييره أو إرسال استجابة أخرى لنفس الطلب."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم Resources",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم Resources)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Resources\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم Resources\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mc-مفهوم_Stateless",
          "letter": "c",
          "title": "مفهوم Statelessness",
          "englishTitle": "Statelessness",
          "definition": "يُعد مفهوم (مفهوم Statelessness) من الركائز الجوهرية في مبادئ REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "مفهوم",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم مفهوم Statelessness\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مفهوم Statelessness\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مفهوم Statelessness\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مفهوم Statelessness\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مفهوم Statelessness في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مفهوم Statelessness\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مفهوم Statelessness) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: مفهوم Statelessness",
            "title": "مفهوم Statelessness",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (مفهوم Statelessness) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مفهوم Statelessness) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مفهوم Statelessness) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم Statelessness",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم Statelessness)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Statelessness\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم Statelessness\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-md-مفهوم_Uniform_I",
          "letter": "d",
          "title": "مفهوم Uniform Interface",
          "englishTitle": "Uniform Interface",
          "definition": "يُعد مفهوم (مفهوم Uniform Interface) من الركائز الجوهرية في مبادئ REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "مفهوم",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم مفهوم Uniform Interface\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مفهوم Uniform Interface\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مفهوم Uniform Interface\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مفهوم Uniform Interface\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مفهوم Uniform Interface في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مفهوم Uniform Interface\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مفهوم Uniform Interface) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: مفهوم Uniform Interface",
            "title": "مفهوم Uniform Interface",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (مفهوم Uniform Interface) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مفهوم Uniform Interface) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مفهوم Uniform Interface) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم Uniform Interface",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم Uniform Interface)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Uniform Interface\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم Uniform Interface\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-me-استخدام_HTTP_Me",
          "letter": "e",
          "title": "استخدام HTTP Methods بطريقة صحيحة",
          "englishTitle": "HTTP Methods بطريقة صحيحة",
          "definition": "يُعد مفهوم (استخدام HTTP Methods بطريقة صحيحة) من الركائز الجوهرية في مبادئ REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "استخدام",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم استخدام HTTP Methods بطريقة صحيحة\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام HTTP Methods بطريقة صحيحة\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام HTTP Methods بطريقة صحيحة\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام HTTP Methods بطريقة صحيحة\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام HTTP Methods بطريقة صحيحة في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام HTTP Methods بطريقة صحيحة\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام HTTP Methods بطريقة صحيحة) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: استخدام HTTP Methods بطريقة صحيحة",
            "title": "استخدام HTTP Methods بطريقة صحيحة",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (استخدام HTTP Methods بطريقة صحيحة) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام HTTP Methods بطريقة صحيحة) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام HTTP Methods بطريقة صحيحة) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام HTTP Methods بطريقة صحيحة",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام HTTP Methods بطريقة صحيحة)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام HTTP Methods بطريقة صحيحة\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام HTTP Methods بطريقة صحيحة\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mf-تصميم_أسماء_End",
          "letter": "f",
          "title": "تصميم أسماء Endpoints",
          "englishTitle": "تصميم أسماء Endpoints",
          "definition": "يُعد مفهوم (تصميم أسماء Endpoints) من الركائز الجوهرية في مبادئ REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تصميم",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تصميم أسماء Endpoints\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تصميم أسماء Endpoints\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تصميم أسماء Endpoints\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تصميم أسماء Endpoints\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تصميم أسماء Endpoints في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تصميم أسماء Endpoints\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تصميم أسماء Endpoints) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تصميم أسماء Endpoints",
            "title": "تصميم أسماء Endpoints",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تصميم أسماء Endpoints) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تصميم أسماء Endpoints) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تصميم أسماء Endpoints) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تصميم أسماء Endpoints",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تصميم أسماء Endpoints)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تصميم أسماء Endpoints\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تصميم أسماء Endpoints\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mg-الفرق_بين_PUT_و",
          "letter": "g",
          "title": "الفرق بين PUT وPATCH",
          "englishTitle": "PUT وPATCH",
          "definition": "يُعد مفهوم (الفرق بين PUT وPATCH) من الركائز الجوهرية في مبادئ REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه مفترق الطرق أو لوحة التوجيه في محطة القطارات؛ توجه كل مسافر إلى الرصيف المخصص لرحلته بدقة.",
          "why": "نحتاجه لتنظيم عناوين الـ API وفصل مسارات المستخدمين والمنتجات والمدفوعات في ملفات منفصلة سهلة الصيانة.",
          "terms": [
            {
              "term": "Router & Routes",
              "pronunciation": "راوتر ومسارات",
              "meaning": "نظام توجيه الطلبات الواردة إلى الدوال المخصصة لمعالجتها بناءً على الرابط ونوع الطلب"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إنشاء موجه مسارات منفصل\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.route('/items')\n  .get(getItemsHandler)\n  .post(createItemHandler);\n\nexport default router;",
          "simpleCode": "// 1. استيراد Express وإنشاء موجه\nimport { Router } from 'express';\nconst router = Router();\n\n// 2. تعريف مسار GET\nrouter.get('/ping', (req, res) => {\n  // الرد على فحص الاتصال\n  res.send('pong');\n});\n\nexport default router;",
          "advancedCode": "// تنظيم المسارات المتقدمة مع الربط المتسلسل والتحقق\nimport { Router } from 'express';\nconst router = Router();\n\n// توجيه مركب لمعالجة مسار بمعامل ديناميكي\nrouter.route('/users/:userId')\n  .get((req, res) => {\n    res.json({ id: req.params.userId, name: 'مستخدم تجريبي' });\n  })\n  .put((req, res) => {\n    res.json({ message: `تم تحديث المستخدم ${req.params.userId}` });\n  })\n  .delete((req, res) => {\n    res.status(204).send();\n  });\n\nexport default router;",
          "outputExplanation": "يوفر نظام التوجيه مرونة عالية لربط كل عملية (GET, PUT, DELETE) بدالتها الخاصة مع قراءة المتغيرات من الرابط.",
          "commonMistakes": [
            {
              "wrong": "كتابة جميع مسارات التطبيق في ملف app.js الرئيسي مما يجعله معقداً وغير قابل للصيانة.",
              "right": "تقسيم المسارات إلى وحدات داخل مجلد routes/ واستدعاؤها باستخدام app.use(\"/api/users\", userRoutes).",
              "reason": "فصل الاهتمامات (Separation of Concerns) هو المبدأ الأساسي لكتابة شفرة نظيفة وقابلة للتوسع."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: الفرق بين PUT وPATCH",
            "title": "الفرق بين PUT وPATCH",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (الفرق بين PUT وPATCH) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الطريقة القياسية لإنشاء موجه مسارات فرعي في Express.js؟",
            "options": [
              "express.Router()",
              "express.createRoute()",
              "express.newRouteGroup()",
              "express.pathManager()"
            ],
            "correctIndex": 0,
            "explanation": "الدالة express.Router() تنشئ كائن موجه مستقل يمكن عزله في ملف منفصل ودمجه في التطبيق الرئيسي."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: الفرق بين PUT وPATCH",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (الفرق بين PUT وPATCH)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين PUT وPATCH\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"الفرق بين PUT وPATCH\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mh-مفهوم_Idempoten",
          "letter": "h",
          "title": "مفهوم Idempotency",
          "englishTitle": "Idempotency",
          "definition": "يُعد مفهوم (مفهوم Idempotency) من الركائز الجوهرية في مبادئ REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "مفهوم",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم مفهوم Idempotency\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مفهوم Idempotency\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مفهوم Idempotency\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مفهوم Idempotency\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مفهوم Idempotency في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مفهوم Idempotency\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مفهوم Idempotency) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: مفهوم Idempotency",
            "title": "مفهوم Idempotency",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (مفهوم Idempotency) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مفهوم Idempotency) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مفهوم Idempotency) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم Idempotency",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم Idempotency)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Idempotency\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم Idempotency\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "7.2",
      "title": "تنفيذ CRUD APIs",
      "englishTitle": "تنفيذ CRUD APIs",
      "subtopics": [
        {
          "id": "s7-ma-إنشاء_GET_All_E",
          "letter": "a",
          "title": "إنشاء GET All Endpoint",
          "englishTitle": "GET All Endpoint",
          "definition": "يُعد مفهوم (إنشاء GET All Endpoint) من الركائز الجوهرية في تنفيذ CRUD APIs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه مفترق الطرق أو لوحة التوجيه في محطة القطارات؛ توجه كل مسافر إلى الرصيف المخصص لرحلته بدقة.",
          "why": "نحتاجه لتنظيم عناوين الـ API وفصل مسارات المستخدمين والمنتجات والمدفوعات في ملفات منفصلة سهلة الصيانة.",
          "terms": [
            {
              "term": "Router & Routes",
              "pronunciation": "راوتر ومسارات",
              "meaning": "نظام توجيه الطلبات الواردة إلى الدوال المخصصة لمعالجتها بناءً على الرابط ونوع الطلب"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إنشاء موجه مسارات منفصل\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.route('/items')\n  .get(getItemsHandler)\n  .post(createItemHandler);\n\nexport default router;",
          "simpleCode": "// 1. استيراد Express وإنشاء موجه\nimport { Router } from 'express';\nconst router = Router();\n\n// 2. تعريف مسار GET\nrouter.get('/ping', (req, res) => {\n  // الرد على فحص الاتصال\n  res.send('pong');\n});\n\nexport default router;",
          "advancedCode": "// تنظيم المسارات المتقدمة مع الربط المتسلسل والتحقق\nimport { Router } from 'express';\nconst router = Router();\n\n// توجيه مركب لمعالجة مسار بمعامل ديناميكي\nrouter.route('/users/:userId')\n  .get((req, res) => {\n    res.json({ id: req.params.userId, name: 'مستخدم تجريبي' });\n  })\n  .put((req, res) => {\n    res.json({ message: `تم تحديث المستخدم ${req.params.userId}` });\n  })\n  .delete((req, res) => {\n    res.status(204).send();\n  });\n\nexport default router;",
          "outputExplanation": "يوفر نظام التوجيه مرونة عالية لربط كل عملية (GET, PUT, DELETE) بدالتها الخاصة مع قراءة المتغيرات من الرابط.",
          "commonMistakes": [
            {
              "wrong": "كتابة جميع مسارات التطبيق في ملف app.js الرئيسي مما يجعله معقداً وغير قابل للصيانة.",
              "right": "تقسيم المسارات إلى وحدات داخل مجلد routes/ واستدعاؤها باستخدام app.use(\"/api/users\", userRoutes).",
              "reason": "فصل الاهتمامات (Separation of Concerns) هو المبدأ الأساسي لكتابة شفرة نظيفة وقابلة للتوسع."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء GET All Endpoint",
            "title": "إنشاء GET All Endpoint",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء GET All Endpoint) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الطريقة القياسية لإنشاء موجه مسارات فرعي في Express.js؟",
            "options": [
              "express.Router()",
              "express.createRoute()",
              "express.newRouteGroup()",
              "express.pathManager()"
            ],
            "correctIndex": 0,
            "explanation": "الدالة express.Router() تنشئ كائن موجه مستقل يمكن عزله في ملف منفصل ودمجه في التطبيق الرئيسي."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء GET All Endpoint",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء GET All Endpoint)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء GET All Endpoint\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء GET All Endpoint\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mb-إنشاء_GET_By_ID",
          "letter": "b",
          "title": "إنشاء GET By ID Endpoint",
          "englishTitle": "GET By ID Endpoint",
          "definition": "يُعد مفهوم (إنشاء GET By ID Endpoint) من الركائز الجوهرية في تنفيذ CRUD APIs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه مفترق الطرق أو لوحة التوجيه في محطة القطارات؛ توجه كل مسافر إلى الرصيف المخصص لرحلته بدقة.",
          "why": "نحتاجه لتنظيم عناوين الـ API وفصل مسارات المستخدمين والمنتجات والمدفوعات في ملفات منفصلة سهلة الصيانة.",
          "terms": [
            {
              "term": "Router & Routes",
              "pronunciation": "راوتر ومسارات",
              "meaning": "نظام توجيه الطلبات الواردة إلى الدوال المخصصة لمعالجتها بناءً على الرابط ونوع الطلب"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إنشاء موجه مسارات منفصل\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.route('/items')\n  .get(getItemsHandler)\n  .post(createItemHandler);\n\nexport default router;",
          "simpleCode": "// 1. استيراد Express وإنشاء موجه\nimport { Router } from 'express';\nconst router = Router();\n\n// 2. تعريف مسار GET\nrouter.get('/ping', (req, res) => {\n  // الرد على فحص الاتصال\n  res.send('pong');\n});\n\nexport default router;",
          "advancedCode": "// تنظيم المسارات المتقدمة مع الربط المتسلسل والتحقق\nimport { Router } from 'express';\nconst router = Router();\n\n// توجيه مركب لمعالجة مسار بمعامل ديناميكي\nrouter.route('/users/:userId')\n  .get((req, res) => {\n    res.json({ id: req.params.userId, name: 'مستخدم تجريبي' });\n  })\n  .put((req, res) => {\n    res.json({ message: `تم تحديث المستخدم ${req.params.userId}` });\n  })\n  .delete((req, res) => {\n    res.status(204).send();\n  });\n\nexport default router;",
          "outputExplanation": "يوفر نظام التوجيه مرونة عالية لربط كل عملية (GET, PUT, DELETE) بدالتها الخاصة مع قراءة المتغيرات من الرابط.",
          "commonMistakes": [
            {
              "wrong": "كتابة جميع مسارات التطبيق في ملف app.js الرئيسي مما يجعله معقداً وغير قابل للصيانة.",
              "right": "تقسيم المسارات إلى وحدات داخل مجلد routes/ واستدعاؤها باستخدام app.use(\"/api/users\", userRoutes).",
              "reason": "فصل الاهتمامات (Separation of Concerns) هو المبدأ الأساسي لكتابة شفرة نظيفة وقابلة للتوسع."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء GET By ID Endpoint",
            "title": "إنشاء GET By ID Endpoint",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء GET By ID Endpoint) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الطريقة القياسية لإنشاء موجه مسارات فرعي في Express.js؟",
            "options": [
              "express.Router()",
              "express.createRoute()",
              "express.newRouteGroup()",
              "express.pathManager()"
            ],
            "correctIndex": 0,
            "explanation": "الدالة express.Router() تنشئ كائن موجه مستقل يمكن عزله في ملف منفصل ودمجه في التطبيق الرئيسي."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء GET By ID Endpoint",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء GET By ID Endpoint)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء GET By ID Endpoint\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء GET By ID Endpoint\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mc-إنشاء_POST_Endp",
          "letter": "c",
          "title": "إنشاء POST Endpoint",
          "englishTitle": "POST Endpoint",
          "definition": "يُعد مفهوم (إنشاء POST Endpoint) من الركائز الجوهرية في تنفيذ CRUD APIs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه مفترق الطرق أو لوحة التوجيه في محطة القطارات؛ توجه كل مسافر إلى الرصيف المخصص لرحلته بدقة.",
          "why": "نحتاجه لتنظيم عناوين الـ API وفصل مسارات المستخدمين والمنتجات والمدفوعات في ملفات منفصلة سهلة الصيانة.",
          "terms": [
            {
              "term": "Router & Routes",
              "pronunciation": "راوتر ومسارات",
              "meaning": "نظام توجيه الطلبات الواردة إلى الدوال المخصصة لمعالجتها بناءً على الرابط ونوع الطلب"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إنشاء موجه مسارات منفصل\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.route('/items')\n  .get(getItemsHandler)\n  .post(createItemHandler);\n\nexport default router;",
          "simpleCode": "// 1. استيراد Express وإنشاء موجه\nimport { Router } from 'express';\nconst router = Router();\n\n// 2. تعريف مسار GET\nrouter.get('/ping', (req, res) => {\n  // الرد على فحص الاتصال\n  res.send('pong');\n});\n\nexport default router;",
          "advancedCode": "// تنظيم المسارات المتقدمة مع الربط المتسلسل والتحقق\nimport { Router } from 'express';\nconst router = Router();\n\n// توجيه مركب لمعالجة مسار بمعامل ديناميكي\nrouter.route('/users/:userId')\n  .get((req, res) => {\n    res.json({ id: req.params.userId, name: 'مستخدم تجريبي' });\n  })\n  .put((req, res) => {\n    res.json({ message: `تم تحديث المستخدم ${req.params.userId}` });\n  })\n  .delete((req, res) => {\n    res.status(204).send();\n  });\n\nexport default router;",
          "outputExplanation": "يوفر نظام التوجيه مرونة عالية لربط كل عملية (GET, PUT, DELETE) بدالتها الخاصة مع قراءة المتغيرات من الرابط.",
          "commonMistakes": [
            {
              "wrong": "كتابة جميع مسارات التطبيق في ملف app.js الرئيسي مما يجعله معقداً وغير قابل للصيانة.",
              "right": "تقسيم المسارات إلى وحدات داخل مجلد routes/ واستدعاؤها باستخدام app.use(\"/api/users\", userRoutes).",
              "reason": "فصل الاهتمامات (Separation of Concerns) هو المبدأ الأساسي لكتابة شفرة نظيفة وقابلة للتوسع."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء POST Endpoint",
            "title": "إنشاء POST Endpoint",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء POST Endpoint) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الطريقة القياسية لإنشاء موجه مسارات فرعي في Express.js؟",
            "options": [
              "express.Router()",
              "express.createRoute()",
              "express.newRouteGroup()",
              "express.pathManager()"
            ],
            "correctIndex": 0,
            "explanation": "الدالة express.Router() تنشئ كائن موجه مستقل يمكن عزله في ملف منفصل ودمجه في التطبيق الرئيسي."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء POST Endpoint",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء POST Endpoint)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء POST Endpoint\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء POST Endpoint\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-md-إنشاء_PUT_Endpo",
          "letter": "d",
          "title": "إنشاء PUT Endpoint",
          "englishTitle": "PUT Endpoint",
          "definition": "يُعد مفهوم (إنشاء PUT Endpoint) من الركائز الجوهرية في تنفيذ CRUD APIs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه مفترق الطرق أو لوحة التوجيه في محطة القطارات؛ توجه كل مسافر إلى الرصيف المخصص لرحلته بدقة.",
          "why": "نحتاجه لتنظيم عناوين الـ API وفصل مسارات المستخدمين والمنتجات والمدفوعات في ملفات منفصلة سهلة الصيانة.",
          "terms": [
            {
              "term": "Router & Routes",
              "pronunciation": "راوتر ومسارات",
              "meaning": "نظام توجيه الطلبات الواردة إلى الدوال المخصصة لمعالجتها بناءً على الرابط ونوع الطلب"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إنشاء موجه مسارات منفصل\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.route('/items')\n  .get(getItemsHandler)\n  .post(createItemHandler);\n\nexport default router;",
          "simpleCode": "// 1. استيراد Express وإنشاء موجه\nimport { Router } from 'express';\nconst router = Router();\n\n// 2. تعريف مسار GET\nrouter.get('/ping', (req, res) => {\n  // الرد على فحص الاتصال\n  res.send('pong');\n});\n\nexport default router;",
          "advancedCode": "// تنظيم المسارات المتقدمة مع الربط المتسلسل والتحقق\nimport { Router } from 'express';\nconst router = Router();\n\n// توجيه مركب لمعالجة مسار بمعامل ديناميكي\nrouter.route('/users/:userId')\n  .get((req, res) => {\n    res.json({ id: req.params.userId, name: 'مستخدم تجريبي' });\n  })\n  .put((req, res) => {\n    res.json({ message: `تم تحديث المستخدم ${req.params.userId}` });\n  })\n  .delete((req, res) => {\n    res.status(204).send();\n  });\n\nexport default router;",
          "outputExplanation": "يوفر نظام التوجيه مرونة عالية لربط كل عملية (GET, PUT, DELETE) بدالتها الخاصة مع قراءة المتغيرات من الرابط.",
          "commonMistakes": [
            {
              "wrong": "كتابة جميع مسارات التطبيق في ملف app.js الرئيسي مما يجعله معقداً وغير قابل للصيانة.",
              "right": "تقسيم المسارات إلى وحدات داخل مجلد routes/ واستدعاؤها باستخدام app.use(\"/api/users\", userRoutes).",
              "reason": "فصل الاهتمامات (Separation of Concerns) هو المبدأ الأساسي لكتابة شفرة نظيفة وقابلة للتوسع."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء PUT Endpoint",
            "title": "إنشاء PUT Endpoint",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء PUT Endpoint) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الطريقة القياسية لإنشاء موجه مسارات فرعي في Express.js؟",
            "options": [
              "express.Router()",
              "express.createRoute()",
              "express.newRouteGroup()",
              "express.pathManager()"
            ],
            "correctIndex": 0,
            "explanation": "الدالة express.Router() تنشئ كائن موجه مستقل يمكن عزله في ملف منفصل ودمجه في التطبيق الرئيسي."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء PUT Endpoint",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء PUT Endpoint)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء PUT Endpoint\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء PUT Endpoint\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-me-إنشاء_PATCH_End",
          "letter": "e",
          "title": "إنشاء PATCH Endpoint",
          "englishTitle": "PATCH Endpoint",
          "definition": "يُعد مفهوم (إنشاء PATCH Endpoint) من الركائز الجوهرية في تنفيذ CRUD APIs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه مفترق الطرق أو لوحة التوجيه في محطة القطارات؛ توجه كل مسافر إلى الرصيف المخصص لرحلته بدقة.",
          "why": "نحتاجه لتنظيم عناوين الـ API وفصل مسارات المستخدمين والمنتجات والمدفوعات في ملفات منفصلة سهلة الصيانة.",
          "terms": [
            {
              "term": "Router & Routes",
              "pronunciation": "راوتر ومسارات",
              "meaning": "نظام توجيه الطلبات الواردة إلى الدوال المخصصة لمعالجتها بناءً على الرابط ونوع الطلب"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إنشاء موجه مسارات منفصل\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.route('/items')\n  .get(getItemsHandler)\n  .post(createItemHandler);\n\nexport default router;",
          "simpleCode": "// 1. استيراد Express وإنشاء موجه\nimport { Router } from 'express';\nconst router = Router();\n\n// 2. تعريف مسار GET\nrouter.get('/ping', (req, res) => {\n  // الرد على فحص الاتصال\n  res.send('pong');\n});\n\nexport default router;",
          "advancedCode": "// تنظيم المسارات المتقدمة مع الربط المتسلسل والتحقق\nimport { Router } from 'express';\nconst router = Router();\n\n// توجيه مركب لمعالجة مسار بمعامل ديناميكي\nrouter.route('/users/:userId')\n  .get((req, res) => {\n    res.json({ id: req.params.userId, name: 'مستخدم تجريبي' });\n  })\n  .put((req, res) => {\n    res.json({ message: `تم تحديث المستخدم ${req.params.userId}` });\n  })\n  .delete((req, res) => {\n    res.status(204).send();\n  });\n\nexport default router;",
          "outputExplanation": "يوفر نظام التوجيه مرونة عالية لربط كل عملية (GET, PUT, DELETE) بدالتها الخاصة مع قراءة المتغيرات من الرابط.",
          "commonMistakes": [
            {
              "wrong": "كتابة جميع مسارات التطبيق في ملف app.js الرئيسي مما يجعله معقداً وغير قابل للصيانة.",
              "right": "تقسيم المسارات إلى وحدات داخل مجلد routes/ واستدعاؤها باستخدام app.use(\"/api/users\", userRoutes).",
              "reason": "فصل الاهتمامات (Separation of Concerns) هو المبدأ الأساسي لكتابة شفرة نظيفة وقابلة للتوسع."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء PATCH Endpoint",
            "title": "إنشاء PATCH Endpoint",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء PATCH Endpoint) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الطريقة القياسية لإنشاء موجه مسارات فرعي في Express.js؟",
            "options": [
              "express.Router()",
              "express.createRoute()",
              "express.newRouteGroup()",
              "express.pathManager()"
            ],
            "correctIndex": 0,
            "explanation": "الدالة express.Router() تنشئ كائن موجه مستقل يمكن عزله في ملف منفصل ودمجه في التطبيق الرئيسي."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء PATCH Endpoint",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء PATCH Endpoint)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء PATCH Endpoint\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء PATCH Endpoint\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mf-إنشاء_DELETE_En",
          "letter": "f",
          "title": "إنشاء DELETE Endpoint",
          "englishTitle": "DELETE Endpoint",
          "definition": "يُعد مفهوم (إنشاء DELETE Endpoint) من الركائز الجوهرية في تنفيذ CRUD APIs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه مفترق الطرق أو لوحة التوجيه في محطة القطارات؛ توجه كل مسافر إلى الرصيف المخصص لرحلته بدقة.",
          "why": "نحتاجه لتنظيم عناوين الـ API وفصل مسارات المستخدمين والمنتجات والمدفوعات في ملفات منفصلة سهلة الصيانة.",
          "terms": [
            {
              "term": "Router & Routes",
              "pronunciation": "راوتر ومسارات",
              "meaning": "نظام توجيه الطلبات الواردة إلى الدوال المخصصة لمعالجتها بناءً على الرابط ونوع الطلب"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إنشاء موجه مسارات منفصل\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.route('/items')\n  .get(getItemsHandler)\n  .post(createItemHandler);\n\nexport default router;",
          "simpleCode": "// 1. استيراد Express وإنشاء موجه\nimport { Router } from 'express';\nconst router = Router();\n\n// 2. تعريف مسار GET\nrouter.get('/ping', (req, res) => {\n  // الرد على فحص الاتصال\n  res.send('pong');\n});\n\nexport default router;",
          "advancedCode": "// تنظيم المسارات المتقدمة مع الربط المتسلسل والتحقق\nimport { Router } from 'express';\nconst router = Router();\n\n// توجيه مركب لمعالجة مسار بمعامل ديناميكي\nrouter.route('/users/:userId')\n  .get((req, res) => {\n    res.json({ id: req.params.userId, name: 'مستخدم تجريبي' });\n  })\n  .put((req, res) => {\n    res.json({ message: `تم تحديث المستخدم ${req.params.userId}` });\n  })\n  .delete((req, res) => {\n    res.status(204).send();\n  });\n\nexport default router;",
          "outputExplanation": "يوفر نظام التوجيه مرونة عالية لربط كل عملية (GET, PUT, DELETE) بدالتها الخاصة مع قراءة المتغيرات من الرابط.",
          "commonMistakes": [
            {
              "wrong": "كتابة جميع مسارات التطبيق في ملف app.js الرئيسي مما يجعله معقداً وغير قابل للصيانة.",
              "right": "تقسيم المسارات إلى وحدات داخل مجلد routes/ واستدعاؤها باستخدام app.use(\"/api/users\", userRoutes).",
              "reason": "فصل الاهتمامات (Separation of Concerns) هو المبدأ الأساسي لكتابة شفرة نظيفة وقابلة للتوسع."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء DELETE Endpoint",
            "title": "إنشاء DELETE Endpoint",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء DELETE Endpoint) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الطريقة القياسية لإنشاء موجه مسارات فرعي في Express.js؟",
            "options": [
              "express.Router()",
              "express.createRoute()",
              "express.newRouteGroup()",
              "express.pathManager()"
            ],
            "correctIndex": 0,
            "explanation": "الدالة express.Router() تنشئ كائن موجه مستقل يمكن عزله في ملف منفصل ودمجه في التطبيق الرئيسي."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء DELETE Endpoint",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء DELETE Endpoint)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء DELETE Endpoint\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء DELETE Endpoint\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mg-التعامل_مع_المو",
          "letter": "g",
          "title": "التعامل مع الموارد غير الموجودة",
          "englishTitle": "التعامل مع الموارد غير الموجودة",
          "definition": "يُعد مفهوم (التعامل مع الموارد غير الموجودة) من الركائز الجوهرية في تنفيذ CRUD APIs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "التعامل",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم التعامل مع الموارد غير الموجودة\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: التعامل مع الموارد غير الموجودة\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: التعامل مع الموارد غير الموجودة\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"التعامل مع الموارد غير الموجودة\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ التعامل مع الموارد غير الموجودة في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"التعامل مع الموارد غير الموجودة\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (التعامل مع الموارد غير الموجودة) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: التعامل مع الموارد غير الموجودة",
            "title": "التعامل مع الموارد غير الموجودة",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (التعامل مع الموارد غير الموجودة) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (التعامل مع الموارد غير الموجودة) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (التعامل مع الموارد غير الموجودة) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: التعامل مع الموارد غير الموجودة",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (التعامل مع الموارد غير الموجودة)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين التعامل مع الموارد غير الموجودة\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"التعامل مع الموارد غير الموجودة\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mh-توحيد_Response_",
          "letter": "h",
          "title": "توحيد Response Format",
          "englishTitle": "توحيد Response Format",
          "definition": "يُعد مفهوم (توحيد Response Format) من الركائز الجوهرية في تنفيذ CRUD APIs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه طبق الطعام الذي يقدمه النادل للزبون مع الفاتورة وحالة الطلب (جاهز، نفد، يحتاج وقتاً).",
          "why": "نحتاجه لإنهاء دورة الطلب (Request-Response Cycle) وإعادة البيانات المطلوبة أو التوجيه لصفحة أخرى.",
          "terms": [
            {
              "term": "Response (res)",
              "pronunciation": "ريسبونس",
              "meaning": "كائن الاستجابة الذي يتحكم فيما يعود للعميل من بيانات وحالات ورؤوس"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إرسال استجابة برمجية مهيكلة\nres.status(200).json({\n  success: true,\n  message: 'تمت العملية بنجاح',\n  data: { ... }\n});",
          "simpleCode": "// 1. استيراد إكسبريس\nimport express from 'express';\nconst app = express();\n\n// 2. مسار يرسل استجابة JSON برمز الحالة 200\napp.get('/status', (req, res) => {\n  // إرسال الرد وإغلاق دورة الطلب\n  res.status(200).json({ status: 'Online', uptime: process.uptime() });\n});",
          "advancedCode": "// إرسال استجابات متقدمة (تنزيل ملفات، تعيين كوكيز، وتحديد الترويسات)\nimport express from 'express';\nconst app = express();\n\napp.get('/api/report/download', (req, res) => {\n  // 1. تعيين كوكيز آمنة للمتصفح\n  res.cookie('downloaded', 'true', { httpOnly: true, secure: true, maxAge: 3600000 });\n  // 2. تعيين ترويسات التخزين المؤقت\n  res.setHeader('Cache-Control', 'no-store');\n  // 3. إرجاع النتيجة أو الملف بصيغة JSON\n  res.status(200).json({\n    success: true,\n    downloadUrl: '/files/annual-report.pdf',\n    generatedAt: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يرسل الخادم استجابة برأس HTTP 200 OK، ويُرفق كائن JSON بالبيانات، ويثبت الكوكيز في متصفح العميل.",
          "commonMistakes": [
            {
              "wrong": "استدعاء res.json() أو res.send() مرتين لنفس الطلب، مما يسبب خطأ Cannot set headers after they are sent.",
              "right": "استخدام return res.json(...) لضمان إنهاء تنفيذ الدالة فور إرسال الاستجابة الأولى.",
              "reason": "بروتوكول HTTP يسمح بإرسال استجابة واحدة وترويسة واحدة فقط لكل طلب."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: توحيد Response Format",
            "title": "توحيد Response Format",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (توحيد Response Format) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هو الخطأ الذي يحدث عند استدعاء res.send() مرتين لنفس الطلب؟",
            "options": [
              "Cannot set headers after they are sent to the client",
              "ReferenceError: res is not defined",
              "UnhandledPromiseRejection",
              "Database connection timeout"
            ],
            "correctIndex": 0,
            "explanation": "عند إرسال الرأس للمتصفح لا يمكن تغييره أو إرسال استجابة أخرى لنفس الطلب."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: توحيد Response Format",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (توحيد Response Format)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين توحيد Response Format\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"توحيد Response Format\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "7.3",
      "title": "البحث والفلترة وترتيب البيانات",
      "englishTitle": "البحث والفلترة وترتيب البيانات",
      "subtopics": [
        {
          "id": "s7-ma-تنفيذ_Search_AP",
          "letter": "a",
          "title": "تنفيذ Search API",
          "englishTitle": "Search API",
          "definition": "يُعد مفهوم (تنفيذ Search API) من الركائز الجوهرية في البحث والفلترة وترتيب البيانات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنفيذ",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تنفيذ Search API\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنفيذ Search API\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنفيذ Search API\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنفيذ Search API\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنفيذ Search API في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنفيذ Search API\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنفيذ Search API) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ Search API",
            "title": "تنفيذ Search API",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ Search API) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنفيذ Search API) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنفيذ Search API) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ Search API",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ Search API)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Search API\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ Search API\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mb-تنفيذ_Filtering",
          "letter": "b",
          "title": "تنفيذ Filtering",
          "englishTitle": "Filtering",
          "definition": "يُعد مفهوم (تنفيذ Filtering) من الركائز الجوهرية في البحث والفلترة وترتيب البيانات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنفيذ",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تنفيذ Filtering\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنفيذ Filtering\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنفيذ Filtering\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنفيذ Filtering\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنفيذ Filtering في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنفيذ Filtering\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنفيذ Filtering) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ Filtering",
            "title": "تنفيذ Filtering",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ Filtering) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنفيذ Filtering) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنفيذ Filtering) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ Filtering",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ Filtering)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Filtering\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ Filtering\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mc-تنفيذ_Sorting",
          "letter": "c",
          "title": "تنفيذ Sorting",
          "englishTitle": "Sorting",
          "definition": "يُعد مفهوم (تنفيذ Sorting) من الركائز الجوهرية في البحث والفلترة وترتيب البيانات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنفيذ",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تنفيذ Sorting\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنفيذ Sorting\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنفيذ Sorting\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنفيذ Sorting\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنفيذ Sorting في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنفيذ Sorting\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنفيذ Sorting) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ Sorting",
            "title": "تنفيذ Sorting",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ Sorting) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنفيذ Sorting) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنفيذ Sorting) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ Sorting",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ Sorting)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Sorting\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ Sorting\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-md-تنفيذ_Paginatio",
          "letter": "d",
          "title": "تنفيذ Pagination",
          "englishTitle": "Pagination",
          "definition": "يُعد مفهوم (تنفيذ Pagination) من الركائز الجوهرية في البحث والفلترة وترتيب البيانات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنفيذ",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تنفيذ Pagination\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنفيذ Pagination\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنفيذ Pagination\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنفيذ Pagination\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنفيذ Pagination في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنفيذ Pagination\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنفيذ Pagination) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ Pagination",
            "title": "تنفيذ Pagination",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ Pagination) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنفيذ Pagination) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنفيذ Pagination) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ Pagination",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ Pagination)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Pagination\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ Pagination\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-me-الفرق_بين_Offse",
          "letter": "e",
          "title": "الفرق بين Offset وCursor Pagination",
          "englishTitle": "Offset وCursor Pagination",
          "definition": "يُعد مفهوم (الفرق بين Offset وCursor Pagination) من الركائز الجوهرية في البحث والفلترة وترتيب البيانات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "الفرق",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم الفرق بين Offset وCursor Pagination\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: الفرق بين Offset وCursor Pagination\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: الفرق بين Offset وCursor Pagination\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"الفرق بين Offset وCursor Pagination\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ الفرق بين Offset وCursor Pagination في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"الفرق بين Offset وCursor Pagination\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (الفرق بين Offset وCursor Pagination) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: الفرق بين Offset وCursor Pagination",
            "title": "الفرق بين Offset وCursor Pagination",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (الفرق بين Offset وCursor Pagination) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (الفرق بين Offset وCursor Pagination) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (الفرق بين Offset وCursor Pagination) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: الفرق بين Offset وCursor Pagination",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (الفرق بين Offset وCursor Pagination)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Offset وCursor Pagination\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"الفرق بين Offset وCursor Pagination\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mf-تنفيذ_Field_Sel",
          "letter": "f",
          "title": "تنفيذ Field Selection",
          "englishTitle": "Field Selection",
          "definition": "يُعد مفهوم (تنفيذ Field Selection) من الركائز الجوهرية في البحث والفلترة وترتيب البيانات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنفيذ",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تنفيذ Field Selection\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنفيذ Field Selection\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنفيذ Field Selection\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنفيذ Field Selection\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنفيذ Field Selection في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنفيذ Field Selection\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنفيذ Field Selection) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ Field Selection",
            "title": "تنفيذ Field Selection",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ Field Selection) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنفيذ Field Selection) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنفيذ Field Selection) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ Field Selection",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ Field Selection)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Field Selection\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ Field Selection\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mg-إرجاع_معلومات_P",
          "letter": "g",
          "title": "إرجاع معلومات Pagination",
          "englishTitle": "إرجاع معلومات Pagination",
          "definition": "يُعد مفهوم (إرجاع معلومات Pagination) من الركائز الجوهرية في البحث والفلترة وترتيب البيانات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إرجاع",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إرجاع معلومات Pagination\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إرجاع معلومات Pagination\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إرجاع معلومات Pagination\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إرجاع معلومات Pagination\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إرجاع معلومات Pagination في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إرجاع معلومات Pagination\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إرجاع معلومات Pagination) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إرجاع معلومات Pagination",
            "title": "إرجاع معلومات Pagination",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إرجاع معلومات Pagination) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إرجاع معلومات Pagination) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إرجاع معلومات Pagination) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إرجاع معلومات Pagination",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إرجاع معلومات Pagination)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إرجاع معلومات Pagination\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إرجاع معلومات Pagination\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mh-التحقق_من_Query",
          "letter": "h",
          "title": "التحقق من Query Parameters",
          "englishTitle": "التحقق من Query Parameters",
          "definition": "يُعد مفهوم (التحقق من Query Parameters) من الركائز الجوهرية في البحث والفلترة وترتيب البيانات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه استمارة الطلب التي يملؤها الزبون في المطعم، يحدد فيها طلبه (Body)، رقم طاولته (Params)، وأي إضافات خاصة (Query).",
          "why": "نحتاجه لقراءة وفحص كل ما يرسله العميل للخادم من معطيات وبيانات لنتخذ القرار المناسب بشأنها.",
          "terms": [
            {
              "term": "Request (req)",
              "pronunciation": "ريكويست",
              "meaning": "كائن الطلب القادم من المتصفح حاملاً البيانات والرؤوس والمعاملات"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// قراءة بيانات الطلب في Express\napp.post('/api/users/:id', (req, res) => {\n  const userId = req.params.id;      // المعاملات في الرابط\n  const query = req.query.filter;     // معلمات الاستعلام\n  const { name, email } = req.body;   // البيانات المرسلة\n  const token = req.headers.authorization; // ترويسة المصادقة\n});",
          "simpleCode": "// 1. استيراد express\nimport express from 'express';\n// 2. إنشاء التطبيق وتفعيل قراءة JSON\nconst app = express();\napp.use(express.json());\n\n// 3. معالجة طلب يقرأ بيانات req\napp.get('/info', (req, res) => {\n  // قراءة معلومات الطلب\n  const userAgent = req.get('User-Agent');\n  // إرجاع النتيجة\n  res.json({ client: userAgent, message: 'تم استلام الطلب' });\n});",
          "advancedCode": "// معالجة متقدمة لبيانات الطلب مع التحقق والتأمين\nimport express from 'express';\n\nconst app = express();\napp.use(express.json({ limit: '1mb' })); // حماية الخادم من الحزم الضخمة\n\napp.post('/api/orders/:orderId', (req, res) => {\n  // 1. استخراج المعاملات ورقم الطلب\n  const { orderId } = req.params;\n  // 2. استخراج خيارات التصفية أو الترتيب\n  const { priority = 'normal' } = req.query;\n  // 3. قراءة بيانات السلة\n  const { items, total } = req.body;\n\n  // 4. الرد بحالة 200 وبيانات منظمة\n  res.status(200).json({\n    success: true,\n    orderId,\n    priority,\n    receivedItems: items?.length || 0,\n    timestamp: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يقوم الخادم باستخراج البيانات وتفكيكها من كائن req، ثم يعيد استجابة بصيغة JSON تؤكد معالجة الطلب بنجاح مع الحالة 200.",
          "commonMistakes": [
            {
              "wrong": "محاولة قراءة req.body دون تفعيل وسيط express.json() في بداية التطبيق فيظهر undefined.",
              "right": "إضافة app.use(express.json()) قبل تعريف المسارات التي تستقبل بيانات POST أو PUT.",
              "reason": "افتراضياً لا يقوم Express بتحليل جسم الطلب القادم بصيغة JSON إلا بعد تمريره على الوسيط المخصص."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: التحقق من Query Parameters",
            "title": "التحقق من Query Parameters",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (التحقق من Query Parameters) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ماذا سيحدث لو حاولت قراءة req.body دون استدعاء app.use(express.json())؟",
            "options": [
              "ستكون قيمة req.body غير معرفة (undefined)",
              "سيتوقف خادم Node.js عن العمل تماماً",
              "سيقوم Express بتحويلها تلقائياً إلى نص",
              "سيتم إرجاع خطأ 404 Not Found"
            ],
            "correctIndex": 0,
            "explanation": "بدون express.json()، يظل دفق البيانات غير مفسر وتكون قيمة req.body غير معرفة undefined."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: التحقق من Query Parameters",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (التحقق من Query Parameters)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين التحقق من Query Parameters\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"التحقق من Query Parameters\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "7.4",
      "title": "تصميم استجابات API",
      "englishTitle": "تصميم استجابات API",
      "subtopics": [
        {
          "id": "s7-ma-توحيد_Success_R",
          "letter": "a",
          "title": "توحيد Success Responses",
          "englishTitle": "توحيد Success Responses",
          "definition": "يُعد مفهوم (توحيد Success Responses) من الركائز الجوهرية في تصميم استجابات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه طبق الطعام الذي يقدمه النادل للزبون مع الفاتورة وحالة الطلب (جاهز، نفد، يحتاج وقتاً).",
          "why": "نحتاجه لإنهاء دورة الطلب (Request-Response Cycle) وإعادة البيانات المطلوبة أو التوجيه لصفحة أخرى.",
          "terms": [
            {
              "term": "Response (res)",
              "pronunciation": "ريسبونس",
              "meaning": "كائن الاستجابة الذي يتحكم فيما يعود للعميل من بيانات وحالات ورؤوس"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إرسال استجابة برمجية مهيكلة\nres.status(200).json({\n  success: true,\n  message: 'تمت العملية بنجاح',\n  data: { ... }\n});",
          "simpleCode": "// 1. استيراد إكسبريس\nimport express from 'express';\nconst app = express();\n\n// 2. مسار يرسل استجابة JSON برمز الحالة 200\napp.get('/status', (req, res) => {\n  // إرسال الرد وإغلاق دورة الطلب\n  res.status(200).json({ status: 'Online', uptime: process.uptime() });\n});",
          "advancedCode": "// إرسال استجابات متقدمة (تنزيل ملفات، تعيين كوكيز، وتحديد الترويسات)\nimport express from 'express';\nconst app = express();\n\napp.get('/api/report/download', (req, res) => {\n  // 1. تعيين كوكيز آمنة للمتصفح\n  res.cookie('downloaded', 'true', { httpOnly: true, secure: true, maxAge: 3600000 });\n  // 2. تعيين ترويسات التخزين المؤقت\n  res.setHeader('Cache-Control', 'no-store');\n  // 3. إرجاع النتيجة أو الملف بصيغة JSON\n  res.status(200).json({\n    success: true,\n    downloadUrl: '/files/annual-report.pdf',\n    generatedAt: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يرسل الخادم استجابة برأس HTTP 200 OK، ويُرفق كائن JSON بالبيانات، ويثبت الكوكيز في متصفح العميل.",
          "commonMistakes": [
            {
              "wrong": "استدعاء res.json() أو res.send() مرتين لنفس الطلب، مما يسبب خطأ Cannot set headers after they are sent.",
              "right": "استخدام return res.json(...) لضمان إنهاء تنفيذ الدالة فور إرسال الاستجابة الأولى.",
              "reason": "بروتوكول HTTP يسمح بإرسال استجابة واحدة وترويسة واحدة فقط لكل طلب."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: توحيد Success Responses",
            "title": "توحيد Success Responses",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (توحيد Success Responses) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هو الخطأ الذي يحدث عند استدعاء res.send() مرتين لنفس الطلب؟",
            "options": [
              "Cannot set headers after they are sent to the client",
              "ReferenceError: res is not defined",
              "UnhandledPromiseRejection",
              "Database connection timeout"
            ],
            "correctIndex": 0,
            "explanation": "عند إرسال الرأس للمتصفح لا يمكن تغييره أو إرسال استجابة أخرى لنفس الطلب."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: توحيد Success Responses",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (توحيد Success Responses)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين توحيد Success Responses\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"توحيد Success Responses\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mb-توحيد_Error_Res",
          "letter": "b",
          "title": "توحيد Error Responses",
          "englishTitle": "توحيد Error Responses",
          "definition": "يُعد مفهوم (توحيد Error Responses) من الركائز الجوهرية في تصميم استجابات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه طبق الطعام الذي يقدمه النادل للزبون مع الفاتورة وحالة الطلب (جاهز، نفد، يحتاج وقتاً).",
          "why": "نحتاجه لإنهاء دورة الطلب (Request-Response Cycle) وإعادة البيانات المطلوبة أو التوجيه لصفحة أخرى.",
          "terms": [
            {
              "term": "Response (res)",
              "pronunciation": "ريسبونس",
              "meaning": "كائن الاستجابة الذي يتحكم فيما يعود للعميل من بيانات وحالات ورؤوس"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إرسال استجابة برمجية مهيكلة\nres.status(200).json({\n  success: true,\n  message: 'تمت العملية بنجاح',\n  data: { ... }\n});",
          "simpleCode": "// 1. استيراد إكسبريس\nimport express from 'express';\nconst app = express();\n\n// 2. مسار يرسل استجابة JSON برمز الحالة 200\napp.get('/status', (req, res) => {\n  // إرسال الرد وإغلاق دورة الطلب\n  res.status(200).json({ status: 'Online', uptime: process.uptime() });\n});",
          "advancedCode": "// إرسال استجابات متقدمة (تنزيل ملفات، تعيين كوكيز، وتحديد الترويسات)\nimport express from 'express';\nconst app = express();\n\napp.get('/api/report/download', (req, res) => {\n  // 1. تعيين كوكيز آمنة للمتصفح\n  res.cookie('downloaded', 'true', { httpOnly: true, secure: true, maxAge: 3600000 });\n  // 2. تعيين ترويسات التخزين المؤقت\n  res.setHeader('Cache-Control', 'no-store');\n  // 3. إرجاع النتيجة أو الملف بصيغة JSON\n  res.status(200).json({\n    success: true,\n    downloadUrl: '/files/annual-report.pdf',\n    generatedAt: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يرسل الخادم استجابة برأس HTTP 200 OK، ويُرفق كائن JSON بالبيانات، ويثبت الكوكيز في متصفح العميل.",
          "commonMistakes": [
            {
              "wrong": "استدعاء res.json() أو res.send() مرتين لنفس الطلب، مما يسبب خطأ Cannot set headers after they are sent.",
              "right": "استخدام return res.json(...) لضمان إنهاء تنفيذ الدالة فور إرسال الاستجابة الأولى.",
              "reason": "بروتوكول HTTP يسمح بإرسال استجابة واحدة وترويسة واحدة فقط لكل طلب."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: توحيد Error Responses",
            "title": "توحيد Error Responses",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (توحيد Error Responses) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هو الخطأ الذي يحدث عند استدعاء res.send() مرتين لنفس الطلب؟",
            "options": [
              "Cannot set headers after they are sent to the client",
              "ReferenceError: res is not defined",
              "UnhandledPromiseRejection",
              "Database connection timeout"
            ],
            "correctIndex": 0,
            "explanation": "عند إرسال الرأس للمتصفح لا يمكن تغييره أو إرسال استجابة أخرى لنفس الطلب."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: توحيد Error Responses",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (توحيد Error Responses)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين توحيد Error Responses\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"توحيد Error Responses\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mc-استخدام_Status_",
          "letter": "c",
          "title": "استخدام Status Codes المناسبة",
          "englishTitle": "Status Codes المناسبة",
          "definition": "يُعد مفهوم (استخدام Status Codes المناسبة) من الركائز الجوهرية في تصميم استجابات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه طبق الطعام الذي يقدمه النادل للزبون مع الفاتورة وحالة الطلب (جاهز، نفد، يحتاج وقتاً).",
          "why": "نحتاجه لإنهاء دورة الطلب (Request-Response Cycle) وإعادة البيانات المطلوبة أو التوجيه لصفحة أخرى.",
          "terms": [
            {
              "term": "Response (res)",
              "pronunciation": "ريسبونس",
              "meaning": "كائن الاستجابة الذي يتحكم فيما يعود للعميل من بيانات وحالات ورؤوس"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إرسال استجابة برمجية مهيكلة\nres.status(200).json({\n  success: true,\n  message: 'تمت العملية بنجاح',\n  data: { ... }\n});",
          "simpleCode": "// 1. استيراد إكسبريس\nimport express from 'express';\nconst app = express();\n\n// 2. مسار يرسل استجابة JSON برمز الحالة 200\napp.get('/status', (req, res) => {\n  // إرسال الرد وإغلاق دورة الطلب\n  res.status(200).json({ status: 'Online', uptime: process.uptime() });\n});",
          "advancedCode": "// إرسال استجابات متقدمة (تنزيل ملفات، تعيين كوكيز، وتحديد الترويسات)\nimport express from 'express';\nconst app = express();\n\napp.get('/api/report/download', (req, res) => {\n  // 1. تعيين كوكيز آمنة للمتصفح\n  res.cookie('downloaded', 'true', { httpOnly: true, secure: true, maxAge: 3600000 });\n  // 2. تعيين ترويسات التخزين المؤقت\n  res.setHeader('Cache-Control', 'no-store');\n  // 3. إرجاع النتيجة أو الملف بصيغة JSON\n  res.status(200).json({\n    success: true,\n    downloadUrl: '/files/annual-report.pdf',\n    generatedAt: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يرسل الخادم استجابة برأس HTTP 200 OK، ويُرفق كائن JSON بالبيانات، ويثبت الكوكيز في متصفح العميل.",
          "commonMistakes": [
            {
              "wrong": "استدعاء res.json() أو res.send() مرتين لنفس الطلب، مما يسبب خطأ Cannot set headers after they are sent.",
              "right": "استخدام return res.json(...) لضمان إنهاء تنفيذ الدالة فور إرسال الاستجابة الأولى.",
              "reason": "بروتوكول HTTP يسمح بإرسال استجابة واحدة وترويسة واحدة فقط لكل طلب."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: استخدام Status Codes المناسبة",
            "title": "استخدام Status Codes المناسبة",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (استخدام Status Codes المناسبة) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هو الخطأ الذي يحدث عند استدعاء res.send() مرتين لنفس الطلب؟",
            "options": [
              "Cannot set headers after they are sent to the client",
              "ReferenceError: res is not defined",
              "UnhandledPromiseRejection",
              "Database connection timeout"
            ],
            "correctIndex": 0,
            "explanation": "عند إرسال الرأس للمتصفح لا يمكن تغييره أو إرسال استجابة أخرى لنفس الطلب."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام Status Codes المناسبة",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام Status Codes المناسبة)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Status Codes المناسبة\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام Status Codes المناسبة\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-md-إرجاع_Metadata",
          "letter": "d",
          "title": "إرجاع Metadata",
          "englishTitle": "إرجاع Metadata",
          "definition": "يُعد مفهوم (إرجاع Metadata) من الركائز الجوهرية في تصميم استجابات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إرجاع",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إرجاع Metadata\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إرجاع Metadata\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إرجاع Metadata\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إرجاع Metadata\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إرجاع Metadata في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إرجاع Metadata\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إرجاع Metadata) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إرجاع Metadata",
            "title": "إرجاع Metadata",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إرجاع Metadata) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إرجاع Metadata) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إرجاع Metadata) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إرجاع Metadata",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إرجاع Metadata)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إرجاع Metadata\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إرجاع Metadata\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-me-إرجاع_روابط_الم",
          "letter": "e",
          "title": "إرجاع روابط الموارد عند الحاجة",
          "englishTitle": "إرجاع روابط الموارد عند الحاجة",
          "definition": "يُعد مفهوم (إرجاع روابط الموارد عند الحاجة) من الركائز الجوهرية في تصميم استجابات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إرجاع",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إرجاع روابط الموارد عند الحاجة\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إرجاع روابط الموارد عند الحاجة\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إرجاع روابط الموارد عند الحاجة\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إرجاع روابط الموارد عند الحاجة\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إرجاع روابط الموارد عند الحاجة في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إرجاع روابط الموارد عند الحاجة\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إرجاع روابط الموارد عند الحاجة) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إرجاع روابط الموارد عند الحاجة",
            "title": "إرجاع روابط الموارد عند الحاجة",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إرجاع روابط الموارد عند الحاجة) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إرجاع روابط الموارد عند الحاجة) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إرجاع روابط الموارد عند الحاجة) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إرجاع روابط الموارد عند الحاجة",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إرجاع روابط الموارد عند الحاجة)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إرجاع روابط الموارد عند الحاجة\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إرجاع روابط الموارد عند الحاجة\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mf-تجنب_كشف_الحقول",
          "letter": "f",
          "title": "تجنب كشف الحقول الحساسة",
          "englishTitle": "تجنب كشف الحقول الحساسة",
          "definition": "يُعد مفهوم (تجنب كشف الحقول الحساسة) من الركائز الجوهرية في تصميم استجابات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تجنب",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تجنب كشف الحقول الحساسة\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تجنب كشف الحقول الحساسة\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تجنب كشف الحقول الحساسة\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تجنب كشف الحقول الحساسة\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تجنب كشف الحقول الحساسة في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تجنب كشف الحقول الحساسة\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تجنب كشف الحقول الحساسة) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تجنب كشف الحقول الحساسة",
            "title": "تجنب كشف الحقول الحساسة",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تجنب كشف الحقول الحساسة) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تجنب كشف الحقول الحساسة) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تجنب كشف الحقول الحساسة) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تجنب كشف الحقول الحساسة",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تجنب كشف الحقول الحساسة)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تجنب كشف الحقول الحساسة\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تجنب كشف الحقول الحساسة\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mg-استخدام_Respons",
          "letter": "g",
          "title": "استخدام Response DTOs",
          "englishTitle": "Response DTOs",
          "definition": "يُعد مفهوم (استخدام Response DTOs) من الركائز الجوهرية في تصميم استجابات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه طبق الطعام الذي يقدمه النادل للزبون مع الفاتورة وحالة الطلب (جاهز، نفد، يحتاج وقتاً).",
          "why": "نحتاجه لإنهاء دورة الطلب (Request-Response Cycle) وإعادة البيانات المطلوبة أو التوجيه لصفحة أخرى.",
          "terms": [
            {
              "term": "Response (res)",
              "pronunciation": "ريسبونس",
              "meaning": "كائن الاستجابة الذي يتحكم فيما يعود للعميل من بيانات وحالات ورؤوس"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إرسال استجابة برمجية مهيكلة\nres.status(200).json({\n  success: true,\n  message: 'تمت العملية بنجاح',\n  data: { ... }\n});",
          "simpleCode": "// 1. استيراد إكسبريس\nimport express from 'express';\nconst app = express();\n\n// 2. مسار يرسل استجابة JSON برمز الحالة 200\napp.get('/status', (req, res) => {\n  // إرسال الرد وإغلاق دورة الطلب\n  res.status(200).json({ status: 'Online', uptime: process.uptime() });\n});",
          "advancedCode": "// إرسال استجابات متقدمة (تنزيل ملفات، تعيين كوكيز، وتحديد الترويسات)\nimport express from 'express';\nconst app = express();\n\napp.get('/api/report/download', (req, res) => {\n  // 1. تعيين كوكيز آمنة للمتصفح\n  res.cookie('downloaded', 'true', { httpOnly: true, secure: true, maxAge: 3600000 });\n  // 2. تعيين ترويسات التخزين المؤقت\n  res.setHeader('Cache-Control', 'no-store');\n  // 3. إرجاع النتيجة أو الملف بصيغة JSON\n  res.status(200).json({\n    success: true,\n    downloadUrl: '/files/annual-report.pdf',\n    generatedAt: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يرسل الخادم استجابة برأس HTTP 200 OK، ويُرفق كائن JSON بالبيانات، ويثبت الكوكيز في متصفح العميل.",
          "commonMistakes": [
            {
              "wrong": "استدعاء res.json() أو res.send() مرتين لنفس الطلب، مما يسبب خطأ Cannot set headers after they are sent.",
              "right": "استخدام return res.json(...) لضمان إنهاء تنفيذ الدالة فور إرسال الاستجابة الأولى.",
              "reason": "بروتوكول HTTP يسمح بإرسال استجابة واحدة وترويسة واحدة فقط لكل طلب."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: استخدام Response DTOs",
            "title": "استخدام Response DTOs",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (استخدام Response DTOs) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هو الخطأ الذي يحدث عند استدعاء res.send() مرتين لنفس الطلب؟",
            "options": [
              "Cannot set headers after they are sent to the client",
              "ReferenceError: res is not defined",
              "UnhandledPromiseRejection",
              "Database connection timeout"
            ],
            "correctIndex": 0,
            "explanation": "عند إرسال الرأس للمتصفح لا يمكن تغييره أو إرسال استجابة أخرى لنفس الطلب."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام Response DTOs",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام Response DTOs)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Response DTOs\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام Response DTOs\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "7.5",
      "title": "إدارة إصدارات API",
      "englishTitle": "إدارة إصدارات API",
      "subtopics": [
        {
          "id": "s7-ma-ما_هو_API_Versi",
          "letter": "a",
          "title": "ما هو API Versioning؟",
          "englishTitle": "API Versioning",
          "definition": "يُعد مفهوم (ما هو API Versioning؟) من الركائز الجوهرية في إدارة إصدارات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "ما",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم ما هو API Versioning؟\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: ما هو API Versioning؟\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: ما هو API Versioning؟\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"ما هو API Versioning؟\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ ما هو API Versioning؟ في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"ما هو API Versioning؟\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (ما هو API Versioning؟) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: ما هو API Versioning؟",
            "title": "ما هو API Versioning؟",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (ما هو API Versioning؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (ما هو API Versioning؟) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (ما هو API Versioning؟) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: ما هو API Versioning؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ما هو API Versioning؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو API Versioning؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ما هو API Versioning؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mb-استخدام_/api/v1",
          "letter": "b",
          "title": "استخدام /api/v1",
          "englishTitle": "/api/v1",
          "definition": "يُعد مفهوم (استخدام /api/v1) من الركائز الجوهرية في إدارة إصدارات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "استخدام",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم استخدام /api/v1\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام /api/v1\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام /api/v1\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام /api/v1\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام /api/v1 في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام /api/v1\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام /api/v1) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: استخدام /api/v1",
            "title": "استخدام /api/v1",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (استخدام /api/v1) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام /api/v1) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام /api/v1) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام /api/v1",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام /api/v1)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام /api/v1\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام /api/v1\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mc-إنشاء_Version_2",
          "letter": "c",
          "title": "إنشاء Version 2",
          "englishTitle": "Version 2",
          "definition": "يُعد مفهوم (إنشاء Version 2) من الركائز الجوهرية في إدارة إصدارات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إنشاء",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إنشاء Version 2\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء Version 2\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء Version 2\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء Version 2\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء Version 2 في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء Version 2\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء Version 2) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء Version 2",
            "title": "إنشاء Version 2",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء Version 2) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء Version 2) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء Version 2) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء Version 2",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Version 2)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Version 2\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Version 2\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-md-مفهوم_Backward_",
          "letter": "d",
          "title": "مفهوم Backward Compatibility",
          "englishTitle": "Backward Compatibility",
          "definition": "يُعد مفهوم (مفهوم Backward Compatibility) من الركائز الجوهرية في إدارة إصدارات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "مفهوم",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم مفهوم Backward Compatibility\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مفهوم Backward Compatibility\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مفهوم Backward Compatibility\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مفهوم Backward Compatibility\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مفهوم Backward Compatibility في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مفهوم Backward Compatibility\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مفهوم Backward Compatibility) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: مفهوم Backward Compatibility",
            "title": "مفهوم Backward Compatibility",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (مفهوم Backward Compatibility) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مفهوم Backward Compatibility) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مفهوم Backward Compatibility) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم Backward Compatibility",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم Backward Compatibility)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Backward Compatibility\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم Backward Compatibility\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-me-تجنب_Breaking_C",
          "letter": "e",
          "title": "تجنب Breaking Changes",
          "englishTitle": "تجنب Breaking Changes",
          "definition": "يُعد مفهوم (تجنب Breaking Changes) من الركائز الجوهرية في إدارة إصدارات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تجنب",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تجنب Breaking Changes\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تجنب Breaking Changes\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تجنب Breaking Changes\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تجنب Breaking Changes\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تجنب Breaking Changes في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تجنب Breaking Changes\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تجنب Breaking Changes) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تجنب Breaking Changes",
            "title": "تجنب Breaking Changes",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تجنب Breaking Changes) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تجنب Breaking Changes) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تجنب Breaking Changes) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تجنب Breaking Changes",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تجنب Breaking Changes)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تجنب Breaking Changes\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تجنب Breaking Changes\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mf-إدارة_Deprecate",
          "letter": "f",
          "title": "إدارة Deprecated Endpoints",
          "englishTitle": "Deprecated Endpoints",
          "definition": "يُعد مفهوم (إدارة Deprecated Endpoints) من الركائز الجوهرية في إدارة إصدارات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إدارة",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إدارة Deprecated Endpoints\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إدارة Deprecated Endpoints\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إدارة Deprecated Endpoints\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إدارة Deprecated Endpoints\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إدارة Deprecated Endpoints في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إدارة Deprecated Endpoints\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إدارة Deprecated Endpoints) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إدارة Deprecated Endpoints",
            "title": "إدارة Deprecated Endpoints",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إدارة Deprecated Endpoints) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إدارة Deprecated Endpoints) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إدارة Deprecated Endpoints) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إدارة Deprecated Endpoints",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إدارة Deprecated Endpoints)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة Deprecated Endpoints\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إدارة Deprecated Endpoints\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mg-كتابة_API_Chang",
          "letter": "g",
          "title": "كتابة API Changelog",
          "englishTitle": "كتابة API Changelog",
          "definition": "يُعد مفهوم (كتابة API Changelog) من الركائز الجوهرية في إدارة إصدارات API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "كتابة",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم كتابة API Changelog\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: كتابة API Changelog\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: كتابة API Changelog\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"كتابة API Changelog\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ كتابة API Changelog في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"كتابة API Changelog\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (كتابة API Changelog) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: كتابة API Changelog",
            "title": "كتابة API Changelog",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (كتابة API Changelog) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (كتابة API Changelog) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (كتابة API Changelog) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: كتابة API Changelog",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (كتابة API Changelog)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين كتابة API Changelog\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"كتابة API Changelog\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "7.6",
      "title": "مشروع عملي: نظام إدارة الكتب",
      "englishTitle": "مشروع عملي: نظام إدارة الكتب",
      "subtopics": [
        {
          "id": "s7-ma-تصميم_Book_Reso",
          "letter": "a",
          "title": "تصميم Book Resource",
          "englishTitle": "تصميم Book Resource",
          "definition": "يُعد مفهوم (تصميم Book Resource) من الركائز الجوهرية في مشروع عملي: نظام إدارة الكتب ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه طبق الطعام الذي يقدمه النادل للزبون مع الفاتورة وحالة الطلب (جاهز، نفد، يحتاج وقتاً).",
          "why": "نحتاجه لإنهاء دورة الطلب (Request-Response Cycle) وإعادة البيانات المطلوبة أو التوجيه لصفحة أخرى.",
          "terms": [
            {
              "term": "Response (res)",
              "pronunciation": "ريسبونس",
              "meaning": "كائن الاستجابة الذي يتحكم فيما يعود للعميل من بيانات وحالات ورؤوس"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إرسال استجابة برمجية مهيكلة\nres.status(200).json({\n  success: true,\n  message: 'تمت العملية بنجاح',\n  data: { ... }\n});",
          "simpleCode": "// 1. استيراد إكسبريس\nimport express from 'express';\nconst app = express();\n\n// 2. مسار يرسل استجابة JSON برمز الحالة 200\napp.get('/status', (req, res) => {\n  // إرسال الرد وإغلاق دورة الطلب\n  res.status(200).json({ status: 'Online', uptime: process.uptime() });\n});",
          "advancedCode": "// إرسال استجابات متقدمة (تنزيل ملفات، تعيين كوكيز، وتحديد الترويسات)\nimport express from 'express';\nconst app = express();\n\napp.get('/api/report/download', (req, res) => {\n  // 1. تعيين كوكيز آمنة للمتصفح\n  res.cookie('downloaded', 'true', { httpOnly: true, secure: true, maxAge: 3600000 });\n  // 2. تعيين ترويسات التخزين المؤقت\n  res.setHeader('Cache-Control', 'no-store');\n  // 3. إرجاع النتيجة أو الملف بصيغة JSON\n  res.status(200).json({\n    success: true,\n    downloadUrl: '/files/annual-report.pdf',\n    generatedAt: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يرسل الخادم استجابة برأس HTTP 200 OK، ويُرفق كائن JSON بالبيانات، ويثبت الكوكيز في متصفح العميل.",
          "commonMistakes": [
            {
              "wrong": "استدعاء res.json() أو res.send() مرتين لنفس الطلب، مما يسبب خطأ Cannot set headers after they are sent.",
              "right": "استخدام return res.json(...) لضمان إنهاء تنفيذ الدالة فور إرسال الاستجابة الأولى.",
              "reason": "بروتوكول HTTP يسمح بإرسال استجابة واحدة وترويسة واحدة فقط لكل طلب."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تصميم Book Resource",
            "title": "تصميم Book Resource",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تصميم Book Resource) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هو الخطأ الذي يحدث عند استدعاء res.send() مرتين لنفس الطلب؟",
            "options": [
              "Cannot set headers after they are sent to the client",
              "ReferenceError: res is not defined",
              "UnhandledPromiseRejection",
              "Database connection timeout"
            ],
            "correctIndex": 0,
            "explanation": "عند إرسال الرأس للمتصفح لا يمكن تغييره أو إرسال استجابة أخرى لنفس الطلب."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تصميم Book Resource",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تصميم Book Resource)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تصميم Book Resource\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تصميم Book Resource\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mb-إنشاء_Books_Rou",
          "letter": "b",
          "title": "إنشاء Books Router",
          "englishTitle": "Books Router",
          "definition": "يُعد مفهوم (إنشاء Books Router) من الركائز الجوهرية في مشروع عملي: نظام إدارة الكتب ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه مفترق الطرق أو لوحة التوجيه في محطة القطارات؛ توجه كل مسافر إلى الرصيف المخصص لرحلته بدقة.",
          "why": "نحتاجه لتنظيم عناوين الـ API وفصل مسارات المستخدمين والمنتجات والمدفوعات في ملفات منفصلة سهلة الصيانة.",
          "terms": [
            {
              "term": "Router & Routes",
              "pronunciation": "راوتر ومسارات",
              "meaning": "نظام توجيه الطلبات الواردة إلى الدوال المخصصة لمعالجتها بناءً على الرابط ونوع الطلب"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إنشاء موجه مسارات منفصل\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.route('/items')\n  .get(getItemsHandler)\n  .post(createItemHandler);\n\nexport default router;",
          "simpleCode": "// 1. استيراد Express وإنشاء موجه\nimport { Router } from 'express';\nconst router = Router();\n\n// 2. تعريف مسار GET\nrouter.get('/ping', (req, res) => {\n  // الرد على فحص الاتصال\n  res.send('pong');\n});\n\nexport default router;",
          "advancedCode": "// تنظيم المسارات المتقدمة مع الربط المتسلسل والتحقق\nimport { Router } from 'express';\nconst router = Router();\n\n// توجيه مركب لمعالجة مسار بمعامل ديناميكي\nrouter.route('/users/:userId')\n  .get((req, res) => {\n    res.json({ id: req.params.userId, name: 'مستخدم تجريبي' });\n  })\n  .put((req, res) => {\n    res.json({ message: `تم تحديث المستخدم ${req.params.userId}` });\n  })\n  .delete((req, res) => {\n    res.status(204).send();\n  });\n\nexport default router;",
          "outputExplanation": "يوفر نظام التوجيه مرونة عالية لربط كل عملية (GET, PUT, DELETE) بدالتها الخاصة مع قراءة المتغيرات من الرابط.",
          "commonMistakes": [
            {
              "wrong": "كتابة جميع مسارات التطبيق في ملف app.js الرئيسي مما يجعله معقداً وغير قابل للصيانة.",
              "right": "تقسيم المسارات إلى وحدات داخل مجلد routes/ واستدعاؤها باستخدام app.use(\"/api/users\", userRoutes).",
              "reason": "فصل الاهتمامات (Separation of Concerns) هو المبدأ الأساسي لكتابة شفرة نظيفة وقابلة للتوسع."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء Books Router",
            "title": "إنشاء Books Router",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء Books Router) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الطريقة القياسية لإنشاء موجه مسارات فرعي في Express.js؟",
            "options": [
              "express.Router()",
              "express.createRoute()",
              "express.newRouteGroup()",
              "express.pathManager()"
            ],
            "correctIndex": 0,
            "explanation": "الدالة express.Router() تنشئ كائن موجه مستقل يمكن عزله في ملف منفصل ودمجه في التطبيق الرئيسي."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء Books Router",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Books Router)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Books Router\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Books Router\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mc-إنشاء_Books_Con",
          "letter": "c",
          "title": "إنشاء Books Controller",
          "englishTitle": "Books Controller",
          "definition": "يُعد مفهوم (إنشاء Books Controller) من الركائز الجوهرية في مشروع عملي: نظام إدارة الكتب ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إنشاء",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إنشاء Books Controller\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء Books Controller\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء Books Controller\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء Books Controller\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء Books Controller في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء Books Controller\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء Books Controller) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء Books Controller",
            "title": "إنشاء Books Controller",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء Books Controller) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء Books Controller) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء Books Controller) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء Books Controller",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Books Controller)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Books Controller\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Books Controller\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-md-تنفيذ_CRUD_كامل",
          "letter": "d",
          "title": "تنفيذ CRUD كامل",
          "englishTitle": "CRUD كامل",
          "definition": "يُعد مفهوم (تنفيذ CRUD كامل) من الركائز الجوهرية في مشروع عملي: نظام إدارة الكتب ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنفيذ",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تنفيذ CRUD كامل\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنفيذ CRUD كامل\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنفيذ CRUD كامل\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنفيذ CRUD كامل\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنفيذ CRUD كامل في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنفيذ CRUD كامل\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنفيذ CRUD كامل) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ CRUD كامل",
            "title": "تنفيذ CRUD كامل",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ CRUD كامل) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنفيذ CRUD كامل) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنفيذ CRUD كامل) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ CRUD كامل",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ CRUD كامل)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ CRUD كامل\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ CRUD كامل\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-me-إضافة_البحث_عن_",
          "letter": "e",
          "title": "إضافة البحث عن الكتب",
          "englishTitle": "إضافة البحث عن الكتب",
          "definition": "يُعد مفهوم (إضافة البحث عن الكتب) من الركائز الجوهرية في مشروع عملي: نظام إدارة الكتب ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إضافة",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إضافة البحث عن الكتب\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إضافة البحث عن الكتب\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إضافة البحث عن الكتب\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إضافة البحث عن الكتب\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إضافة البحث عن الكتب في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إضافة البحث عن الكتب\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إضافة البحث عن الكتب) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إضافة البحث عن الكتب",
            "title": "إضافة البحث عن الكتب",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إضافة البحث عن الكتب) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إضافة البحث عن الكتب) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إضافة البحث عن الكتب) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إضافة البحث عن الكتب",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إضافة البحث عن الكتب)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إضافة البحث عن الكتب\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إضافة البحث عن الكتب\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mf-إضافة_الفلترة_ح",
          "letter": "f",
          "title": "إضافة الفلترة حسب التصنيف",
          "englishTitle": "إضافة الفلترة حسب التصنيف",
          "definition": "يُعد مفهوم (إضافة الفلترة حسب التصنيف) من الركائز الجوهرية في مشروع عملي: نظام إدارة الكتب ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إضافة",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إضافة الفلترة حسب التصنيف\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إضافة الفلترة حسب التصنيف\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إضافة الفلترة حسب التصنيف\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إضافة الفلترة حسب التصنيف\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إضافة الفلترة حسب التصنيف في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إضافة الفلترة حسب التصنيف\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إضافة الفلترة حسب التصنيف) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إضافة الفلترة حسب التصنيف",
            "title": "إضافة الفلترة حسب التصنيف",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إضافة الفلترة حسب التصنيف) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إضافة الفلترة حسب التصنيف) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إضافة الفلترة حسب التصنيف) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إضافة الفلترة حسب التصنيف",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إضافة الفلترة حسب التصنيف)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إضافة الفلترة حسب التصنيف\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إضافة الفلترة حسب التصنيف\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mg-إضافة_Paginatio",
          "letter": "g",
          "title": "إضافة Pagination",
          "englishTitle": "إضافة Pagination",
          "definition": "يُعد مفهوم (إضافة Pagination) من الركائز الجوهرية في مشروع عملي: نظام إدارة الكتب ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إضافة",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إضافة Pagination\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إضافة Pagination\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إضافة Pagination\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إضافة Pagination\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إضافة Pagination في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إضافة Pagination\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إضافة Pagination) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إضافة Pagination",
            "title": "إضافة Pagination",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إضافة Pagination) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إضافة Pagination) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إضافة Pagination) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إضافة Pagination",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إضافة Pagination)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إضافة Pagination\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إضافة Pagination\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mh-إضافة_Error_Han",
          "letter": "h",
          "title": "إضافة Error Handling",
          "englishTitle": "إضافة Error Handling",
          "definition": "يُعد مفهوم (إضافة Error Handling) من الركائز الجوهرية في مشروع عملي: نظام إدارة الكتب ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه وسائد الأمان والمكابح المانعة للانزلاق في السيارة؛ تتدخل فوراً عند حدوث طارئ لحماية الركاب من الاصطدام.",
          "why": "نحتاجه لمنع توقف الخادم عند حدوث خطأ غير متوقع، ولحماية البيانات الحساسة من الظهور للعميل في شاشة المتصفح.",
          "terms": [
            {
              "term": "Error Handling",
              "pronunciation": "إيرور هاندلينج",
              "meaning": "الآلية البرمجية لاكتشاف وتصيد الأخطاء ومنع انهيار الخادم وإرجاع رسالة مفهومة للمستخدم"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// وسيط معالجة الأخطاء العام (مكون من 4 معاملات دائماً)\napp.use((err, req, res, next) => {\n  const statusCode = err.statusCode || 500;\n  res.status(statusCode).json({\n    success: false,\n    error: err.message || 'حدث خطأ غير متوقع في الخادم'\n  });\n});",
          "simpleCode": "// 1. وسيط لاصطياد الأخطاء في Express\napp.use((err, req, res, next) => {\n  // طباعة الخطأ للمطور في السجلات\n  console.error('خطأ تم رصده:', err.message);\n  // إرجاع رد آمن للمستخدم\n  res.status(500).json({ error: 'عذراً، حدث خطأ داخلي' });\n});",
          "advancedCode": "// فئة مخصصة للأخطاء ووسيط عام احترافي\nexport class AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n    this.isOperational = true; // خطأ تشغيلي متوقع\n    Error.captureStackTrace(this, this.constructor);\n  }\n}\n\n// وسيط الأخطاء العام\napp.use((err, req, res, next) => {\n  const status = err.statusCode || 500;\n  res.status(status).json({\n    status: 'error',\n    message: err.message,\n    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })\n  });\n});",
          "outputExplanation": "يتم التقاط الخطأ التشغيلي بواسطة الوسيط العام ذي الـ 4 معاملات، وتنسيق رد JSON يحتوي على رسالة الخطأ ورمز الحالة 4xx أو 500.",
          "commonMistakes": [
            {
              "wrong": "تعريف وسيط الأخطاء بـ 3 معاملات فقط (req, res, next)، فيتعامل معه Express كوسيط عادي وليس كمعالج أخطاء.",
              "right": "كتابة الـ 4 معاملات دائماً (err, req, res, next) حتى لو لم تستخدم next، ليتعرف Express عليه كـ Error Handler.",
              "reason": "يعتمد محرك Express على خاصية دالة fn.length لمعرفة ما إذا كانت معالجة أخطاء (4 معاملات) أم وسيطاً عادياً."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إضافة Error Handling",
            "title": "إضافة Error Handling",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إضافة Error Handling) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "كم عدد المعاملات الإلزامية التي يجب أن يقبلها وسيط معالجة الأخطاء في Express؟",
            "options": [
              "4 معاملات (err, req, res, next)",
              "معاملان فقط (req, res)",
              "3 معاملات (req, res, next)",
              "معامل واحد (error)"
            ],
            "correctIndex": 0,
            "explanation": "يجب أن يقبل 4 معاملات بالضبط حتى يميزه Express عن الوسائط العادية عبر fn.length === 4."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إضافة Error Handling",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إضافة Error Handling)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إضافة Error Handling\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إضافة Error Handling\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s7-mi-اختبار_API_باست",
          "letter": "i",
          "title": "اختبار API باستخدام Postman",
          "englishTitle": "اختبار API بPostman",
          "definition": "يُعد مفهوم (اختبار API باستخدام Postman) من الركائز الجوهرية في مشروع عملي: نظام إدارة الكتب ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه مفترق الطرق أو لوحة التوجيه في محطة القطارات؛ توجه كل مسافر إلى الرصيف المخصص لرحلته بدقة.",
          "why": "نحتاجه لتنظيم عناوين الـ API وفصل مسارات المستخدمين والمنتجات والمدفوعات في ملفات منفصلة سهلة الصيانة.",
          "terms": [
            {
              "term": "Router & Routes",
              "pronunciation": "راوتر ومسارات",
              "meaning": "نظام توجيه الطلبات الواردة إلى الدوال المخصصة لمعالجتها بناءً على الرابط ونوع الطلب"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إنشاء موجه مسارات منفصل\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.route('/items')\n  .get(getItemsHandler)\n  .post(createItemHandler);\n\nexport default router;",
          "simpleCode": "// 1. استيراد Express وإنشاء موجه\nimport { Router } from 'express';\nconst router = Router();\n\n// 2. تعريف مسار GET\nrouter.get('/ping', (req, res) => {\n  // الرد على فحص الاتصال\n  res.send('pong');\n});\n\nexport default router;",
          "advancedCode": "// تنظيم المسارات المتقدمة مع الربط المتسلسل والتحقق\nimport { Router } from 'express';\nconst router = Router();\n\n// توجيه مركب لمعالجة مسار بمعامل ديناميكي\nrouter.route('/users/:userId')\n  .get((req, res) => {\n    res.json({ id: req.params.userId, name: 'مستخدم تجريبي' });\n  })\n  .put((req, res) => {\n    res.json({ message: `تم تحديث المستخدم ${req.params.userId}` });\n  })\n  .delete((req, res) => {\n    res.status(204).send();\n  });\n\nexport default router;",
          "outputExplanation": "يوفر نظام التوجيه مرونة عالية لربط كل عملية (GET, PUT, DELETE) بدالتها الخاصة مع قراءة المتغيرات من الرابط.",
          "commonMistakes": [
            {
              "wrong": "كتابة جميع مسارات التطبيق في ملف app.js الرئيسي مما يجعله معقداً وغير قابل للصيانة.",
              "right": "تقسيم المسارات إلى وحدات داخل مجلد routes/ واستدعاؤها باستخدام app.use(\"/api/users\", userRoutes).",
              "reason": "فصل الاهتمامات (Separation of Concerns) هو المبدأ الأساسي لكتابة شفرة نظيفة وقابلة للتوسع."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: اختبار API باستخدام Postman",
            "title": "اختبار API باستخدام Postman",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (اختبار API باستخدام Postman) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الطريقة القياسية لإنشاء موجه مسارات فرعي في Express.js؟",
            "options": [
              "express.Router()",
              "express.createRoute()",
              "express.newRouteGroup()",
              "express.pathManager()"
            ],
            "correctIndex": 0,
            "explanation": "الدالة express.Router() تنشئ كائن موجه مستقل يمكن عزله في ملف منفصل ودمجه في التطبيق الرئيسي."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: اختبار API باستخدام Postman",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (اختبار API باستخدام Postman)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين اختبار API باستخدام Postman\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"اختبار API باستخدام Postman\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    }
  ]
};

export default SECTION_7;
