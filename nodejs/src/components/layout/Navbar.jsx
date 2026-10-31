// src/components/layout/Navbar.jsx
// شريط التنقل العلوي العام مع البحث، مؤشر الإنجاز، شريط تقدم القراءة، أزرار النوافذ، وأنماط العرض
import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  Key, 
  Bookmark, 
  Layers, 
  Image as ImageIcon, 
  Type 
} from 'lucide-react';
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
  searchQuery = "",
  setSearchQuery,
  completedCount = 0,
  totalSubtopics = 981,
  layoutMode = "default",
  onChangeLayoutMode,
  isSidebarOpen = true,
  onToggleSidebar,
  scrollProgress = 0
}) {
  const showSwal = useSwal();
  const showToast = useToast();
  const progressPercent = totalSubtopics > 0 ? Math.round((completedCount / totalSubtopics) * 100) : 0;
  const clampedScrollProgress = Math.min(Math.max(scrollProgress, 0), 100);

  // فتح نافذة إعدادات مفتاح Gemini API السريعة في حال عدم توفر المجمع
  const handleOpenApiKeyModal = async () => {
    const currentKey = getActiveApiKey();
    const result = await showSwal({
      title: "إعدادات مفتاح Google Gemini API",
      text: "يمكنك إدخال مفتاح Gemini الخاص بك لتفعيل الاتصال غير المحدود، أو تركه فارغاً للاعتماد على المفتاح المدمج:",
      icon: "question",
      input: "text",
      inputValue: currentKey && !currentKey.startsWith("AQ.") ? currentKey : "",
      inputPlaceholder: "الصق مفتاح API هنا (AIzaSy...)",
      showCancelButton: true,
      confirmButtonText: "حفظ المفتاح",
      cancelButtonText: "إلغاء",
      confirmButtonColor: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold"
    });

    if (result.isConfirmed) {
      saveUserGeminiApiKey(result.value);
      showToast(result.value ? "تم حفظ مفتاح Gemini بنجاح! 🔑" : "تمت استعادة الإعداد الافتراضي للمساعد الذكي", "success");
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-2.5 sm:px-4 lg:px-8 py-2 sm:py-3 no-print max-w-full overflow-x-hidden" dir="rtl">
      <div className="max-w-[1750px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-3">
        
        {/* الشعار وعنوان المنصة */}
        <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-start min-w-0">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20 text-base sm:text-xl font-bold shrink-0">
              🟢
            </div>
            <div className="min-w-0">
              <h1 className="font-extrabold text-xs sm:text-base lg:text-lg text-white leading-tight flex items-center gap-1.5 font-sans truncate">
                خريطة طريق Node.js الاحترافية
                <span className="hidden sm:inline-block text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-normal">
                  من الصفر للاحتراف
                </span>
              </h1>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate max-w-[200px] sm:max-w-xs md:max-w-md font-sans">
                {currentSection?.title || "23 قسماً تعليمياً متكاملاً"} • {completedCount} درس منجز
              </p>
            </div>
          </div>

          {/* شريط الإنجاز للموبايل */}
          <div className="md:hidden flex items-center gap-1 text-[11px] sm:text-xs text-emerald-400 font-bold bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800 shrink-0">
            <span>%{progressPercent}</span>
          </div>
        </div>

        {/* شريط البحث المباشر */}
        <div className="w-full md:w-56 lg:w-72 relative min-w-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
            placeholder="ابحث في دروس الخريطة والمفاهيم..."
            className="w-full bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs rounded-xl py-1.5 sm:py-2 pr-8 sm:pr-9 pl-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-sans"
          />
          <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute right-2.5 sm:right-3 top-2 sm:top-2.5" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery && setSearchQuery("")}
              className="absolute left-2.5 top-1.5 sm:top-2 text-xs text-slate-400 hover:text-white cursor-pointer"
              title="مسح البحث"
            >
              ✕
            </button>
          )}
        </div>

        {/* أزرار الإجراءات السريعة وأنماط العرض والنوافذ */}
        <div className="flex items-center gap-1 sm:gap-2 w-full md:w-auto justify-between md:justify-end flex-wrap">
          
          {/* محول أنماط العرض: افتراضي / عريض / تركيز */}
          {onChangeLayoutMode && (
            <div className="hidden lg:flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-0.5 text-xs">
              <button
                onClick={() => onChangeLayoutMode('default')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  layoutMode === 'default' 
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="العرض الافتراضي المتوازن (مع القائمة الجانبية)"
              >
                <span>📱</span>
                <span>افتراضي</span>
              </button>
              <button
                onClick={() => onChangeLayoutMode('wide')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  layoutMode === 'wide' 
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm' 
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
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm' 
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
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800' 
                  : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border-emerald-500/50 font-bold'
              }`}
              title={isSidebarOpen ? "إخفاء القائمة الجانبية" : "إظهار القائمة الجانبية"}
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            </button>
          )}

          {/* مؤشر الإنجاز لسطح المكتب */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-sans">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-400">الإنجاز:</span>
            <span className="text-emerald-400 font-bold font-mono">%{progressPercent}</span>
            <div className="w-14 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* زر دفتر التظليلات والملاحظات المحفوظة */}
          {onOpenHighlights && (
            <button
              onClick={onOpenHighlights}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors cursor-pointer"
              title="دفتر التظليلات والملاحظات المحفوظة (IndexedDB)"
            >
              <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400" />
            </button>
          )}

          {/* زر استوديو خطوط الكود البرمجي */}
          {onOpenCodeFont && (
            <button
              onClick={onOpenCodeFont}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-emerald-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors cursor-pointer"
              title="استوديو خطوط الكود البرمجي (Fira Code, JetBrains Mono, Cascadia...)"
            >
              <Type className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            </button>
          )}

          {/* زر دليل وموسوعة الاختصارات بالعامية المصرية */}
          {onOpenShortcuts && (
            <button
              onClick={onOpenShortcuts}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30 text-emerald-300 border border-emerald-500/40 text-[11px] sm:text-xs font-bold transition-all shadow-sm cursor-pointer"
              title="دليل وموسوعة الاختصارات وأوامر الذكاء الاصطناعي (Ctrl + /)"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>⚡ الاختصارات</span>
            </button>
          )}

          {/* زر مجمع مفاتيح Gemini API */}
          <button
            onClick={onOpenKeyPool || handleOpenApiKeyModal}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            title="إدارة مجمع مفاتيح Gemini AI والفحص المتوازي"
          >
            <Key className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* زر معرض الإنفوجرافيك الشامل لجميع الدروس */}
          {onOpenInfographicGallery && (
            <button
              onClick={onOpenInfographicGallery}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl shadow-md transition-all cursor-pointer font-sans"
              title="فتح معرض الإنفوجرافيك الشامل لجميع الدروس وتصفحها بصرياً"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">الإنفوجرافيك</span>
              <span className="xs:hidden">معرض</span>
            </button>
          )}

          {/* زر كتاب الـ PDF */}
          <button
            onClick={onOpenBook}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-750 text-slate-200 hover:text-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all shadow-sm cursor-pointer font-sans"
            title="عرض وتحميل كتاب PDF للقسم"
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            <span className="hidden xs:inline">كتاب PDF</span>
            <span className="xs:hidden">كتاب</span>
          </button>

          {/* زر المعلم الذكي */}
          <button
            onClick={onOpenTutor}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all shadow-md shadow-emerald-600/20 cursor-pointer font-sans"
            title="فتح المعلم الذكي المساعد"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse text-amber-300" />
            <span className="hidden xs:inline">المعلم الذكي</span>
            <span className="xs:hidden">ذكاء</span>
          </button>

        </div>

      </div>

      {/* شريط تقدم القراءة التفاعلي الممتد بكامل العرض (Interactive Global Scroll Progress Bar) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-950/80 overflow-hidden" 
        title={`تقدم قراءة الدرس: ${clampedScrollProgress}%`}
      >
        <div 
          className={`h-full transition-all duration-150 ${
            clampedScrollProgress >= 98
              ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 shadow-[0_0_16px_rgba(16,185,129,0.85)] animate-pulse'
              : 'bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]'
          }`}
          style={{ width: `${clampedScrollProgress}%` }}
        />
      </div>
    </header>
  );
}
