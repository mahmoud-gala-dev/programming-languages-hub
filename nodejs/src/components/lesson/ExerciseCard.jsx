// src/components/lesson/ExerciseCard.jsx
import React, { useState } from 'react';
import { Target, ChevronDown, ChevronUp, Eye, CheckSquare, Sparkles } from 'lucide-react';
import CodeBlock from './CodeBlock.jsx';

export default function ExerciseCard({ exercise }) {
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);

  if (!exercise || !exercise.task) return null;

  return (
    <div className="my-8 rounded-2xl border border-amber-500/30 bg-slate-900/90 p-5 sm:p-7 shadow-xl">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
          <Target className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-xs font-bold text-amber-400">تمرين عملي وتطبيق كودي (Hands-on Challenge)</h4>
          <p className="text-xs text-slate-400">{exercise.title || "تطبيق مباشر على المفاهيم المكتسبة"}</p>
        </div>
      </div>

      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 mb-4">
        <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed">
          {exercise.task}
        </p>
      </div>

      {/* التلميحات إن وجدت */}
      {exercise.hints && exercise.hints.length > 0 && (
        <div className="mb-4">
          <button
            onClick={() => setShowHints(!showHints)}
            className="flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{showHints ? "إخفاء التلميحات" : "هل تحتاج إلى تلميح مساعد؟ (اضغط هنا)"}</span>
            {showHints ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showHints && (
            <ul className="mt-2.5 space-y-1.5 p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200/90 list-disc list-inside">
              {exercise.hints.map((hint, idx) => (
                <li key={idx}>{hint}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* زر كشف الحل النموذجي */}
      <div>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-all cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5 text-emerald-400" />
          <span>{showSolution ? "إخفاء الحل النموذجي" : "عرض الحل النموذجي الكامل"}</span>
        </button>

        {showSolution && (
          <div className="mt-4 animate-fadeIn">
            <CodeBlock
              code={exercise.solution}
              title="الحل النموذجي للتمرين"
              language="javascript"
            />
            {exercise.solutionExplanation && (
              <p className="text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800 leading-relaxed mt-2">
                <strong className="text-emerald-400">تفسير الحل: </strong>
                {exercise.solutionExplanation}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
