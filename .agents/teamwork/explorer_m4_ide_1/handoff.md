# Handoff Report: Milestone 4 — Fullscreen IDE Studio (`CodeBlock.jsx`)

**Explorer**: Explorer 1 (`teamwork_explorer`)  
**Target Milestone**: Milestone 4 (Fullscreen IDE Studio & Pro Highlight Studio)  
**Target File**: `e:\KD\lang\nodejs\src\components\lesson\CodeBlock.jsx`  
**Reference File**: `e:\KD\lang\react\src\components\lesson\CodeBlock.jsx`  
**Working Directory**: `e:\KD\lang\.agents\teamwork\explorer_m4_ide_1`  
**Artifacts Generated**:
- `proposed_CodeBlock.jsx` (Complete replacement component)
- `proposed_codeHighlighter.jsx` (Companion syntax highlighting and Arabic token isolation engine)
- `CodeBlock.patch` (Unified diff patch for `CodeBlock.jsx`)

---

## 1. Observation

### Observation 1.1: Target vs Reference CodeBlock Architecture
- **Target File**: `e:\KD\lang\nodejs\src\components\lesson\CodeBlock.jsx` has only **75 lines** (lines 1–75).
  - It only renders a static code block with a copy button and a basic table for lines 56–71.
  - It completely lacks:
    - React Portal mounting to `document.body`.
    - Hardware Fullscreen API sync (F11 / `requestFullscreen`).
    - Line wrap toggle (`isLineWrap`, shortcut `W`).
    - Zoom controls (`ZoomIn`, `ZoomOut`, `RotateCcw`, shortcuts `+` / `-`).
    - IndexedDB Line Notes Studio integration (`notesDb.js`).
    - IDE status bar (lines count, character count, character selection length, UTF-8 badge, spaces, active language).
    - Code font switching integration (`CodeFontModal.jsx`, `code-font-changed` listener).
- **Reference File**: `e:\KD\lang\react\src\components\lesson\CodeBlock.jsx` has **817 lines** (lines 1–817).
  - Implements a 100vw × 100vh Portal (`createPortal(..., document.body)`).
  - Implements keyboard shortcuts: `Esc`, `F`, `N`, `W`, `+`, `-`.
  - Implements IndexedDB CRUD via `saveCodeNote`, `getCodeNotesBySubtopic`, `deleteCodeNote`, `exportAllNotesAsJson`.
  - Integrates `CodeFontModal` and dynamic font updating via `code-font-changed` custom event.

### Observation 1.2: IndexedDB Layer (`nodejs/src/utils/notesDb.js`)
- Inspection of `e:\KD\lang\nodejs\src\utils\notesDb.js` (lines 98–184) confirms:
  - `saveCodeNote(note)` (line 103) accepts `{ subtopicId, lineNumber, tag, content, codeTitle }` and returns `Promise<number>`.
  - Alias `addCodeNote = saveCodeNote` (line 133).
  - `getCodeNotesBySubtopic(subtopicId)` (line 138) returns all notes for a lesson/subtopic.
  - Alias `getNotesBySubtopic = getCodeNotesBySubtopic` (line 156).
  - `deleteCodeNote(id)` (line 161) deletes note by ID from IndexedDB with LocalStorage fallback.
  - `exportAllNotesAsJson()` / `exportAllNotesToJson()` (lines 302–322) exports all highlights and code notes to JSON.

### Observation 1.3: Typography & CSS Architecture (`nodejs/src/index.css`)
- In `e:\KD\lang\nodejs\src\index.css`:
  - Line 7, 12: `--font-code: 'Fira Code', 'Cairo', monospace;`
  - Lines 48–58:
    ```css
    code, pre, kbd, samp, 
    .syntax-code, .code-font, 
    [data-code="true"], [data-code-block="true"], 
    .code-container pre, .code-container code,
    .code-view pre, .code-view code,
    .token-view, .highlighted-code-view, .highlighted-code-view * {
      font-family: var(--font-code) !important;
      direction: ltr !important;
      text-align: left !important;
      letter-spacing: normal !important;
    }
    ```
  - Lines 61–76:
    ```css
    .token-arabic,
    .highlighted-code-view .token-arabic,
    .code-container .token-arabic,
    pre .token-arabic,
    code .token-arabic,
    [data-code-block="true"] [data-arabic="true"],
    .highlighted-code-view [data-arabic="true"],
    .code-container [data-arabic="true"],
    pre [data-arabic="true"],
    code [data-arabic="true"] {
      font-family: var(--font-arabic) !important;
      font-style: normal !important;
      letter-spacing: normal !important;
      word-spacing: normal !important;
      unicode-bidi: isolate !important;
    }
    ```
  - However, in `e:\KD\lang\nodejs\src\utils\codeHighlighter.jsx`:
    Lines 30–33 currently do NOT emit `[data-arabic="true"]` or `className="token-arabic"`, meaning Arabic comments inside code lack cursive font isolation unless `codeHighlighter.jsx` is updated.

### Observation 1.4: Code Font Switching Integration (`nodejs/src/utils/codeFonts.js`)
- `e:\KD\lang\nodejs\src\utils\codeFonts.js` (lines 118–161) exports `getActiveCodeFont()`, `applyCodeFont()`, and emits `window.dispatchEvent(new CustomEvent('code-font-changed', { detail: fontObj }))`.
- `e:\KD\lang\nodejs\src\components\common\CodeFontModal.jsx` is already implemented and ready for integration.

### Observation 1.5: Build Integrity Baseline
- Executing `cd e:\KD\lang\nodejs ; cmd /c "npm run build"` returned:
  `vite v8.3.5 building client environment for production... ✓ 2283 modules transformed. ✓ built in 3.25s` with Exit Code 0.

---

## 2. Logic Chain

1. **Portal Layering & Elevation**:
   - *From Observation 1.1*: The dispatch mandates `fixed inset-0 z-[999999]` mounting directly into `document.body` via React Portal.
   - *Deduction*: When `isFullscreen` is `true`, `createPortal(<div className="fixed inset-0 z-[999999] w-screen h-screen min-h-screen bg-[#080c14] text-slate-100 flex flex-col select-none overflow-hidden" dir="rtl">...</div>, document.body)` completely decouples the studio from parent container boundaries, overflow constraints, or fixed headers in the dashboard.
   - Locking `document.body.style.overflow = 'hidden'` while mounted prevents background scrolling.

2. **Hardware Fullscreen API Synchronization**:
   - *From Observation 1.1*: Pressing `F` or clicking the monitor button must sync with hardware Fullscreen API (`document.documentElement.requestFullscreen()`, `document.exitFullscreen()`).
   - *Deduction*: Listening to the native `fullscreenchange` event guarantees that `isNativeFullscreen` accurately reflects whether the browser is in hardware fullscreen or not, even if the user toggled it via standard F11.
   - When exiting studio via `Esc` or the close `X` button, checking `document.fullscreenElement` and triggering `document.exitFullscreen?.()` ensures the browser returns cleanly to normal windowed mode.

3. **IDE Status Bar & Character Selection Telemetry**:
   - *From Dispatch Target 2*: "Line count, active language badge, character selection length, UTF-8 encoding badge."
   - *Deduction*: While line count (`lines.length`) and language (`language.toUpperCase()`) are static/derived, character selection length requires listening to `document.addEventListener('selectionchange', ...)`.
   - When a user highlights code text within the studio, `window.getSelection().toString().length` updates `selectionLength`. If `selectionLength > 0`, the status bar displays `المحدد: X حرف` (`X chars selected`), providing genuine IDE feedback.

4. **Line Notes Studio (Dual Mode: Fullscreen Drawer & Standard Panel)**:
   - *From Observation 1.2 & Dispatch Target 3*: "Adding, viewing, and deleting notes per line in fullscreen and standard modes."
   - *Deduction*: 
     - In **Fullscreen Mode**, the right-hand drawer (`w-full md:w-80 lg:w-[410px]`) provides the complete experience: 4 quick tags (`💡 مفهوم جوهري`, `⚠️ خطأ وتنبيه`, `❓ سؤال للمراجعة`, `🚀 تطبيق عملي`), line filtering, note searching, and JSON export.
     - In **Standard Mode**, clicking the notes count pill or clicking any line number opens an expandable inline accordion below the code snippet. This enables note creation, viewing, and deletion without requiring the user to switch to fullscreen mode.
     - Every note connects to `subtopicId` and optionally `lineNumber`. Clicking a line note badge in code filters the note list to that specific line number.

5. **Strict LTR Isolation & Arabic Typography Protection**:
   - *From Observation 1.3 & Dispatch Target 4*: "Strict LTR layout (`dir="ltr" text-left`) with `--font-code` CSS variable. Preserving Cairo cursive font for Arabic tokens in comments/strings without breaking indentation."
   - *Deduction*:
     - The code container strictly specifies `dir="ltr"` and `text-left` with `data-code-block="true"` and `data-lesson-script="true"`.
     - CSS sets `font-family: var(--font-code) !important`.
     - In comments (`// تعليق عربي`) or strings (`"مرحبا"`), wrapping Arabic text tokens with `data-arabic="true"` and `token-arabic` activates `font-family: var(--font-arabic) !important; unicode-bidi: isolate !important;`. This keeps Arabic cursive glyphs beautifully rendered without inverting or disrupting the surrounding code indentation or operators.

---

## 3. Caveats

1. **SSR / Hydration Check**:
   - In standard browser execution, `document.body` is always available. However, a defensive `typeof document !== 'undefined'` guard is required before invoking `createPortal(..., document.body)`.
2. **Clipboard Permissions**:
   - `navigator.clipboard.writeText` may reject in non-secure (HTTP) or restricted iframe contexts. The implementation wraps clipboard access in `try/catch` with toast feedback (`showToast`).
3. **Hardware Fullscreen API Rejection**:
   - `requestFullscreen()` can be rejected if not initiated by a user gesture. All calls must have `.catch(() => {})` to avoid unhandled promise rejections.
4. **Scope of Sibling Components**:
   - Explorer 2 is handling `TextHighlightPopover.jsx` and `SavedHighlightsModal.jsx`.
   - Explorer 3 is handling `LiveCodePreview.jsx` and global wiring in `Navbar.jsx` / `App.jsx`.
   - This specification is focused on `CodeBlock.jsx` and companion `codeHighlighter.jsx`.

---

## 4. Conclusion & Surgical Implementation Plan

The upgrade transforms `nodejs/src/components/lesson/CodeBlock.jsx` from a 75-line static snippet into an 800+ line Fullscreen IDE Studio with dual-mode line notes, hardware fullscreen synchronization, telemetry status bar, and Arabic token typography protection.

### Component Architecture Overview:
1. **Header Toolbar (Standard)**:
   - Window dots (Red/Amber/Emerald).
   - Terminal icon + Title + Active line notes pill badge (toggleable).
   - Zoom controls (- / + / reset / px indicator).
   - Font modal switcher (`currentFont.name`).
   - Language badge (`{language}`).
   - Fullscreen Studio button (`Maximize2`).
   - Copy code button (`Copy` / `Check`).
2. **Code Display Area**:
   - `dir="ltr" text-left`, `data-code-block="true"`, `data-lesson-script="true"`.
   - Line numbers with interactive hover (`+{lineNum}`) for instant note creation.
   - Interactive line note indicator badge (`📝 {count} ملاحظة`).
   - Line wrap support (`isLineWrap ? 'whitespace-pre-wrap break-all' : 'whitespace-pre'`).
3. **Standard Mode Inline Notes Accordion**:
   - Expands below the code block.
   - Allows adding, viewing, filtering, and deleting notes per line in-place.
4. **100vw × 100vh Fullscreen Studio Portal**:
   - `createPortal(..., document.body)` with `fixed inset-0 z-[999999]`.
   - Topbar with breadcrumb telemetry (`lines.length سطراً • code.length حرفاً • {notes.length} ملاحظات`).
   - Action buttons: Zoom, Line wrap (`W`), Notes Drawer (`N`), Font switcher, Copy, Native Fullscreen (`F`), Close (`Esc`).
   - Left pane: Fullscreen code editor with line numbers and note links.
   - Right pane (RTL): Notes Studio drawer with search, line filter, 4 quick tags, textarea, notes list, and JSON export.
   - Bottom IDE Status Bar:
     - Branding: `<CheckCircle2 /> استوديو Node.js الاحترافي`.
     - Lines: `{lines.length}`.
     - Characters: `{code.length}`.
     - Selection Length: `{selectionLength > 0 && "المحدد: X حرف"}`.
     - Encoding: `UTF-8`.
     - Indent: `Spaces: 2`.
     - Language: `{language.toUpperCase()}`.
     - Wrap status: `{isLineWrap ? "التفاف: مفعل" : "التفاف: معطل"}`.
     - Hotkey guide: `Esc • F • N • W • + / -`.
5. **CodeFontModal Integration**:
   - Mounted at component root: `<CodeFontModal isOpen={isFontModalOpen} onClose={() => setIsFontModalOpen(false)} />`.

### Worker Artifacts Provided in Explorer Folder:
- `e:\KD\lang\.agents\teamwork\explorer_m4_ide_1\proposed_CodeBlock.jsx`
- `e:\KD\lang\.agents\teamwork\explorer_m4_ide_1\proposed_codeHighlighter.jsx`
- `e:\KD\lang\.agents\teamwork\explorer_m4_ide_1\CodeBlock.patch`

---

## 5. Verification Method

### Step 1: File Replacement / Patch Application
Copy `proposed_CodeBlock.jsx` to `e:\KD\lang\nodejs\src\components\lesson\CodeBlock.jsx`:
```powershell
Copy-Item "e:\KD\lang\.agents\teamwork\explorer_m4_ide_1\proposed_CodeBlock.jsx" "e:\KD\lang\nodejs\src\components\lesson\CodeBlock.jsx" -Force
```
Copy `proposed_codeHighlighter.jsx` to `e:\KD\lang\nodejs\src\utils\codeHighlighter.jsx`:
```powershell
Copy-Item "e:\KD\lang\.agents\teamwork\explorer_m4_ide_1\proposed_codeHighlighter.jsx" "e:\KD\lang\nodejs\src\utils\codeHighlighter.jsx" -Force
```

### Step 2: Build Verification
Run the production build:
```powershell
cd e:\KD\lang\nodejs
cmd /c "npm run build"
```
*Expected Result*: Build completes with 0 errors and output bundle generated.

### Step 3: Interactive Features Verification Checklist
1. **Fullscreen Portal**:
   - Click "تكبير الشاشة" (Maximize2) button on any code block.
   - Verify modal opens across 100vw × 100vh directly under `document.body` with `z-[999999]`.
   - Verify background body scrolling is locked.
   - Press `Esc` or click `X` to exit; verify scrolling is restored.
2. **Keyboard Shortcuts**:
   - Press `F` in fullscreen: toggles browser hardware fullscreen.
   - Press `W` in fullscreen: toggles line wrapping (`whitespace-pre-wrap` vs `whitespace-pre`).
   - Press `N` in fullscreen: toggles notes drawer.
   - Press `+` / `-`: changes code font size in 2px increments.
3. **IDE Status Bar Telemetry**:
   - Check bottom status bar displays line count and character count.
   - Select text with cursor; verify "المحدد: X حرف" appears with exact selection count.
   - Verify `UTF-8`, `Spaces: 2`, and active language badge are rendered.
4. **Line Notes Studio (IndexedDB)**:
   - Click on line number (e.g. line 3); verify target line input populates with 3.
   - Select a tag (`💡 مفهوم جوهري`), enter note text, and click "حفظ الملاحظة".
   - Verify note saves into IndexedDB, toast appears, and note badge appears on line 3.
   - Click "تصدير JSON"; verify `.json` file downloads.
   - Delete note; verify note disappears.
   - Test note addition in standard mode via the expandable accordion.
5. **Arabic Typography Protection**:
   - Inspect comments with Arabic text (e.g. `// استيراد مكتبة HTTP`); verify Cairo font is applied via `.token-arabic` without affecting code LTR direction or space alignment.

### Invalidation Conditions:
- If `npm run build` throws syntax or import errors.
- If React portal fails to mount to `document.body`.
- If line numbers in code are not clickable or misalign code lines.
- If Arabic comments cause code indentation to flip or reverse.
