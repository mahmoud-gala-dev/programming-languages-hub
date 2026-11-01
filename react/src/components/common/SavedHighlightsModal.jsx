// src/components/common/SavedHighlightsModal.jsx
// نافذة استعراض وإدارة وتصدير كافة التظليلات والمقتطفات المحفوظة في قاعدة بيانات IndexedDB
import React, { useState, useEffect } from 'react';
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
  Tag, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { getAllHighlights, deleteHighlight, exportAllHighlightsAsJson } from '../../utils/notesDb.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

const COLOR_MAP = {
  amber: { label: 'أصفر ذهبي', border: 'border-r-4 border-amber-400', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
  emerald: { label: 'أخضر زمردي', border: 'border-r-4 border-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  cyan: { label: 'سماوي نيون', border: 'border-r-4 border-cyan-400', badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
  purple: { label: 'بنفسجي ملكي', border: 'border-r-4 border-purple-400', badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
  rose: { label: 'وردي ناري', border: 'border-r-4 border-rose-500', badge: 'bg-rose-500/20 text-rose-300 border-rose-500/30' },
  orange: { label: 'برتقالي شمسي', border: 'border-r-4 border-orange-500', badge: 'bg-orange-500/20 text-orange-300 border-orange-500/30' }
};

export default function SavedHighlightsModal({ isOpen, onClose, currentSubtopicId }) {
  const showToast = useToast();
  const [highlights, setHighlights] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all"); // "all" | "current" | "code" | "explanation"
  const [filterColor, setFilterColor] = useState("all");
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  const loadData = async () => {
    try {
      const data = await getAllHighlights();
      // ترتيب تنازلي حسب الأحدث
      setHighlights(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    } catch {
      setHighlights([]);
    }
  };

  const handleDelete = async (id) => {
    try {
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

  const handleExportJson = async () => {
    try {
      const json = await exportAllHighlightsAsJson();
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `React_Roadmap_Highlights_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("تم تصدير كافة التظليلات كملف JSON بنجاح! 💾", "success");
    } catch {
      showToast("تعذر تصدير التظليلات", "error");
    }
  };

  if (!isOpen || typeof document === 'undefined') return null;

  // تطبيق التصفية
  const filteredHighlights = highlights.filter(h => {
    // 1. تصفية النوع
    if (filterType === 'current' && h.subtopicId !== currentSubtopicId) return false;
    if (filterType === 'code' && h.type !== 'code') return false;
    if (filterType === 'explanation' && h.type !== 'explanation') return false;

    // 2. تصفية اللون
    if (filterColor !== 'all' && h.color !== filterColor) return false;

    // 3. البحث بالكلمات
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchText = h.text?.toLowerCase().includes(q);
      const matchNote = h.note?.toLowerCase().includes(q);
      const matchTitle = h.subtopicTitle?.toLowerCase().includes(q);
      if (!matchText && !matchNote && !matchTitle) return false;
    }

    return true;
  });

  return createPortal(
    <div className="fixed inset-0 z-50 w-screen h-dvh min-h-dvh bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn" dir="rtl">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-4xl max-h-[90dvh] flex flex-col shadow-2xl overflow-hidden animate-slideUp">
        
        {/* رأس النافذة */}
        <div className="p-5 border-b border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-cyan-500/20">
              <Bookmark className="size-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-extrabold text-white font-sans text-balance">
                  دفتر التظليلات والمقتطفات المحفوظة
                </h3>
                <span className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full font-mono tabular-nums">
                  {highlights.length} مقتطف
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans text-pretty">
                محفوظة محلياً في قاعدة بيانات المتصفح الدائمة (IndexedDB)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJson}
              disabled={highlights.length === 0}
              aria-label="تصدير كافة المقتطفات كملف JSON"
              className="flex items-center gap-1.5 text-xs text-cyan-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-2 rounded-xl transition-all cursor-pointer disabled:opacity-40"
              title="تصدير كافة المقتطفات كملف JSON"
            >
              <Download className="size-3.5" />
              <span>تصدير JSON</span>
            </button>

            <button
              onClick={onClose}
              aria-label="إغلاق النافذة"
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
              title="إغلاق"
            >
              <X className="size-4" />
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
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 pr-9 pl-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all font-sans"
              />
              <Search className="size-4 text-slate-500 absolute right-3 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="مسح البحث"
                  className="absolute left-2.5 top-2 text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* أزرار تصفية الألوان */}
            <div className="flex items-center gap-1.5 self-center sm:self-auto">
              <span className="text-[11px] text-slate-500 ml-1">اللون:</span>
              <button
                onClick={() => setFilterColor("all")}
                className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                  filterColor === 'all' 
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold' 
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                الكل
              </button>
              {Object.entries(COLOR_MAP).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setFilterColor(filterColor === key ? 'all' : key)}
                  aria-label={`تصفية بلون ${item.label}`}
                  className={`size-6 rounded-lg flex items-center justify-center border transition-all cursor-pointer ${
                    filterColor === key 
                      ? 'border-white scale-110 shadow-md ring-1 ring-cyan-400' 
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: key === 'amber' ? '#f59e0b' : key === 'emerald' ? '#10b981' : key === 'cyan' ? '#06b6d4' : '#a855f7'
                  }}
                  title={item.label}
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
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* قائمة المقتطفات والتظليلات */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5">
          {filteredHighlights.length === 0 ? (
            <div className="text-center py-16 space-y-3 text-slate-500">
              <Bookmark className="size-12 mx-auto opacity-30 text-slate-400" />
              <p className="text-sm font-bold text-slate-300 text-balance">لا توجد مقتطفات محفوظة هنا بعد.</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto text-pretty">
                قم بتحديد أي نص من شرح الدرس أو من الكود البرمجي بالماوس، وستظهر لك أداة التظليل لحفظه فوراً في قاعدة بياناتك.
              </p>
            </div>
          ) : (
            filteredHighlights.map((item) => {
              const colorInfo = COLOR_MAP[item.color] || COLOR_MAP.amber;

              return (
                <div 
                  key={item.id}
                  className={`bg-slate-950/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-4 transition-all shadow-md space-y-2.5 ${colorInfo.border}`}
                >
                  {/* رأس بطاقة المقتطف */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-slate-300 font-sans text-balance">
                        {item.subtopicTitle || `درس ${item.subtopicId}`}
                      </span>

                      {/* شارة النوع */}
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1 ${
                        item.type === 'code' 
                          ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono' 
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {item.type === 'code' ? <Code2 className="size-3" /> : <BookOpen className="size-3" />}
                        <span>{item.type === 'code' ? 'كود' : 'شرح'}</span>
                      </span>

                      <span className="text-[10px] text-slate-500 font-mono tabular-nums">
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
                      {/* زر نسخ النص */}
                      <button
                        onClick={() => handleCopyText(item.id, item.text)}
                        aria-label="نسخ المقتطف"
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                        title="نسخ المقتطف"
                      >
                        {copiedId === item.id ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                      </button>

                      {/* زر الحذف */}
                      <button
                        onClick={() => handleDelete(item.id)}
                        aria-label="حذف هذا التظليل"
                        className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg transition-colors cursor-pointer"
                        title="حذف هذا التظليل"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* متن النص المظلل */}
                  <div className={`p-3 rounded-xl ${
                    item.type === 'code' 
                      ? 'bg-[#060a12] font-mono text-left text-xs text-cyan-300 border border-slate-800/80 overflow-x-auto whitespace-pre-wrap' 
                      : 'bg-slate-900/60 font-sans text-xs text-slate-200 leading-relaxed border border-slate-800/40 text-pretty'
                  }`} dir={item.type === 'code' ? 'ltr' : 'rtl'}>
                    {item.text}
                  </div>

                  {/* ملاحظة المستخدم الشخصية إن وجدت */}
                  {item.note && (
                    <div className="bg-cyan-950/20 border border-cyan-800/30 rounded-xl p-2.5 text-xs text-cyan-200 flex items-start gap-2">
                      <span className="text-cyan-400 font-bold shrink-0">💡 ملاحظتك:</span>
                      <p className="font-sans leading-relaxed text-pretty">{item.note}</p>
                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>

      </div>
    </div>,
    document.body
  );
}

