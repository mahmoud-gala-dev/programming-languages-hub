// src/components/views/SummaryView.jsx
import React from 'react';
import { Award, CheckCircle, Sparkles, Lightbulb, BookOpen, HelpCircle } from 'lucide-react';

export default function SummaryView({ sectionData, currentSection, onBackToLessons }) {
  const section = currentSection || sectionData;
  if (!section) return null;

  const summary = section.summary || {};
  const overview = summary.overview || '';
  const goldenRules = summary.goldenRules || [];
  const keyTakeaways = summary.keyTakeaways || summary.keyConcepts || [];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn text-slate-100" dir="rtl">
      
      {/* الترويسة */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            ملخص ختامي شامل
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-2">
            خلاصة وقواعد الذهب: {section.title}
          </h1>
          <p className="text-xs text-slate-400 mt-1">{section.englishTitle}</p>
        </div>

        <button
          onClick={onBackToLessons}
          className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer shrink-0"
        >
          العودة للدروس ↩
        </button>
      </div>

      {/* النظرة العامة للقسم */}
      {overview && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-center gap-2 mb-3 text-emerald-400">
            <BookOpen className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">نظرة عامة على القسم</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {overview}
          </p>
        </div>
      )}

      {/* القواعد الذهبية للقسم */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4 text-emerald-400">
          <Sparkles className="w-5 h-5" />
          <h3 className="text-sm font-bold text-white">القواعد الذهبية للقسم ({goldenRules.length})</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goldenRules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/40 transition-all flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">
                {idx + 1}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1.5">{rule.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* المفاهيم المحورية ومخرجات التعلم */}
      {keyTakeaways.length > 0 && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-center gap-2 mb-4 text-emerald-400">
            <Lightbulb className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">المفاهيم المحورية ومخرجات التعلم</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {keyTakeaways.map((takeaway, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-sans leading-relaxed">{takeaway}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* بطاقة التهنئة */}
      <div className="bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-3">
        <Award className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
        <h3 className="text-xl font-black text-white">أحسنت صنعاً في استيعاب هذا القسم!</h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          أنت الآن تملك أساساً هندسياً متيناً للانتقال للمستوى التالي، وتطبيق هذه المفاهيم في مشروعات حقيقية قابلة للتوسع والإنتاج.
        </p>
      </div>

    </div>
  );
}