// src/data/sections/section28/topic2.js
// القسم 28: بناء التطبيقات ونشرها - الموضوع 2: استضافة تطبيقات React

export const topic2 = {
  id: "28.2",
  title: "استضافة تطبيقات React والنشر السحابي",
  englishTitle: "Deploying React Applications to the Cloud",
  description:
    "الدليل العملي الشامل لنشر واستضافة تطبيقات React على أشهر المنصات السحابية العالمية: النشر الآلي على منصات Vercel وNetlify وCloudflare Pages وGitHub Pages، الحل الجذري لمشكلة إعادة تحميل صفحات SPA عبر إعداد قواعد التحويل (SPA Fallback Rewrites)، ربط النطاقات المخصصة Custom Domains وإعداد شهادات الأمان التلقائية HTTPS، استغلال بيئات المعاينة المباشرة Preview Deployments لاختبار طلبات السحب، وتشخيص أخطاء النشر عبر تحليل سجلات Deployment Logs.",
  subtopics: [
    {
      id: "28.2.a",
      title: "نشر تطبيقات React على منصة Vercel",
      englishTerm: {
        term: "Deploying to Vercel",
        pronunciation: "ديبلوينج تو فيرسيل",
        meaning: "استضافة التطبيق على المنصة السحابية الرائدة عالمياً لفرونت إند مع ربط تلقائي بـ GitHub"
      },
      description:
        "تعتبر منصة Vercel المعيار الذهبي الأول لاستضافة تطبيقات React الحديثة وNext.js. تتيح المنصة نشر التطبيق بنقرة زر واحدة عبر ربط مستودع GitHub؛ حيث تكتشف Vercel تلقائياً أن المشروع مبني بـ Vite أو Create React App، وتقوم بضبط أمر البناء (npm run build) ومجلد المخرجات (dist) دون أي تدخل يدوي. وبمجرد ربط المستودع، تقوم Vercel ببناء ونشر نسخة جديدة مع كل عملية git push لفرع main، وتوزيع الملفات على شبكة الحافة العالمية (Global Edge Network) لتوفير أسرع زمن استجابة ممكن للمستخدمين حول العالم.",
      realWorldAnalogy:
        "تشبه منصة Vercel طاهياً محترفاً ينتظر في مطبخك؛ كلما وضعت قائمة طلبات جديدة على الطاولة (عملية git push)، يقوم فوراً بإعداد الوجبة وتغليفها وتوزيعها عبر مئات الدراجات النارية في ثوانٍ معدودة لتصل ساخنة وطازجة لكافة الزبائن في المدينة.",
      whyItMatters:
        "تلغي Vercel تماماً عناء إدارة السيرفرات وإعداد خوادم Nginx المعقدة، وتوفر سرعة خارقة عبر شبكة CDN مجانية مع شهادات SSL وتحديثات فورية بمجرد دمج الكود.",
      syntax:
        "# النشر المباشر من سطر الأوامر عبر Vercel CLI:\nnpm i -g vercel\nvercel login\nvercel\n\n# نشر نسخة الإنتاج الرسمية:\nvercel --prod",
      codeExample: `// مثال سطر أوامر: النشر السريع عبر أداة Vercel CLI في سطرين
# 1. التواجد في مجلد مشروع React
cd my-react-app

# 2. تشغيل أمر النشر التفاعلي
vercel

# أسئلة Vercel التلقائية:
# ? Set up and deploy "~/my-react-app"? [Y/n] y
# ? Which scope do you want to deploy to? Ahmad's Team
# ? Link to existing project? [y/N] n
# ? What's your project's name? react-pro-store
# ? In which directory is your code located? ./
# Auto-detected Project Settings (Vite):
# - Build Command: vite build
# - Output Directory: dist
# ✓ Deployed to: https://react-pro-store.vercel.app`,
      advancedExample: `// مثال متقدم: ملف تكوين Vercel المتقدم (vercel.json) لضبط الكاش وتوجيه مسارات SPA
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}`,
      output:
        "استضافة فورية للتطبيق على نطاق مجاني ينتهي بـ .vercel.app مع تفعيل شهادة HTTPS وشبكة توزيع المحتوى العالمية وتوجيه مسارات SPA السليم.",
      commonMistakes: [
        {
          mistake: "نسيان إضافة متغيرات البيئة (مثل VITE_API_URL) في لوحة تحكم Vercel Settings -> Environment Variables.",
          fix: "التأكد من نسخ متغيرات ملف .env إلى لوحة Vercel وتحديد تطبيقها على بيئتي Production وPreview."
        },
        {
          mistake: "تعيين مجلد مخرجات خاطئ (مثل build بدلاً من dist) مما يؤدي إلى فشل النشر وتلقي خطأ: Output Directory not found.",
          fix: "التأكد من مطابقة إعداد Output Directory لمجلد مخرجات مشروعك الفعلي (dist لمشاريع Vite)."
        }
      ],
      bestPractices: [
        "اربط مستودعك عبر واجهة موقع Vercel Dashboard لتمكين النشر التلقائي مع كل push لـ main ومعاينات الفروع.",
        "استخدم ملف vercel.json لتعيين رؤوس الأمان (Security Headers) وتحديد قواعد الكاش طويلة الأمد لمجلد assets.",
        "استغل ميزة Vercel Analytics لمراقبة مؤشرات أداء الويب الحقيقية للمستخدمين الفعليين مجاناً."
      ],
      infographic: {
        title: "خطوات النشر الآلي على منصة Vercel",
        nodes: [
          { label: "1. git push", desc: "رفع كود الميزة إلى مستودع GitHub المرتبط" },
          { label: "2. Automatic Build", desc: "خوادم Vercel تكتشف Vite وتشغل npm run build آلياً" },
          { label: "3. Global CDN Edge", desc: "توزيع الملفات الثابتة عبر مئات الخوادم حول العالم" },
          { label: "4. Live Deployment 🚀", desc: "إتاحة الموقع فورياً على نطاق مشفر وآمن بـ HTTPS" }
        ]
      }
    },
    {
      id: "28.2.b",
      title: "نشر التطبيق على منصة Netlify وإعداد netlify.toml",
      englishTerm: {
        term: "Deploying to Netlify",
        pronunciation: "ديبلوينج تو نيتليفاي",
        meaning: "استضافة سحابية متقدمة لتطبيقات الواجهات مع دعم السحب والإفلات وقواعد التوجيه"
      },
      description:
        "تعد Netlify إحدى المنصات الرائدة التي أطلقت ثورة الـ Jamstack واستضافة تطبيقات الواجهات الحديثة. تتميز بسهولة مذهلة في الاستخدام؛ حيث تتيح النشر بطريقتين: الطريقة اليدوية السريعة عبر سحب وإفلات مجلد dist/ مباشرة في المتصفح (Drag & Drop Deploy)، أو الطريقة البرمجية المتكاملة عبر ربط مستودع Git. يتم التحكم في سلوك Netlify برمجياً عبر ملف التكوين القياسي netlify.toml الذي يوضع في جذر المشروع لتحديد أوامر البناء، وتوجيه مسارات الراوتر الداخلي، وإدارة متغيرات البيئة، وإعادة التوجيه (Redirects).",
      realWorldAnalogy:
        "تشبه إرسال طرد بريدي عبر طائرة بدون طيار (Drone)؛ يمكنك إما وضع الصندوق على منصة الإطلاق بيدك (السحب والإفلات)، أو برمجة الطائرة لتقوم بنقل الصندوق من مستودعك تلقائياً كلما جهزت منتجاً جديداً.",
      whyItMatters:
        "توفر Netlify باقة مجانية سخية جداً، مع دعم مدمج لنماذج الاتصال (Netlify Forms) دون الحاجة لخادم backend، وشهادات SSL مجانية، وشبكة توزيع فائقة السرعة.",
      syntax:
        "# ملف تكوين Netlify الأساسي (netlify.toml):\n[build]\n  command = \"npm run build\"\n  publish = \"dist\"\n\n[[redirects]]\n  from = \"/*\"\n  to = \"/index.html\"\n  status = 200",
      codeExample: `// مثال عملي: ملف netlify.toml النموذجي الكامل لمشروع React Vite
# إعدادات البناء وتحديد مجلد النشر
[build]
  command = "npm run build"
  publish = "dist"

# قاعدة توجيه الـ SPA السحرية: تحويل كافة الطلبات إلى index.html
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# ترويسات الأمان والكاش المخصصة
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"`,
      advancedExample: `// مثال متقدم: استغلال ميزة نماذج Netlify المدمجة (Netlify Forms) داخل React بدون Backend
import React, { useState } from 'react';

export function ContactUsForm() {
  const [submitted, setSubmitted] = useState(false);

  // دالة تحويل البيانات لصيغة مشفرة URL-Encoded تفهمها Netlify
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name: form.name.value, email: form.email.value })
    })
      .then(() => setSubmitted(true))
      .catch(error => console.error('خطأ في إرسال النموذج:', error));
  };

  if (submitted) {
    return <div className="p-4 bg-emerald-950 text-emerald-300 rounded-xl text-xs">شكراً لتواصلك! استلمنا رسالتك بنجاح.</div>;
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="p-5 bg-slate-900 border border-slate-800 rounded-2xl text-xs space-y-3"
    >
      {/* حقل مخفي إلزامي لتعريف اسم النموذج لـ Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      <h4 className="font-bold text-white text-sm">تواصل مع الدعم الفني</h4>
      
      <div>
        <label className="block text-slate-400 mb-1">الاسم الكامل:</label>
        <input type="text" name="name" required className="w-full bg-slate-950 border border-slate-800 p-2 rounded text-white" />
      </div>

      <div>
        <label className="block text-slate-400 mb-1">البريد الإلكتروني:</label>
        <input type="email" name="email" required className="w-full bg-slate-950 border border-slate-800 p-2 rounded text-white" />
      </div>

      <button type="submit" className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold transition">
        إرسال الرسالة
      </button>
    </form>
  );
}`,
      output:
        "استضافة سريعة على نطاق .netlify.app مع تفعيل معالجة النماذج تلقائياً واستلام رسائل العملاء في لوحة التحكم دون سطر كود خادم واحد.",
      commonMistakes: [
        {
          mistake: "نسيان ملف _redirects أو إعداد [[redirects]] في netlify.toml وظهور خطأ Page Not Found 404 عند تحديث الصفحات الفرعية.",
          fix: "إضافة ملف public/_redirects يحتوي على سطر واحد: /* /index.html 200 لضمان توجيه كافة المسارات لـ React Router."
        },
        {
          mistake: "رفع مجلد المشروع كاملاً بالسحب والإفلات بدلاً من رفع مجلد dist المبني فقط.",
          fix: "عند استخدام النشر اليدوي، تأكد من تشغيل npm run build أولاً وسحب مجلد dist/ الناتج حصراً."
        }
      ],
      bestPractices: [
        "اعتمد على ملف netlify.toml وشاركه في المستودع لتوحيد إعدادات النشر لكافة أعضاء الفريق.",
        "استغل ميزة Split Testing المدمجة في Netlify لتجربة تصميمين مختلفين وتوزيع الزوار عليهما بنسب مئوية.",
        "استخدم ميزة Deploy Previews لاختبار التعديلات على روابط فريدة قبل دمج طلبات السحب."
      ],
      infographic: {
        title: "طرق النشر المتاحة على منصة Netlify",
        nodes: [
          { label: "1. Git Continuous Deploy", desc: "ربط مستودع GitHub وبناء وتشغيل المشروع آلياً عند كل push" },
          { label: "2. Drag & Drop", desc: "سحب وإفلات مجلد dist مباشرة في المتصفح لمعاينة فورية في 5 ثوانٍ" },
          { label: "3. Netlify CLI", desc: "أداة سطر الأوامر netlify deploy --prod للنشر السريع من الطرفية" }
        ]
      }
    },
    {
      id: "28.2.c",
      title: "نشر التطبيق على شبكة Cloudflare Pages الخارقة",
      englishTerm: {
        term: "Cloudflare Pages Deployment",
        pronunciation: "كلاود فلير بيجز ديبلوينج",
        meaning: "استضافة التطبيق على أضخم وأسرع شبكة حافة (Edge Network) موزعة في العالم مع معدل نقل غير محدود"
      },
      description:
        "تعد Cloudflare Pages المنصة الأسرع والأكثر كفاءة على الإطلاق لاستضافة ملفات الواجهات الأمامية. بفضل امتلاك شركة Cloudflare لأضخم شبكة خوادم حافة (Edge Network) في أكثر من 300 مدينة حول العالم، يتم تقديم تطبيق React للمستخدم من أقرب مركز بيانات جغرافي له (غالباً في نفس مدينته أو دولته) بزمن انتقال لا يتجاوز بضعة ميلي ثوانٍ. وتتميز المنصة بتقديم باقة مجانية لا مثيل لها تتضمن: استهلاك باندويث غير محدود (Unlimited Bandwidth)، وطلبات غير محدودة، ونشر غير محدود للمشاريع، مع تكامل سلس مع خوادم Serverless Functions عبر Cloudflare Workers.",
      realWorldAnalogy:
        "إذا كانت المنصات الأخرى تشبه فتح متجرين أو ثلاثة في العواصم الكبرى، فإن Cloudflare تشبه فتح فرع لمتجرك في كل حي وشارع في كل مدينة حول الكوكب؛ أينما كان زبونك، ستصله البضاعة من المتجر المجاور لمنزله مباشرة في غضون لحظات.",
      whyItMatters:
        "توفر سرعة قياسية تكسر كافة مؤشرات الأداء، وتمنحك راحة بال تامة من تكاليف استهلاك باقة نقل البيانات (Bandwidth Ingress/Egress) التي تفرضها المنصات الأخرى عند تضخم الزيارات.",
      syntax:
        "# النشر المباشر عبر أداة Wrangler الرسمية من Cloudflare:\nnpm install -g wrangler\nwrangler pages deploy dist --project-name=my-react-app",
      codeExample: `// مثال سطر أوامر: النشر عبر أداة Wrangler السريعة
# 1. بناء حزمة المشروع
npm run build

# 2. نشر محتويات مجلد dist مباشرة لشبكة Cloudflare
wrangler pages deploy dist --project-name=react-ultra-speed

# مخرجات الأداة:
# 🌍 Uploading... (15/15)
# ✨ Success! Uploaded 15 files (1.20 sec)
# 🚀 Deployment complete! Take a peek over at https://react-ultra-speed.pages.dev`,
      advancedExample: `// مثال متقدم: تكوين قواعد إعادة التوجيه لـ SPA على Cloudflare عبر ملف public/_routes.json و _redirects
# 1. لضبط إعادة التوجيه لمسارات React SPA:
# أنشئ ملف public/_redirects وضع فيه:
/* /index.html 200

# 2. لضبط الترويسات الأمنية والكاش:
# أنشئ ملف public/_headers وضع فيه:
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`,
      output:
        "استضافة الموقع على نطاق .pages.dev يعمل عبر شبكة Anycast العالمية الموزعة، مع زمن استجابة TTFB يقل عن 30 مللي ثانية في معظم دول العالم.",
      commonMistakes: [
        {
          mistake: "نسيان وضع ملف _redirects في مجلد public/ مما يتسبب في ظهور خطأ 404 عند تحديث الصفحات الفرعية على Cloudflare Pages.",
          fix: "التأكد من وجود ملف public/_redirects يحتوي على سطر: /* /index.html 200 ليتم نسخه لمجلد dist أثناء البناء."
        },
        {
          mistake: "تحديد إصدار قديم لـ Node.js في لوحة إعدادات Cloudflare وتلقي أخطاء فشل البناء.",
          fix: "تعيين متغير البيئة NODE_VERSION بقيمة 20 في إعدادات البناء بـ Cloudflare Pages Dashboard."
        }
      ],
      bestPractices: [
        "اربط نطاقك المخصص عبر خوادم DNS الخاصة بـ Cloudflare للاستفادة من الحماية المجانية ضد هجمات حجب الخدمة DDoS Attack.",
        "استغل ميزة Web Analytics الخالية من الكوكيز المدمجة في لوحة Cloudflare لمراقبة حركة الزوار دون انتهاك خصوصيتهم.",
        "استخدم Cloudflare Pages Functions لكتابة وظائف خلفية سريعة وخفيفة على الحافة داخل مجلد functions/."
      ],
      infographic: {
        title: "مميزات شبكة الحافة في Cloudflare Pages",
        nodes: [
          { label: "300+ Edge Locations", desc: "خوادم موزعة في كافة أنحاء العالم لتقديم الكود من أقرب نقطة للعميل" },
          { label: "باندويث غير محدود", desc: "لا توجد أي فواتير مفاجئة على حجم البيانات حتى مع ملايين الزوار" },
          { label: "حماية DDoS مدمجة", desc: "أقوى جدار ناري سحابي في العالم لحماية موقعك من الهجمات التخريبية" }
        ]
      }
    },
    {
      id: "28.2.d",
      title: "نشر المشروع مجاناً باستخدام GitHub Pages",
      englishTerm: {
        term: "Deploying to GitHub Pages",
        pronunciation: "ديبلوينج تو جيت هاب بيجز",
        meaning: "استضافة المواقع الثابتة مجاناً مباشرة من داخل مستودع المشروع على نطاق github.io"
      },
      description:
        "خدمة GitHub Pages هي الحل الأسهل والأكثر شهرة للطلاب والمطورين لنشر مشاريع البورتفوليو والتجارب المجانية مباشرة من داخل مستودع المشروع دون الحاجة لحسابات خارجية منفصلة. يظهر الموقع على نطاق مجاني بصيغة username.github.io/repo-name/. يتطلب نشر تطبيقات React (المبنية بـ Vite) على GitHub Pages خطوتين أساسيتين: 1) ضبط المسار الأساسي (base path) في ملف vite.config.js ليطابق اسم المستودع، لمنع فشل تحميل ملفات CSS وJS. 2) إعداد مسار GitHub Actions التلقائي أو استخدام حزمة gh-pages لرفع مجلد dist إلى فرع خاص يسمى gh-pages.",
      realWorldAnalogy:
        "تشبه وضع لوحة إعلانية صغيرة في النافذة المطلة على الشارع لمكتبك في الطابق الأول؛ الخدمة مقدمة لك مجاناً كجزء من اشتراكك في المبنى، وتفي بالغرض تماماً لعرض نماذج أعمالك للمارة دون استئجار واجهة تجارية مستقلة.",
      whyItMatters:
        "الخيار الأسرع لمشاركة مشاريع التخرج، وحزم ومكتبات المصدر المفتوح، ومواقع التوثيق، والتطبيقات التجريبية الشخصية دون أي تكلفة مادية.",
      syntax:
        "// ضبط base path في vite.config.js لمطابقة اسم المستودع\nexport default defineConfig({\n  base: '/my-repo-name/',\n  plugins: [react()]\n});",
      codeExample: `// مثال عملي: تكوين vite.config.js للنشر السليم على GitHub Pages
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // اسم المستودع بين خطين مائلين لمنع أخطاء مسارات الأصول النسبية
  base: '/react-portfolio-demo/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});`,
      advancedExample: `// مثال متقدم: سير عمل GitHub Actions الآلي الكامل للنشر على GitHub Pages (.github/workflows/deploy.yml)
name: 🚀 Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

# منح الصلاحيات اللازمة للـ Action لنشر المحتوى
permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: استنساخ الكود
        uses: actions/checkout@v4

      - name: إعداد Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: تثبيت الحزم
        run: npm ci

      - name: بناء حزمة الإنتاج
        run: npm run build

      - name: تجهيز مخرجات Pages
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: النشر على خوادم GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`,
      output:
        "يتم بناء المشروع ونشره تلقائياً مع كل push إلى فرع main، ويصبح متاحاً للجمهور على رابط: https://username.github.io/react-portfolio-demo/.",
      commonMistakes: [
        {
          mistake: "نسيان تعيين base: '/repo-name/' في vite.config.js وتفاجؤك بظهور شاشة بيضاء وأخطاء 404 لكافة ملفات الـ JS وCSS.",
          fix: "التأكد من كتابة اسم مستودع GitHub بدقة بين شرطتين مائلتين في خاصية base بملف vite.config.js."
        },
        {
          mistake: "ظهور خطأ 404 عند تحديث الصفحة في مسار فرعي بسبب عدم دعم GitHub Pages لإعادة توجيه مسارات SPA افتراضياً.",
          fix: "استخدام حيلة 404.html بنسخ ملف index.html وتسميته 404.html في مجلد dist أو استخدام حزمة spa-github-pages."
        }
      ],
      bestPractices: [
        "استخدم سير عمل GitHub Actions الحديث المبني على upload-pages-artifact بدلاً من حزمة gh-pages اليدوية القديمة.",
        "تأكد من تفعيل خدمة GitHub Pages من إعدادات المستودع Settings -> Pages واختيار Source: GitHub Actions.",
        "ضع رابط الموقع المنشور في خانة Website بقسم About في الصفحة الرئيسية للمستودع لتمكين الزوار من تجربته فوراً."
      ],
      infographic: {
        title: "خطوات النشر على GitHub Pages",
        nodes: [
          { label: "1. base: '/repo/'", desc: "تعديل المسار الأساسي في vite.config.js ليطابق اسم المستودع" },
          { label: "2. GitHub Action", desc: "ملف workflow يبني الكود ويرفع محتويات dist تلقائياً" },
          { label: "3. Pages Settings", desc: "تفعيل الخدمة واختيار النشر عبر GitHub Actions من الإعدادات" },
          { label: "4. Live Site 🎉", desc: "إتاحة الموقع على: https://username.github.io/repo/" }
        ]
      }
    },
    {
      id: "28.2.e",
      title: "حل مشكلة إعادة تحميل صفحات SPA وإعداد Fallback Routes",
      englishTerm: {
        term: "SPA Fallback Routes & 404 Handling",
        pronunciation: "إس بي إيه فولباك روتس",
        meaning: "توجيه كافة طلبات المتصفح إلى ملف index.html لمنع أخطاء 404 عند تحديث الصفحات الفرعية"
      },
      description:
        "هذه المشكلة هي اللغز الأشهر الذي يحير كافة مطوري React المبتدئين: 'تطبيقي يعمل بشكل ممتاز عند النقر والتنقل الداخلي، ولكن بمجرد أن أقوم بتحديث الصفحة (Reload) وأنا في مسار مثل /dashboard أو /users/5، يفشل الموقع ويظهر خطأ 404 Not Found!'. السبب التقني البسيط: تطبيق React هو Single Page Application (SPA) يمتلك ملفاً حقيقياً واحداً فقط على السيرفر هو index.html. المسارات الفرعية (/dashboard) هي مسارات وهمية يتعامل معها كود React Router داخل المتصفح. عندما تضغط Reload، يطلب المتصفح من السيرفر الفيزيائي ملفاً اسمه dashboard.html، وحيث إن هذا الملف غير موجود، يعيد السيرفر خطأ 404! الحل هو توجيه السيرفر (Rewrites) لإعادة إرسال index.html لأي طلب غير موجود برمز حالة 200 ليترك إدارة المسار لـ React Router.",
      realWorldAnalogy:
        "يشبه دخول مبنى إداري ضخم بدون غرف منفصلة؛ هناك موظف استقبال ذكي واحد يقف عند الباب (ملف index.html مع React Router). إذا طلبت 'قسم المحاسبة'، يوجهك الموظف فوراً للزاوية اليمنى. ولكن إذا حاولت القفز بالمظلة من السطح مباشرة إلى نافذة وهمية تسمى 'قسم المحاسبة' (الضغط على Reload)، ستصطدم بجدار مغلق لأن الباب الوحيد الحقيقي هو باب الاستقبال الرئيسي.",
      whyItMatters:
        "حل هذه المشكلة إلزامي وحتمي لأي تطبيق React يستخدم React Router؛ فبدونها سيعجز المستخدمون عن حفظ روابط الصفحات في المفضلة (Bookmarks) أو مشاركتها مع أصدقائهم.",
      syntax:
        "# قاعدة Netlify وCloudflare في ملف _redirects:\n/*    /index.html   200\n\n# قاعدة Vercel في ملف vercel.json:\n{ \"rewrites\": [{ \"source\": \"/(.*)\", \"destination\": \"/index.html\" }] }",
      codeExample: `// مثال عملي: ملف public/_redirects لحل المشكلة فورياً في Netlify وCloudflare Pages
# السطر السحري لحل مشكلة 404 في تطبيقات React Router:
/*    /index.html   200

# الشرح:
# /* = أي مسار يطلبه المستخدم في المتصفح
# /index.html = سلمه ملف الصفحة الرئيسية
# 200 = رمز استجابة ناجحة (وليس 404 أو 301) لكي يتولى React Router التحليل`,
      advancedExample: `// مثال متقدم: تكوين خادم Nginx الحقيقي في خوادم الإنتاج الخاصة (VPS / Docker)
# إعداد خادم Nginx لتوجيه مسارات React SPA بشكل سليم
server {
    listen 80;
    server_name example.com;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        # السطر الحاسم: جرب البحث عن الملف المادي، ثم المجلد، وإذا لم تجده أرجع index.html
        try_files $uri $uri/ /index.html;
    }

    # تخزين الأصول الثابتة في الكاش لمدة عام كامل
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }

    # منع الوصول للملفات المخفية
    location ~ /\\. {
        deny all;
    }
}`,
      output:
        "القدرة الكاملة على تحديث أي صفحة داخلية في تطبيق React، وحفظ الروابط ومشاركتها مع الآخرين دون ظهور أي شاشة 404 نهائياً.",
      commonMistakes: [
        {
          mistake: "وضع ملف _redirects داخل مجلد src بدلاً من مجلد public، مما يؤدي لعدم نسخه إلى مجلد dist أثناء البناء.",
          fix: "التأكد من وضع ملف _redirects في مجلد public/ مباشرة ليتم نسخه لجذر مجلد dist تلقائياً."
        },
        {
          mistake: "استخدام إعادة التوجيه برمز 301 أو 302 بدلاً من 200 Rewrite في ملف _redirects، مما يغير الرابط في شريط المتصفح ويعيد المستخدم للصفحة الرئيسية.",
          fix: "استخدام رمز 200 دائماً ليظل الرابط المطلوب ثابتاً في المتصفح بينما يستلم محتوى index.html."
        }
      ],
      bestPractices: [
        "ضع ملف _redirects في مجلد public كقاعدة افتراضية في كل مشاريع React المستقبلية دون تردد.",
        "تأكد من أن كود React Router يحتوي على مسار بديل للخطأ الحقيقي <Route path='*' element={<NotFound />} /> لعرض واجهة 404 مخصصة عندما يطلب المستخدم صفحة غير موجودة فعلياً في التطبيق.",
        "اختبر تحديث الصفحة (F5) على مسار عميق (مثل /dashboard/users/12) محلياً عبر npm run preview للتأكد من نجاح التوجيه."
      ],
      infographic: {
        title: "آلية عمل SPA Fallback Rewrites",
        nodes: [
          { label: "1. Reload في /cart", desc: "المتصفح يطلب مسار /cart مباشرة من خادم الويب الفيزيائي" },
          { label: "2. فحص السيرفر", desc: "السيرفر لا يجد ملف cart.html حقيقي في القرص" },
          { label: "3. تطبيق Rewrite 200", desc: "السيرفر يرجع index.html برمز 200 بدلاً من إرسال خطأ 404" },
          { label: "4. React Router يعمل", desc: "جافاسكريبت تقرأ مسار /cart من الرابط وتعرض مكون CartPage فوراً 🚀" }
        ]
      }
    },
    {
      id: "28.2.f",
      title: "ربط النطاق المخصص Custom Domain وإدارة سجلات DNS",
      englishTerm: {
        term: "Custom Domain & DNS Records",
        pronunciation: "كوستوم دومين آند دي إن إس ريكوردز",
        meaning: "ربط موقعك السحابي باسم نطاقك التجاري الخاص (مثل mysite.com) وضبط سجلات A وCNAME"
      },
      description:
        "النطاقات الافتراضية المجانية (مثل myapp.vercel.app أو myapp.netlify.app) ممتازة للتطوير، ولكن إطلاق مشروع حقيقي يتطلب نطاقاً مخصصاً (Custom Domain مثل mycompany.com) لترسيخ الهوية المهنية والمصداقية. تتم عملية الربط من خلال لوحة إدارة النطاق (مثل Namecheap أو GoDaddy أو Cloudflare) عبر نوعين أساسيين من سجلات الـ DNS: 1) سجل CNAME: يوجه النطاقات الفرعية (مثل www أو app) إلى الرابط السحابي للمنصة (مثل cname.vercel-dns.com). 2) سجل A أو ALIAS/ANAME: يوجه النطاق الجذري الأساسي (Apex Domain مثل mycompany.com مباشرة) إلى عنوان الآي بي (IP Address) المعتمد للسيرفر السحابي.",
      realWorldAnalogy:
        "النطاق الافتراضي يشبه الإحداثيات الجغرافية الجافة لموقعك على الخريطة (خط طول 30.12 ودائرة عرض 31.45)، بينما النطاق المخصص هو العنوان التجاري الفاخر المطبوع بالذهب على بطاقتك: 'برج الأمل، شارع التحلية'. كلاهما يصل إلى نفس المكان، ولكن الثاني هو ما يثق به الناس ويسهل حفظه.",
      whyItMatters:
        "النطاق المخصص ضروري لبناء علامة تجارية قوية وموثوقة، وشرط أساسي لتحسين محركات البحث SEO، وربط بوابات الدفع الإلكتروني وتطبيقات الأعمال الرسمية.",
      syntax:
        "# نموذج سجلات DNS في لوحة تحكم النطاق:\nType: CNAME | Host: www | Value: cname.vercel-dns.com | TTL: Auto\nType: A     | Host: @   | Value: 76.76.21.21         | TTL: Auto",
      codeExample: `// مثال توضيحي: جدول سجلات DNS النموذجية لربط نطاق مخصص بمنصة Vercel
/*
-----------------------------------------------------------------------------------
نوع السجل (Type) | المضيف (Name / Host) | القيمة الموجه إليها (Value / Target)
-----------------------------------------------------------------------------------
A Record         | @ (أو اتركه فارغاً)  | 76.76.21.21 (خادم Vercel العالمي)
CNAME Record     | www                  | cname.vercel-dns.com
-----------------------------------------------------------------------------------
*/`,
      advancedExample: `// مثال متقدم: التحقق من انتشار سجلات DNS برمجياً عبر DNS-over-HTTPS (DoH) API
import React, { useState } from 'react';

export function DnsPropagationChecker() {
  const [domain, setDomain] = useState('react.dev');
  const [dnsStatus, setDnsStatus] = useState(null);
  const [checking, setChecking] = useState(false);

  const checkDns = async () => {
    setChecking(true);
    try {
      // الاستعلام المباشر عبر واجهة Google Cloud DNS الآمنة DoH
      const res = await fetch(\`https://dns.google/resolve?name=\${domain}&type=A\`);
      const data = await res.json();
      setDnsStatus({
        status: data.Status === 0 ? 'سليم ومنتشر عالمياً ✅' : 'قيد الانتشار أو غير موجود ⏳',
        ipAddresses: data.Answer?.map(a => a.data) || []
      });
    } catch {
      setDnsStatus({ status: 'تعذر التحقق من السجلات.', ipAddresses: [] });
    }
    setChecking(false);
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl text-xs space-y-3 font-sans">
      <h4 className="font-bold text-white text-sm">فاحص انتشار سجلات DNS للنطاق</h4>
      <div className="flex gap-2">
        <input
          type="text"
          value={domain}
          onChange={e => setDomain(e.target.value)}
          className="flex-1 bg-slate-950 border border-slate-800 p-2 rounded text-white font-mono"
        />
        <button
          onClick={checkDns}
          disabled={checking}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold transition"
        >
          {checking ? 'جارٍ الفحص...' : 'فحص السجلات'}
        </button>
      </div>

      {dnsStatus && (
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <div className="text-slate-300 font-bold">الحالة: {dnsStatus.status}</div>
          <div className="text-slate-400 font-mono text-[11px]">
            عناوين IP المرصودة: {dnsStatus.ipAddresses.join(', ') || 'لا توجد سجلات A متاحة'}
          </div>
        </div>
      )}
    </div>
  );
}`,
      output:
        "ربط النطاق التجاري بنجاح، مما يسمح للزوار بفتح تطبيق React عبر اسم الدومين المخصص مباشرة مع توجيه حركة المرور تلقائياً للسيرفر السحابي.",
      commonMistakes: [
        {
          mistake: "فقدان الصبر وتوقع عمل النطاق فور حفظ السجلات، والبدء في حذف وتعديل السجلات بشكل عشوائي.",
          fix: "تذكر أن انتشار سجلات DNS حول العالم (DNS Propagation) قد يستغرق من بضع دقائق إلى 24 ساعة؛ انتظر بهدوء وافحص عبر موقع whatsmydns.net."
        },
        {
          mistake: "ربط نطاق www ونسيان توجيه النطاق الجذري (Apex domain بدون www) مما يجعل كتابة اسم الموقع بدون www تفشل.",
          fix: "ضبط كلا السجلين دائماً: سجل A للنطاق الجذري وسجل CNAME للـ www مع تفعيل إعادة التوجيه التلقائي بينهما في لوحة الاستضافة."
        }
      ],
      bestPractices: [
        "استخدم خدمة Cloudflare لإدارة DNS نطاقك؛ فهي توفر أسرع تحديث للسجلات في العالم (أقل من ثوانٍ معدودة) مع حماية مجانية.",
        "اضبط دائماً إعادة توجيه موحدة (Redirect Rule): إما توجيه كافة الزيارات من non-www إلى www أو العكس للحفاظ على قوة ترتيب الـ SEO.",
        "فعّل خاصية تجديد النطاق التلقائي (Auto-Renewal) لدى مزود الدومين لتفادي سرقة نطاق شركتك عند انتهاء مدته."
      ],
      infographic: {
        title: "أنواع سجلات الـ DNS الأساسية لربط المواقع",
        nodes: [
          { label: "A Record", desc: "يربط النطاق الجذري (example.com) مباشرة بعنوان IP الخاص بالخادم" },
          { label: "CNAME Record", desc: "يربط النطاق الفرعي (www.example.com) باسم نطاق سحابي آخر" },
          { label: "DNS Propagation", desc: "فترة تحديث وتوزيع السجلات على خوادم الإنترنت حول الكوكب (1-24 ساعة)" }
        ]
      }
    },
    {
      id: "28.2.g",
      title: "إعداد شهادات الأمان HTTPS والتشفير التلقائي",
      englishTerm: {
        term: "Automatic HTTPS & SSL/TLS Encryption",
        pronunciation: "أوتوماتيك إتش تي تي بي إس آند إس إس إل",
        meaning: "تشفير الاتصال بين متصفح المستخدم والخادم السحابي لحماية البيانات وتفعيل قفل الأمان الأخضر"
      },
      description:
        "بروتوكول HTTPS لم يعد ميزة إضافية، بل هو شرط إجباري قطعي لتشغيل تطبيقات الويب المعاصرة. بدون HTTPS، ستضع المتصفحات لافتة حمراء تحذيرية مخيفة للمستخدم ('موقع غير آمن - خطر سرقة البيانات')، وستحظر محركات البحث فهرستك، كما ستتعطل تقنيات الويب المتقدمة كالـ Service Worker والـ Geolocation وWeb Crypto التي ترفض العمل إلا في بيئة آمنة (Secure Context). المنصات السحابية الحديثة (Vercel, Netlify, Cloudflare) تتولى إصدار وتجديد شهادات الأمان الرقمية مجاناً وتلقائياً عبر منظومة Let's Encrypt فور ربط النطاق، مع فرض إعادة توجيه كافة طلبات HTTP غير المشفرة إلى HTTPS تلقائياً.",
      realWorldAnalogy:
        "يشبه الفرق بين إرسال رسالتك على بطاقة بريدية مكشوفة يقرؤها ساعي البريد وأي شخص تقع عينه عليها (بروتوكول HTTP المكشوف)، وبين وضع الرسالة داخل حقيبة دبلوماسية مصفحة برقم سري لا يفتحه سوى المستلم المعتمد فقط (بروتوكول HTTPS المشفر).",
      whyItMatters:
        "يحمي كلمات مرور وتوكنات المستخدمين من التجسس والاختراق في شبكات الواي فاي العامة، ويشترطه محرك Google كمعيار ترتيب إلزامي، ويتيح تشغيل ميزات PWA المتقدمة.",
      syntax:
        "# فرض ترويسة HSTS للأمان الأقصى في إعدادات الخادم:\nStrict-Transport-Security: max-age=31536000; includeSubDomains; preload",
      codeExample: `// مثال توضيحي: التحقق من تشغيل البروتوكول الآمن في مكون React
import React from 'react';

function SecurityStatusBadge() {
  // فحص ما إذا كان الاتصال آمناً عبر HTTPS
  const isSecure = window.location.protocol === 'https:' || window.location.hostname === 'localhost';

  return (
    <div className="flex items-center gap-2 p-3 bg-slate-900 rounded-xl text-xs">
      {isSecure ? (
        <>
          <span className="text-emerald-400">🔒</span>
          <span className="text-emerald-300 font-bold">الاتصال مشفر وآمن (HTTPS Active)</span>
        </>
      ) : (
        <>
          <span className="text-rose-400">⚠️</span>
          <span className="text-rose-300 font-bold">تحذير: الاتصال غير مشفر (Insecure HTTP)</span>
        </>
      )}
    </div>
  );
}

export default SecurityStatusBadge;`,
      advancedExample: `// مثال متقدم: تكوين ترويسات الأمان الصارمة (Security Headers) لحماية تطبيق React من ثغرات Clickjacking وMIME Sniffing
// هذا التكوين يوضع في vercel.json أو netlify.toml أو خادم Nginx:
const recommendedSecurityHeaders = {
  // 1. منع تضمين التطبيق داخل iframe في مواقع أخرى لحماية المستخدم من النقر الخبيث (Clickjacking)
  'X-Frame-Options': 'DENY',

  // 2. إجبار المتصفح على احترام نوع الملف المصرح به ومنع تفسير النصوص كـ JS
  'X-Content-Type-Options': 'nosniff',

  // 3. منع المتصفح من إرسال تفاصيل الرابط كاملاً للمواقع الخارجية
  'Referrer-Policy': 'strict-origin-when-cross-origin',

  // 4. إجبار المتصفح على استخدام HTTPS لمدة عام كامل حتى لو كتب المستخدم http يدوياً (HSTS)
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',

  // 5. تقييد صلاحيات المتصفح للأجهزة (الكاميرا والميكروفون والموقع)
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

console.log('ترويسات الأمان القياسية الموصى بها جاهزة للتطبيق');`,
      output:
        "ظهور قفل الأمان في شريط عنوان المتصفح، وتشفير كافة حزم البيانات المنقولة بين العميل والسيرفر بأحدث خوارزميات التشفير TLS 1.3.",
      commonMistakes: [
        {
          mistake: "ظهور خطأ 'Mixed Content Error' بسبب استدعاء صور أو روابط API ببروتوكول http:// من داخل صفحة تعمل بـ https://.",
          fix: "التأكد من أن كافة الصور والخطوط واستدعاءات الـ API تبدأ دائماً بـ https:// أو مسارات نسبية لعدم حظرها من المتصفح."
        },
        {
          mistake: "شراء شهادات SSL بمبالغ مالية باهظة لتطبيقات الواجهات العادية.",
          fix: "الاعتماد على شهادات SSL المجانية والتلقائية التي توفرها Vercel وNetlify وCloudflare وLet's Encrypt دون دفع أي تكاليف إضافية."
        }
      ],
      bestPractices: [
        "فعّل دائماً خيار 'Always Use HTTPS' أو 'Automatic HTTPS Rewrites' في لوحة تحكم مزود الاستضافة.",
        "أضف ترويسة Strict-Transport-Security (HSTS) لضمان حماية المستخدمين من هجمات تخفيض بروتوكول التشفير (SSL Stripping).",
        "اختبر درجة أمان شهادتك عبر موقع SSL Labs (ssllabs.com/ssltest) للتأكد من حصول موقعك على تصنيف A+."
      ],
      infographic: {
        title: "منظومة الأمان والتشفير عبر HTTPS",
        nodes: [
          { label: "1. سرية البيانات (Privacy)", desc: "تشفير البيانات الحساسة لمنع التجسس في الشبكات المفتوحة" },
          { label: "2. سلامة المحتوى (Integrity)", desc: "منع مزودي الخدمة أو المخترقين من حقن إعلانات أو نصوص خبيثة" },
          { label: "3. توثيق الهوية (Auth)", desc: "تأكيد أن المستخدم يتصل بالخادم الحقيقي للموقع وليس بموقع منتحل" },
          { label: "4. تفعيل ميزات الويب", desc: "شرط إلزامي لتشغيل Service Worker وتطبيقات PWA وتحديد المواقع" }
        ]
      }
    },
    {
      id: "28.2.h",
      title: "استخدام معاينات الفروع التفاعلية Preview Deployments",
      englishTerm: {
        term: "Preview Deployments",
        pronunciation: "بريفيو ديبلويمنتس",
        meaning: "توليد رابط موقع حي ومؤقت وفريد لكل فرع عمل أو طلب سحب PR لتجربة التعديلات عملياً قبل دمجها"
      },
      description:
        "ميزة معاينات الفروع (Preview Deployments) هي أحد أعظم الابتكارات في سير عمل تطوير الويب الحديث. بدلاً من أن يقتصر تقييم طلب السحب (Pull Request) على قراءة أسطر الكود الجافة في GitHub، تقوم المنصات السحابية (مثل Vercel وNetlify وCloudflare) ببناء ونشر التطبيق فورياً على رابط مؤقت فريد وخاص بهذا الـ PR (مثل pr-42-react-store.vercel.app). يتيح هذا الرابط لمدير المنتج، ومصمم الواجهات (UI/UX)، ومسؤولي الجودة (QA) النقر على الرابط وتجربة الميزة الجديدة على هواتفهم وحواسيبهم كأنها في الإنتاج، وإبداء الملاحظات قبل دمج سطر كود واحد في الفرع الرئيسي.",
      realWorldAnalogy:
        "تشبه إرسال عينة تذوق صغيرة ومجانية من الصنف الجديد للزبائن قبل طباعة قائمة الطعام الجديدة وتوزيعها على كافة فروع المطعم؛ تتأكد أولاً من إعجاب الجميع بالمذاق، وتعدل الملح والبهارات وفق آرائهم قبل تعميم الطبق رسمياً.",
      whyItMatters:
        "تمنع المفاجآت الكارثية بعد الدمج، وتسرع حلقة التغذية الراجعة (Feedback Loop) بين المطور وفريق التصميم وأصحاب المصلحة من أيام إلى دقائق.",
      syntax:
        "# التدفق التلقائي للمعاينة:\nGit Push to branch ➔ Vercel/Netlify Bot comments on GitHub PR with Preview URL ➔ Test Live!",
      codeExample: `// مثال توضيحي: التعليق التلقائي الذي يضعه روبوت Vercel على الـ PR في GitHub
/*
-----------------------------------------------------------------------------
| Deploy Preview for *react-pro-store* ready!                               |
-----------------------------------------------------------------------------
| ✅ Preview: https://react-pro-store-git-feature-cart-ahmad.vercel.app      |
| 🔍 Inspect: https://vercel.com/ahmad-team/react-pro-store/D8xY2zL9        |
| 🕒 Updated: 2026-10-29T21:40:00Z                                          |
-----------------------------------------------------------------------------
*/`,
      advancedExample: `// مثال متقدم: مكون React ذكي يكتشف بيئة المعاينة ويعرض شريط أدوات مراجعة التصميم
import React from 'react';

export function PreviewEnvironmentBanner() {
  // فحص ما إذا كان التطبيق يعمل حالياً على رابط معاينة مؤقت (Preview)
  // Vercel تحقن متغير VITE_VERCEL_ENV تلقائياً بقيمة 'preview' أو 'production'
  const isPreview = import.meta.env.VITE_VERCEL_ENV === 'preview' || window.location.hostname.includes('vercel.app');

  if (!isPreview) return null;

  return (
    <div className="fixed bottom-3 right-3 z-50 bg-slate-900/90 backdrop-blur-md border border-amber-500/40 p-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs text-slate-100 font-sans">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
        <span className="font-bold text-amber-300">نسخة معاينة (Preview Branch)</span>
      </div>
      <div className="text-[11px] text-slate-400 font-mono">
        Commit: {import.meta.env.VITE_VERCEL_GIT_COMMIT_SHA?.substring(0, 7) || 'Dev'}
      </div>
      <button
        onClick={() => window.open('https://github.com/my-repo/pulls', '_blank')}
        className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition"
      >
        إبداء ملاحظة على الـ PR
      </button>
    </div>
  );
}`,
      output:
        "ظهور شريط تنبيه أنيق في أسفل الشاشة أثناء استعراض روابط المعاينة المؤقتة، مع تمكين الفريق من ترك تعليقات فورية على التصميم.",
      commonMistakes: [
        {
          mistake: "مشاركة رابط المعاينة مع عملاء الإنتاج كأنه الرابط الدائم للموقع.",
          fix: "تذكر أن روابط المعاينة مؤقتة وخاصة بالتجارب الداخلية؛ ويجب استخدام النطاق الرسمي للجمهور العام."
        },
        {
          mistake: "فشل المعاينة بسبب ربطها بقاعدة بيانات الإنتاج وتعديل بيانات العملاء الحقيقيين أثناء التجارب.",
          fix: "تخصيص متغيرات بيئة منفصلة لروابط الـ Preview في لوحة التحكم وتوجيهها لقاعدة بيانات تجريبية (Staging DB)."
        }
      ],
      bestPractices: [
        "استغل ميزة التعليقات التفاعلية المدمجة في Vercel (Preview Comments) لترك ملاحظات مباشرة فوق عناصر الشاشة.",
        "احرص على مشاركة رابط المعاينة مع فريق التصميم واختبار تجربة المستخدم على شاشات الجوال الحقيقية قبل طلب الدمج.",
        "فعّل خيار حماية روابط المعاينة بكلمة مرور (Password Protection) إذا كان المشروع يحتوي على ميزات سرية غير معلنة للجمهور."
      ],
      infographic: {
        title: "دورة عمل روابط المعاينة (Preview Deployments Flow)",
        nodes: [
          { label: "1. فتح PR في GitHub", desc: "المطور يفتح طلب سحب لميزة جديدة في فرع مستقل" },
          { label: "2. بناء آلي سحابي", desc: "المنصة السحابية تبني نسخة خاصة وتولد رابطاً فريداً فورياً" },
          { label: "3. اختبار فريق العمل", desc: "المصمم ومدير المنتج يتصفحون الرابط الحي ويبدون الملاحظات" },
          { label: "4. الموافقة والدمج", desc: "دمج الكود في main بعد التأكد التام من استقرار الواجهة" }
        ]
      }
    },
    {
      id: "28.2.i",
      title: "مراجعة وتحليل سجلات النشر Deployment Logs وتشخيص الأعطال",
      englishTerm: {
        term: "Deployment Logs & Build Diagnostics",
        pronunciation: "ديبلويمنت لوجز آند بيلد دياجنوستكس",
        meaning: "قراءة وتحليل السجلات التفصيلية لعملية البناء لاكتشاف أسباب فشل النشر وإصلاحها"
      },
      description:
        "عندما يفشل نشر المشروع وتتحول العلامة الخضراء إلى علامة خطأ حمراء، فإن سجلات النشر (Deployment Logs) هي الصديق الأول للمطور لتشخيص الخلل. توثق السجلات كل خطوة بالثانية: تثبيت إصدار Node.js، تثبيت الحزم عبر npm install، تشغيل أمر البناء، وتتبع الأخطاء بدقة. تتنوع أسباب فشل النشر بين: أخطاء استيراد ملفات غير متطابقة في حالة الأحرف (Case Sensitivity بين Windows وLinux)، أو أخطاء فحص TypeScript الصارمة في الإنتاج، أو نسيان متغيرات بيئة إجبارية، أو نفاد ذاكرة خادم البناء (Out of Memory). قراءة السجل بهدوء والبحث عن سطر 'Error:' يحدد لك رقم السطر والملف المتسبب في المشكلة فوراً.",
      realWorldAnalogy:
        "تشبه الصندوق الأسود في الطائرة؛ عندما يحدث أي هبوط اضطراري أو خلل مفاجئ، لا يضرب المهندسون في الودع، بل يستخرجون الصندوق الأسود ويستمعون لتسجيلات قمرة القيادة وقراءات العدادات بالثانية لمعرفة السبب الحقيقي للعطل فوراً.",
      whyItMatters:
        "تمكنك من حل أعطال النشر الغامضة في دقائق معدودة، وفهم الفروقات الدقيقة بين بيئة جهازك المحلي وبيئة خوادم السحابية.",
      syntax:
        "# استعراض سجلات النشر مباشرة من سطر الأوامر عبر Vercel CLI:\nvercel logs <deployment-url>\n\n# أو عبر Netlify CLI:\nnetlify logs:deploy",
      codeExample: `// مثال توضيحي: تشريح خطأ نشر شهير داخل سجلات Vercel Build Logs
/*
---------------------------------------------------------------------------------
[Build Log Output]
21:45:12.102  Cloning github.com/ahmad/react-store (Branch: main, Commit: 4a2b1c)
21:45:13.450  Installing dependencies using npm ci...
21:45:22.890  Running "npm run build"...
21:45:24.120  vite v8.3.5 building client environment for production...
21:45:25.600  transforming...
21:45:26.110  [vite]: Rollup failed to resolve import "./components/button" from "src/App.jsx".
21:45:26.111  This is most likely unintended because a file with different casing exists:
21:45:26.112  "src/components/Button.jsx"
21:45:26.115  Error: Command "npm run build" exited with 1
21:45:26.400  Deployment failed ❌
---------------------------------------------------------------------------------
*/

// ✅ التشخيص والحل الفوري:
// نظام Windows يتساهل مع الحرف الصغير button.jsx، بينما نظام Linux على خادم Vercel صارم!
// الحل: تعديل سطر الاستيراد في App.jsx ليطابق الحرف الكبير:
// import { Button } from './components/Button';`,
      advancedExample: `// مثال متقدم: استراتيجية التراجع الفوري (Instant Rollback) عند حدوث خطأ بعد النشر
# إذا قمت بدمج PR ونُشر الكود في الإنتاج وفوجئت بظهور مشكلة حرجة تؤثر على العملاء:
# لا داعي للذعر أو محاولة كتابة كود إصلاح سريع تحت الضغط!

# المنصات السحابية تتيح خاصية التراجع الفوري Instant Rollback:
# 1. كل عملية نشر سابقة تحتفظ بملفاتها الثابتة للأبد برقم معرف فريد.
# 2. في لوحة Vercel أو Netlify: انتقل إلى تبويب Deployments.
# 3. اختر آخر نسخة مستقرة كانت تعمل بنجاح (قبل ساعتين مثلاً).
# 4. اضغط على خيار: "Promote to Production" أو "Rollback to this deploy".

# النتيجة:
# في أقل من 3 ثوانٍ وبنقرة زر واحدة:
# يتم توجيه حركة المرور عالمياً للنسخة القديمة المستقرة فوراً!
# والآن يمكنك فحص المشكلة في هدوء وإصلاحها بفرع مستقل دون تعطيل المستخدمين.`,
      output:
        "تحليل دقيق لأسباب فشل البناء وإصلاحها، مع امتلاك آلية إنقاذ فورية للتراجع عن النسخ المعطوبة في ثوانٍ معدودة.",
      commonMistakes: [
        {
          mistake: "الذعر وإعادة الضغط على زر 'Redeploy' عشرات المرات دون قراءة رسالة الخطأ في السجل.",
          fix: "التوقف وقراءة السجل؛ فالخطأ لن يختفي بإعادة البناء ما لم تقم بإصلاح السبب الجذري المذكور في السطور الأخيرة."
        },
        {
          mistake: "تجاهل مشكلة حساسية حالة الأحرف في أسماء الملفات (Case Sensitivity) بين نظام ويندوز وخوادم لينكس السحابية.",
          fix: "التأكد دائماً من مطابقة أسماء الملفات في أوامر import تماماً لحالة الأحرف على القرص (CamelCase أو kebab-case)."
        }
      ],
      bestPractices: [
        "ابحث دائماً في السجل عن كلمة 'Rollup failed' أو 'SyntaxError' أو 'Type error'؛ فهي السطر الذي يحوي مفتاح الحل.",
        "اختبر البناء الصارم محلياً بتشغيل tsc && vite build للتأكد من خلو المشروع من أخطاء الأنواع قبل الرفع.",
        "درب نفسك وفريقك على زر التراجع الفوري Rollback كأول إجراء طوارئ عند حدوث أي خلل جسيم بعد الإطلاق."
      ],
      infographic: {
        title: "خطوات تشخيص أعطال النشر واستراتيجية Rollback",
        nodes: [
          { label: "1. مراجعة السجل Logs", desc: "البحث عن سطر الخطأ الصريح وتحديد الملف والسطر المتسبب" },
          { label: "2. فحص الفروقات البيئية", desc: "التأكد من حالة الأحرف ومتغيرات البيئة وإصدار Node.js" },
          { label: "3. التدخل الطارئ Rollback", desc: "إعادة توجيه الزوار لأحدث نسخة مستقرة في 3 ثوانٍ بنقرة زر" },
          { label: "4. الإصلاح الممنهج", desc: "إصلاح الخلل في فرع محلي واختباره بـ preview قبل إعادة النشر" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-28-2-1",
      question: "لماذا تظهر شاشة خطأ 404 Not Found عند تحديث الصفحة (Reload) في مسار فرعي مثل /dashboard بتطبيقات React؟",
      options: [
        "لأن متصفح المستخدم لا يدعم ميزات جافاسكريبت الحديثة.",
        "لأن السيرفر الفيزيائي يبحث عن ملف مادي اسمه dashboard.html ولا يجده؛ والحل هو إعداد قاعدة Rewrite لتوجيه كافة الطلبات لـ index.html.",
        "لأن حجم ملف package.json كبير جداً.",
        "لأن شهادة الأمان SSL قد انتهت صلاحيتها."
      ],
      correctAnswer: 1,
      explanation:
        "في تطبيقات SPA، المسارات الفرعية وهمية ويتعامل معها React Router في المتصفح؛ وعند التحديث يطلب المتصفح الملف من السيرفر مباشرة، وإذا لم تكن هناك قاعدة Fallback تعيد index.html، سيعطي السيرفر خطأ 404 مادي."
    },
    {
      id: "quiz-28-2-2",
      question: "ما الفائدة الرئيسية من ميزة معاينات الفروع (Preview Deployments) في منصات مثل Vercel وNetlify؟",
      options: [
        "حذف كافة الفروع غير المستخدمة في GitHub تلقائياً.",
        "توليد رابط موقع حي ومؤقت لكل طلب سحب PR يتيح للفريق والمصممين تجربة التعديلات عملياً قبل دمجها في الإنتاج.",
        "زيادة سرعة معالج الحاسوب بنسبة 20%.",
        "تشفير قاعدة بيانات المشروع محلياً."
      ],
      correctAnswer: 1,
      explanation:
        "تنشئ معاينات الفروع نسخة حية كاملة مستقلة لكل فرع عمل أو PR، مما يمكن فريق التصميم ومسؤولي المنتج من فحص الميزة واختبارها على شاشات حقيقية قبل اعتماد دمجها في الفرع الرئيسي."
    },
    {
      id: "quiz-28-2-3",
      question: "ما هو الإجراء الأمني الأسرع والأكثر أماناً إذا تم نشر تحديث للإنتاج وتبين وجود عيب برمجي فادح يعطل العملاء؟",
      options: [
        "إغلاق السيرفر وحذف حساب الشركة السحابي.",
        "استخدام خاصية التراجع الفوري (Instant Rollback) في لوحة التحكم لإعادة توجيه الزوار لآخر نسخة مستقرة سابقة في ثوانٍ معدودة.",
        "البدء في كتابة كود جديد مباشرة على السيرفر الحي تحت الضغط.",
        "إرسال بريد إلكتروني لكافة العملاء للاعتذار."
      ],
      correctAnswer: 1,
      explanation:
        "تحتفظ المنصات السحابية بكافة النسخ السابقة مبنية وجاهزة؛ فاستخدام خاصية Rollback يعيد توجيه مسارات الإنتاج فورياً للنسخة المستقرة السابقة في ثوانٍ، مما يحمي المستخدمين ويوفر وقتاً للفريق لإصلاح الخلل بهدوء."
    }
  ],
  exercise: {
    id: "exercise-28-2",
    title: "إعداد تكوين نشر متكامل لـ React مع دعم مسارات SPA وحماية الترويسات",
    description:
      "قم بإنشاء ملف 'vercel.json' وملف '_redirects' لتطبيق React يضمنان:\n1) توجيه كافة المسارات الفرعية إلى index.html برمز 200.\n2) حظر تضمين الموقع في إطارات خارجية عبر X-Frame-Options: DENY.\n3) تفعيل كاش طويل الأمد لمدة عام لمجلد assets الثابت.",
    hints: [
      "في vercel.json استخدم مصفوفتي 'rewrites' و'headers'.",
      "في ملف public/_redirects اكتب القاعدة البسيطة: /* /index.html 200.",
      "استخدم ترويسة Cache-Control مع public, max-age=31536000, immutable."
    ],
    solution: `// 1. ملف public/_redirects (لمنصات Netlify وCloudflare Pages):
/*    /index.html   200

// 2. ملف vercel.json (لمنصة Vercel):
{
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}`
  },
  infographic: {
    title: "خريطة استضافة تطبيقات React والنشر السحابي",
    subtitle: "المسار الهندسي من اختيار المنصة وتوجيه المسارات إلى ربط النطاقات والتراجع الطارئ",
    nodes: [
      {
        id: "platforms",
        title: "1. المنصات السحابية",
        description: "Vercel وNetlify وCloudflare Pages لاستضافة سريعة على شبكات الحافة العالمية.",
        badge: "Hosting Platforms"
      },
      {
        id: "spa-fallbacks",
        title: "2. قواعد توجيه SPA",
        description: "ضبط قواعد Rewrites في vercel.json و_redirects للقضاء على أخطاء 404 نهائياً.",
        badge: "SPA Routing"
      },
      {
        id: "domains-ssl",
        title: "3. النطاق المخصص وHTTPS",
        description: "ربط سجلات A وCNAME وتشفير الاتصال التلقائي عبر شهادات SSL المجانية.",
        badge: "Domains & SSL"
      },
      {
        id: "preview-pr",
        title: "4. معاينات الفروع الحية",
        description: "روابط مؤقتة لكل PR لتجربة الميزات واختبار التصميم قبل الدمج الرسمي.",
        badge: "Preview Deploys"
      },
      {
        id: "logs-rollback",
        title: "5. المراقبة والتراجع الفوري",
        description: "تحليل سجلات البناء واستخدام خاصية Rollback كصمام أمان فوري عند الطوارئ.",
        badge: "Rollback Strategy"
      }
    ]
  }
};

export default topic2;

