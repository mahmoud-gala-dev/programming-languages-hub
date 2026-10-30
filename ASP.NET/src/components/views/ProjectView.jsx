// src/components/views/ProjectView.jsx
import React, { useState } from 'react';
import { Rocket, CheckCircle2, ArrowRight, Code2, Sparkles, FolderArchive, Layers } from 'lucide-react';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function ProjectView({ sectionData, onBackToLessons, onAskTutor }) {
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const { showToast, triggerConfetti } = useToast();

  if (!sectionData) return null;
  const project = sectionData.summary?.miniProject;
  if (!project) return null;

  const toggleStep = (idx) => {
    const next = new Set(completedSteps);
    if (next.has(idx)) {
      next.delete(idx);
    } else {
      next.add(idx);
      if (next.size === (project.requirements?.length || 0)) {
        triggerConfetti();
        showToast("مبارك! لقد أنجزت كافة متطلبات المشروع بنجاح 🚀", "success");
      }
    }
    setCompletedSteps(next);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6 animate-in fade-in duration-300" dir="rtl">
      {/* الترويسة الرئيسية */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#0b0f24] to-cyan-950/40 border border-purple-500/25 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-2 font-mono">
            <Rocket className="w-4 h-4" />
            <span>المشروع التطبيقي الشامل (Practical Hands-On Project)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white font-sans">
            {project.title}
          </h1>
          <p className="text-xs text-purple-300/80 font-mono mt-1">
            القسم {sectionData.id} • {sectionData.title}
          </p>
        </div>

        <button
          onClick={onBackToLessons}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#0f1430] border border-purple-500/30 text-slate-200 hover:text-white transition-all cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للدروس</span>
        </button>
      </div>

      {/* وصف المشروع */}
      <div className="p-6 rounded-3xl bg-[#080b18] border border-purple-500/20 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-purple-300 flex items-center gap-2 font-sans">
          <Layers className="w-4 h-4 text-purple-400" />
          <span>وصف وفكرة المشروع:</span>
        </h3>
        <p className="text-sm text-slate-200 leading-relaxed font-sans">
          {project.description}
        </p>

        {/* متطلبات المشروع وقائمة التحقق */}
        <div className="pt-4 border-t border-purple-500/15">
          <h4 className="text-xs font-bold text-white mb-3 font-sans">
            متطلبات ومراحل الإنجاز (Checklist):
          </h4>
          <div className="space-y-2.5">
            {project.requirements?.map((req, idx) => {
              const isChecked = completedSteps.has(idx);
              return (
                <div
                  key={idx}
                  onClick={() => toggleStep(idx)}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                    isChecked
                      ? 'bg-purple-950/30 border-purple-500/40 text-purple-200'
                      : 'bg-[#0f1430]/60 border-purple-500/15 text-slate-300 hover:border-purple-400/30'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 transition-all ${
                    isChecked
                      ? 'bg-purple-600 border-purple-500 text-white'
                      : 'border-slate-600 bg-slate-800'
                  }`}>
                    {isChecked && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                  <span className={`text-xs font-medium font-sans ${isChecked ? 'line-through opacity-80' : ''}`}>
                    {req}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* التسليم والمخرجات */}
        {project.deliverables && (
          <div className="pt-4 border-t border-purple-500/15 flex items-center gap-3 text-xs text-slate-400 font-sans">
            <FolderArchive className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>المخرجات المتوقعة: <strong className="text-slate-200">{project.deliverables}</strong></span>
          </div>
        )}
      </div>

      {/* زر طلب استشارة من المعلم الذكي */}
      {onAskTutor && (
        <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            <div>
              <h4 className="text-xs font-bold text-white font-sans">هل تحتاج لمساعدة أو توجيه كود في مشروعك؟</h4>
              <p className="text-[11px] text-slate-400 font-sans">معلم الذكاء الاصطناعي Gemini جاهز لمراجعة كودك أو اقتراح هيكل المشروع.</p>
            </div>
          </div>
          <button
            onClick={onAskTutor}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all cursor-pointer whitespace-nowrap"
          >
            سؤال المعلم الذكي الآن
          </button>
        </div>
      )}
    </div>
  );
}
