// src/components/views/SummaryView.jsx
import React from 'react';
import { Award, CheckCircle2, ArrowRight, BookOpen, Layers } from 'lucide-react';
import SectionInfographic from '../infographic/SectionInfographic.jsx';

export default function SummaryView({ sectionData, onBackToLessons, onGoToProject, onSelectLesson }) {
  if (!sectionData) return null;
  const summary = sectionData.summary;

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-8 animate-in fade-in duration-300" dir="rtl">
      {/* الترويسة الرئيسية */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#0b0f24] to-indigo-950/40 border border-purple-500/25 relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-purple-400 mb-2 font-mono">
              <Award className="w-4 h-4" />
              <span>ملخص وخلاصة القسم {sectionData.id}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white font-sans">
              {sectionData.title}
            </h1>
            <p className="text-xs text-purple-300/80 font-mono mt-1">{sectionData.englishTitle}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToLessons}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#0f1430] border border-purple-500/30 text-slate-200 hover:text-white transition-all cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة للدروس</span>
            </button>
            {onGoToProject && (
              <button
                onClick={onGoToProject}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/20 transition-all cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                <span>المشروع التطبيقي</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* نقاط الملخص الرئيسية */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#080b18] border border-purple-500/20 shadow-xl space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 font-sans">
          <BookOpen className="w-5 h-5 text-purple-400" />
          <span>أهم ما تعلمته وأتقنته في هذا القسم:</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {summary?.summaryPoints?.map((point, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#0f1430]/70 border border-purple-500/15 flex items-start gap-3 hover:border-purple-400/40 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-200 leading-relaxed font-sans">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* الإنفوجرافيك الشامل للقسم */}
      <SectionInfographic sectionData={sectionData} onSelectLesson={onSelectLesson} />
    </div>
  );
}
