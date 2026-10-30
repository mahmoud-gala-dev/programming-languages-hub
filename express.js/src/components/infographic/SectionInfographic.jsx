// src/components/infographic/SectionInfographic.jsx
import React, { useRef, useState } from 'react';
import { Download, Layers, Compass } from 'lucide-react';
import { downloadElementAsPng } from '../../utils/exportImage.js';

export default function SectionInfographic({ sectionData }) {
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  if (!sectionData) return null;

  const handleDownload = async () => {
    setDownloading(true);
    const fileName = `section_${sectionData.id || 1}_infographic_express.png`;
    await downloadElementAsPng(cardRef.current, fileName);
    setDownloading(false);
  };

  return (
    <div className="my-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold text-white">
            الخريطة الذهنية والإنفوجرافيك الشامل للقسم (Section Map)
          </h3>
        </div>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-xs font-black px-4 py-2 rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-50"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{downloading ? "جاري تجهيز الصورة..." : "تحميل خريطة القسم (PNG)"}</span>
        </button>
      </div>

      <div
        ref={cardRef}
        className="rounded-3xl p-6 sm:p-10 bg-[#0a0d14] border-2 border-amber-500/40 shadow-2xl relative overflow-hidden text-slate-100"
        style={{ backgroundColor: '#0a0d14' }}
      >
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              القسم {sectionData.number || sectionData.id} • {sectionData.badge || "مسار التعلم"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              {sectionData.title}
            </h2>
            <p className="text-xs text-slate-400 mt-1">{sectionData.englishTitle}</p>
          </div>
          <div className="text-left sm:text-right shrink-0">
            <span className="text-xs font-mono text-amber-300 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
              {sectionData.topics?.length || 0} موضوعات رئيسية
            </span>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {sectionData.topics?.map((topic, idx) => (
            <div
              key={topic.id || idx}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{topic.title}</h4>
                  <p className="text-[11px] text-slate-400">{topic.englishTitle}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {topic.subtopics?.map((sub, sIdx) => (
                  <span
                    key={sub.id || sIdx}
                    className="text-[11px] bg-slate-950/80 text-slate-300 border border-slate-800/80 px-2.5 py-1 rounded-lg"
                  >
                    {sub.title}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 bg-amber-950/40 border border-amber-500/30 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-amber-400">مخرجات التعلم لهذا القسم:</h5>
            <p className="text-xs text-slate-200 mt-1 leading-relaxed">
              {sectionData.description || "إتقان مفاهيم Express.js وهندسة REST APIs والأنظمة القابلة للإنتاج والتوسع."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
