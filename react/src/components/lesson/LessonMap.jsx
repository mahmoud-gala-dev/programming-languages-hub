// src/components/lesson/LessonMap.jsx
// خريطة محتويات الدرس التفاعلية (Lesson Map & Table of Contents)
// تتيح للمتعلم معرفة هيكل الدرس بالكامل، وتحديد موقعه الحالي بدقة، والتنقل السلس بنقرة واحدة
import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Film, 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  Languages, 
  FileCode, 
  Layers, 
  Terminal, 
  Code2, 
  Monitor, 
  Eye, 
  AlertTriangle, 
  Award, 
  Cpu, 
  ShieldAlert, 
  Zap, 
  Scale, 
  Briefcase, 
  Building2, 
  Trophy, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ListTree,
  CheckCircle2,
  ArrowUp
} from 'lucide-react';

// تعريفات الأيقونات لكل قسم
const ICON_MAP = {
  'hero-visual': Film,
  'definition': BookOpen,
  'analogy': Sparkles,
  'why': HelpCircle,
  'terms': Languages,
  'syntax': FileCode,
  'execution-flow': Layers,
  'simple-code': Terminal,
  'advanced-code': Code2,
  'live-preview': Monitor,
  'output': Eye,
  'mistakes': AlertTriangle,
  'best-practices': Award,
  'mental-model': Cpu,
  'pitfalls': ShieldAlert,
  'performance': Zap,
  'comparison': Scale,
  'interview-prep': Briefcase,
  'enterprise-case': Building2,
  'faqs': HelpCircle,
  'challenge': Trophy,
};

export default function LessonMap({ 
  sections = [], 
  activeSectionId = '', 
  onSelectSection, 
  isVisible = true, 
  onToggleVisibility 
}) {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // حساب مؤشر التقدم بناءً على موقع القسم النشط
  const activeIndex = sections.findIndex(s => s.id === activeSectionId);
  const progressPercent = sections.length > 0 
    ? Math.round(((Math.max(0, activeIndex) + 1) / sections.length) * 100) 
    : 0;

  const handleItemClick = (sectionId) => {
    if (onSelectSection) {
      onSelectSection(sectionId);
    } else {
      const el = document.getElementById(`lesson-section-${sectionId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileDrawerOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileDrawerOpen(false);
  };

  return (
    <>
      {/* 1. خريطة الدرس للشاشات الكبيرة (Desktop Sticky Rail) */}
      {isVisible ? (
        <aside 
          aria-label="خريطة محتويات الدرس"
          className="hidden xl:block w-[230px] xl:w-[240px] shrink-0 sticky top-20 self-start transition-all duration-200 z-20"
          dir="rtl"
        >
          <div className="bg-slate-900/95 border border-slate-800/90 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden flex flex-col max-h-[calc(100dvh-100px)]">
            
            {/* ترويسة الخريطة مع زر الإخفاء */}
            <div className="p-3.5 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="size-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Compass className="size-4 animate-spin-slow" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-bold text-white truncate font-sans">
                    خريطة الدرس
                  </h3>
                  <p className="text-[10px] text-slate-400 tabular-nums">
                    {sections.length} محطات تعليمية
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* زر إخفاء الخريطة */}
                <button
                  onClick={onToggleVisibility}
                  aria-label="إخفاء خريطة الدرس"
                  className="size-7 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="إخفاء الخريطة لتوسيع مساحة الشرح"
                >
                  <ChevronLeft className="size-4" />
                </button>
              </div>
            </div>

            {/* شريط نسبة الاستيعاب والتقدم في أقسام الدرس */}
            <div className="px-3.5 py-2 bg-slate-950/40 border-b border-slate-800/50">
              <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1 font-mono">
                <span>المحطة الحالية:</span>
                <span className="text-cyan-400 font-bold tabular-nums">
                  {activeIndex >= 0 ? `${activeIndex + 1} من ${sections.length}` : 'البداية'} ({progressPercent}%)
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-l from-cyan-400 to-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* قائمة محطات الدرس مع المسار العمودي الرابط */}
            <nav className="p-2.5 overflow-y-auto space-y-1 relative scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
              {/* الخط العمودي الرابط بين الأقسام */}
              <div className="absolute right-[22px] top-4 bottom-4 w-0.5 bg-slate-800/70 pointer-events-none" />

              {sections.map((sec, idx) => {
                const IconComponent = ICON_MAP[sec.id] || ListTree;
                const isActive = activeSectionId === sec.id;
                const isPassed = activeIndex > idx;

                return (
                  <button
                    key={sec.id}
                    onClick={() => handleItemClick(sec.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`w-full text-right flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl text-xs transition-all relative z-10 cursor-pointer group ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-200 font-bold border border-cyan-500/30 shadow-sm'
                        : isPassed
                          ? 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                          : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                    }`}
                  >
                    {/* أيقونة القسم مع النقطة المرجعية */}
                    <div className={`size-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive 
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20' 
                        : isPassed
                          ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 group-hover:border-slate-700'
                    }`}>
                      {isPassed && !isActive ? (
                        <CheckCircle2 className="size-3.5 text-emerald-400" />
                      ) : (
                        <IconComponent className="size-3.5" />
                      )}
                    </div>

                    {/* عنوان القسم المختصر والشارة */}
                    <div className="flex-1 min-w-0">
                      <div className="truncate text-[11px] leading-tight font-sans">
                        {sec.shortTitle || sec.title}
                      </div>
                    </div>

                    {/* شارة الترقيم */}
                    <span className={`text-[10px] font-mono tabular-nums px-1.5 py-0.2 rounded shrink-0 ${
                      isActive
                        ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-500'
                    }`}>
                      #{idx + 1}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* زر العودة لأعلى الدرس */}
            <div className="p-2 bg-slate-950/90 border-t border-slate-800/80">
              <button
                onClick={scrollToTop}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <ArrowUp className="size-3 text-cyan-400" />
                <span>العودة لبداية الدرس</span>
              </button>
            </div>

          </div>
        </aside>
      ) : (
        /* لسان جانبي عائم لإعادة فتح الخريطة عند إخفائها على الشاشات الكبيرة */
        <button
          onClick={onToggleVisibility}
          aria-label="إظهار خريطة الدرس"
          className="hidden xl:flex fixed left-4 top-24 z-30 items-center gap-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-cyan-400 px-3 py-2 rounded-xl shadow-2xl backdrop-blur-md transition-all cursor-pointer group"
          title="إظهار خريطة ومحطات الدرس"
        >
          <Compass className="size-4 group-hover:rotate-45 transition-transform" />
          <span className="text-xs font-bold text-slate-200">خريطة الدرس</span>
          <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-500/30 px-1.5 py-0.5 rounded-md font-mono tabular-nums">
            {sections.length}
          </span>
        </button>
      )}

      {/* 2. زر عائم ودرج سفلي منزلق للهواتف والأجهزة اللوحية (Mobile / Tablet Bottom Sheet) */}
      <div className="xl:hidden">
        {/* زر عائم أسفل الشاشة */}
        <button
          onClick={() => setIsMobileDrawerOpen(true)}
          aria-label="فتح خريطة محتويات الدرس"
          className="fixed bottom-5 left-4 z-40 flex items-center gap-2 bg-slate-900/95 border border-cyan-500/30 text-white px-3.5 py-2.5 rounded-full shadow-2xl backdrop-blur-md cursor-pointer hover:bg-slate-800 transition-transform active:scale-95"
        >
          <Compass className="size-4 text-cyan-400 animate-spin-slow" />
          <span className="text-xs font-bold">خريطة الدرس</span>
          <span className="text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-1.5 py-0.5 rounded-full font-mono tabular-nums">
            {activeIndex >= 0 ? `${activeIndex + 1}/${sections.length}` : sections.length}
          </span>
        </button>

        {/* الدرج المنزلق (Bottom Sheet Drawer) */}
        {isMobileDrawerOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end">
            {/* خلفية معتمة */}
            <div 
              onClick={() => setIsMobileDrawerOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            />

            {/* الحاوية السفلية */}
            <div 
              className="relative z-10 bg-slate-900 border-t border-slate-800 rounded-t-3xl max-h-[82dvh] flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-200"
              dir="rtl"
            >
              {/* مقبض السحب وترويسة الدرج */}
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Compass className="size-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">خريطة محتويات الدرس</h3>
                    <p className="text-[11px] text-slate-400 tabular-nums">
                      انقر على أي قسم للانتقال الفوري إليه
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileDrawerOpen(false)}
                  aria-label="إغلاق خريطة الدرس"
                  className="size-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* قائمة الأقسام في الهاتف */}
              <div className="p-3 overflow-y-auto space-y-1.5 flex-1">
                {sections.map((sec, idx) => {
                  const IconComponent = ICON_MAP[sec.id] || ListTree;
                  const isActive = activeSectionId === sec.id;

                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleItemClick(sec.id)}
                      className={`w-full text-right flex items-center gap-3 p-2.5 rounded-xl text-xs transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-200 font-bold border border-cyan-500/40'
                          : 'text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <div className={`size-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-950 border border-slate-800 text-slate-400'
                      }`}>
                        <IconComponent className="size-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-sans font-medium text-xs">{sec.title}</div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 tabular-nums">
                        #{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* زر الإغلاق والعودة لأعلى */}
              <div className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2">
                <button
                  onClick={scrollToTop}
                  className="flex-1 py-2 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ArrowUp className="size-3.5 text-cyan-400" />
                  <span>بداية الدرس</span>
                </button>
                <button
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="flex-1 py-2 text-xs bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold cursor-pointer"
                >
                  إغلاق الخريطة
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    </>
  );
}
