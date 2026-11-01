# Dispatch — Challenger 4 (Milestone 6 Empirical Verification)

## 2026-10-31T00:23:00Z

### Mission
Empirically stress-test the hardened deliverables:
1. Stress test `LiveCodePreview.jsx`:
   - Verify that namespace import `import * as fs from 'fs'` transpiles to `const fs = require("fs")` and runs cleanly.
   - Verify that runaway / infinite loops trigger the 5000ms watchdog timeout and render the timeout badge rather than freezing the browser thread.
2. Stress test `CodeBlock.jsx`:
   - Verify fullscreen exit synchronization between native browser fullscreen and React portal modal.
3. Stress test `exportImage.js`:
   - Verify that non-element objects passed to `sanitizeDomColors` do not throw TypeError.
4. Verify production build: `npm.cmd run build` in `nodejs/` (< 4s, 0 errors).
5. Verify test suite: `node tests/runner.js` in `nodejs/` (347/347 tests pass).
6. Provide explicit verdict: `APPROVE` or `REQUEST_CHANGES` in `handoff.md`.

Read `ORIGINAL_REQUEST.md`, `PROJECT.md`, and `worker_m6_hardening_1\handoff.md`.
