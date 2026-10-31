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
  Sparkles, 
  Layers 
} from 'lucide-react';
import { useToast } from '../../context/UiFeedbackContext.jsx';

// تنسيقات الوضع المظلم للـ iframe المعزول (Dark Cyberpunk Glassmorphism)
export const IFRAME_DARK_STYLES = `
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

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && e.data.type === 'TERMINAL_HEIGHT' && typeof e.data.height === 'number') {
        setIframeHeight(Math.max(220, Math.min(e.data.height + 20, 600)));
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // إعداد سكريبت المحاكاة والبيئة الآمنة داخل الـ iframe
  const buildIframeHtml = () => {
    // تجهيز كود المستخدم للتشغيل الآمن وحمايته من إنهاء وسم السكريبت
    const escapedCode = JSON.stringify(code || "").replace(/<\/script>/gi, '<\\/script>');
    const escapedExpected = JSON.stringify(expectedOutput || "").replace(/<\/script>/gi, '<\\/script>');

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
            .replace(/import\\s+\\*\\s+as\\s+(\\w+)\\s+from\\s+['"]([^'"]+)['"];?/g, 'const $1 = require("$2");')
            .replace(/import\\s+([\\w\\s{},]+)\\s+from\\s+['"]([^'"]+)['"];?/g, 'const $1 = require("$2");')
            .replace(/export\\s+default\\s+/g, '')
            .replace(/export\\s+(const|let|var|function|class)\\s+/g, '$1 ');

          // تغليف الكود داخل async function لدعم top-level await مع رقيب زمني (Watchdog Timeout)
          const runner = new Function('require', 'process', 'Buffer', 'console', 'performance', 
            '"use strict"; return (async () => {' + executable + '\\n})();'
          );

          const watchdogTimeout = new Promise((_, reject) => {
            setTimeout(() => {
              reject(new Error("Execution timeout: تجاوز الحد الزمني المسموح (5000ms) - احتمال وجود حلقة تكرار لانهائية (Infinite Loop)"));
            }, 5000);
          });

          await Promise.race([
            runner(window.require, window.process, window.Buffer, window.console, window.performance),
            watchdogTimeout
          ]);

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
