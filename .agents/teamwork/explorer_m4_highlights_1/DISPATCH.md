# Dispatch: Explorer 2 (Milestone 4 — Pro Highlight Studio)

## Role & Mission
You are Explorer 2 (`teamwork_explorer`).
Investigate the highlight studio implementation in `e:\KD\lang\react\src\components\common\TextHighlightPopover.jsx` and `SavedHighlightsModal.jsx` vs `e:\KD\lang\nodejs`.

## Investigation Targets
1. TextHighlightPopover Architecture:
   - Scoping strictly to `[data-lesson-script="true"]`, `pre`, and `code` containers.
   - 6 Neon Color Palette with hotkeys [1] to [6]:
     - Cyber Emerald (#10b981)
     - Neon Cyan (#06b6d4)
     - Electric Purple (#a855f7)
     - Sunset Amber (#f59e0b)
     - Laser Ruby (#ef4444)
     - Plasma Pink (#ec4899)
   - Web Speech API integration for Arabic text-to-speech reading (`window.speechSynthesis`, voices, Arabic pitch/rate).
   - Inline Gemini AI explainer (`explainCodeSnippet` from `src/api/gemini.js`).
   - Saving highlights into IndexedDB via `src/utils/notesDb.js` (`saveHighlight`).
2. SavedHighlightsModal Architecture:
   - Filtering by color and subtopic.
   - JSON export functionality.
   - Deletion of saved highlights via `deleteHighlight`.
3. Provide a detailed, surgical implementation plan and exact code specifications for `TextHighlightPopover.jsx` and `SavedHighlightsModal.jsx` in `nodejs`.

Write your comprehensive findings to `e:\KD\lang\.agents\teamwork\explorer_m4_highlights_1\handoff.md`.
Notify parent via `send_message`.

## 2026-10-30T20:36:11Z
You are Explorer 2 (`teamwork_explorer`) for Milestone 4 (Fullscreen IDE Studio & Pro Highlight Studio).

Your working directory is:
`e:\KD\lang\.agents\teamwork\explorer_m4_highlights_1`

You must read:
1. `e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md` (Mandatory - read first!)
2. `e:\KD\lang\PROJECT.md`
3. `e:\KD\lang\.agents\teamwork\explorer_m4_highlights_1\DISPATCH.md`
4. Reference implementations:
   - `e:\KD\lang\react\src\components\common\TextHighlightPopover.jsx`
   - `e:\KD\lang\react\src\components\common\SavedHighlightsModal.jsx`
5. Target files in `nodejs`:
   - `e:\KD\lang\nodejs\src\components\common\TextHighlightPopover.jsx` (check if exists)
   - `e:\KD\lang\nodejs\src\components\common\SavedHighlightsModal.jsx` (check if exists)

Your Mission:
Investigate and draft an exact, surgical implementation plan for the Pro Highlight Studio:
1. `TextHighlightPopover.jsx`:
   - Strict scoping to `[data-lesson-script="true"]`, `pre`, and `code`.
   - 6 Neon Color Palette with [1]–[6] hotkeys:
     - Cyber Emerald (#10b981)
     - Neon Cyan (#06b6d4)
     - Electric Purple (#a855f7)
     - Sunset Amber (#f59e0b)
     - Laser Ruby (#ef4444)
     - Plasma Pink (#ec4899)
   - Web Speech API TTS reader with Arabic voices and error handling.
   - Inline Gemini AI explainer (`explainCodeSnippet` from `src/api/gemini.js`).
   - Saving highlights into IndexedDB via `src/utils/notesDb.js` (`saveHighlight`).
2. `SavedHighlightsModal.jsx`:
   - Color filtering, subtopic grouping, and JSON export.
   - Deletion of highlights via `deleteHighlight`.
3. Provide a complete, surgical code diff or component specification ready for the Worker.

Write your report to `e:\KD\lang\.agents\teamwork\explorer_m4_highlights_1\handoff.md`.
Notify parent via `send_message`.
