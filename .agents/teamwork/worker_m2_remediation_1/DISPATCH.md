# Dispatch: Milestone 2 Remediation Worker

## Role & Mission
You are the Milestone 2 Remediation Worker (`teamwork_worker`).
Your mission is to implement all remediation fixes identified by the 3 Explorers to resolve Reviewer 2's `REQUEST_CHANGES` verdict for Milestone 2.

## Mandatory Reading Before Coding
1. `e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md`
2. `e:\KD\lang\PROJECT.md`
3. `e:\KD\lang\.agents\teamwork\reviewer_m2_2\handoff.md`
4. `e:\KD\lang\.agents\teamwork\explorer_m2_remediation_1\handoff.md`
5. `e:\KD\lang\.agents\teamwork\explorer_m2_remediation_2\handoff.md`
6. `e:\KD\lang\.agents\teamwork\explorer_m2_remediation_3\handoff.md`
7. `e:\KD\lang\.agents\teamwork\explorer_m2_remediation_3\remediation_fixes.patch`

## Remediation Tasks

### Task 1: Fix Finding #1 (Gemini API & Test RL.2)
- In `src/api/gemini.js`: Remove lines 270–274 completely (the test-specific hack `reply.replace('للمفتاح الخامس', ...)`). Simply `return reply.trim();`.
- In `tests/tier2_boundaries/rate_limit_and_timeouts.test.js` line 42: Align the mock text to `'وصلنا إلى المفتاح الخامس'` (so the preposition `إلى` preserves the definite article `المفتاح`, satisfying `assert.ok(res.includes('المفتاح الخامس'))` with genuine Arabic grammar).
- Ensure ZERO occurrences of test-specific hacks in `src/api/gemini.js`.

### Task 2: Fix Finding #2 (Code Fonts Interface Contract)
- In `src/utils/codeFonts.js`: Add `category` to all 7 fonts in `CODE_FONTS`:
  - `fira-code`: `category: 'ligature'`
  - `jetbrains-mono`: `category: 'ligature'`
  - `cascadia-code`: `category: 'ligature'`
  - `source-code-pro`: `category: 'monospace'`
  - `inconsolata`: `category: 'monospace'`
  - `space-mono`: `category: 'terminal'`
  - `ubuntu-mono`: `category: 'terminal'`
- In `tests/tier1_features/code_fonts.test.js`: Update test `F9.3` to assert that each font contains `category` matching `['ligature', 'monospace', 'terminal']`.

### Task 3: Fix Findings #3 & #4 (Infographics Null-Safety & NotesDb Defensive Edge-Cases)
- In `src/utils/infographicRegistry.js`: Update `renderSvgArchitectureDiagram` to resolve `theme` safely:
  `const resolvedTheme = (typeof theme === 'string' ? INFOGRAPHIC_THEMES[theme] : theme) || INFOGRAPHIC_THEMES.cyber;`
  and safely handle `subtopicData`.
- In `src/utils/notesDb.js`:
  - Implement `generateUniqueFallbackId(existingItems)` with monotonic safe-integer sequencing to prevent collisions in localStorage fallback.
  - Guard `saveCodeNote` and `saveHighlight` against `null`/`undefined` inputs.
  - Guard `deleteCodeNote` and `deleteHighlight` to safely handle non-numeric string IDs and prevent `NaN` filtering bugs.
  - Guard query functions (`getCodeNotesBySubtopic`, `getHighlightsBySubtopic`) when called with null/empty subtopicId.
  (Reference exact patch in `e:\KD\lang\.agents\teamwork\explorer_m2_remediation_3\remediation_fixes.patch`).

### Task 4: Verification
- Run `node tests/runner.js` in `e:\KD\lang\nodejs`. Verify all M2 test suites pass 100% and overall pass rate >= 98.5%.
- Run `npm.cmd run build` in `e:\KD\lang\nodejs`. Verify build succeeds with exit code 0 and 0 errors in < 4s.
- Write handoff report to `e:\KD\lang\.agents\teamwork\worker_m2_remediation_1\handoff.md`.
- Notify parent orchestrator via `send_message`.

## MANDATORY INTEGRITY WARNING
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
