// src/components/layout/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronLeft, 
  CheckCircle2, 
  Circle, 
  BookMarked, 
  FileText, 
  Award, 
  Rocket, 
  Layers, 
  ArrowRightLeft, 
  Table, 
  Search, 
  X,
  Compass
} from 'lucide-react';
import { SECTIONS_META, CATEGORIES } from '../../data/roadmapMeta.js';

export default function Sidebar({
  sectionData,
  currentSectionId = 1,
  onSelectSection,
  currentSubtopicId,
  onSelectSubtopic,
  onSelectSpecialView,
  specialView,
  completedSubtopics = new Set(),
  searchQuery = "",
  isOpen = false,
  onClose
}) {
  const [expandedTopics, setExpandedTopics] = useState({});
  const [showAllSections, setShowAllSections] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  // توسيع موضوعات القسم تلقائياً
  useEffect(() => {
    if (sectionData?.topics) {
      const initial = {};
      sectionData.topics.forEach(t => {
        const tId = t.topicId || t.id;
        initial[tId] = true;
      });
      setExpandedTopics(initial);
    }
  }, [sectionData?.id]);

  const toggleTopic = (id) => {
    setExpandedTopics(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // تصفية الأقسام بحسب التصنيف
  const filteredSectionsMeta = SECTIONS_META.filter(s => {
    if (selectedCategory === "الكل") return true;
    return s.category === selectedCategory;
  });

  // تصفية الموضوعات بحسب كلمة البحث إن وجدت
  const filteredTopics = (sectionData?.topics || []).map(topic => {
    if (!searchQuery) return topic;
    const q = searchQuery.toLowerCase();
    const matchesTopic = topic.title?.toLowerCase().includes(q);
    const matchedSubtopics = (topic.subtopics || []).filter(sub => 
      sub.title?.toLowerCase().includes(q) || 
      (sub.englishTitle || '')?.toLowerCase().includes(q) ||
      (sub.definition || '')?.toLowerCase().includes(q)
    );

    if (matchesTopic) return topic;
    if (matchedSubtopics.length > 0) {
      return { ...topic, subtopics: matchedSubtopics };
    }
    return null;
  }).filter(Boolean);

  return (
    <>
      {/* خلفية التعتيم على الموبايل */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-30 lg:hidden"
        />
      )}

      <aside className={`fixed lg:sticky top-[61px] right-0 bottom-0 z-40 w-80 sm:w-88 bg-[#060814] border-l border-purple-500/20 flex flex-col h-[calc(100vh-61px)] overflow-hidden transition-transform duration-300 no-print ${
        isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
      }`} dir="rtl">
        
        {/* 1. زر محدد القسم النشط والقائمة المنسدلة لاختيار أي قسم من الـ 33 */}
        <div className="p-3 border-b border-purple-500/15 bg-[#0a0e24]/80">
          <div className="flex items-center justify-between gap-2 mb-2 lg:hidden">
            <span className="text-xs font-bold text-slate-300">خريطة المنهاج</span>
            <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={() => setShowAllSections(!showAllSections)}
            className="w-full flex items-center justify-between p-3 rounded-2xl bg-[#0f1430] hover:bg-purple-900/30 border border-purple-500/20 transition-all text-right shadow-sm cursor-pointer"
          >
            <div className="overflow-hidden">
              <span className="text-[10px] uppercase font-bold text-purple-400 block tracking-wider font-mono">
                القسم {sectionData?.id || currentSectionId} من 33 • {sectionData?.category || "المسار الأساسي"}
              </span>
              <h2 className="text-xs sm:text-sm font-bold text-white truncate mt-0.5 font-sans">
                {sectionData?.title || `القسم ${currentSectionId}`}
              </h2>
            </div>
            <ArrowRightLeft className="w-4 h-4 text-purple-400 shrink-0 mr-2" />
          </button>

          {/* قائمة الأقسام الـ 33 الكاملة القابلة للتمرير مع فلتر التصنيف */}
          {showAllSections && (
            <div className="mt-2.5 max-h-80 overflow-y-auto space-y-2 p-2 bg-[#0b0f24] border border-purple-500/30 rounded-2xl shadow-2xl animate-in fade-in duration-150">
              <div className="flex items-center justify-between px-2 pt-1">
                <span className="text-[11px] font-bold text-slate-300 font-sans">الأقسام الـ 33 الكاملة:</span>
                <span className="text-[10px] text-purple-400 font-mono">33 قسماً</span>
              </div>

              {/* فلتر التصنيفات السريع */}
              <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
                {CATEGORIES.slice(0, 8).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-purple-600 text-white font-bold'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="space-y-1">
                {filteredSectionsMeta.map((sec) => {
                  const isCurrent = sec.id === currentSectionId;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => {
                        onSelectSection(sec.id);
                        setShowAllSections(false);
                      }}
                      className={`w-full text-right p-2.5 rounded-xl text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${
                        isCurrent
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-md shadow-purple-600/30'
                          : 'text-slate-300 hover:bg-[#0f1430] hover:text-white'
                      }`}
                    >
                      <div className="truncate">
                        <span className="font-mono text-[10px] opacity-80 ml-1.5">[{sec.id}]</span>
                        <span>{sec.title}</span>
                      </div>
                      <span className="text-[10px] font-mono opacity-80 shrink-0">
                        {sec.subtopicsCount} درس
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* 2. أزرار العروض المرجعية الخاصة بالقسم (ملخص، جدول مرجعي، مشروع) */}
        <div className="p-2 border-b border-purple-500/15 bg-[#080b18] grid grid-cols-4 gap-1">
          <button
            onClick={() => onSelectSpecialView(null)}
            className={`py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all text-center cursor-pointer ${
              specialView === null
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            الدروس
          </button>
          <button
            onClick={() => onSelectSpecialView('summary')}
            className={`py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all text-center cursor-pointer ${
              specialView === 'summary'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            الملخص
          </button>
          <button
            onClick={() => onSelectSpecialView('cheatsheet')}
            className={`py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all text-center cursor-pointer ${
              specialView === 'cheatsheet'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            الأوامر
          </button>
          <button
            onClick={() => onSelectSpecialView('project')}
            className={`py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all text-center cursor-pointer ${
              specialView === 'project'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            المشروع
          </button>
        </div>

        {/* 3. قائمة الدروس والموضوعات التفاعلية */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {filteredTopics.map((topic, tIdx) => {
            const topicId = topic.topicId || topic.id || tIdx + 1;
            const isExpanded = expandedTopics[topicId] !== false;

            return (
              <div key={topicId} className="rounded-2xl border border-purple-500/10 bg-[#080b18]/60 overflow-hidden">
                <button
                  onClick={() => toggleTopic(topicId)}
                  className="w-full flex items-center justify-between p-3 text-right hover:bg-purple-950/20 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                      {tIdx + 1}
                    </span>
                    <h3 className="text-xs font-bold text-slate-200 truncate font-sans">
                      {topic.title}
                    </h3>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                {isExpanded && (
                  <div className="p-1 space-y-0.5 border-t border-purple-500/10 bg-[#060814]/80">
                    {topic.subtopics?.map((sub, sIdx) => {
                      const subId = sub.subId || `${sectionData?.id || 1}.${tIdx + 1}.${sIdx + 1}`;
                      const isSelected = specialView === null && currentSubtopicId === subId;
                      const isDone = completedSubtopics.has(subId);

                      return (
                        <button
                          key={subId}
                          onClick={() => {
                            onSelectSubtopic(subId);
                            if (window.innerWidth < 1024 && onClose) onClose();
                          }}
                          className={`w-full text-right p-2.5 rounded-xl text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${
                            isSelected
                              ? 'bg-purple-600/30 border border-purple-500 text-white font-bold shadow-sm'
                              : 'text-slate-300 hover:bg-[#0f1430] hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            {isDone ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            ) : (
                              <Circle className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                            )}
                            <span className="truncate font-sans">{sub.title}</span>
                          </div>
                          <span className="text-[10px] font-mono text-purple-400/80 shrink-0">
                            {subId}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {filteredTopics.length === 0 && (
            <div className="py-12 text-center text-slate-500 text-xs font-sans">
              لا توجد موضوعات مطابقة لكلمة البحث في هذا القسم
            </div>
          )}
        </div>

      </aside>
    </>
  );
}
