// src/components/lesson/components/BlockToolbar.jsx
// شريط أدوات تحكم تفاعلي مصغر وموحد لكل بلوك من بلوكات الشرح في الدرس
// يوفر: التركيز الفردي (Spotlight Focus)، تكبير الخط (A+)، تصغير الخط (A-)، واستعادة الحجم الافتراضي (↺)
import React from 'react';
import { Maximize2, X, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

export default function BlockToolbar({
  blockId,
  isFocused = false,
  fontSize = 17,
  defaultFontSize = 17,
  onToggleFocus,
  onZoomIn,
  onZoomOut,
  onReset
}) {
  const isCustomSize = fontSize !== defaultFontSize;

  return (
    <div 
      className="flex items-center gap-1 bg-slate-950/90 border border-slate-800/90 rounded-xl p-1 shadow-inner text-xs shrink-0 select-none transition-all duration-200"
      dir="rtl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* زر التركيز الفردي على هذا البلوك فقط */}
      {onToggleFocus && (
        <button
          type="button"
          onClick={() => onToggleFocus(blockId)}
          aria-label={isFocused ? "إلغاء وضع التركيز على هذا البلوك" : "تركيز الشاشة على هذا البلوك فقط"}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
            isFocused
              ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md shadow-cyan-500/30 ring-1 ring-cyan-300'
              : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 border border-transparent hover:border-slate-700'
          }`}
          title={isFocused ? "إلغاء وضع التركيز (ESC)" : "تركيز الشاشة على هذا البلوك فقط وعزل المشتتات"}
        >
          {isFocused ? (
            <>
              <X className="size-3.5" />
              <span>إلغاء التركيز</span>
            </>
          ) : (
            <>
              <Maximize2 className="size-3.5 text-cyan-400" />
              <span>تركيز</span>
            </>
          )}
        </button>
      )}

      {/* فاصل بصري ناعم */}
      <span className="w-px h-4 bg-slate-800" />

      {/* زر تصغير الخط A- */}
      {onZoomOut && (
        <button
          type="button"
          onClick={() => onZoomOut(blockId)}
          disabled={fontSize <= 12}
          aria-label="تصغير خط هذا البلوك"
          className="px-2 py-1 rounded-lg text-[11px] font-mono font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-0.5"
          title="تصغير خط هذا البلوك بمقدار 2px"
        >
          <span>A-</span>
        </button>
      )}

      {/* زر تكبير الخط A+ */}
      {onZoomIn && (
        <button
          type="button"
          onClick={() => onZoomIn(blockId)}
          disabled={fontSize >= 32}
          aria-label="تكبير خط هذا البلوك"
          className="px-2 py-1 rounded-lg text-[11px] font-mono font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-0.5"
          title="تكبير خط هذا البلوك بمقدار 2px"
        >
          <span>A+</span>
        </button>
      )}

      {/* شارة الحجم الحالي المخصص */}
      {isCustomSize && (
        <span 
          className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
          title={`الحجم المخصص لهذا البلوك: ${fontSize}px`}
        >
          {fontSize}px
        </span>
      )}

      {/* زر استعادة الحجم الافتراضي */}
      {onReset && (isCustomSize || isFocused) && (
        <button
          type="button"
          onClick={() => onReset(blockId)}
          aria-label="استعادة الحجم الافتراضي لهذا البلوك"
          className="p-1 rounded-lg text-amber-400 hover:bg-amber-500/15 hover:text-amber-300 transition cursor-pointer"
          title="إعادة الحجم الافتراضي وإلغاء التخصيص الفردي"
        >
          <RotateCcw className="size-3.5" />
        </button>
      )}
    </div>
  );
}
