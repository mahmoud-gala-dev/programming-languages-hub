# Dispatch: Explorer 1 (Milestone 3 - Navbar, Reading Progress & Confetti FAB)

## Role & Mission
You are Explorer 1 (`teamwork_explorer`).
Investigate the requirements, existing codebase, and reference implementations for Milestone 3 (Features 11 & 13):
1. `src/components/layout/Navbar.jsx`:
   - Reading progress bar (0%–100%) mounted at the bottom of Navbar, calculating scroll percentage through the active subtopic content.
   - Action buttons for all modals: Code Fonts (🔤), Infographic Gallery (🖼️), Egyptian Shortcuts (✨), Saved Highlights (📌), Gemini Pool (🤖).
   - Layout mode switcher: `default`, `wide`, `focus` with state callback passed to `App.jsx`.
2. `src/components/common/ScrollToTopButton.jsx`:
   - Circular SVG progress FAB showing exact reading scroll percentage (`strokeDashoffset`).
   - Smooth scroll to top when clicked.
   - Triggers `canvas-confetti` when reaching 98%–100% of lesson reading.

## Tasks
1. Read `e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md` and `e:\KD\lang\PROJECT.md`.
2. Inspect existing `e:\KD\lang\nodejs\src\components\layout\Navbar.jsx` and `e:\KD\lang\nodejs\src\components\common\ScrollToTopButton.jsx`.
3. Inspect reference implementations in `e:\KD\lang\react\src\components\layout\Navbar.jsx` and `e:\KD\lang\react\src\components\common\ScrollToTopButton.jsx`.
4. Inspect associated tests in `e:\KD\lang\nodejs\tests\tier1_features\navigation_and_progress.test.js`.
5. Provide a detailed, concrete implementation design with exact code diffs and props contracts.
6. Write your report to `e:\KD\lang\.agents\teamwork\explorer_m3_nav_1\handoff.md` and notify parent via `send_message`.


## 2026-10-30T20:03:10Z
You are Explorer 1 for Milestone 3 (Navbar, Reading Progress & Confetti FAB).
Working Directory: e:\KD\lang\.agents\teamwork\explorer_m3_nav_1
Parent ID: 1e07d5fb-48b5-4e9b-a912-cd7f68f04dc9

MANDATORY FIRST STEPS:
1. Read e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md
2. Read e:\KD\lang\PROJECT.md
3. Read e:\KD\lang\.agents\teamwork\explorer_m3_nav_1\DISPATCH.md

YOUR MISSION:
Investigate requirements, current code, and reference code in `react/` for:
- `src/components/layout/Navbar.jsx`: 0%–100% reading progress bar, modal launch buttons, layout mode toggles.
- `src/components/common/ScrollToTopButton.jsx`: Circular SVG progress FAB with `canvas-confetti` trigger at 98%–100%.
Write a complete, structured report with exact diffs and prop interfaces to `e:\KD\lang\.agents\teamwork\explorer_m3_nav_1\handoff.md`.
Notify parent via send_message when complete.
