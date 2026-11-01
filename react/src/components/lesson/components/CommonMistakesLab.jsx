// src/components/lesson/components/CommonMistakesLab.jsx
// معمل تفادي الأخطاء الشائعة بنمط Split Danger/Safe Matrix مع رسومات SVG ومقارنة الكود ودعم التكبير والاتجاه العربي
import React from 'react';
import { AlertTriangle, Lightbulb, Bug } from 'lucide-react';

/**
 * دالة مساعدة لاكتشاف إذا كان النص يحتوي على حروف عربية لتطبيق اتجاه RTL وتنسيق ملائم
 */
const isRTLText = (str) => typeof str === 'string' && /[\u0600-\u06FF]/.test(str);

export default function CommonMistakesLab({ commonMistakes = [], readingFontSize = 15, toolbar = null }) {
  if (!commonMistakes || commonMistakes.length === 0) return null;

  // احتساب أحجام الخطوط المشتقة بذكاء بناءً على تكبير المستخدم
  const codeFontSize = Math.max(readingFontSize - 2, 13);
  const codeLineHeight = Math.max(readingFontSize + 4, 20);
  const titleFontSize = Math.max(readingFontSize - 2, 13);
  const badgeFontSize = Math.max(readingFontSize - 4, 11);
  const resultFontSize = Math.max(readingFontSize - 3, 12);

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

        {/* شارة عدد الحالات في المعمل + شريط أدوات البلوك */}
        <div className="flex items-center gap-2 flex-wrap self-start md:self-auto">
          <div className="flex items-center gap-2 bg-slate-950/80 border border-slate-800 px-3.5 py-1.5 rounded-2xl shadow-inner">
            <Bug className="size-4 text-rose-400" />
            <span className="text-xs font-mono text-rose-300 font-bold tabular-nums">
              {commonMistakes.length} فخاخ برمجية مصنفة
            </span>
          </div>
          {toolbar}
        </div>
      </div>

      {/* 2. قائمة بطاقات الأخطاء والمقارنات بنمط Split Matrix */}
      <div className="relative z-10 space-y-6">
        {commonMistakes.map((m, idx) => {
          const isWrongArabic = isRTLText(m.wrong);
          const rightText = m.right || m.correct || '';
          const isRightArabic = isRTLText(rightText);

          return (
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
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <span 
                        className="font-extrabold text-rose-400 flex items-center gap-1.5 font-sans"
                        style={{ fontSize: `${titleFontSize}px` }}
                      >
                        <span className="size-5 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-300 text-xs shrink-0">✕</span>
                        <span>1. الخطأ الشائع (The Mistake)</span>
                      </span>
                      <span 
                        className="font-mono bg-rose-950 text-rose-300 border border-rose-800/40 px-2 py-0.5 rounded-md shrink-0"
                        style={{ fontSize: `${badgeFontSize}px` }}
                      >
                        فخ برمجي ⚠️
                      </span>
                    </div>

                    <div 
                      className={`p-3.5 rounded-xl bg-slate-950 border border-rose-900/40 text-rose-200 leading-relaxed overflow-x-auto whitespace-pre-wrap select-text transition-all duration-150 ${
                        isWrongArabic ? 'font-sans' : 'font-mono'
                      }`}
                      dir={isWrongArabic ? "rtl" : "ltr"}
                      style={{ 
                        fontSize: `${codeFontSize}px`,
                        lineHeight: `${codeLineHeight}px`,
                        textAlign: isWrongArabic ? 'right' : 'left'
                      }}
                    >
                      {m.wrong}
                    </div>
                  </div>

                  <div 
                    className="text-rose-300/80 font-sans flex items-center gap-1.5 pt-2 border-t border-rose-900/30"
                    style={{ fontSize: `${resultFontSize}px` }}
                  >
                    <span className="font-bold text-rose-400 shrink-0">💥 النتيجة:</span>
                    <span>سلوك غير متوقع، ثغرة أداء، أو تعطل في التطبيق.</span>
                  </div>
                </div>

                {/* الجانب الأيسر: منطقة الأمان والحل الهندسي المعتمد (Safe Zone) */}
                <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-3 relative overflow-hidden">
                  <div className="absolute -top-6 -left-6 size-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <span 
                        className="font-extrabold text-emerald-400 flex items-center gap-1.5 font-sans"
                        style={{ fontSize: `${titleFontSize}px` }}
                      >
                        <span className="size-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 text-xs shrink-0">✓</span>
                        <span>2. الحل الهندسي المعتمد (Correct Pattern)</span>
                      </span>
                      <span 
                        className="font-mono bg-emerald-950 text-emerald-300 border border-emerald-800/40 px-2 py-0.5 rounded-md shrink-0"
                        style={{ fontSize: `${badgeFontSize}px` }}
                      >
                        معتمد للإنتاج 🛡️
                      </span>
                    </div>

                    <div 
                      className={`p-3.5 rounded-xl bg-slate-950 border border-emerald-900/40 text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre-wrap select-text transition-all duration-150 ${
                        isRightArabic ? 'font-sans' : 'font-mono'
                      }`}
                      dir={isRightArabic ? "rtl" : "ltr"}
                      style={{ 
                        fontSize: `${codeFontSize}px`,
                        lineHeight: `${codeLineHeight}px`,
                        textAlign: isRightArabic ? 'right' : 'left'
                      }}
                    >
                      {rightText}
                    </div>
                  </div>

                  <div 
                    className="text-emerald-300/90 font-sans flex items-center gap-1.5 pt-2 border-t border-emerald-900/30"
                    style={{ fontSize: `${resultFontSize}px` }}
                  >
                    <span className="font-bold text-emerald-400 shrink-0">✓ النتيجة:</span>
                    <span>كود نظيف، آمن، مستقر، وسريع الاستجابة.</span>
                  </div>
                </div>

              </div>

              {/* سهم التحول والتفسير المعماري الجوهري */}
              {(m.reason || m.explanation) && (
                <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-xl p-4 flex items-start gap-3">
                  <div className="size-8 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Lightbulb className="size-4" />
                  </div>
                  <div className="space-y-1.5 w-full">
                    <div 
                      className="font-bold text-amber-300 font-sans flex items-center gap-1.5"
                      style={{ fontSize: `${titleFontSize}px` }}
                    >
                      <span>💡 السبب المعماري خلف الكواليس:</span>
                      <span className="text-slate-500 font-normal" style={{ fontSize: `${badgeFontSize}px` }}>
                        لماذا حدث هذا الخطأ وماذا يجب أن تفهم؟
                      </span>
                    </div>
                    <p 
                      className="text-slate-200 font-sans leading-relaxed text-pretty transition-all duration-150"
                      style={{ 
                        fontSize: `${readingFontSize}px`,
                        lineHeight: `${Math.round(readingFontSize * 1.65)}px`
                      }}
                    >
                      {m.reason || m.explanation}
                    </p>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
