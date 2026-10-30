// src/data/sections/section2.js
// القسم الثاني: التعرف على Express.js وإعداد بيئة العمل
export const SECTION_2 = {
  "id": 2,
  "number": "02",
  "title": "القسم الثاني: التعرف على Express.js وإعداد بيئة العمل",
  "englishTitle": "Section 2: القسم الثاني: التعرف على Express.js وإعداد بيئة العمل",
  "badge": "مبتدئ",
  "description": "منهج تعليمي شامل يغطي القسم الثاني: التعرف على Express.js وإعداد بيئة العمل بدقة تفصيلية وأمثلة عملية وتطبيق مباشر في Express.js.",
  "topics": [
    {
      "id": "2.1",
      "title": "مقدمة في Express.js",
      "englishTitle": "مقدمة في Express.js",
      "subtopics": [
        {
          "id": "s2-ma-ما_هو_Express.j",
          "letter": "a",
          "title": "ما هو Express.js؟",
          "englishTitle": "Express.js",
          "definition": "يُعد مفهوم (ما هو Express.js؟) من الركائز الجوهرية في مقدمة في Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: ما هو Express.js؟",
            "title": "ما هو Express.js؟",
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
            "summary": "تطبيق (ما هو Express.js؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: ما هو Express.js؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ما هو Express.js؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو Express.js؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ما هو Express.js؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mb-لماذا_نستخدم_Ex",
          "letter": "b",
          "title": "لماذا نستخدم Express.js؟",
          "englishTitle": "لماذا نستخدم Express.js",
          "definition": "يُعد مفهوم (لماذا نستخدم Express.js؟) من الركائز الجوهرية في مقدمة في Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: لماذا نستخدم Express.js؟",
            "title": "لماذا نستخدم Express.js؟",
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
            "summary": "تطبيق (لماذا نستخدم Express.js؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: لماذا نستخدم Express.js؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (لماذا نستخدم Express.js؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين لماذا نستخدم Express.js؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"لماذا نستخدم Express.js؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mc-الفرق_بين_Node.",
          "letter": "c",
          "title": "الفرق بين Node.js وExpress.js",
          "englishTitle": "Node.js وExpress.js",
          "definition": "يُعد مفهوم (الفرق بين Node.js وExpress.js) من الركائز الجوهرية في مقدمة في Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: الفرق بين Node.js وExpress.js",
            "title": "الفرق بين Node.js وExpress.js",
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
            "summary": "تطبيق (الفرق بين Node.js وExpress.js) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: الفرق بين Node.js وExpress.js",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (الفرق بين Node.js وExpress.js)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Node.js وExpress.js\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"الفرق بين Node.js وExpress.js\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-md-كيف_يعمل_Expres",
          "letter": "d",
          "title": "كيف يعمل Express.js؟",
          "englishTitle": "كيف يعمل Express.js",
          "definition": "يُعد مفهوم (كيف يعمل Express.js؟) من الركائز الجوهرية في مقدمة في Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: كيف يعمل Express.js؟",
            "title": "كيف يعمل Express.js؟",
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
            "summary": "تطبيق (كيف يعمل Express.js؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: كيف يعمل Express.js؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (كيف يعمل Express.js؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين كيف يعمل Express.js؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"كيف يعمل Express.js؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-me-مفهوم_Web_Frame",
          "letter": "e",
          "title": "مفهوم Web Framework",
          "englishTitle": "Web Framework",
          "definition": "يُعد مفهوم (مفهوم Web Framework) من الركائز الجوهرية في مقدمة في Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم مفهوم Web Framework\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مفهوم Web Framework\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مفهوم Web Framework\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مفهوم Web Framework\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مفهوم Web Framework في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مفهوم Web Framework\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مفهوم Web Framework) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: مفهوم Web Framework",
            "title": "مفهوم Web Framework",
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
            "summary": "تطبيق (مفهوم Web Framework) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مفهوم Web Framework) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مفهوم Web Framework) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم Web Framework",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم Web Framework)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Web Framework\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم Web Framework\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mf-مميزات_Express.",
          "letter": "f",
          "title": "مميزات Express.js وحدوده",
          "englishTitle": "مميزات Express.js وحدوده",
          "definition": "يُعد مفهوم (مميزات Express.js وحدوده) من الركائز الجوهرية في مقدمة في Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: مميزات Express.js وحدوده",
            "title": "مميزات Express.js وحدوده",
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
            "summary": "تطبيق (مميزات Express.js وحدوده) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: مميزات Express.js وحدوده",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مميزات Express.js وحدوده)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مميزات Express.js وحدوده\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مميزات Express.js وحدوده\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mg-متى_نستخدم_Expr",
          "letter": "g",
          "title": "متى نستخدم Express.js؟",
          "englishTitle": "متى نستخدم Express.js",
          "definition": "يُعد مفهوم (متى نستخدم Express.js؟) من الركائز الجوهرية في مقدمة في Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: متى نستخدم Express.js؟",
            "title": "متى نستخدم Express.js؟",
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
            "summary": "تطبيق (متى نستخدم Express.js؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: متى نستخدم Express.js؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (متى نستخدم Express.js؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين متى نستخدم Express.js؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"متى نستخدم Express.js؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mh-الفرق_بين_Expre",
          "letter": "h",
          "title": "الفرق بين Express وFastify وNestJS",
          "englishTitle": "Express وFastify وNestJS",
          "definition": "يُعد مفهوم (الفرق بين Express وFastify وNestJS) من الركائز الجوهرية في مقدمة في Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: الفرق بين Express وFastify وNestJS",
            "title": "الفرق بين Express وFastify وNestJS",
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
            "summary": "تطبيق (الفرق بين Express وFastify وNestJS) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: الفرق بين Express وFastify وNestJS",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (الفرق بين Express وFastify وNestJS)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Express وFastify وNestJS\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"الفرق بين Express وFastify وNestJS\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "2.2",
      "title": "إعداد بيئة التطوير",
      "englishTitle": "إعداد بيئة التطوير",
      "subtopics": [
        {
          "id": "s2-ma-تثبيت_إصدار_Nod",
          "letter": "a",
          "title": "تثبيت إصدار Node.js مدعوم",
          "englishTitle": "تثبيت إصدار Node.js مدعوم",
          "definition": "يُعد مفهوم (تثبيت إصدار Node.js مدعوم) من الركائز الجوهرية في إعداد بيئة التطوير ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تثبيت",
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
          "syntax": "// تطبيق معياري لمفهوم تثبيت إصدار Node.js مدعوم\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تثبيت إصدار Node.js مدعوم\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تثبيت إصدار Node.js مدعوم\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تثبيت إصدار Node.js مدعوم\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تثبيت إصدار Node.js مدعوم في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تثبيت إصدار Node.js مدعوم\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تثبيت إصدار Node.js مدعوم) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: تثبيت إصدار Node.js مدعوم",
            "title": "تثبيت إصدار Node.js مدعوم",
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
            "summary": "تطبيق (تثبيت إصدار Node.js مدعوم) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تثبيت إصدار Node.js مدعوم) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تثبيت إصدار Node.js مدعوم) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تثبيت إصدار Node.js مدعوم",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تثبيت إصدار Node.js مدعوم)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تثبيت إصدار Node.js مدعوم\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تثبيت إصدار Node.js مدعوم\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mb-تثبيت_Visual_St",
          "letter": "b",
          "title": "تثبيت Visual Studio Code",
          "englishTitle": "تثبيت Visual Studio Code",
          "definition": "يُعد مفهوم (تثبيت Visual Studio Code) من الركائز الجوهرية في إعداد بيئة التطوير ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تثبيت",
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
          "syntax": "// تطبيق معياري لمفهوم تثبيت Visual Studio Code\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تثبيت Visual Studio Code\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تثبيت Visual Studio Code\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تثبيت Visual Studio Code\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تثبيت Visual Studio Code في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تثبيت Visual Studio Code\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تثبيت Visual Studio Code) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: تثبيت Visual Studio Code",
            "title": "تثبيت Visual Studio Code",
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
            "summary": "تطبيق (تثبيت Visual Studio Code) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تثبيت Visual Studio Code) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تثبيت Visual Studio Code) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تثبيت Visual Studio Code",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تثبيت Visual Studio Code)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تثبيت Visual Studio Code\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تثبيت Visual Studio Code\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mc-التعرف_على_Term",
          "letter": "c",
          "title": "التعرف على Terminal",
          "englishTitle": "التعرف على Terminal",
          "definition": "يُعد مفهوم (التعرف على Terminal) من الركائز الجوهرية في إعداد بيئة التطوير ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "التعرف",
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
          "syntax": "// تطبيق معياري لمفهوم التعرف على Terminal\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: التعرف على Terminal\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: التعرف على Terminal\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"التعرف على Terminal\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ التعرف على Terminal في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"التعرف على Terminal\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (التعرف على Terminal) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: التعرف على Terminal",
            "title": "التعرف على Terminal",
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
            "summary": "تطبيق (التعرف على Terminal) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (التعرف على Terminal) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (التعرف على Terminal) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: التعرف على Terminal",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (التعرف على Terminal)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين التعرف على Terminal\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"التعرف على Terminal\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-md-إنشاء_مجلد_المش",
          "letter": "d",
          "title": "إنشاء مجلد المشروع",
          "englishTitle": "مجلد المشروع",
          "definition": "يُعد مفهوم (إنشاء مجلد المشروع) من الركائز الجوهرية في إعداد بيئة التطوير ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء مجلد المشروع\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء مجلد المشروع\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء مجلد المشروع\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء مجلد المشروع\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء مجلد المشروع في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء مجلد المشروع\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء مجلد المشروع) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء مجلد المشروع",
            "title": "إنشاء مجلد المشروع",
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
            "summary": "تطبيق (إنشاء مجلد المشروع) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء مجلد المشروع) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء مجلد المشروع) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء مجلد المشروع",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء مجلد المشروع)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء مجلد المشروع\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء مجلد المشروع\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-me-تشغيل_npm_init",
          "letter": "e",
          "title": "تشغيل npm init",
          "englishTitle": "تشغيل npm init",
          "definition": "يُعد مفهوم (تشغيل npm init) من الركائز الجوهرية في إعداد بيئة التطوير ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تشغيل",
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
          "syntax": "// تطبيق معياري لمفهوم تشغيل npm init\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تشغيل npm init\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تشغيل npm init\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تشغيل npm init\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تشغيل npm init في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تشغيل npm init\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تشغيل npm init) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: تشغيل npm init",
            "title": "تشغيل npm init",
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
            "summary": "تطبيق (تشغيل npm init) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تشغيل npm init) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تشغيل npm init) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تشغيل npm init",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تشغيل npm init)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تشغيل npm init\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تشغيل npm init\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mf-تثبيت_Express_5",
          "letter": "f",
          "title": "تثبيت Express 5",
          "englishTitle": "تثبيت Express 5",
          "definition": "يُعد مفهوم (تثبيت Express 5) من الركائز الجوهرية في إعداد بيئة التطوير ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: تثبيت Express 5",
            "title": "تثبيت Express 5",
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
            "summary": "تطبيق (تثبيت Express 5) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: تثبيت Express 5",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تثبيت Express 5)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تثبيت Express 5\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تثبيت Express 5\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mg-إعداد_ملف_.giti",
          "letter": "g",
          "title": "إعداد ملف .gitignore",
          "englishTitle": "إعداد ملف .gitignore",
          "definition": "يُعد مفهوم (إعداد ملف .gitignore) من الركائز الجوهرية في إعداد بيئة التطوير ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إعداد",
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
          "syntax": "// تطبيق معياري لمفهوم إعداد ملف .gitignore\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إعداد ملف .gitignore\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إعداد ملف .gitignore\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إعداد ملف .gitignore\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إعداد ملف .gitignore في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إعداد ملف .gitignore\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إعداد ملف .gitignore) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إعداد ملف .gitignore",
            "title": "إعداد ملف .gitignore",
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
            "summary": "تطبيق (إعداد ملف .gitignore) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إعداد ملف .gitignore) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إعداد ملف .gitignore) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إعداد ملف .gitignore",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إعداد ملف .gitignore)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إعداد ملف .gitignore\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إعداد ملف .gitignore\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mh-تنظيم_ملفات_الم",
          "letter": "h",
          "title": "تنظيم ملفات المشروع الأول",
          "englishTitle": "تنظيم ملفات المشروع الأول",
          "definition": "يُعد مفهوم (تنظيم ملفات المشروع الأول) من الركائز الجوهرية في إعداد بيئة التطوير ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنظيم",
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
          "syntax": "// تطبيق معياري لمفهوم تنظيم ملفات المشروع الأول\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنظيم ملفات المشروع الأول\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنظيم ملفات المشروع الأول\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنظيم ملفات المشروع الأول\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنظيم ملفات المشروع الأول في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنظيم ملفات المشروع الأول\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنظيم ملفات المشروع الأول) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: تنظيم ملفات المشروع الأول",
            "title": "تنظيم ملفات المشروع الأول",
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
            "summary": "تطبيق (تنظيم ملفات المشروع الأول) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنظيم ملفات المشروع الأول) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنظيم ملفات المشروع الأول) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنظيم ملفات المشروع الأول",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنظيم ملفات المشروع الأول)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنظيم ملفات المشروع الأول\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنظيم ملفات المشروع الأول\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "2.3",
      "title": "إنشاء أول Express Server",
      "englishTitle": "إنشاء أول Express Server",
      "subtopics": [
        {
          "id": "s2-ma-إنشاء_ملف_app.j",
          "letter": "a",
          "title": "إنشاء ملف app.js",
          "englishTitle": "ملف app.js",
          "definition": "يُعد مفهوم (إنشاء ملف app.js) من الركائز الجوهرية في إنشاء أول Express Server ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء ملف app.js\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء ملف app.js\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء ملف app.js\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء ملف app.js\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء ملف app.js في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء ملف app.js\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء ملف app.js) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء ملف app.js",
            "title": "إنشاء ملف app.js",
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
            "summary": "تطبيق (إنشاء ملف app.js) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء ملف app.js) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء ملف app.js) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء ملف app.js",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء ملف app.js)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء ملف app.js\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء ملف app.js\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mb-استيراد_مكتبة_E",
          "letter": "b",
          "title": "استيراد مكتبة Express",
          "englishTitle": "استيراد مكتبة Express",
          "definition": "يُعد مفهوم (استيراد مكتبة Express) من الركائز الجوهرية في إنشاء أول Express Server ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: استيراد مكتبة Express",
            "title": "استيراد مكتبة Express",
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
            "summary": "تطبيق (استيراد مكتبة Express) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: استيراد مكتبة Express",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استيراد مكتبة Express)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استيراد مكتبة Express\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استيراد مكتبة Express\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mc-فهم_express()",
          "letter": "c",
          "title": "فهم express()",
          "englishTitle": "فهم express()",
          "definition": "يُعد مفهوم (فهم express()) من الركائز الجوهرية في إنشاء أول Express Server ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: فهم express()",
            "title": "فهم express()",
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
            "summary": "تطبيق (فهم express()) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: فهم express()",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (فهم express())، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين فهم express()\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"فهم express()\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-md-إنشاء_أول_Route",
          "letter": "d",
          "title": "إنشاء أول Route باستخدام app.get",
          "englishTitle": "أول Route بapp.get",
          "definition": "يُعد مفهوم (إنشاء أول Route باستخدام app.get) من الركائز الجوهرية في إنشاء أول Express Server ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: إنشاء أول Route باستخدام app.get",
            "title": "إنشاء أول Route باستخدام app.get",
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
            "summary": "تطبيق (إنشاء أول Route باستخدام app.get) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: إنشاء أول Route باستخدام app.get",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء أول Route باستخدام app.get)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء أول Route باستخدام app.get\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء أول Route باستخدام app.get\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-me-إرسال_استجابة_ب",
          "letter": "e",
          "title": "إرسال استجابة باستخدام res.send",
          "englishTitle": "إرسال استجابة بres.send",
          "definition": "يُعد مفهوم (إرسال استجابة باستخدام res.send) من الركائز الجوهرية في إنشاء أول Express Server ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: إرسال استجابة باستخدام res.send",
            "title": "إرسال استجابة باستخدام res.send",
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
            "summary": "تطبيق (إرسال استجابة باستخدام res.send) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: إرسال استجابة باستخدام res.send",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إرسال استجابة باستخدام res.send)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال استجابة باستخدام res.send\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إرسال استجابة باستخدام res.send\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mf-تشغيل_الخادم_با",
          "letter": "f",
          "title": "تشغيل الخادم باستخدام app.listen",
          "englishTitle": "تشغيل الخادم بapp.listen",
          "definition": "يُعد مفهوم (تشغيل الخادم باستخدام app.listen) من الركائز الجوهرية في إنشاء أول Express Server ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تشغيل",
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
          "syntax": "// تطبيق معياري لمفهوم تشغيل الخادم باستخدام app.listen\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تشغيل الخادم باستخدام app.listen\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تشغيل الخادم باستخدام app.listen\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تشغيل الخادم باستخدام app.listen\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تشغيل الخادم باستخدام app.listen في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تشغيل الخادم باستخدام app.listen\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تشغيل الخادم باستخدام app.listen) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: تشغيل الخادم باستخدام app.listen",
            "title": "تشغيل الخادم باستخدام app.listen",
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
            "summary": "تطبيق (تشغيل الخادم باستخدام app.listen) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تشغيل الخادم باستخدام app.listen) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تشغيل الخادم باستخدام app.listen) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تشغيل الخادم باستخدام app.listen",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تشغيل الخادم باستخدام app.listen)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تشغيل الخادم باستخدام app.listen\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تشغيل الخادم باستخدام app.listen\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mg-فهم_مفهوم_Port",
          "letter": "g",
          "title": "فهم مفهوم Port",
          "englishTitle": "فهم Port",
          "definition": "يُعد مفهوم (فهم مفهوم Port) من الركائز الجوهرية في إنشاء أول Express Server ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "فهم",
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
          "syntax": "// تطبيق معياري لمفهوم فهم مفهوم Port\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: فهم مفهوم Port\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: فهم مفهوم Port\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"فهم مفهوم Port\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ فهم مفهوم Port في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"فهم مفهوم Port\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (فهم مفهوم Port) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: فهم مفهوم Port",
            "title": "فهم مفهوم Port",
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
            "summary": "تطبيق (فهم مفهوم Port) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (فهم مفهوم Port) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (فهم مفهوم Port) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: فهم مفهوم Port",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (فهم مفهوم Port)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين فهم مفهوم Port\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"فهم مفهوم Port\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mh-اختبار_الخادم_ب",
          "letter": "h",
          "title": "اختبار الخادم باستخدام المتصفح",
          "englishTitle": "اختبار الخادم بالمتصفح",
          "definition": "يُعد مفهوم (اختبار الخادم باستخدام المتصفح) من الركائز الجوهرية في إنشاء أول Express Server ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "اختبار",
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
          "syntax": "// تطبيق معياري لمفهوم اختبار الخادم باستخدام المتصفح\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: اختبار الخادم باستخدام المتصفح\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: اختبار الخادم باستخدام المتصفح\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"اختبار الخادم باستخدام المتصفح\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ اختبار الخادم باستخدام المتصفح في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"اختبار الخادم باستخدام المتصفح\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (اختبار الخادم باستخدام المتصفح) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: اختبار الخادم باستخدام المتصفح",
            "title": "اختبار الخادم باستخدام المتصفح",
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
            "summary": "تطبيق (اختبار الخادم باستخدام المتصفح) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (اختبار الخادم باستخدام المتصفح) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (اختبار الخادم باستخدام المتصفح) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: اختبار الخادم باستخدام المتصفح",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (اختبار الخادم باستخدام المتصفح)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين اختبار الخادم باستخدام المتصفح\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"اختبار الخادم باستخدام المتصفح\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mi-إيقاف_الخادم_وإ",
          "letter": "i",
          "title": "إيقاف الخادم وإعادة تشغيله",
          "englishTitle": "إيقاف الخادم وإعادة تشغيله",
          "definition": "يُعد مفهوم (إيقاف الخادم وإعادة تشغيله) من الركائز الجوهرية في إنشاء أول Express Server ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إيقاف",
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
          "syntax": "// تطبيق معياري لمفهوم إيقاف الخادم وإعادة تشغيله\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إيقاف الخادم وإعادة تشغيله\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إيقاف الخادم وإعادة تشغيله\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إيقاف الخادم وإعادة تشغيله\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إيقاف الخادم وإعادة تشغيله في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إيقاف الخادم وإعادة تشغيله\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إيقاف الخادم وإعادة تشغيله) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إيقاف الخادم وإعادة تشغيله",
            "title": "إيقاف الخادم وإعادة تشغيله",
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
            "summary": "تطبيق (إيقاف الخادم وإعادة تشغيله) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إيقاف الخادم وإعادة تشغيله) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إيقاف الخادم وإعادة تشغيله) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إيقاف الخادم وإعادة تشغيله",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إيقاف الخادم وإعادة تشغيله)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إيقاف الخادم وإعادة تشغيله\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إيقاف الخادم وإعادة تشغيله\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "2.4",
      "title": "أدوات تطوير Express.js",
      "englishTitle": "أدوات تطوير Express.js",
      "subtopics": [
        {
          "id": "s2-ma-استخدام_Node.js",
          "letter": "a",
          "title": "استخدام Node.js Watch Mode",
          "englishTitle": "Node.js Watch Mode",
          "definition": "يُعد مفهوم (استخدام Node.js Watch Mode) من الركائز الجوهرية في أدوات تطوير Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم استخدام Node.js Watch Mode\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام Node.js Watch Mode\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام Node.js Watch Mode\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام Node.js Watch Mode\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام Node.js Watch Mode في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام Node.js Watch Mode\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام Node.js Watch Mode) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: استخدام Node.js Watch Mode",
            "title": "استخدام Node.js Watch Mode",
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
            "summary": "تطبيق (استخدام Node.js Watch Mode) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام Node.js Watch Mode) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام Node.js Watch Mode) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام Node.js Watch Mode",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام Node.js Watch Mode)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Node.js Watch Mode\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام Node.js Watch Mode\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mb-استخدام_Nodemon",
          "letter": "b",
          "title": "استخدام Nodemon عند الحاجة",
          "englishTitle": "Nodemon عند الحاجة",
          "definition": "يُعد مفهوم (استخدام Nodemon عند الحاجة) من الركائز الجوهرية في أدوات تطوير Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم استخدام Nodemon عند الحاجة\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام Nodemon عند الحاجة\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام Nodemon عند الحاجة\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام Nodemon عند الحاجة\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام Nodemon عند الحاجة في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام Nodemon عند الحاجة\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام Nodemon عند الحاجة) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: استخدام Nodemon عند الحاجة",
            "title": "استخدام Nodemon عند الحاجة",
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
            "summary": "تطبيق (استخدام Nodemon عند الحاجة) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام Nodemon عند الحاجة) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام Nodemon عند الحاجة) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام Nodemon عند الحاجة",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام Nodemon عند الحاجة)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Nodemon عند الحاجة\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام Nodemon عند الحاجة\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mc-اختبار_الطلبات_",
          "letter": "c",
          "title": "اختبار الطلبات باستخدام Postman",
          "englishTitle": "اختبار الطلبات بPostman",
          "definition": "يُعد مفهوم (اختبار الطلبات باستخدام Postman) من الركائز الجوهرية في أدوات تطوير Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: اختبار الطلبات باستخدام Postman",
            "title": "اختبار الطلبات باستخدام Postman",
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
            "summary": "تطبيق (اختبار الطلبات باستخدام Postman) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: اختبار الطلبات باستخدام Postman",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (اختبار الطلبات باستخدام Postman)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين اختبار الطلبات باستخدام Postman\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"اختبار الطلبات باستخدام Postman\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-md-استخدام_Thunder",
          "letter": "d",
          "title": "استخدام Thunder Client",
          "englishTitle": "Thunder Client",
          "definition": "يُعد مفهوم (استخدام Thunder Client) من الركائز الجوهرية في أدوات تطوير Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم استخدام Thunder Client\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام Thunder Client\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام Thunder Client\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام Thunder Client\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام Thunder Client في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام Thunder Client\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام Thunder Client) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: استخدام Thunder Client",
            "title": "استخدام Thunder Client",
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
            "summary": "تطبيق (استخدام Thunder Client) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام Thunder Client) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام Thunder Client) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام Thunder Client",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام Thunder Client)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Thunder Client\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام Thunder Client\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-me-استخدام_REST_Cl",
          "letter": "e",
          "title": "استخدام REST Client",
          "englishTitle": "REST Client",
          "definition": "يُعد مفهوم (استخدام REST Client) من الركائز الجوهرية في أدوات تطوير Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: استخدام REST Client",
            "title": "استخدام REST Client",
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
            "summary": "تطبيق (استخدام REST Client) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: استخدام REST Client",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام REST Client)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام REST Client\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام REST Client\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mf-استخدام_curl",
          "letter": "f",
          "title": "استخدام curl",
          "englishTitle": "curl",
          "definition": "يُعد مفهوم (استخدام curl) من الركائز الجوهرية في أدوات تطوير Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم استخدام curl\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام curl\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام curl\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام curl\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام curl في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام curl\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام curl) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: استخدام curl",
            "title": "استخدام curl",
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
            "summary": "تطبيق (استخدام curl) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام curl) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام curl) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام curl",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام curl)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام curl\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام curl\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mg-إعداد_ESLint",
          "letter": "g",
          "title": "إعداد ESLint",
          "englishTitle": "إعداد ESLint",
          "definition": "يُعد مفهوم (إعداد ESLint) من الركائز الجوهرية في أدوات تطوير Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إعداد",
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
          "syntax": "// تطبيق معياري لمفهوم إعداد ESLint\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إعداد ESLint\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إعداد ESLint\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إعداد ESLint\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إعداد ESLint في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إعداد ESLint\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إعداد ESLint) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إعداد ESLint",
            "title": "إعداد ESLint",
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
            "summary": "تطبيق (إعداد ESLint) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إعداد ESLint) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إعداد ESLint) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إعداد ESLint",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إعداد ESLint)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إعداد ESLint\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إعداد ESLint\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mh-إعداد_Prettier",
          "letter": "h",
          "title": "إعداد Prettier",
          "englishTitle": "إعداد Prettier",
          "definition": "يُعد مفهوم (إعداد Prettier) من الركائز الجوهرية في أدوات تطوير Express.js ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إعداد",
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
          "syntax": "// تطبيق معياري لمفهوم إعداد Prettier\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إعداد Prettier\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إعداد Prettier\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إعداد Prettier\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إعداد Prettier في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إعداد Prettier\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إعداد Prettier) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إعداد Prettier",
            "title": "إعداد Prettier",
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
            "summary": "تطبيق (إعداد Prettier) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إعداد Prettier) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إعداد Prettier) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إعداد Prettier",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إعداد Prettier)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إعداد Prettier\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إعداد Prettier\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "2.5",
      "title": "فهم ملفات المشروع",
      "englishTitle": "فهم ملفات المشروع",
      "subtopics": [
        {
          "id": "s2-ma-وظيفة_package.j",
          "letter": "a",
          "title": "وظيفة package.json",
          "englishTitle": "وظيفة package.json",
          "definition": "يُعد مفهوم (وظيفة package.json) من الركائز الجوهرية في فهم ملفات المشروع ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: وظيفة package.json",
            "title": "وظيفة package.json",
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
            "summary": "تطبيق (وظيفة package.json) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: وظيفة package.json",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (وظيفة package.json)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين وظيفة package.json\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"وظيفة package.json\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mb-وظيفة_package-l",
          "letter": "b",
          "title": "وظيفة package-lock.json",
          "englishTitle": "وظيفة package-lock.json",
          "definition": "يُعد مفهوم (وظيفة package-lock.json) من الركائز الجوهرية في فهم ملفات المشروع ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: وظيفة package-lock.json",
            "title": "وظيفة package-lock.json",
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
            "summary": "تطبيق (وظيفة package-lock.json) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: وظيفة package-lock.json",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (وظيفة package-lock.json)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين وظيفة package-lock.json\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"وظيفة package-lock.json\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mc-وظيفة_node_modu",
          "letter": "c",
          "title": "وظيفة node_modules",
          "englishTitle": "وظيفة node_modules",
          "definition": "يُعد مفهوم (وظيفة node_modules) من الركائز الجوهرية في فهم ملفات المشروع ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "وظيفة",
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
          "syntax": "// تطبيق معياري لمفهوم وظيفة node_modules\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: وظيفة node_modules\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: وظيفة node_modules\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"وظيفة node_modules\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ وظيفة node_modules في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"وظيفة node_modules\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (وظيفة node_modules) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: وظيفة node_modules",
            "title": "وظيفة node_modules",
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
            "summary": "تطبيق (وظيفة node_modules) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (وظيفة node_modules) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (وظيفة node_modules) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: وظيفة node_modules",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (وظيفة node_modules)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين وظيفة node_modules\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"وظيفة node_modules\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-md-استخدام_npm_scr",
          "letter": "d",
          "title": "استخدام npm scripts",
          "englishTitle": "npm scripts",
          "definition": "يُعد مفهوم (استخدام npm scripts) من الركائز الجوهرية في فهم ملفات المشروع ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم استخدام npm scripts\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام npm scripts\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام npm scripts\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام npm scripts\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام npm scripts في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام npm scripts\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام npm scripts) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: استخدام npm scripts",
            "title": "استخدام npm scripts",
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
            "summary": "تطبيق (استخدام npm scripts) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام npm scripts) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام npm scripts) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام npm scripts",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام npm scripts)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام npm scripts\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام npm scripts\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-me-إنشاء_ملفات_الب",
          "letter": "e",
          "title": "إنشاء ملفات البيئة .env",
          "englishTitle": "ملفات البيئة .env",
          "definition": "يُعد مفهوم (إنشاء ملفات البيئة .env) من الركائز الجوهرية في فهم ملفات المشروع ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء ملفات البيئة .env\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء ملفات البيئة .env\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء ملفات البيئة .env\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء ملفات البيئة .env\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء ملفات البيئة .env في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء ملفات البيئة .env\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء ملفات البيئة .env) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء ملفات البيئة .env",
            "title": "إنشاء ملفات البيئة .env",
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
            "summary": "تطبيق (إنشاء ملفات البيئة .env) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء ملفات البيئة .env) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء ملفات البيئة .env) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء ملفات البيئة .env",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء ملفات البيئة .env)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء ملفات البيئة .env\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء ملفات البيئة .env\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mf-الفرق_بين_Depen",
          "letter": "f",
          "title": "الفرق بين Dependencies وDevDependencies",
          "englishTitle": "Dependencies وDevDependencies",
          "definition": "يُعد مفهوم (الفرق بين Dependencies وDevDependencies) من الركائز الجوهرية في فهم ملفات المشروع ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم الفرق بين Dependencies وDevDependencies\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: الفرق بين Dependencies وDevDependencies\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: الفرق بين Dependencies وDevDependencies\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"الفرق بين Dependencies وDevDependencies\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ الفرق بين Dependencies وDevDependencies في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"الفرق بين Dependencies وDevDependencies\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (الفرق بين Dependencies وDevDependencies) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: الفرق بين Dependencies وDevDependencies",
            "title": "الفرق بين Dependencies وDevDependencies",
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
            "summary": "تطبيق (الفرق بين Dependencies وDevDependencies) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (الفرق بين Dependencies وDevDependencies) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (الفرق بين Dependencies وDevDependencies) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: الفرق بين Dependencies وDevDependencies",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (الفرق بين Dependencies وDevDependencies)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Dependencies وDevDependencies\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"الفرق بين Dependencies وDevDependencies\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mg-إدارة_إصدارات_ا",
          "letter": "g",
          "title": "إدارة إصدارات المكتبات",
          "englishTitle": "إصدارات المكتبات",
          "definition": "يُعد مفهوم (إدارة إصدارات المكتبات) من الركائز الجوهرية في فهم ملفات المشروع ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إدارة إصدارات المكتبات\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إدارة إصدارات المكتبات\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إدارة إصدارات المكتبات\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إدارة إصدارات المكتبات\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إدارة إصدارات المكتبات في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إدارة إصدارات المكتبات\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إدارة إصدارات المكتبات) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إدارة إصدارات المكتبات",
            "title": "إدارة إصدارات المكتبات",
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
            "summary": "تطبيق (إدارة إصدارات المكتبات) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إدارة إصدارات المكتبات) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إدارة إصدارات المكتبات) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إدارة إصدارات المكتبات",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إدارة إصدارات المكتبات)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة إصدارات المكتبات\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إدارة إصدارات المكتبات\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "2.6",
      "title": "مشروع عملي: خادم ترحيبي",
      "englishTitle": "مشروع عملي: خادم ترحيبي",
      "subtopics": [
        {
          "id": "s2-ma-إنشاء_خادم_Expr",
          "letter": "a",
          "title": "إنشاء خادم Express بسيط",
          "englishTitle": "خادم Express بسيط",
          "definition": "يُعد مفهوم (إنشاء خادم Express بسيط) من الركائز الجوهرية في مشروع عملي: خادم ترحيبي ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: إنشاء خادم Express بسيط",
            "title": "إنشاء خادم Express بسيط",
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
            "summary": "تطبيق (إنشاء خادم Express بسيط) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: إنشاء خادم Express بسيط",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء خادم Express بسيط)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء خادم Express بسيط\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء خادم Express بسيط\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mb-إنشاء_الصفحة_ال",
          "letter": "b",
          "title": "إنشاء الصفحة الرئيسية",
          "englishTitle": "الصفحة الرئيسية",
          "definition": "يُعد مفهوم (إنشاء الصفحة الرئيسية) من الركائز الجوهرية في مشروع عملي: خادم ترحيبي ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء الصفحة الرئيسية\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء الصفحة الرئيسية\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء الصفحة الرئيسية\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء الصفحة الرئيسية\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء الصفحة الرئيسية في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء الصفحة الرئيسية\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء الصفحة الرئيسية) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء الصفحة الرئيسية",
            "title": "إنشاء الصفحة الرئيسية",
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
            "summary": "تطبيق (إنشاء الصفحة الرئيسية) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء الصفحة الرئيسية) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء الصفحة الرئيسية) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء الصفحة الرئيسية",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء الصفحة الرئيسية)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء الصفحة الرئيسية\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء الصفحة الرئيسية\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mc-إنشاء_صفحة_Abou",
          "letter": "c",
          "title": "إنشاء صفحة About",
          "englishTitle": "صفحة About",
          "definition": "يُعد مفهوم (إنشاء صفحة About) من الركائز الجوهرية في مشروع عملي: خادم ترحيبي ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء صفحة About\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء صفحة About\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء صفحة About\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء صفحة About\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء صفحة About في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء صفحة About\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء صفحة About) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء صفحة About",
            "title": "إنشاء صفحة About",
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
            "summary": "تطبيق (إنشاء صفحة About) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء صفحة About) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء صفحة About) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء صفحة About",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء صفحة About)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء صفحة About\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء صفحة About\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-md-إنشاء_صفحة_Cont",
          "letter": "d",
          "title": "إنشاء صفحة Contact",
          "englishTitle": "صفحة Contact",
          "definition": "يُعد مفهوم (إنشاء صفحة Contact) من الركائز الجوهرية في مشروع عملي: خادم ترحيبي ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء صفحة Contact\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء صفحة Contact\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء صفحة Contact\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء صفحة Contact\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء صفحة Contact في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء صفحة Contact\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء صفحة Contact) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء صفحة Contact",
            "title": "إنشاء صفحة Contact",
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
            "summary": "تطبيق (إنشاء صفحة Contact) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء صفحة Contact) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء صفحة Contact) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء صفحة Contact",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء صفحة Contact)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء صفحة Contact\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء صفحة Contact\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-me-إرجاع_رسالة_JSO",
          "letter": "e",
          "title": "إرجاع رسالة JSON",
          "englishTitle": "إرجاع رسالة JSON",
          "definition": "يُعد مفهوم (إرجاع رسالة JSON) من الركائز الجوهرية في مشروع عملي: خادم ترحيبي ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: إرجاع رسالة JSON",
            "title": "إرجاع رسالة JSON",
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
            "summary": "تطبيق (إرجاع رسالة JSON) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: إرجاع رسالة JSON",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إرجاع رسالة JSON)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إرجاع رسالة JSON\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إرجاع رسالة JSON\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mf-اختبار_جميع_الم",
          "letter": "f",
          "title": "اختبار جميع المسارات",
          "englishTitle": "اختبار جميع المسارات",
          "definition": "يُعد مفهوم (اختبار جميع المسارات) من الركائز الجوهرية في مشروع عملي: خادم ترحيبي ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: اختبار جميع المسارات",
            "title": "اختبار جميع المسارات",
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
            "summary": "تطبيق (اختبار جميع المسارات) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: اختبار جميع المسارات",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (اختبار جميع المسارات)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين اختبار جميع المسارات\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"اختبار جميع المسارات\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s2-mg-رفع_المشروع_على",
          "letter": "g",
          "title": "رفع المشروع على GitHub",
          "englishTitle": "رفع المشروع على GitHub",
          "definition": "يُعد مفهوم (رفع المشروع على GitHub) من الركائز الجوهرية في مشروع عملي: خادم ترحيبي ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "رفع",
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
          "syntax": "// تطبيق معياري لمفهوم رفع المشروع على GitHub\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: رفع المشروع على GitHub\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: رفع المشروع على GitHub\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"رفع المشروع على GitHub\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ رفع المشروع على GitHub في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"رفع المشروع على GitHub\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (رفع المشروع على GitHub) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: رفع المشروع على GitHub",
            "title": "رفع المشروع على GitHub",
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
            "summary": "تطبيق (رفع المشروع على GitHub) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (رفع المشروع على GitHub) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (رفع المشروع على GitHub) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: رفع المشروع على GitHub",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (رفع المشروع على GitHub)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين رفع المشروع على GitHub\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"رفع المشروع على GitHub\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    }
  ]
};

export default SECTION_2;
