// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Sidebar from './components/layout/Sidebar.jsx';
import LessonViewer from './components/lesson/LessonViewer.jsx';
import LessonSkeleton from './components/common/LessonSkeleton.jsx';
import QuizCard from './components/lesson/QuizCard.jsx';
import ExerciseCard from './components/lesson/ExerciseCard.jsx';
import SummaryView from './components/views/SummaryView.jsx';
import CheatSheetView from './components/views/CheatSheetView.jsx';
import ProjectView from './components/views/ProjectView.jsx';
import SectionInfographic from './components/infographic/SectionInfographic.jsx';
import BookViewModal from './components/book/BookViewModal.jsx';
import GeminiTutorModal from './components/ai/GeminiTutorModal.jsx';
import GeminiKeyPoolModal from './components/ai/GeminiKeyPoolModal.jsx';
import SavedHighlightsModal from './components/common/SavedHighlightsModal.jsx';
import ScrollToTopButton from './components/common/ScrollToTopButton.jsx';
import InfographicGalleryModal from './components/gallery/InfographicGalleryModal.jsx';
import { UiFeedbackProvider } from './context/UiFeedbackContext.jsx';
import { SECTIONS_MAP, getSectionById } from './data/sections/index.js';

export default function App() {
  const [currentSectionId, setCurrentSectionId] = useState(() => {
    try {
      const saved = localStorage.getItem("react_roadmap_current_section");
      return saved ? Number(saved) : 1;
    } catch {
      return 1;
    }
  });

  const currentSection = getSectionById(currentSectionId);

  const [currentTopicId, setCurrentTopicId] = useState(() => {
    return currentSection.topics[0]?.id || "1.1";
  });

  const [currentSubtopicId, setCurrentSubtopicId] = useState(() => {
    return currentSection.topics[0]?.subtopics[0]?.id || "1.1.a";
  });

  const [specialView, setSpecialView] = useState(null);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [isKeyPoolOpen, setIsKeyPoolOpen] = useState(false);
  const [isHighlightsModalOpen, setIsHighlightsModalOpen] = useState(false);
  const [isInfographicGalleryOpen, setIsInfographicGalleryOpen] = useState(false);
  const [galleryInitialSubtopicId, setGalleryInitialSubtopicId] = useState(null);

  const handleOpenInfographicGallery = (subtopicId = null) => {
    setGalleryInitialSubtopicId(subtopicId);
    setIsInfographicGalleryOpen(true);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoadingTransition, setIsLoadingTransition] = useState(false);

  // أنماط العرض والتنسيق: 'default' (متوازن) | 'wide' (عريض ممتد) | 'focus' (ملء الشاشة والتركيز)
  const [layoutMode, setLayoutMode] = useState(() => {
    try {
      return localStorage.getItem("react_roadmap_layout_mode") || "default";
    } catch {
      return "default";
    }
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    try {
      const savedMode = localStorage.getItem("react_roadmap_layout_mode");
      return savedMode !== "focus";
    } catch {
      return true;
    }
  });

  const handleSetLayoutMode = (mode) => {
    setLayoutMode(mode);
    try {
      localStorage.setItem("react_roadmap_layout_mode", mode);
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
    setIsSidebarOpen(prev => {
      const next = !prev;
      if (!next && layoutMode !== "focus") {
        setLayoutMode("focus");
      } else if (next && layoutMode === "focus") {
        setLayoutMode("default");
      }
      return next;
    });
  };

  // حفظ واسترجاع تقدم المتعلم عبر LocalStorage
  const [completedSubtopics, setCompletedSubtopics] = useState(() => {
    try {
      const saved = localStorage.getItem("react_roadmap_completed");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("react_roadmap_completed", JSON.stringify([...completedSubtopics]));
    } catch (e) {
      console.error(e);
    }
  }, [completedSubtopics]);

  useEffect(() => {
    try {
      localStorage.setItem("react_roadmap_current_section", String(currentSectionId));
    } catch (e) {
      console.error(e);
    }
  }, [currentSectionId]);

  // إيجاد الموضوع الفرعي الحالي ضمن القسم النشط
  const allSubtopics = currentSection.topics.flatMap(t => t.subtopics);
  const currentSubtopicIndex = allSubtopics.findIndex(s => s.id === currentSubtopicId);
  const currentSubtopic = allSubtopics[currentSubtopicIndex] || allSubtopics[0] || {};
  const currentTopic = currentSection.topics.find(t => t.id === currentTopicId) || currentSection.topics[0];

  // شريط تقدم قراءة الدرس التفاعلي على مستوى الصفحة كاملة
  const [scrollProgress, setScrollProgress] = useState(0);

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSubtopicId, currentSectionId, specialView]);

  // دالة تشغيل السكيلتون والانتقال السلس
  const triggerSmoothTransition = (callback) => {
    setIsLoadingTransition(true);
    callback();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsLoadingTransition(false);
    }, 180);
  };

  const handleSelectSection = (newSectionId) => {
    triggerSmoothTransition(() => {
      const targetSection = getSectionById(newSectionId);
      setCurrentSectionId(newSectionId);
      if (targetSection && targetSection.topics.length > 0) {
        setCurrentTopicId(targetSection.topics[0].id);
        setCurrentSubtopicId(targetSection.topics[0].subtopics[0].id);
      }
      setSpecialView(null);
    });
  };

  const handleSelectSubtopic = (topicId, subId) => {
    triggerSmoothTransition(() => {
      setCurrentTopicId(topicId);
      setCurrentSubtopicId(subId);
      setSpecialView(null);
    });
  };

  const handleSelectSpecialView = (viewKey) => {
    triggerSmoothTransition(() => {
      setSpecialView(viewKey);
    });
  };

  const handleToggleComplete = (subId) => {
    setCompletedSubtopics(prev => {
      const next = new Set(prev);
      if (next.has(subId)) {
        next.delete(subId);
      } else {
        next.add(subId);
      }
      return next;
    });
  };

  const handleNext = () => {
    if (currentSubtopicIndex < allSubtopics.length - 1) {
      const nextSub = allSubtopics[currentSubtopicIndex + 1];
      const parentTopic = currentSection.topics.find(t => t.subtopics.some(s => s.id === nextSub.id));
      handleSelectSubtopic(parentTopic.id, nextSub.id);
    }
  };

  const handlePrev = () => {
    if (currentSubtopicIndex > 0) {
      const prevSub = allSubtopics[currentSubtopicIndex - 1];
      const parentTopic = currentSection.topics.find(t => t.subtopics.some(s => s.id === prevSub.id));
      handleSelectSubtopic(parentTopic.id, prevSub.id);
    }
  };

  return (
    <UiFeedbackProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        
        {/* 1. الشريط العلوي العام */}
        <Navbar
          currentSection={currentSection}
          onOpenBook={() => setIsBookOpen(true)}
          onOpenTutor={() => setIsTutorOpen(true)}
          onOpenKeyPool={() => setIsKeyPoolOpen(true)}
          onOpenHighlights={() => setIsHighlightsModalOpen(true)}
          onOpenInfographicGallery={() => handleOpenInfographicGallery()}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          completedCount={completedSubtopics.size}
          totalSubtopics={allSubtopics.length}
          layoutMode={layoutMode}
          onChangeLayoutMode={handleSetLayoutMode}
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={handleToggleSidebar}
          scrollProgress={scrollProgress}
        />

        {/* 2. منطقة التخطيط الرئيسية (شريط جانبي + مسرح المحتوى) */}
        <div className="flex-1 flex flex-col lg:flex-row max-w-[1750px] w-full mx-auto px-1 sm:px-3 lg:px-6">
          
          {/* الشريط الجانبي لفهرس الدروس */}
          {isSidebarOpen && (
            <Sidebar
              sectionData={currentSection}
              currentSectionId={currentSectionId}
              onSelectSection={handleSelectSection}
              currentTopicId={currentTopicId}
              currentSubtopicId={currentSubtopicId}
              onSelectSubtopic={handleSelectSubtopic}
              onSelectSpecialView={handleSelectSpecialView}
              onOpenInfographicGallery={() => handleOpenInfographicGallery()}
              specialView={specialView}
              completedSubtopics={completedSubtopics}
              searchQuery={searchQuery}
              onCloseSidebar={() => handleSetLayoutMode('focus')}
            />
          )}

          {/* مساحة العرض الرئيسية للدرس أو الإطلالة الخاصة */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            
            {/* عرض السكيلتون المتحرك أثناء التنقل */}
            {isLoadingTransition ? (
              <LessonSkeleton />
            ) : (
              <>
                {/* إطلالة الملخص العام */}
                {specialView === 'summary' && (
                  <SummaryView 
                    sectionData={currentSection} 
                    onOpenBook={() => setIsBookOpen(true)} 
                  />
                )}

                {/* إطلالة جدول المرجع السريع */}
                {specialView === 'cheatsheet' && (
                  <CheatSheetView 
                    cheatSheet={currentSection.cheatSheet} 
                  />
                )}

                {/* إطلالة المشروع التطبيقي */}
                {specialView === 'project' && (
                  <ProjectView 
                    project={currentSection.capstoneProject || currentSection.miniProject} 
                  />
                )}

                {/* إطلالة إنفوجرافيك القسم الشامل */}
                {specialView === 'infographic' && (
                  <SectionInfographic 
                    sectionData={currentSection} 
                  />
                )}

                {/* إطلالة اختبار الفهم لموضوع رئيسي محدد */}
                {specialView?.startsWith('quiz-') && (
                  <div className="max-w-4xl mx-auto animate-fadeIn">
                    {(() => {
                      const topicId = specialView.replace('quiz-', '');
                      const targetTopic = currentSection.topics.find(t => t.id === topicId) || currentSection.topics[0];
                      return (
                        <QuizCard 
                          topicTitle={targetTopic.title} 
                          questions={targetTopic.quizzes || targetTopic.quiz} 
                        />
                      );
                    })()}
                  </div>
                )}

                {/* إطلالة التمرين العملي لموضوع رئيسي محدد */}
                {specialView?.startsWith('exercise-') && (
                  <div className="max-w-4xl mx-auto animate-fadeIn">
                    {(() => {
                      const topicId = specialView.replace('exercise-', '');
                      const targetTopic = currentSection.topics.find(t => t.id === topicId) || currentSection.topics[0];
                      return (
                        <ExerciseCard 
                          exercise={targetTopic.exercise} 
                          topicTitle={targetTopic.title} 
                        />
                      );
                    })()}
                  </div>
                )}

                {/* إطلالة عارض الدرس القياسي الافتراضي (النقاط الـ 10 الإلزامية) */}
                {!specialView && currentSubtopic && (
                  <LessonViewer
                    subtopic={currentSubtopic}
                    isCompleted={completedSubtopics.has(currentSubtopic.id)}
                    onToggleComplete={handleToggleComplete}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    hasNext={currentSubtopicIndex < allSubtopics.length - 1}
                    hasPrev={currentSubtopicIndex > 0}
                    onOpenTutor={() => setIsTutorOpen(true)}
                    onOpenInfographicGallery={(subId) => handleOpenInfographicGallery(subId)}
                    layoutMode={layoutMode}
                    onChangeLayoutMode={handleSetLayoutMode}
                    isSidebarOpen={isSidebarOpen}
                    onToggleSidebar={handleToggleSidebar}
                  />
                )}
              </>
            )}

          </main>
        </div>

        {/* زر عائم لإظهار القائمة الجانبية فوراً عند إخفائها (وضع ملء الشاشة والتركيز) */}
        {!isSidebarOpen && (
          <button
            onClick={() => handleToggleSidebar()}
            className="fixed right-5 bottom-8 z-40 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 border border-cyan-400/50 cursor-pointer animate-slideUp transition-all text-xs"
            title="إظهار فهرس الدروس والقائمة الجانبية"
          >
            <span className="text-sm">☰</span>
            <span className="font-sans">فهرس الدروس (34)</span>
          </button>
        )}

        {/* 3. نافذة كتاب الـ PDF الإلكتروني الكامل */}
        <BookViewModal
          sectionData={currentSection}
          isOpen={isBookOpen}
          onClose={() => setIsBookOpen(false)}
        />

        {/* 4. نافذة المعلم الذكي (Gemini AI Tutor) */}
        <GeminiTutorModal
          currentSubtopic={currentSubtopic}
          isOpen={isTutorOpen}
          onClose={() => setIsTutorOpen(false)}
          onOpenKeyPool={() => setIsKeyPoolOpen(true)}
        />

        {/* 5. نافذة مجمع مفاتيح Gemini API المتعددة والفحص المتوازي */}
        <GeminiKeyPoolModal
          isOpen={isKeyPoolOpen}
          onClose={() => setIsKeyPoolOpen(false)}
        />

        {/* 6. نافذة التظليلات والمقتطفات المحفوظة من الكود والشرح */}
        <SavedHighlightsModal
          isOpen={isHighlightsModalOpen}
          onClose={() => setIsHighlightsModalOpen(false)}
          currentSubtopicId={currentSubtopic?.id}
        />

        {/* 7. معرض الإنفوجرافيك الشامل لجميع الدروس والأقسام الـ 34 */}
        <InfographicGalleryModal
          isOpen={isInfographicGalleryOpen}
          onClose={() => {
            setIsInfographicGalleryOpen(false);
            setGalleryInitialSubtopicId(null);
          }}
          initialSubtopicId={galleryInitialSubtopicId}
          initialSectionId={currentSectionId}
        />

        {/* 8. زر الصعود الذكي للأعلى مع حلقة مؤشر تقدم قراءة الدرس التفاعلية */}
        <ScrollToTopButton 
          scrollProgress={scrollProgress} 
          subtopicTitle={currentSubtopic?.title} 
        />

      </div>
    </UiFeedbackProvider>
  );
}
