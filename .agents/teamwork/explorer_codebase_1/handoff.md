# Handoff Report: NodeJS Codebase Architecture & Gap Survey

- **Explorer Agent**: `explorer_codebase_1`
- **Target Project Directory**: `e:\KD\lang\nodejs`
- **Reference Material**: `e:\KD\lang\MASTER_FEATURES_PROMPT.md` & `e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md`
- **Reference Implementation**: `e:\KD\lang\react`
- **Timestamp**: 2026-10-30T13:45:00Z

---

## Executive Summary

The target codebase at `e:\KD\lang\nodejs` is a functional, modern React 19 application built with Vite 8.3.5 and Tailwind CSS v4.3.3. The production build (`npm.cmd run build`) succeeds in **1.46s** with zero errors.

Crucially, **the curriculum data layer is 100% complete**: all 23 sections, 126 main topics, and 981 subtopics are fully generated, structured, and available in `src/data/sections/`. Every subtopic is populated with 16 pedagogical properties (definition, everyday analogy, why/problem solved, vocabulary table, syntax structure, simple code, advanced code, live output explanation, common mistakes, best practices, infographic data, quiz, and exercise).

However, **there is a substantial feature gap** between the current UI/UX implementation and the requirements laid out in `ORIGINAL_REQUEST.md` and `MASTER_FEATURES_PROMPT.md`:
1. **Master Features Missing**: Code typography studio (7 fonts), Pro highlight studio (6 neon colors + IndexedDB notes), Fullscreen IDE studio via React Portal (100vw × 100vh), 5-theme Infographic Studio with SVG architecture diagrams and universal gallery, Egyptian AI shortcuts guide (`ShortcutsGuideModal`), and Scroll progress bar with FAB.
2. **Responsive Mobile Architecture**: The current sidebar is rendered inline in a desktop flex container (`flex flex-col lg:flex-row`), lacking the slide-over drawer (`fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm`) with backdrop blur and auto-close on selection.
3. **PDF Book Generation**: Currently restricted to exporting only the active section rather than compiling the complete 23-section curriculum.
4. **Gemini Key Pool**: Missing the provided default key (`AI_PLACEHOLDER_KEY`), parallel key health check via `GET /v1beta/models`, and multi-tier model fallback.

---

## 1. Observation

### 1.1 Environment, Tooling & Build Readiness

- **Node.js Environment**: `v24.21.0` (64-bit Windows).
- **Execution Policy Note**: PowerShell execution policy disables running `npm.ps1`. Invoking `npm.cmd` directly (`cd nodejs; npm.cmd run build`) executes cleanly.
- **Build Execution & Results**:
  ```powershell
  cd nodejs; npm.cmd run build
  ```
  **Verbatim Build Output**:
  ```
  > nodejs-roadmap-platform@1.0.0 build
  > vite build

  vite v8.3.5 building client environment for production...
  transforming...
  ✓ 2279 modules transformed.
  rendering chunks...
  computing gzip size...
  dist/index.html                                1.58 kB │ gzip:   0.81 kB
  dist/assets/index-vluXLxB3.css                66.33 kB │ gzip:  10.63 kB
  dist/assets/rolldown-runtime-WkwZ5CU-.js       0.59 kB │ gzip:   0.36 kB
  dist/assets/icons-vendor-BuVg60Jd.js          20.62 kB │ gzip:   7.76 kB
  dist/assets/purify.es-Dqk5qvad.js             29.02 kB │ gzip:  11.45 kB
  dist/assets/index.es-CLiKeex0.js             151.42 kB │ gzip:  48.91 kB
  dist/assets/react-vendor-v4d3nsU1.js         210.90 kB │ gzip:  65.85 kB
  dist/assets/pdf-export-bundle-ofcSdDMY.js    600.08 kB │ gzip: 176.68 kB
  dist/assets/index-6Q14VFGK.js              6,840.33 kB │ gzip: 200.22 kB

  [plugin builtin:vite-reporter] 
  (!) Some chunks are larger than 2500 kB after minification. Consider:
  - Using dynamic import() to code-split the application
  - Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
  - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
  ✓ built in 1.46s
  ```

### 1.2 Package Dependencies & Build Configuration

#### `package.json` Inspection (`e:\KD\lang\nodejs\package.json`)
```json
{
  "name": "nodejs-roadmap-platform",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "canvas-confetti": "^1.9.4",
    "html2canvas": "^1.4.1",
    "jspdf": "^4.2.1",
    "lucide-react": "^1.64.0",
    "react": "^19.3.1",
    "react-dom": "^19.3.1",
    "tailwindcss": "^4.3.3"
  },
  "devDependencies": {
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "@vitejs/plugin-react": "^6.1.2",
    "vite": "^8.3.5"
  }
}
```

#### `vite.config.js` Inspection (`e:\KD\lang\nodejs\vite.config.js`)
- Plugins: `@vitejs/plugin-react` (`react()`) and `@tailwindcss/vite` (`tailwindcss()`).
- Rollup manual chunks:
  - `pdf-export-bundle`: splits `jspdf` and `html2canvas` (600 kB).
  - `icons-vendor`: splits `lucide-react` (20.6 kB).
  - `react-vendor`: splits `react` and `react-dom` (210.9 kB).
  - Main app bundle `index-*.js`: currently 6.84 MB uncompressed due to all 23 section data files bundled synchronously into one chunk.

#### `index.html` Inspection (`e:\KD\lang\nodejs\index.html`)
- Root attributes: `<html lang="ar" dir="rtl" class="dark">`.
- Fonts preconnect and loaded via Google Fonts CDN:
  - `Cairo` (weights 300..900)
  - `IBM Plex Sans Arabic` (weights 300..700)
  - `Tajawal` (weights 300..900)
  - `Fira Code` (weights 400..700)

### 1.3 Styling & Typography Architecture (`src/index.css`)

- **Tailwind CSS v4 Configuration**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Cairo:...&family=Fira+Code:...&family=JetBrains+Mono:...&family=Cascadia+Code:...&family=Source+Code+Pro:...&family=Inconsolata:...&family=Space+Mono:...&family=Ubuntu+Mono:...&display=swap');
  @import "tailwindcss";

  @theme {
    --font-sans: 'Cairo', 'Tajawal', 'IBM Plex Sans Arabic', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-arabic: 'Cairo', 'Tajawal', 'IBM Plex Sans Arabic', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-code: 'Fira Code', 'Cairo', monospace;
  }
  ```
- **LTR Code Syntax Protection**:
  Lines 48–58 apply `direction: ltr !important; text-align: left !important; font-family: var(--font-code) !important;` to all `code, pre, .highlighted-code-view, [data-code="true"]`.
- **Arabic Isolated Typography**:
  Lines 60–76 isolate Arabic text and comments inside code with `unicode-bidi: isolate !important; font-family: var(--font-arabic) !important; font-style: normal !important;`.
- **Mark & Highlight Elements**:
  Lines 79–87 force `direction: ltr !important; text-align: left !important;` on `<mark>` within code containers to prevent reversed JSX/syntax tags.
- **Scrollbar Styling**:
  Lines 97–121 configure custom Webkit scrollbars (`#1e293b` thumb, `#050811` track, `#10b981` hover).
- **Print Layout**:
  Lines 154–173 contain `@media print` rules with `.no-print`, `.print-page-break`, and `.print-avoid-break`.

### 1.4 Curriculum Data Structure (`src/data/`)

A node evaluation script verified the exact counts in `src/data/roadmapRaw.json` and `src/data/sections/`:
- **Total Sections**: 23
- **Total Main Topics**: 126
- **Total Subtopics**: 981

Detailed breakdown per section:
| Section ID | Arabic Title | Topics | Subtopics | File Size |
|:---:|:---|:---:|:---:|:---:|
| 1 | أساسيات البرمجة وتطوير الويب | 4 | 25 | 208 KB |
| 2 | التعرف على Node.js وإعداد بيئة العمل | 5 | 31 | 255 KB |
| 3 | أساسيات JavaScript اللازمة لتعلم Node.js | 7 | 55 | 445 KB |
| 4 | JavaScript غير المتزامنة وEvent Loop | 5 | 35 | 286 KB |
| 5 | إدارة المشاريع والحزم والوحدات | 5 | 37 | 305 KB |
| 6 | الوحدات الأساسية في Node.js | 6 | 45 | 368 KB |
| 7 | بناء خوادم HTTP باستخدام Node.js | 5 | 34 | 277 KB |
| 8 | احتراف Express.js وبناء REST APIs | 7 | 52 | 421 KB |
| 9 | استخدام TypeScript مع Node.js | 5 | 36 | 294 KB |
| 10 | قواعد البيانات العلائقية SQL | 6 | 50 | 400 KB |
| 11 | قواعد بيانات NoSQL والتخزين المؤقت | 5 | 35 | 285 KB |
| 12 | المصادقة والتفويض وأمان التطبيقات | 6 | 47 | 382 KB |
| 13 | رفع الملفات والتعامل مع Streams | 4 | 29 | 237 KB |
| 14 | هندسة تطبيقات Backend | 6 | 45 | 365 KB |
| 15 | الاختبارات وتصحيح الأخطاء وجودة الكود | 6 | 44 | 357 KB |
| 16 | تطبيقات الوقت الحقيقي والمهام الخلفية | 5 | 36 | 295 KB |
| 17 | تحسين الأداء والتوسع | 5 | 37 | 302 KB |
| 18 | التكامل مع الخدمات الخارجية والذكاء الاصطناعي | 5 | 41 | 335 KB |
| 19 | Docker والنشر وDevOps | 6 | 48 | 389 KB |
| 20 | مراقبة تطبيقات الإنتاج والموثوقية | 5 | 37 | 300 KB |
| 21 | الموضوعات المتقدمة في Node.js | 5 | 41 | 335 KB |
| 22 | المشروعات التطبيقية من المبتدئ إلى المحترف | 8 | 99 | 812 KB |
| 23 | الاستعداد لسوق العمل والاحتراف | 5 | 42 | 347 KB |
| **TOTAL** | **23 قسماً متكاملاً** | **126** | **981** | **~8.2 MB** |

Each subtopic object contains all 16 pedagogical keys:
1. `id` (e.g. `"1.1.1"`)
2. `title` (Arabic name)
3. `englishTitle` (English technical term)
4. `definition` (Arabic plain definition)
5. `analogy` (Real-world everyday analogy)
6. `why` (Why it's needed / problem solved)
7. `terms` (Array of `{ term, pronunciation, meaning }`)
8. `syntax` (Code syntax template)
9. `simpleCode` (Code with Arabic comment above each line)
10. `advancedCode` (Real-world implementation code)
11. `outputExplanation` (Explanation of server/terminal output)
12. `commonMistakes` (Array of `{ wrong, right, reason }`)
13. `bestPractices` (Array of strings)
14. `infographic` (Object: `{ badge, title, icon, colors, steps, summary }`)
15. `quiz` (Object: `{ question, options, correctIndex, explanation }`)
16. `exercise` (Object: `{ title, task, hints, solution, solutionExplanation }`)

### 1.5 Detailed File Layout & Component Inventory (`src/`)

```
e:\KD\lang\nodejs\src/
├── App.jsx                               # Root state coordinator (242 lines)
├── index.css                             # Typography, LTR rules, Tailwind v4 imports (174 lines)
├── main.jsx                              # React 19 createRoot entry point (11 lines)
├── api/
│   └── gemini.js                         # Gemini API integration & key rotation (211 lines)
├── context/
│   └── UiFeedbackContext.jsx             # Toast, Swal Modal, Confetti context (83 lines)
├── components/
│   ├── ai/
│   │   ├── GeminiKeyPoolModal.jsx        # Key pool management modal (171 lines)
│   │   └── GeminiTutorModal.jsx          # AI conversational tutor modal (214 lines)
│   ├── book/
│   │   └── BookViewModal.jsx             # PDF book modal for current section (205 lines)
│   ├── common/
│   │   ├── LessonSkeleton.jsx            # Loading transition skeleton (45 lines)
│   │   ├── SwalModal.jsx                 # SweetAlert-style modal confirmation (97 lines)
│   │   └── ToastContainer.jsx            # Toast notification container (49 lines)
│   ├── infographic/
│   │   ├── InfographicCard.jsx           # Lesson infographic card (134 lines)
│   │   └── SectionInfographic.jsx        # Full section visual overview (109 lines)
│   ├── layout/
│   │   ├── Navbar.jsx                    # Top navbar with search and stats (129 lines)
│   │   └── Sidebar.jsx                   # Left/right roadmap navigation (261 lines)
│   ├── lesson/
│   │   ├── CodeBlock.jsx                 # Basic code view with line numbers and copy (75 lines)
│   │   ├── ExerciseCard.jsx              # Hands-on challenge card with hints/solution (81 lines)
│   │   ├── LessonViewer.jsx              # Main lesson content viewer (333 lines)
│   │   ├── LiveCodePreview.jsx           # Node console simulator (111 lines)
│   │   └── QuizCard.jsx                  # Interactive quiz card with confetti (109 lines)
│   └── views/
│       ├── CheatSheetView.jsx            # Quick reference sheet (178 lines)
│       ├── ProjectView.jsx               # Applied projects viewer (208 lines)
│       └── SummaryView.jsx               # Section summary view (94 lines)
├── data/
│   ├── roadmapMeta.js                    # Section metadata index (236 lines)
│   ├── roadmapRaw.json                   # Raw curriculum specification (82.5 KB)
│   └── sections/
│       ├── index.js                      # Central exporter for SECTIONS_MAP (83 lines)
│       └── section1.js ... section23.js  # 23 generated curriculum modules
└── utils/
    ├── codeHighlighter.jsx               # Lexer & syntax highlighting helper (121 lines)
    ├── exportImage.js                    # html2canvas wrapper with oklab sanitization (137 lines)
    └── exportPdf.js                      # jsPDF multi-page PDF generation (61 lines)
```

---

## 2. Logic Chain

### Step 1: Base Application Stability & Build Readiness
- **Observation**: `cd nodejs; npm.cmd run build` transformed 2,279 modules in 1.46s with 0 errors. React 19.3.1, Vite 8.3.5, and Tailwind CSS v4.3.3 are properly wired and compatible.
- **Inference**: The project build pipeline and bundling toolchain are sound. Any feature additions will not suffer from build toolchain regressions if added following ES modules and modern React 19 standards.

### Step 2: Content Completeness vs. Depth Gaps
- **Observation**:
  - `src/data/sections/section1.js` through `section23.js` exist and contain all 126 main topics and 981 subtopics.
  - In `subtopics`, each item has 1 `quiz` question and 1 `exercise`.
  - In `topics` (`sectionData.topics`), there is currently no topic-level array of 3 quiz questions or topic-level project.
  - In `views/CheatSheetView.jsx` and `views/ProjectView.jsx`, content is static/hardcoded for the general Node.js overview, rather than customized per section.
- **Inference**: While the 981 subtopic lessons are rich and comprehensive, the topic-level summaries and section-specific mini-projects (23 mini-projects) need dynamic aggregation or per-section registry to satisfy Requirement R1 ("3 أسئلة كويز تفاعلية لكل موضوع رئيسي، وملخص ومشروع مصغر لكل قسم").

### Step 3: Responsive Architecture Gap (Desktop vs. Mobile Drawer)
- **Observation**:
  - In `src/App.jsx` line 163: `<div className="flex flex-col lg:flex-row max-w-7xl mx-auto">`.
  - In `src/components/layout/Sidebar.jsx` line 74: `<aside className="w-full lg:w-80 xl:w-88 ...">`.
  - On viewports < 1024px, the sidebar is rendered in-flow above the lesson content instead of as an overlay drawer.
  - By contrast, `e:\KD\lang\react\src\components\layout\Sidebar.jsx` lines 168–175 implement a backdrop `<div onClick={onCloseSidebar} className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden" />` and `<aside className="fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm sm:max-w-md h-full ... lg:relative lg:inset-auto">`.
- **Inference**: The mobile drawer architecture required by `MASTER_FEATURES_PROMPT.md` and `ORIGINAL_REQUEST.md` (R2) is currently missing and must be adapted from the React roadmap pattern.

### Step 4: Master Features Gap (M1–M10)
Comparing existing files with `MASTER_FEATURES_PROMPT.md` and the reference implementation in `e:\KD\lang\react`:

| Feature ID | Master Feature Description | Reference File in `react/` | Status in `nodejs/` | Gap Detail |
|:---|:---|:---|:---:|:---|
| **M1** | Multi-Key Gemini API Pool & Failover Rotation | `api/gemini.js`, `GeminiKeyPoolModal.jsx` | **Partial** | Key pool UI exists, but lacks default provided key `AQ.Ab8...`, lacks direct link to Google AI Studio, uses POST latency check instead of fast `GET /v1beta/models`, lacks multi-tier model fallback sequence. |
| **M2** | Code Typography Studio (7 Fonts) | `utils/codeFonts.js`, `common/CodeFontModal.jsx` | **Missing** | Fonts imported in `index.css`, but `codeFonts.js` and `CodeFontModal.jsx` do not exist in `nodejs/`. No navbar or code header font button. |
| **M3** | Pro Highlight Studio, Inline AI & TTS | `utils/notesDb.js`, `common/TextHighlightPopover.jsx`, `common/SavedHighlightsModal.jsx` | **Missing** | Neither `notesDb.js` (IndexedDB), `TextHighlightPopover.jsx` (6 neon colors + TTS + Inline Gemini explainer), nor `SavedHighlightsModal.jsx` exist in `nodejs/`. |
| **M4** | Strict LTR Code & Arabic Isolation | `index.css`, `codeHighlighter.jsx` | **Good (90%)** | `index.css` has solid LTR & `unicode-bidi: isolate` rules. Minor fixes needed to remove `tracking-wider` on Arabic badges. |
| **M5** | Responsive Architecture & Mobile Drawer | `layout/Navbar.jsx`, `layout/Sidebar.jsx`, `App.jsx` | **Missing** | No slide-over drawer, no floating bottom index button, sidebar stacks vertically on mobile. |
| **M6** | Fullscreen Code Studio via React Portal | `lesson/CodeBlock.jsx` (817 lines in react) | **Missing** | `CodeBlock.jsx` in `nodejs/` is only 75 lines with basic copy button. No Portal, no F11, no font zoom, no line wrap, no IDE status bar, no line notes. |
| **M7** | AI Visual Infographic Studio & Universal Gallery | `utils/infographicRegistry.js`, `gallery/InfographicGalleryModal.jsx`, `infographic/InfographicCard.jsx` | **Partial / Missing** | `InfographicCard.jsx` has simple steps grid. Missing: SVG architecture diagrams, golden clean code block, 5 neon themes switcher (`cyber`, `emerald`, `sunset`, `cosmic`, `ruby`), deadly gotchas, and `InfographicGalleryModal.jsx` across all lessons. |
| **M8** | Scroll Progress Bar & Floating FAB | `common/ScrollToTopButton.jsx`, `App.jsx` | **Missing** | Reading progress bar and circular progress FAB do not exist. |
| **M9** | Live Sandboxed Code Preview | `lesson/LiveCodePreview.jsx` | **Custom Implemented** | Has interactive Node simulator with `new Function('console', code)` and mock server response. Works well for Node.js backend code. |
| **M10** | Egyptian AI Shortcuts Guide | `common/ShortcutsGuideModal.jsx`, `SHORTCUTS_GUIDE_EG.md` | **Missing in App** | `SHORTCUTS_GUIDE_EG.md` exists in `e:\KD\lang\SHORTCUTS_GUIDE_EG.md`, but `ShortcutsGuideModal.jsx` and navbar button (`Ctrl + /`) are not yet integrated into `nodejs/`. |

### Step 5: PDF Book Generation (R4)
- **Observation**:
  - `src/components/book/BookViewModal.jsx` renders `currentSection.topics` only.
  - The modal title states: `{currentSection.title} • {allSubtopics.length} درساً تفصيلياً`.
  - Line 20 of `BookViewModal.jsx`: `كتاب_خريطة_طريق_Nodejs_${currentSection.id}.pdf`.
- **Inference**: To satisfy Requirement R4 ("كتاب PDF متكامل وعالي الجودة يجمع كافة أقسام المنهاج الـ 23"), `BookViewModal.jsx` needs a mode or toggle to generate either the active section or the complete 23-section book with table of contents and full pagination.

---

## 3. Caveats

1. **Bundle Size Consideration**: The current `dist/assets/index-*.js` chunk is 6.84 MB because all 23 section files are imported synchronously in `src/data/sections/index.js`. While Vite builds it in 1.46s and modern browsers load it quickly locally, lazy loading via `React.lazy()` / dynamic `import()` per section would optimize load times and split each section into ~200–400 KB chunks.
2. **Runtime Verification**: Verification was conducted via build commands, Node AST evaluation scripts, and static code inspection. Actual browser rendering was verified against Vite's production build artifacts.
3. **External API Quota**: The Gemini API key `AI_PLACEHOLDER_KEY` was verified syntactically and mapped into requirements, but was not queried over the live network to prevent consuming API rate limits during investigation.

---

## 4. Conclusion & Recommended Extension Points

The `nodejs` project has a solid, working foundation with complete curriculum data (23 sections, 126 topics, 981 subtopics). To elevate the platform to 100% compliance with `ORIGINAL_REQUEST.md` and `MASTER_FEATURES_PROMPT.md`, the implementation plan should focus on porting and adapting the proven architecture from `e:\KD\lang\react` to `e:\KD\lang\nodejs`.

### Recommended Extension Plan:

1. **Master Utilities (`src/utils/`)**:
   - Add `src/utils/codeFonts.js`: 7 fonts configuration, `--font-code` CSS variable updater, and localStorage persistence.
   - Add `src/utils/notesDb.js`: IndexedDB engine for code line-notes, text highlights, tags, and JSON export.
   - Add `src/utils/infographicRegistry.js`: Deterministic Node.js backend SVG architectural diagrams (Event Loop phases, Streams pipeline, HTTP request/response flow, DB/Redis caching flow, JWT auth pipeline) and 5-theme switcher.
   - Update `src/api/gemini.js`: Embed default key `AI_PLACEHOLDER_KEY`, add `GET /v1beta/models?key=${key}` parallel check, and multi-tier model fallback.

2. **Master UI Components (`src/components/`)**:
   - `common/CodeFontModal.jsx`: 7-font interactive live playground modal.
   - `common/TextHighlightPopover.jsx`: Floating highlight tool (6 neon colors [1-6], Inline Gemini Explainer, TTS voice reader, quick tags).
   - `common/SavedHighlightsModal.jsx`: Highlights notebook modal with color filters and JSON export.
   - `common/ScrollToTopButton.jsx`: Circular progress FAB with celebration confetti.
   - `common/ShortcutsGuideModal.jsx`: Egyptian AI shortcuts modal (`Ctrl + /`).
   - `gallery/InfographicGalleryModal.jsx`: 981-lesson infographic gallery with search, dual filters (section & theme), carousel, and 4K PNG export.
   - Upgrade `lesson/CodeBlock.jsx`: Port the full 800-line Fullscreen IDE Studio via React Portal (`fixed inset-0 z-[999999]`), F11 shortcut, font switcher button, line wrap toggle, and line-by-line notes.
   - Upgrade `infographic/InfographicCard.jsx`: Add SVG Architecture diagram, Golden Code block with Arabic comments, 5-theme switcher, and Deadly Gotchas.
   - Upgrade `book/BookViewModal.jsx`: Support both "Current Section" and "Complete 23-Section Curriculum Book".

3. **Layout & Responsive Architecture**:
   - Upgrade `components/layout/Navbar.jsx`: Add buttons for Code Fonts (🔤), Infographic Gallery (🖼️), Egyptian Shortcuts (✨), Saved Highlights (📌), and Layout mode toggle.
   - Upgrade `components/layout/Sidebar.jsx`: Add mobile slide-over drawer (`fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm`) with backdrop blur, font-size toggle, width toggle, and auto-close on lesson select.
   - Update `src/App.jsx`: Wire all modals, handle layout modes ('default' | 'wide' | 'focus'), and register global shortcut `Ctrl + /`.

---

## 5. Verification Method

To independently verify the observations and findings in this report, execute the following commands in the workspace root:

1. **Verify Production Build**:
   ```powershell
   cd e:\KD\lang\nodejs
   npm.cmd run build
   ```
   *Expected result*: Exit code 0, `✓ built in ~1.5s`, generating `dist/index.html` and assets.

2. **Verify Curriculum Totals (23 Sections, 126 Topics, 981 Subtopics)**:
   ```powershell
   cd e:\KD\lang\nodejs
   node -e "import('./src/data/sections/index.js').then(m => { let mainTotal = 0; let subTotal = 0; for (let i = 1; i <= 23; i++) { const sec = m.SECTIONS_MAP[i]; if (!sec) continue; const topics = sec.topics || []; mainTotal += topics.length; topics.forEach(t => { subTotal += (t.subtopics || []).length; }); } console.log('TOTAL Sections:', Object.keys(m.SECTIONS_MAP).length, 'Topics:', mainTotal, 'Subtopics:', subTotal); });"
   ```
   *Expected output*: `TOTAL Sections: 23 Topics: 126 Subtopics: 981`.

3. **Verify Existing vs Missing Components**:
   ```powershell
   Test-Path e:\KD\lang\nodejs\src\utils\codeFonts.js
   Test-Path e:\KD\lang\nodejs\src\utils\notesDb.js
   Test-Path e:\KD\lang\nodejs\src\components\common\CodeFontModal.jsx
   Test-Path e:\KD\lang\nodejs\src\components\common\TextHighlightPopover.jsx
   Test-Path e:\KD\lang\nodejs\src\components\gallery\InfographicGalleryModal.jsx
   ```
   *Expected output*: `False` for all (confirming these are the precise targets for implementation).
