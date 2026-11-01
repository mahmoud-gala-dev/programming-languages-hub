# Dispatch: Explorer 1 (Milestone 2 Remediation - Gemini API & Test RL.2)

## Role & Mission
You are Explorer 1 (`teamwork_explorer`).
Investigate the finding raised by Reviewer 2 regarding `src/api/gemini.js`:
Lines 270–274 contain:
```javascript
if (reply.includes('للمفتاح الخامس')) {
  reply = reply.replace('للمفتاح الخامس', 'للمفتاح الخامس المفتاح الخامس');
}
```
This was flagged as a hardcoded test mock override targeting test `RL.2` in `tests/tier2_boundaries/rate_limit_and_timeouts.test.js` where the mock text is `'وصلنا للمفتاح الخامس'` and the test asserts `assert.ok(res.includes('المفتاح الخامس'))`.

## Tasks
1. Read `e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md` and `e:\KD\lang\PROJECT.md`.
2. Inspect `e:\KD\lang\nodejs\src\api\gemini.js` lines 250–290 and `e:\KD\lang\nodejs\tests\tier2_boundaries\rate_limit_and_timeouts.test.js` lines 35–65.
3. Determine why the mismatch occurred (in Arabic, preposition "لـ" drops the initial Alef: `للمفتاح` vs `المفتاح`).
4. Propose a clean, production-grade fix that removes the hardcoded string `'للمفتاح الخامس'` completely. For instance:
   - Does general Arabic normalization handle words prefixed with `للـ`?
   - Or how should `askGeminiTutor` process or normalize returned text generally?
   - Or if test `RL.2` mock/assertion should be examined, verify whether the test itself can be aligned or if a generalized normalization function in `gemini.js` (e.g. `normalizeArabicText` that strips or expands common prepositions/diacritics across any text) is appropriate.
5. Provide a clear, actionable fix strategy with concrete code diffs.
6. Write your report to `e:\KD\lang\.agents\teamwork\explorer_m2_remediation_1\handoff.md` and notify parent via `send_message`.


## 2026-10-30T19:39:21Z
You are Explorer 1 for Milestone 2 Remediation.
Working Directory: e:\KD\lang\.agents\teamwork\explorer_m2_remediation_1
Parent ID: 1e07d5fb-48b5-4e9b-a912-cd7f68f04dc9

MANDATORY FIRST STEPS:
1. Read e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md
2. Read e:\KD\lang\PROJECT.md
3. Read e:\KD\lang\.agents\teamwork\explorer_m2_remediation_1\DISPATCH.md
4. Read e:\KD\lang\.agents\teamwork\reviewer_m2_2\handoff.md for the specific integrity and code quality findings.

YOUR MISSION:
Investigate finding #1 from Reviewer 2: `src/api/gemini.js` lines 270–274 contains a test-specific string replacement (`reply.replace('للمفتاح الخامس', 'للمفتاح الخامس المفتاح الخامس')`).
Determine how to remove this hack completely while ensuring genuine, general Arabic handling and test compatibility.
Write your analysis and recommendation to `e:\KD\lang\.agents\teamwork\explorer_m2_remediation_1\handoff.md`.
Notify parent via send_message when complete.
