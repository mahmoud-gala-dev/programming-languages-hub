# Dispatch: Explorer 1 (Milestone 4 — Fullscreen IDE Studio)

## 2026-10-30T20:36:00Z
You are Explorer 1 (`teamwork_explorer`) for Milestone 4 (Fullscreen IDE Studio & Pro Highlight Studio).

Your working directory is:
`e:\KD\lang\.agents\teamwork\explorer_m4_ide_1`

You must read:
1. `e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md` (Mandatory - read first!)
2. `e:\KD\lang\PROJECT.md`
3. `e:\KD\lang\.agents\teamwork\explorer_m4_ide_1\DISPATCH.md`
4. Reference implementation: `e:\KD\lang\react\src\components\lesson\CodeBlock.jsx`
5. Target file: `e:\KD\lang\nodejs\src\components\lesson\CodeBlock.jsx`

Your Mission:
Investigate and draft an exact, surgical implementation plan for `CodeBlock.jsx`:
1. Fullscreen Studio Portal Architecture:
   - React Portal mounting directly into `document.body` with `fixed inset-0 z-[999999]`.
   - F11 and Hardware Fullscreen API sync (`document.fullscreenElement`, `requestFullscreen`, `exitFullscreen`).
   - Line wrap toggle with keyboard shortcut `W`.
   - Zoom controls (+ / - or scale factor).
2. IDE Status Bar:
   - Line count, active language badge, character selection length, UTF-8 encoding badge.
3. Line Notes Studio with IndexedDB:
   - Integration with `src/utils/notesDb.js` (`saveCodeNote`, `getCodeNotesBySubtopic`, `deleteCodeNote`).
   - Adding, viewing, and deleting notes per line in fullscreen and standard modes.
4. Strict LTR & Arabic Token Typography:
   - Strict LTR layout (`dir="ltr" text-left`) with `--font-code` CSS variable.
   - Preserving Cairo cursive font for Arabic tokens in comments/strings without breaking indentation.
5. Provide a complete, surgical code diff or component specification ready for the Worker.

Write your report to `e:\KD\lang\.agents\teamwork\explorer_m4_ide_1\handoff.md`.
Notify parent via `send_message`.

## 2026-10-30T20:44:49Z
**Context**: Milestone 4 Fullscreen IDE Studio Exploration
**Content**: Please write your final handoff report to `e:\KD\lang\.agents\teamwork\explorer_m4_ide_1\handoff.md` summarizing your findings, proposed files (`proposed_CodeBlock.jsx`, `proposed_codeHighlighter.jsx`, `CodeBlock.patch`), and verification instructions.
**Action**: Notify parent via send_message when `handoff.md` is complete.
