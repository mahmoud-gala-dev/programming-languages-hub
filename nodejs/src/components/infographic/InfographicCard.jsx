// src/components/infographic/InfographicCard.jsx
import React, { useRef, useState } from 'react';
import { Download, Sparkles, Image as ImageIcon, CheckCircle, Lightbulb, Server, Database, ShieldCheck, Zap } from 'lucide-react';
import { downloadElementAsPng } from '../../utils/exportImage.js';

export default function InfographicCard({ subtopic }) {
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  if (!subtopic || !subtopic.infographic) return null;
  const info = subtopic.infographic;

  const handleDownload = async () => {
    setDownloading(true);
    const fileName = `infographic_nodejs_${subtopic.id || 'lesson'}_${(subtopic.englishTitle || 'lesson').replace(/\s+/g, '_')}.png`;
    await downloadElementAsPng(cardRef.current, fileName);
    setDownloading(false);
  };

  return (
    <div className="my-8">
      {/* شريط الإجراء العلوي مع زر التحميل المباشر */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3 px-1">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-emerald-400" />
          <h4 className="text-xs font-bold text-slate-200">
            بطاقة الإنفوجرافيك المرجعية للدرس (Infographic Reference Card)
          </h4>
        </div>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-emerald-600/20 transition-all cursor-pointer disabled:opacity-50"
          title="تحميل بطاقة الإنفوجرافيك كصورة PNG عالية الدقة"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{downloading ? "جاري تجهيز الصورة..." : "تحميل الإنفوجرافيك كصورة (PNG)"}</span>
        </button>
      </div>

      {/* لوحة الإنفوجرافيك المرئية المستقلة */}
      <div
        ref={cardRef}
        className="rounded-2xl p-6 sm:p-8 bg-[#070b14] border-2 border-emerald-500/30 shadow-2xl relative overflow-hidden text-slate-100"
        style={{ backgroundColor: '#070b14' }}
      >
        {/* خلفيات إضاءة نيون جمالية */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        {/* 1. الترويسة العلوية للإنفوجرافيك */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span 
                className="text-[10px] font-extrabold uppercase tracking-wider text-slate-950 px-2.5 py-0.5 rounded-full shadow-sm"
                style={{ background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)' }}
              >
                {info.badge || `الدرس ${subtopic.id}`}
              </span>
              <span className="text-xs font-mono text-emerald-300/80">
                {subtopic.englishTitle}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
              {subtopic.title}
            </h3>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <div className="text-[11px] text-slate-400 font-bold">خريطة طريق Node.js الشاملة</div>
            <div className="text-[10px] text-emerald-400/80 font-mono">من الصفر إلى الاحتراف 🟢</div>
          </div>
        </div>

        {/* 2. بطاقة التشبيه الحياتي الملموس (Analogy Spotlight) */}
        {subtopic.analogy && (
          <div className="relative z-10 bg-slate-900/90 border border-slate-700/80 rounded-xl p-4.5 mb-6 shadow-inner">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              التشبيه من الحياة اليومية (Everyday Analogy):
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-sans">
              {subtopic.analogy}
            </p>
          </div>
        )}

        {/* 3. خطوات ومحاور المفهوم البصرية (Infographic Steps Grid) */}
        {info.steps && (
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
            {info.steps.map((st, idx) => (
              <div 
                key={idx}
                className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono text-xs font-bold mb-2.5">
                    {idx + 1}
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1.5">{st.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. الخلاصة المرجعية وقاعدة المطور الذهبية */}
        <div className="relative z-10 bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
              القاعدة الذهبية والخلاصة:
            </div>
            <div className="text-xs text-slate-200 font-medium mt-0.5 leading-relaxed">
              {info.summary || subtopic.definition}
            </div>
          </div>
        </div>

        {/* تذييل الإنفوجرافيك */}
        <div className="relative z-10 mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
          <span>Node.js Backend Developer Roadmap</span>
          <span>© حقوق المحتوى محفوظة للمتعلم</span>
        </div>
      </div>
    </div>
  );
}
