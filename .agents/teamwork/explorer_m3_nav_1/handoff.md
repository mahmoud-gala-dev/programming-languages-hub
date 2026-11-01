# Handoff Report: Milestone 3 — Navbar, Reading Progress & Confetti FAB
**Agent**: explorer_m3_nav_1 (`teamwork_explorer`)  
**Working Directory**: `e:\KD\lang\.agents\teamwork\explorer_m3_nav_1`  
**Parent Agent**: `1e07d5fb-48b5-4e9b-a912-cd7f68f04dc9`  
**Milestone**: Milestone 3 (Features 13 & 14: Navbar, Reading Progress Bar & Circular Confetti FAB)  
**Timestamp**: 2026-10-30T20:12:00Z  

---

## 1. Observation

### 1.1 Existing Codebase State in `nodejs/`
1. **`nodejs/src/components/layout/Navbar.jsx`**:
   - Location: `e:\KD\lang\nodejs\src\components\layout\Navbar.jsx` (129 lines)
   - Current props accepted (lines 7–16):
     ```jsx
     export default function Navbar({
       currentSection,
       onOpenBook,
       onOpenTutor,
       onOpenKeyPool,
       searchQuery,
       setSearchQuery,
       completedCount,
       totalSubtopics = 100
     })
     ```
   - Missing from `Navbar.jsx`:
     - **Reading Progress Bar**: No 0%–100% scroll progress bar mounted to the bottom border of the header.
     - **Modal Launch Buttons**: Missing launch buttons for Code Fonts (`onOpenCodeFont`), Egyptian AI Shortcuts (`onOpenShortcuts`), Saved Highlights (`onOpenHighlights`), and Infographic Gallery (`onOpenInfographicGallery`).
     - **Layout Mode Switcher**: No switcher for `default`, `wide`, and `focus` view modes with `onChangeLayoutMode` and `layoutMode` props.
     - **Sidebar Toggle Button**: No responsive drawer / sidebar toggle button (`onToggleSidebar`, `isSidebarOpen`).
     - **Scroll Progress Prop**: `scrollProgress` prop is not accepted.

2. **`nodejs/src/components/common/ScrollToTopButton.jsx`**:
   - Does **NOT exist** on disk in `e:\KD\lang\nodejs\src\components\common\`.
   - Tool `view_file` returned: `The system cannot find the file specified`.

3. **`nodejs/src/App.jsx`**:
   - Location: `e:\KD\lang\nodejs\src\App.jsx` (277 lines)
   - Currently does not compute or manage `scrollProgress` state or window scroll listeners.
   - Does not manage `layoutMode` state ('default', 'wide', 'focus') or `LAYOUT_CONTAINERS` width switching.
   - Does not import or render `ScrollToTopButton.jsx`.

4. **Dependencies in `nodejs/package.json`**:
   - Line 15: `"canvas-confetti": "^1.9.4"` is installed and importable via `import confetti from 'canvas-confetti'`.
   - Line 18: `"lucide-react": "^1.64.0"` is installed and exports all required icons (`ArrowUp`, `Check`, `PartyPopper`, `Sparkles`, `BookOpen`, `Search`, `Key`, `Bookmark`, `Type`, `Image`, `Layers`).
   - Line 21: `"tailwindcss": "^4.3.3"` with `@tailwindcss/vite: "^4.3.3"`.

### 1.2 Reference Implementations in `react/`
1. **`react/src/components/layout/Navbar.jsx`** (262 lines):
   - Mounts an absolute 3px reading progress bar at `absolute bottom-0 left-0 right-0 h-[3px] bg-slate-950/80` (lines 249–258).
   - Glow pulse animation triggers when `scrollProgress >= 98`:
     `bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 shadow-[0_0_15px_rgba(52,211,153,0.9)] animate-pulse`.
   - Provides layout mode switcher buttons for `default`, `wide`, and `focus` (lines 106–145).
   - Provides full action buttons for all modals: `Bookmark` (Highlights), `Type` (Code Fonts), `Sparkles` (Shortcuts), `Key` (Gemini API Pool), `ImageIcon` (Infographic Gallery), `BookOpen` (PDF Book), `Sparkles` (Tutor).

2. **`react/src/components/common/ScrollToTopButton.jsx`** (173 lines):
   - Circular SVG progress ring (`size = 52`, `strokeWidth = 3.5`, `radius = 22.5`, `circumference = 2 * Math.PI * radius`).
   - Calculates `strokeDashoffset = circumference - (scrollProgress / 100) * circumference`.
   - Triggers `confetti` from `canvas-confetti` when `scrollProgress >= 98 && !hasCelebrated`.
   - Shows celebration completion pill ("أحسنت! أتممت قراءة كامل محتوى الدرس 100%") with 5-second auto-dismiss.
   - Resets celebration state when `subtopicTitle` changes.
   - Smoothly scrolls to top on click: `window.scrollTo({ top: 0, behavior: 'smooth' })`.

### 1.3 Test Suite & Acceptance Assertions
From `tests/tier1_features/responsive_layout.test.js` and `tests/tier3_interactions/drawer_and_navigation.test.js`:
- `F22.1`: Reading progress computes percentage: `Math.round((scrollTop / total) * 100)` where `total = scrollHeight - clientHeight`.
- `F22.2`: Progress bounds strictly clamped: `Math.max(0, Math.min(100, Math.round(val)))`.
- `F22.3`: Progress bar activates emerald glow shadow (`rgba(16, 185, 129`) when reaching completion (≥ 98% / 100%).
- `F22.4`: Floating FAB remains hidden until user scrolls beyond threshold (≥ 220px–250px).
- `F22.5`: Floating FAB renders circular SVG progress ring `strokeDashoffset`.
- `F22.6`: Clicking FAB executes `window.scrollTo({ top: 0, behavior: 'smooth' })`.
- `PAIR.25`: Selecting new lesson resets reading scroll progress to 0% and triggers `scrollTo top`.
- `PAIR.26`: Completing lesson triggers celebration confetti.
- `PAIR.27`: Layout modes switch between `max-w-7xl` (`default`), `max-w-[1750px]` (`wide`), and `max-w-4xl` (`focus`) with zero horizontal overflow.

---

## 2. Logic Chain

1. **Brand & Visual Adaptation from React to Node.js**:
   - The React reference uses Cyan/Blue palettes (`#38bdf8`, `from-cyan-500 to-blue-600`, React logo ⚛️).
   - In `nodejs/`, the platform identity is Dark Cyberpunk Glassmorphism with an **Emerald / Teal** accent (`from-emerald-500 to-teal-500`, Node.js green 🟢, `#10b981`, `#14b8a6`, `#050811`).
   - All accent borders, progress bars, hover states, and confetti colors must be themed around Emerald, Teal, Cyan, and Amber.

2. **Component Interface Design for `Navbar.jsx`**:
   - Must extend current props from 8 to 16 props to cleanly orchestrate modals and layout states without prop-drilling or side effects.
   - Reading progress bar must be attached with `absolute bottom-0 left-0 right-0 h-[3px]`, taking advantage of the `<header>`'s `sticky top-0` positioning context.
   - Progress bar fill must use `transition-all duration-150` for butter-smooth visual feedback while scrolling.
   - When `scrollProgress >= 98`, the progress bar switches to `bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 shadow-[0_0_16px_rgba(16,185,129,0.85)] animate-pulse`.

3. **Component Design for `ScrollToTopButton.jsx`**:
   - Must be implemented as a new standalone component at `src/components/common/ScrollToTopButton.jsx`.
   - Uses `fixed bottom-6 left-6 z-40` for RTL layout (bottom-left avoids collision with Arabic text flow and the right-side slide-over drawer).
   - Implements SVG circle progress ring:
     - `size = 52`, `strokeWidth = 3.5`, `radius = (52 - 7) / 2 = 22.5`.
     - `circumference = 2 * Math.PI * 22.5 = 141.3716694...`.
     - `strokeDashoffset = circumference - (clampedProgress / 100) * circumference`.
   - Confetti burst:
     - Trigger condition: `scrollProgress >= 98 && !hasCelebrated`.
     - Configuration: `particleCount: 50`, `spread: 60`, `origin: { x: 0.12, y: 0.88 }`, colors: `['#10b981', '#14b8a6', '#06b6d4', '#f59e0b', '#8b5cf6']`.
     - Error safety: Wrapped in `try / catch` so mock environments and headless runners do not crash.
   - Reset: When `subtopicTitle` changes, `hasCelebrated` and `showCompletionPill` reset to `false`.

4. **Integration Wiring with `App.jsx`**:
   - `scrollProgress` calculation in `App.jsx`:
     ```javascript
     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
     if (scrollable > 0) {
       const isNearBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 35);
       const current = isNearBottom ? 100 : Math.min(Math.max((window.scrollY / scrollable) * 100, 0), 100);
       setScrollProgress(Math.round(current));
     } else {
       setScrollProgress(0);
     }
     ```
   - Layout mode switcher:
     ```javascript
     const LAYOUT_CONTAINERS = {
       default: 'max-w-7xl',
       wide: 'max-w-[1750px]',
       focus: 'max-w-4xl'
     };
     ```
   - Both `Navbar` and `ScrollToTopButton` receive `scrollProgress`.

---

## 3. Concrete Implementation Specifications

### 3.1 Prop Interfaces Contract

#### `src/components/layout/Navbar.jsx`
| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `currentSection` | `object` | `{}` | Current section object with `title`, `id`, `topics` |
| `onOpenBook` | `() => void` | `undefined` | Callback to open PDF Book Generator modal |
| `onOpenTutor` | `() => void` | `undefined` | Callback to open Gemini Tutor modal |
| `onOpenKeyPool` | `() => void` | `undefined` | Callback to open Gemini API Key Pool modal |
| `onOpenHighlights` | `() => void` | `undefined` | Callback to open Saved Highlights modal |
| `onOpenCodeFont` | `() => void` | `undefined` | Callback to open Code Fonts Studio modal |
| `onOpenShortcuts` | `() => void` | `undefined` | Callback to open Egyptian AI Shortcuts modal |
| `onOpenInfographicGallery` | `() => void` | `undefined` | Callback to open Universal Infographic Gallery modal |
| `searchQuery` | `string` | `""` | Active curriculum search query string |
| `setSearchQuery` | `(q: string) => void` | `undefined` | Callback updating search query |
| `completedCount` | `number` | `0` | Total number of completed subtopics |
| `totalSubtopics` | `number` | `981` | Total subtopic count for the platform |
| `layoutMode` | `'default' \| 'wide' \| 'focus'` | `'default'` | Active layout mode |
| `onChangeLayoutMode` | `(mode: string) => void` | `undefined` | Callback to update layout mode |
| `isSidebarOpen` | `boolean` | `true` | Current desktop sidebar open state |
| `onToggleSidebar` | `() => void` | `undefined` | Callback to toggle sidebar/drawer |
| `scrollProgress` | `number` | `0` | Current reading progress percentage (0–100) |

#### `src/components/common/ScrollToTopButton.jsx`
| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `scrollProgress` | `number` | `0` | Current reading progress percentage (0–100) |
| `subtopicTitle` | `string` | `""` | Title of active subtopic, triggers reset on change |

---

### 3.2 Exact Proposed Implementation for `src/components/layout/Navbar.jsx`

```jsx
// src/components/layout/Navbar.jsx
// شريط التنقل العلوي العام مع البحث، مؤشر الإنجاز، شريط تقدم القراءة، أزرار النوافذ، وأنماط العرض
import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  Key, 
  Bookmark, 
  Layers, 
  Image as ImageIcon, 
  Type 
} from 'lucide-react';
import { useSwal, useToast } from '../../context/UiFeedbackContext.jsx';
import { saveUserGeminiApiKey, getActiveApiKey } from '../../api/gemini.js';

export default function Navbar({
  currentSection,
  onOpenBook,
  onOpenTutor,
  onOpenKeyPool,
  onOpenHighlights,
  onOpenCodeFont,
  onOpenShortcuts,
  onOpenInfographicGallery,
  searchQuery = "",
  setSearchQuery,
  completedCount = 0,
  totalSubtopics = 981,
  layoutMode = "default",
  onChangeLayoutMode,
  isSidebarOpen = true,
  onToggleSidebar,
  scrollProgress = 0
}) {
  const showSwal = useSwal();
  const showToast = useToast();
  const progressPercent = totalSubtopics > 0 ? Math.round((completedCount / totalSubtopics) * 100) : 0;
  const clampedScrollProgress = Math.min(Math.max(scrollProgress, 0), 100);

  // فتح نافذة إعدادات مفتاح Gemini API السريعة في حال عدم توفر المجمع
  const handleOpenApiKeyModal = async () => {
    const currentKey = getActiveApiKey();
    const result = await showSwal({
      title: "إعدادات مفتاح Google Gemini API",
      text: "يمكنك إدخال مفتاح Gemini الخاص بك لتفعيل الاتصال غير المحدود، أو تركه فارغاً للاعتماد على المفتاح المدمج:",
      icon: "question",
      input: "text",
      inputValue: currentKey && !currentKey.startsWith("AQ.") ? currentKey : "",
      inputPlaceholder: "الصق مفتاح API هنا (AIzaSy...)",
      showCancelButton: true,
      confirmButtonText: "حفظ المفتاح",
      cancelButtonText: "إلغاء",
      confirmButtonColor: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold"
    });

    if (result.isConfirmed) {
      saveUserGeminiApiKey(result.value);
      showToast(result.value ? "تم حفظ مفتاح Gemini بنجاح! 🔑" : "تمت استعادة الإعداد الافتراضي للمساعد الذكي", "success");
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-2.5 sm:px-4 lg:px-8 py-2 sm:py-3 no-print max-w-full overflow-x-hidden" dir="rtl">
      <div className="max-w-[1750px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-3">
        
        {/* الشعار وعنوان المنصة */}
        <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-start min-w-0">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20 text-base sm:text-xl font-bold shrink-0">
              🟢
            </div>
            <div className="min-w-0">
              <h1 className="font-extrabold text-xs sm:text-base lg:text-lg text-white leading-tight flex items-center gap-1.5 font-sans truncate">
                خريطة طريق Node.js الاحترافية
                <span className="hidden sm:inline-block text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-normal">
                  من الصفر للاحتراف
                </span>
              </h1>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate max-w-[200px] sm:max-w-xs md:max-w-md font-sans">
                {currentSection?.title || "23 قسماً تعليمياً متكاملاً"} • {completedCount} درس منجز
              </p>
            </div>
          </div>

          {/* شريط الإنجاز للموبايل */}
          <div className="md:hidden flex items-center gap-1 text-[11px] sm:text-xs text-emerald-400 font-bold bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800 shrink-0">
            <span>%{progressPercent}</span>
          </div>
        </div>

        {/* شريط البحث المباشر */}
        <div className="w-full md:w-56 lg:w-72 relative min-w-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
            placeholder="ابحث في دروس الخريطة والمفاهيم..."
            className="w-full bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs rounded-xl py-1.5 sm:py-2 pr-8 sm:pr-9 pl-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-sans"
          />
          <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute right-2.5 sm:right-3 top-2 sm:top-2.5" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery && setSearchQuery("")}
              className="absolute left-2.5 top-1.5 sm:top-2 text-xs text-slate-400 hover:text-white cursor-pointer"
              title="مسح البحث"
            >
              ✕
            </button>
          )}
        </div>

        {/* أزرار الإجراءات السريعة وأنماط العرض والنوافذ */}
        <div className="flex items-center gap-1 sm:gap-2 w-full md:w-auto justify-between md:justify-end flex-wrap">
          
          {/* محول أنماط العرض: افتراضي / عريض / تركيز */}
          {onChangeLayoutMode && (
            <div className="hidden lg:flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-0.5 text-xs">
              <button
                onClick={() => onChangeLayoutMode('default')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  layoutMode === 'default' 
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="العرض الافتراضي المتوازن (مع القائمة الجانبية)"
              >
                <span>📱</span>
                <span>افتراضي</span>
              </button>
              <button
                onClick={() => onChangeLayoutMode('wide')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  layoutMode === 'wide' 
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="العرض العريض الممتد لكامل الشاشة"
              >
                <span>🖥️</span>
                <span>عريض</span>
              </button>
              <button
                onClick={() => onChangeLayoutMode('focus')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  layoutMode === 'focus' 
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="وضع التركيز وملء الشاشة (إخفاء القائمة الجانبية)"
              >
                <span>⛶</span>
                <span>تركيز</span>
              </button>
            </div>
          )}

          {/* زر تبديل إظهار/إخفاء القائمة الجانبية */}
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className={`p-1.5 sm:p-2 rounded-xl border transition-colors cursor-pointer ${
                isSidebarOpen 
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800' 
                  : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border-emerald-500/50 font-bold'
              }`}
              title={isSidebarOpen ? "إخفاء القائمة الجانبية" : "إظهار القائمة الجانبية"}
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            </button>
          )}

          {/* مؤشر الإنجاز لسطح المكتب */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-sans">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-400">الإنجاز:</span>
            <span className="text-emerald-400 font-bold font-mono">%{progressPercent}</span>
            <div className="w-14 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* زر دفتر التظليلات والملاحظات المحفوظة */}
          {onOpenHighlights && (
            <button
              onClick={onOpenHighlights}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors cursor-pointer"
              title="دفتر التظليلات والملاحظات المحفوظة (IndexedDB)"
            >
              <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400" />
            </button>
          )}

          {/* زر استوديو خطوط الكود البرمجي */}
          {onOpenCodeFont && (
            <button
              onClick={onOpenCodeFont}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-emerald-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors cursor-pointer"
              title="استوديو خطوط الكود البرمجي (Fira Code, JetBrains Mono, Cascadia...)"
            >
              <Type className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            </button>
          )}

          {/* زر دليل وموسوعة الاختصارات بالعامية المصرية */}
          {onOpenShortcuts && (
            <button
              onClick={onOpenShortcuts}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30 text-emerald-300 border border-emerald-500/40 text-[11px] sm:text-xs font-bold transition-all shadow-sm cursor-pointer"
              title="دليل وموسوعة الاختصارات وأوامر الذكاء الاصطناعي (Ctrl + /)"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>⚡ الاختصارات</span>
            </button>
          )}

          {/* زر مجمع مفاتيح Gemini API */}
          <button
            onClick={onOpenKeyPool || handleOpenApiKeyModal}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            title="إدارة مجمع مفاتيح Gemini AI والفحص المتوازي"
          >
            <Key className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* زر معرض الإنفوجرافيك الشامل لجميع الدروس */}
          {onOpenInfographicGallery && (
            <button
              onClick={onOpenInfographicGallery}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl shadow-md transition-all cursor-pointer font-sans"
              title="فتح معرض الإنفوجرافيك الشامل لجميع الدروس وتصفحها بصرياً"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">الإنفوجرافيك</span>
              <span className="xs:hidden">معرض</span>
            </button>
          )}

          {/* زر كتاب الـ PDF */}
          <button
            onClick={onOpenBook}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-750 text-slate-200 hover:text-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all shadow-sm cursor-pointer font-sans"
            title="عرض وتحميل كتاب PDF للقسم"
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            <span className="hidden xs:inline">كتاب PDF</span>
            <span className="xs:hidden">كتاب</span>
          </button>

          {/* زر المعلم الذكي */}
          <button
            onClick={onOpenTutor}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all shadow-md shadow-emerald-600/20 cursor-pointer font-sans"
            title="فتح المعلم الذكي المساعد"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse text-amber-300" />
            <span className="hidden xs:inline">المعلم الذكي</span>
            <span className="xs:hidden">ذكاء</span>
          </button>

        </div>

      </div>

      {/* شريط تقدم القراءة التفاعلي الممتد بكامل العرض (Interactive Global Scroll Progress Bar) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-950/80 overflow-hidden" 
        title={`تقدم قراءة الدرس: ${clampedScrollProgress}%`}
      >
        <div 
          className={`h-full transition-all duration-150 ${
            clampedScrollProgress >= 98
              ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 shadow-[0_0_16px_rgba(16,185,129,0.85)] animate-pulse'
              : 'bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]'
          }`}
          style={{ width: `${clampedScrollProgress}%` }}
        />
      </div>
    </header>
  );
}
```

---

### 3.3 Exact Proposed Implementation for `src/components/common/ScrollToTopButton.jsx`

```jsx
// src/components/common/ScrollToTopButton.jsx
// زر الصعود إلى الأعلى الذكي مع حلقة تقدم دائرية تفاعلية واحتفالية إتمام الدرس
import React, { useState, useEffect } from 'react';
import { ArrowUp, Check, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScrollToTopButton({ scrollProgress = 0, subtopicTitle = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasCelebrated, setHasCelebrated] = useState(false);
  const [showCompletionPill, setShowCompletionPill] = useState(false);

  const clampedProgress = Math.min(Math.max(scrollProgress, 0), 100);

  // إظهار الزر بعد تجاوز 220px من التمرير الرأسي
  useEffect(() => {
    const handleScrollVisibility = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || 0;
      if (scrollPos >= 220) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setShowCompletionPill(false);
      }
    };

    window.addEventListener('scroll', handleScrollVisibility, { passive: true });
    handleScrollVisibility();
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  // إعادة ضبط حالة الاحتفال عند الانتقال لدرس جديد
  useEffect(() => {
    setHasCelebrated(false);
    setShowCompletionPill(false);
  }, [subtopicTitle]);

  // تأثير تفاعلي عند الوصول لآخر جزء في الصفحة (98% فما فوق)
  useEffect(() => {
    if (clampedProgress >= 98 && !hasCelebrated) {
      setHasCelebrated(true);
      setShowCompletionPill(true);

      // إطلاق مفرقعات احتفالية ناعمة بألوان الثيم (Emerald / Teal / Cyan / Amber)
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { x: 0.12, y: 0.88 },
          colors: ['#10b981', '#14b8a6', '#06b6d4', '#f59e0b', '#8b5cf6']
        });
      } catch {
        // Fallback for non-browser or test environments
      }

      // إخفاء كبسولة الإشعار بعد 5 ثوانٍ تلقائياً
      const timer = setTimeout(() => {
        setShowCompletionPill(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [clampedProgress, hasCelebrated]);

  // التمرير السلس إلى أعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // أبعاد حلقة التقدم الدائرية (SVG Progress Ring)
  const size = 52; // القطر بالبكسل
  const strokeWidth = 3.5;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (clampedProgress / 100) * circumference;

  const isCompleted = clampedProgress >= 98;

  return (
    <div 
      className={`fixed bottom-6 left-6 z-40 flex items-center gap-3 transition-all duration-300 select-none ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      dir="rtl"
    >
      {/* كبسولة الاحتفال التفاعلية عند الوصول لآخر الدرس */}
      {showCompletionPill && (
        <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-950/90 to-slate-900/95 border border-emerald-500/50 text-emerald-200 text-xs px-3.5 py-2 rounded-2xl shadow-2xl backdrop-blur-md animate-slideInUp">
          <PartyPopper className="w-4 h-4 text-emerald-400 animate-bounce shrink-0" />
          <span className="font-bold">أحسنت! أتممت قراءة كامل محتوى الدرس 100%</span>
          <button 
            onClick={() => setShowCompletionPill(false)}
            className="text-emerald-400/70 hover:text-emerald-300 mr-1 text-[11px] cursor-pointer"
            title="إغلاق الإشعار"
          >
            ✕
          </button>
        </div>
      )}

      {/* الزر الرئيسي مع الحلقة الدائرية */}
      <div className="relative group">
        
        {/* التلميح العائم عند التحويم */}
        <div 
          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-xl bg-slate-950/95 text-slate-200 border border-slate-800 text-[11px] font-sans font-bold shadow-xl whitespace-nowrap pointer-events-none transition-all duration-200 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
          }`}
        >
          {isCompleted ? "اكتمل الدرس 100% • صعود للأعلى" : `قراءة: ${clampedProgress}% • صعود للأعلى`}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950"></div>
        </div>

        {/* زر الصعود المدمج داخل دائرة الـ SVG */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-[52px] h-[52px] rounded-full bg-slate-900/90 hover:bg-slate-850 backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xl ${
            isCompleted 
              ? 'border-2 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.45)] text-emerald-300' 
              : 'border border-slate-700/80 hover:border-emerald-400 text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.35)]'
          }`}
          title="العودة إلى أعلى الصفحة بسهولة"
          aria-label="العودة لأعلى الصفحة"
        >
          {/* حلقة تقدم القراءة الدائرية SVG */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox={`0 0 ${size} ${size}`}
          >
            {/* المسار الخلفي الرمادي الخافت */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="rgba(51, 65, 85, 0.4)"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* المسار الفعلي المتدرج وفق تقدم القراءة */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={isCompleted ? "#10b981" : "#14b8a6"}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-150"
            />
          </svg>

          {/* الأيقونة المركزية مع تأثير التحويم والنسبة المئوية */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {isHovered ? (
              <span className="font-mono font-extrabold text-[10px] text-emerald-300 tracking-tighter">
                {clampedProgress}%
              </span>
            ) : isCompleted ? (
              <Check className="w-5 h-5 text-emerald-400 animate-pulse" />
            ) : (
              <ArrowUp className="w-5 h-5 text-emerald-400 group-hover:-translate-y-0.5 transition-transform duration-200" />
            )}
          </div>
        </button>

      </div>
    </div>
  );
}
```

---

### 3.4 Exact App.jsx Wiring Diff (Context for Milestone 3 Integration)

```diff
--- a/src/App.jsx
+++ b/src/App.jsx
@@ -13,6 +13,7 @@ import BookViewModal from './components/book/BookViewModal.jsx';
 import GeminiTutorModal from './components/ai/GeminiTutorModal.jsx';
 import GeminiKeyPoolModal from './components/ai/GeminiKeyPoolModal.jsx';
+import ScrollToTopButton from './components/common/ScrollToTopButton.jsx';
 import { UiFeedbackProvider } from './context/UiFeedbackContext.jsx';
 import { SECTIONS_MAP, getSectionById, fetchSectionData } from './data/sections/index.js';
 
@@ -82,6 +83,49 @@ export default function App() {
   const [searchQuery, setSearchQuery] = useState("");
   const [isLoadingTransition, setIsLoadingTransition] = useState(false);
+  const [scrollProgress, setScrollProgress] = useState(0);
+
+  // Layout Mode ('default' | 'wide' | 'focus')
+  const [layoutMode, setLayoutMode] = useState(() => {
+    try {
+      return localStorage.getItem("nodejs_roadmap_layout_mode") || "default";
+    } catch {
+      return "default";
+    }
+  });
+
+  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
+    try {
+      if (typeof window !== 'undefined' && window.innerWidth < 1024) return false;
+      return localStorage.getItem("nodejs_roadmap_layout_mode") !== "focus";
+    } catch {
+      return true;
+    }
+  });
+
+  const handleSetLayoutMode = (mode) => {
+    setLayoutMode(mode);
+    try { localStorage.setItem("nodejs_roadmap_layout_mode", mode); } catch (e) {}
+    setIsSidebarOpen(mode !== "focus");
+  };
+
+  const handleToggleSidebar = () => {
+    setIsSidebarOpen(prev => !prev);
+  };
+
+  // Reading Scroll Progress Listener
+  useEffect(() => {
+    const handleScroll = () => {
+      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
+      if (scrollable > 0) {
+        const isNearBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 35);
+        const current = isNearBottom ? 100 : Math.min(Math.max((window.scrollY / scrollable) * 100, 0), 100);
+        setScrollProgress(Math.round(current));
+      } else {
+        setScrollProgress(0);
+      }
+    };
+    window.addEventListener('scroll', handleScroll, { passive: true });
+    return () => window.removeEventListener('scroll', handleScroll);
+  }, [currentSubtopicId, currentSectionId, specialView]);
 
@@ -188,6 +232,15 @@ export default function App() {
           currentSection={currentSection}
           onOpenBook={() => setIsBookOpen(true)}
           onOpenTutor={() => setIsTutorOpen(true)}
           onOpenKeyPool={() => setIsKeyPoolOpen(true)}
+          onOpenHighlights={() => {/* wired to SavedHighlightsModal */}}
+          onOpenCodeFont={() => {/* wired to CodeFontModal */}}
+          onOpenShortcuts={() => {/* wired to ShortcutsGuideModal */}}
+          onOpenInfographicGallery={() => {/* wired to InfographicGalleryModal */}}
           searchQuery={searchQuery}
           setSearchQuery={setSearchQuery}
           completedCount={completedSubtopics.size}
-          totalSubtopics={allSubtopics.length || 30}
+          totalSubtopics={allSubtopics.length || 981}
+          layoutMode={layoutMode}
+          onChangeLayoutMode={handleSetLayoutMode}
+          isSidebarOpen={isSidebarOpen}
+          onToggleSidebar={handleToggleSidebar}
+          scrollProgress={scrollProgress}
         />
 
-        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
+        <div className={`flex flex-col lg:flex-row ${
+          layoutMode === 'wide' ? 'max-w-[1750px]' : layoutMode === 'focus' ? 'max-w-4xl' : 'max-w-7xl'
+        } mx-auto w-full transition-all duration-200`}>
@@ -270,6 +323,12 @@ export default function App() {
         />
 
+        {/* زر الصعود الذكي للأعلى مع حلقة مؤشر تقدم القراءة والاحتفال */}
+        <ScrollToTopButton 
+          scrollProgress={scrollProgress} 
+          subtopicTitle={currentSubtopic?.title} 
+        />
+
       </div>
     </UiFeedbackProvider>
```

---

## 4. Caveats

1. **Non-browser Test Environment**:
   - `canvas-confetti` depends on HTML `<canvas>` and `document.body`. In Node.js CLI or opaque-box unit tests where DOM canvas is mocked, `try / catch` wraps the confetti execution to prevent test failures.
2. **Scroll Calculations on Empty/Short Pages**:
   - When lessons are short or during transition skeletons, `scrollHeight - clientHeight` can be `0` or negative. Clamping checks (`scrollable > 0 ? ... : 0`) ensure `scrollProgress` never evaluates to `NaN` or infinity.
3. **Modal Component Existence**:
   - Modals (`CodeFontModal`, `ShortcutsGuideModal`, `SavedHighlightsModal`, `InfographicGalleryModal`) are in scope for Explorer 3 and Milestone 4/5. `Navbar.jsx` conditionally renders or safely triggers these buttons without hard crashing if optional handlers are omitted.

---

## 5. Conclusion

1. **`Navbar.jsx`**:
   - The current file lacks the 0%–100% reading progress bar, layout mode switcher, sidebar toggle, and 4 modal trigger buttons.
   - The provided design extends `Navbar.jsx` with full Cyberpunk Emerald styling, responsive action buttons, desktop & mobile progress indicators, and an animated sticky reading progress bar.
2. **`ScrollToTopButton.jsx`**:
   - Component is missing from `nodejs/` and must be created as `src/components/common/ScrollToTopButton.jsx`.
   - Incorporates the circular SVG progress ring (`radius = 22.5`, `size = 52`), smooth scroll to top, 220px visibility threshold, and `canvas-confetti` celebration at ≥ 98%.
3. **Complete Harmony**:
   - All proposed code conforms to React 19, Tailwind CSS v4, Arabic RTL layout, and existing test suites (`responsive_layout.test.js` & `drawer_and_navigation.test.js`).

---

## 6. Verification Method

To independently verify the implementation once applied:

1. **Run E2E Test Suite**:
   ```bash
   cd e:\KD\lang\nodejs
   node tests/runner.js
   ```
   - Verify that test suite `Responsive Architecture, FAB & Egyptian Shortcuts (F21-F23)` passes:
     - `F22.1`: Reading progress percentage computation.
     - `F22.2`: Reading progress clamp [0, 100].
     - `F22.3`: Emerald glow shadow at ≥ 98%.
     - `F22.4`: FAB visibility at scroll threshold.
     - `F22.5`: Circular SVG `strokeDashoffset` computation.
     - `F22.6`: Smooth scroll to top execution.
     - `PAIR.25`: Reading progress reset on lesson change.
     - `PAIR.26`: Confetti celebration on lesson completion.
     - `PAIR.27`: Layout container widths (`max-w-7xl`, `max-w-[1750px]`, `max-w-4xl`).

2. **Verify Vite Production Build**:
   ```bash
   cd e:\KD\lang\nodejs
   npm.cmd run build
   ```
   - Must complete with 0 errors and produce all client chunks cleanly.

3. **Invalidation Conditions**:
   - `Navbar.jsx` throws runtime error when optional props (`onOpenHighlights`, `onChangeLayoutMode`) are undefined.
   - `ScrollToTopButton.jsx` throws an unhandled exception when `canvas-confetti` is executed in a headless/test environment.
   - Reading progress bar exceeds 100% or produces `NaN%`.
   - Horizontal scrollbar appears when switching layout modes.
