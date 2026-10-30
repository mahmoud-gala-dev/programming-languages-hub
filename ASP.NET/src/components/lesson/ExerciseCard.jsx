// src/components/lesson/ExerciseCard.jsx
import React, { useState } from 'react';
import { Dumbbell, Lightbulb, CheckCircle2, Eye, EyeOff, Sparkles } from 'lucide-react';
import CodeBlock from './CodeBlock.jsx';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function ExerciseCard({ exercise, onAskTutor }) {
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { showToast, triggerConfetti } = useToast();

  if (!exercise) return null;

  const handleMarkComplete = () => {
    setIsCompleted(!isCompleted);
    if (!isCompleted) {
      triggerConfetti();
      showToast("رائع جداً! تم حل وتأكيد التمرين بنجاح 🎯", "success");
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-purple-500/25 bg-[#0a0e24]/90 p-6 shadow-2xl relative overflow-hidden" dir="rtl">
      {/* شارة التمرين */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-purple-500/15 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-sans">{exercise.title || "تمرين تطبيقي عملي"}</h3>
            <p className="text-xs text-purple-300 font-sans">تدريب عملي لترسيخ المفهوم في ذهنك</p>
          </div>
        </div>

        <button
          onClick={handleMarkComplete}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
            isCompleted
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
              : 'bg-purple-950/40 text-purple-200 border-purple-500/30 hover:bg-purple-900/40'
          }`}
        >
          <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-400' : 'text-purple-400'}`} />
          <span>{isCompleted ? "مكتمل بنجاح ✓" : "تحديد كمكتمل"}</span>
        </button>
      </div>

      {/* نص المهمة المطلوبة */}
      <div className="mb-6 p-4 rounded-xl bg-purple-950/20 border border-purple-500/15 text-sm text-slate-200 leading-relaxed font-sans">
        <strong className="text-purple-400 block mb-1">المهمة المطلوبة:</strong>
        {exercise.task}
      </div>

      {/* أزرار المساعدة والحل */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {exercise.hints && exercise.hints.length > 0 && (
          <button
            onClick={() => setShowHints(!showHints)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 hover:bg-amber-500/20 transition-all cursor-pointer"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>{showHints ? "إخفاء التلميحات" : "إظهار التلميحات"}</span>
          </button>
        )}

        <button
          onClick={() => setShowSolution(!showSolution)}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition-all cursor-pointer"
        >
          {showSolution ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          <span>{showSolution ? "إخفاء الحل النموذجي" : "عرض الحل النموذجي المشروح"}</span>
        </button>

        {onAskTutor && (
          <button
            onClick={onAskTutor}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-200 border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer mr-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" />
            <span>طلب مساعدة المعلم الذكي Gemini</span>
          </button>
        )}
      </div>

      {/* التلميحات المنسدلة */}
      {showHints && exercise.hints && (
        <div className="mb-4 p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 animate-in fade-in slide-in-from-top-2 duration-200">
          <h4 className="text-xs font-bold text-amber-400 mb-2 flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5" /> تلميحات مفيدة للحل:
          </h4>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-amber-200/90 font-sans">
            {exercise.hints.map((hint, idx) => (
              <li key={idx} className="leading-relaxed">{hint}</li>
            ))}
          </ul>
        </div>
      )}

      {/* الحل النموذجي */}
      {showSolution && (
        <div className="mt-4 pt-4 border-t border-purple-500/15 animate-in fade-in slide-in-from-top-2 duration-200">
          <h4 className="text-xs font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> الحل النموذجي الكامل مع الشرح السطري:
          </h4>
          <CodeBlock code={exercise.solution} title="حل التمرين المقترح (C#)" language="csharp" />
          {exercise.solutionExplanation && (
            <div className="p-3.5 rounded-xl bg-[#0f1430] border border-purple-500/15 text-xs text-slate-300 leading-relaxed font-sans">
              <strong className="text-purple-300 block mb-1">شرح الحل:</strong>
              {exercise.solutionExplanation}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
