## 2026-10-30T19:08:09Z
You are the Implementation Worker for Milestone 2: Master Core Utilities & Engines.
Your working directory is: e:\KD\lang\.agents\teamwork\worker_m2_core_utils_1

MANDATORY FIRST STEP:
Read the Original Request at: e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md
Read the Project Scope at: e:\KD\lang\PROJECT.md
Read the Spec Miner Report at: e:\KD\lang\.agents\teamwork\spec_miner_survey_1\handoff.md
Inspect the Reference Implementation at: e:\KD\lang\react\src\api\gemini.js and e:\KD\lang\react\src\utils\

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

EXCLUSIVE FILE OWNERSHIP:
- e:\KD\lang\nodejs\src\api\**
- e:\KD\lang\nodejs\src\utils\**
Do NOT modify files in src/components, src/data, or tests.

OBJECTIVES:
Implement the complete core utilities and engine layers for Milestone 2 in `e:\KD\lang\nodejs`:
1. `src/api/gemini.js`:
   - Support the default provided key: `AI_PLACEHOLDER_KEY`.
   - Key storage in localStorage: `nodejs_gemini_api_keys_pool` (array of strings) and `nodejs_gemini_user_api_key`.
   - Parallel key health check: `GET https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(key)}` with 8s `AbortController` timeout and latency tracking via `performance.now()`.
   - Automatic 429 rotation to next key in pool.
   - Candidate model chain: `gemini-3.8-flash` -> `gemini-3-flash-preview` -> `gemini-flash-latest`.
   - Safe local tutor mock fallback `generateLocalTutorReply` if offline or all keys exhausted.
   - Export all required functions: `getStoredApiKeys`, `storeApiKeys`, `getActiveApiKey`, `setActiveApiKey`, `testApiKeyHealth`, `testAllKeysHealth`, `generateGeminiReply`, `explainCodeSnippet`.
2. `src/utils/codeFonts.js`:
   - Configure the 7 Google Fonts: `fira-code` (default with ligatures), `jetbrains-mono`, `cascadia-code`, `source-code-pro`, `inconsolata`, `space-mono`, `ubuntu-mono`.
   - Dynamic injection: set `--font-code` CSS variable on `document.documentElement` and `document.body`.
   - Broadcast `code-font-changed` CustomEvent.
   - Persistence in `localStorage.getItem("nodejs_roadmap_code_font")`.
   - Export: `CODE_FONTS`, `applyCodeFont`, `getActiveCodeFont`, `initCodeFont`.
3. `src/utils/notesDb.js`:
   - IndexedDB database `NodejsRoadmapNotesDB` (v2) with two stores: `codeNotes` and `highlights`.
   - Support full CRUD: `saveHighlight`, `getAllHighlights`, `deleteHighlight`, `saveCodeNote`, `getCodeNotesBySubtopic`, `deleteCodeNote`, `exportAllNotesToJson`.
   - Synchronous fallback to localStorage if IndexedDB is blocked or unavailable.
4. `src/utils/infographicRegistry.js`:
   - 5 neon themes: `cyber`, `emerald`, `sunset`, `cosmic`, `ruby`.
   - Deterministic Node.js backend SVG architecture diagrams (Event Loop phases, Streams pipeline, HTTP request/response flow, DB/Redis caching flow, JWT auth pipeline).
   - Export: `INFOGRAPHIC_THEMES`, `renderSvgArchitectureDiagram`.
5. `src/utils/exportImage.js` & `src/utils/exportPdf.js`:
   - Verify/adapt DOM color sanitization (`sanitizeDomColors`) converting `oklab`/`oklch` to RGBA for crisp exports.
6. Verification:
   - Run `node tests/runner.js` in `e:\KD\lang\nodejs`. Verify that all M2 tests in `tier1_features` (`code_fonts.test.js`, `highlight_studio.test.js`, `gemini_pool.test.js`), `tier2_boundaries`, `tier3_interactions`, and Tier 4 PASS.
   - Run `npm run build` and verify that build succeeds cleanly in < 4s with 0 errors.
