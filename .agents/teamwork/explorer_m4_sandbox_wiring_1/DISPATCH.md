# Dispatch: Explorer 3 (Milestone 4 — Dark Sandbox & App Wiring)

## Role & Mission
You are Explorer 3 (`teamwork_explorer`).
Investigate the secure dark sandbox and global application wiring for Milestone 4 in `e:\KD\lang\nodejs`.

## Investigation Targets
1. `src/components/lesson/LiveCodePreview.jsx`:
   - Inspect existing implementation vs `react/src/components/lesson/LiveCodePreview.jsx`.
   - Dark iframe styles (`IFRAME_DARK_STYLES`) ensuring code execution output matches dark cyberpunk theme.
   - Simulation of Node.js console logs (`console.log`, `console.error`, `console.warn`) with color-coded badges and timestamping.
   - Secure execution boundaries (`sandbox="allow-scripts"`).
2. Global Integration & Wiring:
   - Check how `TextHighlightPopover` connects across `App.jsx`, `LessonView.jsx`, or content containers.
   - Check how `SavedHighlightsModal` is triggered from `Navbar.jsx` (`onOpenHighlights`).
   - Check any prop passing between `LessonView.jsx`, `CodeBlock.jsx`, and `LiveCodePreview.jsx`.
3. Provide a clear, surgical plan and exact code diff for upgrading `LiveCodePreview.jsx`, `LessonView.jsx`, and `App.jsx`.

Write your comprehensive findings to `e:\KD\lang\.agents\teamwork\explorer_m4_sandbox_wiring_1\handoff.md`.
Notify parent via `send_message`.

## 2026-10-30T20:36:21Z
You are Explorer 3 (`teamwork_explorer`) for Milestone 4 (Fullscreen IDE Studio & Pro Highlight Studio).

Your working directory is:
`e:\KD\lang\.agents\teamwork\explorer_m4_sandbox_wiring_1`

You must read:
1. `e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md` (Mandatory - read first!)
2. `e:\KD\lang\PROJECT.md`
3. `e:\KD\lang\.agents\teamwork\explorer_m4_sandbox_wiring_1\DISPATCH.md`
4. Reference implementations:
   - `e:\KD\lang\react\src\components\lesson\LiveCodePreview.jsx`
   - `e:\KD\lang\react\src\components\lesson\LessonView.jsx`
   - `e:\KD\lang\react\src\App.jsx`
5. Target files in `nodejs`:
   - `e:\KD\lang\nodejs\src\components\lesson\LiveCodePreview.jsx`
   - `e:\KD\lang\nodejs\src\components\lesson\LessonView.jsx`
   - `e:\KD\lang\nodejs\src\App.jsx`
   - `e:\KD\lang\nodejs\src\components\layout\Navbar.jsx`

Your Mission:
Investigate and draft an exact, surgical implementation plan for the dark sandbox and application wiring:
1. `LiveCodePreview.jsx`:
   - Dark iframe styling (`IFRAME_DARK_STYLES`) ensuring dark cyberpunk glassmorphism.
   - Simulation of Node.js console outputs (`console.log`, `console.error`, `console.warn`) with color-coded badges, line numbers, and formatted payloads.
   - Execution sandbox security (`sandbox="allow-scripts"`).
2. Global wiring for Highlight Studio and Line Notes:
   - Mounting `TextHighlightPopover` in `App.jsx` or `LessonView.jsx` scoped to `[data-lesson-script="true"]`, `pre`, and `code`.
   - Wiring `SavedHighlightsModal` triggered from `Navbar.jsx` (`onOpenHighlights`).
   - Prop synchronization between `LessonView.jsx`, `CodeBlock.jsx`, and `LiveCodePreview.jsx` (`subtopicId`, `code`, `language`).
3. Provide a complete, surgical code diff or component specification ready for the Worker.

Write your report to `e:\KD\lang\.agents\teamwork\explorer_m4_sandbox_wiring_1\handoff.md`.
Notify parent via `send_message`.
