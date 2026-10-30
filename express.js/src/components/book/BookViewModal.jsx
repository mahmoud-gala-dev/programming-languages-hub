// src/components/book/BookViewModal.jsx
import React, { useRef, useState } from 'react';
import { X, Download, Printer, BookOpen, Layers } from 'lucide-react';
import { downloadBookAsPdf } from '../../utils/exportPdf.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';
import InfographicCard from '../infographic/InfographicCard.jsx';
import CodeBlock from '../lesson/CodeBlock.jsx';

export default function BookViewModal({ isOpen, onClose, currentSection }) {
  const bookRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const showToast = useToast();

  if (!isOpen || !currentSection) return null;

  const handleDownloadPdf = async () => {
    setDownloading(true);
    showToast("جاري تجهيز وتوليد كتاب الـ PDF...", "info", 4000);
    try {
      const fileName = `كتاب_خريطة_طريق_Expressjs_${currentSection.id || 'القسم'}.pdf`;
      await downloadBookAsPdf(bookRef.current, fileName);
      showToast("تم توليد وتحميل كتاب الـ PDF بنجاح! 📚", "success");
    } catch {
      showToast("تعذر التصدير المباشر، جاري فتح نافذة الطباعة كبديل عالي الدقة", "warning");
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const allSubtopics = currentSection.topics ? currentSection.topics.flatMap(t => t.subtopics || []) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn" dir="rtl">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-5xl w-full h-[92vh] flex flex-col shadow-2xl relative overflow-hidden text-slate-100">
        
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-500 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white flex items-center gap-2">
                كتاب Express.js الإلكتروني الشامل
                <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-normal">
                  PDF & Vector Print
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                {currentSection.title} • {allSubtopics.length} درساً تفصيلياً مع الإنفوجرافيك
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">طباعة المتجهية</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="flex items-center gap-1.5 px-4 sm:px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black rounded-xl transition-all shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? "جاري التوليد..." : "تحميل كتاب PDF"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950 font-sans">
          <div 
            ref={bookRef}
            className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl space-y-12 text-slate-100"
          >
            <div className="text-center py-12 border-b-2 border-slate-800 space-y-4">
              <div className="inline-block p-4 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-4xl mb-2">
                ⚡
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">
                خريطة طريق Express.js الشاملة
              </h1>
              <p className="text-lg text-amber-400 font-bold font-mono">
                من الصفر إلى الاحتراف (Zero to Hero)
              </p>
              <div className="pt-4 max-w-xl mx-auto">
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                  {currentSection.title}
                </span>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {currentSection.description}
                </p>
              </div>
            </div>

            <div className="py-6 border-b border-slate-800">
              <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                فهرس موضوعات الكتاب والإنفوجرافيك:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {allSubtopics.map((sub, sIdx) => (
                  <div key={sIdx} className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-200">{sIdx + 1}. {sub.title}</span>
                    <span className="font-mono text-amber-400 text-[11px]">{sub.id}</span>
                  </div>
                ))}
              </div>
            </div>

            {allSubtopics.map((sub, sIdx) => (
              <div key={sIdx} className="pt-8 border-b border-slate-800/80 pb-12 print-page-break">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full border border-amber-500/20 font-bold">
                    الدرس {sub.id}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {sub.englishTitle}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-4">
                  {sub.title}
                </h3>

                {sub.definition && (
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4">
                    <h5 className="text-xs font-bold text-amber-400 mb-1">التعريف الأساسي:</h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{sub.definition}</p>
                  </div>
                )}

                {sub.analogy && (
                  <div className="bg-amber-950/20 border border-amber-500/20 p-4 rounded-xl mb-4">
                    <h5 className="text-xs font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      التشبيه من الحياة اليومية:
                    </h5>
                    <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-sans">{sub.analogy}</p>
                  </div>
                )}

                {sub.infographic && (
                  <div className="my-6">
                    <InfographicCard subtopic={sub} />
                  </div>
                )}

                {sub.simpleCode && (
                  <div className="my-4">
                    <CodeBlock code={sub.simpleCode} title="الشفرة البرمجية المشروحة" language="javascript" />
                  </div>
                )}

                {sub.commonMistakes && sub.commonMistakes.length > 0 && (
                  <div className="bg-rose-950/20 border border-rose-500/20 p-4 rounded-xl my-4 text-xs">
                    <h5 className="font-bold text-rose-400 mb-2">تنبيهات وأخطاء شائعة:</h5>
                    {sub.commonMistakes.map((cm, cIdx) => (
                      <p key={cIdx} className="text-slate-300 leading-relaxed">
                        <span className="text-rose-400 font-semibold">✕ الخطأ: </span>{cm.wrong} — <span className="text-emerald-400 font-semibold">✓ الصواب: </span>{cm.right}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="text-center py-8 text-xs text-slate-500 font-sans">
              تم إعداد وتنسيق هذا الكتاب إلكترونياً عبر منصة خريطة طريق Express.js الاحترافية ©
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
