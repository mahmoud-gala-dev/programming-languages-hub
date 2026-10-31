// src/data/sections/section7.js
// القسم السابع: بناء خوادم HTTP باستخدام Node.js
// خريطة طريق Node.js الشاملة - القسم رقم 7

export const SECTION_7 = {
  "id": 7,
  "number": "07",
  "title": "القسم السابع: بناء خوادم HTTP باستخدام Node.js",
  "englishTitle": "Building HTTP Servers with Node.js",
  "badge": "متوسط",
  "color": "from-sky-600 to-blue-500",
  "description": "إنشاء HTTP Server عبر node:http، معالجة Requests وResponses، إدارة المسارات Routing يدوياً، وبناء مشروع خادم منتجات متكامل بدون أطر عمل.",
  "summary": {
    "overview": "يشرح هذا القسم كيفية بناء خوادم HTTP أصلية وقوية في Node.js دون الاعتماد على أي إطار عمل خارجي. يغطي دورة حياة كائن الطلب (IncomingMessage) والاستجابة (ServerResponse)، استخراج الترويسات ومسار الرابط ومحددات البحث (Query Parameters)، قراءة جسم الطلب (Request Body Stream)، إدارة رموز الحالة (Status Codes)، وهندسة التوجيه اليدوي (Routing) بدقة وكفاءة.",
    "goldenRules": [
      {
        "title": "جسم طلب HTTP يتدفق كـ Stream ولا يصل دفعة واحدة",
        "desc": "يجب الاستماع لحدثي data و end لتجميع حزم البيانات (Chunks) قبل محاولة تحليل كائن الـ JSON الخاص بجسم الطلب."
      },
      {
        "title": "حدد ترويسة Content-Type بدقة في كل استجابة",
        "desc": "إرسال application/json أو text/html بوضوح يوجه المتصفح والعميل إلى كيفية تفسير الشحنة المستلمة بدقة."
      },
      {
        "title": "استدعاء res.end() إلزامي لإنهاء الاتصال",
        "desc": "إذا لم تستدعِ res.end()، سيظل المتصفح أو العميل معلقاً في حالة انتظار حتى ينقضي زمن الاتصال (Timeout)."
      },
      {
        "title": "التحقق من الرابط عبر كائن new URL() المعياري",
        "desc": "تجنب تقسيم النصوص يدوياً عبر split('?'); استخدم new URL(req.url, 'http://localhost') لاستخراج المسارات والـ Query بأمان."
      },
      {
        "title": "إدارة أخطاء الطلبات وحماية الخادم من الانهيار",
        "desc": "استمع دائماً لحدث server.on('error') وغلف معالجة البيانات بـ try/catch لمنع انهيار الخادم عند إرسال JSON غير صالح."
      },
      {
        "title": "تحديد رموز الحالة المناسبة (HTTP Semantics)",
        "desc": "استخدم 201 لإنشاء الموارد، و204 عند الحذف دون محتوى، و404 للمسارات غير المعرفة، و405 إذا كانت وسيلة الطلب غير مدعومة."
      },
      {
        "title": "الإغلاق السلس للخادم (Graceful Shutdown)",
        "desc": "عند إيقاف الخادم، استمع لإشارة SIGTERM وأوقف استقبال الطلبات الجديدة عبر server.close() مع إنهاء العمليات الجارية بهدوء."
      }
    ],
    "keyTakeaways": [
      "القدرة على إنشاء خادم ويب كامل باستخدام وحدة http المدمجة في Node.js فقط.",
      "فهم معالجة تدفقات البيانات وقراءة الشحنات المرسلة بصيغة JSON من العميل.",
      "بناء موجه مسارات (Custom Router) يدعم الوسائل المختلفة GET و POST و PUT و DELETE.",
      "إتقان إرسال الترويسات وضبط ملفات تعريف الارتباط ورموز الحالة القياسية."
    ]
  },
  "cheatSheet": {
    "title": "البطاقة المرجعية لبناء خوادم HTTP النقية في Node.js",
    "entries": [
      {
        "category": "Create Server",
        "commandOrSyntax": "const server = http.createServer((req, res) => { /* logic */ });",
        "description": "إنشاء مثيل خادم HTTP يستقبل كائنات الطلب والاستجابة",
        "type": "code"
      },
      {
        "category": "Listen",
        "commandOrSyntax": "server.listen(PORT, () => console.log(`Server on ${PORT}`));",
        "description": "ربط الخادم بمنفذ محدد وبدء استقبال الطلبات الواردة",
        "type": "code"
      },
      {
        "category": "Headers",
        "commandOrSyntax": "res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });",
        "description": "إرسال رمز الحالة وترويسات الاستجابة دفعة واحدة قبل جسم الرسالة",
        "type": "code"
      },
      {
        "category": "Send JSON",
        "commandOrSyntax": "res.end(JSON.stringify({ success: true, data }));",
        "description": "إنهاء الاستجابة وإرسال البيانات المشفرة بصيغة JSON للعميل",
        "type": "code"
      },
      {
        "category": "Body Chunks",
        "commandOrSyntax": "let body = ''; req.on('data', c => body += c); req.on('end', () => {});",
        "description": "تجميع أجزاء تدفق البيانات الواردة في الطلب حتى اكتمالها",
        "type": "code"
      },
      {
        "category": "Parse URL",
        "commandOrSyntax": "const url = new URL(req.url, `http://${req.headers.host}`);",
        "description": "تحليل رابط الطلب واستخراج pathname ومعاملات searchParams بأمان",
        "type": "code"
      },
      {
        "category": "Method Check",
        "commandOrSyntax": "if (req.method === 'GET' && url.pathname === '/api/items') {}",
        "description": "مطابقة المسار وطريقة الطلب لتوجيه العملية للمتحكم المناسب",
        "type": "code"
      },
      {
        "category": "Error 404",
        "commandOrSyntax": "res.writeHead(404).end(JSON.stringify({ error: 'Not Found' }));",
        "description": "إرجاع استجابة الخطأ القياسية للمسارات غير المعرفة",
        "type": "code"
      },
      {
        "category": "Timeout",
        "commandOrSyntax": "server.timeout = 10000; // 10 seconds",
        "description": "تحديد الحد الأقصى للمهلة الزمنية للطلبات المعلقة بالخادم",
        "type": "code"
      },
      {
        "category": "Close Server",
        "commandOrSyntax": "server.close(() => process.exit(0));",
        "description": "إغلاق الخادم والتوقف عن قبول اتصالات جديدة مع إنهاء الاتصالات الحالية",
        "type": "code"
      }
    ],
    "items": [
      {
        "category": "Create Server",
        "commandOrSyntax": "const server = http.createServer((req, res) => { /* logic */ });",
        "description": "إنشاء مثيل خادم HTTP يستقبل كائنات الطلب والاستجابة",
        "type": "code",
        "command": "const server = http.createServer((req, res) => { /* logic */ });"
      },
      {
        "category": "Listen",
        "commandOrSyntax": "server.listen(PORT, () => console.log(`Server on ${PORT}`));",
        "description": "ربط الخادم بمنفذ محدد وبدء استقبال الطلبات الواردة",
        "type": "code",
        "command": "server.listen(PORT, () => console.log(`Server on ${PORT}`));"
      },
      {
        "category": "Headers",
        "commandOrSyntax": "res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });",
        "description": "إرسال رمز الحالة وترويسات الاستجابة دفعة واحدة قبل جسم الرسالة",
        "type": "code",
        "command": "res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });"
      },
      {
        "category": "Send JSON",
        "commandOrSyntax": "res.end(JSON.stringify({ success: true, data }));",
        "description": "إنهاء الاستجابة وإرسال البيانات المشفرة بصيغة JSON للعميل",
        "type": "code",
        "command": "res.end(JSON.stringify({ success: true, data }));"
      },
      {
        "category": "Body Chunks",
        "commandOrSyntax": "let body = ''; req.on('data', c => body += c); req.on('end', () => {});",
        "description": "تجميع أجزاء تدفق البيانات الواردة في الطلب حتى اكتمالها",
        "type": "code",
        "command": "let body = ''; req.on('data', c => body += c); req.on('end', () => {});"
      },
      {
        "category": "Parse URL",
        "commandOrSyntax": "const url = new URL(req.url, `http://${req.headers.host}`);",
        "description": "تحليل رابط الطلب واستخراج pathname ومعاملات searchParams بأمان",
        "type": "code",
        "command": "const url = new URL(req.url, `http://${req.headers.host}`);"
      },
      {
        "category": "Method Check",
        "commandOrSyntax": "if (req.method === 'GET' && url.pathname === '/api/items') {}",
        "description": "مطابقة المسار وطريقة الطلب لتوجيه العملية للمتحكم المناسب",
        "type": "code",
        "command": "if (req.method === 'GET' && url.pathname === '/api/items') {}"
      },
      {
        "category": "Error 404",
        "commandOrSyntax": "res.writeHead(404).end(JSON.stringify({ error: 'Not Found' }));",
        "description": "إرجاع استجابة الخطأ القياسية للمسارات غير المعرفة",
        "type": "code",
        "command": "res.writeHead(404).end(JSON.stringify({ error: 'Not Found' }));"
      },
      {
        "category": "Timeout",
        "commandOrSyntax": "server.timeout = 10000; // 10 seconds",
        "description": "تحديد الحد الأقصى للمهلة الزمنية للطلبات المعلقة بالخادم",
        "type": "code",
        "command": "server.timeout = 10000; // 10 seconds"
      },
      {
        "category": "Close Server",
        "commandOrSyntax": "server.close(() => process.exit(0));",
        "description": "إغلاق الخادم والتوقف عن قبول اتصالات جديدة مع إنهاء الاتصالات الحالية",
        "type": "code",
        "command": "server.close(() => process.exit(0));"
      }
    ]
  },
  "miniProject": {
    "id": "project-sec-7",
    "title": "مشروع عملي: خادم REST API نقي لإدارة المنتجات بدون أطر عمل (Pure HTTP Store API)",
    "description": "بناء واجهة برمجية متكاملة لمتجر منتجات تدعم عمليات CRUD (إنشاء، قراءة، تعديل، حذف) مع تجميع جسم الطلب والتحقق من المدخلات بدون أي حزمة خارجية.",
    "difficulty": "متوسط",
    "techStack": [
      "Node.js",
      "node:http",
      "node:url",
      "Pure Vanilla Node"
    ],
    "directoryStructure": "pure-http-store/\n├── package.json\n├── src/\n│   ├── server.js\n│   ├── routes.js\n│   └── store.js\n└── index.js",
    "codeFiles": [
      {
        "filename": "src/store.js",
        "code": "// قاعدة بيانات في الذاكرة لتخزين المنتجات\nconst products = [\n  { id: 1, name: \"لوحة مفاتيح ميكانيكية\", price: 120, stock: 15 },\n  { id: 2, name: \"شاشة ألعاب 144Hz\", price: 280, stock: 8 }\n];\n\n// استرجاع كافة المنتجات\nexport function getAll() {\n  return [...products];\n}\n\n// إضافة منتج جديد مع توليد المعرف\nexport function create(data) {\n  const newProduct = {\n    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,\n    name: data.name,\n    price: Number(data.price),\n    stock: Number(data.stock || 0)\n  };\n  products.push(newProduct);\n  return newProduct;\n}",
        "explanation": "وحدة تخزين بيانات المنتجات في الذاكرة لتمثيل عمليات القراءة والإضافة."
      },
      {
        "filename": "src/server.js",
        "code": "// استيراد وحدة HTTP المدمجة\nimport http from 'node:http';\n// استيراد دوال المتجر\nimport { getAll, create } from './store.js';\n\n// دالة مساعدة لتجميع وقراءة جسم الطلب\nfunction parseBody(req) {\n  return new Promise((resolve, reject) => {\n    let raw = '';\n    req.on('data', chunk => { raw += chunk; });\n    req.on('end', () => {\n      try {\n        resolve(raw ? JSON.parse(raw) : {});\n      } catch (e) {\n        reject(new Error(\"صيغة JSON غير صالحة\"));\n      }\n    });\n    req.on('error', reject);\n  });\n}\n\n// إنشاء وتصدير خادم الـ HTTP\nexport function buildServer() {\n  return http.createServer(async (req, res) => {\n    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);\n    const path = url.pathname;\n    const method = req.method;\n\n    // ترويسات عامة للاستجابة\n    res.setHeader('Content-Type', 'application/json; charset=utf-8');\n\n    // توجيه المسار: GET /api/products\n    if (method === 'GET' && path === '/api/products') {\n      res.writeHead(200);\n      return res.end(JSON.stringify({ success: true, data: getAll() }));\n    }\n\n    // توجيه المسار: POST /api/products\n    if (method === 'POST' && path === '/api/products') {\n      try {\n        const body = await parseBody(req);\n        if (!body.name || !body.price) {\n          res.writeHead(400);\n          return res.end(JSON.stringify({ success: false, error: \"اسم المنتج وسعره مطلوبان\" }));\n        }\n        const created = create(body);\n        res.writeHead(201);\n        return res.end(JSON.stringify({ success: true, data: created }));\n      } catch (err) {\n        res.writeHead(400);\n        return res.end(JSON.stringify({ success: false, error: err.message }));\n      }\n    }\n\n    // إذا لم يطابق أي مسار\n    res.writeHead(404);\n    res.end(JSON.stringify({ success: false, error: \"المسار المطلوب غير موجود\" }));\n  });\n}",
        "explanation": "الخادم النقي يتولى قراءة الـ Stream، مطابقة المسارات، وإرجاع استجابات JSON منسقة برموز النجاح أو الخطأ."
      }
    ],
    "stepsToRun": [
      "افتح المجلد: cd pure-http-store",
      "شغل الخادم: node -e \"import('./src/server.js').then(m => m.buildServer().listen(4000, () => console.log('الخادم يعمل على المنفذ 4000 🚀')))\"",
      "أرسل طلب جلب منتجات: curl http://localhost:4000/api/products",
      "أرسل طلب إضافة منتج جديد: curl -X POST http://localhost:4000/api/products -H \"Content-Type: application/json\" -d '{\"name\":\"ماوس لاسلكي\",\"price\":45}'"
    ]
  },
  "project": {
    "id": "project-sec-7",
    "title": "مشروع عملي: خادم REST API نقي لإدارة المنتجات بدون أطر عمل (Pure HTTP Store API)",
    "scenario": "بناء واجهة برمجية متكاملة لمتجر منتجات تدعم عمليات CRUD (إنشاء، قراءة، تعديل، حذف) مع تجميع جسم الطلب والتحقق من المدخلات بدون أي حزمة خارجية.",
    "requirements": [
      "افتح المجلد: cd pure-http-store",
      "شغل الخادم: node -e \"import('./src/server.js').then(m => m.buildServer().listen(4000, () => console.log('الخادم يعمل على المنفذ 4000 🚀')))\"",
      "أرسل طلب جلب منتجات: curl http://localhost:4000/api/products",
      "أرسل طلب إضافة منتج جديد: curl -X POST http://localhost:4000/api/products -H \"Content-Type: application/json\" -d '{\"name\":\"ماوس لاسلكي\",\"price\":45}'"
    ],
    "completeSolution": "// src/store.js\n// قاعدة بيانات في الذاكرة لتخزين المنتجات\nconst products = [\n  { id: 1, name: \"لوحة مفاتيح ميكانيكية\", price: 120, stock: 15 },\n  { id: 2, name: \"شاشة ألعاب 144Hz\", price: 280, stock: 8 }\n];\n\n// استرجاع كافة المنتجات\nexport function getAll() {\n  return [...products];\n}\n\n// إضافة منتج جديد مع توليد المعرف\nexport function create(data) {\n  const newProduct = {\n    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,\n    name: data.name,\n    price: Number(data.price),\n    stock: Number(data.stock || 0)\n  };\n  products.push(newProduct);\n  return newProduct;\n}\n\n// src/server.js\n// استيراد وحدة HTTP المدمجة\nimport http from 'node:http';\n// استيراد دوال المتجر\nimport { getAll, create } from './store.js';\n\n// دالة مساعدة لتجميع وقراءة جسم الطلب\nfunction parseBody(req) {\n  return new Promise((resolve, reject) => {\n    let raw = '';\n    req.on('data', chunk => { raw += chunk; });\n    req.on('end', () => {\n      try {\n        resolve(raw ? JSON.parse(raw) : {});\n      } catch (e) {\n        reject(new Error(\"صيغة JSON غير صالحة\"));\n      }\n    });\n    req.on('error', reject);\n  });\n}\n\n// إنشاء وتصدير خادم الـ HTTP\nexport function buildServer() {\n  return http.createServer(async (req, res) => {\n    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);\n    const path = url.pathname;\n    const method = req.method;\n\n    // ترويسات عامة للاستجابة\n    res.setHeader('Content-Type', 'application/json; charset=utf-8');\n\n    // توجيه المسار: GET /api/products\n    if (method === 'GET' && path === '/api/products') {\n      res.writeHead(200);\n      return res.end(JSON.stringify({ success: true, data: getAll() }));\n    }\n\n    // توجيه المسار: POST /api/products\n    if (method === 'POST' && path === '/api/products') {\n      try {\n        const body = await parseBody(req);\n        if (!body.name || !body.price) {\n          res.writeHead(400);\n          return res.end(JSON.stringify({ success: false, error: \"اسم المنتج وسعره مطلوبان\" }));\n        }\n        const created = create(body);\n        res.writeHead(201);\n        return res.end(JSON.stringify({ success: true, data: created }));\n      } catch (err) {\n        res.writeHead(400);\n        return res.end(JSON.stringify({ success: false, error: err.message }));\n      }\n    }\n\n    // إذا لم يطابق أي مسار\n    res.writeHead(404);\n    res.end(JSON.stringify({ success: false, error: \"المسار المطلوب غير موجود\" }));\n  });\n}"
  },
  "topics": [
    {
      "id": "7.1",
      "title": "مقدمة في HTTP Server",
      "englishTitle": "مقدمة في HTTP Server",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم مقدمة في HTTP Server وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-7.1-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (مقدمة في HTTP Server) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (مقدمة في HTTP Server) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-7.1-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (مقدمة في HTTP Server)؟",
          "options": [
            "الاعتماد على القيم المشفرة يدوياً داخل الكود المصدري وتجاهل المتغيرات البيئية",
            "تطبيق التحقق الصارم من صحة المدخلات وعزل الأخطاء داخل كتل try/catch محكمة",
            "تحميل كافة الملفات والبيانات الضخمة دفعة واحدة في الذاكرة العشوائية عبر Buffers",
            "تجاهل معالجة الوعود غير المتزامنة وتركها معلقة دون توجيه"
          ],
          "correctIndex": 1,
          "explanation": "التحقق الصارم من صحة البيانات وعزل الأخطاء البرمجية يمنع الانهيار المفاجئ للخدمة ويحميها من الثغرات الأمنية.",
          "hint": "الحماية الاستباقية تبدأ دائماً بالتحقق من المدخلات وعزل الأخطاء."
        },
        {
          "id": "q-7.1-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (مقدمة في HTTP Server)، ما هو التصرف الهندسي السليم؟",
          "options": [
            "كتمان الخطأ تماماً وتجاهله لمنع تسجيله في شاشة الطرفية",
            "تسجيل تفاصيل الخطأ بوضوح في السجلات المهيكلة وإرجاع استجابة منسقة للمستخدم دون تسريب تفاصيل النظام الداخلية",
            "إيقاف تشغيل الخادم فوراً وحذف قاعدة البيانات المرتبطة",
            "إرجاع كود الاستجابة 200 OK دائماً وتضمين نص الخطأ الخام في الرسالة"
          ],
          "correctIndex": 1,
          "explanation": "تسجيل الأخطاء بوضوح للمطورين وإرجاع رد مهذب للمستخدم يحمي بيانات السيرفر الحساسة ويسهل استكشاف المشكلة.",
          "hint": "فكر في التوازن بين سرية النظام وتجربة المستخدم وتتبع الأخطاء."
        }
      ],
      "exercise": {
        "id": "ex-7.1",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (مقدمة في HTTP Server)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (مقدمة في HTTP Server) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع مقدمة في HTTP Server\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"مقدمة في HTTP Server\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "7.1.1",
          "title": "كيف يعمل خادم الويب؟",
          "englishTitle": "كيف يعمل خادم الويب",
          "definition": "يُقصد بـ (كيف يعمل خادم الويب؟) أحد المفاهيم المحورية في مسار مقدمة في HTTP Server ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه رموز الحالة (Status Codes) الإشارات الضوئية لشرطة المرور؛ 200 تعني الطريق سالك، و404 تعني الشارع مغلق، و500 تعني حادث في الطريق الداخلي.",
          "why": "تبرز أهمية (كيف يعمل خادم الويب؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ كيف يعمل خادم الويب؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'كيف يعمل خادم الويب؟' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: كيف يعمل خادم الويب؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.1.1",
            "title": "كيف يعمل خادم الويب؟",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (كيف يعمل خادم الويب؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'كيف يعمل خادم الويب' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (كيف يعمل خادم الويب؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (كيف يعمل خادم الويب؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على كيف يعمل خادم الويب؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (كيف يعمل خادم الويب؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين كيف يعمل خادم الويب؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: كيف يعمل خادم الويب؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.1.2",
          "title": "استخدام node:http",
          "englishTitle": "node:http",
          "definition": "يُقصد بـ (استخدام node:http) أحد المفاهيم المحورية في مسار مقدمة في HTTP Server ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه مسار الرابط (URL Routing) لافتات التوجيه على الطرق السريعة؛ تقود كل سيارة حسب المخرج المخصص لوجهتها النهائية.",
          "why": "تبرز أهمية (استخدام node:http) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخدام node:http\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'استخدام node:http' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخدام node:http\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.1.2",
            "title": "استخدام node:http",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (استخدام node:http) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'node:http' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخدام node:http) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخدام node:http) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخدام node:http",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخدام node:http) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام node:http\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخدام node:http...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.1.3",
          "title": "إنشاء أول HTTP Server",
          "englishTitle": "أول HTTP Server",
          "definition": "يُقصد بـ (إنشاء أول HTTP Server) أحد المفاهيم المحورية في مسار مقدمة في HTTP Server ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم HTTP موظف الاستقبال في برج تجاري؛ يستقبل كل زائر (Request)، يفحص هويته وتصريحه (Headers)، ثم يدله على المكتب المطلوب ويرسل معه الرد المناسب (Response).",
          "why": "تبرز أهمية (إنشاء أول HTTP Server) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إنشاء أول HTTP Server\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'إنشاء أول HTTP Server' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إنشاء أول HTTP Server\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.1.3",
            "title": "إنشاء أول HTTP Server",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إنشاء أول HTTP Server) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'أول HTTP Server' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إنشاء أول HTTP Server) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إنشاء أول HTTP Server) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إنشاء أول HTTP Server",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إنشاء أول HTTP Server) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء أول HTTP Server\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إنشاء أول HTTP Server...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.1.4",
          "title": "استخدام createServer",
          "englishTitle": "createServer",
          "definition": "يُقصد بـ (استخدام createServer) أحد المفاهيم المحورية في مسار مقدمة في HTTP Server ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه تدفق الطلب (Request Stream) صنبور مياه جاري؛ تستقبل الماء في دلو تدريجياً (Data Chunks) حتى تغلق الصنبور (End) لتستخدمه كاملاً.",
          "why": "تبرز أهمية (استخدام createServer) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخدام createServer\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'استخدام createServer' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخدام createServer\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.1.4",
            "title": "استخدام createServer",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (استخدام createServer) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'createServer' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخدام createServer) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخدام createServer) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخدام createServer",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخدام createServer) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام createServer\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخدام createServer...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.1.5",
          "title": "التعامل مع req وres",
          "englishTitle": "التعامل مع req وres",
          "definition": "يُقصد بـ (التعامل مع req وres) أحد المفاهيم المحورية في مسار مقدمة في HTTP Server ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه رموز الحالة (Status Codes) الإشارات الضوئية لشرطة المرور؛ 200 تعني الطريق سالك، و404 تعني الشارع مغلق، و500 تعني حادث في الطريق الداخلي.",
          "why": "تبرز أهمية (التعامل مع req وres) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ التعامل مع req وres\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'التعامل مع req وres' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: التعامل مع req وres\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.1.5",
            "title": "التعامل مع req وres",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (التعامل مع req وres) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'التعامل مع req وres' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (التعامل مع req وres) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (التعامل مع req وres) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على التعامل مع req وres",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (التعامل مع req وres) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين التعامل مع req وres\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: التعامل مع req وres...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.1.6",
          "title": "تشغيل الخادم باستخدام listen",
          "englishTitle": "تشغيل الخادم بlisten",
          "definition": "يُقصد بـ (تشغيل الخادم باستخدام listen) أحد المفاهيم المحورية في مسار مقدمة في HTTP Server ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه مسار الرابط (URL Routing) لافتات التوجيه على الطرق السريعة؛ تقود كل سيارة حسب المخرج المخصص لوجهتها النهائية.",
          "why": "تبرز أهمية (تشغيل الخادم باستخدام listen) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تشغيل الخادم باستخدام listen\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'تشغيل الخادم باستخدام listen' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تشغيل الخادم باستخدام listen\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.1.6",
            "title": "تشغيل الخادم باستخدام listen",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (تشغيل الخادم باستخدام listen) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تشغيل الخادم بlisten' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تشغيل الخادم باستخدام listen) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تشغيل الخادم باستخدام listen) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تشغيل الخادم باستخدام listen",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تشغيل الخادم باستخدام listen) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تشغيل الخادم باستخدام listen\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تشغيل الخادم باستخدام listen...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "7.2",
      "title": "فهم HTTP Requests",
      "englishTitle": "فهم HTTP Requests",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم فهم HTTP Requests وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-7.2-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (فهم HTTP Requests) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (فهم HTTP Requests) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-7.2-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (فهم HTTP Requests)؟",
          "options": [
            "الاعتماد على القيم المشفرة يدوياً داخل الكود المصدري وتجاهل المتغيرات البيئية",
            "تطبيق التحقق الصارم من صحة المدخلات وعزل الأخطاء داخل كتل try/catch محكمة",
            "تحميل كافة الملفات والبيانات الضخمة دفعة واحدة في الذاكرة العشوائية عبر Buffers",
            "تجاهل معالجة الوعود غير المتزامنة وتركها معلقة دون توجيه"
          ],
          "correctIndex": 1,
          "explanation": "التحقق الصارم من صحة البيانات وعزل الأخطاء البرمجية يمنع الانهيار المفاجئ للخدمة ويحميها من الثغرات الأمنية.",
          "hint": "الحماية الاستباقية تبدأ دائماً بالتحقق من المدخلات وعزل الأخطاء."
        },
        {
          "id": "q-7.2-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (فهم HTTP Requests)، ما هو التصرف الهندسي السليم؟",
          "options": [
            "كتمان الخطأ تماماً وتجاهله لمنع تسجيله في شاشة الطرفية",
            "تسجيل تفاصيل الخطأ بوضوح في السجلات المهيكلة وإرجاع استجابة منسقة للمستخدم دون تسريب تفاصيل النظام الداخلية",
            "إيقاف تشغيل الخادم فوراً وحذف قاعدة البيانات المرتبطة",
            "إرجاع كود الاستجابة 200 OK دائماً وتضمين نص الخطأ الخام في الرسالة"
          ],
          "correctIndex": 1,
          "explanation": "تسجيل الأخطاء بوضوح للمطورين وإرجاع رد مهذب للمستخدم يحمي بيانات السيرفر الحساسة ويسهل استكشاف المشكلة.",
          "hint": "فكر في التوازن بين سرية النظام وتجربة المستخدم وتتبع الأخطاء."
        }
      ],
      "exercise": {
        "id": "ex-7.2",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (فهم HTTP Requests)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (فهم HTTP Requests) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع فهم HTTP Requests\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"فهم HTTP Requests\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "7.2.1",
          "title": "مفهوم HTTP Methods",
          "englishTitle": "HTTP Methods",
          "definition": "يُقصد بـ (مفهوم HTTP Methods) أحد المفاهيم المحورية في مسار فهم HTTP Requests ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه مسار الرابط (URL Routing) لافتات التوجيه على الطرق السريعة؛ تقود كل سيارة حسب المخرج المخصص لوجهتها النهائية.",
          "why": "تبرز أهمية (مفهوم HTTP Methods) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم HTTP Methods\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'مفهوم HTTP Methods' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم HTTP Methods\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.2.1",
            "title": "مفهوم HTTP Methods",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (مفهوم HTTP Methods) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'HTTP Methods' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم HTTP Methods) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم HTTP Methods) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم HTTP Methods",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم HTTP Methods) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم HTTP Methods\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم HTTP Methods...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.2.2",
          "title": "الفرق بين GET وPOST",
          "englishTitle": "GET وPOST",
          "definition": "يُقصد بـ (الفرق بين GET وPOST) أحد المفاهيم المحورية في مسار فهم HTTP Requests ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم HTTP موظف الاستقبال في برج تجاري؛ يستقبل كل زائر (Request)، يفحص هويته وتصريحه (Headers)، ثم يدله على المكتب المطلوب ويرسل معه الرد المناسب (Response).",
          "why": "تبرز أهمية (الفرق بين GET وPOST) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ الفرق بين GET وPOST\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'الفرق بين GET وPOST' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: الفرق بين GET وPOST\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.2.2",
            "title": "الفرق بين GET وPOST",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (الفرق بين GET وPOST) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'GET وPOST' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (الفرق بين GET وPOST) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (الفرق بين GET وPOST) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على الفرق بين GET وPOST",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (الفرق بين GET وPOST) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين GET وPOST\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: الفرق بين GET وPOST...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.2.3",
          "title": "استخدام PUT وPATCH وDELETE",
          "englishTitle": "PUT وPATCH وDELETE",
          "definition": "يُقصد بـ (استخدام PUT وPATCH وDELETE) أحد المفاهيم المحورية في مسار فهم HTTP Requests ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه تدفق الطلب (Request Stream) صنبور مياه جاري؛ تستقبل الماء في دلو تدريجياً (Data Chunks) حتى تغلق الصنبور (End) لتستخدمه كاملاً.",
          "why": "تبرز أهمية (استخدام PUT وPATCH وDELETE) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخدام PUT وPATCH وDELETE\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'استخدام PUT وPATCH وDELETE' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخدام PUT وPATCH وDELETE\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.2.3",
            "title": "استخدام PUT وPATCH وDELETE",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (استخدام PUT وPATCH وDELETE) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'PUT وPATCH وDELETE' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخدام PUT وPATCH وDELETE) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخدام PUT وPATCH وDELETE) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخدام PUT وPATCH وDELETE",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخدام PUT وPATCH وDELETE) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام PUT وPATCH وDELETE\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخدام PUT وPATCH وDELETE...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.2.4",
          "title": "قراءة Request Headers",
          "englishTitle": "قراءة Request Headers",
          "definition": "يُقصد بـ (قراءة Request Headers) أحد المفاهيم المحورية في مسار فهم HTTP Requests ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه رموز الحالة (Status Codes) الإشارات الضوئية لشرطة المرور؛ 200 تعني الطريق سالك، و404 تعني الشارع مغلق، و500 تعني حادث في الطريق الداخلي.",
          "why": "تبرز أهمية (قراءة Request Headers) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ قراءة Request Headers\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'قراءة Request Headers' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: قراءة Request Headers\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.2.4",
            "title": "قراءة Request Headers",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (قراءة Request Headers) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'قراءة Request Headers' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (قراءة Request Headers) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (قراءة Request Headers) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على قراءة Request Headers",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (قراءة Request Headers) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين قراءة Request Headers\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: قراءة Request Headers...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.2.5",
          "title": "قراءة Query Parameters",
          "englishTitle": "قراءة Query Parameters",
          "definition": "يُقصد بـ (قراءة Query Parameters) أحد المفاهيم المحورية في مسار فهم HTTP Requests ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه مسار الرابط (URL Routing) لافتات التوجيه على الطرق السريعة؛ تقود كل سيارة حسب المخرج المخصص لوجهتها النهائية.",
          "why": "تبرز أهمية (قراءة Query Parameters) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ قراءة Query Parameters\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'قراءة Query Parameters' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: قراءة Query Parameters\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.2.5",
            "title": "قراءة Query Parameters",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (قراءة Query Parameters) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'قراءة Query Parameters' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (قراءة Query Parameters) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (قراءة Query Parameters) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على قراءة Query Parameters",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (قراءة Query Parameters) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين قراءة Query Parameters\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: قراءة Query Parameters...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.2.6",
          "title": "قراءة Route Parameters",
          "englishTitle": "قراءة Route Parameters",
          "definition": "يُقصد بـ (قراءة Route Parameters) أحد المفاهيم المحورية في مسار فهم HTTP Requests ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم HTTP موظف الاستقبال في برج تجاري؛ يستقبل كل زائر (Request)، يفحص هويته وتصريحه (Headers)، ثم يدله على المكتب المطلوب ويرسل معه الرد المناسب (Response).",
          "why": "تبرز أهمية (قراءة Route Parameters) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ قراءة Route Parameters\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'قراءة Route Parameters' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: قراءة Route Parameters\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.2.6",
            "title": "قراءة Route Parameters",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (قراءة Route Parameters) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'قراءة Route Parameters' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (قراءة Route Parameters) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (قراءة Route Parameters) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على قراءة Route Parameters",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (قراءة Route Parameters) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين قراءة Route Parameters\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: قراءة Route Parameters...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.2.7",
          "title": "قراءة Request Body",
          "englishTitle": "قراءة Request Body",
          "definition": "يُقصد بـ (قراءة Request Body) أحد المفاهيم المحورية في مسار فهم HTTP Requests ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه تدفق الطلب (Request Stream) صنبور مياه جاري؛ تستقبل الماء في دلو تدريجياً (Data Chunks) حتى تغلق الصنبور (End) لتستخدمه كاملاً.",
          "why": "تبرز أهمية (قراءة Request Body) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ قراءة Request Body\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'قراءة Request Body' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: قراءة Request Body\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.2.7",
            "title": "قراءة Request Body",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (قراءة Request Body) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'قراءة Request Body' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (قراءة Request Body) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (قراءة Request Body) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على قراءة Request Body",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (قراءة Request Body) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين قراءة Request Body\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: قراءة Request Body...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "7.3",
      "title": "فهم HTTP Responses",
      "englishTitle": "فهم HTTP Responses",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم فهم HTTP Responses وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-7.3-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (فهم HTTP Responses) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (فهم HTTP Responses) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-7.3-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (فهم HTTP Responses)؟",
          "options": [
            "الاعتماد على القيم المشفرة يدوياً داخل الكود المصدري وتجاهل المتغيرات البيئية",
            "تطبيق التحقق الصارم من صحة المدخلات وعزل الأخطاء داخل كتل try/catch محكمة",
            "تحميل كافة الملفات والبيانات الضخمة دفعة واحدة في الذاكرة العشوائية عبر Buffers",
            "تجاهل معالجة الوعود غير المتزامنة وتركها معلقة دون توجيه"
          ],
          "correctIndex": 1,
          "explanation": "التحقق الصارم من صحة البيانات وعزل الأخطاء البرمجية يمنع الانهيار المفاجئ للخدمة ويحميها من الثغرات الأمنية.",
          "hint": "الحماية الاستباقية تبدأ دائماً بالتحقق من المدخلات وعزل الأخطاء."
        },
        {
          "id": "q-7.3-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (فهم HTTP Responses)، ما هو التصرف الهندسي السليم؟",
          "options": [
            "كتمان الخطأ تماماً وتجاهله لمنع تسجيله في شاشة الطرفية",
            "تسجيل تفاصيل الخطأ بوضوح في السجلات المهيكلة وإرجاع استجابة منسقة للمستخدم دون تسريب تفاصيل النظام الداخلية",
            "إيقاف تشغيل الخادم فوراً وحذف قاعدة البيانات المرتبطة",
            "إرجاع كود الاستجابة 200 OK دائماً وتضمين نص الخطأ الخام في الرسالة"
          ],
          "correctIndex": 1,
          "explanation": "تسجيل الأخطاء بوضوح للمطورين وإرجاع رد مهذب للمستخدم يحمي بيانات السيرفر الحساسة ويسهل استكشاف المشكلة.",
          "hint": "فكر في التوازن بين سرية النظام وتجربة المستخدم وتتبع الأخطاء."
        }
      ],
      "exercise": {
        "id": "ex-7.3",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (فهم HTTP Responses)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (فهم HTTP Responses) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع فهم HTTP Responses\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"فهم HTTP Responses\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "7.3.1",
          "title": "مفهوم HTTP Status Codes",
          "englishTitle": "HTTP Status Codes",
          "definition": "يُقصد بـ (مفهوم HTTP Status Codes) أحد المفاهيم المحورية في مسار فهم HTTP Responses ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم HTTP موظف الاستقبال في برج تجاري؛ يستقبل كل زائر (Request)، يفحص هويته وتصريحه (Headers)، ثم يدله على المكتب المطلوب ويرسل معه الرد المناسب (Response).",
          "why": "تبرز أهمية (مفهوم HTTP Status Codes) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم HTTP Status Codes\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'مفهوم HTTP Status Codes' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم HTTP Status Codes\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.3.1",
            "title": "مفهوم HTTP Status Codes",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (مفهوم HTTP Status Codes) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'HTTP Status Codes' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم HTTP Status Codes) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم HTTP Status Codes) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم HTTP Status Codes",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم HTTP Status Codes) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم HTTP Status Codes\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم HTTP Status Codes...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.3.2",
          "title": "أكواد النجاح 2xx",
          "englishTitle": "أكواد النجاح 2xx",
          "definition": "يُقصد بـ (أكواد النجاح 2xx) أحد المفاهيم المحورية في مسار فهم HTTP Responses ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه تدفق الطلب (Request Stream) صنبور مياه جاري؛ تستقبل الماء في دلو تدريجياً (Data Chunks) حتى تغلق الصنبور (End) لتستخدمه كاملاً.",
          "why": "تبرز أهمية (أكواد النجاح 2xx) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ أكواد النجاح 2xx\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'أكواد النجاح 2xx' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: أكواد النجاح 2xx\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.3.2",
            "title": "أكواد النجاح 2xx",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (أكواد النجاح 2xx) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'أكواد النجاح 2xx' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (أكواد النجاح 2xx) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (أكواد النجاح 2xx) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على أكواد النجاح 2xx",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (أكواد النجاح 2xx) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين أكواد النجاح 2xx\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: أكواد النجاح 2xx...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.3.3",
          "title": "أكواد التوجيه 3xx",
          "englishTitle": "أكواد التوجيه 3xx",
          "definition": "يُقصد بـ (أكواد التوجيه 3xx) أحد المفاهيم المحورية في مسار فهم HTTP Responses ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه رموز الحالة (Status Codes) الإشارات الضوئية لشرطة المرور؛ 200 تعني الطريق سالك، و404 تعني الشارع مغلق، و500 تعني حادث في الطريق الداخلي.",
          "why": "تبرز أهمية (أكواد التوجيه 3xx) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ أكواد التوجيه 3xx\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'أكواد التوجيه 3xx' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: أكواد التوجيه 3xx\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.3.3",
            "title": "أكواد التوجيه 3xx",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (أكواد التوجيه 3xx) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'أكواد التوجيه 3xx' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (أكواد التوجيه 3xx) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (أكواد التوجيه 3xx) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على أكواد التوجيه 3xx",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (أكواد التوجيه 3xx) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين أكواد التوجيه 3xx\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: أكواد التوجيه 3xx...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.3.4",
          "title": "أكواد أخطاء العميل 4xx",
          "englishTitle": "أكواد أخطاء العميل 4xx",
          "definition": "يُقصد بـ (أكواد أخطاء العميل 4xx) أحد المفاهيم المحورية في مسار فهم HTTP Responses ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه مسار الرابط (URL Routing) لافتات التوجيه على الطرق السريعة؛ تقود كل سيارة حسب المخرج المخصص لوجهتها النهائية.",
          "why": "تبرز أهمية (أكواد أخطاء العميل 4xx) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ أكواد أخطاء العميل 4xx\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'أكواد أخطاء العميل 4xx' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: أكواد أخطاء العميل 4xx\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.3.4",
            "title": "أكواد أخطاء العميل 4xx",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (أكواد أخطاء العميل 4xx) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'أكواد أخطاء العميل 4xx' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (أكواد أخطاء العميل 4xx) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (أكواد أخطاء العميل 4xx) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على أكواد أخطاء العميل 4xx",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (أكواد أخطاء العميل 4xx) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين أكواد أخطاء العميل 4xx\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: أكواد أخطاء العميل 4xx...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.3.5",
          "title": "أكواد أخطاء الخادم 5xx",
          "englishTitle": "أكواد أخطاء الخادم 5xx",
          "definition": "يُقصد بـ (أكواد أخطاء الخادم 5xx) أحد المفاهيم المحورية في مسار فهم HTTP Responses ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم HTTP موظف الاستقبال في برج تجاري؛ يستقبل كل زائر (Request)، يفحص هويته وتصريحه (Headers)، ثم يدله على المكتب المطلوب ويرسل معه الرد المناسب (Response).",
          "why": "تبرز أهمية (أكواد أخطاء الخادم 5xx) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ أكواد أخطاء الخادم 5xx\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'أكواد أخطاء الخادم 5xx' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: أكواد أخطاء الخادم 5xx\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.3.5",
            "title": "أكواد أخطاء الخادم 5xx",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (أكواد أخطاء الخادم 5xx) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'أكواد أخطاء الخادم 5xx' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (أكواد أخطاء الخادم 5xx) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (أكواد أخطاء الخادم 5xx) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على أكواد أخطاء الخادم 5xx",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (أكواد أخطاء الخادم 5xx) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين أكواد أخطاء الخادم 5xx\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: أكواد أخطاء الخادم 5xx...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.3.6",
          "title": "تحديد Response Headers",
          "englishTitle": "تحديد Response Headers",
          "definition": "يُقصد بـ (تحديد Response Headers) أحد المفاهيم المحورية في مسار فهم HTTP Responses ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه تدفق الطلب (Request Stream) صنبور مياه جاري؛ تستقبل الماء في دلو تدريجياً (Data Chunks) حتى تغلق الصنبور (End) لتستخدمه كاملاً.",
          "why": "تبرز أهمية (تحديد Response Headers) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تحديد Response Headers\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'تحديد Response Headers' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تحديد Response Headers\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.3.6",
            "title": "تحديد Response Headers",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (تحديد Response Headers) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تحديد Response Headers' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تحديد Response Headers) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تحديد Response Headers) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تحديد Response Headers",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تحديد Response Headers) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تحديد Response Headers\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تحديد Response Headers...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.3.7",
          "title": "إرسال JSON Response",
          "englishTitle": "إرسال JSON Response",
          "definition": "يُقصد بـ (إرسال JSON Response) أحد المفاهيم المحورية في مسار فهم HTTP Responses ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه رموز الحالة (Status Codes) الإشارات الضوئية لشرطة المرور؛ 200 تعني الطريق سالك، و404 تعني الشارع مغلق، و500 تعني حادث في الطريق الداخلي.",
          "why": "تبرز أهمية (إرسال JSON Response) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إرسال JSON Response\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'إرسال JSON Response' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إرسال JSON Response\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.3.7",
            "title": "إرسال JSON Response",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إرسال JSON Response) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'إرسال JSON Response' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إرسال JSON Response) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إرسال JSON Response) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إرسال JSON Response",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إرسال JSON Response) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال JSON Response\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إرسال JSON Response...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.3.8",
          "title": "إرسال HTML Response",
          "englishTitle": "إرسال HTML Response",
          "definition": "يُقصد بـ (إرسال HTML Response) أحد المفاهيم المحورية في مسار فهم HTTP Responses ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه مسار الرابط (URL Routing) لافتات التوجيه على الطرق السريعة؛ تقود كل سيارة حسب المخرج المخصص لوجهتها النهائية.",
          "why": "تبرز أهمية (إرسال HTML Response) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إرسال HTML Response\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'إرسال HTML Response' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إرسال HTML Response\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.3.8",
            "title": "إرسال HTML Response",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إرسال HTML Response) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'إرسال HTML Response' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إرسال HTML Response) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إرسال HTML Response) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إرسال HTML Response",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إرسال HTML Response) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال HTML Response\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إرسال HTML Response...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "7.4",
      "title": "إدارة المسارات Routing",
      "englishTitle": "إدارة المسارات Routing",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم إدارة المسارات Routing وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-7.4-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (إدارة المسارات Routing) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (إدارة المسارات Routing) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-7.4-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (إدارة المسارات Routing)؟",
          "options": [
            "الاعتماد على القيم المشفرة يدوياً داخل الكود المصدري وتجاهل المتغيرات البيئية",
            "تطبيق التحقق الصارم من صحة المدخلات وعزل الأخطاء داخل كتل try/catch محكمة",
            "تحميل كافة الملفات والبيانات الضخمة دفعة واحدة في الذاكرة العشوائية عبر Buffers",
            "تجاهل معالجة الوعود غير المتزامنة وتركها معلقة دون توجيه"
          ],
          "correctIndex": 1,
          "explanation": "التحقق الصارم من صحة البيانات وعزل الأخطاء البرمجية يمنع الانهيار المفاجئ للخدمة ويحميها من الثغرات الأمنية.",
          "hint": "الحماية الاستباقية تبدأ دائماً بالتحقق من المدخلات وعزل الأخطاء."
        },
        {
          "id": "q-7.4-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (إدارة المسارات Routing)، ما هو التصرف الهندسي السليم؟",
          "options": [
            "كتمان الخطأ تماماً وتجاهله لمنع تسجيله في شاشة الطرفية",
            "تسجيل تفاصيل الخطأ بوضوح في السجلات المهيكلة وإرجاع استجابة منسقة للمستخدم دون تسريب تفاصيل النظام الداخلية",
            "إيقاف تشغيل الخادم فوراً وحذف قاعدة البيانات المرتبطة",
            "إرجاع كود الاستجابة 200 OK دائماً وتضمين نص الخطأ الخام في الرسالة"
          ],
          "correctIndex": 1,
          "explanation": "تسجيل الأخطاء بوضوح للمطورين وإرجاع رد مهذب للمستخدم يحمي بيانات السيرفر الحساسة ويسهل استكشاف المشكلة.",
          "hint": "فكر في التوازن بين سرية النظام وتجربة المستخدم وتتبع الأخطاء."
        }
      ],
      "exercise": {
        "id": "ex-7.4",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (إدارة المسارات Routing)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (إدارة المسارات Routing) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع إدارة المسارات Routing\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"إدارة المسارات Routing\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "7.4.1",
          "title": "ما هو Routing؟",
          "englishTitle": "Routing",
          "definition": "يُقصد بـ (ما هو Routing؟) أحد المفاهيم المحورية في مسار إدارة المسارات Routing ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه تدفق الطلب (Request Stream) صنبور مياه جاري؛ تستقبل الماء في دلو تدريجياً (Data Chunks) حتى تغلق الصنبور (End) لتستخدمه كاملاً.",
          "why": "تبرز أهمية (ما هو Routing؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ما هو Routing؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'ما هو Routing؟' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ما هو Routing؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.4.1",
            "title": "ما هو Routing؟",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (ما هو Routing؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Routing' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ما هو Routing؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ما هو Routing؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ما هو Routing؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ما هو Routing؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو Routing؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ما هو Routing؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.4.2",
          "title": "إنشاء مسارات متعددة",
          "englishTitle": "مسارات متعددة",
          "definition": "يُقصد بـ (إنشاء مسارات متعددة) أحد المفاهيم المحورية في مسار إدارة المسارات Routing ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه رموز الحالة (Status Codes) الإشارات الضوئية لشرطة المرور؛ 200 تعني الطريق سالك، و404 تعني الشارع مغلق، و500 تعني حادث في الطريق الداخلي.",
          "why": "تبرز أهمية (إنشاء مسارات متعددة) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إنشاء مسارات متعددة\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'إنشاء مسارات متعددة' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إنشاء مسارات متعددة\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.4.2",
            "title": "إنشاء مسارات متعددة",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إنشاء مسارات متعددة) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'مسارات متعددة' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إنشاء مسارات متعددة) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إنشاء مسارات متعددة) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إنشاء مسارات متعددة",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إنشاء مسارات متعددة) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء مسارات متعددة\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إنشاء مسارات متعددة...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.4.3",
          "title": "التوجيه حسب HTTP Method",
          "englishTitle": "التوجيه حسب HTTP Method",
          "definition": "يُقصد بـ (التوجيه حسب HTTP Method) أحد المفاهيم المحورية في مسار إدارة المسارات Routing ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه مسار الرابط (URL Routing) لافتات التوجيه على الطرق السريعة؛ تقود كل سيارة حسب المخرج المخصص لوجهتها النهائية.",
          "why": "تبرز أهمية (التوجيه حسب HTTP Method) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ التوجيه حسب HTTP Method\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'التوجيه حسب HTTP Method' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: التوجيه حسب HTTP Method\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.4.3",
            "title": "التوجيه حسب HTTP Method",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (التوجيه حسب HTTP Method) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'التوجيه حسب HTTP Method' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (التوجيه حسب HTTP Method) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (التوجيه حسب HTTP Method) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على التوجيه حسب HTTP Method",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (التوجيه حسب HTTP Method) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين التوجيه حسب HTTP Method\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: التوجيه حسب HTTP Method...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.4.4",
          "title": "استخراج المعاملات من URL",
          "englishTitle": "استخراج المعاملات من URL",
          "definition": "يُقصد بـ (استخراج المعاملات من URL) أحد المفاهيم المحورية في مسار إدارة المسارات Routing ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم HTTP موظف الاستقبال في برج تجاري؛ يستقبل كل زائر (Request)، يفحص هويته وتصريحه (Headers)، ثم يدله على المكتب المطلوب ويرسل معه الرد المناسب (Response).",
          "why": "تبرز أهمية (استخراج المعاملات من URL) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخراج المعاملات من URL\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'استخراج المعاملات من URL' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخراج المعاملات من URL\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.4.4",
            "title": "استخراج المعاملات من URL",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (استخراج المعاملات من URL) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'استخراج المعاملات من URL' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخراج المعاملات من URL) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخراج المعاملات من URL) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخراج المعاملات من URL",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخراج المعاملات من URL) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخراج المعاملات من URL\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخراج المعاملات من URL...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.4.5",
          "title": "معالجة المسارات غير الموجودة",
          "englishTitle": "معالجة المسارات غير الموجودة",
          "definition": "يُقصد بـ (معالجة المسارات غير الموجودة) أحد المفاهيم المحورية في مسار إدارة المسارات Routing ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه تدفق الطلب (Request Stream) صنبور مياه جاري؛ تستقبل الماء في دلو تدريجياً (Data Chunks) حتى تغلق الصنبور (End) لتستخدمه كاملاً.",
          "why": "تبرز أهمية (معالجة المسارات غير الموجودة) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ معالجة المسارات غير الموجودة\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'معالجة المسارات غير الموجودة' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: معالجة المسارات غير الموجودة\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.4.5",
            "title": "معالجة المسارات غير الموجودة",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (معالجة المسارات غير الموجودة) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'معالجة المسارات غير الموجودة' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (معالجة المسارات غير الموجودة) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (معالجة المسارات غير الموجودة) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على معالجة المسارات غير الموجودة",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (معالجة المسارات غير الموجودة) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين معالجة المسارات غير الموجودة\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: معالجة المسارات غير الموجودة...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.4.6",
          "title": "تنظيم المسارات داخل ملفات مستقلة",
          "englishTitle": "تنظيم المسارات داخل ملفات مستقلة",
          "definition": "يُقصد بـ (تنظيم المسارات داخل ملفات مستقلة) أحد المفاهيم المحورية في مسار إدارة المسارات Routing ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه رموز الحالة (Status Codes) الإشارات الضوئية لشرطة المرور؛ 200 تعني الطريق سالك، و404 تعني الشارع مغلق، و500 تعني حادث في الطريق الداخلي.",
          "why": "تبرز أهمية (تنظيم المسارات داخل ملفات مستقلة) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تنظيم المسارات داخل ملفات مستقلة\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'تنظيم المسارات داخل ملفات مستقلة' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تنظيم المسارات داخل ملفات مستقلة\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.4.6",
            "title": "تنظيم المسارات داخل ملفات مستقلة",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (تنظيم المسارات داخل ملفات مستقلة) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تنظيم المسارات داخل ملفات مستقلة' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تنظيم المسارات داخل ملفات مستقلة) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تنظيم المسارات داخل ملفات مستقلة) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تنظيم المسارات داخل ملفات مستقلة",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تنظيم المسارات داخل ملفات مستقلة) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تنظيم المسارات داخل ملفات مستقلة\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تنظيم المسارات داخل ملفات مستقلة...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "7.5",
      "title": "مشروع عملي: خادم منتجات",
      "englishTitle": "مشروع عملي: خادم منتجات",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم مشروع عملي: خادم منتجات وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-7.5-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (مشروع عملي: خادم منتجات) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (مشروع عملي: خادم منتجات) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-7.5-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (مشروع عملي: خادم منتجات)؟",
          "options": [
            "الاعتماد على القيم المشفرة يدوياً داخل الكود المصدري وتجاهل المتغيرات البيئية",
            "تطبيق التحقق الصارم من صحة المدخلات وعزل الأخطاء داخل كتل try/catch محكمة",
            "تحميل كافة الملفات والبيانات الضخمة دفعة واحدة في الذاكرة العشوائية عبر Buffers",
            "تجاهل معالجة الوعود غير المتزامنة وتركها معلقة دون توجيه"
          ],
          "correctIndex": 1,
          "explanation": "التحقق الصارم من صحة البيانات وعزل الأخطاء البرمجية يمنع الانهيار المفاجئ للخدمة ويحميها من الثغرات الأمنية.",
          "hint": "الحماية الاستباقية تبدأ دائماً بالتحقق من المدخلات وعزل الأخطاء."
        },
        {
          "id": "q-7.5-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (مشروع عملي: خادم منتجات)، ما هو التصرف الهندسي السليم؟",
          "options": [
            "كتمان الخطأ تماماً وتجاهله لمنع تسجيله في شاشة الطرفية",
            "تسجيل تفاصيل الخطأ بوضوح في السجلات المهيكلة وإرجاع استجابة منسقة للمستخدم دون تسريب تفاصيل النظام الداخلية",
            "إيقاف تشغيل الخادم فوراً وحذف قاعدة البيانات المرتبطة",
            "إرجاع كود الاستجابة 200 OK دائماً وتضمين نص الخطأ الخام في الرسالة"
          ],
          "correctIndex": 1,
          "explanation": "تسجيل الأخطاء بوضوح للمطورين وإرجاع رد مهذب للمستخدم يحمي بيانات السيرفر الحساسة ويسهل استكشاف المشكلة.",
          "hint": "فكر في التوازن بين سرية النظام وتجربة المستخدم وتتبع الأخطاء."
        }
      ],
      "exercise": {
        "id": "ex-7.5",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (مشروع عملي: خادم منتجات)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (مشروع عملي: خادم منتجات) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع مشروع عملي: خادم منتجات\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"مشروع عملي: خادم منتجات\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "7.5.1",
          "title": "إنشاء بيانات منتجات تجريبية",
          "englishTitle": "بيانات منتجات تجريبية",
          "definition": "يُقصد بـ (إنشاء بيانات منتجات تجريبية) أحد المفاهيم المحورية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه رموز الحالة (Status Codes) الإشارات الضوئية لشرطة المرور؛ 200 تعني الطريق سالك، و404 تعني الشارع مغلق، و500 تعني حادث في الطريق الداخلي.",
          "why": "تبرز أهمية (إنشاء بيانات منتجات تجريبية) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إنشاء بيانات منتجات تجريبية\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'إنشاء بيانات منتجات تجريبية' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إنشاء بيانات منتجات تجريبية\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.5.1",
            "title": "إنشاء بيانات منتجات تجريبية",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إنشاء بيانات منتجات تجريبية) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'بيانات منتجات تجريبية' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إنشاء بيانات منتجات تجريبية) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إنشاء بيانات منتجات تجريبية) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إنشاء بيانات منتجات تجريبية",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إنشاء بيانات منتجات تجريبية) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء بيانات منتجات تجريبية\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إنشاء بيانات منتجات تجريبية...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.5.2",
          "title": "إنشاء API لعرض المنتجات",
          "englishTitle": "API لعرض المنتجات",
          "definition": "يُقصد بـ (إنشاء API لعرض المنتجات) أحد المفاهيم المحورية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه مسار الرابط (URL Routing) لافتات التوجيه على الطرق السريعة؛ تقود كل سيارة حسب المخرج المخصص لوجهتها النهائية.",
          "why": "تبرز أهمية (إنشاء API لعرض المنتجات) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إنشاء API لعرض المنتجات\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'إنشاء API لعرض المنتجات' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إنشاء API لعرض المنتجات\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.5.2",
            "title": "إنشاء API لعرض المنتجات",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إنشاء API لعرض المنتجات) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'API لعرض المنتجات' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إنشاء API لعرض المنتجات) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إنشاء API لعرض المنتجات) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إنشاء API لعرض المنتجات",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إنشاء API لعرض المنتجات) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء API لعرض المنتجات\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إنشاء API لعرض المنتجات...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.5.3",
          "title": "البحث عن منتج باستخدام ID",
          "englishTitle": "البحث عن منتج بID",
          "definition": "يُقصد بـ (البحث عن منتج باستخدام ID) أحد المفاهيم المحورية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم HTTP موظف الاستقبال في برج تجاري؛ يستقبل كل زائر (Request)، يفحص هويته وتصريحه (Headers)، ثم يدله على المكتب المطلوب ويرسل معه الرد المناسب (Response).",
          "why": "تبرز أهمية (البحث عن منتج باستخدام ID) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ البحث عن منتج باستخدام ID\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'البحث عن منتج باستخدام ID' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: البحث عن منتج باستخدام ID\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.5.3",
            "title": "البحث عن منتج باستخدام ID",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (البحث عن منتج باستخدام ID) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'البحث عن منتج بID' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (البحث عن منتج باستخدام ID) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (البحث عن منتج باستخدام ID) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على البحث عن منتج باستخدام ID",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (البحث عن منتج باستخدام ID) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين البحث عن منتج باستخدام ID\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: البحث عن منتج باستخدام ID...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.5.4",
          "title": "إضافة منتج باستخدام POST",
          "englishTitle": "إضافة منتج بPOST",
          "definition": "يُقصد بـ (إضافة منتج باستخدام POST) أحد المفاهيم المحورية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه تدفق الطلب (Request Stream) صنبور مياه جاري؛ تستقبل الماء في دلو تدريجياً (Data Chunks) حتى تغلق الصنبور (End) لتستخدمه كاملاً.",
          "why": "تبرز أهمية (إضافة منتج باستخدام POST) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إضافة منتج باستخدام POST\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'إضافة منتج باستخدام POST' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إضافة منتج باستخدام POST\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.5.4",
            "title": "إضافة منتج باستخدام POST",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إضافة منتج باستخدام POST) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'إضافة منتج بPOST' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إضافة منتج باستخدام POST) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إضافة منتج باستخدام POST) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إضافة منتج باستخدام POST",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إضافة منتج باستخدام POST) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إضافة منتج باستخدام POST\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إضافة منتج باستخدام POST...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.5.5",
          "title": "تعديل منتج باستخدام PUT",
          "englishTitle": "تعديل منتج بPUT",
          "definition": "يُقصد بـ (تعديل منتج باستخدام PUT) أحد المفاهيم المحورية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه رموز الحالة (Status Codes) الإشارات الضوئية لشرطة المرور؛ 200 تعني الطريق سالك، و404 تعني الشارع مغلق، و500 تعني حادث في الطريق الداخلي.",
          "why": "تبرز أهمية (تعديل منتج باستخدام PUT) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تعديل منتج باستخدام PUT\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'تعديل منتج باستخدام PUT' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تعديل منتج باستخدام PUT\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.5.5",
            "title": "تعديل منتج باستخدام PUT",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (تعديل منتج باستخدام PUT) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تعديل منتج بPUT' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تعديل منتج باستخدام PUT) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تعديل منتج باستخدام PUT) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تعديل منتج باستخدام PUT",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تعديل منتج باستخدام PUT) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تعديل منتج باستخدام PUT\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تعديل منتج باستخدام PUT...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.5.6",
          "title": "حذف منتج باستخدام DELETE",
          "englishTitle": "حذف منتج بDELETE",
          "definition": "يُقصد بـ (حذف منتج باستخدام DELETE) أحد المفاهيم المحورية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه مسار الرابط (URL Routing) لافتات التوجيه على الطرق السريعة؛ تقود كل سيارة حسب المخرج المخصص لوجهتها النهائية.",
          "why": "تبرز أهمية (حذف منتج باستخدام DELETE) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ حذف منتج باستخدام DELETE\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'حذف منتج باستخدام DELETE' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: حذف منتج باستخدام DELETE\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.5.6",
            "title": "حذف منتج باستخدام DELETE",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (حذف منتج باستخدام DELETE) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'حذف منتج بDELETE' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (حذف منتج باستخدام DELETE) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (حذف منتج باستخدام DELETE) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على حذف منتج باستخدام DELETE",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (حذف منتج باستخدام DELETE) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين حذف منتج باستخدام DELETE\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: حذف منتج باستخدام DELETE...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "7.5.7",
          "title": "اختبار الخادم باستخدام Postman",
          "englishTitle": "اختبار الخادم بPostman",
          "definition": "يُقصد بـ (اختبار الخادم باستخدام Postman) أحد المفاهيم المحورية في مسار مشروع عملي: خادم منتجات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم HTTP موظف الاستقبال في برج تجاري؛ يستقبل كل زائر (Request)، يفحص هويته وتصريحه (Headers)، ثم يدله على المكتب المطلوب ويرسل معه الرد المناسب (Response).",
          "why": "تبرز أهمية (اختبار الخادم باستخدام Postman) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "IncomingMessage",
              "pronunciation": "إنكومينغ ميسيج",
              "meaning": "كائن تدفق القراءة الذي يمثل طلب العميل وترويساته"
            },
            {
              "term": "ServerResponse",
              "pronunciation": "سيرفر ريسبونس",
              "meaning": "كائن تدفق الكتابة المخصص لبناء وإرسال الاستجابة للعميل"
            },
            {
              "term": "Statelessness",
              "pronunciation": "ستيت-لس-نس",
              "meaning": "طبيعة بروتوكول HTTP التي تعامل كل طلب ككيان مستقل تماماً"
            },
            {
              "term": "Content-Type",
              "pronunciation": "كونتنت تايب",
              "meaning": "ترويسة إخبار المتصفح بنوع وهيئة الشحنة المرسلة إليه"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ اختبار الخادم باستخدام Postman\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة\nimport http from 'node:http';\n// إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة\nconst server = http.createServer((req, res) => {\n// إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8\n  res.setHeader('Content-Type', 'application/json; charset=utf-8');\n// إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح\n  res.end(JSON.stringify({ status: 'ok', lesson: 'اختبار الخادم باستخدام Postman' }));\n// إغلاق دالة معالجة الطلبات\n});\n// بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد\nserver.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: اختبار الخادم باستخدام Postman\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 7.5.7",
            "title": "اختبار الخادم باستخدام Postman",
            "icon": "Server",
            "colors": "from-emerald-600 to-teal-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (اختبار الخادم باستخدام Postman) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'اختبار الخادم بPostman' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (اختبار الخادم باستخدام Postman) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (اختبار الخادم باستخدام Postman) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على اختبار الخادم باستخدام Postman",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (اختبار الخادم باستخدام Postman) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين اختبار الخادم باستخدام Postman\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: اختبار الخادم باستخدام Postman...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    }
  ]
};

export default SECTION_7;
