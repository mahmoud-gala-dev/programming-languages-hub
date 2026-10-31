// src/data/sections/section1.js
// القسم الأول: أساسيات البرمجة وتطوير الويب
// خريطة طريق Node.js الشاملة - القسم رقم 1

export const SECTION_1 = {
  "id": 1,
  "number": "01",
  "title": "القسم الأول: أساسيات البرمجة وتطوير الويب",
  "englishTitle": "Web Development Fundamentals",
  "badge": "مبتدئ جداً",
  "color": "from-blue-600 to-cyan-500",
  "description": "فهم بنية الويب، دور المتصفح والخادم، بروتوكولات الإنترنت (HTTP/HTTPS/TCP)، أساسيات واجهات البرمجة (APIs)، وأساسيات سطر الأوامر (Terminal).",
  "summary": {
    "overview": "يقدم هذا القسم الأساس المعرفي الصلب الذي لا غنى عنه لأي مطور برمجيات خلفية (Backend Developer). يغطي كيفية عمل شبكة الإنترنت، بروتوكولات الاتصال المعيارية مثل HTTP وTCP، دور نظام أسماء النطاقات DNS، والتعامل الاحترافي مع سطر الأوامر الطرفية (CLI) لبناء وتوجيه التطبيقات بثقة.",
    "goldenRules": [
      {
        "title": "فصل الاهتمامات بين العميل والخادم",
        "desc": "يعمل المتصفح كواجهة عرض وتفاعل (Frontend)، بينما يتولى الخادم (Backend) التحقق الأمني، معالجة منطق الأعمال، وحفظ البيانات الحساسة بعيداً عن أيدي المستخدمين."
      },
      {
        "title": "بروتوكول HTTP عديم الحالة (Stateless)",
        "desc": "كل طلب HTTP مستقل بذاته؛ لذا نستخدم ملفات تعريف الارتباط (Cookies) أو رموز التوثيق (Tokens) للحفاظ على حالة جلسة المستخدم بين الطلبات المتعاقبة."
      },
      {
        "title": "الفرق الجوهري بين TCP وUDP",
        "desc": "استخدم TCP عندما تكون موثوقية وصول البيانات وترتيبها إلزامية مثل تطبيقات الويب ونقل الملفات، بينما استخدم UDP في البث المباشر والألعاب لتقليل زمن التأخير."
      },
      {
        "title": "الأمان يبدأ بتشفير الاتصال (HTTPS)",
        "desc": "لا تقم بنقل أي بيانات حساسة عبر بروتوكول HTTP غير المشفر؛ فشهادات TLS/SSL تضمن تشفير قناة الاتصال ومنع هجمات التنصت (Man-in-the-Middle)."
      },
      {
        "title": "دقة تصميم نقاط النهاية (RESTful Endpoints)",
        "desc": "اجعل أسماء نقاط النهاية تعبر عن الموارد بصيغة الجمع واعتمد أفعال HTTP القياسية (GET, POST, PUT, DELETE) للتعبير عن العمليات بدقة."
      },
      {
        "title": "إتقان سطر الأوامر يضاعف إنتاجيتك",
        "desc": "تعتمد بيئات الإنتاج والسيرفرات السحابية كلياً على الطرفية (Bash / PowerShell)؛ لذا فإن معرفة إدارة المسارات والعمليات مهارة محورية لا بديل عنها."
      },
      {
        "title": "التعامل الصارم مع رموز الاستجابة (HTTP Status Codes)",
        "desc": "لا ترجع الرمز 200 دائماً مع نص خطأ؛ استخدم 400 للبيانات غير الصالحة، 401 لغياب المصادقة، 403 لنقص الصلاحيات، و500 للأخطاء الداخلية."
      }
    ],
    "keyTakeaways": [
      "استيعاب دورة حياة طلب HTTP من لحظة ضغط المستخدم وحتى استلام الاستجابة.",
      "القدرة على التفريق الدقيق بين عناوين IP ومنافذ الاتصال Ports وأسماء النطاقات.",
      "احتراف أوامر التنقل وإدارة الملفات والصلاحيات عبر Terminal.",
      "فهم معايير نقل البيانات بصيغة JSON بين الأنظمة المختلفة."
    ]
  },
  "cheatSheet": {
    "title": "البطاقة المرجعية لأساسيات الويب والشبكات والطرفية",
    "entries": [
      {
        "category": "Terminal / CLI",
        "commandOrSyntax": "pwd / cd / ls -la",
        "description": "معرفة المجلد الحالي، تغيير المسار، وعرض كافة الملفات المخفية وتفاصيلها",
        "type": "cli"
      },
      {
        "category": "Terminal / CLI",
        "commandOrSyntax": "mkdir -p src/controllers",
        "description": "إنشاء مجلدات فرعية متداخلة دفعة واحدة بأمان",
        "type": "cli"
      },
      {
        "category": "Terminal / CLI",
        "commandOrSyntax": "rm -rf dist/",
        "description": "حذف مجلد بكامل محتوياته بشكل إجباري متكرر (بحذر شديد)",
        "type": "cli"
      },
      {
        "category": "Terminal / CLI",
        "commandOrSyntax": "curl -I https://api.example.com",
        "description": "فحص ترويسات الاستجابة ورقم الحالة لموقع أو واجهة برمجية عبر الطرفية",
        "type": "cli"
      },
      {
        "category": "Networking",
        "commandOrSyntax": "ping google.com",
        "description": "فحص زمن الوصول والاتصال بالشبكة عبر حزم ICMP",
        "type": "cli"
      },
      {
        "category": "HTTP Methods",
        "commandOrSyntax": "GET, POST, PUT, PATCH, DELETE",
        "description": "الأفعال القياسية لجلب، إنشاء، استبدال، تحديث جزئي، وحذف الموارد",
        "type": "concept"
      },
      {
        "category": "HTTP Status",
        "commandOrSyntax": "200 OK / 201 Created / 204 No Content",
        "description": "عائلة رموز النجاح القياسية لطلبات الويب",
        "type": "concept"
      },
      {
        "category": "HTTP Status",
        "commandOrSyntax": "400 Bad Request / 401 Unauthorized / 404 Not Found",
        "description": "عائلة أخطاء العميل وإدخال البيانات المفقودة أو غير المصرح بها",
        "type": "concept"
      },
      {
        "category": "Data Formats",
        "commandOrSyntax": "JSON.stringify(data) / JSON.parse(text)",
        "description": "تحويل كائنات JavaScript إلى نصوص JSON والعكس في المعالجة",
        "type": "code"
      },
      {
        "category": "DNS & Ports",
        "commandOrSyntax": "Port 80 (HTTP) / Port 443 (HTTPS) / Port 3000 (Dev)",
        "description": "المنافذ الافتراضية الأكثر شيوعاً في اتصالات الويب والتطوير المحلي",
        "type": "concept"
      }
    ],
    "items": [
      {
        "category": "Terminal / CLI",
        "commandOrSyntax": "pwd / cd / ls -la",
        "description": "معرفة المجلد الحالي، تغيير المسار، وعرض كافة الملفات المخفية وتفاصيلها",
        "type": "cli",
        "command": "pwd / cd / ls -la"
      },
      {
        "category": "Terminal / CLI",
        "commandOrSyntax": "mkdir -p src/controllers",
        "description": "إنشاء مجلدات فرعية متداخلة دفعة واحدة بأمان",
        "type": "cli",
        "command": "mkdir -p src/controllers"
      },
      {
        "category": "Terminal / CLI",
        "commandOrSyntax": "rm -rf dist/",
        "description": "حذف مجلد بكامل محتوياته بشكل إجباري متكرر (بحذر شديد)",
        "type": "cli",
        "command": "rm -rf dist/"
      },
      {
        "category": "Terminal / CLI",
        "commandOrSyntax": "curl -I https://api.example.com",
        "description": "فحص ترويسات الاستجابة ورقم الحالة لموقع أو واجهة برمجية عبر الطرفية",
        "type": "cli",
        "command": "curl -I https://api.example.com"
      },
      {
        "category": "Networking",
        "commandOrSyntax": "ping google.com",
        "description": "فحص زمن الوصول والاتصال بالشبكة عبر حزم ICMP",
        "type": "cli",
        "command": "ping google.com"
      },
      {
        "category": "HTTP Methods",
        "commandOrSyntax": "GET, POST, PUT, PATCH, DELETE",
        "description": "الأفعال القياسية لجلب، إنشاء، استبدال، تحديث جزئي، وحذف الموارد",
        "type": "concept",
        "command": "GET, POST, PUT, PATCH, DELETE"
      },
      {
        "category": "HTTP Status",
        "commandOrSyntax": "200 OK / 201 Created / 204 No Content",
        "description": "عائلة رموز النجاح القياسية لطلبات الويب",
        "type": "concept",
        "command": "200 OK / 201 Created / 204 No Content"
      },
      {
        "category": "HTTP Status",
        "commandOrSyntax": "400 Bad Request / 401 Unauthorized / 404 Not Found",
        "description": "عائلة أخطاء العميل وإدخال البيانات المفقودة أو غير المصرح بها",
        "type": "concept",
        "command": "400 Bad Request / 401 Unauthorized / 404 Not Found"
      },
      {
        "category": "Data Formats",
        "commandOrSyntax": "JSON.stringify(data) / JSON.parse(text)",
        "description": "تحويل كائنات JavaScript إلى نصوص JSON والعكس في المعالجة",
        "type": "code",
        "command": "JSON.stringify(data) / JSON.parse(text)"
      },
      {
        "category": "DNS & Ports",
        "commandOrSyntax": "Port 80 (HTTP) / Port 443 (HTTPS) / Port 3000 (Dev)",
        "description": "المنافذ الافتراضية الأكثر شيوعاً في اتصالات الويب والتطوير المحلي",
        "type": "concept",
        "command": "Port 80 (HTTP) / Port 443 (HTTPS) / Port 3000 (Dev)"
      }
    ]
  },
  "miniProject": {
    "id": "project-sec-1",
    "title": "مشروع عملي: محاكي شبكات وفحص الخوادم (Web Network Simulator)",
    "description": "بناء أداة سطر أوامر تفاعلية تحاكي فحص أسماء النطاقات (DNS Lookup)، قياس زمن الاستجابة (Latency Probe)، وتحليل ترويسات HTTP لتقييم صحة الخوادم.",
    "difficulty": "مبتدئ",
    "techStack": [
      "Node.js",
      "node:dns/promises",
      "node:http",
      "node:perf_hooks"
    ],
    "directoryStructure": "web-network-simulator/\n├── package.json\n├── src/\n│   ├── networkChecker.js\n│   └── index.js\n└── README.md",
    "codeFiles": [
      {
        "filename": "src/networkChecker.js",
        "code": "// استيراد وحدة نظام أسماء النطاقات للتعامل مع العناوين\nimport dns from 'node:dns/promises';\n// استيراد دالة قياس الأداء بدقة عالية\nimport { performance } from 'node:perf_hooks';\n\n// دالة فحص عنوان النطاق وترجمته إلى عناوين IP حقيقية\nexport async function resolveDomain(domain) {\n  // تسجيل بدء عملية الاستعلام في الطرفية\n  console.log(`بدء ترجمة النطاق: ${domain}...`);\n  // قياس توقيت بداية الاستعلام\n  const startTime = performance.now();\n  // طلب سجلات A للعنوان المطلوب من خادم DNS\n  const addresses = await dns.resolve4(domain);\n  // حساب الوقت المستغرق بالميلي ثانية\n  const duration = (performance.now() - startTime).toFixed(2);\n  // إرجاع كائن منظم يحتوي على النتيجة والزمن\n  return { domain, addresses, durationMs: duration };\n}",
        "explanation": "يقوم هذا الملف بالاتصال بخوادم الـ DNS لترجمة أسماء النطاقات إلى عناوين IPv4 حقيقية مع قياس زمن الاستجابة."
      },
      {
        "filename": "src/index.js",
        "code": "// استيراد وظيفة فحص النطاقات من الوحدة المجاورة\nimport { resolveDomain } from './networkChecker.js';\n\n// دالة تشغيل التطبيق الرئيسية المتزامنة مع المستخدم\nasync function main() {\n  // تعريف قائمة النطاقات المستهدفة للفحص\n  const targets = ['google.com', 'nodejs.org', 'github.com'];\n  // طباعة رسالة ترحيبية وتحديد وقت البدء\n  console.log(\"=== محاكي فحص النطاقات والشبكة في Node.js ===\");\n  // المرور على كل نطاق وإجراء الفحص\n  for (const domain of targets) {\n    try {\n      // تنفيذ الفحص غير المتزامن وانتظار النتيجة\n      const result = await resolveDomain(domain);\n      // طباعة عنوان الـ IP المستخرج بنجاح\n      console.log(`✓ ${result.domain} -> ${result.addresses.join(', ')} (${result.durationMs} ms)`);\n    } catch (error) {\n      // طباعة رسالة خطأ واضحة في حال تعثر الوصول للنطاق\n      console.error(`✕ تعذر الاتصال بالنطاق ${domain}: ${error.message}`);\n    }\n  }\n}\n\n// تنفيذ الدالة الرئيسية فور تحميل الملف\nmain();",
        "explanation": "الملف الرئيسي يقوم بتشغيل حلقة معالجة لعدة نطاقات عالمية وطباعة نتائج التحليل الزمني وعناوين IP المستخرجة."
      }
    ],
    "stepsToRun": [
      "افتح الطرفية وتوجه إلى مجلد المشروع: cd web-network-simulator",
      "تأكد من وجود Node.js مثبت على جهازك: node -v",
      "شغل الأداة مباشرة: node src/index.js",
      "لاحظ عناوين IP المسترجعة وسرعة استجابة خوادم DNS"
    ]
  },
  "project": {
    "id": "project-sec-1",
    "title": "مشروع عملي: محاكي شبكات وفحص الخوادم (Web Network Simulator)",
    "scenario": "بناء أداة سطر أوامر تفاعلية تحاكي فحص أسماء النطاقات (DNS Lookup)، قياس زمن الاستجابة (Latency Probe)، وتحليل ترويسات HTTP لتقييم صحة الخوادم.",
    "requirements": [
      "افتح الطرفية وتوجه إلى مجلد المشروع: cd web-network-simulator",
      "تأكد من وجود Node.js مثبت على جهازك: node -v",
      "شغل الأداة مباشرة: node src/index.js",
      "لاحظ عناوين IP المسترجعة وسرعة استجابة خوادم DNS"
    ],
    "completeSolution": "// src/networkChecker.js\n// استيراد وحدة نظام أسماء النطاقات للتعامل مع العناوين\nimport dns from 'node:dns/promises';\n// استيراد دالة قياس الأداء بدقة عالية\nimport { performance } from 'node:perf_hooks';\n\n// دالة فحص عنوان النطاق وترجمته إلى عناوين IP حقيقية\nexport async function resolveDomain(domain) {\n  // تسجيل بدء عملية الاستعلام في الطرفية\n  console.log(`بدء ترجمة النطاق: ${domain}...`);\n  // قياس توقيت بداية الاستعلام\n  const startTime = performance.now();\n  // طلب سجلات A للعنوان المطلوب من خادم DNS\n  const addresses = await dns.resolve4(domain);\n  // حساب الوقت المستغرق بالميلي ثانية\n  const duration = (performance.now() - startTime).toFixed(2);\n  // إرجاع كائن منظم يحتوي على النتيجة والزمن\n  return { domain, addresses, durationMs: duration };\n}\n\n// src/index.js\n// استيراد وظيفة فحص النطاقات من الوحدة المجاورة\nimport { resolveDomain } from './networkChecker.js';\n\n// دالة تشغيل التطبيق الرئيسية المتزامنة مع المستخدم\nasync function main() {\n  // تعريف قائمة النطاقات المستهدفة للفحص\n  const targets = ['google.com', 'nodejs.org', 'github.com'];\n  // طباعة رسالة ترحيبية وتحديد وقت البدء\n  console.log(\"=== محاكي فحص النطاقات والشبكة في Node.js ===\");\n  // المرور على كل نطاق وإجراء الفحص\n  for (const domain of targets) {\n    try {\n      // تنفيذ الفحص غير المتزامن وانتظار النتيجة\n      const result = await resolveDomain(domain);\n      // طباعة عنوان الـ IP المستخرج بنجاح\n      console.log(`✓ ${result.domain} -> ${result.addresses.join(', ')} (${result.durationMs} ms)`);\n    } catch (error) {\n      // طباعة رسالة خطأ واضحة في حال تعثر الوصول للنطاق\n      console.error(`✕ تعذر الاتصال بالنطاق ${domain}: ${error.message}`);\n    }\n  }\n}\n\n// تنفيذ الدالة الرئيسية فور تحميل الملف\nmain();"
  },
  "topics": [
    {
      "id": "1.1",
      "title": "مقدمة في تطوير الويب",
      "englishTitle": "مقدمة في تطوير الويب",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم مقدمة في تطوير الويب وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-1.1-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (مقدمة في تطوير الويب) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (مقدمة في تطوير الويب) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-1.1-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (مقدمة في تطوير الويب)؟",
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
          "id": "q-1.1-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (مقدمة في تطوير الويب)، ما هو التصرف الهندسي السليم؟",
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
        "id": "ex-1.1",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (مقدمة في تطوير الويب)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (مقدمة في تطوير الويب) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع مقدمة في تطوير الويب\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"مقدمة في تطوير الويب\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "1.1.1",
          "title": "ما هو تطوير الويب؟",
          "englishTitle": "تطوير الويب",
          "definition": "يُقصد بـ (ما هو تطوير الويب؟) أحد المفاهيم المحورية في مسار مقدمة في تطوير الويب ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه نظام DNS دليل أرقام الهواتف الشامل؛ حيث تبحث عن اسم الشخص (الدومين) فيعطيك رقم هاتفه الفعلي (عنوان IP) لتتصل به.",
          "why": "تبرز أهمية (ما هو تطوير الويب؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ما هو تطوير الويب؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ما هو تطوير الويب؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.1.1",
            "title": "ما هو تطوير الويب؟",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (ما هو تطوير الويب؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تطوير الويب' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ما هو تطوير الويب؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ما هو تطوير الويب؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ما هو تطوير الويب؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ما هو تطوير الويب؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو تطوير الويب؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ما هو تطوير الويب؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.1.2",
          "title": "الفرق بين Frontend وBackend",
          "englishTitle": "Frontend وBackend",
          "definition": "يُقصد بـ (الفرق بين Frontend وBackend) أحد المفاهيم المحورية في مسار مقدمة في تطوير الويب ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه طلب HTTP إرسال رسالة بريدية مسجلة بظرف رسمي يحمل عنوان المرسل والهدف وترويسة المحتوى وطابع التأكيد.",
          "why": "تبرز أهمية (الفرق بين Frontend وBackend) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ الفرق بين Frontend وBackend\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: الفرق بين Frontend وBackend\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.1.2",
            "title": "الفرق بين Frontend وBackend",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (الفرق بين Frontend وBackend) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Frontend وBackend' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (الفرق بين Frontend وBackend) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (الفرق بين Frontend وBackend) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على الفرق بين Frontend وBackend",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (الفرق بين Frontend وBackend) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Frontend وBackend\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: الفرق بين Frontend وBackend...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.1.3",
          "title": "كيف يعمل المتصفح والخادم؟",
          "englishTitle": "كيف يعمل المتصفح والخادم",
          "definition": "يُقصد بـ (كيف يعمل المتصفح والخادم؟) أحد المفاهيم المحورية في مسار مقدمة في تطوير الويب ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه المنافذ (Ports) البوابات المرقمة في مجمع سكني ضخم؛ العنوان واحد (IP) لكن كل بوابة تقود لشقة أو خدمة محددة.",
          "why": "تبرز أهمية (كيف يعمل المتصفح والخادم؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ كيف يعمل المتصفح والخادم؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: كيف يعمل المتصفح والخادم؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.1.3",
            "title": "كيف يعمل المتصفح والخادم؟",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (كيف يعمل المتصفح والخادم؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'كيف يعمل المتصفح والخادم' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (كيف يعمل المتصفح والخادم؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (كيف يعمل المتصفح والخادم؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على كيف يعمل المتصفح والخادم؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (كيف يعمل المتصفح والخادم؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين كيف يعمل المتصفح والخادم؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: كيف يعمل المتصفح والخادم؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.1.4",
          "title": "مفهوم Client وServer",
          "englishTitle": "Client وServer",
          "definition": "يُقصد بـ (مفهوم Client وServer) أحد المفاهيم المحورية في مسار مقدمة في تطوير الويب ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه نموذج العميل والخادم (Client/Server) زبون المطعم الذي يطلب وجبة من قائمة الطعام والنادل الذي ينقل الطلب للمطبخ ليتم تحضيره.",
          "why": "تبرز أهمية (مفهوم Client وServer) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم Client وServer\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم Client وServer\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.1.4",
            "title": "مفهوم Client وServer",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (مفهوم Client وServer) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Client وServer' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم Client وServer) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم Client وServer) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم Client وServer",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم Client وServer) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Client وServer\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم Client وServer...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.1.5",
          "title": "مفهوم Request وResponse",
          "englishTitle": "Request وResponse",
          "definition": "يُقصد بـ (مفهوم Request وResponse) أحد المفاهيم المحورية في مسار مقدمة في تطوير الويب ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه نظام DNS دليل أرقام الهواتف الشامل؛ حيث تبحث عن اسم الشخص (الدومين) فيعطيك رقم هاتفه الفعلي (عنوان IP) لتتصل به.",
          "why": "تبرز أهمية (مفهوم Request وResponse) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم Request وResponse\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم Request وResponse\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.1.5",
            "title": "مفهوم Request وResponse",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (مفهوم Request وResponse) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Request وResponse' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم Request وResponse) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم Request وResponse) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم Request وResponse",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم Request وResponse) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Request وResponse\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم Request وResponse...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.1.6",
          "title": "كيف تنتقل البيانات عبر الإنترنت؟",
          "englishTitle": "كيف تنتقل البيانات عبر الإنترنت",
          "definition": "يُقصد بـ (كيف تنتقل البيانات عبر الإنترنت؟) أحد المفاهيم المحورية في مسار مقدمة في تطوير الويب ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه طلب HTTP إرسال رسالة بريدية مسجلة بظرف رسمي يحمل عنوان المرسل والهدف وترويسة المحتوى وطابع التأكيد.",
          "why": "تبرز أهمية (كيف تنتقل البيانات عبر الإنترنت؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ كيف تنتقل البيانات عبر الإنترنت؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: كيف تنتقل البيانات عبر الإنترنت؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.1.6",
            "title": "كيف تنتقل البيانات عبر الإنترنت؟",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (كيف تنتقل البيانات عبر الإنترنت؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'كيف تنتقل البيانات عبر الإنترنت' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (كيف تنتقل البيانات عبر الإنترنت؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (كيف تنتقل البيانات عبر الإنترنت؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على كيف تنتقل البيانات عبر الإنترنت؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (كيف تنتقل البيانات عبر الإنترنت؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين كيف تنتقل البيانات عبر الإنترنت؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: كيف تنتقل البيانات عبر الإنترنت؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "1.2",
      "title": "أساسيات الإنترنت والشبكات",
      "englishTitle": "أساسيات الإنترنت والشبكات",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم أساسيات الإنترنت والشبكات وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-1.2-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (أساسيات الإنترنت والشبكات) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (أساسيات الإنترنت والشبكات) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-1.2-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (أساسيات الإنترنت والشبكات)؟",
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
          "id": "q-1.2-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (أساسيات الإنترنت والشبكات)، ما هو التصرف الهندسي السليم؟",
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
        "id": "ex-1.2",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (أساسيات الإنترنت والشبكات)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (أساسيات الإنترنت والشبكات) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع أساسيات الإنترنت والشبكات\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"أساسيات الإنترنت والشبكات\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "1.2.1",
          "title": "ما هو عنوان IP؟",
          "englishTitle": "عنوان IP",
          "definition": "يُقصد بـ (ما هو عنوان IP؟) أحد المفاهيم المحورية في مسار أساسيات الإنترنت والشبكات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه طلب HTTP إرسال رسالة بريدية مسجلة بظرف رسمي يحمل عنوان المرسل والهدف وترويسة المحتوى وطابع التأكيد.",
          "why": "تبرز أهمية (ما هو عنوان IP؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ما هو عنوان IP؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ما هو عنوان IP؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.2.1",
            "title": "ما هو عنوان IP؟",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (ما هو عنوان IP؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'عنوان IP' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ما هو عنوان IP؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ما هو عنوان IP؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ما هو عنوان IP؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ما هو عنوان IP؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو عنوان IP؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ما هو عنوان IP؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.2.2",
          "title": "ما هو DNS وكيف يعمل؟",
          "englishTitle": "DNS وكيف يعمل",
          "definition": "يُقصد بـ (ما هو DNS وكيف يعمل؟) أحد المفاهيم المحورية في مسار أساسيات الإنترنت والشبكات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه المنافذ (Ports) البوابات المرقمة في مجمع سكني ضخم؛ العنوان واحد (IP) لكن كل بوابة تقود لشقة أو خدمة محددة.",
          "why": "تبرز أهمية (ما هو DNS وكيف يعمل؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ما هو DNS وكيف يعمل؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ما هو DNS وكيف يعمل؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.2.2",
            "title": "ما هو DNS وكيف يعمل؟",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (ما هو DNS وكيف يعمل؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'DNS وكيف يعمل' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ما هو DNS وكيف يعمل؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ما هو DNS وكيف يعمل؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ما هو DNS وكيف يعمل؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ما هو DNS وكيف يعمل؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو DNS وكيف يعمل؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ما هو DNS وكيف يعمل؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.2.3",
          "title": "مفهوم Domain وHosting",
          "englishTitle": "Domain وHosting",
          "definition": "يُقصد بـ (مفهوم Domain وHosting) أحد المفاهيم المحورية في مسار أساسيات الإنترنت والشبكات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه نموذج العميل والخادم (Client/Server) زبون المطعم الذي يطلب وجبة من قائمة الطعام والنادل الذي ينقل الطلب للمطبخ ليتم تحضيره.",
          "why": "تبرز أهمية (مفهوم Domain وHosting) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم Domain وHosting\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم Domain وHosting\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.2.3",
            "title": "مفهوم Domain وHosting",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (مفهوم Domain وHosting) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Domain وHosting' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم Domain وHosting) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم Domain وHosting) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم Domain وHosting",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم Domain وHosting) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Domain وHosting\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم Domain وHosting...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.2.4",
          "title": "الفرق بين HTTP وHTTPS",
          "englishTitle": "HTTP وHTTPS",
          "definition": "يُقصد بـ (الفرق بين HTTP وHTTPS) أحد المفاهيم المحورية في مسار أساسيات الإنترنت والشبكات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه نظام DNS دليل أرقام الهواتف الشامل؛ حيث تبحث عن اسم الشخص (الدومين) فيعطيك رقم هاتفه الفعلي (عنوان IP) لتتصل به.",
          "why": "تبرز أهمية (الفرق بين HTTP وHTTPS) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ الفرق بين HTTP وHTTPS\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: الفرق بين HTTP وHTTPS\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.2.4",
            "title": "الفرق بين HTTP وHTTPS",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (الفرق بين HTTP وHTTPS) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'HTTP وHTTPS' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (الفرق بين HTTP وHTTPS) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (الفرق بين HTTP وHTTPS) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على الفرق بين HTTP وHTTPS",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (الفرق بين HTTP وHTTPS) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين HTTP وHTTPS\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: الفرق بين HTTP وHTTPS...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.2.5",
          "title": "مفهوم TCP وUDP",
          "englishTitle": "TCP وUDP",
          "definition": "يُقصد بـ (مفهوم TCP وUDP) أحد المفاهيم المحورية في مسار أساسيات الإنترنت والشبكات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه طلب HTTP إرسال رسالة بريدية مسجلة بظرف رسمي يحمل عنوان المرسل والهدف وترويسة المحتوى وطابع التأكيد.",
          "why": "تبرز أهمية (مفهوم TCP وUDP) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم TCP وUDP\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم TCP وUDP\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.2.5",
            "title": "مفهوم TCP وUDP",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (مفهوم TCP وUDP) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'TCP وUDP' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم TCP وUDP) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم TCP وUDP) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم TCP وUDP",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم TCP وUDP) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم TCP وUDP\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم TCP وUDP...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.2.6",
          "title": "ما هي المنافذ Ports؟",
          "englishTitle": "المنافذ Ports",
          "definition": "يُقصد بـ (ما هي المنافذ Ports؟) أحد المفاهيم المحورية في مسار أساسيات الإنترنت والشبكات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه المنافذ (Ports) البوابات المرقمة في مجمع سكني ضخم؛ العنوان واحد (IP) لكن كل بوابة تقود لشقة أو خدمة محددة.",
          "why": "تبرز أهمية (ما هي المنافذ Ports؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ما هي المنافذ Ports؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ما هي المنافذ Ports؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.2.6",
            "title": "ما هي المنافذ Ports؟",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (ما هي المنافذ Ports؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'المنافذ Ports' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ما هي المنافذ Ports؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ما هي المنافذ Ports؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ما هي المنافذ Ports؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ما هي المنافذ Ports؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ما هي المنافذ Ports؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ما هي المنافذ Ports؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.2.7",
          "title": "ما هي بروتوكولات الاتصال؟",
          "englishTitle": "بروتوكولات الاتصال",
          "definition": "يُقصد بـ (ما هي بروتوكولات الاتصال؟) أحد المفاهيم المحورية في مسار أساسيات الإنترنت والشبكات ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه نموذج العميل والخادم (Client/Server) زبون المطعم الذي يطلب وجبة من قائمة الطعام والنادل الذي ينقل الطلب للمطبخ ليتم تحضيره.",
          "why": "تبرز أهمية (ما هي بروتوكولات الاتصال؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ما هي بروتوكولات الاتصال؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ما هي بروتوكولات الاتصال؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.2.7",
            "title": "ما هي بروتوكولات الاتصال؟",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (ما هي بروتوكولات الاتصال؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'بروتوكولات الاتصال' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ما هي بروتوكولات الاتصال؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ما هي بروتوكولات الاتصال؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ما هي بروتوكولات الاتصال؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ما هي بروتوكولات الاتصال؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ما هي بروتوكولات الاتصال؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ما هي بروتوكولات الاتصال؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "1.3",
      "title": "أساسيات واجهات البرمجة",
      "englishTitle": "أساسيات واجهات البرمجة",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم أساسيات واجهات البرمجة وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-1.3-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (أساسيات واجهات البرمجة) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (أساسيات واجهات البرمجة) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-1.3-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (أساسيات واجهات البرمجة)؟",
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
          "id": "q-1.3-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (أساسيات واجهات البرمجة)، ما هو التصرف الهندسي السليم؟",
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
        "id": "ex-1.3",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (أساسيات واجهات البرمجة)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (أساسيات واجهات البرمجة) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع أساسيات واجهات البرمجة\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"أساسيات واجهات البرمجة\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "1.3.1",
          "title": "ما هي API؟",
          "englishTitle": "API",
          "definition": "يُقصد بـ (ما هي API؟) أحد المفاهيم المحورية في مسار أساسيات واجهات البرمجة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه المنافذ (Ports) البوابات المرقمة في مجمع سكني ضخم؛ العنوان واحد (IP) لكن كل بوابة تقود لشقة أو خدمة محددة.",
          "why": "تبرز أهمية (ما هي API؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ما هي API؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ما هي API؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.3.1",
            "title": "ما هي API؟",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (ما هي API؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'API' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ما هي API؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ما هي API؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ما هي API؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ما هي API؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ما هي API؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ما هي API؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.3.2",
          "title": "الفرق بين API وREST API",
          "englishTitle": "API وREST API",
          "definition": "يُقصد بـ (الفرق بين API وREST API) أحد المفاهيم المحورية في مسار أساسيات واجهات البرمجة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه نموذج العميل والخادم (Client/Server) زبون المطعم الذي يطلب وجبة من قائمة الطعام والنادل الذي ينقل الطلب للمطبخ ليتم تحضيره.",
          "why": "تبرز أهمية (الفرق بين API وREST API) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ الفرق بين API وREST API\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: الفرق بين API وREST API\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.3.2",
            "title": "الفرق بين API وREST API",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (الفرق بين API وREST API) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'API وREST API' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (الفرق بين API وREST API) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (الفرق بين API وREST API) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على الفرق بين API وREST API",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (الفرق بين API وREST API) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين API وREST API\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: الفرق بين API وREST API...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.3.3",
          "title": "ما هو JSON؟",
          "englishTitle": "JSON",
          "definition": "يُقصد بـ (ما هو JSON؟) أحد المفاهيم المحورية في مسار أساسيات واجهات البرمجة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه نظام DNS دليل أرقام الهواتف الشامل؛ حيث تبحث عن اسم الشخص (الدومين) فيعطيك رقم هاتفه الفعلي (عنوان IP) لتتصل به.",
          "why": "تبرز أهمية (ما هو JSON؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ما هو JSON؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ما هو JSON؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.3.3",
            "title": "ما هو JSON؟",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (ما هو JSON؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'JSON' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ما هو JSON؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ما هو JSON؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ما هو JSON؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ما هو JSON؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو JSON؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ما هو JSON؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.3.4",
          "title": "مفهوم Endpoint",
          "englishTitle": "Endpoint",
          "definition": "يُقصد بـ (مفهوم Endpoint) أحد المفاهيم المحورية في مسار أساسيات واجهات البرمجة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه طلب HTTP إرسال رسالة بريدية مسجلة بظرف رسمي يحمل عنوان المرسل والهدف وترويسة المحتوى وطابع التأكيد.",
          "why": "تبرز أهمية (مفهوم Endpoint) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم Endpoint\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم Endpoint\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.3.4",
            "title": "مفهوم Endpoint",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (مفهوم Endpoint) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Endpoint' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم Endpoint) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم Endpoint) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم Endpoint",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم Endpoint) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Endpoint\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم Endpoint...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.3.5",
          "title": "مفهوم CRUD",
          "englishTitle": "CRUD",
          "definition": "يُقصد بـ (مفهوم CRUD) أحد المفاهيم المحورية في مسار أساسيات واجهات البرمجة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه المنافذ (Ports) البوابات المرقمة في مجمع سكني ضخم؛ العنوان واحد (IP) لكن كل بوابة تقود لشقة أو خدمة محددة.",
          "why": "تبرز أهمية (مفهوم CRUD) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم CRUD\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم CRUD\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.3.5",
            "title": "مفهوم CRUD",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (مفهوم CRUD) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'CRUD' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم CRUD) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم CRUD) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم CRUD",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم CRUD) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم CRUD\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم CRUD...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.3.6",
          "title": "دورة حياة طلب HTTP",
          "englishTitle": "دورة حياة طلب HTTP",
          "definition": "يُقصد بـ (دورة حياة طلب HTTP) أحد المفاهيم المحورية في مسار أساسيات واجهات البرمجة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه نموذج العميل والخادم (Client/Server) زبون المطعم الذي يطلب وجبة من قائمة الطعام والنادل الذي ينقل الطلب للمطبخ ليتم تحضيره.",
          "why": "تبرز أهمية (دورة حياة طلب HTTP) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ دورة حياة طلب HTTP\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: دورة حياة طلب HTTP\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.3.6",
            "title": "دورة حياة طلب HTTP",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (دورة حياة طلب HTTP) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'دورة حياة طلب HTTP' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (دورة حياة طلب HTTP) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (دورة حياة طلب HTTP) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على دورة حياة طلب HTTP",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (دورة حياة طلب HTTP) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين دورة حياة طلب HTTP\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: دورة حياة طلب HTTP...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "1.4",
      "title": "أساسيات سطر الأوامر",
      "englishTitle": "أساسيات سطر الأوامر",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم أساسيات سطر الأوامر وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-1.4-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (أساسيات سطر الأوامر) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (أساسيات سطر الأوامر) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-1.4-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (أساسيات سطر الأوامر)؟",
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
          "id": "q-1.4-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (أساسيات سطر الأوامر)، ما هو التصرف الهندسي السليم؟",
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
        "id": "ex-1.4",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (أساسيات سطر الأوامر)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (أساسيات سطر الأوامر) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع أساسيات سطر الأوامر\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"أساسيات سطر الأوامر\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "1.4.1",
          "title": "ما هو Terminal؟",
          "englishTitle": "Terminal",
          "definition": "يُقصد بـ (ما هو Terminal؟) أحد المفاهيم المحورية في مسار أساسيات سطر الأوامر ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه نموذج العميل والخادم (Client/Server) زبون المطعم الذي يطلب وجبة من قائمة الطعام والنادل الذي ينقل الطلب للمطبخ ليتم تحضيره.",
          "why": "تبرز أهمية (ما هو Terminal؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ما هو Terminal؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ما هو Terminal؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.4.1",
            "title": "ما هو Terminal؟",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (ما هو Terminal؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Terminal' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ما هو Terminal؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ما هو Terminal؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ما هو Terminal؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ما هو Terminal؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو Terminal؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ما هو Terminal؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.4.2",
          "title": "الفرق بين CMD وPowerShell وBash",
          "englishTitle": "CMD وPowerShell وBash",
          "definition": "يُقصد بـ (الفرق بين CMD وPowerShell وBash) أحد المفاهيم المحورية في مسار أساسيات سطر الأوامر ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه نظام DNS دليل أرقام الهواتف الشامل؛ حيث تبحث عن اسم الشخص (الدومين) فيعطيك رقم هاتفه الفعلي (عنوان IP) لتتصل به.",
          "why": "تبرز أهمية (الفرق بين CMD وPowerShell وBash) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ الفرق بين CMD وPowerShell وBash\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: الفرق بين CMD وPowerShell وBash\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.4.2",
            "title": "الفرق بين CMD وPowerShell وBash",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (الفرق بين CMD وPowerShell وBash) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'CMD وPowerShell وBash' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (الفرق بين CMD وPowerShell وBash) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (الفرق بين CMD وPowerShell وBash) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على الفرق بين CMD وPowerShell وBash",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (الفرق بين CMD وPowerShell وBash) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين CMD وPowerShell وBash\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: الفرق بين CMD وPowerShell وBash...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.4.3",
          "title": "التنقل بين المجلدات",
          "englishTitle": "التنقل بين المجلدات",
          "definition": "يُقصد بـ (التنقل بين المجلدات) أحد المفاهيم المحورية في مسار أساسيات سطر الأوامر ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه طلب HTTP إرسال رسالة بريدية مسجلة بظرف رسمي يحمل عنوان المرسل والهدف وترويسة المحتوى وطابع التأكيد.",
          "why": "تبرز أهمية (التنقل بين المجلدات) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ التنقل بين المجلدات\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: التنقل بين المجلدات\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.4.3",
            "title": "التنقل بين المجلدات",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (التنقل بين المجلدات) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'التنقل بين المجلدات' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (التنقل بين المجلدات) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (التنقل بين المجلدات) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على التنقل بين المجلدات",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (التنقل بين المجلدات) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين التنقل بين المجلدات\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: التنقل بين المجلدات...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.4.4",
          "title": "إنشاء الملفات والمجلدات وحذفها",
          "englishTitle": "الملفات والمجلدات وحذفها",
          "definition": "يُقصد بـ (إنشاء الملفات والمجلدات وحذفها) أحد المفاهيم المحورية في مسار أساسيات سطر الأوامر ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه المنافذ (Ports) البوابات المرقمة في مجمع سكني ضخم؛ العنوان واحد (IP) لكن كل بوابة تقود لشقة أو خدمة محددة.",
          "why": "تبرز أهمية (إنشاء الملفات والمجلدات وحذفها) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إنشاء الملفات والمجلدات وحذفها\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إنشاء الملفات والمجلدات وحذفها\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.4.4",
            "title": "إنشاء الملفات والمجلدات وحذفها",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (إنشاء الملفات والمجلدات وحذفها) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'الملفات والمجلدات وحذفها' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إنشاء الملفات والمجلدات وحذفها) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إنشاء الملفات والمجلدات وحذفها) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إنشاء الملفات والمجلدات وحذفها",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إنشاء الملفات والمجلدات وحذفها) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء الملفات والمجلدات وحذفها\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إنشاء الملفات والمجلدات وحذفها...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.4.5",
          "title": "التعامل مع المسارات",
          "englishTitle": "التعامل مع المسارات",
          "definition": "يُقصد بـ (التعامل مع المسارات) أحد المفاهيم المحورية في مسار أساسيات سطر الأوامر ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه نموذج العميل والخادم (Client/Server) زبون المطعم الذي يطلب وجبة من قائمة الطعام والنادل الذي ينقل الطلب للمطبخ ليتم تحضيره.",
          "why": "تبرز أهمية (التعامل مع المسارات) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ التعامل مع المسارات\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: التعامل مع المسارات\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.4.5",
            "title": "التعامل مع المسارات",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (التعامل مع المسارات) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'التعامل مع المسارات' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (التعامل مع المسارات) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (التعامل مع المسارات) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على التعامل مع المسارات",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (التعامل مع المسارات) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين التعامل مع المسارات\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: التعامل مع المسارات...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "1.4.6",
          "title": "تشغيل البرامج من سطر الأوامر",
          "englishTitle": "تشغيل البرامج من سطر الأوامر",
          "definition": "يُقصد بـ (تشغيل البرامج من سطر الأوامر) أحد المفاهيم المحورية في مسار أساسيات سطر الأوامر ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه نظام DNS دليل أرقام الهواتف الشامل؛ حيث تبحث عن اسم الشخص (الدومين) فيعطيك رقم هاتفه الفعلي (عنوان IP) لتتصل به.",
          "why": "تبرز أهمية (تشغيل البرامج من سطر الأوامر) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "DNS",
              "pronunciation": "دي-إن-إس",
              "meaning": "نظام أسماء النطاقات لترجمة العناوين النصية لعناوين IP"
            },
            {
              "term": "TCP/IP",
              "pronunciation": "تي-سي-بي / آي-بي",
              "meaning": "حزمة بروتوكولات الاتصال الموثوقة الحاكمة لنقل بيانات الإنترنت"
            },
            {
              "term": "HTTP Status",
              "pronunciation": "إتش-تي-تي-بي ستاتس",
              "meaning": "رمز الحالة الرقمي المكون من 3 خانات للتعبير عن نتيجة الطلب"
            },
            {
              "term": "Terminal",
              "pronunciation": "تيرمينال",
              "meaning": "واجهة سطر الأوامر النصية للتفاعل المباشر مع نظام التشغيل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تشغيل البرامج من سطر الأوامر\nconst result = await executeOperation(parameters);",
          "simpleCode": "// استيراد وحدة نظام أسماء النطاقات المدمجة في Node.js\nimport dns from 'node:dns/promises';\n// تحديد عنوان الموقع أو النطاق المراد فحصه\nconst targetDomain = 'nodejs.org';\n// الاستعلام غير المتزامن عن عناوين الـ IP المرتبطة\nconst addresses = await dns.resolve4(targetDomain);\n// طباعة النتيجة في شاشة الطرفية بتنسيق منظم\nconsole.log(`عناوين IP لخادم ${targetDomain}:`, addresses);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تشغيل البرامج من سطر الأوامر\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 1.4.6",
            "title": "تشغيل البرامج من سطر الأوامر",
            "icon": "Terminal",
            "colors": "from-blue-600 to-cyan-500",
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
            "summary": "يمثل (تشغيل البرامج من سطر الأوامر) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تشغيل البرامج من سطر الأوامر' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تشغيل البرامج من سطر الأوامر) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تشغيل البرامج من سطر الأوامر) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تشغيل البرامج من سطر الأوامر",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تشغيل البرامج من سطر الأوامر) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تشغيل البرامج من سطر الأوامر\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تشغيل البرامج من سطر الأوامر...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    }
  ]
};

export default SECTION_1;
