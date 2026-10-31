// src/App.jsx
// منسق الحالة العامة والواجهة التفاعلية لمنصة خريطة طريق Node.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Sidebar from './components/layout/Sidebar.jsx';
import LessonViewer from './components/lesson/LessonViewer.jsx';
import LessonSkeleton from './components/common/LessonSkeleton.jsx';
import SectionInfographic from './components/infographic/SectionInfographic.jsx';
import SummaryView from './components/views/SummaryView.jsx';
import CheatSheetView from './components/views/CheatSheetView.jsx';
import ProjectView from './components/views/ProjectView.jsx';
import BookViewModal from './components/book/BookViewModal.jsx';
import InfographicGalleryModal from './components/gallery/InfographicGalleryModal.jsx';
import GeminiTutorModal from './components/ai/GeminiTutorModal.jsx';
import GeminiKeyPoolModal from './components/ai/GeminiKeyPoolModal.jsx';
import SavedHighlightsModal from './components/common/SavedHighlightsModal.jsx';
import CodeFontModal from './components/common/CodeFontModal.jsx';
import ShortcutsGuideModal from './components/common/ShortcutsGuideModal.jsx';
import ScrollToTopButton from './components/common/ScrollToTopButton.jsx';
import { UiFeedbackProvider } from './context/UiFeedbackContext.jsx';
import { SECTIONS_MAP, getSectionById, fetchSectionData } from './data/sections/index.js';
import { initCodeFont } from './utils/codeFonts.js';

export default function App() {
  const [currentSectionId, setCurrentSectionId] = useState(() => {
    try {
      const saved = Number(localStorage.getItem("nodejs_roadmap_current_section"));
      return (Number.isInteger(saved) && saved >= 1 && saved <= 23) ? saved : 1;
    } catch {
      return 1;
    }
  });

  const [currentSection, setCurrentSection] = useState(() => getSectionById(currentSectionId) || getSectionById(1));
  const [isSectionLoading, setIsSectionLoading] = useState(false);

  useEffect(() => {
    let active = true;
    setIsSectionLoading(true);
    fetchSectionData(currentSectionId)
      .then((data) => {
        if (active) {
          setCurrentSection(data);
          setIsSectionLoading(false);
        }
      })
      .catch((err) => {
        console.error("فشل تحميل بيانات القسم:", err);
        if (active) setIsSectionLoading(false);
      });
    return () => {
      active = false;
    };
  }, [currentSectionId]);

  const [currentTopicId, setCurrentTopicId] = useState(() => {
    return currentSection?.topics?.[0]?.id || "1.1";
  });

  const [currentSubtopicId, setCurrentSubtopicId] = useState(() => {
    return currentSection?.topics?.[0]?.subtopics?.[0]?.id || "1.1.1";
  });

  // مزامنة الموضوع والموضوع الفرعي عند اكتمال تحميل القسم
  useEffect(() => {
    if (currentSection?.topics?.length > 0) {
      const topicExists = currentSection.topics.some(t => t.id === currentTopicId);
      if (!topicExists) {
        const firstTopic = currentSection.topics[0];
        setCurrentTopicId(firstTopic.id);
        if (firstTopic.subtopics?.length > 0) {
          setCurrentSubtopicId(firstTopic.subtopics[0].id);
        }
      } else {
        const activeTopic = currentSection.topics.find(t => t.id === currentTopicId);
        const subExists = activeTopic?.subtopics?.some(s => s.id === currentSubtopicId);
        if (!subExists && activeTopic?.subtopics?.length > 0) {
          setCurrentSubtopicId(activeTopic.subtopics[0].id);
        }
      }
    }
  }, [currentSection]);

  const [specialView, setSpecialView] = useState(null);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [gallerySubtopicId, setGallerySubtopicId] = useState(null);
  const [gallerySectionId, setGallerySectionId] = useState(null);

  const handleOpenGallery = (subtopicId = null, sectionId = null) => {
    setGallerySubtopicId(subtopicId);
    setGallerySectionId(sectionId || currentSectionId);
    setIsGalleryOpen(true);
  };
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [isKeyPoolOpen, setIsKeyPoolOpen] = useState(false);
  const [isHighlightsModalOpen, setIsHighlightsModalOpen] = useState(false);
  const [isCodeFontModalOpen, setIsCodeFontModalOpen] = useState(false);
  const [isShortcutsModalOpen, setIsShortcutsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoadingTransition, setIsLoadingTransition] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // أنماط العرض: 'default' | 'wide' | 'focus'
  const [layoutMode, setLayoutMode] = useState(() => {
    try {
      return localStorage.getItem("nodejs_roadmap_layout_mode") || "default";
    } catch {
      return "default";
    }
  });

  // حالة فتح/إغلاق القائمة الجانبية (تبدأ مغلقة على الهواتف لتفادي حجب المحتوى)
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.innerWidth < 1024) return false;
      const savedMode = localStorage.getItem("nodejs_roadmap_layout_mode");
      return savedMode !== "focus";
    } catch {
      return true;
    }
  });

  // تهيئة خط الأكواد المخصص المعتمد واختصار لوحة المفاتيح لدليل الاختصارات
  useEffect(() => {
    initCodeFont();

    const handleGlobalShortcuts = (e) => {
      // فتح دليل الاختصارات عند الضغط على Ctrl + / أو Cmd + /
      if ((e.ctrlKey || e.metaKey) && (e.key === '/' || e.code === 'Slash')) {
        e.preventDefault();
        setIsShortcutsModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalShortcuts);
    return () => window.removeEventListener('keydown', handleGlobalShortcuts);
  }, []);

  // تتبع شريط تقدم قراءة الدرس التفاعلي على مستوى الصفحة
  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0) {
        const isNearBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 35);
        const current = isNearBottom ? 100 : Math.min(Math.max((window.scrollY / scrollable) * 100, 0), 100);
        setScrollProgress(Math.round(current));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSubtopicId, currentSectionId, specialView]);

  // حفظ واسترجاع تقدم المتعلم عبر LocalStorage
  const [completedSubtopics, setCompletedSubtopics] = useState(() => {
    try {
      const saved = localStorage.getItem("nodejs_roadmap_completed");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("nodejs_roadmap_completed", JSON.stringify([...completedSubtopics]));
    } catch (e) {
      console.error(e);
    }
  }, [completedSubtopics]);

  useEffect(() => {
    try {
      localStorage.setItem("nodejs_roadmap_current_section", String(currentSectionId));
    } catch (e) {
      console.error(e);
    }
  }, [currentSectionId]);

  const handleSetLayoutMode = (mode) => {
    setLayoutMode(mode);
    try {
      localStorage.setItem("nodejs_roadmap_layout_mode", mode);
    } catch (e) {
      console.error(e);
    }
    if (mode === "focus") {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // إيجاد الموضوع الفرعي الحالي ضمن القسم النشط
  const allSubtopics = currentSection?.topics ? currentSection.topics.flatMap(t => t.subtopics || []) : [];
  const currentSubtopicIndex = allSubtopics.findIndex(s => s.id === currentSubtopicId);
  const currentSubtopic = allSubtopics[currentSubtopicIndex] || allSubtopics[0] || {};
  const currentTopic = currentSection?.topics?.find(t => t.id === currentTopicId) || currentSection?.topics?.[0] || {};

  // تشغيل السكيلتون والانتقال السلس
  const triggerSmoothTransition = (callback) => {
    setIsLoadingTransition(true);
    callback();
    setScrollProgress(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsLoadingTransition(false);
    }, 150);
  };

  const handleSelectSection = (newSectionId) => {
    const num = Number(newSectionId);
    if (!Number.isInteger(num) || num < 1 || num > 23) return;
    triggerSmoothTransition(() => {
      setCurrentSectionId(num);
      setSpecialView(null);
    });
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const handleSelectSubtopic = (topicId, subId) => {
    triggerSmoothTransition(() => {
      setCurrentTopicId(topicId);
      setCurrentSubtopicId(subId);
      setSpecialView(null);
    });
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const handleNextLesson = () => {
    if (currentSubtopicIndex < allSubtopics.length - 1) {
      const nextSub = allSubtopics[currentSubtopicIndex + 1];
      triggerSmoothTransition(() => {
        setCurrentSubtopicId(nextSub.id);
        const parentTopic = currentSection.topics.find(t => t.subtopics.some(s => s.id === nextSub.id));
        if (parentTopic) setCurrentTopicId(parentTopic.id);
        setSpecialView(null);
      });
    } else if (currentSectionId < 23) {
      // الانتقال للقسم التالي
      handleSelectSection(currentSectionId + 1);
    }
  };

  const handlePrevLesson = () => {
    if (currentSubtopicIndex > 0) {
      const prevSub = allSubtopics[currentSubtopicIndex - 1];
      triggerSmoothTransition(() => {
        setCurrentSubtopicId(prevSub.id);
        const parentTopic = currentSection.topics.find(t => t.subtopics.some(s => s.id === prevSub.id));
        if (parentTopic) setCurrentTopicId(parentTopic.id);
        setSpecialView(null);
      });
    }
  };

  const handleToggleComplete = () => {
    setCompletedSubtopics(prev => {
      const next = new Set(prev);
      if (next.has(currentSubtopic.id)) {
        next.delete(currentSubtopic.id);
      } else {
        next.add(currentSubtopic.id);
      }
      return next;
    });
  };

  const layoutContainerClass = layoutMode === 'wide' 
    ? 'max-w-[1750px]' 
    : layoutMode === 'focus' 
      ? 'max-w-4xl' 
      : 'max-w-7xl';

  return (
    <UiFeedbackProvider>
      <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden" dir="rtl">
        
        {/* شريط التنقل العلوي العام مع تتبع تقدم القراءة وأزرار النوافذ */}
        <Navbar
          currentSection={currentSection}
          onOpenBook={() => setIsBookOpen(true)}
          onOpenTutor={() => setIsTutorOpen(true)}
          onOpenKeyPool={() => setIsKeyPoolOpen(true)}
          onOpenHighlights={() => setIsHighlightsModalOpen(true)}
          onOpenCodeFont={() => setIsCodeFontModalOpen(true)}
          onOpenShortcuts={() => setIsShortcutsModalOpen(true)}
          onOpenInfographicGallery={() => handleOpenGallery(currentSubtopicId, currentSectionId)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          completedCount={completedSubtopics.size}
          totalSubtopics={allSubtopics.length || 981}
          layoutMode={layoutMode}
          onChangeLayoutMode={handleSetLayoutMode}
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={handleToggleSidebar}
          scrollProgress={scrollProgress}
        />

        <div className={`flex flex-col lg:flex-row ${layoutContainerClass} mx-auto w-full transition-all duration-200`}>
          {/* الشريط الجانبي والدرج الانزلافي للموبايل */}
          {isSidebarOpen && (
            <Sidebar
              sectionData={currentSection}
              currentSectionId={currentSectionId}
              onSelectSection={handleSelectSection}
              currentTopicId={currentTopicId}
              currentSubtopicId={currentSubtopicId}
              onSelectSubtopic={handleSelectSubtopic}
              onSelectSpecialView={(view) => {
                triggerSmoothTransition(() => setSpecialView(view));
                if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                  setIsSidebarOpen(false);
                }
              }}
              onOpenShortcuts={() => setIsShortcutsModalOpen(true)}
              specialView={specialView}
              completedSubtopics={completedSubtopics}
              searchQuery={searchQuery}
              isOpen={isSidebarOpen}
              onCloseSidebar={() => setIsSidebarOpen(false)}
            />
          )}

          {/* منطقة العرض الرئيسية */}
          <main className="flex-1 min-w-0 min-h-[calc(100vh-61px)] p-2 sm:p-4 lg:p-6">
            {isLoadingTransition || isSectionLoading || !currentSection?.topics?.length ? (
              <LessonSkeleton />
            ) : specialView === 'infographic' ? (
              <SectionInfographic sectionData={currentSection} />
            ) : specialView === 'summary' ? (
              <SummaryView 
                sectionData={currentSection} 
                onBackToLessons={() => setSpecialView(null)} 
              />
            ) : specialView === 'cheatsheet' ? (
              <CheatSheetView 
                sectionData={currentSection}
                onBackToLessons={() => setSpecialView(null)} 
              />
            ) : specialView === 'project' ? (
              <ProjectView 
                sectionData={currentSection}
                onBackToLessons={() => setSpecialView(null)} 
              />
            ) : (
              <LessonViewer
                subtopic={currentSubtopic}
                topicTitle={currentTopic?.title || ""}
                sectionTitle={currentSection?.title || ""}
                onNext={handleNextLesson}
                onPrev={handlePrevLesson}
                hasNext={currentSubtopicIndex < allSubtopics.length - 1 || currentSectionId < 23}
                hasPrev={currentSubtopicIndex > 0}
                isCompleted={completedSubtopics.has(currentSubtopic?.id)}
                onToggleComplete={handleToggleComplete}
                onOpenTutor={(lessonTitle) => setIsTutorOpen(true)}
                onOpenInfographicGallery={(subId) => handleOpenGallery(subId, currentSectionId)}
              />
            )}
          </main>
        </div>

        {/* زر الصعود الذكي للأعلى مع حلقة مؤشر تقدم القراءة والاحتفال */}
        <ScrollToTopButton 
          scrollProgress={scrollProgress} 
          subtopicTitle={currentSubtopic?.title} 
        />

        {/* النوافذ العائمة التفاعلية */}
        <BookViewModal
          isOpen={isBookOpen}
          onClose={() => setIsBookOpen(false)}
          currentSection={currentSection}
        />

        <InfographicGalleryModal
          isOpen={isGalleryOpen}
          onClose={() => {
            setIsGalleryOpen(false);
            setGallerySubtopicId(null);
          }}
          initialSubtopicId={gallerySubtopicId}
          initialSectionId={gallerySectionId || currentSectionId}
        />

        <GeminiTutorModal
          isOpen={isTutorOpen}
          onClose={() => setIsTutorOpen(false)}
          currentLessonTitle={currentSubtopic?.title || "Node.js Roadmap"}
          onOpenKeyPool={() => {
            setIsTutorOpen(false);
            setIsKeyPoolOpen(true);
          }}
        />

        <GeminiKeyPoolModal
          isOpen={isKeyPoolOpen}
          onClose={() => setIsKeyPoolOpen(false)}
        />

        <SavedHighlightsModal
          isOpen={isHighlightsModalOpen}
          onClose={() => setIsHighlightsModalOpen(false)}
          currentSubtopicId={currentSubtopic?.id}
        />

        <CodeFontModal
          isOpen={isCodeFontModalOpen}
          onClose={() => setIsCodeFontModalOpen(false)}
        />

        <ShortcutsGuideModal
          isOpen={isShortcutsModalOpen}
          onClose={() => setIsShortcutsModalOpen(false)}
        />

      </div>
    </UiFeedbackProvider>
  );
}
