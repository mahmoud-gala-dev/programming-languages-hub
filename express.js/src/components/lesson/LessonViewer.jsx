// src/components/lesson/LessonViewer.jsx
import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  Lightbulb, 
  CheckCircle2, 
  Circle, 
  Code2, 
  Terminal, 
  Languages, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';
import CodeBlock from './CodeBlock.jsx';
import LiveCodePreview from './LiveCodePreview.jsx';
import InfographicCard from '../infographic/InfographicCard.jsx';
import QuizCard from './QuizCard.jsx';
import ExerciseCard from './ExerciseCard.jsx';

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
  if (!subtopic || !subtopic.title) {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center text-slate-500 font-sans">
        <BookOpen className="w-12 h-12 mx-auto mb-3 text-slate-600 animate-bounce" />
        <p>اختر درساً من القائمة الجانبية لبدء التعلم والتطبيق</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn text-slate-100" dir="rtl">
      
      {/* 1. الترويسة ومسار التنقل */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-sans mb-2 flex-wrap">
          <span className="text-amber-400 font-semibold">{sectionTitle}</span>
          <span>/</span>
          <span>{topicTitle}</span>
          <span>/</span>
          <span className="text-slate-300 font-mono">{subtopic.id}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              {subtopic.title}
            </h1>
            {subtopic.englishTitle && (
              <p className="text-sm font-mono text-amber-400 mt-1">
                {subtopic.englishTitle}
              </p>
            )}
          </div>

          <button
            onClick={onToggleComplete}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-lg cursor-pointer shrink-0 ${
              isCompleted 
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30"
                : "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>مكتمل بنجاح ✓</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 text-slate-400" />
                <span>تحديد كمكتمل</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. التعريف المبسط */}
      {subtopic.definition && (
        <section className="mb-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>التعريف المبسط:</span>
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans font-medium">
            {subtopic.definition}
          </p>
        </section>
      )}

      {/* 3. التشبيه الواقعي */}
      {subtopic.analogy && (
        <section className="mb-6 bg-gradient-to-r from-amber-950/30 to-slate-900 border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>تشبيه من واقع الحياة اليومية (Everyday Analogy):</span>
          </div>
          <p className="text-sm text-amber-100/90 leading-relaxed font-sans">
            {subtopic.analogy}
          </p>
        </section>
      )}

      {/* 4. لماذا نحتاجه */}
      {subtopic.why && (
        <section className="mb-6 bg-slate-900/70 border border-slate-800 rounded-2xl p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
            <Lightbulb className="w-4 h-4" />
            <span>لماذا نستخدمه؟ وما المشكلة التي يحلها؟</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {subtopic.why}
          </p>
        </section>
      )}

      {/* 5. بطاقة الإنفوجرافيك مع زر التحميل */}
      {subtopic.infographic && (
        <InfographicCard subtopic={subtopic} />
      )}

      {/* 6. قاموس المصطلحات */}
      {subtopic.terms && subtopic.terms.length > 0 && (
        <section className="mb-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wider mb-4">
            <Languages className="w-4 h-4" />
            <span>قاموس المصطلحات والمفاهيم البرمجية (Vocabulary):</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-sans">
                  <th className="py-2.5 px-3">المصطلح (English)</th>
                  <th className="py-2.5 px-3">طريقة النطق بالعربية</th>
                  <th className="py-2.5 px-3">المعنى والدلالة التقنية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {subtopic.terms.map((t, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3 font-mono text-amber-400 font-bold">{t.term}</td>
                    <td className="py-3 px-3 text-slate-300">{t.pronunciation}</td>
                    <td className="py-3 px-3 text-slate-200">{t.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 7. الصيغة العامة */}
      {subtopic.syntax && (
        <section className="mb-6 bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
            <Code2 className="w-4 h-4" />
            <span>الصيغة البرمجية العامة (Syntax Structure):</span>
          </div>
          <pre className="font-mono text-xs sm:text-sm text-purple-200 whitespace-pre-wrap leading-relaxed" dir="ltr">
            {subtopic.syntax}
          </pre>
        </section>
      )}

      {/* 8. مثال عملي بسيط */}
      {subtopic.simpleCode && (
        <section className="mb-6">
          <CodeBlock
            code={subtopic.simpleCode}
            title="مثال عملي مبسط (مع تعليق عربي فوق كل سطر كود)"
            language="javascript"
          />
        </section>
      )}

      {/* 9. مثال عملي متقدم */}
      {subtopic.advancedCode && (
        <section className="mb-6">
          <CodeBlock
            code={subtopic.advancedCode}
            title="تطبيق عملي متقدم وواقعي (Real-world Implementation)"
            language="javascript"
          />
        </section>
      )}

      {/* 10. محاكي تشغيل الكود */}
      {(subtopic.simpleCode || subtopic.advancedCode) && (
        <LiveCodePreview
          initialCode={subtopic.simpleCode || subtopic.advancedCode}
          expectedOutput={subtopic.outputExplanation}
        />
      )}

      {/* 11. شرح المخرجات */}
      {subtopic.outputExplanation && (
        <section className="mb-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5">
            <Terminal className="w-4 h-4" />
            <span>تفسير نواتج التشغيل وسلوك الخادم:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {subtopic.outputExplanation}
          </p>
        </section>
      )}

      {/* 12. أخطاء شائعة */}
      {subtopic.commonMistakes && subtopic.commonMistakes.length > 0 && (
        <section className="mb-6 bg-rose-950/20 border border-rose-500/30 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>أخطاء برمجية شائعة يقع فيها المطورون:</span>
          </div>
          <div className="space-y-4 font-sans text-xs sm:text-sm">
            {subtopic.commonMistakes.map((m, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-rose-500/20 rounded-xl p-4">
                <div className="text-rose-400 font-semibold mb-1 flex items-start gap-1.5">
                  <span className="shrink-0 text-base">✕</span>
                  <span><strong>الخطأ:</strong> {m.wrong}</span>
                </div>
                <div className="text-emerald-400 font-semibold mb-1 flex items-start gap-1.5">
                  <span className="shrink-0 text-base">✓</span>
                  <span><strong>الصواب:</strong> {m.right}</span>
                </div>
                {m.reason && (
                  <p className="text-slate-400 text-xs mt-1.5 leading-relaxed pr-5">
                    <strong>السبب:</strong> {m.reason}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 13. نصائح المحترفين */}
      {subtopic.bestPractices && subtopic.bestPractices.length > 0 && (
        <section className="mb-8 bg-amber-950/20 border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
            <Lightbulb className="w-4 h-4" />
            <span>نصائح المحترفين وأفضل الممارسات (Best Practices):</span>
          </div>
          <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-slate-200">
            {subtopic.bestPractices.map((bp, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{bp}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 14. سؤال الاختبار السريع */}
      {subtopic.quiz && (
        <QuizCard quiz={subtopic.quiz} />
      )}

      {/* 15. تمرين عملي */}
      {subtopic.exercise && (
        <ExerciseCard exercise={subtopic.exercise} />
      )}

      {/* زر المعلم الذكي المدمج */}
      <div className="my-8 p-4 rounded-2xl bg-gradient-to-r from-amber-950/50 via-slate-900 to-yellow-950/50 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">هل لديك استفسار إضافي حول هذا الدرس؟</h4>
            <p className="text-[11px] text-slate-400">المعلم الذكي المدمج مدعوم بنموذج Google Gemini للإجابة الفورية</p>
          </div>
        </div>
        <button
          onClick={() => onOpenTutor && onOpenTutor(subtopic.title)}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition-all shadow-md shadow-amber-500/20 cursor-pointer shrink-0"
        >
          اسأل المعلم الذكي الآن 💬
        </button>
      </div>

      {/* 16. شريط التنقل السفلي بين الدروس */}
      <div className="mt-12 pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
        {hasPrev ? (
          <button
            onClick={onPrev}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold transition-all cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>الدرس السابق</span>
          </button>
        ) : <div />}

        {hasNext ? (
          <button
            onClick={onNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-xs font-black transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            <span>الدرس التالي</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        ) : (
          <div className="text-xs font-bold text-amber-400">
            تهانينا! لقد أتممت هذا القسم بالكامل 🎉
          </div>
        )}
      </div>

    </article>
  );
}
