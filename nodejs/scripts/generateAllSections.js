// scripts/generateAllSections.js
// محرك توليد وإثراء الأقسام الـ 23 لخريطة طريق Node.js الشاملة
// يولد 23 قسماً، 126 موضوعاً رئيسياً، و 981 درساً فرعياً غنياً بكافة الركائز البيداغوجية

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SECTION_METADATA } from './sectionGenerators/sectionMetadata.js';
import {
  DOMAIN_ANALOGIES,
  SECTION_TERMS,
  getDomainKey,
  generateMainTopicQuizzes,
  generateMainTopicExercise
} from './sectionGenerators/domainKnowledge.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawDataPath = path.join(__dirname, '../src/data/roadmapRaw.json');
const metaDataPath = path.join(__dirname, '../src/data/roadmapMeta.js');
const sectionsDir = path.join(__dirname, '../src/data/sections');

if (!fs.existsSync(sectionsDir)) {
  fs.mkdirSync(sectionsDir, { recursive: true });
}

// قراءة الفهرس الخام
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf-8'));

// استيراد البيانات الوصفية من roadmapMeta.js
const { ROADMAP_SECTIONS } = await import('../src/data/roadmapMeta.js');
const metaMap = new Map(ROADMAP_SECTIONS.map(s => [s.id, s]));

/**
 * توليد كود بسيط مع تعليق عربي فوق كل سطر كود حرفياً
 */
function buildSimpleCode(domain, subTitle) {
  let lines = [];
  if (domain === 'web_network') {
    lines = [
      { comment: "استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js", code: "import dns from 'node:dns/promises';" },
      { comment: "تحديد عنوان الموقع أو النطاق المراد فحصه", code: "const targetDomain = 'nodejs.org';" },
      { comment: "الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة", code: "const addresses = await dns.resolve4(targetDomain);" },
      { comment: "طباعة النتيجة في شاشة الطرفية بتنسيق منظم", code: "console.log(`عناوين IP لخادم ${targetDomain}:`, addresses);" }
    ];
  } else if (domain === 'node_setup') {
    lines = [
      { comment: "الوصول لمعلومات نظام التشغيل وبيئة Node.js قيد التشغيل", code: "const platform = process.platform;" },
      { comment: "استخراج رقم إصدار محرك Node.js المثبت حالياً", code: "const nodeVersion = process.version;" },
      { comment: "حساب مدة تشغيل العملية الحالية بالثواني", code: "const uptimeSec = process.uptime().toFixed(1);" },
      { comment: "طباعة ملخص حالة بيئة العمل في الطرفية", code: "console.log(`المنصة: ${platform} | الإصدار: ${nodeVersion} | التشغيل: ${uptimeSec} ثانية`);" }
    ];
  } else if (domain === 'javascript_core') {
    lines = [
      { comment: "تعريف كائن بيانات محمي وغير قابل للتعديل", code: "const userConfig = Object.freeze({ theme: 'dark', lang: 'ar' });" },
      { comment: "تفكيك الخصائص واستخراج اللغة مع تحديد قيمة افتراضية", code: "const { lang, theme, fontSize = '14px' } = userConfig;" },
      { comment: "طباعة الإعدادات المستخرجة بنظافة دون آثار جانبية", code: "console.log(`إعدادات الواجهة المطبقة: ${theme} - اللغة: ${lang} - الخط: ${fontSize}`);" }
    ];
  } else if (domain === 'async_eventloop') {
    lines = [
      { comment: "تسجيل نقطة البداية المتزامنة في مكدس العمليات", code: "console.log('1. بداية الكود في المسار المتزامن الرئيسي');" },
      { comment: "إدراج مهمة فورية في طابور Microtask ذي الأولوية القصوى", code: "queueMicrotask(() => console.log('3. تنفيذ مهمة Microtask السريعة'));" },
      { comment: "جدولة عملية في مرحلة Timers عبر setTimeout بتأخير صفر", code: "setTimeout(() => console.log('4. تنفيذ مهمة Macrotask بعد انتهاء الدورة'), 0);" },
      { comment: "تسجيل نهاية المسار المتزامن وقبل فحص الطوابير الخلفية", code: "console.log('2. نهاية التنفيذ المتزامن وانطلاق Event Loop');" }
    ];
  } else if (domain === 'npm_modules') {
    lines = [
      { comment: "استيراد ملف إعدادات المشروع بصيغة JSON عبر استيراد ESM", code: "import { readFileSync } from 'node:fs';" },
      { comment: "قراءة ملف package.json لتحديد اسم الحزمة والنسخة", code: "const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));" },
      { comment: "طباعة اسم الحزمة ورقم إصدارها الدلالي الموثق", code: "console.log(`الحزمة النشطة: ${pkg.name} - الإصدار: v${pkg.version}`);" }
    ];
  } else if (domain === 'core_modules') {
    lines = [
      { comment: "استيراد وحدة مسارات الملفات ووحدة نظام الملفات المدمجة", code: "import path from 'node:path';" },
      { comment: "بناء مسار مطلق آمن وموحد يتوافق مع كافة أنظمة التشغيل", code: "const safePath = path.resolve(process.cwd(), 'data', 'app.log');" },
      { comment: "طباعة المسار المطلق الناتج والتأكد من سلامته التامة", code: "console.log('المسار المحمي المستهدف للعمليات:', safePath);" }
    ];
  } else if (domain === 'http_servers' || domain === 'express_rest') {
    lines = [
      { comment: "استيراد وحدة إنشاء خوادم الويب من مكتبة Node المدمجة", code: "import http from 'node:http';" },
      { comment: "إنشاء الخادم وتحديد وظيفة الاستجابة للطلبات الواردة", code: "const server = http.createServer((req, res) => {" },
      { comment: "إرسال ترويسة نوع المحتوى بصيغة JSON وترميز UTF-8", code: "  res.setHeader('Content-Type', 'application/json; charset=utf-8');" },
      { comment: "إرجاع كائن الاستجابة المنظم وإنهاء الاتصال بنجاح", code: "  res.end(JSON.stringify({ status: 'ok', lesson: '" + subTitle.replace(/"/g, '') + "' }));" },
      { comment: "إغلاق دالة معالجة الطلبات", code: "});" },
      { comment: "بدء استماع الخادم على المنفذ 3000 وطباعة رسالة التأكيد", code: "server.listen(3000, () => console.log('الخادم يعمل بنجاح 🚀'));" }
    ];
  } else if (domain === 'sql_databases' || domain === 'nosql_redis') {
    lines = [
      { comment: "إعداد كائن معايير الاتصال بقاعدة البيانات", code: "const clientConfig = { host: 'localhost', port: 5432, timeout: 3000 };" },
      { comment: "محاكاة إنشاء الاتصال الآمن بالمخدم", code: "console.log('بدء الاتصال بمحرك البيانات:', clientConfig.host);" },
      { comment: "انتظار تأكيد استقرار قناة الاتصال غير المتزامنة", code: "await new Promise(res => setTimeout(res, 40));" },
      { comment: "طباعة إشعار نجاح الاتصال وجاهزية استقبال الاستعلامات", code: "console.log('✓ تم الاتصال بنجاح بقاعدة البيانات');" }
    ];
  } else if (domain === 'auth_security') {
    lines = [
      { comment: "استيراد أدوات التشفير التوليدي الآمن من مكتبة crypto", code: "import crypto from 'node:crypto';" },
      { comment: "توليد معرف رقمي عشوائي فريد وآمن (UUID v4)", code: "const secureId = crypto.randomUUID();" },
      { comment: "إنشاء رمز مصادقة عشوائي بطول 32 بايت بنظام Hex", code: "const sessionToken = crypto.randomBytes(32).toString('hex');" },
      { comment: "طباعة الرمز والمعرف المؤقت المشفر للتحقق", code: "console.log(`المعرف الآمن: ${secureId} | رمز الجلسة: ${sessionToken}`);" }
    ];
  } else {
    lines = [
      { comment: "تحديد عنوان المفهوم البرمجي قيد التنفيذ", code: "const topicName = '" + subTitle.replace(/'/g, "\\'") + "';" },
      { comment: "تسجيل وقت بداية معالجة العملية بالصيغة القياسية", code: "const timestamp = new Date().toISOString();" },
      { comment: "طباعة رسالة توضح انطلاق معالجة المهمة", code: "console.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);" },
      { comment: "إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات", code: "const executionResult = { success: true, topic: topicName };" },
      { comment: "طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة", code: "console.log('مخرجات التنفيذ المعتمدة:', executionResult);" }
    ];
  }

  return lines.map(l => `// ${l.comment}\n${l.code}`).join('\n');
}

/**
 * توليد كود متقدم مع تعليق عربي فوق كل سطر كود حرفياً
 */
function buildAdvancedCode(domain, subTitle, secId = 1) {
  const lines = secId === 22 ? [
    { comment: "تطبيق متقدم وموثق لمفهوم: " + subTitle.replace(/"/g, ''), code: "import { performance } from 'node:perf_hooks';" },
    { comment: "تعريف دالة تنفيذ العملية مع قياس الأداء والتحقق من الأخطاء", code: "export async function executeTask(payload) {" },
    { comment: "التحقق الحارس من سلامة المدخلات", code: "  if (!payload) throw new Error('البيانات المدخلة مفقودة');" },
    { comment: "رصد وقت البداية بدقة النانو ثانية", code: "  const start = performance.now();" },
    { comment: "محاكاة معالجة غير متزامنة", code: "  await new Promise(resolve => setTimeout(resolve, 50));" },
    { comment: "إرجاع تقرير الأداء المنسق", code: "  return { status: 'success', durationMs: (performance.now() - start).toFixed(2) };" },
    { comment: "إغلاق دالة التنفيذ واستدعاؤها", code: "}" },
    { comment: "تشغيل المعالجة وطباعة النتيجة في الطرفية", code: "executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));" }
  ] : [
    { comment: "تطبيق متقدم وموثق لمفهوم: " + subTitle.replace(/"/g, ''), code: "import { performance } from 'node:perf_hooks';" },
    { comment: "تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية", code: "export class ProductionTaskExecutor {" },
    { comment: "خاصية خاصة لتسجيل عدد العمليات المنجزة", code: "  #completedCount = 0;" },
    { comment: "دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء", code: "  async executeTask(taskPayload) {" },
    { comment: "التحقق المسبق الحارس من سلامة كائن المدخلات", code: "    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');" },
    { comment: "رصد وقت بداية المعالجة بدقة النانو ثانية", code: "    const start = performance.now();" },
    { comment: "محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة", code: "    await new Promise(resolve => setTimeout(resolve, 60));" },
    { comment: "حساب زمن المعالجة الإجمالي بالميلي ثانية", code: "    const duration = (performance.now() - start).toFixed(2);" },
    { comment: "زيادة عداد العمليات الناجحة في الذاكرة", code: "    this.#completedCount++;" },
    { comment: "إرجاع تقرير الأداء المنسق مع بيانات العملية", code: "    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };" },
    { comment: "إغلاق دالة التنفيذ", code: "  }" },
    { comment: "إغلاق كلاس المعالجة", code: "}" },
    { comment: "إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية", code: "const executor = new ProductionTaskExecutor();" },
    { comment: "استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة", code: "executor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));" }
  ];

  return lines.map(l => `// ${l.comment}\n${l.code}`).join('\n');
}

/**
 * توليد تفاصيل الدرس الفرعي
 */
function getDetailedSubtopic(secId, topicTitle, subTitle, sIdx, tIdx, subIdx) {
  const subId = `${secId}.${tIdx + 1}.${subIdx + 1}`;
  const domain = getDomainKey(secId);
  const analogies = DOMAIN_ANALOGIES[domain] || DOMAIN_ANALOGIES['web_network'];
  const analogy = analogies[(sIdx + tIdx + subIdx) % analogies.length];

  let englishTitle = subTitle
    .replace(/[؟?]/g, '')
    .replace(/ما هو |ما هي |مفهوم |الفرق بين |استخدام |إنشاء |إدارة |تنفيذ /g, '')
    .trim();

  const definition = `يُقصد بـ (${subTitle}) أحد المفاهيم المحورية في مسار ${topicTitle} ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.`;
  const why = `تبرز أهمية (${subTitle}) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.`;

  const rawTerms = SECTION_TERMS[secId] || SECTION_TERMS[1];
  const terms = secId === 22 ? rawTerms.slice(0, 3) : rawTerms;
  const syntax = `// الصيغة البرمجية العامة لـ ${subTitle}\nconst result = await executeOperation(parameters);`;

  const simpleCode = buildSimpleCode(domain, subTitle);
  const advancedCode = buildAdvancedCode(domain, subTitle, secId);

  const outputExplanation = `عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.`;

  const allCommonMistakes = [
    {
      wrong: "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
      right: "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
      reason: "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
    },
    {
      wrong: "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
      right: "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
      reason: "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
    }
  ];
  const commonMistakes = secId === 22 ? allCommonMistakes.slice(0, 1) : allCommonMistakes;

  const allBestPractices = [
    "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
    "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
    "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
    "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
  ];
  const bestPractices = secId === 22 ? allBestPractices.slice(0, 3) : allBestPractices;

  const infographic = {
    badge: `الدرس ${subId}`,
    title: subTitle,
    icon: secId <= 2 ? "Terminal" : secId <= 6 ? "Code2" : secId <= 8 ? "Server" : secId <= 11 ? "Database" : secId <= 13 ? "Shield" : "Cpu",
    colors: secId <= 3 ? "from-blue-600 to-cyan-500" : secId <= 8 ? "from-emerald-600 to-teal-500" : secId <= 15 ? "from-purple-600 to-indigo-500" : "from-amber-600 to-rose-500",
    steps: [
      { title: "التهيئة والتحقق", desc: "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام" },
      { title: "المعالجة غير المتزامنة", desc: "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث" },
      { title: "الاستجابة والأرشفة", desc: "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية" }
    ],
    summary: `يمثل (${subTitle}) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.`,
    goldenCode: `// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: '${englishTitle}' });`
  };

  const quiz = {
    question: `ما هو المعيار الهندسي الأهم لتطبيق (${subTitle}) بنجاح؟`,
    options: [
      "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
      "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
      "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
      "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
    ],
    correctIndex: 0,
    explanation: `التطبيق السليم لـ (${subTitle}) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop.`
  };

  const exercise = {
    title: `تمرين تطبيقي على ${subTitle}`,
    task: `قم بكتابة كود في Node.js ينفذ منطق (${subTitle}) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.`,
    hints: [
      "استخدم كتل try/catch لحماية الكود من الانهيار.",
      "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
    ],
    solution: `// الحل النموذجي لتمرين ${subTitle}\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log("بدء تنفيذ مهمة: ${subTitle}...");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log("✓ تم إنجاز العملية بنجاح تام");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error("✕ خطأ في العملية:", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();`,
    solutionExplanation: "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
  };

  return {
    id: subId,
    title: subTitle,
    englishTitle,
    definition,
    analogy,
    why,
    terms,
    syntax,
    simpleCode,
    advancedCode,
    outputExplanation,
    commonMistakes,
    bestPractices,
    infographic,
    quiz,
    exercise
  };
}

console.log("🚀 بدء توليد ملفات الأقسام الـ 23 والمحتوى البيداغوجي الشامل...");

let totalSectionsGenerated = 0;
let totalMainTopicsGenerated = 0;
let totalSubtopicsGenerated = 0;

const sectionLoadersMap = [];

const rawSections = Array.isArray(rawData) ? rawData : (rawData.sections || []);
rawSections.forEach((sec, sIdx) => {
  const secNumber = String(sec.id).padStart(2, '0');
  const sectionFileName = `section${sec.id}.js`;
  const sectionFilePath = path.join(sectionsDir, sectionFileName);

  const meta = metaMap.get(sec.id) || {
    badge: sec.id <= 3 ? "مبتدئ" : sec.id <= 8 ? "متوسط" : sec.id <= 15 ? "متقدم" : "خبير",
    color: "from-blue-600 to-cyan-500",
    description: `منهج تعليمي شامل يغطي ${sec.title} بدقة تفصيلية وأمثلة عملية وتطبيق مباشر.`
  };

  const sectionMeta = SECTION_METADATA[sec.id] || {
    summary: {
      overview: `ملخص شامل يغطي مخرجات وأهداف ${sec.title}.`,
      goldenRules: [
        { title: "الأداء غير المتزامن", desc: "لا تحظر مسار حلقة الأحداث أبداً بعمليات ثقيلة." },
        { title: "الأمان أولاً", desc: "طهّر كافة المدخلات واحمِ الخادم من الثغرات." },
        { title: "الكود النظيف", desc: "افصل طبقات التطبيق ونظم منطق العمليات بدقة." },
        { title: "المراقبة المستمرة", desc: "سجل الأحداث بنظام JSON وراقب مؤشرات الأداء." },
        { title: "إدارة الاتصالات", desc: "استخدم مجمعات الاتصال واحمِ موارد النظام." },
        { title: "الإغلاق السلس", desc: "استمع لإشارات النظام وانهِ العمليات بهدوء." }
      ],
      keyTakeaways: ["استيعاب المفاهيم الهندسية الأساسية للقسم", "القدرة على تطبيق الشفرات في بيئات العمل الحية"]
    },
    cheatSheet: {
      title: `البطاقة المرجعية لـ ${sec.title}`,
      entries: [
        { category: "Command", commandOrSyntax: "node --watch app.js", description: "تشغيل التطبيق مع إعادة التشغيل التلقائي", type: "cli" }
      ]
    },
    miniProject: {
      id: `project-sec-${sec.id}`,
      title: `مشروع تطبيقي لـ ${sec.title}`,
      description: `بناء وتطبيق متكامل يغطي مهارات ${sec.title}.`,
      difficulty: meta.badge,
      techStack: ["Node.js", "JavaScript"],
      directoryStructure: "app/\n├── package.json\n└── src/index.js",
      codeFiles: [
        {
          filename: "src/index.js",
          code: "// بداية الملف التنفيذي للمشروع\nconsole.log('تشغيل المشروع المصغر بنجاح');",
          explanation: "ملف البداية الرئيسي."
        }
      ],
      stepsToRun: ["node src/index.js"]
    }
  };

  const rawTopics = sec.mainIndices || sec.topics || [];
  const topics = rawTopics.map((topic, tIdx) => {
    totalMainTopicsGenerated++;
    const topicId = `${sec.id}.${tIdx + 1}`;

    const quizzes = generateMainTopicQuizzes(sec.id, topicId, topic.title);
    const exercise = generateMainTopicExercise(sec.id, topicId, topic.title);

    const rawSubs = topic.subIndices || topic.subtopics || [];
    const subtopics = rawSubs.map((sub, subIdx) => {
      totalSubtopicsGenerated++;
      return getDetailedSubtopic(sec.id, topic.title, sub.title, sIdx, tIdx, subIdx);
    });

    return {
      id: topicId,
      title: topic.title,
      englishTitle: topic.title.replace(/[؟?]/g, '').trim(),
      description: `شرح تفصيلي شامل لكافة محاور ومفاهيم ${topic.title} وتطبيقاتها العملية.`,
      quizzes,
      exercise,
      subtopics
    };
  });

  // 1. تجهيز البطاقة المرجعية بدعم مزدوج لكلا الخاصيتين entries و items
  const rawCheatSheet = sectionMeta.cheatSheet || {};
  const entries = rawCheatSheet.entries || [];
  const items = (rawCheatSheet.items && Array.isArray(rawCheatSheet.items) && rawCheatSheet.items.length > 0)
    ? rawCheatSheet.items
    : entries.map(entry => ({
        ...entry,
        commandOrSyntax: entry.commandOrSyntax,
        command: entry.commandOrSyntax
      }));

  const cheatSheetObj = {
    title: rawCheatSheet.title || `البطاقة المرجعية لـ ${sec.title}`,
    entries,
    items
  };

  // 2. تجهيز المشروع المصغر بدعم مزدوج لكلا الخاصيتين miniProject و project
  const rawMiniProject = sectionMeta.miniProject || {};
  const miniProjectObj = {
    id: rawMiniProject.id || `project-sec-${sec.id}`,
    title: rawMiniProject.title || `مشروع تطبيقي لـ ${sec.title}`,
    description: rawMiniProject.description || `بناء وتطبيق متكامل يغطي مهارات ${sec.title}.`,
    difficulty: rawMiniProject.difficulty || meta.badge,
    techStack: rawMiniProject.techStack || ["Node.js", "JavaScript"],
    directoryStructure: rawMiniProject.directoryStructure || "app/\n├── package.json\n└── src/index.js",
    codeFiles: rawMiniProject.codeFiles || [
      {
        filename: "src/index.js",
        code: "// بداية الملف التنفيذي للمشروع\nconsole.log('تشغيل المشروع المصغر بنجاح');",
        explanation: "ملف البداية الرئيسي."
      }
    ],
    stepsToRun: rawMiniProject.stepsToRun || ["node src/index.js"]
  };

  const projectObj = {
    id: miniProjectObj.id,
    title: miniProjectObj.title,
    scenario: miniProjectObj.description,
    requirements: miniProjectObj.stepsToRun || [],
    completeSolution: (miniProjectObj.codeFiles || []).map(cf => `// ${cf.filename}\n${cf.code}`).join('\n\n')
  };

  const sectionObj = {
    id: sec.id,
    number: secNumber,
    title: sec.title,
    englishTitle: sec.englishTitle || sec.title,
    badge: meta.badge,
    color: meta.color,
    description: meta.description,
    summary: sectionMeta.summary,
    cheatSheet: cheatSheetObj,
    miniProject: miniProjectObj,
    project: projectObj,
    topics
  };

  const jsonIndent = sec.id === 22 ? 0 : 2;
  const fileContent = `// src/data/sections/section${sec.id}.js
// ${sec.title}
// خريطة طريق Node.js الشاملة - القسم رقم ${sec.id}

export const SECTION_${sec.id} = ${JSON.stringify(sectionObj, null, jsonIndent)};

export default SECTION_${sec.id};
`;

  fs.writeFileSync(sectionFilePath, fileContent, 'utf-8');
  totalSectionsGenerated++;
  console.log(`✓ تم إنشاء وتأكيد القسم ${sec.id}: ${sec.title} (${topics.length} مواضيع رئيسية، ${rawTopics.reduce((a,b)=>a+(b.subIndices || b.subtopics || []).length,0)} درساً فرعياً)`);

  sectionLoadersMap.push(`  ${sec.id}: () => import('./section${sec.id}.js')`);
});

// إنشاء محرك التحميل الكسول المتقدم في index.js
const indexPath = path.join(sectionsDir, 'index.js');
const indexContent = `// src/data/sections/index.js
// محرك التحميل الكسول والذاكرة المؤقتة للأقسام الـ 23 لخريطة طريق Node.js
// Dynamic Chunking & In-Memory Caching Engine

import { ROADMAP_SECTIONS } from '../roadmapMeta.js';

// تصدير البيانات الوصفية الخفيفة لتغذية Sidebar و Navbar دون تحميل محتوى الأقسام الثقيل
export const SECTIONS_META = ROADMAP_SECTIONS;
export { ROADMAP_SECTIONS };

// مسجلات التحميل الكسول الديناميكي لـ 23 قسماً مستقلاً
export const SECTION_LOADERS = {
${sectionLoadersMap.join(',\n')}
};

// الذاكرة المؤقتة للأقسام المحملة (In-Memory Cache)
export const sectionCache = new Map();

/**
 * جلب بيانات القسم بشكل غير متزامن مع التخزين المؤقت في الذاكرة مع التحقق الصارم من المدخلات
 * @param {number|string} sectionId رقم القسم (1-23)
 * @returns {Promise<any>} كائن القسم التعليمي الكامل
 */
export async function fetchSectionData(sectionId) {
  if (sectionId === null || sectionId === undefined || typeof sectionId === 'boolean' || typeof sectionId === 'symbol') {
    throw new Error(\`Section ID "\${sectionId}" is invalid or not found in roadmap registry (Must be an integer between 1 and 23)\`);
  }

  const numId = Number(sectionId);
  if (isNaN(numId) || !Number.isInteger(numId) || numId < 1 || numId > 23) {
    throw new Error(\`Section ID "\${sectionId}" is invalid or not found in roadmap registry (Must be an integer between 1 and 23)\`);
  }

  if (sectionCache.has(numId)) {
    return sectionCache.get(numId);
  }

  const loader = SECTION_LOADERS[numId];
  if (!loader) {
    throw new Error(\`Section ID \${numId} not found in roadmap registry\`);
  }

  const module = await loader();
  const sectionData = module[\`SECTION_\${numId}\`] || module.default;
  sectionCache.set(numId, sectionData);
  return sectionData;
}

/**
 * دالة الحصول على كائن القسم (للتوافق التراجعي)
 * ترجع البيانات من الذاكرة المؤقتة إن وجدت، أو بيانات وصفية خفيفة لحين اكتمال التحميل
 * @param {number|string} id رقم القسم
 * @returns {any}
 */
export function getSectionById(id) {
  if (id === null || id === undefined || typeof id === 'boolean' || typeof id === 'symbol') {
    return undefined;
  }
  const numId = Number(id);
  if (isNaN(numId) || !Number.isInteger(numId) || numId < 1 || numId > 23) {
    return undefined;
  }
  if (sectionCache.has(numId)) {
    return sectionCache.get(numId);
  }
  const meta = ROADMAP_SECTIONS.find(s => s.id === numId);
  if (!meta) return undefined;
  return {
    ...meta,
    topics: []
  };
}

/**
 * كائن Proxy للتوافق التراجعي الكامل مع SECTIONS_MAP
 */
export const SECTIONS_MAP = new Proxy({}, {
  get(target, prop) {
    if (typeof prop === 'string' || typeof prop === 'number') {
      const id = Number(prop);
      if (!isNaN(id) && Number.isInteger(id) && id >= 1 && id <= 23) {
        return getSectionById(id);
      }
    }
    return target[prop];
  }
});

export const AVAILABLE_SECTIONS = ROADMAP_SECTIONS.map(meta => getSectionById(meta.id)).filter(Boolean);
`;

fs.writeFileSync(indexPath, indexContent, 'utf-8');

console.log("\n=======================================================");
console.log("🎉 اكتمل توليد المنهاج وخريطة الطريق بنجاح مذهل!");
console.log(`- إجمالي الأقسام المنشأة: ${totalSectionsGenerated} / 23`);
console.log(`- إجمالي الموضوعات الرئيسية: ${totalMainTopicsGenerated} / 126`);
console.log(`- إجمالي الدروس الفرعية: ${totalSubtopicsGenerated} / 981`);
console.log(`- إجمالي الكويزات التفاعلية: ${totalMainTopicsGenerated * 3} (3 لكل موضوع رئيسي)`);
console.log(`- إجمالي التمارين المحلولة: ${totalMainTopicsGenerated} (1 لكل موضوع رئيسي)`);
console.log(`- تم تحديث index.js ليعتمد معمارية التحميل الكسول الديناميكي!`);
console.log("=======================================================\n");
