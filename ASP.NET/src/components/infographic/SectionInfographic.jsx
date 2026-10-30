// src/components/infographic/SectionInfographic.jsx
import React, { useRef, useState } from 'react';
import { Download, Layers, Compass, CheckCircle2 } from 'lucide-react';
import { downloadElementAsPng } from '../../utils/exportImage.js';

export default function SectionInfographic({ sectionData, onSelectLesson }) {
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  if (!sectionData) return null;

  const handleDownload = async () => {
    setDownloading(true);
    const fileName = `section_${sectionData.id || 1}_infographic_aspnet_mvc.png`;
    await downloadElementAsPng(cardRef.current, fileName);
    setDownloading(false);
  };

  return (
    <div className="my-8" dir="rtl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-purple-400" />
          <h3 className="text-sm font-bold text-white font-sans">
            الخريطة الذهنية والإنفوجرافيك الشامل للقسم (Section Architectural Map)
          </h3>
        </div>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-purple-600/20 transition-all cursor-pointer disabled:opacity-50"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{downloading ? "جاري تجهيز الصورة..." : "تحميل خريطة القسم (PNG)"}</span>
        </button>
      </div>

      <div
        ref={cardRef}
        className="rounded-3xl p-6 sm:p-10 bg-[#070918] border-2 border-purple-500/40 shadow-2xl relative overflow-hidden text-slate-100"
        style={{ backgroundColor: '#070918' }}
      >
        {/* خلفيات إضاءة نيون */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        {/* ترويسة القسم */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-purple-500/20 pb-6 mb-8">
          <div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full font-mono">
              القسم {sectionData.id} • {sectionData.category || "مسار التعلم"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 font-sans">
              {sectionData.title}
            </h2>
            <p className="text-xs text-purple-300 font-mono mt-1">{sectionData.englishTitle}</p>
          </div>
          <div className="text-left sm:text-right shrink-0">
            <span className="text-xs font-mono text-purple-300 bg-[#0f1430] px-3.5 py-2 rounded-xl border border-purple-500/20">
              {sectionData.topics?.length || 0} مواضيع رئيسية • {sectionData.topics?.reduce((acc, t) => acc + (t.subtopics?.length || 0), 0)} درساً
            </span>
          </div>
        </div>

        {/* شبكة موضوعات القسم الرئيسية */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {sectionData.topics?.map((topic, idx) => (
            <div
              key={topic.topicId || topic.id || idx}
              className="bg-[#0b0e24] border border-purple-500/20 rounded-2xl p-5 hover:border-purple-400/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center text-xs font-mono">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">{topic.title}</h4>
                  <p className="text-[11px] text-slate-400 font-mono">{topic.englishTitle || `الموضوع ${idx + 1}`}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {topic.subtopics?.map((sub, sIdx) => (
                  <span
                    key={sub.subId || sIdx}
                    onClick={() => onSelectLesson && onSelectLesson(sub.subId)}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[#080b18] text-slate-300 border border-purple-500/10 hover:border-purple-400/50 hover:text-white transition-all cursor-pointer font-sans"
                  >
                    {sub.title || sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* خلاصة معمارية القسم */}
        <div className="relative z-10 p-5 rounded-2xl bg-[#0f1430]/90 border border-purple-500/25 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-cyan-300 font-sans mb-1">الرؤية الهندسية الشاملة للقسم:</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {sectionData.description || "إتقان كافة المفاهيم المدرجة في هذا القسم ينقلك لمستوى متقدم في تطوير وبرمجة تطبيقات ASP.NET Core MVC الاحترافية."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
