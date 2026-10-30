// src/components/layout/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronLeft, 
  Circle, 
  Award, 
  FolderGit2, 
  Layers,
  ArrowRightLeft,
  CheckCircle2,
  FileText
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
  specialView,
  completedSubtopics = new Set(),
  searchQuery = ""
}) {
  const [expandedTopics, setExpandedTopics] = useState({});
  const [showAllSections, setShowAllSections] = useState(false);

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

  const filteredTopics = (sectionData?.topics || []).map(topic => {
    if (!searchQuery) return topic;
    const q = searchQuery.toLowerCase();
    const matchesTopic = topic.title?.toLowerCase().includes(q) || topic.englishTitle?.toLowerCase().includes(q);
    const matchedSubtopics = (topic.subtopics || []).filter(sub => 
      sub.title?.toLowerCase().includes(q) || 
      sub.englishTitle?.toLowerCase().includes(q) ||
      sub.definition?.toLowerCase().includes(q)
    );

    if (matchesTopic) return topic;
    if (matchedSubtopics.length > 0) {
      return { ...topic, subtopics: matchedSubtopics };
    }
    return null;
  }).filter(Boolean);

  return (
    <aside className="w-full lg:w-80 xl:w-88 bg-slate-950 border-l border-slate-800 flex flex-col h-[calc(100vh-61px)] sticky top-[61px] overflow-hidden no-print" dir="rtl">
      
      {/* محدد الأقسام */}
      <div className="p-3 border-b border-slate-800 bg-slate-900/60">
        <button
          onClick={() => setShowAllSections(!showAllSections)}
          className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-700/80 transition-all text-right shadow-sm cursor-pointer"
        >
          <div className="overflow-hidden">
            <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">
              القسم {sectionData?.number || currentSectionId} من 27 • {sectionData?.badge || "المسار الأساسي"}
            </span>
            <h2 className="text-xs sm:text-sm font-bold text-white truncate mt-0.5">
              {sectionData?.title || `القسم ${currentSectionId}`}
            </h2>
          </div>
          <ArrowRightLeft className="w-4 h-4 text-amber-400 shrink-0 mr-2" />
        </button>

        {showAllSections && (
          <div className="mt-2.5 max-h-80 overflow-y-auto space-y-1.5 p-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl animate-fadeIn">
            <div className="text-[10px] font-bold text-slate-400 px-2 py-1">
              اختر قسماً من الأقسام الـ 27 للانتقال المباشر:
            </div>
            {ROADMAP_SECTIONS.map((sec) => {
              const isCurrent = sec.id === currentSectionId;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    onSelectSection(sec.id);
                    setShowAllSections(false);
                  }}
                  className={`w-full text-right p-2.5 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer ${
                    isCurrent 
                      ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20" 
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span className="truncate">{sec.title}</span>
                  <span className={`text-[10px] font-mono shrink-0 mr-1.5 px-1.5 py-0.5 rounded ${
                    isCurrent ? "bg-slate-950/20 text-slate-950" : "bg-slate-800 text-slate-400"
                  }`}>
                    {sec.number}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* أزرار العروض المرجعية الخاصة */}
      <div className="p-3 border-b border-slate-800 grid grid-cols-2 gap-1.5 bg-slate-950">
        <button
          onClick={() => onSelectSpecialView('infographic')}
          className={`p-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            specialView === 'infographic'
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black"
              : "bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>إنفوجرافيك القسم</span>
        </button>

        <button
          onClick={() => onSelectSpecialView('summary')}
          className={`p-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            specialView === 'summary'
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black"
              : "bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800"
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>خلاصة الذهب</span>
        </button>

        <button
          onClick={() => onSelectSpecialView('cheatsheet')}
          className={`p-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            specialView === 'cheatsheet'
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black"
              : "bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800"
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>المرجع السريع</span>
        </button>

        <button
          onClick={() => onSelectSpecialView('project')}
          className={`p-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            specialView === 'project'
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black"
              : "bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800"
          }`}
        >
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>المشروعات</span>
        </button>
      </div>

      {/* قائمة الموضوعات والدروس */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 font-sans">
        {filteredTopics.length === 0 ? (
          <div className="p-6 text-center text-slate-500 text-xs">
            لا توجد موضوعات مطابقة للبحث الحالي
          </div>
        ) : (
          filteredTopics.map((topic) => {
            const isExpanded = expandedTopics[topic.id] !== false;
            return (
              <div key={topic.id} className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden">
                
                <button
                  onClick={() => toggleTopic(topic.id)}
                  className="w-full p-3 flex items-center justify-between text-right hover:bg-slate-900 transition-colors cursor-pointer"
                >
                  <div className="overflow-hidden">
                    <h3 className="text-xs font-bold text-slate-200 truncate font-sans">
                      {topic.title}
                    </h3>
                    {topic.englishTitle && (
                      <p className="text-[10px] font-mono text-slate-400 truncate">
                        {topic.englishTitle}
                      </p>
                    )}
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
                  ) : (
                    <ChevronLeft className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
                  )}
                </button>

                {isExpanded && (
                  <div className="p-1.5 pt-0 space-y-1">
                    {topic.subtopics?.map((sub) => {
                      const isActive = !specialView && sub.id === currentSubtopicId;
                      const isCompleted = completedSubtopics.has(sub.id);

                      return (
                        <button
                          key={sub.id}
                          onClick={() => onSelectSubtopic(topic.id, sub.id)}
                          className={`w-full text-right p-2.5 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer ${
                            isActive
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold"
                              : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            {isCompleted ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            ) : (
                              <Circle className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                            )}
                            <span className="truncate">{sub.title}</span>
                          </div>

                          <span className="text-[10px] font-mono text-slate-500 shrink-0 mr-1">
                            {sub.id}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

              </div>
            );
          })
        )}
      </div>

      <div className="p-3 border-t border-slate-800/80 bg-slate-950 text-center text-[11px] text-slate-500">
        خريطة طريق Express.js • 27 قسماً
      </div>

    </aside>
  );
}
