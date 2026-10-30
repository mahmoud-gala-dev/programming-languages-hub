// src/components/lesson/QuizCard.jsx
import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';
import { useConfetti } from '../../context/UiFeedbackContext.jsx';

export default function QuizCard({ quiz }) {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const triggerConfetti = useConfetti();

  if (!quiz || !quiz.question) return null;

  const handleSelect = (idx) => {
    if (isAnswered) return;
    setSelectedIdx(idx);
    setIsAnswered(true);

    if (idx === quiz.correctIndex) {
      triggerConfetti();
    }
  };

  const handleReset = () => {
    setSelectedIdx(null);
    setIsAnswered(false);
  };

  const isCorrect = selectedIdx === quiz.correctIndex;

  return (
    <div className="my-8 rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-7 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-amber-400">سؤال تثبيت الفهم السريع</h4>
            <p className="text-xs text-slate-400">اختبر فهمك لمفاهيم Express.js الحالية</p>
          </div>
        </div>

        {isAnswered && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>إعادة المحاولة</span>
          </button>
        )}
      </div>

      <p className="text-sm sm:text-base font-bold text-white mb-5 leading-relaxed">
        {quiz.question}
      </p>

      <div className="space-y-2.5 mb-5">
        {quiz.options?.map((option, idx) => {
          let btnStyle = "bg-slate-950/80 border-slate-800 text-slate-200 hover:border-slate-700";

          if (isAnswered) {
            if (idx === quiz.correctIndex) {
              btnStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold";
            } else if (idx === selectedIdx) {
              btnStyle = "bg-rose-950/60 border-rose-500 text-rose-200";
            } else {
              btnStyle = "bg-slate-950/40 border-slate-900 text-slate-500 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => handleSelect(idx)}
              className={`w-full text-right p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer disabled:cursor-default ${btnStyle}`}
            >
              <span>{option}</span>
              {isAnswered && idx === quiz.correctIndex && (
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mr-2" />
              )}
              {isAnswered && idx === selectedIdx && idx !== quiz.correctIndex && (
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mr-2" />
              )}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className={`p-4 rounded-xl border animate-fadeIn ${
          isCorrect ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-200" : "bg-rose-950/30 border-rose-500/40 text-rose-200"
        }`}>
          <div className="flex items-center gap-2 font-bold text-xs mb-1">
            {isCorrect ? <Award className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-400" />}
            <span>{isCorrect ? "إجابة صحيحة وممتازة! 🎉" : "إجابة غير صحيحة، تعلم من التفسير:"}</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-300 mt-1">
            {quiz.explanation || "يرجى مراجعة شرح الدرس بالأعلى."}
          </p>
        </div>
      )}
    </div>
  );
}
