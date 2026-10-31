// src/components/common/SavedHighlightsModal.jsx
// نافذة استعراض وإدارة وتصدير كافة التظليلات والمقتطفات المحفوظة في قاعدة بيانات IndexedDB
// تدعم: التصفية باللون، التصفية بالنوع، التجميع حسب الدروس (Subtopic Grouping)، البحث الذكي،
// القراءة الصوتية TTS، النسخ، الحذف الآمن، وتصدير كامل البيانات بصيغة JSON
import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Bookmark, 
  Trash2, 
  Copy, 
  Check, 
  Download, 
  Search, 
  Code2, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Layers, 
  ListFilter,
  FolderOpen
} from 'lucide-react';
import { getAllHighlights, deleteHighlight, exportAllHighlightsAsJson } from '../../utils/notesDb.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export const COLOR_MAP = {
  amber: { 
    id: 'amber',
    name: 'Sunset Amber', 
    label: 'أصفر ذهبي', 
    hex: '#f59e0b', 
    border: 'border-r-4 border-amber-400', 
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30' 
  },
  emerald: { 
    id: 'emerald',
    name: 'Cyber Emerald', 
    label: 'أخضر زمردي', 
    hex: '#10b981', 
    border: 'border-r-4 border-emerald-400', 
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
  },
  cyan: { 
    id: 'cyan',
    name: 'Neon Cyan', 
    label: 'سماوي نيون', 
    hex: '#06b6d4', 
    border: 'border-r-4 border-cyan-400', 
    badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' 
  },
  purple: { 
    id: 'purple',
    name: 'Electric Purple', 
    label: 'بنفسجي ملكي', 
    hex: '#a855f7', 
    border: 'border-r-4 border-purple-400', 
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30' 
  },
  rose: { 
    id: 'rose',
    name: 'Laser Ruby', 
    label: 'وردي ناري', 
    hex: '#ef4444', 
    border: 'border-r-4 border-rose-500', 
    badge: 'bg-rose-500/20 text-rose-300 border-rose-500/30' 
  },
  ruby: { 
    id: 'rose',
    name: 'Laser Ruby', 
    label: 'وردي ناري', 
    hex: '#ef4444', 
    border: 'border-r-4 border-rose-500', 
    badge: 'bg-rose-500/20 text-rose-300 border-rose-500/30' 
  },
  orange: { 
    id: 'orange',
    name: 'Plasma Pink', 
    label: 'وردي بلازما', 
    hex: '#ec4899', 
    border: 'border-r-4 border-pink-500', 
    badge: 'bg-pink-500/20 text-pink-300 border-pink-500/30' 
  },
  pink: { 
    id: 'orange',
    name: 'Plasma Pink', 
    label: 'وردي بلازما', 
    hex: '#ec4899', 
    border: 'border-r-4 border-pink-500', 
    badge: 'bg-pink-500/20 text-pink-300 border-pink-500/30' 
  }
};

export default function SavedHighlightsModal({ isOpen, onClose, currentSubtopicId }) {
  const showToast = useToast();
  const [highlights, setHighlights] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all"); // "all" | "current" | "code" | "explanation"
  const [filterColor, setFilterColor] = useState("all");
  const [groupingMode, setGroupingMode] = useState("flat"); // "flat" | "grouped"
  const [copiedId, setCopiedId] = useState(null);
  const [speakingId, setSpeakingId] = useState(null);

  useEffect(() => {
    if (isOpen) {
      loadData();
    } else {
      stopSpeech();
    }
    return () => {
      stopSpeech();
    };
  }, [isOpen]);

  const stopSpeech = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    }
  };

  const loadData = async () => {
    try {
      const data = await getAllHighlights();
      // ترتيب تنازلي حسب الأحدث
      setHighlights(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    } catch (err) {
      console.error("فشل استرجاع التظليلات من IndexedDB:", err);
      setHighlights([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      // إيقاف أي قراءة صوتية نشطة فور حذف التظليل
      stopSpeech();
      await deleteHighlight(id);
      await loadData();
      showToast("تم حذف التظليل بنجاح", "info");
    } catch {
      showToast("تعذر حذف التظليل", "error");
    }
  };

  const handleCopyText = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast("تم نسخ المقتطف إلى الحافظة! 📋", "success");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleToggleTts = (id, text) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      showToast("المتصفح لا يدعم ميزة النطق الصوتي", "info");
      return;
    }

    if (speakingId === id) {
      stopSpeech();
      return;
    }

    stopSpeech();

    const utterance = new SpeechSynthesisUtterance(text);
    const hasAr = /[\u0600-\u06FF]/.test(text);
    utterance.lang = hasAr ? 'ar-SA' : 'en-US';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices?.() || [];
    if (hasAr) {
      const arVoice = voices.find(v => v.lang.startsWith('ar') || v.lang.includes('ar'));
      if (arVoice) utterance.voice = arVoice;
    } else {
      const enVoice = voices.find(v => v.lang.startsWith('en') || v.lang.includes('en'));
      if (enVoice) utterance.voice = enVoice;
    }

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    window.speechSynthesis.speak(utterance);
    setSpeakingId(id);
  };

  const handleExportJson = async () => {
    try {
      const json = await exportAllHighlightsAsJson();
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Nodejs_Roadmap_Highlights_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("تم تصدير كافة التظليلات كملف JSON بنجاح! 💾", "success");
    } catch {
      showToast("تعذر تصدير التظليلات", "error");
    }
  };

  // تطبيق التصفية والبحث
  const filteredHighlights = useMemo(() => {
    return highlights.filter(h => {
      // 1. تصفية النوع
      if (filterType === 'current' && h.subtopicId !== currentSubtopicId) return false;
      if (filterType === 'code' && h.type !== 'code') return false;
      if (filterType === 'explanation' && h.type !== 'explanation') return false;

      // 2. تصفية اللون
      if (filterColor !== 'all') {
        const itemColor = h.color;
        if (itemColor !== filterColor) {
          // التحقق من الأسماء البديلة (ruby/rose أو pink/orange)
          const mappedItem = COLOR_MAP[itemColor]?.id;
          const mappedFilter = COLOR_MAP[filterColor]?.id;
          if (mappedItem !== mappedFilter) return false;
        }
      }

      // 3. البحث بالكلمات
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchText = h.text?.toLowerCase().includes(q);
        const matchNote = h.note?.toLowerCase().includes(q);
        const matchTitle = (h.title || h.subtopicTitle)?.toLowerCase().includes(q);
        const matchTag = h.tag?.toLowerCase().includes(q);
        if (!matchText && !matchNote && !matchTitle && !matchTag) return false;
      }

      return true;
    });
  }, [highlights, filterType, filterColor, currentSubtopicId, searchQuery]);

  // تجميع التظليلات حسب الدروس (Subtopic Grouping)
  const groupedHighlights = useMemo(() => {
    const groups = {};
    filteredHighlights.forEach(item => {
      const groupKey = item.title || item.subtopicTitle || `درس ${item.subtopicId || 'عام'}`;
      if (!groups[groupKey]) {
        groups[groupKey] = {
          title: groupKey,
          subtopicId: item.subtopicId,
          items: []
        };
      }
      groups[groupKey].items.push(item);
    });
    return Object.values(groups);
  }, [filteredHighlights]);

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 z-[999998] w-screen h-screen min-h-screen bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn" dir="rtl">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-slideUp">
        
        {/* رأس النافذة */}
        <div className="p-5 border-b border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-emerald-500/20">
              <Bookmark className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-extrabold text-white font-sans">
                  دفتر التظليلات والمقتطفات المحفوظة
                </h3>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
                  {highlights.length} مقتطف
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans">
                محفوظة محلياً في قاعدة بيانات المتصفح الدائمة (IndexedDB)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* زر التبديل بين العرض المجمع والعرض الزمني */}
            <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-0.5 text-xs">
              <button
                onClick={() => setGroupingMode("flat")}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  groupingMode === 'flat' 
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="عرض زمني متسلسل"
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>قائمة</span>
              </button>
              <button
                onClick={() => setGroupingMode("grouped")}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  groupingMode === 'grouped' 
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="تجميع حسب الدروس"
              >
                <FolderOpen className="w-3.5 h-3.5" />
                <span>حسب الدروس</span>
              </button>
            </div>

            {/* زر تصدير JSON */}
            <button
              onClick={handleExportJson}
              disabled={highlights.length === 0}
              className="flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-2 rounded-xl transition-all cursor-pointer disabled:opacity-40"
              title="تصدير كافة المقتطفات كملف JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span>تصدير JSON</span>
            </button>

            {/* زر الإغلاق */}
            <button
              onClick={() => {
                stopSpeech();
                onClose();
              }}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
              title="إغلاق"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* شريط أدوات التصفية والبحث */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 space-y-3 shrink-0">
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            {/* حقل البحث المباشر */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في نصوص المقتطفات، الشروحات، الأكواد، أو الملاحظات..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 pr-9 pl-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all font-sans"
              />
              <Search className="w-4 h-4 text-slate-500 absolute right-3 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute left-2.5 top-2 text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* أزرار تصفية الألوان الـ 6 */}
            <div className="flex items-center gap-1.5 self-center sm:self-auto">
              <span className="text-[11px] text-slate-500 ml-1">اللون:</span>
              <button
                onClick={() => setFilterColor("all")}
                className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                  filterColor === 'all' 
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold' 
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                الكل
              </button>
              {[
                { id: 'amber', colorHex: '#f59e0b', name: 'Sunset Amber' },
                { id: 'emerald', colorHex: '#10b981', name: 'Cyber Emerald' },
                { id: 'cyan', colorHex: '#06b6d4', name: 'Neon Cyan' },
                { id: 'purple', colorHex: '#a855f7', name: 'Electric Purple' },
                { id: 'rose', colorHex: '#ef4444', name: 'Laser Ruby' },
                { id: 'orange', colorHex: '#ec4899', name: 'Plasma Pink' }
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFilterColor(filterColor === c.id ? 'all' : c.id)}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all cursor-pointer ${
                    filterColor === c.id 
                      ? 'border-white scale-110 shadow-md ring-2 ring-emerald-400' 
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: c.colorHex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* تبويبات التصفية السريعة */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {[
              { id: 'all', label: 'جميع المقتطفات' },
              { id: 'current', label: 'الدرس الحالي فقط' },
              { id: 'code', label: 'أكواد برمجية 💻' },
              { id: 'explanation', label: 'شروحات ومفاهيم 📖' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* قائمة المقتطفات والتظليلات */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredHighlights.length === 0 ? (
            <div className="text-center py-16 space-y-3 text-slate-500">
              <Bookmark className="w-12 h-12 mx-auto opacity-30 text-slate-400" />
              <p className="text-sm font-bold text-slate-300">لا توجد مقتطفات محفوظة هنا بعد.</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                قم بتحديد أي نص من شرح الدرس أو من الكود البرمجي بالماوس، وستظهر لك أداة التظليل لحفظه فوراً في قاعدة بياناتك.
              </p>
            </div>
          ) : groupingMode === 'grouped' ? (
            // 1. العرض المجمع حسب الدروس
            <div className="space-y-6">
              {groupedHighlights.map((group) => (
                <div key={group.title} className="bg-slate-950/40 border border-slate-800/80 rounded-3xl p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/70">
                    <div className="flex items-center gap-2">
                      <FolderOpen className="w-4 h-4 text-emerald-400" />
                      <h4 className="font-extrabold text-sm text-white font-sans">{group.title}</h4>
                      {group.subtopicId && (
                        <span className="text-[10px] text-slate-500 font-mono">[{group.subtopicId}]</span>
                      )}
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-900 text-emerald-400 border border-slate-800">
                      {group.items.length} {group.items.length === 1 ? 'مقتطف' : 'مقتطفات'}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {group.items.map(item => renderHighlightCard(item))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // 2. العرض المتسلسل الزمني
            <div className="space-y-3.5">
              {filteredHighlights.map(item => renderHighlightCard(item))}
            </div>
          )}
        </div>

      </div>
    </div>,
    document.body
  );

  // دالة تصيير بطاقة المقتطف الفردية
  function renderHighlightCard(item) {
    const colorInfo = COLOR_MAP[item.color] || COLOR_MAP.amber;
    const isPlaying = speakingId === item.id;

    return (
      <div 
        key={item.id}
        className={`bg-slate-950/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-4 transition-all shadow-md space-y-2.5 ${colorInfo.border}`}
      >
        {/* رأس بطاقة المقتطف */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-300 font-sans">
              {item.title || item.subtopicTitle || `درس ${item.subtopicId || ''}`}
            </span>

            {/* شارة النوع */}
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1 ${
              item.type === 'code' 
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono' 
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
            }`}>
              {item.type === 'code' ? <Code2 className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
              <span>{item.type === 'code' ? 'كود' : 'شرح'}</span>
            </span>

            {/* شارة الوسم التصنيفي إن وجد */}
            {item.tag && (
              <span className="text-[10px] bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded-full">
                {item.tag}
              </span>
            )}

            <span className="text-[10px] text-slate-500 font-mono">
              {new Date(item.createdAt).toLocaleDateString('ar-EG', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {/* زر القراءة الصوتية */}
            <button
              onClick={() => handleToggleTts(item.id, item.text)}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isPlaying 
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title={isPlaying ? "إيقاف القراءة" : "نطق صوتي"}
            >
              {isPlaying ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
            </button>

            {/* زر نسخ النص */}
            <button
              onClick={() => handleCopyText(item.id, item.text)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="نسخ المقتطف"
            >
              {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>

            {/* زر الحذف */}
            <button
              onClick={() => handleDelete(item.id)}
              className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="حذف هذا التظليل"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* متن النص المظلل */}
        <div className={`p-3 rounded-xl ${
          item.type === 'code' 
            ? 'bg-[#060a12] font-mono text-left text-xs text-emerald-300 border border-slate-800/80 overflow-x-auto whitespace-pre-wrap' 
            : 'bg-slate-900/60 font-sans text-xs text-slate-200 leading-relaxed border border-slate-800/40'
        }`} dir={item.type === 'code' ? 'ltr' : 'rtl'}>
          {item.text}
        </div>

        {/* ملاحظة المستخدم الشخصية إن وجدت */}
        {item.note && (
          <div className="bg-emerald-950/20 border border-emerald-800/30 rounded-xl p-2.5 text-xs text-emerald-200 flex items-start gap-2">
            <span className="text-emerald-400 font-bold shrink-0">💡 ملاحظتك:</span>
            <p className="font-sans leading-relaxed">{item.note}</p>
          </div>
        )}

      </div>
    );
  }
}
