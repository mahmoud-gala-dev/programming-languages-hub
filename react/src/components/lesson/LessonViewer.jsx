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
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import CodeBlock from './CodeBlock.jsx';
import LiveCodePreview from './LiveCodePreview.jsx';
import InfographicCard from '../infographic/InfographicCard.jsx';
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
  const [hasCelebrated, setHasCelebrated] = useState(false);

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
      purple: "bg-purple-400/35 text-purple-100 border-b-2 border-purple-400 hover:bg-purple-400/50 shadow-sm"
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
    setHasCelebrated(false);

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0) {
        const current = Math.min(Math.max((window.scrollY / scrollable) * 100, 0), 100);
        const rounded = Math.round(current);
        setScrollProgress(rounded);

        // إطلاق الاحتفالية عند النزول لأسفل الدرس
        if (rounded >= 95 && !hasCelebrated) {
          setHasCelebrated(true);
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.85 }
          });
        }
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
      <div data-no-highlight="true" className="bg-slate-900/95 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-xl backdrop-blur-md space-y-4 transition-all" dir="rtl">
        
        {/* الصف الأول: عنوان الأدوات + شارة التقدم + أدوات تخصيص القراءة وتخطيط الشاشة */}
        <div className="flex flex-wrap items-center justify-between gap-3.5 pb-1">
          
          {/* عنوان القسم التفاعلي وشارة نسبة القراءة */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-xl shadow-inner">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="font-bold text-sm text-cyan-200">أدوات الدرس الذكية</span>
            </div>

            {/* شارة نسبة القراءة مع مؤشر مصغر */}
            {scrollProgress > 0 && (
              <div className="flex items-center gap-2 bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-xl text-xs">
                <Eye className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-mono text-cyan-300 text-[11px]">
                  قراءة: {scrollProgress}%
                </span>
                <div className="w-10 bg-slate-800 h-1.5 rounded-full overflow-hidden hidden sm:block">
                  <div 
                    className="h-full bg-cyan-400 transition-all duration-200" 
                    style={{ width: `${scrollProgress}%` }} 
                  />
                </div>
              </div>
            )}
          </div>

          {/* أدوات تخصيص القراءة وتخطيط الشاشة */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            
            {/* 1. التحكم بحجم خط الشرح والنصوص */}
            <div className="flex items-center bg-slate-950/90 rounded-xl p-1 border border-slate-800 shadow-inner" title="التحكم بحجم خط الشرح والنصوص">
              <button
                onClick={() => setReadingFontSize(prev => Math.max(prev - 1, 13))}
                className="px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer text-xs font-bold"
                title="تصغير خط الشرح (A-)"
              >
                A-
              </button>
              <div className="flex items-center gap-1 px-2 border-x border-slate-800 select-none">
                <Type className="w-3 h-3 text-cyan-400 opacity-80" />
                <span className="text-cyan-300 font-mono text-xs font-semibold">
                  {readingFontSize}px
                </span>
              </div>
              <button
                onClick={() => setReadingFontSize(prev => Math.min(prev + 1, 24))}
                className="px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer text-xs font-bold"
                title="تكبير خط الشرح (A+)"
              >
                A+
              </button>
              {readingFontSize !== 15 && (
                <button
                  onClick={() => setReadingFontSize(15)}
                  className="p-1 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors border-r border-slate-800 text-slate-500 cursor-pointer"
                  title="إعادة ضبط حجم الخط الافتراضي (15px)"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* 2. التحكم في تباعد الأسطر */}
            <div className="flex items-center bg-slate-950/90 rounded-xl p-1 border border-slate-800 shadow-inner gap-0.5" title="التحكم في تباعد الأسطر">
              <span className="p-1 text-slate-500">
                <AlignJustify className="w-3.5 h-3.5" />
              </span>
              <button
                onClick={() => setLineSpacing("compact")}
                className={`px-2.5 py-1 rounded-lg text-xs transition-all cursor-pointer ${
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
                className={`px-2.5 py-1 rounded-lg text-xs transition-all cursor-pointer ${
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
                className={`px-2.5 py-1 rounded-lg text-xs transition-all cursor-pointer ${
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
              <div className="flex items-center bg-slate-950/90 rounded-xl p-1 border border-slate-800 shadow-inner gap-0.5 text-xs">
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
                  <span className="hidden md:inline">افتراضي</span>
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
                  <span className="hidden md:inline">عريض</span>
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
                  <span className="hidden md:inline">تركيز</span>
                </button>
              </div>
            )}

            {/* 4. زر إظهار/إخفاء القائمة الجانبية */}
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                className={`p-2 rounded-xl border text-xs transition-all cursor-pointer shadow-sm ${
                  isSidebarOpen 
                    ? 'bg-slate-950/90 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 border-slate-800' 
                    : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold'
                }`}
                title={isSidebarOpen ? "إخفاء القائمة الجانبية وتوسيع الشاشة" : "إظهار القائمة الجانبية"}
              >
                <Layers className="w-4 h-4" />
              </button>
            )}

          </div>
        </div>

        {/* فاصل بصري ناعم بين خيارات القراءة وأزرار التفاعل والذكاء الاصطناعي */}
        <div className="border-t border-slate-800/70"></div>

        {/* الصف الثاني: أزرار المساعدين الذكيين والتفاعل (متباعدة ومنظمة بأناقة) */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 pt-0.5">
          
          {/* زر فتح الشرح في ChatGPT مع نسخ البرومبت تلقائياً */}
          <button
            onClick={handleOpenChatGpt}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-3.5 py-2 rounded-xl transition-all shadow-md hover:shadow-emerald-500/20 cursor-pointer text-xs shrink-0 whitespace-nowrap"
            title="نسخ برومبت هندسي دقيق وتحويلك فوراً إلى ChatGPT لشرح الدرس"
          >
            <Bot className="w-4 h-4 text-emerald-100 shrink-0" />
            <span className="font-sans">شرح في ChatGPT</span>
            <span className="bg-emerald-950/60 text-emerald-200 text-[10px] font-mono px-1.5 py-0.5 rounded-md border border-emerald-400/30 shrink-0">
              نسخ البرومبت
            </span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80 shrink-0" />
          </button>

          {/* زر الاختبار الذكي للدرس */}
          <button
            onClick={() => setIsAiQuizOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-3.5 py-2 rounded-xl transition-all shadow-md hover:shadow-purple-500/20 cursor-pointer text-xs shrink-0 whitespace-nowrap"
            title="توليد اختبار ذكي تفاعلي خاص بمحاور هذا الدرس (أكمل، صح/خطأ، كود ومخرجات)"
          >
            <Target className="w-4 h-4 text-purple-200 shrink-0" />
            <span className="font-sans">اختبار ذكي (Quiz)</span>
            <span className="bg-purple-950/60 text-purple-200 text-[10px] font-mono px-1.5 py-0.5 rounded-md border border-purple-400/30 shrink-0">
              3 أنواع
            </span>
          </button>

          {/* زر عرض الشرائح التقديمية بنظام PPT */}
          <button
            onClick={() => setIsPptOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold px-3.5 py-2 rounded-xl transition-all shadow-md hover:shadow-amber-500/20 cursor-pointer text-xs shrink-0 whitespace-nowrap"
            title="فتح هذا الدرس كعرض شرائح PowerPoint تفاعلي احترافي"
          >
            <Tv className="w-4 h-4 text-slate-950 shrink-0" />
            <span className="font-sans">عرض الشرائح (PPT)</span>
            <span className="bg-amber-950/20 text-slate-900 text-[10px] font-mono px-2 py-0.5 rounded-md border border-slate-900/30 shrink-0 font-bold">
              سلايدات
            </span>
          </button>

          {/* زر عرض التظليلات والمقتطفات المحفوظة */}
          <button
            onClick={() => setIsHighlightsModalOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold px-3.5 py-2 rounded-xl transition-all shadow-md hover:shadow-cyan-500/20 cursor-pointer text-xs shrink-0 whitespace-nowrap"
            title="عرض وإدارة التظليلات والمقتطفات المحفوظة لهذا الدرس"
          >
            <Bookmark className="w-4 h-4 text-cyan-100 shrink-0" />
            <span className="font-sans">تظليلاتي وملاحظاتي</span>
            {lessonHighlights.length > 0 ? (
              <span className="bg-cyan-950/80 text-cyan-200 text-[10px] font-mono px-2 py-0.5 rounded-full border border-cyan-400/40 shrink-0">
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
              <span className="text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2.5 py-0.5 rounded-full">
                الدرس {subtopic.id}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {subtopic.englishTitle || subtopic.technicalTerm?.english}
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white leading-tight">
              {subtopic.title}
            </h2>
          </div>

          {/* زر تمييز الدرس كمكتمل */}
          <button
            onClick={() => onToggleComplete(subtopic.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              isCompleted 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            {isCompleted ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>تم إتقان الدرس ✓</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 text-slate-400" />
                <span>تحديد كمكتمل</span>
              </>
            )}
          </button>
        </div>

        {/* 1. التعريف المبسط */}
        <div className="space-y-2 mb-6">
          <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            <span>📖</span> 1. التعريف المبسط (Simplified Definition):
          </h4>
          <p 
            className={`text-slate-200 font-sans font-medium ${currentLeadingClass}`}
            style={{ fontSize: `${readingFontSize}px` }}
          >
            {renderHighlightedContent(subtopic.definition)}
          </p>
        </div>

        {/* 2. التشبيه من الحياة اليومية */}
        <div className="bg-amber-950/20 border-r-4 border-amber-500 rounded-2xl p-5 mb-6 shadow-inner">
          <h4 className="text-xs font-bold text-amber-300 flex items-center gap-1.5 mb-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            2. مثال وتشبيه من الحياة اليومية (Everyday Analogy):
          </h4>
          <p 
            className={`text-amber-100/90 ${currentLeadingClass}`}
            style={{ fontSize: `${Math.max(readingFontSize - 1, 13)}px` }}
          >
            {renderHighlightedContent(subtopic.analogy)}
          </p>
        </div>

        {/* 3. لماذا نحتاجه والمشكلة التي يحلها */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            3. لماذا نحتاجه؟ وما المشكلة التي يحلها؟ (Why & Problem Solved):
          </h4>
          <p 
            className={`text-slate-300 ${currentLeadingClass}`}
            style={{ fontSize: `${readingFontSize}px` }}
          >
            {renderHighlightedContent(subtopic.why)}
          </p>
        </div>

      </div>

      {/* 4. قاموس المصطلحات الإنجليزية مع النطق والترجمة */}
      {((subtopic.terms && subtopic.terms.length > 0) || subtopic.technicalTerm) && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h4 className="text-xs font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Languages className="w-4 h-4" />
            4. المصطلحات الإنجليزية والنطق الصوتي والمعنى (Terms & Meaning):
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subtopic.technicalTerm && (
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono font-bold text-xs text-blue-400" dir="ltr">{subtopic.technicalTerm.english}</span>
                    <span className="text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                      النطق: {subtopic.technicalTerm.pronunciation}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{subtopic.technicalTerm.arabicMeaning}</p>
                </div>
              </div>
            )}

            {subtopic.terms?.map((item, idx) => (
              <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono font-bold text-xs text-blue-400" dir="ltr">{item.term}</span>
                    <span className="text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                      النطق: {item.pronunciation}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{item.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. الصيغة العامة (Syntax) مع دعم التظليل المباشر */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h4 className="text-xs font-bold text-emerald-400 mb-3 flex items-center gap-2">
          <FileCode className="w-4 h-4" />
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

      {/* 6. المثال العملي البسيط مع تعليق على كل سطر وملاحظات وتظليلات تفاعلية */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-200 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          6. مثال عملي بسيط (مع تعليق عربي فوق كل سطر كود):
        </h4>
        <CodeBlock 
          code={subtopic.simpleCode} 
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
          <Terminal className="w-4 h-4 text-indigo-400" />
          7. مثال عملي متقدم وتطبيقي (مع تعليقات كاملة):
        </h4>
        <CodeBlock 
          code={subtopic.advancedCode} 
          title={`تطبيق عملي متقدم: ${subtopic.title}`} 
          language="javascript" 
          subtopicId={subtopic.id}
          highlights={lessonHighlights}
          onHighlightClick={handleHighlightClick}
        />
      </div>

      {/* المعاينة المباشرة للكود المتقدم */}
      {subtopic.advancedCode && (
        <LiveCodePreview initialCode={subtopic.advancedCode} title={`المعاينة المباشرة لتطبيق: ${subtopic.title}`} />
      )}

      {/* 8. شرح المخرجات */}
      {subtopic.outputExplanation && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h4 className="text-xs font-bold text-cyan-400 mb-2 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            8. شرح المخرجات: ماذا يرى المستخدم ولماذا؟ (Output Explanation):
          </h4>
          <p 
            className={`text-slate-300 font-sans ${currentLeadingClass}`}
            style={{ fontSize: `${readingFontSize}px` }}
          >
            {renderHighlightedContent(subtopic.outputExplanation)}
          </p>
        </div>
      )}

      {/* 9. الأخطاء الشائعة وحلولها */}
      {subtopic.commonMistakes && subtopic.commonMistakes.length > 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
          <h4 className="text-xs font-bold text-red-400 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            9. أخطاء شائعة يقع فيها المبتدئون وكيف تتجنبها (Common Mistakes):
          </h4>

          {subtopic.commonMistakes.map((m, idx) => (
            <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="text-xs text-red-300 flex items-start gap-1.5">
                <span className="font-bold text-red-500">❌ الخطأ:</span>
                <span className="font-mono">{m.wrong}</span>
              </div>
              <div className="text-xs text-emerald-300 flex items-start gap-1.5">
                <span className="font-bold text-emerald-400">✓ الصواب:</span>
                <span className="font-mono">{m.right}</span>
              </div>
              <div className="text-[11px] text-slate-400 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="font-semibold text-slate-300">💡 السبب المعماري: </span>
                {renderHighlightedContent(m.reason)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 10. نصائح ذهبية للمحترفين */}
      {subtopic.bestPractices && subtopic.bestPractices.length > 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
          <h4 className="text-xs font-bold text-amber-400 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            10. نصائح ذهبية وأفضل الممارسات للمحترفين (Best Practices):
          </h4>

          <ul className="space-y-2.5">
            {subtopic.bestPractices.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed bg-slate-950/50 p-3 rounded-xl border border-slate-850">
                <span className="text-amber-400 font-bold shrink-0">⭐</span>
                <span>{renderHighlightedContent(tip)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 11. بطاقة الإنفوجرافيك التفاعلية الشاملة القابلة للتنزيل والمعاينة مع دعم التظليلات */}
      <InfographicCard 
        subtopic={subtopic} 
        onOpenGallery={onOpenInfographicGallery} 
        highlights={lessonHighlights}
        onHighlightClick={handleHighlightClick}
      />

      {/* بطاقة الاحتفال بإتمام قراءة محتوى الدرس عند التمرير لنهايته */}
      {scrollProgress >= 95 && (
        <div className="bg-gradient-to-r from-emerald-950/70 via-slate-900 to-cyan-950/70 border border-emerald-500/50 rounded-2xl p-5 text-center shadow-xl animate-slideUp space-y-3">
          <div className="flex items-center justify-center gap-2 text-emerald-300 text-sm font-bold">
            <Award className="w-5 h-5 text-amber-400" />
            <span>🎉 رائع! لقد أتممت قراءة محاور هذا الدرس بالكامل بنسبة 100%</span>
          </div>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">
            اختبر فهمك السريع عبر الاختبار الذكي، أو ميز الدرس كمكتمل وانتقل مباشرة للمحطة التالية!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <button
              onClick={() => setIsAiQuizOpen(true)}
              className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer shadow-md"
            >
              <Target className="w-4 h-4 text-amber-300" />
              <span>خوض الاختبار الذكي (3 أسئلة)</span>
            </button>

            {!isCompleted && (
              <button
                onClick={() => {
                  onToggleComplete(subtopic.id);
                  showToast("تم إتقان الدرس وتسجيل الإنجاز! 🌟", "success");
                  if (hasNext && onNext) onNext();
                }}
                className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer shadow-md"
              >
                <Check className="w-4 h-4 font-black" />
                <span>تحديد كمكتمل والمتابعة للدرس التالي</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* 12. شريط التنقل السفلي بين الدروس (السابق / التالي / المعلم الذكي) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all w-full sm:w-auto justify-center cursor-pointer ${
            hasPrev 
              ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700' 
              : 'bg-slate-900 text-slate-600 border border-slate-800 opacity-50 cursor-not-allowed'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
          <span>الدرس السابق</span>
        </button>

        <button
          onClick={onOpenTutor}
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg transition-all w-full sm:w-auto justify-center cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>اسأل المعلم الذكي عن هذا الدرس</span>
        </button>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold transition-all w-full sm:w-auto justify-center cursor-pointer ${
            hasNext 
              ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg' 
              : 'bg-slate-900 text-slate-600 border border-slate-800 opacity-50 cursor-not-allowed'
          }`}
        >
          <span>الدرس التالي</span>
          <ChevronLeft className="w-4 h-4" />
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
