// src/components/layout/Sidebar.jsx
// شريط الفهرس الجانبي الموسع مع التحكم في حجم الخط، التباعد المريح بين الدروس، وتبديل الأقسام والاتساع
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronLeft, 
  CheckCircle, 
  Circle, 
  BookMarked, 
  FileText, 
  HelpCircle, 
  Award, 
  FolderGit2, 
  Layers,
  Sparkles,
  ArrowRightLeft,
  SlidersHorizontal,
  Maximize2,
  Type,
  X,
  Image as ImageIcon
} from 'lucide-react';
import { ROADMAP_SECTIONS } from '../../data/roadmapMeta.js';
import { SECTIONS_MAP } from '../../data/sections/index.js';

export default function Sidebar({
  sectionData,
  currentSectionId = 1,
  onSelectSection,
  currentTopicId,
  currentSubtopicId,
  onSelectSubtopic,
  onSelectSpecialView,
  onOpenInfographicGallery,
  specialView,
  completedSubtopics = new Set(),
  searchQuery = "",
  onCloseSidebar
}) {
  const [expandedTopics, setExpandedTopics] = useState({});
  const [showAllSections, setShowAllSections] = useState(false);

  // إعدادات اتساع القائمة الجانبية مع الحفظ في LocalStorage
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    try {
      const saved = localStorage.getItem("react_roadmap_sidebar_width");
      return saved || "expanded"; // القيمة الافتراضية موسعة ومريحة
    } catch {
      return "expanded";
    }
  });

  // إعدادات حجم خط نصوص القائمة الجانبية
  const [sidebarFontSize, setSidebarFontSize] = useState(() => {
    try {
      const saved = localStorage.getItem("react_roadmap_sidebar_font_size");
      return saved || "large"; // القيمة الافتراضية واضحة وكبيرة
    } catch {
      return "large";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("react_roadmap_sidebar_width", sidebarWidth);
    } catch (e) {
      console.error(e);
    }
  }, [sidebarWidth]);

  useEffect(() => {
    try {
      localStorage.setItem("react_roadmap_sidebar_font_size", sidebarFontSize);
    } catch (e) {
      console.error(e);
    }
  }, [sidebarFontSize]);

  const toggleSidebarWidth = () => {
    setSidebarWidth(prev => {
      if (prev === 'standard') return 'expanded';
      if (prev === 'expanded') return 'ultra';
      return 'standard';
    });
  };

  const toggleSidebarFontSize = () => {
    setSidebarFontSize(prev => {
      if (prev === 'normal') return 'large';
      if (prev === 'large') return 'xl';
      return 'normal';
    });
  };

  const widthClasses = {
    standard: "w-full lg:w-96 xl:w-[400px]",
    expanded: "w-full lg:w-[440px] xl:w-[480px]",
    ultra: "w-full lg:w-[500px] xl:w-[550px]"
  };

  const currentWidthClass = widthClasses[sidebarWidth] || widthClasses.expanded;

  // خريطة أحجام الخطوط في القائمة الجانبية
  const fontClasses = {
    normal: {
      sectionTitle: "text-sm font-bold",
      topicTitle: "text-xs sm:text-sm font-bold",
      subtopicTitle: "text-xs font-medium",
      badge: "text-[10px]",
      specialView: "text-xs font-semibold"
    },
    large: {
      sectionTitle: "text-base font-extrabold",
      topicTitle: "text-sm sm:text-base font-extrabold",
      subtopicTitle: "text-sm font-semibold",
      badge: "text-[11px]",
      specialView: "text-sm font-bold"
    },
    xl: {
      sectionTitle: "text-lg font-black",
      topicTitle: "text-base sm:text-lg font-black",
      subtopicTitle: "text-base font-bold",
      badge: "text-xs",
      specialView: "text-base font-extrabold"
    }
  };

  const currentFont = fontClasses[sidebarFontSize] || fontClasses.large;

  // تحديث التوسيع عند تغيير الموضوعات
  useEffect(() => {
    if (sectionData?.topics) {
      const initial = {};
      sectionData.topics.forEach(t => {
        initial[t.id] = true;
      });
      setExpandedTopics(initial);
    }
  }, [sectionData?.id]);

  const toggleTopic = (id) => {
    setExpandedTopics(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalSectionSubtopics = sectionData?.topics 
    ? sectionData.topics.reduce((sum, t) => sum + (t.subtopics?.length || 0), 0) 
    : 0;

  // تصفية الموضوعات حسب البحث إذا وجد
  const filteredTopics = (sectionData?.topics || []).map(topic => {
    if (!searchQuery) return topic;
    const q = searchQuery.toLowerCase();
    const matchesTopic = topic.title.toLowerCase().includes(q) || topic.englishTitle.toLowerCase().includes(q);
    const matchedSubtopics = topic.subtopics.filter(sub => 
      sub.title.toLowerCase().includes(q) || 
      sub.englishTitle.toLowerCase().includes(q) ||
      sub.definition.toLowerCase().includes(q)
    );
    if (matchesTopic || matchedSubtopics.length > 0) {
      return { ...topic, subtopics: matchedSubtopics.length > 0 ? matchedSubtopics : topic.subtopics };
    }
    return null;
  }).filter(Boolean);

  return (
    <aside className={`${currentWidthClass} bg-slate-900/95 border-0 flex flex-col h-[calc(100vh-65px)] sticky top-[65px] overflow-hidden no-print transition-all duration-200 shrink-0 shadow-2xl`}>
      
      {/* رأس الشريط الجانبي */}
      <div className="p-4 border-b border-slate-800/40 bg-slate-950/60 shrink-0">
        <div className="flex items-center justify-between gap-1 mb-2">
          <span className="text-xs font-extrabold text-cyan-400 flex items-center gap-1.5 uppercase tracking-wider font-sans">
            <Layers className="w-4 h-4 text-cyan-400" />
            فهرس خريطة الطريق
          </span>

          <div className="flex items-center gap-1.5">
            {/* زر تبديل حجم خط القائمة */}
            <button
              onClick={toggleSidebarFontSize}
              className="text-xs text-slate-300 hover:text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 px-2 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 font-bold"
              title={`تبديل حجم خط القائمة (الحالي: ${sidebarFontSize === 'normal' ? 'عادي' : sidebarFontSize === 'large' ? 'كبير' : 'كبير جداً'})`}
            >
              <Type className="w-3.5 h-3.5 text-cyan-400" />
              <span>{sidebarFontSize === 'normal' ? 'A' : sidebarFontSize === 'large' ? 'A+' : 'A++'}</span>
            </button>

            {/* زر تبديل اتساع القائمة الجانبية */}
            <button
              onClick={toggleSidebarWidth}
              className="text-xs text-slate-300 hover:text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 px-2 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
              title={`تبديل اتساع القائمة الجانبية (الحالي: ${sidebarWidth === 'standard' ? 'قياسي 400px' : sidebarWidth === 'expanded' ? 'موسع 480px' : 'أقصى 550px'})`}
            >
              <span>↔️</span>
              <span className="text-[11px] font-mono hidden sm:inline">
                {sidebarWidth === 'standard' ? '400px' : sidebarWidth === 'expanded' ? '480px' : '550px'}
              </span>
            </button>

            {/* زر تبديل الأقسام الـ 34 */}
            <button
              onClick={() => setShowAllSections(!showAllSections)}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-bold cursor-pointer flex items-center gap-1 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-800/60 px-2.5 py-1 rounded-lg transition-colors"
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>{showAllSections ? "إخفاء" : "الأقسام (34)"}</span>
            </button>

            {/* زر إغلاق / إخفاء القائمة الجانبية للدخول في وضع التركيز */}
            {onCloseSidebar && (
              <button
                onClick={onCloseSidebar}
                className="p-1 text-slate-400 hover:text-rose-400 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
                title="إخفاء القائمة الجانبية وتوسيع مساحة القراءة (وضع التركيز ⛶)"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* كارت القسم النشط حالياً مع خط كبير ومريح */}
        <div className="mt-2.5 p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-slate-950 border border-blue-800/50 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold bg-cyan-500/20 text-cyan-300 px-2.5 py-0.5 rounded-full border border-cyan-500/30 font-mono">
              القسم {sectionData.id} من 34
            </span>
            <span className="text-xs text-slate-400 font-mono font-medium">{totalSectionSubtopics} درساً متاحاً</span>
          </div>
          <h2 className={`${currentFont.sectionTitle} text-white mt-2 leading-snug`}>
            {sectionData.title}
          </h2>
          <p className="text-xs text-slate-400 font-mono truncate mt-1">{sectionData.englishTitle}</p>
        </div>
      </div>

      {/* قائمة العناصر القابلة للتمرير مع تباعد مريح وأنيق */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5">

        {/* قائمة تبديل الأقسام الـ 34 */}
        {showAllSections && (
          <div className="mb-4 p-3 bg-slate-950/95 rounded-2xl border border-cyan-800/60 space-y-2 shadow-2xl">
            <div className="flex items-center justify-between mb-2 px-1 border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-cyan-300">اختر القسم للدراسة:</span>
              <span className="text-[11px] text-slate-400">34 قسماً تخصصياً</span>
            </div>
            {ROADMAP_SECTIONS.map(sec => {
              const isAvailable = Boolean(SECTIONS_MAP[sec.id]);
              const isActive = sec.id === sectionData.id;

              return (
                <div 
                  key={sec.id}
                  onClick={() => {
                    if (isAvailable && onSelectSection) {
                      onSelectSection(sec.id);
                      setShowAllSections(false);
                    }
                  }}
                  className={`p-2.5 rounded-xl flex items-center justify-between transition-all ${
                    isActive 
                      ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 font-bold shadow-md' 
                      : isAvailable 
                        ? 'bg-slate-800/80 text-slate-200 hover:bg-slate-700/80 cursor-pointer border border-emerald-500/30' 
                        : 'bg-slate-900/40 text-slate-500 opacity-60 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="font-mono text-xs bg-slate-900 px-2 py-0.5 rounded text-cyan-300 font-bold border border-slate-800">
                      {sec.number}
                    </span>
                    <span className={`${currentFont.subtopicTitle} truncate`}>{sec.title}</span>
                  </div>

                  <div className="shrink-0 flex items-center gap-1">
                    {isAvailable ? (
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30 font-bold">
                        متاح الآن 🚀
                      </span>
                    ) : (
                      <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                        قادم
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* روابط سريعة لأقسام الختام (الملخص، الجدول، المشروع، الإنفوجرافيك) مع تباعد رحب */}
        <div className="space-y-2 mb-4 pb-3 border-b border-slate-800/80">
          <button
            onClick={() => onSelectSpecialView('summary')}
            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-right cursor-pointer ${
              specialView === 'summary' 
                ? 'bg-cyan-500/20 text-cyan-300 font-bold shadow-md' 
                : 'text-slate-300 bg-slate-950/50 hover:bg-slate-850 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2.5 truncate">
              <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className={`${currentFont.specialView} truncate`}>ملخص {sectionData.title}</span>
            </span>
            <span className="text-xs bg-slate-900 px-2 py-0.5 rounded-full text-slate-400 font-mono shrink-0">
              {sectionData.summary?.length || 8} نقاط
            </span>
          </button>

          <button
            onClick={() => onSelectSpecialView('cheatsheet')}
            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-right cursor-pointer ${
              specialView === 'cheatsheet' 
                ? 'bg-amber-500/20 text-amber-300 font-bold shadow-md' 
                : 'text-slate-300 bg-slate-950/50 hover:bg-slate-850 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2.5 truncate">
              <BookMarked className="w-4 h-4 text-amber-400 shrink-0" />
              <span className={`${currentFont.specialView} truncate`}>جدول المرجع السريع (Cheat Sheet)</span>
            </span>
            <span className="text-xs bg-slate-900 px-2 py-0.5 rounded-full text-slate-400 font-mono shrink-0">
              {sectionData.cheatSheet?.length || 20} صيغة
            </span>
          </button>

          <button
            onClick={() => onSelectSpecialView('project')}
            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-right cursor-pointer ${
              specialView === 'project' 
                ? 'bg-emerald-500/20 text-emerald-300 font-bold shadow-md' 
                : 'text-slate-300 bg-slate-950/50 hover:bg-slate-850 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2.5 truncate">
              <FolderGit2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className={`${currentFont.specialView} truncate`}>مشروع القسم التطبيقي</span>
            </span>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold shrink-0">
              تطبيقي
            </span>
          </button>

          <button
            onClick={() => onSelectSpecialView('infographic')}
            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-right cursor-pointer ${
              specialView === 'infographic' 
                ? 'bg-purple-500/20 text-purple-300 font-bold shadow-md' 
                : 'text-slate-300 bg-slate-950/50 hover:bg-slate-850 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2.5 truncate">
              <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
              <span className={`${currentFont.specialView} truncate`}>إنفوجرافيك القسم الشامل</span>
            </span>
            <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-bold shrink-0">
              PNG
            </span>
          </button>

          {onOpenInfographicGallery && (
            <button
              onClick={onOpenInfographicGallery}
              className="w-full flex items-center justify-between p-3 rounded-xl transition-all text-right cursor-pointer text-cyan-200 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-800/50 shadow-sm"
              title="تصفح جميع بطاقات الإنفوجرافيك للدروس في المعرض الشامل"
            >
              <span className="flex items-center gap-2.5 truncate">
                <ImageIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className={`${currentFont.specialView} truncate`}>معرض الإنفوجرافيك الكامل</span>
              </span>
              <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-bold shrink-0">
                استوديو
              </span>
            </button>
          )}
        </div>

        {/* الموضوعات الرئيسية ودروسها الفرعية مع تباعد فسيح وتصميم كروت عصرية بدون بوردرات حادة */}
        <div className="space-y-4">
          {filteredTopics.map((topic, tIdx) => {
            const isExpanded = expandedTopics[topic.id];

            return (
              <div 
                key={topic.id} 
                className="rounded-2xl bg-slate-950/60 overflow-hidden shadow-lg transition-all"
              >
                
                {/* شريط عنوان الموضوع الرئيسي */}
                <button
                  onClick={() => toggleTopic(topic.id)}
                  className="w-full flex items-center justify-between p-3.5 bg-slate-900/90 hover:bg-slate-850 transition-colors text-right cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                      {tIdx + 1}
                    </span>
                    <span className={`${currentFont.topicTitle} text-white font-sans`}>
                      {topic.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-slate-400 font-mono bg-slate-950 px-2 py-0.5 rounded-full">
                      {topic.subtopics.length} دروس
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronLeft className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {/* قائمة الدروس الفرعية بدون أي بوردر وبخلفيات ناعمة وانسيابية */}
                {isExpanded && (
                  <div className="p-2.5 space-y-2.5 bg-slate-950/40">
                    
                    {topic.subtopics.map(sub => {
                      const isCurrent = currentSubtopicId === sub.id && !specialView;
                      const isDone = completedSubtopics.has(sub.id);

                      return (
                        <button
                          key={sub.id}
                          onClick={() => onSelectSubtopic(topic.id, sub.id)}
                          className={`w-full text-right p-3 rounded-xl flex items-center justify-between transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-cyan-500/15 text-cyan-200 font-bold shadow-md'
                              : isDone
                                ? 'bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-850'
                                : 'bg-slate-900/40 text-slate-400 hover:text-slate-100 hover:bg-slate-850'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            <span className="text-xs font-mono px-2 py-0.5 rounded-lg bg-slate-950/80 text-slate-400 shrink-0 font-bold">
                              {sub.id}
                            </span>
                            <span className={`${currentFont.subtopicTitle} leading-relaxed truncate font-sans`}>
                              {sub.title}
                            </span>
                          </div>

                          <div className="shrink-0 mr-2">
                            {isDone ? (
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-600" />
                            )}
                          </div>
                        </button>
                      );
                    })}

                    {/* أزرار ختام الموضوع: اختبار الفهم والتمرين العملي بدون بوردر */}
                    <div className="pt-2 mt-1 border-t border-slate-850/60 grid grid-cols-2 gap-2 px-1">
                      <button
                        onClick={() => onSelectSpecialView(`quiz-${topic.id}`)}
                        className={`p-2 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer text-xs font-bold ${
                          specialView === `quiz-${topic.id}`
                            ? 'bg-purple-500/20 text-purple-300 shadow-sm'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-300'
                        }`}
                        title="اختبر فهمك لهذا الموضوع (3 أسئلة مع الشرح)"
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
                        <span>اختبار ({topic.quiz?.length || 3})</span>
                      </button>

                      <button
                        onClick={() => onSelectSpecialView(`exercise-${topic.id}`)}
                        className={`p-2 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer text-xs font-bold ${
                          specialView === `exercise-${topic.id}`
                            ? 'bg-emerald-500/20 text-emerald-300 shadow-sm'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-300'
                        }`}
                        title="تمرين عملي مع تلميحات والحل الكامل"
                      >
                        <Award className="w-3.5 h-3.5 text-emerald-400" />
                        <span>تمرين عملي</span>
                      </button>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>

      {/* شريط الإحصائيات السفلي */}
      <div className="p-3.5 border-t border-slate-800/40 bg-slate-950/90 flex items-center justify-between text-xs text-slate-400 shrink-0 font-sans">
        <span>المنجز: <strong className="text-white font-mono">{completedSubtopics.size}</strong> درساً</span>
        <div className="flex items-center gap-1.5">
          <span>نسبة الإنجاز:</span>
          <span className="text-cyan-400 font-bold font-mono">
            {Math.round((completedSubtopics.size / Math.max(totalSectionSubtopics, 1)) * 100)}%
          </span>
        </div>
      </div>

    </aside>
  );
}
