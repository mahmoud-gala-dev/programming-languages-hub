// src/components/presentation/PresentationModeModal.jsx
// نظام عرض الشرائح التقديمية التفاعلي بنمط PowerPoint (PPT Slideshow Mode)
// يدعم: ملء الشاشة الفعلي (React Portal)، التحكم الكامل بحجم الخط، التباعد بين الأسطر، التشغيل التلقائي، واختصارات لوحة المفاتيح
import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  HelpCircle, 
  Terminal, 
  AlertTriangle, 
  Lightbulb, 
  Languages, 
  FileCode,
  Play,
  Pause,
  Download,
  Type,
  AlignJustify,
  RotateCcw,
  Film
} from 'lucide-react';
import CodeBlock from '../lesson/CodeBlock.jsx';
import InfographicCard from '../infographic/InfographicCard.jsx';
import LessonMotionPlayer from '../motion/LessonMotionPlayer.jsx';
import { exportLessonToPptx } from '../../utils/exportPptx.js';

export default function PresentationModeModal({ subtopic, isOpen, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isExportingPptx, setIsExportingPptx] = useState(false);

  // تفضيلات حجم الخط في الشرائح مع الحفظ في LocalStorage
  const [slideFontSize, setSlideFontSize] = useState(() => {
    try {
      const saved = localStorage.getItem("react_roadmap_ppt_font_size");
      return saved ? Number(saved) : 17;
    } catch {
      return 17;
    }
  });

  // تفضيلات التباعد بين الأسطر مع الحفظ في LocalStorage
  const [lineSpacing, setLineSpacing] = useState(() => {
    try {
      const saved = localStorage.getItem("react_roadmap_ppt_line_spacing");
      return saved || "normal";
    } catch {
      return "normal";
    }
  });

  // حفظ التفضيلات تلقائياً
  useEffect(() => {
    try {
      localStorage.setItem("react_roadmap_ppt_font_size", String(slideFontSize));
    } catch (e) {
      console.error(e);
    }
  }, [slideFontSize]);

  useEffect(() => {
    try {
      localStorage.setItem("react_roadmap_ppt_line_spacing", lineSpacing);
    } catch (e) {
      console.error(e);
    }
  }, [lineSpacing]);

  // إعادة ضبط الشريحة الأولى عند فتح نافذة العرض
  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
      setIsAutoPlaying(false);
    }
  }, [isOpen]);

  // خرائط قيم التباعد بين الأسطر (Line-Height)
  const lineSpacingValues = {
    compact: 1.45,
    normal: 1.75,
    relaxed: 2.1,
    loose: 2.5
  };

  const currentLineHeight = lineSpacingValues[lineSpacing] || 1.75;

  // دالة موحدة لتوليد خصائص النص مع الحجم والتباعد الديناميكي
  const getTextStyle = (sizeVariant = 'normal') => {
    const sizeMap = {
      xs: Math.max(slideFontSize - 5, 11),
      sm: Math.max(slideFontSize - 3, 12),
      normal: slideFontSize,
      lg: slideFontSize + 4,
      xl: slideFontSize + 9
    };

    return {
      fontSize: `${sizeMap[sizeVariant] || slideFontSize}px`,
      lineHeight: currentLineHeight
    };
  };

  // تعريف محتوى الشرائح السبع للدرس (مع التحقق الآمن في حال غياب subtopic)
  const safeSubtopic = subtopic || {};
  const slides = [
    // شريحة 1: الغلاف والترويسة والمصطلح الإنجليزي
    {
      id: 'intro',
      title: 'بطاقة المفهوم والمصطلحات',
      badge: `درس ${safeSubtopic.id}`,
      render: () => (
        <div className="flex flex-col items-center justify-center text-center h-full max-w-3xl mx-auto space-y-6 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono text-sm font-bold">
            <span>⚛️ خريطة طريق React.js الاحترافية</span>
            <span>•</span>
            <span>الدرس {safeSubtopic.id}</span>
          </div>

          <h1 
            className="font-black text-white leading-tight font-sans" 
            style={{ fontSize: `${slideFontSize + 14}px`, lineHeight: 1.3 }}
          >
            {safeSubtopic.title}
          </h1>

          {safeSubtopic.technicalTerm && (
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-5 shadow-2xl max-w-xl w-full">
              <span className="text-xs text-slate-400 block mb-1">المصطلح التقني بالإنجليزية:</span>
              <div 
                className="font-bold font-mono text-cyan-400 mb-2" 
                dir="ltr"
                style={{ fontSize: `${slideFontSize + 6}px` }}
              >
                {safeSubtopic.technicalTerm.english}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                <span 
                  className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30"
                  style={getTextStyle('sm')}
                >
                  النطق الصوتي: {safeSubtopic.technicalTerm.pronunciation}
                </span>
                <span 
                  className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30"
                  style={getTextStyle('sm')}
                >
                  المعنى: {safeSubtopic.technicalTerm.arabicMeaning}
                </span>
              </div>
            </div>
          )}

          <p className="text-xs text-slate-400 font-sans" style={getTextStyle('xs')}>
            اضغط على <kbd className="bg-slate-800 px-2 py-0.5 rounded text-cyan-300 font-mono">مسافة</kbd> أو <kbd className="bg-slate-800 px-2 py-0.5 rounded text-cyan-300 font-mono">→</kbd> للتنقل، أو <kbd className="bg-slate-800 px-2 py-0.5 rounded text-cyan-300 font-mono">+</kbd> / <kbd className="bg-slate-800 px-2 py-0.5 rounded text-cyan-300 font-mono">-</kbd> للتحكم بالخط
          </p>
        </div>
      )
    },

    // شريحة 2: التعريف المبسط والتشبيه الواقعي
    {
      id: 'concept',
      title: 'المفهوم التأسيسي والتشبيه الواقعي',
      badge: 'الجوهر المعماري',
      render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center max-w-4xl mx-auto animate-fadeIn">
          {/* التعريف */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="size-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl font-bold">
              📖
            </div>
            <h3 className="font-bold text-cyan-300 text-balance" style={{ fontSize: `${slideFontSize + 3}px` }}>
              1. ما هو هذا المفهوم من الصفر؟
            </h3>
            <p className="text-slate-200 font-sans text-pretty" style={getTextStyle('normal')}>
              {safeSubtopic.definition}
            </p>
          </div>

          {/* التشبيه */}
          <div className="bg-amber-950/20 border-r-4 border-amber-500 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="size-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Sparkles className="size-6" />
            </div>
            <h3 className="font-bold text-amber-300 text-balance" style={{ fontSize: `${slideFontSize + 3}px` }}>
              2. التشبيه من الحياة اليومية
            </h3>
            <p className="text-amber-100/90 font-sans text-pretty" style={getTextStyle('normal')}>
              {safeSubtopic.analogy}
            </p>
          </div>
        </div>
      )
    },

    // شريحة 3: لماذا نحتاجه وما المشكلة التي يحلها
    {
      id: 'why',
      title: 'لماذا نحتاجه؟ وما المشكلة التي يحلها؟',
      badge: 'الأهمية الهندسية',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full max-w-3xl mx-auto space-y-6 text-center animate-fadeIn">
          <div className="size-16 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-2">
            <HelpCircle className="size-8" />
          </div>

          <h2 className="font-black text-white font-sans text-balance" style={{ fontSize: `${slideFontSize + 8}px` }}>
            لماذا ابتكر مطورو React هذا المفهوم؟
          </h2>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-start">
            <p className="text-slate-200 font-medium font-sans text-pretty" style={getTextStyle('normal')}>
              {safeSubtopic.why}
            </p>
          </div>
        </div>
      )
    },

    // شريحة 4: الصيغة العامة والمثال المبسط
    {
      id: 'simple-code',
      title: 'الصيغة العامة والمثال العملي المبسط',
      badge: 'الكود الأساسي',
      render: () => (
        <div className="flex flex-col h-full max-w-4xl mx-auto space-y-4 animate-fadeIn overflow-y-auto">
          {safeSubtopic.syntax && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <span className="text-xs font-bold text-emerald-400 block mb-1 flex items-center gap-1.5">
                <FileCode className="size-4" /> الصيغة القياسية (Syntax):
              </span>
              <pre 
                className="text-emerald-300 font-mono overflow-x-auto whitespace-pre-wrap" 
                dir="ltr"
                style={getTextStyle('sm')}
              >
                {safeSubtopic.syntax}
              </pre>
            </div>
          )}

          <div className="flex-1">
            <span className="text-xs font-bold text-slate-300 block mb-1 flex items-center gap-1.5">
              <Terminal className="size-4 text-cyan-400" /> كود مبسط مع تعليق على كل سطر:
            </span>
            <CodeBlock code={safeSubtopic.simpleCode} title={`كود مبسط: ${safeSubtopic.title}`} language="javascript" />
          </div>
        </div>
      )
    },

    // شريحة 5: المثال العملي المتقدم وتفسير المخرجات
    {
      id: 'advanced-code',
      title: 'التطبيق العملي المتقدم وشرح المخرجات',
      badge: 'التطبيق الاحترافي',
      render: () => (
        <div className="flex flex-col h-full max-w-4xl mx-auto space-y-4 animate-fadeIn overflow-y-auto">
          <div className="flex-1">
            <span className="text-xs font-bold text-slate-300 block mb-1 flex items-center gap-1.5">
              <Terminal className="size-4 text-indigo-400" /> التطبيق العملي المتقدم:
            </span>
            <CodeBlock code={safeSubtopic.advancedCode} title={`تطبيق متقدم: ${safeSubtopic.title}`} language="javascript" />
          </div>

          {safeSubtopic.outputExplanation && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <span className="text-xs font-bold text-cyan-400 block mb-1">
                👁️ ماذا يرى المستخدم في الشاشة ولماذا؟
              </span>
              <p className="text-slate-300 font-sans" style={getTextStyle('normal')}>
                {safeSubtopic.outputExplanation}
              </p>
            </div>
          )}
        </div>
      )
    },

    // شريحة 6: الأخطاء الشائعة وأفضل الممارسات
    {
      id: 'tips',
      title: 'الأخطاء الشائعة وأفضل الممارسات الذهبية',
      badge: 'نصائح الخبراء',
      render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full max-w-4xl mx-auto items-start animate-fadeIn overflow-y-auto">
          {/* الأخطاء الشائعة */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 space-y-3">
            <h4 className="text-sm font-bold text-rose-400 flex items-center gap-2 border-b border-slate-800 pb-2">
              <AlertTriangle className="size-4" /> احذر هذه الأخطاء:
            </h4>
            {safeSubtopic.commonMistakes && safeSubtopic.commonMistakes.length > 0 ? (
              safeSubtopic.commonMistakes.map((m, idx) => (
                <div key={idx} className="bg-slate-950/80 border border-slate-850 rounded-xl p-3 space-y-1.5">
                  <div className="text-rose-300 font-mono" style={getTextStyle('sm')}>❌ {m.wrong}</div>
                  <div className="text-emerald-300 font-mono" style={getTextStyle('sm')}>✓ {m.right}</div>
                  <div className="text-slate-400 pt-1 border-t border-slate-900 font-sans" style={getTextStyle('xs')}>
                    {m.reason}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-400">لا توجد أخطاء شائعة مسجلة لهذا المفهوم.</p>
            )}
          </div>

          {/* أفضل الممارسات */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 space-y-3">
            <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2 border-b border-slate-800 pb-2">
              <Lightbulb className="size-4" /> نصائح ذهبية للمحترفين:
            </h4>
            {safeSubtopic.bestPractices && safeSubtopic.bestPractices.length > 0 ? (
              <ul className="space-y-2.5">
                {safeSubtopic.bestPractices.map((tip, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-2 text-slate-200 bg-slate-950/50 p-2.5 rounded-lg border border-slate-850 font-sans"
                    style={getTextStyle('normal')}
                  >
                    <span className="text-amber-400 font-bold shrink-0">⭐</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-slate-400">احرص على كتابة كود نظيف وتسميات واضحة.</p>
            )}
          </div>
        </div>
      )
    },

    // شريحة 7: بطاقة الإنفوجرافيك التفاعلية
    {
      id: 'infographic',
      title: 'بطاقة الإنفوجرافيك التلخيصية الشاملة',
      badge: 'الملخص المرئي',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto space-y-4 animate-fadeIn overflow-y-auto">
          <div className="w-full">
            <InfographicCard subtopic={safeSubtopic} />
          </div>
        </div>
      )
    },

    // شريحة 8: المحاكاة الحركية وموشن جرافيك Remotion
    {
      id: 'motion-graphics',
      title: 'المحاكاة الحركية المعمارية (Remotion Motion Graphics)',
      badge: 'المحاكاة الحركية',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto space-y-3 animate-fadeIn overflow-y-auto w-full">
          <div className="w-full max-w-3xl">
            <LessonMotionPlayer subtopic={safeSubtopic} />
          </div>
        </div>
      )
    }
  ];

  // التحكم بالتنقل
  const handleNext = useCallback(() => {
    setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  // اختصارات لوحة المفاتيح
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        handlePrev();
      } else if (e.key.toLowerCase() === "f") {
        toggleFullscreen();
      } else if (e.key === "+" || e.key === "=") {
        setSlideFontSize(prev => Math.min(prev + 1, 28));
      } else if (e.key === "-") {
        setSlideFontSize(prev => Math.max(prev - 1, 13));
      } else if (e.key === "0") {
        setSlideFontSize(17);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, onClose]);

  // التشغيل التلقائي للشرائح
  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentSlide(prev => {
          if (prev < slides.length - 1) return prev + 1;
          setIsAutoPlaying(false);
          return prev;
        });
      }, 7000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // حارس العرض: لا يتم رسم أي واجهة إذا كانت النافذة مغلقة أو لا يوجد درس
  if (!isOpen || !subtopic) return null;

  return typeof document !== 'undefined' ? createPortal(
    <div className="fixed inset-0 z-50 w-screen h-dvh min-h-dvh bg-[#070b13] text-slate-100 flex flex-col overflow-hidden animate-fadeIn select-none" dir="rtl">
      
      {/* شريط تقدم الشرائح العلوي */}
      <div className="w-full bg-slate-900 h-1.5 flex">
        <div 
          className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* الشريط العلوي للتحكم بعرض الشرائح وأدوات التنسيق */}
      <header className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-2.5 bg-slate-900/95 border-b border-slate-800 gap-2 shrink-0">
        
        {/* عنوان الشريحة والشارة */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-lg border border-cyan-500/30">
            PPT MODE • {slides[currentSlide].badge}
          </span>
          <h2 className="text-sm font-bold text-white font-sans text-balance truncate max-w-xs sm:max-w-md">
            {slides[currentSlide].title}
          </h2>
        </div>

        {/* أدوات التحكم بحجم الخط والتباعد بين الأسطر */}
        <div className="flex items-center gap-2 bg-slate-950/90 border border-slate-800 rounded-xl p-1 px-2.5">
          
          {/* التحكم بحجم الخط */}
          <div className="flex items-center gap-1 border-l border-slate-800 pl-2">
            <Type className="size-3.5 text-cyan-400" />
            <button
              onClick={() => setSlideFontSize(prev => Math.max(prev - 1, 13))}
              disabled={slideFontSize <= 13}
              aria-label="تصغير خط الشريحة"
              className="size-6 flex items-center justify-center text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded disabled:opacity-40 cursor-pointer transition-colors"
              title="تصغير خط الشريحة (A- أو -)"
            >
              A-
            </button>
            <span className="text-xs font-mono tabular-nums text-cyan-300 px-1 select-none min-w-[36px] text-center">
              {slideFontSize}px
            </span>
            <button
              onClick={() => setSlideFontSize(prev => Math.min(prev + 1, 28))}
              disabled={slideFontSize >= 28}
              aria-label="تكبير خط الشريحة"
              className="size-6 flex items-center justify-center text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded disabled:opacity-40 cursor-pointer transition-colors"
              title="تكبير خط الشريحة (A+ أو +)"
            >
              A+
            </button>
            {slideFontSize !== 17 && (
              <button
                onClick={() => setSlideFontSize(17)}
                aria-label="إعادة ضبط حجم الخط الافتراضي"
                className="p-1 text-slate-400 hover:text-amber-400 rounded transition-colors cursor-pointer"
                title="إعادة ضبط حجم الخط الافتراضي (17px)"
              >
                <RotateCcw className="size-3" />
              </button>
            )}
          </div>

          {/* التحكم في التباعد بين الأسطر */}
          <div className="flex items-center gap-1">
            <AlignJustify className="size-3.5 text-slate-400 ml-1 hidden sm:inline" />
            {[
              { key: 'compact', label: 'متقارب', title: 'تباعد أسطر متقارب (1.45)' },
              { key: 'normal', label: 'عادي', title: 'تباعد أسطر عادي (1.75)' },
              { key: 'relaxed', label: 'مريح', title: 'تباعد أسطر مريح (2.10)' },
              { key: 'loose', label: 'متباعد', title: 'تباعد أسطر واسع (2.50)' }
            ].map(item => (
              <button
                key={item.key}
                onClick={() => setLineSpacing(item.key)}
                className={`px-2 py-0.5 rounded text-[11px] font-sans transition-all cursor-pointer ${
                  lineSpacing === item.key 
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title={item.title}
              >
                {item.label}
              </button>
            ))}
          </div>

        </div>

        {/* أزرار الإجراءات (تصدير PPTX، تشغيل تلقائي، شاشة كاملة، إغلاق) */}
        <div className="flex items-center gap-2">
          {/* زر تحميل وتصدير ملف PowerPoint الحقيقي .pptx */}
          <button
            onClick={async () => {
              try {
                setIsExportingPptx(true);
                await exportLessonToPptx(safeSubtopic);
              } catch (err) {
                console.error("PPTX Export Error:", err);
              } finally {
                setIsExportingPptx(false);
              }
            }}
            disabled={isExportingPptx}
            aria-label="تنزيل عرض PowerPoint حقيقي لهذا الدرس"
            className="p-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold disabled:opacity-50"
            title="تنزيل عرض PowerPoint حقيقي (.pptx) لهذا الدرس بجودة 16:9"
          >
            <Download className="size-3.5" />
            <span className="hidden sm:inline">{isExportingPptx ? "جاري التجهيز..." : "تنزيل PPTX"}</span>
          </button>

          {/* زر التشغيل التلقائي */}
          <button
            onClick={() => setIsAutoPlaying(prev => !prev)}
            aria-label={isAutoPlaying ? "إيقاف التشغيل التلقائي للشرائح" : "بدء التشغيل التلقائي للشرائح"}
            className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              isAutoPlaying ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
            title="تشغيل تلقائي للشرائح كل 7 ثوانٍ"
          >
            {isAutoPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            <span className="hidden sm:inline">{isAutoPlaying ? "إيقاف مؤقت" : "تشغيل تلقائي"}</span>
          </button>

          {/* زر ملء الشاشة */}
          <button
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "الخروج من ملء الشاشة" : "عرض بملء الشاشة"}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors cursor-pointer"
            title="ملء الشاشة (F)"
          >
            {isFullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
          </button>

          {/* زر الخروج */}
          <button
            onClick={onClose}
            aria-label="إنهاء وإغلاق العرض التقديمي"
            className="p-2 bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white rounded-lg transition-colors cursor-pointer"
            title="إنهاء العرض (Esc)"
          >
            <X className="size-4" />
          </button>
        </div>
      </header>

      {/* مسرح الشريحة النشطة مع إمكانية التمرير السلس عند تكبير الخط */}
      <main className="flex-1 p-4 sm:p-8 lg:p-10 flex flex-col justify-center overflow-y-auto relative">
        <div className="w-full h-full max-h-[82vh] flex flex-col justify-center">
          {slides[currentSlide].render()}
        </div>
      </main>

      {/* شريط التحكم السفلي والتنقل ومعلومات التنسيق */}
      <footer className="flex items-center justify-between px-6 py-3.5 bg-slate-900/90 border-t border-slate-800">
        <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
          <div>
            شريحة <span className="text-cyan-400 font-bold tabular-nums">{currentSlide + 1}</span> من <span className="text-white tabular-nums">{slides.length}</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-500 font-sans border-r border-slate-800 pr-3">
            <span>خط الشريحة: <strong className="text-slate-300 tabular-nums">{slideFontSize}px</strong></span>
            <span>•</span>
            <span>التباعد: <strong className="text-slate-300">{lineSpacing === 'compact' ? 'متقارب' : lineSpacing === 'normal' ? 'عادي' : lineSpacing === 'relaxed' ? 'مريح' : 'متباعد'}</strong></span>
            <span>•</span>
            <span>اختصارات: <kbd className="bg-slate-800 text-slate-300 px-1 rounded text-[10px]">+</kbd>/<kbd className="bg-slate-800 text-slate-300 px-1 rounded text-[10px]">-</kbd> للخط</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            aria-label="الانتقال إلى الشريحة السابقة"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md"
          >
            <ChevronRight className="size-4" />
            <span>السابق</span>
          </button>

          {/* مؤشرات الشرائح */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`الانتقال إلى شريحة ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                title={`الانتقال إلى شريحة ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            aria-label="الانتقال إلى الشريحة التالية"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md"
          >
            <span>التالي</span>
            <ChevronLeft className="size-4" />
          </button>
        </div>
      </footer>
    </div>,
    document.body
  ) : null;
}
