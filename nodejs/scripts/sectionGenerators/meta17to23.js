// scripts/sectionGenerators/meta17to23.js
// بيانات الأقسام 17 إلى 23: الملخصات والقواعد الذهبية والبطاقات المرجعية والمشاريع المصغرة

export const META_17_TO_23 = {
  17: {
    summary: {
      overview: "يشرح هذا القسم كيفية قياس وتحسين أداء تطبيقات Node.js والتوسع الأفقي والعمودي لتحمل ملايين الطلبات المتزامنة. يغطي استغلال كافة أنوية المعالج عبر Cluster Module ومدير العمليات PM2، تشغيل العمليات الحسابية الشاقة عبر Worker Threads دون حظر الـ Event Loop، كشف ومعالجة تسريب الذاكرة (Memory Leaks) عبر Heap Snapshots، تطبيق ضغط الاستجابات (Gzip/Brotli)، واستراتيجيات التوسع الأفقي (Horizontal Scaling).",
      goldenRules: [
        {
          title: "استغل كافة أنوية المعالج عبر Cluster Module أو PM2",
          desc: "يعمل Node.js افتراضياً على نواة واحدة فقط؛ لذا شغل مثيلاً لكل نواة (Fork per CPU Core) لمضاعفة طاقة استيعاب السيرفر على الفور."
        },
        {
          title: "فوض المعالجة الحسابية الثقيلة للـ Worker Threads",
          desc: "استخدم وحدة node:worker_threads للعمليات التي تستهلك المعالج (CPU-Intensive) مثل ضغط الملفات والتشفير والذكاء الاصطناعي لحماية المسار الرئيسي."
        },
        {
          title: "احذر من مسببات تسريب الذاكرة (Memory Leaks)",
          desc: "المتغيرات العامة (Globals) والمستمعات غير المنتهية (Uncleaned Event Listeners) والكاش غير المحدود تؤدي لامتلاء الذاكرة وانهيار السيرفر."
        },
        {
          title: "اضبط ضغط الاستجابات عبر وسيط compression (Brotli / Gzip)",
          desc: "تفعيل ضغط الاستجابات يقلل حجم شحنات الـ JSON بنسبة تصل إلى 70%، مما يسرع وصول البيانات للعميل ويقلل تكلفة الباندويث."
        },
        {
          title: "استخدم التخزين المؤقت للبيانات المتكررة (Multi-Tier Caching)",
          desc: "ادمج كاش الذاكرة المحلي فائق السرعة مع كاش Redis الموزع لتقليل الحمل على قواعد البيانات إلى أدنى حد ممكن."
        },
        {
          title: "فحص وتحديد عنق الزجاجة عبر Profiling و Flamegraphs",
          desc: "استخدم علم قياس الأداء لتحديد الدوال البطيئة بدقة عبر V8 CPU Profiler بدلاً من التخمين العشوائي."
        },
        {
          title: "التوسع الأفقي (Horizontal Scaling) يتطلب خوادم عديمة الحالة (Stateless)",
          desc: "لا تخزن الجلسات أو الملفات في ذاكرة السيرفر المحلي؛ خزن الجلسات في Redis والملفات في S3 لتتمكن من إضافة وحذف الخوادم بمرونة خلف الـ Load Balancer."
        },
        {
          title: "ضبط حجم الـ Thread Pool لوحدة libuv في العمليات الكثيفة",
          desc: "تعتمد عمليات التشفير ونظام الملفات على 4 مسارات افتراضية؛ ارفع UV_THREADPOOL_SIZE إلى 8 أو 16 في السيرفرات القوية لتفادي التكدس."
        }
      ],
      keyTakeaways: [
        "إتقان تشغيل وإدارة مجمعات العمليات عبر Cluster و PM2 في بيئة الإنتاج.",
        "القدرة على عزل وتشغيل العمليات الحسابية الشاقة عبر Worker Threads بكفاءة.",
        "تشخيص وإصلاح تسريب الذاكرة وتحليل لقطات Heap Snapshots بدقة.",
        "تحقيق سرعات استجابة فائقة وتقليل زمن الكمون (Latency) في الخوادم الكبرى."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لتحسين الأداء والتوسع (Performance & Scaling)",
      entries: [
        { category: "PM2 Cluster", commandOrSyntax: "pm2 start app.js -i max", description: "تشغيل التطبيق في وضع الـ Cluster وتوليد عمال بعدد أنوية المعالج المتاحة", type: "cli" },
        { category: "PM2 Monitor", commandOrSyntax: "pm2 monit / pm2 status", description: "مراقبة استهلاك المعالج والذاكرة وحالة كل مثيل في الوقت الحقيقي", type: "cli" },
        { category: "Cluster Module", commandOrSyntax: "import cluster from 'node:cluster'; if (cluster.isPrimary) cluster.fork();", description: "التحكم اليدوي المدمج في تفريع وإدارة العمليات التابعة", type: "code" },
        { category: "Worker Threads", commandOrSyntax: "const worker = new Worker('./worker.js', { workerData });", description: "تشغيل مسار فرعي حقيقي لمعالجة العمليات الحسابية الشاقة بالخلفية", type: "code" },
        { category: "Worker Messages", commandOrSyntax: "parentPort.postMessage(result); worker.on('message', cb);", description: "تبادل البيانات بين المسار الرئيسي والمسار الفرعي عبر الرسائل", type: "code" },
        { category: "Heap Dump", commandOrSyntax: "import v8 from 'node:v8'; v8.writeHeapSnapshot();", description: "توليد ملف لقطة ذاكرة Heap Snapshot لفحصه في أداة Chrome DevTools", type: "code" },
        { category: "Compression", commandOrSyntax: "import compression from 'compression'; app.use(compression());", description: "تفعيل ضغط Gzip التلقائي لكافة استجابات الـ JSON والنصوص", type: "code" },
        { category: "Thread Pool", commandOrSyntax: "process.env.UV_THREADPOOL_SIZE = '16';", description: "مضاعفة حجم مسارات الخلفية في libuv لتسريع عمليات التشفير والملفات", type: "code" },
        { category: "Keep-Alive", commandOrSyntax: "server.keepAliveTimeout = 65000;", description: "ضبط مهلة الحفاظ على الاتصال متوافقاً مع موازنات الأحمال (Load Balancers)", type: "code" },
        { category: "Memory Limit", commandOrSyntax: "node --max-old-space-size=4096 app.js", description: "رفع الحد الأقصى المسموح به لذاكرة محرك V8 إلى 4 جيجابايت", type: "cli" }
      ]
    },
    miniProject: {
      id: "project-sec-17",
      title: "مشروع عملي: خادم تفريع العمليات والحوسبة المتوازية (Cluster & Worker CPU Engine)",
      description: "بناء خادم ويب يستخدم نمط Cluster لتوزيع الطلبات بين أنوية المعالج، ويفوض مهام التشفير المعقدة إلى مجمع Worker Threads لحماية الـ Event Loop من أي تأخير.",
      difficulty: "خبير",
      techStack: ["Node.js", "node:cluster", "node:worker_threads", "node:os", "Multi-Threading"],
      directoryStructure: `cluster-worker-engine/
├── package.json
├── src/
│   ├── worker.js
│   ├── primary.js
│   └── server.js
└── index.js`,
      codeFiles: [
        {
          filename: "src/worker.js",
          code: `// كود الـ Worker Thread لمعالجة العمليات الحسابية الشاقة
import { parentPort, workerData } from 'node:worker_threads';

// دالة حسابية كثيفة تستهلك المعالج (محاكاة تعدين أو خوارزمية تشفير)
function computeHeavyHash(iterations) {
  let result = 0;
  for (let i = 0; i < iterations; i++) {
    result = (result + Math.sqrt(i) * Math.sin(i)) % 1000000;
  }
  return result;
}

// تنفيذ الحسابات وإرجاع النتيجة للمسار الرئيسي
const start = performance.now();
const computed = computeHeavyHash(workerData.iterations || 10000000);
const durationMs = (performance.now() - start).toFixed(2);

parentPort.postMessage({ success: true, result: computed, durationMs });`,
          explanation: "ينفذ هذا الكود في مسار مستقل بالكامل دون استهلاك وقت المسار الرئيسي لـ Node.js."
        },
        {
          filename: "src/server.js",
          code: `// خادم HTTP يفوض المهام الحسابية لـ Worker Thread
import http from 'node:http';
import { Worker } from 'node:worker_threads';
import path from 'node:path';

export function createFastServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    // مسار سريع لحظي لا يتأثر بالعمليات الأخرى
    if (req.url === '/ping') {
      return res.end(JSON.stringify({ status: 'ok', time: Date.now() }));
    }

    // مسار العمليات الثقيلة: يتم تشغيل Worker مستقل له
    if (req.url === '/compute') {
      const workerPath = path.resolve(process.cwd(), 'src/worker.js');
      const worker = new Worker(workerPath, { workerData: { iterations: 20000000 } });

      worker.on('message', (data) => {
        res.end(JSON.stringify({
          status: 'completed',
          workerData: data,
          message: 'تم الحساب في مسار معزول دون تعطيل باقي المستخدمين ✓'
        }));
      });

      worker.on('error', (err) => {
        res.writeHead(500).end(JSON.stringify({ error: err.message }));
      });
      return;
    }

    res.writeHead(404).end(JSON.stringify({ error: 'المسار غير معروف' }));
  });
}`,
          explanation: "خادم يوضح كيف تظل الطلبات السريعة (/ping) سريعة الاستجابة حتى أثناء تشغيل مسار الحسابات الثقيلة (/compute)."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd cluster-worker-engine",
        "شغل الخادم: node -e \"import('./src/server.js').then(m => m.createFastServer().listen(5000, () => console.log('الخادم يعمل على 5000')))\"",
        "أرسل طلب الحسابات الثقيلة: curl http://localhost:5000/compute",
        "في الوقت نفسه، أرسل طلب /ping وستجده يستجيب في 1ms فورياً دون أي تأخير!"
      ]
    }
  },
  18: {
    summary: {
      overview: "يشرح هذا القسم تكامل خوادم Node.js مع المنظومات والخدمات السحابية الخارجية. يغطي استهلاك واجهات REST و GraphQL عبر مكتبة Axios أو Fetch المدمجة، استقبال ومعالجة إشعارات Webhooks والتحقق من التوقيع الرقمي لمنع التزوير (Signature Verification)، إرسال البريد الإلكتروني عبر Nodemailer، وتكامل نماذج الذكاء الاصطناعي التوليدي (Google Gemini و OpenAI SDKs) مع تطبيق التراجع الأسي (Exponential Backoff) لإعادة المحاولة عند الأخطاء.",
      goldenRules: [
        {
          title: "تحقق دائماً من التوقيع الرقمي للـ Webhook لمنع التزوير",
          desc: "لا تقبل أي طلب Webhook (من Stripe أو PayPal مثلاً) دون فحص ترويسة التوقيع عبر المفتاح السري المشترك (Webhook Secret)."
        },
        {
          title: "استخدم الجسم الخام (Raw Body) للتحقق من تواقيع الـ Webhooks",
          desc: "تحويل الطلب إلى كائن JSON قبل فحص التوقيع يغير ترتيب الحقول ويبطل البصمة التشفيرية؛ احفظ Buffer الشحنة الخام دائماً."
        },
        {
          title: "أرجع رمز النجاح 200 فوراً لمعالج الـ Webhook وعالج الحدث بالخلفية",
          desc: "إذا تأخرت استجابتك لأكثر من 5 ثوانٍ، ستعتبر الخدمة الخارجية أن الخادم معطل وتعيد إرسال الطلب مراراً؛ احفظ الحدث وأجب فوراً بـ 200 OK."
        },
        {
          title: "حدد مهلة زمنية صارمة (Timeout) لكافة طلبات الشبكة الخارجية",
          desc: "لا تترك استدعاءات APIs الخارجية دون timeout محدد (مثل 5000ms)؛ فالخدمة الخارجية البطيئة قد تجمد خادمك وتستهلك مجمع الاتصالات."
        },
        {
          title: "طبق التراجع الأسي (Exponential Backoff with Jitter) عند إعادة المحاولة",
          desc: "عند مواجهة أخطاء الشبكة أو خطأ 429 (Rate Limit)، ضاعف وقت الانتظار بين كل محاولة وأخرى مع إضافة عشوائية بسيطة لمنع التدافع (Thundering Herd)."
        },
        {
          title: "عزل مفاتيح الـ API في متغيرات بيئية وتدويرها عند الاشتباه",
          desc: "لا تضع مفاتيح الذكاء الاصطناعي أو بوابات الدفع في الكود المصدري؛ استخدم مجمع مفاتيح (Key Pool) وآلية تدوير تلقائي للمفاتيح."
        },
        {
          title: "قاطع الدائرة (Circuit Breaker Pattern) لحماية الخادم من التداعيات",
          desc: "إذا فشلت الخدمة الخارجية 5 مرات متتالية، افتح الدائرة وأوقف إرسال الطلبات مؤقتاً لتفادي استنزاف الموارد وإعطاء الخدمة فرصة للتعافي."
        },
        {
          title: "تنسيق وحجب البيانات الحساسة في السجلات (Log Sanitization)",
          desc: "احرص على تنقية سجلات الطلبات من أرقام بطاقات الائتمان والمفاتيح السرية وكلمات المرور قبل طباعتها في ملفات السجلات."
        }
      ],
      keyTakeaways: [
        "التعامل المتقدم مع استدعاءات الشبكة الخارجية وإدارة الأخطاء والمهلات الزمنية.",
        "بناء معمارية استقبال ومعالجة Webhooks مؤمنة تشفيرياً وغير قابلة للاختراق.",
        "إرسال البريد الإلكتروني والإشعارات المنظمة باستخدام قوالب HTML.",
        "دمج وتطويع نماذج الذكاء الاصطناعي التوليدي في تطبيقات Node.js بمرونة واحترافية."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية للتكاملات الخارجية والـ Webhooks والذكاء الاصطناعي",
      entries: [
        { category: "Fetch Timeout", commandOrSyntax: "const res = await fetch(url, { signal: AbortSignal.timeout(5000) });", description: "إرسال طلب خارجي مع إلغاء العملية تلقائياً إذا تجاوزت 5 ثوانٍ", type: "code" },
        { category: "Stripe Webhook", commandOrSyntax: "stripe.webhooks.constructEvent(req.rawBody, sig, secret);", description: "التحقق التشفيري الصارم من صحة طلب الـ Webhook وعدم التلاعب به", type: "code" },
        { category: "Nodemailer", commandOrSyntax: "await transporter.sendMail({ from, to, subject, html });", description: "إرسال رسالة بريد إلكتروني منسقة بتنسيق HTML عبر بروتوكول SMTP", type: "code" },
        { category: "Gemini AI SDK", commandOrSyntax: "const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });", description: "تهيئة نموذج الذكاء الاصطناعي السريع لإجراء محادثات وتوليد شروحات برمجية", type: "code" },
        { category: "Retry Backoff", commandOrSyntax: "const wait = (ms) => new Promise(r => setTimeout(r, ms));", description: "دالة الانتظار الزمني المتزايد بين محاولات استدعاء الخدمات الخارجية", type: "code" },
        { category: "Axios Config", commandOrSyntax: "const client = axios.create({ baseURL, timeout: 4000, headers });", description: "إنشاء عميل Axios مخصص بإعدادات مهلة وترويسات موحدة", type: "code" },
        { category: "HMAC Verify", commandOrSyntax: "crypto.createHmac('sha256', secret).update(body).digest('hex')", description: "توليد بصمة توقيع رقمية لمقارنتها مع ترويسة الـ Webhook المستلمة", type: "code" },
        { category: "Raw Body Hook", commandOrSyntax: "app.use(express.json({ verify: (req, res, buf) => req.rawBody = buf }));", description: "الاحتفاظ بالـ Buffer الأصلي للطلب لاستخدامه في فحص التوقيعات", type: "code" },
        { category: "Rate Limit (429)", commandOrSyntax: "if (err.status === 429) { await rotateApiKey(); }", description: "التقاط تجاوز حد الاستخدام والتبديل التلقائي للمفتاح التالي في المجمع", type: "code" },
        { category: "Event Idempotency", commandOrSyntax: "if (await redis.set(`evt:${event.id}`, '1', 'NX', 'EX', 86400)) {}", description: "منع المعالجة المكررة لنفس حدث الـ Webhook باستخدام قفل Redis الفريد", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-18",
      title: "مشروع عملي: خدمة استقبال الـ Webhooks مع التحقق التشفيري وإعادة المحاولة (Resilient Webhook Hub)",
      description: "بناء واجهة برمجية لاستقبال إشعارات الدفع والـ Webhooks، التحقق من توقيع HMAC الرقمي، منع التكرار (Idempotency)، وإعادة المحاولة التلقائية عند تعطل الخدمات.",
      difficulty: "خبير",
      techStack: ["Node.js", "Express.js", "node:crypto", "HMAC Verification", "Idempotency"],
      directoryStructure: `resilient-webhook-hub/
├── package.json
├── src/
│   ├── verifier.js
│   ├── webhookHandler.js
│   └── index.js
└── README.md`,
      codeFiles: [
        {
          filename: "src/verifier.js",
          code: `// استيراد وحدة التشفير للتحقق من البصمة الرقمية
import crypto from 'node:crypto';

// دالة التحقق من توقيع الـ Webhook المستلم
export function verifyWebhookSignature(payloadRaw, signatureHeader, secretKey) {
  if (!signatureHeader || !payloadRaw) return false;

  // توليد البصمة المتوقعة باستخدام HMAC-SHA256
  const expectedSignature = crypto
    .createHmac('sha256', secretKey)
    .update(payloadRaw)
    .digest('hex');

  // مقارنة آمنة مقاومة لهجمات التوقيت (Timing Attacks)
  try {
    return crypto.timingSafeEqual(
      Buffer.from(signatureHeader, 'utf-8'),
      Buffer.from(expectedSignature, 'utf-8')
    );
  } catch {
    return false;
  }
}`,
          explanation: "تستخدم هذه الوحدة خوارزمية crypto.timingSafeEqual لمقارنة التوقيع الرقمي ومنع هجمات التوقيت."
        },
        {
          filename: "src/index.js",
          code: `// خادم استقبال الـ Webhooks المؤمن
import express from 'express';
import { verifyWebhookSignature } from './verifier.js';

const app = express();
const WEBHOOK_SECRET = "whsec_super_secret_signing_key_2026";

// حفظ الشحنة كـ Buffer خام لفحص التوقيع بدقة
app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf.toString('utf-8');
  }
}));

app.post('/api/webhooks/payment', (req, res) => {
  const signature = req.headers['x-signature-sha256'];
  
  // 1. التحقق من التوقيع الرقمي
  const isValid = verifyWebhookSignature(req.rawBody, signature, WEBHOOK_SECRET);
  if (!isValid) {
    console.warn("⚠️ محاولة احتيال: تم رفض طلب Webhook بتوقيع مزور!");
    return res.status(401).json({ status: 'error', message: 'توقيع أمني غير صالح' });
  }

  // 2. إرجاع استجابة النجاح فوراً
  console.log(\`✓ تم قبول إشعار الدفع بنجاح للطلب: \${req.body.orderId}\`);
  res.status(200).json({ status: 'received' });

  // 3. معالجة الحدث في الخلفية
  setImmediate(() => {
    console.log(\`⚡ [معالجة خلفية] تحديث حالة الفاتورة \${req.body.orderId} إلى PAID\`);
  });
});

console.log("=== خادم الـ Webhook المؤمن جاهز لاستقبال الأحداث الموثقة ===");`,
          explanation: "خادم Express مجهز للتحقق من التوقيع وإرجاع استجابة 200 فورية مع تفويض المعالجة للخلفية."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd resilient-webhook-hub",
        "شغل الخادم: node src/index.js",
        "أرسل طلب Webhook باختبار توقيع حقيقي وشاهد التحقق والرد الفوري الآمن"
      ]
    }
  },
  19: {
    summary: {
      overview: "يشرح هذا القسم مهارات DevOps الأساسية ونشر تطبيقات Node.js في بيئات الإنتاج الحديثة. يغطي بناء وتصغير حاويات Docker باستخدام التجميع متعدد المراحل (Multi-Stage Builds)، إدارة الخدمات عبر Docker Compose، إعداد خوادم Linux وإدارتها عبر systemd، تكوين Nginx كخادم وكيل عكسي (Reverse Proxy) مع دعم شهادات SSL المجانية من Let's Encrypt، وأتمتة خطوط الاختبار والنشر المستمر (CI/CD) عبر GitHub Actions.",
      goldenRules: [
        {
          title: "استخدم Multi-Stage Builds لتصغير حجم صورة Docker بنسبة 80%",
          desc: "قم بتجميع الكود وتثبيت devDependencies في مرحلة البناء (Build Stage)، ثم انقل فقط الملفات المجمعة والـ Production dependencies إلى صورة التشغيل النهائية."
        },
        {
          title: "لا تشغل تطبيق Node.js كمستخدم جذر (Root User) داخل الحاوية",
          desc: "استخدم دائماً التوجيه USER node داخل الـ Dockerfile لحماية الخادم المستضيف من ثغرات الهروب من الحاويات (Container Escapes)."
        },
        {
          title: "احترم إشارات إيقاف النظام (SIGTERM / SIGINT) في الحاوية",
          desc: "شغل التطبيق مباشرة عبر CMD [\"node\", \"dist/index.js\"] وتجنب npm start؛ فالأخير يبتلع إشارات الإيقاف ويمنع الإغلاق السلس للتطبيق."
        },
        {
          title: "ضع Nginx كخادم وكيل عكسي (Reverse Proxy) أمام Node.js دائماً",
          desc: "يتولى Nginx إنهاء تشفير SSL/TLS، ضغط الملفات الثابتة، والحماية من هجمات الإغراق، مما يعفي Node.js من هذه الأعباء."
        },
        {
          title: "لا تضمن ملفات .env أو أسرار المشروع داخل صورة Docker",
          desc: "مرر المتغيرات البيئية وقت التشغيل عبر Docker Compose أو أدوات إدارة الأسرار السحابية (AWS Secrets Manager / Vault)."
        },
        {
          title: "استخدم صور Node.js خفيفة الوزن (Alpine / Slim)",
          desc: "الاعتماد على node:20-alpine يقلل حجم الصورة من 1GB إلى أقل من 150MB، ويسرع وقت النشر ويقلل الثغرات الأمنية في النظام الأساسي."
        },
        {
          title: "أتمتة خط الاختبار والتدقيق في GitHub Actions قبل كل دمج",
          desc: "اضبط سير عمل (Workflow) يقوم بتشغيل npm ci و npm run lint و npm test تلقائياً عند فتح أي Pull Request."
        },
        {
          title: "اضبط فحص الصحة (HEALTHCHECK) داخل Dockerfile",
          desc: "يمكن فحص الصحة منصات الأوركسترا (Docker Swarm / Kubernetes) من معرفة تعطل السيرفر وإعادة تشغيله تلقائياً دون انقطاع الخدمة."
        }
      ],
      keyTakeaways: [
        "بناء حاويات Docker احترافية فائقة الصغر والأمان لتطبيقات Node.js.",
        "تشغيل بيئة محلية متكاملة (App + PostgreSQL + Redis) بنقرة واحدة عبر Docker Compose.",
        "إعداد وتأمين سيرفرات Linux السحابية وتهيئة Nginx مع شهادات التشفير التلقائية.",
        "بناء خطوط أنابيب CI/CD متكاملة لاختبار ونشر التطبيقات دون أي تدخل يدوي."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لـ Docker والنشر و DevOps في Node.js",
      entries: [
        { category: "Docker Build", commandOrSyntax: "docker build -t my-node-app:1.0 .", description: "بناء صورة Docker جديدة للتطبيق مع تحديد الاسم والوسم", type: "cli" },
        { category: "Docker Run", commandOrSyntax: "docker run -d -p 3000:3000 --env-file .env --name app my-node-app:1.0", description: "تشغيل الحاوية في الخلفية مع ربط المنفذ وتمرير المتغيرات البيئية", type: "cli" },
        { category: "Compose Up", commandOrSyntax: "docker compose up -d", description: "تشغيل كافة الخدمات (التطبيق وقاعدة البيانات والكاش) معاً في الخلفية", type: "cli" },
        { category: "Compose Logs", commandOrSyntax: "docker compose logs -f app", description: "متابعة السجلات الحية للحاوية في الطرفية لحظة بلحظة", type: "cli" },
        { category: "Docker Prune", commandOrSyntax: "docker system prune -af --volumes", description: "تنظيف وحذف الحاويات والصور والطبقات غير المستخدمة لتحرير مساحة القرص", type: "cli" },
        { category: "Systemd", commandOrSyntax: "sudo systemctl restart my-node-service", description: "إعادة تشغيل خدمة التطبيق المدارة عبر مدير خدمات لينكس systemd", type: "cli" },
        { category: "Nginx Proxy", commandOrSyntax: "proxy_pass http://localhost:3000; proxy_set_header Host $host;", description: "توجيه طلبات الدومين من منفذ 80/443 إلى تطبيق Node الداخلي", type: "code" },
        { category: "Certbot SSL", commandOrSyntax: "sudo certbot --nginx -d api.mycompany.com", description: "تثبيت وتجديد شهادة التشفير المجانية HTTPS عبر Let's Encrypt آلياً", type: "cli" },
        { category: "GitHub Actions", commandOrSyntax: "on: [push, pull_request] jobs: build: runs-on: ubuntu-latest", description: "تعريف خطة التشغيل التلقائي للاختبارات عند رفع أي كود للمستودع", type: "code" },
        { category: "Health Check", commandOrSyntax: "HEALTHCHECK CMD curl -f http://localhost:3000/health || exit 1", description: "أمر فحص سلامة الحاوية دورياً من قبل مدير النظام", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-19",
      title: "مشروع عملي: حزمة Docker متعددة المراحل و Docker Compose متكاملة (Production Docker Stack)",
      description: "بناء بيئة حاويات كاملة للإنتاج تضم Dockerfile متعدد المراحل فائق الصغر لمشروع Node.js، ملف docker-compose يشغل التطبيق مع PostgreSQL و Redis، وفحص صحة دوري للخدمات.",
      difficulty: "خبير",
      techStack: ["Docker", "Docker Compose", "Multi-Stage Build", "PostgreSQL", "Redis"],
      directoryStructure: `production-docker-stack/
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── package.json
└── src/
    └── index.js`,
      codeFiles: [
        {
          filename: "Dockerfile",
          code: `# المرحلة 1: بناء وتجهيز الاعتماديات
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# تجميع المشروع (إن وجد)
# RUN npm run build

# المرحلة 2: صورة الإنتاج النهائية الخفيفة
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# تثبيت curl لفحص الصحة
RUN apk add --no-cache curl

# نسخ حزم الإنتاج والملفات المجمعة فقط
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --from=builder /app/src ./src

# تشغيل التطبيق كمستخدم عادي غير مميز للأمان
USER node

# المنفذ المستهدف
EXPOSE 3000

# فحص صحة التطبيق كل 30 ثانية
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

# تشغيل التطبيق مباشرة
CMD ["node", "src/index.js"]`,
          explanation: "Dockerfile احترافي يعتمد التجميع متعدد المراحل ومستخدم node غير المميز مع فحص الصحة HEALTHCHECK."
        },
        {
          filename: "docker-compose.yml",
          code: `version: '3.8'

services:
  # خدمة تطبيق Node.js الرئيسي
  api:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: node_production_api
    restart: always
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
      - NODE_ENV=production
      - DATABASE_URL=postgres://admin:secret123@postgres_db:5432/app_db
      - REDIS_URL=redis://redis_cache:6379
    depends_on:
      postgres_db:
        condition: service_healthy
      redis_cache:
        condition: service_started

  # خدمة قاعدة بيانات PostgreSQL
  postgres_db:
    image: postgres:16-alpine
    container_name: postgres_db
    restart: always
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secret123
      POSTGRES_DB: app_db
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U admin -d app_db"]
      interval: 5s
      timeout: 5s
      retries: 5

  # خدمة التخزين المؤقت Redis
  redis_cache:
    image: redis:7-alpine
    container_name: redis_cache
    restart: always
    volumes:
      - redisdata:/data

volumes:
  pgdata:
  redisdata:`,
          explanation: "ملف تكوين يربط تطبيق Node مع قاعدة بيانات PostgreSQL ومخزن Redis مع الحفاظ على البيانات عبر Volumes."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd production-docker-stack",
        "تأكد من تشغيل Docker Desktop على جهازك",
        "شغل الحزم دفعة واحدة: docker compose up --build -d",
        "افحص حالة الحاويات: docker compose ps"
      ]
    }
  },
  20: {
    summary: {
      overview: "يشرح هذا القسم منظومة المراقبة ورصد الأداء واستقرار التطبيقات في بيئات الإنتاج الحية (Observability & Reliability). يغطي التسجيل المهيكل للبيانات بصيغة JSON باستخدام Pino و Winston، استخراج وتصدير المقاييس عبر Prometheus، بناء لوحات المتابعة التفاعلية في Grafana، تطبيق معايير OpenTelemetry للتتبع الموزع (Distributed Tracing)، مسارات فحص السلامة (/healthz)، واستراتيجيات الإغلاق السلس للتطبيق (Graceful Shutdown) دون فقدان طلبات العملاء.",
      goldenRules: [
        {
          title: "التسجيل المهيكل (Structured JSON Logging) إلزامي للإنتاج",
          desc: "تجنب console.log النصي البسيط؛ استخدم Pino لإنتاج سجلات مهيكلة بـ JSON تحوي الختم الزمني، مستوى الخطأ، ومعرف الطلب الفريد (Correlation ID)."
        },
        {
          title: "معرف الطلب الموحد (Correlation / Request ID) لتتبع مسار العملية",
          desc: "ولد معرف UUID لكل طلب وارد ومرره في كافة السجلات والخدمات التابعة؛ هذا يتيح لك البحث عن كل ما جرى لطلب معين بثوانٍ معدودة."
        },
        {
          title: "الإغلاق السلس (Graceful Shutdown) يمنع انقطاع المعاملات الجارية",
          desc: "عند استلام SIGTERM، أوقف قبول الطلبات الجديدة عبر server.close()، انتظر انتهاء الطلبات النشطة، ثم أغلق اتصالات قواعد البيانات بهدوء."
        },
        {
          title: "مسارات فحص السلامة المنفصلة: Liveness و Readiness",
          desc: "وفر مسار /healthz/live للتأكد من أن السيرفر يعمل، ومسار /healthz/ready للتأكد من اكتمال اتصاله بقاعدة البيانات والـ Redis وقدرته على خدمة الطلبات."
        },
        {
          title: "تصنيف السجلات بمستويات دقيقة (Debug, Info, Warn, Error, Fatal)",
          desc: "اضبط السيرفر على وضع Info في الإنتاج لتوفير مساحة السجلات، واستخدم Debug فقط أثناء التحقيق في المشكلات محلياً."
        },
        {
          title: "تتبع مقاييس الأداء الذهبية الأربعة (The Four Golden Signals)",
          desc: "راقب دائماً: زمن الكمون (Latency)، معدل الطلبات (Traffic)، نسبة الأخطاء (Errors)، ونسبة تشبع الموارد (Saturation)."
        },
        {
          title: "التنبيهات الذكية (Actionable Alerts) وتجنب إجهاد التنبيهات",
          desc: "لا ترسل تنبيهاً للمطور إلا إذا كان هناك إجراء فعلي مطلوب منه؛ فكثرة التنبيهات التافهة تؤدي لتجاهل الكوارث الحقيقية."
        },
        {
          title: "حماية السجلات من تسريب المعلومات الحساسة (PII & Secrets)",
          desc: "استخدم ميزة Redaction المدمجة في Pino لحجب أرقام البطاقات وكلمات المرور والمفاتيح السرية تلقائياً قبل كتابة السجل."
        }
      ],
      keyTakeaways: [
        "بناء محرك تسجيل سجلات فائق السرعة والأمان بصيغة JSON عبر مكتبة Pino.",
        "تطبيق دورة الإغلاق السلس الاحترافي لمعالجة إشارات النظام SIGTERM.",
        "تصدير مقاييس الأداء لمراقبتها عبر Prometheus و Grafana.",
        "بناء مسارات فحص صحة التطبيق المتوافقة مع معايير Kubernetes والسحب الحية."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية للمراقبة والموثوقية والتسجيل (Observability & Reliability)",
      entries: [
        { category: "Pino Logger", commandOrSyntax: "import pino from 'pino'; const logger = pino({ level: 'info' });", description: "إنشاء أسرع محرك تسجيل سجلات مهيكلة في بيئة Node.js", type: "code" },
        { category: "Pino Redact", commandOrSyntax: "const logger = pino({ redact: ['req.headers.authorization', 'password'] });", description: "حجب وحذف البيانات الحساسة وكلمات المرور تلقائياً من السجلات", type: "code" },
        { category: "Correlation ID", commandOrSyntax: "const reqId = req.headers['x-request-id'] || crypto.randomUUID();", description: "استخراج أو توليد معرف موحد لتتبع خطوات الطلب عبر الخوادم الموزعة", type: "code" },
        { category: "Prometheus", commandOrSyntax: "import client from 'prom-client'; client.collectDefaultMetrics();", description: "جمع وتصدير مقاييس أداء المعالج والذاكرة تلقائياً بصيغة Prometheus", type: "code" },
        { category: "Prometheus Metrics", commandOrSyntax: "app.get('/metrics', async (req, res) => res.send(await client.register.metrics()));", description: "توفير نقطة نهاية لجلب المقاييس من قبل خادم المراقبة Prometheus", type: "code" },
        { category: "Graceful Shutdown", commandOrSyntax: "process.on('SIGTERM', async () => { server.close(); await db.close(); });", description: "الاستماع لإشارة إنهاء الحاوية وإغلاق الخادم وقواعد البيانات بنظافة", type: "code" },
        { category: "Liveness Check", commandOrSyntax: "app.get('/healthz/live', (req, res) => res.status(200).send('OK'));", description: "فحص سريع يؤكد أن عملية Node.js لا تزال على قيد الحياة وتستجيب", type: "code" },
        { category: "Readiness Check", commandOrSyntax: "app.get('/healthz/ready', async (req, res) => { await db.ping(); res.send('READY'); });", description: "فحص عميق يؤكد جاهزية اتصالات قواعد البيانات والكاش لخدمة العملاء", type: "code" },
        { category: "Uncaught Exception", commandOrSyntax: "process.on('uncaughtException', err => { logger.fatal(err); process.exit(1); });", description: "التقاط الاستثناءات القاتلة وتسجيلها قبل إعادة تشغيل السيرفر تلقائياً", type: "code" },
        { category: "Uptime Metric", commandOrSyntax: "const uptimeGauge = new client.Gauge({ name: 'app_uptime_seconds', help: 'Uptime' });", description: "مؤشر قياس يتابع مدة استقرار وتشغيل الخادم دون انقطاع", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-20",
      title: "مشروع عملي: خادم المراقبة المهيكلة والإغلاق السلس (Production Observability & Graceful API)",
      description: "بناء خادم Express يتضمن التسجيل المهيكل عبر Pino مع حجب الحسابات السرية، مسارات فحص الصحة المزدوجة (/live و /ready)، ونظام إغلاق سلس (Graceful Shutdown) يعالج إشارات SIGTERM دون قطع اتصالات العملاء.",
      difficulty: "خبير",
      techStack: ["Node.js", "Express.js", "Pino Logging", "Prometheus Metrics", "Graceful Shutdown"],
      directoryStructure: `observability-graceful-api/
├── package.json
├── src/
│   ├── logger.js
│   ├── health.js
│   └── server.js
└── index.js`,
      codeFiles: [
        {
          filename: "src/health.js",
          code: `// مسارات فحص السلامة المعيارية للأنظمة السحابية
export function registerHealthRoutes(app, isReadyChecker) {
  // 1. فحص الحياة (Liveness): هل السيرفر يعمل؟
  app.get('/healthz/live', (req, res) => {
    res.status(200).json({ status: 'alive', uptime: process.uptime() });
  });

  // 2. فحص الجاهزية (Readiness): هل اتصالات البيانات جاهزة؟
  app.get('/healthz/ready', async (req, res) => {
    try {
      const isReady = await isReadyChecker();
      if (isReady) {
        return res.status(200).json({ status: 'ready', database: 'connected' });
      }
      res.status(503).json({ status: 'not_ready', database: 'disconnected' });
    } catch (e) {
      res.status(503).json({ status: 'error', message: e.message });
    }
  });
}`,
          explanation: "توفر هذه الوحدة مسارات فحص Liveness و Readiness المتوافقة مع معايير Kubernetes والحاويات السحابية."
        },
        {
          filename: "src/server.js",
          code: `// خادم Express متكامل مع الإغلاق السلس
import express from 'express';
import { registerHealthRoutes } from './health.js';

const app = express();
app.use(express.json());

// محاكاة حالة الاتصال بقاعدة البيانات
let isDatabaseConnected = true;

// تسجيل مسارات فحص السلامة
registerHealthRoutes(app, async () => isDatabaseConnected);

// مسار تجريبي بطيء لمحاكاة طلب عميل يستغرق وقتاً
app.get('/api/slow-operation', async (req, res) => {
  console.log("بدء معالجة طلب طويل للعميل...");
  await new Promise(r => setTimeout(r, 3000));
  res.json({ success: true, message: "تمت معالجة الطلب بالكامل دون انقطاع" });
});

const server = app.listen(3000, () => {
  console.log("=== خادم الإنتاج يعمل على المنفذ 3000 مع دعم الإغلاق السلس ===");
});

// تطبيق دورة الإغلاق السلس (Graceful Shutdown)
function handleShutdown(signal) {
  console.log(\`\\n[إشارة \${signal}] تم استلام أمر الإيقاف. بدء إجراءات الإغلاق السلس...\`);
  isDatabaseConnected = false;

  // التوقف عن استقبال اتصالات جديدة
  server.close(() => {
    console.log("✓ تم إغلاق خادم HTTP وإنهاء كافة طلبات العملاء الحالية بنجاح.");
    // محاكاة إغلاق اتصالات قاعدة البيانات
    console.log("✓ تم إغلاق اتصالات قاعدة البيانات والكاش بأمان.");
    console.log("الخروج الآمن من التطبيق مع كود 0.");
    process.exit(0);
  });

  // مهلة إجبارية قسرية في حال علق أي اتصال لأكثر من 10 ثوانٍ
  setTimeout(() => {
    console.error("✕ انقضت المهلة القصوى، إيقاف إجباري للتطبيق!");
    process.exit(1);
  }, 10000);
}

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));`,
          explanation: "يطبق الخادم استقبال إشارات الإيقاف وإكمال الطلبات النشطة قبل الخروج الآمن لحماية بيانات المستخدمين."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd observability-graceful-api",
        "شغل الخادم: node src/server.js",
        "افحص فحص الصحة: curl http://localhost:3000/healthz/ready",
        "اضغط Ctrl+C ولاحظ كيف ينفذ الخادم الإغلاق السلس بهدوء واكتمال"
      ]
    }
  },
  21: {
    summary: {
      overview: "يغوص هذا القسم في الأعماق الهندسية الدقيقة لمحرك Node.js ونواة تشغيله. يغطي تفاصيل إدارة الذاكرة في محرك V8 وأقسام الـ Heap (New Space, Old Space, Large Object Space)، مراحل عمل جامع المهملات (Garbage Collector: Scavenge و Mark-Sweep-Compact)، البنية التحتية لمكتبة libuv ومسارات Thread Pool، كتابة إضافات C++ الأصلية (Node-API / N-API)، وقنوات التشخيص والمراقبة المعيارية (diagnostics_channel).",
      goldenRules: [
        {
          title: "فهم دورات جامع المهملات (Scavenge السريع مقابل Mark-Sweep البطيء)",
          desc: "يعمل جامع Scavenge على تنظيف الكائنات قصيرة الأجل بسرعة في New Space، بينما يتطلب تنظيف Old Space دورة Mark-Sweep قد توقف التطبيق مؤقتاً (Stop-The-World)."
        },
        {
          title: "تجنب إنشاء ملايين الكائنات المؤقتة داخل الحلقات السريعة",
          desc: "توليد كائنات جديدة باستمرار يرهق جامع المهملات ويسبب تذبذباً ملحوظاً في زمن استجابة الخادم؛ أعد استخدام الكائنات عند الإمكان."
        },
        {
          title: "استخدم إضافات Node-API (N-API) عند الحاجة لأداء لغة C/C++",
          desc: "توفر N-API واجهة برمجية ثابتة التوافق الثنائي (ABI Stability)، مما يضمن عمل الإضافة عبر إصدارات Node.js المختلفة دون الحاجة لإعادة بنائها."
        },
        {
          title: "مراقبة نشاط جامع المهملات عبر PerformanceObserver",
          desc: "استخدم واجهة الأداء لمراقبة فترات توقف الـ GC وتحليل المدة الزمنية التي يستغرقها كل نوع من أنواع التنظيف."
        },
        {
          title: "الاستفادة من diagnostics_channel لمراقبة غير متطفلة",
          desc: "تتيح لك قنوات التشخيص المدمجة في Node.js نشر واستقبال بيانات الأداء والتتبع دون تعديل الأكواد الأصلية للوحدات."
        },
        {
          title: "إدارة كائنات الذاكرة الكبيرة عبر Buffer بدلاً من نصوص V8",
          desc: "تخزن الـ Buffers في ذاكرة خارجية مخصصة (ArrayBuffer) ولا تخضع لنفس قيود حجم كائنات محرك V8 العادية."
        },
        {
          title: "تحليل تشوهات المعالجة المجمعة عبر V8 Trace Flags",
          desc: "استخدم أعلام التشغيل مثل --trace-gc و --trace-opt عند التحقيق المعمق في سبب تباطؤ كود عالي التردد."
        },
        {
          title: "تحسين عمليات معالجة النصوص عبر تعبيرات التجميع المسبقة",
          desc: "تجنب إنشاء تعبيرات نمطية جديدة RegExp داخل الدوال المتكررة؛ عرفها مرة واحدة في النطاق الخارجي للاستفادة من تحسين محرك V8."
        }
      ],
      keyTakeaways: [
        "استيعاب خريطة الذاكرة لمحرك V8 وكيفية تقسيم وإدارة المساحات المختلفة.",
        "فهم مراحل وخوارزميات جمع المهملات وتأثيرها على استقرار التطبيق.",
        "القدرة على مراقبة وتتبع فترات توقف الـ GC عبر واجهة Performance API المدمجة.",
        "استخدام قنوات التشخيص diagnostics_channel لبناء أدوات تتبع احترافية."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية للمفاهيم الداخلية العميقة في Node.js و V8",
      entries: [
        { category: "GC Trace", commandOrSyntax: "node --trace-gc index.js", description: "طباعة تفاصيل كل دورة لتنظيف الذاكرة ومقدار المساحة المحررة في الكونسول", type: "cli" },
        { category: "GC Expose", commandOrSyntax: "node --expose-gc index.js -> global.gc()", description: "تفعيل الدالة اليدوية لإجبار جامع المهملات على العمل أثناء الاختبارات الدقيقة", type: "cli" },
        { category: "V8 Heap Space", commandOrSyntax: "import v8 from 'node:v8'; console.log(v8.getHeapSpaceStatistics());", description: "استخراج إحصاءات تفصيلية لكل قسم من أقسام الذاكرة (new, old, code)", type: "code" },
        { category: "GC Monitor", commandOrSyntax: "const obs = new PerformanceObserver(list => { /* GC entries */ }); obs.observe({ entryTypes: ['gc'] });", description: "مراقبة دورات جامع المهملات وحساب وقت التوقف بالميلي ثانية برمجياً", type: "code" },
        { category: "Diagnostics", commandOrSyntax: "import dc from 'node:diagnostics_channel'; const ch = dc.channel('my-channel');", description: "إنشاء قناة تشخيص معيارية لنشر بيانات تتبع الأداء والتنفيذ", type: "code" },
        { category: "AsyncLocalStorage", commandOrSyntax: "import { AsyncLocalStorage } from 'node:async_hooks'; const als = new AsyncLocalStorage();", description: "تخزين ومشاركة سياق الطلب عبر كافة العمليات غير المتزامنة دون تمريره كمعامل", type: "code" },
        { category: "Libuv Pool", commandOrSyntax: "UV_THREADPOOL_SIZE=8 node app.js", description: "تحديد عدد مسارات العمليات المتزامنة في مكتبة libuv للمهام الثقيلة", type: "cli" },
        { category: "Memory Usage", commandOrSyntax: "process.memoryUsage() // { rss, heapTotal, heapUsed, external }", description: "فحص استهلاك الذاكرة الفعلي والمساحة المخصصة لمحرك V8 بالبايت", type: "code" },
        { category: "V8 Heap Snapshot", commandOrSyntax: "v8.writeHeapSnapshot('leak.heapsnapshot');", description: "كتابة لقطة كاملة لمحتويات الذاكرة وتحليل الكائنات المسربة برمجياً", type: "code" },
        { category: "Node-API", commandOrSyntax: "#include <node_api.h>", description: "الترويسة الرسمية لبناء إضافات وموديولات بلغة C++ متوافقة ثنائياً مع Node", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-21",
      title: "مشروع عملي: راصد نشاط جامع المهملات وقنوات التشخيص (V8 GC & Diagnostics Monitor)",
      description: "بناء أداة فحص عميقة ترصد دورات جامع المهملات (Scavenge و Mark-Sweep)، تحسب إجمالي وقت تجميد الخادم، وتستخدم AsyncLocalStorage لتمرير سياق الطلبات عبر تدفقات غير متزامنة.",
      difficulty: "خبير متمرس",
      techStack: ["Node.js", "node:v8", "node:perf_hooks", "AsyncLocalStorage", "V8 Internals"],
      directoryStructure: `v8-diagnostics-monitor/
├── package.json
├── src/
│   ├── gcObserver.js
│   ├── requestContext.js
│   └── index.js
└── README.md`,
      codeFiles: [
        {
          filename: "src/gcObserver.js",
          code: `// استيراد مراقب الأداء المدمج في Node
import { PerformanceObserver } from 'node:perf_hooks';
import v8 from 'node:v8';

// كلاس رصد وإحصاء دورات جامع المهملات
export class GcMonitor {
  #observer;
  #totalPauseMs = 0;

  start() {
    this.#observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const pauseMs = entry.duration.toFixed(2);
        this.#totalPauseMs += Number(pauseMs);
        console.log(\`🧹 [V8 GC] نوع التنظيف: \${entry.name} | مدة التوقف: \${pauseMs} ms\`);
      }
    });

    // تفعيل مراقبة أحداث الـ GC
    this.#observer.observe({ entryTypes: ['gc'] });
  }

  // طباعة تقرير الذاكرة الحالي
  printHeapReport() {
    const stats = v8.getHeapStatistics();
    console.log("=== تقرير مساحات ذاكرة V8 ===");
    console.log(\`الذاكرة المستخدمة: \${(stats.used_heap_size / 1024 / 1024).toFixed(2)} MB\`);
    console.log(\`الحد الأقصى للذاكرة: \${(stats.heap_size_limit / 1024 / 1024).toFixed(2)} MB\`);
    console.log(\`إجمالي فترات توقف السيرفر للـ GC: \${this.#totalPauseMs.toFixed(2)} ms\\n\`);
  }
}`,
          explanation: "يستخدم هذا الكلاس PerformanceObserver للاستماع لأحداث جامع المهملات وتحديد وقت التوقف الدقيق."
        },
        {
          filename: "src/index.js",
          code: `// استيراد راصد الذاكرة
import { GcMonitor } from './src/gcObserver.js';

const monitor = new GcMonitor();
monitor.start();

console.log("=== تشغيل راصد العمليات العميقة لمحرك V8 ===");
monitor.printHeapReport();

// محاكاة إنشاء وتحرير ملايين الكائنات السريعة لتحفيز جامع المهملات
console.log("جاري توليد كائنات سريعة لاختبار استجابة جامع المهملات...");
for (let i = 0; i < 5; i++) {
  let tempArray = [];
  for (let j = 0; j < 500000; j++) {
    tempArray.push({ index: j, data: \`text_\${j}\` });
  }
  // التخلص من المرجع ليتم تحريره بواسطة GC
  tempArray = null;
}

// طباعة التقرير بعد انتهاء العمليات
setTimeout(() => {
  monitor.printHeapReport();
  console.log("✓ اكتمل فحص سلوك الـ GC بنجاح.");
}, 1000);`,
          explanation: "ملف تنفيذي يولد حملاً سريعاً في الذاكرة لمراقبة سلوك وتوقيتات جامع المهملات في V8."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd v8-diagnostics-monitor",
        "شغل الأداة: node src/index.js",
        "شاهد في الشاشة كيف يسجل الراصد دورات تنظيف الذاكرة ووقت التوقف بالميلي ثانية"
      ]
    }
  },
  22: {
    summary: {
      overview: "يمثل هذا القسم ذروة التطبيق العملي الشامل لخريطة الطريق؛ حيث يجمع كافة المهارات والمعارف المكتسبة في بناء 8 مشاريع تطبيقية متكاملة تحاكي منتجات الشركات الكبرى. يغطي بناء تطبيق إدارة مهام للمبتدئين، متجر إلكتروني متكامل (E-Commerce Backend)، نظام محادثة فورية، منصة تعليمية (LMS)، ونظام Backend متكامل جاهز للإنتاج يجمع التوثيق والمصادقة والكاش والمعاملات والـ Docker والمراقبة.",
      goldenRules: [
        {
          title: "ابدأ دائماً بمخطط نموذج البيانات وعقود الـ API (API-First)",
          desc: "حدد نقاط النهاية والمدخلات والمخرجات المتوقعة في مستند Swagger/OpenAPI ومخطط قاعدة البيانات قبل كتابة أول سطر كود تنفيذي."
        },
        {
          title: "طبق التكوين المعتمد على البيئة (12-Factor App Methodology)",
          desc: "اجعل التطبيق قابلاً للتشغيل في أي بيئة (تطوير، اختبار، إنتاج) بمجرد تغيير متغيرات البيئة دون تعديل الشفرة."
        },
        {
          title: "التوثيق التلقائي والتفاعلي عبر Swagger / OpenAPI",
          desc: "وثق واجهات الـ API باستخدام أدوات مثل swagger-jsdoc لتوليد واجهة تفاعلية تمكن المطورين وفرق الفرونت إند من تجربة المسارات بسهولة."
        },
        {
          title: "الفصل الكامل بين الكود المصدري وبيانات الإنتاج الثابتة",
          desc: "استخدم مصفوفات التهيئة الأولية (Seeds) لملء قاعدة البيانات بالبيانات الافتراضية للتطوير دون العبث ببيانات العملاء."
        },
        {
          title: "الأمان الدفاعي متعدد الطبقات (Defense in Depth)",
          desc: "لا تكتفِ بطبقة حماية واحدة؛ طبق التحقق من المدخلات، وتطهير البيانات، وفحص الصلاحيات، وحظر هجمات الحقن في كل طبقة."
        },
        {
          title: "معالجة حالات السقوط الجزئي للخدمات (Fault Tolerance)",
          desc: "صمم النظام بحيث إذا تعطل Redis يستمر السيرفر في جلب البيانات من PostgreSQL، وإذا تعطلت خدمة الإيميل تستمر عملية الشراء."
        },
        {
          title: "التحقق النهائي من الأداء عبر اختبارات الحمل (Load Testing)",
          desc: "استخدم أدوات مثل Autocannon أو k6 لمحاكاة آلاف المستخدمين المتزامنين واكتشاف أي اختناقات قبل إطلاق المنتج رسمياً."
        },
        {
          title: "التسجيل الموحد لكافة الأحداث والعمليات المالية والحرجة",
          desc: "احتفظ بسجل تدقيق محاسبي (Audit Trail) غير قابل للتعديل يوثق من أجرى العملية ومتى وما هي البيانات المعدلة."
        }
      ],
      keyTakeaways: [
        "القدرة على قيادة وتطوير مشاريع Backend برمجية متكاملة من الصفر وحتى الإنتاج.",
        "الربط السلس بين Express و PostgreSQL و Redis و Docker و WebSockets في بنية واحدة متناسقة.",
        "توثيق واجهات برمجة التطبيقات باحترافية عبر Swagger / OpenAPI.",
        "تأهيل المهندس لبناء حلول تقنية حقيقية جاهزة للعمل والاستثمار الفعلي."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية للمشاريع الكبرى والتطبيقات الشاملة (Capstone Architecture)",
      entries: [
        { category: "Swagger", commandOrSyntax: "import swaggerUi from 'swagger-ui-express'; app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));", description: "توفير صفحة توثيق تفاعلية كاملة لكافة مسارات الـ API في النظام", type: "code" },
        { category: "Load Test", commandOrSyntax: "npx autocannon -c 100 -d 10 http://localhost:3000/api/products", description: "إجراء اختبار حمل يحاكي 100 عميل متزامن لمدة 10 ثوانٍ لقياس عدد الطلبات/ثانية", type: "cli" },
        { category: "Seeding", commandOrSyntax: "npx prisma db seed", description: "تشغيل ملفات حقن البيانات التأسيسية لملء الجداول ببيانات تجريبية", type: "cli" },
        { category: "Docker Compose", commandOrSyntax: "docker compose -f docker-compose.prod.yml up -d", description: "تشغيل بيئة الإنتاج الموحدة بكافة خدماتها السحابية وحاوياتها المعزولة", type: "cli" },
        { category: "Audit Log", commandOrSyntax: "await auditLogger.record({ action: 'TRANSFER', userId, targetId, amount });", description: "توثيق العمليات الحساسة في جدول تدقيق أمني غير قابل للحذف أو التعديل", type: "code" },
        { category: "API Versioning", commandOrSyntax: "app.use('/api/v1', v1Routes); app.use('/api/v2', v2Routes);", description: "تحديد إصدارات واجهات برمجة التطبيقات لضمان عدم كسر التطبيقات القديمة", type: "code" },
        { category: "Pagination Meta", commandOrSyntax: "{ data, pagination: { total, page, totalPages, hasNext } }", description: "الهيكل القياسي لاستجابات القوائم الكبيرة والصفحات المتعددة", type: "code" },
        { category: "Stripe Payment", commandOrSyntax: "const session = await stripe.checkout.sessions.create({ /* params */ });", description: "إنشاء جلسة دفع آمنة لمتجر إلكتروني وتوليد رابط السداد للعميل", type: "code" },
        { category: "Error Standard", commandOrSyntax: "{ status: 'fail' | 'error', message, code, timestamp }", description: "المعيار الموحد لتنسيق استجابات الأخطاء في كافة مشاريع الواجهات البرمجية", type: "code" },
        { category: "Clean Architecture", commandOrSyntax: "Domain -> UseCases -> Controllers -> Frameworks & Drivers", description: "دوائر المعمارية النظيفة التي تضمن استقلال منطق الأعمال عن أي إطار عمل", type: "concept" }
      ]
    },
    miniProject: {
      id: "project-sec-22",
      title: "مشروع عملي: معمارية متجر إلكتروني إنتاجية متكاملة (Enterprise E-Commerce Backend Core)",
      description: "بناء النواة المعمارية لمتجر إلكتروني احترافي يدعم إدارة المنتجات والطلبات، عزل العمليات في طبقات Controllers و Services، حماية المسارات بالمصادقة، ووسيط أخطاء موحد.",
      difficulty: "تطبيقي شامل",
      techStack: ["Node.js", "Express.js", "Layered Architecture", "REST API", "Enterprise Patterns"],
      directoryStructure: `enterprise-ecommerce-core/
├── package.json
├── src/
│   ├── config/
│   │   └── env.js
│   ├── modules/
│   │   ├── products/
│   │   │   ├── productController.js
│   │   │   └── productService.js
│   │   └── orders/
│   │       ├── orderController.js
│   │       └── orderService.js
│   └── app.js
└── index.js`,
      codeFiles: [
        {
          filename: "src/modules/orders/orderService.js",
          code: `// خدمة إدارة الطلبات التجارية في المتجر
export class OrderService {
  #orders = [];

  // إنشاء طلب شراء جديد والتحقق من توفر المنتجات
  async createOrder(userId, items) {
    if (!items || items.length === 0) {
      const err = new Error("يجب تضمين منتج واحد على الأقل في الطلب");
      err.statusCode = 400;
      throw err;
    }

    // حساب إجمالي الفاتورة
    const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const newOrder = {
      id: \`ord_\${Date.now()}\`,
      userId,
      items,
      totalAmount,
      status: 'PENDING',
      createdAt: new Date().toISOString()
    };

    this.#orders.push(newOrder);
    return newOrder;
  }

  // استرجاع طلبات مستخدم معين
  async getUserOrders(userId) {
    return this.#orders.filter(o => o.userId === userId);
  }
}`,
          explanation: "خدمة الطلبات تتولى منطق احتساب الفواتير والتحقق من الكميات وإدارة الحالة."
        },
        {
          filename: "src/app.js",
          code: `// التطبيق المجمع لكافة وحدات المتجر
import express from 'express';
import { OrderService } from './modules/orders/orderService.js';

export const app = express();
app.use(express.json());

const orderService = new OrderService();

// مسار إنشاء طلب جديد
app.post('/api/orders', async (req, res, next) => {
  try {
    const { userId = 'usr_guest', items } = req.body;
    const order = await orderService.createOrder(userId, items);
    res.status(201).json({ status: 'success', data: order });
  } catch (error) {
    next(error);
  }
});

// وسيط الأخطاء الموحد
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: 'error',
    message: err.message || 'حدث خطأ في معالجة الطلب'
  });
});`,
          explanation: "تطبيق Express يربط المسارات ويفوض الأعمال للخدمات ويوفر معالجة أخطاء مركزية."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd enterprise-ecommerce-core",
        "شغل الخادم: node index.js",
        "أرسل طلب إنشاء طلب شراء: curl -X POST http://localhost:3000/api/orders -H \"Content-Type: application/json\" -d '{\"items\":[{\"name\":\"حاسوب\",\"price\":1200,\"quantity\":1}]}'"
      ]
    }
  },
  23: {
    summary: {
      overview: "يكرس هذا القسم الختامي لتأهيل المهندس لسوق العمل والاحتراف المهني العالمي. يغطي الاستعداد للمقابلات التقنية لمهندسي Backend، حل المشكلات البرمجية وخوارزميات هياكل البيانات (Data Structures & Algorithms)، أسئلة تصميم الأنظمة واسعة النطاق (System Design Interviews)، بناء معرض أعمال احترافي (GitHub Portfolio) يجذب مسؤولي التوظيف والشركات العالمية، وصياغة السيرة الذاتية التقنية وخطط التطوير المستمر.",
      goldenRules: [
        {
          title: "في مقابلات System Design: ابدأ بمتطلبات النظام والقيود أولاً",
          desc: "لا تقفز لرسم المخططات فوراً؛ اسأل المحاور عن حجم الزيارات (Traffic)، نسبة القراءة للكتابة (Read/Write ratio)، ومتطلبات الاتساق مقابل التوفر (CAP Theorem)."
        },
        {
          title: "الكود النظيف والمقروء أهم من الحلول الخوارزمية المعقدة المجهدة",
          desc: "في المقابلات الحية، يبحث المقيم عن وضوح تسمية المتغيرات، تنظيم الدوال، معالجة الحالات الحدية، والقدرة على التفكير بصوت مسموع وشرح الفكرة بوضوح."
        },
        {
          title: "اجعل معرض أعمالك في GitHub يتحدث عن مهاراتك الهندسية",
          desc: "لا ترفع مشاريع تعليمية مكررة؛ قدم مشروعين أو ثلاثة عالية الجودة، موثقة بملفات README ممتازة تحوي مخططات معمارية وروابط تجربة حية وتغطية اختبارات مؤتمتة."
        },
        {
          title: "استوعب الفروق بين أنماط التناسق والتوفر في الأنظمة الموزعة (CAP Theorem)",
          desc: "افهم متى تختار الاتساق الصارم (Strong Consistency) في الأنظمة المالية، ومتى تختار التوفر والتناسق النهائي (Eventual Consistency) في الشبكات الاجتماعية."
        },
        {
          title: "حلل التعقيد الزمني والمكاني (Big-O Notation) لكل كود تكتبه",
          desc: "حدد دائماً استهلاك الحل للوقت O(n) والذاكرة O(1) وتحدث عن المقايضات (Trade-offs) الممكنة بين السرعة واستهلاك الذاكرة."
        },
        {
          title: "المساهمة في المشاريع مفتوحة المصدر (Open Source) ترفع مصداقيتك",
          desc: "إرسال تحسينات حقيقية لمكتبات مجتمع Node.js يبرهن على قدرتك على قراءة وفهم أكواد الفرق البرمجية الكبرى والعمل الجماعي."
        },
        {
          title: "التطوير المهني المستمر ومواكبة تحديثات المنظومة البرمجية",
          desc: "مجال Backend يتطور باستمرار؛ احرص على متابعة إصدارات Node.js الرسمية ومدونات الهندسة التقنية لكبرى الشركات (Netflix, Uber, Meta Engineering)."
        },
        {
          title: "المهارات الشخصية والتواصل (Soft Skills) تحسم قرار التوظيف",
          desc: "القدرة على تقبل الملاحظات والنقد البناء، شرح المشكلات التقنية بلغة مبسطة، وإظهار الشغف والتعاون تميزك عن مئات المتقدمين الآخرين."
        }
      ],
      keyTakeaways: [
        "الاستعداد التام لاجتياز المقابلات التقنية لمهندسي Node.js و Backend بثقة واقتدار.",
        "التمكن من منهجية حل أسئلة تصميم الأنظمة واسعة النطاق (System Design Framework).",
        "بناء سيرة ذاتية ومعرض أعمال على GitHub بمستوى ينافس في الشركات العالمية.",
        "رسم خارطة طريق للتعلم والارتقاء المستمر نحو رتبة مهندس برمجيات أول (Senior Engineer)."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية للاستعداد للمقابلات وسوق العمل وتصميم الأنظمة",
      entries: [
        { category: "System Design", commandOrSyntax: "Requirements -> Capacity -> API Design -> Data Model -> High-Level -> Deep Dive", description: "المسار المنهجي المعتمد عالمياً للإجابة عن أسئلة تصميم الأنظمة", type: "concept" },
        { category: "Big-O", commandOrSyntax: "O(1) Constant < O(log n) Logarithmic < O(n) Linear < O(n log n) < O(n^2)", description: "مستويات التعقيد الزمني والمكاني للخوارزميات من الأسرع للأبطأ", type: "concept" },
        { category: "CAP Theorem", commandOrSyntax: "Consistency (الاتساق) | Availability (التوفر) | Partition Tolerance (تحمل التجزئة)", description: "معضلة الأنظمة الموزعة: لا يمكن اختيار أكثر من صفتين معاً في وقت واحد", type: "concept" },
        { category: "Database Choice", commandOrSyntax: "SQL (ACID & Relations) vs NoSQL (High Write Scale & Flexible Schema)", description: "معايير المفاضلة بين قواعد البيانات العلائقية وغير العلائقية", type: "concept" },
        { category: "Cache Layer", commandOrSyntax: "Redis Cluster / Memcached with LRU eviction and Write-Through / Cache-Aside", description: "أنماط واستراتيجيات التخزين المؤقت لتسريع قراءة البيانات الضخمة", type: "concept" },
        { category: "Message Broker", commandOrSyntax: "Kafka (Event Streaming & Replay) vs RabbitMQ (Complex AMQP Routing)", description: "المقارنة التقنية بين وسائط الرسائل وأنظمة التدفق الموزعة", type: "concept" },
        { category: "Load Balancing", commandOrSyntax: "Round Robin / Least Connections / IP Hash algorithms", description: "خوارزميات توزيع الأحمال بين الخوادم المتعددة", type: "concept" },
        { category: "Interview Behavioral", commandOrSyntax: "STAR Method: Situation -> Task -> Action -> Result", description: "الأسلوب القياسي لصياغة الإجابات على الأسئلة السلوكية والشخصية", type: "concept" },
        { category: "Readme Guide", commandOrSyntax: "Title, Demo, Architecture Diagram, Tech Stack, Setup, Test Commands, License", description: "العناصر الإلزامية لملف README احترافي في مشاريع Portfolio", type: "concept" },
        { category: "Continuous Learning", commandOrSyntax: "Node.js RFCs, TC39 Proposals, Hacker News, InfoQ, System Design Primer", description: "أهم المصادر العالمية المعتمدة لمواكبة تطور هندسة البرمجيات", type: "concept" }
      ]
    },
    miniProject: {
      id: "project-sec-23",
      title: "مشروع عملي: منصة أسئلة المقابلات التقنية وخريطة الاستعداد المهني (Interview Prep CLI & Analyzer)",
      description: "بناء أداة سطر أوامر تفاعلية تختبر المطور في أسئلة المقابلات التقنية لـ Node.js، تقيم مستوى استيعابه لمفاهيم الـ Event Loop والـ Microservices وتصميم الأنظمة، وتقدم نصائح مخصصة.",
      difficulty: "احتراف مهني",
      techStack: ["Node.js", "CLI Interactive", "Technical Interview Simulator"],
      directoryStructure: `interview-prep-cli/
├── package.json
├── src/
│   ├── questions.js
│   └── cli.js
└── README.md`,
      codeFiles: [
        {
          filename: "src/questions.js",
          code: `// بنك أسئلة مقابلات مهندسي Backend المتخصصة
export const interviewBank = [
  {
    topic: "Node.js Event Loop",
    question: "ماذا يحدث إذا قمت بتشغيل عملية حسابية ثقيلة تستهلك الـ CPU في المسار الرئيسي لـ Node.js؟",
    answer: "يتم حظر حلقة الأحداث (Block Event Loop)، مما يجعل السيرفر عاجزاً عن استقبال أو معالجة أي طلبات أخرى من باقي المستخدمين حتى تنتهي العملية."
  },
  {
    topic: "System Design & Scaling",
    question: "كيف يمكنك توسيع تطبيق Node.js ليعمل على كافة أنوية المعالج المتاحة في السيرفر؟",
    answer: "باستخدام وحدة Cluster المدمجة أو عبر مدير العمليات PM2 في وضع cluster mode لتشغيل عملية fork لكل نواة وتوزيع الطلبات عبر Round-Robin."
  },
  {
    topic: "Security & Authentication",
    question: "لماذا يفضل حفظ Refresh Token في HttpOnly Cookie بدلاً من LocalStorage؟",
    answer: "لأن الـ HttpOnly Cookie غير قابلة للقراءة عبر جافاسكريبت المتصفح، مما يحمي الرمز من السرقة في حال تعرض الموقع لهجمات XSS."
  }
];`,
          explanation: "بنك أسئلة يحتوي على نماذج واقعية من مقابلات التوظيف التقنية مع إجاباتها النموذجية."
        },
        {
          filename: "src/cli.js",
          code: `// محاكي جلسة المقابلة التقنية التفاعلية
import { interviewBank } from './questions.js';

console.log("==================================================");
console.log("🎯 محاكي المقابلات التقنية المتقدمة لمهندسي Node.js");
console.log("==================================================\\n");

// استعراض الأسئلة والإجابات النموذجية
interviewBank.forEach((item, idx) => {
  console.log(\`السؤال رقم \${idx + 1} [\${item.topic}]:\`);
  console.log(\`❓ \${item.question}\`);
  console.log(\`💡 الإجابة النموذجية:\`);
  console.log(\`   \${item.answer}\\n\`);
});

console.log("==================================================");
console.log("تهانينا على إتمام خارطة طريق Node.js بالكامل! 🚀");
console.log("أنت الآن جاهز للانطلاق بقوة في سوق العمل البرمجي الاحترافي.");
console.log("==================================================");`,
          explanation: "برنامج سطر الأوامر يستعرض نماذج أسئلة المقابلات ويقدم التوجيهات الختامية للمتعلم."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd interview-prep-cli",
        "شغل محاكي المقابلة: node src/cli.js",
        "اقرأ الأسئلة وحاول الإجابة عنها ذاتياً قبل مراجعة الإجابة النموذجية"
      ]
    }
  }
};
