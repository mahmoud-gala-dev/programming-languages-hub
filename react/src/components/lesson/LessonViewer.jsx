// src/components/lesson/LessonViewer.jsx
// عارض الدرس القياسي الشامل مع شريط التقدم التفاعلي، زر ChatGPT، الاختبار الذكي، وأدوات القراءة
import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  Languages, 
  FileCode, 
  Terminal, 
  AlertTriangle, 
  Lightbulb, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  Eye,
  Check,
  Tv,
  Type,
  AlignJustify,
  RotateCcw,
  Bot,
  ExternalLink,
  Target,
  Award,
  Bookmark,
  Layers,
  Download,
  Film,
  Cpu,
  Zap,
  ShieldAlert,
  Briefcase,
  Building2,
  Code2,
  Trophy,
} from 'lucide-react';
import CodeBlock from './CodeBlock.jsx';
import LiveCodePreview from './LiveCodePreview.jsx';
import InfographicCard from '../infographic/InfographicCard.jsx';
import LessonMotionPlayer from '../motion/LessonMotionPlayer.jsx';
import TermsDictionarySection from './components/TermsDictionarySection.jsx';
import CommonMistakesLab from './components/CommonMistakesLab.jsx';
import ProBestPracticesSection from './components/ProBestPracticesSection.jsx';
import { exportLessonToPptx } from '../../utils/exportPptx.js';
import PresentationModeModal from '../presentation/PresentationModeModal.jsx';
import AiLessonQuizModal from '../ai/AiLessonQuizModal.jsx';
import TextHighlightPopover from '../common/TextHighlightPopover.jsx';
import SavedHighlightsModal from '../common/SavedHighlightsModal.jsx';
import { getHighlightsBySubtopic, deleteHighlight } from '../../utils/notesDb.js';
import { copyAndOpenChatGPT } from '../../utils/promptGenerator.js';
import { useToast, useSwal } from '../../context/UiFeedbackContext.jsx';

export default function LessonViewer({ 
  subtopic, 
  isCompleted, 
  onToggleComplete, 
  onNext, 
  onPrev,
  hasNext,
  hasPrev,
  onOpenTutor,
  layoutMode = "default",
  onChangeLayoutMode,
  isSidebarOpen = true,
  onToggleSidebar,
  onOpenInfographicGallery
}) {
  const showToast = useToast();
  const showSwal = useSwal();

  // تفضيلات القراءة والخط مع الحفظ في التخزين المحلي
  const [readingFontSize, setReadingFontSize] = useState(() => {
    try {
      const saved = localStorage.getItem("react_roadmap_text_size");
      return saved ? Number(saved) : 15;
    } catch {
      return 15;
    }
  });

  const [lineSpacing, setLineSpacing] = useState(() => {
    try {
      const saved = localStorage.getItem("react_roadmap_line_spacing");
      return saved || "normal";
    } catch {
      return "normal";
    }
  });

  const [isPptOpen, setIsPptOpen] = useState(false);
  const [isAiQuizOpen, setIsAiQuizOpen] = useState(false);
  const [isHighlightsModalOpen, setIsHighlightsModalOpen] = useState(false);
  const [lessonHighlights, setLessonHighlights] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visualMode, setVisualMode] = useState('motion'); // 'motion' | 'infographic'
  const [isExportingPptx, setIsExportingPptx] = useState(false);

  // تصدير الدرس إلى ملف عرض تقديمي PowerPoint حقيقي (.pptx)
  const handleExportPptx = async () => {
    if (!subtopic) return;
    try {
      setIsExportingPptx(true);
      showToast("جاري تجهيز وتوليد عرض PowerPoint الاحترافي للدرس...", "info");
      await exportLessonToPptx(subtopic);
      showToast("تم تنزيل ملف PowerPoint بنجاح! 🚀", "success");
    } catch (err) {
      console.error("PPTX Generation Error:", err);
      showToast("حدث خطأ أثناء تصدير العرض التقديمي", "error");
    } finally {
      setIsExportingPptx(false);
    }
  };

  // تحميل التظليلات المسجلة لهذا الدرس من IndexedDB
  const loadLessonHighlights = async () => {
    if (!subtopic?.id) return;
    try {
      const data = await getHighlightsBySubtopic(subtopic.id);
      setLessonHighlights(data || []);
    } catch {
      setLessonHighlights([]);
    }
  };

  // تفاعل النقر على أي مقتطف مظلل في النص لإدارته أو حذفه
  const handleHighlightClick = async (hl) => {
    const noteText = hl.note ? `\nالملاحظة المرفقة: "${hl.note}"` : '';
    const dateText = `\nتاريخ الحفظ: ${new Date(hl.createdAt).toLocaleDateString('ar-EG')}`;
    
    const result = await showSwal({
      title: "إدارة المقتطف المظلل",
      text: `المقتطف المظلل:\n"${hl.text}"${noteText}${dateText}\n\nهل ترغب في حذف هذا التظليل؟`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "حذف التظليل 🗑️",
      cancelButtonText: "إبقاء التظليل",
      confirmButtonColor: "bg-rose-600 hover:bg-rose-500 text-white"
    });

    if (result.isConfirmed) {
      await deleteHighlight(hl.id);
      await loadLessonHighlights();
      showToast("تم حذف التظليل من النص وقاعدة البيانات", "info");
    }
  };

  // دالة تحويل النصوص الخام إلى نصوص مظللة مرئياً وتفاعلياً (تدعم الشرح والأكواد والصيغ)
  const renderHighlightedContent = (rawText) => {
    if (!rawText || typeof rawText !== 'string') return rawText;
    if (!lessonHighlights || lessonHighlights.length === 0) return rawText;

    // تطبيق كافة التظليلات المسجلة للمستخدم (الشرح والأكواد)
    const activeHighlights = lessonHighlights;
    if (activeHighlights.length === 0) return rawText;

    const matches = [];
    activeHighlights.forEach(hl => {
      const target = hl.text?.trim();
      if (!target || target.length < 2) return;

      let idx = 0;
      while ((idx = rawText.indexOf(target, idx)) !== -1) {
        matches.push({
          start: idx,
          end: idx + target.length,
          highlight: hl
        });
        idx += target.length;
      }
    });

    if (matches.length === 0) return rawText;

    matches.sort((a, b) => a.start - b.start);

    const nonOverlapping = [];
    let lastEnd = 0;
    matches.forEach(m => {
      if (m.start >= lastEnd) {
        nonOverlapping.push(m);
        lastEnd = m.end;
      }
    });

    const fragments = [];
    let cursor = 0;

    const colorStyles = {
      amber: "bg-amber-400/35 text-amber-100 border-b-2 border-amber-400 hover:bg-amber-400/50 shadow-sm",
      emerald: "bg-emerald-400/35 text-emerald-100 border-b-2 border-emerald-400 hover:bg-emerald-400/50 shadow-sm",
      cyan: "bg-cyan-400/35 text-cyan-100 border-b-2 border-cyan-400 hover:bg-cyan-400/50 shadow-sm",
      purple: "bg-purple-400/35 text-purple-100 border-b-2 border-purple-400 hover:bg-purple-400/50 shadow-sm",
      rose: "bg-rose-500/35 text-rose-100 border-b-2 border-rose-500 hover:bg-rose-500/50 shadow-sm",
      orange: "bg-orange-500/35 text-orange-100 border-b-2 border-orange-500 hover:bg-orange-500/50 shadow-sm"
    };

    nonOverlapping.forEach((m, i) => {
      if (m.start > cursor) {
        fragments.push(rawText.substring(cursor, m.start));
      }

      const styleClass = colorStyles[m.highlight.color] || colorStyles.amber;

      fragments.push(
        <mark
          key={`mark-${m.highlight.id}-${i}-${m.start}`}
          onClick={(e) => {
            e.stopPropagation();
            handleHighlightClick(m.highlight);
          }}
          className={`px-1 py-0.5 rounded cursor-pointer transition-all duration-150 select-text ${styleClass}`}
          title={m.highlight.note ? `ملاحظة: ${m.highlight.note} (انقر للإدارة)` : "نص مظلل ومحفوظ في قاعدة البيانات (انقر للإدارة أو الحذف)"}
        >
          {rawText.substring(m.start, m.end)}
        </mark>
      );

      cursor = m.end;
    });

    if (cursor < rawText.length) {
      fragments.push(rawText.substring(cursor));
    }

    return fragments;
  };

  useEffect(() => {
    loadLessonHighlights();
  }, [subtopic?.id]);

  useEffect(() => {
    try {
      localStorage.setItem("react_roadmap_text_size", String(readingFontSize));
      localStorage.setItem("react_roadmap_line_spacing", lineSpacing);
    } catch (e) {
      console.error(e);
    }
  }, [readingFontSize, lineSpacing]);

  // حساب نسبة التمرير التفاعلية للدرس (Scroll Progress Engine)
  useEffect(() => {
    setScrollProgress(0);

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0) {
        const current = Math.min(Math.max((window.scrollY / scrollable) * 100, 0), 100);
        const rounded = Math.round(current);
        setScrollProgress(rounded);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [subtopic?.id]);

  if (!subtopic) return null;

  // فئات تباعد الأسطر
  const lineSpacingClasses = {
    compact: "leading-compact",
    normal: "leading-normal-reading",
    relaxed: "leading-relaxed-reading",
    loose: "leading-loose-reading"
  };

  const currentLeadingClass = lineSpacingClasses[lineSpacing] || "leading-relaxed";

  // فئات اتساع الحاوية وفق نمط العرض المختار
  const containerClasses = {
    default: "max-w-5xl mx-auto px-1 sm:px-2",
    wide: "w-full max-w-none px-1 sm:px-4",
    focus: "w-full max-w-6xl mx-auto px-2 sm:px-6"
  };
  const currentContainerClass = containerClasses[layoutMode] || "max-w-5xl mx-auto";

  const handleOpenChatGpt = () => {
    copyAndOpenChatGPT(subtopic, "خريطة طريق React.js الاحترافية", showToast);
  };

  return (
    <div className={`space-y-8 animate-fadeIn ${currentContainerClass} relative transition-all duration-200`} dir="rtl">
      
      {/* مركز أدوات الدرس وقراءة الشروحات المتطور (Modernized Reading & Interactive Hub) */}
      <div data-no-highlight="true" className="bg-slate-900/95 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-3 sm:p-5 shadow-xl backdrop-blur-md space-y-3.5 transition-all max-w-full overflow-hidden" dir="rtl">
        
        {/* الصف الأول: عنوان الأدوات + شارة التقدم + أدوات تخصيص القراءة وتخطيط الشاشة */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3.5 pb-1">
          
          {/* عنوان القسم التفاعلي وشارة نسبة القراءة */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-cyan-500/10 border border-cyan-500/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-inner">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 animate-pulse" />
              <span className="font-bold text-xs sm:text-sm text-cyan-200">أدوات الدرس</span>
            </div>

            {/* شارة نسبة القراءة مع مؤشر مصغر */}
            {scrollProgress > 0 && (
              <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-950/80 border border-slate-800 px-2 sm:px-2.5 py-1 rounded-xl text-xs">
                <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                <span className="font-mono text-cyan-300 text-[10px] sm:text-[11px]">
                  قراءة: {scrollProgress}%
                </span>
                <div className="w-8 sm:w-10 bg-slate-800 h-1.5 rounded-full overflow-hidden hidden sm:block">
                  <div 
                    className="h-full bg-cyan-400 transition-all duration-200" 
                    style={{ width: `${scrollProgress}%` }} 
                  />
                </div>
              </div>
            )}
          </div>

          {/* أدوات تخصيص القراءة وتخطيط الشاشة */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
            
            {/* 1. التحكم بحجم خط الشرح والنصوص */}
            <div className="flex items-center bg-slate-950/90 rounded-xl p-0.5 sm:p-1 border border-slate-800 shadow-inner" title="التحكم بحجم خط الشرح والنصوص">
              <button
                onClick={() => setReadingFontSize(prev => Math.max(prev - 1, 13))}
                aria-label="تصغير خط الشرح"
                className="px-1.5 sm:px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer text-xs font-bold"
                title="تصغير خط الشرح (A-)"
              >
                A-
              </button>
              <div className="flex items-center gap-1 px-1.5 sm:px-2 border-x border-slate-800 select-none">
                <Type className="size-3 text-cyan-400 opacity-80" />
                <span className="text-cyan-300 font-mono text-[11px] sm:text-xs font-semibold tabular-nums">
                  {readingFontSize}px
                </span>
              </div>
              <button
                onClick={() => setReadingFontSize(prev => Math.min(prev + 1, 24))}
                aria-label="تكبير خط الشرح"
                className="px-1.5 sm:px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer text-xs font-bold"
                title="تكبير خط الشرح (A+)"
              >
                A+
              </button>
              {readingFontSize !== 15 && (
                <button
                  onClick={() => setReadingFontSize(15)}
                  aria-label="إعادة ضبط حجم الخط الافتراضي"
                  className="p-1 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors border-r border-slate-800 text-slate-500 cursor-pointer"
                  title="إعادة ضبط حجم الخط الافتراضي (15px)"
                >
                  <RotateCcw className="size-3" />
                </button>
              )}
            </div>

            {/* 2. التحكم في تباعد الأسطر */}
            <div className="flex items-center bg-slate-950/90 rounded-xl p-0.5 sm:p-1 border border-slate-800 shadow-inner gap-0.5" title="التحكم في تباعد الأسطر">
              <span className="p-1 text-slate-500 hidden xs:inline-block">
                <AlignJustify className="size-3.5" />
              </span>
              <button
                onClick={() => setLineSpacing("compact")}
                className={`px-2 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs transition-all cursor-pointer ${
                  lineSpacing === "compact" 
                    ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm" 
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
                title="تباعد أسطر متقارب"
              >
                متقارب
              </button>
              <button
                onClick={() => setLineSpacing("normal")}
                className={`px-2 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs transition-all cursor-pointer ${
                  lineSpacing === "normal" 
                    ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm" 
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
                title="تباعد أسطر قياسي ومريح"
              >
                قياسي
              </button>
              <button
                onClick={() => setLineSpacing("relaxed")}
                className={`px-2 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs transition-all cursor-pointer ${
                  lineSpacing === "relaxed" 
                    ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm" 
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
                title="تباعد أسطر واسع ومريح جداً"
              >
                مريح
              </button>
            </div>

            {/* 3. محول أنماط العرض (افتراضي / عريض ممتد / وضع التركيز) */}
            {onChangeLayoutMode && (
              <div className="hidden md:flex items-center bg-slate-950/90 rounded-xl p-1 border border-slate-800 shadow-inner gap-0.5 text-xs">
                <button
                  onClick={() => onChangeLayoutMode('default')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    layoutMode === 'default' 
                      ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                  title="العرض الافتراضي المتوازن (شريط جانبي + حاوية قراءة متناسقة)"
                >
                  <span>📱</span>
                  <span>افتراضي</span>
                </button>

                <button
                  onClick={() => onChangeLayoutMode('wide')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    layoutMode === 'wide' 
                      ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                  title="العرض العريض الممتد (يمتد الكود والشرح ليملأ كامل عرض الشاشة)"
                >
                  <span>🖥️</span>
                  <span>عريض</span>
                </button>

                <button
                  onClick={() => onChangeLayoutMode('focus')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    layoutMode === 'focus' 
                      ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                  title="وضع التركيز وملء الشاشة (إخفاء القائمة الجانبية للشاشة كاملة)"
                >
                  <span>⛶</span>
                  <span>تركيز</span>
                </button>
              </div>
            )}

            {/* 4. زر إظهار/إخفاء القائمة الجانبية */}
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                aria-label={isSidebarOpen ? "إخفاء القائمة الجانبية" : "إظهار القائمة الجانبية"}
                className={`p-1.5 sm:p-2 rounded-xl border text-xs transition-all cursor-pointer shadow-sm ${
                  isSidebarOpen 
                    ? 'bg-slate-950/90 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 border-slate-800' 
                    : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold'
                }`}
                title={isSidebarOpen ? "إخفاء القائمة الجانبية وتوسيع الشاشة" : "إظهار القائمة الجانبية"}
              >
                <Layers className="size-3.5 sm:size-4 text-cyan-400" />
              </button>
            )}

          </div>
        </div>

        {/* فاصل بصري ناعم بين خيارات القراءة وأزرار التفاعل والذكاء الاصطناعي */}
        <div className="border-t border-slate-800/70"></div>

        {/* الصف الثاني: أزرار المساعدين الذكيين والتفاعل (متباعدة ومنظمة بأناقة) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5">
          
          {/* زر فتح الشرح في ChatGPT مع نسخ البرومبت تلقائياً */}
          <button
            onClick={handleOpenChatGpt}
            className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl transition-all shadow-md hover:shadow-emerald-500/20 cursor-pointer text-xs shrink-0 whitespace-nowrap"
            title="نسخ برومبت هندسي دقيق وتحويلك فوراً إلى ChatGPT لشرح الدرس"
          >
            <Bot className="size-3.5 sm:size-4 text-emerald-100 shrink-0" />
            <span className="font-sans">شرح في ChatGPT</span>
            <span className="bg-emerald-950/60 text-emerald-200 text-[10px] font-mono px-1.5 py-0.5 rounded-md border border-emerald-400/30 shrink-0 hidden sm:inline-block">
              نسخ البرومبت
            </span>
            <ExternalLink className="size-3 sm:size-3.5 opacity-80 shrink-0" />
          </button>

          {/* زر الاختبار الذكي للدرس */}
          <button
            onClick={() => setIsAiQuizOpen(true)}
            className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl transition-all shadow-md hover:shadow-purple-500/20 cursor-pointer text-xs shrink-0 whitespace-nowrap"
            title="توليد اختبار ذكي تفاعلي خاص بمحاور هذا الدرس (أكمل، صح/خطأ، كود ومخرجات)"
          >
            <Target className="size-3.5 sm:size-4 text-purple-200 shrink-0" />
            <span className="font-sans">اختبار ذكي (Quiz)</span>
            <span className="bg-purple-950/60 text-purple-200 text-[10px] font-mono px-1.5 py-0.5 rounded-md border border-purple-400/30 shrink-0 hidden sm:inline-block">
              3 أنواع
            </span>
          </button>

          {/* زر عرض الشرائح التقديمية بنظام PPT */}
          <button
            onClick={() => setIsPptOpen(true)}
            className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl transition-all shadow-md hover:shadow-amber-500/20 cursor-pointer text-xs shrink-0 whitespace-nowrap"
            title="فتح هذا الدرس كعرض شرائح PowerPoint تفاعلي احترافي"
          >
            <Tv className="size-3.5 sm:size-4 text-slate-950 shrink-0" />
            <span className="font-sans">عرض الشرائح (PPT)</span>
            <span className="bg-amber-950/20 text-slate-900 text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded-md border border-slate-900/30 shrink-0 font-bold hidden sm:inline-block">
              سلايدات
            </span>
          </button>

          {/* زر تحميل عرض PowerPoint كملف .pptx رسمي */}
          <button
            onClick={handleExportPptx}
            disabled={isExportingPptx}
            className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-orange-600 via-rose-600 to-amber-600 hover:from-orange-500 hover:to-rose-500 text-white font-bold px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl transition-all shadow-md hover:shadow-orange-500/20 cursor-pointer text-xs shrink-0 whitespace-nowrap disabled:opacity-50"
            title="تحميل هذا الدرس كملف PowerPoint رسمي جاهز (.pptx) بجودة 16:9"
          >
            <Download className="size-3.5 sm:size-4 text-white shrink-0" />
            <span className="font-sans">تحميل PPTX</span>
            <span className="bg-orange-950/60 text-orange-200 text-[10px] font-mono px-1.5 py-0.5 rounded-md border border-orange-400/30 shrink-0 hidden sm:inline-block">
              {isExportingPptx ? "جاري التجهيز..." : ".pptx"}
            </span>
          </button>

          {/* زر عرض التظليلات والمقتطفات المحفوظة */}
          <button
            onClick={() => setIsHighlightsModalOpen(true)}
            className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl transition-all shadow-md hover:shadow-cyan-500/20 cursor-pointer text-xs shrink-0 whitespace-nowrap"
            title="عرض وإدارة التظليلات والمقتطفات المحفوظة لهذا الدرس"
          >
            <Bookmark className="size-3.5 sm:size-4 text-cyan-100 shrink-0" />
            <span className="font-sans">تظليلاتي وملاحظاتي</span>
            {lessonHighlights.length > 0 ? (
              <span className="bg-cyan-950/80 text-cyan-200 text-[10px] font-mono tabular-nums px-2 py-0.5 rounded-full border border-cyan-400/40 shrink-0">
                {lessonHighlights.length}
              </span>
            ) : (
              <span className="bg-cyan-950/50 text-cyan-200 text-[10px] px-1.5 py-0.5 rounded-md border border-cyan-400/30 shrink-0">
                جديد
              </span>
            )}
          </button>

        </div>

      </div>
      
      {/* سكريبت محتوى الدرس البرمجي والشروحات المكتوبة المخصصة للتظليل والحفظ */}
      <div data-lesson-script="true" className="lesson-script-content space-y-8">
        
        {/* 1. ترويسة الدرس الرئيسية */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2.5 py-0.5 rounded-full tabular-nums">
                الدرس {subtopic.id}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {subtopic.englishTitle || subtopic.technicalTerm?.english}
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white leading-tight text-balance">
              {subtopic.title}
            </h2>
          </div>

          {/* زر تمييز الدرس كمكتمل */}
          <button
            onClick={() => onToggleComplete(subtopic.id)}
            aria-label={isCompleted ? "تم إتقان الدرس" : "تحديد الدرس كمكتمل"}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              isCompleted 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            {isCompleted ? (
              <>
                <Check className="size-4 text-emerald-400" />
                <span>تم إتقان الدرس ✓</span>
              </>
            ) : (
              <>
                <CheckCircle className="size-4 text-slate-400" />
                <span>تحديد كمكتمل</span>
              </>
            )}
          </button>
        </div>

        {/* قسم المحاكاة الحركية الفوري للموشن جرافيك Remotion أو الإنفوجرافيك (Hero Visual Engine) */}
        <div className="mb-8 bg-slate-950/90 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="size-9 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/20">
                <Film className="size-4" />
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                  <span>المحاكاة البصرية الحركية للدرس (Remotion 60FPS)</span>
                  <span className="text-[10px] bg-sky-500/20 text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded-full font-mono">
                    LIVE
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  شاهد تدفق البيانات ورسوم SVG المعمارية المتحركة المصاحبة لكود الدرس
                </p>
              </div>
            </div>

            {/* أزرار التبديل الفوري بين الموشن جرافيك والإنفوجرافيك */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 gap-1 text-xs shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setVisualMode('motion')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  visualMode === 'motion'
                    ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Film className="size-3.5" />
                <span>موشن جرافيك Remotion 🎬</span>
              </button>
              <button
                onClick={() => setVisualMode('infographic')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  visualMode === 'infographic'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="size-3.5" />
                <span>إنفوجرافيك تفصيلي 📊</span>
              </button>
            </div>
          </div>

          {visualMode === 'motion' ? (
            <div className="animate-fadeIn">
              <LessonMotionPlayer 
                subtopic={subtopic} 
                topicTitle={subtopic.title}
                onSwitchToInfographic={() => setVisualMode('infographic')} 
              />
            </div>
          ) : (
            <div className="animate-fadeIn">
              <InfographicCard 
                subtopic={subtopic} 
                onOpenGallery={onOpenInfographicGallery} 
                highlights={lessonHighlights}
                onHighlightClick={handleHighlightClick}
              />
            </div>
          )}
        </div>

        {/* 1. التعريف المبسط */}
        <div className="space-y-2 mb-6">
          <h4 className="text-xs font-bold text-cyan-400 flex items-center gap-1.5 font-sans">
            <span>📖</span> 1. التعريف المبسط (Simplified Definition):
          </h4>
          <p 
            className={`text-slate-200 font-sans font-medium text-pretty ${currentLeadingClass}`}
            style={{ fontSize: `${readingFontSize}px` }}
          >
            {renderHighlightedContent(subtopic.definition)}
          </p>
        </div>

        {/* 2. التشبيه من الحياة اليومية */}
        <div className="bg-amber-950/20 border-r-4 border-amber-500 rounded-2xl p-5 mb-6 shadow-inner">
          <h4 className="text-xs font-bold text-amber-300 flex items-center gap-1.5 mb-2">
            <Sparkles className="size-4 text-amber-400" />
            2. مثال وتشبيه من الحياة اليومية (Everyday Analogy):
          </h4>
          <p 
            className={`text-amber-100/90 text-pretty ${currentLeadingClass}`}
            style={{ fontSize: `${Math.max(readingFontSize - 1, 13)}px` }}
          >
            {renderHighlightedContent(subtopic.analogy)}
          </p>
        </div>

        {/* 3. لماذا نحتاجه والمشكلة التي يحلها */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
            <HelpCircle className="size-4 text-blue-400" />
            3. لماذا نحتاجه؟ وما المشكلة التي يحلها؟ (Why & Problem Solved):
          </h4>
          <p 
            className={`text-slate-300 text-pretty ${currentLeadingClass}`}
            style={{ fontSize: `${readingFontSize}px` }}
          >
            {renderHighlightedContent(subtopic.why)}
          </p>
        </div>

      </div>

      {/* 4. قاموس المصطلحات الإنجليزية والنطق الصوتي التفاعلي المباشر والمعنى */}
      <TermsDictionarySection subtopic={subtopic} readingFontSize={readingFontSize} />

      {/* 5. الصيغة العامة (Syntax) مع دعم التظليل المباشر */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h4 className="text-xs font-bold text-emerald-400 mb-3 flex items-center gap-2">
          <FileCode className="size-4" />
          5. الصيغة العامة والهيكل القياسي (General Syntax):
        </h4>
        <div 
          data-code-block="true" 
          data-lesson-script="true" 
          className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 whitespace-pre-wrap leading-relaxed overflow-x-auto select-text" 
          dir="ltr"
        >
          {renderHighlightedContent(subtopic.syntax)}
        </div>
      </div>

      {/* 5.5 المخطط التدفقي المنطقي للعملية (Execution Flow) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-2">
        <h4 className="text-xs font-bold text-sky-400 flex items-center gap-2">
          <span>🔄</span> 5.ب. المخطط التدفقي المنطقي وتتبع التنفيذ (Execution Flow Trace):
        </h4>
        <div className="p-3.5 bg-slate-950/80 rounded-xl border border-sky-900/30 text-xs font-sans text-sky-200/90 leading-relaxed">
          {subtopic.executionFlow || "المستخدم ينقر أو يحدث الإجراء ➔ إطلاق SyntheticEvent في React ➔ جدولة التحديث في Fiber Lane ➔ مقارنة الـ VDOM ➔ تطبيق التعديلات الصافية فقط في Commit Phase."}
        </div>
      </div>

      {/* 6. المثال العملي البسيط مع تعليق على كل سطر وملاحظات وتظليلات تفاعلية */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-200 flex items-center gap-2">
          <Terminal className="size-4 text-cyan-400" />
          6. مثال عملي بسيط (مع تعليق عربي فوق كل سطر كود):
        </h4>
        <CodeBlock 
          code={subtopic.simpleCode || subtopic.codeSimple} 
          title={`كود مبسط: ${subtopic.title}`} 
          language="javascript" 
          subtopicId={subtopic.id}
          highlights={lessonHighlights}
          onHighlightClick={handleHighlightClick}
        />
      </div>

      {/* 7. المثال العملي المتقدم والتطبيقي مع دعم التظليل والملاحظات */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-200 flex items-center gap-2">
          <Terminal className="size-4 text-indigo-400" />
          7. مثال عملي متقدم وتطبيقي (مع تعليقات كاملة):
        </h4>
        <CodeBlock 
          code={subtopic.advancedCode || subtopic.codeAdvanced} 
          title={`تطبيق عملي متقدم: ${subtopic.title}`} 
          language="javascript" 
          subtopicId={subtopic.id}
          highlights={lessonHighlights}
          onHighlightClick={handleHighlightClick}
        />
      </div>

      {/* المعاينة المباشرة للكود المتقدم */}
      {(subtopic.advancedCode || subtopic.codeAdvanced) && (
        <LiveCodePreview initialCode={subtopic.advancedCode || subtopic.codeAdvanced} title={`المعاينة المباشرة لتطبيق: ${subtopic.title}`} />
      )}

      {/* 8. شرح المخرجات */}
      {(subtopic.outputExplanation || subtopic.output) && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h4 className="text-xs font-bold text-cyan-400 mb-2 flex items-center gap-2">
            <Eye className="size-4" />
            8. شرح المخرجات: ماذا يرى المستخدم ولماذا؟ (Output Explanation):
          </h4>
          <p 
            className={`text-slate-300 font-sans text-pretty ${currentLeadingClass}`}
            style={{ fontSize: `${readingFontSize}px` }}
          >
            {renderHighlightedContent(subtopic.outputExplanation || subtopic.output)}
          </p>
        </div>
      )}

      {/* 9. أخطاء شائعة يقع فيها المبتدئون وكيف تتجنبها هندسياً */}
      <CommonMistakesLab commonMistakes={subtopic.commonMistakes || subtopic.mistakes || []} readingFontSize={readingFontSize} />

      {/* 10. نصائح ذهبية وأفضل الممارسات للمحترفين */}
      <ProBestPracticesSection bestPractices={subtopic.bestPractices || subtopic.tips || []} readingFontSize={readingFontSize} />

      {/* 11. النموذج الذهني المعماري وخلف كواليس المحرك (Mental Model & Under the Hood) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <h4 className="text-xs font-bold text-cyan-300 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            11. النموذج الذهني وخلف الكواليس (Mental Model & Under the Hood):
          </h4>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/50">
            React Engine Internals
          </span>
        </div>
        <p 
          className={`text-slate-300 font-sans ${currentLeadingClass}`}
          style={{ fontSize: `${readingFontSize}px` }}
        >
          {subtopic.mentalModel || `عند تنفيذ هذا المفهوم في React، يقوم محرك التوفيق (Reconciliation Engine) بإنشاء عقد Fiber جديدة في الذاكرة ومقارنتها عبر خوارزمية Diffing عالية الكفاءة مع الشجرة السابقة. يتم حصر التغييرات الفعلية فقط ودفعها في مرحلة الالتزام (Commit Phase) إلى الـ Real DOM دفعة واحدة، مما يمنع إعادة رسم الشاشة غير الضروري ويحافظ على استجابة 60 إطاراً في الثانية.`}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="bg-slate-950/70 border border-slate-800/85 p-3 rounded-xl space-y-1">
            <div className="text-[11px] font-bold text-sky-400 flex items-center gap-1.5">
              <span>⚡</span> مرحلة العرض (Render Phase)
            </div>
            <p className="text-[10px] text-slate-400">
              دوال نقية (Pure Functions) تحسب الشجرة الافتراضية بدون أي تأثيرات جانبية على الـ DOM الفعلي.
            </p>
          </div>
          <div className="bg-slate-950/70 border border-slate-800/85 p-3 rounded-xl space-y-1">
            <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
              <span>🔄</span> خوارزمية التوفيق (Diffing)
            </div>
            <p className="text-[10px] text-slate-400">
              مقارنة العقد ذات الرتبة المتماثلة في زمن O(n) السريع لتحديد الاختلافات بدقة متناهية.
            </p>
          </div>
          <div className="bg-slate-950/70 border border-slate-800/85 p-3 rounded-xl space-y-1">
            <div className="text-[11px] font-bold text-indigo-400 flex items-center gap-1.5">
              <span>🚀</span> مرحلة الالتزام (Commit Phase)
            </div>
            <p className="text-[10px] text-slate-400">
              تطبيق التعديلات الحتمية في الـ DOM، وتشغيل الـ Effects وتنظيف الموارد السابقة في الذاكرة.
            </p>
          </div>
        </div>
      </div>

      {/* 12. فخاخ وأخطاء بيئة الإنتاج القاتلة (Production Pitfalls & Anti-Patterns) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <h4 className="text-xs font-bold text-rose-300 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            12. فخاخ وأخطاء الإنتاج القاتلة (Production Pitfalls & Anti-Patterns):
          </h4>
          <span className="text-[10px] font-mono text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded-full border border-rose-800/50">
            Critical Safe Guard
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <div className="bg-slate-950/80 border border-rose-900/30 rounded-xl p-3.5 space-y-1.5">
            <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
              <span>⚠️</span> فخ الإغلاق المتقادم (Stale Closures)
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              الاعتماد على متغيرات قديمة داخل الدوال غير المحدثة أو الـ Event Listeners دون تمرير التبعيات في مصفوفة dependencies، مما يسبب قراءة بيانات قديمة وتصرفات عشوائية في الإنتاج.
            </p>
          </div>
          <div className="bg-slate-950/80 border border-rose-900/30 rounded-xl p-3.5 space-y-1.5">
            <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
              <span>🔁</span> شلالات إعادة الرسم المتتالية (Cascading Re-renders)
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              تعديل الـ State داخل تأثيرات معتمدة على الـ State نفسها مما ينشئ حلقة مفرغة تسحق أداء المتصفح وتجمد واجهة المستخدم.
            </p>
          </div>
          <div className="bg-slate-950/80 border border-rose-900/30 rounded-xl p-3.5 space-y-1.5">
            <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
              <span>❌</span> التعديل المباشر على الكائنات والمصفوفات (State Mutation)
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              استخدام دوال التعديل الحتمي مثل push/splice مباشرة بدلاً من استنساخ الكائن بتنسيق جديد (...spread)، مما يكسر تحقق التساوي المرجعي في React.
            </p>
          </div>
          <div className="bg-slate-950/80 border border-rose-900/30 rounded-xl p-3.5 space-y-1.5">
            <div className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
              <span>💧</span> تسريب الذاكرة (Memory Leaks in Subscriptions)
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              عدم إرجاع دالة تنظيف (Cleanup Function) لإلغاء المؤقتات، واشتراكات الـ WebSockets، وطلبات AbortController عند تفكيك المكون (Unmount).
            </p>
          </div>
        </div>
      </div>

      {/* 13. قواعد الأداء العالي والتسريع المتقدم (Performance & Optimization Secrets) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <h4 className="text-xs font-bold text-amber-300 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            13. أسرار الأداء العالي والتسريع (Performance & Optimization Rules):
          </h4>
          <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-800/50">
            60 FPS Architecture
          </span>
        </div>
        <div className="space-y-2.5">
          <div className="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <span className="text-amber-400 font-bold">1.</span>
            <div className="text-xs text-slate-200">
              <strong className="text-cyan-300">التحميل الكسول وتقسيم الحزم (Code Splitting):</strong> استخدم <code className="text-sky-300 bg-slate-900 px-1 py-0.5 rounded font-mono">React.lazy</code> و <code className="text-sky-300 bg-slate-900 px-1 py-0.5 rounded font-mono">&lt;Suspense&gt;</code> لتحميل الشاشات الثقيلة عند الحاجة فقط، لخفض حجم الـ Initial Bundle بأكثر من 40%.
            </div>
          </div>
          <div className="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <span className="text-amber-400 font-bold">2.</span>
            <div className="text-xs text-slate-200">
              <strong className="text-emerald-300">التزامن وانتقالات الأولوية (useTransition):</strong> ميز التحديثات غير الحرجة كبحث النصوص أو الفلاتر المعقدة عبر الانتقالات المتزامنة لتبقى الواجهة مستجيبة لنقرات المستخدم دون أي تأخير.
            </div>
          </div>
          <div className="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <span className="text-amber-400 font-bold">3.</span>
            <div className="text-xs text-slate-200">
              <strong className="text-indigo-300">التخزين المؤقت الذكي (useMemo & useCallback):</strong> احرص على استخدامها فقط عند تمرير مراجع دوال أو حسابات كثيفة لمكونات محاطة بـ <code className="text-sky-300 bg-slate-900 px-1 py-0.5 rounded font-mono">React.memo</code> لتفادي تكلفة المقارنة الزائدة.
            </div>
          </div>
        </div>
      </div>

      {/* 13.5 جدول المقارنة المعمارية المباشرة (Head-to-Head Architectural Comparison) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <h4 className="text-xs font-bold text-indigo-300 flex items-center gap-2">
            <span>⚖️</span> 13.ب. المقارنة المعمارية المباشرة (Head-to-Head Comparison):
          </h4>
          <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-800/50">
            Modern vs Legacy
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <div className="bg-slate-950/80 border border-rose-900/30 rounded-xl p-3.5 space-y-1.5">
            <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
              <span>⏮️</span> الأسلوب التقليدي السابق (The Legacy Way):
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
              {subtopic.headToHeadComparison?.oldWay || "تحديث يدوي لـ DOM، تشابك في مصادر الحقيقة، وصعوبة تتبع مسببات إعادة الرسم مما يسبب هبوطاً حاداً في الأداء مع تضخم المشروع."}
            </p>
          </div>
          <div className="bg-slate-950/80 border border-emerald-900/30 rounded-xl p-3.5 space-y-1.5">
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <span>⚡</span> أسلوب React 19 العصري (The Modern Way):
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
              {subtopic.headToHeadComparison?.modernWay || "برمجة تصريحية معتمدة على مكونات نقية، جدولة أوتوماتيكية للأولويات، وحفظ مرجعي تلقائي عبر React Compiler."}
            </p>
          </div>
        </div>
        {subtopic.headToHeadComparison?.verdict && (
          <div className="text-xs text-indigo-200/90 bg-indigo-950/40 p-2.5 rounded-xl border border-indigo-800/40">
            <strong>الحكم المعماري:</strong> {subtopic.headToHeadComparison.verdict}
          </div>
        )}
      </div>

            {/* 14. كبسولة المقابلات التقنية وأسئلة شركات Big Tech (Senior Interview Prep) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <h4 className="text-xs font-bold text-violet-300 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-violet-400" />
            14. كبسولة المقابلات التقنية لشركات التكنولوجيا الكبرى (FAANG & Senior Interview Gotchas):
          </h4>
          <span className="text-[10px] font-mono text-violet-400 bg-violet-950/60 px-2 py-0.5 rounded-full border border-violet-800/50">
            Interview Ready
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          {subtopic.interviewPrep?.question 
            ? subtopic.interviewPrep.question
            : "سؤال المقابلات الشهير: \"كيف تؤثر هذه الجزئية على معمارية التطبيق ودورة تصيير المكونات؟ وما الفخ الذي يقع فيه المطور العادي؟\""}
        </p>
        <div className="bg-slate-950/80 border border-violet-900/30 rounded-2xl p-4 space-y-2">
          <div className="text-[11px] font-bold text-violet-400 flex items-center gap-1.5">
            <span>💡</span> الإجابة النموذجية التي يبحث عنها المقابل التقني (Senior Answer):
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {subtopic.interviewPrep?.answer || "يركز مهندس البرمجيات المحترف على سلامة التساوي المرجعي (Referential Equality)، وتجنب الآثار الجانبية غير المتوقعة، وفصل المنطق الحسابي الثقيل عن دورة التصيير لضمان استجابة الواجهة وسرعة التفاعل مع المستخدم."}
          </p>
          {subtopic.interviewPrep?.insiderTip && (
            <div className="text-[11px] text-amber-300/90 pt-1 border-t border-slate-800/80 flex items-center gap-1.5">
              <span>⭐ نصيحة المقابل:</span> {subtopic.interviewPrep.insiderTip}
            </div>
          )}
        </div>
      </div>

      {/* 15. دراسة حالة واقعية في بيئات الإنتاج الضخمة (Real-World Enterprise Case Study) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <h4 className="text-xs font-bold text-emerald-300 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-400" />
            15. سيناريو من واقع مشاريع المليون مستخدم (1M+ Users Enterprise Case Study):
          </h4>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/50">
            Enterprise Scale
          </span>
        </div>
        <div className="bg-slate-950/70 border border-emerald-900/30 rounded-2xl p-4 space-y-2">
          <h5 className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
            <span>🏢</span> {subtopic.enterpriseCaseStudy?.company || "Meta & Netflix Scale Architecture"}
          </h5>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {subtopic.enterpriseCaseStudy?.story || "في المنصات الضخمة التي تخدم ملايين المستخدمين يومياً، يؤدي الاستخدام غير المنضبط إلى تراكم استهلاك الذاكرة وبطء أجهزة المستخدمين الضعيفة. يتم استخدام هذا المفهوم لتقسيم عبء المعالجة، وتأخير المهام غير الحرجة، مما يضمن ثبات معدل الإطارات (60 FPS) حتى مع تضخم شجرة المكونات."}
          </p>
          {subtopic.enterpriseCaseStudy?.takeaway && (
            <div className="text-[11px] text-emerald-300/90 pt-1 border-t border-slate-800/80">
              <strong>الدرس المستفاد:</strong> {subtopic.enterpriseCaseStudy.takeaway}
            </div>
          )}
        </div>
      </div>

      {/* 16. بنك الأسئلة الشائعة والأسرار الغامضة (Deep-Dive FAQs & Edge Cases) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <h4 className="text-xs font-bold text-sky-300 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-sky-400" />
            16. بنك الأسئلة الشائعة والحالات الاستثنائية (Deep-Dive FAQs & Edge Cases):
          </h4>
          <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded-full border border-sky-800/50">
            Curious Minds
          </span>
        </div>
        <div className="space-y-3">
          {(subtopic.deepDiveFaqs && subtopic.deepDiveFaqs.length > 0) ? (
            subtopic.deepDiveFaqs.map((faq, idx) => (
              <details key={idx} className="group bg-slate-950/80 border border-slate-800 rounded-2xl p-3.5 transition-all">
                <summary className="text-xs font-bold text-slate-200 cursor-pointer flex items-center justify-between select-none">
                  <span className="flex items-center gap-2">
                    <span className="text-sky-400 font-mono">Q{idx + 1}:</span>
                    <span>{faq.q}</span>
                  </span>
                  <span className="text-slate-500 group-open:rotate-90 transition-transform">▸</span>
                </summary>
                <div className="pt-2.5 mt-2 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed font-sans">
                  {faq.a}
                </div>
              </details>
            ))
          ) : (
            <>
              <details className="group bg-slate-950/80 border border-slate-800 rounded-2xl p-3.5 transition-all" open>
                <summary className="text-xs font-bold text-slate-200 cursor-pointer flex items-center justify-between select-none">
                  <span className="flex items-center gap-2">
                    <span className="text-sky-400 font-mono">س1:</span>
                    <span>متى يكون استخدام هذا المفهوم حتمياً ومتى يعتبر زيادة تعقيد لا داعي لها؟</span>
                  </span>
                  <span className="text-slate-500 group-open:rotate-90 transition-transform">▸</span>
                </summary>
                <div className="pt-2.5 mt-2 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed font-sans">
                  يُستخدم المفهوم عند وجود حاجة فعلية لحفظ الحالة، تحسين استجابة الواجهة، أو مشاركة منطق معقد عبر عدة مكونات. تجنب التجريد المبكر (Premature Abstraction) إذا كان كودك يؤدي الغرض ببساطة وبدون مشاكل في الأداء.
                </div>
              </details>
              <details className="group bg-slate-950/80 border border-slate-800 rounded-2xl p-3.5 transition-all">
                <summary className="text-xs font-bold text-slate-200 cursor-pointer flex items-center justify-between select-none">
                  <span className="flex items-center gap-2">
                    <span className="text-sky-400 font-mono">س2:</span>
                    <span>كيف يتعامل React 19 والـ React Compiler مع هذا الجزء تلقائياً؟</span>
                  </span>
                  <span className="text-slate-500 group-open:rotate-90 transition-transform">▸</span>
                </summary>
                <div className="pt-2.5 mt-2 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed font-sans">
                  في بيئات React 19 المزودة بالـ Compiler، يتم تحليل مخطط تدفق المتغيرات وقت البناء وحقن كود الحفظ المرجعي التلقائي، مما يوفر على المطور عناء كتابة الميموزيشن اليدوي ويمنع أخطاء نسيان التبعيات.
                </div>
              </details>
            </>
          )}
        </div>
      </div>

      {/* 17. التحدي العملي ومختبر الاختبار الذاتي (Hands-on Challenge with Self-Test) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <h4 className="text-xs font-bold text-amber-300 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            17. التحدي البرمجي العملي ومختبر التطبيق الذاتي (Hands-on Challenge):
          </h4>
          <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-800/50">
            Build It Yourself
          </span>
        </div>
        <div className="bg-slate-950/80 border border-amber-900/30 rounded-2xl p-4 space-y-3">
          <div className="text-xs font-bold text-slate-200">
            🎯 المهمة المطلوبة:
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {subtopic.handsOnChallenge?.task || "قم ببناء مكون React تفاعلي يطبق مفاهيم هذا الدرس بدقة، مع مراعاة التعامل السليم مع الحالات الفارغة (Empty States)، وتوفير تغذية راجعة بصرية فورية عند تفاعل المستخدم."}
          </p>
          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl text-xs font-mono text-amber-300/90 whitespace-pre-wrap" dir="ltr">
            {subtopic.handsOnChallenge?.hint || "// تلميح للتحدي:\n// 1. تأكد من تهيئة الحالة بقيمة أولية سليمة.\n// 2. استخدم الأسماء المعبرة والممارسات الصحيحة.\n// 3. اختبر المكون على شاشات الهواتف أيضاً."}
          </div>
        </div>
      </div>

      {/* 12. شريط التنقل السفلي بين الدروس (السابق / التالي / المعلم الذكي) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          aria-label="الدرس السابق"
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all w-full sm:w-auto justify-center cursor-pointer ${
            hasPrev 
              ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700' 
              : 'bg-slate-900 text-slate-600 border border-slate-800 opacity-50 cursor-not-allowed'
          }`}
        >
          <ChevronRight className="size-4" />
          <span>الدرس السابق</span>
        </button>

        <button
          onClick={onOpenTutor}
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg transition-all w-full sm:w-auto justify-center cursor-pointer"
        >
          <Sparkles className="size-4 text-amber-300" />
          <span>اسأل المعلم الذكي عن هذا الدرس</span>
        </button>

        <button
          onClick={onNext}
          disabled={!hasNext}
          aria-label="الدرس التالي"
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold transition-all w-full sm:w-auto justify-center cursor-pointer ${
            hasNext 
              ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg' 
              : 'bg-slate-900 text-slate-600 border border-slate-800 opacity-50 cursor-not-allowed'
          }`}
        >
          <span>الدرس التالي</span>
          <ChevronLeft className="size-4" />
        </button>
      </div>
      </div>

      {/* نافذة عرض الشرائح PPT للدرس */}
      <PresentationModeModal
        subtopic={subtopic}
        isOpen={isPptOpen}
        onClose={() => setIsPptOpen(false)}
      />

      {/* نافذة الاختبار الذكي المخصص للدرس */}
      <AiLessonQuizModal
        subtopic={subtopic}
        isOpen={isAiQuizOpen}
        onClose={() => setIsAiQuizOpen(false)}
        onToggleComplete={onToggleComplete}
        isCompleted={isCompleted}
        onNext={onNext}
      />

      {/* أداة التظليل الذكية العائمة عند تحديد أي نص أو كود */}
      <TextHighlightPopover 
        subtopicId={subtopic.id} 
        subtopicTitle={subtopic.title} 
        onHighlightSaved={loadLessonHighlights} 
        onOpenTutor={onOpenTutor}
        onOpenHighlights={() => setIsHighlightsModalOpen(true)}
      />

      {/* نافذة استعراض التظليلات والمقتطفات المحفوظة لهذا الدرس */}
      <SavedHighlightsModal
        isOpen={isHighlightsModalOpen}
        onClose={() => setIsHighlightsModalOpen(false)}
        currentSubtopicId={subtopic.id}
      />
    </div>
  );
}
