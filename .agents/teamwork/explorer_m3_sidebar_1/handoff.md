# Handoff Report: Explorer 2 (Milestone 3 — Mobile Drawer & Sidebar Navigation)

**Date**: 2026-10-30T20:12:00Z  
**Author**: Explorer 2 (`teamwork_explorer`)  
**Scope**: Milestone 3 — `src/components/layout/Sidebar.jsx` and related mobile drawer integration in `src/App.jsx`.  
**Reference Assets**:
- Proposed Component: `e:\KD\lang\.agents\teamwork\explorer_m3_sidebar_1\proposed_Sidebar.jsx`
- Reference File: `e:\KD\lang\react\src\components\layout\Sidebar.jsx`
- Current File: `e:\KD\lang\nodejs\src\components\layout\Sidebar.jsx`
- Test Suites:
  - `e:\KD\lang\nodejs\tests\tier1_features\responsive_layout.test.js` (F21.1–F21.5)
  - `e:\KD\lang\nodejs\tests\tier3_interactions\drawer_and_navigation.test.js` (PAIR.22–PAIR.28)
  - `e:\KD\lang\nodejs\tests\tier4_real_world\shortcuts_and_ai_study.test.js` (E2E.WORKLOAD.6)

---

## 1. Observation

Direct code inspections and test observations revealed the following findings:

### 1.1 Existing `Sidebar.jsx` Deficiencies in `nodejs/`
- **File**: `e:\KD\lang\nodejs\src\components\layout\Sidebar.jsx`
- **Line 74**:
  ```jsx
  <aside className="w-full lg:w-80 xl:w-88 bg-slate-950 border-l border-slate-800 flex flex-col h-[calc(100vh-61px)] sticky top-[61px] overflow-hidden no-print" dir="rtl">
  ```
  - **Issue**: On mobile screens (`<1024px`), the sidebar renders statically in the main layout flow (`w-full` stacked vertically above `<main>` inside `App.jsx`'s `flex-col lg:flex-row`). It is **not** an off-canvas slide-over drawer.
  - **Missing Backdrop**: No backdrop overlay exists (`fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden`).
  - **Missing Auto-close**: No auto-closing callback on mobile when selecting a subtopic or section.
  - **Missing Font Scaling**: No toggle for sidebar typography sizes (`sidebarFontSize`: `normal`, `large`, `xl`).
  - **Missing Width Switching**: No toggle for sidebar width on desktop (`sidebarWidth`: `standard`, `expanded`, `ultra`).
  - **Missing Dismiss Button**: No `X` button to dismiss the drawer or toggle focus mode.
  - **Missing Multi-section Search Discovery**: When searching in a section with no matching topics, no cross-section suggestions are surfaced.

### 1.2 Test Suite Expectations
In `e:\KD\lang\nodejs\tests\tier1_features\responsive_layout.test.js`:
- **Lines 16–22 (Test F21.1)**:
  ```javascript
  const drawerClasses = 'fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm bg-slate-950/95 backdrop-blur-md shadow-2xl';
  assert.ok(drawerClasses.includes('fixed inset-y-0 right-0'));
  assert.ok(drawerClasses.includes('z-50'));
  assert.ok(drawerClasses.includes('w-[88vw]'));
  assert.ok(drawerClasses.includes('max-w-sm'));
  ```
- **Lines 25–34 (Test F21.2)**:
  ```javascript
  let drawerOpen = true;
  const onSelectLesson = (subtopicId) => {
    drawerOpen = false; // Auto-closes drawer on mobile
  };
  onSelectLesson('1.1.1');
  assert.equal(drawerOpen, false, 'Drawer should automatically close after lesson selection');
  ```
- **Lines 37–43 (Test F21.3)**:
  Requires responsive architecture covering 320px to 1920px viewports with zero horizontal overflow (`overflowX: hidden`).

In `e:\KD\lang\nodejs\tests\tier3_interactions\drawer_and_navigation.test.js`:
- **Lines 12–24 (PAIR.22)**:
  Selecting a lesson in the mobile drawer must navigate to the subtopic and automatically close the drawer.
- **Lines 26–38 (PAIR.23)**:
  Real-time search filtering in the mobile drawer must filter topics without interrupting drawer scroll.
- **Lines 41–45 (PAIR.24)**:
  Modals (`z-50`) must layer cleanly above mobile drawer backdrops (`z-40`).

In `e:\KD\lang\nodejs\tests\tier4_real_world\shortcuts_and_ai_study.test.js`:
- **Lines 70–97 (E2E.WORKLOAD.6)**:
  Mobile audit at 320px viewport: tests slide-over drawer (`fixed right-0 w-[88vw] max-w-sm`), search filtering, and auto-close upon lesson selection.

### 1.3 Reference Implementation in `react/`
- **File**: `e:\KD\lang\react\src\components\layout\Sidebar.jsx`
  - Uses backdrop: `fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden` with `onClick={onCloseSidebar}`.
  - Aside styling: `fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm sm:max-w-md h-full bg-slate-900 border-l border-slate-800 lg:relative lg:inset-auto lg:z-auto lg:h-[calc(100vh-65px)] lg:sticky lg:top-[65px] lg:border-0 ${currentWidthClass}`.
  - Persists `sidebarWidth` and `sidebarFontSize` in `localStorage`.
  - Provides quick action links to section views (`summary`, `cheatsheet`, `project`, `infographic`) and modal launchers (`onOpenInfographicGallery`, `onOpenShortcuts`).

---

## 2. Logic Chain

```
[Observation 1.1: Sidebar is static w-full on mobile]
   + [Observation 1.2: F21.1 & E2E.WORKLOAD.6 require 'fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm bg-slate-950/95 backdrop-blur-md shadow-2xl']
   --> [Step 1: Convert aside element to fixed off-canvas on mobile, switching to relative/sticky on lg: screens]

[Observation 1.2: PAIR.24 requires drawer backdrop at z-40, modal at z-50]
   --> [Step 2: Mount backdrop overlay <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden" onClick={onCloseSidebar} />]

[Observation 1.2: F21.2 & PAIR.22 require auto-closing drawer on lesson selection]
   --> [Step 3: Implement internal auto-close helper inside Sidebar.jsx: if (window.innerWidth < 1024 && onCloseSidebar) onCloseSidebar() whenever onSelectSubtopic, onSelectSpecialView, or modal openers are fired]

[Observation 1.1: Lack of font scaling & width toggles]
   + [Observation 1.3: Reference implementation features 3-tier font size (normal, large, xl) and 3-tier width (standard, expanded, ultra) with localStorage persistence]
   --> [Step 4: Integrate sidebarFontSize & sidebarWidth state hooks with localStorage keys 'nodejs_roadmap_sidebar_font_size' and 'nodejs_roadmap_sidebar_width', plus header toggle buttons]

[Dispatch Requirement: Search filter across all 23 sections, 126 topics, 981 subtopics]
   --> [Step 5: Enhance search engine: filter current section topics & subtopics by arabic title, english title, definition, and ID; filter 23-sections switcher; and surface other matching sections if the current section has 0 matches]

[Dispatch Requirement: Section accordion & progress indicators]
   --> [Step 6: Add "Expand/Collapse All" button, topic-level completed count badges (topicCompleted/topicTotal), topic completion checkmark CheckCircle2, and section-level progress bar and percentage in both the header card and footer]
```

---

## 3. Caveats

1. **`App.jsx` State Coordination**:
   For the drawer to open on mobile, `App.jsx` must manage `isSidebarOpen` state and pass `onCloseSidebar={() => setIsSidebarOpen(false)}` to `<Sidebar>`. Similarly, `Navbar.jsx` must render an toggle button (e.g. `onToggleSidebar`) that sets `setIsSidebarOpen(prev => !prev)`.
2. **`isOpen` Prop Fallback**:
   To prevent breaking if `App.jsx` renders `<Sidebar isOpen={isSidebarOpen} />` rather than `{isSidebarOpen && <Sidebar />}`, `Sidebar.jsx` includes `isOpen = true` as a default prop and returns `null` if `!isOpen`.
3. **Z-Index Layering**:
   The drawer backdrop is set to `z-40` and drawer itself to `z-50`. All application modals (such as `GeminiKeyPoolModal`, `CodeFontModal`, `ShortcutsGuideModal`, `BookViewModal`) must have `z-50` or higher to properly display above the drawer and its backdrop.

---

## 4. Conclusion & Concrete Design

### 4.1 Component Prop Interface (`src/components/layout/Sidebar.jsx`)

```typescript
interface SidebarProps {
  // Current active section object (contains id, number, title, englishTitle, badge, topics[])
  sectionData: {
    id: number;
    number?: string;
    title: string;
    englishTitle?: string;
    badge?: string;
    topics: Array<{
      id: string;
      title: string;
      englishTitle?: string;
      quiz?: any[];
      exercise?: any;
      subtopics: Array<{
        id: string;
        title: string;
        englishTitle?: string;
        definition?: string;
        [key: string]: any;
      }>;
    }>;
    [key: string]: any;
  };

  // Section ID (1-23)
  currentSectionId?: number;

  // Callback to change active section (secId: number) => void
  onSelectSection: (sectionId: number) => void;

  // Currently selected topic ID (e.g. "1.1")
  currentTopicId?: string;

  // Currently selected subtopic ID (e.g. "1.1.1")
  currentSubtopicId?: string;

  // Callback when a subtopic is clicked (topicId: string, subtopicId: string) => void
  onSelectSubtopic: (topicId: string, subtopicId: string) => void;

  // Callback when a special view or topic quiz/exercise is clicked (view: string) => void
  onSelectSpecialView: (view: 'infographic' | 'summary' | 'cheatsheet' | 'project' | string) => void;

  // Optional trigger to open Universal Infographic Gallery modal (981 lessons)
  onOpenInfographicGallery?: () => void;

  // Optional trigger to open Egyptian AI Shortcuts Guide modal (Ctrl + /)
  onOpenShortcuts?: () => void;

  // Current active special view identifier or null
  specialView?: string | null;

  // Set of completed subtopic IDs (e.g. Set(["1.1.1", "1.1.2"]))
  completedSubtopics?: Set<string>;

  // Real-time search query from Navbar
  searchQuery?: string;

  // Visibility flag (defaults to true)
  isOpen?: boolean;

  // Callback to close mobile slide-over drawer or exit focus mode
  onCloseSidebar?: () => void;
}
```

---

### 4.2 Exact Unified Diff for `src/components/layout/Sidebar.jsx`

```diff
--- a/src/components/layout/Sidebar.jsx
+++ b/src/components/layout/Sidebar.jsx
@@ -1,22 +1,31 @@
 // src/components/layout/Sidebar.jsx
+// شريط الفهرس الجانبي الموسع لخريطة طريق Node.js (23 قسماً)
+// يدعم: الدرج الانزلافي للهواتف (Mobile Slide-over Drawer) مع Backdrop Blur
+// الإغلاق التلقائي عند اختيار الدروس، تصفية البحث المتقدم، التحكم في حجم الخط والاتساع، ومؤشرات الإنجاز
 import React, { useState, useEffect } from 'react';
 import { 
   ChevronDown, 
   ChevronLeft, 
-  CheckCircle, 
+  CheckCircle2, 
   Circle, 
   BookMarked, 
   FileText, 
   HelpCircle, 
   Award, 
   FolderGit2, 
   Layers,
   Sparkles,
   ArrowRightLeft,
-  Compass,
-  CheckCircle2
+  SlidersHorizontal,
+  Type,
+  X,
+  Image as ImageIcon,
+  Search,
+  ExternalLink,
+  ChevronsUpDown
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
+  onOpenInfographicGallery,
+  onOpenShortcuts,
   specialView,
   completedSubtopics = new Set(),
-  searchQuery = ""
+  searchQuery = "",
+  isOpen = true,
+  onCloseSidebar
 }) {
   const [expandedTopics, setExpandedTopics] = useState({});
   const [showAllSections, setShowAllSections] = useState(false);
+
+  // 1. إعدادات اتساع القائمة الجانبية مع الحفظ في LocalStorage
+  const [sidebarWidth, setSidebarWidth] = useState(() => {
+    try {
+      const saved = localStorage.getItem("nodejs_roadmap_sidebar_width");
+      return saved || "expanded"; // الافتراضي موسع ومريح
+    } catch {
+      return "expanded";
+    }
+  });
+
+  // 2. إعدادات حجم خط نصوص القائمة الجانبية مع الحفظ في LocalStorage
+  const [sidebarFontSize, setSidebarFontSize] = useState(() => {
+    try {
+      const saved = localStorage.getItem("nodejs_roadmap_sidebar_font_size");
+      return saved || "normal";
+    } catch {
+      return "normal";
+    }
+  });
+
+  useEffect(() => {
+    try {
+      localStorage.setItem("nodejs_roadmap_sidebar_width", sidebarWidth);
+    } catch (e) {
+      console.error(e);
+    }
+  }, [sidebarWidth]);
+
+  useEffect(() => {
+    try {
+      localStorage.setItem("nodejs_roadmap_sidebar_font_size", sidebarFontSize);
+    } catch (e) {
+      console.error(e);
+    }
+  }, [sidebarFontSize]);
+
+  const toggleSidebarWidth = () => {
+    setSidebarWidth(prev => {
+      if (prev === 'standard') return 'expanded';
+      if (prev === 'expanded') return 'ultra';
+      return 'standard';
+    });
+  };
+
+  const toggleSidebarFontSize = () => {
+    setSidebarFontSize(prev => {
+      if (prev === 'normal') return 'large';
+      if (prev === 'large') return 'xl';
+      return 'normal';
+    });
+  };
+
+  const widthClasses = {
+    standard: "w-full lg:w-80 xl:w-96",
+    expanded: "w-full lg:w-[420px] xl:w-[460px]",
+    ultra: "w-full lg:w-[480px] xl:w-[520px]"
+  };
+
+  const currentWidthClass = widthClasses[sidebarWidth] || widthClasses.expanded;
+
+  // خريطة أحجام الخطوط في القائمة الجانبية
+  const fontClasses = {
+    normal: {
+      sectionTitle: "text-xs sm:text-sm font-bold",
+      topicTitle: "text-xs sm:text-sm font-bold",
+      subtopicTitle: "text-xs font-medium",
+      badge: "text-[10px]",
+      specialView: "text-xs font-semibold"
+    },
+    large: {
+      sectionTitle: "text-sm sm:text-base font-extrabold",
+      topicTitle: "text-xs sm:text-sm md:text-base font-extrabold",
+      subtopicTitle: "text-xs sm:text-sm font-semibold",
+      badge: "text-[11px]",
+      specialView: "text-sm font-bold"
+    },
+    xl: {
+      sectionTitle: "text-base sm:text-lg font-black",
+      topicTitle: "text-sm sm:text-base md:text-lg font-black",
+      subtopicTitle: "text-sm sm:text-base font-bold",
+      badge: "text-xs",
+      specialView: "text-base font-extrabold"
+    }
+  };
+
+  const currentFont = fontClasses[sidebarFontSize] || fontClasses.normal;
 
   // فتح كافة الموضوعات عند تبديل القسم
   useEffect(() => {
@@ -49,17 +97,80 @@
   const toggleTopic = (id) => {
     setExpandedTopics(prev => ({ ...prev, [id]: !prev[id] }));
   };
 
-  const totalSectionSubtopics = sectionData?.topics 
-    ? sectionData.topics.reduce((sum, t) => sum + (t.subtopics?.length || 0), 0)
-    : 0;
+  const toggleAllTopics = () => {
+    if (!sectionData?.topics) return;
+    const allOpen = sectionData.topics.every(t => expandedTopics[t.id]);
+    const nextState = {};
+    sectionData.topics.forEach(t => {
+      nextState[t.id] = !allOpen;
+    });
+    setExpandedTopics(nextState);
+  };
+
+  // دوال الإغلاق التلقائي للدرج على الهواتف والأجهزة اللوحية (<1024px)
+  const handleSubtopicSelect = (topicId, subtopicId) => {
+    if (onSelectSubtopic) {
+      onSelectSubtopic(topicId, subtopicId);
+    }
+    if (typeof window !== 'undefined' && window.innerWidth < 1024 && onCloseSidebar) {
+      onCloseSidebar();
+    }
+  };
+
+  const handleSpecialViewSelect = (view) => {
+    if (onSelectSpecialView) {
+      onSelectSpecialView(view);
+    }
+    if (typeof window !== 'undefined' && window.innerWidth < 1024 && onCloseSidebar) {
+      onCloseSidebar();
+    }
+  };
+
+  const handleSectionSelect = (secId) => {
+    if (onSelectSection) {
+      onSelectSection(secId);
+      setShowAllSections(false);
+    }
+  };
+
+  const handleGalleryClick = () => {
+    if (onOpenInfographicGallery) onOpenInfographicGallery();
+    if (typeof window !== 'undefined' && window.innerWidth < 1024 && onCloseSidebar) {
+      onCloseSidebar();
+    }
+  };
+
+  const handleShortcutsClick = () => {
+    if (onOpenShortcuts) onOpenShortcuts();
+    if (typeof window !== 'undefined' && window.innerWidth < 1024 && onCloseSidebar) {
+      onCloseSidebar();
+    }
+  };
+
+  // إحصائيات الإنجاز للقسم الحالي
+  const allCurrentSectionSubtopics = (sectionData?.topics || []).flatMap(t => t.subtopics || []);
+  const totalSectionSubtopics = allCurrentSectionSubtopics.length;
+  const completedSectionSubtopics = allCurrentSectionSubtopics.filter(s => completedSubtopics.has(s.id)).length;
+  const sectionProgressPercent = totalSectionSubtopics > 0 
+    ? Math.round((completedSectionSubtopics / totalSectionSubtopics) * 100) 
+    : 0;
 
   // تصفية الموضوعات حسب البحث إذا وجد
   const filteredTopics = (sectionData?.topics || []).map(topic => {
     if (!searchQuery) return topic;
-    const q = searchQuery.toLowerCase();
-    const matchesTopic = topic.title?.toLowerCase().includes(q) || topic.englishTitle?.toLowerCase().includes(q);
+    const q = searchQuery.toLowerCase().trim();
+    const matchesTopic = 
+      topic.title?.toLowerCase().includes(q) || 
+      topic.englishTitle?.toLowerCase().includes(q) ||
+      topic.id?.toLowerCase().includes(q);
+
     const matchedSubtopics = (topic.subtopics || []).filter(sub => 
       sub.title?.toLowerCase().includes(q) || 
       sub.englishTitle?.toLowerCase().includes(q) ||
-      sub.definition?.toLowerCase().includes(q)
+      sub.definition?.toLowerCase().includes(q) ||
+      sub.id?.toLowerCase().includes(q)
     );
 
-    if (matchesTopic) return topic;
+    if (matchesTopic) {
+      return { ...topic, subtopics: matchedSubtopics.length > 0 ? matchedSubtopics : topic.subtopics };
+    }
     if (matchedSubtopics.length > 0) {
       return { ...topic, subtopics: matchedSubtopics };
     }
     return null;
   }).filter(Boolean);
 
+  // تصفية قائمة الأقسام الـ 23 حسب نص البحث
+  const filteredRoadmapSections = ROADMAP_SECTIONS.filter(sec => {
+    if (!searchQuery) return true;
+    const q = searchQuery.toLowerCase().trim();
+    return (
+      sec.title?.toLowerCase().includes(q) ||
+      sec.englishTitle?.toLowerCase().includes(q) ||
+      sec.description?.toLowerCase().includes(q) ||
+      sec.badge?.toLowerCase().includes(q) ||
+      String(sec.id) === q ||
+      sec.number?.includes(q)
+    );
+  });
+
+  // كشف الأقسام الأخرى التي تحتوي نتائج مطابقة عند عدم وجود نتائج في هذا القسم
+  const otherMatchingSections = searchQuery ? ROADMAP_SECTIONS.filter(sec => {
+    if (sec.id === currentSectionId) return false;
+    const q = searchQuery.toLowerCase().trim();
+    return (
+      sec.title?.toLowerCase().includes(q) ||
+      sec.englishTitle?.toLowerCase().includes(q) ||
+      sec.description?.toLowerCase().includes(q) ||
+      sec.badge?.toLowerCase().includes(q)
+    );
+  }) : [];
+
+  if (!isOpen) return null;
+
   return (
-    <aside className="w-full lg:w-80 xl:w-88 bg-slate-950 border-l border-slate-800 flex flex-col h-[calc(100vh-61px)] sticky top-[61px] overflow-hidden no-print" dir="rtl">
+    <>
+      {/* 1. خلفية معتمة للهواتف والأجهزة اللوحية (<1024px) لإغلاق الدرج عند النقر خارجها */}
+      <div 
+        onClick={onCloseSidebar}
+        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden animate-fadeIn"
+        aria-hidden="true"
+      />
+
+      {/* 2. حاوية الدرج الانزلافي للهواتف والشريط الجانبي لسطح المكتب */}
+      <aside 
+        className={`fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm sm:max-w-md h-full bg-slate-950/95 backdrop-blur-md border-l border-emerald-500/30 lg:relative lg:inset-auto lg:z-auto lg:h-[calc(100vh-61px)] lg:sticky lg:top-[61px] lg:border-l lg:border-slate-800 ${currentWidthClass} flex flex-col overflow-hidden no-print transition-all duration-200 shrink-0 shadow-2xl`}
+        dir="rtl"
+      >
```

---

### 4.3 Integration Diff in `src/App.jsx`

To enable drawer toggle, responsive focus modes, and auto-closing coordination:

```diff
--- a/src/App.jsx
+++ b/src/App.jsx
@@ -82,6 +82,21 @@ export default function App() {
   const [searchQuery, setSearchQuery] = useState("");
   const [isLoadingTransition, setIsLoadingTransition] = useState(false);
+
+  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
+    try {
+      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
+        return false; // يبدأ مغلقاً على الشاشات الصغيرة لإبراز محتوى الدرس فوراً
+      }
+      const savedMode = localStorage.getItem("nodejs_roadmap_layout_mode");
+      return savedMode !== "focus";
+    } catch {
+      return true;
+    }
+  });
+
+  const handleToggleSidebar = () => {
+    setIsSidebarOpen(prev => !prev);
+  };
 
@@ -194,6 +209,8 @@ export default function App() {
           completedCount={completedSubtopics.size}
           totalSubtopics={allSubtopics.length || 30}
+          isSidebarOpen={isSidebarOpen}
+          onToggleSidebar={handleToggleSidebar}
         />
 
         <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
           {/* الشريط الجانبي لقائمة الأقسام والدروس */}
-          <Sidebar
+          {isSidebarOpen && (
+            <Sidebar
               sectionData={currentSection}
               currentSectionId={currentSectionId}
               onSelectSection={handleSelectSection}
               currentTopicId={currentTopicId}
               currentSubtopicId={currentSubtopicId}
-              onSelectSubtopic={handleSelectSubtopic}
+              onSelectSubtopic={(topicId, subId) => {
+                handleSelectSubtopic(topicId, subId);
+                if (typeof window !== 'undefined' && window.innerWidth < 1024) {
+                  setIsSidebarOpen(false);
+                }
+              }}
               onSelectSpecialView={(view) => {
                 triggerSmoothTransition(() => setSpecialView(view));
+                if (typeof window !== 'undefined' && window.innerWidth < 1024) {
+                  setIsSidebarOpen(false);
+                }
               }}
               specialView={specialView}
               completedSubtopics={completedSubtopics}
               searchQuery={searchQuery}
+              onCloseSidebar={() => setIsSidebarOpen(false)}
             />
+          )}
```

---

## 5. Verification Method

### 5.1 Verification Commands
1. **Full Test Suite Execution**:
   ```bash
   node nodejs/tests/runner.js
   ```
   **Expected**:
   - `Tier 1: Feature Coverage` -> `Suite: Responsive Architecture, FAB & Egyptian Shortcuts (F21-F23)` (15 tests pass).
   - `Tier 3: Cross-Feature Combinations` -> `Suite: Interaction: Mobile Drawer x Navigation & Progress (F21 x F22/F23)` (7 tests pass).
   - `Tier 4: Real-World Scenarios` -> `Suite: Scenarios 3 & 6: Pro Code Study & Mobile Responsive Audit` (E2E.WORKLOAD.6 passes).

2. **Targeted Sub-suite Execution**:
   ```bash
   node -e "import('./nodejs/tests/tier1_features/responsive_layout.test.js').then(() => import('./nodejs/tests/tier3_interactions/drawer_and_navigation.test.js')).then(() => console.log('Suites loaded successfully'))"
   ```

3. **Vite Production Build Verification**:
   ```bash
   cmd /c "cd nodejs && npm run build"
   ```
   **Expected**: `✓ built in ~3.5s` with 0 syntax or bundle errors.

### 5.2 Visual & Functional Inspection Points
1. **Mobile Emulation (320px–425px)**:
   - Sidebar is closed upon initial load; page displays top Navbar and active lesson.
   - Clicking the Sidebar/Layers button in Navbar slides the drawer in from the right with a smooth off-canvas transition.
   - The dark blurred backdrop (`fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40`) covers the main page.
   - Clicking any lesson automatically closes the drawer and displays the chosen lesson at top scroll.
   - Clicking the backdrop or `X` button dismisses the drawer immediately.
2. **Typography Scaling**:
   - Clicking `A` / `A+` / `A++` dynamically modifies text size across titles and badges, persisting to `localStorage` under `nodejs_roadmap_sidebar_font_size`.
3. **Width Toggle on Desktop (≥1024px)**:
   - Clicking `↔️` cycles between `standard` (80/96), `expanded` (420px/460px), and `ultra` (480px/520px).
4. **Search Filtering**:
   - Typing "Event Loop" or "1.4" instantly filters matching topics and subtopics in the drawer.
   - If no topics match in the current section, the drawer displays quick jump links to other sections that contain matching content.
5. **Progress Meters**:
   - The active section card reflects `X من Y (%Z)` completion with an animated emerald gradient bar.
   - Each topic displays completed lesson counters (`topicCompleted/topicTotal`) and a green `CheckCircle2` when 100% complete.

### 5.3 Invalidation Conditions
- Any horizontal scrollbar appearing at 320px viewport.
- Drawer failing to close when selecting a lesson on `<1024px` viewport.
- Modals (`GeminiKeyPoolModal`, `ShortcutsGuideModal`) being obscured beneath the drawer or backdrop.
