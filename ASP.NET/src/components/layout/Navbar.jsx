// src/components/layout/Navbar.jsx
import React from 'react';
import { BookOpen, Sparkles, Search, CheckCircle2, Key, Menu, BookCheck, ShieldCheck } from 'lucide-react';
import { useToast } from '../../context/UiFeedbackContext.jsx';
import { getActiveApiKey } from '../../api/gemini.js';

export default function Navbar({
  currentSection,
  onOpenBook,
  onOpenTutor,
  onOpenKeyPool,
  onToggleSidebar,
  searchQuery,
  setSearchQuery,
  completedCount,
  totalSubtopics = 1803
}) {
  const { showToast } = useToast();
  const progressPercent = totalSubtopics > 0 ? Math.round((completedCount / totalSubtopics) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 bg-[#060814]/90 backdrop-blur-md border-b border-purple-500/20 px-4 lg:px-8 py-3 no-print" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* الشعار وعنوان المنصة وزر القائمة للموبايل */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-xl bg-[#0f1430] border border-purple-500/20 text-slate-300 hover:text-white cursor-pointer"
              title="القائمة الجانبية"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-purple-600/30 text-xl font-bold shrink-0">
              🟣
            </div>
            <div>
              <h1 className="font-extrabold text-base lg:text-lg text-white leading-tight flex items-center gap-2 font-sans">
                خريطة طريق ASP.NET Core MVC
                <span className="text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded-full font-normal">
                  من الصفر للاحتراف
                </span>
              </h1>
              <p className="text-xs text-slate-400 truncate max-w-xs sm:max-w-md font-sans">
                {currentSection?.title || "33 قسماً • 1803 درساً"} • {completedCount} درس منجز
              </p>
            </div>
          </div>

          {/* شريط الإنجاز للموبايل */}
          <div className="md:hidden flex items-center gap-1.5 text-xs text-purple-400 font-bold bg-[#0f1430] px-2.5 py-1 rounded-lg border border-purple-500/20">
            <span>%{progressPercent}</span>
          </div>
        </div>

        {/* شريط البحث المباشر */}
        <div className="w-full md:w-64 lg:w-72 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث في الـ 1803 درساً والمفاهيم..."
            className="w-full bg-[#080b18] border border-purple-500/20 text-slate-200 placeholder-slate-500 text-xs rounded-xl py-2.5 pr-9 pl-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-sans"
          />
          <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* أزرار الإجراءات السريعة (الكتاب، المعلم الذكي، مجمع المفاتيح) */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end overflow-x-auto pb-1 md:pb-0">
          
          {/* مؤشر التقدم العام */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#080b18] border border-purple-500/20 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <div className="flex flex-col text-right">
              <span className="text-[10px] text-slate-400 font-sans">التقدم الكلي</span>
              <span className="font-bold text-emerald-300 font-mono">%{progressPercent} ({completedCount})</span>
            </div>
            <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden mr-1">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* زر استوديو الكتاب الشامل وPDF */}
          <button
            onClick={onOpenBook}
            className="flex items-center gap-1.5 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 hover:from-indigo-600/50 hover:to-purple-600/50 text-purple-200 border border-purple-500/30 text-xs font-bold px-3 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            title="فتح استوديو الكتاب وتصدير PDF الشامل"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span className="font-sans">الكتاب الشامل PDF</span>
          </button>

          {/* زر المعلم الذكي Gemini AI */}
          <button
            onClick={onOpenTutor}
            className="flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg shadow-purple-600/25 transition-all cursor-pointer whitespace-nowrap"
            title="سؤال المعلم الذكي التفاعلي"
          >
            <Sparkles className="w-4 h-4 text-cyan-300 animate-spin" />
            <span className="font-sans">المعلم الذكي</span>
          </button>

          {/* زر مجمع مفاتيح Gemini */}
          <button
            onClick={onOpenKeyPool}
            className="flex items-center gap-1.5 bg-[#0f1430] hover:bg-purple-900/40 text-slate-300 hover:text-white border border-purple-500/20 text-xs font-bold px-2.5 py-2 rounded-xl transition-all cursor-pointer"
            title="إدارة وتدوير مفاتيح Gemini API"
          >
            <Key className="w-4 h-4 text-purple-400" />
          </button>
        </div>

      </div>
    </header>
  );
}
