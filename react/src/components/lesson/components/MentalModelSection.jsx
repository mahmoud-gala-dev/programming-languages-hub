// src/components/lesson/components/MentalModelSection.jsx
// محطة 11: النموذج الذهني وخلف الكواليس (Mental Model & Under the Hood) مع إنفوجرافيك SVG لمحرك React ودعم التكبير وملء الشاشة
import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Workflow, 
  Sparkles, 
  Zap, 
  Activity, 
  GitBranch,
  ShieldCheck,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  X
} from 'lucide-react';

export default function MentalModelSection({ 
  subtopic, 
  readingFontSize = 17,
  renderHighlightedContent,
  toolbar = null
}) {
  const [diagramScale, setDiagramScale] = useState(1);
  const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState(false);

  // إغلاق النافذة المنبثقة بزر Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreenModalOpen) {
        setIsFullscreenModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreenModalOpen]);

  if (!subtopic) return null;

  const rawMentalModel = subtopic.mentalModel || '';
  const mentalModelText = rawMentalModel || 'عند تنفيذ هذا المفهوم في React، يقوم محرك التوفيق (Reconciliation Engine) بإنشاء عقد Fiber جديدة في الذاكرة ومقارنتها عبر خوارزمية Diffing عالية الكفاءة مع الشجرة السابقة. يتم حصر التغييرات الفعلية فقط ودفعها في مرحلة الالتزام (Commit Phase) إلى الـ Real DOM دفعة واحدة، مما يمنع إعادة رسم الشاشة غير الضروري ويحافظ على استجابة 60 إطاراً في الثانية.';

  const safeRender = (text) => {
    if (typeof renderHighlightedContent === 'function') {
      return renderHighlightedContent(text);
    }
    return text;
  };

  const handleZoomIn = () => {
    setDiagramScale(prev => Math.min(2.0, Number((prev + 0.25).toFixed(2))));
  };

  const handleZoomOut = () => {
    setDiagramScale(prev => Math.max(0.75, Number((prev - 0.25).toFixed(2))));
  };

  const handleZoomReset = () => {
    setDiagramScale(1);
  };

  const renderSvgDiagram = (isModal = false) => (
    <svg 
      viewBox="0 0 900 240" 
      className="w-full h-auto drop-shadow-xl select-none"
      style={{ direction: 'ltr', minWidth: '820px' }}
    >
      <defs>
        <linearGradient id={isModal ? "pipeGrad1M" : "pipeGrad1"} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id={isModal ? "pipeGrad2M" : "pipeGrad2"} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7e22ce" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id={isModal ? "pipeGrad3M" : "pipeGrad3"} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id={isModal ? "pipeGrad4M" : "pipeGrad4"} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>

      {/* خط الربط الرئيسي للأنابيب */}
      <path d="M 80 90 L 820 90" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />

      {/* 1. مرحلة الإطلاق (Trigger Phase) */}
      <g transform="translate(40, 30)">
        <rect width="140" height="130" rx="14" fill="#0f172a" stroke="#0284c7" strokeWidth="2" />
        <rect width="140" height="26" rx="14" fill="#0284c7" />
        <rect y="16" width="140" height="10" fill="#0284c7" />
        <text x="70" y="18" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">1. Trigger (المثير)</text>
        <circle cx="70" cy="55" r="18" fill="#0369a1" />
        <text x="70" y="60" fill="#ffffff" fontSize="13" textAnchor="middle">⚡</text>
        <text x="70" y="90" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">setState / Props</text>
        <text x="70" y="105" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="Cairo">طلب جدولة تحديث</text>
        <text x="70" y="118" fill="#64748b" fontSize="8" textAnchor="middle">User Event / Hook</text>
      </g>

      {/* سهم 1 */}
      <path d="M 185 90 L 215 90" stroke="#38bdf8" strokeWidth="3" />

      {/* 2. مرحلة التصيير (Render Phase) */}
      <g transform="translate(220, 30)">
        <rect width="150" height="130" rx="14" fill="#0f172a" stroke="#7e22ce" strokeWidth="2" />
        <rect width="150" height="26" rx="14" fill="#7e22ce" />
        <rect y="16" width="150" height="10" fill="#7e22ce" />
        <text x="75" y="18" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">2. Render (التصيير)</text>
        <circle cx="75" cy="55" r="18" fill="#6b21a8" />
        <text x="75" y="60" fill="#ffffff" fontSize="13" textAnchor="middle">⚙️</text>
        <text x="75" y="90" fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">دوال نقية Pure f(x)</text>
        <text x="75" y="105" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="Cairo">بناء شجرة الـ Fiber</text>
        <text x="75" y="118" fill="#a855f7" fontSize="8" fontWeight="bold" textAnchor="middle">في الذاكرة فقط (No DOM)</text>
      </g>

      {/* سهم 2 */}
      <path d="M 375 90 L 405 90" stroke="#c084fc" strokeWidth="3" />

      {/* 3. خوارزمية التوفيق والمطابقة (Diffing Algorithm) */}
      <g transform="translate(410, 30)">
        <rect width="160" height="130" rx="14" fill="#0f172a" stroke="#4338ca" strokeWidth="2.5" />
        <rect width="160" height="26" rx="14" fill="#4338ca" />
        <rect y="16" width="160" height="10" fill="#4338ca" />
        <text x="80" y="18" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">3. Diffing (التوفيق)</text>
        <circle cx="80" cy="55" r="18" fill="#3730a3" />
        <text x="80" y="60" fill="#ffffff" fontSize="13" textAnchor="middle">🔄</text>
        <text x="80" y="90" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">خوارزمية O(n) السريعة</text>
        <text x="80" y="105" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="Cairo">مقارنة الشجرة القديمة</text>
        <text x="80" y="118" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">حصر الفروقات الصافية فقط</text>
      </g>

      {/* سهم 3 */}
      <path d="M 575 90 L 605 90" stroke="#818cf8" strokeWidth="3" />

      {/* 4. مرحلة الالتزام (Commit Phase) */}
      <g transform="translate(610, 30)">
        <rect width="135" height="130" rx="14" fill="#0f172a" stroke="#059669" strokeWidth="2" />
        <rect width="135" height="26" rx="14" fill="#059669" />
        <rect y="16" width="135" height="10" fill="#059669" />
        <text x="67" y="18" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">4. Commit (الالتزام)</text>
        <circle cx="67" cy="55" r="18" fill="#047857" />
        <text x="67" y="60" fill="#ffffff" fontSize="13" textAnchor="middle">💾</text>
        <text x="67" y="90" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">تعديل الـ Real DOM</text>
        <text x="67" y="105" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="Cairo">دفعة ذرية واحدة</text>
        <text x="67" y="118" fill="#6ee7b7" fontSize="8" textAnchor="middle" fontFamily="Cairo">تشغيل Effects والتنظيف</text>
      </g>

      {/* سهم 4 */}
      <path d="M 750 90 L 775 90" stroke="#34d399" strokeWidth="3" />

      {/* 5. شاشة العرض للمستخدم (Paint & View) */}
      <g transform="translate(780, 45)">
        <circle cx="45" cy="45" r="38" fill="#064e3b" stroke="#10b981" strokeWidth="2.5" />
        <text x="45" y="40" fill="#ffffff" fontSize="14" textAnchor="middle">🖥️</text>
        <text x="45" y="58" fill="#a7f3d0" fontSize="11" fontWeight="900" textAnchor="middle">60 FPS</text>
        <text x="45" y="70" fill="#6ee7b7" fontSize="8" textAnchor="middle">Smooth Paint</text>
      </g>

      {/* شريط الإيضاح السفلي للمخطط */}
      <rect x="50" y="185" width="800" height="40" rx="10" fill="#020617" stroke="#1e293b" />
      <text x="70" y="210" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="Cairo">النتيجة المعمارية:</text>
      <text x="175" y="210" fill="#e2e8f0" fontSize="11" fontFamily="Cairo">حسابات شاقة في الذاكرة (Memory Work) ➔ لمس طفيف جداً للـ Real DOM ➔ أداء فائق وسرعة صاروخية</text>
    </svg>
  );

  return (
    <div 
      id="lesson-section-mental-model" 
      data-lesson-section="mental-model" 
      className="scroll-mt-24 sm:scroll-mt-28 bg-slate-900/95 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden transition-all duration-300"
    >
      {/* توهج بنفسجي/أزرق ناعم في الخلفية */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* ترويسة القسم والشارة المعمارية */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-3">
          <span className="size-8 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center text-sm font-mono font-black shadow-inner">
            11
          </span>
          <div>
            <h3 className="text-base sm:text-lg font-black text-indigo-300 flex items-center gap-2">
              <Cpu className="size-5 text-indigo-400" />
              <span>النموذج الذهني وخلف الكواليس (Mental Model & Under the Hood):</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              كيف يفكر مهندس React المحترف؟ وما الذي يفعله محرك التصيير والـ Fiber داخل الذاكرة خلف الكواليس؟
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-mono text-indigo-300 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800/50 flex items-center gap-1.5 shrink-0">
            <Activity className="size-3.5" />
            <span>React Engine Internals</span>
          </span>
          {toolbar}
        </div>
      </div>

      {/* كبسولة المعادلة الذهبية: UI = f(State) */}
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950/40 to-slate-950 border border-indigo-500/30 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-xl shrink-0 shadow-inner">
            🧠
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-indigo-300 font-sans">المعادلة المعمارية التأسيسية لـ React:</span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono text-[10px] font-bold">CORE LAW</span>
            </div>
            <div className="text-xl sm:text-2xl font-black font-mono text-white tracking-wider mt-0.5">
              <span className="text-cyan-400">UI</span> = <span className="text-purple-400">f</span>(<span className="text-amber-400">State</span>, <span className="text-emerald-400">Props</span>)
            </div>
          </div>
        </div>

        <p 
          className="text-slate-300 md:max-w-md leading-relaxed font-sans text-pretty transition-all duration-150"
          style={{ 
            fontSize: `${Math.max(readingFontSize - 2, 13)}px`,
            lineHeight: `${Math.round(readingFontSize * 1.55)}px`
          }}
        >
          واجهة المستخدم ليست شيئاً تقوم بتعديله يدوياً عبر <code className="text-cyan-300 font-mono text-xs">document.getElementById</code>، بل هي <strong>انعكاس رياضي نقي</strong> لحالة بياناتك الراهنة. غيّر البيانات، وسيتكفل محرك React بنقل الواجهة تلقائياً وبأقصى كفاءة.
        </p>
      </div>

      {/* إنفوجرافيك SVG المعماري: دورة محرك React مع شريط أدوات التكبير */}
      <div className="bg-slate-950/90 border border-slate-800/90 rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden space-y-3">
        {/* شريط أدوات التحكم في حجم وتكبير المخطط */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/70 pb-3">
          <div className="flex items-center gap-2">
            <Workflow className="size-4 text-indigo-400" />
            <span className="text-xs sm:text-sm font-bold text-slate-200 font-sans">
              مخطط تدفق العمليات في محرك React (Execution Pipeline & Reconciliation)
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl shadow-inner">
            <button
              onClick={handleZoomOut}
              disabled={diagramScale <= 0.75}
              title="تصغير المخطط"
              aria-label="تصغير المخطط"
              className="size-7 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ZoomOut className="size-3.5" />
            </button>

            <span className="px-2 font-mono text-xs font-bold text-indigo-300 tabular-nums min-w-[44px] text-center">
              {Math.round(diagramScale * 100)}%
            </span>

            <button
              onClick={handleZoomIn}
              disabled={diagramScale >= 2.0}
              title="تكبير المخطط"
              aria-label="تكبير المخطط"
              className="size-7 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ZoomIn className="size-3.5" />
            </button>

            {diagramScale !== 1 && (
              <button
                onClick={handleZoomReset}
                title="إعادة ضبط الحجم الافتراضي"
                aria-label="إعادة ضبط الحجم الافتراضي"
                className="size-7 rounded-lg flex items-center justify-center text-amber-400 hover:bg-slate-800 transition-all"
              >
                <RotateCcw className="size-3.5" />
              </button>
            )}

            <div className="h-4 w-px bg-slate-800 mx-0.5" />

            <button
              onClick={() => setIsFullscreenModalOpen(true)}
              title="عرض المخطط بملء الشاشة بجودة فائقة"
              aria-label="عرض المخطط بملء الشاشة"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold text-indigo-300 bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-800/40 transition-all cursor-pointer"
            >
              <Maximize2 className="size-3.5" />
              <span className="hidden md:inline">تكبير كامل</span>
            </button>
          </div>
        </div>

        {/* حاوية الرسم التفاعلية القابلة للتكبير والتحريك السلس */}
        <div className="w-full overflow-x-auto overflow-y-hidden pb-2 custom-scrollbar">
          <div 
            className="w-full mx-auto transition-transform duration-200 origin-top-center"
            style={{ 
              width: `${Math.round(100 * diagramScale)}%`,
              minWidth: diagramScale > 1 ? `${Math.round(900 * diagramScale)}px` : '100%'
            }}
          >
            {renderSvgDiagram(false)}
          </div>
        </div>
      </div>

      {/* الشرح المعماري التفصيلي مع حجم الخط المخصص والمريح */}
      <div className="space-y-3">
        <div className="text-xs font-bold text-indigo-300 flex items-center gap-1.5 font-sans">
          <Sparkles className="size-4 text-indigo-400" />
          <span>شرح ما يدور خلف الكواليس في هذا الدرس تحديداً:</span>
        </div>
        <p 
          className="text-slate-200 leading-relaxed font-sans text-pretty bg-slate-950/60 border border-slate-800/80 p-5 rounded-2xl transition-all duration-150"
          style={{ 
            fontSize: `${readingFontSize}px`, 
            lineHeight: `${Math.round(readingFontSize * 1.65)}px` 
          }}
        >
          {safeRender(mentalModelText)}
        </p>
      </div>

      {/* الركائز الثلاث لمحرك React في بيئات الإنتاج */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="bg-slate-950/70 border border-slate-800/85 p-4 rounded-2xl space-y-2">
          <div className="text-xs font-bold text-sky-400 flex items-center gap-1.5 font-sans">
            <Zap className="size-4" />
            <span>1. مرحلة العرض (Render Phase)</span>
          </div>
          <p 
            className="text-slate-300 leading-relaxed font-sans text-pretty transition-all duration-150"
            style={{ 
              fontSize: `${Math.max(readingFontSize - 2, 13)}px`,
              lineHeight: `${Math.round(readingFontSize * 1.55)}px`
            }}
          >
            المكونات في React هي دوال نقية (Pure Functions)؛ تحسب الشجرة الافتراضية بدون أي تأثيرات جانبية (Side Effects) أو تعديل مباشر على الـ DOM الفعلي.
          </p>
        </div>

        <div className="bg-slate-950/70 border border-slate-800/85 p-4 rounded-2xl space-y-2">
          <div className="text-xs font-bold text-purple-400 flex items-center gap-1.5 font-sans">
            <GitBranch className="size-4" />
            <span>2. خوارزمية التوفيق (Diffing O(n))</span>
          </div>
          <p 
            className="text-slate-300 leading-relaxed font-sans text-pretty transition-all duration-150"
            style={{ 
              fontSize: `${Math.max(readingFontSize - 2, 13)}px`,
              lineHeight: `${Math.round(readingFontSize * 1.55)}px`
            }}
          >
            مقارنة الشجرة السابقة بالجديدة بتعقيد زمني خطي O(n)، حيث تفحص العقد من نفس النوع وتكتشف التغييرات في الخصائص لتحديد التعديل الصافي فقط.
          </p>
        </div>

        <div className="bg-slate-950/70 border border-slate-800/85 p-4 rounded-2xl space-y-2">
          <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 font-sans">
            <ShieldCheck className="size-4" />
            <span>3. مرحلة الالتزام (Commit Phase)</span>
          </div>
          <p 
            className="text-slate-300 leading-relaxed font-sans text-pretty transition-all duration-150"
            style={{ 
              fontSize: `${Math.max(readingFontSize - 2, 13)}px`,
              lineHeight: `${Math.round(readingFontSize * 1.55)}px`
            }}
          >
            تطبيق التعديلات الحتمية في الـ Real DOM دفعة واحدة (Atomic Batching)، مع تشغيل خطافات الآثار الجانبية (Effects) وتنظيف الموارد المستهلكة في الذاكرة.
          </p>
        </div>
      </div>

      {/* نافذة التكبير بملء الشاشة الفخمة (Fullscreen Modal Lightbox) */}
      {isFullscreenModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col p-4 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* ترويسة النافذة المنبثقة */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="size-8 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center font-bold">
                11
              </span>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-sans flex items-center gap-2">
                  <span>مخطط تدفق العمليات في محرك React (Execution Pipeline)</span>
                  <span className="text-xs font-mono text-indigo-400 px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800/40">
                    High Resolution
                  </span>
                </h4>
                <p className="text-xs text-slate-400 font-sans">
                  عرض مكبّر عالي الدقة يتيح فحص دورة حياة وتوفيق محرك React الداخلي
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2 py-1 rounded-xl">
                <button
                  onClick={handleZoomOut}
                  disabled={diagramScale <= 0.75}
                  className="size-7 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40"
                  title="تصغير"
                >
                  <ZoomOut className="size-4" />
                </button>
                <span className="font-mono text-xs font-bold text-indigo-300 px-2 min-w-[44px] text-center">
                  {Math.round(diagramScale * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  disabled={diagramScale >= 2.0}
                  className="size-7 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40"
                  title="تكبير"
                >
                  <ZoomIn className="size-4" />
                </button>
                <button
                  onClick={handleZoomReset}
                  className="size-7 rounded-lg flex items-center justify-center text-amber-400 hover:bg-slate-800"
                  title="إعادة ضبط"
                >
                  <RotateCcw className="size-4" />
                </button>
              </div>

              <button
                onClick={() => setIsFullscreenModalOpen(false)}
                className="size-9 rounded-xl bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/30 flex items-center justify-center transition-all cursor-pointer"
                title="إغلاق (Esc)"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* محتوى المخطط المكبّر داخل النافذة مع إمكانية التمرير الحر */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 bg-slate-900/40 rounded-2xl border border-slate-800/80">
            <div 
              className="w-full max-w-6xl mx-auto transition-transform duration-200"
              style={{ 
                transform: `scale(${diagramScale})`,
                transformOrigin: 'center center'
              }}
            >
              {renderSvgDiagram(true)}
            </div>
          </div>

          {/* تذييل النافذة */}
          <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-sans">
            <span>💡 يمكنك الضغط على مفتاح <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[10px]">Esc</kbd> للخروج من وضع التكبير.</span>
            <span className="font-mono text-indigo-400 text-[11px]">React 19 Concurrent Fiber Reconciliation</span>
          </div>
        </div>
      )}
    </div>
  );
}
