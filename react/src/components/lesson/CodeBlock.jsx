// src/components/lesson/CodeBlock.jsx
// استوديو الأكواد البرمجية الاحترافي بكامل الشاشة 100vw × 100vh
// يدعم: React Portal مباشر لـ document.body، Native Browser Fullscreen API، دفتر ملاحظات IndexedDB مصنف، التفاف الأسطر، وشريط حالة IDE متكامل
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  Copy, 
  Check, 
  Code, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  Minimize2,
  X, 
  StickyNote, 
  Plus, 
  Trash2, 
  Download, 
  MessageSquare,
  Sparkles,
  WrapText,
  Monitor,
  Search,
  Tag,
  Filter,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { highlightCodeLine } from '../../utils/codeHighlighter.jsx';
import { addCodeNote, getNotesBySubtopic, deleteCodeNote, exportAllNotesAsJson } from '../../utils/notesDb.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

// وسوم الملاحظات السريعة
const NOTE_TAGS = [
  { id: 'concept', label: 'مفهوم جوهري', icon: '💡', badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
  { id: 'gotcha', label: 'خطأ وتنبيه', icon: '⚠️', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
  { id: 'question', label: 'سؤال للمراجعة', icon: '❓', badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
  { id: 'idea', label: 'تطبيق عملي', icon: '🚀', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' }
];

export default function CodeBlock({ 
  code = "", 
  title = "شفرة برمجية توضيحية", 
  language = "javascript",
  subtopicId = "general"
}) {
  const showToast = useToast();
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState(13); // حجم خط الكود بالبكسل
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isNativeFullscreen, setIsNativeFullscreen] = useState(false);
  const [isLineWrap, setIsLineWrap] = useState(false);

  // حالة دفتر الملاحظات (IndexedDB)
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState("");
  const [targetLine, setTargetLine] = useState("");
  const [selectedTag, setSelectedTag] = useState("concept");
  const [searchNotesQuery, setSearchNotesQuery] = useState("");
  const [filterLine, setFilterLine] = useState(null);
  const [showNotesDrawer, setShowNotesDrawer] = useState(true);

  const noteInputRef = useRef(null);

  // تحميل الملاحظات الخاصة بهذا الدرس
  useEffect(() => {
    loadNotes();
  }, [subtopicId]);

  const loadNotes = async () => {
    try {
      const saved = await getNotesBySubtopic(subtopicId);
      setNotes(saved || []);
    } catch (e) {
      console.error(e);
    }
  };

  // إدارة قفل التمرير العام واختصارات لوحة المفاتيح عند تفعيل ملء الشاشة
  useEffect(() => {
    if (!isFullscreen) return;

    // 1. قفل تمرير الصفحة الأصلية تماماً
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 2. مستمع اختصارات لوحة المفاتيح
    const handleKeyDown = (e) => {
      const isInput = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA';

      if (e.key === "Escape") {
        if (document.fullscreenElement) {
          document.exitFullscreen?.().catch(() => {});
        } else {
          setIsFullscreen(false);
        }
      } else if (!isInput) {
        if (e.key.toLowerCase() === 'f') {
          toggleNativeFullscreen();
        } else if (e.key.toLowerCase() === 'n') {
          setShowNotesDrawer(prev => !prev);
        } else if (e.key.toLowerCase() === 'w') {
          setIsLineWrap(prev => !prev);
        } else if (e.key === '+' || e.key === '=') {
          handleZoomIn();
        } else if (e.key === '-') {
          handleZoomOut();
        }
      }
    };

    // 3. مراقبة تغيير حالة ملء الشاشة العتادية للمتصفح
    const handleFullscreenChange = () => {
      setIsNativeFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [isFullscreen]);

  // دالة تفعيل/إلغاء ملء شاشة المتصفح العتادية (F11 Native Fullscreen)
  const toggleNativeFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleZoomIn = () => {
    setFontSize(prev => Math.min(prev + 2, 28));
  };

  const handleZoomOut = () => {
    setFontSize(prev => Math.max(prev - 2, 11));
  };

  const handleResetZoom = () => {
    setFontSize(13);
  };

  const handleAddNote = async () => {
    if (!newNoteText.trim()) return;

    try {
      await addCodeNote({
        subtopicId,
        codeTitle: title,
        lineNumber: targetLine ? Number(targetLine) : null,
        tag: selectedTag,
        content: newNoteText
      });
      setNewNoteText("");
      setTargetLine("");
      await loadNotes();
      showToast("تم حفظ الملاحظة في قاعدة البيانات المحلية (IndexedDB)! 📝", "success");
    } catch (err) {
      showToast("حدث خطأ أثناء حفظ الملاحظة", "error");
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await deleteCodeNote(id);
      await loadNotes();
      showToast("تم حذف الملاحظة", "info");
    } catch (err) {
      console.error(err);
    }
  };

  const handleExportNotes = async () => {
    try {
      const json = await exportAllNotesAsJson();
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `React_Code_Notes_${subtopicId}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("تم تصدير ملاحظات الكود بصيغة JSON بنجاح! 💾", "success");
    } catch {
      showToast("تعذر تصدير الملاحظات", "error");
    }
  };

  const lines = code ? code.trim().split('\n') : [];

  // تصفية الملاحظات بحسب البحث أو رقم السطر المحدد
  const filteredNotes = notes.filter(n => {
    const matchesSearch = !searchNotesQuery.trim() || 
      n.content.toLowerCase().includes(searchNotesQuery.toLowerCase());
    const matchesLine = filterLine === null || n.lineNumber === filterLine;
    return matchesSearch && matchesLine;
  });

  return (
    <>
      {/* 1. صندوق الكود المدمج القياسي داخل سياق الدرس */}
      <div data-code-block="true" data-lesson-script="true" className="rounded-xl overflow-hidden border border-slate-800 bg-[#0d1117] shadow-xl my-4 transition-all">
        {/* شريط رأس صندوق الكود */}
        <div className="flex flex-wrap items-center justify-between px-3 sm:px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80 gap-2">
          {/* عنوان الكود والأيقونات الزخرفية */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 pl-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold text-slate-300 font-sans">{title}</span>
            {notes.length > 0 && (
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-mono border border-amber-500/30">
                {notes.length} ملاحظات
              </span>
            )}
          </div>

          {/* أدوات التحكم: تكبير/تصغير الكود، اللغة، النسخ، وملء الشاشة */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* شريط تكبير وتصغير الكود فقط */}
            <div className="flex items-center bg-slate-800/80 rounded-lg p-0.5 border border-slate-700/60 text-slate-400" title="التحكم بحجم خط الكود">
              <button
                onClick={handleZoomOut}
                disabled={fontSize <= 11}
                className="p-1 hover:text-white hover:bg-slate-700 rounded transition-colors disabled:opacity-40 cursor-pointer"
                title="تصغير خط الكود"
              >
                <ZoomOut className="w-3 h-3" />
              </button>
              <span className="px-1.5 text-[10px] font-mono text-cyan-300 select-none">
                {fontSize}px
              </span>
              <button
                onClick={handleZoomIn}
                disabled={fontSize >= 28}
                className="p-1 hover:text-white hover:bg-slate-700 rounded transition-colors disabled:opacity-40 cursor-pointer"
                title="تكبير خط الكود"
              >
                <ZoomIn className="w-3 h-3" />
              </button>
              {fontSize !== 13 && (
                <button
                  onClick={handleResetZoom}
                  className="p-1 hover:text-amber-400 rounded transition-colors border-r border-slate-700 cursor-pointer"
                  title="إعادة ضبط حجم خط الكود"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                </button>
              )}
            </div>

            {/* شارة لغة البرمجة */}
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 select-none">
              {language}
            </span>

            {/* زر فتح استوديو الكود بكامل الشاشة الفعلي (True Fullscreen Portal) */}
            <button
              onClick={() => setIsFullscreen(true)}
              className="flex items-center gap-1.5 text-xs text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-bold px-3 py-1.5 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-all cursor-pointer"
              title="تكبير الكود بكامل الشاشة الفعلي (100vw × 100vh) مع دفتر الملاحظات المتقدم"
            >
              <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
              <span>تكبير بكامل الشاشة</span>
            </button>

            {/* زر نسخ الكود */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
              title="نسخ الكود بالكامل"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">تم النسخ ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>نسخ</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* أسطر الكود مع أرقام الأسطر والتمييز اللوني */}
        <div 
          className="p-4 overflow-x-auto font-mono leading-relaxed" 
          dir="ltr"
          style={{ fontSize: `${fontSize}px` }}
        >
          <pre className="m-0 p-0 text-left font-mono">
            {lines.map((line, idx) => (
              <div key={idx} className="table-row hover:bg-slate-800/40 transition-colors">
                <span className="table-cell select-none pr-4 text-slate-600 text-right font-mono text-[11px] w-9">
                  {idx + 1}
                </span>
                <span className="table-cell whitespace-pre font-mono">
                  {highlightCodeLine(line)}
                </span>
              </div>
            ))}
          </pre>
        </div>
      </div>

      {/* 2. استوديو الأكواد الاحترافي الفعلي بكامل الشاشة (True 100vw × 100vh via React Portal) */}
      {isFullscreen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] w-screen h-screen min-h-screen bg-[#080c14] text-slate-100 flex flex-col select-none overflow-hidden" 
          dir="rtl"
        >
          
          {/* أ. شريط أدوات الاستوديو العلوي بنمط بيئات التطوير المتقدمة (Pro Studio Topbar) */}
          <header data-no-highlight="true" className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-2.5 bg-slate-900 border-b border-slate-800 shrink-0 gap-3 z-10 shadow-lg">
            
            {/* الشعار ومسار الكود (Breadcrumbs) والإحصائيات */}
            <div className="flex items-center gap-3">
              {/* أزرار النافذة الزخرفية */}
              <div className="flex items-center gap-1.5 pl-2 border-l border-slate-800 hidden sm:flex">
                <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
              </div>

              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold shrink-0">
                <Code className="w-4 h-4" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-extrabold text-white font-sans truncate max-w-xs sm:max-w-md">
                    {title}
                  </h3>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                    {language}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono flex items-center gap-2">
                  <span>{lines.length} سطراً</span>
                  <span>•</span>
                  <span>{code.length} حرفاً</span>
                  <span>•</span>
                  <span className="text-amber-400 font-sans">{notes.length} ملاحظات مسجلة</span>
                </p>
              </div>
            </div>

            {/* أدوات التحكم الاحترافية في الكود */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              
              {/* شريط التحكم بحجم الخط */}
              <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-800 text-slate-300">
                <button 
                  onClick={handleZoomOut} 
                  disabled={fontSize <= 11}
                  className="p-1.5 hover:text-white hover:bg-slate-800 rounded transition-colors disabled:opacity-40 cursor-pointer" 
                  title="تصغير خط الكود (-)"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="px-2 text-xs font-mono text-cyan-300 select-none">{fontSize}px</span>
                <button 
                  onClick={handleZoomIn} 
                  disabled={fontSize >= 28}
                  className="p-1.5 hover:text-white hover:bg-slate-800 rounded transition-colors disabled:opacity-40 cursor-pointer" 
                  title="تكبير خط الكود (+)"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                {fontSize !== 13 && (
                  <button 
                    onClick={handleResetZoom} 
                    className="p-1.5 hover:text-amber-400 hover:bg-slate-800 rounded transition-colors border-r border-slate-800 cursor-pointer" 
                    title="إعادة ضبط حجم الخط"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* زر تفعيل/إلغاء التفاف الأسطر (Line Wrap) */}
              <button
                onClick={() => setIsLineWrap(prev => !prev)}
                className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  isLineWrap
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
                title="تفعيل/إلغاء التفاف الأسطر الطويلة (W)"
              >
                <WrapText className="w-3.5 h-3.5" />
                <span className="hidden md:inline">التفاف الأسطر</span>
              </button>

              {/* تبديل إظهار لوحة دفتر الملاحظات */}
              <button
                onClick={() => setShowNotesDrawer(prev => !prev)}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  showNotesDrawer 
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:text-white'
                }`}
                title="إظهار أو إخفاء دفتر الملاحظات المتقدم (N)"
              >
                <StickyNote className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">دفتر الملاحظات</span>
                <span className="bg-amber-500/20 text-amber-300 font-mono text-[10px] px-1.5 py-0.2 rounded-full border border-amber-500/30">
                  {notes.length}
                </span>
              </button>

              {/* زر نسخ الكود كاملاً */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-extrabold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                title="نسخ الشفرة البرمجية بالكامل"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-slate-950" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "تم النسخ ✓" : "نسخ الكود"}</span>
              </button>

              {/* زر ملء شاشة المتصفح العتادية (F11 Fullscreen API) */}
              <button
                onClick={toggleNativeFullscreen}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
                title={isNativeFullscreen ? "الخروج من ملء شاشة المتصفح (F)" : "ملء شاشة المتصفح بالكامل لإخفاء القوائم (F)"}
              >
                {isNativeFullscreen ? <Minimize2 className="w-4 h-4 text-cyan-400" /> : <Monitor className="w-4 h-4 text-slate-300" />}
              </button>

              {/* زر إغلاق الاستوديو والعودة */}
              <button
                onClick={() => {
                  if (document.fullscreenElement) {
                    document.exitFullscreen?.().catch(() => {});
                  }
                  setIsFullscreen(false);
                }}
                className="p-1.5 text-slate-400 hover:text-white bg-rose-950/40 hover:bg-rose-900/80 border border-rose-800/40 rounded-lg transition-colors cursor-pointer"
                title="إغلاق استوديو ملء الشاشة (Esc)"
              >
                <X className="w-4 h-4 text-rose-400" />
              </button>

            </div>
          </header>

          {/* ب. مساحة الاستوديو الرئيسية المقسمة (محرر الكود + لوحة الملاحظات) */}
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
            
            {/* مساحة الكود الممتدة والاحترافية */}
            <div 
              data-code-block="true"
              data-lesson-script="true"
              className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto font-mono leading-relaxed bg-[#060a12] select-text relative" 
              dir="ltr"
              style={{ fontSize: `${fontSize + 1}px` }}
            >
              <pre className={`m-0 p-0 text-left font-mono ${isLineWrap ? 'whitespace-pre-wrap break-all' : 'whitespace-pre'}`}>
                {lines.map((line, idx) => {
                  const lineNum = idx + 1;
                  const lineNotes = notes.filter(n => n.lineNumber === lineNum);
                  const isFiltered = filterLine === lineNum;

                  return (
                    <div 
                      key={idx} 
                      className={`table-row transition-colors group ${
                        isFiltered 
                          ? 'bg-amber-500/15 border-l-2 border-amber-400' 
                          : 'hover:bg-slate-800/50'
                      }`}
                    >
                      {/* رقم السطر مع زر تفاعلي لربط ملاحظة به مباشرة */}
                      <span 
                        onClick={() => {
                          setTargetLine(String(lineNum));
                          setShowNotesDrawer(true);
                          if (noteInputRef.current) noteInputRef.current.focus();
                        }}
                        className="table-cell select-none pr-6 text-slate-600 group-hover:text-cyan-400 text-right font-mono text-xs w-14 cursor-pointer relative transition-colors"
                        title={`انقر لإضافة ملاحظة موجهة للسطر ${lineNum}`}
                      >
                        <span className="group-hover:hidden">{lineNum}</span>
                        <span className="hidden group-hover:inline text-cyan-300 font-bold">+{lineNum}</span>
                      </span>

                      {/* سطر الكود البرمجي مع التمييز اللوني */}
                      <span className="table-cell font-mono pr-4">
                        {highlightCodeLine(line)}
                        
                        {/* شارات الملاحظات المسجلة بجانب السطر */}
                        {lineNotes.length > 0 && (
                          <span 
                            onClick={() => {
                              setShowNotesDrawer(true);
                              setFilterLine(filterLine === lineNum ? null : lineNum);
                            }}
                            className="ml-3 inline-flex items-center gap-1.5 text-[11px] font-sans bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full cursor-pointer hover:bg-amber-500/30 transition-all select-none shadow-sm"
                            title="انقر لعرض وتصفية ملاحظات هذا السطر"
                          >
                            <span>📝</span>
                            <span className="font-bold">{lineNotes.length} ملاحظة</span>
                          </span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </pre>
            </div>

            {/* ج. لوحة دفتر الملاحظات المتقدمة بقاعدة بيانات IndexedDB */}
            {showNotesDrawer && (
              <aside 
                data-no-highlight="true"
                className="w-full md:w-80 lg:w-[410px] bg-slate-900 border-r border-slate-800 flex flex-col overflow-hidden shrink-0 shadow-2xl animate-fadeIn z-20" 
                dir="rtl"
              >
                
                {/* رأس لوحة الملاحظات */}
                <div className="p-3.5 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <StickyNote className="w-3.5 h-3.5" />
                    </div>
                    <span>دفتر الملاحظات (IndexedDB)</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handleExportNotes}
                      className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-800/40 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                      title="تصدير جميع الملاحظات كملف JSON"
                    >
                      <Download className="w-3 h-3" />
                      <span>تصدير JSON</span>
                    </button>
                  </div>
                </div>

                {/* حقل تدوين ملاحظة جديدة متقدم مع تصنيف الوسوم السريعة */}
                <div className="p-3.5 border-b border-slate-800 bg-slate-900 space-y-3 shrink-0">
                  
                  {/* تحديد السطر المستهدف والوسم */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-semibold flex items-center gap-1">
                      <Plus className="w-3.5 h-3.5 text-cyan-400" />
                      تدوين ملاحظة جديدة:
                    </span>
                    
                    <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-lg px-2 py-1">
                      <span className="text-slate-500 text-[10px]">السطر:</span>
                      <input
                        type="number"
                        min="1"
                        max={lines.length}
                        value={targetLine}
                        onChange={(e) => setTargetLine(e.target.value)}
                        placeholder="عام"
                        className="w-12 bg-transparent text-xs text-cyan-300 text-center font-mono focus:outline-none"
                      />
                      {targetLine && (
                        <button 
                          onClick={() => setTargetLine("")}
                          className="text-[10px] text-slate-500 hover:text-white cursor-pointer"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>

                  {/* وسوم التصنيف السريعة */}
                  <div className="flex flex-wrap gap-1.5">
                    {NOTE_TAGS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTag(t.id)}
                        className={`text-[10px] font-sans px-2 py-1 rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
                          selectedTag === t.id
                            ? t.badgeColor + ' font-bold shadow-sm'
                            : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-slate-200'
                        }`}
                      >
                        <span>{t.icon}</span>
                        <span>{t.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* مساحة كتابة الملاحظة */}
                  <textarea
                    ref={noteInputRef}
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                    placeholder="اكتب ملاحظتك البرمجية هنا (تُحفظ تلقائياً في قاعدة البيانات المحلية المتصلة)..."
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none h-20 font-sans"
                  />

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">
                      قاعدة بيانات IndexedDB محلية دائمة
                    </span>
                    <button
                      onClick={handleAddNote}
                      disabled={!newNoteText.trim()}
                      className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer disabled:opacity-40 shadow-md"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>حفظ الملاحظة</span>
                    </button>
                  </div>
                </div>

                {/* شريط البحث وتصفية الملاحظات */}
                <div className="p-2.5 border-b border-slate-800 bg-slate-950/50 flex items-center gap-2 shrink-0">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={searchNotesQuery}
                      onChange={(e) => setSearchNotesQuery(e.target.value)}
                      placeholder="بحث في الملاحظات..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg py-1 pr-7 pl-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                    <Search className="w-3.5 h-3.5 text-slate-500 absolute right-2 top-2" />
                    {searchNotesQuery && (
                      <button 
                        onClick={() => setSearchNotesQuery("")}
                        className="absolute left-2 top-1.5 text-xs text-slate-500 hover:text-white"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {filterLine !== null && (
                    <button
                      onClick={() => setFilterLine(null)}
                      className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-1 rounded-lg flex items-center gap-1 cursor-pointer"
                      title="إلغاء تصفية السطر"
                    >
                      <span>سطر {filterLine}</span>
                      <span>✕</span>
                    </button>
                  )}
                </div>

                {/* قائمة الملاحظات المسجلة */}
                <div className="flex-1 overflow-y-auto p-3.5 space-y-2.5">
                  {filteredNotes.length === 0 ? (
                    <div className="text-center py-12 space-y-2 text-slate-500">
                      <MessageSquare className="w-8 h-8 mx-auto opacity-40 text-slate-400" />
                      <p className="text-xs font-semibold">
                        {notes.length === 0 ? "لا توجد ملاحظات مسجلة بعد لهذا الكود." : "لا توجد ملاحظات مطابقة لبحثك."}
                      </p>
                      <p className="text-[11px] text-slate-500 max-w-xs mx-auto">
                        انقر على أي رقم سطر في الكود على اليسار لربط ملاحظة به مباشرة.
                      </p>
                    </div>
                  ) : (
                    filteredNotes.map((note) => {
                      const tagObj = NOTE_TAGS.find(t => t.id === note.tag) || NOTE_TAGS[0];

                      return (
                        <div 
                          key={note.id} 
                          className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl p-3 text-xs space-y-2 shadow-sm transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              {/* وسم التصنيف */}
                              <span className={`text-[10px] px-2 py-0.5 rounded-md border font-semibold flex items-center gap-1 ${tagObj.badgeColor}`}>
                                <span>{tagObj.icon}</span>
                                <span>{tagObj.label}</span>
                              </span>

                              {/* رقم السطر */}
                              {note.lineNumber ? (
                                <button
                                  onClick={() => setFilterLine(note.lineNumber)}
                                  className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono text-[10px] px-2 py-0.5 rounded font-bold transition-colors cursor-pointer"
                                  title="تصفية الكود لهذا السطر"
                                >
                                  سطر {note.lineNumber}
                                </button>
                              ) : (
                                <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-0.5 rounded font-bold">
                                  عام
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] text-slate-500 font-mono">
                                {new Date(note.createdAt).toLocaleDateString('ar-EG')}
                              </span>
                              <button
                                onClick={() => handleDeleteNote(note.id)}
                                className="text-slate-500 hover:text-rose-400 p-1 rounded transition-colors cursor-pointer"
                                title="حذف الملاحظة"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <p className="text-slate-200 leading-relaxed font-sans whitespace-pre-wrap select-text">
                            {note.content}
                          </p>
                        </div>
                      );
                    })
                  )}
                </div>

              </aside>
            )}

          </div>

          {/* د. شريط الحالة السفلي للاستوديو (IDE Status Bar) */}
          <footer className="px-4 py-1.5 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400 font-mono shrink-0 select-none z-10">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-cyan-400 font-sans">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                استوديو React.js الاحترافي
              </span>
              <span>UTF-8</span>
              <span>Spaces: 2</span>
              <span>JavaScript (React)</span>
              <span>{isLineWrap ? "التفاف: مفعل" : "التفاف: معطل"}</span>
            </div>

            <div className="flex items-center gap-3 text-slate-400 font-sans hidden sm:flex">
              <span>💡 انقر على رقم أي سطر لإضافة ملاحظة</span>
              <span>•</span>
              <span><kbd className="bg-slate-800 text-slate-300 px-1 rounded text-[10px]">Esc</kbd> إغلاق</span>
              <span><kbd className="bg-slate-800 text-slate-300 px-1 rounded text-[10px]">F</kbd> ملء الشاشة</span>
              <span><kbd className="bg-slate-800 text-slate-300 px-1 rounded text-[10px]">N</kbd> الملاحظات</span>
              <span><kbd className="bg-slate-800 text-slate-300 px-1 rounded text-[10px]">W</kbd> الالتفاف</span>
            </div>
          </footer>

        </div>,
        document.body
      )}
    </>
  );
}
