// src/components/common/TextHighlightPopover.jsx
// أداة التظليل الذكية العائمة المطورة (Pro Highlight & Study Studio)
// تدعم: 6 ألوان نيون دلالية، شرح ذكاء اصطناعي فوري (Gemini AI)، قراءة صوتية TTS، نسخ فوري، وسوم تصنيفية، وملاحظات مسبقة
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  BookmarkPlus, 
  Check, 
  X, 
  Tag, 
  Sparkles, 
  Code2, 
  BookOpen, 
  Send, 
  Palette, 
  Copy, 
  Volume2, 
  VolumeX, 
  Search, 
  Bot, 
  ExternalLink, 
  Loader2, 
  ListOrdered,
  ChevronDown,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  Zap,
  Bookmark
} from 'lucide-react';
import { addHighlight } from '../../utils/notesDb.js';
import { askGeminiTutor } from '../../api/gemini.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

// لوحة الألوان الـ 6 الموسعة مع دلالاتها التعليمية واختصاراتها
const HIGHLIGHT_COLORS = [
  { id: 'amber', label: 'أصفر ذهبي', shortcut: '1', meaning: 'مفهوم جوهري', dot: 'bg-amber-400', ring: 'ring-amber-400', border: 'border-amber-400', text: 'text-amber-300' },
  { id: 'emerald', label: 'أخضر زمردي', shortcut: '2', meaning: 'ممارسة صحيحة', dot: 'bg-emerald-400', ring: 'ring-emerald-400', border: 'border-emerald-400', text: 'text-emerald-300' },
  { id: 'cyan', label: 'سماوي نيون', shortcut: '3', meaning: 'مصطلح / API', dot: 'bg-cyan-400', ring: 'ring-cyan-400', border: 'border-cyan-400', text: 'text-cyan-300' },
  { id: 'purple', label: 'بنفسجي ملكي', shortcut: '4', meaning: 'React & Hooks', dot: 'bg-purple-400', ring: 'ring-purple-400', border: 'border-purple-400', text: 'text-purple-300' },
  { id: 'rose', label: 'وردي ناري', shortcut: '5', meaning: 'تحذير ومحذور', dot: 'bg-rose-500', ring: 'ring-rose-500', border: 'border-rose-500', text: 'text-rose-300' },
  { id: 'orange', label: 'برتقالي شمسي', shortcut: '6', meaning: 'هام للاختبار', dot: 'bg-orange-500', ring: 'ring-orange-500', border: 'border-orange-500', text: 'text-orange-300' }
];

// الوسوم والتصنيفات الجاهزة للملاحظة
const QUICK_TAGS = [
  { id: 'concept', label: 'مفهوم جوهري', icon: '💡' },
  { id: 'gotcha', label: 'تنبيه ومحذور', icon: '⚠️' },
  { id: 'idea', label: 'تطبيق عملي', icon: '🚀' },
  { id: 'question', label: 'سؤال للمراجعة', icon: '❓' },
  { id: 'exam', label: 'هام للاختبار', icon: '⭐' }
];

// قوالب الملاحظات السريعة الجاهزة للنقر
const NOTE_PRESETS = [
  "مهم جداً في المقابلات التقنية 💼",
  "أحتاج تطبيقه عملياً لاحقاً 🔄",
  "قاعدة برمجية أساسية يجب حفظها 📌",
  "سؤال متكرر للاختبار ❓"
];

export default function TextHighlightPopover({ 
  subtopicId = "general", 
  subtopicTitle = "درس تعليمي",
  onHighlightSaved,
  onOpenTutor = null,
  onOpenHighlights = null
}) {
  const showToast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 100, left: 100, arrowLeft: 160 });
  const [selectedText, setSelectedText] = useState("");
  const [snippetType, setSnippetType] = useState("explanation"); // "explanation" | "code"
  const [selectedColor, setSelectedColor] = useState("amber");
  const [selectedTag, setSelectedTag] = useState("concept");
  const [customNote, setCustomNote] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  
  // ميزات الذكاء الاصطناعي المباشرة
  const [isAiExplaining, setIsAiExplaining] = useState(false);
  const [aiExplanation, setAiExplanation] = useState(null);
  const [showAiCard, setShowAiCard] = useState(false);

  // ميزة القراءة الصوتية
  const [isSpeaking, setIsSpeaking] = useState(false);

  // حالة نسخ المقتطف
  const [isCopied, setIsCopied] = useState(false);

  const popoverRef = useRef(null);

  useEffect(() => {
    let timeoutId = null;

    const handleSelectionEnd = (e) => {
      // إذا كان النقر داخل الـ popover نفسه، نتجاهل أي تغيير
      if (popoverRef.current && popoverRef.current.contains(e.target)) {
        return;
      }

      // إضافة تأخير طفيف لضمان ثبات نطاق التحديد
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) {
          return;
        }

        const text = selection.toString().trim();
        // تجاهل التحديدات القصيرة جداً
        if (text.length < 2) {
          return;
        }

        // التحقق من أن التحديد يقع حصراً داخل الشرح والأكواد فقط
        const anchorNode = selection.anchorNode;
        const focusNode = selection.focusNode;
        const parentElement = anchorNode?.nodeType === Node.ELEMENT_NODE 
          ? anchorNode 
          : anchorNode?.parentElement;

        if (!parentElement) return;

        // 1. استبعاد التحديد في الشريط العلوي، القائمة الجانبية، الأزرار، حقول الإدخال، النوافذ المنبثقة، وشريط الأدوات
        if (
          parentElement.closest('header, nav, aside, button, a, input, textarea, select, [data-no-highlight], [role="dialog"], .swal2-container, .no-highlight')
        ) {
          return;
        }

        const focusParent = focusNode?.nodeType === Node.ELEMENT_NODE ? focusNode : focusNode?.parentElement;
        if (focusParent && focusParent.closest('header, nav, aside, button, a, input, textarea, select, [data-no-highlight], [role="dialog"]')) {
          return;
        }

        // 2. التحقق من أن التحديد يقع حصراً داخل الاسكريبت (الشرح التوضيحي أو الأكواد البرمجية فقط)
        const isScriptOrCode = parentElement.closest('[data-lesson-script="true"], .lesson-script-content, [data-code-block="true"], pre, code');
        if (!isScriptOrCode) {
          return;
        }

        // 3. التحقق مما إذا كان النص المحدد كوداً برمجياً
        const isCode = !!parentElement.closest('pre, code, [data-code-block="true"]') || 
          parentElement.classList?.contains('font-mono') ||
          /[{}[\]()<>;=]|=>|const|let|var|function|import|export/.test(text);
        
        setSnippetType(isCode ? "code" : "explanation");

        try {
          if (selection.rangeCount === 0) return;
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();

          if (rect.width === 0 && rect.height === 0) return;

          // اتساع البوب أوفر المتجاوب
          const isMobile = window.innerWidth < 640;
          const popoverWidth = isMobile ? Math.min(360, window.innerWidth - 24) : 410;
          const popoverHeight = 310;

          // التموضع الأفقي المتناسق وتفادي الخروج عن الشاشة
          let left = rect.left + (rect.width / 2) - (popoverWidth / 2);
          left = Math.max(12, Math.min(left, window.innerWidth - popoverWidth - 12));

          // التموضع الرأسي: فوق التحديد إن أمكن، وإلا أسفل التحديد
          let top = rect.top - popoverHeight - 12;
          if (top < 75) {
            // مساحة غير كافية بالأعلى، ضعه أسفل التحديد
            top = rect.bottom + 12;
          }
          // حصر الارتفاع ليبقى دائماً داخل مساحة الشاشة المرئية
          top = Math.max(75, Math.min(top, window.innerHeight - popoverHeight - 16));

          // حساب موضع سهم المؤشر بالنسبة للتحديد
          const arrowLeft = Math.max(20, Math.min(rect.left + (rect.width / 2) - left, popoverWidth - 20));

          setPosition({ top, left, arrowLeft });
          setSelectedText(text);
          setCustomNote("");
          setAiExplanation(null);
          setShowAiCard(false);
          setIsOpen(true);
        } catch (err) {
          console.error(err);
        }
      }, 70);
    };

    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        handleClose();
      } else if (e.key >= '1' && e.key <= '6' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        const colorObj = HIGHLIGHT_COLORS[Number(e.key) - 1];
        if (colorObj) {
          setSelectedColor(colorObj.id);
          saveHighlightWithColor(colorObj.id, customNote);
        }
      }
    };

    const handleMouseDownOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener('mouseup', handleSelectionEnd);
    document.addEventListener('touchend', handleSelectionEnd);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDownOutside);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mouseup', handleSelectionEnd);
      document.removeEventListener('touchend', handleSelectionEnd);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDownOutside);
    };
  }, [isOpen, customNote, selectedColor]);

  // حفظ التظليل (يدعم الحفظ الفوري بلون محدد أو حفظ الملاحظة)
  const saveHighlightWithColor = async (colorToUse, noteToUse = "") => {
    if (!selectedText.trim() || isSaving) return;

    setIsSaving(true);
    try {
      const colorObj = HIGHLIGHT_COLORS.find(c => c.id === colorToUse) || HIGHLIGHT_COLORS[0];
      const newHighlight = await addHighlight({
        subtopicId,
        subtopicTitle,
        text: selectedText,
        type: snippetType,
        color: colorToUse || selectedColor,
        note: (noteToUse || customNote).trim(),
        tag: selectedTag
      });

      showToast(`تم تظليل النص بنجاح (${colorObj.label}) وحفظه في مفكرتك! 🖍️`, "success");
      
      handleClose();
      
      if (onHighlightSaved) {
        onHighlightSaved(newHighlight);
      }
    } catch (err) {
      console.error(err);
      showToast("حدث خطأ أثناء حفظ التظليل", "error");
    } finally {
      setIsSaving(false);
    }
  };

  // نسخ النص المحدد للحافظة
  const handleCopy = () => {
    navigator.clipboard.writeText(selectedText);
    setIsCopied(true);
    showToast("تم نسخ المقتطف إلى الحافظة! 📋", "success");
    setTimeout(() => setIsCopied(false), 2000);
  };

  // ميزة القراءة الصوتية (Text-to-Speech)
  const handleToggleSpeech = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      showToast("المتصفح لا يدعم ميزة النطق الصوتي", "info");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(selectedText);
    const hasAr = /[\u0600-\u06FF]/.test(selectedText);
    utterance.lang = hasAr ? 'ar-SA' : 'en-US';
    utterance.rate = 0.95;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  // طلب شرح فوري ذكي من Gemini AI للمقتطف
  const handleRequestAiExplanation = async () => {
    if (isAiExplaining) return;
    setIsAiExplaining(true);
    setShowAiCard(true);

    try {
      const prompt = `اشرح هذا المقتطف (${snippetType === 'code' ? 'شفرة برمجية' : 'مفهوم نظري'}) المأخوذ من درس "${subtopicTitle}" في React.js في جملتين فقط بشكل عملي ومبسط جداً للمبتدئ:\n"${selectedText}"`;
      const result = await askGeminiTutor(prompt, subtopicTitle);
      setAiExplanation(result);
    } catch {
      setAiExplanation("يتطلب هذا المفهوم فهم سياق المكونات ودورة حياة التطبيق.");
    } finally {
      setIsAiExplaining(false);
    }
  };

  // إضافة شرح الذكاء الاصطناعي مباشرة إلى حقل الملاحظة
  const handleAppendAiToNote = () => {
    if (!aiExplanation) return;
    setCustomNote(prev => prev ? `${prev} - ${aiExplanation}` : aiExplanation);
    showToast("تمت إضافة الشرح إلى ملاحظتك! ✍️", "info");
  };

  // البحث السريع في جوجل أو توثيق MDN
  const handleSearchWeb = () => {
    const query = snippetType === 'code' ? `React ${selectedText} MDN` : `React.js ${selectedText}`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleClose = () => {
    if (isSpeaking && typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsOpen(false);
    setIsSpeaking(false);
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    }
  };

  if (!isOpen || typeof document === 'undefined') return null;

  // إحصائيات المقتطف المحدد
  const charCount = selectedText.length;
  const wordCount = selectedText.split(/\s+/).filter(Boolean).length;

  return createPortal(
    <div 
      ref={popoverRef}
      style={{ 
        position: 'fixed', 
        top: `${position.top}px`, 
        left: `${position.left}px`,
        zIndex: 999999
      }}
      className="w-[calc(100vw-24px)] sm:w-[410px] max-w-[430px] bg-slate-900/98 border border-cyan-500/70 rounded-3xl shadow-[0_20px_60px_-15px_rgba(6,182,212,0.35)] p-4 sm:p-5 space-y-3.5 animate-fadeIn select-none text-slate-100 backdrop-blur-xl transition-all"
      dir="rtl"
    >
      {/* 1. رأس استوديو التظليل المطور */}
      <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/90">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 shadow-md shadow-cyan-500/30">
            <BookmarkPlus className="w-4 h-4 text-slate-950 font-black" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-1.5 font-sans">
              استوديو تظليل المقتطفات
            </h4>
            <span className="text-[10px] text-slate-400 font-sans">
              {wordCount} {wordCount === 1 ? 'كلمة' : 'كلمات'} • {charCount} حرفاً
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* شارة نوع المقتطف */}
          <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 border ${
            snippetType === 'code' 
              ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' 
              : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
          }`}>
            {snippetType === 'code' ? <Code2 className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
            <span>{snippetType === 'code' ? 'شفرة برمجية' : 'شرح مفاهيمي'}</span>
          </span>

          {/* زر إغلاق الاستوديو */}
          <button 
            onClick={handleClose}
            className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            title="إغلاق (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. بطاقة معاينة النص مع أدوات التفاعل السريع (نسخ، قراءة صوتية، وبحث خارجي) */}
      <div className="bg-slate-950/90 rounded-2xl p-3 border border-slate-800 shadow-inner space-y-2">
        <div className="max-h-20 overflow-y-auto pr-1">
          <blockquote className={`text-xs leading-relaxed text-slate-200 border-r-2 border-cyan-400 pr-2.5 select-text ${
            snippetType === 'code' ? 'font-mono text-cyan-200' : 'font-sans'
          }`} dir={snippetType === 'code' ? 'ltr' : 'rtl'}>
            "{selectedText}"
          </blockquote>
        </div>

        {/* أزرار الإجراء السريع على المقتطف */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[11px]">
          <div className="flex items-center gap-1.5">
            {/* زر النسخ السريع */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="نسخ المقتطف إلى الحافظة"
            >
              {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-cyan-400" />}
              <span>{isCopied ? "تم النسخ" : "نسخ"}</span>
            </button>

            {/* زر القراءة الصوتية (TTS) */}
            <button
              onClick={handleToggleSpeech}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                isSpeaking 
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white'
              }`}
              title={isSpeaking ? "إيقاف القراءة الصوتية" : "استماع للمقتطف بصوت المتصفح"}
            >
              {isSpeaking ? <VolumeX className="w-3 h-3 text-rose-400" /> : <Volume2 className="w-3 h-3 text-amber-400" />}
              <span>{isSpeaking ? "إيقاف" : "نطق"}</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            {/* زر البحث على الويب / توثيق MDN */}
            <button
              onClick={handleSearchWeb}
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer text-[10px]"
              title="بحث عن هذا المصطلح في توثيق MDN وجوجل"
            >
              <ExternalLink className="w-3 h-3" />
              <span>بحث توثيق</span>
            </button>

            {/* زر شرح الذكاء الاصطناعي الفوري */}
            <button
              onClick={handleRequestAiExplanation}
              disabled={isAiExplaining}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gradient-to-r from-purple-600/30 to-indigo-600/30 hover:from-purple-600/50 hover:to-indigo-600/50 text-purple-200 border border-purple-500/30 transition-all cursor-pointer font-bold disabled:opacity-50"
              title="شرح مبسط فوري للمقتطف بواسطة Gemini AI"
            >
              {isAiExplaining ? <Loader2 className="w-3 h-3 animate-spin text-purple-300" /> : <Bot className="w-3 h-3 text-amber-300" />}
              <span>{isAiExplaining ? "جاري الشرح..." : "شرح AI ⚡"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. بطاقة شرح الذكاء الاصطناعي القابلة للفتح والطي */}
      {showAiCard && (
        <div className="bg-gradient-to-r from-purple-950/70 via-slate-900 to-indigo-950/70 border border-purple-500/40 rounded-2xl p-3 animate-slideDown space-y-2 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>شرح المعلم الذكي (Gemini AI):</span>
            </div>
            <button 
              onClick={() => setShowAiCard(false)}
              className="text-slate-500 hover:text-slate-300 text-xs cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="text-xs text-slate-200 leading-relaxed font-sans bg-slate-950/60 p-2.5 rounded-xl border border-purple-500/20">
            {isAiExplaining ? (
              <div className="flex items-center gap-2 py-1 text-purple-300">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>المعلم الذكي يحلل المقتطف الآن...</span>
              </div>
            ) : (
              aiExplanation
            )}
          </div>

          {!isAiExplaining && aiExplanation && (
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={handleAppendAiToNote}
                className="text-[11px] text-cyan-300 hover:text-cyan-200 flex items-center gap-1 font-bold cursor-pointer"
              >
                <span>➕ نسخ الشرح إلى حقل الملاحظة</span>
              </button>

              {onOpenTutor && (
                <button
                  onClick={() => {
                    handleClose();
                    onOpenTutor();
                  }}
                  className="text-[10px] text-purple-300 hover:text-purple-200 flex items-center gap-1 cursor-pointer"
                >
                  <span>متابعة النقاش في المعلم الذكي 💬</span>
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* 4. لوحة الألوان الستة الموسعة (One-Click Instant Highlighting) */}
      <div className="bg-slate-950/70 p-3 rounded-2xl border border-slate-800/90 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-200 font-bold flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-cyan-400" />
            اختر لون التظليل (حفظ فوري):
          </span>
          <span className="text-[10px] text-slate-500 font-mono">
            اختصارات (1-6)
          </span>
        </div>

        <div className="grid grid-cols-6 gap-1.5 pt-0.5">
          {HIGHLIGHT_COLORS.map(c => {
            const isSelected = selectedColor === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setSelectedColor(c.id);
                  saveHighlightWithColor(c.id, customNote);
                }}
                disabled={isSaving}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-2xl border transition-all cursor-pointer group relative ${
                  isSelected 
                    ? `bg-slate-800 border-cyan-400 shadow-md ring-2 ${c.ring}` 
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 hover:bg-slate-800'
                }`}
                title={`تظليل فوري بلون ${c.label} (${c.meaning}) - اضغط [${c.shortcut}]`}
              >
                <span className={`w-4 h-4 rounded-full ${c.dot} shadow-sm group-hover:scale-125 transition-transform mb-1`}></span>
                <span className="text-[9px] font-bold text-slate-300 group-hover:text-white font-sans text-center leading-tight truncate w-full">
                  {c.label.split(' ')[0]}
                </span>
                <span className="text-[8px] font-mono text-slate-500 mt-0.5">
                  [{c.shortcut}]
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. وسوم التصنيف الذكية للملاحظة (Quick Tag Selector) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none text-[11px]">
        <span className="text-slate-400 text-[10px] font-bold shrink-0">التصنيف:</span>
        {QUICK_TAGS.map(t => {
          const isActive = selectedTag === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setSelectedTag(t.id)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-[10px] font-bold transition-all cursor-pointer shrink-0 border ${
                isActive 
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm' 
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* 6. قوالب الملاحظات الجاهزة بنقرة واحدة */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>قوالب ملاحظات سريعة:</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {NOTE_PRESETS.map((preset, pIdx) => (
            <button
              key={pIdx}
              onClick={() => setCustomNote(preset)}
              className="text-[10px] bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 px-2 py-0.5 rounded-lg transition-colors cursor-pointer truncate max-w-[190px]"
              title={`إدراج: "${preset}"`}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      {/* 7. حقل تدوين ملاحظة مخصصة وزر الحفظ التفاعلي */}
      <div className="space-y-2 pt-1">
        <div className="flex gap-2">
          <input
            type="text"
            value={customNote}
            onChange={(e) => setCustomNote(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                saveHighlightWithColor(selectedColor, customNote);
              }
            }}
            placeholder="أضف ملاحظتك الهندسية هنا (اختياري)..."
            className="flex-1 bg-slate-950 border border-slate-700/80 rounded-2xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans shadow-inner"
          />

          <button
            onClick={() => saveHighlightWithColor(selectedColor, customNote)}
            disabled={isSaving}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black rounded-2xl text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-lg shadow-cyan-500/20 disabled:opacity-50 shrink-0"
            title="حفظ التظليل والملاحظة (Enter)"
          >
            <BookmarkPlus className="w-4 h-4 text-slate-950 font-bold" />
            <span>حفظ</span>
          </button>
        </div>

        {/* زر سفلي لعرض الملاحظات السابقة */}
        {onOpenHighlights && (
          <div className="flex justify-end pt-0.5">
            <button
              onClick={() => {
                handleClose();
                onOpenHighlights();
              }}
              className="text-[10px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer font-bold"
            >
              <Bookmark className="w-3 h-3" />
              <span>فتح دفتر التظليلات والملاحظات المحفوظة</span>
            </button>
          </div>
        )}
      </div>

    </div>,
    document.body
  );
}
