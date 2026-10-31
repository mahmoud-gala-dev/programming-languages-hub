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
  HelpCircle,
  Code2, 
  Terminal, 
  Languages, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  Bookmark
} from 'lucide-react';
import CodeBlock from './CodeBlock.jsx';
import LiveCodePreview from './LiveCodePreview.jsx';
import InfographicCard from '../infographic/InfographicCard.jsx';
import QuizCard from './QuizCard.jsx';
import ExerciseCard from './ExerciseCard.jsx';
import TextHighlightPopover from '../common/TextHighlightPopover.jsx';
import SavedHighlightsModal from '../common/SavedHighlightsModal.jsx';
import { getHighlightsBySubtopic, deleteHighlight } from '../../utils/notesDb.js';
import { useToast, useSwal } from '../../context/UiFeedbackContext.jsx';

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
  onOpenTutor,
  onOpenInfographicGallery
}) {
  const showToast = useToast();
  const showSwal = useSwal();

  const [lessonHighlights, setLessonHighlights] = useState([]);
  const [isHighlightsModalOpen, setIsHighlightsModalOpen] = useState(false);

  // تحميل التظليلات المسجلة لهذا الدرس من IndexedDB
  const loadLessonHighlights = async () => {
    if (!subtopic?.id) return;
    try {
      const data = await getHighlightsBySubtopic(subtopic.id);
      setLessonHighlights(data || []);
    } catch {
      setLessonHighlights([]);
    }
  };

  useEffect(() => {
    // إيقاف أي قراءة صوتية مستمرة عند الانتقال بين الدروس
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    loadLessonHighlights();
  }, [subtopic?.id]);

  // تفاعل النقر على المقتطف المظلل لإدارته أو حذفه
  const handleHighlightClick = async (hl) => {
    const noteText = hl.note ? `\nالملاحظة المرفقة: "${hl.note}"` : '';
    const dateText = hl.createdAt ? `\nتاريخ الحفظ: ${new Date(hl.createdAt).toLocaleDateString('ar-EG')}` : '';

    const result = await showSwal({
      title: "إدارة المقتطف المظلل",
      text: `المقتطف المظلل:\n"${hl.text}"${noteText}${dateText}\n\nهل ترغب في حذف هذا التظليل من الدرس وقاعدة البيانات؟`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "حذف التظليل 🗑️",
      cancelButtonText: "إبقاء التظليل",
      confirmButtonColor: "bg-rose-600 hover:bg-rose-500 text-white"
    });

    if (result.isConfirmed) {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      await deleteHighlight(hl.id);
      await loadLessonHighlights();
      showToast("تم حذف التظليل بنجاح", "info");
    }
  };

  // دالة تحويل النصوص الخام إلى نصوص مظللة مرئياً وتفاعلياً بألوان النيون الـ 6
  const renderHighlightedContent = (rawText) => {
    if (!rawText || typeof rawText !== 'string') return rawText;
    if (!lessonHighlights || lessonHighlights.length === 0) return rawText;

    const matches = [];
    lessonHighlights.forEach(hl => {
      const target = hl.text?.trim();
      if (!target || target.length < 2) return;

      let idx = 0;
      while ((idx = rawText.indexOf(target, idx)) !== -1) {
        matches.push({
          start: idx,
          end: idx + target.length,
          highlight: hl
        });
        idx += target.length;
      }
    });

    if (matches.length === 0) return rawText;

    matches.sort((a, b) => a.start - b.start);

    const nonOverlapping = [];
    let lastEnd = 0;
    matches.forEach(m => {
      if (m.start >= lastEnd) {
        nonOverlapping.push(m);
        lastEnd = m.end;
      }
    });

    const fragments = [];
    let cursor = 0;

    const colorStyles = {
      amber: "bg-amber-400/35 text-amber-100 border-b-2 border-amber-400 hover:bg-amber-400/50 shadow-sm",
      emerald: "bg-emerald-400/35 text-emerald-100 border-b-2 border-emerald-400 hover:bg-emerald-400/50 shadow-sm",
      cyan: "bg-cyan-400/35 text-cyan-100 border-b-2 border-cyan-400 hover:bg-cyan-400/50 shadow-sm",
      purple: "bg-purple-400/35 text-purple-100 border-b-2 border-purple-400 hover:bg-purple-400/50 shadow-sm",
      rose: "bg-rose-500/35 text-rose-100 border-b-2 border-rose-500 hover:bg-rose-500/50 shadow-sm",
      orange: "bg-orange-500/35 text-orange-100 border-b-2 border-orange-500 hover:bg-orange-500/50 shadow-sm"
    };

    nonOverlapping.forEach((m, i) => {
      if (m.start > cursor) {
        fragments.push(rawText.substring(cursor, m.start));
      }

      const styleClass = colorStyles[m.highlight.color] || colorStyles.amber;

      fragments.push(
        <mark
          key={`mark-${m.highlight.id}-${i}-${m.start}`}
          onClick={(e) => {
            e.stopPropagation();
            handleHighlightClick(m.highlight);
          }}
          className={`px-1 py-0.5 rounded cursor-pointer transition-all duration-150 select-text ${styleClass}`}
          title={m.highlight.note ? `ملاحظة: ${m.highlight.note} (انقر للإدارة)` : "مقتطف مظلل محفوظ (انقر للإدارة أو الحذف)"}
        >
          {rawText.substring(m.start, m.end)}
        </mark>
      );

      cursor = m.end;
    });

    if (cursor < rawText.length) {
      fragments.push(rawText.substring(cursor));
    }

    return fragments;
  };

  if (!subtopic || !subtopic.title) {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center text-slate-500 font-sans">
        <BookOpen className="w-12 h-12 mx-auto mb-3 text-slate-600 animate-bounce" />
        <p>اختر درساً من القائمة الجانبية لبدء التعلم والتطبيق</p>
      </div>
    );
  }

  return (
    <article 
      data-lesson-script="true" 
      className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn text-slate-100 relative" 
      dir="rtl"
    >
      
      {/* 1. الترويسة ومسار التنقل (Breadcrumb & Header) */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-sans mb-2 flex-wrap">
          <span className="text-emerald-400 font-semibold">{sectionTitle}</span>
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
              <p className="text-sm font-mono text-emerald-400 mt-1">
                {subtopic.englishTitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            {/* زر فتح تظليلات هذا الدرس */}
            <button
              onClick={() => setIsHighlightsModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-teal-400 text-xs font-bold transition-all cursor-pointer shadow-md"
              title="عرض التظليلات المحفوظة لهذا الدرس"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>تظليلات الدرس ({lessonHighlights.length})</span>
            </button>

            {/* زر وضع علامة منجز */}
            <button
              onClick={onToggleComplete}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-lg cursor-pointer shrink-0 ${
                isCompleted 
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
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
      </div>

      {/* 2. بطاقة التعريف المبسط (Definition) */}
      {subtopic.definition && (
        <section 
          data-lesson-script="true" 
          className="mb-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>التعريف المبسط:</span>
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans font-medium">
            {renderHighlightedContent(subtopic.definition)}
          </p>
        </section>
      )}

      {/* 3. بطاقة التشبيه الواقعي من الحياة اليومية (Everyday Analogy) */}
      {subtopic.analogy && (
        <section 
          data-lesson-script="true" 
          className="mb-6 bg-gradient-to-r from-amber-950/30 to-slate-900 border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-xl"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>تشبيه من واقع الحياة اليومية (Analogy):</span>
          </div>
          <p className="text-sm text-amber-100/90 leading-relaxed font-sans">
            {renderHighlightedContent(subtopic.analogy)}
          </p>
        </section>
      )}

      {/* 4. بطاقة لماذا نحتاجه والمشكلة التي يحلها (Why we need it) */}
      {subtopic.why && (
        <section 
          data-lesson-script="true" 
          className="mb-6 bg-slate-900/70 border border-slate-800 rounded-2xl p-5 sm:p-6"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
            <Lightbulb className="w-4 h-4" />
            <span>لماذا نستخدمه؟ وما المشكلة التي يحلها؟</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {renderHighlightedContent(subtopic.why)}
          </p>
        </section>
      )}

      {/* 5. بطاقة الإنفوجرافيك المرجعية مع زر التحميل كصورة (PNG) */}
      <InfographicCard 
        subtopic={subtopic} 
        sectionData={{ id: sectionTitle ? parseInt(subtopic.id?.split('.')[0] || '1', 10) : 1, title: sectionTitle }}
        onOpenGallery={onOpenInfographicGallery}
        highlights={lessonHighlights}
        onHighlightClick={handleHighlightClick}
      />

      {/* 6. جدول المصطلحات الإنجليزية وترجمتها ونطقها المعرب */}
      {subtopic.terms && subtopic.terms.length > 0 && (
        <section className="mb-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wider mb-4">
            <Languages className="w-4 h-4" />
            <span>قاموس المصطلحات والمفاهيم البرمجية (Vocabulary):</span>
          </div>
          <div className="overflow-x-auto" data-lesson-script="true">
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
                    <td className="py-3 px-3 font-mono text-emerald-400 font-bold">{t.term}</td>
                    <td className="py-3 px-3 text-slate-300">{t.pronunciation}</td>
                    <td className="py-3 px-3 text-slate-200">{renderHighlightedContent(t.meaning)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 7. الصيغة البرمجية العامة (Syntax) */}
      {subtopic.syntax && (
        <section className="mb-6 bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
            <Code2 className="w-4 h-4" />
            <span>الصيغة البرمجية العامة (Syntax Structure):</span>
          </div>
          <pre 
            data-lesson-script="true" 
            className="font-mono text-xs sm:text-sm text-purple-200 whitespace-pre-wrap leading-relaxed select-text" 
            dir="ltr"
          >
            {renderHighlightedContent(subtopic.syntax)}
          </pre>
        </section>
      )}

      {/* 8. مثال عملي بسيط مع تعليق عربي فوق كل سطر كود */}
      {subtopic.simpleCode && (
        <section className="mb-6">
          <CodeBlock
            code={subtopic.simpleCode}
            title="مثال عملي مبسط (مع تعليق عربي فوق كل سطر كود)"
            language="javascript"
            subtopicId={subtopic.id}
            highlights={lessonHighlights}
            onHighlightClick={handleHighlightClick}
          />
        </section>
      )}

      {/* 9. مثال عملي متقدم وتطبيقي */}
      {subtopic.advancedCode && (
        <section className="mb-6">
          <CodeBlock
            code={subtopic.advancedCode}
            title="تطبيق عملي متقدم وواقعي (Real-world Implementation)"
            language="javascript"
            subtopicId={subtopic.id}
            highlights={lessonHighlights}
            onHighlightClick={handleHighlightClick}
          />
        </section>
      )}

      {/* 10. محاكي تشغيل الكود المباشر مع مخرجات الطرفية في الوضع المظلم المعزول */}
      {(subtopic.simpleCode || subtopic.advancedCode) && (
        <LiveCodePreview
          initialCode={subtopic.simpleCode || subtopic.advancedCode}
          expectedOutput={subtopic.outputExplanation}
          title={`معاينة تشغيل كود: ${subtopic.title}`}
          subtopicId={subtopic.id}
          language="javascript"
        />
      )}

      {/* 11. شرح المخرجات البرمجية */}
      {subtopic.outputExplanation && (
        <section 
          data-lesson-script="true" 
          className="mb-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 sm:p-5"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1.5">
            <Terminal className="w-4 h-4" />
            <span>تفسير نواتج التشغيل وسلوك الخادم:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {renderHighlightedContent(subtopic.outputExplanation)}
          </p>
        </section>
      )}

      {/* 12. الأخطاء الشائعة وطرق تجنبها (Common Mistakes) */}
      {subtopic.commonMistakes && subtopic.commonMistakes.length > 0 && (
        <section className="mb-6 bg-rose-950/20 border border-rose-500/30 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>أخطاء برمجية شائعة يقع فيها المطورون:</span>
          </div>
          <div data-lesson-script="true" className="space-y-4 font-sans text-xs sm:text-sm">
            {subtopic.commonMistakes.map((m, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-rose-500/20 rounded-xl p-4">
                <div className="text-rose-400 font-semibold mb-1 flex items-start gap-1.5">
                  <span className="shrink-0 text-base">✕</span>
                  <span><strong>الخطأ:</strong> {renderHighlightedContent(m.wrong)}</span>
                </div>
                <div className="text-emerald-400 font-semibold mb-1 flex items-start gap-1.5">
                  <span className="shrink-0 text-base">✓</span>
                  <span><strong>الصواب:</strong> {renderHighlightedContent(m.right)}</span>
                </div>
                {m.reason && (
                  <p className="text-slate-400 text-xs mt-1.5 leading-relaxed pr-5">
                    <strong>السبب:</strong> {renderHighlightedContent(m.reason)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 13. نصائح المحترفين وأفضل الممارسات (Best Practices) */}
      {subtopic.bestPractices && subtopic.bestPractices.length > 0 && (
        <section className="mb-8 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">
            <Lightbulb className="w-4 h-4" />
            <span>نصائح المحترفين وأفضل الممارسات (Best Practices):</span>
          </div>
          <ul data-lesson-script="true" className="space-y-2.5 font-sans text-xs sm:text-sm text-slate-200">
            {subtopic.bestPractices.map((bp, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{renderHighlightedContent(bp)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 14. سؤال الاختبار والتقييم السريع */}
      {subtopic.quiz && (
        <QuizCard quiz={subtopic.quiz} />
      )}

      {/* 15. تمرين عملي تطبيقي */}
      {subtopic.exercise && (
        <ExerciseCard exercise={subtopic.exercise} />
      )}

      {/* زر المعلم الذكي المدمج السريع */}
      <div className="my-8 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-slate-900 to-teal-950/50 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">هل لديك استفسار إضافي حول هذا الدرس؟</h4>
            <p className="text-[11px] text-slate-400">المعلم الذكي المدمج مدعوم بنموذج Google Gemini للإجابة الفورية</p>
          </div>
        </div>
        <button
          onClick={() => onOpenTutor && onOpenTutor(subtopic.title)}
          className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20 cursor-pointer shrink-0"
        >
          اسأل المعلم الذكي الآن 💬
        </button>
      </div>

      {/* 16. شريط التنقل السفلي بين الدروس (Previous / Next Navigation) */}
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
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-600/20 cursor-pointer"
          >
            <span>الدرس التالي</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        ) : (
          <div className="text-xs font-bold text-emerald-400">
            تهانينا! لقد أتممت هذا القسم بالكامل 🎉
          </div>
        )}
      </div>

      {/* أداة التظليل الذكية العائمة عند تحديد أي نص أو كود */}
      <TextHighlightPopover 
        subtopicId={subtopic.id} 
        subtopicTitle={subtopic.title} 
        onHighlightSaved={loadLessonHighlights} 
        onOpenTutor={(query) => onOpenTutor && onOpenTutor(query || subtopic.title)}
        onOpenHighlights={() => setIsHighlightsModalOpen(true)}
      />

      {/* نافذة استعراض التظليلات والمقتطفات المحفوظة لهذا الدرس محلياً */}
      <SavedHighlightsModal
        isOpen={isHighlightsModalOpen}
        onClose={() => setIsHighlightsModalOpen(false)}
        currentSubtopicId={subtopic.id}
      />

    </article>
  );
}
