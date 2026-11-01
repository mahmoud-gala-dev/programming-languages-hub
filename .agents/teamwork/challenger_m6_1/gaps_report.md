# Comprehensive White-Box Hardening & Gaps Report — Part 1
**Author**: Challenger 1 (`challenger_m6_1`)  
**Role**: Empirical Challenger (critic, specialist)  
**Date**: 2026-10-30  
**Target Milestone**: Milestone 6 (White-Box Adversarial Coverage Hardening)  
**Test Suite**: `tests/tier5_adversarial/whitebox_hardening_1.test.js` (37 invariants, 100% pass, 4 critical/major vulnerabilities and 6 resilience/accessibility gaps confirmed)

---

## Executive Summary

A comprehensive white-box static code analysis and empirical adversarial test harness was conducted across the Node.js educational platform's modals, navigation, core API, storage layer, and utility engines.

| Component / Subsystem | Files Inspected | Invariants Tested | Confirmed Gaps | Risk Level |
|---|---|---|---|---|
| **Storage Engine (IndexedDB & Fallback)** | `src/utils/notesDb.js` | 8 | 2 Critical | **HIGH** |
| **Core API & Pool Management** | `src/api/gemini.js` | 9 | 1 Major | **MEDIUM** |
| **DOM Color & Canvas Export** | `src/utils/exportImage.js` | 6 | 1 Medium | **MEDIUM** |
| **Modals & Navigation** | `BookViewModal.jsx`, `InfographicGalleryModal.jsx`, `Navbar.jsx` | 10 | 4 Moderate | **MEDIUM** |
| **Typography & Infographics** | `codeFonts.js`, `infographicRegistry.js` | 4 | 0 (Robust) | **LOW** |

---

## Detailed Gap Inventory & Empirical Proofs

### 1. [CRITICAL] Unhandled Promise Rejection in `saveCodeNote` and `saveHighlight` under IndexedDB `QuotaExceededError`
- **Target File**: `src/utils/notesDb.js` (lines 115–130 and 208–224)
- **Vulnerability Type**: Asynchronous Exception Escapes `try...catch` Block
- **Line Numbers**:
  ```javascript
  // src/utils/notesDb.js:115-130
  export async function saveCodeNote(note) {
    ...
    try {
      const db = await openDatabase();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(NOTES_STORE, "readwrite");
        const store = tx.objectStore(NOTES_STORE);
        const req = store.add(noteData);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    } catch {
      // Unreachable when req.onerror fires!
      const all = getLocalStorageArray(STORAGE_KEY_NOTES);
      const id = generateUniqueFallbackId(all);
      all.push({ id, ...noteData });
      setLocalStorageArray(STORAGE_KEY_NOTES, all);
      return id;
    }
  }
  ```
- **Observed Behavior**:
  Because the function executes `return new Promise(...)` without `await` inside the `try` block, returning the pending promise directly to the caller, the `try` block completes synchronously. When `req.onerror` fires asynchronously (e.g. `QuotaExceededError`, `ConstraintError`, or transaction abort), the rejection occurs on the returned Promise rather than within the `try` scope. The `catch` block is bypassed, the LocalStorage fallback never executes, and an unhandled Promise rejection is thrown to the UI.
- **Attack / Stress Scenario**:
  A student takes extensive notes until browser IndexedDB storage limit is reached or quota is constrained. Saving a new note causes an unhandled rejection, crashing UI workflows and losing note content.
- **Blast Radius**:
  High — silent data loss in note taking and text highlighting studios.
- **Empirical Verification**:
  Verified in `tests/tier5_adversarial/whitebox_hardening_1.test.js`:
  - Test `T5.1.11`: Confirmed unhandled rejection on `QuotaExceededError`.
  - Test `T5.1.12`: Confirmed unhandled rejection on transaction error in `saveHighlight`.
- **Recommended Mitigation**:
  Add `return await new Promise(...)` in `saveCodeNote`, `saveHighlight`, `getCodeNotesBySubtopic`, `getAllHighlights`, and `deleteHighlight` so errors inside `req.onerror` are intercepted by the `catch` block and gracefully routed to LocalStorage.

---

### 2. [MAJOR] Type Coercion Flaw in `saveGeminiKeysPool` storing `"null"` and `"undefined"` as API Keys
- **Target File**: `src/api/gemini.js` (lines 48–73)
- **Vulnerability Type**: Unsanitized Array Coercion
- **Line Numbers**:
  ```javascript
  // src/api/gemini.js:59
  const cleanKeys = Array.from(new Set(keyArray.map(k => String(k).trim()).filter(Boolean)));
  ```
- **Observed Behavior**:
  If `keyArray` contains `null` or `undefined` items (e.g. from corrupt JSON or uninitialized state), `String(null).trim()` evaluates to the string literal `"null"` and `String(undefined).trim()` evaluates to `"undefined"`. Because non-empty strings are truthy (`Boolean("null") === true`), the keys `"null"` and `"undefined"` are stored in `localStorage` as active Gemini API keys.
- **Attack / Stress Scenario**:
  Corrupted or partially uninitialized key pools result in the application making real HTTP requests with `?key=null` and `?key=undefined`, generating unnecessary 400 Bad Request responses and consuming failover latency.
- **Blast Radius**:
  Medium — key pool pollution, wasted network roundtrips.
- **Empirical Verification**:
  Verified in `tests/tier5_adversarial/whitebox_hardening_1.test.js`:
  - Test `T5.1.20`: Passing `['key1', null, undefined, 'key2']` confirmed that `getGeminiKeysPool()` contains `"null"` and `"undefined"`.
- **Recommended Mitigation**:
  Filter out non-string falsy elements before string conversion:
  ```javascript
  const cleanKeys = Array.from(new Set(
    keyArray
      .filter(k => typeof k === 'string' && k.trim())
      .map(k => k.trim())
  ));
  ```

---

### 3. [MEDIUM] `sanitizeDomColors` Throws Uncaught `TypeError` on Non-DOM Elements
- **Target File**: `src/utils/exportImage.js` (lines 65–101)
- **Vulnerability Type**: Missing Duck-Typing / Interface Guard
- **Line Numbers**:
  ```javascript
  // src/utils/exportImage.js:65-68
  export function sanitizeDomColors(rootElement) {
    if (!rootElement) return;

    const elements = [rootElement, ...rootElement.querySelectorAll('*')];
  ```
- **Observed Behavior**:
  The function guards against null/undefined (`if (!rootElement) return;`), but immediately accesses `rootElement.querySelectorAll('*')`. If `rootElement` is a plain object (`{}`), a Window instance, or a custom element lacking `querySelectorAll`, it throws an uncaught `TypeError: rootElement.querySelectorAll is not a function`.
- **Attack / Stress Scenario**:
  Passing an unexpected object or detached node during infographic image export crashes the export pipeline.
- **Blast Radius**:
  Medium — unhandled exception in export helpers.
- **Empirical Verification**:
  Verified in `tests/tier5_adversarial/whitebox_hardening_1.test.js`:
  - Test `T5.1.35`: Confirmed that `sanitizeDomColors({})` throws `TypeError: rootElement.querySelectorAll is not a function`.
- **Recommended Mitigation**:
  Add duck-typing check:
  ```javascript
  if (!rootElement || typeof rootElement.querySelectorAll !== 'function') return;
  ```

---

### 4. [MODERATE] Missing `Escape` Key Listener & Backdrop Dismissal in `BookViewModal.jsx`
- **Target File**: `src/components/book/BookViewModal.jsx` (lines 43–72, 119–124)
- **Vulnerability Type**: Keyboard Navigation / Accessibility Inconsistency
- **Observed Behavior**:
  Unlike `InfographicGalleryModal.jsx` (which registers a `keydown` listener for `Escape`), `BookViewModal.jsx` does not register any `Escape` key handler. Users cannot close the 94vh modal with the keyboard. In addition, clicking the backdrop overlay does not trigger `onClose`.
- **Blast Radius**:
  Low-to-Medium — user experience and accessibility barrier for desktop and keyboard learners.
- **Empirical Verification**:
  Verified in `tests/tier5_adversarial/whitebox_hardening_1.test.js`:
  - Test `T5.1.1`: AST verification confirms lack of `Escape` / `keydown` listener.
  - Test `T5.1.3`: Confirms lack of `onClick` on outer backdrop container.
- **Recommended Mitigation**:
  Add `useEffect` listening for `keydown` with `Escape` in `BookViewModal.jsx`, and attach `onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}` to the outer backdrop overlay.

---

### 5. [MODERATE] Input Hijacking by Arrow Keys in `InfographicGalleryModal.jsx`
- **Target File**: `src/components/gallery/InfographicGalleryModal.jsx` (lines 124–141)
- **Vulnerability Type**: Global Keyboard Listener Conflict
- **Line Numbers**:
  ```javascript
  // src/components/gallery/InfographicGalleryModal.jsx:127-137
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (viewMode === 'single') {
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        handlePrev();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        handleNext();
      }
    }
  };
  ```
- **Observed Behavior**:
  When `viewMode === 'single'` and the student types in the search query input box, pressing `ArrowLeft` or `ArrowRight` to navigate the cursor within the search string triggers `handleNext()` or `handlePrev()`, changing the infographic slide unexpectedly and interrupting typing.
- **Blast Radius**:
  Low-to-Medium — UI frustration during search in single view mode.
- **Empirical Verification**:
  Verified in `tests/tier5_adversarial/whitebox_hardening_1.test.js`:
  - Test `T5.1.6`: Proves lack of `e.target.tagName` check in `handleKeyDown`.
- **Recommended Mitigation**:
  Add tag name guard:
  ```javascript
  if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) return;
  ```

---

### 6. [LOW] Negative Index Wrap-Around in `InfographicGalleryModal.jsx` on Zero Search Results
- **Target File**: `src/components/gallery/InfographicGalleryModal.jsx` (lines 155–161)
- **Vulnerability Type**: Array Boundary Wrap Under Empty Collection
- **Line Numbers**:
  ```javascript
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(filteredList.length - 1);
    }
  };
  ```
- **Observed Behavior**:
  When `filteredList.length === 0` (e.g. search query matches nothing), `filteredList.length - 1` computes to `-1`. If `handlePrev()` is called, `currentIndex` becomes `-1`.
- **Blast Radius**:
  Low — visual glitch (`0 / 0` or negative index).
- **Empirical Verification**:
  Verified in `tests/tier5_adversarial/whitebox_hardening_1.test.js`:
  - Test `T5.1.7`: Verified negative index wrap-around.
- **Recommended Mitigation**:
  Wrap around only if `filteredList.length > 0`:
  ```javascript
  setCurrentIndex(filteredList.length > 0 ? filteredList.length - 1 : 0);
  ```

---

### 7. [LOW] Potential `TypeError` in `Navbar.jsx` when `showSwal` Resolves Undefined
- **Target File**: `src/components/layout/Navbar.jsx` (lines 43–62)
- **Vulnerability Type**: Missing Optional Chaining on Promise Result
- **Line Numbers**:
  ```javascript
  const result = await showSwal({ ... });
  if (result.isConfirmed) { ... }
  ```
- **Observed Behavior**:
  If `showSwal` is mocked or rejected with `undefined`, `result.isConfirmed` throws a `TypeError: Cannot read properties of undefined (reading 'isConfirmed')`.
- **Blast Radius**:
  Low — potential crash if feedback context resolves undefined.
- **Empirical Verification**:
  Verified in `tests/tier5_adversarial/whitebox_hardening_1.test.js`:
  - Test `T5.1.10`: Confirmed TypeError on direct property access.
- **Recommended Mitigation**:
  Use optional chaining: `if (result?.isConfirmed)`.

---

### 8. [CODE CLEANUP] Dead `searchFilter` State in `BookViewModal.jsx`
- **Target File**: `src/components/book/BookViewModal.jsx` (line 39)
- **Vulnerability Type**: Dead Code / Unreferenced React State
- **Line Numbers**:
  ```javascript
  const [searchFilter, setSearchFilter] = useState('');
  ```
- **Observed Behavior**:
  `searchFilter` is declared via `useState('')`, but is never referenced anywhere in the component render logic or JSX.
- **Blast Radius**:
  Low — minor memory and code clarity overhead.
- **Empirical Verification**:
  Verified in `tests/tier5_adversarial/whitebox_hardening_1.test.js`:
  - Test `T5.1.2`: AST check confirmed exactly 1 occurrence (the declaration itself).
- **Recommended Mitigation**:
  Either remove `searchFilter` or connect it to an input field in the header to filter book sections.

---

## Summary of Robust Subsystems (Verified Passing with 0 Gaps)

1. **Code Typography Studio (`src/utils/codeFonts.js`)**:
   - Safely falls back to `fira-code` on null, undefined, unknown fonts, XSS injection strings, and numbers.
   - Dual CSS variable injection (`--font-code`) functions correctly across both `documentElement` and `body`.
   - All 7 fonts maintain valid metadata and Cairo Arabic fallback typography.

2. **Multi-Key Gemini Failover (`src/api/gemini.js`)**:
   - `testGeminiKeysInParallel` handles boundary inputs (null, empty, whitespace) safely.
   - `generateGeminiReply` properly catches 429 quota exhaustion and returns educational Arabic local tutor guidance.
   - `generateAiQuizForLesson` safely strips markdown code fences (````json ... ````) and ignores malformed AI responses.

3. **Infographic Registry (`src/utils/infographicRegistry.js`)**:
   - `buildInfographicForSubtopic` generates complete schemas even with sparse subtopic data.
   - `searchInfographics` safely ignores special regex metacharacters (`.*`, `(`, `[`, `\`, `+`, `?`) without crashes.
   - `sanitizeCssString` reliably cleans modern color functions (`oklab`, `oklch`, `in oklab 90deg`).
