// src/components/ai/AiLessonQuizModal.jsx
// نافذة الاختبارات الذكية التفاعلية المولدة بالذكاء الاصطناعي للدرس الحالي
// تشمل: أكمل الفراغ، صح وخطأ، كود ومخرجات، مع خيار التحديد التلقائي كمكتمل
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  RefreshCw, 
  Code, 
  Award, 
  ChevronLeft,
  ArrowRight,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateLessonQuiz } from '../../api/gemini.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function AiLessonQuizModal({ 
  subtopic, 
  isOpen, 
  onClose, 
  onToggleComplete, 
  isCompleted, 
  onNext 
}) {
  const showToast = useToast();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  // توليد الأسئلة عند فتح النافذة
  useEffect(() => {
    if (isOpen && subtopic) {
      loadQuiz();
    }
  }, [isOpen, subtopic?.id]);

  const loadQuiz = async () => {
    setLoading(true);
    setCurrentIdx(0);
    setSelectedAnswers({});
    setQuizFinished(false);
    setScore(0);

    try {
      const generated = await generateLessonQuiz(subtopic);
      setQuestions(generated);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !subtopic) return null;

  const currentQ = questions[currentIdx];
  const isCurrentAnswered = selectedAnswers[currentIdx] !== undefined;

  const handleSelectOption = (optIdx) => {
    if (isCurrentAnswered) return;

    const isCorrect = optIdx === currentQ.correctIndex;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentIdx]: { selected: optIdx, isCorrect }
    }));

    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      // إنهاء الاختبار
      setQuizFinished(true);
      const finalScore = score + (selectedAnswers[currentIdx]?.isCorrect ? 0 : 0);
      if (finalScore >= 2) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleCompleteAndNext = () => {
    if (!isCompleted && onToggleComplete) {
      onToggleComplete(subtopic.id);
      showToast("تم تمييز الدرس كمكتمل بنجاح! 🏆", "success");
    }
    onClose();
    if (onNext) {
      onNext();
    }
  };

  if (!isOpen || !subtopic) return null;

  return typeof document !== 'undefined' ? createPortal(
    <div className="fixed inset-0 z-[99998] w-screen h-screen min-h-screen bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn" dir="rtl">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl p-6 shadow-2xl relative flex flex-col max-h-[90vh] overflow-hidden animate-slideUp">
        
        {/* رأس النافذة */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white flex items-center justify-center shadow-lg font-bold">
              🎯
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white font-sans">
                  الاختبار الذكي المخصص للدرس
                </h3>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full font-mono">
                  AI Quiz
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans truncate max-w-sm">
                الدرس: <span className="text-cyan-300 font-semibold">{subtopic.title}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!loading && (
              <button
                onClick={loadQuiz}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                title="إعادة توليد أسئلة جديدة"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* جسم النافذة */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 animate-spin">
              <Sparkles className="w-7 h-7" />
            </div>
            <h4 className="text-sm font-bold text-white">جاري تحليل الدرس وتوليد الأسئلة الذكية...</h4>
            <p className="text-xs text-slate-400 max-w-sm">
              يتم استخراج أسئلة دقيقة تشمل (أكمل الفراغ، صح وخطأ، وتوقع مخرجات الكود) لضمان استيعابك الكامل للمفهوم
            </p>
          </div>
        ) : !quizFinished && currentQ ? (
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            {/* شريط مؤشر السؤال */}
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-2">
              <span className="font-semibold text-cyan-400">
                {currentQ.categoryTitle || `سؤال ${currentIdx + 1} من ${questions.length}`}
              </span>
              <span className="font-mono">
                الدرجة الحالية: <b className="text-emerald-400">{score}</b> / {currentIdx + (isCurrentAnswered ? 1 : 0)}
              </span>
            </div>

            {/* نص السؤال */}
            <h4 className="text-sm sm:text-base font-bold text-white leading-relaxed font-sans">
              {currentQ.question}
            </h4>

            {/* كود السؤال إذا كان من نوع كود ومخرجات */}
            {currentQ.codeSnippet && (
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto leading-relaxed" dir="ltr">
                <pre className="m-0 p-0 text-left whitespace-pre-wrap">
                  {currentQ.codeSnippet}
                </pre>
              </div>
            )}

            {/* خيارات الإجابة */}
            <div className="space-y-2 pt-2">
              {currentQ.options?.map((opt, optIdx) => {
                const answerState = selectedAnswers[currentIdx];
                let btnStyle = "bg-slate-950/80 border-slate-850 hover:bg-slate-800 hover:border-slate-700 text-slate-200";

                if (answerState !== undefined) {
                  if (optIdx === currentQ.correctIndex) {
                    btnStyle = "bg-emerald-950/60 border-emerald-500/80 text-emerald-300 font-bold shadow-sm";
                  } else if (answerState.selected === optIdx) {
                    btnStyle = "bg-rose-950/60 border-rose-500/80 text-rose-300";
                  } else {
                    btnStyle = "bg-slate-950/40 border-slate-900 text-slate-600 opacity-60";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isCurrentAnswered}
                    className={`w-full p-3.5 rounded-xl border text-xs sm:text-sm text-start transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isCurrentAnswered && optIdx === currentQ.correctIndex && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                    {isCurrentAnswered && answerState.selected === optIdx && !answerState.isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* التفسير المعماري بعد الإجابة */}
            {isCurrentAnswered && (
              <div className="bg-cyan-950/30 border border-cyan-800/40 p-3.5 rounded-xl text-xs space-y-1.5 animate-fadeIn">
                <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>الشرح والتفسير المعماري:</span>
                </div>
                <p className="text-slate-300 leading-relaxed font-sans">
                  {currentQ.explanation}
                </p>
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center gap-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    <span>{currentIdx + 1 < questions.length ? "السؤال التالي" : "عرض النتيجة النهائية"}</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* شاشة النتيجة النهائية */
          <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-3xl shadow-xl">
              {score >= 2 ? "🏆" : "📚"}
            </div>
            
            <h3 className="text-xl font-bold text-white">
              {score >= 2 ? "أداء استثنائي وممتاز!" : "أداء جيد، ولكن تحتاج لمراجعة سريعة"}
            </h3>

            <p className="text-sm text-slate-300">
              حققت نتيجة <b className="text-cyan-400 text-lg font-bold">{score}</b> من أصل <b className="text-white text-lg font-bold">{questions.length}</b> أسئلة
            </p>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400 max-w-sm">
              {score >= 2 
                ? "تهانينا! لقد أثبت استيعابك العميق للمفهوم وأنت الآن جاهز للانتقال للدرس التالي بثقة تامة."
                : "ننصحك بمراجعة كود الشرح والتشبيه الواقعي في الدرس ثم إعادة المحاولة."}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={loadQuiz}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>إعادة الاختبار</span>
              </button>

              <button
                onClick={handleCompleteAndNext}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                <Check className="w-4 h-4 font-black" />
                <span>تحديد كمكتمل والانتقال للدرس التالي</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>,
    document.body
  ) : null;
}

