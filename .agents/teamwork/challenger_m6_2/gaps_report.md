# White-Box Adversarial Hardening Gap Report (Part 2)

**Agent**: `challenger_m6_2`  
**Milestone**: M6 (Final Verification & Adversarial Coverage Hardening)  
**Date**: 2026-10-30  
**Scope**: Fullscreen IDE Studio (`CodeBlock.jsx`), Code Highlighter (`codeHighlighter.jsx`), Sandbox Preview (`LiveCodePreview.jsx`), Pro Highlight Studio (`TextHighlightPopover.jsx`, `SavedHighlightsModal.jsx`), and UI & Layout (`ScrollToTopButton.jsx`, `Sidebar.jsx`).  
**Test Suite**: `nodejs/tests/tier5_adversarial/whitebox_hardening_2.test.js` (36 tests, 100% PASS).

---

## Executive Summary

As part of the Tier 5 White-Box Adversarial Coverage Hardening phase, static code inspection and empirical stress testing were conducted across the interactive code studio, sandbox engine, highlight system, and responsive layout controllers.

The platform demonstrates high robustness across core invariants, strict LTR isolation, XSS protection, and modal scoping. However, white-box analysis revealed **two architectural vulnerabilities** and **three minor behavioral gaps** that should be addressed in future hardening passes.

---

## Detailed Vulnerability & Gap Analysis

### 1. [Vulnerability — MEDIUM-HIGH] Namespace Import Syntax Error in LiveCodePreview
- **File**: `src/components/lesson/LiveCodePreview.jsx` (line 332)
- **Code Observation**:
  ```javascript
  let executable = rawCode
    .replace(/import\s+([\w\s{},*]+)\s+from\s+['"]([^'"]+)['"];?/g, 'const $1 = require("$2");')
    .replace(/export\s+default\s+/g, '')
    .replace(/export\s+(const|let|var|function|class)\s+/g, '$1 ');
  ```
- **Root Cause**:
  The regular expression captures `* as fs` in `import * as fs from 'fs'` and naively prefixes it with `const`, producing:
  ```javascript
  const * as fs = require("fs");
  ```
  In JavaScript, `const * as ...` is an invalid variable declaration, resulting in an immediate `SyntaxError: Unexpected token '*'`.
- **Empirical Proof**:
  Verified in test `T5.2.20` (`tests/tier5_adversarial/whitebox_hardening_2.test.js`):
  ```javascript
  new Function('const * as fs = require("fs");'); // Throws SyntaxError
  ```
- **Blast Radius**:
  Any lesson or student experimentation utilizing standard namespace imports (`import * as fs from 'fs'` or `import * as path from 'path'`) will fail to run and display an unhandled syntax error.
- **Recommended Mitigation**:
  Add a dedicated transformation rule for namespace imports before general imports:
  ```javascript
  let executable = rawCode
    .replace(/import\s+\*\s+as\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/g, 'const $1 = require("$2");')
    .replace(/import\s+([\w\s{},]+)\s+from\s+['"]([^'"]+)['"];?/g, 'const $1 = require("$2");')
  ```

---

### 2. [Resilience Gap — MEDIUM] Absence of Execution Watchdog for Synchronous Loops
- **File**: `src/components/lesson/LiveCodePreview.jsx` (lines 337-341)
- **Code Observation**:
  ```javascript
  const runner = new Function('require', 'process', 'Buffer', 'console', 'performance', 
    '"use strict"; return (async () => {' + executable + '\n})();'
  );
  await runner(window.require, window.process, window.Buffer, window.console, window.performance);
  ```
- **Root Cause**:
  Code execution takes place directly on the iframe main execution thread. While `sandbox="allow-scripts"` prevents privilege escalation into parent DOM or cookies, synchronous infinite loops (`while(true){}`, `for(;;){}`) will starve the iframe thread. PostMessage notifications stop dispatching, and the iframe becomes completely unresponsive.
- **Empirical Proof**:
  Verified in test `T5.2.21`: No AST instrumentation, loop step counter, or Web Worker timeout exists.
- **Blast Radius**:
  The iframe locks up, requiring a full browser tab refresh if a student writes an unintended infinite loop.
- **Recommended Mitigation**:
  1. Offload execution to a Web Worker with a 3000ms watchdog timer (`setTimeout(() => worker.terminate(), 3000)`).
  2. Or inject a step counter check at the beginning of loop blocks via simple regex preprocessing:
     `while (cond) { if (++__stepCount > 100000) throw new Error("Execution timeout: Possible infinite loop detected"); ... }`.

---

### 3. [UX Persistence Gap — LOW] Ephemeral Line Wrap Toggle in Fullscreen IDE
- **File**: `src/components/lesson/CodeBlock.jsx` (line 61)
- **Code Observation**:
  ```javascript
  const [isLineWrap, setIsLineWrap] = useState(false);
  ```
- **Root Cause**:
  Unlike typography fonts (`codeFonts.js`) and sidebar preferences (`sidebarWidth`, `sidebarFontSize`), line wrap preference is stored only in local component state.
- **Empirical Proof**:
  Verified in test `T5.2.7`: `localStorage.getItem('nodejs_codeblock_line_wrap')` returns `null`.
- **Blast Radius**:
  Users who prefer long code lines wrapped across lessons must manually press `W` every time they open a new code block or switch lessons.
- **Recommended Mitigation**:
  Initialize state from `localStorage.getItem('nodejs_codeblock_line_wrap') === 'true'` and persist updates in `setIsLineWrap`.

---

### 4. [UX Navigation Invariant — LOW] Dual-Escape Step in Native Fullscreen
- **File**: `src/components/lesson/CodeBlock.jsx` (lines 118-123)
- **Code Observation**:
  ```javascript
  if (e.key === "Escape") {
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    } else {
      setIsFullscreen(false);
    }
  }
  ```
- **Root Cause**:
  When native browser fullscreen (`document.fullscreenElement`) is enabled via the `F` key, pressing `Escape` disengages browser fullscreen first, leaving the React Portal active. The user must press `Escape` a second time to close the IDE portal.
- **Empirical Proof**:
  Verified in test `T5.2.4`. Note that clicking the `X` button (`handleCloseButton`, line 688) exits both simultaneously.
- **Blast Radius**:
  Minor cognitive friction; some users may think the close action did not take effect on the first Escape.
- **Recommended Mitigation**:
  Close the portal and exit native fullscreen simultaneously on the first Escape press.

---

### 5. [Pedagogical Invariant — LOW] Mixed Arabic/English TTS Voice Selection Bias
- **File**: `src/components/common/TextHighlightPopover.jsx` (line 347)
- **Code Observation**:
  ```javascript
  const hasAr = /[\u0600-\u06FF]/.test(selectedText);
  utterance.lang = hasAr ? 'ar-SA' : 'en-US';
  ```
- **Root Cause**:
  If a highlight contains 95% English code with a single Arabic word or comment, the utterance language is forced to `ar-SA`. Some OS speech engines struggle with English code tokens when configured to Arabic.
- **Empirical Proof**:
  Verified in test `T5.2.24`.
- **Blast Radius**:
  Slightly accented or spelled-out pronunciation of English code tokens when highlighted alongside Arabic text.
- **Recommended Mitigation**:
  Calculate the ratio of Arabic characters to Latin characters: if Latin > 65%, default to `en-US` or use bilingual sentence splitting.

---

## Hardened Invariants Confirmed (36/36 Passing)

1. **Zoom Limit Clamping**:
   - `Math.min(prev + 2, 28)` caps at 28px max zoom.
   - `Math.max(prev - 2, 11)` caps at 11px min zoom.
   - Reset zoom reliably restores default 13px.
2. **Keyboard Shortcut Guarding**:
   - Keys `w`, `n`, `f`, `+`, `-` are strictly ignored when typing inside `INPUT` or `TEXTAREA` elements.
3. **IDE Status Bar Telemetry**:
   - Accurately tracks character selection length and displays dynamic badge `المحدد: X حرف`.
4. **Code Syntax Highlighting & Cairo Isolation**:
   - Arabic comments receive `token-arabic not-italic text-emerald-400 font-semibold` and `data-arabic="true"`.
   - Pure Latin comments receive `italic text-emerald-400 font-semibold`.
   - Node built-ins (`require`, `Buffer`, `process`, `fs`, etc.) properly distinguished from generic JS keywords.
   - Deterministic overlap resolution: Earlier highlight takes precedence, overlapping subsequent segment cleanly omitted without DOM corruption.
5. **Secure Sandbox Isolation & XSS Protection**:
   - Strict `sandbox="allow-scripts"` with exclusion of `allow-same-origin`, `allow-top-navigation`, and `allow-modals`.
   - `formatPayload` neutralizes all `<` and `>` characters into HTML entities `&lt;` and `&gt;`.
   - `Buffer.byteLength` correctly calculates UTF-8 multi-byte characters (8 bytes for 4 Arabic characters).
6. **Highlight Studio Scoping & Storage**:
   - Selection restricted exclusively to `[data-lesson-script="true"]`, `.lesson-script-content`, `[data-code-block="true"]`, `pre`, `code`.
   - Controls, nav, headers, and dialogs are completely blocked.
   - Selections `< 2` characters are discarded.
   - 6 Neon colors map 1:1 to shortcuts `[1]`-`[6]` and retain semantic meanings.
   - Legacy aliases (`ruby` -> `rose`, `pink` -> `orange`) mapped seamlessly.
7. **Speech Synthesis Lifecycle**:
   - `speechSynthesis.cancel()` invoked on popover unmount, modal close, and highlight deletion.
8. **UI & Layout Boundaries**:
   - `ScrollToTopButton` visibility threshold locked at 220px (219px hidden, 220px visible).
   - Reading progress clamped to `[0, 100]`.
   - SVG circle progress ring circumference exact at 141.37px.
   - Celebration confetti triggers at `>= 98%` and resets on subtopic navigation.
   - Mobile slide-over drawer automatically closes on selection when `window.innerWidth < 1024px`.
   - Sidebar width and font size persist to `localStorage`.
   - Cross-section recommendations surface when current section yields 0 search hits.

---

## Verification Command
```bash
cd e:\KD\lang\nodejs
node tests/tier5_adversarial/whitebox_hardening_2.test.js
npm.cmd run build
```
Result: 36/36 tests passed in 0.08s. Build succeeded with 0 errors.
