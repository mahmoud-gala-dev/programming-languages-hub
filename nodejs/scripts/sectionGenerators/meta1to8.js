// scripts/sectionGenerators/meta1to8.js
// بيانات الأقسام 1 إلى 8: الملخصات والقواعد الذهبية والبطاقات المرجعية والمشاريع المصغرة

export const META_1_TO_8 = {
  1: {
    summary: {
      overview: "يقدم هذا القسم الأساس المعرفي الصلب الذي لا غنى عنه لأي مطور برمجيات خلفية (Backend Developer). يغطي كيفية عمل شبكة الإنترنت، بروتوكولات الاتصال المعيارية مثل HTTP وTCP، دور نظام أسماء النطاقات DNS، والتعامل الاحترافي مع سطر الأوامر الطرفية (CLI) لبناء وتوجيه التطبيقات بثقة.",
      goldenRules: [
        {
          title: "فصل الاهتمامات بين العميل والخادم",
          desc: "يعمل المتصفح كواجهة عرض وتفاعل (Frontend)، بينما يتولى الخادم (Backend) التحقق الأمني، معالجة منطق الأعمال، وحفظ البيانات الحساسة بعيداً عن أيدي المستخدمين."
        },
        {
          title: "بروتوكول HTTP عديم الحالة (Stateless)",
          desc: "كل طلب HTTP مستقل بذاته؛ لذا نستخدم ملفات تعريف الارتباط (Cookies) أو رموز التوثيق (Tokens) للحفاظ على حالة جلسة المستخدم بين الطلبات المتعاقبة."
        },
        {
          title: "الفرق الجوهري بين TCP وUDP",
          desc: "استخدم TCP عندما تكون موثوقية وصول البيانات وترتيبها إلزامية مثل تطبيقات الويب ونقل الملفات، بينما استخدم UDP في البث المباشر والألعاب لتقليل زمن التأخير."
        },
        {
          title: "الأمان يبدأ بتشفير الاتصال (HTTPS)",
          desc: "لا تقم بنقل أي بيانات حساسة عبر بروتوكول HTTP غير المشفر؛ فشهادات TLS/SSL تضمن تشفير قناة الاتصال ومنع هجمات التنصت (Man-in-the-Middle)."
        },
        {
          title: "دقة تصميم نقاط النهاية (RESTful Endpoints)",
          desc: "اجعل أسماء نقاط النهاية تعبر عن الموارد بصيغة الجمع واعتمد أفعال HTTP القياسية (GET, POST, PUT, DELETE) للتعبير عن العمليات بدقة."
        },
        {
          title: "إتقان سطر الأوامر يضاعف إنتاجيتك",
          desc: "تعتمد بيئات الإنتاج والسيرفرات السحابية كلياً على الطرفية (Bash / PowerShell)؛ لذا فإن معرفة إدارة المسارات والعمليات مهارة محورية لا بديل عنها."
        },
        {
          title: "التعامل الصارم مع رموز الاستجابة (HTTP Status Codes)",
          desc: "لا ترجع الرمز 200 دائماً مع نص خطأ؛ استخدم 400 للبيانات غير الصالحة، 401 لغياب المصادقة، 403 لنقص الصلاحيات، و500 للأخطاء الداخلية."
        }
      ],
      keyTakeaways: [
        "استيعاب دورة حياة طلب HTTP من لحظة ضغط المستخدم وحتى استلام الاستجابة.",
        "القدرة على التفريق الدقيق بين عناوين IP ومنافذ الاتصال Ports وأسماء النطاقات.",
        "احتراف أوامر التنقل وإدارة الملفات والصلاحيات عبر Terminal.",
        "فهم معايير نقل البيانات بصيغة JSON بين الأنظمة المختلفة."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لأساسيات الويب والشبكات والطرفية",
      entries: [
        { category: "Terminal / CLI", commandOrSyntax: "pwd / cd / ls -la", description: "معرفة المجلد الحالي، تغيير المسار، وعرض كافة الملفات المخفية وتفاصيلها", type: "cli" },
        { category: "Terminal / CLI", commandOrSyntax: "mkdir -p src/controllers", description: "إنشاء مجلدات فرعية متداخلة دفعة واحدة بأمان", type: "cli" },
        { category: "Terminal / CLI", commandOrSyntax: "rm -rf dist/", description: "حذف مجلد بكامل محتوياته بشكل إجباري متكرر (بحذر شديد)", type: "cli" },
        { category: "Terminal / CLI", commandOrSyntax: "curl -I https://api.example.com", description: "فحص ترويسات الاستجابة ورقم الحالة لموقع أو واجهة برمجية عبر الطرفية", type: "cli" },
        { category: "Networking", commandOrSyntax: "ping google.com", description: "فحص زمن الوصول والاتصال بالشبكة عبر حزم ICMP", type: "cli" },
        { category: "HTTP Methods", commandOrSyntax: "GET, POST, PUT, PATCH, DELETE", description: "الأفعال القياسية لجلب، إنشاء، استبدال، تحديث جزئي، وحذف الموارد", type: "concept" },
        { category: "HTTP Status", commandOrSyntax: "200 OK / 201 Created / 204 No Content", description: "عائلة رموز النجاح القياسية لطلبات الويب", type: "concept" },
        { category: "HTTP Status", commandOrSyntax: "400 Bad Request / 401 Unauthorized / 404 Not Found", description: "عائلة أخطاء العميل وإدخال البيانات المفقودة أو غير المصرح بها", type: "concept" },
        { category: "Data Formats", commandOrSyntax: "JSON.stringify(data) / JSON.parse(text)", description: "تحويل كائنات JavaScript إلى نصوص JSON والعكس في المعالجة", type: "code" },
        { category: "DNS & Ports", commandOrSyntax: "Port 80 (HTTP) / Port 443 (HTTPS) / Port 3000 (Dev)", description: "المنافذ الافتراضية الأكثر شيوعاً في اتصالات الويب والتطوير المحلي", type: "concept" }
      ]
    },
    miniProject: {
      id: "project-sec-1",
      title: "مشروع عملي: محاكي شبكات وفحص الخوادم (Web Network Simulator)",
      description: "بناء أداة سطر أوامر تفاعلية تحاكي فحص أسماء النطاقات (DNS Lookup)، قياس زمن الاستجابة (Latency Probe)، وتحليل ترويسات HTTP لتقييم صحة الخوادم.",
      difficulty: "مبتدئ",
      techStack: ["Node.js", "node:dns/promises", "node:http", "node:perf_hooks"],
      directoryStructure: `web-network-simulator/
├── package.json
├── src/
│   ├── networkChecker.js
│   └── index.js
└── README.md`,
      codeFiles: [
        {
          filename: "src/networkChecker.js",
          code: `// استيراد وحدة نظام أسماء النطاقات للتعامل مع العناوين
import dns from 'node:dns/promises';
// استيراد دالة قياس الأداء بدقة عالية
import { performance } from 'node:perf_hooks';

// دالة فحص عنوان النطاق وترجمته إلى عناوين IP حقيقية
export async function resolveDomain(domain) {
  // تسجيل بدء عملية الاستعلام في الطرفية
  console.log(\`بدء ترجمة النطاق: \${domain}...\`);
  // قياس توقيت بداية الاستعلام
  const startTime = performance.now();
  // طلب سجلات A للعنوان المطلوب من خادم DNS
  const addresses = await dns.resolve4(domain);
  // حساب الوقت المستغرق بالميلي ثانية
  const duration = (performance.now() - startTime).toFixed(2);
  // إرجاع كائن منظم يحتوي على النتيجة والزمن
  return { domain, addresses, durationMs: duration };
}`,
          explanation: "يقوم هذا الملف بالاتصال بخوادم الـ DNS لترجمة أسماء النطاقات إلى عناوين IPv4 حقيقية مع قياس زمن الاستجابة."
        },
        {
          filename: "src/index.js",
          code: `// استيراد وظيفة فحص النطاقات من الوحدة المجاورة
import { resolveDomain } from './networkChecker.js';

// دالة تشغيل التطبيق الرئيسية المتزامنة مع المستخدم
async function main() {
  // تعريف قائمة النطاقات المستهدفة للفحص
  const targets = ['google.com', 'nodejs.org', 'github.com'];
  // طباعة رسالة ترحيبية وتحديد وقت البدء
  console.log("=== محاكي فحص النطاقات والشبكة في Node.js ===");
  // المرور على كل نطاق وإجراء الفحص
  for (const domain of targets) {
    try {
      // تنفيذ الفحص غير المتزامن وانتظار النتيجة
      const result = await resolveDomain(domain);
      // طباعة عنوان الـ IP المستخرج بنجاح
      console.log(\`✓ \${result.domain} -> \${result.addresses.join(', ')} (\${result.durationMs} ms)\`);
    } catch (error) {
      // طباعة رسالة خطأ واضحة في حال تعثر الوصول للنطاق
      console.error(\`✕ تعذر الاتصال بالنطاق \${domain}: \${error.message}\`);
    }
  }
}

// تنفيذ الدالة الرئيسية فور تحميل الملف
main();`,
          explanation: "الملف الرئيسي يقوم بتشغيل حلقة معالجة لعدة نطاقات عالمية وطباعة نتائج التحليل الزمني وعناوين IP المستخرجة."
        }
      ],
      stepsToRun: [
        "افتح الطرفية وتوجه إلى مجلد المشروع: cd web-network-simulator",
        "تأكد من وجود Node.js مثبت على جهازك: node -v",
        "شغل الأداة مباشرة: node src/index.js",
        "لاحظ عناوين IP المسترجعة وسرعة استجابة خوادم DNS"
      ]
    }
  },
  2: {
    summary: {
      overview: "يركز هذا القسم على تهيئة بيئة التطوير الاحترافية والانطلاق في عالم Node.js. يشرح بنية محرك V8 المطور من جوجل، كيفية استخدام مكتبة libuv لإدارة العمليات غير المتزامنة، تثبيت وإدارة إصدارات Node المتعددة باستخدام nvm، واستخدام بيئة REPL والأدوات السحابية والتحكم بالإصدارات عبر Git.",
      goldenRules: [
        {
          title: "Node.js بيئة تشغيل وليست لغة برمجة",
          desc: "يعمل Node.js كحاوية تشغيل تبسط استخدام لغة JavaScript على الخادم خارج بيئة المتصفح التقليدية بالاستعانة بمحرك V8."
        },
        {
          title: "إدارة الإصدارات عبر NVM إجبارية في المشاريع التجارية",
          desc: "تجنب التثبيت اليدوي المباشر لإصدار واحد من Node؛ فمدير الإصدارات (NVM / fnm) يتيح لك التبديل اللحظي بين مشاريع تتطلب إصدارات LTS مختلفة."
        },
        {
          title: "الاعتماد دائماً على إصدارات الدعم طويل الأجل (LTS)",
          desc: "في بيئات الإنتاج والأنظمة الحية، استخدم دائماً أحدث إصدار زوجي مستقر (Active LTS مثل v20 أو v22) وتجنب الإصدارات الفردية التجريبية."
        },
        {
          title: "مكتبة libuv هي قلب المعالجة غير المتزامنة",
          desc: "بينما ينفذ V8 كود JavaScript في مسار واحد، تتولى libuv تفويض عمليات الإدخال/الإخراج (I/O) وتفاعل النظام إلى Thread Pool في الخلفية."
        },
        {
          title: "الملف .gitignore هو حارس أمان مشروعك",
          desc: "لا ترفع مجلد node_modules أو ملفات .env التي تحوي المفاتيح السرية إلى مستودعات Git نهائياً."
        },
        {
          title: "استثمار إمكانات VS Code وESLint",
          desc: "قم بتفعيل ملحقات التدقيق الآلي والـ Auto-Formatting لحماية الكود من الأخطاء التنسيقية قبل حفظ الملفات."
        },
        {
          title: "تجربة الأكواد السريعة عبر REPL",
          desc: "استخدم كتابة الأمر node في الطرفية للدخول إلى REPL واختبار التعبيرات البرمجية والمكتبات قبل دمجها في المشروع."
        }
      ],
      keyTakeaways: [
        "فهم معمارية Node.js وتكامل محرك V8 مع مكتبة libuv المكتوبة بلغة C++.",
        "القدرة على تثبيت إصدارات مختلفة من Node والتبديل بينها بسلاسة عبر nvm.",
        "إنشاء أول تطبيق وتمرير معاملات سطر الأوامر عبر process.argv.",
        "تهيئة مستودع Git وكتابة ملف .gitignore متكامل لمشاريع Node.js."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لإعداد وتشغيل بيئة Node.js وGit",
      entries: [
        { category: "Node Version Manager", commandOrSyntax: "nvm install --lts && nvm use --lts", description: "تثبيت أحدث إصدار مستقر طويل الأجل وتفعيله مباشرة في بيئة العمل", type: "cli" },
        { category: "Node CLI", commandOrSyntax: "node -v / npm -v", description: "التحقق من رقم إصدار Node.js ومدير الحزم npm المثبتين", type: "cli" },
        { category: "Node Execution", commandOrSyntax: "node app.js", description: "تشغيل ملف جافاسكريبت مباشرة باستخدام محرك Node.js", type: "cli" },
        { category: "Node Execution", commandOrSyntax: "node --watch app.js", description: "تشغيل التطبيق مع إعادة التشغيل التلقائي عند أي تعديل على الملفات (Node 18+)", type: "cli" },
        { category: "Node REPL", commandOrSyntax: "node", description: "فتح بيئة سطر الأوامر التفاعلية (REPL) لاختبار الشفرات البرمجية فوراً", type: "cli" },
        { category: "Process Global", commandOrSyntax: "process.version / process.platform", description: "الوصول لمعلومات نظام التشغيل وإصدار Node البرمجي قيد التشغيل", type: "code" },
        { category: "Process Global", commandOrSyntax: "process.argv.slice(2)", description: "استخراج المعاملات المرسلة للتطبيق عبر سطر الأوامر", type: "code" },
        { category: "Git Basics", commandOrSyntax: "git init && git branch -M main", description: "تهيئة مستودع Git جديد وتحديد الفرع الرئيسي الافتراضي", type: "cli" },
        { category: "Git Basics", commandOrSyntax: "git add . && git commit -m 'Initial commit'", description: "إضافة كافة التعديلات وحفظها في لقطة برمجية جديدة مع رسالة وصفية", type: "cli" },
        { category: "Git Ignore", commandOrSyntax: "echo 'node_modules\n.env' >> .gitignore", description: "إضافة مجلد الحزم وملف المتغيرات السرية لقائمة التجاهل", type: "cli" }
      ]
    },
    miniProject: {
      id: "project-sec-2",
      title: "مشروع عملي: أداة فحص بيئة الخادم وتوليد تقرير النظام (System Inspector CLI)",
      description: "بناء أداة CLI تقوم بفحص إمكانيات الجهاز (المعالج، الذاكرة، إصدار Node، نظام التشغيل) وتوليد تقرير JSON منظم لتوثيق بيئة التشغيل.",
      difficulty: "مبتدئ",
      techStack: ["Node.js", "node:os", "node:process", "node:fs/promises"],
      directoryStructure: `system-inspector/
├── package.json
├── src/
│   ├── reporter.js
│   └── cli.js
└── output/`,
      codeFiles: [
        {
          filename: "src/reporter.js",
          code: `// استيراد وحدة نظام التشغيل لاستخراج بيانات العتاد
import os from 'node:os';

// دالة تجميع بيانات بيئة التشغيل
export function gatherSystemReport() {
  // حساب إجمالي الذاكرة العشوائية بالميجابايت
  const totalMemMB = (os.totalmem() / 1024 / 1024).toFixed(0);
  // حساب الذاكرة الشاغرة بالميجابايت
  const freeMemMB = (os.freemem() / 1024 / 1024).toFixed(0);
  // استخراج تفاصيل المعالجات المتاحة وعدد الأنوية
  const cpus = os.cpus();
  
  // بناء كائن التقرير المنظم
  return {
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch,
    memory: { totalMB: \`\${totalMemMB} MB\`, freeMB: \`\${freeMemMB} MB\` },
    cpuCount: cpus.length,
    cpuModel: cpus[0]?.model || 'غير محدد'
  };
}`,
          explanation: "تستخرج هذه الوحدة تفاصيل دقيقة حول العتاد ونظام التشغيل وإصدار محرك Node.js."
        },
        {
          filename: "src/cli.js",
          code: `// استيراد وحدة كتابة الملفات غير المتزامنة
import fs from 'node:fs/promises';
// استيراد دالة تجميع التقرير
import { gatherSystemReport } from './reporter.js';

// تشغيل الأداة عبر سطر الأوامر
async function run() {
  // تجميع التقرير واستلام الكائن
  const report = gatherSystemReport();
  // طباعة مقتطف ملون في الشاشة
  console.log("=== تقرير فحص بيئة التشغيل ===");
  console.log(\`منصة التشغيل: \${report.platform} (\${report.arch})\`);
  console.log(\`إصدار Node.js: \${report.nodeVersion}\`);
  console.log(\`عدد أنوية المعالج: \${report.cpuCount}\`);
  console.log(\`الذاكرة الإجمالية: \${report.memory.totalMB}\`);

  // حفظ التقرير في ملف بصيغة JSON
  await fs.mkdir('./output', { recursive: true });
  await fs.writeFile('./output/system-report.json', JSON.stringify(report, null, 2), 'utf-8');
  console.log("✓ تم حفظ التقرير بنجاح في: ./output/system-report.json");
}

run();`,
          explanation: "الملف التنفيذي يستدعي جامع البيانات، يطبع ملخصاً للمستخدم، ثم يحفظ التقرير كملف JSON دائم."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd system-inspector",
        "تأكد من نوع الحزمة ESM في package.json أو استخدم امتداد .js",
        "شغل الأداة: node src/cli.js",
        "افحص محتوى الملف المتولد في output/system-report.json"
      ]
    }
  },
  3: {
    summary: {
      overview: "يرسخ هذا القسم مفاهيم JavaScript المعاصرة الضرورية قبل التعمق في بناء خوادم Backend. يغطي أنواع البيانات المتقدمة، الفروق الجوهرية بين النطاقات (Scope)، مفهوم الدوال المغلقة (Closures)، أساليب البرمجة الكائنية (OOP وClasses)، تفكيك البيانات (Destructuring)، ومقدمة قوية لمعالجة الوعود وعمليات الإدخال والإخراج.",
      goldenRules: [
        {
          title: "استخدم const افتراضياً ثم let وتجنب var نهائياً",
          desc: "توفر const وlet حماية صارمة للنطاق الكتلي (Block Scope) وتمنعان مشاكل التسريب والـ Hoisting المعقدة التي تسببها var."
        },
        {
          title: "المساواة الصارمة (===) تمنع أخطاء التحويل الخفية",
          desc: "تجنب المعامل التساهلي (==) لأنه يجري تحويلاً ضمنياً للأنواع (Type Coercion) قد يؤدي إلى سلوكيات وثغرات غير متوقعة."
        },
        {
          title: "دوال الأسهم (Arrow Functions) وعزل كلمة this",
          desc: "ترث دوال الأسهم سياق this معجمياً (Lexical Scope)؛ لذا هي ممتازة للـ Callbacks ومناهج المصفوفات وتجنب الالتباس."
        },
        {
          title: "استثمار الدوال الوظيفية للمصفوفات (map, filter, reduce)",
          desc: "تمنحك هذه التوابع شفرة نظيفة وتعبيرية سهلة القراءة مقارنة بالحلقات التقليدية المعقدة."
        },
        {
          title: "الانتشار والتفكيك (Spread & Destructuring)",
          desc: "استخدم تفكيك الكائنات والمصفوفات لاستخراج الخصائص بدقة ووضوح ودمج الإعدادات الافتراضية بسهولة."
        },
        {
          title: "الكائنات الممررة بالمرجع وتجنب الآثار الجانبية (Immutability)",
          desc: "تذكر أن المصفوفات والكائنات تمرر كمرجع (Reference)؛ فتعديلها المباشر يغير الأصل ما لم تصنع نسخة جديدة."
        },
        {
          title: "استيعاب مفهوم الدوال المغلقة (Closures)",
          desc: "تمكنك الـ Closures من إنشاء بيانات خاصة مغلفة ومصانع دوال (Factory Functions) تحتفظ بحالتها بين الاستدعاءات."
        },
        {
          title: "التعامل مع القيم المعدومة والافتراضية عبر Nullish Coalescing (??)",
          desc: "استخدم المعامل ?? بدلاً من || عند تعيين القيم الافتراضية حتى لا تتجاهل الأصفار أو النصوص الفارغة المشروعة."
        }
      ],
      keyTakeaways: [
        "التمكن التام من قواعد الـ Scope والـ Hoisting وتطبيقات الـ Closures.",
        "التعامل الاحترافي مع توابع المصفوفات المتقدمة لمعالجة قوائم البيانات والبيانات الضخمة.",
        "بناء كلاسات متينة وتطبيق مفاهيم التوريث والتغليف في JavaScript الحديثة.",
        "استيعاب الفروق بين النسخ السطحي (Shallow Copy) والنسخ العميق (Deep Copy)."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لأساسيات JavaScript الحديثة لـ Node.js",
      entries: [
        { category: "Variables", commandOrSyntax: "const user = Object.freeze({ id: 1 });", description: "إنشاء كائن محمي وغير قابل للتعديل أو الإضافة على خصائصه", type: "code" },
        { category: "Destructuring", commandOrSyntax: "const { name, age = 18, ...rest } = person;", description: "تفكيك الخصائص مع وضع قيمة افتراضية وتجميع الباقي في كائن مستقل", type: "code" },
        { category: "Arrays", commandOrSyntax: "const ids = list.map(item => item.id);", description: "استخراج مصفوفة جديدة بالمعرفات فقط باستخدام تابع التحويل map", type: "code" },
        { category: "Arrays", commandOrSyntax: "const active = list.filter(item => item.isActive);", description: "تصفية العناصر وإرجاع العناصر التي تستوفي الشرط فقط", type: "code" },
        { category: "Arrays", commandOrSyntax: "const sum = numbers.reduce((acc, n) => acc + n, 0);", description: "تجميع عناصر المصفوفة وحساب القيمة الإجمالية عبر مجمع تراكمي", type: "code" },
        { category: "Operators", commandOrSyntax: "const limit = config.limit ?? 25;", description: "استخدام عامل الدمج المعدوم لتحديد القيمة الافتراضية عند كونها null أو undefined", type: "code" },
        { category: "Optional Chaining", commandOrSyntax: "const city = user?.address?.city;", description: "الوصول الآمن للخصائص المتداخلة دون حدوث استثناء Cannot read property", type: "code" },
        { category: "OOP", commandOrSyntax: "class Database { #password; constructor(pwd) { this.#password = pwd; } }", description: "تعريف خاصية خاصة مشفرة (Private Field) لا يمكن الوصول إليها من الخارج", type: "code" },
        { category: "Objects", commandOrSyntax: "const clone = structuredClone(original);", description: "الاستنساخ العميق الحقيقي للكائنات والمصفوفات المدمج في Node.js الحديث", type: "code" },
        { category: "Async", commandOrSyntax: "const delay = (ms) => new Promise(r => setTimeout(r, ms));", description: "دالة مساعدة لتحويل مؤقت الانتظار إلى Promise قابل للـ await", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-3",
      title: "مشروع عملي: محرك معالجة البيانات وتصنيف المستخدمين (In-Memory Data Pipeline)",
      description: "بناء مكتبة لمعالجة وتصفية وتجميع مجموعات البيانات الكبيرة بالاعتماد على الفئات الوظيفية ومفاهيم الدوال المغلقة والمصفوفات المتقدمة.",
      difficulty: "مبتدئ - متوسط",
      techStack: ["Node.js", "JavaScript ES6+", "Object-Oriented Programming"],
      directoryStructure: `data-pipeline-engine/
├── package.json
├── src/
│   ├── Pipeline.js
│   └── testData.js
└── index.js`,
      codeFiles: [
        {
          filename: "src/Pipeline.js",
          code: `// كلاس يمثل محرك معالجة متسلسل للبيانات (Fluent Pipeline)
export class Pipeline {
  // خاصية خاصة لتخزين البيانات قيد المعالجة
  #data;

  // الباني لتمرير مصفوفة البيانات الأولية
  constructor(initialData = []) {
    // تخزين نسخة من البيانات لمنع تعديل الأصل الخارجي
    this.#data = [...initialData];
  }

  // تصفية البيانات بشرط مخصص
  filter(predicate) {
    // تطبيق دالة التصفية وتحديث البيانات الداخلية
    this.#data = this.#data.filter(predicate);
    // إرجاع this للسماح بالاستدعاء المتسلسل (Chaining)
    return this;
  }

  // تحويل كل عنصر لصيغة جديدة
  map(transform) {
    // تطبيق دالة التحويل وتحديث الحالة
    this.#data = this.#data.map(transform);
    return this;
  }

  // ترتيب البيانات وفق دالة مقارنة
  sort(compareFn) {
    // ترتيب العناصر مع الحفاظ على عدم تعديل المدخل الأصلي
    this.#data.sort(compareFn);
    return this;
  }

  // استخراج النتيجة النهائية المنفذة
  execute() {
    // إرجاع نسخة نهائية من المصفوفة المعالجة
    return [...this.#data];
  }
}`,
          explanation: "يطبق هذا الكلاس نمط البناء المتسلسل (Method Chaining) لمعالجة مجموعات البيانات بمرونة تامة ونظافة فائقة."
        },
        {
          filename: "index.js",
          code: `// استيراد كلاس محرك المعالجة
import { Pipeline } from './src/Pipeline.js';

// مصفوفة اختبارية من بيانات المستخدمين المسجلين
const rawUsers = [
  { id: 1, name: "أحمد علي", score: 85, active: true },
  { id: 2, name: "سارة خليل", score: 92, active: false },
  { id: 3, name: "محمد طارق", score: 68, active: true },
  { id: 4, name: "فاطمة عمر", score: 95, active: true }
];

// إنشاء خط المعالجة واختيار النشطين فقط وترتيبهم حسب الدرجة
const topActiveUsers = new Pipeline(rawUsers)
  // تصفية المستخدمين النشطين فقط
  .filter(u => u.active)
  // ترتيبهم تنازلياً حسب الدرجة
  .sort((a, b) => b.score - a.score)
  // تحويل الكائن لصيغة مخصصة للشاشة
  .map(u => ({ id: u.id, candidate: u.name, rankScore: u.score }))
  // الحصول على المخرجات
  .execute();

// طباعة النتيجة المنظمة في كونسول الخادم
console.log("=== مخرجات معالجة المستخدمين المؤهلين ===");
console.table(topActiveUsers);`,
          explanation: "الملف يوضح استدعاء خط المعالجة وتطبيق الفلترة والترتيب التنازلي وطباعة جدول منسق للنتائج."
        }
      ],
      stepsToRun: [
        "توجه للمجلد: cd data-pipeline-engine",
        "شغل البرنامج: node index.js",
        "لاحظ طباعة الجدول المنسق للمستخدمين المؤهلين فقط وفق الشروط المطبقة"
      ]
    }
  },
  4: {
    summary: {
      overview: "يمثل هذا القسم العمود الفقري لفهم كيفية تحقيق Node.js لأداء استثنائي عبر المسار الفردي غير المتزامن (Single-Threaded Event Loop). يغطي تفصيلياً مراحل حلقة الأحداث (Timers, Poll, Check, Close)، طوابير Microtasks ذات الأولوية المطلقة (nextTick و Promises)، التحول من جحيم الـ Callbacks إلى Promises و Async/Await، وكيفية تفادي حظر المسار الرئيسي (Don't Block the Event Loop).",
      goldenRules: [
        {
          title: "القاعدة الذهبية: لا تحظر الـ Event Loop أبداً",
          desc: "أي كود متزامن يستغرق وقتاً طويلاً على الـ CPU (مثل معالجة تشفير معقدة أو حلقات ضخمة) يوقف السيرفر عن خدمة جميع المستخدمين الآخرين."
        },
        {
          title: "طابور Microtasks يسبق طابور Macrotasks دائماً",
          desc: "يتم تنفيذ مهام process.nextTick() و Promise callbacks فور انتهاء العملية الحالية وقبل الانتقال لأي مرحلة تالية من مراحل Event Loop."
        },
        {
          title: "process.nextTick() أقوى وأسرع من setTimeout وsetImmediate",
          desc: "يعمل nextTick في مقدمة طابور الـ Microtasks؛ لذا احذر من استدعائه بشكل تكراري لا نهائي لأنه يسبب تجويع (Starvation) لباقي الأحداث."
        },
        {
          title: "الفرق الدقيق بين setImmediate و setTimeout",
          desc: "ينفذ setTimeout في مرحلة Timers بعد انقضاء المهلة، بينما صمم setImmediate لينفذ فوراً في مرحلة Check بعد اكتمال عمليات الـ I/O."
        },
        {
          title: "أدر الوعود المتزامنة بالتوازي عبر Promise.all و Promise.allSettled",
          desc: "لا تستخدم await داخل حلقة for متتالية إذا كانت العمليات مستقلة؛ نفذها بالتوازي عبر Promise.all لتقليل وقت الاستجابة بنسبة هائلة."
        },
        {
          title: "معالجة أخطاء Async/Await باستخدام try/catch أو توابع .catch()",
          desc: "كل دالة async يجب أن تحمي عملياتها بـ try/catch، وإلا ستتسبب الوعود المرفوضة غير المعالجة (Unhandled Rejection) في عدم استقرار التطبيق."
        },
        {
          title: "استخدام AbortController لإلغاء العمليات المعلقة",
          desc: "في Node.js الحديث، استخدم AbortSignal لإلغاء طلبات الشبكة أو المؤقتات الطويلة فور انقطاع اتصال العميل لتوفير الموارد."
        },
        {
          title: "توجيه المهام الحسابية الثقيلة للـ Worker Threads",
          desc: "إذا كان تطبيقك يتطلب ضغط صور أو حسابات رياضية معقدة، فوضها لـ Worker Threads لحماية الـ Event Loop الرئيسي."
        }
      ],
      keyTakeaways: [
        "الفهم العميق لمراحل حلقة الأحداث الست في Node.js وسلوك كل مرحلة.",
        "القدرة على توقع ترتيب تنفيذ الأكواد المتزامنة وغير المتزامنة والـ Microtasks بدقة 100%.",
        "إتقان نمط البرمجة بـ async/await ومعالجة الأخطاء والعمليات المتوازية.",
        "حماية الخوادم من الانهيار الناجم عن حظر المسار الرئيسي."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لحلقة الأحداث والبرمجة غير المتزامنة",
      entries: [
        { category: "Timers Phase", commandOrSyntax: "setTimeout(fn, delay) / setInterval(fn, interval)", description: "جدولة تنفيذ دالة بعد انقضاء فترة زمنية محددة بالميلي ثانية", type: "code" },
        { category: "Check Phase", commandOrSyntax: "setImmediate(() => { /* Check Phase */ });", description: "تنفيذ دالة فور انتهاء مرحلة معالجة مدخلات ومخرجات I/O Poll", type: "code" },
        { category: "Microtasks", commandOrSyntax: "process.nextTick(() => { /* Highest Priority */ });", description: "تنفيذ فوري ذو أولوية قصوى يتجاوز طوابير الـ Event Loop العادية", type: "code" },
        { category: "Microtasks", commandOrSyntax: "queueMicrotask(() => { /* Standard Web Microtask */ });", description: "إضافة مهمة لطابور الـ Microtask القياسي المتوافق مع المتصفح وNode", type: "code" },
        { category: "Parallel Async", commandOrSyntax: "const [res1, res2] = await Promise.all([task1(), task2()]);", description: "تشغيل عدة وعود بالتوازي وإرجاع كافة النتائج معاً فور اكتمالها", type: "code" },
        { category: "Resilient Async", commandOrSyntax: "const results = await Promise.allSettled(promises);", description: "انتظار اكتمال كافة الوعود سواء نجحت أو فشلت دون إيقاف التنفيذ", type: "code" },
        { category: "Cancellation", commandOrSyntax: "const ac = new AbortController(); ac.abort();", description: "إنشاء إشارة إلغاء للتحكم في إنهاء العمليات غير المتزامنة الجارية", type: "code" },
        { category: "Promisify", commandOrSyntax: "import { promisify } from 'node:util';", description: "تحويل دوال الـ Callback القديمة إلى دوال ترجع Promises حديثة", type: "code" },
        { category: "Async Iteration", commandOrSyntax: "for await (const chunk of stream) { /* Process */ }", description: "التكرار على تدفقات البيانات غير المتزامنة بسلاسة وأمان", type: "code" },
        { category: "Event Handling", commandOrSyntax: "process.on('unhandledRejection', (reason, promise) => {})", description: "التقاط الاستثناءات الناتجة عن الوعود غير المعالجة لمنع انهيار الخادم", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-4",
      title: "مشروع عملي: محاكي مراقبة الـ Event Loop وتحديد المهام الخانقة (Loop Health Guard)",
      description: "أداة مراقبة ذكية تحسب زمن تأخر حلقة الأحداث (Event Loop Lag / Delay)، تكتشف العمليات التي تحظر الخادم، وتصدر تنبيهات فورية عند تخطي العتبة الحرجة.",
      difficulty: "متوسط",
      techStack: ["Node.js", "node:perf_hooks", "Async/Await", "Event Loop Monitoring"],
      directoryStructure: `loop-health-guard/
├── package.json
├── src/
│   ├── LagMonitor.js
│   └── testLag.js
└── index.js`,
      codeFiles: [
        {
          filename: "src/LagMonitor.js",
          code: `// استيراد أدوات قياس الأداء عالية الدقة
import { monitorEventLoopDelay } from 'node:perf_hooks';

// كلاس يمثل حارس صحة حلقة الأحداث
export class LagMonitor {
  // خاصية خاصة لتخزين كائن مراقبة التأخير
  #histogram;
  // مؤشر التكرار الدوري
  #timer;

  // تهيئة المراقب بعتبة الفحص
  constructor(resolution = 20) {
    // إنشاء كائن رصد التأخير بدقة 20 ميلي ثانية
    this.#histogram = monitorEventLoopDelay({ resolution });
  }

  // بدء عملية المراقبة المستمرة
  start(thresholdMs = 50, onAlert = console.warn) {
    // تفعيل الرصد الرياضي للتأخير
    this.#histogram.enable();
    // فحص مؤشرات التأخير كل ثانية
    this.#timer = setInterval(() => {
      // حساب التأخير في النسبة المئوية 99 بالميلي ثانية
      const p99LagMs = (this.#histogram.percentile(99) / 1e6).toFixed(2);
      // إذا تجاوز التأخير العتبة الحرجة نطلق تنبيهاً
      if (Number(p99LagMs) > thresholdMs) {
        onAlert(\`⚠️ تحذير: اختناق في Event Loop! التأخير p99 بلغ: \${p99LagMs} ms\`);
      }
      // إعادة تصفير الإحصاءات للفترة القادمة
      this.#histogram.reset();
    }, 1000);
  }

  // إيقاف المراقبة وتنظيف الموارد
  stop() {
    clearInterval(this.#timer);
    this.#histogram.disable();
  }
}`,
          explanation: "يستخدم هذا الكلاس وحدة perf_hooks لمراقبة زمن تأخر حلقة الأحداث وحساب الـ p99 Lag بدقة النانو ثانية."
        },
        {
          filename: "index.js",
          code: `// استيراد مراقب صحة الحلقة
import { LagMonitor } from './src/LagMonitor.js';

// إنشاء كائن المراقبة وبدء الفحص بعتبة 30 ميلي ثانية
const guard = new LagMonitor();
guard.start(30, (alertMsg) => {
  // طباعة رسالة التحذير بلون بارز
  console.log(\`[\${new Date().toLocaleTimeString()}] \${alertMsg}\`);
});

console.log("=== تم تفعيل حارس Event Loop بنجاح. يتم فحص الأداء كل ثانية... ===");

// محاكاة عملية حظر متزامنة بعد ثانيتين لاختبار الحارس
setTimeout(() => {
  console.log("\n[محاكاة] جاري تنفيذ عملية حسابية ثقيلة تحظر المسار المتزامن...");
  const start = Date.now();
  // حلقة تستهلك الـ CPU لمدة 150 ميلي ثانية
  while (Date.now() - start < 150) {}
  console.log("[محاكاة] انتهت العملية الثقيلة.\n");
}, 2000);

// إيقاف التطبيق تلقائياً بعد 5 ثوانٍ
setTimeout(() => {
  guard.stop();
  console.log("=== اكتمل اختبار المراقبة بنجاح ===");
  process.exit(0);
}, 5000);`,
          explanation: "يقوم هذا الملف بتشغيل حارس المراقبة ومحاكاة عملية حظر متزامنة (CPU-bound) للتحقق من التقاط الاختناق فوراً."
        }
      ],
      stepsToRun: [
        "توجه للمجلد: cd loop-health-guard",
        "شغل الأداة: node index.js",
        "شاهد كيف يلتقط الحارس التأخر الناجم عن العملية الحسابية ويصدر تنبيهاً دقيقاً"
      ]
    }
  },
  5: {
    summary: {
      overview: "يشرح هذا القسم الإدارة المنهجية لمشاريع وحزم Node.js. يتناول ملف package.json بتفاصيله الكاملة، معايير الترقيم الدلالي (SemVer)، إدارة الاعتماديات وتفادي تضخم node_modules، الفرق بين CommonJS و ES Modules، استخدام أدوات التطوير مثل Nodemon و ESLint، ونشر الحزم على npm بأمان وموثوقية.",
      goldenRules: [
        {
          title: "احترم الترقيم الدلالي SemVer (Major.Minor.Patch)",
          desc: "يرمز Patch للإصلاحات، وMinor للميزات المتوافقة، وMajor للتغييرات الجذرية الكاسرة للتوافق (Breaking Changes)."
        },
        {
          title: "الملف package-lock.json إلزامي ولا تتجاهله أبداً",
          desc: "يثبت package-lock.json الشجرة الدقيقة لكافة الحزم التابعة ويضمن تطابق بيئة التشغيل بين جهازك وسيرفر الإنتاج."
        },
        {
          title: "الفصل الصارم بين dependencies و devDependencies",
          desc: "ضع أدوات الاختبار والتدقيق (Jest, ESLint) في devDependencies لتفادي تحميلها في حاويات وسيرفرات الإنتاج."
        },
        {
          title: "التحول الشامل إلى وحدات ES Modules (type: module)",
          desc: "تعتبر وحدات ESM المعيار الرسمي لجافاسكريبت الحديثة وتتيح ميزات Top-Level Await والتحليل الثابت للشفرة."
        },
        {
          title: "استخدم npx لتشغيل الأدوات دون تثبيتها عالمياً",
          desc: "يحميك npx من تلوث النظام العام بالحزم ويضمن تشغيل أحدث نسخة من الأداة أو النسخة المسجلة في المشروع محلياً."
        },
        {
          title: "فحص الثغرات الأمنية بانتظام عبر npm audit",
          desc: "اجعل أمر npm audit جزءاً من خط سير النشر التلقائي (CI/CD) لاكتشاف وتحديث الحزم التي تحوي ثغرات معروفة."
        },
        {
          title: "تنظيف الكود ومطابقة المعايير عبر Prettier و ESLint",
          desc: "توحيد صياغة الكود داخل الفريق يمنع الأخطاء غير المقصودة ويسهل مراجعة الشفرات البرمجية (Code Review)."
        }
      ],
      keyTakeaways: [
        "إتقان تهيئة وتخصيص ملفات package.json وسكربتات التشغيل npm scripts.",
        "التحكم الكامل في شجرة الاعتماديات وإصلاح تعارضات الإصدارات وتأمين الحزم.",
        "استيعاب الفروق التشغيلية الدقيقة بين import (ESM) و require (CommonJS).",
        "تجهيز الحزم المحلية لنشرها في مستودع npm العام أو الخاص."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لإدارة الحزم والوحدات وسكربتات npm",
      entries: [
        { category: "Init", commandOrSyntax: "npm init -y", description: "تهيئة مشروع Node.js جديد بالإعدادات الافتراضية السريعة", type: "cli" },
        { category: "Install", commandOrSyntax: "npm install express", description: "تثبيت حزمة وإضافتها لقائمة الاعتماديات الأساسية dependencies", type: "cli" },
        { category: "Dev Install", commandOrSyntax: "npm install -D vitest eslint", description: "تثبيت حزم بيئة التطوير والاختبار وإضافتها لـ devDependencies", type: "cli" },
        { category: "Clean Install", commandOrSyntax: "npm ci", description: "تثبيت صارم ونظيف مطابق حرفياً لملف package-lock.json في الإنتاج", type: "cli" },
        { category: "Security", commandOrSyntax: "npm audit --fix", description: "فحص شجرة الحزم بحثاً عن ثغرات أمنية وإصلاح المتوافق منها آلياً", type: "cli" },
        { category: "Execution", commandOrSyntax: "npx prisma migrate dev", description: "تشغيل ملفات CLI التنفيذية للحزم المحلية دون الحاجة لتثبيت عالمي", type: "cli" },
        { category: "SemVer", commandOrSyntax: "^1.2.3 (Compatible) / ~1.2.3 (Patch only) / 1.2.3 (Exact)", description: "رموز تحديد نطاق التحديثات التلقائية المقبولة في package.json", type: "concept" },
        { category: "ESM Config", commandOrSyntax: "\"type\": \"module\"", description: "سطر التكوين في package.json لتفعيل دعم استيراد ES Modules للمشروع ككل", type: "code" },
        { category: "Scripts", commandOrSyntax: "npm run build / npm test", description: "تشغيل الأوامر المخصصة المعرفة في قسم scripts بملف المشروع", type: "cli" },
        { category: "Publishing", commandOrSyntax: "npm publish --access public", description: "نشر الحزمة الخاصة بك في مستودع npm العالمي للعامة", type: "cli" }
      ]
    },
    miniProject: {
      id: "project-sec-5",
      title: "مشروع عملي: منشئ قوالب المشاريع المعياري (Node Project Scaffolder CLI)",
      description: "بناء أداة سطر أوامر تقوم بتهيئة هيكل مشروع Node.js معياري، كتابة package.json جاهز، إعداد ESLint و .gitignore وتوليد كود تأسيسي بنقرة واحدة.",
      difficulty: "متوسط",
      techStack: ["Node.js", "node:fs/promises", "node:path", "node:child_process"],
      directoryStructure: `project-scaffolder/
├── package.json
├── src/
│   ├── generator.js
│   └── cli.js
└── templates/`,
      codeFiles: [
        {
          filename: "src/generator.js",
          code: `// استيراد وحدة الملفات لكتابة الهيكل
import fs from 'node:fs/promises';
// استيراد وحدة المسارات
import path from 'node:path';

// دالة توليد هيكل المشروع الجديد
export async function scaffoldProject(projectName) {
  // تحديد المسار المستهدف للمشروع
  const targetDir = path.resolve(process.cwd(), projectName);
  
  // إنشاء المجلدات الأساسية
  await fs.mkdir(path.join(targetDir, 'src/controllers'), { recursive: true });
  await fs.mkdir(path.join(targetDir, 'src/routes'), { recursive: true });
  await fs.mkdir(path.join(targetDir, 'tests'), { recursive: true });

  // كتابة ملف package.json قياسي
  const pkgContent = {
    name: projectName,
    version: "1.0.0",
    type: "module",
    scripts: {
      start: "node src/index.js",
      dev: "node --watch src/index.js",
      test: "echo \\"لا توجد اختبارات بعد\\" && exit 0"
    }
  };
  await fs.writeFile(path.join(targetDir, 'package.json'), JSON.stringify(pkgContent, null, 2), 'utf-8');

  // كتابة ملف .gitignore متكامل
  const gitignore = "node_modules/\n.env\ndist/\ncoverage/\n*.log\n";
  await fs.writeFile(path.join(targetDir, '.gitignore'), gitignore, 'utf-8');

  // كتابة ملف البداية src/index.js
  const entryCode = \`// \${projectName} - Entry Point\\nconsole.log("مرحباً بك في مشروع \${projectName} المشيد بنجاح! 🚀");\\n\`;
  await fs.writeFile(path.join(targetDir, 'src/index.js'), entryCode, 'utf-8');

  return { success: true, targetDir };
}`,
          explanation: "تتولى هذه الوحدة إنشاء المجلدات وكتابة ملفات package.json و .gitignore والملف التنفيذي الأول."
        },
        {
          filename: "src/cli.js",
          code: `// استيراد دالة التشييد
import { scaffoldProject } from './generator.js';

// استخراج اسم المشروع من معاملات سطر الأوامر
const projectName = process.argv[2] || 'my-new-app';

console.log(\`=== جاري تهيئة المشروع: \${projectName} ===\`);

// تنفيذ عملية التشييد
scaffoldProject(projectName)
  .then(res => {
    console.log(\`✓ تم إنشاء هيكل المشروع بنجاح في: \${res.targetDir}\`);
    console.log(\`\\nللبدء، نفذ الأوامر التالية:\\n  cd \${projectName}\\n  npm start\\n\`);
  })
  .catch(err => {
    console.error("✕ فشل تهيئة المشروع:", err.message);
    process.exit(1);
  });`,
          explanation: "واجهة سطر الأوامر تستقبل اسم المشروع وتنفذ التوليد مع إعطاء إرشادات التشغيل للمطور."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd project-scaffolder",
        "شغل الأداة لتوليد تطبيق جديد: node src/cli.js test-backend-api",
        "افحص المجلد المتولد test-backend-api وستجد الهيكل متكاملاً مع package.json و .gitignore"
      ]
    }
  },
  6: {
    summary: {
      overview: "يستعرض هذا القسم المكتبات المدمجة الجوهرية (Core Modules) التي تجعل من Node.js بيئة تشغيل فائقة القوة دون الحاجة لحزم خارجية. يغطي التفاعل مع الملفات عبر fs/promises، مسارات الملفات عبر path، تفاصيل النظام عبر os، معمارية الأحداث عبر EventEmitter، التعامل مع البيانات الثنائية عبر Buffer، التشفير والتوقيع عبر crypto، والروابط عبر URL.",
      goldenRules: [
        {
          title: "استخدم دائماً المسارات الآمنة عبر path.join و path.resolve",
          desc: "تجنب دمج المسارات يدوياً بالسلاسل النصية لضمان توافق الفواصل بين أنظمة Windows و Linux/macOS وتفادي هجمات Path Traversal."
        },
        {
          title: "اعتمد fs/promises وتجنب الدوال المتزامنة (Sync Methods)",
          desc: "لا تستخدم fs.readFileSync أو fs.writeFileSync في مسارات خدمة العملاء لأنها تجمد السيرفر تماماً أثناء القراءة والكتابة."
        },
        {
          title: "الذاكرة المؤقتة Buffer لتخزين البيانات الثنائية",
          desc: "تمثل الـ Buffers كتل ذاكرة خام خارج محرك V8 مخصصة لنقل الصور والفيديوهات والملفات المشفرة بكفاءة عالية."
        },
        {
          title: "معمارية الأحداث عبر EventEmitter",
          desc: "فصل منطق العمليات باستخدام الأحداث (Publish/Subscribe) يجعل الأنظمة مرنة وسهلة التوسع، مع الحرص على إزالة المستمعين لمنع تسريب الذاكرة."
        },
        {
          title: "التشفير الآمن يبدأ بوحدة node:crypto",
          desc: "استخدم دوال التشفير المعتمدة والمولدة للأرقام العشوائية الآمنة (crypto.randomBytes) لحفظ وتوليد المفاتيح والرموز السرية."
        },
        {
          title: "استخدم البادئة node: في الاستيراد (Node Protocol)",
          desc: "كتابة import fs from 'node:fs/promises' توضح صراحة أن الوحدة داخلية وتمنع أي تعارض محتمل مع حزم npm بنفس الاسم."
        },
        {
          title: "معالجة أخطاء الملفات بدقة (ENOENT / EACCES)",
          desc: "تحقق من كود الخطأ عند التعامل مع نظام الملفات لتمييز الملف غير الموجود عن الملف المحمي بصلاحيات وصول غير كافية."
        },
        {
          title: "الاستفادة من وحدة node:util وميزة util.promisify",
          desc: "تتيح لك وحدة util فحص وتنسيق الكائنات المعقدة وتحويل الدوال القديمة بسلاسة دون مكتبات خارجية."
        }
      ],
      keyTakeaways: [
        "التعامل الاحترافي مع نظام الملفات والمجلدات بطرق غير متزامنة تماماً.",
        "بناء أنظمة تعتمد على الأحداث المخصصة عبر كلاس EventEmitter.",
        "فهم تمثيل البيانات الثنائية والتحويل بين Hex و Base64 و UTF-8 عبر Buffer.",
        "تطبيق خوارزميات التشفير والتجزئة (Hashing) والتوليد العشوائي الآمن عبر crypto."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية للوحدات المدمجة في Node.js (Core Modules)",
      entries: [
        { category: "Path", commandOrSyntax: "path.resolve(__dirname, 'uploads', filename)", description: "بناء مسار مطلق آمن وموحد ومتوافق مع كافة أنظمة التشغيل", type: "code" },
        { category: "FS", commandOrSyntax: "await fs.readFile('data.json', 'utf-8')", description: "قراءة محتوى ملف نصي غير متزامن دون حظر حلقة الأحداث", type: "code" },
        { category: "FS", commandOrSyntax: "await fs.writeFile('log.txt', text, { flag: 'a' })", description: "إلحاق أسطر جديدة بنهاية الملف المفتوح دون مسح محتواه القديم", type: "code" },
        { category: "FS", commandOrSyntax: "await fs.rm(dir, { recursive: true, force: true })", description: "حذف مجلد متكامل بكافة ملفاته الفرعية دون رمي استثناء إذا كان مفقوداً", type: "code" },
        { category: "Events", commandOrSyntax: "emitter.emit('user:registered', userData)", description: "إطلاق حدث مخصص وإرسال كائن البيانات لكافة المشتركين", type: "code" },
        { category: "Events", commandOrSyntax: "emitter.once('close', cleanupFn)", description: "الاستماع لحدث وتنفيذ دالة المعالجة لمرة واحدة فقط ثم إلغاؤها تلقائياً", type: "code" },
        { category: "Buffer", commandOrSyntax: "Buffer.from(str, 'utf-8').toString('base64')", description: "تحويل النص العادي إلى تشفير Base64 الثنائي عبر كائن الـ Buffer", type: "code" },
        { category: "Crypto", commandOrSyntax: "crypto.randomUUID()", description: "توليد معرف عالمي فريد (v4 UUID) فائق العشوائية والأمان", type: "code" },
        { category: "Crypto", commandOrSyntax: "crypto.createHash('sha256').update(data).digest('hex')", description: "إنشاء بصمة تجزئة مشفرة غير قابلة للعكس للنصوص والملفات", type: "code" },
        { category: "OS", commandOrSyntax: "os.uptime() / os.homedir()", description: "استخراج مدة تشغيل النظام بالثواني والمسار الرئيسي لمستخدم الجهاز", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-6",
      title: "مشروع عملي: نظام تدوير وأرشفة سجلات الخادم الآلي (Log File Rotator & Watcher)",
      description: "بناء خدمة خلفية تراقب مجلد السجلات، وتستمع لأحداث كتابة السجلات، وعند بلوغ حجم السجل 1 ميجابايت، تقوم بأرشفته وتشفير بصمته الرقمية وتوليد سجل جديد تلقائياً.",
      difficulty: "متوسط",
      techStack: ["Node.js", "node:fs/promises", "node:events", "node:crypto", "node:path"],
      directoryStructure: `log-rotator/
├── package.json
├── src/
│   ├── LogRotator.js
│   └── testLogger.js
└── logs/`,
      codeFiles: [
        {
          filename: "src/LogRotator.js",
          code: `// استيراد وحدات Node المدمجة مع بادئة node:
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { EventEmitter } from 'node:events';

// كلاس إدارة وأرشفة ملفات السجلات
export class LogRotator extends EventEmitter {
  // مسار ملف السجل النشط
  #logFilePath;
  // الحد الأقصى للحجم بالبايت قبل التدوير
  #maxBytes;

  constructor(logDir, filename = 'app.log', maxBytes = 1024 * 1024) {
    super();
    this.#logFilePath = path.join(logDir, filename);
    this.#maxBytes = maxBytes;
  }

  // دالة كتابة سطر جديد في السجل
  async log(message) {
    const timestamp = new Date().toISOString();
    const entry = \`[\${timestamp}] \${message}\\n\`;
    
    // التأكد من وجود المجلد
    await fs.mkdir(path.dirname(this.#logFilePath), { recursive: true });
    // إلحاق السطر بالملف
    await fs.appendFile(this.#logFilePath, entry, 'utf-8');
    this.emit('entry', { message, timestamp });

    // فحص حجم الملف الحالي للتدوير
    await this.#checkRotation();
  }

  // فحص الحجم وتدوير السجل عند اللزوم
  async #checkRotation() {
    try {
      const stats = await fs.stat(this.#logFilePath);
      if (stats.size >= this.#maxBytes) {
        // إنشاء اسم جديد بختم زمني وبصمة عشوائية
        const id = crypto.randomBytes(3).toString('hex');
        const archiveName = \`archive-\${Date.now()}-\${id}.log\`;
        const archivePath = path.join(path.dirname(this.#logFilePath), archiveName);

        // إعادة تسمية السجل الحالي للأرشيف
        await fs.rename(this.#logFilePath, archivePath);
        this.emit('rotated', { archivePath, previousSize: stats.size });
      }
    } catch (e) {
      // إذا كان الملف غير موجود بعد يتم تجاهل الخطأ
      if (e.code !== 'ENOENT') throw e;
    }
  }
}`,
          explanation: "يطبق هذا الكلاس تدوير السجلات وتتبع الحجم بالاعتماد على fs/promises و EventEmitter و crypto."
        },
        {
          filename: "src/testLogger.js",
          code: `// استيراد نظام التدوير
import { LogRotator } from './LogRotator.js';
import path from 'node:path';

// تحديد مجلد السجلات في مجلد المشروع
const logsDir = path.resolve(process.cwd(), 'logs');
// تحديد حجم صغير جداً (500 بايت) لاختبار التدوير السريع
const rotator = new LogRotator(logsDir, 'service.log', 500);

// الاستماع لأحداث تدوير الملفات
rotator.on('rotated', (data) => {
  console.log(\`🔄 تم تدوير السجل بنجاح! نُقل إلى: \${path.basename(data.archivePath)} (الحجم: \${data.previousSize} بايت)\`);
});

// محاكاة كتابة رسائل دورية مكثفة
async function simulateTraffic() {
  console.log("=== بدء محاكاة كتابة السجلات وتجربة التدوير الآلي ===");
  for (let i = 1; i <= 15; i++) {
    await rotator.log(\`عملية مستخدم رقم \${i}: تسجيل دخول ومعالجة طلب برقم معرف \${Math.random()}\`);
  }
  console.log("✓ تم تسجيل 15 عملية. افحص مجلد logs لرؤية ملف الأرشيف وملف الخدمة النشط.");
}

simulateTraffic();`,
          explanation: "يقوم هذا الملف بكتابة أحداث متتالية في ملف السجل للتأكد من إطلاق حدث التدوير وأرشفة الملف تلقائياً."
        }
      ],
      stepsToRun: [
        "توجه للمجلد: cd log-rotator",
        "شغل الأداة: node src/testLogger.js",
        "افحص مجلد logs؛ ستجد ملف service.log الجديد بجانب ملف الأرشيف archive-*.log"
      ]
    }
  },
  7: {
    summary: {
      overview: "يشرح هذا القسم كيفية بناء خوادم HTTP أصلية وقوية في Node.js دون الاعتماد على أي إطار عمل خارجي. يغطي دورة حياة كائن الطلب (IncomingMessage) والاستجابة (ServerResponse)، استخراج الترويسات ومسار الرابط ومحددات البحث (Query Parameters)، قراءة جسم الطلب (Request Body Stream)، إدارة رموز الحالة (Status Codes)، وهندسة التوجيه اليدوي (Routing) بدقة وكفاءة.",
      goldenRules: [
        {
          title: "جسم طلب HTTP يتدفق كـ Stream ولا يصل دفعة واحدة",
          desc: "يجب الاستماع لحدثي data و end لتجميع حزم البيانات (Chunks) قبل محاولة تحليل كائن الـ JSON الخاص بجسم الطلب."
        },
        {
          title: "حدد ترويسة Content-Type بدقة في كل استجابة",
          desc: "إرسال application/json أو text/html بوضوح يوجه المتصفح والعميل إلى كيفية تفسير الشحنة المستلمة بدقة."
        },
        {
          title: "استدعاء res.end() إلزامي لإنهاء الاتصال",
          desc: "إذا لم تستدعِ res.end()، سيظل المتصفح أو العميل معلقاً في حالة انتظار حتى ينقضي زمن الاتصال (Timeout)."
        },
        {
          title: "التحقق من الرابط عبر كائن new URL() المعياري",
          desc: "تجنب تقسيم النصوص يدوياً عبر split('?'); استخدم new URL(req.url, 'http://localhost') لاستخراج المسارات والـ Query بأمان."
        },
        {
          title: "إدارة أخطاء الطلبات وحماية الخادم من الانهيار",
          desc: "استمع دائماً لحدث server.on('error') وغلف معالجة البيانات بـ try/catch لمنع انهيار الخادم عند إرسال JSON غير صالح."
        },
        {
          title: "تحديد رموز الحالة المناسبة (HTTP Semantics)",
          desc: "استخدم 201 لإنشاء الموارد، و204 عند الحذف دون محتوى، و404 للمسارات غير المعرفة، و405 إذا كانت وسيلة الطلب غير مدعومة."
        },
        {
          title: "الإغلاق السلس للخادم (Graceful Shutdown)",
          desc: "عند إيقاف الخادم، استمع لإشارة SIGTERM وأوقف استقبال الطلبات الجديدة عبر server.close() مع إنهاء العمليات الجارية بهدوء."
        }
      ],
      keyTakeaways: [
        "القدرة على إنشاء خادم ويب كامل باستخدام وحدة http المدمجة في Node.js فقط.",
        "فهم معالجة تدفقات البيانات وقراءة الشحنات المرسلة بصيغة JSON من العميل.",
        "بناء موجه مسارات (Custom Router) يدعم الوسائل المختلفة GET و POST و PUT و DELETE.",
        "إتقان إرسال الترويسات وضبط ملفات تعريف الارتباط ورموز الحالة القياسية."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لبناء خوادم HTTP النقية في Node.js",
      entries: [
        { category: "Create Server", commandOrSyntax: "const server = http.createServer((req, res) => { /* logic */ });", description: "إنشاء مثيل خادم HTTP يستقبل كائنات الطلب والاستجابة", type: "code" },
        { category: "Listen", commandOrSyntax: "server.listen(PORT, () => console.log(`Server on ${PORT}`));", description: "ربط الخادم بمنفذ محدد وبدء استقبال الطلبات الواردة", type: "code" },
        { category: "Headers", commandOrSyntax: "res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });", description: "إرسال رمز الحالة وترويسات الاستجابة دفعة واحدة قبل جسم الرسالة", type: "code" },
        { category: "Send JSON", commandOrSyntax: "res.end(JSON.stringify({ success: true, data }));", description: "إنهاء الاستجابة وإرسال البيانات المشفرة بصيغة JSON للعميل", type: "code" },
        { category: "Body Chunks", commandOrSyntax: "let body = ''; req.on('data', c => body += c); req.on('end', () => {});", description: "تجميع أجزاء تدفق البيانات الواردة في الطلب حتى اكتمالها", type: "code" },
        { category: "Parse URL", commandOrSyntax: "const url = new URL(req.url, `http://${req.headers.host}`);", description: "تحليل رابط الطلب واستخراج pathname ومعاملات searchParams بأمان", type: "code" },
        { category: "Method Check", commandOrSyntax: "if (req.method === 'GET' && url.pathname === '/api/items') {}", description: "مطابقة المسار وطريقة الطلب لتوجيه العملية للمتحكم المناسب", type: "code" },
        { category: "Error 404", commandOrSyntax: "res.writeHead(404).end(JSON.stringify({ error: 'Not Found' }));", description: "إرجاع استجابة الخطأ القياسية للمسارات غير المعرفة", type: "code" },
        { category: "Timeout", commandOrSyntax: "server.timeout = 10000; // 10 seconds", description: "تحديد الحد الأقصى للمهلة الزمنية للطلبات المعلقة بالخادم", type: "code" },
        { category: "Close Server", commandOrSyntax: "server.close(() => process.exit(0));", description: "إغلاق الخادم والتوقف عن قبول اتصالات جديدة مع إنهاء الاتصالات الحالية", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-7",
      title: "مشروع عملي: خادم REST API نقي لإدارة المنتجات بدون أطر عمل (Pure HTTP Store API)",
      description: "بناء واجهة برمجية متكاملة لمتجر منتجات تدعم عمليات CRUD (إنشاء، قراءة، تعديل، حذف) مع تجميع جسم الطلب والتحقق من المدخلات بدون أي حزمة خارجية.",
      difficulty: "متوسط",
      techStack: ["Node.js", "node:http", "node:url", "Pure Vanilla Node"],
      directoryStructure: `pure-http-store/
├── package.json
├── src/
│   ├── server.js
│   ├── routes.js
│   └── store.js
└── index.js`,
      codeFiles: [
        {
          filename: "src/store.js",
          code: `// قاعدة بيانات في الذاكرة لتخزين المنتجات
const products = [
  { id: 1, name: "لوحة مفاتيح ميكانيكية", price: 120, stock: 15 },
  { id: 2, name: "شاشة ألعاب 144Hz", price: 280, stock: 8 }
];

// استرجاع كافة المنتجات
export function getAll() {
  return [...products];
}

// إضافة منتج جديد مع توليد المعرف
export function create(data) {
  const newProduct = {
    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
    name: data.name,
    price: Number(data.price),
    stock: Number(data.stock || 0)
  };
  products.push(newProduct);
  return newProduct;
}`,
          explanation: "وحدة تخزين بيانات المنتجات في الذاكرة لتمثيل عمليات القراءة والإضافة."
        },
        {
          filename: "src/server.js",
          code: `// استيراد وحدة HTTP المدمجة
import http from 'node:http';
// استيراد دوال المتجر
import { getAll, create } from './store.js';

// دالة مساعدة لتجميع وقراءة جسم الطلب
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => { raw += chunk; });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (e) {
        reject(new Error("صيغة JSON غير صالحة"));
      }
    });
    req.on('error', reject);
  });
}

// إنشاء وتصدير خادم الـ HTTP
export function buildServer() {
  return http.createServer(async (req, res) => {
    const url = new URL(req.url, \`http://\${req.headers.host || 'localhost'}\`);
    const path = url.pathname;
    const method = req.method;

    // ترويسات عامة للاستجابة
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    // توجيه المسار: GET /api/products
    if (method === 'GET' && path === '/api/products') {
      res.writeHead(200);
      return res.end(JSON.stringify({ success: true, data: getAll() }));
    }

    // توجيه المسار: POST /api/products
    if (method === 'POST' && path === '/api/products') {
      try {
        const body = await parseBody(req);
        if (!body.name || !body.price) {
          res.writeHead(400);
          return res.end(JSON.stringify({ success: false, error: "اسم المنتج وسعره مطلوبان" }));
        }
        const created = create(body);
        res.writeHead(201);
        return res.end(JSON.stringify({ success: true, data: created }));
      } catch (err) {
        res.writeHead(400);
        return res.end(JSON.stringify({ success: false, error: err.message }));
      }
    }

    // إذا لم يطابق أي مسار
    res.writeHead(404);
    res.end(JSON.stringify({ success: false, error: "المسار المطلوب غير موجود" }));
  });
}`,
          explanation: "الخادم النقي يتولى قراءة الـ Stream، مطابقة المسارات، وإرجاع استجابات JSON منسقة برموز النجاح أو الخطأ."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd pure-http-store",
        "شغل الخادم: node -e \"import('./src/server.js').then(m => m.buildServer().listen(4000, () => console.log('الخادم يعمل على المنفذ 4000 🚀')))\"",
        "أرسل طلب جلب منتجات: curl http://localhost:4000/api/products",
        "أرسل طلب إضافة منتج جديد: curl -X POST http://localhost:4000/api/products -H \"Content-Type: application/json\" -d '{\"name\":\"ماوس لاسلكي\",\"price\":45}'"
      ]
    }
  },
  8: {
    summary: {
      overview: "يمثل هذا القسم الانتقال إلى بناء واجهات برمجة التطبيقات التجارية باستخدام الإطار الأكثر شعبية عالمياً في Node.js: إطار Express.js. يغطي دورة معالجة الطلب، سلسلة الدوال الوسيطة (Middleware Pipeline)، توجيه المسارات المتقدم (Modular Routers)، استخراج معاملات المسار والبحث، التحقق الصارم من البيانات عبر مكتبات مثل Zod، المعالجة المركزية للأخطاء (Global Error Handling)، ومعايير تصميم RESTful APIs الاحترافية.",
      goldenRules: [
        {
          title: "سلسلة الـ Middleware تعمل بالترتيب الدقيق",
          desc: "ترتيب استدعاء app.use() جوهري؛ ضع وسائط التحليل والأمان في البداية، ثم مسارات الـ API، واختم دائماً بوسيط معالجة الأخطاء."
        },
        {
          title: "استدعاء next() إلزامي في الوسائط العادية",
          desc: "إذا لم ترسل استجابة بالوسيط ولم تستدعِ next()، سيتوقف الطلب ولن يصل إلى الـ Controller أو المسار التالي."
        },
        {
          title: "وسيط الأخطاء يحمل 4 معاملات دائماً (err, req, res, next)",
          desc: "يتعرف Express على وسيط معالجة الأخطاء من خلال وجود المعاملات الأربعة؛ وحذف أي معامل يجعله وسيطاً عادياً ويفقد وظيفته."
        },
        {
          title: "تفويض الأخطاء غير المتزامنة إلى next(err)",
          desc: "في كتل try/catch للمسارات غير المتزامنة، مرر الخطأ إلى next(error) ليتم التعامل معه في الوسيط المركزي الموحد للأخطاء."
        },
        {
          title: "طهّر وتحقق من البيانات عبر Zod أو Joi قبل استخدامها",
          desc: "لا تثق أبداً بما يرسله العميل؛ تحقق من نوع وصيغة كل حقل في req.body و req.query لمنع الثغرات وفساد البيانات."
        },
        {
          title: "افصل طبقات التطبيق (Routes -> Controllers -> Services)",
          desc: "اجعل ملفات المسارات مسؤولة عن التوجيه فقط، والمتحكمات عن قراءة الطلب وإرجاع الاستجابة، والخدمات عن منطق الأعمال."
        },
        {
          title: "تفعيل أمان الترويسات عبر Helmet و CORS",
          desc: "احمِ تطبيق Express من هجمات XSS و Clickjacking بتقييد الدومينات المصرح لها وإخفاء ترويسة X-Powered-By: Express."
        },
        {
          title: "استخدم مجلد express.Router() لتنظيم الموارد",
          desc: "قم بتجميع مسارات كل كيان (Users, Orders, Products) في Router مستقل وادمجه في التطبيق الرئيسي عبر app.use('/api/users', router)."
        }
      ],
      keyTakeaways: [
        "بناء وتصميم واجهات برمجة تطبيقات RESTful مهنية متوافقة مع المعايير العالمية.",
        "التحكم الكامل في خط أنابيب الوسائط (Middleware Pipeline) المدمجة والمخصصة.",
        "بناء وسيط أخطاء شامل يضمن عدم تسريب تفاصيل التتبع الحساسة في الإنتاج.",
        "التحقق الصارم من مدخلات المستخدمين وإنتاج استجابات أخطاء واضحة للعملاء."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية الشاملة لاحتراف Express.js وبناء REST APIs",
      entries: [
        { category: "Setup", commandOrSyntax: "import express from 'express'; const app = express();", description: "تهيئة تطبيق Express الأساسي", type: "code" },
        { category: "JSON Parser", commandOrSyntax: "app.use(express.json({ limit: '1mb' }));", description: "وسيط مدمج لتحليل أجسام الطلبات الواردة بصيغة JSON بأمان", type: "code" },
        { category: "Router", commandOrSyntax: "const router = express.Router(); export default router;", description: "إنشاء موجه مسارات فرعي لتنظيم الكيانات البرمجية", type: "code" },
        { category: "Route Params", commandOrSyntax: "app.get('/api/users/:id', (req, res) => { const { id } = req.params; });", description: "استخراج المعاملات الديناميكية المضمنة في مسار الرابط", type: "code" },
        { category: "Query String", commandOrSyntax: "const { page = 1, limit = 10 } = req.query;", description: "استخراج معاملات التصفية والترقيم المرسلة بعد علامة الاستفهام في الرابط", type: "code" },
        { category: "Status & Send", commandOrSyntax: "res.status(201).json({ status: 'success', data });", description: "تحديد رمز الحالة وإرسال استجابة JSON مهيكلة للعميل", type: "code" },
        { category: "Custom Middleware", commandOrSyntax: "const logger = (req, res, next) => { console.log(req.url); next(); };", description: "دالة وسيطة تعترض الطلب وتسجل البيانات ثم تمرره للمسار التالي", type: "code" },
        { category: "Error Middleware", commandOrSyntax: "app.use((err, req, res, next) => { res.status(err.status || 500).json({ error: err.message }); });", description: "وسيط معالجة الأخطاء المركزي الشامل لكافة مسارات التطبيق", type: "code" },
        { category: "Static Files", commandOrSyntax: "app.use('/public', express.static('public'));", description: "تقديم الملفات الثابتة والصور ومستندات HTML عبر مسار مخصص", type: "code" },
        { category: "Async Handler", commandOrSyntax: "const catchAsync = fn => (req, res, next) => fn(req, res, next).catch(next);", description: "غلاف برمجي لتفادي تكرار كتل try/catch في المسارات غير المتزامنة", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-8",
      title: "مشروع عملي: واجهة برمجية متكاملة للمنتجات مع التحقق والتحكم بالأخطاء (Express Product REST API)",
      description: "بناء تطبيق Express احترافي يحتوي على مسارات المنتجات مع الترقيم والبحث، وسيط للتحقق من صحة المدخلات، وسيط لتسجيل الطلبات، ووسيط أخطاء عالمي مهيكل.",
      difficulty: "متوسط",
      techStack: ["Node.js", "Express.js", "Middleware Pattern", "RESTful Architecture"],
      directoryStructure: `express-product-api/
├── package.json
├── src/
│   ├── middlewares/
│   │   ├── errorHandler.js
│   │   └── validator.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── controllers/
│   │   └── productController.js
│   └── app.js
└── index.js`,
      codeFiles: [
        {
          filename: "src/middlewares/errorHandler.js",
          code: `// وسيط معالجة الأخطاء المركزي الموحد (Global Error Handler)
export const errorHandler = (err, req, res, next) => {
  // تحديد رمز الحالة الافتراضي
  const statusCode = err.statusCode || 500;
  // تحديد رسالة الخطأ المناسبة للمستخدم
  const message = err.message || "حدث خطأ غير متوقع في الخادم";

  // تسجيل تفاصيل الخطأ في كونسول المطور
  console.error(\`[\${new Date().toISOString()}] خطأ في \${req.method} \${req.url}:\`, err.stack || err);

  // إرسال استجابة JSON موحدة للعميل
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    // إخفاء مسار الخطأ stack في بيئة الإنتاج لحماية السيرفر
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  });
};`,
          explanation: "وسيط يلتقط أي خطأ يمر عبر next(err) ويعيد استجابة موحدة مع إخفاء تفاصيل السيرفر الداخلية."
        },
        {
          filename: "src/controllers/productController.js",
          code: `// مخزن المنتجات التجريبي
let products = [
  { id: 1, title: "سماعات عازلة للضوضاء", price: 150, category: "electronics" },
  { id: 2, title: "حامل حاسوب محمول مريح", price: 45, category: "accessories" }
];

// جلب المنتجات مع دعم البحث والتصفية
export const getProducts = (req, res) => {
  const { search, category } = req.query;
  let result = [...products];

  if (category) {
    result = result.filter(p => p.category === category);
  }
  if (search) {
    result = result.filter(p => p.title.includes(search));
  }

  res.status(200).json({ status: 'success', count: result.length, data: result });
};

// إنشاء منتج جديد
export const createProduct = (req, res, next) => {
  try {
    const { title, price, category } = req.body;
    if (!title || !price) {
      const error = new Error("العنوان والسعر حقول إجبارية");
      error.statusCode = 400;
      throw error;
    }
    const newProduct = { id: Date.now(), title, price: Number(price), category: category || 'general' };
    products.push(newProduct);
    res.status(201).json({ status: 'success', data: newProduct });
  } catch (error) {
    next(error);
  }
};`,
          explanation: "متحكم المنتجات يفصل منطق قراءة المدخلات ومعالجة البيانات وإرجاع الرموز القياسية."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd express-product-api",
        "تأكد من تثبيت Express: npm install express",
        "شغل الخادم: node index.js",
        "جرب مسار جلب المنتجات: curl http://localhost:3000/api/products"
      ]
    }
  }
};
