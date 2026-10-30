// src/components/lesson/LessonViewer.jsx
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  Lightbulb, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Circle, 
  Code2, 
  Terminal, 
  Languages, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  Bookmark,
  Share2,
  Cpu
} from 'lucide-react';
import CodeBlock from './CodeBlock.jsx';
import InfographicCard from '../infographic/InfographicCard.jsx';
import QuizCard from './QuizCard.jsx';
import ExerciseCard from './ExerciseCard.jsx';
import HighlightingToolbar from '../common/HighlightingToolbar.jsx';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function LessonViewer({
  subtopic,
  topicTitle,
  sectionTitle,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  isCompleted,
  onToggleComplete,
  onOpenTutor
}) {
  const { showToast } = useToast();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (subtopic?.subId) {
      try {
        const bookmarks = JSON.parse(localStorage.getItem('aspnet_bookmarks') || '[]');
        setIsBookmarked(bookmarks.includes(subtopic.subId));
      } catch {
        setIsBookmarked(false);
      }
    }
  }, [subtopic?.subId]);

  const handleToggleBookmark = () => {
    try {
      const bookmarks = JSON.parse(localStorage.getItem('aspnet_bookmarks') || '[]');
      let updated;
      if (isBookmarked) {
        updated = bookmarks.filter(id => id !== subtopic.subId);
        showToast('تمت إزالة الدرس من المحفوظات', 'info');
      } else {
        updated = [...bookmarks, subtopic.subId];
        showToast('تمت إضافة الدرس إلى المفضلة والمحفوظات! 🔖', 'success');
      }
      localStorage.setItem('aspnet_bookmarks', JSON.stringify(updated));
      setIsBookmarked(!isBookmarked);
    } catch {
      showToast('تعذر تحديث المفضلة', 'error');
    }
  };

  if (!subtopic || !subtopic.title) {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center text-slate-500 font-sans" dir="rtl">
        <BookOpen className="w-12 h-12 mx-auto mb-3 text-purple-500/50 animate-bounce" />
        <p className="text-base text-slate-300 font-bold mb-1">اختر درساً من القائمة الجانبية لبدء التعلم</p>
        <p className="text-xs text-slate-500">خريطة طريق ASP.NET Core MVC الشاملة تضم 1803 درساً تفاعلياً</p>
      </div>
    );
  }

  return (
    <article id="lesson-content-container" className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 text-slate-100 relative animate-in fade-in duration-200" dir="rtl">
      {/* شريط التظليل والملاحظات */}
      <HighlightingToolbar subtopicId={subtopic.subId} />

      {/* 1. الترويسة ومسار التنقل (Breadcrumb & Header) */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-sans mb-3 flex-wrap">
          <span className="text-purple-400 font-bold">{sectionTitle}</span>
          <span>/</span>
          <span>{topicTitle}</span>
          <span>/</span>
          <span className="text-cyan-400 font-mono font-bold bg-[#0f1430] px-2 py-0.5 rounded border border-purple-500/20">
            {subtopic.subId}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-500/20 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight font-sans">
              {subtopic.title}
            </h1>
            {subtopic.englishTitle && (
              <p className="text-sm font-mono text-purple-300 mt-1">
                {subtopic.englishTitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* زر حفظ الدرس في المفضلة */}
            <button
              onClick={handleToggleBookmark}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                isBookmarked
                  ? 'bg-purple-600/30 border-purple-500 text-purple-300'
                  : 'bg-[#0f1430] border-purple-500/20 text-slate-400 hover:text-white'
              }`}
              title="حفظ في المفضلة"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-purple-400 text-purple-400' : ''}`} />
            </button>

            {/* زر وضع علامة منجز */}
            <button
              onClick={onToggleComplete}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-lg cursor-pointer border ${
                isCompleted 
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30"
                  : "bg-purple-950/40 hover:bg-purple-900/50 text-purple-200 border-purple-500/30"
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>مكتمل بنجاح ✓</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4 text-purple-400" />
                  <span>تحديد كمكتمل</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. بطاقة التعريف المبسط (1. تعريف مبسط) */}
      {subtopic.definition && (
        <section className="mb-6 bg-[#080b18] border border-purple-500/20 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 font-mono">
            <BookOpen className="w-4 h-4" />
            <span>1. التعريف المبسط (Simplified Definition):</span>
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
            {subtopic.definition}
          </p>
        </section>
      )}

      {/* 3. مثال من الحياة الواقعية (2. مثال من الحياة) */}
      {subtopic.analogy && (
        <section className="mb-6 bg-gradient-to-r from-amber-950/20 via-[#0b0e24] to-purple-950/20 border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 font-mono">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>2. التشبيه من الحياة اليومية (Everyday Analogy):</span>
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
            {subtopic.analogy}
          </p>
        </section>
      )}

      {/* 4. لماذا نحتاج هذا المفهوم؟ (3. لماذا نحتاجه؟) */}
      {subtopic.why && (
        <section className="mb-6 bg-[#080b18] border border-purple-500/20 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 font-mono">
            <Lightbulb className="w-4 h-4" />
            <span>3. لماذا نحتاج هذا المفهوم وما المشكلة التي يحلها؟ (Why We Need It):</span>
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
            {subtopic.why}
          </p>
        </section>
      )}

      {/* 5. قاموس المصطلحات الإنجليزية وترجمتها ونطقها */}
      {subtopic.terms && subtopic.terms.length > 0 && (
        <section className="mb-6 bg-[#0b0e24] border border-purple-500/20 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-300 mb-3 font-mono">
            <Languages className="w-4 h-4 text-purple-400" />
            <span>قاموس المصطلحات الإنجليزية الواردة في الدرس:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subtopic.terms.map((t, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#080b18] border border-purple-500/10 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-purple-300 font-bold text-xs" dir="ltr">{t.term}</span>
                  {t.pronunciation && (
                    <span className="text-[10px] text-slate-400 font-sans">نطق: {t.pronunciation}</span>
                  )}
                </div>
                <span className="text-xs text-slate-300 font-sans leading-relaxed">{t.meaning}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. الصيغة العامة (4. الصيغة العامة Syntax) */}
      {subtopic.syntax && (
        <section className="mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 font-mono">
            <Terminal className="w-4 h-4" />
            <span>4. الصيغة العامة (General Syntax & Structure):</span>
          </div>
          <CodeBlock code={subtopic.syntax} title="الصيغة العامة" language="csharp" />
        </section>
      )}

      {/* 7. مثال عملي بسيط مع تعليق عربي فوق كل سطر (5. مثال عملي بسيط) */}
      {subtopic.simpleCode && (
        <section className="mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 font-mono">
            <Code2 className="w-4 h-4" />
            <span>5. مثال عملي بسيط (مع تعليق عربي فوق كل سطر):</span>
          </div>
          <CodeBlock code={subtopic.simpleCode} title="مثال تمهيدي بسيط" language="csharp" />
        </section>
      )}

      {/* 8. مثال عملي متقدم (6. مثال عملي متقدم) */}
      {subtopic.advancedCode && (
        <section className="mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2 font-mono">
            <Layers className="w-4 h-4" />
            <span>6. تطبيق عملي متقدم في بيئة عمل حقيقية (Enterprise Code):</span>
          </div>
          <CodeBlock code={subtopic.advancedCode} title="تطبيق متقدم وفق أفضل الممارسات" language="csharp" />
        </section>
      )}

      {/* 9. شرح المخرجات (7. شرح المخرجات) */}
      {subtopic.outputExplanation && (
        <section className="mb-6 bg-[#080b18] border border-purple-500/20 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 font-mono">
            <Terminal className="w-4 h-4" />
            <span>7. ماذا سيظهر بالضبط عند تشغيل الكود ولماذا؟ (Output Breakdown):</span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-sans">
            {subtopic.outputExplanation}
          </p>
        </section>
      )}

      {/* 10. أخطاء شائعة (8. أخطاء شائعة) */}
      {subtopic.commonMistakes && subtopic.commonMistakes.length > 0 && (
        <section className="mb-6 bg-rose-950/15 border border-rose-500/30 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider mb-4 font-mono">
            <AlertTriangle className="w-4 h-4" />
            <span>8. أخطاء شائعة يقع فيها المبتدئون وكيفية تصحيحها (Common Mistakes):</span>
          </div>
          <div className="space-y-4">
            {subtopic.commonMistakes.map((mistake, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#080b18] border border-rose-500/20 space-y-2">
                <div className="flex items-start gap-2 text-xs text-rose-300 font-sans">
                  <span className="font-bold text-rose-400 shrink-0">❌ الخطأ:</span>
                  <span className="leading-relaxed">{mistake.wrong}</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-emerald-300 font-sans">
                  <span className="font-bold text-emerald-400 shrink-0">✓ الصواب:</span>
                  <span className="leading-relaxed">{mistake.right}</span>
                </div>
                {mistake.reason && (
                  <div className="text-[11px] text-slate-400 font-sans pt-1 border-t border-slate-800">
                    <strong className="text-slate-300">السبب الهندسي:</strong> {mistake.reason}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 11. نصائح وأفضل الممارسات (9. نصائح مهمة) */}
      {subtopic.bestPractices && subtopic.bestPractices.length > 0 && (
        <section className="mb-6 bg-[#080b18] border border-purple-500/20 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-3 font-mono">
            <CheckCircle className="w-4 h-4" />
            <span>9. نصائح مهمة وأفضل الممارسات (Best Practices):</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-300 font-sans list-disc list-inside">
            {subtopic.bestPractices.map((bp, idx) => (
              <li key={idx} className="leading-relaxed">{bp}</li>
            ))}
          </ul>
        </section>
      )}

      {/* 12. بطاقة الإنفوجرافيك المرجعية مع إمكانية التحميل المباشر كصورة (10. عمل صورة انفوجرافيك) */}
      <InfographicCard subtopic={subtopic} />

      {/* 13. اختبر فهمك: 3 أسئلة سريعة مع الإجابات والشرح */}
      <QuizCard quiz={subtopic.quiz} />

      {/* 14. تمرين تطبيقي عملي مع التلميحات والحل النموذجي */}
      <ExerciseCard exercise={subtopic.exercise} onAskTutor={onOpenTutor} />

      {/* 15. شريط التنقل بين الدروس (السابق والتالي) */}
      <div className="mt-12 pt-6 border-t border-purple-500/20 flex items-center justify-between gap-4">
        {hasPrev ? (
          <button
            onClick={onPrev}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#0f1430] hover:bg-purple-900/30 border border-purple-500/20 text-slate-200 hover:text-white transition-all text-xs font-bold font-sans cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 text-purple-400" />
            <span>الدرس السابق</span>
          </button>
        ) : <div />}

        {hasNext ? (
          <button
            onClick={onNext}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all text-xs font-bold font-sans shadow-lg shadow-purple-600/20 cursor-pointer"
          >
            <span>الدرس التالي</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        ) : <div />}
      </div>
    </article>
  );
}
