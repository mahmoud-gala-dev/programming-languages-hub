# Project: Comprehensive Node.js Interactive Educational Roadmap Platform

## Architecture
- **Framework**: React 19.3.1 with Vite 8.3.5, ES Modules.
- **Styling**: Tailwind CSS v4.3.3, Dark Cyberpunk / Glassmorphism visual theme, Full RTL layout, Cairo unified typography.
- **Data Layer**: 
  - `src/data/roadmapRaw.json`: Complete specification of 23 sections, 126 main topics, and 981 subtopics.
  - `src/data/roadmapMeta.js`: Section metadata for instant navigation rendering.
  - `src/data/sections/`: Modular section chunks loaded dynamically on demand with in-memory caching to keep initial bundle size under 350 KB.
- **Master Features**:
  1. Multi-Key Gemini API Pool with parallel health checks, 429 rotation, and provided default key (`AI_PLACEHOLDER_KEY`).
  2. Code Typography Studio (7 programming fonts with ligatures and localStorage persistence).
  3. Pro Highlight Studio & Notes (6 neon semantic colors, IndexedDB storage, Inline AI explainer, Web Speech TTS).
  4. Strict LTR Code Engine with Cairo Arabic typography isolation and badge protection.
  5. Real Fullscreen Code Studio (100vw × 100vh React Portal, Fullscreen API, IDE status bar, line notes).
  6. Secure Live Sandbox Preview (Dark iframe styling, execution isolation, and Node terminal simulation).
  7. Visual Infographic Studio & Universal Gallery (5 neon themes, SVG architecture diagrams, 4K PNG export).
  8. Scroll Progress Bar & Floating FAB with celebration confetti.
  9. Responsive Slide-over Drawer for mobile/tablet screens.
  10. Egyptian AI Shortcuts Guide (`ShortcutsGuideModal` / `Ctrl + /`).
  11. Complete 23-Section PDF Educational Book Generator.

---

## Feature Inventory
Every requirement from the Survey phase is mapped to a milestone below:

| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | 23-Section Curriculum Specification | Roadmap structure covering 23 sections, 126 main topics, 981 subtopics | M1 | Survey / Raw JSON |
| 2 | Dynamic Chunking & Lazy Loading | Split 23 section files into independent chunks loaded on demand | M1 | Survey / Curriculum |
| 3 | 10 Pedagogical Points per Subtopic | 10 beginner-friendly points with Arabic comments above every code line | M1 | R1 / Survey |
| 4 | Main Topic Quizzes & Exercises | 3 interactive quiz questions and 1 solved practical exercise per main topic | M1 | R1 / Survey |
| 5 | Section Summaries, Cheatsheets & Projects | 23 section summaries with golden rules, 23 cheat sheets, 23 mini-projects | M1 | R1 / Survey |
| 6 | Multi-Key Gemini API Pool | API key pool, localStorage persistence, default key `AQ.Ab8...` support | M2 | R5.1 / Master Features |
| 7 | Parallel Key Health Probe & 429 Failover | `GET /v1beta/models` check, latency benchmarking, and auto key rotation | M2 | R5.1 / Master Features |
| 8 | Model Tier Fallback Sequence | `gemini-3.8-flash` -> `gemini-3-flash-preview` -> `gemini-flash-latest` -> mock | M2 | R5.1 / Master Features |
| 9 | 7 Programming Fonts Studio Config | Configuration and runtime CSS `--font-code` injector for 7 fonts with ligatures | M2 | R5.2 / Master Features |
| 10 | IndexedDB Notes & Highlights Engine | `NodejsRoadmapNotesDB` object stores for codeNotes and highlights | M2 | R5.3 / Master Features |
| 11 | SVG Concept Diagrams Engine | Deterministic Node.js backend architecture diagram generator (5 schemas) | M2 | R3 / Master Features |
| 12 | 5 Switchable Infographic Themes | `cyber`, `emerald`, `sunset`, `cosmic`, `ruby` color palettes | M2 | R3 / Master Features |
| 13 | Top Scroll Reading Progress Bar | Sticky 0%-100% progress bar attached to Navbar with glowing pulse at completion | M3 | R2 / Master Features |
| 14 | Circular SVG Progress FAB | Floating action button with progress ring, smooth scroll, and confetti burst | M3 | R2 / Master Features |
| 15 | Responsive Mobile Slide-over Drawer | Off-canvas drawer (`fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm`) with backdrop blur | M3 | R2 / Master Features |
| 16 | Code Font Selection Modal | Interactive modal playground to test and switch between 7 programming fonts | M3 | R5.2 / Master Features |
| 17 | Egyptian AI Shortcuts Modal | Modal encyclopedia (`ShortcutsGuideModal.jsx`) triggered via `Ctrl + /` | M3 | R5 / Master Features |
| 18 | Gemini Key Pool Management UI | Modal for adding, validating, and managing Gemini keys with AI Studio deep link | M3 | R5.1 / Master Features |
| 19 | Responsive Layout Modes Switcher | 'default', 'wide', and 'focus' view modes with localStorage persistence | M3 | R2 / Master Features |
| 20 | Real Fullscreen Code Studio | 100vw × 100vh React Portal mounted to `document.body` with F11 API | M4 | R5.5 / Master Features |
| 21 | IDE Status Bar & Line Notes | Line-by-line notes with tags and bottom IDE telemetry bar in fullscreen | M4 | R5.5 / Master Features |
| 22 | Scoped Pro Highlight Studio Popover | Floating tool with 6 neon semantic colors [1-6], Inline AI explainer, and TTS | M4 | R5.3 / Master Features |
| 23 | Saved Highlights Manager Modal | Dedicated modal to search, filter by color, and export highlights to JSON | M4 | R5.3 / Master Features |
| 24 | Strict LTR Code Engine & Cairo Isolation | LTR code container protection and Cairo cursive typography isolation | M4 | R5.4 / Master Features |
| 25 | Secure Dark Sandbox Code Preview | Sandboxed iframe with dark styles and Node.js execution/output simulation | M4 | R5.6 / Master Features |
| 26 | Infographic Card Component | High-density card with SVG architecture, golden code, rules, and traps | M5 | R3 / Master Features |
| 27 | Universal Infographic Gallery Modal | 981-lesson gallery with search, dual filters (section & theme), and carousel | M5 | R3 / Master Features |
| 28 | 4K PNG High-Res Infographic Export | `html2canvas` export with `oklab`/`oklch` DOM color sanitization | M5 | R3 / Master Features |
| 29 | Complete 23-Section PDF Book Generator | Multi-page A4 PDF book generator compiling all 23 sections with TOC | M5 | R4 / Master Features |
| 30 | Section Artifact Views Integration | Hooking `SummaryView`, `CheatSheetView`, and `ProjectView` to dynamic data | M5 | R1 / R2 |
| 31 | Full E2E Test Suite Validation | 100% pass across all 4 tiers of requirement-derived E2E tests | M6 | Acceptance Criteria |
| 32 | Adversarial Coverage Hardening | White-box stress testing, gap hunting, and edge case resilience verification | M6 | Acceptance Criteria |

---

## Milestones

| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Curriculum Architecture & Data Engine | Dynamic chunking lazy-loader (`sections/index.js`), schema refinement, curriculum enrichment (3 quizzes + 1 exercise per topic, 23 summaries, 23 cheat sheets, 23 mini-projects) | none | DONE |
| M2 | Master Core Utilities & Engines | `gemini.js` (Multi-Key Pool, 429 rotation, default key), `codeFonts.js` (7 fonts), `notesDb.js` (IndexedDB), `infographicRegistry.js` (SVG schemas + 5 themes) | none | DONE |
| M3 | Responsive Dashboard & Navigation Experience | Mobile slide-over drawer, Navbar with reading progress, Circular FAB with confetti, `CodeFontModal`, `GeminiKeyPoolModal`, `ShortcutsGuideModal`, layout modes | M2 | DONE |
| M4 | Fullscreen IDE Studio & Pro Highlight Studio | `CodeBlock.jsx` upgrade (100vw × 100vh React Portal, F11, IDE status bar, line notes), `TextHighlightPopover.jsx` (6 neon colors, TTS, Inline AI), `SavedHighlightsModal`, `LiveCodePreview` dark sandbox | M2, M3 | DONE |
| M5 | Infographic Studio, Gallery & Complete PDF Book | `InfographicCard.jsx` (SVG diagrams, 5 themes, golden code), `InfographicGalleryModal.jsx` (981 infographics, 4K PNG export), `BookViewModal.jsx` (complete 23-section PDF book), section views | M1, M2, M4 | DONE |
| M6 | Final E2E Verification & Adversarial Hardening | Phase 1: 100% pass of E2E test suite (Tiers 1-4). Phase 2: Adversarial coverage hardening (Tier 5). Build verification (`npm run build` with 0 errors). | M1, M2, M3, M4, M5, TEST_READY | DONE |

---

## Interface Contracts

### 1. Data Loader Contract (`src/data/sections/index.js`)
```javascript
export async function fetchSectionData(sectionId: number): Promise<CompleteSection>;
export const SECTIONS_META: RoadmapSectionMeta[];
```

### 2. Multi-Key Gemini API Pool Contract (`src/api/gemini.js`)
```javascript
export function getStoredApiKeys(): string[];
export function storeApiKeys(keys: string[]): void;
export function getActiveApiKey(): string;
export function setActiveApiKey(key: string): void;
export async function testApiKeyHealth(key: string): Promise<{ status: string, latency: number, message: string }>;
export async function testAllKeysHealth(keys: string[]): Promise<Array<{ key: string, status: string, latency: number, message: string }>>;
export async function generateGeminiReply(prompt: string, systemInstruction?: string): Promise<string>;
export async function explainCodeSnippet(code: string, context: string): Promise<string>;
```

### 3. Code Typography Contract (`src/utils/codeFonts.js`)
```javascript
export interface CodeFont {
  id: string;
  name: string;
  arabicName: string;
  family: string;
  description: string;
  category: string;
}
export const CODE_FONTS: CodeFont[];
export function applyCodeFont(fontId: string): void;
export function getActiveCodeFont(): CodeFont;
export function initCodeFont(): void;
```

### 4. IndexedDB Notes & Highlights Contract (`src/utils/notesDb.js`)
```javascript
export async function saveCodeNote(note: { subtopicId: string, lineNumber: number, tag: string, content: string }): Promise<number>;
export async function getCodeNotesBySubtopic(subtopicId: string): Promise<any[]>;
export async function deleteCodeNote(id: number): Promise<void>;
export async function saveHighlight(highlight: { subtopicId: string, title: string, text: string, type: string, color: string, note?: string, tag?: string }): Promise<number>;
export async function getAllHighlights(): Promise<any[]>;
export async function deleteHighlight(id: number): Promise<void>;
```

### 5. Infographic Registry Contract (`src/utils/infographicRegistry.js`)
```javascript
export interface InfographicTheme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  glow: string;
}
export const INFOGRAPHIC_THEMES: Record<string, InfographicTheme>;
export function renderSvgArchitectureDiagram(schemaType: string, theme: InfographicTheme, subtopicData: any): string;
```

---

## Code Layout

```
e:\KD\lang\nodejs/
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── main.jsx                          # React 19 root mount
│   ├── App.jsx                           # Global state & layout controller
│   ├── index.css                         # Tailwind v4, LTR rules, Cairo fonts
│   ├── api/
│   │   └── gemini.js                     # Multi-key pool & model rotation
│   ├── context/
│   │   └── UiFeedbackContext.jsx         # Toast & Modal notification context
│   ├── data/
│   │   ├── roadmapMeta.js                # Lightweight 23-section metadata
│   │   ├── roadmapRaw.json               # Full 23/126/981 curriculum specification
│   │   └── sections/                     # Dynamic chunked sections (section1.js .. section23.js)
│   │       ├── index.js                  # Dynamic import loader & in-memory cache
│   │       └── section1.js ... section23.js
│   ├── utils/
│   │   ├── codeFonts.js                  # 7 programming fonts manager
│   │   ├── notesDb.js                    # IndexedDB highlights & line notes storage
│   │   ├── codeHighlighter.jsx           # Syntax highlighting & Arabic isolation
│   │   ├── infographicRegistry.js        # SVG architecture diagrams & 5 themes
│   │   ├── exportImage.js                # 4K PNG export with DOM color sanitization
│   │   └── exportPdf.js                  # Multi-page A4 PDF generation
│   └── components/
│       ├── layout/
│       │   ├── Navbar.jsx                # Top navbar, search, scroll progress
│       │   └── Sidebar.jsx               # Responsive slide-over drawer (mobile) & desktop sidebar
│       ├── common/
│       │   ├── CodeFontModal.jsx         # 7-font typography live playground
│       │   ├── TextHighlightPopover.jsx  # Floating highlight tool (6 neon colors, TTS, AI)
│       │   ├── SavedHighlightsModal.jsx  # Highlights manager modal
│       │   ├── ScrollToTopButton.jsx     # Floating FAB with circular progress ring
│       │   ├── ShortcutsGuideModal.jsx   # Egyptian AI shortcuts guide (Ctrl + /)
│       │   ├── LessonSkeleton.jsx        # Lazy loading skeleton
│       │   └── ToastContainer.jsx        # Toasts container
│       ├── ai/
│       │   ├── GeminiKeyPoolModal.jsx    # Key pool management modal
│       │   └── GeminiTutorModal.jsx      # AI interactive tutor modal
│       ├── lesson/
│       │   ├── LessonViewer.jsx          # Subtopic lesson presenter (10 points)
│       │   ├── CodeBlock.jsx             # Fullscreen IDE Studio via React Portal
│       │   ├── LiveCodePreview.jsx       # Sandboxed dark-themed code runner
│       │   ├── QuizCard.jsx              # Topic interactive quiz card
│       │   └── ExerciseCard.jsx          # Solved practical exercise card
│       ├── infographic/
│       │   ├── InfographicCard.jsx       # Interactive infographic card with themes
│       │   └── SectionInfographic.jsx    # Section-level visual summary
│       ├── gallery/
│       │   └── InfographicGalleryModal.jsx # 981-lesson infographic gallery modal
│       ├── book/
│       │   └── BookViewModal.jsx         # Complete 23-section PDF book generator
│       └── views/
│           ├── SummaryView.jsx           # Section summary & golden rules view
│           ├── CheatSheetView.jsx        # Section comparison table / cheat sheet view
│           └── ProjectView.jsx           # Section integrated mini-project view
```
