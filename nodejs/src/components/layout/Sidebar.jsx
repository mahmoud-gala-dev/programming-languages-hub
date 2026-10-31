// src/components/layout/Sidebar.jsx
// شريط الفهرس الجانبي الموسع لخريطة طريق Node.js (23 قسماً)
// يدعم: الدرج الانزلافي للهواتف (Mobile Slide-over Drawer) مع Backdrop Blur
// الإغلاق التلقائي عند اختيار الدروس، تصفية البحث المتقدم، التحكم في حجم الخط والاتساع، ومؤشرات الإنجاز
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronLeft, 
  CheckCircle2, 
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
  Type, 
  X, 
  Image as ImageIcon,
  Search,
  ExternalLink,
  ChevronsUpDown
} from 'lucide-react';
import { ROADMAP_SECTIONS } from '../../data/roadmapMeta.js';

export default function Sidebar({
  sectionData,
  currentSectionId = 1,
  onSelectSection,
  currentTopicId,
  currentSubtopicId,
  onSelectSubtopic,
  onSelectSpecialView,
  onOpenInfographicGallery,
  onOpenShortcuts,
  specialView,
  completedSubtopics = new Set(),
  searchQuery = "",
  isOpen = true,
  onCloseSidebar
}) {
  const [expandedTopics, setExpandedTopics] = useState({});
  const [showAllSections, setShowAllSections] = useState(false);

  // 1. إعدادات اتساع القائمة الجانبية مع الحفظ في LocalStorage
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    try {
      const saved = localStorage.getItem("nodejs_roadmap_sidebar_width");
      return saved || "expanded"; // الافتراضي موسع ومريح
    } catch {
      return "expanded";
    }
  });

  // 2. إعدادات حجم خط نصوص القائمة الجانبية مع الحفظ في LocalStorage
  const [sidebarFontSize, setSidebarFontSize] = useState(() => {
    try {
      const saved = localStorage.getItem("nodejs_roadmap_sidebar_font_size");
      return saved || "normal";
    } catch {
      return "normal";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("nodejs_roadmap_sidebar_width", sidebarWidth);
    } catch (e) {
      console.error(e);
    }
  }, [sidebarWidth]);

  useEffect(() => {
    try {
      localStorage.setItem("nodejs_roadmap_sidebar_font_size", sidebarFontSize);
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
    standard: "w-full lg:w-80 xl:w-96",
    expanded: "w-full lg:w-[420px] xl:w-[460px]",
    ultra: "w-full lg:w-[480px] xl:w-[520px]"
  };

  const currentWidthClass = widthClasses[sidebarWidth] || widthClasses.expanded;

  // خريطة أحجام الخطوط في القائمة الجانبية
  const fontClasses = {
    normal: {
      sectionTitle: "text-xs sm:text-sm font-bold",
      topicTitle: "text-xs sm:text-sm font-bold",
      subtopicTitle: "text-xs font-medium",
      badge: "text-[10px]",
      specialView: "text-xs font-semibold"
    },
    large: {
      sectionTitle: "text-sm sm:text-base font-extrabold",
      topicTitle: "text-xs sm:text-sm md:text-base font-extrabold",
      subtopicTitle: "text-xs sm:text-sm font-semibold",
      badge: "text-[11px]",
      specialView: "text-sm font-bold"
    },
    xl: {
      sectionTitle: "text-base sm:text-lg font-black",
      topicTitle: "text-sm sm:text-base md:text-lg font-black",
      subtopicTitle: "text-sm sm:text-base font-bold",
      badge: "text-xs",
      specialView: "text-base font-extrabold"
    }
  };

  const currentFont = fontClasses[sidebarFontSize] || fontClasses.normal;

  // فتح كافة الموضوعات عند تبديل القسم
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

  const toggleAllTopics = () => {
    if (!sectionData?.topics) return;
    const allOpen = sectionData.topics.every(t => expandedTopics[t.id]);
    const nextState = {};
    sectionData.topics.forEach(t => {
      nextState[t.id] = !allOpen;
    });
    setExpandedTopics(nextState);
  };

  // دوال الإغلاق التلقائي للدرج على الهواتف والأجهزة اللوحية (<1024px)
  const handleSubtopicSelect = (topicId, subtopicId) => {
    if (onSelectSubtopic) {
      onSelectSubtopic(topicId, subtopicId);
    }
    if (typeof window !== 'undefined' && window.innerWidth < 1024 && onCloseSidebar) {
      onCloseSidebar();
    }
  };

  const handleSpecialViewSelect = (view) => {
    if (onSelectSpecialView) {
      onSelectSpecialView(view);
    }
    if (typeof window !== 'undefined' && window.innerWidth < 1024 && onCloseSidebar) {
      onCloseSidebar();
    }
  };

  const handleSectionSelect = (secId) => {
    if (onSelectSection) {
      onSelectSection(secId);
      setShowAllSections(false);
    }
  };

  const handleGalleryClick = () => {
    if (onOpenInfographicGallery) onOpenInfographicGallery();
    if (typeof window !== 'undefined' && window.innerWidth < 1024 && onCloseSidebar) {
      onCloseSidebar();
    }
  };

  const handleShortcutsClick = () => {
    if (onOpenShortcuts) onOpenShortcuts();
    if (typeof window !== 'undefined' && window.innerWidth < 1024 && onCloseSidebar) {
      onCloseSidebar();
    }
  };

  // إحصائيات الإنجاز للقسم الحالي
  const allCurrentSectionSubtopics = (sectionData?.topics || []).flatMap(t => t.subtopics || []);
  const totalSectionSubtopics = allCurrentSectionSubtopics.length;
  const completedSectionSubtopics = allCurrentSectionSubtopics.filter(s => completedSubtopics.has(s.id)).length;
  const sectionProgressPercent = totalSectionSubtopics > 0 
    ? Math.round((completedSectionSubtopics / totalSectionSubtopics) * 100) 
    : 0;

  // تصفية موضوعات القسم الحالي حسب نص البحث
  const filteredTopics = (sectionData?.topics || []).map(topic => {
    if (!searchQuery) return topic;
    const q = searchQuery.toLowerCase().trim();
    const matchesTopic = 
      topic.title?.toLowerCase().includes(q) || 
      topic.englishTitle?.toLowerCase().includes(q) ||
      topic.id?.toLowerCase().includes(q);

    const matchedSubtopics = (topic.subtopics || []).filter(sub => 
      sub.title?.toLowerCase().includes(q) || 
      sub.englishTitle?.toLowerCase().includes(q) ||
      sub.definition?.toLowerCase().includes(q) ||
      sub.id?.toLowerCase().includes(q)
    );

    if (matchesTopic) {
      return { ...topic, subtopics: matchedSubtopics.length > 0 ? matchedSubtopics : topic.subtopics };
    }
    if (matchedSubtopics.length > 0) {
      return { ...topic, subtopics: matchedSubtopics };
    }
    return null;
  }).filter(Boolean);

  // تصفية قائمة الأقسام الـ 23 حسب نص البحث
  const filteredRoadmapSections = ROADMAP_SECTIONS.filter(sec => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      sec.title?.toLowerCase().includes(q) ||
      sec.englishTitle?.toLowerCase().includes(q) ||
      sec.description?.toLowerCase().includes(q) ||
      sec.badge?.toLowerCase().includes(q) ||
      String(sec.id) === q ||
      sec.number?.includes(q)
    );
  });

  // كشف الأقسام الأخرى التي تحتوي نتائج مطابقة عند عدم وجود نتائج في القسم الحالي
  const otherMatchingSections = searchQuery ? ROADMAP_SECTIONS.filter(sec => {
    if (sec.id === currentSectionId) return false;
    const q = searchQuery.toLowerCase().trim();
    return (
      sec.title?.toLowerCase().includes(q) ||
      sec.englishTitle?.toLowerCase().includes(q) ||
      sec.description?.toLowerCase().includes(q) ||
      sec.badge?.toLowerCase().includes(q)
    );
  }) : [];

  if (!isOpen) return null;

  return (
    <>
      {/* 1. خلفية معتمة للهواتف والأجهزة اللوحية (<1024px) لإغلاق الدرج عند النقر خارجها */}
      <div 
        onClick={onCloseSidebar}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden animate-fadeIn"
        aria-hidden="true"
      />

      {/* 2. حاوية الدرج الانزلافي للهواتف والشريط الجانبي لسطح المكتب */}
      <aside 
        className={`fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm sm:max-w-md h-full bg-slate-950/95 backdrop-blur-md border-l border-emerald-500/30 lg:relative lg:inset-auto lg:z-auto lg:h-[calc(100vh-61px)] lg:sticky lg:top-[61px] lg:border-l lg:border-slate-800 ${currentWidthClass} flex flex-col overflow-hidden no-print transition-all duration-200 shrink-0 shadow-2xl`}
        dir="rtl"
      >
        
        {/* رأس الشريط الجانبي: أزرار التحكم بالخط، الاتساع، محدد الأقسام، وزر الإغلاق */}
        <div className="p-3 sm:p-4 border-b border-slate-800/80 bg-slate-900/80 shrink-0">
          <div className="flex items-center justify-between gap-1 mb-2.5">
            <span className="text-xs font-extrabold text-emerald-400 flex items-center gap-1.5 font-sans">
              <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>فهرس خريطة الطريق</span>
            </span>

            <div className="flex items-center gap-1.5">
              {/* زر تبديل حجم خط القائمة */}
              <button
                onClick={toggleSidebarFontSize}
                className="text-xs text-slate-300 hover:text-emerald-300 bg-slate-900 hover:bg-slate-850 border border-slate-700/80 px-2 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 font-bold shadow-sm"
                title={`تبديل حجم خط القائمة (الحالي: ${sidebarFontSize === 'normal' ? 'عادي' : sidebarFontSize === 'large' ? 'كبير' : 'كبير جداً'})`}
              >
                <Type className="w-3.5 h-3.5 text-emerald-400" />
                <span>{sidebarFontSize === 'normal' ? 'A' : sidebarFontSize === 'large' ? 'A+' : 'A++'}</span>
              </button>

              {/* زر تبديل اتساع القائمة الجانبية */}
              <button
                onClick={toggleSidebarWidth}
                className="text-xs text-slate-300 hover:text-emerald-300 bg-slate-900 hover:bg-slate-850 border border-slate-700/80 px-2 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
                title={`تبديل اتساع القائمة الجانبية (الحالي: ${sidebarWidth === 'standard' ? 'قياسي' : sidebarWidth === 'expanded' ? 'موسع' : 'أقصى'})`}
              >
                <span>↔️</span>
                <span className="text-[11px] font-mono hidden sm:inline">
                  {sidebarWidth === 'standard' ? 'قياسي' : sidebarWidth === 'expanded' ? 'موسع' : 'أقصى'}
                </span>
              </button>

              {/* زر تبديل قائمة الأقسام الـ 23 */}
              <button
                onClick={() => setShowAllSections(!showAllSections)}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-bold cursor-pointer flex items-center gap-1 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-800/60 px-2.5 py-1 rounded-lg transition-colors shadow-sm"
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span>{showAllSections ? "إخفاء" : "الأقسام (23)"}</span>
              </button>

              {/* زر إغلاق الدرج على الهواتف / التركيز */}
              {onCloseSidebar && (
                <button
                  onClick={onCloseSidebar}
                  className="p-1 text-slate-400 hover:text-rose-400 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
                  title="إغلاق القائمة الجانبية (وضع التركيز)"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* كارت القسم النشط مع مؤشر الإنجاز وشريط التقدم */}
          <div className="p-3 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-emerald-500/30 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                القسم {sectionData?.number || currentSectionId} من 23 • {sectionData?.badge || "المسار الأساسي"}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                {totalSectionSubtopics} درساً
              </span>
            </div>

            <h2 className={`${currentFont.sectionTitle} text-white mt-2 leading-snug font-sans`}>
              {sectionData?.title || `القسم ${currentSectionId}`}
            </h2>
            {sectionData?.englishTitle && (
              <p className="text-[11px] sm:text-xs text-slate-400 truncate mt-0.5 font-mono">
                {sectionData.englishTitle}
              </p>
            )}

            {/* شريط تقدم القسم */}
            <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 flex-1 ml-2">
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                    style={{ width: `${sectionProgressPercent}%` }}
                  />
                </div>
              </div>
              <span className="font-mono font-bold text-emerald-400 shrink-0">
                {completedSectionSubtopics}/{totalSectionSubtopics} (%{sectionProgressPercent})
              </span>
            </div>
          </div>
        </div>

        {/* جسم القائمة الجانبية القابل للتمرير */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-3.5 space-y-3.5 font-sans">
          
          {/* قائمة تبديل الأقسام الـ 23 الكاملة (تفتح عند النقر على زر الأقسام) */}
          {showAllSections && (
            <div className="p-3 bg-slate-900/95 rounded-2xl border border-emerald-800/60 space-y-2 shadow-2xl animate-fadeIn">
              <div className="flex items-center justify-between mb-2 px-1 border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-emerald-300">اختر القسم للدراسة:</span>
                <span className="text-[11px] text-slate-400 font-mono">23 قسماً تخصصياً</span>
              </div>

              <div className="max-h-72 overflow-y-auto space-y-1.5 pl-1">
                {filteredRoadmapSections.map(sec => {
                  const isActive = sec.id === currentSectionId;

                  return (
                    <button 
                      key={sec.id}
                      onClick={() => handleSectionSelect(sec.id)}
                      className={`w-full p-2.5 rounded-xl flex items-center justify-between transition-all text-right cursor-pointer ${
                        isActive 
                          ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/40 font-bold shadow-md' 
                          : 'bg-slate-800/70 text-slate-200 hover:bg-slate-750 hover:text-white border border-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className="font-mono text-xs bg-slate-950 px-2 py-0.5 rounded text-emerald-400 font-bold border border-slate-800">
                          {sec.number}
                        </span>
                        <span className={`${currentFont.subtopicTitle} truncate font-sans`}>{sec.title}</span>
                      </div>

                      <div className="shrink-0 flex items-center gap-1 mr-1">
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30 font-medium">
                          {sec.badge}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* روابط العروض المرجعية الخاصة للقسم (إنفوجرافيك، ملخص، مرجع، مشروعات، استوديوهات) */}
          <div className="space-y-1.5 pb-3 border-b border-slate-800/80">
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => handleSpecialViewSelect('infographic')}
                className={`p-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all text-right cursor-pointer ${
                  specialView === 'infographic' 
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-md' 
                    : 'text-slate-300 bg-slate-900/60 hover:bg-slate-850 hover:text-white border border-slate-800/80'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className={`${currentFont.specialView} truncate`}>إنفوجرافيك القسم</span>
              </button>

              <button
                onClick={() => handleSpecialViewSelect('summary')}
                className={`p-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all text-right cursor-pointer ${
                  specialView === 'summary' 
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-md' 
                    : 'text-slate-300 bg-slate-900/60 hover:bg-slate-850 hover:text-white border border-slate-800/80'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className={`${currentFont.specialView} truncate`}>خلاصة الذهب</span>
              </button>

              <button
                onClick={() => handleSpecialViewSelect('cheatsheet')}
                className={`p-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all text-right cursor-pointer ${
                  specialView === 'cheatsheet' 
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-md' 
                    : 'text-slate-300 bg-slate-900/60 hover:bg-slate-850 hover:text-white border border-slate-800/80'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span className={`${currentFont.specialView} truncate`}>المرجع السريع</span>
              </button>

              <button
                onClick={() => handleSpecialViewSelect('project')}
                className={`p-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all text-right cursor-pointer ${
                  specialView === 'project' 
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-md' 
                    : 'text-slate-300 bg-slate-900/60 hover:bg-slate-850 hover:text-white border border-slate-800/80'
                }`}
              >
                <FolderGit2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className={`${currentFont.specialView} truncate`}>مشروع القسم</span>
              </button>
            </div>

            {/* أزرار الاستوديوهات التفاعلية الإضافية إن وجدت */}
            {onOpenInfographicGallery && (
              <button
                onClick={handleGalleryClick}
                className="w-full flex items-center justify-between p-2.5 rounded-xl transition-all text-right cursor-pointer text-emerald-200 bg-emerald-950/30 hover:bg-emerald-900/50 border border-emerald-800/40 shadow-sm"
                title="تصفح جميع بطاقات الإنفوجرافيك للدروس في المعرض الشامل"
              >
                <span className="flex items-center gap-2 truncate">
                  <ImageIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className={`${currentFont.specialView} truncate font-bold`}>معرض الإنفوجرافيك الشامل</span>
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold shrink-0">
                  981 درساً
                </span>
              </button>
            )}

            {onOpenShortcuts && (
              <button
                onClick={handleShortcutsClick}
                className="w-full flex items-center justify-between p-2.5 rounded-xl transition-all text-right cursor-pointer text-sky-200 bg-sky-950/30 hover:bg-sky-900/50 border border-sky-800/50 shadow-sm"
                title="موسوعة ودليل الاختصارات وأوامر الذكاء الاصطناعي بالعامية المصرية (Ctrl + /)"
              >
                <span className="flex items-center gap-2 truncate">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className={`${currentFont.specialView} truncate font-bold text-sky-200`}>دليل الاختصارات والذكاء</span>
                </span>
                <span className="text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-full font-bold shrink-0 font-sans">
                  بالعامية ⚡
                </span>
              </button>
            )}
          </div>

          {/* شريط التحكم في طي وتوسيع الأكورديون وعدد الموضوعات */}
          <div className="flex items-center justify-between px-1 text-xs text-slate-400">
            <span className="font-bold text-slate-300">موضوعات ودروس القسم:</span>
            <button
              onClick={toggleAllTopics}
              className="flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 cursor-pointer font-medium hover:underline"
            >
              <ChevronsUpDown className="w-3.5 h-3.5" />
              <span>طي / توسيع الكل</span>
            </button>
          </div>

          {/* قائمة الموضوعات والدروس التفصيلية (Accordion) */}
          <div className="space-y-3">
            {filteredTopics.length === 0 ? (
              <div className="p-6 text-center rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
                <p className="text-slate-400 text-xs">
                  لا توجد موضوعات مطابقة للبحث الحالي في هذا القسم
                </p>
                {otherMatchingSections.length > 0 && (
                  <div className="pt-2 border-t border-slate-800 text-right">
                    <span className="text-[11px] font-bold text-emerald-400 block mb-2">
                      تم العثور على نتائج في أقسام أخرى:
                    </span>
                    <div className="space-y-1">
                      {otherMatchingSections.slice(0, 3).map(sec => (
                        <button
                          key={sec.id}
                          onClick={() => handleSectionSelect(sec.id)}
                          className="w-full text-right p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-xs text-slate-200 flex items-center justify-between cursor-pointer transition-colors"
                        >
                          <span className="truncate">{sec.title}</span>
                          <span className="text-[10px] text-emerald-400 font-mono shrink-0 mr-1">
                            القسم {sec.number} ↗
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              filteredTopics.map((topic, tIdx) => {
                const isExpanded = expandedTopics[topic.id] !== false;
                const topicSubtopics = topic.subtopics || [];
                const topicCompletedCount = topicSubtopics.filter(s => completedSubtopics.has(s.id)).length;
                const isTopicAllDone = topicSubtopics.length > 0 && topicCompletedCount === topicSubtopics.length;

                return (
                  <div 
                    key={topic.id} 
                    className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden shadow-sm transition-all"
                  >
                    
                    {/* شريط عنوان الموضوع الرئيسي (Accordion Header) */}
                    <button
                      onClick={() => toggleTopic(topic.id)}
                      className="w-full p-3 flex items-center justify-between text-right hover:bg-slate-850/80 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <span className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-[10px] shrink-0 font-mono">
                          {tIdx + 1}
                        </span>
                        <div className="overflow-hidden">
                          <h3 className={`${currentFont.topicTitle} text-slate-200 truncate font-sans`}>
                            {topic.title}
                          </h3>
                          {topic.englishTitle && (
                            <p className="text-[10px] font-mono text-slate-400 truncate">
                              {topic.englishTitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 mr-2">
                        {isTopicAllDone ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <span className="text-[10px] text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded-full font-mono">
                            {topicCompletedCount}/{topicSubtopics.length}
                          </span>
                        )}
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronLeft className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {/* قائمة الدروس الفرعية (Accordion Content) */}
                    {isExpanded && (
                      <div className="p-2 pt-0 space-y-1.5 bg-slate-950/40">
                        {topicSubtopics.map(sub => {
                          const isActive = !specialView && sub.id === currentSubtopicId;
                          const isDone = completedSubtopics.has(sub.id);

                          return (
                            <button
                              key={sub.id}
                              onClick={() => handleSubtopicSelect(topic.id, sub.id)}
                              className={`w-full text-right p-2.5 rounded-xl flex items-center justify-between transition-all cursor-pointer ${
                                isActive
                                  ? "bg-emerald-500/20 text-emerald-200 border border-emerald-500/40 font-bold shadow-sm"
                                  : isDone
                                    ? "bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-850"
                                    : "bg-slate-900/30 text-slate-400 hover:text-slate-100 hover:bg-slate-850"
                              }`}
                            >
                              <div className="flex items-center gap-2 overflow-hidden">
                                {isDone ? (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                ) : (
                                  <Circle className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                                )}
                                <span className={`${currentFont.subtopicTitle} truncate font-sans`}>
                                  {sub.title}
                                </span>
                              </div>

                              <span className="text-[10px] font-mono text-slate-500 shrink-0 mr-1.5 font-bold">
                                {sub.id}
                              </span>
                            </button>
                          );
                        })}

                        {/* أزرار ختام الموضوع: كويز الفهم والتمرين العملي */}
                        <div className="pt-2 mt-1 border-t border-slate-800/60 grid grid-cols-2 gap-1.5 px-0.5">
                          <button
                            onClick={() => handleSpecialViewSelect(`quiz-${topic.id}`)}
                            className={`p-1.5 rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer text-[11px] font-bold ${
                              specialView === `quiz-${topic.id}`
                                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                : 'bg-slate-900 hover:bg-slate-800 text-slate-300'
                            }`}
                            title="اختبر فهمك لهذا الموضوع (3 أسئلة كويز تفاعلية)"
                          >
                            <HelpCircle className="w-3 h-3 text-purple-400" />
                            <span>كويز ({topic.quiz?.length || 3})</span>
                          </button>

                          <button
                            onClick={() => handleSpecialViewSelect(`exercise-${topic.id}`)}
                            className={`p-1.5 rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer text-[11px] font-bold ${
                              specialView === `exercise-${topic.id}`
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-slate-900 hover:bg-slate-800 text-slate-300'
                            }`}
                            title="تمرين عملي محلول مع التلميحات"
                          >
                            <Award className="w-3 h-3 text-emerald-400" />
                            <span>تمرين عملي</span>
                          </button>
                        </div>

                      </div>
                    )}

                  </div>
                );
              })
            )}
          </div>

        </div>

        {/* تذييل الشريط الجانبي: إحصائيات الإنجاز الكلية */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-950 flex items-center justify-between text-xs text-slate-400 shrink-0 font-sans">
          <span>المنجز: <strong className="text-white font-bold">{completedSubtopics.size}</strong> درساً</span>
          <div className="flex items-center gap-1.5">
            <span>نسبة الإنجاز:</span>
            <span className="text-emerald-400 font-bold font-mono">
              {sectionProgressPercent}%
            </span>
          </div>
        </div>

      </aside>
    </>
  );
}
