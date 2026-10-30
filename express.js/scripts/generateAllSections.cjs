const fs = require('fs');
const path = require('path');

const rawPath = path.join(__dirname, '..', 'src', 'data', 'roadmapRaw.json');
const sectionsData = JSON.parse(fs.readFileSync(rawPath, 'utf8'));

const sectionsDir = path.join(__dirname, '..', 'src', 'data', 'sections');
if (!fs.existsSync(sectionsDir)) {
  fs.mkdirSync(sectionsDir, { recursive: true });
}

// قاموس موسع للمفاهيم والمصطلحات والتشبيهات في Express.js
function getDomainContext(secId, topicTitle, subTitle) {
  const t = subTitle.toLowerCase();
  const m = topicTitle.toLowerCase();

  // فحص الكلمات المفتاحية
  if (t.includes('req') || t.includes('request') || t.includes('body') || t.includes('query') || t.includes('param') || t.includes('header')) {
    return {
      domain: 'request',
      term: 'Request (req)',
      pronun: 'ريكويست',
      meaning: 'كائن الطلب القادم من المتصفح حاملاً البيانات والرؤوس والمعاملات',
      analogy: 'يشبه استمارة الطلب التي يملؤها الزبون في المطعم، يحدد فيها طلبه (Body)، رقم طاولته (Params)، وأي إضافات خاصة (Query).',
      why: 'نحتاجه لقراءة وفحص كل ما يرسله العميل للخادم من معطيات وبيانات لنتخذ القرار المناسب بشأنها.',
      syntax: `// قراءة بيانات الطلب في Express\napp.post('/api/users/:id', (req, res) => {\n  const userId = req.params.id;      // المعاملات في الرابط\n  const query = req.query.filter;     // معلمات الاستعلام\n  const { name, email } = req.body;   // البيانات المرسلة\n  const token = req.headers.authorization; // ترويسة المصادقة\n});`,
      simpleCode: `// 1. استيراد express\nimport express from 'express';\n// 2. إنشاء التطبيق وتفعيل قراءة JSON\nconst app = express();\napp.use(express.json());\n\n// 3. معالجة طلب يقرأ بيانات req\napp.get('/info', (req, res) => {\n  // قراءة معلومات الطلب\n  const userAgent = req.get('User-Agent');\n  // إرجاع النتيجة\n  res.json({ client: userAgent, message: 'تم استلام الطلب' });\n});`,
      advancedCode: `// معالجة متقدمة لبيانات الطلب مع التحقق والتأمين\nimport express from 'express';\n\nconst app = express();\napp.use(express.json({ limit: '1mb' })); // حماية الخادم من الحزم الضخمة\n\napp.post('/api/orders/:orderId', (req, res) => {\n  // 1. استخراج المعاملات ورقم الطلب\n  const { orderId } = req.params;\n  // 2. استخراج خيارات التصفية أو الترتيب\n  const { priority = 'normal' } = req.query;\n  // 3. قراءة بيانات السلة\n  const { items, total } = req.body;\n\n  // 4. الرد بحالة 200 وبيانات منظمة\n  res.status(200).json({\n    success: true,\n    orderId,\n    priority,\n    receivedItems: items?.length || 0,\n    timestamp: new Date().toISOString()\n  });\n});`,
      outputExp: 'يقوم الخادم باستخراج البيانات وتفكيكها من كائن req، ثم يعيد استجابة بصيغة JSON تؤكد معالجة الطلب بنجاح مع الحالة 200.',
      commonWrong: 'محاولة قراءة req.body دون تفعيل وسيط express.json() في بداية التطبيق فيظهر undefined.',
      commonRight: 'إضافة app.use(express.json()) قبل تعريف المسارات التي تستقبل بيانات POST أو PUT.',
      commonReason: 'افتراضياً لا يقوم Express بتحليل جسم الطلب القادم بصيغة JSON إلا بعد تمريره على الوسيط المخصص.',
      quizQ: 'ماذا سيحدث لو حاولت قراءة req.body دون استدعاء app.use(express.json())؟',
      quizOptions: ['ستكون قيمة req.body غير معرفة (undefined)', 'سيتوقف خادم Node.js عن العمل تماماً', 'سيقوم Express بتحويلها تلقائياً إلى نص', 'سيتم إرجاع خطأ 404 Not Found'],
      quizCorrect: 0,
      quizExp: 'بدون express.json()، يظل دفق البيانات غير مفسر وتكون قيمة req.body غير معرفة undefined.'
    };
  }

  if (t.includes('res') || t.includes('response') || t.includes('send') || t.includes('json') || t.includes('status') || t.includes('download') || t.includes('cookie') || t.includes('redirect')) {
    return {
      domain: 'response',
      term: 'Response (res)',
      pronun: 'ريسبونس',
      meaning: 'كائن الاستجابة الذي يتحكم فيما يعود للعميل من بيانات وحالات ورؤوس',
      analogy: 'يشبه طبق الطعام الذي يقدمه النادل للزبون مع الفاتورة وحالة الطلب (جاهز، نفد، يحتاج وقتاً).',
      why: 'نحتاجه لإنهاء دورة الطلب (Request-Response Cycle) وإعادة البيانات المطلوبة أو التوجيه لصفحة أخرى.',
      syntax: `// إرسال استجابة برمجية مهيكلة\nres.status(200).json({\n  success: true,\n  message: 'تمت العملية بنجاح',\n  data: { ... }\n});`,
      simpleCode: `// 1. استيراد إكسبريس\nimport express from 'express';\nconst app = express();\n\n// 2. مسار يرسل استجابة JSON برمز الحالة 200\napp.get('/status', (req, res) => {\n  // إرسال الرد وإغلاق دورة الطلب\n  res.status(200).json({ status: 'Online', uptime: process.uptime() });\n});`,
      advancedCode: `// إرسال استجابات متقدمة (تنزيل ملفات، تعيين كوكيز، وتحديد الترويسات)\nimport express from 'express';\nconst app = express();\n\napp.get('/api/report/download', (req, res) => {\n  // 1. تعيين كوكيز آمنة للمتصفح\n  res.cookie('downloaded', 'true', { httpOnly: true, secure: true, maxAge: 3600000 });\n  // 2. تعيين ترويسات التخزين المؤقت\n  res.setHeader('Cache-Control', 'no-store');\n  // 3. إرجاع النتيجة أو الملف بصيغة JSON\n  res.status(200).json({\n    success: true,\n    downloadUrl: '/files/annual-report.pdf',\n    generatedAt: new Date().toISOString()\n  });\n});`,
      outputExp: 'يرسل الخادم استجابة برأس HTTP 200 OK، ويُرفق كائن JSON بالبيانات، ويثبت الكوكيز في متصفح العميل.',
      commonWrong: 'استدعاء res.json() أو res.send() مرتين لنفس الطلب، مما يسبب خطأ Cannot set headers after they are sent.',
      commonRight: 'استخدام return res.json(...) لضمان إنهاء تنفيذ الدالة فور إرسال الاستجابة الأولى.',
      commonReason: 'بروتوكول HTTP يسمح بإرسال استجابة واحدة وترويسة واحدة فقط لكل طلب.',
      quizQ: 'ما هو الخطأ الذي يحدث عند استدعاء res.send() مرتين لنفس الطلب؟',
      quizOptions: ['Cannot set headers after they are sent to the client', 'ReferenceError: res is not defined', 'UnhandledPromiseRejection', 'Database connection timeout'],
      quizCorrect: 0,
      quizExp: 'عند إرسال الرأس للمتصفح لا يمكن تغييره أو إرسال استجابة أخرى لنفس الطلب.'
    };
  }

  if (t.includes('route') || t.includes('router') || t.includes('مسار') || t.includes('routing') || t.includes('get') || t.includes('post') || t.includes('delete') || t.includes('put') || t.includes('patch')) {
    return {
      domain: 'routing',
      term: 'Router & Routes',
      pronun: 'راوتر ومسارات',
      meaning: 'نظام توجيه الطلبات الواردة إلى الدوال المخصصة لمعالجتها بناءً على الرابط ونوع الطلب',
      analogy: 'يشبه مفترق الطرق أو لوحة التوجيه في محطة القطارات؛ توجه كل مسافر إلى الرصيف المخصص لرحلته بدقة.',
      why: 'نحتاجه لتنظيم عناوين الـ API وفصل مسارات المستخدمين والمنتجات والمدفوعات في ملفات منفصلة سهلة الصيانة.',
      syntax: `// إنشاء موجه مسارات منفصل\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.route('/items')\n  .get(getItemsHandler)\n  .post(createItemHandler);\n\nexport default router;`,
      simpleCode: `// 1. استيراد Express وإنشاء موجه\nimport { Router } from 'express';\nconst router = Router();\n\n// 2. تعريف مسار GET\nrouter.get('/ping', (req, res) => {\n  // الرد على فحص الاتصال\n  res.send('pong');\n});\n\nexport default router;`,
      advancedCode: `// تنظيم المسارات المتقدمة مع الربط المتسلسل والتحقق\nimport { Router } from 'express';\nconst router = Router();\n\n// توجيه مركب لمعالجة مسار بمعامل ديناميكي\nrouter.route('/users/:userId')\n  .get((req, res) => {\n    res.json({ id: req.params.userId, name: 'مستخدم تجريبي' });\n  })\n  .put((req, res) => {\n    res.json({ message: \`تم تحديث المستخدم \${req.params.userId}\` });\n  })\n  .delete((req, res) => {\n    res.status(204).send();\n  });\n\nexport default router;`,
      outputExp: 'يوفر نظام التوجيه مرونة عالية لربط كل عملية (GET, PUT, DELETE) بدالتها الخاصة مع قراءة المتغيرات من الرابط.',
      commonWrong: 'كتابة جميع مسارات التطبيق في ملف app.js الرئيسي مما يجعله معقداً وغير قابل للصيانة.',
      commonRight: 'تقسيم المسارات إلى وحدات داخل مجلد routes/ واستدعاؤها باستخدام app.use("/api/users", userRoutes).',
      commonReason: 'فصل الاهتمامات (Separation of Concerns) هو المبدأ الأساسي لكتابة شفرة نظيفة وقابلة للتوسع.',
      quizQ: 'ما هي الطريقة القياسية لإنشاء موجه مسارات فرعي في Express.js؟',
      quizOptions: ['express.Router()', 'express.createRoute()', 'express.newRouteGroup()', 'express.pathManager()'],
      quizCorrect: 0,
      quizExp: 'الدالة express.Router() تنشئ كائن موجه مستقل يمكن عزله في ملف منفصل ودمجه في التطبيق الرئيسي.'
    };
  }

  if (t.includes('middleware') || t.includes('وسيط') || t.includes('next') || t.includes('cors') || t.includes('morgan') || t.includes('helmet')) {
    return {
      domain: 'middleware',
      term: 'Middleware',
      pronun: 'ميدل وير',
      meaning: 'دالة وسيطة تعترض الطلب قبل وصوله إلى معالج المسار، ولها صلاحية تعديله أو رفضه أو تسجيله',
      analogy: 'يشبه ضابط الجوازات في المطار؛ يقف بين وصولك للطائرة وفحص تذكرتك وهويتك قبل السماح لك بالمرور.',
      why: 'نحتاجه للتحقق من الصلاحيات والمصادقة، تسجيل السجلات، ضغط البيانات، وتأمين الخادم دون تكرار الكود في كل مسار.',
      syntax: `// بنية الدالة الوسيطة\nconst myMiddleware = (req, res, next) => {\n  // 1. فحص أو تعديل الطلب\n  req.customTime = Date.now();\n  // 2. تمرير التحكم للخطوة التالية\n  next();\n};`,
      simpleCode: `// 1. تعريف وسيط بسيط لتسجيل الطلبات\nconst loggerMiddleware = (req, res, next) => {\n  // طباعة نوع الطلب والمسار\n  console.log(\`[\${req.method}] \${req.url}\`);\n  // الانتقال للوسيط أو المسار التالي\n  next();\n};\n\n// 2. تطبيقه على التطبيق بالكامل\napp.use(loggerMiddleware);`,
      advancedCode: `// وسيط مخصص للتحقق من ترويسة الأمان ومعدل الطلبات\nexport const verifyApiKey = (req, res, next) => {\n  // 1. استخراج المفتاح من الترويسات\n  const apiKey = req.get('x-api-key');\n  \n  // 2. التحقق من وجوده وصحته\n  if (!apiKey || apiKey !== process.env.API_SECRET_KEY) {\n    return res.status(401).json({\n      success: false,\n      error: 'مفتاح API غير صالح أو غير مصرح به'\n    });\n  }\n\n  // 3. تمرير الطلب بأمان\n  next();\n};`,
      outputExp: 'يمر الطلب عبر الوسيط، فإذا تحققت الشروط يتم استدعاء next() ليصل إلى معالج المسار، وإلا يُرفض فوراً برمز 401.',
      commonWrong: 'نسيان استدعاء next() وعدم إرسال استجابة، مما يؤدي إلى تعليق الطلب للأبد (Request Hang).',
      commonRight: 'التأكد دائماً من إنهاء الوسيط إما باستدعاء next() أو إرسال استجابة res.status(...).json(...).',
      commonReason: 'خادم Express ينتظر استدعاء next() لينتقل للوسيط التالي، وبدونه يتوقف المسار حتى انتهاء مهلة الاتصال Timeout.',
      quizQ: 'ماذا يحدث إذا لم تستدعِ next() ولم تُرسل استجابة في دالة الوسيط Middleware؟',
      quizOptions: ['يتعلق الطلب ويظل المتصفح ينتظر حتى انتهاء المهلة (Timeout)', 'يتم تحويل الطلب تلقائياً إلى الصفحة الرئيسية', 'يُرمى خطأ SyntaxError في الطرفية', 'يكمل الخادم تنفيذه بشكل طبيعي'],
      quizCorrect: 0,
      quizExp: 'عدم استدعاء next() وعدم إرسال رد يترك الطلب معلقاً في الذاكرة دون إغلاق دورة الاستجابة.'
    };
  }

  if (t.includes('error') || t.includes('خطأ') || t.includes('استثناء') || t.includes('catch') || t.includes('exception')) {
    return {
      domain: 'errors',
      term: 'Error Handling',
      pronun: 'إيرور هاندلينج',
      meaning: 'الآلية البرمجية لاكتشاف وتصيد الأخطاء ومنع انهيار الخادم وإرجاع رسالة مفهومة للمستخدم',
      analogy: 'يشبه وسائد الأمان والمكابح المانعة للانزلاق في السيارة؛ تتدخل فوراً عند حدوث طارئ لحماية الركاب من الاصطدام.',
      why: 'نحتاجه لمنع توقف الخادم عند حدوث خطأ غير متوقع، ولحماية البيانات الحساسة من الظهور للعميل في شاشة المتصفح.',
      syntax: `// وسيط معالجة الأخطاء العام (مكون من 4 معاملات دائماً)\napp.use((err, req, res, next) => {\n  const statusCode = err.statusCode || 500;\n  res.status(statusCode).json({\n    success: false,\n    error: err.message || 'حدث خطأ غير متوقع في الخادم'\n  });\n});`,
      simpleCode: `// 1. وسيط لاصطياد الأخطاء في Express\napp.use((err, req, res, next) => {\n  // طباعة الخطأ للمطور في السجلات\n  console.error('خطأ تم رصده:', err.message);\n  // إرجاع رد آمن للمستخدم\n  res.status(500).json({ error: 'عذراً، حدث خطأ داخلي' });\n});`,
      advancedCode: `// فئة مخصصة للأخطاء ووسيط عام احترافي\nexport class AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n    this.isOperational = true; // خطأ تشغيلي متوقع\n    Error.captureStackTrace(this, this.constructor);\n  }\n}\n\n// وسيط الأخطاء العام\napp.use((err, req, res, next) => {\n  const status = err.statusCode || 500;\n  res.status(status).json({\n    status: 'error',\n    message: err.message,\n    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })\n  });\n});`,
      outputExp: 'يتم التقاط الخطأ التشغيلي بواسطة الوسيط العام ذي الـ 4 معاملات، وتنسيق رد JSON يحتوي على رسالة الخطأ ورمز الحالة 4xx أو 500.',
      commonWrong: 'تعريف وسيط الأخطاء بـ 3 معاملات فقط (req, res, next)، فيتعامل معه Express كوسيط عادي وليس كمعالج أخطاء.',
      commonRight: 'كتابة الـ 4 معاملات دائماً (err, req, res, next) حتى لو لم تستخدم next، ليتعرف Express عليه كـ Error Handler.',
      commonReason: 'يعتمد محرك Express على خاصية دالة fn.length لمعرفة ما إذا كانت معالجة أخطاء (4 معاملات) أم وسيطاً عادياً.',
      quizQ: 'كم عدد المعاملات الإلزامية التي يجب أن يقبلها وسيط معالجة الأخطاء في Express؟',
      quizOptions: ['4 معاملات (err, req, res, next)', 'معاملان فقط (req, res)', '3 معاملات (req, res, next)', 'معامل واحد (error)'],
      quizCorrect: 0,
      quizExp: 'يجب أن يقبل 4 معاملات بالضبط حتى يميزه Express عن الوسائط العادية عبر fn.length === 4.'
    };
  }

  if (t.includes('auth') || t.includes('jwt') || t.includes('token') || t.includes('bcrypt') || t.includes('مصادقة') || t.includes('كلمة مرور') || t.includes('صلاحية') || t.includes('role') || t.includes('rbac')) {
    return {
      domain: 'auth',
      term: 'Authentication & JWT',
      pronun: 'أوثينتيكيشن وجيه-دبليو-تي',
      meaning: 'التحقق من هوية المستخدم والتأكد من هويته وصلاحياته للوصول للموارد المحمية',
      analogy: 'يشبه بطاقة الصعود للطائرة (Boarding Pass) المشفرة بالباركود؛ تثبت هويتك ورقم مقعدك وتسمح لك بالدخول لبوابة محددة.',
      why: 'نحتاجه لتأمين بيانات المستخدمين وحظر المتطفلين وفصل صلاحيات المشرفين عن المستخدمين العاديين.',
      syntax: `// توليد والتحقق من رموز JWT\nimport jwt from 'jsonwebtoken';\n\n// إنشاء التوكن\nconst token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });\n// التحقق من التوكن\nconst decoded = jwt.verify(token, process.env.JWT_SECRET);`,
      simpleCode: `// 1. وسيط حماية المسارات برمز JWT\nimport jwt from 'jsonwebtoken';\n\nconst authMiddleware = (req, res, next) => {\n  // قراءة التوكن من ترويسة الطلب\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'يرجى تسجيل الدخول أولاً' });\n  \n  try {\n    // فك التشفير والتأكد من الصلاحية\n    req.user = jwt.verify(token, 'SECRET_KEY');\n    next();\n  } catch (err) {\n    res.status(403).json({ error: 'رمز الدخول غير صالح أو منتهي الصلاحية' });\n  }\n};`,
      advancedCode: `// نظام مصادقة وصلاحيات متكامل (RBAC)\nexport const authorizeRoles = (...roles) => {\n  return (req, res, next) => {\n    // 1. التحقق من وجود المستخدم وصلاحيته\n    if (!req.user || !roles.includes(req.user.role)) {\n      return res.status(403).json({\n        success: false,\n        message: 'ليس لديك الصلاحية الكافية للقيام بهذا الإجراء'\n      });\n    }\n    // 2. السماح بالمرور للمسار الإداري\n    next();\n  };\n};`,
      outputExp: 'يقوم النظام بفك تشفير توكن JWT، والتحقق من التوقيع الرقمي وصلاحية الوقت، ثم يرفق كائن user بالطلب ليستخدمه المعالج.',
      commonWrong: 'تخزين كلمات المرور بصيغة نص عادي (Plain Text) دون تشفيرها باستخدام مكتبة تشفير مثل bcryptjs أو argon2.',
      commonRight: 'تشفير كلمة المرور عبر bcrypt.hash(password, 12) قبل حفظها في قاعدة البيانات ومقارنتها بـ bcrypt.compare.',
      commonReason: 'تخزين كلمات المرور بدون تشفير يعتبر كارثة أمنية كبرى تكشف أسرار المستخدمين في حال حدوث أي تسريب للبيانات.',
      quizQ: 'ما هي الخوارزمية القياسية لتشفير وتأمين كلمات المرور في Node.js و Express؟',
      quizOptions: ['Bcrypt أو Argon2', 'Base64 Encoding', 'MD5 Hash', 'JSON.stringify'],
      quizCorrect: 0,
      quizExp: 'Bcrypt وArgon2 هما المعيار العالمي لتشفير كلمات المرور عبر التمليح الصارم Slow Salted Hashing.'
    };
  }

  if (t.includes('mongo') || t.includes('mongoose') || t.includes('sql') || t.includes('prisma') || t.includes('postgres') || t.includes('database') || t.includes('قاعدة بيانات')) {
    return {
      domain: 'database',
      term: 'Database Integration',
      pronun: 'داتابيز إنتجريشن',
      meaning: 'ربط خادم Express بمستودع بيانات دائم (SQL أو NoSQL) لحفظ واسترجاع المعلومات بكفاءة وأمان',
      analogy: 'يشبه خزانة السجلات والأرشيف المركزي لشركة ضخمة؛ يستعلم منها الموظف في ثوانٍ معدودة ويحفظ فيها كل معاملة جديدة.',
      why: 'نحتاجه للاحتفاظ ببيانات المستخدمين والطلبات والمنتجات دائماً حتى بعد إعادة تشغيل الخادم.',
      syntax: `// ربط قاعدة البيانات والتعامل مع النماذج\nimport mongoose from 'mongoose';\nawait mongoose.connect(process.env.DATABASE_URL);\n\n// إنشاء نموذج بيانات\nconst User = mongoose.model('User', new mongoose.Schema({ name: String, email: String }));`,
      simpleCode: `// 1. استعلام بسيط لجلب البيانات من قاعدة البيانات\napp.get('/api/users', async (req, res, next) => {\n  try {\n    // جلب المستخدمين بدون إظهار كلمات المرور\n    const users = await User.find().select('-password');\n    // إرجاع النتيجة\n    res.status(200).json({ success: true, count: users.length, data: users });\n  } catch (error) {\n    next(error);\n  }\n});`,
      advancedCode: `// استعلام متقدم مع تصفية وترتيب وتقسيم صفحات (Pagination)\napp.get('/api/products', async (req, res, next) => {\n  try {\n    const page = parseInt(req.query.page, 10) || 1;\n    const limit = parseInt(req.query.limit, 10) || 10;\n    const skip = (page - 1) * limit;\n\n    const [products, total] = await Promise.all([\n      Product.find({ isAvailable: true }).skip(skip).limit(limit).sort({ createdAt: -1 }),\n      Product.countDocuments({ isAvailable: true })\n    ]);\n\n    res.status(200).json({\n      success: true,\n      pagination: { total, page, pages: Math.ceil(total / limit) },\n      data: products\n    });\n  } catch (err) {\n    next(err);\n  }\n});`,
      outputExp: 'يقوم الخادم بتنفيذ الاستعلام بشكل غير متزامن واسترجاع البيانات من قاعدة البيانات وإرجاعها في بنية JSON موحدة.',
      commonWrong: 'إجراء استعلامات SQL عبر دمج النصوص مباشرة (String Concatenation)، مما يعرض الخادم لثغرة SQL Injection.',
      commonRight: 'استخدام الاستعلامات ذات المعاملات (Parameterized Queries) أو أدوات الـ ORM مثل Prisma و Mongoose.',
      commonReason: 'الاستعلامات المعلمة تفصل منطق كود SQL عن مدخلات المستخدم تماماً وتمنع حقن أي كود خبيث.',
      quizQ: 'كيف نحمي خادم Express من ثغرات حقن الاستعلامات SQL / NoSQL Injection؟',
      quizOptions: ['باستخدام Parameterized Queries واستخدام ORM حديث مع التحقق من المدخلات', 'بإرسال الاستعلامات عبر GET فقط', 'بتحويل قاعدة البيانات إلى ملف نصي', 'بتعطيل منفذ قاعدة البيانات'],
      quizCorrect: 0,
      quizExp: 'استخدام أدوات ORM والاستعلامات المعلمة يمنع اختراق الشفرة بتنظيف وفصل أوامر SQL عن القيم المدخلة.'
    };
  }

  // سياق افتراضي فائق الدقة لـ Express
  return {
    domain: 'general_express',
    term: subTitle.split(' ')[0] || 'Express.js Core',
    pronun: 'إكسبريس كور',
    meaning: 'أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js',
    analogy: 'يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.',
    why: 'نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.',
    syntax: `// تطبيق معياري لمفهوم ${subTitle}\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log("تنفيذ: ${subTitle}");\n  next();\n});`,
    simpleCode: `// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: ${subTitle}\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: "${subTitle}", status: "يعمل بنجاح" });\n});`,
    advancedCode: `// نموذج تطبيقي متقدم لـ ${subTitle} في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: "${subTitle}", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});`,
    outputExp: `عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (${subTitle}) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.`,
    commonWrong: 'إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.',
    commonRight: 'اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.',
    commonReason: 'الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج.',
    quizQ: `ما الهدف الأساسي من تطبيق مفهوم (${subTitle}) في مشاريع Express.js؟`,
    quizOptions: ['رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام', 'إجبار الخادم على العمل كواجهة أمامية فقط', 'الاستغناء عن Node.js تماماً', 'حظر استقبال أي طلبات من المتصفحات'],
    quizCorrect: 0,
    quizExp: `تطبيق (${subTitle}) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة.`
  };
}

// دالة بناء تفاصيل الدرس الفردي
function buildSubtopicLesson(secId, topicTitle, sub) {
  const ctx = getDomainContext(secId, topicTitle, sub.title);
  const subId = `s${secId}-m${sub.letter || '1'}-${sub.title.slice(0, 15).replace(/\s+/g, '_')}`;

  const englishTitle = sub.title
    .replace(/[؟?]/g, '')
    .replace(/ما هو |ما هي |مفهوم |الفرق بين |استخدام |إنشاء |إدارة |تنفيذ /g, '')
    .trim();

  return {
    id: subId,
    letter: sub.letter,
    title: sub.title,
    englishTitle,
    definition: `يُعد مفهوم (${sub.title}) من الركائز الجوهرية في ${topicTitle} ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.`,
    analogy: ctx.analogy,
    why: ctx.why,
    terms: [
      { term: ctx.term, pronunciation: ctx.pronun, meaning: ctx.meaning },
      { term: "Middleware", pronunciation: "ميدل وير", meaning: "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج" },
      { term: "Status Code", pronunciation: "ستاتس كود", meaning: "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)" }
    ],
    syntax: ctx.syntax,
    simpleCode: ctx.simpleCode,
    advancedCode: ctx.advancedCode,
    outputExplanation: ctx.outputExp,
    commonMistakes: [
      {
        wrong: ctx.commonWrong,
        right: ctx.commonRight,
        reason: ctx.commonReason
      }
    ],
    bestPractices: [
      "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
      "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
      "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
    ],
    infographic: {
      badge: `درس: ${sub.title}`,
      title: sub.title,
      icon: "Layers",
      colors: "from-amber-500 to-yellow-600",
      steps: [
        { title: "استقبال الطلب", desc: "اعتراض الطلب وقراءة المدخلات والترويسات بأمان" },
        { title: "المعالجة البرمجية", desc: "تنفيذ منطق الأعمال والتحقق من القواعد المحددة" },
        { title: "إرجاع الاستجابة", desc: "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح" }
      ],
      summary: `تطبيق (${sub.title}) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل.`
    },
    quiz: {
      question: ctx.quizQ,
      options: ctx.quizOptions,
      correctIndex: ctx.quizCorrect,
      explanation: ctx.quizExp
    },
    exercise: {
      title: `تمرين تطبيقي على: ${sub.title}`,
      task: `قم بكتابة مسار في Express.js يطبق مفهوم (${sub.title})، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.`,
      hints: [
        "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
        "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
      ],
      solution: `// الحل النموذجي لتمرين ${sub.title}\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: "${sub.title}", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});`,
      solutionExplanation: "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
    }
  };
}

console.log('Building all 27 sections...');
const sectionImports = [];
const sectionKeys = [];

sectionsData.forEach((sec) => {
  const secNumber = String(sec.id).padStart(2, '0');
  const sectionFileName = `section${sec.id}.js`;
  const sectionFilePath = path.join(sectionsDir, sectionFileName);

  const topics = sec.mainTopics.map((topic, tIdx) => {
    const subtopics = topic.subtopics.map((sub) => {
      return buildSubtopicLesson(sec.id, topic.title, sub);
    });

    return {
      id: `${sec.id}.${tIdx + 1}`,
      title: topic.title,
      englishTitle: topic.title.replace(/[؟?]/g, '').trim(),
      subtopics
    };
  });

  const sectionObj = {
    id: sec.id,
    number: secNumber,
    title: sec.title,
    englishTitle: `Section ${sec.id}: ${sec.title}`,
    badge: sec.id <= 3 ? "مبتدئ" : sec.id <= 10 ? "متوسط" : sec.id <= 18 ? "متقدم" : "محترف",
    description: `منهج تعليمي شامل يغطي ${sec.title} بدقة تفصيلية وأمثلة عملية وتطبيق مباشر في Express.js.`,
    topics
  };

  const fileContent = `// src/data/sections/section${sec.id}.js
// ${sec.title}
export const SECTION_${sec.id} = ${JSON.stringify(sectionObj, null, 2)};

export default SECTION_${sec.id};
`;

  fs.writeFileSync(sectionFilePath, fileContent, 'utf-8');
  console.log(`✓ تم إنشاء القسم ${sec.id}: ${sec.title} (${topics.length} موضوعات)`);

  sectionImports.push(`import { SECTION_${sec.id} } from './section${sec.id}.js';`);
  sectionKeys.push(`  ${sec.id}: SECTION_${sec.id}`);
});

// ملف التصدير العام index.js
const indexPath = path.join(sectionsDir, 'index.js');
const indexContent = `// src/data/sections/index.js
// سجل ومجمع كافة الأقسام التعليمية الـ 27 لخريطة طريق Express.js

${sectionImports.join('\n')}

export const SECTIONS_MAP = {
${sectionKeys.join(',\n')}
};

export const AVAILABLE_SECTIONS = [
${sectionsData.map(s => `  SECTION_${s.id}`).join(',\n')}
];

export function getSectionById(id) {
  return SECTIONS_MAP[Number(id)] || SECTIONS_MAP[1];
}
`;

fs.writeFileSync(indexPath, indexContent, 'utf-8');
console.log('✓ تم إنشاء ملف الفهرس العام: src/data/sections/index.js بنجاح!');
