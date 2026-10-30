// src/components/common/ToastContainer.jsx
import React from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export default function ToastContainer({ toasts, onRemove }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none no-print" dir="rtl">
      {toasts.map((toast) => {
        let bgStyle = 'bg-slate-900 border-slate-700 text-slate-100';
        let IconComp = Info;
        let iconColor = 'text-amber-400';

        if (toast.type === 'success') {
          bgStyle = 'bg-emerald-950/90 border-emerald-500/40 text-emerald-100 shadow-emerald-950/40';
          IconComp = CheckCircle2;
          iconColor = 'text-emerald-400';
        } else if (toast.type === 'error') {
          bgStyle = 'bg-rose-950/90 border-rose-500/40 text-rose-100 shadow-rose-950/40';
          IconComp = AlertCircle;
          iconColor = 'text-rose-400';
        } else if (toast.type === 'warning') {
          bgStyle = 'bg-amber-950/90 border-amber-500/40 text-amber-100 shadow-amber-950/40';
          IconComp = AlertTriangle;
          iconColor = 'text-amber-400';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between gap-3 p-3.5 rounded-xl border shadow-xl backdrop-blur-md transition-all animate-slideInUp ${bgStyle}`}
          >
            <div className="flex items-center gap-2.5">
              <IconComp className={`w-5 h-5 shrink-0 ${iconColor}`} />
              <p className="text-xs font-semibold leading-relaxed font-sans">{toast.message}</p>
            </div>
            <button
              onClick={() => onRemove(toast.id)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
