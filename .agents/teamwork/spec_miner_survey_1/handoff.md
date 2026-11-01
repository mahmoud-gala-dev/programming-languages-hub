# Master Features Specification Survey & Architectural Mining Report

**Working Directory**: `e:\KD\lang\.agents\teamwork\spec_miner_survey_1`  
**Target Project**: `e:\KD\lang\nodejs` (Node.js Educational Roadmap Platform)  
**Authoritative Reference**: `e:\KD\lang\MASTER_FEATURES_PROMPT.md` and Reference Implementation `e:\KD\lang\react`  
**Original Request Source**: `e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md`  
**Date**: 2026-10-30  

---

## 1. Observation

### 1.1 Documented & Authoritative Specifications Inspected
1. **`MASTER_FEATURES_PROMPT.md`** (`e:\KD\lang\MASTER_FEATURES_PROMPT.md`, 292 lines, 27,892 bytes):
   - Outlines 10 core integrated features: Multi-Key Gemini API Pool, 7 Programming Fonts Studio, Pro Highlight Studio with 6 neon colors, Strict LTR syntax preservation and Cairo typography isolation, Full-spectrum responsive architecture (320px–1920px), Fullscreen Code Studio (100vw × 100vh React Portal), Visual Infographic Studio & Universal Gallery, Dynamic Scroll Progress Bar & FAB, Sandboxed Code Preview with dark iframe styling, and Egyptian AI Shortcuts Encyclopedia (`SHORTCUTS_GUIDE_EG.md`).
2. **`ORIGINAL_REQUEST.md`** (`e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md`, 55 lines, 7,156 bytes):
   - Mandates the application of all advanced master features to the Node.js educational platform across 23 sections, 126 main topics, and 981 subtopics.
   - Specifies default provided Gemini API key: `AI_PLACEHOLDER_KEY`.
   - Requires full production integrity (`npm run build` in `e:\KD\lang\nodejs` with 0 errors).
3. **Reference Implementation Codebase** (`e:\KD\lang\react`):
   - `src/api/gemini.js` (362 lines): Multi-key pool, parallel verification probe (`GET https://generativelanguage.googleapis.com/v1beta/models?key=${key}`), latency measurement, 429 quota exhaustion failover, candidate model chain (`gemini-3.8-flash` -> `gemini-3-flash-preview` -> `gemini-flash-latest`), and local tutor mock fallback.
   - `src/utils/codeFonts.js` (142 lines) & `src/components/common/CodeFontModal.jsx` (332 lines): 7 programming fonts from Google Fonts (`fira-code`, `jetbrains-mono`, `cascadia-code`, `source-code-pro`, `inconsolata`, `space-mono`, `ubuntu-mono`), dynamic root `--font-code` property mutation, `code-font-changed` CustomEvent broadcast, and `react_roadmap_code_font` localStorage key.
   - `src/utils/notesDb.js` (312 lines): IndexedDB database `ReactRoadmapNotesDB` (v2) with two object stores: `codeNotes` and `highlights`. Full CRUD with automatic LocalStorage fallback.
   - `src/components/common/TextHighlightPopover.jsx` (634 lines): Strict scope limiter (`[data-lesson-script="true"]`, `pre`, `code`), 6 neon semantic colors with [1]–[6] numeric shortcuts, Web Speech API TTS (`ar-SA` / `en-US`), 2-sentence Gemini AI inline explainer, quick tags, and preset notes.
   - `src/components/common/SavedHighlightsModal.jsx` (337 lines): Filterable highlights manager (by color, snippet type, and query) with JSON export.
   - `src/utils/codeHighlighter.jsx` (346 lines) & `src/index.css` (228 lines): Strict LTR code engine (`direction: ltr !important`), Arabic token cursive connectivity preservation (`unicode-bidi: isolate !important`), `<mark>` direction lock, and badge letter-spacing protection.
   - `src/components/lesson/CodeBlock.jsx` (817 lines): 100vw × 100vh Fullscreen Code Studio via React Portal to `document.body`, Fullscreen API (`F` key), scroll lock (`overflow: hidden`), line wrapping (`W` key), zoom (`+`/`-`), line-by-line notes with IndexedDB storage, and IDE status bar.
   - `src/components/lesson/LiveCodePreview.jsx` (179 lines): Dark-themed sandbox iframe (`sandbox="allow-scripts allow-modals allow-same-origin"`), custom injected CSS (`IFRAME_DARK_STYLES`), and dynamic `ResizeObserver` height tracking.
   - `src/utils/infographicRegistry.js` (337 lines) & `src/components/infographic/InfographicCard.jsx` (421 lines) & `src/components/gallery/InfographicGalleryModal.jsx` (442 lines): 5 neon themes (`cyber`, `emerald`, `sunset`, `cosmic`, `ruby`), 5 SVG architecture diagram schemas (`memory_boxes`, `state_cycle`, `component_tree`, `lifecycle_pipeline`, `universal_flow`), golden code formatting, and 4K PNG export.
   - `src/components/common/ScrollToTopButton.jsx` (173 lines) & `Navbar.jsx` (262 lines): Dynamic scroll progress bar (0%–100%), circular SVG FAB progress ring, and celebratory confetti on 100% completion.
   - `src/components/book/BookViewModal.jsx` (205 lines), `src/utils/exportPdf.js` (61 lines), `src/utils/exportImage.js` (137 lines): Multi-page A4 PDF book generation and DOM color sanitization (converting `oklab`/`oklch` to RGBA).

### 1.2 Target Project Current State (`e:\KD\lang\nodejs`)
- Verified current build command: `cmd /c "cd nodejs && npm run build"` exits with code 0 (`built in 1.37s` using Vite 8.3.5 and React 19.3.1).
- Existing gap:
  - `src/api/gemini.js` in `nodejs` lacks the default key `AI_PLACEHOLDER_KEY`, uses single model `gemini-flash-latest` without model tier fallback, and tests keys via POST prompt instead of the lightweight `GET /models?key=`.
  - `CodeFontModal.jsx` and `codeFonts.js` are missing.
  - `TextHighlightPopover.jsx`, `SavedHighlightsModal.jsx`, and `notesDb.js` are missing.
  - `CodeBlock.jsx` is a simple non-fullscreen table without React Portal, F11 Fullscreen API, line notes, or status bar.
  - `LiveCodePreview.jsx` evaluates pure JS via `new Function` without an isolated dark-themed iframe sandbox.
  - `InfographicCard.jsx` has a static theme without theme switching (cyber, emerald, sunset, cosmic, ruby), lacking SVG architecture diagrams and universal gallery.
  - `ScrollToTopButton.jsx` and `ShortcutsGuideModal.jsx` are missing.

---

## 2. Features Discovered & Technical Specifications

### Table 1: Features Discovered

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|----------|---------|-------------|--------|---------|----------------|----------------|
| 1 | AI Engine | Multi-Key Pool & Storage | Manages pool of Gemini API keys in localStorage with bulk key entry and AI Studio deep link. | Key strings array, single key string | Persisted array in localStorage (`nodejs_gemini_api_keys_pool`, `nodejs_gemini_user_api_key`) | Ignores empty/whitespace keys, deduplicates | `MASTER_FEATURES_PROMPT.md` §2.1, `gemini.js` |
| 2 | AI Engine | Parallel Key Health Probe | Asynchronously verifies multiple keys via lightweight endpoint with latency benchmark. | `keys[]` array | Array of `{ key, status, latency, message }` where status: `active`, `quota_exhausted`, `invalid`, `forbidden`, `error` | AbortController 8s timeout, catches network errors | `gemini.js` lines 74–141 |
| 3 | AI Engine | 429 Quota Exhaustion Failover | Automatic rotation to the next active key upon encountering HTTP 429. | Prompt text, system instruction, key pool | Successful completion text from first viable key | Throws detailed message if all keys fail, triggers mock fallback | `gemini.js` lines 150–218 |
| 4 | AI Engine | Model Tier Fallback Chain | Sequential fallback across model variants: `gemini-3.8-flash` -> `gemini-3-flash-preview` -> `gemini-flash-latest`. | Model array iteration per key | Response payload from candidate model | Tries next model on 404/failure, advances key on 429 | `MASTER_FEATURES_PROMPT.md` §2.1, `gemini.js` |
| 5 | AI Engine | Default Provided Key Integration | Initializing the pool with the provided default key `AI_PLACEHOLDER_KEY`. | Default constant string | Active key fallback when localStorage is empty | Seamless fallback | `ORIGINAL_REQUEST.md` R5.1, `gemini.js` |
| 6 | Typography | 7 Programming Fonts Studio | Interactive modal to preview and switch between 7 top programming fonts with ligatures. | Font ID selection | Updated CSS custom property `--font-code` on `document.documentElement` & `document.body` | Falls back to `fira-code` if saved ID is invalid | `codeFonts.js`, `CodeFontModal.jsx` |
| 7 | Typography | Font Ligatures & Features | Enforces `font-feature-settings: "liga" 1, "calt" 1;` for symbols (`=>`, `!==`, `===`, `<=`, `>=`). | CSS font rules | Rendered composite ligatures in code elements | Normal glyphs rendered if font lacks ligatures | `index.css`, `codeFonts.js` |
| 8 | Typography | Code Font Live Playground | Interactive code editor in font modal demonstrating functions, numbers, comparisons, and comments. | Hover or select font card | Instant live font preview in playground box | Maintains sample code state | `CodeFontModal.jsx` lines 23–44 |
| 9 | Typography | Multi-point Font Switcher | Multiple trigger points: Navbar icon (`🔤`), CodeBlock header (`[ T JetBrains Mono ▾ ]`), and Fullscreen IDE toolbar. | Click event | Opens `CodeFontModal` | Prevents modal collision | `MASTER_FEATURES_PROMPT.md` §2.2 |
| 10 | Study Studio | Scoped Selection Engine | Limits user selection exclusively to educational explanations and code blocks. | User mouseup/touchend selection range | Opens floating popover if within `[data-lesson-script="true"]`, `pre`, `code` | Suppressed if inside header, nav, aside, modals, inputs, buttons | `TextHighlightPopover.jsx` lines 115–140 |
| 11 | Study Studio | 6 Neon Semantic Color Palette | 6 distinct neon colors with meanings: Amber [1], Emerald [2], Cyan [3], Purple [4], Rose [5], Orange [6]. | Click color button or press numeric hotkeys 1–6 | Saves highlight with specific color styling | Ignored if active element is input/textarea | `TextHighlightPopover.jsx` lines 36–43 |
| 12 | Study Studio | IndexedDB Storage Engine | Local persistent IndexedDB database storing code notes and text highlights. | Highlight object `{ subtopicId, title, text, type, color, note, tag }` | Auto-incremented ID record in IndexedDB | Synchronous fallback to LocalStorage if IndexedDB unavailable | `notesDb.js` lines 13–45 |
| 13 | Study Studio | Inline AI Explainer | Built-in Gemini tutor button (`🤖 شرح AI ⚡`) that explains selected snippets in 2 beginner-friendly sentences. | Snippet text, subtopic title | 2-sentence Arabic explanation inside popover | Displays fallback explanation on network failure | `TextHighlightPopover.jsx` lines 290–305 |
| 14 | Study Studio | Text-to-Speech (TTS) | Browser speech synthesis reading snippets with automated Arabic (`ar-SA`) / English (`en-US`) detection. | Selected text string | Audio speech playback via `window.speechSynthesis` | Displays alert if speech synthesis unsupported | `TextHighlightPopover.jsx` lines 264–287 |
| 15 | Study Studio | Quick Tags & Note Presets | 5 category tags (💡 مفهوم, ⚠️ تنبيه, 🚀 تطبيق, ❓ سؤال, ⭐ اختبار) and 4 click-to-insert note presets. | Click tag or preset | Appends to note input field | Preserves existing note content | `TextHighlightPopover.jsx` lines 46–60 |
| 16 | Study Studio | Highlights Manager Modal | Dedicated modal (`SavedHighlightsModal.jsx`) for managing, filtering, and exporting highlights. | Filter by color, type, subtopic, or search query | List of highlight cards with delete and JSON export buttons | Empty state card rendered when no matches | `SavedHighlightsModal.jsx` lines 32–114 |
| 17 | Code Engine | Strict LTR Enforcement | Forces `direction: ltr !important; text-align: left !important;` on all code blocks, containers, and `<mark>` tags. | Code DOM elements | Left-to-right code presentation | Prevents reversed syntax (`button><`, `//` inverted) | `index.css`, `codeHighlighter.jsx` |
| 18 | Code Engine | Arabic Comment Isolation | Wraps Arabic text in `unicode-bidi: isolate !important;` with Cairo font (`font-family: var(--font-arabic) !important;`). | Code comment/string tokens containing Arabic | Continuous Arabic cursive typography inside LTR code | Prevents Arabic letter breaking or code reordering | `codeHighlighter.jsx` lines 57–83 |
| 19 | Code Engine | Badge & Mono Letter-Spacing Fix | Removes `letter-spacing` / `tracking-wider` on Arabic text with `font-mono` class. | CSS rule `:not(code):not(pre)...font-mono` | Normal letter connectivity (`35 درساً` without spacing) | Tabular numbers preserved via `font-variant-numeric: tabular-nums` | `index.css` lines 89–95 |
| 20 | IDE Studio | 100vw × 100vh React Portal | Mounts IDE studio directly into `document.body` at `position: fixed; inset: 0; zIndex: 999999`. | Toggle fullscreen button or `F` hotkey | Isolated full-screen overlay covering all host elements | Locks background body scroll (`overflow: hidden`) | `CodeBlock.jsx` lines 98–140 |
| 21 | IDE Studio | Fullscreen API Integration | Full integration with browser hardware fullscreen (`document.documentElement.requestFullscreen()`). | `F` key or toolbar button | Browser enters true fullscreen, hiding OS/browser chrome | Safe fallback if API blocked by browser permissions | `CodeBlock.jsx` lines 130–136 |
| 22 | IDE Studio | Line-by-Line Code Notes | Side drawer in fullscreen studio allowing line-targeted notes with category tagging and search. | Target line number, note text, tag | IndexedDB record associated with subtopic and line | Renders note indicator icon on line number | `CodeBlock.jsx` lines 73–96 |
| 23 | IDE Studio | IDE Status Bar | Bottom status bar displaying active font, font size, line count, note count, language, and encoding. | Studio state variables | Fixed bottom status bar with IDE telemetry | Adapts responsively on mobile | `CodeBlock.jsx` |
| 24 | IDE Studio | Line Wrap & Zoom Controls | Toggle line wrapping (`W` key) and zoom in/out (`+`/`-` keys, range 10px–22px). | Shortcut or button click | Immediate style update on code display container | Preserves user font size preference | `CodeBlock.jsx` lines 121–128 |
| 25 | Sandbox | Secure Iframe Sandboxing | Sandboxed iframe environment with `sandbox="allow-scripts allow-modals allow-same-origin"`. | User code or lesson snippet | Isolated execution sandbox | Throws contained error without affecting host page | `LiveCodePreview.jsx` lines 152–165 |
| 26 | Sandbox | Dark Theme Iframe Injection | Injects `IFRAME_DARK_STYLES` enforcing `color-scheme: dark !important`, background `#0b0f19`, and dark scrollbars. | HTML document template | Visually consistent dark theme iframe output | Eliminates white Windows scrollbars | `LiveCodePreview.jsx` lines 7–58 |
| 27 | Sandbox | Auto-Height ResizeObserver | Observes iframe body scrollHeight to dynamically resize iframe height between 180px and 650px. | Iframe DOM mutations | Automatic height expansion without nested double scrollbars | Fallback height of 240px if observer fails | `LiveCodePreview.jsx` lines 78–96 |
| 28 | Infographic | 5 Switchable Neon Themes | 5 distinct themes: `cyber` (Cyan/Blue), `emerald` (Emerald/Teal), `sunset` (Amber/Orange), `cosmic` (Indigo/Purple), `ruby` (Rose/Amber). | Theme ID selector | Real-time card restyling with primary colors, gradients, and glows | Defaults to section-specific theme mapping | `infographicRegistry.js` lines 10–91 |
| 29 | Infographic | 5 SVG Architectural Diagrams | Deterministic visual diagrams: `memory_boxes`, `state_cycle`, `component_tree`, `lifecycle_pipeline`, `universal_flow`. | Lesson concepts / keyword detection | Responsive SVG visual concept diagram | Falls back to `universal_flow` pipeline | `infographicRegistry.js` lines 122–194 |
| 30 | Infographic | Complete Card Anatomy | Card structure: Technical header, SVG diagram, Golden Code with Arabic line comments, Golden Rule, Deadly Pitfall, 3 Steps, Analogy. | Subtopic data object | High-density reference visual card | Generates placeholder defaults if subtopic fields missing | `InfographicCard.jsx` lines 44–88 |
| 31 | Infographic | 4K PNG Ultra HD Export | Exports infographic card to high-resolution PNG using `html2canvas` with scale: 2 and DOM color sanitization. | Click download button | Downloadable PNG image (`image/png`) | Sanitizes modern CSS color functions (`oklab`/`oklch`) to RGBA | `exportImage.js` lines 105–136 |
| 32 | Infographic | Universal Infographic Gallery | Modal gallery (`InfographicGalleryModal.jsx`) browsing all lesson infographics with dual filtering and grid/carousel modes. | Section filter, theme filter, search query | Filtered grid or carousel view with arrow key navigation | Empty result indicator | `InfographicGalleryModal.jsx` lines 31–120 |
| 33 | Navigation | Global Scroll Progress Bar | Real-time progress bar fixed to Navbar tracking lesson reading position from 0% to 100%. | Window scroll event | Glowing cyan/emerald top bar with pulse at 98%+ | Shows 0% if content is unscrollable | `Navbar.jsx` lines 248–259 |
| 34 | Navigation | FAB with SVG Progress Ring | Floating button appearing after 220px scroll with circular SVG progress ring and celebration confetti on completion. | Window scroll position | Circular progress ring, percentage tooltip, confetti burst | Resets completion state on subtopic change | `ScrollToTopButton.jsx` lines 14–60 |
| 35 | Navigation | Responsive Layout Modes | 3 view modes: `default` (balanced sidebar + content), `wide` (full width), and `focus` (sidebar collapsed). | Layout switcher buttons in Navbar | Dynamic grid/flex container class updates | Saved in localStorage | `App.jsx`, `Navbar.jsx` |
| 36 | Navigation | Responsive Slide-Over Drawer | Off-canvas drawer (`fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm`) for screens < 1024px with backdrop blur. | Toggle drawer button or screen resize | Drawer slides over content and closes automatically on lesson select | Closes on backdrop click or lesson link tap | `Sidebar.jsx`, `App.jsx` |
| 37 | PDF Engine | 23-Section PDF Book Export | Compiles all 23 sections, infographics, code blocks, and cheat sheets into an A4 PDF document. | Section data object, DOM element ref | Downloadable multi-page PDF (`application/pdf`) | Falls back to high-resolution `window.print()` if jsPDF fails | `BookViewModal.jsx`, `exportPdf.js` |
| 38 | Documentation | Egyptian Shortcuts Encyclopedia | Interactive modal (`ShortcutsGuideModal.jsx`) documenting 22 developer shortcuts & AI commands in Egyptian slang. | `Ctrl + /` hotkey or Navbar Sparkles button | Filterable categorized commands modal with one-click prompt copy | Closes on Escape | `SHORTCUTS_GUIDE_EG.md`, `ShortcutsGuideModal.jsx` |

---

### Table 2: Edge Cases & Observed Behaviors

| # | Feature | Input / Condition | Observed Behavior & Handling |
|---|---------|-------------------|------------------------------|
| 1 | Gemini Key Pool | Key string with leading/trailing whitespace or empty lines | Sanitized via `.trim()` and filtered by `Boolean`; deduplicated via `Set`. |
| 2 | Gemini Key Pool | HTTP 429 received from Google API | System logs warning, breaks inner model candidate loop, and immediately retries the next key in the pool. |
| 3 | Gemini Key Pool | Candidate model returns HTTP 404 (model not found/deprecated) | Skips to the next model in the candidate tier chain (`gemini-3.8-flash` -> `gemini-3-flash-preview` -> `gemini-flash-latest`). |
| 4 | Gemini Key Pool | All API keys fail or network is completely offline | Automatically catches error and invokes `generateLocalTutorReply` mock fallback to provide instant educational assistance. |
| 5 | Gemini Health Probe | Key validation request hangs indefinitely | Handled via `AbortController` timeout at 8000ms; returns `{ status: "error", message: "Timeout" }`. |
| 6 | Code Font Studio | User selects custom font, then reloads page | Font ID is retrieved from `localStorage.getItem("nodejs_roadmap_code_font")` and applied to `:root` `--font-code` during initial app mount (`initCodeFont`). |
| 7 | Code Font Studio | Stored font ID does not exist in `CODE_FONTS` array | Falls back safely to default font `fira-code` without error. |
| 8 | Pro Highlight Studio | User selects text inside Navbar, Sidebar, or modal buttons | Selection handler inspects `parentElement.closest('header, nav, aside, button, input...')` and aborts opening popover. |
| 9 | Pro Highlight Studio | Selected text is less than 2 characters long | Selection is ignored (`if (text.length < 2) return;`). |
| 10 | Pro Highlight Studio | Selection occurs near top edge of viewport (top < 75px) | Popover dynamically recalculates position to display *below* selection (`top = rect.bottom + 12`) to prevent clipping. |
| 11 | Pro Highlight Studio | User presses keys `1` through `6` while focused in note textarea | Numeric hotkey handler explicitly checks `document.activeElement.tagName !== 'TEXTAREA'` so numbers are typed normally rather than triggering instant highlight save. |
| 12 | IndexedDB Engine | IndexedDB is blocked (e.g. private browsing mode / disabled) | Functions catch exception and seamlessly fall back to `localStorage` (`nodejs_roadmap_code_notes`, `nodejs_roadmap_saved_highlights`). |
| 13 | Text-to-Speech (TTS) | Selected text contains mixed Arabic and English code | Text is scanned with regex `/[\u0600-\u06FF]/`; if Arabic characters exist, speech engine sets `lang = 'ar-SA'`, otherwise `lang = 'en-US'`. |
| 14 | Code Highlighter | Highlight overlaps with keyword, literal, or string token boundary | Tokenizer uses non-overlapping interval scheduling (`matches.sort`, `start >= lastEnd`) to split code cleanly into highlighted `<mark>` fragments. |
| 15 | Code Highlighter | Code contains Arabic comment followed by English characters | Arabic tokens receive `data-arabic="true"`, `token-arabic` class, and `unicode-bidi: isolate !important;`, preventing reversal of adjacent English syntax. |
| 16 | Fullscreen Studio | User presses `Escape` while hardware fullscreen is active | Exits hardware fullscreen first (`document.exitFullscreen()`), then on subsequent Escape exits the React Portal studio. |
| 17 | Fullscreen Studio | User toggles line wrap (`W` key) with very long single-line code | Container switches between `whitespace-pre overflow-x-auto` and `whitespace-pre-wrap break-words`. |
| 18 | Sandboxed Iframe | User code triggers infinite loop or syntax error in preview | Iframe is isolated with `sandbox="allow-scripts"`, preventing execution loop from freezing the host React application. |
| 19 | Infographic Export | Modern Tailwind v4 CSS contains `oklab(...)` or `oklch(...)` color functions | `sanitizeDomColors` scans all computed styles and pre-converts `oklab`/`oklch` to RGBA via offscreen 1x1 raster canvas before passing to `html2canvas`. |
| 20 | Complete PDF Export | Lessons contain multiple page boundaries with images | Styles apply `.print-page-break { break-before: page; }` and `.print-avoid-break { break-inside: avoid; }`, preventing code blocks and infographic cards from splitting awkwardly across pages. |
| 21 | Responsive Layout | Viewport width is 320px (Mobile Small) | Sidebar collapses into slide-over drawer; Navbar wraps items; code blocks enable horizontal scrolling with LTR preserved. |
| 22 | FAB Scroll Button | User reaches 98%–100% of lesson reading progress | Confetti burst triggers once per lesson; pill banner displays congratulatory message; resets when switching to another lesson. |

---

## 3. Deep Architectural Breakdown of the 6 Core Systems

### 3.1 System 1: Multi-Key Gemini API Pool
- **Architecture**: Client-side resilient key management with proactive parallel health probes and transparent failover.
- **Default Provided Key**: `AI_PLACEHOLDER_KEY`.
- **LocalStorage Schema**:
  - `nodejs_gemini_api_keys_pool`: JSON-encoded array of strings `["key1", "key2", ...]`.
  - `nodejs_gemini_user_api_key`: Active primary key string.
- **Validation Probe**:
  - Endpoint: `GET https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(key)}`
  - Timeout: 8,000ms using `AbortController`.
  - Metrics: Latency measured via `performance.now()`.
  - Responses:
    - 200 OK: `{ status: "active", message: "نشط ويعمل بكفاءة ✓" }`
    - 429: `{ status: "quota_exhausted", message: "تم استنفاد الحصة المسموحة (429 Quota Exceeded)" }`
    - 400: `{ status: "invalid", message: "مفتاح غير صالح (تحقق من صحة المفتاح)" }`
    - 403: `{ status: "forbidden", message: "غير متاح أو مقيد الصلاحيات جغرافياً (403)" }`
- **Failover Rotation Loop**:
  - For each `key` in `keysPool`:
    - For each `model` in `["gemini-3.8-flash", "gemini-3-flash-preview", "gemini-flash-latest"]`:
      - Dispatch POST request with 14,000ms timeout.
      - If HTTP 200: Return generated text immediately.
      - If HTTP 429: Break inner model loop, advance to next key in pool immediately.
      - If HTTP 404: Continue to next candidate model.
  - Final fallback: If all pool keys fail, generate deterministic local tutor guidance (`generateLocalTutorReply`).

### 3.2 System 2: Code Font Studio
- **Architecture**: Dynamic runtime CSS Custom Property injector backed by Google Fonts.
- **7 Programming Fonts**:
  1. `fira-code`: Fira Code (Mozilla / Nikita Prokopov) — Default with ligatures (`=>`, `!==`, `===`, `<=`, `>=`).
  2. `jetbrains-mono`: JetBrains Mono (JetBrains IDE Team) — Increased x-height, clear disambiguation (`0 vs O`, `1 vs l`).
  3. `cascadia-code`: Cascadia Code (Microsoft Windows Terminal) — Smooth curves, modern programming aesthetics.
  4. `source-code-pro`: Source Code Pro (Adobe Type Systems) — Geometric balance between mathematical operators and brackets.
  5. `inconsolata`: Inconsolata (Raph Levien) — Crisp rendering for High-DPI displays.
  6. `space-mono`: Space Mono (Colophon Foundry) — Cyberpunk retro monospace design.
  7. `ubuntu-mono`: Ubuntu Mono (Canonical) — Ergonomic curved terminal font.
- **Extended Variants**: Support for Hack, Victor Mono, and Consolas configured in the registry.
- **Runtime Injection**:
  - Sets `document.documentElement.style.setProperty('--font-code', font.family)`.
  - Sets `document.body.style.setProperty('--font-code', font.family)`.
  - Dispatches `CustomEvent('code-font-changed', { detail: fontObj })`.
  - Saves choice to `localStorage.setItem("nodejs_roadmap_code_font", font.id)`.
- **Ligature Support**:
  - Global CSS rule: `font-feature-settings: "liga" 1, "calt" 1;`
  - Applied to `code`, `pre`, `.syntax-code`, `[data-code="true"]`, and `[data-code-block="true"]`.

### 3.3 System 3: Pro Highlight Studio & Notes
- **Architecture**: DOM Range-based text selection listener paired with an IndexedDB object store and AI integration.
- **Scope Restriction**:
  - Allowed containers: `[data-lesson-script="true"]`, `.lesson-script-content`, `[data-code-block="true"]`, `pre`, `code`.
  - Prohibited containers: `header, nav, aside, button, a, input, textarea, select, [data-no-highlight], [role="dialog"], .swal2-container`.
- **6 Neon Semantic Colors**:
  1. `amber` (Shortcut: `1`): Core Concept (مفهوم جوهري) — `bg-amber-400/35 border-amber-400 text-amber-100`
  2. `emerald` (Shortcut: `2`): Best Practice (ممارسة صحيحة) — `bg-emerald-400/35 border-emerald-400 text-emerald-100`
  3. `cyan` (Shortcut: `3`): Term / API (مصطلح / API) — `bg-cyan-400/35 border-cyan-400 text-cyan-100`
  4. `purple` (Shortcut: `4`): Internal Runtime / Hooks (معماريات ودورة حياة) — `bg-purple-400/35 border-purple-400 text-purple-100`
  5. `rose` (Shortcut: `5`): Trap / Pitfall (تحذير ومحذور) — `bg-rose-500/35 border-rose-500 text-rose-100`
  6. `orange` (Shortcut: `6`): Exam / Interview (هام للاختبار والمقابلات) — `bg-orange-500/35 border-orange-500 text-orange-100`
- **IndexedDB Schema**:
  - Database: `NodejsRoadmapNotesDB` (v2)
  - Store: `highlights` (keyPath `id`, autoIncrement: true)
    - Index: `subtopicId`
    - Index: `type` (`"explanation"` | `"code"`)
    - Index: `color` (`"amber"` | `"emerald"` | `"cyan"` | `"purple"` | `"rose"` | `"orange"`)
    - Index: `createdAt`
  - Store: `codeNotes` (keyPath `id`, autoIncrement: true)
    - Index: `subtopicId`
    - Index: `createdAt`
- **Inline AI Explainer**:
  - Prompt: `اشرح هذا المقتطف (${snippetType === 'code' ? 'شفرة برمجية' : 'مفهوم نظري'}) المأخوذ من درس "${subtopicTitle}" في Node.js في جملتين فقط بشكل عملي ومبسط جداً للمبتدئ:\n"${selectedText}"`
  - Result injected directly into note field via one click (`handleAppendAiToNote`).
- **Text-to-Speech (TTS)**:
  - `window.speechSynthesis.speak(utterance)` with `utterance.rate = 0.95`.
  - Language selection: `hasAr ? 'ar-SA' : 'en-US'`.

### 3.4 System 4: Strict LTR Code Engine & Arabic Typography
- **Architecture**: Bi-directional boundary isolation system separating code syntax from explanatory Arabic strings.
- **Strict LTR Isolation**:
  - Enforced globally on code blocks, preformatted containers, and highlight `<mark>` elements:
    ```css
    code, pre, kbd, samp, .syntax-code, .code-font,
    [data-code="true"], [data-code-block="true"],
    .code-container pre, .code-container code,
    .code-view pre, .code-view code,
    .highlighted-code-view, .highlighted-code-view * {
      font-family: var(--font-code) !important;
      direction: ltr !important;
      text-align: left !important;
      letter-spacing: normal !important;
    }
    ```
  - Mark direction protection:
    ```css
    [data-code-block="true"] mark, .highlighted-code-view mark, pre mark, code mark {
      direction: ltr !important;
      text-align: left !important;
      unicode-bidi: normal !important;
    }
    ```
- **Arabic Typography & Token Isolation**:
  - Embedded Arabic comments and strings isolated with Cairo font:
    ```css
    .token-arabic,
    .highlighted-code-view .token-arabic,
    pre .token-arabic, code .token-arabic,
    [data-code-block="true"] [data-arabic="true"] {
      font-family: var(--font-arabic) !important;
      font-style: normal !important;
      letter-spacing: normal !important;
      word-spacing: normal !important;
      unicode-bidi: isolate !important;
    }
    ```
- **Letter Disintegration Safeguard**:
  - Neutralizes letter-spacing on Arabic UI components:
    ```css
    :not(code):not(pre):not(kbd):not(samp):not(.syntax-code):not([dir="ltr"]).font-mono {
      font-family: var(--font-arabic) !important;
      font-variant-numeric: tabular-nums;
      letter-spacing: normal !important;
    }
    :lang(ar), [dir="rtl"] {
      letter-spacing: normal !important;
    }
    ```

### 3.5 System 5: Real Fullscreen Code Studio
- **Architecture**: Direct React Portal rendering at document root level, decoupled from app DOM hierarchy.
- **Mount Point**:
  - `createPortal(content, document.body)` with `position: fixed; inset: 0; zIndex: 999999`.
- **Fullscreen API Integration**:
  - Hardware fullscreen via `document.documentElement.requestFullscreen()`.
  - Key bindings:
    - `F`: Toggle hardware fullscreen.
    - `W`: Toggle line wrapping (`isLineWrap`).
    - `N`: Toggle side notes drawer (`showNotesDrawer`).
    - `+` / `=`: Zoom in code font size.
    - `-`: Zoom out code font size.
    - `Escape`: Exit fullscreen / portal.
- **Scroll Lock Protocol**:
  - On open: saves `originalOverflow = document.body.style.overflow`, sets `document.body.style.overflow = 'hidden'`.
  - On unmount/close: restores `document.body.style.overflow = originalOverflow`.
- **Line Notes Drawer**:
  - Line-by-line association with category tags (💡 concept, ⚠️ gotcha, ❓ question, 🚀 idea).
  - Search filter and export all notes to formatted JSON.
- **IDE Status Bar**:
  - Displays: active code font name, font size in px, total line count, total notes, programming language, UTF-8 encoding, and line wrap status.

### 3.6 System 6: Secure Live Sandbox Preview
- **Architecture**: Isolated iframe runtime executing code in an unprivileged sandbox with dark theme CSS injection.
- **Security Attributes**:
  - `sandbox="allow-scripts allow-modals allow-same-origin"`
- **Dark Theme Injection (`IFRAME_DARK_STYLES`)**:
  - Injects `:root, html { color-scheme: dark !important; background-color: #0b0f19 !important; color: #f8fafc !important; }`.
  - Overrides browser scrollbars with custom 6px dark track (`#0b0f19`) and thumb (`#334155`), eliminating the default white Windows scrollbar.
- **Dynamic Height Management**:
  - `ResizeObserver` attached to `iframe.contentWindow.document.body`.
  - Dynamically calculates `Math.max(body.scrollHeight, documentElement.scrollHeight)` and updates container height between 180px and 650px.
- **Runtime Handling**:
  - Executes HTML/JS/CSS preview directly.
  - Intercepts `console.log`, `console.error`, and `console.warn` into in-memory array.
  - Provides simulated runtime fallback for Node.js modules (`require`, `http`, `fs`, `express`).

---

## 4. Additional Modules: Infographics & Complete PDF Generation

### 4.1 Infographic Studio & Cards
- **5 Switchable Visual Themes**:
  1. `cyber` (سايبر نيون): Primary `#06b6d4`, Secondary `#3b82f6`, Accent `#8b5cf6`, Background `#0b1120`.
  2. `emerald` (إميرالد برو): Primary `#10b981`, Secondary `#14b8a6`, Accent `#06b6d4`, Background `#061712`.
  3. `sunset` (شروق العنبر): Primary `#f59e0b`, Secondary `#f97316`, Accent `#ea580c`, Background `#190e06`.
  4. `cosmic` (كوزميك إنديجو): Primary `#6366f1`, Secondary `#a855f7`, Accent `#ec4899`, Background `#0f0c1d`.
  5. `ruby` (روبي القرمزي): Primary `#f43f5e`, Secondary `#e11d48`, Accent `#fbbf24`, Background `#1a080e`.
- **SVG Concept Diagrams (Deterministic Generator)**:
  - `memory_boxes`: RAM allocation and pointers (immutable vs mutable pointers).
  - `state_cycle`: State loop (Trigger Event -> Dispatch -> Snapshot -> DOM Update).
  - `component_tree`: Unidirectional data flow (Parent -> Props Channel -> Child).
  - `lifecycle_pipeline`: Side effects and async timeline (Mount -> Async IO -> Cleanup).
  - `universal_flow`: Universal 3-tier architecture (Declaration & Input -> Processing -> Output).
- **Infographic Card Anatomy**:
  - Technical header with section badge, Arabic and English titles, and theme selector.
  - Visual SVG concept diagram with interactive flow nodes.
  - Golden code block with line-by-line Arabic explanatory comments.
  - Golden rule (القاعدة الذهبية) and deadly pitfall (المحاذير القاتلة).
  - 3-step execution pipeline and everyday analogy spotlight.
- **High-Resolution 4K Export**:
  - Pre-raster DOM sanitization via `sanitizeDomColors`: converts all CSS color definitions using modern spaces (`oklab`, `oklch`, `lab`, `lch`) to RGBA via a 1x1 offscreen raster buffer canvas, resolving `html2canvas` parsing failures.
  - Scale: 2 for ultra-crisp output.
- **Universal Gallery Modal**:
  - Dual filtering by section (1–23) and theme.
  - Search query filtering across titles, concepts, and analogies.
  - Grid view and fullscreen carousel view with keyboard arrow navigation.

### 4.2 Complete PDF Book Generation
- **Scope**: Complete compilation of all 23 roadmap sections, topics, subtopics, and infographic cards.
- **Document Structure**:
  - Book cover page with roadmap title and badge.
  - Table of Contents with numbered lessons.
  - Per-subtopic layout: simplified definition, everyday analogy, infographic card, explained golden code block, common mistakes table, and best practices.
- **Print Optimization**:
  - Print stylesheet `@media print` with `.print-page-break { break-before: page; }` and `.print-avoid-break { break-inside: avoid; }`.
  - `.no-print` class on interactive headers and toolbars.
- **Export Engine**:
  - Uses `jsPDF` (`portrait`, unit `mm`, format `a4`) and `html2canvas` (`scale: 1.5`, background `#ffffff`).
  - Automatic page height slicing (`pageHeight = 297mm`, `imgWidth = 210mm`).
  - High-resolution fallback to `window.print()` if raster rendering encounters environment limits.

---

## 5. Cross-Cutting UI States & Persistence Requirements

### 5.1 Dynamic Scroll Progress Bar & FAB
- Top scroll progress bar inside Navbar tracking `window.scrollY / (scrollHeight - innerHeight) * 100`.
- Floating Action Button (FAB) appearing at `scrollY > 220px` with SVG progress ring (`strokeDashoffset` computation) and smooth scroll to top.
- Confetti celebration burst (`canvas-confetti`) when progress reaches 98%–100%.

### 5.2 Egyptian AI Shortcuts Encyclopedia
- Documented in `SHORTCUTS_GUIDE_EG.md` across 4 categories:
  1. AI Core & Strategy (`/plan`, `/goal`, `/boost`, `/teamwork`, `/grill-me`, `/review`)
  2. Automation & Web (`/browser`, `/test`, `/audit`)
  3. Frontend & UI Craft (`/theme`, `/font`, `/highlight`, `/infographic`)
  4. Clean Code & Ponytail (`/ponytail`, `/ponytail-audit`, `/ponytail-debt`)
  5. Platform Hotkeys (`Ctrl + /`, `F`, `W`, `N`, `1`–`6`, `Esc`)
- In-app modal `ShortcutsGuideModal.jsx` with category filter tabs, live search, and one-click prompt copy.

### 5.3 Responsive Architecture (320px to 1920px)
- **320px (Mobile Small)**: Multi-row compact Navbar, floating index button, zero horizontal scroll.
- **375px–425px (Mobile Standard)**: Smooth touch targets (>40px padding), responsive modals with `maxHeight: '90vh'`.
- **768px (Tablet)**: Balanced sidebar slide-over drawer, accessible toolbar.
- **1024px–1440px (Desktop)**: Full dual-pane IDE layout with collapsible sidebar.
- **1920px (Ultra-Wide)**: Centered container restricted to `max-w-[1750px]`.

### 5.4 Storage & Persistence Matrix

| Storage Engine | Key / Store Name | Data Structure | Purpose |
|----------------|------------------|----------------|---------|
| LocalStorage | `nodejs_gemini_api_keys_pool` | `string[]` (JSON) | Array of Gemini API keys |
| LocalStorage | `nodejs_gemini_user_api_key` | `string` | Active Gemini API key |
| LocalStorage | `nodejs_roadmap_code_font` | `string` | Selected programming font ID (e.g. `'jetbrains-mono'`) |
| LocalStorage | `nodejs_roadmap_completed` | `string[]` (JSON) | Array of completed subtopic IDs |
| LocalStorage | `nodejs_roadmap_current_section` | `string` | Last visited section ID (1–23) |
| LocalStorage | `nodejs_roadmap_sidebar_width` | `string` | Sidebar width preference (`'standard'` / `'expanded'` / `'ultra'`) |
| LocalStorage | `nodejs_roadmap_sidebar_font_size`| `string` | Sidebar text size (`'normal'` / `'large'` / `'xl'`) |
| IndexedDB | `NodejsRoadmapNotesDB` / `codeNotes` | Object Store | Line-by-line notes with subtopicId, lineNumber, tag, content |
| IndexedDB | `NodejsRoadmapNotesDB` / `highlights` | Object Store | Text highlights with subtopicId, text, type, color, note, tag |

---

## 6. Logic Chain

1. **Source of Truth Corroboration**:
   - `MASTER_FEATURES_PROMPT.md` defines the exact functional specifications and component interfaces.
   - `ORIGINAL_REQUEST.md` directs the development of the Node.js educational platform (`e:\KD\lang\nodejs`) using these exact master features.
   - The reference implementation in `e:\KD\lang\react` confirms working production patterns, exact variable names, CSS classes, and algorithms.
2. **Current Baseline vs. Required State**:
   - Inspection of `e:\KD\lang\nodejs` reveals that basic components exist (`CodeBlock.jsx`, `LiveCodePreview.jsx`, `InfographicCard.jsx`, `gemini.js`), but they are minimal initial implementations lacking the full feature depth (no 100vw portal, no 5 themes, no SVG architecture schemas, no font studio, no highlight studio, and no IndexedDB storage).
3. **Execution Safety**:
   - Running `cmd /c "cd nodejs && npm run build"` verified that the current build passes cleanly in 1.37s.
   - Integration of these features into `nodejs` must preserve this build integrity while porting all missing components (`codeFonts.js`, `CodeFontModal.jsx`, `notesDb.js`, `TextHighlightPopover.jsx`, `SavedHighlightsModal.jsx`, `ScrollToTopButton.jsx`, `ShortcutsGuideModal.jsx`, and enhanced `InfographicCard.jsx` / `CodeBlock.jsx`).

---

## 7. Caveats

1. **Node.js Sandbox Simulation vs Real Browser Preview**:
   - While React code in `e:\KD\lang\react` renders HTML/DOM elements natively inside the sandboxed iframe, Node.js server code (`http.createServer`, `fs.readFile`, `express`) cannot run native Node C++ bindings inside a browser iframe. The sandbox preview for Node.js must use terminal console simulation (mocking `console.log`, `req`, `res`, and Node runtimes) while embedding HTML/CSS/JS sandbox execution for frontend/fullstack lessons.
2. **Font Loading Dependency**:
   - All 7 programming fonts are sourced from Google Fonts. If the student is working completely offline, fallback monospace font stacks must be defined (`monospace`).
3. **html2canvas Color Parsing in Tailwind v4**:
   - Tailwind CSS v4 defaults to `oklab` color space. The DOM color sanitization utility (`sanitizeDomColors`) in `exportImage.js` is critical to prevent `html2canvas` crashes during PNG and PDF exports.

---

## 8. Conclusion

The specification mining is complete and fully documented. All 6 core systems, infographic architecture diagrams, 5 themes, PDF book generation, Egyptian AI shortcuts, and responsive layout constraints have been extracted with concrete schemas, algorithmic flows, and edge cases. The Node.js platform project in `e:\KD\lang\nodejs` is ready for implementation planning and surgical feature integration.

---

## 9. Verification Method

To verify the findings and specifications independently:
1. **Inspect Authoritative Specification**:
   - View `e:\KD\lang\MASTER_FEATURES_PROMPT.md` lines 27–224.
2. **Inspect Reference Codebase**:
   - Gemini Key Pool: `e:\KD\lang\react\src\api\gemini.js` lines 74–218.
   - Code Font Studio: `e:\KD\lang\react\src\utils\codeFonts.js` and `src\components\common\CodeFontModal.jsx`.
   - Pro Highlight Studio: `e:\KD\lang\react\src\utils\notesDb.js` and `src\components\common\TextHighlightPopover.jsx`.
   - Fullscreen IDE Studio: `e:\KD\lang\react\src\components\lesson\CodeBlock.jsx`.
   - Sandboxed Preview: `e:\KD\lang\react\src\components\lesson\LiveCodePreview.jsx`.
   - Infographic Registry: `e:\KD\lang\react\src\utils\infographicRegistry.js` and `src\components\infographic\InfographicCard.jsx`.
3. **Verify Build Baseline**:
   - Run: `cmd /c "cd nodejs && npm run build"`
   - Expected output: `✓ built in ~1.4s` with 0 syntax or module errors.
