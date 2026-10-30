// src/components/book/BookViewModal.jsx
import React, { useRef, useState } from 'react';
import { X, Download, Printer, BookOpen, Layers, CheckCircle2, ChevronRight, FileText, Sparkles, Filter } from 'lucide-react';
import { downloadBookAsPdf } from '../../utils/exportPdf.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';
import InfographicCard from '../infographic/InfographicCard.jsx';
import CodeBlock from '../lesson/CodeBlock.jsx';
import { ALL_SECTIONS_DATA } from '../../data/sections/index.js';
import { SECTIONS_META } from '../../data/roadmapMeta.js';

export default function BookViewModal({ isOpen, onClose, currentSection }) {
  const [selectedSecId, setSelectedSecId] = useState(() => currentSection?.id || 1);
  const bookRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const { showToast } = useToast();

  if (!isOpen) return null;

  const activeSection = ALL_SECTIONS_DATA[selectedSecId] || currentSection;
  const allSubtopics = activeSection?.topics ? activeSection.topics.flatMap(t => t.subtopics || []) : [];

  const handleDownloadPdf = async () => {
    setDownloading(true);
    showToast("جاري تجهيز وتوليد كتاب الـ PDF متعدد الصفحات...", "info", 4000);
    try {
      const fileName = `كتاب_خريطة_طريق_ASPNET_Core_MVC_القسم_${activeSection?.id || 1}.pdf`;
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200" dir="rtl">
      <div className="bg-[#0b0f24] border border-purple-500/30 rounded-3xl max-w-5xl w-full h-[92vh] flex flex-col shadow-2xl relative overflow-hidden text-slate-100">
        
        {/* الترويسة العلوية وأزرار التصدير واختيار القسم */}
        <div className="px-6 py-4 bg-[#080b18] border-b border-purple-500/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 no-print">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-600/30 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white flex items-center gap-2 font-sans">
                كتاب ASP.NET Core MVC الشامل
                <span className="text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded-full font-mono">
                  33 قسماً • 1803 درساً
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                {activeSection?.title} • {allSubtopics.length} درساً تفصيلياً مع الإنفوجرافيك
              </p>
            </div>
          </div>

          {/* محدد القسم النشط للكتاب وأزرار التصدير */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 bg-[#0f1430] border border-purple-500/20 rounded-xl px-2.5 py-1 text-xs">
              <Filter className="w-3.5 h-3.5 text-purple-400" />
              <select
                value={selectedSecId}
                onChange={(e) => setSelectedSecId(Number(e.target.value))}
                className="bg-transparent text-slate-200 font-sans focus:outline-none cursor-pointer text-xs"
              >
                {SECTIONS_META.map(s => (
                  <option key={s.id} value={s.id} className="bg-[#0b0f24] text-slate-200">
                    القسم {s.id}: {s.title.slice(0, 30)}...
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 bg-[#0f1430] hover:bg-purple-900/30 text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer border border-purple-500/20"
              title="طباعة متجهية عالية الدقة للمستند"
            >
              <Printer className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline font-sans">طباعة المتجهية</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-purple-600/30 cursor-pointer disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="font-sans">{downloading ? "جاري التوليد..." : "تحميل كتاب PDF"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0f1430] hover:bg-purple-900/30 text-slate-400 hover:text-white transition-colors cursor-pointer border border-purple-500/20"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* جسم الكتاب القابل للتمرير والمجهز للطباعة والتصدير */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#060814] font-sans">
          <div 
            ref={bookRef}
            className="max-w-4xl mx-auto bg-[#0b0f24] border border-purple-500/20 rounded-3xl p-6 sm:p-12 shadow-2xl space-y-12 text-slate-100"
          >
            {/* غلاف الكتاب */}
            <div className="text-center py-12 border-b-2 border-purple-500/20 space-y-4">
              <div className="inline-block p-4 rounded-3xl bg-purple-500/10 border border-purple-500/30 text-purple-400 text-4xl mb-2">
                🟣
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white font-sans">
                خريطة طريق ASP.NET Core MVC الشاملة
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-purple-300 font-sans">
                {activeSection?.title}
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                {activeSection?.englishTitle}
              </p>
              <div className="pt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
                <span>إصدار .NET 8 / .NET 9</span>
                <span>•</span>
                <span>المرجع الشامل للمطورين</span>
                <span>•</span>
                <span>33 قسماً • 1803 درساً</span>
              </div>
            </div>

            {/* فهرس القسم */}
            <div className="p-6 rounded-2xl bg-[#080b18] border border-purple-500/20 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-sans">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>فهرس موضوعات القسم ({activeSection?.topics?.length} موضوعات رئيسية):</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-sans">
                {activeSection?.topics?.map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#0f1430]/60">
                    <span className="w-5 h-5 rounded bg-purple-500/20 text-purple-400 font-mono text-[10px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="truncate">{t.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* محتوى كافة دروس القسم بالتفصيل والإنفوجرافيك */}
            <div className="space-y-16">
              {allSubtopics.map((sub, idx) => (
                <div key={sub.subId || idx} className="space-y-6 pt-8 border-t border-purple-500/15">
                  
                  {/* رأس الدرس في الكتاب */}
                  <div className="flex items-baseline justify-between gap-4 border-b border-purple-500/10 pb-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-purple-400 block mb-1">
                        الدرس {sub.subId || `${activeSection.id}.${idx + 1}`}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white font-sans">
                        {sub.title}
                      </h3>
                      {sub.englishTitle && (
                        <p className="text-xs font-mono text-purple-300 mt-0.5">{sub.englishTitle}</p>
                      )}
                    </div>
                  </div>

                  {/* التعريف المبسط */}
                  {sub.definition && (
                    <div className="space-y-1">
                      <strong className="text-xs font-bold text-purple-400 block font-mono">1. التعريف المبسط:</strong>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">{sub.definition}</p>
                    </div>
                  )}

                  {/* التشبيه الحياتي */}
                  {sub.analogy && (
                    <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                      <strong className="text-amber-400 block mb-1">2. التشبيه من الحياة اليومية:</strong>
                      {sub.analogy}
                    </div>
                  )}

                  {/* لماذا نحتاجه */}
                  {sub.why && (
                    <div className="space-y-1">
                      <strong className="text-xs font-bold text-cyan-400 block font-mono">3. لماذا نحتاجه:</strong>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">{sub.why}</p>
                    </div>
                  )}

                  {/* الأكواد المشروحة */}
                  {sub.simpleCode && (
                    <div className="space-y-2">
                      <strong className="text-xs font-bold text-emerald-400 block font-mono">
                        4. الشفرة البرمجية التوضيحية (مع تعليقات على كل سطر):
                      </strong>
                      <CodeBlock code={sub.simpleCode} title="كود توضيحي" language="csharp" />
                    </div>
                  )}

                  {/* بطاقة الإنفوجرافيك المرجعية للدرس */}
                  {sub.infographic && (
                    <div className="pt-2">
                      <InfographicCard subtopic={sub} />
                    </div>
                  )}

                  {/* الأخطاء الشائعة */}
                  {sub.commonMistakes && sub.commonMistakes.length > 0 && (
                    <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2 text-xs font-sans">
                      <strong className="text-rose-400 block">أخطاء شائعة وتصحيحها:</strong>
                      {sub.commonMistakes.map((m, mIdx) => (
                        <div key={mIdx} className="space-y-1">
                          <p className="text-rose-300 font-semibold">❌ {m.wrong}</p>
                          <p className="text-emerald-300 font-semibold">✓ {m.right}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* خاتمة الكتاب */}
            <div className="text-center py-8 border-t-2 border-purple-500/20 text-xs text-slate-400 font-sans space-y-2">
              <p>تم إعداد هذا المنهج الشامل وفق أحدث معايير هندسة البرمجيات وأفضل الممارسات العالمية لـ .NET و ASP.NET Core MVC.</p>
              <p className="font-mono text-purple-400">© خريطة طريق ASP.NET Core MVC الاحترافية</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
