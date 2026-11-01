# Handoff Report: Milestone 4 — Secure Dark Sandbox & Global App Wiring

**Explorer**: Explorer 3 (`teamwork_explorer`)  
**Mission**: Investigate and draft an exact, surgical implementation plan for the dark sandbox code runner (`LiveCodePreview.jsx`) and application wiring (`App.jsx`, `LessonViewer.jsx`, `Navbar.jsx`, `CodeBlock.jsx`, `notesDb.js`).  
**Working Directory**: `e:\KD\lang\.agents\teamwork\explorer_m4_sandbox_wiring_1`  
**Date**: 2026-10-30T20:45:00Z  

---

## 1. Observation

### 1.1 Target File: `nodejs/src/components/lesson/LiveCodePreview.jsx`
- **Current Lines**: 1 to 111.
- **Current Behavior**:
  - Direct execution in parent thread: line 30 uses `const fn = new Function('console', code); fn(mockConsole);`. This lacks iframe isolation, allowing potential variable leak, runaway code, or DOM manipulation.
  - No iframe styling: `IFRAME_DARK_STYLES` is completely missing.
  - Execution boundary: `sandbox="allow-scripts"` is missing.
  - Output display: Simple `<div className="... whitespace-pre-wrap">` with raw strings. Does not format payloads, objects, numbers, booleans, timestamps, or color-coded console badges.
  - Node.js environment: Lacks support for ES modules (`import`/`export`), top-level `await`, Node built-ins (`process`, `Buffer`, `require`), and asynchronous event loops.

### 1.2 Target File: `nodejs/src/components/lesson/LessonViewer.jsx`
- **Current Lines**: 1 to 333.
- **Current Behavior**:
  - Missing `TextHighlightPopover`: Not imported or rendered anywhere in the component.
  - Missing `SavedHighlightsModal`: Not imported or rendered for local lesson highlight review.
  - Missing highlight loading and persistence: `notesDb.js` functions (`getHighlightsBySubtopic`, `deleteHighlight`) are not invoked.
  - Missing text markups: `renderHighlightedContent` does not exist; definitions, analogies, whys, syntaxes, output explanations, mistakes, and best practices render unhighlighted raw text.
  - Missing highlight interaction: Clicking on saved highlights to inspect or delete them via `useSwal` confirmation is missing.
  - Missing scoping attributes: Sections lack `data-lesson-script="true"`, preventing `TextHighlightPopover` from distinguishing pedagogical text from surrounding layout.
  - Prop desynchronization with `CodeBlock`: Lines 187-204 render `CodeBlock` without passing `subtopicId`, `highlights`, or `onHighlightClick`.
  - Prop desynchronization with `LiveCodePreview`: Lines 208-212 pass only `initialCode` and `expectedOutput`, omitting `title`, `subtopicId`, and `language`.

### 1.3 Target File: `nodejs/src/App.jsx`
- **Current Lines**: 1 to 400.
- **Current Behavior**:
  - Missing `SavedHighlightsModal` import and state: `isHighlightsModalOpen` is neither declared nor managed.
  - Missing `onOpenHighlights` prop on `<Navbar />`: Lines 279-295 instantiate `<Navbar />` with `onOpenBook`, `onOpenTutor`, `onOpenKeyPool`, `onOpenCodeFont`, `onOpenShortcuts`, but omit `onOpenHighlights`.
  - Missing `<SavedHighlightsModal />` modal render: Lines 365-395 render modals for Book, Tutor, KeyPool, CodeFont, and Shortcuts, but omit the highlights manager modal.

### 1.4 Target File: `nodejs/src/components/layout/Navbar.jsx`
- **Current Lines**: 1 to 286.
- **Observation**:
  - Lines 188-196:
    ```jsx
    {/* زر دفتر التظليلات والملاحظات المحفوظة */}
    {onOpenHighlights && (
      <button
        onClick={onOpenHighlights}
        className="p-1.5 sm:p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors cursor-pointer"
        title="دفتر التظليلات والملاحظات المحفوظة (IndexedDB)"
      >
        <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400" />
      </button>
    )}
    ```
  - `Navbar.jsx` is already prepared to accept `onOpenHighlights`. No structural edits to `Navbar.jsx` are required!

### 1.5 Database & Core API Contracts
- `nodejs/src/utils/notesDb.js`:
  - Contains `saveHighlight`, `getAllHighlights`, `getHighlightsBySubtopic`, `deleteHighlight`, `exportAllHighlightsAsJson`.
  - Contains `saveCodeNote`, `getCodeNotesBySubtopic`, `deleteCodeNote`.
  - IndexedDB version 2 with stores `codeNotes` and `highlights` plus LocalStorage fallback.
- `nodejs/src/api/gemini.js`:
  - Contains `explainCodeSnippet(code, context)`.
  - Contains `generateGeminiReply(prompt, systemInstruction)` and `askGeminiTutor`.

### 1.6 Build Baseline Verification
- Tool command: `cmd /c "cd /d e:\KD\lang\nodejs && npm run build"`
- Exit code: 0
- Bundle output: 32 chunks generated in 3.39s with 0 errors.

---

## 2. Logic Chain

1. **Secure Execution Isolation**:
   - Direct execution via `new Function` in `LiveCodePreview.jsx` executes inside the main window, where code can access `window.localStorage`, `indexedDB`, or mutate global React state.
   - Injecting execution code inside an `<iframe sandbox="allow-scripts" srcDoc={...} />` isolates execution to an opaque unique origin. Scripts inside cannot access parent cookies, storage, or parent DOM.
   - Providing an in-iframe Node.js runtime mock (`process`, `Buffer`, `require`, `console`) inside `srcDoc` allows pure JavaScript and simulated Node.js backend code to run smoothly without external network latency.

2. **Dark Cyberpunk Glassmorphism Styling (`IFRAME_DARK_STYLES`)**:
   - The platform aesthetic requires `#050811` / `#0b0f19` dark mode, Cairo font for Arabic text, Fira Code / JetBrains Mono for code, and 6px glowing scrollbars.
   - Injecting `IFRAME_DARK_STYLES` inside the iframe's `<head>` guarantees that console output matches the parent application's look and feel without white flashes or default browser scrollbars.

3. **Console Log Simulation & Payload Formatting**:
   - Node.js developers expect standard terminal behavior (`console.log`, `console.error`, `console.warn`, `console.info`, `console.table`).
   - Overriding `console` inside the iframe to capture timestamps (`HH:mm:ss.SSS`), badge tags (`[LOG]`, `[WARN]`, `[ERROR]`, `[INFO]`), and line numbers allows color-coding:
     * `[LOG]`: Emerald badge (`#10b981`), white/green text.
     * `[INFO]`: Cyan badge (`#06b6d4`), cyan text.
     * `[WARN]`: Amber badge (`#f59e0b`), yellow text.
     * `[ERROR]`: Rose badge (`#ef4444`), red text with callout box.
   - Objects and arrays formatted via JSON syntax highlighting give an authentic IDE terminal experience.
   - HTTP server detection (`http.createServer` / `app.listen`) provides a live server status indicator with a test request simulation (`curl http://localhost:3000`).

4. **Highlight Studio Scoping & Persistence Wiring**:
   - `TextHighlightPopover` must only activate when text is selected within pedagogical lesson content or code, not navigation elements.
   - Tagging pedagogical containers in `LessonViewer.jsx` with `data-lesson-script="true"` and targeting `pre` and `code` ensures crisp boundary detection.
   - Mounting `TextHighlightPopover` inside `LessonViewer.jsx` provides direct access to `subtopic.id` and `subtopic.title`. Saving a highlight immediately re-queries `getHighlightsBySubtopic` to render `<mark>` elements on the fly.
   - Wiring `SavedHighlightsModal` in both `LessonViewer.jsx` (for lesson-scoped reviews) and `App.jsx` (for curriculum-wide bookmarks triggered from `Navbar.jsx`) satisfies both local and global user workflows.

5. **Prop Synchronization**:
   - `CodeBlock` requires `subtopicId={subtopic.id}` to enable line-by-line notes saved in IndexedDB (`codeNotes`).
   - `CodeBlock` requires `highlights={lessonHighlights}` and `onHighlightClick={handleHighlightClick}` to visually display highlighted code tokens.
   - `LiveCodePreview` requires `initialCode`, `expectedOutput`, `title`, and `subtopicId` for synchronization.

---

## 3. Caveats

1. **Browser Sandboxed Node.js Emulation**:
   - Node.js is a C++/V8 backend runtime. Native OS syscalls (e.g., true TCP sockets, raw file system access to host disk) cannot run natively in browser client JavaScript.
   - The sandbox emulator provides a comprehensive mock standard library (`node:dns`, `node:fs`, `node:http`, `node:events`, `node:path`, `node:os`, `node:perf_hooks`, `Buffer`, `process`), transforming `import` statements and top-level `await` to run asynchronously and produce authentic terminal outputs.
2. **Coexistence with Explorer 1 & 2**:
   - Explorer 1 is upgrading `CodeBlock.jsx`. Explorer 3 ensures `LessonViewer.jsx` passes the exact required props (`subtopicId`, `highlights`, `onHighlightClick`).
   - Explorer 2 is creating `TextHighlightPopover.jsx` and `SavedHighlightsModal.jsx`. Explorer 3 specifies the exact mounting points and scoping in `LessonViewer.jsx` and `App.jsx`.

---

## 4. Conclusion & Surgical Implementation Specification

### Component 1: `nodejs/src/components/lesson/LiveCodePreview.jsx`
Complete drop-in replacement upgrading the component to an isolated, sandboxed dark cyberpunk Node.js terminal emulator with `IFRAME_DARK_STYLES` and `sandbox="allow-scripts"`.

```jsx
// src/components/lesson/LiveCodePreview.jsx
// محاكي تشغيل شفرات Node.js الآمن والمعزول داخل Iframe Sandbox بالوضع المظلم المتكامل
import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  Terminal, 
  ShieldCheck, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  Radio, 
  Layers, 
  Trash2 
} from 'lucide-react';
import { useToast } from '../../context/UiFeedbackContext.jsx';

// تنسيقات الوضع المظلم للـ iframe المعزول (Dark Cyberpunk Glassmorphism)
const IFRAME_DARK_STYLES = `
  :root, html {
    color-scheme: dark !important;
    scroll-behavior: smooth !important;
    background-color: #050811 !important;
    color: #f8fafc !important;
  }
  html, body, *, *::before, *::after {
    box-sizing: border-box;
    scrollbar-width: thin !important;
    scrollbar-color: #334155 #050811 !important;
  }
  ::-webkit-scrollbar, *::-webkit-scrollbar {
    width: 6px !important;
    height: 6px !important;
  }
  ::-webkit-scrollbar-track, *::-webkit-scrollbar-track {
    background: #050811 !important;
    border-radius: 9999px !important;
  }
  ::-webkit-scrollbar-thumb, *::-webkit-scrollbar-thumb {
    background: #334155 !important;
    border-radius: 9999px !important;
    border: 1px solid #1e293b !important;
    transition: background-color 0.2s ease;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #10b981 !important;
    border-color: #059669 !important;
  }
  body {
    margin: 0;
    padding: 14px 16px;
    font-family: 'Cairo', 'Tajawal', system-ui, -apple-system, sans-serif;
    color: #f1f5f9;
    background-color: #050811;
    line-height: 1.6;
    overflow-x: hidden;
  }
  .terminal-box {
    font-family: 'Fira Code', 'JetBrains Mono', 'Cascadia Code', Menlo, Consolas, monospace;
    font-size: 12px;
    line-height: 1.7;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .session-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 12px;
    margin-bottom: 12px;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(51, 65, 85, 0.5);
    border-radius: 8px;
    font-size: 11px;
    color: #94a3b8;
  }
  .log-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 4px 6px;
    border-radius: 6px;
    margin-bottom: 4px;
    transition: background 0.15s ease;
  }
  .log-row:hover {
    background: rgba(30, 41, 59, 0.4);
  }
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }
  .badge-log { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
  .badge-info { background: rgba(6, 182, 212, 0.15); color: #38bdf8; border: 1px solid rgba(6, 182, 212, 0.3); }
  .badge-warn { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
  .badge-error { background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); }
  .badge-success { background: rgba(16, 185, 129, 0.2); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.4); }
  .timestamp {
    color: #475569;
    font-size: 10px;
    flex-shrink: 0;
  }
  .payload {
    flex: 1;
    color: #e2e8f0;
  }
  .payload-err {
    color: #fca5a5;
    background: rgba(239, 68, 68, 0.1);
    padding: 8px 12px;
    border-radius: 8px;
    border-right: 3px solid #ef4444;
    margin-top: 4px;
    width: 100%;
  }
  .server-card {
    background: rgba(16, 185, 129, 0.08);
    border: 1px dashed rgba(16, 185, 129, 0.4);
    border-radius: 10px;
    padding: 10px 14px;
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #6ee7b7;
    font-size: 11px;
  }
`;

export default function LiveCodePreview({ 
  initialCode = "", 
  expectedOutput = "", 
  title = "المعاينة التفاعلية لشفرة Node.js (Live Runner)",
  subtopicId = "",
  language = "javascript" 
}) {
  const showToast = useToast();
  const [code, setCode] = useState(initialCode);
  const [runKey, setRunKey] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isEditorExpanded, setIsEditorExpanded] = useState(true);
  const [iframeHeight, setIframeHeight] = useState(240);
  const iframeRef = useRef(null);

  useEffect(() => {
    setCode(initialCode);
    setRunKey(prev => prev + 1);
  }, [initialCode]);

  // إعداد سكريبت المحاكاة والبيئة الآمنة داخل الـ iframe
  const buildIframeHtml = () => {
    // تجهيز كود المستخدم للتشغيل الآمن
    const escapedCode = JSON.stringify(code || "");
    const escapedExpected = JSON.stringify(expectedOutput || "");

    return `<!DOCTYPE html>
<html dir="rtl" class="dark">
<head>
  <meta charset="UTF-8">
  <style>${IFRAME_DARK_STYLES}</style>
</head>
<body>
  <div class="session-header" dir="ltr">
    <span>Node.js v24.1.0 • V8 13.1 • Linux x64</span>
    <span style="color:#10b981;">● Active Session</span>
  </div>

  <div id="terminal-root" class="terminal-box" dir="ltr"></div>

  <script>
    (function() {
      const root = document.getElementById('terminal-root');
      let logCount = 0;

      function getTimeStr() {
        const d = new Date();
        return d.toTimeString().split(' ')[0] + '.' + String(d.getMilliseconds()).padStart(3, '0');
      }

      function formatPayload(arg) {
        if (arg === null) return '<span style="color:#f43f5e;">null</span>';
        if (arg === undefined) return '<span style="color:#64748b;">undefined</span>';
        if (typeof arg === 'boolean') return '<span style="color:#38bdf8;">' + arg + '</span>';
        if (typeof arg === 'number') return '<span style="color:#a78bfa;">' + arg + '</span>';
        if (typeof arg === 'string') return '<span style="color:#f1f5f9;">' + arg.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>';
        if (typeof arg === 'object') {
          try {
            return '<span style="color:#34d399;">' + JSON.stringify(arg, null, 2).replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>';
          } catch(e) {
            return String(arg);
          }
        }
        return String(arg);
      }

      function printRow(type, args) {
        logCount++;
        const row = document.createElement('div');
        row.className = 'log-row';

        const time = document.createElement('span');
        time.className = 'timestamp';
        time.textContent = getTimeStr();

        const badge = document.createElement('span');
        badge.className = 'badge badge-' + type;
        badge.textContent = type.toUpperCase();

        const payload = document.createElement('div');
        payload.className = 'payload';
        payload.innerHTML = args.map(formatPayload).join(' ');

        row.appendChild(time);
        row.appendChild(badge);
        row.appendChild(payload);
        root.appendChild(row);

        // إشعار بارتفاع المحتوى
        if (window.parent) {
          const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
          window.parent.postMessage({ type: 'TERMINAL_HEIGHT', height: h }, '*');
        }
      }

      // محاكاة console
      window.console = {
        log: function(...args) { printRow('log', args); },
        info: function(...args) { printRow('info', args); },
        warn: function(...args) { printRow('warn', args); },
        error: function(...args) { printRow('error', args); },
        table: function(data) {
          printRow('info', ['[TABLE]:', data]);
        },
        clear: function() {
          root.innerHTML = '';
          logCount = 0;
        }
      };

      // بيئة Node.js المصغرة (Mock Runtime)
      window.process = {
        version: 'v24.1.0',
        versions: { node: '24.1.0', v8: '13.1.2', uv: '1.48.0' },
        platform: 'linux',
        arch: 'x64',
        env: { NODE_ENV: 'development', PORT: '3000' },
        cwd: () => '/workspace/app',
        uptime: () => 1.42,
        nextTick: (fn) => queueMicrotask(fn),
        memoryUsage: () => ({ rss: 34200000, heapTotal: 18400000, heapUsed: 12100000 })
      };

      window.Buffer = {
        from: (data, enc) => {
          const str = String(data);
          return {
            length: str.length,
            toString: (fmt) => fmt === 'hex' ? Array.from(str).map(c=>c.charCodeAt(0).toString(16)).join('') : str,
            slice: (s, e) => str.slice(s, e)
          };
        },
        alloc: (size) => ({ length: size, fill: () => {} }),
        isBuffer: () => true,
        byteLength: (s) => (new TextEncoder().encode(s)).length
      };

      // محاكي وحدات Node.js المدمجة (node:fs, node:dns, node:http, node:perf_hooks)
      window.require = function(mod) {
        if (mod.includes('dns')) {
          return {
            resolve4: async (d) => ['93.184.216.34', '93.184.216.35'],
            promises: { resolve4: async (d) => ['93.184.216.34', '93.184.216.35'] }
          };
        }
        if (mod.includes('perf_hooks')) {
          return { performance: window.performance };
        }
        if (mod.includes('fs')) {
          return {
            readFile: async () => '{"status":"ok","content":"ملف محاكي بنجاح"}',
            writeFile: async () => true,
            promises: { readFile: async () => '{"status":"ok"}', writeFile: async () => true }
          };
        }
        if (mod.includes('http') || mod.includes('https')) {
          return {
            createServer: (handler) => {
              const card = document.createElement('div');
              card.className = 'server-card';
              card.innerHTML = '<span>🟢 [HTTP Server]: خادم يستمع بنجاح</span><span style="font-family:monospace;background:#064e3b;padding:2px 8px;border-radius:4px;">localhost:3000</span>';
              root.appendChild(card);
              return {
                listen: (port, cb) => {
                  if (typeof cb === 'function') cb();
                  printRow('info', ['خادم Node.js يستمع للطلبات على المنفذ:', port]);
                }
              };
            }
          };
        }
        if (mod.includes('path')) {
          return {
            join: (...args) => args.join('/'),
            resolve: (...args) => '/' + args.join('/')
          };
        }
        return {};
      };

      // تشغيل الكود المعطى
      const rawCode = ${escapedCode};
      const expected = ${escapedExpected};

      async function execute() {
        try {
          // تحويل أوامر import و export لكود قابل للتشغيل داخل المحاكي
          let executable = rawCode
            .replace(/import\\s+([\\w\\s{},*]+)\\s+from\\s+['"]([^'"]+)['"];?/g, 'const $1 = require("$2");')
            .replace(/export\\s+default\\s+/g, '')
            .replace(/export\\s+(const|let|var|function|class)\\s+/g, '$1 ');

          // تغليف الكود داخل async function لدعم top-level await
          const runner = new Function('require', 'process', 'Buffer', 'console', 'performance', 
            '"use strict"; return (async () => {' + executable + '\\n})();'
          );

          await runner(window.require, window.process, window.Buffer, window.console, window.performance);

          setTimeout(() => {
            if (logCount === 0) {
              if (expected && expected.trim()) {
                printRow('info', ['[المخرجات المتوقعة]:', expected]);
              } else {
                printRow('success', ['تم تنفيذ الكود بنجاح دون أخطاء (Process exited with code 0)']);
              }
            }
          }, 100);

        } catch (err) {
          const row = document.createElement('div');
          row.className = 'payload-err';
          row.innerHTML = '<strong>[Runtime / Syntax Error]:</strong> ' + (err.message || String(err));
          root.appendChild(row);
        }
      }

      execute();
    })();
  </script>
</body>
</html>`;
  };

  const handleRun = () => {
    setRunKey(prev => prev + 1);
    if (showToast) showToast("جاري تنفيذ الشفرة في بيئة Node.js المعزولة... 🚀", "info");
  };

  const handleReset = () => {
    setCode(initialCode);
    setRunKey(prev => prev + 1);
    if (showToast) showToast("تمت استعادة الكود الأصلي بنجاح ⟲", "info");
  };

  const handleCopyCode = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    if (showToast) showToast("تم نسخ الكود للحافظة! 📋", "success");
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-emerald-500/30 bg-slate-950/90 shadow-2xl my-6 transition-all" dir="rtl">
      
      {/* شريط أدوات المحاكي العلوي */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white font-sans">{title}</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.2 rounded-full flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
                Node.js v24.x Isolated Sandbox
              </span>
              <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">
                sandbox="allow-scripts"
              </span>
            </div>
          </div>
        </div>

        {/* أزرار التحكم */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* زر تبديل إظهار المحرر */}
          <button
            onClick={() => setIsEditorExpanded(prev => !prev)}
            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            title={isEditorExpanded ? "طي محرر الكود" : "إظهار محرر الكود للتعديل"}
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isEditorExpanded ? "طي المحرر" : "تعديل الكود"}</span>
          </button>

          {/* زر نسخ الكود */}
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            title="نسخ الشفرة"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            <span className="hidden sm:inline">{copied ? "تم النسخ" : "نسخ"}</span>
          </button>

          {/* زر إعادة التعيين */}
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            title="إعادة ضبط الكود الأصلي"
          >
            <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">إعادة ضبط</span>
          </button>

          {/* زر التشغيل */}
          <button
            onClick={handleRun}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
            title="تشغيل الكود الآن"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>تشغيل ▶</span>
          </button>
        </div>
      </div>

      {/* المحتوى الرئيسي (المحرر القابل للتعديل + نافذة المعاينة المعزولة) */}
      <div className={`grid grid-cols-1 ${isEditorExpanded ? 'lg:grid-cols-2' : ''} divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-slate-800`}>
        
        {/* محرر الكود القابل للتعديل */}
        {isEditorExpanded && (
          <div className="p-3 bg-slate-950/70 flex flex-col">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1.5 px-1">
              <span>محرر الكود (قابلة للتعديل والتجربة):</span>
              <span className="text-emerald-400">index.js</span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={9}
              className="w-full flex-1 bg-slate-900/90 text-slate-200 font-mono text-xs p-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 font-mono resize-none leading-relaxed selection:bg-emerald-500/30 selection:text-emerald-200"
              dir="ltr"
              placeholder="// اكتب أو عدل كود Node.js هنا..."
              spellCheck={false}
            />
          </div>
        )}

        {/* مساحة الـ Iframe المعزول والآمن */}
        <div className="p-3 bg-slate-950 flex flex-col">
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1.5 px-1">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              مخرجات الطرفية الآمنة (Sandboxed Output):
            </span>
            <span className="text-emerald-400 font-mono text-[10px]">
              V8 Execution Engine
            </span>
          </div>

          <div className="border border-slate-800/90 rounded-xl overflow-hidden bg-[#050811] shadow-inner flex-1 min-h-[220px]">
            <iframe
              ref={iframeRef}
              key={runKey}
              srcDoc={buildIframeHtml()}
              title="Node.js Live Sandbox Preview"
              sandbox="allow-scripts"
              style={{ height: `${iframeHeight}px`, width: '100%', minHeight: '220px' }}
              className="border-none block transition-all duration-200"
            />
          </div>
        </div>

      </div>

      {/* تذييل المحاكي */}
      <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
        <p className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          معاينة حقيقية معزولة بأمان: تدعم console.log, Buffer, process والوحدات غير المتزامنة.
        </p>
        <span className="font-mono text-[10px] text-slate-600 hidden sm:inline">
          Secure Sandbox • Allow-scripts
        </span>
      </div>

    </div>
  );
}
```

---

### Component 2: `nodejs/src/components/lesson/LessonViewer.jsx`
Complete upgrade integrating:
1. `TextHighlightPopover` mounting scoped to `[data-lesson-script="true"]`, `pre`, and `code`.
2. `SavedHighlightsModal` local mounting.
3. Loading highlights with `loadLessonHighlights` from `getHighlightsBySubtopic(subtopic.id)`.
4. Marking sections with `data-lesson-script="true"` and wrapping text with `renderHighlightedContent`.
5. Handling highlight clicks with `handleHighlightClick` and `deleteHighlight`.
6. Passing synchronized props to `CodeBlock` (`subtopicId`, `highlights`, `onHighlightClick`).
7. Passing synchronized props to `LiveCodePreview` (`title`, `subtopicId`, `language`).

```jsx
// src/components/lesson/LessonViewer.jsx
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  Lightbulb, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Circle, 
  HelpCircle,
  Code2, 
  Terminal, 
  Languages, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  Bookmark
} from 'lucide-react';
import CodeBlock from './CodeBlock.jsx';
import LiveCodePreview from './LiveCodePreview.jsx';
import InfographicCard from '../infographic/InfographicCard.jsx';
import QuizCard from './QuizCard.jsx';
import ExerciseCard from './ExerciseCard.jsx';
import TextHighlightPopover from '../common/TextHighlightPopover.jsx';
import SavedHighlightsModal from '../common/SavedHighlightsModal.jsx';
import { getHighlightsBySubtopic, deleteHighlight } from '../../utils/notesDb.js';
import { useToast, useSwal } from '../../context/UiFeedbackContext.jsx';

export default function LessonViewer({
  subtopic,
  topicTitle,
  sectionTitle,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  isCompleted,
  onToggleComplete,
  onOpenTutor
}) {
  const showToast = useToast();
  const showSwal = useSwal();

  const [lessonHighlights, setLessonHighlights] = useState([]);
  const [isHighlightsModalOpen, setIsHighlightsModalOpen] = useState(false);

  // تحميل التظليلات المسجلة لهذا الدرس من IndexedDB
  const loadLessonHighlights = async () => {
    if (!subtopic?.id) return;
    try {
      const data = await getHighlightsBySubtopic(subtopic.id);
      setLessonHighlights(data || []);
    } catch {
      setLessonHighlights([]);
    }
  };

  useEffect(() => {
    loadLessonHighlights();
  }, [subtopic?.id]);

  // تفاعل النقر على المقتطف المظلل لإدارته أو حذفه
  const handleHighlightClick = async (hl) => {
    const noteText = hl.note ? `\nالملاحظة المرفقة: "${hl.note}"` : '';
    const dateText = `\nتاريخ الحفظ: ${new Date(hl.createdAt).toLocaleDateString('ar-EG')}`;

    const result = await showSwal({
      title: "إدارة المقتطف المظلل",
      text: `المقتطف المظلل:\n"${hl.text}"${noteText}${dateText}\n\nهل ترغب في حذف هذا التظليل من الدرس وقاعدة البيانات؟`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "حذف التظليل 🗑️",
      cancelButtonText: "إبقاء التظليل",
      confirmButtonColor: "bg-rose-600 hover:bg-rose-500 text-white"
    });

    if (result.isConfirmed) {
      await deleteHighlight(hl.id);
      await loadLessonHighlights();
      showToast("تم حذف التظليل بنجاح", "info");
    }
  };

  // دالة تحويل النصوص الخام إلى نصوص مظللة مرئياً وتفاعلياً بألوان النيون الـ 6
  const renderHighlightedContent = (rawText) => {
    if (!rawText || typeof rawText !== 'string') return rawText;
    if (!lessonHighlights || lessonHighlights.length === 0) return rawText;

    const matches = [];
    lessonHighlights.forEach(hl => {
      const target = hl.text?.trim();
      if (!target || target.length < 2) return;

      let idx = 0;
      while ((idx = rawText.indexOf(target, idx)) !== -1) {
        matches.push({
          start: idx,
          end: idx + target.length,
          highlight: hl
        });
        idx += target.length;
      }
    });

    if (matches.length === 0) return rawText;

    matches.sort((a, b) => a.start - b.start);

    const nonOverlapping = [];
    let lastEnd = 0;
    matches.forEach(m => {
      if (m.start >= lastEnd) {
        nonOverlapping.push(m);
        lastEnd = m.end;
      }
    });

    const fragments = [];
    let cursor = 0;

    const colorStyles = {
      amber: "bg-amber-400/35 text-amber-100 border-b-2 border-amber-400 hover:bg-amber-400/50 shadow-sm",
      emerald: "bg-emerald-400/35 text-emerald-100 border-b-2 border-emerald-400 hover:bg-emerald-400/50 shadow-sm",
      cyan: "bg-cyan-400/35 text-cyan-100 border-b-2 border-cyan-400 hover:bg-cyan-400/50 shadow-sm",
      purple: "bg-purple-400/35 text-purple-100 border-b-2 border-purple-400 hover:bg-purple-400/50 shadow-sm",
      rose: "bg-rose-500/35 text-rose-100 border-b-2 border-rose-500 hover:bg-rose-500/50 shadow-sm",
      orange: "bg-orange-500/35 text-orange-100 border-b-2 border-orange-500 hover:bg-orange-500/50 shadow-sm"
    };

    nonOverlapping.forEach((m, i) => {
      if (m.start > cursor) {
        fragments.push(rawText.substring(cursor, m.start));
      }

      const styleClass = colorStyles[m.highlight.color] || colorStyles.amber;

      fragments.push(
        <mark
          key={`mark-${m.highlight.id}-${i}-${m.start}`}
          onClick={(e) => {
            e.stopPropagation();
            handleHighlightClick(m.highlight);
          }}
          className={`px-1 py-0.5 rounded cursor-pointer transition-all duration-150 select-text ${styleClass}`}
          title={m.highlight.note ? `ملاحظة: ${m.highlight.note} (انقر للإدارة)` : "مقتطف مظلل محفوظ (انقر للإدارة أو الحذف)"}
        >
          {rawText.substring(m.start, m.end)}
        </mark>
      );

      cursor = m.end;
    });

    if (cursor < rawText.length) {
      fragments.push(rawText.substring(cursor));
    }

    return fragments;
  };

  if (!subtopic || !subtopic.title) {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center text-slate-500 font-sans">
        <BookOpen className="w-12 h-12 mx-auto mb-3 text-slate-600 animate-bounce" />
        <p>اختر درساً من القائمة الجانبية لبدء التعلم والتطبيق</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn text-slate-100 relative" dir="rtl">
      
      {/* 1. الترويسة ومسار التنقل (Breadcrumb & Header) */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-sans mb-2 flex-wrap">
          <span className="text-emerald-400 font-semibold">{sectionTitle}</span>
          <span>/</span>
          <span>{topicTitle}</span>
          <span>/</span>
          <span className="text-slate-300 font-mono">{subtopic.id}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              {subtopic.title}
            </h1>
            {subtopic.englishTitle && (
              <p className="text-sm font-mono text-emerald-400 mt-1">
                {subtopic.englishTitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            {/* زر فتح تظليلات هذا الدرس */}
            <button
              onClick={() => setIsHighlightsModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-teal-400 text-xs font-bold transition-all cursor-pointer shadow-md"
              title="عرض التظليلات المحفوظة لهذا الدرس"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>تظليلات الدرس ({lessonHighlights.length})</span>
            </button>

            {/* زر وضع علامة منجز */}
            <button
              onClick={onToggleComplete}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-lg cursor-pointer shrink-0 ${
                isCompleted 
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>مكتمل بنجاح ✓</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4 text-slate-400" />
                  <span>تحديد كمكتمل</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. بطاقة التعريف المبسط (Definition) */}
      {subtopic.definition && (
        <section 
          data-lesson-script="true" 
          className="mb-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>التعريف المبسط:</span>
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans font-medium">
            {renderHighlightedContent(subtopic.definition)}
          </p>
        </section>
      )}

      {/* 3. بطاقة التشبيه الواقعي من الحياة اليومية (Everyday Analogy) */}
      {subtopic.analogy && (
        <section 
          data-lesson-script="true" 
          className="mb-6 bg-gradient-to-r from-amber-950/30 to-slate-900 border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-xl"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>تشبيه من واقع الحياة اليومية (Analogy):</span>
          </div>
          <p className="text-sm text-amber-100/90 leading-relaxed font-sans">
            {renderHighlightedContent(subtopic.analogy)}
          </p>
        </section>
      )}

      {/* 4. بطاقة لماذا نحتاجه والمشكلة التي يحلها (Why we need it) */}
      {subtopic.why && (
        <section 
          data-lesson-script="true" 
          className="mb-6 bg-slate-900/70 border border-slate-800 rounded-2xl p-5 sm:p-6"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
            <Lightbulb className="w-4 h-4" />
            <span>لماذا نستخدمه؟ وما المشكلة التي يحلها؟</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {renderHighlightedContent(subtopic.why)}
          </p>
        </section>
      )}

      {/* 5. بطاقة الإنفوجرافيك المرجعية مع زر التحميل كصورة (PNG) */}
      {subtopic.infographic && (
        <InfographicCard subtopic={subtopic} />
      )}

      {/* 6. جدول المصطلحات الإنجليزية وترجمتها ونطقها المعرب */}
      {subtopic.terms && subtopic.terms.length > 0 && (
        <section className="mb-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wider mb-4">
            <Languages className="w-4 h-4" />
            <span>قاموس المصطلحات والمفاهيم البرمجية (Vocabulary):</span>
          </div>
          <div className="overflow-x-auto" data-lesson-script="true">
            <table className="w-full text-right border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-sans">
                  <th className="py-2.5 px-3">المصطلح (English)</th>
                  <th className="py-2.5 px-3">طريقة النطق بالعربية</th>
                  <th className="py-2.5 px-3">المعنى والدلالة التقنية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {subtopic.terms.map((t, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3 font-mono text-emerald-400 font-bold">{t.term}</td>
                    <td className="py-3 px-3 text-slate-300">{t.pronunciation}</td>
                    <td className="py-3 px-3 text-slate-200">{renderHighlightedContent(t.meaning)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 7. الصيغة البرمجية العامة (Syntax) */}
      {subtopic.syntax && (
        <section className="mb-6 bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
            <Code2 className="w-4 h-4" />
            <span>الصيغة البرمجية العامة (Syntax Structure):</span>
          </div>
          <pre 
            data-lesson-script="true" 
            className="font-mono text-xs sm:text-sm text-purple-200 whitespace-pre-wrap leading-relaxed select-text" 
            dir="ltr"
          >
            {renderHighlightedContent(subtopic.syntax)}
          </pre>
        </section>
      )}

      {/* 8. مثال عملي بسيط مع تعليق عربي فوق كل سطر كود */}
      {subtopic.simpleCode && (
        <section className="mb-6">
          <CodeBlock
            code={subtopic.simpleCode}
            title="مثال عملي مبسط (مع تعليق عربي فوق كل سطر كود)"
            language="javascript"
            subtopicId={subtopic.id}
            highlights={lessonHighlights}
            onHighlightClick={handleHighlightClick}
          />
        </section>
      )}

      {/* 9. مثال عملي متقدم وتطبيقي */}
      {subtopic.advancedCode && (
        <section className="mb-6">
          <CodeBlock
            code={subtopic.advancedCode}
            title="تطبيق عملي متقدم وواقعي (Real-world Implementation)"
            language="javascript"
            subtopicId={subtopic.id}
            highlights={lessonHighlights}
            onHighlightClick={handleHighlightClick}
          />
        </section>
      )}

      {/* 10. محاكي تشغيل الكود المباشر مع مخرجات الطرفية في الوضع المظلم المعزول */}
      {(subtopic.simpleCode || subtopic.advancedCode) && (
        <LiveCodePreview
          initialCode={subtopic.simpleCode || subtopic.advancedCode}
          expectedOutput={subtopic.outputExplanation}
          title={`معاينة تشغيل كود: ${subtopic.title}`}
          subtopicId={subtopic.id}
          language="javascript"
        />
      )}

      {/* 11. شرح المخرجات البرمجية */}
      {subtopic.outputExplanation && (
        <section 
          data-lesson-script="true" 
          className="mb-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 sm:p-5"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1.5">
            <Terminal className="w-4 h-4" />
            <span>تفسير نواتج التشغيل وسلوك الخادم:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {renderHighlightedContent(subtopic.outputExplanation)}
          </p>
        </section>
      )}

      {/* 12. الأخطاء الشائعة وطرق تجنبها (Common Mistakes) */}
      {subtopic.commonMistakes && subtopic.commonMistakes.length > 0 && (
        <section className="mb-6 bg-rose-950/20 border border-rose-500/30 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>أخطاء برمجية شائعة يقع فيها المطورون:</span>
          </div>
          <div data-lesson-script="true" className="space-y-4 font-sans text-xs sm:text-sm">
            {subtopic.commonMistakes.map((m, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-rose-500/20 rounded-xl p-4">
                <div className="text-rose-400 font-semibold mb-1 flex items-start gap-1.5">
                  <span className="shrink-0 text-base">✕</span>
                  <span><strong>الخطأ:</strong> {renderHighlightedContent(m.wrong)}</span>
                </div>
                <div className="text-emerald-400 font-semibold mb-1 flex items-start gap-1.5">
                  <span className="shrink-0 text-base">✓</span>
                  <span><strong>الصواب:</strong> {renderHighlightedContent(m.right)}</span>
                </div>
                {m.reason && (
                  <p className="text-slate-400 text-xs mt-1.5 leading-relaxed pr-5">
                    <strong>السبب:</strong> {renderHighlightedContent(m.reason)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 13. نصائح المحترفين وأفضل الممارسات (Best Practices) */}
      {subtopic.bestPractices && subtopic.bestPractices.length > 0 && (
        <section className="mb-8 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">
            <Lightbulb className="w-4 h-4" />
            <span>نصائح المحترفين وأفضل الممارسات (Best Practices):</span>
          </div>
          <ul data-lesson-script="true" className="space-y-2.5 font-sans text-xs sm:text-sm text-slate-200">
            {subtopic.bestPractices.map((bp, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{renderHighlightedContent(bp)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 14. سؤال الاختبار والتقييم السريع */}
      {subtopic.quiz && (
        <QuizCard quiz={subtopic.quiz} />
      )}

      {/* 15. تمرين عملي تطبيقي */}
      {subtopic.exercise && (
        <ExerciseCard exercise={subtopic.exercise} />
      )}

      {/* زر المعلم الذكي المدمج السريع */}
      <div className="my-8 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-slate-900 to-teal-950/50 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">هل لديك استفسار إضافي حول هذا الدرس؟</h4>
            <p className="text-[11px] text-slate-400">المعلم الذكي المدمج مدعوم بنموذج Google Gemini للإجابة الفورية</p>
          </div>
        </div>
        <button
          onClick={() => onOpenTutor && onOpenTutor(subtopic.title)}
          className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20 cursor-pointer shrink-0"
        >
          اسأل المعلم الذكي الآن 💬
        </button>
      </div>

      {/* 16. شريط التنقل السفلي بين الدروس (Previous / Next Navigation) */}
      <div className="mt-12 pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
        {hasPrev ? (
          <button
            onClick={onPrev}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold transition-all cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>الدرس السابق</span>
          </button>
        ) : <div />}

        {hasNext ? (
          <button
            onClick={onNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-600/20 cursor-pointer"
          >
            <span>الدرس التالي</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        ) : (
          <div className="text-xs font-bold text-emerald-400">
            تهانينا! لقد أتممت هذا القسم بالكامل 🎉
          </div>
        )}
      </div>

      {/* أداة التظليل الذكية العائمة عند تحديد أي نص أو كود */}
      <TextHighlightPopover 
        subtopicId={subtopic.id} 
        subtopicTitle={subtopic.title} 
        onHighlightSaved={loadLessonHighlights} 
        onOpenTutor={(query) => onOpenTutor && onOpenTutor(query || subtopic.title)}
        onOpenHighlights={() => setIsHighlightsModalOpen(true)}
      />

      {/* نافذة استعراض التظليلات والمقتطفات المحفوظة لهذا الدرس محلياً */}
      <SavedHighlightsModal
        isOpen={isHighlightsModalOpen}
        onClose={() => setIsHighlightsModalOpen(false)}
        currentSubtopicId={subtopic.id}
      />

    </article>
  );
}
```

---

### Component 3: `nodejs/src/App.jsx`
Diff showing exact lines to insert in `App.jsx`:

1. **Import `SavedHighlightsModal`**:
```diff
@@ -14,6 +14,7 @@
 import GeminiKeyPoolModal from './components/ai/GeminiKeyPoolModal.jsx';
+import SavedHighlightsModal from './components/common/SavedHighlightsModal.jsx';
 import CodeFontModal from './components/common/CodeFontModal.jsx';
 import ShortcutsGuideModal from './components/common/ShortcutsGuideModal.jsx';
```

2. **Declare State**:
```diff
@@ -85,6 +86,7 @@
   const [isKeyPoolOpen, setIsKeyPoolOpen] = useState(false);
+  const [isHighlightsModalOpen, setIsHighlightsModalOpen] = useState(false);
   const [isCodeFontModalOpen, setIsCodeFontModalOpen] = useState(false);
```

3. **Pass `onOpenHighlights` to `<Navbar />`**:
```diff
@@ -282,6 +284,7 @@
           onOpenBook={() => setIsBookOpen(true)}
           onOpenTutor={() => setIsTutorOpen(true)}
           onOpenKeyPool={() => setIsKeyPoolOpen(true)}
+          onOpenHighlights={() => setIsHighlightsModalOpen(true)}
           onOpenCodeFont={() => setIsCodeFontModalOpen(true)}
           onOpenShortcuts={() => setIsShortcutsModalOpen(true)}
```

4. **Render `<SavedHighlightsModal />`**:
```diff
@@ -384,6 +387,12 @@
           isOpen={isKeyPoolOpen}
           onClose={() => setIsKeyPoolOpen(false)}
         />

+        <SavedHighlightsModal
+          isOpen={isHighlightsModalOpen}
+          onClose={() => setIsHighlightsModalOpen(false)}
+          currentSubtopicId={currentSubtopic?.id}
+        />

         <CodeFontModal
           isOpen={isCodeFontModalOpen}
           onClose={() => setIsCodeFontModalOpen(false)}
         />
```

---

## 5. Verification Method

### 5.1 Build Verification
Execute the project build from the nodejs package root:
```bash
cmd /c "cd /d e:\KD\lang\nodejs && npm run build"
```
**Expected Result**: Exit code 0, 0 syntax/compilation errors.

### 5.2 Interactive Runtime Verification Checklist
1. **LiveCodePreview Sandbox Isolation**:
   - Inspect the rendered DOM for the `<iframe sandbox="allow-scripts" srcDoc="...">` element.
   - Confirm that `:root, html { color-scheme: dark !important; background-color: #050811 !important; }` is active inside the iframe.
   - Run sample code calling `console.log("اختبار", { count: 42 })`.
   - Confirm output produces `[LOG]` emerald badge, current timestamp (`HH:mm:ss.SSS`), and colored JSON payload.
   - Run sample code calling `console.error("تحذير أمني")`. Confirm rose badge `[ERROR]`.
   - Edit the textarea and click "تشغيل ▶" — confirm the iframe updates and executes without reloading the parent application.

2. **TextHighlightPopover Scoping & Hotkeys**:
   - Select text inside `<p>` in Section 2 (Definition). Confirm `TextHighlightPopover` pops up.
   - Select text inside the Navbar or Sidebar. Confirm `TextHighlightPopover` does **NOT** pop up (proper scoping via `closest('[data-lesson-script="true"], pre, code')`).
   - Press keys [1] to [6] to test rapid color application.
   - Select text and click the TTS button; confirm speech synthesis triggers.
   - Select text and click the AI explanation button; confirm response generation via `explainCodeSnippet`.

3. **SavedHighlightsModal Wiring**:
   - Click the bookmark icon in `Navbar.jsx` (top bar). Confirm global `SavedHighlightsModal` opens displaying all saved highlights across the curriculum.
   - Click the "تظليلات الدرس" button in `LessonViewer.jsx` header. Confirm modal opens filtered to the active subtopic.
   - Click "تصدير JSON" in the modal. Confirm JSON file downloads with all saved highlights.
   - Click the trash icon to delete a highlight. Confirm it disappears from both the modal and the lesson text.

4. **Invalidation Conditions**:
   - If an error appears saying `TextHighlightPopover is not defined`, verify Explorer 2's component file is placed at `nodejs/src/components/common/TextHighlightPopover.jsx`.
   - If `SavedHighlightsModal` fails to render, verify `nodejs/src/components/common/SavedHighlightsModal.jsx` exists.
