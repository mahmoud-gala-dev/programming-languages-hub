// src/components/common/CodeFontModal.jsx
// استوديو تخصيص واختيار خطوط الكود البرمجي العالمي
// يتيح الاختيار الحي والمعاينة الفورية لـ 7 من أقوى خطوط البرمجة عالمياً مع دعم الرموز المتصلة (Ligatures)
import React, { useState, useEffect } from 'react';
import {
  Code2,
  Check,
  X,
  Sparkles,
  Type,
  Layers,
  Palette,
  Laptop,
  CheckCircle2,
  Play,
  RotateCcw,
  Zap,
  Star
} from 'lucide-react';
import { CODE_FONTS, getActiveCodeFontId, applyCodeFont } from '../../utils/codeFonts.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

// نموذج كود حي وشامل لعرض ميزات كل خط (أقواس، دوال سهمية، مقارنات، أرقام، تعليقات، ونصوص عربية)
const PLAYGROUND_SNIPPET = `// تجربة المعاينة الحية لخط الكود البرمجي المختار
import React, { useState, useMemo } from 'react';

// فحص الرموز المتصلة (Ligatures): => !== === >= <= && ||
const useDeveloperScore = (userId, baseScore = 100) => {
  const [level, setLevel] = useState(1);

  const finalScore = useMemo(() => {
    // 0 vs O (الأصفار مقابل الحروف) • 1 vs l vs I
    const multiplier = 1.05;
    if (baseScore !== null && baseScore >= 50) {
      return (baseScore * multiplier) + (level * 10);
    }
    return 0;
  }, [baseScore, level]);

  return { level, finalScore, isPro: level >= 5 };
};

export default useDeveloperScore;`;

export default function CodeFontModal({ isOpen, onClose }) {
  const showToast = useToast();
  const [activeFontId, setActiveFontId] = useState(getActiveCodeFontId);
  const [previewFontId, setPreviewFontId] = useState(activeFontId);

  useEffect(() => {
    if (isOpen) {
      const current = getActiveCodeFontId();
      setActiveFontId(current);
      setPreviewFontId(current);
    }
  }, [isOpen]);

  // إغلاق النافذة بزر Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPreviewFont = CODE_FONTS.find(f => f.id === previewFontId) || CODE_FONTS[0];
  const activeFontObj = CODE_FONTS.find(f => f.id === activeFontId) || CODE_FONTS[0];

  const handleSelectFont = (font) => {
    applyCodeFont(font.id);
    setActiveFontId(font.id);
    setPreviewFontId(font.id);
    showToast(`تم اعتماد خط (${font.name}) لجميع الأكواد البرمجية بنجاح! 🔤`, "success");
  };

  const handleResetDefault = () => {
    const defaultFont = CODE_FONTS[0];
    applyCodeFont(defaultFont.id);
    setActiveFontId(defaultFont.id);
    setPreviewFontId(defaultFont.id);
    showToast("تمت استعادة خط الكود الافتراضي (Fira Code) 🔄", "info");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      dir="rtl"
    >
      <div
        style={{ maxHeight: '90dvh', height: '90dvh' }}
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-[0_25px_70px_-15px_rgba(6,182,212,0.3)] flex flex-col overflow-hidden text-slate-100 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. شريط رأس الاستوديو */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-800 bg-slate-950/70 shrink-0">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20">
              <Type className="size-5 font-black text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white font-sans text-balance">
                  استوديو خطوط الكود البرمجي
                </h3>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2.5 py-0.5 rounded-full font-bold tabular-nums">
                  {CODE_FONTS.length} خطوط برمجية
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans mt-0.5 text-pretty">
                خصص الخط المفضل لقراءة وبرمجة الشفرات مع دعم الرموز المتصلة (Ligatures) وتمييز الحروف
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {activeFontId !== 'fira-code' && (
              <button
                onClick={handleResetDefault}
                aria-label="استعادة الخط الافتراضي"
                className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 transition-colors cursor-pointer font-sans"
                title="استعادة الخط الافتراضي (Fira Code)"
              >
                <RotateCcw className="size-3.5" />
                <span>الافتراضي</span>
              </button>
            )}

            <button
              onClick={onClose}
              aria-label="إغلاق النافذة"
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer border border-slate-700"
              title="إغلاق النافذة (Esc)"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* 2. محتوى النافذة القابل للتمرير */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* بطاقة المعاينة التفاعلية الحية الكبرى (Live Interactive Playground) */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-slate-850 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-300 font-sans">
                  معاينة حية وفورية:
                </span>
                <span className="text-xs font-black text-cyan-400 font-mono px-2 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/40">
                  {currentPreviewFont.name}
                </span>
                <span className="text-[10px] text-slate-500 hidden sm:inline font-sans">
                  بواسطة {currentPreviewFont.author}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono" dir="ltr">
                <span className="text-emerald-400 font-bold">✓ Ligatures Enabled</span>
                <span>•</span>
                <span>font-size: 13px</span>
              </div>
            </div>

            {/* صندوق الكود الحي مع تطبيق عائلة الخط المباشرة */}
            <div
              className="bg-[#060a12] rounded-xl border border-slate-800/90 p-4 overflow-x-auto shadow-inner select-text transition-all"
              dir="ltr"
              style={{
                fontFamily: currentPreviewFont.family,
                fontFeatureSettings: '"liga" 1, "calt" 1'
              }}
            >
              <pre className="m-0 p-0 text-xs sm:text-sm text-slate-200 leading-relaxed text-left whitespace-pre">
                <code>{PLAYGROUND_SNIPPET}</code>
              </pre>
            </div>

            {/* شريط خصائص الخط المعاين */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-900 text-xs text-slate-400 font-sans">
              <span>💡 {currentPreviewFont.description}</span>
              {activeFontId !== currentPreviewFont.id && (
                <button
                  onClick={() => handleSelectFont(currentPreviewFont)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3 py-1 rounded-lg text-xs transition-colors cursor-pointer shadow-md flex items-center gap-1"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>تطبيق هذا الخط على التطبيق الآن</span>
                </button>
              )}
            </div>
          </div>

          {/* شبكة بطاقات الخطوط السبعة العالمية */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h4 className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-2 font-sans">
                <Code2 className="w-4 h-4 text-cyan-400" />
                اختر خطك البرمجي المفضل ({CODE_FONTS.length} خطوط متاحة):
              </h4>
              <span className="text-xs text-slate-400 font-sans">
                الخط المعتمد حالياً: <strong className="text-cyan-300 font-bold">{activeFontObj.name}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {CODE_FONTS.map((font) => {
                const isActive = activeFontId === font.id;
                const isHovered = previewFontId === font.id;

                return (
                  <div
                    key={font.id}
                    onMouseEnter={() => setPreviewFontId(font.id)}
                    className={`relative p-4 rounded-2xl border transition-all cursor-pointer text-right flex flex-col justify-between ${isActive
                      ? 'bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500'
                      : isHovered
                        ? 'bg-slate-800/80 border-cyan-500/50 shadow-md'
                        : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                      }`}
                    onClick={() => handleSelectFont(font)}
                  >
                    <div>
                      {/* رأس بطاقة الخط */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h5
                            className="text-base font-bold text-white tracking-wide"
                            style={{ fontFamily: font.family }}
                          >
                            {font.name}
                          </h5>
                          <span className="text-[10px] text-slate-500 font-sans">
                            {font.author}
                          </span>
                        </div>

                        {/* شارة الخط */}
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${font.badgeColor}`}>
                          {font.badge}
                        </span>
                      </div>

                      {/* وصف الخط وميزته */}
                      <p className="text-xs text-slate-400 font-sans leading-relaxed mb-3">
                        {font.description}
                      </p>

                      {/* مقتطف الكود التوضيحي بالخط الفعلي */}
                      <div
                        className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 text-xs text-cyan-300 font-normal leading-normal overflow-x-auto select-none"
                        dir="ltr"
                        style={{
                          fontFamily: font.family,
                          fontFeatureSettings: '"liga" 1, "calt" 1'
                        }}
                      >
                        {font.preview}
                      </div>
                    </div>

                    {/* زر التفعيل والحالة */}
                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-sans">
                        {isActive ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            الخط النشط حالياً
                          </span>
                        ) : (
                          <span className="text-slate-500 text-[11px]">
                            انقر لتفعيل الخط فورياً
                          </span>
                        )}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectFont(font);
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 font-sans ${isActive
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                          : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm'
                          }`}
                      >
                        {isActive ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>مفعل ✓</span>
                          </>
                        ) : (
                          <>
                            <span>تفعيل</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* 3. شريط التذييل */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-t border-slate-800 bg-slate-950/70 shrink-0 text-xs font-sans text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>يتم تطبيق الخط المختار فورياً وتلقائياً على جميع الأكواد البرمجية وصناديق الاستوديو والإنفوجرافيك ويحفظ في المتصفح.</span>
          </div>

          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-1.5 rounded-xl font-bold transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
}
