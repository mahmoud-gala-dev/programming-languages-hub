# Dispatch: Worker 1 (Milestone 3 - Responsive Dashboard & Navigation Experience)

## Role & Mission
You are the Milestone 3 Implementation Worker (`teamwork_worker`).
Your mission is to implement all Milestone 3 features:
1. `src/components/common/ScrollToTopButton.jsx`: Circular SVG progress FAB with `canvas-confetti` trigger at 98%–100%.
2. `src/components/layout/Navbar.jsx`: Reading progress bar (0%–100%), modal trigger buttons, layout mode switcher, sidebar toggle.
3. `src/components/layout/Sidebar.jsx`: Mobile slide-over drawer (`fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm`), backdrop blur (`bg-slate-950/80 backdrop-blur-sm`), auto-close on selection, search, accordion, font scale controls.
4. `src/components/common/CodeFontModal.jsx`: 7 programming fonts live preview playground with category filters and ligature preview.
5. `src/components/common/ShortcutsGuideModal.jsx`: Egyptian AI shortcuts guide (`Ctrl + /`, `Esc`, etc.) with 24 commands and search.
6. `src/components/ai/GeminiKeyPoolModal.jsx`: Upgraded multi-key pool manager with React Portal, batch addition, Google AI Studio link, and latency badges.
7. `src/App.jsx`: Global modal orchestration, `scrollProgress` tracking, `layoutMode` state ('default', 'wide', 'focus'), and `Ctrl + /` listener.

## Mandatory Reading Before Coding
1. `e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md`
2. `e:\KD\lang\PROJECT.md`
3. Explorer 1 Report: `e:\KD\lang\.agents\teamwork\explorer_m3_nav_1\handoff.md`
4. Explorer 2 Report: `e:\KD\lang\.agents\teamwork\explorer_m3_sidebar_1\handoff.md` and `e:\KD\lang\.agents\teamwork\explorer_m3_sidebar_1\proposed_Sidebar.jsx`
5. Explorer 3 Report: `e:\KD\lang\.agents\teamwork\explorer_m3_modals_1\handoff.md`

## MANDATORY INTEGRITY WARNING
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## EXCLUSIVE WRITE OWNERSHIP
You own and may edit or create ONLY the following files in `e:\KD\lang\nodejs`:
- `src/components/common/ScrollToTopButton.jsx`
- `src/components/layout/Navbar.jsx`
- `src/components/layout/Sidebar.jsx`
- `src/components/common/CodeFontModal.jsx`
- `src/components/common/ShortcutsGuideModal.jsx`
- `src/components/ai/GeminiKeyPoolModal.jsx`
- `src/App.jsx`

## Verification Requirements
- Execute `node tests/runner.js` in `e:\KD\lang\nodejs`. Verify that all M3 test suites pass 100% and overall test suite passes >= 98.5%.
- Execute `npm.cmd run build` in `e:\KD\lang\nodejs`. Verify clean build with exit code 0 and 0 errors in < 4s.
- Write your complete handoff report to `e:\KD\lang\.agents\teamwork\worker_m3_dashboard_1\handoff.md`.
- Notify parent orchestrator via `send_message` when complete.
