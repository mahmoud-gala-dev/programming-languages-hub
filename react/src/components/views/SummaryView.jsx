// src/components/views/SummaryView.jsx
import React from 'react';
import { FileText, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export default function SummaryView({ sectionData, onOpenBook }) {
  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn">
      {/* رأس الملخص */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">ملخص القسم الأول: أساسيات تطوير الويب</h2>
            <p className="text-xs text-slate-400">الخلاصة المركزة لأهم المفاهيم الجوهرية التي يجب أن تتذكرها دائماً</p>
          </div>
        </div>
      </div>

      {/* قائمة النقاط الجوهرية */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-amber-400" />
          أهم 8 قواعد وركائز ذهبية في أساسيات الويب:
        </h3>

        <div className="space-y-3">
          {sectionData.summary.map((point, idx) => (
            <div 
              key={idx}
              className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
            >
              <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-6 mt-6 border-t border-slate-800 flex justify-center">
          <button
            onClick={onOpenBook}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-lg shadow-cyan-600/20 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>عرض وتحميل الكتاب الإلكتروني الكامل (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

