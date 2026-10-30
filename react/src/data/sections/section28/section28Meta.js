// src/data/sections/section28/section28Meta.js
// بيانات وملخص القسم 28: بناء التطبيقات ونشرها (Building & Deploying React Applications)

export const section28Meta = {
  summary: [
    "جوهر البناء للإنتاج: أمر npm run build يحول الكود المصدري عبر Tree Shaking والضغط والتجزئة إلى أصول ثابتة خفيفة وسريعة في مجلد dist.",
    "أمان متغيرات البيئة: المتغيرات الممررة للعميل (VITE_) تصبح نصوصاً عامة صريحة في المتصفح؛ لذا يُحظر تماماً وضع أي مفاتيح سرية في كود React.",
    "الحل الجذري لمعضلة الـ SPA: إعداد قواعد التحويل (Rewrites مثل /* /index.html 200) إلزامي لمنع ظهور أخطاء 404 عند تحديث الصفحات الفرعية.",
    "الاستضافة السحابية الحديثة: توفر منصات Vercel وNetlify وCloudflare Pages توزيعاً جغرافياً سريعاً وتحديثاً آلياً مع كل git push وشهادات SSL مجانية.",
    "حراسة الجودة عبر CI/CD: ربط الـ PRs بخطوط أنابيب GitHub Actions تفحص الـ Lint والـ TypeScript وتشغل الاختبارات وتمنع دمج أي كود معطوب.",
    "الحاويات النحيفة عبر Multi-Stage: فصل مرحلة البناء بـ Node.js عن مرحلة التقديم بـ Nginx يقلص حجم صورة Docker من 1GB إلى أقل من 25MB.",
    "التخزين المؤقت الأبدي (Immutable Caching): كاش لمدة عام كامل للأصول ذات البصمات المشفرة مع تفعيل no-cache لملف index.html لضمان التحديث اللحظي.",
    "التكافؤ البيئي والتعافي الآلي: عزل بيئة Staging بقواعد بيانات تجريبية لحماية الإنتاج، وامتلاك استراتيجية Rollback فورية لإلغاء أي تحديث معطوب في ثوانٍ."
  ],
  cheatSheet: [
    {
      term: "npm run build",
      category: "البناء والتجهيز",
      syntax: "vite build ➔ generates /dist",
      description: "تجميع وضغط وتعتيم وتجزئة كود React لإنتاج حزمة الإنتاج النهائية."
    },
    {
      term: "Tree Shaking",
      category: "البناء والتجهيز",
      syntax: "حذف تلقائي للأكواد غير المستخدمة",
      description: "تحليل شجرة الاعتماديات وإسقاط الدوال والمكونات المهملة لتصغير الحزمة."
    },
    {
      term: "VITE_ Prefix",
      category: "متغيرات البيئة",
      syntax: "VITE_API_URL=https://api.com",
      description: "البادئة الإلزامية في Vite للسماح بكشف وتمرير المتغير لكود جافاسكريبت بالمتصفح."
    },
    {
      term: "Client Secret Leaks",
      category: "أمان البيئة",
      syntax: "⚠️ تحذير: لا تضع مفاتيح سرية في العميل!",
      description: "كافة متغيرات العميل تُحقن كنصوص صريحة مكشوفة لأي زائر يفحص المتصفح."
    },
    {
      term: "Vite Proxy",
      category: "عناوين الـ API",
      syntax: "server: { proxy: { '/api': 'http://localhost:5000' } }",
      description: "وكيل تطوير محلي يعيد توجيه الطلبات لتجنب أخطاء CORS المحبطة أثناء البرمجة."
    },
    {
      term: "rollup-plugin-visualizer",
      category: "تحليل الحزم",
      syntax: "visualizer({ filename: 'dist/stats.html' })",
      description: "توليد خريطة حرارية تفاعلية لكشف أوزان الحزم والمكتبات المتضخمة في المشروع."
    },
    {
      term: "sourcemap: 'hidden'",
      category: "خرائط المصدر",
      syntax: "build: { sourcemap: 'hidden' }",
      description: "توليد خرائط المصدر لرفعها سراً لمنصات تتبع الأخطاء مثل Sentry مع حجبها عن العامة."
    },
    {
      term: "npm run preview",
      category: "المعاينة المحلية",
      syntax: "vite preview (localhost:4173)",
      description: "تشغيل خادم محلي يقدم ملفات مجلد dist لاختبار السرعة والمسارات قبل النشر."
    },
    {
      term: "Vercel",
      category: "منصات الاستضافة",
      syntax: "vercel --prod أو النشر عبر Git",
      description: "المنصة الرائدة لاستضافة الواجهات مع شبكة حافة عالمية ومعاينات فروع فورية."
    },
    {
      term: "Netlify",
      category: "منصات الاستضافة",
      syntax: "netlify.toml أو السحب والإفلات Drag & Drop",
      description: "منصة استضافة سحابية شهيرة تدعم معالجة النماذج بدون خادم وشهادات SSL مجانية."
    },
    {
      term: "Cloudflare Pages",
      category: "منصات الاستضافة",
      syntax: "wrangler pages deploy dist",
      description: "استضافة خارقة السرعة على شبكة حافة في 300+ مدينة مع باندويث غير محدود."
    },
    {
      term: "SPA Fallback Rewrite",
      category: "توجيه المسارات",
      syntax: "/* /index.html 200 (في _redirects)",
      description: "إعادة توجيه كافة المسارات لملف index.html لحل مشكلة أخطاء 404 عند تحديث الصفحة."
    },
    {
      term: "Custom Domain & DNS",
      category: "النطاقات والأمان",
      syntax: "A Record (@) ➔ IP | CNAME (www) ➔ Host",
      description: "ربط اسم النطاق التجاري الخاص بالمشروع وضبط سجلات التوجيه السحابية."
    },
    {
      term: "Automatic HTTPS",
      category: "النطاقات والأمان",
      syntax: "Strict-Transport-Security (HSTS)",
      description: "تشفير الاتصال الرقمي وتفعيل قفل الأمان مجاناً عبر شهادات Let's Encrypt."
    },
    {
      term: "Preview Deployments",
      category: "تعاون الفرق",
      syntax: "رابط موقع حي لكل Pull Request",
      description: "معاينة حية للميزات الجديدة لاختبار التصميم وتجربة المستخدم قبل دمج الكود."
    },
    {
      term: "Instant Rollback",
      category: "التعافي الطارئ",
      syntax: "Promote old deployment to Production",
      description: "استرجاع النسخة السابقة المستقرة في 3 ثوانٍ بنقرة زر لحماية المستخدمين عند الطوارئ."
    },
    {
      term: "CI/CD Pipeline",
      category: "الأتمتة السحابية",
      syntax: ".github/workflows/production.yml",
      description: "خط أنابيب آلي يفحص ويختبر ويبني وينشر التعديلات فور دمجها في فرع main."
    },
    {
      term: "Multi-Stage Docker",
      category: "الحاويات المتقدمة",
      syntax: "FROM node AS build ... FROM nginx:alpine",
      description: "تقليص حجم صورة التطبيق من 1GB إلى 23MB عبر فصل مرحلة البناء عن التقديم."
    },
    {
      term: "Nginx try_files",
      category: "الحاويات المتقدمة",
      syntax: "try_files $uri $uri/ /index.html;",
      description: "أمر Nginx الحاسم لتقديم ملفات React وتوجيه مسارات SPA بسلاسة وثبات."
    },
    {
      term: "Docker Compose",
      category: "الحاويات المتقدمة",
      syntax: "docker compose up -d",
      description: "تنسيق وتشغيل منظومة الخدمات المتعددة (Frontend + Backend + DB) بملف واحد."
    },
    {
      term: "CDN Edge Caching",
      category: "الشبكات والأداء",
      syntax: "خدمة الملفات من أقرب خادم وسيط (PoP)",
      description: "تقليص زمن استجابة الموقع من 250ms إلى أقل من 15ms في كافة مدن العالم."
    },
    {
      term: "Immutable Caching",
      category: "الشبكات والأداء",
      syntax: "Cache-Control: public, max-age=31536000, immutable",
      description: "كاش أبدي لمدة سنة للأصول الثابتة ذات البصمات المشفرة لفتح فوري بصفر ميلي ثانية."
    }
  ],
  project: {
    id: "cloudops-forge-pro",
    title: "CloudOps Forge Pro - استوديو بناء وحزم ونشر تطبيقات React السحابية ومحاكي الـ CI/CD",
    level: "متقدم وخبير جداً",
    duration: "5 ساعات",
    description:
      "تطبيق استوديو تفاعلي حي وشامل لمحاكاة دورة حياة نشر وتجهيز تطبيقات React: محاكي حزم الإنتاج وحساب أحجام الـ Chunks وضغط Gzip، محاكي التبديل بين منصات الاستضافة (Vercel, Netlify, Cloudflare Pages, Docker)، محاكي مشكلة تحديث صفحات SPA واختبار حل قواعد الـ Rewrites، فاحص تسريب متغيرات البيئة السرية، ومولد ملفات Dockerfile متعددة المراحل التفاعلي.",
    features: [
      "محاكي البناء للإنتاج الحي وحساب توفير الحجم بفضل Tree Shaking وضغط Gzip/Brotli.",
      "فاحص أمان متغيرات البيئة مع كشف محاولات تسريب المفاتيح السرية sk_live في كود العميل.",
      "محاكي اختبار تحديث مسارات الـ SPA ومعاينة الفرق بين ظهور خطأ 404 وتطبيق قاعدة الـ Rewrite السحرية.",
      "استوديو توليد ملفات التكوين السحابية: vercel.json وnetlify.toml وnginx.conf وDockerfile.",
      "محاكي خط أنابيب GitHub Actions CI/CD التفاعلي مع تتبع حالات الفحص المتوازية وزمن الاستجابة."
    ],
    techStack: [
      "React 19 & State Management",
      "Cloud Architecture Simulation",
      "Dynamic Configuration Generators (Vercel, Netlify, Docker)",
      "Security Leak Detection Engine",
      "Tailwind CSS v4 Dark Theme"
    ],
    files: [
      "src/components/BuildSimulator.jsx",
      "src/components/SpaRewriteTester.jsx",
      "src/components/SecurityEnvInspector.jsx",
      "src/components/DockerStudio.jsx",
      "src/components/CiCdRunner.jsx",
      "src/App.jsx"
    ],
    code: `import React, { useState } from 'react';

// استوديو CloudOps Forge Pro التفاعلي لنشر وبناء تطبيقات React
export default function CloudOpsForgePro() {
  const [activeTab, setActiveTab] = useState('build');

  // بيانات محاكاة البناء
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildDone, setBuildDone] = useState(true);
  const [chunks] = useState([
    { name: 'dist/assets/index.js', original: '1,420 KB', gzip: '185 KB', role: 'Main Bundle' },
    { name: 'dist/assets/vendor-react.js', original: '140 KB', gzip: '42 KB', role: 'React Core' },
    { name: 'dist/assets/vendor-charts.js', original: '320 KB', gzip: '68 KB', role: 'Recharts Library' },
    { name: 'dist/assets/index.css', original: '95 KB', gzip: '18 KB', role: 'Tailwind CSS' }
  ]);

  // محاكي مسارات SPA
  const [simulatedPath, setSimulatedPath] = useState('/dashboard/analytics');
  const [hasRewriteRule, setHasRewriteRule] = useState(true);

  // محاكي أمان متغيرات البيئة
  const [testEnvKey, setTestEnvKey] = useState('VITE_STRIPE_PUBLIC_KEY');
  const [testEnvVal, setTestEnvVal] = useState('pk_live_51Msz...');

  // تشغيل محاكاة البناء
  const triggerBuild = () => {
    setIsBuilding(true);
    setBuildDone(false);
    setTimeout(() => {
      setIsBuilding(false);
      setBuildDone(true);
    }, 1200);
  };

  // فحص أمان المتغير
  const isSecretLeaking = testEnvKey.startsWith('VITE_') && (testEnvVal.includes('sk_') || testEnvVal.includes('secret') || testEnvKey.toLowerCase().includes('secret'));

  return (
    <div className="p-6 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans" dir="rtl">
      {/* الترويسة الرئيسية */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <h2 className="text-xl font-bold text-white tracking-wide">CloudOps Forge Pro</h2>
            <span className="bg-emerald-950 text-emerald-300 border border-emerald-700/50 text-xs px-2.5 py-0.5 rounded-full font-mono">Build & Deploy Hub</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">محاكاة واختبار البناء للإنتاج، توجيه مسارات SPA، أمان الأسرار، وتكوين Docker وCI/CD.</p>
        </div>

        {/* أزرار التبويبات */}
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-medium">
          <button
            onClick={() => setActiveTab('build')}
            className={'px-3 py-1.5 rounded-lg transition ' + (activeTab === 'build' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white')}
          >
            📦 البناء والحزم
          </button>
          <button
            onClick={() => setActiveTab('spa')}
            className={'px-3 py-1.5 rounded-lg transition ' + (activeTab === 'spa' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white')}
          >
            🔀 مسارات SPA
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={'px-3 py-1.5 rounded-lg transition ' + (activeTab === 'security' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white')}
          >
            🛡️ أمان المتغيرات
          </button>
          <button
            onClick={() => setActiveTab('docker')}
            className={'px-3 py-1.5 rounded-lg transition ' + (activeTab === 'docker' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white')}
          >
            🐳 استوديو Docker
          </button>
        </div>
      </div>

      {/* تبويب 1: محاكي البناء للإنتاج */}
      {activeTab === 'build' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div>
              <h3 className="font-bold text-white text-sm">محاكي إنتاج حزمة Vite Production Build</h3>
              <p className="text-xs text-slate-400">تطبيق Tree Shaking وتجزئة الأكواد وضغط Gzip</p>
            </div>
            <button
              onClick={triggerBuild}
              disabled={isBuilding}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow"
            >
              {isBuilding ? 'جارٍ البناء والضغط...' : '⚡ تشغيل npm run build'}
            </button>
          </div>

          {isBuilding && (
            <div className="p-8 text-center bg-slate-900/40 border border-slate-800 rounded-2xl space-y-3">
              <div className="w-8 h-8 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mx-auto"></div>
              <p className="text-xs font-mono text-emerald-300">جارٍ تحليل الشجرة وتطبيق التجزئة والضغط...</p>
            </div>
          )}

          {buildDone && !isBuilding && (
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div className="text-xs font-bold text-white flex justify-between">
                <span>مخرجات مجلد dist/ الناتجة:</span>
                <span className="text-emerald-400 font-mono">إجمالي الحجم المضغوط: 313 KB (توفير 84%) 🚀</span>
              </div>
              <div className="space-y-2">
                {chunks.map((c, i) => (
                  <div key={i} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-mono text-emerald-400 font-bold">{c.name}</span>
                      <span className="text-[10px] text-slate-500 mr-2">({c.role})</span>
                    </div>
                    <div className="flex gap-4 font-mono text-right">
                      <span className="text-slate-500 line-through">{c.original}</span>
                      <span className="text-emerald-300 font-bold">{c.gzip} (Gzip)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* تبويب 2: محاكي مسارات SPA و 404 Rewrite */}
      {activeTab === 'spa' && (
        <div className="space-y-6">
          <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-white text-sm">محاكي اختبار تحديث المسارات (SPA Reload Simulator)</h3>
                <p className="text-xs text-slate-400">جرب تحديث المتصفح على مسار عميق مع وبدون قاعدة الـ Rewrite السحرية</p>
              </div>
              <button
                onClick={() => setHasRewriteRule(!hasRewriteRule)}
                className={'px-3 py-1.5 rounded-xl text-xs font-bold transition ' + 
                  (hasRewriteRule ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white')}
              >
                قاعدة التحويل (/* ➔ index.html): {hasRewriteRule ? 'مفعلة ✅' : 'معطلة ❌'}
              </button>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={simulatedPath}
                onChange={e => setSimulatedPath(e.target.value)}
                placeholder="/dashboard/orders/45"
                className="flex-1 bg-slate-950 border border-slate-800 p-2.5 rounded-xl text-xs text-white font-mono"
              />
              <span className="px-4 py-2 bg-slate-800 rounded-xl text-xs font-mono text-slate-300 flex items-center">
                محاكاة تحديث الصفحة (F5)
              </span>
            </div>

            {/* نتيجة الاستجابة من السيرفر */}
            <div className={'p-6 rounded-2xl border text-center space-y-2 ' + 
              (hasRewriteRule ? 'bg-emerald-950/20 border-emerald-600/40 text-emerald-200' : 'bg-rose-950/30 border-rose-600/50 text-rose-200')}>
              <div className="text-3xl">{hasRewriteRule ? '🎉' : '💥'}</div>
              <h4 className="font-bold text-sm">
                {hasRewriteRule ? 'استجابة ناجحة (HTTP 200 Rewrite OK)' : 'خطأ فادح: 404 Not Found!'}
              </h4>
              <p className="text-xs max-w-lg mx-auto leading-relaxed">
                {hasRewriteRule
                  ? 'أرجع السيرفر ملف index.html برمز 200، وتولى React Router قراءة المسار لعرض مكون ' + simulatedPath + ' بسلاسة تامة!'
                  : 'بحث السيرفر الفيزيائي عن ملف حقيقي بالاسم ' + simulatedPath + '.html ولم يجده فأرسل خطأ 404 للمستخدم!'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* تبويب 3: أمان المتغيرات وكشف التسريبات */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="font-bold text-white text-sm">فاحص كشف تسريب المفاتيح السرية في كود العميل</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">اسم المتغير في .env:</label>
                <input
                  type="text"
                  value={testEnvKey}
                  onChange={e => setTestEnvKey(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-white font-mono"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">قيمة المفتاح التجريبي:</label>
                <input
                  type="text"
                  value={testEnvVal}
                  onChange={e => setTestEnvVal(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-white font-mono"
                />
              </div>
            </div>

            {/* بطاقة التقييم الأمني */}
            <div className={'p-4 rounded-xl border text-xs flex items-center justify-between ' + 
              (isSecretLeaking ? 'bg-rose-950/40 border-rose-600/60 text-rose-200' : 'bg-emerald-950/30 border-emerald-600/50 text-emerald-200')}>
              <div className="space-y-1">
                <div className="font-bold flex items-center gap-2">
                  <span>{isSecretLeaking ? '🚨 كارثة أمنية محققة!' : '✅ آمن للاستخدام في العميل'}</span>
                </div>
                <p className="text-[11px] opacity-90">
                  {isSecretLeaking
                    ? 'هذا المفتاح يحمل بادئة VITE_ وقيمة سرية؛ سيتم تضمينه كنص صريح مكشوف لأي شخص يفحص المتصفح!'
                    : 'هذا المفتاح مخصص للاستخدام العام للعميل ولا يمثل خطراً أمنياً.'}
                </p>
              </div>
              <span className={'px-3 py-1 rounded font-mono font-bold ' + 
                (isSecretLeaking ? 'bg-rose-600 text-white' : 'bg-emerald-600 text-white')}>
                {isSecretLeaking ? 'تسريب مكشوف ❌' : 'مصرح به ✔️'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* تبويب 4: استوديو Docker و Nginx */}
      {activeTab === 'docker' && (
        <div className="space-y-6">
          <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white text-sm">Dockerfile القياسي متعدد المراحل (Multi-Stage Build)</h3>
              <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-700/50 text-[10px] font-mono">حجم نهائي: 23MB فقط</span>
            </div>
            <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto text-left" dir="ltr">
{\`# Stage 1: Build Stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Runtime Stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]\`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
`
  },
  infographic: {
    title: "خارطة بناء ونشر تطبيقات React السحابية المتكاملة",
    subtitle: "المسار الهندسي الشامل من إنتاج الحزم والتحكم بالبيئات إلى خطوط الـ CI/CD والحاويات والنشر السحابي",
    nodes: [
      {
        id: "build-opt",
        title: "1. البناء والتحسين",
        description: "Tree Shaking وتجزئة الحزم وضغط Gzip/Brotli وحظر خرائط المصدر في الإنتاج.",
        badge: "Production Build"
      },
      {
        id: "env-sec",
        title: "2. أمان المتغيرات وعناوين الـ API",
        description: "حظر الأسرار في كود العميل وضبط وكيل التطوير ومسارات الـ API المرنة.",
        badge: "Env & Security"
      },
      {
        id: "hosting-spa",
        title: "3. الاستضافة وتوجيه SPA",
        description: "النشر على Vercel وNetlify وقواعد Rewrites لمنع أخطاء 404 وربط الدومين وHTTPS.",
        badge: "Hosting & Rewrites"
      },
      {
        id: "cicd-auto",
        title: "4. الأتمتة عبر CI/CD",
        description: "فحص ESLint وTypeScript واختبارات Vitest وبناء وتخزين الأصول والنشر الآلي.",
        badge: "CI / CD Automation"
      },
      {
        id: "docker-edge",
        title: "5. حاويات Docker والـ CDN",
        description: "بناء Multi-Stage فائق الخفة بـ Nginx والتوزيع الجغرافي السريع عبر الـ CDN.",
        badge: "Docker & Edge"
      }
    ]
  }
};

export default section28Meta;

