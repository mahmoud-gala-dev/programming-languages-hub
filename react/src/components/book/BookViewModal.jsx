// src/components/book/BookViewModal.jsx
import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Download, Printer, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { downloadBookAsPdf } from '../../utils/exportPdf.js';
import CodeBlock from '../lesson/CodeBlock.jsx';

export default function BookViewModal({ sectionData, isOpen, onClose }) {
  const bookRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    setDownloading(true);
    await downloadBookAsPdf(bookRef.current, "كتاب_اساسيات_تطوير_الويب_React.pdf");
    setDownloading(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return typeof document !== 'undefined' ? createPortal(
    <div className="fixed inset-0 z-[99998] w-screen h-screen min-h-screen bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto" dir="rtl">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-5xl h-[94vh] sm:h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* شريط الإجراءات العلوي للنافذة */}
        <div className="flex flex-wrap items-center justify-between px-3 sm:px-6 py-2.5 sm:py-4 bg-slate-950 border-b border-slate-800 no-print shrink-0 gap-2">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-xs sm:text-sm text-white truncate max-w-[200px] sm:max-w-none">
                كتاب أساسيات تطوير الويب والإنفوجرافيك
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">مرجع القسم الأول من خريطة طريق React.js</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1 sm:gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all cursor-pointer"
              title="طباعة أو حفظ كملف PDF عالي الجودة عبر المتصفح"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>طباعة</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="flex items-center gap-1 sm:gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer disabled:opacity-50"
              title="توليد وتنزيل ملف PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? "جاري التوليد..." : "تحميل PDF"}</span>
            </button>

            <button
              onClick={onClose}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer mr-1"
              title="إغلاق النافذة"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* محتوى الكتاب القابل للتمرير والطباعة */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-12 bg-white text-slate-900 print:p-0 print:m-0" dir="rtl">
          <div ref={bookRef} className="max-w-4xl mx-auto space-y-12">
            
            {/* 1. صفحة غلاف الكتاب الفخمة */}
            <div className="min-h-[500px] flex flex-col justify-between p-10 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl shadow-xl text-center page-break">
              <div className="pt-6">
                <span className="inline-block bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold px-4 py-1 rounded-full mb-4">
                  خريطة طريق React.js الشاملة • الإصدار المعتمد 2026
                </span>
                <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white mb-4">
                  أساسيات تطوير الويب
                </h1>
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6">
                  الدليل المرجعي الشامل للمبتدئين من الصفر حتى الاحتراف
                </h2>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                  35 درساً مفصلاً خطوة بخطوة، أمثلة من الحياة اليومية، أكواد برمجية مع تعليق على كل سطر، بطاقات إنفوجرافيك ملونة، وتمارين وتطبيقات عملية.
                </p>
              </div>

              <div className="pt-10 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-2">
                <span>إعداد: أكاديمية خريطة طريق React.js الاحترافية</span>
                <span>القسم 1 من 34 قسماً تخصصياً</span>
              </div>
            </div>

            {/* 2. مقدمة وفهرس المحتويات */}
            <div className="page-break space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-blue-950 border-b-2 border-blue-600 pb-2">
                فهرس موضوعات القسم الأول
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sectionData.topics.map((t, idx) => (
                  <div key={t.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="font-bold text-blue-900 text-sm mb-2">
                      {idx + 1}. {t.title} ({t.englishTitle})
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 pr-2">
                      {t.subtopics.map(sub => (
                        <li key={sub.id}>{sub.title}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. سرد الدروس والمفاهيم التفصيلية الـ 35 */}
            {sectionData.topics.map((t, tIdx) => (
              <div key={t.id} className="space-y-8 page-break pt-6">
                <div className="bg-blue-900 text-white p-5 rounded-2xl">
                  <span className="text-xs text-blue-200 font-bold">الموضوع {t.id}</span>
                  <h2 className="text-xl sm:text-2xl font-black mt-1">
                    {tIdx + 1}. {t.title} - {t.englishTitle}
                  </h2>
                  <p className="text-xs text-blue-100 mt-1">{t.description}</p>
                </div>

                {t.subtopics.map((sub, sIdx) => (
                  <div key={sub.id} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-[11px] font-bold text-blue-600">الدرس {sub.id}</span>
                        <h3 className="text-lg font-bold text-slate-900">{sub.title}</h3>
                        <span className="text-xs text-slate-500 font-mono">{sub.englishTitle}</span>
                      </div>
                    </div>

                    {/* التعريف المبسط */}
                    <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <b className="text-blue-900">📖 التعريف المبسط: </b>
                      {sub.definition}
                    </div>

                    {/* التشبيه الحياتي */}
                    <div className="p-4 rounded-xl bg-amber-50 border-r-4 border-amber-500 text-xs sm:text-sm text-amber-950 leading-relaxed">
                      <b>💡 مثال وتشبيه من الحياة اليومية: </b>
                      {sub.analogy}
                    </div>

                    {/* لماذا نحتاجه */}
                    <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <b className="text-blue-900">❓ لماذا نحتاجه والمشكلة التي يحلها: </b>
                      {sub.why}
                    </div>

                    {/* كود بسيط مع تعليق على كل سطر */}
                    <div>
                      <div className="text-xs font-bold text-slate-900 mb-1">💻 الكود العملي النموذجي (مع تعليق عربي فوق كل سطر):</div>
                      <CodeBlock code={sub.simpleCode} title={`كود ${sub.title}`} language="html" />
                    </div>

                    {/* بطاقة الإنفوجرافيك المرجعية */}
                    <div className="p-5 rounded-2xl bg-slate-950 text-white space-y-3">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                        <Sparkles className="w-4 h-4" />
                        بطاقة إنفوجرافيك الدرس {sub.id}: {sub.title}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        {sub.infographic.steps.map((st, i) => (
                          <div key={i} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                            <b className="text-cyan-300 block mb-1">{st.title}</b>
                            <p className="text-[11px] text-slate-300">{st.desc}</p>
                          </div>
                        ))}
                      </div>
                      <div className="text-[11px] text-center text-cyan-200 pt-2 border-t border-slate-800">
                        📌 <b>الخلاصة:</b> {sub.infographic.summary}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            ))}

            {/* 4. جدول المرجع السريع Cheat Sheet */}
            <div className="page-break space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-blue-950 border-b-2 border-blue-600 pb-2">
                جدول المرجع السريع (Cheat Sheet) للقسم الأول
              </h2>
              <table className="w-full text-right text-xs border border-slate-300 border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-blue-950">
                    <th className="p-3 border border-slate-300">التصنيف</th>
                    <th className="p-3 border border-slate-300">الأمر / الصيغة البرمجية</th>
                    <th className="p-3 border border-slate-300">الوظيفة والشرح</th>
                  </tr>
                </thead>
                <tbody>
                  {sectionData.cheatSheet.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-2.5 border border-slate-300 font-bold text-slate-700">{row.category}</td>
                      <td className="p-2.5 border border-slate-300 font-mono text-blue-700" dir="ltr">{row.syntax}</td>
                      <td className="p-2.5 border border-slate-300 text-slate-600">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 5. خاتمة الكتاب وحقوق الملكية */}
            <div className="text-center pt-10 border-t-2 border-slate-200 text-xs text-slate-500">
              <p>تم بحمد الله اكتمال محتوى القسم الأول من خريطة طريق React.js الاحترافية.</p>
              <p className="mt-1">أكاديمية تطوير الويب © 2026 - جميع الحقوق محفوظة للمتعلمين والمطورين.</p>
            </div>

          </div>
        </div>

      </div>
    </div>,
    document.body
  ) : null;
}

