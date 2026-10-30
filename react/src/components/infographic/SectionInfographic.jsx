// src/components/infographic/SectionInfographic.jsx
import React, { useRef, useState } from 'react';
import { Download, Sparkles, Award } from 'lucide-react';
import { downloadElementAsPng } from '../../utils/exportImage.js';

export default function SectionInfographic({ sectionData }) {
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const info = sectionData?.sectionInfographic || {
    badge: "Master Section",
    title: sectionData?.title || "إنفوجرافيك القسم الشامل",
    overview: "ملخص معماري شامل لكافة ركائز هذا القسم",
    stages: [],
    goldenRule: "إتقان النواة الداخلية قبل تجريدات المكتبات"
  };

  const handleDownload = async () => {
    setDownloading(true);
    await downloadElementAsPng(cardRef.current, `${sectionData?.id || 'section'}_Master_Infographic.png`);
    setDownloading(false);
  };

  return (
    <div className="my-8">
      {/* شريط الإجراء العلوي */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            إنفوجرافيك القسم الشامل (Master Infographic)
          </h3>
          <p className="text-xs text-slate-400">مرجع بصري يلخص الركائز الكبرى للقسم في لوحة واحدة عالية الجودة</p>
        </div>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-purple-600/20 transition-all cursor-pointer disabled:opacity-50"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{downloading ? "جاري تجهيز الصورة..." : "تحميل إنفوجرافيك القسم كـ PNG"}</span>
        </button>
      </div>

      {/* اللوحة الشاملة */}
      <div
        ref={cardRef}
        className="rounded-3xl p-8 sm:p-10 border-2 border-purple-500/30 shadow-2xl relative overflow-hidden text-slate-100"
        style={{ background: 'linear-gradient(135deg, #030712 0%, #0a1120 50%, #030712 100%)', backgroundColor: '#0a1120' }}
      >
        {/* خلفيات توهج نيون */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* ترويسة اللوحة الرئيسية */}
        <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
          <div 
            className="inline-flex items-center gap-2 text-white text-xs font-bold px-4 py-1 rounded-full mb-3 shadow-md"
            style={{ background: 'linear-gradient(90deg, #a855f7 0%, #06b6d4 100%)' }}
          >
            <span>{info.badge || "React Master"}</span>
            <span>•</span>
            <span>{sectionData?.title}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
            {info.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {info.overview || info.subtitle}
          </p>
        </div>

        {/* المراحل أو الركائز الأربع الكبرى في رحلة التعلم */}
        {(info.stages || info.pillars) && (
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {(info.stages || info.pillars).map((st, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-lg"
              >
                <div>
                  <div 
                    className="w-8 h-8 rounded-xl text-white flex items-center justify-center font-bold text-sm mb-3 shadow-md"
                    style={{ background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)' }}
                  >
                    {st.step || idx + 1}
                  </div>
                  <h4 className="font-extrabold text-sm text-white mb-2">{st.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{st.desc || st.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* القاعدة الذهبية للقسم */}
        {info.goldenRule && (
          <div 
            className="relative z-10 border border-purple-500/40 rounded-2xl p-5 text-center shadow-lg"
            style={{ background: 'linear-gradient(90deg, rgba(88, 28, 135, 0.4) 0%, rgba(15, 23, 42, 0.9) 50%, rgba(8, 51, 68, 0.4) 100%)', backgroundColor: '#0f172a' }}
          >
            <div className="flex items-center justify-center gap-2 text-amber-300 text-xs font-bold mb-1">
              <Award className="w-4 h-4 text-amber-400" />
              القاعدة الذهبية للقسم:
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white max-w-2xl mx-auto leading-relaxed">
              "{info.goldenRule}"
            </p>
          </div>
        )}

        {/* حقوق الخريطة */}
        <div className="relative z-10 mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <span>خريطة طريق React.js الاحترافية من الصفر إلى الاحتراف</span>
          <span>© 2026 - أكاديمية تطوير الويب</span>
        </div>

      </div>
    </div>
  );
}
