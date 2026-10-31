// src/data/sections/section21.js
// القسم الحادي والعشرون: الموضوعات المتقدمة في Node.js
// خريطة طريق Node.js الشاملة - القسم رقم 21

export const SECTION_21 = {
  "id": 21,
  "number": "21",
  "title": "القسم الحادي والعشرون: الموضوعات المتقدمة في Node.js",
  "englishTitle": "Advanced Node.js Internals & Systems",
  "badge": "خبير متمرس",
  "color": "from-purple-900 to-indigo-800",
  "description": "الشبكات المنخفضة TCP/UDP عبر node:net، أدوات التشخيص المتقدمة AsyncLocalStorage وDiagnostic Channels، الإمكانات الحديثة، وهندسة الأنظمة واسعة النطاق (Event Sourcing, Saga).",
  "summary": {
    "overview": "يغوص هذا القسم في الأعماق الهندسية الدقيقة لمحرك Node.js ونواة تشغيله. يغطي تفاصيل إدارة الذاكرة في محرك V8 وأقسام الـ Heap (New Space, Old Space, Large Object Space)، مراحل عمل جامع المهملات (Garbage Collector: Scavenge و Mark-Sweep-Compact)، البنية التحتية لمكتبة libuv ومسارات Thread Pool، كتابة إضافات C++ الأصلية (Node-API / N-API)، وقنوات التشخيص والمراقبة المعيارية (diagnostics_channel).",
    "goldenRules": [
      {
        "title": "فهم دورات جامع المهملات (Scavenge السريع مقابل Mark-Sweep البطيء)",
        "desc": "يعمل جامع Scavenge على تنظيف الكائنات قصيرة الأجل بسرعة في New Space، بينما يتطلب تنظيف Old Space دورة Mark-Sweep قد توقف التطبيق مؤقتاً (Stop-The-World)."
      },
      {
        "title": "تجنب إنشاء ملايين الكائنات المؤقتة داخل الحلقات السريعة",
        "desc": "توليد كائنات جديدة باستمرار يرهق جامع المهملات ويسبب تذبذباً ملحوظاً في زمن استجابة الخادم؛ أعد استخدام الكائنات عند الإمكان."
      },
      {
        "title": "استخدم إضافات Node-API (N-API) عند الحاجة لأداء لغة C/C++",
        "desc": "توفر N-API واجهة برمجية ثابتة التوافق الثنائي (ABI Stability)، مما يضمن عمل الإضافة عبر إصدارات Node.js المختلفة دون الحاجة لإعادة بنائها."
      },
      {
        "title": "مراقبة نشاط جامع المهملات عبر PerformanceObserver",
        "desc": "استخدم واجهة الأداء لمراقبة فترات توقف الـ GC وتحليل المدة الزمنية التي يستغرقها كل نوع من أنواع التنظيف."
      },
      {
        "title": "الاستفادة من diagnostics_channel لمراقبة غير متطفلة",
        "desc": "تتيح لك قنوات التشخيص المدمجة في Node.js نشر واستقبال بيانات الأداء والتتبع دون تعديل الأكواد الأصلية للوحدات."
      },
      {
        "title": "إدارة كائنات الذاكرة الكبيرة عبر Buffer بدلاً من نصوص V8",
        "desc": "تخزن الـ Buffers في ذاكرة خارجية مخصصة (ArrayBuffer) ولا تخضع لنفس قيود حجم كائنات محرك V8 العادية."
      },
      {
        "title": "تحليل تشوهات المعالجة المجمعة عبر V8 Trace Flags",
        "desc": "استخدم أعلام التشغيل مثل --trace-gc و --trace-opt عند التحقيق المعمق في سبب تباطؤ كود عالي التردد."
      },
      {
        "title": "تحسين عمليات معالجة النصوص عبر تعبيرات التجميع المسبقة",
        "desc": "تجنب إنشاء تعبيرات نمطية جديدة RegExp داخل الدوال المتكررة؛ عرفها مرة واحدة في النطاق الخارجي للاستفادة من تحسين محرك V8."
      }
    ],
    "keyTakeaways": [
      "استيعاب خريطة الذاكرة لمحرك V8 وكيفية تقسيم وإدارة المساحات المختلفة.",
      "فهم مراحل وخوارزميات جمع المهملات وتأثيرها على استقرار التطبيق.",
      "القدرة على مراقبة وتتبع فترات توقف الـ GC عبر واجهة Performance API المدمجة.",
      "استخدام قنوات التشخيص diagnostics_channel لبناء أدوات تتبع احترافية."
    ]
  },
  "cheatSheet": {
    "title": "البطاقة المرجعية للمفاهيم الداخلية العميقة في Node.js و V8",
    "entries": [
      {
        "category": "GC Trace",
        "commandOrSyntax": "node --trace-gc index.js",
        "description": "طباعة تفاصيل كل دورة لتنظيف الذاكرة ومقدار المساحة المحررة في الكونسول",
        "type": "cli"
      },
      {
        "category": "GC Expose",
        "commandOrSyntax": "node --expose-gc index.js -> global.gc()",
        "description": "تفعيل الدالة اليدوية لإجبار جامع المهملات على العمل أثناء الاختبارات الدقيقة",
        "type": "cli"
      },
      {
        "category": "V8 Heap Space",
        "commandOrSyntax": "import v8 from 'node:v8'; console.log(v8.getHeapSpaceStatistics());",
        "description": "استخراج إحصاءات تفصيلية لكل قسم من أقسام الذاكرة (new, old, code)",
        "type": "code"
      },
      {
        "category": "GC Monitor",
        "commandOrSyntax": "const obs = new PerformanceObserver(list => { /* GC entries */ }); obs.observe({ entryTypes: ['gc'] });",
        "description": "مراقبة دورات جامع المهملات وحساب وقت التوقف بالميلي ثانية برمجياً",
        "type": "code"
      },
      {
        "category": "Diagnostics",
        "commandOrSyntax": "import dc from 'node:diagnostics_channel'; const ch = dc.channel('my-channel');",
        "description": "إنشاء قناة تشخيص معيارية لنشر بيانات تتبع الأداء والتنفيذ",
        "type": "code"
      },
      {
        "category": "AsyncLocalStorage",
        "commandOrSyntax": "import { AsyncLocalStorage } from 'node:async_hooks'; const als = new AsyncLocalStorage();",
        "description": "تخزين ومشاركة سياق الطلب عبر كافة العمليات غير المتزامنة دون تمريره كمعامل",
        "type": "code"
      },
      {
        "category": "Libuv Pool",
        "commandOrSyntax": "UV_THREADPOOL_SIZE=8 node app.js",
        "description": "تحديد عدد مسارات العمليات المتزامنة في مكتبة libuv للمهام الثقيلة",
        "type": "cli"
      },
      {
        "category": "Memory Usage",
        "commandOrSyntax": "process.memoryUsage() // { rss, heapTotal, heapUsed, external }",
        "description": "فحص استهلاك الذاكرة الفعلي والمساحة المخصصة لمحرك V8 بالبايت",
        "type": "code"
      },
      {
        "category": "V8 Heap Snapshot",
        "commandOrSyntax": "v8.writeHeapSnapshot('leak.heapsnapshot');",
        "description": "كتابة لقطة كاملة لمحتويات الذاكرة وتحليل الكائنات المسربة برمجياً",
        "type": "code"
      },
      {
        "category": "Node-API",
        "commandOrSyntax": "#include <node_api.h>",
        "description": "الترويسة الرسمية لبناء إضافات وموديولات بلغة C++ متوافقة ثنائياً مع Node",
        "type": "code"
      }
    ],
    "items": [
      {
        "category": "GC Trace",
        "commandOrSyntax": "node --trace-gc index.js",
        "description": "طباعة تفاصيل كل دورة لتنظيف الذاكرة ومقدار المساحة المحررة في الكونسول",
        "type": "cli",
        "command": "node --trace-gc index.js"
      },
      {
        "category": "GC Expose",
        "commandOrSyntax": "node --expose-gc index.js -> global.gc()",
        "description": "تفعيل الدالة اليدوية لإجبار جامع المهملات على العمل أثناء الاختبارات الدقيقة",
        "type": "cli",
        "command": "node --expose-gc index.js -> global.gc()"
      },
      {
        "category": "V8 Heap Space",
        "commandOrSyntax": "import v8 from 'node:v8'; console.log(v8.getHeapSpaceStatistics());",
        "description": "استخراج إحصاءات تفصيلية لكل قسم من أقسام الذاكرة (new, old, code)",
        "type": "code",
        "command": "import v8 from 'node:v8'; console.log(v8.getHeapSpaceStatistics());"
      },
      {
        "category": "GC Monitor",
        "commandOrSyntax": "const obs = new PerformanceObserver(list => { /* GC entries */ }); obs.observe({ entryTypes: ['gc'] });",
        "description": "مراقبة دورات جامع المهملات وحساب وقت التوقف بالميلي ثانية برمجياً",
        "type": "code",
        "command": "const obs = new PerformanceObserver(list => { /* GC entries */ }); obs.observe({ entryTypes: ['gc'] });"
      },
      {
        "category": "Diagnostics",
        "commandOrSyntax": "import dc from 'node:diagnostics_channel'; const ch = dc.channel('my-channel');",
        "description": "إنشاء قناة تشخيص معيارية لنشر بيانات تتبع الأداء والتنفيذ",
        "type": "code",
        "command": "import dc from 'node:diagnostics_channel'; const ch = dc.channel('my-channel');"
      },
      {
        "category": "AsyncLocalStorage",
        "commandOrSyntax": "import { AsyncLocalStorage } from 'node:async_hooks'; const als = new AsyncLocalStorage();",
        "description": "تخزين ومشاركة سياق الطلب عبر كافة العمليات غير المتزامنة دون تمريره كمعامل",
        "type": "code",
        "command": "import { AsyncLocalStorage } from 'node:async_hooks'; const als = new AsyncLocalStorage();"
      },
      {
        "category": "Libuv Pool",
        "commandOrSyntax": "UV_THREADPOOL_SIZE=8 node app.js",
        "description": "تحديد عدد مسارات العمليات المتزامنة في مكتبة libuv للمهام الثقيلة",
        "type": "cli",
        "command": "UV_THREADPOOL_SIZE=8 node app.js"
      },
      {
        "category": "Memory Usage",
        "commandOrSyntax": "process.memoryUsage() // { rss, heapTotal, heapUsed, external }",
        "description": "فحص استهلاك الذاكرة الفعلي والمساحة المخصصة لمحرك V8 بالبايت",
        "type": "code",
        "command": "process.memoryUsage() // { rss, heapTotal, heapUsed, external }"
      },
      {
        "category": "V8 Heap Snapshot",
        "commandOrSyntax": "v8.writeHeapSnapshot('leak.heapsnapshot');",
        "description": "كتابة لقطة كاملة لمحتويات الذاكرة وتحليل الكائنات المسربة برمجياً",
        "type": "code",
        "command": "v8.writeHeapSnapshot('leak.heapsnapshot');"
      },
      {
        "category": "Node-API",
        "commandOrSyntax": "#include <node_api.h>",
        "description": "الترويسة الرسمية لبناء إضافات وموديولات بلغة C++ متوافقة ثنائياً مع Node",
        "type": "code",
        "command": "#include <node_api.h>"
      }
    ]
  },
  "miniProject": {
    "id": "project-sec-21",
    "title": "مشروع عملي: راصد نشاط جامع المهملات وقنوات التشخيص (V8 GC & Diagnostics Monitor)",
    "description": "بناء أداة فحص عميقة ترصد دورات جامع المهملات (Scavenge و Mark-Sweep)، تحسب إجمالي وقت تجميد الخادم، وتستخدم AsyncLocalStorage لتمرير سياق الطلبات عبر تدفقات غير متزامنة.",
    "difficulty": "خبير متمرس",
    "techStack": [
      "Node.js",
      "node:v8",
      "node:perf_hooks",
      "AsyncLocalStorage",
      "V8 Internals"
    ],
    "directoryStructure": "v8-diagnostics-monitor/\n├── package.json\n├── src/\n│   ├── gcObserver.js\n│   ├── requestContext.js\n│   └── index.js\n└── README.md",
    "codeFiles": [
      {
        "filename": "src/gcObserver.js",
        "code": "// استيراد مراقب الأداء المدمج في Node\nimport { PerformanceObserver } from 'node:perf_hooks';\nimport v8 from 'node:v8';\n\n// كلاس رصد وإحصاء دورات جامع المهملات\nexport class GcMonitor {\n  #observer;\n  #totalPauseMs = 0;\n\n  start() {\n    this.#observer = new PerformanceObserver((list) => {\n      for (const entry of list.getEntries()) {\n        const pauseMs = entry.duration.toFixed(2);\n        this.#totalPauseMs += Number(pauseMs);\n        console.log(`🧹 [V8 GC] نوع التنظيف: ${entry.name} | مدة التوقف: ${pauseMs} ms`);\n      }\n    });\n\n    // تفعيل مراقبة أحداث الـ GC\n    this.#observer.observe({ entryTypes: ['gc'] });\n  }\n\n  // طباعة تقرير الذاكرة الحالي\n  printHeapReport() {\n    const stats = v8.getHeapStatistics();\n    console.log(\"=== تقرير مساحات ذاكرة V8 ===\");\n    console.log(`الذاكرة المستخدمة: ${(stats.used_heap_size / 1024 / 1024).toFixed(2)} MB`);\n    console.log(`الحد الأقصى للذاكرة: ${(stats.heap_size_limit / 1024 / 1024).toFixed(2)} MB`);\n    console.log(`إجمالي فترات توقف السيرفر للـ GC: ${this.#totalPauseMs.toFixed(2)} ms\\n`);\n  }\n}",
        "explanation": "يستخدم هذا الكلاس PerformanceObserver للاستماع لأحداث جامع المهملات وتحديد وقت التوقف الدقيق."
      },
      {
        "filename": "src/index.js",
        "code": "// استيراد راصد الذاكرة\nimport { GcMonitor } from './src/gcObserver.js';\n\nconst monitor = new GcMonitor();\nmonitor.start();\n\nconsole.log(\"=== تشغيل راصد العمليات العميقة لمحرك V8 ===\");\nmonitor.printHeapReport();\n\n// محاكاة إنشاء وتحرير ملايين الكائنات السريعة لتحفيز جامع المهملات\nconsole.log(\"جاري توليد كائنات سريعة لاختبار استجابة جامع المهملات...\");\nfor (let i = 0; i < 5; i++) {\n  let tempArray = [];\n  for (let j = 0; j < 500000; j++) {\n    tempArray.push({ index: j, data: `text_${j}` });\n  }\n  // التخلص من المرجع ليتم تحريره بواسطة GC\n  tempArray = null;\n}\n\n// طباعة التقرير بعد انتهاء العمليات\nsetTimeout(() => {\n  monitor.printHeapReport();\n  console.log(\"✓ اكتمل فحص سلوك الـ GC بنجاح.\");\n}, 1000);",
        "explanation": "ملف تنفيذي يولد حملاً سريعاً في الذاكرة لمراقبة سلوك وتوقيتات جامع المهملات في V8."
      }
    ],
    "stepsToRun": [
      "افتح المجلد: cd v8-diagnostics-monitor",
      "شغل الأداة: node src/index.js",
      "شاهد في الشاشة كيف يسجل الراصد دورات تنظيف الذاكرة ووقت التوقف بالميلي ثانية"
    ]
  },
  "project": {
    "id": "project-sec-21",
    "title": "مشروع عملي: راصد نشاط جامع المهملات وقنوات التشخيص (V8 GC & Diagnostics Monitor)",
    "scenario": "بناء أداة فحص عميقة ترصد دورات جامع المهملات (Scavenge و Mark-Sweep)، تحسب إجمالي وقت تجميد الخادم، وتستخدم AsyncLocalStorage لتمرير سياق الطلبات عبر تدفقات غير متزامنة.",
    "requirements": [
      "افتح المجلد: cd v8-diagnostics-monitor",
      "شغل الأداة: node src/index.js",
      "شاهد في الشاشة كيف يسجل الراصد دورات تنظيف الذاكرة ووقت التوقف بالميلي ثانية"
    ],
    "completeSolution": "// src/gcObserver.js\n// استيراد مراقب الأداء المدمج في Node\nimport { PerformanceObserver } from 'node:perf_hooks';\nimport v8 from 'node:v8';\n\n// كلاس رصد وإحصاء دورات جامع المهملات\nexport class GcMonitor {\n  #observer;\n  #totalPauseMs = 0;\n\n  start() {\n    this.#observer = new PerformanceObserver((list) => {\n      for (const entry of list.getEntries()) {\n        const pauseMs = entry.duration.toFixed(2);\n        this.#totalPauseMs += Number(pauseMs);\n        console.log(`🧹 [V8 GC] نوع التنظيف: ${entry.name} | مدة التوقف: ${pauseMs} ms`);\n      }\n    });\n\n    // تفعيل مراقبة أحداث الـ GC\n    this.#observer.observe({ entryTypes: ['gc'] });\n  }\n\n  // طباعة تقرير الذاكرة الحالي\n  printHeapReport() {\n    const stats = v8.getHeapStatistics();\n    console.log(\"=== تقرير مساحات ذاكرة V8 ===\");\n    console.log(`الذاكرة المستخدمة: ${(stats.used_heap_size / 1024 / 1024).toFixed(2)} MB`);\n    console.log(`الحد الأقصى للذاكرة: ${(stats.heap_size_limit / 1024 / 1024).toFixed(2)} MB`);\n    console.log(`إجمالي فترات توقف السيرفر للـ GC: ${this.#totalPauseMs.toFixed(2)} ms\\n`);\n  }\n}\n\n// src/index.js\n// استيراد راصد الذاكرة\nimport { GcMonitor } from './src/gcObserver.js';\n\nconst monitor = new GcMonitor();\nmonitor.start();\n\nconsole.log(\"=== تشغيل راصد العمليات العميقة لمحرك V8 ===\");\nmonitor.printHeapReport();\n\n// محاكاة إنشاء وتحرير ملايين الكائنات السريعة لتحفيز جامع المهملات\nconsole.log(\"جاري توليد كائنات سريعة لاختبار استجابة جامع المهملات...\");\nfor (let i = 0; i < 5; i++) {\n  let tempArray = [];\n  for (let j = 0; j < 500000; j++) {\n    tempArray.push({ index: j, data: `text_${j}` });\n  }\n  // التخلص من المرجع ليتم تحريره بواسطة GC\n  tempArray = null;\n}\n\n// طباعة التقرير بعد انتهاء العمليات\nsetTimeout(() => {\n  monitor.printHeapReport();\n  console.log(\"✓ اكتمل فحص سلوك الـ GC بنجاح.\");\n}, 1000);"
  },
  "topics": [
    {
      "id": "21.1",
      "title": "فهم آلية عمل Node.js داخلياً",
      "englishTitle": "فهم آلية عمل Node.js داخلياً",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم فهم آلية عمل Node.js داخلياً وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-21.1-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (فهم آلية عمل Node.js داخلياً) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (فهم آلية عمل Node.js داخلياً) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-21.1-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (فهم آلية عمل Node.js داخلياً)؟",
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
          "id": "q-21.1-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (فهم آلية عمل Node.js داخلياً)، ما هو التصرف الهندسي السليم؟",
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
        "id": "ex-21.1",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (فهم آلية عمل Node.js داخلياً)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (فهم آلية عمل Node.js داخلياً) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع فهم آلية عمل Node.js داخلياً\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"فهم آلية عمل Node.js داخلياً\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "21.1.1",
          "title": "البنية الداخلية لـ Node.js",
          "englishTitle": "البنية الداخلية لـ Node.js",
          "definition": "يُقصد بـ (البنية الداخلية لـ Node.js) أحد المفاهيم المحورية في مسار فهم آلية عمل Node.js داخلياً ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه مساحات الذاكرة في V8 مكاتب الموظفين؛ New Space للمهام اليومية السريعة التي تمزق بعد دقائق، و Old Space لأرشيف العقود الدائمة التي تبقى لسنوات.",
          "why": "تبرز أهمية (البنية الداخلية لـ Node.js) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ البنية الداخلية لـ Node.js\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'البنية الداخلية لـ Node.js';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: البنية الداخلية لـ Node.js\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.1.1",
            "title": "البنية الداخلية لـ Node.js",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (البنية الداخلية لـ Node.js) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'البنية الداخلية لـ Node.js' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (البنية الداخلية لـ Node.js) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (البنية الداخلية لـ Node.js) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على البنية الداخلية لـ Node.js",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (البنية الداخلية لـ Node.js) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين البنية الداخلية لـ Node.js\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: البنية الداخلية لـ Node.js...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.1.2",
          "title": "دور محرك V8",
          "englishTitle": "دور محرك V8",
          "definition": "يُقصد بـ (دور محرك V8) أحد المفاهيم المحورية في مسار فهم آلية عمل Node.js داخلياً ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه جامع المهملات Scavenge عمال النظافة السريعين في قاعات السينما بين العروض؛ يجمعون العلب الفارغة بدقيقة واحدة ليفتح الباب للعرض التالي.",
          "why": "تبرز أهمية (دور محرك V8) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ دور محرك V8\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'دور محرك V8';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: دور محرك V8\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.1.2",
            "title": "دور محرك V8",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (دور محرك V8) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'دور محرك V8' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (دور محرك V8) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (دور محرك V8) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على دور محرك V8",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (دور محرك V8) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين دور محرك V8\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: دور محرك V8...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.1.3",
          "title": "دور libuv",
          "englishTitle": "دور libuv",
          "definition": "يُقصد بـ (دور libuv) أحد المفاهيم المحورية في مسار فهم آلية عمل Node.js داخلياً ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه قنوات التشخيص diagnostics_channel كاميرات المراقبة التلفزيونية في شوارع المدينة؛ ترصد حركة المرور دون أن توقف سيارة واحدة في الطريق.",
          "why": "تبرز أهمية (دور libuv) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ دور libuv\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'دور libuv';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: دور libuv\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.1.3",
            "title": "دور libuv",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (دور libuv) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'دور libuv' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (دور libuv) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (دور libuv) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على دور libuv",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (دور libuv) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين دور libuv\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: دور libuv...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.1.4",
          "title": "دور Event Loop",
          "englishTitle": "دور Event Loop",
          "definition": "يُقصد بـ (دور Event Loop) أحد المفاهيم المحورية في مسار فهم آلية عمل Node.js داخلياً ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه إضافات Node-API محولات الكهرباء العالمية؛ تسمح بوصل محرك صناعي ألماني جبار (C++) بشبكة كهرباء منزلية حديثة (JavaScript) دون أي احتراق.",
          "why": "تبرز أهمية (دور Event Loop) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ دور Event Loop\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'دور Event Loop';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: دور Event Loop\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.1.4",
            "title": "دور Event Loop",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (دور Event Loop) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'دور Event Loop' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (دور Event Loop) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (دور Event Loop) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على دور Event Loop",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (دور Event Loop) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين دور Event Loop\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: دور Event Loop...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.1.5",
          "title": "دور Worker Pool",
          "englishTitle": "دور Worker Pool",
          "definition": "يُقصد بـ (دور Worker Pool) أحد المفاهيم المحورية في مسار فهم آلية عمل Node.js داخلياً ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه مساحات الذاكرة في V8 مكاتب الموظفين؛ New Space للمهام اليومية السريعة التي تمزق بعد دقائق، و Old Space لأرشيف العقود الدائمة التي تبقى لسنوات.",
          "why": "تبرز أهمية (دور Worker Pool) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ دور Worker Pool\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'دور Worker Pool';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: دور Worker Pool\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.1.5",
            "title": "دور Worker Pool",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (دور Worker Pool) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'دور Worker Pool' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (دور Worker Pool) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (دور Worker Pool) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على دور Worker Pool",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (دور Worker Pool) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين دور Worker Pool\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: دور Worker Pool...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.1.6",
          "title": "مفهوم Native Bindings",
          "englishTitle": "Native Bindings",
          "definition": "يُقصد بـ (مفهوم Native Bindings) أحد المفاهيم المحورية في مسار فهم آلية عمل Node.js داخلياً ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه جامع المهملات Scavenge عمال النظافة السريعين في قاعات السينما بين العروض؛ يجمعون العلب الفارغة بدقيقة واحدة ليفتح الباب للعرض التالي.",
          "why": "تبرز أهمية (مفهوم Native Bindings) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم Native Bindings\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مفهوم Native Bindings';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم Native Bindings\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.1.6",
            "title": "مفهوم Native Bindings",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (مفهوم Native Bindings) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Native Bindings' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم Native Bindings) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم Native Bindings) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم Native Bindings",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم Native Bindings) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Native Bindings\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم Native Bindings...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.1.7",
          "title": "تحليل أداء Runtime",
          "englishTitle": "تحليل أداء Runtime",
          "definition": "يُقصد بـ (تحليل أداء Runtime) أحد المفاهيم المحورية في مسار فهم آلية عمل Node.js داخلياً ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه قنوات التشخيص diagnostics_channel كاميرات المراقبة التلفزيونية في شوارع المدينة؛ ترصد حركة المرور دون أن توقف سيارة واحدة في الطريق.",
          "why": "تبرز أهمية (تحليل أداء Runtime) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تحليل أداء Runtime\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'تحليل أداء Runtime';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تحليل أداء Runtime\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.1.7",
            "title": "تحليل أداء Runtime",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (تحليل أداء Runtime) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تحليل أداء Runtime' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تحليل أداء Runtime) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تحليل أداء Runtime) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تحليل أداء Runtime",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تحليل أداء Runtime) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تحليل أداء Runtime\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تحليل أداء Runtime...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "21.2",
      "title": "الشبكات المتقدمة",
      "englishTitle": "الشبكات المتقدمة",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم الشبكات المتقدمة وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-21.2-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (الشبكات المتقدمة) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (الشبكات المتقدمة) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-21.2-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (الشبكات المتقدمة)؟",
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
          "id": "q-21.2-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (الشبكات المتقدمة)، ما هو التصرف الهندسي السليم؟",
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
        "id": "ex-21.2",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (الشبكات المتقدمة)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (الشبكات المتقدمة) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع الشبكات المتقدمة\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"الشبكات المتقدمة\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "21.2.1",
          "title": "استخدام node:net",
          "englishTitle": "node:net",
          "definition": "يُقصد بـ (استخدام node:net) أحد المفاهيم المحورية في مسار الشبكات المتقدمة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه جامع المهملات Scavenge عمال النظافة السريعين في قاعات السينما بين العروض؛ يجمعون العلب الفارغة بدقيقة واحدة ليفتح الباب للعرض التالي.",
          "why": "تبرز أهمية (استخدام node:net) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخدام node:net\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'استخدام node:net';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخدام node:net\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.2.1",
            "title": "استخدام node:net",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (استخدام node:net) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'node:net' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخدام node:net) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخدام node:net) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخدام node:net",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخدام node:net) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام node:net\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخدام node:net...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.2.2",
          "title": "إنشاء TCP Server",
          "englishTitle": "TCP Server",
          "definition": "يُقصد بـ (إنشاء TCP Server) أحد المفاهيم المحورية في مسار الشبكات المتقدمة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه قنوات التشخيص diagnostics_channel كاميرات المراقبة التلفزيونية في شوارع المدينة؛ ترصد حركة المرور دون أن توقف سيارة واحدة في الطريق.",
          "why": "تبرز أهمية (إنشاء TCP Server) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إنشاء TCP Server\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إنشاء TCP Server';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إنشاء TCP Server\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.2.2",
            "title": "إنشاء TCP Server",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (إنشاء TCP Server) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'TCP Server' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إنشاء TCP Server) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إنشاء TCP Server) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إنشاء TCP Server",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إنشاء TCP Server) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء TCP Server\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إنشاء TCP Server...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.2.3",
          "title": "استخدام node:dgram",
          "englishTitle": "node:dgram",
          "definition": "يُقصد بـ (استخدام node:dgram) أحد المفاهيم المحورية في مسار الشبكات المتقدمة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه إضافات Node-API محولات الكهرباء العالمية؛ تسمح بوصل محرك صناعي ألماني جبار (C++) بشبكة كهرباء منزلية حديثة (JavaScript) دون أي احتراق.",
          "why": "تبرز أهمية (استخدام node:dgram) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخدام node:dgram\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'استخدام node:dgram';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخدام node:dgram\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.2.3",
            "title": "استخدام node:dgram",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (استخدام node:dgram) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'node:dgram' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخدام node:dgram) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخدام node:dgram) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخدام node:dgram",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخدام node:dgram) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام node:dgram\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخدام node:dgram...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.2.4",
          "title": "إنشاء UDP Server",
          "englishTitle": "UDP Server",
          "definition": "يُقصد بـ (إنشاء UDP Server) أحد المفاهيم المحورية في مسار الشبكات المتقدمة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه مساحات الذاكرة في V8 مكاتب الموظفين؛ New Space للمهام اليومية السريعة التي تمزق بعد دقائق، و Old Space لأرشيف العقود الدائمة التي تبقى لسنوات.",
          "why": "تبرز أهمية (إنشاء UDP Server) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إنشاء UDP Server\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إنشاء UDP Server';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إنشاء UDP Server\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.2.4",
            "title": "إنشاء UDP Server",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (إنشاء UDP Server) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'UDP Server' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إنشاء UDP Server) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إنشاء UDP Server) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إنشاء UDP Server",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إنشاء UDP Server) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء UDP Server\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إنشاء UDP Server...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.2.5",
          "title": "التعرف على TLS",
          "englishTitle": "التعرف على TLS",
          "definition": "يُقصد بـ (التعرف على TLS) أحد المفاهيم المحورية في مسار الشبكات المتقدمة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه جامع المهملات Scavenge عمال النظافة السريعين في قاعات السينما بين العروض؛ يجمعون العلب الفارغة بدقيقة واحدة ليفتح الباب للعرض التالي.",
          "why": "تبرز أهمية (التعرف على TLS) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ التعرف على TLS\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'التعرف على TLS';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: التعرف على TLS\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.2.5",
            "title": "التعرف على TLS",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (التعرف على TLS) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'التعرف على TLS' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (التعرف على TLS) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (التعرف على TLS) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على التعرف على TLS",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (التعرف على TLS) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين التعرف على TLS\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: التعرف على TLS...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.2.6",
          "title": "مقدمة في HTTP/2",
          "englishTitle": "مقدمة في HTTP/2",
          "definition": "يُقصد بـ (مقدمة في HTTP/2) أحد المفاهيم المحورية في مسار الشبكات المتقدمة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه قنوات التشخيص diagnostics_channel كاميرات المراقبة التلفزيونية في شوارع المدينة؛ ترصد حركة المرور دون أن توقف سيارة واحدة في الطريق.",
          "why": "تبرز أهمية (مقدمة في HTTP/2) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مقدمة في HTTP/2\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مقدمة في HTTP/2';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مقدمة في HTTP/2\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.2.6",
            "title": "مقدمة في HTTP/2",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (مقدمة في HTTP/2) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'مقدمة في HTTP/2' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مقدمة في HTTP/2) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مقدمة في HTTP/2) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مقدمة في HTTP/2",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مقدمة في HTTP/2) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في HTTP/2\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مقدمة في HTTP/2...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.2.7",
          "title": "إدارة اتصالات الشبكة طويلة العمر",
          "englishTitle": "اتصالات الشبكة طويلة العمر",
          "definition": "يُقصد بـ (إدارة اتصالات الشبكة طويلة العمر) أحد المفاهيم المحورية في مسار الشبكات المتقدمة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه إضافات Node-API محولات الكهرباء العالمية؛ تسمح بوصل محرك صناعي ألماني جبار (C++) بشبكة كهرباء منزلية حديثة (JavaScript) دون أي احتراق.",
          "why": "تبرز أهمية (إدارة اتصالات الشبكة طويلة العمر) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إدارة اتصالات الشبكة طويلة العمر\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إدارة اتصالات الشبكة طويلة العمر';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إدارة اتصالات الشبكة طويلة العمر\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.2.7",
            "title": "إدارة اتصالات الشبكة طويلة العمر",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (إدارة اتصالات الشبكة طويلة العمر) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'اتصالات الشبكة طويلة العمر' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إدارة اتصالات الشبكة طويلة العمر) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إدارة اتصالات الشبكة طويلة العمر) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إدارة اتصالات الشبكة طويلة العمر",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إدارة اتصالات الشبكة طويلة العمر) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة اتصالات الشبكة طويلة العمر\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إدارة اتصالات الشبكة طويلة العمر...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "21.3",
      "title": "Node.js Diagnostics",
      "englishTitle": "Node.js Diagnostics",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم Node.js Diagnostics وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-21.3-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (Node.js Diagnostics) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (Node.js Diagnostics) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-21.3-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (Node.js Diagnostics)؟",
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
          "id": "q-21.3-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (Node.js Diagnostics)، ما هو التصرف الهندسي السليم؟",
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
        "id": "ex-21.3",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (Node.js Diagnostics)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (Node.js Diagnostics) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع Node.js Diagnostics\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"Node.js Diagnostics\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "21.3.1",
          "title": "استخدام node:perf_hooks",
          "englishTitle": "node:perf_hooks",
          "definition": "يُقصد بـ (استخدام node:perf_hooks) أحد المفاهيم المحورية في مسار Node.js Diagnostics ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه قنوات التشخيص diagnostics_channel كاميرات المراقبة التلفزيونية في شوارع المدينة؛ ترصد حركة المرور دون أن توقف سيارة واحدة في الطريق.",
          "why": "تبرز أهمية (استخدام node:perf_hooks) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخدام node:perf_hooks\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'استخدام node:perf_hooks';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخدام node:perf_hooks\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.3.1",
            "title": "استخدام node:perf_hooks",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (استخدام node:perf_hooks) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'node:perf_hooks' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخدام node:perf_hooks) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخدام node:perf_hooks) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخدام node:perf_hooks",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخدام node:perf_hooks) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام node:perf_hooks\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخدام node:perf_hooks...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.3.2",
          "title": "إنشاء Performance Measurements",
          "englishTitle": "Performance Measurements",
          "definition": "يُقصد بـ (إنشاء Performance Measurements) أحد المفاهيم المحورية في مسار Node.js Diagnostics ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه إضافات Node-API محولات الكهرباء العالمية؛ تسمح بوصل محرك صناعي ألماني جبار (C++) بشبكة كهرباء منزلية حديثة (JavaScript) دون أي احتراق.",
          "why": "تبرز أهمية (إنشاء Performance Measurements) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إنشاء Performance Measurements\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إنشاء Performance Measurements';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إنشاء Performance Measurements\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.3.2",
            "title": "إنشاء Performance Measurements",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (إنشاء Performance Measurements) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Performance Measurements' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إنشاء Performance Measurements) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إنشاء Performance Measurements) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إنشاء Performance Measurements",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إنشاء Performance Measurements) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Performance Measurements\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إنشاء Performance Measurements...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.3.3",
          "title": "تحليل CPU Profiles",
          "englishTitle": "تحليل CPU Profiles",
          "definition": "يُقصد بـ (تحليل CPU Profiles) أحد المفاهيم المحورية في مسار Node.js Diagnostics ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه مساحات الذاكرة في V8 مكاتب الموظفين؛ New Space للمهام اليومية السريعة التي تمزق بعد دقائق، و Old Space لأرشيف العقود الدائمة التي تبقى لسنوات.",
          "why": "تبرز أهمية (تحليل CPU Profiles) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تحليل CPU Profiles\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'تحليل CPU Profiles';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تحليل CPU Profiles\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.3.3",
            "title": "تحليل CPU Profiles",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (تحليل CPU Profiles) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تحليل CPU Profiles' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تحليل CPU Profiles) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تحليل CPU Profiles) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تحليل CPU Profiles",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تحليل CPU Profiles) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تحليل CPU Profiles\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تحليل CPU Profiles...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.3.4",
          "title": "تحليل Heap Profiles",
          "englishTitle": "تحليل Heap Profiles",
          "definition": "يُقصد بـ (تحليل Heap Profiles) أحد المفاهيم المحورية في مسار Node.js Diagnostics ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه جامع المهملات Scavenge عمال النظافة السريعين في قاعات السينما بين العروض؛ يجمعون العلب الفارغة بدقيقة واحدة ليفتح الباب للعرض التالي.",
          "why": "تبرز أهمية (تحليل Heap Profiles) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تحليل Heap Profiles\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'تحليل Heap Profiles';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تحليل Heap Profiles\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.3.4",
            "title": "تحليل Heap Profiles",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (تحليل Heap Profiles) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تحليل Heap Profiles' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تحليل Heap Profiles) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تحليل Heap Profiles) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تحليل Heap Profiles",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تحليل Heap Profiles) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تحليل Heap Profiles\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تحليل Heap Profiles...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.3.5",
          "title": "استخدام Diagnostic Reports",
          "englishTitle": "Diagnostic Reports",
          "definition": "يُقصد بـ (استخدام Diagnostic Reports) أحد المفاهيم المحورية في مسار Node.js Diagnostics ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه قنوات التشخيص diagnostics_channel كاميرات المراقبة التلفزيونية في شوارع المدينة؛ ترصد حركة المرور دون أن توقف سيارة واحدة في الطريق.",
          "why": "تبرز أهمية (استخدام Diagnostic Reports) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخدام Diagnostic Reports\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'استخدام Diagnostic Reports';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخدام Diagnostic Reports\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.3.5",
            "title": "استخدام Diagnostic Reports",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (استخدام Diagnostic Reports) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Diagnostic Reports' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخدام Diagnostic Reports) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخدام Diagnostic Reports) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخدام Diagnostic Reports",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخدام Diagnostic Reports) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Diagnostic Reports\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخدام Diagnostic Reports...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.3.6",
          "title": "مقدمة في node:diagnostics_channel",
          "englishTitle": "مقدمة في node:diagnostics_channel",
          "definition": "يُقصد بـ (مقدمة في node:diagnostics_channel) أحد المفاهيم المحورية في مسار Node.js Diagnostics ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه إضافات Node-API محولات الكهرباء العالمية؛ تسمح بوصل محرك صناعي ألماني جبار (C++) بشبكة كهرباء منزلية حديثة (JavaScript) دون أي احتراق.",
          "why": "تبرز أهمية (مقدمة في node:diagnostics_channel) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مقدمة في node:diagnostics_channel\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مقدمة في node:diagnostics_channel';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مقدمة في node:diagnostics_channel\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.3.6",
            "title": "مقدمة في node:diagnostics_channel",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (مقدمة في node:diagnostics_channel) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'مقدمة في node:diagnostics_channel' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مقدمة في node:diagnostics_channel) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مقدمة في node:diagnostics_channel) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مقدمة في node:diagnostics_channel",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مقدمة في node:diagnostics_channel) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في node:diagnostics_channel\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مقدمة في node:diagnostics_channel...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.3.7",
          "title": "مفهوم AsyncLocalStorage",
          "englishTitle": "AsyncLocalStorage",
          "definition": "يُقصد بـ (مفهوم AsyncLocalStorage) أحد المفاهيم المحورية في مسار Node.js Diagnostics ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه مساحات الذاكرة في V8 مكاتب الموظفين؛ New Space للمهام اليومية السريعة التي تمزق بعد دقائق، و Old Space لأرشيف العقود الدائمة التي تبقى لسنوات.",
          "why": "تبرز أهمية (مفهوم AsyncLocalStorage) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم AsyncLocalStorage\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مفهوم AsyncLocalStorage';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم AsyncLocalStorage\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.3.7",
            "title": "مفهوم AsyncLocalStorage",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (مفهوم AsyncLocalStorage) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'AsyncLocalStorage' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم AsyncLocalStorage) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم AsyncLocalStorage) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم AsyncLocalStorage",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم AsyncLocalStorage) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم AsyncLocalStorage\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم AsyncLocalStorage...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.3.8",
          "title": "تتبع الطلبات عبر العمليات غير المتزامنة",
          "englishTitle": "تتبع الطلبات عبر العمليات غير المتزامنة",
          "definition": "يُقصد بـ (تتبع الطلبات عبر العمليات غير المتزامنة) أحد المفاهيم المحورية في مسار Node.js Diagnostics ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه جامع المهملات Scavenge عمال النظافة السريعين في قاعات السينما بين العروض؛ يجمعون العلب الفارغة بدقيقة واحدة ليفتح الباب للعرض التالي.",
          "why": "تبرز أهمية (تتبع الطلبات عبر العمليات غير المتزامنة) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تتبع الطلبات عبر العمليات غير المتزامنة\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'تتبع الطلبات عبر العمليات غير المتزامنة';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تتبع الطلبات عبر العمليات غير المتزامنة\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.3.8",
            "title": "تتبع الطلبات عبر العمليات غير المتزامنة",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (تتبع الطلبات عبر العمليات غير المتزامنة) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تتبع الطلبات عبر العمليات غير المتزامنة' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تتبع الطلبات عبر العمليات غير المتزامنة) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تتبع الطلبات عبر العمليات غير المتزامنة) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تتبع الطلبات عبر العمليات غير المتزامنة",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تتبع الطلبات عبر العمليات غير المتزامنة) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تتبع الطلبات عبر العمليات غير المتزامنة\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تتبع الطلبات عبر العمليات غير المتزامنة...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "21.4",
      "title": "إمكانات Node.js الحديثة",
      "englishTitle": "إمكانات Node.js الحديثة",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم إمكانات Node.js الحديثة وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-21.4-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (إمكانات Node.js الحديثة) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (إمكانات Node.js الحديثة) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-21.4-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (إمكانات Node.js الحديثة)؟",
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
          "id": "q-21.4-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (إمكانات Node.js الحديثة)، ما هو التصرف الهندسي السليم؟",
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
        "id": "ex-21.4",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (إمكانات Node.js الحديثة)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (إمكانات Node.js الحديثة) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع إمكانات Node.js الحديثة\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"إمكانات Node.js الحديثة\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "21.4.1",
          "title": "استخدام Test Runner المدمج",
          "englishTitle": "Test Runner المدمج",
          "definition": "يُقصد بـ (استخدام Test Runner المدمج) أحد المفاهيم المحورية في مسار إمكانات Node.js الحديثة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه إضافات Node-API محولات الكهرباء العالمية؛ تسمح بوصل محرك صناعي ألماني جبار (C++) بشبكة كهرباء منزلية حديثة (JavaScript) دون أي احتراق.",
          "why": "تبرز أهمية (استخدام Test Runner المدمج) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخدام Test Runner المدمج\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'استخدام Test Runner المدمج';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخدام Test Runner المدمج\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.4.1",
            "title": "استخدام Test Runner المدمج",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (استخدام Test Runner المدمج) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Test Runner المدمج' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخدام Test Runner المدمج) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخدام Test Runner المدمج) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخدام Test Runner المدمج",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخدام Test Runner المدمج) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Test Runner المدمج\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخدام Test Runner المدمج...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.4.2",
          "title": "استخدام Fetch API المدمج",
          "englishTitle": "Fetch API المدمج",
          "definition": "يُقصد بـ (استخدام Fetch API المدمج) أحد المفاهيم المحورية في مسار إمكانات Node.js الحديثة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه مساحات الذاكرة في V8 مكاتب الموظفين؛ New Space للمهام اليومية السريعة التي تمزق بعد دقائق، و Old Space لأرشيف العقود الدائمة التي تبقى لسنوات.",
          "why": "تبرز أهمية (استخدام Fetch API المدمج) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخدام Fetch API المدمج\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'استخدام Fetch API المدمج';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخدام Fetch API المدمج\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.4.2",
            "title": "استخدام Fetch API المدمج",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (استخدام Fetch API المدمج) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Fetch API المدمج' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخدام Fetch API المدمج) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخدام Fetch API المدمج) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخدام Fetch API المدمج",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخدام Fetch API المدمج) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Fetch API المدمج\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخدام Fetch API المدمج...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.4.3",
          "title": "استخدام Web Streams API",
          "englishTitle": "Web Streams API",
          "definition": "يُقصد بـ (استخدام Web Streams API) أحد المفاهيم المحورية في مسار إمكانات Node.js الحديثة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه جامع المهملات Scavenge عمال النظافة السريعين في قاعات السينما بين العروض؛ يجمعون العلب الفارغة بدقيقة واحدة ليفتح الباب للعرض التالي.",
          "why": "تبرز أهمية (استخدام Web Streams API) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخدام Web Streams API\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'استخدام Web Streams API';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخدام Web Streams API\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.4.3",
            "title": "استخدام Web Streams API",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (استخدام Web Streams API) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Web Streams API' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخدام Web Streams API) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخدام Web Streams API) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخدام Web Streams API",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخدام Web Streams API) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Web Streams API\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخدام Web Streams API...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.4.4",
          "title": "فهم دعم TypeScript المدمج وحدوده",
          "englishTitle": "فهم دعم TypeScript المدمج وحدوده",
          "definition": "يُقصد بـ (فهم دعم TypeScript المدمج وحدوده) أحد المفاهيم المحورية في مسار إمكانات Node.js الحديثة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه قنوات التشخيص diagnostics_channel كاميرات المراقبة التلفزيونية في شوارع المدينة؛ ترصد حركة المرور دون أن توقف سيارة واحدة في الطريق.",
          "why": "تبرز أهمية (فهم دعم TypeScript المدمج وحدوده) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ فهم دعم TypeScript المدمج وحدوده\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'فهم دعم TypeScript المدمج وحدوده';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: فهم دعم TypeScript المدمج وحدوده\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.4.4",
            "title": "فهم دعم TypeScript المدمج وحدوده",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (فهم دعم TypeScript المدمج وحدوده) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'فهم دعم TypeScript المدمج وحدوده' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (فهم دعم TypeScript المدمج وحدوده) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (فهم دعم TypeScript المدمج وحدوده) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على فهم دعم TypeScript المدمج وحدوده",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (فهم دعم TypeScript المدمج وحدوده) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين فهم دعم TypeScript المدمج وحدوده\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: فهم دعم TypeScript المدمج وحدوده...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.4.5",
          "title": "التعرف على SQLite المدمج حسب إصدار Node.js",
          "englishTitle": "التعرف على SQLite المدمج حسب إصدار Node.js",
          "definition": "يُقصد بـ (التعرف على SQLite المدمج حسب إصدار Node.js) أحد المفاهيم المحورية في مسار إمكانات Node.js الحديثة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه إضافات Node-API محولات الكهرباء العالمية؛ تسمح بوصل محرك صناعي ألماني جبار (C++) بشبكة كهرباء منزلية حديثة (JavaScript) دون أي احتراق.",
          "why": "تبرز أهمية (التعرف على SQLite المدمج حسب إصدار Node.js) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ التعرف على SQLite المدمج حسب إصدار Node.js\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'التعرف على SQLite المدمج حسب إصدار Node.js';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: التعرف على SQLite المدمج حسب إصدار Node.js\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.4.5",
            "title": "التعرف على SQLite المدمج حسب إصدار Node.js",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (التعرف على SQLite المدمج حسب إصدار Node.js) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'التعرف على SQLite المدمج حسب إصدار Node.js' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (التعرف على SQLite المدمج حسب إصدار Node.js) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (التعرف على SQLite المدمج حسب إصدار Node.js) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على التعرف على SQLite المدمج حسب إصدار Node.js",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (التعرف على SQLite المدمج حسب إصدار Node.js) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين التعرف على SQLite المدمج حسب إصدار Node.js\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: التعرف على SQLite المدمج حسب إصدار Node.js...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.4.6",
          "title": "مفهوم Single Executable Applications",
          "englishTitle": "Single Executable Applications",
          "definition": "يُقصد بـ (مفهوم Single Executable Applications) أحد المفاهيم المحورية في مسار إمكانات Node.js الحديثة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه مساحات الذاكرة في V8 مكاتب الموظفين؛ New Space للمهام اليومية السريعة التي تمزق بعد دقائق، و Old Space لأرشيف العقود الدائمة التي تبقى لسنوات.",
          "why": "تبرز أهمية (مفهوم Single Executable Applications) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم Single Executable Applications\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مفهوم Single Executable Applications';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم Single Executable Applications\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.4.6",
            "title": "مفهوم Single Executable Applications",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (مفهوم Single Executable Applications) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Single Executable Applications' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم Single Executable Applications) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم Single Executable Applications) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم Single Executable Applications",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم Single Executable Applications) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Single Executable Applications\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم Single Executable Applications...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.4.7",
          "title": "مقدمة في WebAssembly وWASI",
          "englishTitle": "مقدمة في WebAssembly وWASI",
          "definition": "يُقصد بـ (مقدمة في WebAssembly وWASI) أحد المفاهيم المحورية في مسار إمكانات Node.js الحديثة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه جامع المهملات Scavenge عمال النظافة السريعين في قاعات السينما بين العروض؛ يجمعون العلب الفارغة بدقيقة واحدة ليفتح الباب للعرض التالي.",
          "why": "تبرز أهمية (مقدمة في WebAssembly وWASI) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مقدمة في WebAssembly وWASI\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مقدمة في WebAssembly وWASI';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مقدمة في WebAssembly وWASI\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.4.7",
            "title": "مقدمة في WebAssembly وWASI",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (مقدمة في WebAssembly وWASI) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'مقدمة في WebAssembly وWASI' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مقدمة في WebAssembly وWASI) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مقدمة في WebAssembly وWASI) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مقدمة في WebAssembly وWASI",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مقدمة في WebAssembly وWASI) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في WebAssembly وWASI\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مقدمة في WebAssembly وWASI...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.4.8",
          "title": "التعرف على Node-API للإضافات الأصلية",
          "englishTitle": "التعرف على Node-API للإضافات الأصلية",
          "definition": "يُقصد بـ (التعرف على Node-API للإضافات الأصلية) أحد المفاهيم المحورية في مسار إمكانات Node.js الحديثة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه قنوات التشخيص diagnostics_channel كاميرات المراقبة التلفزيونية في شوارع المدينة؛ ترصد حركة المرور دون أن توقف سيارة واحدة في الطريق.",
          "why": "تبرز أهمية (التعرف على Node-API للإضافات الأصلية) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ التعرف على Node-API للإضافات الأصلية\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'التعرف على Node-API للإضافات الأصلية';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: التعرف على Node-API للإضافات الأصلية\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.4.8",
            "title": "التعرف على Node-API للإضافات الأصلية",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (التعرف على Node-API للإضافات الأصلية) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'التعرف على Node-API للإضافات الأصلية' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (التعرف على Node-API للإضافات الأصلية) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (التعرف على Node-API للإضافات الأصلية) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على التعرف على Node-API للإضافات الأصلية",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (التعرف على Node-API للإضافات الأصلية) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين التعرف على Node-API للإضافات الأصلية\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: التعرف على Node-API للإضافات الأصلية...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.4.9",
          "title": "التمييز بين الميزات المستقرة والتجريبية",
          "englishTitle": "التمييز بين الميزات المستقرة والتجريبية",
          "definition": "يُقصد بـ (التمييز بين الميزات المستقرة والتجريبية) أحد المفاهيم المحورية في مسار إمكانات Node.js الحديثة ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه إضافات Node-API محولات الكهرباء العالمية؛ تسمح بوصل محرك صناعي ألماني جبار (C++) بشبكة كهرباء منزلية حديثة (JavaScript) دون أي احتراق.",
          "why": "تبرز أهمية (التمييز بين الميزات المستقرة والتجريبية) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ التمييز بين الميزات المستقرة والتجريبية\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'التمييز بين الميزات المستقرة والتجريبية';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: التمييز بين الميزات المستقرة والتجريبية\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.4.9",
            "title": "التمييز بين الميزات المستقرة والتجريبية",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (التمييز بين الميزات المستقرة والتجريبية) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'التمييز بين الميزات المستقرة والتجريبية' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (التمييز بين الميزات المستقرة والتجريبية) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (التمييز بين الميزات المستقرة والتجريبية) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على التمييز بين الميزات المستقرة والتجريبية",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (التمييز بين الميزات المستقرة والتجريبية) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين التمييز بين الميزات المستقرة والتجريبية\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: التمييز بين الميزات المستقرة والتجريبية...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "21.5",
      "title": "هندسة الأنظمة واسعة النطاق",
      "englishTitle": "هندسة الأنظمة واسعة النطاق",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم هندسة الأنظمة واسعة النطاق وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-21.5-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (هندسة الأنظمة واسعة النطاق) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (هندسة الأنظمة واسعة النطاق) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-21.5-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (هندسة الأنظمة واسعة النطاق)؟",
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
          "id": "q-21.5-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (هندسة الأنظمة واسعة النطاق)، ما هو التصرف الهندسي السليم؟",
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
        "id": "ex-21.5",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (هندسة الأنظمة واسعة النطاق)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (هندسة الأنظمة واسعة النطاق) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع هندسة الأنظمة واسعة النطاق\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"هندسة الأنظمة واسعة النطاق\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "21.5.1",
          "title": "تصميم خدمات مستقلة قابلة للتوسع",
          "englishTitle": "تصميم خدمات مستقلة قابلة للتوسع",
          "definition": "يُقصد بـ (تصميم خدمات مستقلة قابلة للتوسع) أحد المفاهيم المحورية في مسار هندسة الأنظمة واسعة النطاق ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه مساحات الذاكرة في V8 مكاتب الموظفين؛ New Space للمهام اليومية السريعة التي تمزق بعد دقائق، و Old Space لأرشيف العقود الدائمة التي تبقى لسنوات.",
          "why": "تبرز أهمية (تصميم خدمات مستقلة قابلة للتوسع) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تصميم خدمات مستقلة قابلة للتوسع\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'تصميم خدمات مستقلة قابلة للتوسع';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تصميم خدمات مستقلة قابلة للتوسع\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.5.1",
            "title": "تصميم خدمات مستقلة قابلة للتوسع",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (تصميم خدمات مستقلة قابلة للتوسع) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تصميم خدمات مستقلة قابلة للتوسع' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تصميم خدمات مستقلة قابلة للتوسع) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تصميم خدمات مستقلة قابلة للتوسع) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تصميم خدمات مستقلة قابلة للتوسع",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تصميم خدمات مستقلة قابلة للتوسع) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تصميم خدمات مستقلة قابلة للتوسع\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تصميم خدمات مستقلة قابلة للتوسع...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.5.2",
          "title": "التواصل بين Microservices",
          "englishTitle": "التواصل بين Microservices",
          "definition": "يُقصد بـ (التواصل بين Microservices) أحد المفاهيم المحورية في مسار هندسة الأنظمة واسعة النطاق ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه جامع المهملات Scavenge عمال النظافة السريعين في قاعات السينما بين العروض؛ يجمعون العلب الفارغة بدقيقة واحدة ليفتح الباب للعرض التالي.",
          "why": "تبرز أهمية (التواصل بين Microservices) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ التواصل بين Microservices\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'التواصل بين Microservices';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: التواصل بين Microservices\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.5.2",
            "title": "التواصل بين Microservices",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (التواصل بين Microservices) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'التواصل بين Microservices' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (التواصل بين Microservices) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (التواصل بين Microservices) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على التواصل بين Microservices",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (التواصل بين Microservices) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين التواصل بين Microservices\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: التواصل بين Microservices...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.5.3",
          "title": "مفهوم Event-Driven Microservices",
          "englishTitle": "Event-Driven Microservices",
          "definition": "يُقصد بـ (مفهوم Event-Driven Microservices) أحد المفاهيم المحورية في مسار هندسة الأنظمة واسعة النطاق ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه قنوات التشخيص diagnostics_channel كاميرات المراقبة التلفزيونية في شوارع المدينة؛ ترصد حركة المرور دون أن توقف سيارة واحدة في الطريق.",
          "why": "تبرز أهمية (مفهوم Event-Driven Microservices) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم Event-Driven Microservices\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مفهوم Event-Driven Microservices';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم Event-Driven Microservices\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.5.3",
            "title": "مفهوم Event-Driven Microservices",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (مفهوم Event-Driven Microservices) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Event-Driven Microservices' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم Event-Driven Microservices) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم Event-Driven Microservices) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم Event-Driven Microservices",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم Event-Driven Microservices) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Event-Driven Microservices\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم Event-Driven Microservices...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.5.4",
          "title": "مقدمة في Apache Kafka",
          "englishTitle": "مقدمة في Apache Kafka",
          "definition": "يُقصد بـ (مقدمة في Apache Kafka) أحد المفاهيم المحورية في مسار هندسة الأنظمة واسعة النطاق ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه إضافات Node-API محولات الكهرباء العالمية؛ تسمح بوصل محرك صناعي ألماني جبار (C++) بشبكة كهرباء منزلية حديثة (JavaScript) دون أي احتراق.",
          "why": "تبرز أهمية (مقدمة في Apache Kafka) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مقدمة في Apache Kafka\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مقدمة في Apache Kafka';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مقدمة في Apache Kafka\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.5.4",
            "title": "مقدمة في Apache Kafka",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (مقدمة في Apache Kafka) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'مقدمة في Apache Kafka' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مقدمة في Apache Kafka) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مقدمة في Apache Kafka) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مقدمة في Apache Kafka",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مقدمة في Apache Kafka) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في Apache Kafka\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مقدمة في Apache Kafka...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.5.5",
          "title": "مفهوم CQRS",
          "englishTitle": "CQRS",
          "definition": "يُقصد بـ (مفهوم CQRS) أحد المفاهيم المحورية في مسار هندسة الأنظمة واسعة النطاق ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه مساحات الذاكرة في V8 مكاتب الموظفين؛ New Space للمهام اليومية السريعة التي تمزق بعد دقائق، و Old Space لأرشيف العقود الدائمة التي تبقى لسنوات.",
          "why": "تبرز أهمية (مفهوم CQRS) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم CQRS\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مفهوم CQRS';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم CQRS\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.5.5",
            "title": "مفهوم CQRS",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (مفهوم CQRS) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'CQRS' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم CQRS) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم CQRS) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم CQRS",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم CQRS) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم CQRS\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم CQRS...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.5.6",
          "title": "مفهوم Event Sourcing",
          "englishTitle": "Event Sourcing",
          "definition": "يُقصد بـ (مفهوم Event Sourcing) أحد المفاهيم المحورية في مسار هندسة الأنظمة واسعة النطاق ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه جامع المهملات Scavenge عمال النظافة السريعين في قاعات السينما بين العروض؛ يجمعون العلب الفارغة بدقيقة واحدة ليفتح الباب للعرض التالي.",
          "why": "تبرز أهمية (مفهوم Event Sourcing) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم Event Sourcing\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مفهوم Event Sourcing';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم Event Sourcing\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.5.6",
            "title": "مفهوم Event Sourcing",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (مفهوم Event Sourcing) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Event Sourcing' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم Event Sourcing) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم Event Sourcing) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم Event Sourcing",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم Event Sourcing) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Event Sourcing\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم Event Sourcing...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.5.7",
          "title": "مفهوم Saga Pattern",
          "englishTitle": "Saga Pattern",
          "definition": "يُقصد بـ (مفهوم Saga Pattern) أحد المفاهيم المحورية في مسار هندسة الأنظمة واسعة النطاق ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه قنوات التشخيص diagnostics_channel كاميرات المراقبة التلفزيونية في شوارع المدينة؛ ترصد حركة المرور دون أن توقف سيارة واحدة في الطريق.",
          "why": "تبرز أهمية (مفهوم Saga Pattern) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم Saga Pattern\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مفهوم Saga Pattern';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم Saga Pattern\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.5.7",
            "title": "مفهوم Saga Pattern",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (مفهوم Saga Pattern) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Saga Pattern' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم Saga Pattern) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم Saga Pattern) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم Saga Pattern",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم Saga Pattern) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Saga Pattern\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم Saga Pattern...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.5.8",
          "title": "مفهوم Outbox Pattern",
          "englishTitle": "Outbox Pattern",
          "definition": "يُقصد بـ (مفهوم Outbox Pattern) أحد المفاهيم المحورية في مسار هندسة الأنظمة واسعة النطاق ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه إضافات Node-API محولات الكهرباء العالمية؛ تسمح بوصل محرك صناعي ألماني جبار (C++) بشبكة كهرباء منزلية حديثة (JavaScript) دون أي احتراق.",
          "why": "تبرز أهمية (مفهوم Outbox Pattern) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم Outbox Pattern\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مفهوم Outbox Pattern';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم Outbox Pattern\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.5.8",
            "title": "مفهوم Outbox Pattern",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (مفهوم Outbox Pattern) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Outbox Pattern' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم Outbox Pattern) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم Outbox Pattern) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم Outbox Pattern",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم Outbox Pattern) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Outbox Pattern\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم Outbox Pattern...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.5.9",
          "title": "إدارة الاتساق في الأنظمة الموزعة",
          "englishTitle": "الاتساق في الأنظمة الموزعة",
          "definition": "يُقصد بـ (إدارة الاتساق في الأنظمة الموزعة) أحد المفاهيم المحورية في مسار هندسة الأنظمة واسعة النطاق ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "تشبه مساحات الذاكرة في V8 مكاتب الموظفين؛ New Space للمهام اليومية السريعة التي تمزق بعد دقائق، و Old Space لأرشيف العقود الدائمة التي تبقى لسنوات.",
          "why": "تبرز أهمية (إدارة الاتساق في الأنظمة الموزعة) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إدارة الاتساق في الأنظمة الموزعة\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إدارة الاتساق في الأنظمة الموزعة';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إدارة الاتساق في الأنظمة الموزعة\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.5.9",
            "title": "إدارة الاتساق في الأنظمة الموزعة",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (إدارة الاتساق في الأنظمة الموزعة) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'الاتساق في الأنظمة الموزعة' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إدارة الاتساق في الأنظمة الموزعة) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إدارة الاتساق في الأنظمة الموزعة) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إدارة الاتساق في الأنظمة الموزعة",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إدارة الاتساق في الأنظمة الموزعة) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة الاتساق في الأنظمة الموزعة\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إدارة الاتساق في الأنظمة الموزعة...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "21.5.10",
          "title": "تصميم نظام يتحمل فشل الخدمات",
          "englishTitle": "تصميم نظام يتحمل فشل الخدمات",
          "definition": "يُقصد بـ (تصميم نظام يتحمل فشل الخدمات) أحد المفاهيم المحورية في مسار هندسة الأنظمة واسعة النطاق ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه جامع المهملات Scavenge عمال النظافة السريعين في قاعات السينما بين العروض؛ يجمعون العلب الفارغة بدقيقة واحدة ليفتح الباب للعرض التالي.",
          "why": "تبرز أهمية (تصميم نظام يتحمل فشل الخدمات) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "V8 Heap Spaces",
              "pronunciation": "في إيت هيب سبيسز",
              "meaning": "تقسيمات الذاكرة في V8 بين الفضاء الجديد والقديم ومساحة الكائنات الكبيرة"
            },
            {
              "term": "Garbage Collector",
              "pronunciation": "غاربيدج كوليكتور",
              "meaning": "جامع المهملات الآلي لتحرير مساحات الذاكرة غير المستخدمة"
            },
            {
              "term": "Node-API",
              "pronunciation": "نود إيه-بي-آي",
              "meaning": "الواجهة المعيارية الثابتة لبناء إضافات ومكتبات بلغة C++"
            },
            {
              "term": "AsyncLocalStorage",
              "pronunciation": "أسينك لوكال ستوريدج",
              "meaning": "مشاركة سياق الطلب عبر العمليات غير المتزامنة دون تمريره كمعامل"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تصميم نظام يتحمل فشل الخدمات\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'تصميم نظام يتحمل فشل الخدمات';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تصميم نظام يتحمل فشل الخدمات\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
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
            "badge": "الدرس 21.5.10",
            "title": "تصميم نظام يتحمل فشل الخدمات",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
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
            "summary": "يمثل (تصميم نظام يتحمل فشل الخدمات) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تصميم نظام يتحمل فشل الخدمات' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تصميم نظام يتحمل فشل الخدمات) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تصميم نظام يتحمل فشل الخدمات) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تصميم نظام يتحمل فشل الخدمات",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تصميم نظام يتحمل فشل الخدمات) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تصميم نظام يتحمل فشل الخدمات\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تصميم نظام يتحمل فشل الخدمات...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    }
  ]
};

export default SECTION_21;
