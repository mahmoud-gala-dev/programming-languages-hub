// src/data/sections/section26/topic2.js
// القسم 26: SEO وتطبيقات الويب التقدمية - الموضوع 2: تطبيقات الويب التقدمية (PWA) في React

export const topic2 = {
  id: "26.2",
  title: "تطبيقات الويب التقدمية (PWA) في React",
  englishTitle: "Progressive Web Apps (PWA) in React",
  description:
    "الدليل التقني المتكامل لتحويل تطبيقات React إلى تطبيقات ويب تقدمية (Progressive Web Apps): بدءاً من تكوين ملف Web App Manifest والأيقونات التكيفية، ومروراً ببرمجة وفهم دورة حياة الـ Service Worker، وتطبيق استراتيجيات التخزين المؤقت الاحترافية (Cache-First, Stale-While-Revalidate)، وتوفير تجربة العمل بدون إنترنت (Offline Mode) مع شاشات مخصصة، وإدارة حوار التثبيت التفاعلي على أجهزة المستخدمين، وصولاً إلى أتمتة المنظومة بالكامل عبر Google Workbox وإشعار المستخدمين بتحديثات الإصدارات الجديدة فورياً.",
  subtopics: [
    {
      id: "26.2.a",
      title: "مفهوم PWA ومميزاتها الأساسية",
      englishTerm: {
        term: "Progressive Web App (PWA)",
        pronunciation: "بروجريسف ويب آب",
        meaning: "تطبيق ويب حديث يجمع بين مرونة وسهولة وصول مواقع الويب وقوة وإمكانات التطبيقات الأصلية (Native Apps)"
      },
      description:
        "تطبيقات الويب التقدمية (PWA) هي معيار هندسي حديث يهدف إلى سد الفجوة بين مواقع الويب والتطبيقات الأصلية المثبتة على الهواتف والأجهزة الذكية. تتيح PWA للمستخدم تثبيت تطبيق الويب بنقرة واحدة مباشرة من المتصفح دون الحاجة للمرور بمتاجر التطبيقات (App Store أو Google Play). وتتميز بثلاثة ركائز جوهرية: القدرة (Capable) عبر استخدام أحدث واجهات المتصفح المتقدمة كالعمل دون إنترنت، والموثوقية (Reliable) من خلال سرعة استجابة فائقة وانعدام شاشات الانقطاع، والقابلية للتثبيت (Installable) حيث تعمل في نافذة مستقلة Standalone بأيقونتها وشاشتها الترحيبية الخاصة.",
      realWorldAnalogy:
        "تطبيق الويب العادي يشبه تناول الطعام داخل المطعم؛ يجب أن تذهب إليه في كل مرة ويتطلب وجود الخدمة. بينما الـ PWA تشبه امتلاك ثلاجة ذكية في منزلك محشوة بوجباتك المفضلة (التخزين المحلي والعمل دون إنترنت)، وتستطيع الوصول إليها بلمسة زر واحدة على مدار الساعة حتى لو انقطعت الكهرباء أو أغلقت الطرق المؤدية للمطعم.",
      whyItMatters:
        "توفر PWA تكاليف تطوير وصيانة تطبيقات منفصلة لـ iOS وAndroid وWeb؛ حيث يتم كتابة كود واحد فقط لـ React يعمل عبر كافة المنصات مع توفير استهلاك باقة الإنترنت وزيادة تفاعل المستخدمين بنسبة تفوق 50%.",
      syntax:
        "// التحقق من دعم ميزات PWA والـ Service Worker في المتصفح\nif ('serviceWorker' in navigator) {\n  // المتصفح يدعم تطبيقات الويب التقدمية الحديثة\n}",
      codeExample: `// مثال بسيط: التحقق من جاهزية بيئة المتصفح لميزات PWA
import React, { useState, useEffect } from 'react';

function PwaSupportBadge() {
  // حالة تخزين دعم المتصفح لميزات التقدمية
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // التحقق من دعم Service Worker والـ Caches API
    if ('serviceWorker' in navigator && 'caches' in window) {
      // تحديث الحالة لتأكيد التوافقية
      setIsSupported(true);
    }
  }, []);

  return (
    <div className="p-4 border rounded-xl bg-slate-900 text-slate-100 flex items-center justify-between">
      <span>حالة دعم تقنيات PWA في متصفحك:</span>
      {isSupported ? (
        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full text-xs font-bold">
          ✅ مدعوم بالكامل
        </span>
      ) : (
        <span className="px-3 py-1 bg-rose-500/20 text-rose-400 border border-rose-500/40 rounded-full text-xs font-bold">
          ❌ المتصفح غير مدعوم
        </span>
      )}
    </div>
  );
}

export default PwaSupportBadge;`,
      advancedExample: `// مثال متقدم: فاحص ركائز PWA الثلاث (القدرة، الموثوقية، القابلية للتثبيت)
import React, { useState, useEffect } from 'react';

export function PwaHealthInspector() {
  const [metrics, setMetrics] = useState({
    hasServiceWorker: false,
    hasManifest: false,
    isHttps: false,
    isStandalone: false
  });

  useEffect(() => {
    // 1. فحص دعم Service Worker
    const sw = 'serviceWorker' in navigator;
    // 2. فحص وجود رابط ملف manifest
    const manifest = !!document.querySelector('link[rel="manifest"]');
    // 3. فحص الأمان عبر تشغيل بروتوكول HTTPS أو localhost
    const https = window.location.protocol === 'https:' || window.location.hostname === 'localhost';
    // 4. فحص ما إذا كان التطبيق يعمل حالياً في وضع التثبيت المستقل
    const standalone = window.matchMedia('(display-mode: standalone)').matches;

    setMetrics({
      hasServiceWorker: sw,
      hasManifest: manifest,
      isHttps: https,
      isStandalone: standalone
    });
  }, []);

  // حساب درجة جاهزية التطبيق كـ PWA
  const score = Object.values(metrics).filter(Boolean).length * 25;

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-slate-100 font-sans">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
        <div>
          <h3 className="text-lg font-bold text-white">فاحص معايير جاهزية الـ PWA</h3>
          <p className="text-xs text-slate-400">تقييم تطبيق React وفق اشتراطات التثبيت العالمية لـ Google</p>
        </div>
        <div className="text-2xl font-bold font-mono text-emerald-400">{score}%</div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between">
          <span>دعم Service Worker:</span>
          <span className={metrics.hasServiceWorker ? 'text-emerald-400 font-bold' : 'text-rose-400'}>
            {metrics.hasServiceWorker ? 'جاهز' : 'مفقود'}
          </span>
        </div>
        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between">
          <span>ملف Web Manifest:</span>
          <span className={metrics.hasManifest ? 'text-emerald-400 font-bold' : 'text-rose-400'}>
            {metrics.hasManifest ? 'مرتبط' : 'غير موجود'}
          </span>
        </div>
        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between">
          <span>الاتصال الآمن HTTPS:</span>
          <span className={metrics.isHttps ? 'text-emerald-400 font-bold' : 'text-rose-400'}>
            {metrics.isHttps ? 'آمن ومحمي' : 'غير آمن'}
          </span>
        </div>
        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between">
          <span>وضع العرض المستقل:</span>
          <span className={metrics.isStandalone ? 'text-emerald-400 font-bold' : 'text-blue-400'}>
            {metrics.isStandalone ? 'تطبيق مثبت' : 'متصفح تقليدي'}
          </span>
        </div>
      </div>
    </div>
  );
}`,
      output:
        "يتم فحص مقومات الـ PWA وعرض نسبة الجاهزية بدقة، مما يساعد المطور على التأكد من استيفاء شروط ظهور زر التثبيت للمستخدم.",
      commonMistakes: [
        {
          mistake: "محاولة تجربة ميزات PWA على بروتوكول HTTP غير مشفر في بيئة الإنتاج.",
          fix: "تقنيات PWA والـ Service Worker تتطلب اتصالاً آمناً عبر HTTPS حصراً لحماية أصول المستخدم (باستثناء localhost أثناء التطوير)."
        },
        {
          mistake: "الاعتقاد بأن PWA تعني مجرد موقع متجاوب مع شاشات الجوال Responsive Web.",
          fix: "التجاوب هو البداية فقط، بينما تتطلب PWA ملف Manifest وService Worker وتخزين كاش وعملاً دون إنترنت."
        }
      ],
      bestPractices: [
        "صمم واجهة التطبيق لتشبه التطبيقات الأصلية (App-like Feel) مع منع التحديد العشوائي للنصوص في الأزرار واستخدام مناطق لمس مريحة.",
        "احرص على ألا تزيد مساحة أول حزمة من التطبيق المخزنة محلياً عن 5 ميجابايت لتفادي استهلاك ذاكرة الهاتف.",
        "وفر إشعاراً لطيفاً عند انقطاع الإنترنت يوضح للمستخدم أن التطبيق لا يزال يعمل بكفاءة عبر الكاش."
      ],
      infographic: {
        title: "الركائز الثلاث لتطبيقات الويب التقدمية (PWA)",
        nodes: [
          { label: "1. القابلية (Capable)", desc: "واجهات حديثة: التخزين دون إنترنت والإشعارات الفورية والمزامنة" },
          { label: "2. الموثوقية (Reliable)", desc: "سرعة استجابة فائقة وعدم الاعتماد على جودة شبكة الاتصال" },
          { label: "3. التثبيت (Installable)", desc: "أيقونة على الشاشة الرئيسية وفتح في نافذة مستقلة بدون شريط المتصفح" }
        ]
      }
    },
    {
      id: "26.2.b",
      title: "إنشاء وتهيئة ملف Web App Manifest",
      englishTerm: {
        term: "Web App Manifest",
        pronunciation: "ويب آب مانيفست",
        meaning: "ملف تكوين JSON يعرف المتصفح ببيانات التطبيق وألوانه وأيقوناته وكيفية ظهوره عند التثبيت"
      },
      description:
        "ملف Web App Manifest (عادة manifest.json أو manifest.webmanifest) هو وثيقة التعريف الرسمية لتطبيقك لدى نظام التشغيل. يحتوي الملف على الاسم الكامل للتطبيق (name) والاسم القصير أسفل الأيقونة (short_name)، رابط البداية (start_url)، نمط العرض (display) مثل standalone لإخفاء أشرطة المتصفح، ولون شريط المهام (theme_color) ولون شاشة البداية الترحيبية (background_color)، بالإضافة إلى مصفوفة الأيقونات بأحجامها المختلفة. يتم ربط هذا الملف في مستند HTML الرئيسي عبر الوسم: <link rel='manifest' href='/manifest.json' />.",
      realWorldAnalogy:
        "ملف الـ Manifest هو بمثابة استمارة جواز السفر لتطبيقك؛ تذكر فيها اسمه الرسمي، وصورته الشخصية، ولون زيه الرسمي، وكيف يريد أن يتعامل معه نظام التشغيل عند دخوله لأول مرة.",
      whyItMatters:
        "بدون ملف Manifest صالح ومكتمل البيانات، سيرفض المتصفح إظهار شريط التثبيت التلقائي للمستخدمين، وسيتعامل مع الموقع كمجرد صفحة ويب عادية.",
      syntax:
        "// وسم الربط في <head>\n<link rel=\"manifest\" href=\"/manifest.json\" />\n\n// هيكل ملف manifest.json\n{\n  \"name\": \"تطبيقي الرائع\",\n  \"short_name\": \"تطبيقي\",\n  \"start_url\": \"/\",\n  \"display\": \"standalone\",\n  \"theme_color\": \"#0f172a\"\n}",
      codeExample: `// مثال بسيط: نموذج ملف manifest.json النموذجي لتطبيق React
{
  "name": "أكاديمية المطورين لتعلم React",
  "short_name": "الأكاديمية",
  "description": "منصة تعليمية متكاملة لاحتراف أحدث تقنيات React وNext.js دون إنترنت.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#090d16",
  "theme_color": "#10b981",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}`,
      advancedExample: `// مثال متقدم: مولد ملف Manifest ومحرر القيم تفاعلياً في تطبيق React
import React, { useState } from 'react';

export function ManifestConfigStudio() {
  const [config, setConfig] = useState({
    name: 'تطبيق المهام الذكي',
    shortName: 'مهامي',
    themeColor: '#0ea5e9',
    bgColor: '#0f172a',
    display: 'standalone'
  });

  // توليد كائن الـ Manifest الكامل
  const generatedManifest = {
    name: config.name,
    short_name: config.shortName,
    start_url: '/',
    display: config.display,
    background_color: config.bgColor,
    theme_color: config.themeColor,
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ]
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-slate-100 font-sans">
      <h3 className="text-lg font-bold text-white mb-4">استوديو توليد ملف Web App Manifest</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* حقول التعديل */}
        <div className="space-y-3 text-xs">
          <div>
            <label className="block text-slate-400 mb-1">الاسم الكامل (name):</label>
            <input
              type="text"
              value={config.name}
              onChange={(e) => setConfig({ ...config, name: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 px-3 py-1.5 rounded text-white"
            />
          </div>
          <div>
            <label className="block text-slate-400 mb-1">الاسم المختصر (short_name):</label>
            <input
              type="text"
              value={config.shortName}
              onChange={(e) => setConfig({ ...config, shortName: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 px-3 py-1.5 rounded text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-400 mb-1">لون السمة (theme_color):</label>
              <input
                type="color"
                value={config.themeColor}
                onChange={(e) => setConfig({ ...config, themeColor: e.target.value })}
                className="w-full h-8 bg-transparent cursor-pointer rounded"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">لون الخلفية (background_color):</label>
              <input
                type="color"
                value={config.bgColor}
                onChange={(e) => setConfig({ ...config, bgColor: e.target.value })}
                className="w-full h-8 bg-transparent cursor-pointer rounded"
              />
            </div>
          </div>
        </div>

        {/* كود الـ JSON المولد */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 overflow-x-auto text-[11px] font-mono text-emerald-300">
          <pre>{JSON.stringify(generatedManifest, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}`,
      output:
        "يتم توليد ملف manifest.json سليم يربط التطبيق بنظام التشغيل، مما يسمح بعرض شاشة ترحيبية ملونة وأيقونة خاصة وإخفاء شريط التنقل للمتصفح.",
      commonMistakes: [
        {
          mistake: "نسيان وسم <meta name='theme-color' content='...'> في كود HTML بالتوازي مع وجوده في ملف manifest.",
          fix: "تضمين الوسم في كل من manifest.json وداخل <head> لضمان تلوين شريط المتصفح فورياً قبل تحميل ملف الـ manifest."
        },
        {
          mistake: "تعيين start_url لمسار يعيد التوجيه أو يتطلب مصادقة مما يؤدي إلى فشل فتح التطبيق بعد تثبيته دون إنترنت.",
          fix: "توجيه start_url للصفحة الرئيسية العامة المستقرة أو لوحة المتابعة المتاحة دون اتصال."
        }
      ],
      bestPractices: [
        "اختر خيار display: 'standalone' لمعظم التطبيقات لتبدو مثل التطبيقات الأصلية تماماً بدون أشرطة المتصفح.",
        "اجعل short_name لا يتجاوز 12 حرفاً لضمان عدم اقتطاعه أسفل الأيقونة في الشاشة الرئيسية لنظامي Android وiOS.",
        "ضع ملف manifest.json في مجلد public ليتم نسخه مباشرة إلى جذر السيرفر أثناء البناء."
      ],
      infographic: {
        title: "الخصائص الحيوية في ملف Web App Manifest",
        nodes: [
          { label: "name & short_name", desc: "الاسم الكامل في شاشة التثبيت والاسم المختصر تحت أيقونة الهاتف" },
          { label: "icons (192 & 512)", desc: "أيقونات عالية الدقة بأحجام قياسية مع دعم خاصية maskable التكيفية" },
          { label: "display: standalone", desc: "تشغيل التطبيق في نافذة مستقلة دون شريط الروابط وأزرار المتصفح" },
          { label: "theme_color", desc: "تلوين شريط المهام العلوي لنظام التشغيل بلون علامتك التجارية" }
        ]
      }
    },
    {
      id: "26.2.c",
      title: "إعداد وتصميم أيقونات التطبيق التكيفية Maskable Icons",
      englishTerm: {
        term: "App Icons & Maskable Icons",
        pronunciation: "آب أيكونز آند ماسكابل أيكونز",
        meaning: "حزم الأيقونات الرقمية المصممة للتكيف مع كافة الأشكال الهندسية التي تفرضها أنظمة التشغيل المختلفة"
      },
      description:
        "تختلف أنظمة التشغيل في كيفية عرض أيقونات التطبيقات؛ فنظام Android قد يطبق قالباً دائرياً، أو مربعاً ذا حواف ناعمة (Squircle)، أو قطرة ماء، بينما نظام iOS يطبق قالباً مربعاً محدداً. إذا استخدمت أيقونة عادية بدون تحديد خاصية maskable، فسيقوم النظام بوضع الأيقونة داخل خلفية بيضاء قبيحة (Letterboxing). الأيقونات التكيفية (Maskable Icons) مصممة بحيث تحتوي على منطقة أمان (Safe Zone) في المنتصف بنسبة 80% من المساحة، مما يضمن بقاء الشعار مرئياً دون أي تشويه أو اقتطاع بغض النظر عن القالب الذي يفرضه جهاز المستخدم.",
      realWorldAnalogy:
        "تشبه الأيقونة التكيفية ارتداء قميص واسع بأزرار مرنة؛ أياً كان شكل البرواز أو القالب الذي يفرضه نظام التشغيل (دائري، بيضاوي، مربع)، سيبقى الشعار في المنتصف دون أن تنقطع أطرافه.",
      whyItMatters:
        "الأيقونة المصممة باحترافية وفق معيار Maskable تعطي انطباعاً فورياً بجودة ومصداقية التطبيق وتجعله يندمج بسلاسة مع باقي التطبيقات الأصلية المثبتة على هاتف المستخدم.",
      syntax:
        "// إعلان أيقونة Maskable داخل manifest.json\n{\n  \"src\": \"/icons/icon-maskable-512.png\",\n  \"sizes\": \"512x512\",\n  \"type\": \"image/png\",\n  \"purpose\": \"maskable any\"\n}",
      codeExample: `// مثال بسيط: إعلان الأيقونات في رأس الصفحة HTML لتوافق أجهزة Apple
import React from 'react';

function AppleTouchIcons() {
  return (
    <>
      {/* أيقونة خاصة لأجهزة iPhone وiPad (iOS Safari) */}
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      {/* أيقونة Favicon التقليدية لتبويبات المتصفح */}
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
    </>
  );
}

export default AppleTouchIcons;`,
      advancedExample: `// مثال متقدم: مكون فحص وتصور منطقة الأمان للأيقونات التكيفية Safe Zone
import React, { useState } from 'react';

export function MaskableIconSimulator({ iconUrl = '/logo.png' }) {
  const [shape, setShape] = useState('rounded'); // circle, rounded, squircle

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-slate-100 font-sans">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <h3 className="text-base font-bold text-white">محاكي الأيقونة التكيفية Maskable Icon</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setShape('circle')}
            className={'px-3 py-1 rounded text-xs transition ' + (shape === 'circle' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 text-slate-300')}
          >
            دائرية (Pixel)
          </button>
          <button
            onClick={() => setShape('rounded')}
            className={'px-3 py-1 rounded text-xs transition ' + (shape === 'rounded' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 text-slate-300')}
          >
            مربعة ناعمة (OneUI)
          </button>
          <button
            onClick={() => setShape('squircle')}
            className={'px-3 py-1 rounded text-xs transition ' + (shape === 'squircle' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 text-slate-300')}
          >
            Squircle (Xiaomi)
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-8 bg-slate-900/60 rounded-xl border border-slate-800">
        {/* حاوية محاكاة شكل القالب */}
        <div
          className={'w-32 h-32 bg-emerald-600 relative overflow-hidden flex items-center justify-center shadow-xl transition-all duration-300 ' + 
            (shape === 'circle' ? 'rounded-full' : shape === 'squircle' ? 'rounded-3xl' : 'rounded-2xl')}
        >
          {/* دائرة منطقة الأمان التقديرية (Safe Zone 80%) */}
          <div className="w-24 h-24 border border-dashed border-white/40 rounded-full absolute flex items-center justify-center pointer-events-none">
            <span className="text-[10px] text-white/50">منطقة الأمان</span>
          </div>
          {/* محتوى الشعار المركزي */}
          <div className="text-3xl font-black text-white z-10 font-mono">⚛️ PWA</div>
        </div>

        <p className="mt-4 text-xs text-slate-400 text-center max-w-sm">
          تضمن خاصية Maskable عدم اقتصاص الشعار الداخلي عند تغيير شكل الإطار الخارجي بواسطة نظام تشغيل الجهاز.
        </p>
      </div>
    </div>
  );
}`,
      output:
        "معاينة تفاعلية لكيفية ظهور أيقونة التطبيق عبر أشكال وأنظمة التشغيل المختلفة مع ضمان بقاء الشعار داخل منطقة الأمان المعتمدة.",
      commonMistakes: [
        {
          mistake: "وضع نصوص هامة أو تفاصيل دقيقة في الأطراف الخارجية للأيقونة مما يؤدي إلى اقتطاعها في القالب الدائري.",
          fix: "ترك هامش بنسبة 10% من كل جانب ووضع كافة العناصر الأساسية داخل دائرة منطقة الأمان (Safe Zone الوسطى 80%)."
        },
        {
          mistake: "توفير حجم واحد فقط للأيقونة (مثل 192x192 فقط) وإهمال حجم 512x512.",
          fix: "توفير حزمة كاملة تضم على الأقل 192x192 و512x512 بنسختي any وmaskable لتلبية شروط Google Lighthouse."
        }
      ],
      bestPractices: [
        "استخدم أداة Maskable.app لمعاينة أيقونتك والتأكد من توافقها التام مع حدود منطقة الأمان.",
        "احرص على ألا تكون خلفية أيقونة Maskable شفافة؛ يجب أن تكون الخلفية ممتلئة بلون صلب متناسق.",
        "وفر ملف apple-touch-icon.png بأبعاد 180x180 لتوفير تجربة تثبيت ممتازة لمستخدمي سفاري على أجهزة آيفون."
      ],
      infographic: {
        title: "هندسة الأيقونة التكيفية Maskable Icon",
        nodes: [
          { label: "الأبعاد الكاملة 100%", desc: "512 × 512 بكسل بخلفية ملونة صلبة بدون أي شفافية" },
          { label: "منطقة الأمان (Safe Zone 80%)", desc: "دائرة مركزية بقطر 409 بكسل تحوي الشعار كاملاً" },
          { label: "منطقة القطع المحتملة (Outer 20%)", desc: "أطراف قد يقوم النظام بقصها عند تطبيق القوالب المختلفة" }
        ]
      }
    },
    {
      id: "26.2.d",
      title: "مقدمة إلى Service Workers ودورة حياتها",
      englishTerm: {
        term: "Service Worker Lifecycle",
        pronunciation: "سيرفيس وركر لايف سايكل",
        meaning: "برنامج نصي وسيط يعمل في خيط معالجة خلفي للمتصفح لاعتراض الطلبات الشبكية وإدارتها"
      },
      description:
        "الـ Service Worker هو المحرك السري والعمود الفقري الحقيقي لأي تطبيق PWA. هو عبارة عن ملف جافاسكريبت يعمل في خلفية المتصفح على خيط مستقل (Background Thread) بمعزل تام عن خيط الواجهة الرسومية (Main Thread) ومستند DOM. يعمل الـ Service Worker كخادم وكيل (Programmable Network Proxy) يقف بين تطبيق React والإنترنت، حيث يستطيع اعتراض كافة طلبات الشبكة (fetch events) وتحديد ما إذا كان سيجلب البيانات من الكاش المحلي فورياً أو من الخادم الخارجي. تمر دورة حياته بأربع مراحل متتالية: التسجيل (Registration)، والتثبيت (Installation)، والتفعيل (Activation)، والعمل الفعلي (Redundant / Idle / Active).",
      realWorldAnalogy:
        "الـ Service Worker يشبه مساعدك الشخصي الذكي الذي يقف بينك وبين بوابة المنزل. عندما تطلب كتاباً أو غرضاً، يفتش أولاً في خزانته المحلية؛ إن وجده يقدمه لك فوراً في لمح البصر، وإن لم يجده يخرج إلى السوق ليحضره ثم يخزن نسخة منه في خزانته لطلبك القادم.",
      whyItMatters:
        "الـ Service Worker يحرر تطبيق الويب من قيود الاتصال بالإنترنت، ويتيح سرعة استجابة مذهلة بصفر ميلي ثانية للموارد المخزنة، فضلاً عن استقبال الإشعارات الفورية والمزامنة الخلفية حتى أثناء إغلاق التبويب.",
      syntax:
        "// تسجيل الـ Service Worker في تطبيق React\nnavigator.serviceWorker.register('/sw.js')\n  .then(reg => console.log('تم التسجيل بنجاح:', reg.scope))\n  .catch(err => console.error('فشل التسجيل:', err));",
      codeExample: `// مثال بسيط: تسجيل ملف الـ Service Worker عند بدء تشغيل تطبيق React
import React, { useEffect } from 'react';

function ServiceWorkerRegistrar() {
  useEffect(() => {
    // التحقق من دعم المتصفح للخدمة
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      // انتظار اكتمال تحميل نافذة المتصفح لعدم تعطيل سرعة التحميل الأولى
      window.addEventListener('load', () => {
        // تسجيل ملف sw.js الموجود في جذر الموقع
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('✅ تم تسجيل Service Worker بنطاق:', registration.scope);
          })
          .catch((error) => {
            console.error('❌ حدث خطأ أثناء تسجيل Service Worker:', error);
          });
      });
    }
  }, []);

  return null;
}

export default ServiceWorkerRegistrar;`,
      advancedExample: `// مثال متقدم: هيكل ملف sw.js المتكامل الذي يوضح دورة الحياة من التثبيت حتى اعتراض الطلبات
// هذا الكود يكتب داخل ملف public/sw.js
const CACHE_NAME = 'app-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/manifest.json',
  '/offline.html'
];

// 1. مرحلة التثبيت Install: تخزين الموارد الأساسية في الكاش
self.addEventListener('install', (event) => {
  console.log('[Service Worker] جارٍ تثبيت الإصدار الجديد...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] تم فتح الكاش وتخزين الهيكل الأولي.');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // إجبار Service Worker الجديد على الانتقال فوراً لمرحلة التفعيل
  self.skipWaiting();
});

// 2. مرحلة التفعيل Activate: تنظيف وحذف الكاشات القديمة
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] تفعيل العامل وتنظيف النسخ القديمة...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[Service Worker] حذف الكاش القديم:', name);
            return caches.delete(name);
          }
        })
      );
    })
  );
  // السيطرة الفورية على كافة التبويبات المفتوحة دون الحاجة لإعادة تحميلها
  self.clients.claim();
});

// 3. مرحلة اعتراض الطلبات Fetch: تقديم الموارد من الكاش أو الشبكة
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // إرجاع النسخة المخزنة إن وجدت، أو استكمال الطلب عبر الشبكة
      return cachedResponse || fetch(event.request);
    })
  );
});`,
      output:
        "يتم تثبيت الـ Service Worker في خلفية المتصفح وتخزين ملفات التطبيق الحرجة، ليتمكن المستخدم من إعادة فتح التطبيق وتصفحه بسرعة البرق ودون الحاجة لاتصال بالإنترنت.",
      commonMistakes: [
        {
          mistake: "محاولة التعامل مع كائن DOM أو window أو localStorage داخل كود Service Worker.",
          fix: "تذكر دائماً أن Service Worker يعمل في Worker Scope مستقل؛ لا وجود لـ window أو DOM، ويتم استخدام self وcaches وIndexedDB بدلاً منها."
        },
        {
          mistake: "تخزين موارد ذات أسماء متغيرة باستمرار دون وضع استراتيجية لتنظيف الكاش القديم مما يملأ مساحة تخزين جهاز المستخدم.",
          fix: "استخدام أسماء كاش محددة بالإصدارات (Cache Versioning) وتنظيف الكاشات القديمة داخل حدث activate."
        }
      ],
      bestPractices: [
        "سجل الـ Service Worker دائماً بعد حدث window.onload لتجنب منافسة ملفات جافاسكريبت الأساسية على موارد الشبكة أثناء التحميل الأولي.",
        "استخدم HTTPS دائماً؛ المتصفحات تحظر Service Worker تماماً على بروتوكول HTTP لحماية المستخدم من هجمات Man-in-the-Middle.",
        "احرص على ألا تخزن استجابات طلبات POST في الكاش لأن مواصفات Cache API تدعم طلبات GET فقط."
      ],
      infographic: {
        title: "دورة حياة الـ Service Worker في المتصفح",
        nodes: [
          { label: "1. Registration", desc: "تسجيل ملف sw.js في المتصفح عبر navigator.serviceWorker.register" },
          { label: "2. Installation", desc: "تحميل وتخزين الملفات الأساسية مسبقاً عبر cache.addAll" },
          { label: "3. Activation", desc: "تنظيف الكاشات السابقة وإحلال الإصدار الجديد عبر clients.claim" },
          { label: "4. Fetch Proxy", desc: "اعتراض كافة الطلبات الشبكية وإدارتها بين الكاش والإنترنت" }
        ]
      }
    },
    {
      id: "26.2.e",
      title: "استراتيجيات تخزين الموارد Caching Strategies",
      englishTerm: {
        term: "Caching Strategies",
        pronunciation: "كاشينج ستراتيجيز",
        meaning: "الأنماط الهندسية المنظمة لإدارة تدفق البيانات بين ذاكرة الكاش المحلية وشبكة الإنترنت"
      },
      description:
        "لا توجد استراتيجية كاش واحدة تناسب كافة أنواع الموارد في التطبيق؛ فالأصول الثابتة (مثل الصور وملفات CSS والخطوط) تختلف متطلباتها كلياً عن بيانات استدعاءات API اللحظية المتغيرة. لذلك توجد 5 استراتيجيات تخزين رئيسية معتمدة هندسياً: 1) Cache First: فحص الكاش أولاً ثم اللجوء للشبكة (مثالية للأصول الثابتة). 2) Network First: محاولة جلب أحدث البيانات من الشبكة أولاً مع الاحتفاظ بالكاش كخطة بديلة (للبيانات الحية الهامة كالأرصدة). 3) Stale-While-Revalidate: تقديم النسخة المخزنة فوراً مع تحديثها في الخلفية من الشبكة (أفضل توازن بين السرعة وحداثة البيانات). 4) Network Only: للعمليات الحساسة التي ترفض التخزين كالدفع. 5) Cache Only: للخطوط والملفات المدمجة الثابتة كلياً.",
      realWorldAnalogy:
        "تشبه استراتيجية Stale-While-Revalidate قراءة نشرة الأخبار المعلقة على الحائط فور وصولك (السرعة)، بينما يقوم الموظف في نفس اللحظة بطباعة وتثبيت النشرة الأحدث لتقرأها في المرة التالية دون أن يعطلك عن مهامك.",
      whyItMatters:
        "اختيار الاستراتيجية المناسبة لكل مسار يمنع عرض بيانات قديمة للمستخدم في الأماكن الحساسة، وفي نفس الوقت يوفر تجربة تصفح لحظية دون انتظار تحميل الشاشات المتكررة.",
      syntax:
        "// Stale-While-Revalidate نمط\nconst cached = await caches.match(req);\nconst fetchPromise = fetch(req).then(res => { cache.put(req, res.clone()); return res; });\nreturn cached || fetchPromise;",
      codeExample: `// مثال بسيط: تطبيق استراتيجية Cache First للملفات الثابتة
self.addEventListener('fetch', (event) => {
  // تطبيق الاستراتيجية على الصور فقط
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open('images-cache').then((cache) => {
        // البحث عن الصورة في الكاش أولاً
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            // إرجاع الصورة من الكاش دون أي اتصال بالشبكة
            return cachedResponse;
          }
          // إذا لم تكن موجودة، جلبها من الإنترنت وتخزينها للمرات القادمة
          return fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});`,
      advancedExample: `// مثال متقدم: نظام متكامل لتطبيق استراتيجيات الكاش المتعددة وفق نوع الطلب
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 1. استراتيجية Network First لطلبات البيانات الحية والـ API
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // نسخ الاستجابة وتحديث الكاش في الخلفية
          const resClone = networkResponse.clone();
          caches.open('api-cache').then((cache) => cache.put(event.request, resClone));
          return networkResponse;
        })
        .catch(() => {
          // في حال فشل الاتصال بالشبكة، يتم استرجاع آخر نسخة محفوظة في الكاش
          return caches.match(event.request);
        })
    );
    return;
  }

  // 2. استراتيجية Stale-While-Revalidate لصفحات المقالات والواجهات
  event.respondWith(
    caches.open('dynamic-content').then(async (cache) => {
      const cachedResponse = await cache.match(event.request);
      
      // إطلاق طلب الشبكة في الخلفية لتحديث الكاش
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      }).catch(() => null);

      // إرجاع النسخة المخزنة فوراً إن وجدت، أو انتظار استجابة الشبكة
      return cachedResponse || fetchPromise;
    })
  );
});`,
      output:
        "يتم توجيه كل طلب شبكي وفق الاستراتيجية الأمثل: سرعة قصوى للصور والواجهات مع حداثة وأمان دائم لبيانات الـ API.",
      commonMistakes: [
        {
          mistake: "نسيان استنساخ الاستجابة (res.clone()) قبل إدخالها في الكاش عبر cache.put().",
          fix: "استجابة المتصفح Response هي تيار بيانات ReadableStream يُقرأ مرة واحدة فقط، ويجب استنساخها قبل تمريرها للكاش والمستخدم معاً."
        },
        {
          mistake: "استخدام Cache First مع طلبات المصادقة واستعلامات البيانات المالية الحساسة.",
          fix: "استخدام Network Only أو Network First حصراً للبيانات الديناميكية الخاصة بكل مستخدم لمنع تسريب بيانات قديمة أو مضللة."
        }
      ],
      bestPractices: [
        "استخدم Stale-While-Revalidate كاستراتيجية افتراضية للمحتوى شبه الثابت (مثل قوائم المقالات والتصنيفات).",
        "حدد حداً أقصى لعدد العناصر المخزنة في الكاش (Cache Expiration) لتجنب تجاوز الحصة التخزينية المسموحة في المتصفح.",
        "ضع خطة بديلة (Fallback) للملفات المفقودة مثل صورة بديلة placeholder.png عند فشل تحميل الصور."
      ],
      infographic: {
        title: "استراتيجيات التخزين المؤقت الشائعة (Caching Strategies)",
        nodes: [
          { label: "Cache First", desc: "الكاش أولاً ➔ السرعة القصوى (الصور، الخطوط، حزم CSS)" },
          { label: "Network First", desc: "الشبكة أولاً ➔ حداثة مطلقة مع كاش احتياطي (بيانات API)" },
          { label: "Stale-While-Revalidate", desc: "عرض القديم فوراً وتحديثه بالخلفية (المقالات والصفحات)" },
          { label: "Network Only", desc: "الشبكة حصراً دون كاش نهائياً (عمليات الدفع وتسجيل الخروج)" }
        ]
      }
    },
    {
      id: "26.2.f",
      title: "دعم العمل بدون اتصال بالإنترنت Offline Mode",
      englishTerm: {
        term: "Offline Mode Support",
        pronunciation: "أوفلاين مود سبورت",
        meaning: "قدرة تطبيق الويب على مواصلة العمل وتقديم تجربة متكاملة عند انقطاع شبكة الإنترنت كلياً"
      },
      description:
        "انقطاع الإنترنت هو الكابوس الأكبر لتطبيقات الويب التقليدية، حيث يواجه المستخدم صفحة الخطأ الرمادية الشهيرة (مثل ديناصور كروم). في تطبيقات PWA، يتحول انقطاع الإنترنت من خطأ قاتل إلى حالة تشغيل عادية يدعمها التطبيق بأناقة. يتم ذلك عبر معمارية قوقعة التطبيق (App Shell Architecture)؛ حيث يتم تخزين الهيكل الأساسي للواجهة (شريط التنقل، القوائم، الأنماط) في الكاش أثناء التثبيت، بينما تُخزن البيانات التي تصفحها المستخدم مسبقاً في الـ Cache API أو IndexedDB. عند انقطاع الشبكة، يفتح التطبيق بسرعة البرق ويعرض البيانات السابقة مع إشعار ودي للمستخدم.",
      realWorldAnalogy:
        "مثل تطبيق Spotify أو Netflix؛ عندما تصعد على متن الطائرة وينقطع الإنترنت، لا يتوقف التطبيق عن العمل، بل يظل بإمكانك تصفح واجهتك وتشغيل الأغاني والمسلسلات التي تم تحميلها وتخزينها مسبقاً على جهازك.",
      whyItMatters:
        "يضمن استمرارية الأعمال والمبيعات في المناطق ذات التغطية الضعيفة (مثل قطارات الأنفاق أو الرحلات الجوية)، ويزيد ثقة المستخدم في التطبيق كبديل قوي للتطبيقات الأصلية.",
      syntax:
        "// التحقق من حالة الاتصال الحالية\nconst isOnline = navigator.onLine;\n\n// الاستماع لتغيرات الاتصال\nwindow.addEventListener('online', handleOnline);\nwindow.addEventListener('offline', handleOffline);",
      codeExample: `// مثال بسيط: خطاف مخصص في React لتتبع حالة الاتصال بالإنترنت
import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  // قراءة الحالة الأولية لشبكة المتصفح
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // دوال معالجة أحداث الشبكة
    const setOnline = () => setIsOnline(true);
    const setOffline = () => setIsOnline(false);

    // إضافة المستمعات لأحداث online وoffline في النافذة
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    // تنظيف المستمعات عند إلغاء تركيب المكون
    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  return isOnline;
}`,
      advancedExample: `// مثال متقدم: شريط تنبيه ذكي لتغير حالة الشبكة مع تخزين المسودات محلياً
import React, { useState } from 'react';
import { useOnlineStatus } from './useOnlineStatus';

export function OfflineAwareEditor() {
  const isOnline = useOnlineStatus();
  const [note, setNote] = useState('');
  const [savedLocally, setSavedLocally] = useState(false);

  const handleSave = () => {
    if (!isOnline) {
      // حفظ المسودة محلياً في localStorage عند انعدام الاتصال
      localStorage.setItem('offline_draft', note);
      setSavedLocally(true);
      setTimeout(() => setSavedLocally(false), 3000);
    } else {
      // إرسال البيانات مباشرة إلى الخادم السحابي
      console.log('تم الحفظ في الخادم بنجاح:', note);
    }
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-slate-100 max-w-lg mx-auto">
      {/* شريط حالة الاتصال العلوي */}
      <div className={'p-2.5 rounded-lg mb-4 text-xs font-bold flex items-center justify-between transition-colors ' + 
        (isOnline ? 'bg-emerald-950/60 border border-emerald-700/50 text-emerald-300' : 'bg-amber-950/60 border border-amber-700/50 text-amber-300')}>
        <div className="flex items-center gap-2">
          <span className={'w-2.5 h-2.5 rounded-full ' + (isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500')}></span>
          <span>{isOnline ? 'أنت متصل بالإنترنت حالياً' : 'أنت في وضع عدم الاتصال (Offline)'}</span>
        </div>
        {!isOnline && <span className="text-[10px] bg-amber-900/60 px-2 py-0.5 rounded">يتم الحفظ محلياً</span>}
      </div>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="اكتب ملاحظاتك هنا... سيتم حفظها حتى دون اتصال بالإنترنت!"
        className="w-full h-32 bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
      />

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition"
        >
          {isOnline ? 'حفظ في السحابة' : 'حفظ في الذاكرة المحلية'}
        </button>

        {savedLocally && (
          <span className="text-xs text-amber-400 font-medium">
            💾 تم حفظ المسودة بأمان في جهازك!
          </span>
        )}
      </div>
    </div>
  );
}`,
      output:
        "يواصل التطبيق عمله بانسيابية كاملة أثناء انقطاع الإنترنت، حيث يقوم بتخزين المسودات والبيانات محلياً مع تنبيه المستخدم فور استعادة الاتصال.",
      commonMistakes: [
        {
          mistake: "الاعتماد فقط على navigator.onLine الذي قد يعطي قيمة true إذا كان الجهاز متصلاً بشبكة واي فاي محلية ولكن الراوتر بدون إنترنت (Lie-fi).",
          fix: "إجراء فحص ping سريع لخادمك أو استخدام fetch مع مهلة زمنية للتأكد من قدرة الوصول الفعلية للإنترنت."
        },
        {
          mistake: "السماح للنماذج بإعطاء خطأ انهيار للمستخدم عند الضغط على إرسال أثناء عدم الاتصال.",
          fix: "تخزين العمليات في طابور انتظار محلي باستخدام IndexedDB ومزامنتها تلقائياً عند عودة الاتصال (Background Sync)."
        }
      ],
      bestPractices: [
        "اعتمد معمارية App Shell لتخزين واجهة التطبيق الأساسية مسبقاً بحيث تفتح فورياً بأقل من 100 ميلي ثانية.",
        "وفر مؤشرات بصرية واضحة للبيانات المخزنة دون اتصال ليعرف المستخدم تاريخ آخر مزامنة تمت للبيانات.",
        "استخدم مكتبة مثل idb للتعامل مع قاعدة بيانات IndexedDB لتخزين البيانات المعقدة والكبيرة دون اتصال."
      ],
      infographic: {
        title: "منظومة معالجة وضع عدم الاتصال (Offline Mode)",
        nodes: [
          { label: "1. App Shell", desc: "واجهة التطبيق الأساسية محملة مسبقاً وتعمل فورياً" },
          { label: "2. Cached Data", desc: "قراءة المقالات والبيانات المحفوظة من Cache API" },
          { label: "3. Local Queue", desc: "تخزين عمليات المستخدم ونماذجه في IndexedDB محلياً" },
          { label: "4. Auto Sync", desc: "مزامنة البيانات وتحديث السيرفر فور استعادة الاتصال" }
        ]
      }
    },
    {
      id: "26.2.g",
      title: "إعداد شاشة انقطاع الإنترنت المخصصة Custom Offline Fallback",
      englishTerm: {
        term: "Custom Offline Fallback Page",
        pronunciation: "كوستوم أوفلاين فولباك بيج",
        meaning: "صفحة HTML مخصصة ومصممة بأناقة تظهر للمستخدم بدلاً من شاشة خطأ المتصفح عند طلب صفحة غير مخزنة"
      },
      description:
        "عندما يكون المستخدم غير متصل بالإنترنت ويحاول فتح رابط صفحة جديدة لم يسبق له زيارتها ولم يتم تخزينها مسبقاً في الكاش، سيفشل طلب الشبكة. إذا تركت الأمر للمتصفح، فسيظهر شاشة الخطأ الكلاسيكية البشعة التي توحي بانهيار التطبيق. الحل الهندسي الاحترافي هو إعداد صفحة احتياطية مخصصة (offline.html) يتم تخزينها مسبقاً أثناء تثبيت الـ Service Worker. عندما يعترض العامل طلباً لصفحة HTML ويفشل الاتصال بالشبكة ولم يجدها في الكاش، يقوم بتقديم هذه الصفحة المخصصة التي تشرح الموقف وتوفر ألعاباً خفيفة أو قائمة بالصفحات المتاحة للتصفح بدون إنترنت.",
      realWorldAnalogy:
        "تشبه صالة الانتظار المريحة المزودة بمشروبات ومجلات داخل المطار عند تأخر إحدى الرحلات؛ بدلاً من طرد المسافر إلى الشارع في البرد وإغلاق الأبواب في وجهه، تستضيفه في مكان أنيق وتقدم له خيارات بديلة حتى إقلاع الطائرة.",
      whyItMatters:
        "تحافظ شاشة الـ Offline المخصصة على الهوية البصرية لعلامتك التجارية وتقلل من إحباط المستخدمين، وتوفر لهم طرقاً بديلة للاستفادة من التطبيق حتى عودة الاتصال.",
      syntax:
        "// اعتراض فشل طلبات HTML وتقديم offline.html كبديل\nif (event.request.mode === 'navigate') {\n  event.respondWith(\n    fetch(event.request).catch(() => caches.match('/offline.html'))\n  );\n}",
      codeExample: `// مثال بسيط: كود Service Worker لتقديم صفحة offline.html عند فشل التصفح
self.addEventListener('fetch', (event) => {
  // فحص ما إذا كان الطلب عبارة عن تنقل بين صفحات HTML
  if (event.request.mode === 'navigate') {
    event.respondWith(
      // محاولة جلب الصفحة الحية من الإنترنت أولاً
      fetch(event.request).catch(() => {
        // في حال انقطاع الإنترنت وفشل الطلب، إرجاع صفحة offline.html المخزنة
        return caches.match('/offline.html');
      })
    );
  }
});`,
      advancedExample: `// مثال متقدم: مكون شاشة Offline تفاعلي مدمج في React مع زر فحص الاتصال
import React, { useState } from 'react';

export function InteractiveOfflineFallback() {
  const [isRetrying, setIsRetrying] = useState(false);

  // دالة لإعادة محاولة الاتصال وتحديث الصفحة
  const handleRetry = () => {
    setIsRetrying(true);
    // اختبار بسيط لطلب خفيف للتأكد من عودة الاتصال
    fetch('/favicon.ico', { cache: 'no-store' })
      .then(() => {
        // في حال النجاح يتم تحديث الصفحة فورياً
        window.location.reload();
      })
      .catch(() => {
        // في حال استمرار الانقطاع
        setTimeout(() => setIsRetrying(false), 1000);
      });
  };

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 bg-slate-950 border border-slate-800 rounded-3xl text-center text-slate-100 font-sans">
      <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center text-3xl mb-4 animate-bounce">
        📡
      </div>
      <h2 className="text-xl font-bold text-white mb-2">أنت تتصفح بدون اتصال بالإنترنت</h2>
      <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
        الصفحة التي طلبتها غير متوفرة في الذاكرة المؤقتة لجهازك حالياً. يمكنك التحقق من اتصالك بالشبكة وإعادة المحاولة، أو العودة للمقالات المحفوظة سابقاً.
      </p>

      <div className="flex gap-3">
        <button
          onClick={handleRetry}
          disabled={isRetrying}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition flex items-center gap-2"
        >
          {isRetrying ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              <span>جارٍ التحقق...</span>
            </>
          ) : (
            <span>🔄 إعادة المحاولة الآن</span>
          )}
        </button>

        <button
          onClick={() => window.location.href = '/'}
          className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition"
        >
          🏠 الصفحة الرئيسية المحفوظة
        </button>
      </div>
    </div>
  );
}`,
      output:
        "عند انقطاع الإنترنت ومحاولة زيارة مسار غير مخزن، تظهر شاشة تفاعلية جذابة تتيح للمستخدم إعادة المحاولة أو العودة للمحتوى المخزن بدلاً من شاشة الخطأ الكئيبة.",
      commonMistakes: [
        {
          mistake: "نسيان تخزين ملف offline.html وأيقوناته في مرحلة install، مما يؤدي إلى فشل جلب شاشة الخطأ نفسها عند الحاجة إليها.",
          fix: "تضمين '/offline.html' في مصفوفة التخزين المسبق الإلزامية ASSETS_TO_CACHE في حدث التثبيت الأول."
        },
        {
          mistake: "تقديم صفحة offline.html لطلبات الصور أو ملفات JSON للـ API مما يسبب أخطاء تحليل Parse Errors في كود العميل.",
          fix: "قصر إرجاع offline.html حصراً على طلبات التنقل بين الصفحات (event.request.mode === 'navigate')."
        }
      ],
      bestPractices: [
        "ضمن صفحة offline.html قائمة سريعة بالصفحات المتاحة دون اتصال ليواصل المستخدم تصفحها.",
        "اجعل كود ملف offline.html ذاتي الاحتواء (Self-contained) بحيث يحتوي على CSS وSVG مدمجة (Inline) دون اعتمادات خارجية.",
        "أضف زراً واضحاً يتيح للمستخدم إعادة محاولة الاتصال وتحديث الصفحة فور استعادة الإشارة."
      ],
      infographic: {
        title: "مسار اعتراض طلبات الصفحات وتقديم الـ Fallback",
        nodes: [
          { label: "طلب صفحة HTML", desc: "المستخدم ينقر على رابط مسار جديد أثناء التصفح" },
          { label: "محاولة الاتصال", desc: "الـ Service Worker يحاول جلب الصفحة عبر fetch" },
          { label: "فشل الشبكة ❌", desc: "انقطاع تام للإنترنت وعدم وجود الصفحة في الكاش" },
          { label: "تقديم offline.html 🛡️", desc: "عرض الشاشة المخصصة الأنيقة مع خيارات بديلة" }
        ]
      }
    },
    {
      id: "26.2.h",
      title: "تثبيت التطبيق على الأجهزة وإدارة حدث beforeinstallprompt",
      englishTerm: {
        term: "App Installation & beforeinstallprompt",
        pronunciation: "آب إنستوليشن آند بيفور إنستول برومبت",
        meaning: "إدارة وتخصيص تجربة تثبيت تطبيق الويب على شاشة المستخدم الرئيسية عبر اعتراض الحدث البرمجي للمتصفح"
      },
      description:
        "تعتبر ميزة التثبيت على شاشة الهاتف أو سطح المكتب الميزة الأكثر جاذبية في تطبيقات PWA. في الوضع الافتراضي، قد يظهر المتصفح شريط تثبيت صغير في أسفل الشاشة أو أيقونة في شريط الروابط، وغالباً ما يتجاهلها المستخدم. تتيح لك واجهة المتصفح اعتراض حدث beforeinstallprompt ومنع ظهوره الافتراضي، والاحتفاظ بكائن الحدث (Event Object) لتفعيل نافذة التثبيت في الوقت المناسب سياقياً (Contextual Installation Prompt)؛ مثل عرض زر جذاب 'ثبّت التطبيق الآن لتصفح أسرع وبدون إنترنت' بعد أن يكمل المستخدم قراءة مقال أو تنفيذ عملية شراء.",
      realWorldAnalogy:
        "بدلاً من أن يقف بائع متجول ويصرخ في وجه الزبون فور دخوله الباب 'اشترِ بطاقة الولاء!' (شريط التثبيت التلقائي المزعج)، ينتظر حتى ينهي الزبون جولته ويسعد بالخدمة ثم يقدم له بطاقة ولاء أنيقة بخصم فوري بأسلوب راقٍ ومقنع.",
      whyItMatters:
        "تخصيص وقت وأسلوب عرض دعوة التثبيت يرفع معدل تثبيت تطبيقات الـ PWA بأكثر من 4 أضعاف مقارنة بالاعتماد على الشريط الافتراضي للمتصفح.",
      syntax:
        "// الاستماع لحدث التثبيت والاحتفاظ به\nwindow.addEventListener('beforeinstallprompt', (e) => {\n  e.preventDefault();\n  deferredPrompt = e;\n  showCustomInstallButton();\n});",
      codeExample: `// مثال بسيط: زر تثبيت مخصص في React
import React, { useState, useEffect } from 'react';

function SimpleInstallButton() {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstall = (e) => {
      // منع شريط المتصفح الافتراضي
      e.preventDefault();
      // تخزين الحدث لعرضه عند نقر المستخدم
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    // فتح نافذة تثبيت النظام الأصلية
    installPrompt.prompt();
    // انتظار قرار المستخدم
    const { outcome } = await installPrompt.userChoice;
    console.log('قرار المستخدم:', outcome);
    // إخفاء الزر بعد اتخاذ القرار
    setInstallPrompt(null);
  };

  if (!installPrompt) return null;

  return (
    <button
      onClick={handleInstallClick}
      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-bold shadow-lg transition"
    >
      📱 تثبيت التطبيق على جهازك
    </button>
  );
}

export default SimpleInstallButton;`,
      advancedExample: `// مثال متقدم: لوحة تثبيت PWA تفاعلية وذكية مع رصد النجاح ووضع Standalone
import React, { useState, useEffect } from 'react';

export function SmartPwaInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // 1. فحص ما إذا كان التطبيق مثبتاً ويعمل حالياً في وضع مستقل
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // 2. اعتراض حدث التثبيت
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    // 3. الاستماع لحدث اكتمال التثبيت الناجح
    const appInstalledHandler = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      console.log('🎉 تم تثبيت تطبيق الـ PWA بنجاح على الجهاز!');
    };

    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', appInstalledHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', appInstalledHandler);
    };
  }, []);

  const triggerInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      console.log('وافق المستخدم على تثبيت التطبيق');
    }
    setDeferredPrompt(null);
  };

  // إخفاء اللوحة إذا كان التطبيق مثبتاً أو تم رفضها أو الحدث غير متوفر
  if (isInstalled || dismissed || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-96 bg-slate-900 border border-slate-700/80 p-5 rounded-2xl shadow-2xl z-50 text-slate-100 flex flex-col gap-3 font-sans">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-xl shadow-md">
            ⚛️
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">تثبيت التطبيق على هاتفك</h4>
            <p className="text-xs text-slate-400">سرعة فائقة، تصفح دون إنترنت، وإشعارات حية.</p>
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-white text-xs p-1"
        >
          ✕
        </button>
      </div>

      <div className="flex gap-2 pt-1">
        <button
          onClick={triggerInstall}
          className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow"
        >
          تثبيت الآن مجاناً
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-medium transition"
        >
          ليس الآن
        </button>
      </div>
    </div>
  );
}`,
      output:
        "ظهور لافتة تثبيت مخصصة وعصرية في الوقت الملائم، تمكن المستخدم من تثبيت التطبيق بنقرة زر مع اختفاء اللافتة تلقائياً بمجرد اكتمال التثبيت.",
      commonMistakes: [
        {
          mistake: "استدعاء prompt() تلقائياً فور تحميل الصفحة دون نقرة أو تفاعل صريح من المستخدم.",
          fix: "المتصفحات تحظر استدعاء prompt() برمجياً إلا إذا كان ناتجاً عن تفاعل بشري مباشر (User Gesture مثل النقر على زر)."
        },
        {
          mistake: "إظهار زر التثبيت حتى عندما يكون التطبيق مثبتاً بالفعل ويعمل في وضع Standalone.",
          fix: "التحقق من window.matchMedia('(display-mode: standalone)').matches وإخفاء واجهات التثبيت في هذه الحالة."
        }
      ],
      bestPractices: [
        "وضح للمستخدم الفوائد الملموسة للتثبيت (مثل: حجم خفيف 2MB، عمل بدون إنترنت، ووصول سريع بنقرة واحدة).",
        "احفظ خيار المستخدم في حال نقر على 'ليس الآن' في localStorage لعدم إزعاجه باللافتة في كل زيارة.",
        "استمع لحدث appinstalled لتسجيل عمليات التثبيت الناجحة في أدوات التحليلات ومكافأة المستخدم."
      ],
      infographic: {
        title: "دورة معالجة حدث التثبيت beforeinstallprompt",
        nodes: [
          { label: "1. الحدث ينطلق", desc: "المتصفح يطلق beforeinstallprompt عند استيفاء شروط PWA" },
          { label: "2. e.preventDefault()", desc: "منع شريط المتصفح التلقائي وتخزين كائن الحدث في الذاكرة" },
          { label: "3. عرض زر مخصص", desc: "إظهار زر تثبيت مصمم بهوية موقعك في اللحظة المناسبة للمستخدم" },
          { label: "4. prompt() & Result", desc: "فتح النافذة الرسمية واستقبال خيار المستخدم (accepted / dismissed)" }
        ]
      }
    },
    {
      id: "26.2.i",
      title: "أتمتة التخزين والـ PWA باستخدام Google Workbox",
      englishTerm: {
        term: "Google Workbox",
        pronunciation: "جوجل ورك بوكس",
        meaning: "مجموعة مكتبات برمجية قياسية من جوجل لإدارة وتسهيل وبرمجة Service Workers وتخزين الكاش باحترافية"
      },
      description:
        "كتابة كود الـ Service Worker يدوياً من الصفر مع كافة استراتيجيات الكاش، وانتهاء الصلاحية، والتخزين المسبق المتبدل بأسماء Hash (Precaching)، قد يكون عملية معقدة وعرضة للأخطاء الدقيقة. مكتبة Google Workbox هي المعيار العالمي المعتمد لحل هذه المشكلة. توفر Workbox حزم برمجية جاهزة مثل workbox-precaching لتخزين كافة مخرجات حزمة البناء تلقائياً، وworkbox-routing لتوجيه المسارات، وworkbox-strategies لتطبيق استراتيجيات الكاش بأسطر معدودة. في بيئة React الحديثة مع Vite، تتيح إضافة vite-plugin-pwa توليد ملف Service Worker كامل ومدار تلقائياً بدون كتابة كود مكرر.",
      realWorldAnalogy:
        "كتابة Service Worker يدوياً تشبه صناعة سيارة بقطع غيار تصنعها بنفسك مسماراً بمسمار، بينما استخدام Workbox يشبه قيادة سيارة حديثة مزودة بنظام ملاحة ذكي وناقل حركة أوتوماتيكي ومكابح طوارئ مجهزة في المصنع بأعلى معايير السلامة.",
      whyItMatters:
        "Workbox تقضي على أخطاء التخزين المؤقت الشائعة، وتوفر مزايا متقدمة مثل Cache Expiration للتحكم في عدد العناصر وعمرها الزمني، وإدارة استدعاءات الخلفية المعقدة بأسلوب مجرب وموثوق لدى أكبر منصات العالم.",
      syntax:
        "// استخدام Workbox لتطبيق استراتيجية StaleWhileRevalidate في سطرين\nimport { registerRoute } from 'workbox-routing';\nimport { StaleWhileRevalidate } from 'workbox-strategies';\n\nregisterRoute(\n  ({ request }) => request.destination === 'script',\n  new StaleWhileRevalidate({ cacheName: 'scripts-cache' })\n);",
      codeExample: `// مثال بسيط: إعداد vite-plugin-pwa في ملف vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // إضافة وتفعيل Workbox وتوليد PWA تلقائياً
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // تخزين كافة مخرجات البناء مسبقاً (HTML, JS, CSS, الصور)
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'منصة التعلم الذكي',
        short_name: 'منصتي',
        theme_color: '#10b981',
        display: 'standalone'
      }
    })
  ]
});`,
      advancedExample: `// مثال متقدم: ملف Service Worker احترافي مخصص مبني بواسطة Workbox
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// 1. التخزين المسبق لكافة الأصول التي يولدها نظام البناء
precacheAndRoute(self.__WB_MANIFEST || []);

// 2. استراتيجية CacheFirst للصور مع تقييد الحجم والمدة الزمنية (أقصى حد 50 صورة لمدة 30 يوماً)
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images-store',
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 يوماً
      })
    ]
  })
);

// 3. استراتيجية NetworkFirst لبيانات المقالات والـ API مع مهلة 3 ثوانٍ
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/v1/articles'),
  new NetworkFirst({
    cacheName: 'articles-api-cache',
    networkTimeoutSeconds: 3,
    plugins: [
      new ExpirationPlugin({ maxEntries: 100 })
    ]
  })
);

// 4. استراتيجية StaleWhileRevalidate للخطوط وصفحات التنسيق
registerRoute(
  ({ request }) => request.destination === 'style' || request.destination === 'font',
  new StaleWhileRevalidate({
    cacheName: 'static-resources'
  })
);`,
      output:
        "بناء ملف Service Worker صناعي متكامل يتبع أفضل الممارسات الهندسية مع التخزين المسبق للأصول والتحكم الدقيق في سعة الكاش وتحديثاته التلقائية.",
      commonMistakes: [
        {
          mistake: "محاولة تخزين كافة استدعاءات API في الكاش دون تحديد مدة انتهاء صلاحية (Expiration).",
          fix: "استخدام ExpirationPlugin دائماً لتحديد maxEntries وmaxAgeSeconds لمنع استنزاف مساحة الذاكرة."
        },
        {
          mistake: "عدم تهيئة self.__WB_MANIFEST في كود Service Worker المخصص عند استخدام أدوات البناء.",
          fix: "التأكد من حقن مصفوفة الأصول المسبقة تلقائياً عبر precacheAndRoute(self.__WB_MANIFEST)."
        }
      ],
      bestPractices: [
        "استخدم vite-plugin-pwa في مشاريع Vite لربط Workbox تلقائياً والحصول على تكوين سليم وسريع دون عناء يدوي.",
        "اضبط networkTimeoutSeconds في استراتيجية NetworkFirst بحيث لا ينتظر المستخدم أكثر من 3 ثوانٍ في حالات الشبكة البطيئة قبل اللجوء للكاش.",
        "اختبر عمل استراتيجيات Workbox من خلال تبويب Application > Service Workers في أدوات المطور DevTools."
      ],
      infographic: {
        title: "حزم ووظائف Google Workbox المتكاملة",
        nodes: [
          { label: "workbox-precaching", desc: "تخزين وتحديث أصول البناء مسبقاً بناءً على بصمات الـ Hash" },
          { label: "workbox-routing", desc: "مطابقة وتوجيه الطلبات عبر مسارات regex أو دوال شرطية" },
          { label: "workbox-strategies", desc: "تطبيق CacheFirst وNetworkFirst وStaleWhileRevalidate جاهزة" },
          { label: "workbox-expiration", desc: "إدارة أعمار العناصر وسعتها التخزينية وحذف القديم تلقائياً" }
        ]
      }
    },
    {
      id: "26.2.j",
      title: "تحديث نسخ التطبيق المخزنة وإشعار المستخدم Update Flow",
      englishTerm: {
        term: "App Update Flow & Skip Waiting",
        pronunciation: "آب أبديت فلو آند سكيب ويتنج",
        meaning: "آلية اكتشاف النسخ البرمجية الجديدة وإشعار المستخدم بتوفر تحديث وتنشيط النسخة فورياً"
      },
      description:
        "عندما تنشر إصداراً جديداً من تطبيق React على السيرفر، يظل المستخدم الذي فتح التطبيق سابقاً يعمل بالنسخة القديمة المخزنة في الكاش والـ Service Worker الحالي. يقوم المتصفح بفحص ملف sw.js في الخلفية كل 24 ساعة أو عند إعادة فتح التبويب. إذا اكتشف بايتات مختلفة في الملف، يقوم بتحميل العامل الجديد ووضعه في حالة الانتظار (waiting status) حتى يتم إغلاق كافة التبويبات المفتوحة. لتقديم تجربة مستخدم عصرية ومحترفة، نستخدم تقنية skipWaiting() مصحوبة بشريط إشعار تفاعلي ينبه المستخدم: 'يتوفر إصدار جديد من التطبيق! [تحديث الآن]'. عند النقر، يرسل التطبيق رسالة postMessage للـ Service Worker لتخطي الانتظار وتحديث الصفحة فورياً.",
      realWorldAnalogy:
        "يشبه إشعار التحديث في تطبيق الهاتف عندما تظهر لك رسالة لطيفة: 'تم تجهيز نسخة أسرع وأحدث من التطبيق، هل ترغب في إعادة التشغيل الآن لتطبيق التحسينات؟'.",
      whyItMatters:
        "يضمن عدم بقاء المستخدمين عالقين على إصدارات برمجية قديمة تحوي أخطاء تم إصلاحها، ويسرع وصول المزايا والتحسينات الأمنية لكافة العملاء فور نشرها.",
      syntax:
        "// في جانب العميل: إرسال أمر التحديث للعامل المنتظر\nregistration.waiting.postMessage({ type: 'SKIP_WAITING' });\n\n// في جانب الـ Service Worker\nself.addEventListener('message', (event) => {\n  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();\n});",
      codeExample: `// مثال بسيط: استقبال رسالة تخطي الانتظار داخل sw.js
self.addEventListener('message', (event) => {
  // التحقق من نوع الرسالة القادمة من الواجهة
  if (event.data && event.data.type === 'SKIP_WAITING') {
    // تفعيل الإصدار الجديد فوراً
    self.skipWaiting();
  }
});`,
      advancedExample: `// مثال متقدم: مكون إشعار التحديث الفوري المكتمل في تطبيق React
import React, { useState, useEffect } from 'react';

export function PwaUpdateNotifier() {
  const [waitingWorker, setWaitingWorker] = useState(null);
  const [showReload, setShowReload] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        // فحص ما إذا كان هناك عامل جديد ينتظر التفعيل بالفعل
        if (registration.waiting) {
          setWaitingWorker(registration.waiting);
          setShowReload(true);
        }

        // الاستماع لاكتشاف أي تحديث جديد أثناء تشغيل الصفحة
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // إصدار جديد جاهز والتطبيق تحت سيطرة إصدار قديم
                setWaitingWorker(newWorker);
                setShowReload(true);
              }
            });
          }
        });
      });

      // إعادة تحميل الصفحة تلقائياً عندما يتولى الإصدار الجديد السيطرة
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    }
  }, []);

  const handleUpdate = () => {
    if (waitingWorker) {
      // إرسال رسالة للعامل الجديد لتخطي الانتظار والتفعيل
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });
      setShowReload(false);
    }
  };

  if (!showReload) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-4 font-sans border border-emerald-400/40 animate-slide-down">
      <div className="flex items-center gap-2">
        <span className="text-xl">🚀</span>
        <span className="text-xs font-bold">يتوفر إصدار جديد ومحسن من التطبيق!</span>
      </div>
      <button
        onClick={handleUpdate}
        className="px-3 py-1 bg-white text-emerald-800 hover:bg-emerald-50 rounded-lg text-xs font-black shadow transition"
      >
        تحديث الآن
      </button>
    </div>
  );
}`,
      output:
        "عند نشر نسخة جديدة على السيرفر، يكتشف التطبيق التحديث في الخلفية ويظهر شريطاً علوياً أنيقاً يتيح للمستخدم الترقية الفورية بضغطة زر واحدة دون فقدان البيانات.",
      commonMistakes: [
        {
          mistake: "إجبار التطبيق على إعادة التحميل المفاجئ دون موافقة أو إشعار المستخدم مما قد يتلف نموذجاً كان يكتبه.",
          fix: "عرض إشعار ودّي يخير المستخدم بالنقر على 'تحديث الآن' عندما يكون جاهزاً لإعادة التحميل."
        },
        {
          mistake: "نسيان معالجة حدث controllerchange مما قد يتطلب نقرات متعددة لتنشيط الإصدار الجديد.",
          fix: "الاستماع لـ navigator.serviceWorker.controllerchange وإعادة تحميل الصفحة تلقائياً بعد استلام إشارة التغيير."
        }
      ],
      bestPractices: [
        "استخدم خاصية registerType: 'prompt' مع مكتبة vite-plugin-pwa للتحكم الدقيق في توقيت إظهار حوار التحديث.",
        "تأكد من إرسال رسالة SKIP_WAITING لتخطي طابور الانتظار وتحديث الكاشات فورياً.",
        "حافظ على تجربة كتابة النماذج عبر حفظ الحقول مؤقتاً في localStorage قبل إعادة التحميل للحفاظ على بيانات الزائر."
      ],
      infographic: {
        title: "مسار اكتشاف وتنشيط تحديثات الـ PWA (Update Flow)",
        nodes: [
          { label: "1. نشر كود جديد", desc: "رفع كود Build جديد بتغييرات في ملف sw.js" },
          { label: "2. updatefound", desc: "المتصفح يكتشف التغيير ويقوم بتثبيت العامل الجديد بالخلفية" },
          { label: "3. waiting state", desc: "العامل ينتظر في طابور الانتظار لتفادي كسر التبويبات المفتوحة" },
          { label: "4. skipWaiting()", desc: "المستخدم يضغط 'تحديث الآن' لتفعيل النسخة وإعادة التحميل الفوري" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-26-2-1",
      question: "في أي بيئة وخيط معالجة يعمل ملف الـ Service Worker في المتصفح؟",
      options: [
        "على خيط الواجهة الرئيسي (Main Thread) وله حق الوصول المباشر لكائن window وDOM.",
        "على خيط خلفي مستقل (Background Thread) بمعزل عن DOM ويعمل كوسيط شبكي بين التطبيق والإنترنت.",
        "داخل كود قاعدة بيانات السيرفر PostgreSQL مباشرة.",
        "داخل إطار iframe مخفي في مستند HTML."
      ],
      correctAnswer: 1,
      explanation:
        "يعمل Service Worker في خيط معالجة خلفي مستقل عن واجهة المستخدم وخالٍ من عناصر DOM، مما يمكنه من اعتراض كافة طلبات الشبكة، والعمل في الخلفية حتى دون فتح واجهة رسومية."
    },
    {
      id: "quiz-26-2-2",
      question: "ما هي استراتيجية التخزين المؤقت التي تعيد النسخة القديمة من الكاش فورياً للمستخدم وتقوم بتحديثها في الخلفية من الشبكة؟",
      options: [
        "Cache Only",
        "Network First",
        "Stale-While-Revalidate",
        "Network Only"
      ],
      correctAnswer: 2,
      explanation:
        "استراتيجية Stale-While-Revalidate تقدم النسخة المخزنة فوراً لضمان سرعة قصوى في العرض، وتطلق بالتوازي طلباً في الخلفية لجلب البيانات الجديدة وتحديث الكاش للمرات القادمة."
    },
    {
      id: "quiz-26-2-3",
      question: "لماذا يجب اعتراض حدث beforeinstallprompt وتخزينه في متغير عند رغبتك في توفير زر تثبيت مخصص للتطبيق؟",
      options: [
        "لأن المتصفح يمنع استدعاء نافذة التثبيت prompt() إلا عبر نقرة مباشرة من المستخدم على زر مخصص.",
        "لأن ذلك يزيد سرعة الإنترنت بنسبة 20%.",
        "لأن ملف manifest.json لا يعمل بدون هذا الحدث.",
        "لحظر محركات البحث من فهرسة التطبيق."
      ],
      correctAnswer: 0,
      explanation:
        "المتصفحات تحظر إطلاق نافذة التثبيت التلقائية المزعجة وتتطلب تفاعلاً بشرياً صريحاً (User Gesture)؛ لذلك نقوم بالاحتفاظ بحدث beforeinstallprompt في الذاكرة لاستدعاء prompt() عند ضغط المستخدم على زر التثبيت."
    }
  ],
  exercise: {
    id: "exercise-26-2",
    title: "بناء نظام كامل لإدارة حالة PWA وتتبع الاتصال والتثبيت والإشعار بالتحديث",
    description:
      "قم بإنشاء خطاف مخصص باسم 'usePwaManager' يعيد كائناً يحتوي على: isOnline (حالة الاتصال)، isInstallable (هل يمكن تثبيت التطبيق)، installApp (دالة لتفعيل نافذة التثبيت)، hasUpdate (هل يتوفر تحديث جديد)، وupdateApp (دالة لتفعيل التحديث وإعادة التحميل).",
    hints: [
      "استمع لأحداث 'online' و'offline' لتحديث حالة isOnline.",
      "استمع لحدث 'beforeinstallprompt' وخزن كائن الحدث لتفعيل installApp.",
      "استمع لحدث 'updatefound' و'statechange' في navigator.serviceWorker لمعرفة وجود تحديث جديد."
    ],
    solution: `import { useState, useEffect, useCallback } from 'react';

// خطاف شامل لإدارة كافة جوانب PWA التفاعلية
export function usePwaManager() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [waitingWorker, setWaitingWorker] = useState(null);
  const [hasUpdate, setHasUpdate] = useState(false);

  useEffect(() => {
    // 1. تتبع حالة الاتصال بالإنترنت
    const onOnline = () => setIsOnline(true);
    const onOffline = () => setIsOnline(false);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);

    // 2. تتبع إمكانية التثبيت واعتراض الحدث
    const onBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', onBeforeInstall);

    // 3. تتبع تحديثات الـ Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((reg) => {
        if (reg.waiting) {
          setWaitingWorker(reg.waiting);
          setHasUpdate(true);
        }
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setWaitingWorker(newWorker);
                setHasUpdate(true);
              }
            });
          }
        });
      });

      // إعادة تحميل الصفحة عند اكتمال تنشيط العامل الجديد
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    }

    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
    };
  }, []);

  // دالة طلب التثبيت
  const installApp = useCallback(async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  }, [deferredPrompt]);

  // دالة تفعيل التحديث
  const updateApp = useCallback(() => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  }, [waitingWorker]);

  return {
    isOnline,
    isInstallable: !!deferredPrompt,
    installApp,
    hasUpdate,
    updateApp
  };
}`
  },
  infographic: {
    title: "الهيكل المعماري الشامل لتطبيق PWA متكامل في React",
    subtitle: "التنسيق بين واجهة المتصفح، ملف التعريف، والخادم الوكيل الخلفي لتقديم تجربة أصلية متكاملة",
    nodes: [
      {
        id: "manifest",
        title: "1. Web App Manifest",
        description: "تعريف الهوية والألوان والأيقونات التكيفية ووضع العرض المستقل standalone.",
        badge: "Manifest"
      },
      {
        id: "sw",
        title: "2. Service Worker Engine",
        description: "خادم وكيل خلفي يعترض الطلبات ويدير استراتيجيات الكاش والعمل بدون إنترنت.",
        badge: "Network Proxy"
      },
      {
        id: "offline",
        title: "3. شاشة Offline الذكية",
        description: "توفير تجربة استثنائية دون انقطاع مع حفظ المسودات محلياً في IndexedDB.",
        badge: "Zero Downtime"
      },
      {
        id: "install",
        title: "4. التثبيت التفاعلي",
        description: "اعتراض beforeinstallprompt وتفعيل نافذة تثبيت عصرية في التوقيت المناسب.",
        badge: "Install Flow"
      },
      {
        id: "updates",
        title: "5. التحديث الفوري المدار",
        description: "اكتشاف التحديثات الجديدة وتخطي الانتظار skipWaiting() مع إشعار المستخدم فوراً.",
        badge: "Auto Update"
      }
    ]
  }
};

export default topic2;

