// src/data/sections/section18/topic3.js

export const topic3 = {
  id: "18.3",
  title: "تحميل الموارد بكفاءة (Code Splitting, Lazy Loading & Asset Optimization)",
  description: "المرجع الشامل لتقنيات تقسيم الكود، التحميل الكسول للمسارات والمكونات، تحسين وسائط الصور الحديثة وتنسيقات AVIF/WebP، التحميل المسبق للموارد، تحسين الخطوط، وتطهير الحزم من الكود الميت عبر Tree Shaking.",
  subtopics: [
    {
      id: "18.3.a",
      title: "تقسيم الكود Code Splitting",
      englishTerm: "Code Splitting (كود سبليتينغ)",
      description: "تقنية يتم فيها تجزئة ملف حزمة JavaScript الضخم الواحد (Monolithic Bundle) إلى قطع وملفات متعددة أصغر حجماً (Chunks) تُحمّل حسب الطلب عند حاجة المستخدم إليها، بدلاً من إجبار الزائر على تنزيل كود التطبيق بأكمله دفعة واحدة عند زيارته للصفحة الرئيسية.",
      analogy: "يشبه موسوعة علمية تتكون من 30 مجلداً؛ بدلاً من إجبار القارئ على حمل الشاحنة التي تحمل الـ 30 مجلداً لقراءة مقال عن الفضاء، تعطيه فقط المجلد الخاص بالفلك، وتترك باقي المجلدات في المكتبة لحين طلبها.",
      whyItMatters: "يقلل زمن التحميل الأولي (Initial Load Time) وحجم البيانات المنقولة عبر الشبكة بشكل جذري، مما يرفع مقاييس سرعة الموقع (FCP و LCP) بصورة ملحوظة خاصة لمستخدمي الهواتف الذكية وشبكات 4G البطيئة.",
      syntax: "// الاستيراد الديناميكي القياسي في ECMAScript\nimport('./heavyModule.js').then(module => {\n  module.doWork();\n});",
      simpleExample: `// استيراد React مع زر يُحمّل وحدة تصدير PDF عند النقر فقط
import React, { useState } from 'react';

export default function DynamicImportDemo() {
  const [loading, setLoading] = useState(false);

  // دالة تُحمّل مكتبة خارجية ضخمة عند طلب المستخدم فقط (On Demand)
  async function handleDownloadReport() {
    setLoading(true);
    // الاستيراد الديناميكي: المتصفح لن يحمّل هذا الملف إلا في هذه اللحظة!
    const { generatePdfReport } = await import('./reportGenerator.js');
    // تنفيذ الدالة من الملف المحمّل حديثاً
    generatePdfReport({ title: 'تقرير المبيعات الشهري' });
    setLoading(false);
  }

  return (
    <div className="p-4 bg-slate-900 text-white rounded-lg">
      <button 
        onClick={handleDownloadReport} 
        disabled={loading}
        className="px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded font-semibold text-sm"
      >
        {loading ? 'جاري تحميل وحدة التقرير...' : 'تنزيل التقرير (تحميل ديناميكي)'}
      </button>
    </div>
  );
}`,
      advancedExample: [
        "// دمج الاستيراد الديناميكي المسبق عند تمرير الفأرة (Hover Prefetching) لتحقيق استجابة فورية",
        "import React, { useState } from 'react';",
        "",
        "export function SmartReportDownloader() {",
        "  const [status, setStatus] = useState('جاهز');",
        "  // مرجع للاحتفاظ بالوحدة بعد تحميلها مسبقاً",
        "  const modulePromiseRef = React.useRef(null);",
        "",
        "  // بدء تحميل الملف البرمجي فور حوم مؤشر الفأرة فوق الزر وقبل النقر الفعلي!",
        "  const prefetchModule = () => {",
        "    if (!modulePromiseRef.current) {",
        "      console.log('⚡ بدء التحميل المسبق الخفي لوحدة التقارير...');",
        "      // حفظ الـ Promise بحيث إذا تم النقر يكون الكود جاهزاً أو في المراحل النهائية",
        "      modulePromiseRef.current = import('./reportGenerator.js');",
        "    }",
        "  };",
        "",
        "  const executeDownload = async () => {",
        "    setStatus('جاري المعالجة...');",
        "    // جلب الوحدة من الوعد المحمّل مسبقاً أو بدء تحميله فوراً إذا لم يحم بعد",
        "    const modulePromise = modulePromiseRef.current || import('./reportGenerator.js');",
        "    const { generatePdfReport } = await modulePromise;",
        "    ",
        "    // تنفيذ الدالة الحسابية",
        "    generatePdfReport({ generatedAt: new Date().toISOString() });",
        "    setStatus('تم التنزيل بنجاح!');",
        "  };",
        "",
        "  return (",
        "    <div className='p-6 bg-slate-950 border border-slate-800 rounded-xl text-white'>",
        "      <button",
        "        onMouseEnter={prefetchModule}",
        "        onFocus={prefetchModule}",
        "        onClick={executeDownload}",
        "        className='px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-bold text-sm transition-colors'",
        "      >",
        "        تصدير التقرير الفوري (Prefetch On Hover)",
        "      </button>",
        "      <p className='text-xs text-slate-400 mt-2'>الحالة: {status}</p>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "في لوحة Network بالمتصفح، لن يتم تنزيل كود reportGenerator.js مع الحزمة الأولى، بل سينزل كملف Chunk منفصل عند حوم الفأرة، وتكون الاستجابة صفر تأخير عند النقر.",
      commonMistakes: "استخدام import() الديناميكي على مكونات متناهية الصغر (أقل من 5 كيلوبايت)؛ فتكلفة إرسال طلب HTTP إضافي للشبكة تفوق الحجم الموفر للكود.",
      bestPractices: "استخدم Code Splitting للمسارات الكبرى (Routes)، وللمكونات التي تفتح بنوافذ منبثقة (Modals)، وللمكتبات الضخمة التي لا يحتاجها كل زائر (مثل محررات النصوص الغنية ومكتبات الرسوم البيانية).",
      visualDiagram: "Without Splitting: [Single Bundle: 1800 KB] ──► Slow 3G: 12 seconds wait!\nWith Splitting:    [Main Bundle: 120 KB]    ──► Fast Render in 0.8s!\n                   ├── [Route Admin: 400 KB] (Loaded only if admin visits)\n                   └── [PDF Tool: 350 KB]   (Loaded only on button click)"
    },
    {
      id: "18.3.b",
      title: "استخدام React.lazy و Suspense",
      englishTerm: "React.lazy and Suspense (ري-آكت ليزي آند سسبنس)",
      description: "دالة React.lazy هي الأداة القياسية في React لتعريف المكونات التي تُحمّل كسولاً (Lazy Loading). تعمل بالتكامل مع مكوّن <Suspense> الذي يوفر واجهة بديلة (Fallback UI مثل مؤشر تحميل أو Skeleton) أثناء انتظار اكتمال تنزيل كود المكون عبر الشبكة.",
      analogy: "يشبه شاشات الانتظار في صالات السينما؛ تعرض مقاطع إعلانية ممتعة وبوسترات ترحيبية حتى يدخل الجمهور إلى القاعة ويكتمل تجهيز الفيلم الرئيسي.",
      whyItMatters: "يحول دون انهيار أو تجميد التطبيق أثناء انتظار تنزيل الأجزاء الكسولة، ويوفر تجربة استخدام فائقة السلاسة وخالية من القفزات المفاجئة.",
      syntax: "const LazyComp = React.lazy(() => import('./MyComponent'));\n<Suspense fallback={<Spinner />}>\n  <LazyComp />\n</Suspense>",
      simpleExample: `// استيراد lazy و Suspense من مكتبة React
import React, { lazy, Suspense } from 'react';

// تعريف المكون الكسول: سيتم فصله تلقائياً في ملف chunk منفصل أثناء البناء
const AnalyticsChart = lazy(() => import('./AnalyticsChart'));

// مكون مؤشر التحميل البديل
function ChartSkeleton() {
  return (
    <div className="h-48 bg-slate-800 animate-pulse rounded-lg flex items-center justify-center text-slate-400">
      جاري تحميل الرسم البياني...
    </div>
  );
}

export default function DashboardView() {
  return (
    <div className="p-4 space-y-3 bg-slate-900 text-white rounded-lg">
      <h2 className="text-lg font-bold">لوحة التحكم السريعة</h2>
      {/* تغليف المكون الكسول بـ Suspense وتمرير واجهة الانتظار */}
      <Suspense fallback={<ChartSkeleton />}>
        <AnalyticsChart />
      </Suspense>
    </div>
  );
}`,
      advancedExample: [
        "// دمج معالجة أخطاء الشبكة (Error Boundaries) مع Suspense لضمان استقرار التحميل الكسول",
        "import React, { lazy, Suspense, Component } from 'react';",
        "",
        "// صائد الأخطاء المتخصص في معالجة فشل تنزيل ملفات الـ Chunk (مثل انقطاع الإنترنت أو نشر إصدار جديد)",
        "class ChunkLoadErrorBoundary extends Component {",
        "  state = { hasError: false };",
        "",
        "  static getDerivedStateFromError() {",
        "    return { hasError: true };",
        "  }",
        "",
        "  componentDidCatch(error) {",
        "    console.error('فشل تحميل قطعة الكود البرمجية:', error);",
        "  }",
        "",
        "  handleRetry = () => {",
        "    this.setState({ hasError: false });",
        "    // إعادة تحميل الصفحة لضمان جلب أحدث أسماء الـ Chunks بعد النشر",
        "    window.location.reload();",
        "  };",
        "",
        "  render() {",
        "    if (this.state.hasError) {",
        "      return (",
        "        <div className='p-6 bg-rose-950/60 border border-rose-500 rounded-xl text-center space-y-3'>",
        "          <p className='text-rose-200 font-semibold'>تعذر تحميل هذا الجزء بسبب تحديث في النظام أو ضعف الاتصال.</p>",
        "          <button ",
        "            onClick={this.handleRetry}",
        "            className='px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-sm font-bold'",
        "          >",
        "            إعادة المحاولة وتحديث الصفحة",
        "          </button>",
        "        </div>",
        "      );",
        "    }",
        "    return this.props.children;",
        "  }",
        "}",
        "",
        "// مكون ثقيل يُحمّل كسولاً",
        "const HeavyVideoPlayer = lazy(() => import('./HeavyVideoPlayer'));",
        "",
        "export function SafeLazyVideoContainer() {",
        "  return (",
        "    <ChunkLoadErrorBoundary>",
        "      <Suspense fallback={<div className='p-8 bg-slate-900 text-slate-400 text-center animate-pulse'>جاري جلب مشغل الفيديو...</div>}>",
        "        <HeavyVideoPlayer videoId='v-2026' />",
        "      </Suspense>",
        "    </ChunkLoadErrorBoundary>",
        "  );",
        "}"
      ].join('\n'),
      output: "يظهر الـ Skeleton فوراً دون أي تأخير، وعند اكتمال تنزيل ملف الكود، يتم استبداله بمشغل الفيديو بسلاسة، وفي حال فشل الاتصال تظهر رسالة الخطأ مع زر إعادة المحاولة.",
      commonMistakes: "نسيان تغليف المكون المعرف بـ React.lazy داخل <Suspense>؛ يؤدي ذلك إلى تعطل التطبيق فوراً وظهور خطأ: 'A component suspended while rendering, but no fallback was specified'.",
      bestPractices: "أحط كل مكون أو مسار كسول بـ Error Boundary لمعالجة أخطاء تحديث ملفات الإنتاج (Deployment Mismatches) عند نشر إصدار جديد.",
      visualDiagram: "React.lazy Workflow:\nComponent Mount ──► Trigger Dynamic Import() ──► Show <Suspense fallback />\n                                                       │\n                                     ┌─────────────────┴─────────────────┐\n                                     ▼                                   ▼\n                             Chunk Downloaded                    Network Failed\n                                     ▼                                   ▼\n                             Render Real Component              Catch in ErrorBoundary"
    },
    {
      id: "18.3.c",
      title: "التحميل الكسول للمسارات Route-Based Splitting",
      englishTerm: "Route-Based Code Splitting (راوت بيسد كود سبليتينغ)",
      description: "أشهر وأفضل ممارسات تقسيم الكود في React؛ حيث يتم تقسيم التطبيق بحسب مسارات صفحاته (مثل: /، /dashboard، /settings، /admin). كل صفحة تصبح حزمة مستقلة، ولا يتم تنزيل كود صفحة لوحة التحكم مثلاً إلا عندما يقرر المستخدم الانتقال إليها فعلياً.",
      analogy: "يشبه الفندق الكبير؛ لن يفتح لك موظف الاستقبال غرف الطابق الخامس والسادس ويشعل مكيفاتها إلا عندما تحجز فيها وتصعد بالمصعد إليها.",
      whyItMatters: "يحافظ على حجم الصفحة الرئيسية في أصغر نطاق ممكن (غالباً أقل من 80KB)، مهما كبر حجم المشروع وعدد صفحاته مستقبلاً.",
      syntax: "const Home = lazy(() => import('./pages/Home'));\nconst Admin = lazy(() => import('./pages/Admin'));\n// استخدامهم داخل <Routes>",
      simpleExample: `// استيراد React Router والأدوات الكسولة
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// تعريف الصفحات الكسولة
const HomePage = lazy(() => import('./pages/HomePage'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));

export default function RouteSplittingApp() {
  return (
    <BrowserRouter>
      {/* شريط التنقل */}
      <nav className="p-3 bg-slate-900 text-white flex gap-4 text-sm">
        <Link to="/" className="hover:text-sky-400">الرئيسية</Link>
        <Link to="/analytics" className="hover:text-sky-400">التحليلات</Link>
      </nav>

      {/* تغليف المسارات بـ Suspense لإظهار التحميل أثناء التنقل بين الصفحات */}
      <div className="p-4 bg-slate-950 text-slate-100 min-h-screen">
        <Suspense fallback={<div className="p-6 text-center text-slate-400">جاري تحميل الصفحة...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}`,
      advancedExample: [
        "// بنية متقدمة للمسارات مع التحميل المسبق الذكي للمسار عند حوم الفأرة فوق رابط الـ Link",
        "import React, { lazy, Suspense } from 'react';",
        "import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';",
        "",
        "// دوال استيراد مرجعية لتسهيل استدعائها عند الحاجة المسبقة",
        "const loadDashboard = () => import('./pages/Dashboard');",
        "const loadSettings = () => import('./pages/Settings');",
        "",
        "// مكونات lazy ترتبط بالدوال المرجعية",
        "const Dashboard = lazy(loadDashboard);",
        "const Settings = lazy(loadSettings);",
        "",
        "// مكون رابط مخصص فائق السرعة يُحمّل كود الصفحة بمجرد اقتراب مؤشر الفأرة",
        "function PrefetchNavLink({ to, onPrefetch, children, className }) {",
        "  return (",
        "    <NavLink",
        "      to={to}",
        "      onMouseEnter={onPrefetch}",
        "      onFocus={onPrefetch}",
        "      className={({ isActive }) =>",
        "        className + ' ' + (isActive ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-white')",
        "      }",
        "    >",
        "      {children}",
        "    </NavLink>",
        "  );",
        "}",
        "",
        "export function AdvancedRouterShell() {",
        "  return (",
        "    <BrowserRouter>",
        "      <header className='p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center'>",
        "        <span className='font-bold text-white'>نظام المؤسسة 2026</span>",
        "        <div className='flex gap-4 text-sm'>",
        "          {/* عند الوقوف على الرابط يتم تنزيل كود الصفحة مسبقاً في الخلفية */}",
        "          <PrefetchNavLink to='/dashboard' onPrefetch={loadDashboard}>",
        "            لوحة التحكم",
        "          </PrefetchNavLink>",
        "          <PrefetchNavLink to='/settings' onPrefetch={loadSettings}>",
        "            الإعدادات",
        "          </PrefetchNavLink>",
        "        </div>",
        "      </header>",
        "      <main className='p-6'>",
        "        <Suspense fallback={<div className='p-12 text-center text-sky-400 font-mono'>جاري إعداد الصفحة...</div>}>",
        "          <Routes>",
        "            <Route path='/dashboard' element={<Dashboard />} />",
        "            <Route path='/settings' element={<Settings />} />",
        "          </Routes>",
        "        </Suspense>",
        "      </main>",
        "    </BrowserRouter>",
        "  );",
        "}"
      ].join('\n'),
      output: "الصفحة الرئيسية تفتح فوراً لأنها لا تحتوي على أكواد Dashboard أو Settings، وعندما يمرر المستخدم الفأرة فوق الرابط يتم جلب الكود خلسة، فتفتح الصفحة في صفر مللي ثانية بمجرد النقر.",
      commonMistakes: "وضع <Suspense> في قاع شجرة كل صفحة بدلاً من وضع غلاف عام حول <Routes>، مما يؤدي إلى شاشات فارغة أو وميض غير مريح أثناء الانتقال.",
      bestPractices: "استخدم مؤشرات تحميل هيكلية (Page Skeletons) مخصصة تشبه التصميم النهائي لكل صفحة بدلاً من مؤشر دوران كلاسيكي عام لتعزيز تجربة الاستخدام واستقرار التصميم.",
      visualDiagram: "Route Splitting Visual:\nURL: /               ──► Downloads HomeChunk.js (35 KB)  ──► Instant render!\nUser hovers /admin   ──► Prefetches AdminChunk.js (90 KB) in background\nUser clicks /admin   ──► Renders INSTANTLY with 0ms network latency!"
    },
    {
      id: "18.3.d",
      title: "التحميل الكسول للمكونات الثقيلة",
      englishTerm: "Lazy Loading Heavy Components (ليزي لودينغ هيفي كومبوننتس)",
      description: "تطبيق التحميل الكسول على مستوى المكونات الجزئية (Component-Level Splitting) مثل: المحررات الغنية (Rich Text Editors مثل TipTap أو Quill)، ومكتبات الرسوم البيانية، ونوافذ المودال المعقدة، والخرائط الجغرافية، بحيث لا يُحمّل كودها إلا عند طلب عرض ذلك المكوّن تحديداً.",
      analogy: "يشبه طاولة الأدوات؛ لن تشتري وتضع منشاراً كهربائياً عملاقاً على الطاولة وأنت تريد فقط استخدام مفك براغي صغير لربط نظارتك.",
      whyItMatters: "يوفر مئات الكيلوبايتات؛ فمكتبة مثل Monaco Editor (محرر VS Code) أو Leaflet Maps قد تتجاوز وحدها 500KB، وتأخير تحميلها يحمي زوار الصفحات العامة من دفع ثمن كود لا يستخدمونه.",
      syntax: "const RichTextEditor = lazy(() => import('./RichEditor'));\n{showEditor && (\n  <Suspense fallback={<p>جاري تشغيل المحرر...</p>}>\n    <RichTextEditor />\n  </Suspense>\n)}",
      simpleExample: `// استيراد useState و lazy و Suspense
import React, { useState, lazy, Suspense } from 'react';

// استيراد كسول للمحرر الثقيل
const MarkdownEditor = lazy(() => import('./MarkdownEditor'));

export default function ArticleWriter() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-4 bg-slate-900 text-white rounded-lg space-y-3">
      <button 
        onClick={() => setIsEditing(true)}
        className="px-3 py-1.5 bg-amber-600 rounded text-sm font-bold"
      >
        كتابة مقال جديد (فتح المحرر)
      </button>

      {/* لن يتم تنزيل كود المحرر نهائياً إلا إذا نقر المستخدم على الزر وتغيرت الحالة */}
      {isEditing && (
        <Suspense fallback={<div className="text-amber-400 text-xs">جاري تجهيز بيئة المحرر...</div>}>
          <MarkdownEditor />
        </Suspense>
      )}
    </div>
  );
}`,
      advancedExample: [
        "// نافذة مودال منبثقة تفاعلية مع تحميل كسول احترافي للمحتوى الثقيل بداخلها",
        "import React, { useState, lazy, Suspense } from 'react';",
        "",
        "// استيراد كسول لمكون الخريطة التفاعلية الضخمة",
        "const InteractiveWorldMap = lazy(() => import('./InteractiveWorldMap'));",
        "",
        "export function StoreLocatorModal() {",
        "  const [isModalOpen, setIsModalOpen] = useState(false);",
        "",
        "  return (",
        "    <div className='p-6 bg-slate-950 rounded-xl text-slate-100'>",
        "      <button",
        "        onClick={() => setIsModalOpen(true)}",
        "        className='px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-bold shadow-lg'",
        "      >",
        "        عرض خريطة فروعنا حول العالم",
        "      </button>",
        "",
        "      {/* عرض النافذة المشروطة */}",
        "      {isModalOpen && (",
        "        <div className='fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4'>",
        "          <div className='bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl p-6 relative'>",
        "            <div className='flex justify-between items-center mb-4'>",
        "              <h3 className='font-bold text-lg text-white'>مواقع المتاجر</h3>",
        "              <button ",
        "                onClick={() => setIsModalOpen(false)}",
        "                className='text-slate-400 hover:text-white text-sm'",
        "              >",
        "                إغلاق ✕",
        "              </button>",
        "            </div>",
        "            ",
        "            {/* تحميل الخريطة فقط داخل المودال عند الفتح */}",
        "            <div className='h-80 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center'>",
        "              <Suspense fallback={<span className='text-xs text-indigo-400 animate-pulse'>جاري تحميل محرك الخرائط...</span>}>",
        "                <InteractiveWorldMap />",
        "              </Suspense>",
        "            </div>",
        "          </div>",
        "        </div>",
        "      )}",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "التطبيق الرئيسي لا يحمل أي أثر لكود الخريطة؛ وعند فتح المودال يبدأ التحميل في الخلفية ليظهر مؤشر التحميل ثم تظهر الخريطة فوراً دون التأثير على الصفحة الأصلية.",
      commonMistakes: "كتابة استيراد React.lazy داخل جسم دالة المكوّن في كل تصيير؛ يجب دوماً تعريف React.lazy في النطاق الخارجي للملف (Top-level Module Scope) لضمان ثبات المرجع.",
      bestPractices: "قم بفصل مكتبات الـ Charting والـ 3D (مثل Three.js و Canvas) في مكونات مستقلة واستوردها بـ React.lazy؛ هذا يقلل حجم الحزمة الأولية بنسبة تصل إلى 40%.",
      visualDiagram: "Page View ──► Loads Core UI (40 KB)\n                │\n                ▼ [User Clicks 'Open Map']\n                │\n                └──► Downloads LeafletMapChunk.js (320 KB) on demand"
    },
    {
      id: "18.3.e",
      title: "تحسين تحميل الصور",
      englishTerm: "Image Loading Optimization (إيميدج أوبتيمايزيشن)",
      description: "استراتيجيات تسريع تحميل الصور وتقليل استهلاك النطاق الترددي للشبكة؛ تشمل استخدام التحميل الكسول الأصلي (loading='lazy')، تحديد الأبعاد الصريحة (width & height) لمنع اهتزاز التصميم (CLS)، واستخدام خاصية decoding='async' لفك ضغط الصور بعيداً عن المسار الرئيسي للمتصفح.",
      analogy: "يشبه توزيع المياه في العمارة؛ لا تملأ جميع الخزانات في كل الشقق غير المسكونة في نفس اللحظة، بل تضخ الماء فقط للشقة التي فتح ساكنها الصنبور.",
      whyItMatters: "تمثل الصور عادة أكثر من 60% من إجمالي حجم البيانات المنقولة عبر صفحات الويب؛ تحسينها هو أسرع وأسهل طريقة لتحقيق قفزة هائلة في درجات Lighthouse وسرعة تجربة المستخدم.",
      syntax: "<img src=\"product.jpg\" alt=\"وصف\" loading=\"lazy\" decoding=\"async\" width=\"400\" height=\"300\" />",
      simpleExample: `// استيراد React
import React from 'react';

export default function OptimizedNativeImage() {
  return (
    <div className="p-4 bg-slate-900 rounded-lg">
      <h3 className="text-white font-bold mb-2">صورة محسنة بالمعايير القياسية</h3>
      {/* تطبيق التحميل الكسول وتحديد الأبعاد المسبقة وفك الضغط غير المتزامن */}
      <img
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600"
        alt="شاشة كود برمجية محسنة"
        loading="lazy"          // لن تُحمّل إلا عند اقتراب المستخدم من موضعها أثناء التمرير
        decoding="async"        // فك تشفير وضغط الصورة في مسار خلفي لمنع تجميد الشاشة
        width="600"             // حجز المساحة مسبقاً لمنع اهتزاز الشاشة (CLS)
        height="400"
        className="rounded-lg shadow-md w-full h-auto max-w-md object-cover"
      />
    </div>
  );
}`,
      advancedExample: [
        "// مكوّن صورة فائق الاحترافية يدعم تقنية التمويه المسبق (Blur-up Placeholder) والتحميل التدريجي",
        "import React, { useState } from 'react';",
        "",
        "export function ProgressiveImage({ src, placeholderSrc, alt, width, height }) {",
        "  // حالة لمعرفة هل اكتمل تنزيل الصورة عالية الدقة",
        "  const [isLoaded, setIsLoaded] = useState(false);",
        "",
        "  return (",
        "    <div ",
        "      className='relative overflow-hidden rounded-xl bg-slate-800' ",
        "      style={{ aspectRatio: width + ' / ' + height }}",
        "    >",
        "      {/* صورة المعاينة الصغيرة منخفضة الجودة (Blur-up) تُحمّل فوراً */}",
        "      <img",
        "        src={placeholderSrc}",
        "        alt={alt}",
        "        aria-hidden='true'",
        "        className={'absolute inset-0 w-full h-full object-cover filter blur-lg scale-110 transition-opacity duration-500 ' + (isLoaded ? 'opacity-0' : 'opacity-100')}",
        "      />",
        "",
        "      {/* الصورة الأصلية عالية الدقة مع فك التشفير غير المتزامن */}",
        "      <img",
        "        src={src}",
        "        alt={alt}",
        "        loading='lazy'",
        "        decoding='async'",
        "        width={width}",
        "        height={height}",
        "        onLoad={() => setIsLoaded(true)}",
        "        className={'relative w-full h-full object-cover transition-opacity duration-500 ' + (isLoaded ? 'opacity-100' : 'opacity-0')}",
        "      />",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "يظهر تأثير التمويه الجذاب فوراً دون أي اهتزاز في الصفحة، وعند اكتمال تنزيل الصورة عالية الجودة، يحدث انتقال ناعم وتتلاشى المعاينة لتظهر الصورة الأصلية بدقة تامة.",
      commonMistakes: "وضع خاصية loading='lazy' على صورة البانر الرئيسية في أعلى الصفحة (Hero Image)؛ هذا يُؤخر تحميل الصورة الأهم ويتسبب في تدني نتيجة مقياس Largest Contentful Paint (LCP) بنسبة كارثية!",
      bestPractices: "ضع loading='eager' و fetchpriority='high' على الصورة البصرية الرئيسية فوق خط الطي (Above the fold)، واستخدم loading='lazy' حصرياً للصور التي تقع تحت خط الطي (Below the fold).",
      visualDiagram: "Image Loading Strategy:\nAbove The Fold (Hero Banner) ──► loading=\"eager\" fetchpriority=\"high\" (Boosts LCP)\nBelow The Fold (List Items)   ──► loading=\"lazy\" decoding=\"async\"      (Saves Bandwidth)"
    },
    {
      id: "18.3.f",
      title: "استخدام تنسيقات الصور الحديثة WebP و AVIF",
      englishTerm: "Next-Gen Image Formats (WebP & AVIF) (نكست جين إيميج فورماتس)",
      description: "تنسيقات صور الجيل الحديث المطورة خصيصاً لشبكة الويب؛ يوفر WebP ضغطاً أفضل بنسبة 25-35% مقارنة بـ JPEG بنفس الجودة، بينما يوفر تنسيق AVIF ضغطاً متفوقاً يصل إلى 50% مع دعم ألوان فائقة (HDR). يُستخدم عنصر <picture> في HTML لتقديم أفضل تنسيق يدعمه متصفح الزائر تلقائياً.",
      analogy: "يشبه الترقية من شرائط الفيديو القديمة (VHS) إلى أقراص البلوراي والبث الرقمي 4K؛ حيث تحصل على نقاء بصري أعلى بملفات تشغل نصف مساحة التخزين السابقة.",
      whyItMatters: "تقليص حجم ملفات الصور من 800KB إلى 70KB فقط دون فقدان الجودة، مما يُسرع زمن التحميل ويوفر استهلاك باقات الإنترنت للمستخدمين.",
      syntax: "<picture>\n  <source srcset=\"image.avif\" type=\"image/avif\" />\n  <source srcset=\"image.webp\" type=\"image/webp\" />\n  <img src=\"image.jpg\" alt=\"بديل\" />\n</picture>",
      simpleExample: `// استيراد React
import React from 'react';

export default function ModernImageFormats() {
  return (
    <div className="p-4 bg-slate-900 rounded-lg">
      <picture>
        {/* الخيار الأول: تنسيق AVIF الأحدث والأخف وزناً */}
        <source srcSet="/assets/banner.avif" type="image/avif" />
        {/* الخيار الثاني: تنسيق WebP المدعوم على نطاق واسع */}
        <source srcSet="/assets/banner.webp" type="image/webp" />
        {/* الخيار الاحتياطي التلقائي إذا كان المتصفح قديماً جداً */}
        <img 
          src="/assets/banner.jpg" 
          alt="بانر المنصة التعليمية" 
          width="800" 
          height="450" 
          className="rounded-lg w-full h-auto"
        />
      </picture>
    </div>
  );
}`,
      advancedExample: [
        "// مكوّن متجاوب متعدد التنسيقات والأحجام التكيفية (Responsive Picture Component with srcset & sizes)",
        "import React from 'react';",
        "",
        "export function ResponsivePicture({ basename, alt, width, height, className }) {",
        "  // تجهيز مسارات الصور التكيفية لمختلف كثافات الشاشات",
        "  const avifSet = '/images/' + basename + '-400.avif 400w, /images/' + basename + '-800.avif 800w, /images/' + basename + '-1200.avif 1200w';",
        "  const webpSet = '/images/' + basename + '-400.webp 400w, /images/' + basename + '-800.webp 800w, /images/' + basename + '-1200.webp 1200w';",
        "  const fallbackSrc = '/images/' + basename + '-800.jpg';",
        "",
        "  return (",
        "    <picture className={className}>",
        "      {/* دعم تنسيق AVIF عالي الكفاءة مع أحجام متجاوبة */}",
        "      <source",
        "        type='image/avif'",
        "        srcSet={avifSet}",
        "        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px'",
        "      />",
        "      ",
        "      {/* دعم تنسيق WebP البديل */}",
        "      <source",
        "        type='image/webp'",
        "        srcSet={webpSet}",
        "        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px'",
        "      />",
        "      ",
        "      {/* الصورة الاحتياطية القياسية للأنظمة القديمة ومحركات البحث */}",
        "      <img",
        "        src={fallbackSrc}",
        "        alt={alt}",
        "        width={width}",
        "        height={height}",
        "        loading='lazy'",
        "        decoding='async'",
        "        className='w-full h-auto rounded-xl object-cover'",
        "      />",
        "    </picture>",
        "  );",
        "}"
      ].join('\n'),
      output: "المتصفحات الحديثة مثل Chrome و Firefox ستقوم بتنزيل ملف AVIF فائق الصغر، بينما تختار المتصفحات الأخرى WebP، ويبقى JPG كخيار احتياطي آمن 100%.",
      commonMistakes: "الاعتماد فقط على تنسيق AVIF دون توفير WebP أو JPG كبديل احتياطي؛ على الرغم من الانتشار الواسع لـ AVIF، إلا أن بعض البيئات والتطبيقات المدمجة (Embedded WebViews) القديمة لا تدعمه.",
      bestPractices: "استخدم دائماً وسم <picture> مع وسم <img> بداخله؛ لأن محركات البحث ومتصفحي ذوي الاحتياجات الخاصة يعتمدون على خصائص <img> لاستخراج الوصف والأبعاد.",
      visualDiagram: "Browser Request Flow:\nBrowser checks supported MIME types:\n  ├── Supports image/avif? ──► [Loads AVIF: 38 KB]\n  ├── Supports image/webp? ──► [Loads WebP: 55 KB]\n  └── Fallback Legacy      ──► [Loads JPEG: 140 KB]"
    },
    {
      id: "18.3.g",
      title: "التحميل المسبق للموارد Preloading و Prefetching",
      englishTerm: "Resource Hints (Preload, Prefetch, Preconnect) (ريسورس هينتس)",
      description: "توجيهات يقدمها التطبيق لمتصفح الويب لإخباره مسبقاً بالأولويات الشبكية؛ حيث يُستخدم `preload` لتنزيل الموارد الحيوية فوراً (مثل خط أساسي أو صورة البانر الرئيسية) قبل أن يكتشفها المتصفح في شجرة الـ DOM، ويُستخدم `prefetch` لتنزيل الموارد المحتمل طلبها في الصفحة التالية أثناء أوقات فراغ المتصفح.",
      analogy: "يشبه إرسال طلب الشاي للغرسون قبل وصول الضيوف بعشر دقائق (Preload)، مع سؤاله عن تجهيز الفاتورة مسبقاً إذا طلب الضيوف المغادرة لاحقاً (Prefetch).",
      whyItMatters: "يختصر أزمنة انتظار الشبكة، ويضمن عدم تأخر تحميل الخطوط والصور الحرجة، مما يقضي على ظاهرة وميض النصوص (FOIT/FOUT).",
      syntax: "<!-- في ترويسة HTML أو عبر React Helmet -->\n<link rel=\"preload\" href=\"/font.woff2\" as=\"font\" type=\"font/woff2\" crossorigin />\n<link rel=\"prefetch\" href=\"/next-page.js\" />",
      simpleExample: `// استيراد خطاف لإضافة وسم Preload ديناميكياً في رأس الصفحة
import React, { useEffect } from 'react';

export default function PreloadCriticalAsset({ assetUrl, asType }) {
  useEffect(() => {
    // إنشاء وسم رابط جديد للتحميل المسبق الفوري
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = asType;
    link.href = assetUrl;
    // إذا كان المورد خطاً يجب إضافة خاصية crossorigin
    if (asType === 'font') link.crossOrigin = 'anonymous';

    // إدراجه في رأس الصفحة <head>
    document.head.appendChild(link);

    // تنظيف الوسم عند إزالة المكون
    return () => {
      document.head.removeChild(link);
    };
  }, [assetUrl, asType]);

  return null; // مكون خدمات لا يرسم واجهة مرئية
}`,
      advancedExample: [
        "// نظام إدارة التوجيهات الشبكية المتقدمة (Resource Hints Manager) للتنبؤ وتنزيل المسارات التالية",
        "import React, { useEffect } from 'react';",
        "",
        "export function useSmartPrefetch(routes) {",
        "  useEffect(() => {",
        "    // التحقق من أن اتصال المستخدم ليس من النوع المحدود (Save-Data)",
        "    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;",
        "    if (connection && (connection.saveData || connection.effectiveType === '2g')) {",
        "      console.log('وضع توفير البيانات مفعل: تم إلغاء التحميل المسبق.');",
        "      return;",
        "    }",
        "",
        "    // الانتظار حتى يصبح المتصفح في وضع الفراغ (Idle) باستخدام requestIdleCallback",
        "    const schedulePrefetch = window.requestIdleCallback || ((cb) => setTimeout(cb, 2000));",
        "",
        "    const handle = schedulePrefetch(() => {",
        "      routes.forEach(routeChunkUrl => {",
        "        const link = document.createElement('link');",
        "        link.rel = 'prefetch';",
        "        link.href = routeChunkUrl;",
        "        document.head.appendChild(link);",
        "        console.log('⚡ تم التحميل المسبق الخفي في وقت الفراغ:', routeChunkUrl);",
        "      });",
        "    });",
        "",
        "    return () => {",
        "      if (window.cancelIdleCallback) window.cancelIdleCallback(handle);",
        "    };",
        "  }, [routes]);",
        "}"
      ].join('\n'),
      output: "يقوم المتصفح بتنزيل الملفات المحددة في الخلفية أثناء توقف المستخدم عن التفاعل، وعند انتقال المستخدم إلى تلك الصفحات تُفتح في كسر من الثانية مباشرة من ذاكرة المتصفح المؤقتة (Disk Cache).",
      commonMistakes: "الإفراط في استخدام `preload` لكل شيء في الصفحة؛ إذا قمت بالتحميل المسبق لـ 20 ملفاً، ستسد قناة الاتصال وتؤخر تحميل الملفات الأساسية مثل كود الـ JavaScript المشغل للواجهة.",
      bestPractices: "خصص `preload` فقط لأهم موردين في الصفحة (مثل الخط العربي الأساسي، أو صورة الـ Hero)، واستخدم `prefetch` للصفحات المتوقع زيارتها تالياً مع احترام إعداد saveData.",
      visualDiagram: "Resource Hints Priority:\nPreconnect: [DNS + TCP + TLS Handshake established early]\nPreload:    [CRITICAL ASSET - Fetch right now with high priority!]\nPrefetch:   [FUTURE ASSET   - Fetch in idle time when browser is free]"
    },
    {
      id: "18.3.h",
      title: "تحسين تحميل الخطوط Web Fonts",
      englishTerm: "Web Font Optimization (ويب فونت أوبتيمايزيشن)",
      description: "تقنيات التخلص من بطء وتأخر ظهور النصوص؛ تشمل استخدام صيغة WOFF2 الحديثة وفائقة الضغط، وتطبيق خاصية `font-display: swap` لعرض خط النظام البديل فوراً ومنع الشاشة البيضاء (FOIT)، وتجزئة الخطوط واقتطاع المحارف غير المستخدمة (Font Subsetting).",
      analogy: "يشبه طباعة إعلان سريع بخط اليد ووضعه على اللوحة ريثما تصل اللافتة الفاخرة المطبوعة بالخط الديواني لتعليقها مكانها.",
      whyItMatters: "تتسبب الخطوط الثقيلة وغير المحسنة في حجب ظهور النصوص (Flash of Invisible Text) لثوانٍ معدودة، مما يزعج القراء ويؤدي إلى ارتفاع مقياس اهتزاز التخطيط (CLS).",
      syntax: "@font-face {\n  font-family: 'Cairo';\n  src: url('/fonts/cairo.woff2') format('woff2');\n  font-display: swap;\n}",
      simpleExample: `// مثال على كود CSS المحسن المدمج لتعريف الخطوط مع خاصية swap
export const fontCssSnippet = \`
/* تعريف الخط العربي بصيغة WOFF2 الحديثة */
@font-face {
  font-family: 'AppCairoFont';
  src: url('/fonts/cairo-bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  /* swap: اعرض خط النظام فوراً ثم بدله عندما ينتهي تحميل الخط الفاخر */
  font-display: swap;
  /* حصر المحارف على الحروف العربية والأرقام فقط (Subsetting) */
  unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
}
\`;`,
      advancedExample: [
        "// مراقبة تحميل الخطوط برمجياً باستخدام FontFaceSet API لمنع اهتزاز التصميم وسلاسة التبديل",
        "import React, { useState, useEffect } from 'react';",
        "",
        "export function useFontLoaded(fontFamily) {",
        "  const [isFontReady, setIsFontReady] = useState(false);",
        "",
        "  useEffect(() => {",
        "    // التحقق من دعم واجهة مستند الخطوط document.fonts",
        "    if ('fonts' in document) {",
        "      // تحميل ومراقبة استقرار الخط المحدد",
        "      document.fonts.load('16px \"' + fontFamily + '\"').then((loadedFonts) => {",
        "        if (loadedFonts.length > 0) {",
        "          setIsFontReady(true);",
        "          console.log('✅ اكتمل تحميل وتفعيل الخط:', fontFamily);",
        "        }",
        "      }).catch(err => {",
        "        console.warn('تعذر تحميل الخط المخصص، الاعتماد على خط النظام:', err);",
        "      });",
        "    } else {",
        "      // إذا كان المتصفح لا يدعم الواجهة نعتبره جاهزاً تلقائياً",
        "      setIsFontReady(true)",
        "    }",
        "  }, [fontFamily]);",
        "",
        "  return isFontReady;",
        "}",
        "",
        "export function ElegantTypographyHeader() {",
        "  const fontLoaded = useFontLoaded('AppCairoFont');",
        "",
        "  return (",
        "    <div className='p-6 bg-slate-900 rounded-xl'>",
        "      <h1 className={'text-2xl font-bold transition-opacity duration-300 ' + (fontLoaded ? 'opacity-100 font-[\"AppCairoFont\"]' : 'opacity-80 font-sans')}>",
        "        الواجهات التفاعلية الحديثة مع React 19",
        "      </h1>",
        "      <p className='text-xs text-slate-400 mt-1'>",
        "        حالة الخط: {fontLoaded ? 'تم تطبيق الخط المخصص بنجاح' : 'جاري العرض بالخط الاحتياطي...'}",
        "      </p>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "يظهر النص فوراً دون أي اختفاء عبر خط النظام السريع، ثم يتم تطبيق الخط الجميل بنعومة وسلاسة بمجرد اكتمال تنزيل WOFF2.",
      commonMistakes: "استيراد الخطوط عبر @import داخل ملف CSS العام؛ هذا يُحدث تسلسلاً خبيثاً في طلبات الشبكة (Request Waterfall) حيث يتوقف المتصفح حتى يُنزل ملف الـ CSS ثم يكتشف الخط بداخله فيبدأ تنزيله.",
      bestPractices: "استخدم دائماً صيغة WOFF2 المدمجة محلياً (Self-hosted) وتجنب استخدام خطوط Google Fonts عبر روابط خارجية إذا كانت الخصوصية وسرعة الـ DNS والـ TLS Handshake تهمك.",
      visualDiagram: "Font Loading Behavior:\nfont-display: block ──► Text is INVISIBLE for up to 3s (Bad FOIT!)\nfont-display: swap  ──► Shows fallback font INSTANTLY ──► Swaps when ready (Zero blank text!)"
    },
    {
      id: "18.3.i",
      title: "استبعاد المكتبات غير المستخدمة Tree Shaking",
      englishTerm: "Tree Shaking & Dead Code Elimination (تري شيكينغ)",
      description: "عملية تحسين ذكية يقوم بها مجمع الحزم (مثل Rollup أو Webpack) أثناء الـ Build، تقوم بهز شجرة الكود (مثل هز شجرة التفاح في الخريف) لإسقاط الأوراق الميتة؛ أي استبعاد الدوال والملفات التي لم يتم استيرادها أو استخدامها فعلياً في كود التطبيق، مما يُقلص حجم الحزمة النهائية.",
      analogy: "يشبه تفكيك سيارة سباق وإزالة المقاعد الخلفية وحامل الأكواب ومكبرات الصوت لتقليل وزن السيارة وجعلها تنطلق بأقصى سرعة ممكنة.",
      whyItMatters: "يمنع تضخم ملفات التوزيع الناتج عن استيراد مكتبات مساعدة ضخمة تحتوي على مئات الدوال بينما أنت لا تحتاج سوى لدالة واحدة فقط.",
      syntax: "// يدعم Tree Shaking (استيراد دالة محددة عبر ES Modules):\nimport { debounce } from 'lodash-es';\n\n// لا يدعم Tree Shaking (استيراد كائن كامل عبر CommonJS):\nimport lodash from 'lodash';",
      simpleExample: `// مقارنة برمجية توضح كيفية الاستيراد الصحيح لدعم Tree Shaking
// ❌ استيراد خاطئ: يجلب مكتبة lodash كاملة (حوالي 70KB) لأن CommonJS لا يدعم هز الشجرة
// import _ from 'lodash';

// ✅ استيراد صحيح: استخدام النسخة المتوافقة مع ES Modules لاستيراد الدالة المطلوبة فقط (أقل من 2KB)
import { debounce } from 'lodash-es';

// استيراد دالة تنسيق تاريخ واحدة فقط من date-fns بدلاً من المكتبة بأكملها
import { formatDistanceToNow } from 'date-fns';

export function QuickUtilityDemo() {
  const timeAgo = formatDistanceToNow(new Date(2026, 0, 1));
  console.log('الوقت المنقضي:', timeAgo);

  const performSearch = debounce((text) => {
    console.log('بحث عن:', text);
  }, 300);

  return <button onClick={() => performSearch('React')}>تجربة البحث</button>;
}`,
      advancedExample: [
        "// إعداد ملف package.json للإعلان عن خلو المشروع من التأثيرات الجانبية لدعم أقصى Tree Shaking",
        "/* داخل ملف package.json الخاص بمكتبتك أو مشروعك:",
        "{",
        "  \"name\": \"my-optimized-ui-lib\",",
        "  \"sideEffects\": false,   // يخبر المجمع بأن حذف أي دالة غير مستوردة آمن 100%",
        "  \"type\": \"module\"",
        "}",
        "*/",
        "",
        "// مثال على كتابة وحدة قابلة لهز الشجرة بنسبة 100% بدون إحداث Side Effects في نطاق الملف",
        "export function add(a, b) {",
        "  return a + b;",
        "}",
        "",
        "export function multiply(a, b) {",
        "  return a * b;",
        "}",
        "",
        "// دالة معقدة لن تُحزم نهائياً في ملف الإنتاج طالما لم يستوردها أي ملف آخر في المشروع",
        "export function heavyFourierTransform(data) {",
        "  console.log('حسابات فورييه المتقدمة...');",
        "  return data.map(x => Math.sin(x));",
        "}"
      ].join('\n'),
      output: "في الملف المترجم النهائي (dist/assets/index.js)، سيتم حذف كود دالة heavyFourierTransform بالكامل وكأنها لم تُكتب أبداً، ولن تشغل بايت واحداً في حزمة التطبيق.",
      commonMistakes: "الاعتماد على مكتبات CommonJS القديمة التي تصدر كائناً موحداً (module.exports = { ... })؛ لأن مجمعات الحزم لا تستطيع تحليلها ثابتاً وتضطر لتضمين المكتبة بأكملها.",
      bestPractices: "استخدم دائماً النسخ المبنية على ES Modules للمكتبات (مثل lodash-es بدلاً من lodash)، وضع \"sideEffects\": false في ملف package.json لتشجيع المجمع على حذف الكود الميت بقوة.",
      visualDiagram: "Tree Shaking Process:\nSource Code:\n  ├── export func A() [Used]     ──► Kept in Bundle (Green Leaf)\n  ├── export func B() [Unused]   ──► SHAKEN OFF & REMOVED (Dead Leaf!)\n  └── export func C() [Used]     ──► Kept in Bundle (Green Leaf)"
    },
    {
      id: "18.3.j",
      title: "استبدال المكتبات الثقيلة ببدائل أخف",
      englishTerm: "Replacing Heavy Libraries with Lightweight Alternatives (ريبليسينغ هيفي ليبس)",
      description: "استراتيجية تقييم واستبدال المكتبات القديمة والضخمة ببدائل حديثة وخفيفة الحجم تؤدي نفس الوظيفة بأقل من عُشر الحجم. من أشهر الأمثلة: استبدال Moment.js (حوالي 280KB) بمكتبة Day.js (2KB) أو date-fns، واستبدال Axios بـ Fetch API الأصلية في المتصفح.",
      analogy: "يشبه استبدال شاحنة نقل ديزل ضخمة بدراجة كهربائية سريعة وذكية لتوصيل مظروف رسالة خفيف في وسط المدينة المزدحم.",
      whyItMatters: "يوفر مئات الكيلوبايتات بخطوة واحدة وبدون تغيير في منطق العمل؛ تقليص حجم الحزمة بـ 300KB يُحدث فارقاً فورياً في سرعة تشغيل التطبيق.",
      syntax: "// استبدال Moment.js الضخمة بـ Day.js الخفيفة:\n// npm uninstall moment && npm install dayjs\nimport dayjs from 'dayjs';",
      simpleExample: `// استيراد dayjs الخفيفة للغاية (2KB فقط مقارنة بـ 280KB لـ Moment.js)
import dayjs from 'dayjs';
// استيراد إضافة اللغة العربية عند الحاجة إليها فقط
import 'dayjs/locale/ar';

export default function DateFormatDemo() {
  // تفعيل اللغة العربية
  dayjs.locale('ar');
  // تنسيق التاريخ والوقت بكل سهولة
  const formattedDate = dayjs().format('D MMMM YYYY');

  return (
    <div className="p-3 bg-slate-900 text-white rounded">
      <p className="text-sm">تاريخ اليوم بتنسيق dayjs الخفيف: {formattedDate}</p>
    </div>
  );
}`,
      advancedExample: [
        "// جدول مقارنة وتطبيق بديل Fetch API الأصلي بدلاً من تثبيت axios لتوفير حجم الحزمة",
        "import React, { useState } from 'react';",
        "",
        "// دالة مخصصة نظيفة تحاكي واجهة Axios باستخدام Fetch API الأصلي في المتصفح بحجم 0KB!",
        "export const apiClient = {",
        "  async get(url, config = {}) {",
        "    const response = await fetch(url, {",
        "      method: 'GET',",
        "      headers: { 'Content-Type': 'application/json', ...config.headers },",
        "      ...config",
        "    });",
        "    if (!response.ok) throw new Error('فشل الطلب: ' + response.status);",
        "    return { data: await response.json(), status: response.status };",
        "  },",
        "  ",
        "  async post(url, body, config = {}) {",
        "    const response = await fetch(url, {",
        "      method: 'POST',",
        "      headers: { 'Content-Type': 'application/json', ...config.headers },",
        "      body: JSON.stringify(body),",
        "      ...config",
        "    });",
        "    if (!response.ok) throw new Error('فشل الطلب: ' + response.status);",
        "    return { data: await response.json(), status: response.status };",
        "  }",
        "};",
        "",
        "export function ZeroWeightApiClientDemo() {",
        "  const [user, setUser] = useState(null);",
        "",
        "  const fetchUser = async () => {",
        "    try {",
        "      // استخدام العميل الأصلي بنفس أسلوب Axios تماماً وبدون أي مكتبة إضافية",
        "      const res = await apiClient.get('https://jsonplaceholder.typicode.com/users/1');",
        "      setUser(res.data);",
        "    } catch (e) {",
        "      console.error(e);",
        "    }",
        "  };",
        "",
        "  return (",
        "    <div className='p-4 bg-slate-900 text-white rounded-xl'>",
        "      <button onClick={fetchUser} className='px-3 py-1 bg-teal-600 rounded text-xs font-bold'>",
        "        جلب مستخدم عبر Fetch API الأصلي",
        "      </button>",
        "      {user && <p className='mt-2 text-xs text-teal-400'>المستخدم: {user.name}</p>}",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "يقوم التطبيق بجميع طلبات الشبكة بكفاءة متطابقة بنسبة 100% مع Axios، مع توفير 30KB كاملة من حجم الحزمة.",
      commonMistakes: "تثبيت مكتبة جديدة لحل مشكلة توفرها لغة JavaScript الحديثة أصلياً؛ مثل تثبيت مكتبة لنسخ النصوص بينما navigator.clipboard.writeText متاح في كل المتصفحات، أو تثبيت مكتبة للبحث في الـ URL بينما URLSearchParams مدمج.",
      bestPractices: "استعن بموقع Bundlephobia (bundlephobia.com) قبل تثبيت أي مكتبة لمعرفة حجمها وتأثيرها على زمن التنزيل، وابحث عن البدائل الأخف وزناً دائماً.",
      visualDiagram: "Heavy vs Lightweight Equivalents:\n┌───────────────────────┬────────────────────────┬─────────────┐\n│ Heavy Library         │ Modern Replacement     │ Size Saved  │\n├───────────────────────┼────────────────────────┼─────────────┤\n│ Moment.js (~280 KB)   │ Day.js / date-fns      │ ~98% Less!  │\n│ Axios (~30 KB)        │ Native Fetch API       │ 100% Free!  │\n│ Lodash Full (~70 KB)  │ Native JS / lodash-es  │ ~90% Less!  │\n│ Chalk / Color (~40 KB)│ Colorette / Picocolors │ ~85% Less!  │\n└───────────────────────┴────────────────────────┴─────────────┘"
    }
  ],
  quizzes: [
    {
      id: "q18.3.1",
      question: "ما الدور الذي يلعبه مكوّن <Suspense> عند استخدامه مع React.lazy؟",
      options: [
        "يقوم بضغط كود JavaScript وتحويله إلى صيغة WebAssembly.",
        "يوفر واجهة مستخدم بديلة (Fallback UI) مثل مؤشر تحميل ريثما يكتمل تنزيل ملف كود المكون عبر الشبكة.",
        "يقوم بحذف ملفات الكاش القديمة من المتصفح.",
        "يحول جميع طلبات الشبكة إلى اتصالات WebSocket."
      ],
      correctAnswer: 1,
      explanation: "عندما يُستدعى مكوّن معرف بـ React.lazy لأول مرة، يُعلق المكون عملية التصيير (Suspends)، وهنا يقوم <Suspense> بإظهار خاصية fallback حتى تكتمل عملية التنزيل بنجاح ثم يعرض المكون الحقيقي."
    },
    {
      id: "q18.3.2",
      question: "لماذا يُعتبر وضع loading=\"lazy\" على صورة البانر الرئيسية في أعلى الصفحة (Hero Image) ممارسة سيئة؟",
      options: [
        "لأن المتصفح سيحذف الصورة نهائياً.",
        "لأن ذلك يُؤخر تنزيل أهم عنصر مرئي في الصفحة ريثما تنتهي حسابات التخطيط، مما يُدمر مقياس Largest Contentful Paint (LCP).",
        "لأن تنسيق WebP لا يدعم التحميل الكسول.",
        "لأن المتصفح يمنع استخدام loading على الصور الكبيرة."
      ],
      correctAnswer: 1,
      explanation: "الصور الموجودة أعلى خط الطي (Above the fold) يحتاجها المستخدم فوراً؛ تأخير تحميلها بخاصية lazy loading يجعل المتصفح ينتظر طويلاً قبل طلبها مما يزيد زمن LCP ويخفض درجة أداء الصفحة."
    },
    {
      id: "q18.3.3",
      question: "ما الفرق الأساسي بين import lodash from 'lodash' وبين import { debounce } from 'lodash-es'؟",
      options: [
        "الأولى تدعم Tree Shaking والثانية لا تدعمه.",
        "الأولى تستورد مكتبة CommonJS كاملة وتدرجها في الحزمة، بينما الثانية تعتمد على ES Modules وتسمح للمجمع باستبعاد الدوال غير المستخدمة وحزم debounce فقط.",
        "لا يوجد أي فرق بينهما والحجم النهائي متطابق.",
        "الثانية تتطلب تثبيت مفسر Python على الخادم."
      ],
      correctAnswer: 1,
      explanation: "مكتبات ES Modules تسمح للمجمع بفحص الشجرة ثابتاً (Static Analysis) وحذف كل الكود غير المستورد (Tree Shaking)، بينما CommonJS يُصدر كائناً كبيراً واحداً يُجبر المجمع على تضمين المكتبة بأكملها."
    }
  ],
  exercise: {
    title: "تمرين عملي: إنشاء صفحة تدعم التحميل الكسول للمسارات مع مؤشر تقدم لطيف",
    description: "قم بإنشاء هيكل ملاحة React Router يحتوي على مسارين: /home و /analytics. يجب تحميل مكون صفحة /analytics بشكل كسول باستخدام React.lazy و Suspense، مع توفير Skeleton لشاشة الانتظار.",
    hints: [
      "استخدم React.lazy مع دالة () => import(...) لتعريف صفحة التحليلات.",
      "ضع <Suspense fallback={<Skeleton />}> حول عنصر <Routes>.",
      "تأكد من أن صفحة التحليلات تحتوي على محاكاة لمحتوى ثقيل."
    ],
    solution: `import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// تعريف الصفحة العادية
function HomePage() {
  return <div className="p-4 text-white">أهلاً بك في الصفحة الرئيسية السريعة!</div>;
}

// تعريف صفحة التحليلات الكسولة
const AnalyticsPage = lazy(() => import('./AnalyticsPage'));

// مكون مؤشر التحميل الهيكلي (Skeleton)
function AnalyticsSkeleton() {
  return (
    <div className="p-4 space-y-4 animate-pulse">
      <div className="h-8 bg-slate-700 rounded w-1/3"></div>
      <div className="h-48 bg-slate-800 rounded"></div>
    </div>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-slate-900 text-white flex gap-4 text-sm border-b border-slate-800">
        <Link to="/" className="hover:text-sky-400">الرئيسية</Link>
        <Link to="/analytics" className="hover:text-sky-400">التحليلات (كسول)</Link>
      </nav>

      <div className="p-6 bg-slate-950 min-h-screen text-slate-100">
        <Suspense fallback={<AnalyticsSkeleton />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}`
  },
  infographic: {
    title: "منظومة تسريع تحميل موارد React وتخفيف الحزم",
    subtitle: "الدليل الشامل للتحميل الكسول وتحسين الوسائط والخطوط",
    steps: [
      { step: "1", title: "Route & Component Splitting", desc: "استخدام React.lazy و Suspense لتجزئة التطبيق وتحميل الكود عند الطلب فقط." },
      { step: "2", title: "Next-Gen Media (AVIF/WebP)", desc: "تقليص حجم الصور حتى 60% مع loading='lazy' و decoding='async'." },
      { step: "3", title: "Font & Network Hints", desc: "استخدام WOFF2 مع font-display: swap وتوجيهات preload للموارد الحيوية فقط." },
      { step: "4", title: "Tree Shaking & Slim Libs", desc: "استبدال المكتبات الضخمة مثل Moment بـ Day.js والاعتماد على وحدات ES Modules." }
    ]
  }
};
