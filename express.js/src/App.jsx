// src/App.jsx
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
import GeminiTutorModal from './components/ai/GeminiTutorModal.jsx';
import GeminiKeyPoolModal from './components/ai/GeminiKeyPoolModal.jsx';
import { UiFeedbackProvider } from './context/UiFeedbackContext.jsx';
import { SECTIONS_MAP, getSectionById } from './data/sections/index.js';

export default function App() {
  const [currentSectionId, setCurrentSectionId] = useState(() => {
    try {
      const saved = localStorage.getItem("express_roadmap_current_section");
      return saved ? Number(saved) : 1;
    } catch {
      return 1;
    }
  });

  const currentSection = getSectionById(currentSectionId);

  const [currentTopicId, setCurrentTopicId] = useState(() => {
    return currentSection?.topics?.[0]?.id || "1.1";
  });

  const [currentSubtopicId, setCurrentSubtopicId] = useState(() => {
    return currentSection?.topics?.[0]?.subtopics?.[0]?.id || "s1-m1-a";
  });

  const [specialView, setSpecialView] = useState(null);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [isKeyPoolOpen, setIsKeyPoolOpen] = useState(false);
  const [tutorLessonTitle, setTutorLessonTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoadingTransition, setIsLoadingTransition] = useState(false);

  // حفظ واسترجاع تقدم المتعلم عبر LocalStorage
  const [completedSubtopics, setCompletedSubtopics] = useState(() => {
    try {
      const saved = localStorage.getItem("express_roadmap_completed");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("express_roadmap_completed", JSON.stringify([...completedSubtopics]));
    } catch (e) {
      console.error(e);
    }
  }, [completedSubtopics]);

  useEffect(() => {
    try {
      localStorage.setItem("express_roadmap_current_section", String(currentSectionId));
    } catch (e) {
      console.error(e);
    }
  }, [currentSectionId]);

  // إيجاد الموضوع الفرعي الحالي ضمن القسم النشط
  const allSubtopics = currentSection?.topics ? currentSection.topics.flatMap(t => t.subtopics || []) : [];
  const currentSubtopicIndex = allSubtopics.findIndex(s => s.id === currentSubtopicId);
  const currentSubtopic = allSubtopics[currentSubtopicIndex] || allSubtopics[0] || {};
  const currentTopic = currentSection?.topics?.find(t => t.id === currentTopicId) || currentSection?.topics?.[0] || {};

  // تشغيل السكيلتون والانتقال السلس
  const triggerSmoothTransition = (callback) => {
    setIsLoadingTransition(true);
    callback();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsLoadingTransition(false);
    }, 150);
  };

  const handleSelectSection = (newSectionId) => {
    triggerSmoothTransition(() => {
      const targetSection = getSectionById(newSectionId);
      setCurrentSectionId(newSectionId);
      if (targetSection && targetSection.topics?.length > 0) {
        setCurrentTopicId(targetSection.topics[0].id);
        if (targetSection.topics[0].subtopics?.length > 0) {
          setCurrentSubtopicId(targetSection.topics[0].subtopics[0].id);
        }
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

  const handleNextLesson = () => {
    if (currentSubtopicIndex < allSubtopics.length - 1) {
      const nextSub = allSubtopics[currentSubtopicIndex + 1];
      triggerSmoothTransition(() => {
        setCurrentSubtopicId(nextSub.id);
        const parentTopic = currentSection.topics.find(t => t.subtopics.some(s => s.id === nextSub.id));
        if (parentTopic) setCurrentTopicId(parentTopic.id);
        setSpecialView(null);
      });
    } else if (currentSectionId < 27) {
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
    if (!currentSubtopic?.id) return;
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

  const handleOpenTutorForLesson = (lessonTitle) => {
    setTutorLessonTitle(lessonTitle || currentSubtopic?.title || "Express.js");
    setIsTutorOpen(true);
  };

  return (
    <UiFeedbackProvider>
      <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200" dir="rtl">
        
        {/* شريط التنقل العلوي العام */}
        <Navbar
          currentSection={currentSection}
          onOpenBook={() => setIsBookOpen(true)}
          onOpenTutor={() => handleOpenTutorForLesson()}
          onOpenKeyPool={() => setIsKeyPoolOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          completedCount={completedSubtopics.size}
          totalSubtopics={1315}
        />

        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
          {/* الشريط الجانبي لقائمة الأقسام والدروس */}
          <Sidebar
            sectionData={currentSection}
            currentSectionId={currentSectionId}
            onSelectSection={handleSelectSection}
            currentTopicId={currentTopicId}
            currentSubtopicId={currentSubtopicId}
            onSelectSubtopic={handleSelectSubtopic}
            onSelectSpecialView={(view) => {
              triggerSmoothTransition(() => setSpecialView(view));
            }}
            specialView={specialView}
            completedSubtopics={completedSubtopics}
            searchQuery={searchQuery}
          />

          {/* منطقة العرض الرئيسية */}
          <main className="flex-1 min-w-0 min-h-[calc(100vh-61px)] p-2 sm:p-4 lg:p-6">
            {isLoadingTransition ? (
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
                onBackToLessons={() => setSpecialView(null)} 
              />
            ) : specialView === 'project' ? (
              <ProjectView 
                onBackToLessons={() => setSpecialView(null)} 
              />
            ) : (
              <LessonViewer
                subtopic={currentSubtopic}
                topicTitle={currentTopic?.title || ""}
                sectionTitle={currentSection?.title || ""}
                onNext={handleNextLesson}
                onPrev={handlePrevLesson}
                hasNext={currentSubtopicIndex < allSubtopics.length - 1 || currentSectionId < 27}
                hasPrev={currentSubtopicIndex > 0}
                isCompleted={completedSubtopics.has(currentSubtopic?.id)}
                onToggleComplete={handleToggleComplete}
                onOpenTutor={handleOpenTutorForLesson}
              />
            )}
          </main>
        </div>

        {/* النوافذ العائمة التفاعلية */}
        <BookViewModal
          isOpen={isBookOpen}
          onClose={() => setIsBookOpen(false)}
          currentSection={currentSection}
        />

        <GeminiTutorModal
          isOpen={isTutorOpen}
          onClose={() => setIsTutorOpen(false)}
          currentLessonTitle={tutorLessonTitle || currentSubtopic?.title || "Express.js Roadmap"}
          onOpenKeyPool={() => {
            setIsTutorOpen(false);
            setIsKeyPoolOpen(true);
          }}
        />

        <GeminiKeyPoolModal
          isOpen={isKeyPoolOpen}
          onClose={() => setIsKeyPoolOpen(false)}
        />

      </div>
    </UiFeedbackProvider>
  );
}
