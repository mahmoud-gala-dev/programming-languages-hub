// src/components/common/SwalModal.jsx
// نافذة تأكيد ورسائل تفاعلية تحاكي SweetAlert (Swal) بأعلى معايير التصميم العربي العصري
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, HelpCircle, X } from 'lucide-react';

export default function SwalModal({ config, onConfirm, onDismiss }) {
  const [inputValue, setInputValue] = useState(config.inputValue || "");
  const inputRef = useRef(null);

  useEffect(() => {
    if (config.input && inputRef.current) {
      inputRef.current.focus();
    }
  }, [config.input]);

  // إغلاق بمفتاح Escape وتأكيد بمفتاح Enter في حقول الإدخال
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onDismiss();
      } else if (e.key === "Enter" && !e.shiftKey && config.input !== 'textarea') {
        onConfirm(inputValue);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputValue, config.input, onConfirm, onDismiss]);

  const icons = {
    success: (
      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-2 animate-bounce">
        <CheckCircle2 className="w-9 h-9" />
      </div>
    ),
    warning: (
      <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center text-amber-400 mb-2">
        <AlertTriangle className="w-9 h-9" />
      </div>
    ),
    error: (
      <div className="w-16 h-16 rounded-full bg-rose-500/20 border-2 border-rose-500/50 flex items-center justify-center text-rose-400 mb-2">
        <AlertCircle className="w-9 h-9" />
      </div>
    ),
    info: (
      <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-500/50 flex items-center justify-center text-cyan-400 mb-2">
        <Info className="w-9 h-9" />
      </div>
    ),
    question: (
      <div className="w-16 h-16 rounded-full bg-indigo-500/20 border-2 border-indigo-500/50 flex items-center justify-center text-indigo-400 mb-2">
        <HelpCircle className="w-9 h-9" />
      </div>
    )
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn" dir="rtl">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-md p-6 shadow-2xl relative flex flex-col items-center text-center animate-slideUp">
        {/* زر إغلاق علوي */}
        <button
          onClick={onDismiss}
          className="absolute top-4 left-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          title="إغلاق"
        >
          <X className="w-4 h-4" />
        </button>

        {/* أيقونة الحالة */}
        {icons[config.icon] || icons.info}

        {/* عنوان النافذة */}
        <h3 className="text-lg font-bold text-white mb-2 font-sans">
          {config.title}
        </h3>

        {/* نص الرسالة */}
        {config.text && (
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 max-w-xs font-sans">
            {config.text}
          </p>
        )}

        {/* حقل إدخال اختياري */}
        {config.input && (
          <div className="w-full mb-5 text-start">
            {config.input === 'textarea' ? (
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={config.inputPlaceholder}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-500 resize-none h-24"
              />
            ) : (
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={config.inputPlaceholder}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
              />
            )}
          </div>
        )}

        {/* أزرار الإجراءات */}
        <div className="flex items-center justify-center gap-3 w-full mt-2">
          {config.showCancelButton && (
            <button
              onClick={onDismiss}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all cursor-pointer"
            >
              {config.cancelButtonText}
            </button>
          )}

          <button
            onClick={() => onConfirm(inputValue)}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg cursor-pointer ${config.confirmButtonColor}`}
          >
            {config.confirmButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

