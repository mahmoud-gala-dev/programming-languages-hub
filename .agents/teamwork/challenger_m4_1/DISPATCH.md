# Dispatch: Challenger 1 (Milestone 4 Empirical Verification)

## Role & Mission
You are Challenger 1 (`teamwork_challenger`).
Adversarially challenge Milestone 4 components (`CodeBlock.jsx`, `codeHighlighter.jsx`, and `notesDb.js` line notes) with empirical tests.

## Challenge Targets
1. Fullscreen Studio Portal:
   - Verify mounting directly to `document.body` with `fixed inset-0 z-[999999]`.
   - Verify hardware Fullscreen API error handling when browser denies permission.
   - Test line wrap toggling (`W`) and zoom controls boundary limits (min 11px, max 24px).
2. IDE Status Bar:
   - Line count accuracy, syntax language, UTF-8 badge.
   - Character selection telemetry via `selectionchange`.
3. Line Notes Studio:
   - Adding notes to specific lines, filtering notes by line number, deleting notes, exporting all notes to JSON.
4. Strict LTR Typography:
   - Verify Arabic tokens receive `token-arabic` and `data-arabic="true"`.
   - Verify code container maintains `dir="ltr" text-left`.
5. Run `cmd /c "cd /d e:\KD\lang\nodejs && npm run build"` and `cmd /c "cd /d e:\KD\lang\nodejs && node tests/runner.js"`.
6. Write an empirical stress test harness to validate all invariants.

Write your empirical findings and verdict (`APPROVE` or `REQUEST_CHANGES`) to `e:\KD\lang\.agents\teamwork\challenger_m4_1\handoff.md`.
Notify parent via `send_message`.

## 2026-10-30T20:54:52Z
[Message] timestamp=2026-10-30T20:54:52Z sender=1e07d5fb-48b5-4e9b-a912-cd7f68f04dc9 priority=MESSAGE_PRIORITY_HIGH content=You are Challenger 1 (`teamwork_challenger`) for Milestone 4 (Fullscreen IDE Studio & Pro Highlight Studio).

Your working directory is:
`e:\KD\lang\.agents\teamwork\challenger_m4_1`

You must read:
1. `e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md` (Mandatory - read first!)
2. `e:\KD\lang\PROJECT.md`
3. `e:\KD\lang\.agents\teamwork\challenger_m4_1\DISPATCH.md`
4. `e:\KD\lang\.agents\teamwork\worker_m4_studio_1\handoff.md`

Your Mission:
Adversarially challenge Milestone 4 components with empirical tests:
1. Fullscreen Studio Portal:
   - Verify mounting directly to `document.body` with `fixed inset-0 z-[999999]`.
   - Verify hardware Fullscreen API error handling when browser denies permission.
   - Test line wrap toggling (`W`) and zoom controls boundary limits (min 11px, max 24px).
2. IDE Status Bar:
   - Line count accuracy, syntax language, UTF-8 badge.
   - Character selection telemetry via `selectionchange`.
3. Line Notes Studio:
   - Adding notes to specific lines, filtering notes by line number, deleting notes, exporting all notes to JSON.
4. Strict LTR Typography:
   - Verify Arabic tokens receive `token-arabic` and `data-arabic="true"`.
   - Verify code container maintains `dir="ltr" text-left`.
5. Run `cmd /c "cd /d e:\KD\lang\nodejs && npm run build"` and `cmd /c "cd /d e:\KD\lang\nodejs && node tests/runner.js"`.
6. Write an empirical stress test harness to validate all invariants.

Write your empirical report and issue a clear verdict (`APPROVE` or `REQUEST_CHANGES`) in `e:\KD\lang\.agents\teamwork\challenger_m4_1\handoff.md`.
Notify parent via `send_message`.
