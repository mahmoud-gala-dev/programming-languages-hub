// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Sidebar from './components/layout/Sidebar.jsx';
import LessonViewer from './components/lesson/LessonViewer.jsx';
import LessonSkeleton from './components/common/LessonSkeleton.jsx';
import SummaryView from './components/views/SummaryView.jsx';
import CheatSheetView from './components/views/CheatSheetView.jsx';
import ProjectView from './components/views/ProjectView.jsx';
import BookViewModal from './components/book/BookViewModal.jsx';
import GeminiTutorModal from './components/ai/GeminiTutorModal.jsx';
import GeminiKeyPoolModal from './components/ai/GeminiKeyPoolModal.jsx';
import { UiFeedbackProvider, useToast } from './context/UiFeedbackContext.jsx';
import { ALL_SECTIONS_DATA, getSectionData } from './data/sections/index.js';
import { TOTAL_SUBTOPICS } from './data/roadmapMeta.js';
import { ArrowUp } from 'lucide-react';

function MainApp() {
  const [currentSectionId, setCurrentSectionId] = useState(() => {
    try {
      const saved = localStorage.getItem("aspnet_roadmap_current_section");
      return saved ? Number(saved) : 1;
    } catch {
      return 1;
    }
  });

  const currentSection = getSectionData(currentSectionId);

  const [currentSubtopicId, setCurrentSubtopicId] = useState(() => {
    return currentSection?.topics?.[0]?.subtopics?.[0]?.subId || "1.1.1";
  });

  const [specialView, setSpecialView] = useState(null); // null | 'summary' | 'cheatsheet' | 'project'
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [isKeyPoolOpen, setIsKeyPoolOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoadingTransition, setIsLoadingTransition] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { showToast, triggerConfetti } = useToast();

  // تتبع وإدارة الدروس المكتملة عبر LocalStorage
  const [completedSubtopics, setCompletedSubtopics] = useState(() => {
    try {
      const saved = localStorage.getItem("aspnet_roadmap_completed");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("aspnet_roadmap_completed", JSON.stringify([...completedSubtopics]));
    } catch (e) {
      console.error(e);
    }
  }, [completedSubtopics]);

  useEffect(() => {
    try {
      localStorage.setItem("aspnet_roadmap_current_section", String(currentSectionId));
    } catch (e) {
      console.error(e);
    }
  }, [currentSectionId]);

  // مراقبة شريط التمرير لإظهار شريط التقدم وزر الصعود
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setShowScrollTop(currentScroll > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // تجميع كافة الدروس للقسم النشط
  const allSubtopics = currentSection?.topics ? currentSection.topics.flatMap(t => t.subtopics || []) : [];
  const currentSubtopicIndex = allSubtopics.findIndex(s => s.subId === currentSubtopicId);
  const currentSubtopic = allSubtopics[currentSubtopicIndex] || allSubtopics[0] || {};
  const currentTopic = currentSection?.topics?.find(t => 
    t.subtopics?.some(s => s.subId === currentSubtopicId)
  ) || currentSection?.topics?.[0] || {};

  // تشغيل الانتقال السلس
  const triggerSmoothTransition = (callback) => {
    setIsLoadingTransition(true);
    callback();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsLoadingTransition(false);
    }, 200);
  };

  const handleSelectSection = (secId) => {
    triggerSmoothTransition(() => {
      setCurrentSectionId(secId);
      const nextSec = getSectionData(secId);
      const firstSubId = nextSec?.topics?.[0]?.subtopics?.[0]?.subId || `${secId}.1.1`;
      setCurrentSubtopicId(firstSubId);
      setSpecialView(null);
    });
  };

  const handleSelectSubtopic = (subId) => {
    triggerSmoothTransition(() => {
      setCurrentSubtopicId(subId);
      setSpecialView(null);
    });
  };

  const handleToggleComplete = () => {
    const next = new Set(completedSubtopics);
    if (next.has(currentSubtopicId)) {
      next.delete(currentSubtopicId);
      showToast("تم إلغاء تحديد اكتمال الدرس", "info");
    } else {
      next.add(currentSubtopicId);
      triggerConfetti();
      showToast("رائع جداً! تم إكمال الدرس بنجاح ومواصلة التقدم 🎯", "success");
    }
    setCompletedSubtopics(next);
  };

  const handleNextLesson = () => {
    if (currentSubtopicIndex < allSubtopics.length - 1) {
      const nextSub = allSubtopics[currentSubtopicIndex + 1];
      handleSelectSubtopic(nextSub.subId);
    } else if (currentSectionId < 33) {
      handleSelectSection(currentSectionId + 1);
      showToast(`تهانينا! انتقلت إلى القسم التالي (${currentSectionId + 1}) 🚀`, "success");
    }
  };

  const handlePrevLesson = () => {
    if (currentSubtopicIndex > 0) {
      const prevSub = allSubtopics[currentSubtopicIndex - 1];
      handleSelectSubtopic(prevSub.subId);
    } else if (currentSectionId > 1) {
      handleSelectSection(currentSectionId - 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#060814] text-slate-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-200" dir="rtl">
      
      {/* شريط مؤشر التقدم العلوي المشع أثناء التمرير */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* شريط التنقل العلوي Navbar */}
      <Navbar
        currentSection={currentSection}
        onOpenBook={() => setIsBookOpen(true)}
        onOpenTutor={() => setIsTutorOpen(true)}
        onOpenKeyPool={() => setIsKeyPoolOpen(true)}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        completedCount={completedSubtopics.size}
        totalSubtopics={TOTAL_SUBTOPICS}
      />

      {/* الحاوية الرئيسية (القائمة الجانبية + منطقة المحتوى) */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        
        {/* القائمة الجانبية Sidebar */}
        <Sidebar
          sectionData={currentSection}
          currentSectionId={currentSectionId}
          onSelectSection={handleSelectSection}
          currentSubtopicId={currentSubtopicId}
          onSelectSubtopic={handleSelectSubtopic}
          onSelectSpecialView={setSpecialView}
          specialView={specialView}
          completedSubtopics={completedSubtopics}
          searchQuery={searchQuery}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* مساحة العرض الرئيسية */}
        <main className="flex-1 min-w-0 pb-16">
          {isLoadingTransition ? (
            <LessonSkeleton />
          ) : specialView === 'summary' ? (
            <SummaryView
              sectionData={currentSection}
              onBackToLessons={() => setSpecialView(null)}
              onGoToProject={() => setSpecialView('project')}
              onSelectLesson={handleSelectSubtopic}
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
              onAskTutor={() => setIsTutorOpen(true)}
            />
          ) : (
            <LessonViewer
              subtopic={currentSubtopic}
              topicTitle={currentTopic?.title || ""}
              sectionTitle={currentSection?.title || ""}
              onNext={handleNextLesson}
              onPrev={handlePrevLesson}
              hasNext={currentSubtopicIndex < allSubtopics.length - 1 || currentSectionId < 33}
              hasPrev={currentSubtopicIndex > 0 || currentSectionId > 1}
              isCompleted={completedSubtopics.has(currentSubtopicId)}
              onToggleComplete={handleToggleComplete}
              onOpenTutor={() => setIsTutorOpen(true)}
            />
          )}
        </main>
      </div>

      {/* زر الصعود السريع للأعلى Floating FAB */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#0f1430]/90 hover:bg-purple-600 border border-purple-500/30 text-white shadow-xl shadow-purple-900/40 backdrop-blur-md transition-all cursor-pointer animate-in fade-in zoom-in-90 duration-200"
          title="الصعود للأعلى"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* نافذة استوديو الكتاب الشامل وتصدير الـ PDF */}
      <BookViewModal
        isOpen={isBookOpen}
        onClose={() => setIsBookOpen(false)}
        currentSection={currentSection}
      />

      {/* نافذة المعلم الذكي التفاعلي Gemini AI */}
      <GeminiTutorModal
        isOpen={isTutorOpen}
        onClose={() => setIsTutorOpen(false)}
        currentLessonTitle={currentSubtopic?.title}
        currentLesson={currentSubtopic}
        onOpenKeyPool={() => {
          setIsTutorOpen(false);
          setIsKeyPoolOpen(true);
        }}
      />

      {/* نافذة إدارة مجمع مفاتيح Gemini API */}
      <GeminiKeyPoolModal
        isOpen={isKeyPoolOpen}
        onClose={() => setIsKeyPoolOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <UiFeedbackProvider>
      <MainApp />
    </UiFeedbackProvider>
  );
}
