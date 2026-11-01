// src/components/lesson/components/ProBestPracticesSection.jsx
// نصائح ذهبية وأفضل الممارسات للمحترفين بنمط Senior Engineer Blueprint مع شارات SVG
import React from 'react';
import { Award, Star, Zap, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProBestPracticesSection({ bestPractices = [], readingFontSize = 15 }) {
  if (!bestPractices || bestPractices.length === 0) return null;

  // فئات تقريبية لتنظيم النصائح
  const CATEGORIES = [
    { label: "كفاءة الأداء (Performance)", icon: Zap, color: "text-amber-400", badge: "bg-amber-500/15 text-amber-300 border-amber-500/30" },
    { label: "أمان واستقرار الكود (Security)", icon: Shield, color: "text-sky-400", badge: "bg-sky-500/15 text-sky-300 border-sky-500/30" },
    { label: "معمارية نظيفة (Clean Architecture)", icon: Sparkles, color: "text-emerald-400", badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-amber-950/10 to-slate-950 border border-amber-500/25 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
      
      {/* لمعان ذهبي ناعم في زوايا الكارت */}
      <div className="absolute top-0 right-0 size-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* 1. الترويسة الفخمة للقسم مع رسم SVG للختم الذهبي */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-600 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/25 shrink-0">
            <Award className="size-6 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Senior Engineer Blueprint
              </span>
              <span className="text-xs text-slate-400 font-sans">معايير كبار المطورين المعتمدة عالمياً</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white font-sans mt-0.5 text-balance">
              10. نصائح ذهبية وأفضل الممارسات للمحترفين (Best Practices)
            </h3>
          </div>
        </div>

        {/* ختم الجودة الهندسي SVG */}
        <div className="flex items-center gap-2 bg-slate-950/80 border border-amber-500/30 px-3.5 py-1.5 rounded-2xl self-start md:self-auto shadow-inner">
          <svg className="size-5 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
              fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs font-mono text-amber-300 font-bold tabular-nums">
            {bestPractices.length} معايير ذهبية
          </span>
        </div>
      </div>

      {/* 2. شبكة البطاقات الذهبية */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {bestPractices.map((tip, idx) => {
          const category = CATEGORIES[idx % CATEGORIES.length];
          const CategoryIcon = category.icon;

          return (
            <div 
              key={idx}
              className="group bg-slate-950/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 shadow-lg hover:shadow-amber-500/10 transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-3">
                {/* رأس بطاقة النصيحة */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-900 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="size-6 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono text-xs font-black flex items-center justify-center tabular-nums">
                      #{idx + 1}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${category.badge}`}>
                      {category.label}
                    </span>
                  </div>

                  <span className="text-amber-400/80 group-hover:text-amber-300 transition-colors">
                    <CategoryIcon className="size-4" />
                  </span>
                </div>

                {/* نص النصيحة الذهبية */}
                <p 
                  className="text-slate-200 font-sans leading-relaxed text-pretty font-medium"
                  style={{ fontSize: `${readingFontSize}px` }}
                >
                  {tip}
                </p>
              </div>

              {/* شريط الأثر على المشروع */}
              <div className="pt-2.5 border-t border-slate-900/80 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="size-3.5" />
                  <span>معتمد في أنظمة الإنتاج (Production Ready)</span>
                </span>
                <span className="font-mono text-amber-400/70 text-[10px]">Tier-1 Rule</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
