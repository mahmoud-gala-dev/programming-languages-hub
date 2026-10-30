// src/components/infographic/InfographicCard.jsx
import React, { useRef, useState } from 'react';
import { Download, Sparkles, Image as ImageIcon, Layers, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { downloadElementAsPng } from '../../utils/exportImage.js';

export default function InfographicCard({ subtopic }) {
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  if (!subtopic || !subtopic.infographic) return null;
  const info = subtopic.infographic;

  const handleDownload = async () => {
    setDownloading(true);
    const safeTitle = (subtopic.englishTitle || 'lesson').replace(/[^a-zA-Z0-9_-]/g, '_');
    const fileName = `infographic_aspnet_${subtopic.subId || 'lesson'}_${safeTitle}.png`;
    await downloadElementAsPng(cardRef.current, fileName);
    setDownloading(false);
  };

  return (
    <div className="my-8" dir="rtl">
      {/* شريط الإجراء العلوي مع زر التحميل المباشر */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3 px-1">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-purple-400" />
          <h4 className="text-xs font-bold text-slate-200 font-sans">
            بطاقة الإنفوجرافيك المرجعية للدرس (Infographic Reference Card)
          </h4>
        </div>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-purple-600/20 transition-all cursor-pointer disabled:opacity-50"
          title="تحميل بطاقة الإنفوجرافيك كصورة PNG عالية الدقة"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{downloading ? "جاري تجهيز الصورة..." : "تحميل الإنفوجرافيك كصورة (PNG)"}</span>
        </button>
      </div>

      {/* لوحة الإنفوجرافيك المرئية المستقلة القابلة للتصدير كصورة */}
      <div
        ref={cardRef}
        className="rounded-2xl p-6 sm:p-8 bg-[#070918] border-2 border-purple-500/30 shadow-2xl relative overflow-hidden text-slate-100"
        style={{ backgroundColor: '#070918' }}
      >
        {/* خلفيات إضاءة نيون جمالية */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        {/* 1. الترويسة العلوية للإنفوجرافيك */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-500/20 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span 
                className="text-[10px] font-extrabold uppercase tracking-wider text-slate-950 px-2.5 py-0.5 rounded-full shadow-sm"
                style={{ background: 'linear-gradient(90deg, #a855f7 0%, #38bdf8 100%)' }}
              >
                {info.badge || `الدرس ${subtopic.subId}`}
              </span>
              <span className="text-xs font-mono text-purple-300">
                {subtopic.englishTitle}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-white leading-tight font-sans">
              {subtopic.title}
            </h3>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <div className="text-[11px] text-slate-400 font-bold font-sans">خريطة طريق ASP.NET Core MVC</div>
            <div className="text-[10px] text-purple-400 font-mono">من الصفر إلى الاحتراف 🟣</div>
          </div>
        </div>

        {/* 2. بطاقة التشبيه الحياتي الملموس (Analogy Spotlight) */}
        {subtopic.analogy && (
          <div className="relative z-10 bg-[#0f1430]/90 border border-purple-500/25 rounded-xl p-4.5 mb-6 shadow-inner">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-1.5 font-sans">
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
                className="bg-[#0b0e24] border border-purple-500/20 rounded-xl p-4 flex flex-col justify-between hover:border-purple-400/40 transition-colors"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-mono text-xs font-bold mb-2.5">
                    {idx + 1}
                  </div>
                  <h5 className="text-xs font-bold text-white mb-1.5 font-sans">{st.title}</h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans">{st.desc}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-purple-500/10 flex items-center text-[10px] text-purple-400 font-mono">
                  <span>خطوة معمارية</span>
                  <ArrowLeft className="w-3 h-3 mr-auto" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. الخلاصة المرجعية البصرية للدرس */}
        <div className="relative z-10 bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-cyan-950/40 border border-purple-500/25 rounded-xl p-4 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
          <p className="text-xs font-medium text-slate-200 leading-relaxed font-sans">
            {info.summary || `يمثل هذا الدرس ركيزة أساسية في فهم مسار ASP.NET Core MVC وإتقانه.`}
          </p>
        </div>
      </div>
    </div>
  );
}
