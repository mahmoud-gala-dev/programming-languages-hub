# Dispatch: Explorer 3 (Milestone 3 - Modals & App Wiring)

## Role & Mission
You are Explorer 3 (`teamwork_explorer`).
Investigate the requirements, existing codebase, and reference implementations for Milestone 3 (Features 14, 15, 16 & App Integration):
1. `src/components/common/CodeFontModal.jsx`:
   - Interactive live playground testing 7 programming fonts from `src/utils/codeFonts.js`.
   - Node.js snippet preview (HTTP server, async/await, ligatures like `=>`, `!==`).
   - Font category filtering ('ligature', 'monospace', 'terminal').
   - Font size slider and reset.
2. `src/components/common/ShortcutsGuideModal.jsx`:
   - Egyptian AI shortcuts guide (`Ctrl + /`, `Esc`, `F11`, etc.).
   - Dark glassmorphism modal with hotkeys categorized.
3. `src/components/ai/GeminiKeyPoolModal.jsx`:
   - Multi-key pool manager: add/remove keys, test latency in parallel using `testGeminiKeysInParallel` from `src/api/gemini.js`.
   - Active key indicator badge, status badges (Active, Exhausted, Invalid), link to Google AI Studio.
4. `src/App.jsx`:
   - Wiring all modals (CodeFont, ShortcutsGuide, GeminiKeyPool, and placeholders for InfographicGallery/SavedHighlights/BookView).
   - Global keyboard listener for `Ctrl + /` to open ShortcutsGuide.
   - Layout mode state (`default`, `wide`, `focus`) adjusting main container classes.

## Tasks
1. Read `e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md` and `e:\KD\lang\PROJECT.md`.
2. Inspect existing `src/App.jsx` in `nodejs/` and see what modals exist or are missing.
3. Inspect reference implementations in `e:\KD\lang\react\src\components\common\CodeFontModal.jsx`, `react\src\components\common\ShortcutsGuideModal.jsx`, and `react\src\App.jsx`.
4. Inspect associated tests in `e:\KD\lang\nodejs\tests/`.
5. Provide a detailed, concrete implementation design with exact code diffs and props contracts.
6. Write your report to `e:\KD\lang\.agents\teamwork\explorer_m3_modals_1\handoff.md` and notify parent via `send_message`.


## 2026-10-30T20:03:24Z
From: 1e07d5fb-48b5-4e9b-a912-cd7f68f04dc9
You are Explorer 3 for Milestone 3 (Modals & App Wiring).
Working Directory: e:\KD\lang\.agents\teamwork\explorer_m3_modals_1
Parent ID: 1e07d5fb-48b5-4e9b-a912-cd7f68f04dc9

MANDATORY FIRST STEPS:
1. Read e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md
2. Read e:\KD\lang\PROJECT.md
3. Read e:\KD\lang\.agents\teamwork\explorer_m3_modals_1\DISPATCH.md

YOUR MISSION:
Investigate requirements, current code, and reference code in `react/` for:
- `src/components/common/CodeFontModal.jsx`: 7 fonts live preview playground with category filters and ligature preview.
- `src/components/common/ShortcutsGuideModal.jsx`: Egyptian shortcuts guide modal with keyboard layout.
- `src/components/ai/GeminiKeyPoolModal.jsx`: Multi-key pool manager with latency testing and status badges.
- `src/App.jsx`: Global modal orchestration, `Ctrl + /` listener, layout modes (`default`, `wide`, `focus`).
Write a complete, structured report with exact diffs and prop interfaces to `e:\KD\lang\.agents\teamwork\explorer_m3_modals_1\handoff.md`.
Notify parent via send_message when complete.
