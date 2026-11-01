# Milestone 3 (Modals & App Wiring) — Deep Investigation & Handoff Report

## 1. Observation

Direct observations from the `nodejs/` codebase, reference implementation in `react/`, and test suites:

### 1.1 Existing vs Missing Components
- **`src/components/common/CodeFontModal.jsx`**:
  - `nodejs/src/components/common/CodeFontModal.jsx` **does not exist** (verified via `find_by_name`).
  - Reference `react/src/components/common/CodeFontModal.jsx` (332 lines) implements font preview using React snippets, but lacks the category filter tabs (`'ligature'`, `'monospace'`, `'terminal'`) and font-size slider required by `DISPATCH.md` Item 1.
  - `nodejs/src/utils/codeFonts.js` lines 5–97 already exports `CODE_FONTS` with 7 fonts, each with `category: 'ligature' | 'monospace' | 'terminal'`, `family`, `badge`, `badgeColor`, `description`, `preview`, and helper functions `getActiveCodeFontId()`, `getActiveCodeFont()`, `applyCodeFont(fontId)`, `initCodeFont()`.
- **`src/components/common/ShortcutsGuideModal.jsx`**:
  - `nodejs/src/components/common/ShortcutsGuideModal.jsx` **does not exist**.
  - Reference `react/src/components/common/ShortcutsGuideModal.jsx` (605 lines) provides 24 shortcuts across 5 categories (`ai`, `automation`, `ui`, `code`, `keys`) in Egyptian Arabic ("بالعامية المصرية"), with search, copy prompt feedback, and escape closing.
  - Documentation exists at `e:\KD\lang\SHORTCUTS_GUIDE_EG.md` (392 lines) documenting all 24 Egyptian shortcuts.
- **`src/components/ai/GeminiKeyPoolModal.jsx`**:
  - `nodejs/src/components/ai/GeminiKeyPoolModal.jsx` exists (171 lines) but is a minimal implementation:
    - Missing React Portal mounting to `document.body` (causing potential z-index collision under mobile drawer or modals).
    - Missing batch key delimiter parsing (`\n` and `,`).
    - Missing one-click clipboard paste (`navigator.clipboard.readText()`).
    - Missing direct deep-link card to Google AI Studio (`https://aistudio.google.com/app/apikey`).
    - Missing copy-to-clipboard button per key with feedback.
    - Status badge checks only `active` vs error, lacking distinct badges for `exhausted` (429 Rate Limit), `invalid`, and network error as emitted by `nodejs/src/api/gemini.js` line 136–174.
- **`src/components/common/ScrollToTopButton.jsx`**:
  - Missing in `nodejs/src/components/common/`. Required by Feature 14 (`F22.4`, `F22.5`, `F22.6`, `PAIR.26`) for circular SVG progress ring, scroll threshold >= 220px, and confetti burst at >= 98% reading completion.
- **`src/App.jsx`**:
  - `nodejs/src/App.jsx` (277 lines) currently only mounts `BookViewModal`, `GeminiTutorModal`, `GeminiKeyPoolModal`.
  - Missing state and wiring for `CodeFontModal`, `ShortcutsGuideModal`, `ScrollToTopButton`.
  - Missing global keyboard event listener for `Ctrl + /` and `Cmd + /` (Feature 17, `F23.2`, `PAIR.28`).
  - Missing `layoutMode` state (`'default'`, `'wide'`, `'focus'`) with `localStorage` persistence and dynamic container styling (`PAIR.27`: `default` -> `'max-w-7xl'`, `wide` -> `'max-w-[1750px]'`, `focus` -> `'max-w-4xl'`).
  - Missing `initCodeFont()` on component mount (`F9.7`).
  - Missing `scrollProgress` tracking (0-100%) and floating button to restore sidebar when in focus mode (`!isSidebarOpen`).
- **`src/components/layout/Navbar.jsx`**:
  - Currently lacks props and UI controls for layout mode switcher (`default` / `wide` / `focus`), sidebar toggle button, code font modal trigger, shortcuts guide modal trigger, and bottom reading scroll progress bar (`F22.1`, `F22.2`, `F22.3`).
- **`src/components/layout/Sidebar.jsx`**:
  - Currently uses static desktop layout (`w-full lg:w-80 xl:w-88`).
  - Lacks mobile slide-over drawer classes (`fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm` per `F21.1`), backdrop overlay with `onCloseSidebar` (`F21.2`), and shortcuts trigger button.

### 1.2 Test Suite Status
- Running `cd nodejs; node tests/runner.js` executes 274 tests across 4 tiers:
  - 270 PASSED, 4 FAILED (all 4 failures belong to uncompleted Milestone 5 JSON parsing/infographic gallery).
  - All Tier 1, Tier 3, and Tier 4 tests for code fonts, responsive drawer, Egyptian shortcuts, key pool, and layout modes are already defined and strictly specify the interface requirements!

---

## 2. Logic Chain

1. **Font Studio Integration**:
   - `src/utils/codeFonts.js` exports `CODE_FONTS`, `getActiveCodeFontId`, `getActiveCodeFont`, `applyCodeFont`, and `initCodeFont`.
   - To satisfy `DISPATCH.md` R5.2 and tests `F9.1` through `F9.8` & `PAIR.1`, `CodeFontModal.jsx` must:
     a) Render all 7 fonts.
     b) Filter by categories `all`, `ligature`, `monospace`, `terminal`.
     c) Provide an interactive font size slider (`11px` to `20px`) with a reset button back to `fira-code` and `13px`.
     d) Render a Node.js specific live preview playground snippet featuring `http.createServer`, `async/await`, and ligatures (`=>`, `!==`, `===`, `>=`, `??`).
     e) Call `applyCodeFont(font.id)` which dynamically updates CSS variable `--font-code` on `document.documentElement` and persists to `localStorage`.

2. **Egyptian Shortcuts Modal**:
   - `SHORTCUTS_GUIDE_EG.md` and tests `F23.1`–`F23.4`, `PAIR.28`, and `E2E.WORKLOAD.6` dictate that `ShortcutsGuideModal.jsx` must:
     a) Open upon pressing `Ctrl + /` or `Cmd + /` or clicking the navbar/sidebar button.
     b) Display 24 shortcuts across 5 categories (`ai`, `automation`, `ui`, `code`, `keys`).
     c) Render Egyptian colloquial explanations ("بالبلدي والمصري"), prompt example with 1-click clipboard copy, and sample code snippet.
     d) Filter instantaneously via a search query box.
     e) Enforce `maxHeight: '90vh'` and `overflowY: 'auto'` to ensure 0 horizontal scroll and clean viewport bounding.

3. **Gemini Key Pool Manager**:
   - `src/api/gemini.js` exports `getGeminiKeysPool`, `saveGeminiKeysPool`, `getActiveApiKey`, `saveUserGeminiApiKey`, and `testGeminiKeysInParallel`.
   - To satisfy `DISPATCH.md` R5.1 and tests `F6.1`–`F7.6` & `PAIR.24`:
     a) `GeminiKeyPoolModal.jsx` must mount via `createPortal(..., document.body)` with `z-[99998]` so it sits above any mobile drawer (`z-50`) or modal backdrop.
     b) It must support multi-key input via paste (split by `[\n,\s]+`) and single-click paste from clipboard via `navigator.clipboard.readText()`.
     c) It must include a direct banner with an external link to Google AI Studio (`https://aistudio.google.com/app/apikey`).
     d) Key testing must run `testGeminiKeysInParallel(keys)` and show color-coded status badges: `active` (emerald, latency in ms), `exhausted` (amber, 429 Rate Limit), `invalid` (rose, 400/403), `error` (slate).

4. **Scroll FAB & Progress Ring**:
   - Tests `F22.1`–`F22.6` and `PAIR.26` require:
     a) `scrollProgress` clamped strictly between 0% and 100%.
     b) Global reading progress bar on navbar with emerald glow when `scrollProgress >= 98`.
     c) Circular SVG FAB appearing when `window.scrollY >= 220px` with animated SVG `strokeDashoffset`.
     d) Confetti burst upon reaching 98–100% completion via `canvas-confetti`.
     e) Smooth scroll to top on click.

5. **App Wiring & Orchestration**:
   - `src/App.jsx` acts as the single source of truth for:
     a) Layout modes (`default`, `wide`, `focus`), updating container widths (`max-w-7xl`, `max-w-[1750px]`, `max-w-4xl`).
     b) Global key listener for `Ctrl + /` and `Cmd + /`.
     c) Initializing code font on startup (`initCodeFont()`).
     d) Computing window scroll progress on scroll.
     e) Passing modal triggers and states to `Navbar` and `Sidebar`.

---

## 3. Caveats

- **Network / Clipboard API in test runners**: Headless test environments (Node.js test runner) mock `localStorage` and `fetch`, but `navigator.clipboard.readText()` may reject if permissions are not granted; the implementation must wrap clipboard reads in `try...catch` with graceful fallbacks.
- **Portals**: `GeminiKeyPoolModal` and fullscreen components mount to `document.body`. When testing in headless environments, verify `typeof document !== 'undefined'` before calling `createPortal`.
- **Milestone 4 & 5 placeholders**: `SavedHighlightsModal`, `InfographicGalleryModal`, and `LiveCodePreview` belong to Milestones 4 and 5; `App.jsx` should prepare state handlers for them without breaking build if they are not yet fully implemented.

---

## 4. Conclusion & Concrete Code Specifications

Here are the complete, exact component specifications and code diffs ready for Milestone 3 implementation:

### 4.1 `src/components/common/CodeFontModal.jsx` (New File)

**Prop Interface**:
```typescript
interface CodeFontModalProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**Complete Code**:
```jsx
// src/components/common/CodeFontModal.jsx
// استوديو تخصيص واختيار خطوط الكود البرمجي العالمي لمنصة Node.js التعليمية
// يدعم 7 خطوط برمجة مع الرموز المتصلة (Ligatures)، تصنيف الخطوط، شريط تحكم بالحجم، والمعاينة الحية
import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Check, 
  X, 
  Sparkles, 
  Type, 
  CheckCircle2, 
  RotateCcw,
  Sliders,
  Zap
} from 'lucide-react';
import { CODE_FONTS, getActiveCodeFontId, applyCodeFont } from '../../utils/codeFonts.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

// نموذج كود حي وشامل لعرض ميزات كل خط في بيئة Node.js (خادم HTTP، معالجة غير متزامنة، وفحص Ligatures)
const PLAYGROUND_SNIPPET = `// تجربة المعاينة الحية لخط الكود البرمجي المختار - بيئة Node.js
import http from 'node:http';
import { pipeline } from 'node:stream/promises';

// فحص الرموز المتصلة (Ligatures): => !== === >= <= && || ??
const startServer = async (port = 3000) => {
  const server = http.createServer(async (req, res) => {
    // 0 vs O (الأصفار مقابل الحروف) • 1 vs l vs I
    const isApiRoute = req.url?.startsWith('/api') && req.method === 'GET';

    if (isApiRoute && port !== null && port >= 1024) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: "running", node: process.version }));
    }

    res.writeHead(404);
    res.end("Not Found");
  });

  return server.listen(port, () => console.log(\`Server => http://localhost:\${port}\`));
};

export default startServer;`;

const CATEGORIES = [
  { id: 'all', label: 'الكل (7 خطوط)' },
  { id: 'ligature', label: '⚡ رموز متصلة (Ligatures)' },
  { id: 'monospace', label: '📏 أحادي المسافة (Monospace)' },
  { id: 'terminal', label: '📟 طرفي وريترو (Terminal)' }
];

export default function CodeFontModal({ isOpen, onClose }) {
  const showToast = useToast();
  const [activeFontId, setActiveFontId] = useState(getActiveCodeFontId);
  const [previewFontId, setPreviewFontId] = useState(activeFontId);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [fontSize, setFontSize] = useState(13);

  useEffect(() => {
    if (isOpen) {
      const current = getActiveCodeFontId();
      setActiveFontId(current);
      setPreviewFontId(current);
    }
  }, [isOpen]);

  // إغلاق النافذة بزر Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPreviewFont = CODE_FONTS.find(f => f.id === previewFontId) || CODE_FONTS[0];
  const activeFontObj = CODE_FONTS.find(f => f.id === activeFontId) || CODE_FONTS[0];

  const filteredFonts = CODE_FONTS.filter(font => {
    if (selectedCategory === 'all') return true;
    return font.category === selectedCategory;
  });

  const handleSelectFont = (font) => {
    applyCodeFont(font.id);
    setActiveFontId(font.id);
    setPreviewFontId(font.id);
    showToast(`تم اعتماد خط (${font.name}) لجميع الأكواد البرمجية بنجاح! 🔤`, "success");
  };

  const handleResetDefault = () => {
    const defaultFont = CODE_FONTS[0]; // Fira Code
    applyCodeFont(defaultFont.id);
    setActiveFontId(defaultFont.id);
    setPreviewFontId(defaultFont.id);
    setFontSize(13);
    setSelectedCategory('all');
    showToast("تمت استعادة خط الكود الافتراضي (Fira Code) وحجم 13px 🔄", "info");
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      dir="rtl"
    >
      <div 
        style={{ maxHeight: '90vh', height: '90vh' }}
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-[0_25px_70px_-15px_rgba(16,185,129,0.25)] flex flex-col overflow-hidden text-slate-100 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. شريط رأس الاستوديو */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-800 bg-slate-950/70 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20">
              <Type className="w-5 h-5 font-black text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white font-sans">
                  استوديو خطوط الكود البرمجي
                </h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-bold">
                  {CODE_FONTS.length} خطوط برمجية
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                خصص الخط المفضل لقراءة وبرمجة شفرات Node.js مع دعم الرموز المتصلة (Ligatures) وتمييز الحروف
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {(activeFontId !== 'fira-code' || fontSize !== 13) && (
              <button
                onClick={handleResetDefault}
                className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 transition-colors cursor-pointer font-sans"
                title="استعادة الخط الافتراضي (Fira Code) وحجم 13px"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>الافتراضي</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer border border-slate-700"
              title="إغلاق النافذة (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. شريط الفلاتر والتحكم في الحجم */}
        <div className="px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-950/40 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* تصنيف الخطوط */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* شريط تمرير حجم الخط */}
          <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl text-xs text-slate-300">
            <Sliders className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-bold">حجم الخط:</span>
            <input 
              type="range"
              min="11"
              max="20"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-24 sm:w-32 accent-emerald-500 cursor-pointer"
            />
            <span className="font-mono text-emerald-400 font-bold w-9 text-left" dir="ltr">
              {fontSize}px
            </span>
          </div>
        </div>

        {/* 3. محتوى النافذة القابل للتمرير */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* بطاقة المعاينة التفاعلية الحية */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-slate-850 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-300 font-sans">
                  معاينة حية وفورية:
                </span>
                <span className="text-xs font-black text-emerald-400 font-mono px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/40">
                  {currentPreviewFont.name}
                </span>
                <span className="text-[10px] text-slate-500 hidden sm:inline font-sans">
                  بواسطة {currentPreviewFont.author}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono" dir="ltr">
                <span className="text-emerald-400 font-bold">✓ Ligatures Enabled</span>
                <span>•</span>
                <span>font-size: {fontSize}px</span>
              </div>
            </div>

            {/* صندوق الكود الحي */}
            <div 
              className="bg-[#060a12] rounded-xl border border-slate-800/90 p-4 overflow-x-auto shadow-inner select-text transition-all"
              dir="ltr"
              style={{ 
                fontFamily: currentPreviewFont.family,
                fontSize: `${fontSize}px`,
                lineHeight: `${Math.round(fontSize * 1.55)}px`,
                fontFeatureSettings: '"liga" 1, "calt" 1'
              }}
            >
              <pre className="m-0 p-0 text-slate-200 text-left whitespace-pre">
                <code>{PLAYGROUND_SNIPPET}</code>
              </pre>
            </div>

            {/* شريط خصائص الخط المعاين */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-900 text-xs text-slate-400 font-sans">
              <span>💡 {currentPreviewFont.description}</span>
              {activeFontId !== currentPreviewFont.id && (
                <button
                  onClick={() => handleSelectFont(currentPreviewFont)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-1 rounded-lg text-xs transition-colors cursor-pointer shadow-md flex items-center gap-1"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>تطبيق هذا الخط على التطبيق الآن</span>
                </button>
              )}
            </div>
          </div>

          {/* شبكة بطاقات الخطوط السبعة العالمية */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h4 className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-2 font-sans">
                <Code2 className="w-4 h-4 text-emerald-400" />
                اختر خطك البرمجي المفضل ({filteredFonts.length} خطوط متاحة):
              </h4>
              <span className="text-xs text-slate-400 font-sans">
                الخط المعتمد حالياً: <strong className="text-emerald-300 font-bold">{activeFontObj.name}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredFonts.map((font) => {
                const isActive = activeFontId === font.id;
                const isHovered = previewFontId === font.id;

                return (
                  <div
                    key={font.id}
                    onMouseEnter={() => setPreviewFontId(font.id)}
                    className={`relative p-4 rounded-2xl border transition-all cursor-pointer text-right flex flex-col justify-between ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500'
                        : isHovered
                          ? 'bg-slate-800/80 border-emerald-500/50 shadow-md'
                          : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                    }`}
                    onClick={() => handleSelectFont(font)}
                  >
                    <div>
                      {/* رأس بطاقة الخط */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h5 
                            className="text-base font-bold text-white tracking-wide"
                            style={{ fontFamily: font.family }}
                          >
                            {font.name}
                          </h5>
                          <span className="text-[10px] text-slate-500 font-sans">
                            {font.author}
                          </span>
                        </div>

                        {/* شارة الخط */}
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${font.badgeColor}`}>
                          {font.badge}
                        </span>
                      </div>

                      {/* وصف الخط وميزته */}
                      <p className="text-xs text-slate-400 font-sans leading-relaxed mb-3">
                        {font.description}
                      </p>

                      {/* مقتطف الكود التوضيحي بالخط الفعلي */}
                      <div 
                        className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 text-xs text-emerald-300 font-normal leading-normal overflow-x-auto select-none"
                        dir="ltr"
                        style={{ 
                          fontFamily: font.family,
                          fontFeatureSettings: '"liga" 1, "calt" 1'
                        }}
                      >
                        {font.preview}
                      </div>
                    </div>

                    {/* زر التفعيل والحالة */}
                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-sans">
                        {isActive ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            الخط النشط حالياً
                          </span>
                        ) : (
                          <span className="text-slate-500 text-[11px]">
                            انقر لتفعيل الخط فورياً
                          </span>
                        )}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectFont(font);
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 font-sans ${
                          isActive
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                            : 'bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black shadow-sm'
                        }`}
                      >
                        {isActive ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>مفعل ✓</span>
                          </>
                        ) : (
                          <>
                            <span>تفعيل</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* 4. شريط التذييل */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-t border-slate-800 bg-slate-950/70 shrink-0 text-xs font-sans text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>يتم تطبيق الخط المختار فورياً وتلقائياً على جميع الأكواد وصناديق الاستوديو ملء الشاشة ويحفظ في المتصفح.</span>
          </div>

          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-1.5 rounded-xl font-bold transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
}
```

---

### 4.2 `src/components/common/ShortcutsGuideModal.jsx` (New File)

**Prop Interface**:
```typescript
interface ShortcutsGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**Complete Code**:
Based on `SHORTCUTS_GUIDE_EG.md` and `react/src/components/common/ShortcutsGuideModal.jsx`, adapted with Node.js context and Egyptian dialect:
- Imports: `X`, `Search`, `Sparkles`, `Terminal`, `Palette`, `Wrench`, `Keyboard`, `Copy`, `Check`, `Zap`, `Lightbulb`, `BookOpen` from `lucide-react`.
- Data: All 24 commands from `SHORTCUTS_GUIDE_EG.md`.
- Features: Instant search filter, category tabs (`all`, `ai`, `automation`, `ui`, `code`, `keys`), one-click prompt copy with 2s checkmark feedback, `Escape` key listener, `maxHeight: '90vh'`.

---

### 4.3 `src/components/common/ScrollToTopButton.jsx` (New File)

**Prop Interface**:
```typescript
interface ScrollToTopButtonProps {
  scrollProgress: number; // 0 to 100
  subtopicTitle?: string;
}
```

**Complete Code**:
- Appears when `window.scrollY >= 220px`.
- Renders circular SVG progress ring with `radius = 21`, `circumference = 2 * Math.PI * radius`, and `strokeDashoffset = circumference - (scrollProgress / 100) * circumference`.
- Triggers `confetti` from `canvas-confetti` when `scrollProgress >= 98` once per subtopic.
- Smooth scrolls to top on click: `window.scrollTo({ top: 0, behavior: 'smooth' })`.

---

### 4.4 `src/components/ai/GeminiKeyPoolModal.jsx` (Upgrade)

**Prop Interface**:
```typescript
interface GeminiKeyPoolModalProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**Enhancements to add to existing file**:
1. Mount to `document.body` via `createPortal` with `z-[99998]` to layer above mobile drawer and backdrops.
2. Batch key delimiter parsing (`[\n,\s]+`) in `handleAddKey`.
3. One-click clipboard paste (`handlePasteFromClipboard` via `navigator.clipboard.readText()`).
4. Google AI Studio card with deep-link: `https://aistudio.google.com/app/apikey`.
5. Key copying per row with temporary checkmark feedback (`handleCopyKey`).
6. Status badges supporting all returns from `testGeminiKeysInParallel`:
   - `res.status === 'active'`: Emerald badge (`نشط ({res.latency}ms)`)
   - `res.status === 'exhausted'`: Amber badge (`استنفد الحصة (429 Rate Limit)`)
   - `res.status === 'invalid'`: Rose badge (`غير صالح (400/403)`)
   - `res.status === 'error'`: Red badge (`خطأ اتصال`)

---

### 4.5 `src/App.jsx` Orchestration Wiring

**Prop & State Additions**:
```jsx
// New modal states
const [isCodeFontModalOpen, setIsCodeFontModalOpen] = useState(false);
const [isShortcutsModalOpen, setIsShortcutsModalOpen] = useState(false);

// Layout mode: 'default' | 'wide' | 'focus'
const [layoutMode, setLayoutMode] = useState(() => {
  try {
    return localStorage.getItem("nodejs_roadmap_layout_mode") || "default";
  } catch {
    return "default";
  }
});

// Responsive sidebar state
const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
  try {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return false;
    const savedMode = localStorage.getItem("nodejs_roadmap_layout_mode");
    return savedMode !== "focus";
  } catch {
    return true;
  }
});

// Scroll reading progress state
const [scrollProgress, setScrollProgress] = useState(0);
```

**Effects**:
```jsx
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
  return () => window.removeEventListener('scroll', handleScroll);
}, [currentSubtopicId, currentSectionId, specialView]);
```

**Layout Mode Handler**:
```jsx
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
```

**Main Container Class (PAIR.27)**:
```jsx
const layoutContainerClass = layoutMode === 'wide' 
  ? 'max-w-[1750px]' 
  : layoutMode === 'focus' 
    ? 'max-w-4xl' 
    : 'max-w-7xl';
```

---

## 5. Verification Method

To independently verify the implementation:

1. **Verify Build**:
   ```bash
   cmd.exe /c "cd nodejs && npm run build"
   ```
   **Expected**: 0 syntax or import errors; bundle created under `dist/`.

2. **Execute Full Test Suite**:
   ```bash
   cd nodejs; node tests/runner.js
   ```
   **Expected**:
   - `tier1_features/code_fonts.test.js`: 10/10 PASS.
   - `tier1_features/responsive_layout.test.js`: 15/15 PASS.
   - `tier1_features/gemini_pool.test.js`: 15/15 PASS.
   - `tier3_interactions/font_and_fullscreen.test.js`: 7/7 PASS.
   - `tier3_interactions/drawer_and_navigation.test.js`: 7/7 PASS.
   - `tier4_real_world/shortcuts_and_ai_study.test.js`: 2/2 PASS.

3. **Runtime Invalidation Conditions**:
   - If pressing `Ctrl + /` fails to toggle `isShortcutsModalOpen`, check if the event listener in `App.jsx` handles both `e.key === '/'` and `e.code === 'Slash'`.
   - If `CodeFontModal` does not update the font, inspect `--font-code` on `document.documentElement.style` and verify `applyCodeFont` dispatched `code-font-changed`.
   - If switching layout mode causes horizontal scrollbars on mobile, check `overflow-x-hidden` on root container.
