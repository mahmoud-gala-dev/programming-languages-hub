// src/components/lesson/components/BlockFocusStudio.jsx
// استوديو التركيز المعماري المخصص لكل بلوك من بلوكات الدرس (Pro Block Focus Studio)
// مبني بنمط استوديو الكود بكامل الشاشة 100vw × 100vh عبر React Portal مباشرة إلى document.body
// يوفر: شريط نافذة علوي احترافي، تحكم كامل في حجم الخط، دعم ملء شاشة المتصفح العتادية F11، وقفل التمرير العام
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Monitor, 
  Minimize2, 
  X, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function BlockFocusStudio({
  blockId,
  blockTitle = "قسم الشرح المعماري المخصص",
  blockIcon = null,
  subtopicTitle = "",
  fontSize = 17,
  defaultFontSize = 17,
  onZoomIn,
  onZoomOut,
  onReset,
  onClose,
  children
}) {
  const [isNativeFullscreen, setIsNativeFullscreen] = useState(false);

  // إدارة قفل تمرير الصفحة الأصلية واختصارات لوحة المفاتيح
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // 1. قفل تمرير الصفحة الأصلية لمنع التشتت
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 2. مستمع اختصارات لوحة المفاتيح
    const handleKeyDown = (e) => {
      const isInput = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA';

      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen?.().catch(() => {});
        } else {
          onClose?.();
        }
      } else if (!isInput) {
        if (e.key.toLowerCase() === 'f') {
          toggleNativeFullscreen();
        } else if (e.key === '+' || e.key === '=') {
          onZoomIn?.();
        } else if (e.key === '-') {
          onZoomOut?.();
        } else if (e.key === '0') {
          onReset?.();
        }
      }
    };

    // 3. مراقبة تغيير حالة ملء الشاشة العتادية
    const handleFullscreenChange = () => {
      setIsNativeFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [onClose, onZoomIn, onZoomOut, onReset]);

  // دالة تفعيل/إلغاء ملء شاشة المتصفح العتادية (F11 Fullscreen API)
  const toggleNativeFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-50 w-screen h-dvh min-h-dvh bg-[#080c14] text-slate-100 flex flex-col select-none overflow-hidden animate-in fade-in duration-200"
      dir="rtl"
      role="dialog"
      aria-modal="true"
      aria-label={`استوديو التركيز: ${blockTitle}`}
    >
      {/* 1. شريط أدوات الاستوديو العلوي بنمط بيئات العمل الاحترافية (Pro Studio Topbar) */}
      <header className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-2.5 bg-slate-900 border-b border-slate-800 shrink-0 gap-3 z-10 shadow-xl">
        
        {/* أزرار النافذة الزخرفية + مسار وعنوان البلوك */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-1.5 pl-2 border-l border-slate-800 hidden sm:flex shrink-0">
            <span className="size-3 rounded-full bg-rose-500/90 inline-block" />
            <span className="size-3 rounded-full bg-amber-500/90 inline-block" />
            <span className="size-3 rounded-full bg-emerald-500/90 inline-block" />
          </div>

          <div className="size-8 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold shrink-0 shadow-inner">
            {blockIcon || <Sparkles className="size-4" />}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-extrabold text-white font-sans truncate max-w-xs sm:max-w-md lg:max-w-lg text-balance">
                {blockTitle}
              </h3>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 shrink-0">
                Focus Studio
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans flex items-center gap-2 truncate">
              <span className="truncate max-w-[200px] sm:max-w-[320px]">{subtopicTitle || 'خريطة طريق React'}</span>
              <span>•</span>
              <span className="text-cyan-400 font-mono text-[10px] shrink-0">وضع التركيز المعماري المخصص</span>
            </p>
          </div>
        </div>

        {/* أدوات التحكم الاحترافية في البلوك */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          
          {/* شريط التحكم بحجم الخط لهذا البلوك فقط */}
          <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-800 text-slate-300">
            <button 
              onClick={onZoomOut} 
              disabled={fontSize <= 12}
              aria-label="تصغير خط هذا البلوك"
              className="p-1.5 hover:text-white hover:bg-slate-800 rounded transition-colors disabled:opacity-40 cursor-pointer" 
              title="تصغير خط هذا البلوك (-)"
            >
              <ZoomOut className="size-3.5" />
            </button>
            <span className="px-2 text-xs font-mono text-cyan-300 select-none tabular-nums font-bold min-w-[38px] text-center">
              {fontSize}px
            </span>
            <button 
              onClick={onZoomIn} 
              disabled={fontSize >= 34}
              aria-label="تكبير خط هذا البلوك"
              className="p-1.5 hover:text-white hover:bg-slate-800 rounded transition-colors disabled:opacity-40 cursor-pointer" 
              title="تكبير خط هذا البلوك (+)"
            >
              <ZoomIn className="size-3.5" />
            </button>
            {fontSize !== defaultFontSize && (
              <button 
                onClick={onReset} 
                aria-label="إعادة ضبط حجم الخط"
                className="p-1.5 hover:text-amber-400 hover:bg-slate-800 rounded transition-colors border-r border-slate-800 cursor-pointer" 
                title="إعادة ضبط الحجم الافتراضي (0)"
              >
                <RotateCcw className="size-3 text-amber-400" />
              </button>
            )}
          </div>

          {/* زر ملء شاشة المتصفح العتادية (F11 Fullscreen API) */}
          <button
            onClick={toggleNativeFullscreen}
            aria-label="ملء شاشة المتصفح"
            className="p-1.5 text-slate-400 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
            title={isNativeFullscreen ? "الخروج من ملء شاشة المتصفح (F)" : "ملء شاشة المتصفح بالكامل لإخفاء القوائم (F)"}
          >
            {isNativeFullscreen ? <Minimize2 className="size-4 text-cyan-400" /> : <Monitor className="size-4 text-slate-300" />}
          </button>

          {/* زر إنهاء التركيز والعودة لسياق الدرس الكامل */}
          <button
            onClick={() => {
              if (document.fullscreenElement) {
                document.exitFullscreen?.().catch(() => {});
              }
              onClose?.();
            }}
            aria-label="إنهاء وضع التركيز"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-rose-300 hover:text-white bg-rose-950/40 hover:bg-rose-900/80 border border-rose-800/50 rounded-lg transition-all cursor-pointer font-bold shadow-sm"
            title="الخروج من وضع التركيز والعودة لسياق الدرس (Esc)"
          >
            <X className="size-4 text-rose-400" />
            <span>إنهاء التركيز</span>
            <kbd className="hidden sm:inline font-mono text-[10px] bg-rose-900/60 px-1 rounded border border-rose-700/50">Esc</kbd>
          </button>

        </div>
      </header>

      {/* 2. مساحة الاستوديو الرئيسية للمحتوى (Focused Studio Canvas) */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-gradient-to-b from-[#080c14] via-[#0b101d] to-[#080c14] custom-scrollbar relative select-text">
        {/* توهجات خلفية هادئة */}
        <div className="absolute top-0 right-1/4 size-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 size-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

        {/* حاوية المحتوى بكامل الاتساع والراحة دون قيود ضيقة */}
        <div className="w-full max-w-5xl mx-auto space-y-6 relative z-10 pb-12">
          {children}
        </div>
      </main>

      {/* 3. شريط الحالة السفلي (Pro Studio Statusbar) */}
      <footer className="h-7 bg-[#0a0e18] border-t border-slate-800/90 px-4 flex items-center justify-between text-[11px] text-slate-400 font-sans shrink-0 select-none">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-cyan-400 font-semibold">
            <Sparkles className="size-3" />
            <span>استوديو التركيز المعماري المخصص (Focus Studio Mode)</span>
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="hidden sm:inline">اضغط <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-[10px] text-slate-300 font-mono">Esc</kbd> للعودة إلى الدرس</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px]">
          <span>Font: <strong className="text-cyan-300">{fontSize}px</strong></span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Studio Active</span>
          </span>
        </div>
      </footer>
    </div>,
    document.body
  );
}
