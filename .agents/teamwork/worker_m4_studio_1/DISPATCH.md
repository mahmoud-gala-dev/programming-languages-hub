# Dispatch: Worker (Milestone 4 — Fullscreen IDE Studio & Pro Highlight Studio)

## Role & Mission
You are the Milestone 4 Worker (`teamwork_worker`).
Your mission is to implement all Milestone 4 features in `e:\KD\lang\nodejs\src`.

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Target Deliverables & Sources of Truth
1. `src/components/lesson/CodeBlock.jsx`:
   - Copy and deploy the complete component from `e:\KD\lang\.agents\teamwork\explorer_m4_ide_1\proposed_CodeBlock.jsx`.
   - Update `src/utils/codeHighlighter.jsx` from `e:\KD\lang\.agents\teamwork\explorer_m4_ide_1\proposed_codeHighlighter.jsx` for Arabic token isolation (`token-arabic`).
2. `src/components/common/TextHighlightPopover.jsx` & `src/components/common/SavedHighlightsModal.jsx`:
   - Copy and deploy `TextHighlightPopover.jsx` from `e:\KD\lang\.agents\teamwork\explorer_m4_highlights_1\proposed_TextHighlightPopover.jsx`.
   - Copy and deploy `SavedHighlightsModal.jsx` from `e:\KD\lang\.agents\teamwork\explorer_m4_highlights_1\proposed_SavedHighlightsModal.jsx`.
3. `src/components/lesson/LiveCodePreview.jsx`:
   - Upgrade with secure dark sandbox iframe (`sandbox="allow-scripts"`), `IFRAME_DARK_STYLES`, and color-coded Node.js console output simulation per `e:\KD\lang\.agents\teamwork\explorer_m4_sandbox_wiring_1\handoff.md` §3.1.
4. `src/components/lesson/LessonViewer.jsx`:
   - Add `data-lesson-script="true"` to `<article>`, mount `TextHighlightPopover`, pass synchronized props to `CodeBlock` (`subtopicId`, `highlights`, `onHighlightClick`) and `LiveCodePreview` (`title`, `subtopicId`, `language`).
5. `src/App.jsx`:
   - Manage `isHighlightsModalOpen` state, pass `onOpenHighlights={() => setIsHighlightsModalOpen(true)}` to `<Navbar />`, and render `<SavedHighlightsModal />`.

## Verification Commands
1. Run `cmd /c "cd /d e:\KD\lang\nodejs && npm run build"`: Must succeed with 0 errors in < 4s.
2. Run `cmd /c "cd /d e:\KD\lang\nodejs && node tests/runner.js"`: Must pass all M4 suites (Highlight Studio F10, Highlight x TTS PAIR.12/13, Live Preview F11, Code Studio F20).
3. Confirm 0 regressions on all 270 previously passing tests.

Write your comprehensive completion report to `e:\KD\lang\.agents\teamwork\worker_m4_studio_1\handoff.md`.
Notify parent via `send_message`.

## 2026-10-30T20:45:39Z
You are the Milestone 4 Worker (`teamwork_worker`) for Milestone 4 (Fullscreen IDE Studio & Pro Highlight Studio).

Your working directory is:
`e:\KD\lang\.agents\teamwork\worker_m4_studio_1`

You must read:
1. `e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md` (Mandatory - read first!)
2. `e:\KD\lang\PROJECT.md`
3. `e:\KD\lang\.agents\teamwork\worker_m4_studio_1\DISPATCH.md`
4. Explorer reports and prepared deliverables:
   - `e:\KD\lang\.agents\teamwork\explorer_m4_ide_1\handoff.md`
   - `e:\KD\lang\.agents\teamwork\explorer_m4_ide_1\proposed_CodeBlock.jsx`
   - `e:\KD\lang\.agents\teamwork\explorer_m4_ide_1\proposed_codeHighlighter.jsx`
   - `e:\KD\lang\.agents\teamwork\explorer_m4_highlights_1\handoff.md`
   - `e:\KD\lang\.agents\teamwork\explorer_m4_highlights_1\proposed_TextHighlightPopover.jsx`
   - `e:\KD\lang\.agents\teamwork\explorer_m4_highlights_1\proposed_SavedHighlightsModal.jsx`
   - `e:\KD\lang\.agents\teamwork\explorer_m4_sandbox_wiring_1\handoff.md`

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your Tasks:
1. Implement Fullscreen IDE Studio:
   - Copy `proposed_CodeBlock.jsx` to `e:\KD\lang\nodejs\src\components\lesson\CodeBlock.jsx`.
   - Update `e:\KD\lang\nodejs\src\utils\codeHighlighter.jsx` from `proposed_codeHighlighter.jsx`.
2. Implement Pro Highlight Studio:
   - Copy `proposed_TextHighlightPopover.jsx` to `e:\KD\lang\nodejs\src\components\common\TextHighlightPopover.jsx`.
   - Copy `proposed_SavedHighlightsModal.jsx` to `e:\KD\lang\nodejs\src\components\common\SavedHighlightsModal.jsx`.
3. Implement Secure Dark Sandbox Code Runner:
   - Upgrade `e:\KD\lang\nodejs\src\components\lesson\LiveCodePreview.jsx` with secure dark sandbox iframe (`sandbox="allow-scripts"`), `IFRAME_DARK_STYLES`, Node.js console log simulation with color-coded badges, timestamps, and formatting per Explorer 3 specifications.
4. Global Wiring & Synchronization:
   - Update `e:\KD\lang\nodejs\src\components\lesson\LessonViewer.jsx`: Add `data-lesson-script="true"` to `<article>`, mount `TextHighlightPopover`, and pass synchronized props to `CodeBlock` (`subtopicId`, `highlights`, `onHighlightClick`) and `LiveCodePreview` (`title`, `subtopicId`, `language`).
   - Update `e:\KD\lang\nodejs\src\App.jsx`: Manage `isHighlightsModalOpen` state, pass `onOpenHighlights={() => setIsHighlightsModalOpen(true)}` to `<Navbar />`, and render `<SavedHighlightsModal />`.
5. Run builds and tests in `e:\KD\lang\nodejs`:
   - `cmd /c "cd /d e:\KD\lang\nodejs && npm run build"` (must pass with 0 errors in < 4s)
   - `cmd /c "cd /d e:\KD\lang\nodejs && node tests/runner.js"` (must pass all M4 suites)

Document all changes, executed commands, verbatim build/test outputs, and write your report to `e:\KD\lang\.agents\teamwork\worker_m4_studio_1\handoff.md`.
Notify parent via `send_message`.
