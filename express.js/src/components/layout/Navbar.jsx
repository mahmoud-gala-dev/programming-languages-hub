// src/components/layout/Navbar.jsx
import React from 'react';
import { BookOpen, Sparkles, Search, CheckCircle2, Key } from 'lucide-react';
import { useSwal, useToast } from '../../context/UiFeedbackContext.jsx';
import { saveUserGeminiApiKey, getActiveApiKey } from '../../api/gemini.js';

export default function Navbar({
  currentSection,
  onOpenBook,
  onOpenTutor,
  onOpenKeyPool,
  searchQuery,
  setSearchQuery,
  completedCount,
  totalSubtopics = 100
}) {
  const showSwal = useSwal();
  const showToast = useToast();
  const progressPercent = totalSubtopics > 0 ? Math.round((completedCount / totalSubtopics) * 100) : 0;

  const handleOpenApiKeyModal = async () => {
    const currentKey = getActiveApiKey();
    const result = await showSwal({
      title: "إعدادات مفتاح Google Gemini API",
      text: "يمكنك إدخال مفتاح Gemini الخاص بك لتفعيل الاتصال غير المحدود، أو تركه فارغاً للاعتماد على المفتاح المدمج:",
      icon: "question",
      input: "text",
      inputValue: currentKey.startsWith("AQ.") ? "" : currentKey,
      inputPlaceholder: "الصق مفتاح API هنا (AIzaSy...)",
      showCancelButton: true,
      confirmButtonText: "حفظ المفتاح",
      cancelButtonText: "إلغاء",
      confirmButtonColor: "bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold"
    });

    if (result.isConfirmed) {
      saveUserGeminiApiKey(result.value);
      showToast(result.value ? "تم حفظ مفتاح Gemini بنجاح! 🔑" : "تمت استعادة الإعداد الافتراضي للمساعد الذكي", "success");
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-4 lg:px-8 py-3 no-print" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-500 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 text-xl font-bold shrink-0">
              ⚡
            </div>
            <div>
              <h1 className="font-extrabold text-base lg:text-lg text-white leading-tight flex items-center gap-2 font-sans">
                خريطة طريق Express.js الاحترافية
                <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-normal">
                  من الصفر للاحتراف
                </span>
              </h1>
              <p className="text-xs text-slate-400 truncate max-w-xs sm:max-w-md font-sans">
                {currentSection?.title || "27 قسماً تعليمياً متكاملاً"} • {completedCount} درس منجز
              </p>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-1.5 text-xs text-amber-400 font-bold bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
            <span>%{progressPercent}</span>
          </div>
        </div>

        <div className="w-full md:w-64 lg:w-72 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث في دروس Express والمفاهيم..."
            className="w-full bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs rounded-xl py-2.5 pr-9 pl-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
          />
          <Search className="w-4 h-4 text-slate-400 absolute top-3 right-3" />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-sans">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span className="text-slate-400">الإنجاز:</span>
            <span className="text-amber-400 font-bold font-mono">%{progressPercent}</span>
          </div>

          <button
            onClick={onOpenBook}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-700/80 text-slate-200 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
            title="عرض وتحميل كتاب PDF للقسم"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">كتاب PDF</span>
          </button>

          <button
            onClick={onOpenTutor}
            className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 px-3.5 py-2 rounded-xl text-xs font-black transition-all shadow-md shadow-amber-500/20 cursor-pointer"
            title="فتح المعلم الذكي المساعد"
          >
            <Sparkles className="w-4 h-4" />
            <span>المعلم الذكي</span>
          </button>

          <button
            onClick={onOpenKeyPool}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            title="إدارة مجمع مفاتيح Gemini API"
          >
            <Key className="w-4 h-4" />
          </button>

        </div>

      </div>
    </header>
  );
}
