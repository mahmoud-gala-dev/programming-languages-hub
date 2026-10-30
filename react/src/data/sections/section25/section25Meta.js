// src/data/sections/section25/section25Meta.js
// بيانات وملخص القسم 25: تعلم Next.js مع React (Next.js App Router Masterclass)

export const section25Meta = {
  summary: [
    "معمارية App Router الافتراضية: كل المكونات داخل مجلد app هي Server Components افتراضياً لضمان أصغر حزمة عميل وأعلى أداء، مع استدعاء 'use client' حصراً عند الحاجة للتفاعل والحالة.",
    "التوجيه القائم على الملفات المنظمة: الاصطلاحات القياسية page.jsx, layout.jsx, template.jsx, loading.jsx, error.jsx, not-found.jsx تحدد هيكل المسارات ومعالجة الأخطاء والتنقل الانسيابي بدقة.",
    "تقسيم المسارات المتقدم: استخدام Route Groups للأقسام المنطقية دون التأثير على الـ URL، واستخدام Dynamic Routes [id] وCatch-all [...slug] وParallel Routes (@slot) وIntercepting Routes ((.)) لتجارب مستخدم فائقة الذكاء.",
    "جلب البيانات الموسع (Extended Fetch): تعتمد Next.js على fetch الموسع مع استراتيجيات التخزين المؤقت Cache وRevalidation (Time-based عبر next: { revalidate } أو On-demand عبر revalidateTag).",
    "العمليات الخادمة المباشرة (Server Actions): كتابة وظائف المعالجة والتعديل عبر 'use server' التي تُستدعى مباشرة من النماذج والأزرار دون الحاجة لبناء طبقة API مخصصة.",
    "التحديثات المتفائلة والتفاعل الحصيف: دمج useActionState لإدارة حالة العمليات الخادمة وuseOptimistic لعكس التغييرات فورياً في الواجهة قبل وصول استجابة الخادم لصفر زمن استجابة محسوس.",
    "تحسين الموارد التلقائي: استغلال next/image للتحجيم التلقائي وصيغ WebP/AVIF، وnext/font لتحميل خطوط Google محلياً بدون وميض، وMetadata API لضبط وسوم SEO ديناميكياً بدقة متناهية.",
    "النشر والبيئات الهجينة: القدرة على توجيه المسارات إلى Node.js Runtime للمعالجات الثقيلة أو Edge Runtime للمواقع العالمية فائقة القرب من المستخدمين عبر شبكات CDN."
  ],
  cheatSheet: [
    {
      term: "page.jsx",
      category: "هيكل الملفات",
      syntax: "export default function Page() { return <h1>Home</h1>; }",
      description: "المكون الفريد الذي يجعل المسار متاحاً للجمهور ويعرض واجهة الصفحة."
    },
    {
      term: "layout.jsx",
      category: "هيكل الملفات",
      syntax: "export default function Layout({ children }) { return <div>{children}</div>; }",
      description: "الهيكل المشترك بين الصفحات والمسارات الفرعية؛ يحافظ على حالته ولا يعاد تركيبه أثناء التنقل."
    },
    {
      term: "template.jsx",
      category: "هيكل الملفات",
      syntax: "export default function Template({ children }) { return <div>{children}</div>; }",
      description: "يشبه layout تماماً لكنه يُنشئ نسخة جديدة تماماً ويُعاد تركيبه مع كل انتقال مسار."
    },
    {
      term: "loading.jsx",
      category: "هيكل الملفات",
      syntax: "export default function Loading() { return <Skeleton />; }",
      description: "واجهة التحميل الفورية التلقائية المغلفة داخل React Suspense للمسار الحالي ومساراته الفرعية."
    },
    {
      term: "error.jsx",
      category: "هيكل الملفات",
      syntax: "'use client'; export default function Error({ error, reset }) { ... }",
      description: "حدود أخطاء React Error Boundary لمعالجة الاستثناءات مع توفير زر reset للمحاولة مجدداً."
    },
    {
      term: "not-found.jsx",
      category: "هيكل الملفات",
      syntax: "export default function NotFound() { return <p>404</p>; }",
      description: "واجهة صفحة 404 المخصصة التي يتم استدعاؤها تلقائياً أو عبر استدعاء notFound()."
    },
    {
      term: "route.js",
      category: "معالجات المسارات",
      syntax: "export async function GET(request) { return Response.json(data); }",
      description: "معالج مسار نقطة نهاية برمجية Route Handler لتقديم استجابات REST JSON بديلة عن pages/api."
    },
    {
      term: "'use client'",
      category: "حدود المكونات",
      syntax: "'use client';\nimport { useState } from 'react';",
      description: "إعلان يفصل بين كود الخادم وكود المتصفح؛ مطلوب لاستخدام Hooks والتفاعل والـ Event Listeners."
    },
    {
      term: "'use server'",
      category: "العمليات الخادمة",
      syntax: "'use server';\nasync function mutateDb(formData) { ... }",
      description: "توجيه يعلن أن الدالة تنفذ حصراً على الخادم ويمكن استدعاؤها من العميل كـ RPC."
    },
    {
      term: "revalidatePath",
      category: "إدارة الكاش",
      syntax: "revalidatePath('/dashboard/articles')",
      description: "إلغاء التخزين المؤقت لصفحة معينة وإعادة بنائها فورياً في الخادم عند الطلب التالي."
    },
    {
      term: "revalidateTag",
      category: "إدارة الكاش",
      syntax: "revalidateTag('user-posts')",
      description: "إلغاء كاش كافة الاستدعاءات المرتبطة بوسم معين On-Demand عبر الـ Cache Tags."
    },
    {
      term: "generateMetadata",
      category: "محركات البحث SEO",
      syntax: "export async function generateMetadata({ params }) { return { title: ... }; }",
      description: "توليد وسوم العنوان والوصف وOpen Graph ديناميكياً بناءً على بيانات المعاملات الخادمة."
    },
    {
      term: "generateStaticParams",
      category: "التوليد الثابت",
      syntax: "export async function generateStaticParams() { return [{ id: '1' }]; }",
      description: "توليد مسبق للمسارات الديناميكية أثناء وقت البناء SSG لسرعة خارقة وتكلفة سيرفر صفرية."
    },
    {
      term: "<Image />",
      category: "تحسين الموارد",
      syntax: "<Image src='/logo.png' alt='Logo' width={500} height={300} priority />",
      description: "مكون الصورة المحسن ذاتياً من Next.js: ضغط WebP، منع وميض CLS، وتحميل كسول ذكي."
    },
    {
      term: "next/font",
      category: "تحسين الموارد",
      syntax: "import { Cairo } from 'next/font/google'; const cairo = Cairo({ subsets: ['arabic'] });",
      description: "استضافة خطوط Google محلياً وقت البناء مع صفر طلبات خارجية لشبكات الخطوط وانعدام الوميض."
    },
    {
      term: "<Link />",
      category: "التنقل السريع",
      syntax: "<Link href='/profile' prefetch={true}>الملف الشخصي</Link>",
      description: "بديل وسام <a> فائق الذكاء، يجلب كود المسار مسبقاً في الخلفية (Prefetching) لتنقل فوري."
    },
    {
      term: "useRouter",
      category: "خطافات العميل",
      syntax: "const router = useRouter(); router.push('/dashboard');",
      description: "خطاف التنقل البرمجي من next/navigation يعمل فقط داخل مكونات العميل."
    },
    {
      term: "usePathname",
      category: "خطافات العميل",
      syntax: "const pathname = usePathname(); // e.g. '/dashboard'",
      description: "خطاف لقراءة مسار الرابط الحالي لمعرفة التبويب النشط وتحديث التنقل."
    },
    {
      term: "useSearchParams",
      category: "خطافات العميل",
      syntax: "const searchParams = useSearchParams(); const query = searchParams.get('q');",
      description: "قراءة معلمات الاستعلام في الرابط ?q=react بطريقة تفاعلية في جانب العميل."
    },
    {
      term: "useActionState",
      category: "إدارة العمليات الخادمة",
      syntax: "const [state, formAction, isPending] = useActionState(serverFn, initial);",
      description: "معيار React 19 المدمج في Next.js لإدارة نتائج وتتبع حالة تنفيذ Server Actions."
    },
    {
      term: "useOptimistic",
      category: "التحديثات المتفائلة",
      syntax: "const [optimisticList, setOptimistic] = useOptimistic(list, (prev, next) => [...prev, next]);",
      description: "إظهار تحديث الواجهة فورياً للمستخدم أثناء معالجة الخادم للتراجع في حال حدوث خطأ."
    },
    {
      term: "unstable_cache",
      category: "إدارة الكاش المتقدمة",
      syntax: "const getCached = unstable_cache(async () => db.query(), ['key'], { tags: ['data'] });",
      description: "تخزين مؤقت لنتائج استعلامات قواعد البيانات والعمليات المكلفة غير المعتمدة على fetch."
    }
  ],
  project: {
    id: "nextpulse-app-router-studio",
    title: "NextPulse AppRouter Pro - استوديو النشر وإدارة المحتوى الكامل بمعمارية Next.js App Router",
    level: "متقدم وخبير جداً",
    duration: "4 إلى 5 ساعات",
    description:
      "تطبيق تفاعلي حي يحاكي بيئة تشغيل Next.js App Router متكاملة: تتبع مسارات المجلدات، المعالجة التلقائية لملفات layout وpage وloading وerror، التبديل بين Server Components وClient Components، محاكاة Server Actions مع Revalidation فوري، وتعديلات تفاؤلية عبر useOptimistic.",
    features: [
      "محاكي شجرة ملفات App Router الحية (app/blog/[id]/page.jsx, layout.jsx, loading.jsx, error.jsx).",
      "لوحة تبديل حدود التصيير Server Components مقابل Client Components وإبراز حجم الحزمة وتأثيره.",
      "محاكي Server Actions الحية مع تفعيل revalidatePath ومزامنة الكاش وتتبع زمن الاستجابة.",
      "نظام إضافة تعليقات فوري بالتحديث المتفائل (Optimistic UI) وتجربة معالجة الفشل والتراجع.",
      "محرر وفاحص وسوم البيانات الوصفية الديناميكية Dynamic Metadata وتوليد بطاقات معاينة Open Graph."
    ],
    techStack: [
      "Next.js App Router Architecture",
      "React Server Components & 'use client'",
      "Server Actions & useActionState",
      "useOptimistic Hook",
      "Dynamic Metadata API",
      "File-based Nested Routing Simulation",
      "Tailwind CSS Dark Theme"
    ],
    files: [
      "app/layout.jsx",
      "app/page.jsx",
      "app/loading.jsx",
      "app/error.jsx",
      "app/posts/[slug]/page.jsx",
      "app/actions/postActions.js",
      "components/OptimisticCommentBox.jsx",
      "components/MetadataInspector.jsx"
    ],
    code: `import React, { useState, useTransition } from 'react';

// محاكي NextPulse AppRouter Studio التفاعلي
export default function NextPulseAppRouterStudio() {
  // المسار الحالي النشط
  const [currentRoute, setCurrentRoute] = useState('/dashboard');
  // حالة تحميل الصفحة
  const [isLoading, setIsLoading] = useState(false);
  // حالة محاكاة الخطأ
  const [hasError, setHasError] = useState(false);
  // قائمة المقالات في الخادم مع حالة الكاش
  const [posts, setPosts] = useState([
    { id: '1', title: 'دليل Next.js App Router الشامل', views: 1420, date: '2026-10-25' },
    { id: '2', title: 'React Server Components من الصفر', views: 980, date: '2026-10-28' },
    { id: '3', title: 'أسرار Server Actions وتحسين الكاش', views: 650, date: '2026-10-29' }
  ]);
  // قائمة التعليقات المتفائلة
  const [comments, setComments] = useState([
    { id: 'c1', text: 'شرح معمارية التطبيق ممتاز جداً وعملي!', author: 'أحمد', pending: false }
  ]);
  const [newComment, setNewComment] = useState('');
  const [isPending, startTransition] = useTransition();

  // محاكاة الانتقال بين المسارات مع إظهار loading.jsx
  const handleNavigate = (path) => {
    setIsLoading(true);
    setHasError(false);
    setTimeout(() => {
      setCurrentRoute(path);
      setIsLoading(false);
    }, 400);
  };

  // محاكاة تنفيذ Server Action مع التحديث المتفائل
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const tempId = 'temp-' + Date.now();
    const optimisticItem = { id: tempId, text: newComment, author: 'أنت (تفاؤلي)', pending: true };
    // إضافة متفائلة فورية
    setComments(prev => [...prev, optimisticItem]);
    const textToSubmit = newComment;
    setNewComment('');

    startTransition(() => {
      // محاكاة تأخير الخادم لمعالجة الطلب
      setTimeout(() => {
        // تأكيد نجاح العملية واستبدال العنصر المؤقت
        setComments(prev => prev.map(c => c.id === tempId ? { ...c, id: 'c-' + Date.now(), pending: false } : c));
      }, 1000);
    });
  };

  // محاكاة revalidatePath لتحديث المشاهدات
  const handleRevalidate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPosts(prev => prev.map(p => ({ ...p, views: p.views + Math.floor(Math.random() * 50) + 10 })));
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="p-6 bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl font-sans" dir="rtl">
      {/* الترويسة الرئيسية */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <h2 className="text-xl font-bold text-white tracking-wide">NextPulse App Router Studio</h2>
            <span className="bg-emerald-950 text-emerald-300 border border-emerald-700/50 text-xs px-2.5 py-0.5 rounded-full font-mono">Next.js 15 Ready</span>
          </div>
          <p className="text-sm text-slate-400 mt-1">محاكاة تفاعلية شاملة لمفاهيم App Router: المسارات، المكونات الخادمة، Server Actions، والتحديث المتفائل.</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleRevalidate} 
            className="px-3 py-1.5 bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg text-xs font-medium transition"
          >
            🔄 revalidatePath('/blog')
          </button>
          <button 
            onClick={() => setHasError(!hasError)} 
            className="px-3 py-1.5 bg-rose-600/20 text-rose-300 hover:bg-rose-600/30 border border-rose-500/30 rounded-lg text-xs font-medium transition"
          >
            ⚠️ محاكاة error.jsx
          </button>
        </div>
      </div>

      {/* شريط المسارات والأزرار */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* شجرة الملفات الجانبية */}
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>شجرة مسارات app/</span>
            <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">File-based</span>
          </div>

          <div className="space-y-1 text-sm font-mono">
            <button 
              onClick={() => handleNavigate('/dashboard')} 
              className={'w-full text-right px-3 py-2 rounded-lg flex items-center justify-between transition ' + (currentRoute === '/dashboard' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold' : 'hover:bg-slate-800 text-slate-300')}
            >
              <span>📁 app/page.jsx</span>
              <span className="text-xs text-slate-500">/</span>
            </button>
            <button 
              onClick={() => handleNavigate('/blog')} 
              className={'w-full text-right px-3 py-2 rounded-lg flex items-center justify-between transition ' + (currentRoute === '/blog' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold' : 'hover:bg-slate-800 text-slate-300')}
            >
              <span>📁 app/blog/page.jsx</span>
              <span className="text-xs text-slate-500">/blog</span>
            </button>
            <button 
              onClick={() => handleNavigate('/actions')} 
              className={'w-full text-right px-3 py-2 rounded-lg flex items-center justify-between transition ' + (currentRoute === '/actions' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold' : 'hover:bg-slate-800 text-slate-300')}
            >
              <span>⚡ app/actions/page.jsx</span>
              <span className="text-xs text-slate-500">/actions</span>
            </button>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
            <div className="flex justify-between items-center">
              <span>نوع المكون الافتراضي:</span>
              <span className="text-emerald-400 font-bold">RSC (Server)</span>
            </div>
            <div className="flex justify-between items-center">
              <span>حجم حزمة العميل (JS):</span>
              <span className="text-blue-400 font-bold">0.0 KB (Zero Bundle)</span>
            </div>
          </div>
        </div>

        {/* مساحة العرض الرئيسية */}
        <div className="md:col-span-3 bg-slate-900 p-6 rounded-xl border border-slate-800 min-h-[380px] relative">
          {/* محاكاة loading.jsx الفوري */}
          {isLoading && (
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center rounded-xl space-y-3">
              <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
              <p className="text-sm font-mono text-emerald-300">جارٍ تفعيل Suspense & loading.jsx...</p>
            </div>
          )}

          {/* محاكاة error.jsx */}
          {hasError ? (
            <div className="p-6 bg-rose-950/40 border border-rose-800/60 rounded-xl text-center space-y-3">
              <div className="text-3xl">💥</div>
              <h3 className="text-lg font-bold text-rose-300">حدث استثناء داخل المسار (error.jsx)</h3>
              <p className="text-sm text-slate-400">تم احتواء الخطأ تلقائياً بواسطة حدود الخطأ دون انهيار كامل التطبيق.</p>
              <button 
                onClick={() => setHasError(false)} 
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold transition"
              >
                إعادة المحاولة reset()
              </button>
            </div>
          ) : (
            <div>
              {/* عرض صفحة /dashboard */}
              {currentRoute === '/dashboard' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <h3 className="text-lg font-bold text-white">🏠 الصفحة الرئيسية (app/page.jsx)</h3>
                    <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-700/40 px-2 py-0.5 rounded">Server Component</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    هذه الصفحة تُعرض بالكامل على الخادم. تم جلب بياناتها ومكوناتها ومعالجتها مباشرة في مرحلة التصيير الأولى وتوزيعها كـ HTML جاهز فائق السرعة.
                  </p>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-center">
                      <div className="text-2xl font-bold text-emerald-400">{posts.length}</div>
                      <div className="text-xs text-slate-400 mt-1">مقالات منشورة</div>
                    </div>
                    <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-center">
                      <div className="text-2xl font-bold text-blue-400">{posts.reduce((acc, p) => acc + p.views, 0)}</div>
                      <div className="text-xs text-slate-400 mt-1">إجمالي المشاهدات</div>
                    </div>
                    <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-center">
                      <div className="text-2xl font-bold text-purple-400">100%</div>
                      <div className="text-xs text-slate-400 mt-1">نتيجة SEO وLighthouse</div>
                    </div>
                  </div>
                </div>
              )}

              {/* عرض صفحة /blog */}
              {currentRoute === '/blog' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <h3 className="text-lg font-bold text-white">📰 المدونة (app/blog/page.jsx)</h3>
                    <span className="text-xs bg-blue-950 text-blue-300 border border-blue-700/40 px-2 py-0.5 rounded">ISR + Revalidation</span>
                  </div>
                  <div className="space-y-2">
                    {posts.map(post => (
                      <div key={post.id} className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-semibold text-white">{post.title}</h4>
                          <span className="text-xs text-slate-500 font-mono">تاريخ النشر: {post.date}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                            👁️ {post.views} مشاهدة
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* عرض صفحة /actions */}
              {currentRoute === '/actions' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <h3 className="text-lg font-bold text-white">⚡ تفاعل Server Actions والتحديث المتفائل</h3>
                    <span className="text-xs bg-purple-950 text-purple-300 border border-purple-700/40 px-2 py-0.5 rounded">useOptimistic & 'use server'</span>
                  </div>

                  <form onSubmit={handleAddComment} className="flex gap-2">
                    <input 
                      type="text" 
                      value={newComment} 
                      onChange={e => setNewComment(e.target.value)} 
                      placeholder="أدخل تعليقك لتجربة الإضافة المتفائلة اللحظية..." 
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <button 
                      type="submit" 
                      disabled={isPending}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-lg text-sm font-bold transition flex items-center gap-1.5"
                    >
                      {isPending ? 'جارٍ الإرسال...' : 'إرسال'}
                    </button>
                  </form>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs text-slate-400 font-bold">التعليقات الحية:</div>
                    {comments.map(c => (
                      <div key={c.id} className={'p-2.5 rounded-lg border text-sm flex items-center justify-between ' + (c.pending ? 'bg-amber-950/20 border-amber-600/40 text-amber-200' : 'bg-slate-950 border-slate-800 text-slate-200')}>
                        <span>{c.text}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500">بواسطة {c.author}</span>
                          {c.pending && <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono animate-pulse">قيد المزامنة...</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
`
  },
  infographic: {
    title: "خارطة معمارية Next.js App Router المتقدمة",
    subtitle: "التكامل السلس بين المكونات الخادمة RSC، العمليات الخادمة Server Actions، وإدارة الكاش الذكية",
    nodes: [
      {
        id: "routing",
        title: "1. هيكل التوجيه القائم على الملفات",
        description: "app/(shop)/[category]/page.jsx مع layout.jsx المشترك وloading.jsx التلقائي.",
        badge: "Routing Engine"
      },
      {
        id: "rsc",
        title: "2. المكونات الخادمة Server Components",
        description: "تصيير افتراضي في الخادم بصفر كود جافاسكريبت للعميل وأمان مباشر للبيانات.",
        badge: "Zero-Bundle"
      },
      {
        id: "server-actions",
        title: "3. العمليات الخادمة 'use server'",
        description: "استدعاءات RPC خادمة آمنة ومباشرة مع معالجة النماذج وتحديث الكاش تلقائياً.",
        badge: "Server Actions"
      },
      {
        id: "caching",
        title: "4. طبقات الكاش الأربعة",
        description: "Request Memoization وData Cache وFull Route Cache وRouter Cache التفاعلي.",
        badge: "Multi-tier Cache"
      },
      {
        id: "optimizations",
        title: "5. تحسين الأداء والموارد",
        description: "next/image وnext/font وDynamic Metadata لضمان أقصى درجات Lighthouse والـ SEO.",
        badge: "Core Web Vitals"
      }
    ]
  }
};

export default section25Meta;

