// src/components/common/ToastContainer.jsx
// حاوية إشعارات Toast العائمة مع عداد وقت وأيقونات ملونة وتصميم متوافق مع RTL
import React, { useEffect } from 'react';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';

function ToastItem({ toast, onRemove }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id);
    }, toast.duration);

    return () => clearTimeout(timer);
  }, [toast, onRemove]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />
  };

  const borders = {
    success: "border-emerald-500/40 bg-slate-900/95 text-emerald-200",
    warning: "border-amber-500/40 bg-slate-900/95 text-amber-200",
    error: "border-rose-500/40 bg-slate-900/95 text-rose-200",
    info: "border-cyan-500/40 bg-slate-900/95 text-cyan-200"
  };

  return (
    <div 
      className={`flex items-center justify-between gap-3 p-3.5 rounded-xl border shadow-2xl backdrop-blur-md min-w-[280px] max-w-sm animate-slideUp transition-all duration-300 pointer-events-auto ${borders[toast.type] || borders.info}`}
      dir="rtl"
    >
      <div className="flex items-center gap-2.5">
        {icons[toast.type] || icons.info}
        <span className="text-xs font-semibold text-slate-100 font-sans leading-normal">
          {toast.message}
        </span>
      </div>

      <button
        onClick={() => onRemove(toast.id)}
        className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
        title="إغلاق"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

export default function ToastContainer({ toasts, onRemove }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2.5 pointer-events-none" dir="rtl">
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
}

