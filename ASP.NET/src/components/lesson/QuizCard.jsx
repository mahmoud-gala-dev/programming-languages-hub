// src/components/lesson/QuizCard.jsx
import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function QuizCard({ quiz }) {
  const { triggerConfetti } = useToast();

  // دعم مصفوفة من 3 أسئلة أو كائن سؤال واحد
  const questionsList = Array.isArray(quiz) ? quiz : (quiz ? [quiz] : []);
  const [answers, setAnswers] = useState({});

  if (questionsList.length === 0) return null;

  const handleSelect = (qIdx, optIdx) => {
    if (answers[qIdx] !== undefined) return; // تمت الإجابة بالفعل

    const isCorrect = optIdx === questionsList[qIdx].correctIndex;
    setAnswers(prev => ({
      ...prev,
      [qIdx]: optIdx
    }));

    if (isCorrect) {
      triggerConfetti();
    }
  };

  const handleReset = (qIdx) => {
    setAnswers(prev => {
      const next = { ...prev };
      delete next[qIdx];
      return next;
    });
  };

  return (
    <div className="my-8 space-y-6" dir="rtl">
      <div className="flex items-center gap-2 mb-2">
        <Award className="w-5 h-5 text-purple-400" />
        <h3 className="text-sm font-bold text-white font-sans">
          اختبر فهمك واستيعابك للدرس (3 أسئلة سريعة مع الشرح):
        </h3>
      </div>

      {questionsList.map((q, qIdx) => {
        const selectedOpt = answers[qIdx];
        const isAnswered = selectedOpt !== undefined;
        const isCorrect = isAnswered && selectedOpt === q.correctIndex;

        return (
          <div
            key={qIdx}
            className="rounded-2xl border border-purple-500/20 bg-[#080b18] p-5 sm:p-6 shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4 border-b border-purple-500/10 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center text-xs font-mono">
                  {qIdx + 1}
                </div>
                <h4 className="text-xs font-bold text-purple-300 font-sans">سؤال تثبيت المفهوم</h4>
              </div>

              {isAnswered && (
                <button
                  onClick={() => handleReset(qIdx)}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>إعادة المحاولة</span>
                </button>
              )}
            </div>

            <p className="text-sm font-bold text-white mb-4 leading-relaxed font-sans">
              {q.question}
            </p>

            <div className="space-y-2 mb-4">
              {q.options?.map((option, optIdx) => {
                let btnStyle = "bg-[#0f1430] border-purple-500/15 text-slate-200 hover:border-purple-400/40";
                let IconComponent = null;

                if (isAnswered) {
                  if (optIdx === q.correctIndex) {
                    btnStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-950/40";
                    IconComponent = CheckCircle;
                  } else if (optIdx === selectedOpt) {
                    btnStyle = "bg-rose-950/60 border-rose-500 text-rose-200";
                    IconComponent = XCircle;
                  } else {
                    btnStyle = "bg-[#0b0e24]/40 border-slate-800 text-slate-500 opacity-60";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelect(qIdx, optIdx)}
                    disabled={isAnswered}
                    className={`w-full text-right p-3.5 rounded-xl border text-xs sm:text-[13px] font-sans transition-all flex items-center justify-between gap-3 cursor-pointer disabled:cursor-default ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {IconComponent && <IconComponent className="w-4 h-4 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {isAnswered && q.explanation && (
              <div className={`p-3.5 rounded-xl text-xs leading-relaxed font-sans border animate-in fade-in duration-200 ${
                isCorrect
                  ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                  : 'bg-rose-950/30 border-rose-500/30 text-rose-200'
              }`}>
                <strong className="block mb-1 font-bold">
                  {isCorrect ? "إجابة صحيحة وممتازة! ✓" : "توضيح الإجابة الصحيحة:"}
                </strong>
                {q.explanation}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
