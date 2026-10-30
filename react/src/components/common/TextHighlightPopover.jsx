// src/components/common/TextHighlightPopover.jsx
// أداة التظليل الذكية العائمة: تظهر تلقائياً عند تحديد أي نص أو كود لحفظه وتظليله فورياً في الصفحة
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { BookmarkPlus, Check, X, Tag, Sparkles, Code2, BookOpen, Send, Palette } from 'lucide-react';
import { addHighlight } from '../../utils/notesDb.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

const HIGHLIGHT_COLORS = [
  { id: 'amber', label: 'أصفر ذهبي', dot: 'bg-amber-400', ring: 'ring-amber-400', border: 'border-amber-400', text: 'text-amber-300' },
  { id: 'emerald', label: 'أخضر زمردي', dot: 'bg-emerald-400', ring: 'ring-emerald-400', border: 'border-emerald-400', text: 'text-emerald-300' },
  { id: 'cyan', label: 'سماوي نيون', dot: 'bg-cyan-400', ring: 'ring-cyan-400', border: 'border-cyan-400', text: 'text-cyan-300' },
  { id: 'purple', label: 'بنفسجي ملكي', dot: 'bg-purple-400', ring: 'ring-purple-400', border: 'border-purple-400', text: 'text-purple-300' }
];

export default function TextHighlightPopover({ 
  subtopicId = "general", 
  subtopicTitle = "درس تعليمي",
  onHighlightSaved 
}) {
  const showToast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 100, left: 100 });
  const [selectedText, setSelectedText] = useState("");
  const [snippetType, setSnippetType] = useState("explanation"); // "explanation" | "code"
  const [selectedColor, setSelectedColor] = useState("amber");
  const [customNote, setCustomNote] = useState("");
  const [isSaving, setIsSaving] = useState(false);

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
        const isCode = !!parentElement.closest('pre, code, [data-code-block="true"]') || parentElement.classList?.contains('font-mono');
        setSnippetType(isCode ? "code" : "explanation");

        try {
          if (selection.rangeCount === 0) return;
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();

          if (rect.width === 0 && rect.height === 0) return;

          const popoverWidth = 330;
          const popoverHeight = 240;

          // التموضع الأفقي المتناسق
          let left = rect.left + (rect.width / 2) - (popoverWidth / 2);
          left = Math.max(16, Math.min(left, window.innerWidth - popoverWidth - 16));

          // التموضع الرأسي: فوق التحديد إن أمكن، وإلا أسفل التحديد
          let top = rect.top - popoverHeight - 12;
          if (top < 75) {
            // مساحة غير كافية بالأعلى، ضعه أسفل التحديد
            top = rect.bottom + 12;
          }
          // حصر الارتفاع ليبقى دائماً داخل مساحة الشاشة المرئية 100%
          top = Math.max(75, Math.min(top, window.innerHeight - popoverHeight - 16));

          setPosition({ top, left });
          setSelectedText(text);
          setCustomNote("");
          setIsOpen(true);
        } catch (err) {
          console.error(err);
        }
      }, 60);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleMouseDownOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        // إذا ضغط المستخدم خارج البوب أوفر، نغلقه
        setIsOpen(false);
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
  }, [isOpen]);

  // حفظ التظليل (يدعم الحفظ الفوري بلون محدد أو حفظ الملاحظة)
  const saveHighlightWithColor = async (colorToUse, noteToUse = "") => {
    if (!selectedText.trim() || isSaving) return;

    setIsSaving(true);
    try {
      const newHighlight = await addHighlight({
        subtopicId,
        subtopicTitle,
        text: selectedText,
        type: snippetType,
        color: colorToUse || selectedColor,
        note: noteToUse || customNote
      });

      showToast(`تم تظليل النص بنجاح (${colorToUse === 'amber' ? 'أصفر' : colorToUse === 'emerald' ? 'أخضر' : colorToUse === 'cyan' ? 'سماوي' : 'بنفسجي'}) وحفظه في IndexedDB! 🖍️`, "success");
      
      setIsOpen(false);
      setSelectedText("");
      setCustomNote("");
      
      if (window.getSelection) {
        window.getSelection().removeAllRanges();
      }
      
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

  const handleClose = () => {
    setIsOpen(false);
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    }
  };

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div 
      ref={popoverRef}
      style={{ 
        position: 'fixed', 
        top: `${position.top}px`, 
        left: `${position.left}px`,
        zIndex: 999999
      }}
      className="w-[330px] bg-slate-900/95 border border-cyan-500/60 rounded-2xl shadow-2xl p-4 space-y-3 animate-fadeIn select-none text-slate-100 backdrop-blur-md"
      dir="rtl"
    >
      {/* رأس الأداة: نوع التظليل وزر الإغلاق */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center gap-1.5 text-xs font-bold text-white">
          <BookmarkPlus className="w-4 h-4 text-cyan-400" />
          <span>تظليل النص وحفظه</span>
        </div>

        <div className="flex items-center gap-1.5">
          {/* شارة نوع المقتطف (كود أم شرح) */}
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1 ${
            snippetType === 'code' 
              ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' 
              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
          }`}>
            {snippetType === 'code' ? <Code2 className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
            <span>{snippetType === 'code' ? 'كود' : 'شرح'}</span>
          </span>

          <button 
            onClick={handleClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            title="إغلاق"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* معاينة النص المحدد */}
      <div className="bg-slate-950/80 rounded-xl p-2.5 border border-slate-800/80 text-[11px] text-slate-300 max-h-16 overflow-y-auto font-sans leading-relaxed">
        <blockquote className="italic border-r-2 border-cyan-500 pr-2">
          "{selectedText.length > 110 ? selectedText.substring(0, 110) + '...' : selectedText}"
        </blockquote>
      </div>

      {/* شريط التظليل السريع بنقرة واحدة (One-Click Quick Color Highlights) */}
      <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800 space-y-1.5">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-300 font-semibold flex items-center gap-1">
            <Palette className="w-3 h-3 text-cyan-400" />
            تظليل فوري بلون:
          </span>
          <span className="text-[10px] text-slate-500">انقر لتظليل وحفظ فوري</span>
        </div>
        
        <div className="grid grid-cols-4 gap-2 pt-0.5">
          {HIGHLIGHT_COLORS.map(c => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setSelectedColor(c.id);
                saveHighlightWithColor(c.id, customNote);
              }}
              disabled={isSaving}
              className={`flex flex-col items-center justify-center p-1.5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer group ${
                selectedColor === c.id ? `ring-2 ${c.ring} border-transparent` : ''
              }`}
              title={`تظليل فوري بلون ${c.label}`}
            >
              <span className={`w-4 h-4 rounded-full ${c.dot} shadow-sm group-hover:scale-110 transition-transform mb-1`}></span>
              <span className="text-[10px] text-slate-400 group-hover:text-white font-sans">{c.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* حقل تدوين ملاحظة اختيارية وزر الحفظ المفصل */}
      <div className="space-y-2 pt-0.5">
        <div className="flex gap-1.5">
          <input
            type="text"
            value={customNote}
            onChange={(e) => setCustomNote(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && saveHighlightWithColor(selectedColor, customNote)}
            placeholder="تدوين ملاحظة اختيارية..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans"
          />
          <button
            onClick={() => saveHighlightWithColor(selectedColor, customNote)}
            disabled={isSaving}
            className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1 transition-all cursor-pointer shadow-md disabled:opacity-50"
            title="حفظ التظليل مع الملاحظة"
          >
            <BookmarkPlus className="w-3.5 h-3.5 text-slate-950" />
            <span>حفظ</span>
          </button>
        </div>
      </div>

    </div>,
    document.body
  );
}
