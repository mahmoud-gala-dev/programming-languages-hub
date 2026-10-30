// src/components/lesson/QuizCard.jsx
import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuizCard({ topicTitle, questions = [] }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (qIdx, optIdx) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setShowResults(true);
    const score = calculateScore();
    if (score === questions.length) {
      // إطلاق احتفال بالكونفيتي عند الإجابة الكاملة الصحيحة
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const isAllAnswered = Object.keys(selectedAnswers).length === questions.length;
  const score = calculateScore();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl my-6">
      
      {/* شريط رأس الاختبار */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-white">اختبر فهمك: {topicTitle}</h3>
            <p className="text-xs text-slate-400">3 أسئلة سريعة لقياس استيعابك للمفاهيم الأساسية</p>
          </div>
        </div>

        {showResults && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-300">درجتك:</span>
            <span className={`text-sm font-extrabold px-3 py-1 rounded-lg ${
              score === questions.length 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}>
              {score} من {questions.length}
            </span>
          </div>
        )}
      </div>

      {/* قائمة الأسئلة */}
      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const userAnswer = selectedAnswers[qIdx];
          const isCorrect = userAnswer === q.correctIndex;

          return (
            <div key={qIdx} className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4.5">
              <h4 className="font-bold text-sm text-slate-200 mb-3 flex items-start gap-2">
                <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs shrink-0 mt-0.5">
                  {qIdx + 1}
                </span>
                <span>{q.question}</span>
              </h4>

              {/* الخيارات المتعددة */}
              <div className="space-y-2 mr-7">
                {q.options.map((opt, optIdx) => {
                  const isSelected = userAnswer === optIdx;
                  let optStyle = "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800/80";

                  if (showResults) {
                    if (optIdx === q.correctIndex) {
                      optStyle = "bg-emerald-950/60 border-emerald-500/60 text-emerald-200 font-bold";
                    } else if (isSelected) {
                      optStyle = "bg-red-950/60 border-red-500/60 text-red-300";
                    } else {
                      optStyle = "bg-slate-900/40 border-slate-800/40 text-slate-500 opacity-60";
                    }
                  } else if (isSelected) {
                    optStyle = "bg-blue-600/30 border-blue-500 text-cyan-200 font-semibold";
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(qIdx, optIdx)}
                      disabled={showResults}
                      className={`w-full text-right p-3 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {showResults && optIdx === q.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {showResults && isSelected && optIdx !== q.correctIndex && (
                        <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* الشرح التوضيحي يظهر بعد الضغط على فحص الإجابات */}
              {showResults && (
                <div className="mt-3.5 mr-7 p-3 rounded-lg bg-slate-900/90 border-r-4 border-cyan-500 text-xs text-slate-300 leading-relaxed">
                  💡 <b>التفسير التعليمي:</b> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* أزرار الإجراءات في الأسفل */}
      <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
        {!showResults ? (
          <button
            onClick={handleSubmit}
            disabled={!isAllAnswered}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              isAllAnswered
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>فحص الإجابات واعتماد النتيجة</span>
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>إعادة المحاولة من جديد</span>
          </button>
        )}

        {!showResults && !isAllAnswered && (
          <span className="text-xs text-slate-400">
            يرجى الإجابة على جميع الأسئلة ({Object.keys(selectedAnswers).length}/{questions.length})
          </span>
        )}
      </div>

    </div>
  );
}

