// src/data/sections/section26/section26Meta.js
// بيانات وملخص القسم 26: SEO وتطبيقات الويب التقدمية (SEO & PWA)

export const section26Meta = {
  summary: [
    "جوهر الـ SEO في React: محركات البحث الحديثة تستطيع قراءة جافاسكريبت، ولكن تسليم كود HTML مهيأ مع وسوم <head> دقيقة يرفع سرعة الفهرسة ويوفر ميزانية الزحف Crawl Budget.",
    "العناوين والأوصاف الدقيقة: كل مسار فريد يحتاج وسم <title> فريد بطول 50-60 حرفاً و<meta name='description'> بطول 140-160 حرفاً يتضمن دعوة لاتخاذ إجراء CTA لتحقيق أعلى معدل نقر CTR.",
    "منع تشتيت الترتيب بالـ Canonical: استخدام <link rel='canonical' href='...'> يضمن حماية موقعك من عقوبات المحتوى المكرر الناتج عن معلمات التتبع وفرز المنتجات.",
    "قوة النتائج الغنية عبر JSON-LD: تضمين البيانات المنظمة وفق Schema.org يحجز مساحات ضخمة في صفحة نتائج بحث Google بنجوم التقييم وقوائم الأسئلة الشائعة FAQ.",
    "الركائز الثلاث للـ PWA: التطبيق التقدمي يجمع بين القدرة (العمل دون اتصال)، والموثوقية (سرعة استجابة فائقة)، والقابلية للتثبيت في نافذة مستقلة Standalone.",
    "هندسة الـ Service Worker: يعمل كخادم وكيل خلفي على خيط مستقل يعترض طلبات الشبكة، ويدير استراتيجيات الكاش المتنوعة بين Cache-First وNetwork-First وStale-While-Revalidate.",
    "تجربة انعدام الاتصال الأنيقة: اعتماد معمارية App Shell لتخزين واجهة التطبيق مسبقاً، وتوفير صفحة offline.html مخصصة تحافظ على ثقة المستخدم أثناء انقطاع الإنترنت.",
    "إدارة التحديثات الذكية والتثبيت المدار: اعتراض حدث beforeinstallprompt لعرض زر تثبيت مخصص في الوقت الملائم، واستخدام skipWaiting() مع إشعار ودي للمستخدم عند توفر تحديث جديد."
  ],
  cheatSheet: [
    {
      term: "<title>",
      category: "وسوم SEO الأساسية",
      syntax: "<title>عنوان الصفحة الفريد | اسم المنصة</title>",
      description: "العنوان الرئيسي الذي يظهر في تبويب المتصفح والسطر الأول في نتائج محركات البحث."
    },
    {
      term: "meta description",
      category: "وسوم SEO الأساسية",
      syntax: "<meta name='description' content='ملخص المحتوى...' />",
      description: "المقتطف التفسيري الذي يظهر أسفل العنوان في صفحة نتائج البحث لرفع نسبة النقر."
    },
    {
      term: "rel='canonical'",
      category: "وسوم SEO الأساسية",
      syntax: "<link rel='canonical' href='https://site.com/clean-url' />",
      description: "تحديد الرابط الأصلي المعتمد للصفحة لمنع مشكلة المحتوى المكرر وتشتت الترتيب."
    },
    {
      term: "Open Graph (og:title)",
      category: "مشاركات التواصل",
      syntax: "<meta property='og:title' content='العنوان الاجتماعي' />",
      description: "تحديد العنوان الذي يظهر في بطاقات المعاينة على فيسبوك ولينكدإن وواتساب."
    },
    {
      term: "Open Graph (og:image)",
      category: "مشاركات التواصل",
      syntax: "<meta property='og:image' content='https://site.com/og.jpg' />",
      description: "صورة بطاقة المعاينة الاجتماعية بأبعاد 1200x630 بكسل بنسبة عرض 1.91:1."
    },
    {
      term: "Twitter Card",
      category: "مشاركات التواصل",
      syntax: "<meta name='twitter:card' content='summary_large_image' />",
      description: "توجيه منصة إكس (تويتر) لعرض الصورة بالعرض الكامل أسفل التغريدة."
    },
    {
      term: "JSON-LD",
      category: "البيانات المنظمة",
      syntax: "<script type='application/ld+json'>{ '@context': 'https://schema.org', ... }</script>",
      description: "بيانات Schema المنظمة لتمكين ظهور النتائج الغنية كالنجوم وقوائم FAQ في Google."
    },
    {
      term: "robots.txt",
      category: "إدارة الفهرسة",
      syntax: "User-agent: *\nDisallow: /admin/\nSitemap: https://site.com/sitemap.xml",
      description: "ملف نصي يوجه روبوتات البحث للمسارات المسموح بالزحف إليها والمحظورة."
    },
    {
      term: "sitemap.xml",
      category: "إدارة الفهرسة",
      syntax: "<urlset><url><loc>https://site.com/</loc></url></urlset>",
      description: "خريطة الموقع الرقمية التي ترشد العناكب لكافة الصفحات وتواريخ تعديلها."
    },
    {
      term: "manifest.json",
      category: "تكوين PWA",
      syntax: "{ 'name': 'App', 'short_name': 'A', 'display': 'standalone' }",
      description: "ملف تعريف التطبيق لنظام التشغيل لتحديد ألوانه وأيقوناته ونمط عرضه المستقل."
    },
    {
      term: "Maskable Icon",
      category: "تكوين PWA",
      syntax: "{ 'src': 'icon.png', 'purpose': 'maskable any', 'sizes': '512x512' }",
      description: "أيقونة تكيفية تتناسب مع كافة القوالب (دائرية، مربعة) مع منطقة أمان بنسبة 80%."
    },
    {
      term: "serviceWorker.register",
      category: "تشغيل PWA",
      syntax: "navigator.serviceWorker.register('/sw.js')",
      description: "تسجيل ملف العامل في المتصفح لبدء اعتراض الطلبات وتفعيل التخزين المؤقت."
    },
    {
      term: "Cache First",
      category: "استراتيجيات الكاش",
      syntax: "caches.match(req) || fetch(req)",
      description: "البحث في الكاش أولاً ثم اللجوء للشبكة؛ استراتيجية مثالية للصور والخطوط وملفات CSS."
    },
    {
      term: "Network First",
      category: "استراتيجيات الكاش",
      syntax: "fetch(req).catch(() => caches.match(req))",
      description: "محاولة جلب البيانات الحديثة من الشبكة أولاً مع الاحتفاظ بالكاش كخطة بديلة عند الانقطاع."
    },
    {
      term: "Stale-While-Revalidate",
      category: "استراتيجيات الكاش",
      syntax: "cached || fetchAndCache(req)",
      description: "عرض النسخة المخزنة فورياً وتحديثها بالتوازي في الخلفية؛ التوازن الأمثل للمقالات."
    },
    {
      term: "navigator.onLine",
      category: "حالة الشبكة",
      syntax: "const isOnline = navigator.onLine;",
      description: "خاصية لمعرفة ما إذا كان المتصفح متصلاً بالشبكة حالياً للاستماع لأحداث online/offline."
    },
    {
      term: "beforeinstallprompt",
      category: "تثبيت التطبيق",
      syntax: "window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); ... })",
      description: "حدث اعتراض نافذة التثبيت التلقائية للاحتفاظ بها وعرض زر تثبيت مخصص في الوقت المناسب."
    },
    {
      term: "prompt()",
      category: "تثبيت التطبيق",
      syntax: "deferredPrompt.prompt(); const { outcome } = await deferredPrompt.userChoice;",
      description: "فتح النافذة الرسمية لنظام التشغيل لتثبيت التطبيق بعد نقر المستخدم على زر التثبيت."
    },
    {
      term: "skipWaiting()",
      category: "تحديثات PWA",
      syntax: "self.skipWaiting();",
      description: "تخطي طابور الانتظار وتفعيل الإصدار الجديد من الـ Service Worker فورياً."
    },
    {
      term: "clients.claim()",
      category: "تحديثات PWA",
      syntax: "self.clients.claim();",
      description: "تمكين الـ Service Worker الجديد من السيطرة الفورية على كافة التبويبات المفتوحة."
    },
    {
      term: "Google Workbox",
      category: "أدوات متقدمة",
      syntax: "import { precacheAndRoute } from 'workbox-precaching';",
      description: "مكتبة Google الرسمية لأتمتة التخزين المسبق وإدارة استراتيجيات الكاش بأعلى موثوقية."
    },
    {
      term: "display: standalone",
      category: "تكوين PWA",
      syntax: "'display': 'standalone'",
      description: "تشغيل التطبيق في نافذة مستقلة خاصة به بدون شريط عنوان المتصفح وأزرار التصفح."
    }
  ],
  project: {
    id: "omnipulse-seo-pwa-studio",
    title: "OmniPulse SEO & PWA Studio - المنصة الذكية لمحاكاة محركات البحث وتطبيقات الويب التقدمية",
    level: "متقدم وخبير",
    duration: "4 ساعات",
    description:
      "تطبيق استوديو تفاعلي حي ومتكامل لمحاكاة واختبار تقنيات الـ SEO الحديثة والـ PWA في بيئة React: محرر مباشر لوسوم <title> وMeta وOpen Graph مع معاينة فورية لكيفية ظهورها في Google وTwitter، ومحاكي تفاعلي لحالة انقطاع الإنترنت (Offline Mode Simulator)، ومحاكي لحدث التثبيت beforeinstallprompt واختبار استراتيجيات التخزين المؤقت للـ Service Worker.",
    features: [
      "محرر وفاحص وسوم SEO متقدم مع قياس عدد الأحرف ومؤشر جودة العنوان والوصف.",
      "محاكي معاينة بطاقات التواصل الاجتماعي الحية (Facebook Feed & Twitter Large Card).",
      "مولد كود البيانات المنظمة JSON-LD وفق معيار Schema.org مع فحص صحة التركيب.",
      "محاكي انقطاع الإنترنت (Offline Simulator) مع تجربة حفظ الملاحظات محلياً وعرض شاشة Fallback مخصصة.",
      "لوحة تجربة تثبيت PWA تفاعلية مع اعتراض حدث beforeinstallprompt وتتبع حالة Standalone."
    ],
    techStack: [
      "React 19 Hooks & State",
      "Web App Manifest API",
      "Service Worker & Cache Simulation",
      "JSON-LD Schema Generator",
      "Dynamic Open Graph Inspector",
      "Tailwind CSS v4 Dark Theme"
    ],
    files: [
      "src/components/SeoEditor.jsx",
      "src/components/SocialPreview.jsx",
      "src/components/JsonLdGenerator.jsx",
      "src/components/PwaInstallSimulator.jsx",
      "src/components/OfflineExperience.jsx",
      "src/App.jsx"
    ],
    code: `import React, { useState, useEffect } from 'react';

// تطبيق OmniPulse SEO & PWA Studio التفاعلي الحي
export default function OmniPulseSeoPwaStudio() {
  // التبويب النشط: seo أو social أو jsonld أو pwa
  const [activeTab, setActiveTab] = useState('seo');

  // بيانات وسوم الـ SEO
  const [seoData, setSeoData] = useState({
    title: 'تعلم React 19 الشاملة من الصفر إلى الاحتراف',
    description: 'الدليل العملي الأقوى باللغة العربية لتعلم React 19، وServer Components، وNext.js مع بناء مشاريع واقعية وسريعة جداً.',
    canonical: 'https://example.com/courses/react19',
    ogImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630&fit=crop'
  });

  // حالة محاكاة شبكة PWA
  const [isSimulatedOnline, setIsSimulatedOnline] = useState(true);
  const [cachedNotes, setCachedNotes] = useState([
    { id: '1', text: 'تطبيق استراتيجية Stale-While-Revalidate لصفحات المقالات.', time: 'منذ 10 دقائق' }
  ]);
  const [newNote, setNewNote] = useState('');
  const [pwaInstalled, setPwaInstalled] = useState(false);
  const [showInstallBanner, setShowInstallBanner] = useState(true);

  // حساب جودة طول العنوان والوصف
  const titleLen = seoData.title.length;
  const descLen = seoData.description.length;
  const isTitleGood = titleLen >= 40 && titleLen <= 60;
  const isDescGood = descLen >= 120 && descLen <= 160;

  // حفظ ملاحظة مع دعم العمل دون إنترنت
  const handleSaveNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    const noteObj = {
      id: String(Date.now()),
      text: newNote,
      time: isSimulatedOnline ? 'مزامنة سحابية الآن' : 'محفوظ محلياً (Offline)'
    };
    setCachedNotes(prev => [noteObj, ...prev]);
    setNewNote('');
  };

  return (
    <div className="p-6 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans" dir="rtl">
      {/* الترويسة الرئيسية */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <h2 className="text-xl font-bold text-white tracking-wide">OmniPulse SEO & PWA Studio</h2>
            <span className="bg-emerald-950 text-emerald-300 border border-emerald-700/50 text-xs px-2.5 py-0.5 rounded-full font-mono">React 19 Ready</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">محاكاة واختبار منظومة تحسين محركات البحث، بطاقات التواصل الاجتماعي، والعمل دون اتصال وتثبيت PWA.</p>
        </div>

        {/* أزرار التبويبات */}
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-medium">
          <button
            onClick={() => setActiveTab('seo')}
            className={'px-3 py-1.5 rounded-lg transition ' + (activeTab === 'seo' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white')}
          >
            🔍 فاحص SEO
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={'px-3 py-1.5 rounded-lg transition ' + (activeTab === 'social' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white')}
          >
            📱 بطاقات التواصل
          </button>
          <button
            onClick={() => setActiveTab('pwa')}
            className={'px-3 py-1.5 rounded-lg transition ' + (activeTab === 'pwa' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white')}
          >
            ⚡ استوديو PWA
          </button>
        </div>
      </div>

      {/* محتوى تبويب SEO */}
      {activeTab === 'seo' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* مدخلات التحكم */}
          <div className="space-y-4 bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-xs">
            <h3 className="text-sm font-bold text-white mb-2">إعدادات وسوم الرأس</h3>
            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>عنوان الصفحة &lt;title&gt;:</span>
                <span className={isTitleGood ? 'text-emerald-400 font-bold' : 'text-amber-400'}>{titleLen} / 60 حرفاً</span>
              </div>
              <input
                type="text"
                value={seoData.title}
                onChange={e => setSeoData({ ...seoData, title: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-white font-medium focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>الوصف &lt;meta name="description"&gt;:</span>
                <span className={isDescGood ? 'text-emerald-400 font-bold' : 'text-amber-400'}>{descLen} / 160 حرفاً</span>
              </div>
              <textarea
                value={seoData.description}
                onChange={e => setSeoData({ ...seoData, description: e.target.value })}
                rows={3}
                className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-white text-xs leading-relaxed focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1">الرابط المعياري &lt;link rel="canonical"&gt;:</label>
              <input
                type="text"
                value={seoData.canonical}
                onChange={e => setSeoData({ ...seoData, canonical: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-slate-300 font-mono text-[11px] focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* محاكاة الظهور في صفحة بحث Google */}
          <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white">معاينة نتيجة البحث الحية (Google SERP)</h3>
            <div className="p-4 bg-white rounded-xl text-slate-900 font-sans shadow text-right">
              <div className="flex items-center gap-2 text-xs text-slate-600 mb-1">
                <span className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] text-white font-bold">R</span>
                <span className="font-mono text-[11px] text-slate-500 truncate" dir="ltr">{seoData.canonical}</span>
              </div>
              <h4 className="text-base text-blue-700 hover:underline font-medium cursor-pointer leading-snug">
                {seoData.title || 'عنوان الصفحة المخصص'}
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
                {seoData.description || 'أدخل وصفاً تعريفي يوضح للقارئ القيمة المضافة لزيارة هذا الموقع...'}
              </p>
            </div>

            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span>حالة طول العنوان:</span>
                <span className={isTitleGood ? 'text-emerald-400' : 'text-amber-400'}>
                  {isTitleGood ? '✅ مثالي (بين 40 و60 حرفاً)' : '⚠️ غير مثالي'}
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>حالة طول الوصف:</span>
                <span className={isDescGood ? 'text-emerald-400' : 'text-amber-400'}>
                  {isDescGood ? '✅ مثالي (بين 120 و160 حرفاً)' : '⚠️ يحتاج تعديل'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* محتوى تبويب بطاقات التواصل الاجتماعي */}
      {activeTab === 'social' && (
        <div className="space-y-6">
          <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="text-xs font-bold text-slate-400 p-3 border-b border-slate-800 flex justify-between">
              <span>معاينة بطاقة Open Graph & Twitter Summary Large Card</span>
              <span className="text-emerald-400 font-mono">1200 x 630 px</span>
            </div>
            <div className="h-56 bg-slate-800 overflow-hidden relative">
              <img
                src={seoData.ogImage}
                alt="OG Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur text-[10px] text-white px-2 py-0.5 rounded font-mono" dir="ltr">
                example.com
              </div>
            </div>
            <div className="p-4 bg-slate-950 border-t border-slate-800">
              <h4 className="text-sm font-bold text-white">{seoData.title}</h4>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">{seoData.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* محتوى تبويب PWA */}
      {activeTab === 'pwa' && (
        <div className="space-y-6">
          {/* شريط محاكاة حالة الشبكة والتثبيت */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-900 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3">
              <span className={'w-3 h-3 rounded-full ' + (isSimulatedOnline ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500')}></span>
              <span className="text-sm font-bold text-white">
                حالة الاتصال: {isSimulatedOnline ? 'متصل بالإنترنت (Online)' : 'منقطع كلياً (Offline Mode)'}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsSimulatedOnline(!isSimulatedOnline)}
                className={'px-3 py-1.5 rounded-lg text-xs font-bold transition ' + 
                  (isSimulatedOnline ? 'bg-amber-600/20 text-amber-300 border border-amber-500/40 hover:bg-amber-600/30' : 'bg-emerald-600 text-white')}
              >
                {isSimulatedOnline ? '🔌 محاكاة انقطاع الإنترنت' : '🌐 إعادة الاتصال بالإنترنت'}
              </button>
            </div>
          </div>

          {/* محاكاة تثبيت التطبيق المستقل */}
          {showInstallBanner && !pwaInstalled && (
            <div className="p-4 bg-emerald-950/40 border border-emerald-700/50 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl">📱</div>
                <div>
                  <h4 className="text-xs font-bold text-emerald-300">تثبيت تطبيق OmniPulse على هاتفك</h4>
                  <p className="text-[11px] text-slate-400">تصفح دون إنترنت، واجهة مستقلة سريعة بدون شريط المتصفح.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setPwaInstalled(true)}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition"
                >
                  تثبيت الآن
                </button>
                <button
                  onClick={() => setShowInstallBanner(false)}
                  className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-lg text-xs"
                >
                  إغلاق
                </button>
              </div>
            </div>
          )}

          {pwaInstalled && (
            <div className="p-3 bg-blue-950/40 border border-blue-700/40 rounded-xl text-xs text-blue-300 flex items-center gap-2">
              <span>🎉</span>
              <span>التطبيق مثبت ويعمل حالياً في نمط العرض المستقل (display-mode: standalone)!</span>
            </div>
          )}

          {/* نموذج حفظ الملاحظات أثناء وضع عدم الاتصال */}
          <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white">تجربة تدوين الملاحظات التفاعلية (App Shell & Offline Sync)</h3>
            <form onSubmit={handleSaveNote} className="flex gap-2">
              <input
                type="text"
                value={newNote}
                onChange={e => setNewNote(e.target.value)}
                placeholder={isSimulatedOnline ? 'اكتب ملاحظتك وسنحفظها في السحابة...' : 'اكتب ملاحظتك وسيتم تخزينها محلياً دون اتصال...'}
                className="flex-1 bg-slate-950 border border-slate-800 p-2.5 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition"
              >
                حفظ
              </button>
            </form>

            <div className="space-y-2 pt-2">
              <div className="text-xs text-slate-400 font-bold">الملاحظات المخزنة في الكاش المحلي (Cache API):</div>
              {cachedNotes.map(n => (
                <div key={n.id} className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                  <span className="text-slate-200">{n.text}</span>
                  <span className={'text-[10px] px-2 py-0.5 rounded font-mono ' + 
                    (n.time.includes('Offline') ? 'bg-amber-950 text-amber-300 border border-amber-700/40' : 'bg-emerald-950 text-emerald-300 border border-emerald-700/40')}>
                    {n.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
`
  },
  infographic: {
    title: "خارطة منظومة SEO وتطبيقات الويب التقدمية PWA في React",
    subtitle: "التنسيق الهندسي المتكامل لتحقيق الفهرسة الفورية وتوفير تجربة التطبيقات الأصلية دون اتصال",
    nodes: [
      {
        id: "seo-tags",
        title: "1. تحسين وسوم محركات البحث",
        description: "Title وMeta Description فريدان + وسوم Canonical لمنع تكرار المحتوى.",
        badge: "On-Page SEO"
      },
      {
        id: "social-meta",
        title: "2. بطاقات التواصل الاجتماعي",
        description: "Open Graph وTwitter Cards وصور 1200x630 لمشاركات جذابة وعالية النقرات.",
        badge: "Social Graph"
      },
      {
        id: "rich-data",
        title: "3. البيانات المنظمة JSON-LD",
        description: "Schema.org لتمكين النجوم وقوائم الأسئلة الشائعة ومسار التنقل في Google.",
        badge: "Rich Snippets"
      },
      {
        id: "service-worker",
        title: "4. محرك الـ Service Worker",
        description: "خادم وكيل يعترض الطلبات ويطبق استراتيجيات Stale-While-Revalidate وCache-First.",
        badge: "Service Worker"
      },
      {
        id: "app-pwa",
        title: "5. القابلية للتثبيت والعمل دون إنترنت",
        description: "Web App Manifest وأيقونات تكيفية Maskable وشاشات Offline مخصصة.",
        badge: "Native-like PWA"
      }
    ]
  }
};

export default section26Meta;

