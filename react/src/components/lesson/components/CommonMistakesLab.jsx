// src/components/lesson/components/CommonMistakesLab.jsx
// معمل تفادي الأخطاء الشائعة بنمط Split Danger/Safe Matrix مع رسومات SVG ومقارنة الكود
import React from 'react';
import { AlertTriangle, ShieldCheck, ArrowLeft, ArrowDown, Lightbulb, Bug, CheckCircle2 } from 'lucide-react';

export default function CommonMistakesLab({ commonMistakes = [], readingFontSize = 15 }) {
  if (!commonMistakes || commonMistakes.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
      
      {/* لمعان خفيف في الخلفية */}
      <div className="absolute top-0 right-0 size-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* 1. الترويسة الرئيسية لمعمل الأخطاء */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-2xl bg-gradient-to-tr from-rose-500 via-rose-600 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-rose-500/20 shrink-0">
            <AlertTriangle className="size-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30">
                Bug Prevention Matrix
              </span>
              <span className="text-xs text-slate-400">معمل محاكاة أخطاء المبتدئين والحلول المعتمدة</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white font-sans mt-0.5 text-balance">
              9. أخطاء شائعة يقع فيها المبتدئون وكيف تتجنبها هندسياً
            </h3>
          </div>
        </div>

        {/* شارة عدد الحالات في المعمل */}
        <div className="flex items-center gap-2 bg-slate-950/80 border border-slate-800 px-3.5 py-1.5 rounded-2xl self-start md:self-auto shadow-inner">
          <Bug className="size-4 text-rose-400" />
          <span className="text-xs font-mono text-rose-300 font-bold tabular-nums">
            {commonMistakes.length} فخاخ برمجية مصنفة
          </span>
        </div>
      </div>

      {/* 2. قائمة بطاقات الأخطاء والمقارنات بنمط Split Matrix */}
      <div className="relative z-10 space-y-6">
        {commonMistakes.map((m, idx) => (
          <div 
            key={idx}
            className="bg-slate-950/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4 transition-all"
          >
            {/* شريط رقم الخطأ والتصنيف */}
            <div className="flex items-center justify-between border-b border-slate-850 pb-3">
              <div className="flex items-center gap-2">
                <span className="size-6 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono text-xs font-black flex items-center justify-center tabular-nums">
                  #{idx + 1}
                </span>
                <span className="text-xs font-bold text-slate-300 font-sans">
                  مقارنة السلوك البرمجي: الخطأ مقابل الصواب
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase">
                Anti-Pattern vs Best Practice
              </span>
            </div>

            {/* مصفوفة المقارنة المزدوجة (Split Danger / Safe Matrix) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
              {/* الجانب الأيمن: منطقة الخطر والخطأ الشائع (Danger Zone) */}
              <div className="bg-rose-950/20 border border-rose-600/30 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-3 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 size-24 bg-rose-500/10 rounded-full blur-xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-extrabold text-rose-400 flex items-center gap-1.5 font-sans">
                      <span className="size-5 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-300 text-xs">✕</span>
                      <span>1. الخطأ الشائع (The Mistake)</span>
                    </span>
                    <span className="text-[10px] font-mono bg-rose-950 text-rose-300 border border-rose-800/40 px-2 py-0.5 rounded-md">
                      فخ برمجي ⚠️
                    </span>
                  </div>

                  <div 
                    className="p-3.5 rounded-xl bg-slate-950 border border-rose-900/40 font-mono text-rose-200 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap select-text"
                    dir="ltr"
                  >
                    {m.wrong}
                  </div>
                </div>

                <div className="text-[11px] text-rose-300/80 font-sans flex items-center gap-1 pt-1 border-t border-rose-900/30">
                  <span>💥 النتيجة:</span>
                  <span>سلوك غير متوقع، ثغرة أداء، أو تعطل في التطبيق.</span>
                </div>
              </div>

              {/* الجانب الأيسر: منطقة الأمان والحل الهندسي المعتمد (Safe Zone) */}
              <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-3 relative overflow-hidden">
                <div className="absolute -top-6 -left-6 size-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-extrabold text-emerald-400 flex items-center gap-1.5 font-sans">
                      <span className="size-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 text-xs">✓</span>
                      <span>2. الحل الهندسي المعتمد (Correct Pattern)</span>
                    </span>
                    <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800/40 px-2 py-0.5 rounded-md">
                      معتمد للإنتاج 🛡️
                    </span>
                  </div>

                  <div 
                    className="p-3.5 rounded-xl bg-slate-950 border border-emerald-900/40 font-mono text-emerald-300 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap select-text"
                    dir="ltr"
                  >
                    {m.right}
                  </div>
                </div>

                <div className="text-[11px] text-emerald-300/90 font-sans flex items-center gap-1 pt-1 border-t border-emerald-900/30">
                  <span>✓ النتيجة:</span>
                  <span>كود نظيف، آمن، مستقر، وسريع الاستجابة.</span>
                </div>
              </div>

            </div>

            {/* سهم التحول والتفسير المعماري الجوهري */}
            {m.reason && (
              <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-xl p-4 flex items-start gap-3">
                <div className="size-8 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Lightbulb className="size-4" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-amber-300 font-sans flex items-center gap-1.5">
                    <span>💡 السبب المعماري خلف الكواليس:</span>
                    <span className="text-[10px] text-slate-500 font-normal">لماذا حدث هذا الخطأ وماذا يجب أن تفهم؟</span>
                  </div>
                  <p 
                    className="text-slate-300 font-sans leading-relaxed text-pretty text-xs"
                    style={{ fontSize: `${readingFontSize}px` }}
                  >
                    {m.reason}
                  </p>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  );
}
