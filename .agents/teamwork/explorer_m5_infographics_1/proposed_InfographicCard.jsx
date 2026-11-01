// src/components/infographic/InfographicCard.jsx
// بطاقة إنفوجرافيك تعليمية بصرية متطورة متعددة الثيمات مع محرك المخططات المعمارية SVG لخريطة طريق Node.js
import React, { useRef, useState, useEffect } from 'react';
import { 
  Download, 
  Sparkles, 
  Image as ImageIcon, 
  CheckCircle, 
  Lightbulb, 
  Code2, 
  Copy, 
  Check, 
  Maximize2,
  Palette,
  Workflow,
  ShieldAlert
} from 'lucide-react';
import { downloadElementAsPng, exportToImage } from '../../utils/exportImage.js';
import { 
  buildInfographicForSubtopic, 
  INFOGRAPHIC_THEMES,
  renderSvgArchitectureDiagram
} from '../../utils/infographicRegistry.js';
import { HighlightedCodeView } from '../../utils/codeHighlighter.jsx';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function InfographicCard({ 
  subtopic, 
  sectionData = null, 
  onOpenGallery = null,
  overrideTheme = null,
  highlights = [],
  onHighlightClick = null
}) {
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const showToast = useToast();

  if (!subtopic) return null;

  // توليد هيكل الإنفوجرافيك الشامل تلقائياً
  const info = buildInfographicForSubtopic(subtopic, sectionData);
  if (!info) return null;

  // حالة الثيم المختار للبطاقة (يمكن التبديل اللحظي بين الثيمات الـ 5)
  const [selectedThemeId, setSelectedThemeId] = useState(overrideTheme || info.theme || 'cyber');
  
  useEffect(() => {
    if (overrideTheme && overrideTheme !== selectedThemeId) {
      setSelectedThemeId(overrideTheme);
    }
  }, [overrideTheme]);

  const activeTheme = INFOGRAPHIC_THEMES[selectedThemeId] || INFOGRAPHIC_THEMES.cyber;

  const handleDownload = async () => {
    setDownloading(true);
    if (showToast) showToast("جاري تجهيز وتصدير الإنفوجرافيك بدقة 4K فائقة الوضوح... 🎨", "info");
    const safeTitle = (subtopic.englishTitle || subtopic.title || 'nodejs').replace(/[\s/\\:]+/g, '_');
    const fileName = `infographic_nodejs_${subtopic.id || 'lesson'}_${activeTheme.id}_${safeTitle}.png`;
    const success = await (exportToImage || downloadElementAsPng)(cardRef.current, fileName);
    setDownloading(false);
    if (success && showToast) {
      showToast("تم تنزيل بطاقة الإنفوجرافيك بنجاح! 📥", "success");
    }
  };

  const handleCopySummary = () => {
    const summaryText = `📌 [إنفوجرافيك ${info.badge || info.title}]
العنوان: ${info.title} (${info.englishTitle || ''})
الثيم: ${activeTheme.name}

💡 التعريف والوظيفة:
${info.definition || ''}

🌟 التشبيه من الحياة اليومية:
${info.analogy || ''}

👑 القاعدة الذهبية:
${info.goldenRule || ''}

⚠️ المحاذير الشائعة:
${info.pitfall || ''}

💻 الكود التطبيقي:
${info.codeSnippet || ''}`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    if (showToast) showToast("تم نسخ ملخص الإنفوجرافيك للحافظة 📋", "success");
  };

  return (
    <div className="my-8" dir="rtl">
      {/* شريط الإجراء العلوي: مبدل الثيمات الخمسة + أزرار التصدير والتكبير */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5 px-1">
        
        {/* عنوان البطاقة وشارة الدقة */}
        <div className="flex items-center gap-2">
          <div 
            className="w-7 h-7 rounded-xl flex items-center justify-center text-white shadow-md transition-all"
            style={{ backgroundColor: activeTheme.primary }}
          >
            <ImageIcon className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-white flex items-center gap-2 font-sans">
              استوديو الإنفوجرافيك المعماري للدرس
              <span 
                className="text-[10px] font-bold px-2 py-0.5 rounded-full border shadow-sm" 
                style={{ 
                  color: activeTheme.primary, 
                  borderColor: `${activeTheme.primary}40`, 
                  backgroundColor: `${activeTheme.primary}15` 
                }}
              >
                4K Ultra HD
              </span>
            </h4>
          </div>
        </div>

        {/* مبدل الثيمات اللونية الـ 5 المباشر (Theme Selector) */}
        <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 p-1 rounded-2xl shadow-inner">
          <span className="text-[10px] text-slate-400 font-bold px-1.5 flex items-center gap-1 hidden sm:inline-flex">
            <Palette className="w-3 h-3 text-cyan-400" />
            الثيم:
          </span>
          {Object.values(INFOGRAPHIC_THEMES).map(th => {
            const isCurrent = th.id === activeTheme.id;
            return (
              <button
                key={th.id}
                onClick={() => setSelectedThemeId(th.id)}
                className={`flex items-center gap-1 px-2 py-1 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
                  isCurrent 
                    ? 'text-white shadow-md' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
                style={isCurrent ? { backgroundColor: th.primary } : {}}
                title={`التبديل إلى ثيم ${th.name}`}
              >
                <span>{th.icon}</span>
                <span className="hidden md:inline">{th.name}</span>
              </button>
            );
          })}
        </div>

        {/* أزرار الإجراء: نسخ، تكبير في المعرض، وتحميل PNG */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap sm:flex-nowrap">
          <button
            onClick={handleCopySummary}
            className="flex items-center gap-1 sm:gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-700/80 transition-all cursor-pointer shadow-sm"
            title="نسخ ملخص بطاقة الإنفوجرافيك كنص منسق"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            <span className="hidden xs:inline">{copied ? "تم النسخ" : "نسخ الملخص"}</span>
            <span className="xs:hidden">{copied ? "تم" : "نسخ"}</span>
          </button>

          {onOpenGallery && (
            <button
              onClick={() => onOpenGallery(subtopic.id)}
              className="flex items-center gap-1 sm:gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-700 transition-all cursor-pointer shadow-sm"
              title="عرض وتصفح هذا الدرس في معرض الإنفوجرافيك الشامل"
            >
              <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden xs:inline">المعرض الشامل</span>
              <span className="xs:hidden">معرض</span>
            </button>
          )}

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center gap-1.5 text-white text-[11px] sm:text-xs font-extrabold px-3 sm:px-4 py-1.5 rounded-xl shadow-lg transition-all cursor-pointer disabled:opacity-50"
            style={{ 
              background: activeTheme.gradientHeader,
              boxShadow: `0 8px 20px -4px ${activeTheme.primary}50`
            }}
            title="تحميل بطاقة الإنفوجرافيك كصورة PNG فائقة الوضوح 4K"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{downloading ? "جاري التصدير..." : "تحميل الإنفوجرافيك"}</span>
          </button>
        </div>
      </div>

      {/* لوحة الإنفوجرافيك الفائقة المصممة كمرجع هندسي مستقل وعالي الدقة */}
      <div
        ref={cardRef}
        className="rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-9 border-2 shadow-2xl relative overflow-hidden text-slate-100 transition-all duration-300 max-w-full"
        style={{ 
          backgroundColor: activeTheme.bgCard,
          borderColor: `${activeTheme.primary}50`
        }}
      >
        {/* أضواء نيون هيدروليكية وتدرجات خلفية خاصة بكل ثيم */}
        <div 
          className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 sm:-mr-28 sm:-mt-28 opacity-70"
          style={{ backgroundColor: activeTheme.glowColor }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16 sm:-ml-28 sm:-mb-28 opacity-60"
          style={{ backgroundColor: `${activeTheme.secondary}20` }}
        ></div>

        {/* 1. الترويسة الرئيسية للإنفوجرافيك */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/90 pb-6 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span 
                className="text-[11px] font-black text-white px-3.5 py-1 rounded-full shadow-md font-sans"
                style={{ background: activeTheme.gradientHeader }}
              >
                {info.badge || `الدرس ${subtopic.id}`}
              </span>
              <span 
                className="text-xs font-bold px-2.5 py-0.5 rounded-lg border shadow-inner"
                style={{ 
                  color: activeTheme.primary, 
                  backgroundColor: `${activeTheme.primary}12`,
                  borderColor: `${activeTheme.primary}35`
                }}
              >
                {info.englishTitle}
              </span>
              <span className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded-md border border-slate-800 font-bold">
                {activeTheme.icon} {activeTheme.name}
              </span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white leading-tight font-sans">
              {info.title}
            </h3>
          </div>

          <div className="text-left sm:text-right shrink-0 bg-slate-950/80 border border-slate-800/90 p-3 rounded-2xl shadow-sm">
            <div className="text-[11px] text-slate-300 font-bold">خريطة طريق Node.js الشاملة</div>
            <div className="text-[10px] font-bold mt-0.5" style={{ color: activeTheme.primary }}>
              من الصفر إلى الاحتراف المهني 🟢
            </div>
          </div>
        </div>

        {/* 2. بطاقة الملخص التنفيذي والتعريف المعماري (Executive Summary & Definition) */}
        <div 
          className="relative z-10 rounded-2xl p-5 mb-5 shadow-lg border backdrop-blur-sm"
          style={{ 
            backgroundColor: `${activeTheme.bgCard}cc`,
            borderColor: `${activeTheme.primary}30`
          }}
        >
          <div className="flex items-center gap-2 text-xs font-extrabold mb-1.5" style={{ color: activeTheme.primary }}>
            <Lightbulb className="w-4 h-4" />
            <span>التعريف والوظيفة الأساسية (Core Definition & Purpose):</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-medium">
            {info.definition}
          </p>
        </div>

        {/* 3. المخطط المعماري البصري SVG (Visual Architecture Diagram) */}
        <div 
          className="relative z-10 rounded-2xl p-4 sm:p-5 mb-5 border shadow-xl bg-slate-950/90"
          style={{ borderColor: `${activeTheme.primary}35` }}
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-black text-white font-sans">
              <Workflow className="w-4 h-4" style={{ color: activeTheme.primary }} />
              <span>{info.visualDiagram?.label || "المخطط الهيكلي وتدفق المعالجة (Architectural Flow)"}</span>
            </div>
            <span 
              className="text-[10px] font-mono px-2 py-0.5 rounded-lg border font-bold"
              style={{
                color: activeTheme.primary,
                borderColor: `${activeTheme.primary}40`,
                backgroundColor: `${activeTheme.primary}10`
              }}
            >
              SVG Vector Architecture
            </span>
          </div>

          {/* محرك توليد ورسم الـ SVG المعماري عالي الدقة الحتمي */}
          <div 
            className="w-full rounded-xl overflow-hidden border shadow-inner p-1 sm:p-2 bg-[#050811] flex items-center justify-center min-h-[220px]"
            style={{ borderColor: `${activeTheme.primary}25` }}
            dangerouslySetInnerHTML={{ 
              __html: renderSvgArchitectureDiagram(
                info.visualDiagram?.type || 'universal_flow', 
                activeTheme, 
                { title: info.title, englishTitle: info.englishTitle }
              ) 
            }}
          />

          {/* سطر شرح تدفق المخطط */}
          {info.visualDiagram?.flowDescription && (
            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: activeTheme.primary }}></span>
              <span className="font-sans font-medium">{info.visualDiagram.flowDescription}</span>
            </div>
          )}
        </div>

        {/* 4. بطاقة التشبيه الواقعي من الحياة اليومية (Everyday Analogy Spotlight) */}
        {info.analogy && (
          <div 
            className="relative z-10 rounded-2xl p-5 mb-5 shadow-lg border"
            style={{ 
              backgroundColor: 'rgba(25, 14, 6, 0.65)',
              borderColor: 'rgba(245, 158, 11, 0.45)'
            }}
          >
            <div className="flex items-center gap-2 text-xs font-black text-amber-300 mb-1.5 font-sans">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>التشبيه والتخيل من الحياة اليومية (Everyday Life Analogy):</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-sans font-medium">
              {info.analogy}
            </p>
          </div>
        )}

        {/* 5. مسار العمل والتنفيذ في 3 خطوات (3-Step Execution Flow) */}
        {info.steps && info.steps.length > 0 && (
          <div className="relative z-10 mb-5">
            <div className="text-xs font-bold text-slate-200 mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" style={{ color: activeTheme.primary }} />
              <span>مسار العمل والتنفيذ البرمجي (Step-by-Step Execution):</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {info.steps.map((st, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4.5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-md relative"
                >
                  <div>
                    <div 
                      className="w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-black mb-3 shadow-md text-white"
                      style={{ background: activeTheme.gradientHeader }}
                    >
                      {idx + 1}
                    </div>
                    <h5 className="font-extrabold text-xs text-white mb-1.5">{st.title}</h5>
                    <p className="text-[11px] text-slate-300 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. الكود الذهبي للمفهوم مع التلوين النحوي الاحترافي وعزل التعليقات العربية (Golden Code) */}
        {info.codeSnippet && (
          <div className="relative z-10 bg-slate-950 border border-slate-800/90 rounded-2xl p-4.5 mb-5 shadow-inner">
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800 text-xs">
              <span className="font-bold flex items-center gap-2" style={{ color: activeTheme.primary }}>
                <Code2 className="w-4 h-4" />
                الكود الذهبي النظيف مع التلوين والتعليقات التوضيحية (Golden Code):
              </span>
              <span className="font-mono text-[10px] text-slate-500">JavaScript / Node.js</span>
            </div>
            <div dir="ltr" className="bg-[#060a12] rounded-2xl border border-slate-850/90 p-3 sm:p-4 overflow-x-auto shadow-inner text-left">
              <HighlightedCodeView 
                code={info.codeSnippet} 
                highlights={highlights}
                onHighlightClick={onHighlightClick}
              />
            </div>
          </div>
        )}

        {/* 7. القاعدة الذهبية والمحاذير القاتلة (Golden Rule & Critical Pitfall) */}
        <div 
          className="relative z-10 border rounded-2xl p-5 grid grid-cols-1 md:grid-cols-2 gap-4 shadow-xl"
          style={{ 
            backgroundColor: `${activeTheme.bgCard}f0`,
            borderColor: `${activeTheme.primary}40`
          }}
        >
          {/* القاعدة الذهبية */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-black text-amber-300 mb-0.5">القاعدة الذهبية (Golden Rule):</div>
              <div className="text-xs text-slate-200 leading-relaxed font-medium">
                {info.goldenRule}
              </div>
            </div>
          </div>

          {/* المحاذير وتفادي الأخطاء القاتلة */}
          <div className="flex items-start gap-3 border-t md:border-t-0 md:border-r border-slate-800/90 pt-3 md:pt-0 md:pr-4">
            <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-black text-rose-300 mb-0.5">محاذير برمجية قاتلة (Critical Pitfall):</div>
              <div className="text-xs text-slate-300 leading-relaxed">
                {info.pitfall}
              </div>
            </div>
          </div>
        </div>

        {/* 8. تذييل الإنفوجرافيك */}
        <div className="relative z-10 mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 font-mono">
          <span>Node.js Backend Developer Roadmap</span>
          <span>4K Ultra HD Vector Render • © حقوق المحتوى محفوظة للمتعلم</span>
        </div>

      </div>
    </div>
  );
}
