// src/components/layout/Navbar.jsx
// شريط التنقل العلوي العام مع البحث، مؤشر الإنجاز، أزرار الكتب والمعلم الذكي وإعدادات المنصة
import React from 'react';
import { BookOpen, Sparkles, Search, CheckCircle2, Key, SlidersHorizontal, Bookmark, Layers, Monitor, LayoutGrid, Image as ImageIcon, Type } from 'lucide-react';
import { useSwal, useToast } from '../../context/UiFeedbackContext.jsx';
import { saveUserGeminiApiKey, getActiveApiKey } from '../../api/gemini.js';

export default function Navbar({ 
  currentSection,
  onOpenBook, 
  onOpenTutor, 
  onOpenKeyPool,
  onOpenHighlights,
  onOpenCodeFont,
  onOpenShortcuts,
  onOpenInfographicGallery,
  searchQuery, 
  setSearchQuery,
  completedCount,
  totalSubtopics = 35,
  layoutMode = "default",
  onChangeLayoutMode,
  isSidebarOpen = true,
  onToggleSidebar,
  scrollProgress = 0
}) {
  const showSwal = useSwal();
  const showToast = useToast();
  const progressPercent = totalSubtopics > 0 ? Math.round((completedCount / totalSubtopics) * 100) : 0;

  // فتح نافذة إعدادات مفتاح Gemini API
  const handleOpenApiKeyModal = async () => {
    const currentKey = getActiveApiKey();
    const result = await showSwal({
      title: "إعدادات مفتاح Gemini API",
      text: "يمكنك إدخال مفتاح Google Gemini API الخاص بك لتفعيل الاتصال المباشر غير المحدود، أو تركه فارغاً للاعتماد على المساعد الذكي المدمج:",
      icon: "question",
      input: "text",
      inputValue: currentKey.startsWith("AQ.") ? "" : currentKey,
      inputPlaceholder: "الصق مفتاح API هنا (AIzaSy...)",
      showCancelButton: true,
      confirmButtonText: "حفظ المفتاح",
      cancelButtonText: "إلغاء",
      confirmButtonColor: "bg-cyan-500 hover:bg-cyan-400 text-slate-950"
    });

    if (result.isConfirmed) {
      saveUserGeminiApiKey(result.value);
      showToast(result.value ? "تم حفظ مفتاح Gemini بنجاح! 🔑" : "تمت استعادة الإعداد الافتراضي للمساعد الذكي", "success");
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-2.5 sm:px-4 lg:px-8 py-2 sm:py-3 no-print max-w-full overflow-x-hidden" dir="rtl">
      <div className="max-w-[1750px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-3">
        
        {/* الشعار وعنوان المنصة */}
        <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-start min-w-0">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 text-base sm:text-xl font-bold shrink-0">
              ⚛️
            </div>
            <div className="min-w-0">
              <h1 className="font-extrabold text-xs sm:text-base lg:text-lg text-white leading-tight flex items-center gap-1.5 font-sans truncate">
                خريطة طريق React.js الاحترافية
                <span className="hidden sm:inline-block text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full font-normal">
                  من الصفر للاحتراف
                </span>
              </h1>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate max-w-[200px] sm:max-w-xs md:max-w-md font-sans">
                {currentSection?.title || "34 قسماً تعليمياً متكاملاً"} • {completedCount} درس منجز
              </p>
            </div>
          </div>

          {/* شريط الإنجاز للموبايل */}
          <div className="md:hidden flex items-center gap-1 text-[11px] sm:text-xs text-cyan-400 font-bold bg-slate-800/80 px-2 py-0.5 rounded-lg shrink-0">
            <span>%{progressPercent}</span>
          </div>
        </div>

        {/* شريط البحث المباشر */}
        <div className="w-full md:w-56 lg:w-72 relative min-w-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث في دروس الخريطة والمفاهيم..."
            className="w-full bg-slate-950/80 border border-slate-700/80 text-slate-200 placeholder-slate-500 text-xs rounded-xl py-1.5 sm:py-2 pr-8 sm:pr-9 pl-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-sans"
          />
          <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute right-2.5 sm:right-3 top-2 sm:top-2.5" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute left-2.5 top-1.5 sm:top-2 text-xs text-slate-400 hover:text-white cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* أزرار الإجراءات السريعة (المعلم الذكي + كتاب الـ PDF + إعدادات المفتاح + أنماط العرض) */}
        <div className="flex items-center gap-1 sm:gap-2 w-full md:w-auto justify-between md:justify-end flex-wrap">
          
          {/* محول أنماط العرض: افتراضي / عريض / ملء الشاشة */}
          {onChangeLayoutMode && (
            <div className="hidden lg:flex items-center bg-slate-950/80 border border-slate-800 rounded-xl p-0.5 text-xs">
              <button
                onClick={() => onChangeLayoutMode('default')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  layoutMode === 'default' 
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="العرض الافتراضي المتوازن (مع القائمة وحاوية متناسقة)"
              >
                <span>📱</span>
                <span>افتراضي</span>
              </button>
              <button
                onClick={() => onChangeLayoutMode('wide')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  layoutMode === 'wide' 
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="العرض العريض الممتد لكامل الشاشة"
              >
                <span>🖥️</span>
                <span>عريض</span>
              </button>
              <button
                onClick={() => onChangeLayoutMode('focus')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  layoutMode === 'focus' 
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="وضع التركيز وملء الشاشة (إخفاء القائمة الجانبية)"
              >
                <span>⛶</span>
                <span>تركيز</span>
              </button>
            </div>
          )}

          {/* زر تبديل إظهار/إخفاء القائمة الجانبية */}
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className={`p-1.5 sm:p-2 rounded-xl border transition-colors cursor-pointer ${
                isSidebarOpen 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700' 
                  : 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/50 font-bold'
              }`}
              title={isSidebarOpen ? "إخفاء القائمة الجانبية" : "إظهار القائمة الجانبية"}
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
            </button>
          )}

          {/* مؤشر الإنجاز للحاسوب */}
          <div className="hidden xl:flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 px-3 py-1.5 rounded-xl text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300">إنجازك:</span>
            <span className="font-bold text-cyan-400 font-mono">{completedCount}/{totalSubtopics}</span>
            <div className="w-14 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* زر التظليلات والمقتطفات المحفوظة */}
          <button
            onClick={onOpenHighlights}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-xl transition-colors cursor-pointer"
            title="دفتر التظليلات والمقتطفات المحفوظة (IndexedDB)"
          >
            <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
          </button>

          {/* زر استوديو خطوط الكود البرمجي العالمي */}
          <button
            onClick={onOpenCodeFont}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-cyan-300 bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-xl transition-colors cursor-pointer"
            title="استوديو خطوط الكود البرمجي (Fira Code, JetBrains Mono, Cascadia...)"
          >
            <Type className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
          </button>

          {/* زر دليل وموسوعة الاختصارات بالعامية المصرية */}
          <button
            onClick={onOpenShortcuts}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-sky-500/20 to-blue-500/20 hover:from-sky-500/30 hover:to-blue-500/30 text-sky-300 border border-sky-500/40 text-[11px] sm:text-xs font-bold transition-all shadow-sm cursor-pointer"
            title="دليل وموسوعة الاختصارات وأوامر الذكاء الاصطناعي (Ctrl + /)"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
            <span>⚡ الاختصارات</span>
          </button>

          {/* زر إعدادات المفاتيح المتعددة Gemini API Pool */}
          <button
            onClick={onOpenKeyPool || handleOpenApiKeyModal}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-xl transition-colors cursor-pointer"
            title="إدارة مجمع مفاتيح Gemini AI والفحص المتوازي"
          >
            <Key className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
          </button>

          {/* زر معرض الإنفوجرافيك الشامل لجميع الدروس */}
          <button
            onClick={onOpenInfographicGallery}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl shadow-md transition-all cursor-pointer font-sans"
            title="فتح معرض الإنفوجرافيك الشامل لجميع الدروس وتصفحها بصرياً"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">الإنفوجرافيك</span>
            <span className="xs:hidden">معرض</span>
          </button>

          {/* زر تحميل كتاب الـ PDF */}
          <button
            onClick={onOpenBook}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl shadow-md transition-all cursor-pointer font-sans"
            title="عرض وتحميل كتاب الـ PDF الكامل"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">كتاب PDF</span>
            <span className="xs:hidden">كتاب</span>
          </button>

          {/* زر المعلم الذكي (Gemini Tutor) */}
          <button
            onClick={onOpenTutor}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl shadow-md transition-all cursor-pointer font-sans"
            title="اسأل المعلم الذكي المدعوم بـ Gemini"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
            <span className="hidden xs:inline">المعلم الذكي</span>
            <span className="xs:hidden">ذكاء</span>
          </button>
        </div>

      </div>

      {/* شريط تقدم القراءة التفاعلي الممتد بكامل العرض (Interactive Global Scroll Progress Bar) */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-950/80 overflow-hidden" title={`تقدم قراءة الدرس: ${scrollProgress}%`}>
        <div 
          className={`h-full transition-all duration-150 ${
            scrollProgress >= 98
              ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 shadow-[0_0_15px_rgba(52,211,153,0.9)] animate-pulse'
              : 'bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]'
          }`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
