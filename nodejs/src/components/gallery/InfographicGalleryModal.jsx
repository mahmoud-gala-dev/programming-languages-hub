// src/components/gallery/InfographicGalleryModal.jsx
// معرض الإنفوجرافيك الشامل لجميع دروس خريطة طريق Node.js (كافة الأقسام الـ 23 و 981 درساً)
// يدعم التصفح السريع، البحث اللحظي، الفلترة المزدوجة (الأقسام + 5 ثيمات نيون)، ونمط السلايدر المفرد والتصدير 4K
import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Search, 
  Image as ImageIcon, 
  Grid, 
  Maximize2, 
  ChevronRight, 
  ChevronLeft, 
  Download, 
  Sparkles, 
  Filter, 
  Layers, 
  FolderOpen,
  Workflow,
  Loader2
} from 'lucide-react';
import { 
  loadAllInfographics, 
  getAllInfographics, 
  INFOGRAPHIC_THEMES 
} from '../../utils/infographicRegistry.js';
import { ROADMAP_SECTIONS } from '../../data/roadmapMeta.js';
import InfographicCard from '../infographic/InfographicCard.jsx';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function InfographicGalleryModal({ 
  isOpen, 
  onClose, 
  initialSubtopicId = null,
  initialSectionId = null 
}) {
  const showToast = useToast();
  const [allInfographics, setAllInfographics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState(initialSectionId || 'all');
  const [selectedThemeFilter, setSelectedThemeFilter] = useState('all');
  const [viewMode, setViewMode] = useState(initialSubtopicId ? 'single' : 'grid'); // 'grid' | 'single'
  const [currentIndex, setCurrentIndex] = useState(0);

  // تحميل واستخراج كافة بطاقات الإنفوجرافيك الـ 981 لجميع الأقسام عند فتح النافذة
  useEffect(() => {
    if (isOpen) {
      // 1. عرض البيانات المتوفرة فوراً في الذاكرة لتفادي الانتظار
      const cached = getAllInfographics();
      if (cached && cached.length > 0) {
        setAllInfographics(cached);
      }

      // 2. إذا لم تكتمل كافة الأقسام الـ 23، يتم جلبها بسلاسة في الخلفية
      if (!cached || cached.length < 900) {
        setIsLoading(true);
        loadAllInfographics()
          .then(items => {
            setAllInfographics(items);
            setIsLoading(false);
            if (showToast && (!cached || cached.length === 0)) {
              showToast(`تم تجهيز كافة بطاقات المعرض (${items.length} إنفوجرافيك) بنجاح! 🎨`, "success");
            }
          })
          .catch(err => {
            console.error("فشل تحميل بطاقات الإنفوجرافيك الشاملة:", err);
            setIsLoading(false);
          });
      }

      // 3. توجيه العرض للدرس الأولي إن وجد
      if (initialSubtopicId) {
        const foundIdx = (cached || []).findIndex(item => item.id === initialSubtopicId);
        if (foundIdx !== -1) {
          setCurrentIndex(foundIdx);
          setViewMode('single');
        }
      } else if (initialSectionId) {
        setSelectedSectionId(initialSectionId);
      }
    }
  }, [isOpen, initialSubtopicId, initialSectionId]);

  // تصفية الإنفوجرافيكس حسب البحث والقسم والثيم المختار
  const filteredList = useMemo(() => {
    let list = allInfographics;

    // فلترة حسب القسم
    if (selectedSectionId !== 'all') {
      const secNum = parseInt(selectedSectionId, 10);
      list = list.filter(item => item.sectionId === secNum);
    }

    // فلترة حسب الثيم
    if (selectedThemeFilter !== 'all') {
      list = list.filter(item => item.theme === selectedThemeFilter);
    }

    // فلترة حسب البحث
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(item => 
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.englishTitle && item.englishTitle.toLowerCase().includes(q)) ||
        (item.id && item.id.toLowerCase().includes(q)) ||
        (item.sectionTitle && item.sectionTitle.toLowerCase().includes(q)) ||
        (item.definition && item.definition.toLowerCase().includes(q)) ||
        (item.analogy && item.analogy.toLowerCase().includes(q))
      );
    }

    return list;
  }, [allInfographics, selectedSectionId, selectedThemeFilter, searchQuery]);

  // إبقاء الفهرس الحالي ضمن الحدود الصالحة
  useEffect(() => {
    if (currentIndex >= filteredList.length) {
      setCurrentIndex(Math.max(0, filteredList.length - 1));
    }
  }, [filteredList.length, currentIndex]);

  // التنقل عبر لوحة المفاتيح
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (viewMode === 'single') {
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
          handlePrev();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, viewMode, currentIndex, filteredList.length]);

  if (!isOpen) return null;

  const currentItem = filteredList[currentIndex];

  const handleNext = () => {
    if (currentIndex < filteredList.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(filteredList.length > 0 ? filteredList.length - 1 : 0);
    }
  };

  const handleSelectFromGrid = (index) => {
    setCurrentIndex(index);
    setViewMode('single');
  };

  return typeof document !== 'undefined' ? createPortal(
    <div className="fixed inset-0 z-[99999] w-screen h-screen min-h-screen bg-black/90 backdrop-blur-md flex flex-col p-2 sm:p-4 md:p-6 animate-fadeIn" dir="rtl">
      
      {/* بطاقة الحاوية الرئيسية لمعرض الإنفوجرافيك */}
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-7xl mx-auto flex flex-col h-full shadow-2xl overflow-hidden animate-slideUp">
        
        {/* 1. الترويسة الرئيسية للمعرض */}
        <div className="px-5 py-4 border-b border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white font-sans flex items-center gap-2">
                معرض الإنفوجرافيك الشامل لـ Node.js
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                  {isLoading && <Loader2 className="w-3 h-3 animate-spin" />}
                  {filteredList.length} بطاقة بصرية
                </span>
              </h2>
              <p className="text-xs text-slate-400 font-sans hidden sm:block">
                تصفح معماري سريع وبطاقات 4K فائقة الوضوح لجميع الـ 981 درساً عبر الأقسام الـ 23
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* مبدل نمط العرض: شبكة البطاقات أو السلايدر المفرد */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="عرض شبكة البطاقات المصغرة"
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">شبكة البطاقات</span>
              </button>

              <button
                onClick={() => setViewMode('single')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'single'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="عرض وتكبير بطاقة مفردة مع السلايدر"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">سلايدر درس بدرس</span>
              </button>
            </div>

            {/* زر إغلاق المعرض */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer border border-slate-800"
              title="إغلاق المعرض (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. شريط البحث والفلترة حسب الأقسام والثيمات الخمسة */}
        <div className="p-3.5 sm:px-5 border-b border-slate-800/80 bg-slate-950/40 flex flex-wrap items-center gap-3 shrink-0">
          
          {/* حقل البحث اللحظي */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في عناوين وشروحات الإنفوجرافيك (مثال: Event Loop، Streams، Redis، JWT)..."
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pr-9 pl-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* قائمة اختيار القسم من الأقسام الـ 23 */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-emerald-400 shrink-0" />
            <select
              value={selectedSectionId}
              onChange={(e) => {
                setSelectedSectionId(e.target.value);
                setCurrentIndex(0);
              }}
              className="bg-slate-900 border border-slate-700/80 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500 font-sans cursor-pointer max-w-[220px] sm:max-w-[280px] truncate"
            >
              <option value="all">🌐 كافة الأقسام (جميع الـ 23 قسماً)</option>
              {ROADMAP_SECTIONS.map(sec => (
                <option key={sec.id} value={sec.id}>
                  القسم {sec.id}: {sec.title}
                </option>
              ))}
            </select>
          </div>

          {/* أزرار فلترة الثيمات الخمسة */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setSelectedThemeFilter('all')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                selectedThemeFilter === 'all'
                  ? 'bg-slate-750 text-white border border-slate-600 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              جميع الثيمات
            </button>
            {Object.values(INFOGRAPHIC_THEMES).map(th => {
              const isActive = selectedThemeFilter === th.id;
              return (
                <button
                  key={th.id}
                  onClick={() => setSelectedThemeFilter(th.id)}
                  className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    isActive 
                      ? 'text-white shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  style={isActive ? { backgroundColor: th.primary } : {}}
                  title={`فلترة بطاقات ثيم ${th.name}`}
                >
                  <span>{th.icon}</span>
                  <span>{th.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* 3. مساحة العرض (شبكة البطاقات أو السلايدر المفرد) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950/20">
          
          {isLoading && filteredList.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <Loader2 className="w-10 h-10 text-emerald-400 animate-spin mb-3" />
              <h4 className="text-base font-bold text-slate-200">جاري تحميل واستخراج بطاقات الإنفوجرافيك...</h4>
              <p className="text-xs text-slate-500 mt-1">يتم جلب كافة الدروس والمخططات المعمارية بدقة متناهية</p>
            </div>
          ) : filteredList.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <FolderOpen className="w-12 h-12 text-slate-600 mb-3" />
              <h4 className="text-base font-bold text-slate-300">لم يتم العثور على بطاقات مطابقة</h4>
              <p className="text-xs text-slate-500 mt-1">جرب تغيير كلمات البحث أو اختيار قسم مختلف.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedSectionId('all'); setSelectedThemeFilter('all'); }}
                className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                إعادة ضبط التصفية
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            
            /* أ. نمط شبكة البطاقات المصغرة المتطورة بتصاميمها المختلفة (Multi-Themed Grid View) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
              {filteredList.map((item, idx) => {
                const itemTheme = INFOGRAPHIC_THEMES[item.theme] || INFOGRAPHIC_THEMES.cyber;

                return (
                  <div 
                    key={item.id || idx}
                    onClick={() => handleSelectFromGrid(idx)}
                    className="border rounded-3xl p-5 flex flex-col justify-between transition-all hover:scale-[1.01] hover:shadow-2xl group cursor-pointer relative overflow-hidden text-slate-100"
                    style={{ 
                      backgroundColor: itemTheme.bgCard,
                      borderColor: `${itemTheme.primary}35`
                    }}
                  >
                    {/* لمعان خفيف خاص بكل ثيم */}
                    <div 
                      className="absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity"
                      style={{ backgroundColor: itemTheme.glowColor }}
                    ></div>

                    <div>
                      {/* رأس كارت الشبكة */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span 
                          className="text-[10px] font-mono font-black px-2.5 py-0.5 rounded-full border shadow-sm"
                          style={{ 
                            color: itemTheme.primary, 
                            borderColor: `${itemTheme.primary}50`,
                            backgroundColor: `${itemTheme.primary}15`
                          }}
                        >
                          {item.id}
                        </span>
                        
                        <span className="text-[10px] font-sans text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded-md border border-slate-800 truncate max-w-[150px]">
                          {itemTheme.icon} {item.sectionTitle}
                        </span>
                      </div>

                      {/* عنوان ومصطلح الدرس */}
                      <h4 className="text-sm sm:text-base font-black text-white group-hover:text-emerald-300 transition-colors mb-1 font-sans leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-mono mb-2.5 truncate" style={{ color: itemTheme.primary }}>
                        {item.englishTitle}
                      </p>

                      {/* معاينة الشرح المركز */}
                      <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-3.5 font-sans font-medium">
                        {item.definition}
                      </p>
                    </div>

                    {/* معاينة التشبيه الحياتي إن وجد */}
                    {item.analogy && (
                      <div className="bg-amber-950/30 border border-amber-500/25 rounded-xl p-2.5 mb-3 text-[11px] text-amber-200/90 line-clamp-2 leading-relaxed">
                        💡 {item.analogy}
                      </div>
                    )}

                    {/* تذييل الكارت */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                      <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 font-mono">
                        <Workflow className="w-3 h-3 text-emerald-400" />
                        {item.visualDiagram?.label?.split(' ')[0] || "معماري"}
                      </span>

                      <span 
                        className="font-extrabold flex items-center gap-1 text-[11px] group-hover:translate-x-[-4px] transition-transform"
                        style={{ color: itemTheme.primary }}
                      >
                        عرض وتكبير ⟵
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          ) : (

            /* ب. نمط السلايدر المفرد والتصفح المتسلسل درس درس (Single Carousel Mode) */
            <div className="max-w-4xl mx-auto space-y-4">
              
              {/* شريط التحكم والتنقل السريع بين البطاقات */}
              <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 p-3 rounded-2xl shadow-md">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                  title="الدرس السابق (سهم يمين)"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>الدرس السابق</span>
                </button>

                <div className="flex items-center gap-2.5 text-center">
                  <span className="text-xs font-bold text-white font-mono bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                    {currentIndex + 1} / {filteredList.length}
                  </span>
                  <span className="text-xs text-slate-300 hidden sm:inline font-sans truncate max-w-[260px] font-bold">
                    {currentItem?.title}
                  </span>
                </div>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                  title="الدرس التالي (سهم يسار)"
                >
                  <span>الدرس التالي</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>

              {/* بطاقة الإنفوجرافيك النشطة بالكامل مع دعم التصدير وتغيير الثيم المباشر */}
              {currentItem && (
                <InfographicCard 
                  subtopic={currentItem} 
                  sectionData={{ id: currentItem.sectionId, title: currentItem.sectionTitle }}
                  overrideTheme={currentItem.theme}
                />
              )}

            </div>
          )}

        </div>

      </div>

    </div>,
    document.body
  ) : null;
}
