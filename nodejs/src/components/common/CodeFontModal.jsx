// src/components/common/CodeFontModal.jsx
// استوديو تخصيص واختيار خطوط الكود البرمجي العالمي لمنصة Node.js التعليمية
// يدعم 7 خطوط برمجة مع الرموز المتصلة (Ligatures)، تصنيف الخطوط، شريط تحكم بالحجم، والمعاينة الحية
import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Check, 
  X, 
  Sparkles, 
  Type, 
  CheckCircle2, 
  RotateCcw,
  Sliders
} from 'lucide-react';
import { CODE_FONTS, getActiveCodeFontId, applyCodeFont } from '../../utils/codeFonts.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

// نموذج كود حي وشامل لعرض ميزات كل خط في بيئة Node.js (خادم HTTP، معالجة غير متزامنة، وفحص Ligatures)
const PLAYGROUND_SNIPPET = `// تجربة المعاينة الحية لخط الكود البرمجي المختار - بيئة Node.js
import http from 'node:http';
import { pipeline } from 'node:stream/promises';

// فحص الرموز المتصلة (Ligatures): => !== === >= <= && || ??
const startServer = async (port = 3000) => {
  const server = http.createServer(async (req, res) => {
    // 0 vs O (الأصفار مقابل الحروف) • 1 vs l vs I
    const isApiRoute = req.url?.startsWith('/api') && req.method === 'GET';

    if (isApiRoute && port !== null && port >= 1024) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: "running", node: process.version }));
    }

    res.writeHead(404);
    res.end("Not Found");
  });

  return server.listen(port, () => console.log(\`Server => http://localhost:\${port}\`));
};

export default startServer;`;

const CATEGORIES = [
  { id: 'all', label: 'الكل (7 خطوط)' },
  { id: 'ligature', label: '⚡ رموز متصلة (Ligatures)' },
  { id: 'monospace', label: '📏 أحادي المسافة (Monospace)' },
  { id: 'terminal', label: '📟 طرفي وريترو (Terminal)' }
];

export default function CodeFontModal({ isOpen, onClose }) {
  const showToast = useToast();
  const [activeFontId, setActiveFontId] = useState(getActiveCodeFontId);
  const [previewFontId, setPreviewFontId] = useState(activeFontId);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [fontSize, setFontSize] = useState(13);

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

  const filteredFonts = CODE_FONTS.filter(font => {
    if (selectedCategory === 'all') return true;
    return font.category === selectedCategory;
  });

  const handleSelectFont = (font) => {
    applyCodeFont(font.id);
    setActiveFontId(font.id);
    setPreviewFontId(font.id);
    showToast(`تم اعتماد خط (${font.name}) لجميع الأكواد البرمجية بنجاح! 🔤`, "success");
  };

  const handleResetDefault = () => {
    const defaultFont = CODE_FONTS[0]; // Fira Code
    applyCodeFont(defaultFont.id);
    setActiveFontId(defaultFont.id);
    setPreviewFontId(defaultFont.id);
    setFontSize(13);
    setSelectedCategory('all');
    showToast("تمت استعادة خط الكود الافتراضي (Fira Code) وحجم 13px 🔄", "info");
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      dir="rtl"
    >
      <div 
        style={{ maxHeight: '90vh', height: '90vh' }}
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-[0_25px_70px_-15px_rgba(16,185,129,0.25)] flex flex-col overflow-hidden text-slate-100 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. شريط رأس الاستوديو */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-800 bg-slate-950/70 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20">
              <Type className="w-5 h-5 font-black text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white font-sans">
                  استوديو خطوط الكود البرمجي
                </h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-bold">
                  {CODE_FONTS.length} خطوط برمجية
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                خصص الخط المفضل لقراءة وبرمجة شفرات Node.js مع دعم الرموز المتصلة (Ligatures) وتمييز الحروف
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {(activeFontId !== 'fira-code' || fontSize !== 13) && (
              <button
                onClick={handleResetDefault}
                className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 transition-colors cursor-pointer font-sans"
                title="استعادة الخط الافتراضي (Fira Code) وحجم 13px"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>الافتراضي</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer border border-slate-700"
              title="إغلاق النافذة (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. شريط الفلاتر والتحكم في الحجم */}
        <div className="px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-950/40 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* تصنيف الخطوط */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* شريط تمرير حجم الخط */}
          <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl text-xs text-slate-300">
            <Sliders className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-bold">حجم الخط:</span>
            <input 
              type="range"
              min="11"
              max="20"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-24 sm:w-32 accent-emerald-500 cursor-pointer"
            />
            <span className="font-mono text-emerald-400 font-bold w-9 text-left" dir="ltr">
              {fontSize}px
            </span>
          </div>
        </div>

        {/* 3. محتوى النافذة القابل للتمرير */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* بطاقة المعاينة التفاعلية الحية */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-slate-850 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-300 font-sans">
                  معاينة حية وفورية:
                </span>
                <span className="text-xs font-black text-emerald-400 font-mono px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/40">
                  {currentPreviewFont.name}
                </span>
                <span className="text-[10px] text-slate-500 hidden sm:inline font-sans">
                  بواسطة {currentPreviewFont.author}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono" dir="ltr">
                <span className="text-emerald-400 font-bold">✓ Ligatures Enabled</span>
                <span>•</span>
                <span>font-size: {fontSize}px</span>
              </div>
            </div>

            {/* صندوق الكود الحي */}
            <div 
              className="bg-[#060a12] rounded-xl border border-slate-800/90 p-4 overflow-x-auto shadow-inner select-text transition-all"
              dir="ltr"
              style={{ 
                fontFamily: currentPreviewFont.family,
                fontSize: `${fontSize}px`,
                lineHeight: `${Math.round(fontSize * 1.55)}px`,
                fontFeatureSettings: '"liga" 1, "calt" 1'
              }}
            >
              <pre className="m-0 p-0 text-slate-200 text-left whitespace-pre">
                <code>{PLAYGROUND_SNIPPET}</code>
              </pre>
            </div>

            {/* شريط خصائص الخط المعاين */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-900 text-xs text-slate-400 font-sans">
              <span>💡 {currentPreviewFont.description}</span>
              {activeFontId !== currentPreviewFont.id && (
                <button
                  onClick={() => handleSelectFont(currentPreviewFont)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-1 rounded-lg text-xs transition-colors cursor-pointer shadow-md flex items-center gap-1"
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
                <Code2 className="w-4 h-4 text-emerald-400" />
                اختر خطك البرمجي المفضل ({filteredFonts.length} خطوط متاحة):
              </h4>
              <span className="text-xs text-slate-400 font-sans">
                الخط المعتمد حالياً: <strong className="text-emerald-300 font-bold">{activeFontObj.name}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredFonts.map((font) => {
                const isActive = activeFontId === font.id;
                const isHovered = previewFontId === font.id;

                return (
                  <div
                    key={font.id}
                    onMouseEnter={() => setPreviewFontId(font.id)}
                    className={`relative p-4 rounded-2xl border transition-all cursor-pointer text-right flex flex-col justify-between ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500'
                        : isHovered
                          ? 'bg-slate-800/80 border-emerald-500/50 shadow-md'
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
                        className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 text-xs text-emerald-300 font-normal leading-normal overflow-x-auto select-none"
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
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 font-sans ${
                          isActive
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                            : 'bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black shadow-sm'
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

        {/* 4. شريط التذييل */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-t border-slate-800 bg-slate-950/70 shrink-0 text-xs font-sans text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>يتم تطبيق الخط المختار فورياً وتلقائياً على جميع الأكواد وصناديق الاستوديو ملء الشاشة ويحفظ في المتصفح.</span>
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
