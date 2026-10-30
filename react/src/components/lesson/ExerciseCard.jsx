// src/components/lesson/ExerciseCard.jsx
import React, { useState } from 'react';
import { Award, Lightbulb, CheckSquare, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import CodeBlock from './CodeBlock.jsx';
import LiveCodePreview from './LiveCodePreview.jsx';

export default function ExerciseCard({ exercise, topicTitle }) {
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  if (!exercise) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl my-6">
      
      {/* رأس التمرين */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-white">{exercise.title}</h3>
            <p className="text-xs text-slate-400">تطبيق عملي خطوة بخطوة لترسيخ مفاهيم: {topicTitle}</p>
          </div>
        </div>

        <span className="text-[11px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2.5 py-1 rounded-full">
          تحدي تطبيقي 🛠️
        </span>
      </div>

      {/* وصف المهمة والهدف */}
      <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 mb-5">
        <h4 className="text-xs font-bold text-cyan-400 mb-1.5 flex items-center gap-1.5">
          <CheckSquare className="w-4 h-4" />
          المطلوب تنفيذه:
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          {exercise.description}
        </p>
      </div>

      {/* زر التلميحات الذكية */}
      {exercise.hints && exercise.hints.length > 0 && (
        <div className="mb-5">
          <button
            onClick={() => setShowHints(!showHints)}
            className="flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-2 rounded-xl transition-all cursor-pointer"
          >
            <Lightbulb className="w-4 h-4" />
            <span>{showHints ? "إخفاء التلميحات المساعدة" : "هل تحتاج مساعدة؟ اعرض التلميحات الذكية 💡"}</span>
            {showHints ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showHints && (
            <div className="mt-3 p-4 bg-amber-950/20 border border-amber-500/30 rounded-xl text-xs text-amber-200/90 space-y-2 animate-fadeIn">
              <div className="font-bold text-amber-300 mb-1">تلميحات لتسهيل الحل:</div>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 pr-2">
                {exercise.hints.map((hint, idx) => (
                  <li key={idx}>{hint}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* زر إظهار الحل النموذجي الكامل */}
      <div className="pt-2 border-t border-slate-800/80">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-4 py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer"
        >
          <Eye className="w-4 h-4" />
          <span>{showSolution ? "إخفاء الحل النموذجي" : "عرض الحل النموذجي والشرح الكامل ✓"}</span>
        </button>

        {showSolution && (
          <div className="mt-5 space-y-4 animate-fadeIn">
            <h4 className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <span>✓</span> الحل النموذجي مع تعليق على كل سطر:
            </h4>
            <CodeBlock code={exercise.solution} title="كود الحل النموذجي" language="html" />
            <LiveCodePreview initialCode={exercise.solution} title="معاينة الحل النهائي على الهواء" />
          </div>
        )}
      </div>

    </div>
  );
}

