// src/components/common/HighlightingToolbar.jsx
import React, { useState, useEffect } from 'react';
import { Highlighter, StickyNote, X, Trash2 } from 'lucide-react';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function HighlightingToolbar({ subtopicId }) {
  const [position, setPosition] = useState(null);
  const [selectedText, setSelectedText] = useState('');
  const [noteModal, setNoteModal] = useState(false);
  const [noteText, setNoteText] = useState('');
  const { showToast } = useToast();

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        setPosition(null);
        return;
      }

      const text = selection.toString().trim();
      if (text.length < 2) {
        setPosition(null);
        return;
      }

      // التحقق من أن التحديد تم داخل منطقة الدرس
      const anchorNode = selection.anchorNode;
      const lessonContent = document.getElementById('lesson-content-container');
      if (!lessonContent || !lessonContent.contains(anchorNode)) {
        setPosition(null);
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setSelectedText(text);
      setPosition({
        top: rect.top - 50 + window.scrollY,
        left: rect.left + rect.width / 2 - 80 + window.scrollX
      });
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const applyHighlight = (color) => {
    try {
      const savedHighlights = JSON.parse(localStorage.getItem(`aspnet_hl_${subtopicId}`) || '[]');
      savedHighlights.push({ text: selectedText, color, time: Date.now() });
      localStorage.setItem(`aspnet_hl_${subtopicId}`, JSON.stringify(savedHighlights));

      showToast(`تم تظليل النص باللون المختار بنجاح! ✨`, 'success', 2000);
      setPosition(null);
      window.getSelection()?.removeAllRanges();
    } catch {
      showToast('تعذر حفظ التظليل', 'error');
    }
  };

  const handleSaveNote = () => {
    if (!noteText.trim()) return;
    try {
      const savedNotes = JSON.parse(localStorage.getItem(`aspnet_notes_${subtopicId}`) || '[]');
      savedNotes.push({ quote: selectedText, note: noteText.trim(), time: Date.now() });
      localStorage.setItem(`aspnet_notes_${subtopicId}`, JSON.stringify(savedNotes));

      showToast('تم حفظ ملاحظتك على هذا الجزء بنجاح! 📝', 'success');
      setNoteModal(false);
      setNoteText('');
      setPosition(null);
      window.getSelection()?.removeAllRanges();
    } catch {
      showToast('فشل حفظ الملاحظة', 'error');
    }
  };

  return (
    <>
      {/* شريط الألوان العائم */}
      {position && (
        <div
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
          className="fixed z-50 flex items-center gap-1.5 p-1.5 rounded-full bg-[#0a0e24] border border-purple-500/40 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-90 duration-150"
        >
          {/* أصفر نيون */}
          <button
            onClick={() => applyHighlight('yellow')}
            className="w-6 h-6 rounded-full bg-yellow-400 hover:scale-110 transition-transform shadow-md shadow-yellow-400/30 cursor-pointer"
            title="تظليل أصفر للمفاهيم الأساسية"
          />
          {/* أخضر زمردي */}
          <button
            onClick={() => applyHighlight('emerald')}
            className="w-6 h-6 rounded-full bg-emerald-400 hover:scale-110 transition-transform shadow-md shadow-emerald-400/30 cursor-pointer"
            title="تظليل أخضر لأفضل الممارسات"
          />
          {/* سماوي سايبر */}
          <button
            onClick={() => applyHighlight('cyan')}
            className="w-6 h-6 rounded-full bg-cyan-400 hover:scale-110 transition-transform shadow-md shadow-cyan-400/30 cursor-pointer"
            title="تظليل سماوي للتنبيهات والخطوات"
          />
          {/* وردي قرمزي */}
          <button
            onClick={() => applyHighlight('rose')}
            className="w-6 h-6 rounded-full bg-rose-400 hover:scale-110 transition-transform shadow-md shadow-rose-400/30 cursor-pointer"
            title="تظليل وردي للأخطاء والمحاذير"
          />

          <div className="w-[1px] h-4 bg-purple-500/30 mx-1" />

          {/* زر إضافة ملاحظة */}
          <button
            onClick={() => setNoteModal(true)}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-purple-900/40 transition-colors cursor-pointer"
            title="إضافة ملاحظة على هذا النص"
          >
            <StickyNote className="w-4 h-4 text-purple-400" />
          </button>
        </div>
      )}

      {/* نافذة كتابة الملاحظة */}
      {noteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" dir="rtl">
          <div className="bg-[#0b0f24] border border-purple-500/30 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setNoteModal(false)}
              className="absolute top-4 left-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <StickyNote className="w-4 h-4 text-purple-400" />
              <span>إضافة ملاحظة على النص المحدد:</span>
            </h3>

            <div className="p-3 rounded-xl bg-[#080b18] border border-purple-500/15 text-xs text-slate-300 mb-4 line-clamp-3 italic">
              "{selectedText}"
            </div>

            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="اكتب ملاحظتك الشخصية هنا لتتذكرها لاحقاً..."
              rows={4}
              className="w-full bg-[#080b18] border border-purple-500/20 rounded-xl p-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 font-sans resize-none"
              autoFocus
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setNoteModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
              >
                إلغاء
              </button>
              <button
                onClick={handleSaveNote}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/30"
              >
                حفظ الملاحظة
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
