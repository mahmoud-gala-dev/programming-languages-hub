// src/components/lesson/LiveCodePreview.jsx
// محاكي ومعاين الكود التفاعلي الذكي (Smart Live Code & React Component Runner)
// يدعم تشغيل مكونات React الحية عبر Babel Standalone و Tailwind CSS ومحاكي JavaScript الآمن
import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  RotateCcw, 
  Eye, 
  Monitor, 
  Copy, 
  Check, 
  Sparkles, 
  Terminal, 
  Code2, 
  Cpu, 
  Layers,
  ExternalLink
} from 'lucide-react';
import { useToast } from '../../context/UiFeedbackContext.jsx';

// تنسيقات معمارية راقية للـ iframe المعزول تدعم الوضع المظلم وكافة المكونات التعليمية الشائعة
const IFRAME_DARK_STYLES = `
  :root, html {
    color-scheme: dark !important;
    scroll-behavior: smooth !important;
    background-color: #0b0f19 !important;
    color: #f8fafc !important;
  }
  html, body, *, *::before, *::after {
    box-sizing: border-box;
    scrollbar-width: thin !important;
    scrollbar-color: #334155 #0b0f19 !important;
  }
  ::-webkit-scrollbar, *::-webkit-scrollbar, html::-webkit-scrollbar, body::-webkit-scrollbar {
    width: 6px !important;
    height: 6px !important;
  }
  ::-webkit-scrollbar-track, *::-webkit-scrollbar-track, html::-webkit-scrollbar-track, body::-webkit-scrollbar-track {
    background: #0b0f19 !important;
    border-radius: 9999px !important;
  }
  ::-webkit-scrollbar-thumb, *::-webkit-scrollbar-thumb, html::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb {
    background: #334155 !important;
    border-radius: 9999px !important;
    border: 1px solid #1e293b !important;
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }
  ::-webkit-scrollbar-thumb:hover, *::-webkit-scrollbar-thumb:hover {
    background: #38bdf8 !important;
    border-color: #0284c7 !important;
  }
  ::-webkit-scrollbar-button, *::-webkit-scrollbar-button, html::-webkit-scrollbar-button, body::-webkit-scrollbar-button {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
  ::-webkit-scrollbar-corner, *::-webkit-scrollbar-corner {
    background: transparent !important;
  }
  body {
    margin: 0;
    padding: 20px;
    font-family: 'Cairo', 'Tajawal', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #f8fafc;
    background-color: #0b0f19;
    line-height: 1.6;
    overflow-x: hidden;
  }
  input, select, textarea, button {
    font-family: inherit;
    color-scheme: dark !important;
  }

  /* تنسيقات أساسية عالية الجودة لكافة وسوم HTML الافتراضية داخل المعاينة */
  h1, h2, h3, h4, h5, h6 {
    color: #f8fafc;
    margin-top: 0;
    font-weight: 800;
  }
  p {
    color: #cbd5e1;
    margin-top: 0;
    margin-bottom: 12px;
  }
  a {
    color: #38bdf8;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  /* تنسيقات معمارية راقية للمكونات الكلاسيكية في شروحات React */
  .catalog-container, .store-container, .dashboard, .app-container, .main-container {
    max-width: 680px;
    margin: 0 auto;
    padding: 20px;
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 20px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
  }
  .catalog-container h2, .catalog-container h3, .store-container h2 {
    margin: 0 0 16px 0;
    color: #f8fafc;
    font-size: 17px;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid #1e293b;
    padding-bottom: 12px;
  }
  .items-list, .product-grid, .directory-grid, .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 14px;
  }
  .product-item, .product-card, .card, .user-card, .user-profile-card, .profile-card, .item-card, .branch {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .product-item:hover, .product-card:hover, .user-card:hover, .card:hover {
    border-color: #38bdf8;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(2, 132, 199, 0.2);
  }
  .product-item h4, .user-card h3, .card h3 {
    margin: 0;
    font-size: 15px;
    font-weight: 700;
    color: #f1f5f9;
  }
  .price-tag {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    background: rgba(14, 165, 233, 0.15);
    color: #38bdf8;
    border: 1px solid rgba(14, 165, 233, 0.35);
    border-radius: 8px;
    padding: 4px 12px;
    font-size: 13px;
    font-weight: 800;
    font-family: 'Fira Code', Consolas, monospace;
    letter-spacing: 0.5px;
  }
  .in, .available, .in-stock, .badge-success {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.35);
    border-radius: 8px;
    padding: 3px 10px;
    font-size: 11px;
    font-weight: 700;
  }
  .out, .unavailable, .out-of-stock, .badge-danger {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    background: rgba(244, 63, 94, 0.15);
    color: #fb7185;
    border: 1px solid rgba(244, 63, 94, 0.35);
    border-radius: 8px;
    padding: 3px 10px;
    font-size: 11px;
    font-weight: 700;
  }
  .auth-box, .box-container {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    max-width: 420px;
    margin: 0 auto;
  }
  .user-hdr {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }
  .avatar-img, .avatar-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid #38bdf8;
    object-fit: cover;
    background: #1e293b;
  }
  .tree-root {
    padding: 16px;
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 16px;
  }
  button, .btn, .btn-login, .btn-active {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background: #0284c7;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    padding: 9px 18px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.15s ease;
    box-shadow: 0 2px 8px rgba(2, 132, 199, 0.3);
  }
  button:hover, .btn:hover, .btn-login:hover {
    background: #0369a1;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(2, 132, 199, 0.4);
  }
  button:disabled, .btn-disabled {
    background: #334155 !important;
    color: #94a3b8 !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
    transform: none !important;
  }
  input, textarea, select {
    background: #020617;
    border: 1px solid #334155;
    border-radius: 10px;
    padding: 9px 14px;
    color: #f8fafc;
    font-size: 13px;
    outline: none;
    transition: border-color 0.15s;
  }
  input:focus, textarea:focus, select:focus {
    border-color: #38bdf8;
    box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

/**
 * توليد وثيقة HTML تفاعلية كاملة لمعاينة الكود مباشرة
 * يدعم تلقائياً: مكونات React (JSX) عبر Babel Standalone، وثائق HTML الكاملة، وسكربتات JavaScript الحية
 */
function generateSrcDoc(rawCode) {
  if (!rawCode) {
    return `<!DOCTYPE html><html dir="rtl"><head><meta charset="UTF-8"><style>${IFRAME_DARK_STYLES}</style></head><body><div style="color: #64748b; text-align: center; padding: 24px;">لا يوجد كود للمعاينة</div></body></html>`;
  }

  const trimmed = rawCode.trim();

  // تنظيف استيرادات ES Modules وتصديرات export default
  const cleanedCode = trimmed
    .replace(/import\s+.*?from\s+['"][^'"]+['"];?/g, '// [Resolved] $&')
    .replace(/export\s+default\s+/g, '')
    .replace(/export\s+(?:const|function|let|var|class)\s+/g, (m) => m.replace('export ', ''));

  // فحص هل الكود يمثل مكون React (يحتوي على دوال مكونات، أو وسوم JSX، أو خطافات React)
  const isReactComponent = 
    /(?:function|const|class)\s+[A-Z]\w*/.test(cleanedCode) || 
    /return\s*\(?\s*<[A-Za-z]/.test(cleanedCode) ||
    /useState|useEffect|useMemo|useCallback|useRef|useReducer/.test(cleanedCode) ||
    /<[A-Z]\w*[^>]*>/.test(cleanedCode) ||
    /<(?:div|section|main|article|button|span|p|h[1-6])\b[^>]*className=/.test(cleanedCode);

  // فحص هل الكود يمثل وثيقة HTML متكاملة بـ DOCTYPE أو <html>
  const isFullHtmlDoc = /^\s*<!DOCTYPE\s+html/i.test(trimmed) || /^\s*<html\b/i.test(trimmed);

  // 1. مسار تشغيل مكونات React الحية عبر Babel ومحرك React UMD
  if (isReactComponent) {
    // تحديد المكون الجذري المراد تشغيله
    let rootComponentName = null;
    const priorityNames = [
      'App', 'StoreCatalog', 'UserDashboard', 'MembersDirectory', 
      'Catalog', 'Main', 'Demo', 'Example', 'Root', 'Dashboard', 
      'AppTree', 'ProductCatalog', 'ShopApp'
    ];
    for (const name of priorityNames) {
      const regex = new RegExp(`(?:function|const)\\s+${name}\\b`);
      if (regex.test(cleanedCode)) {
        rootComponentName = name;
        break;
      }
    }

    // إذا لم نجد اسماً ذا أولوية، نأخذ آخر مكون برأسه حرف كبير تم تعريفه (وهو المكون الجامع عادة في شروحات React)
    if (!rootComponentName) {
      const allCompMatches = Array.from(cleanedCode.matchAll(/(?:function|const)\s+([A-Z]\w*)/g)).map(m => m[1]);
      if (allCompMatches.length > 0) {
        rootComponentName = allCompMatches[allCompMatches.length - 1];
      }
    }

    // إذا كان كود JSX نقي بدون غلاف دالة مكون، نغلفه تلقائياً
    let finalExecutableCode = cleanedCode;
    if (!rootComponentName) {
      rootComponentName = 'LiveDemoApp';
      finalExecutableCode = `function LiveDemoApp() {\n  return (\n    <div className="demo-wrapper">\n      ${cleanedCode}\n    </div>\n  );\n}`;
    }

    return `<!DOCTYPE html>
<html dir="rtl" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Live Preview</title>
  <!-- Google Fonts: Cairo & Tajawal & Fira Code -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Tajawal:wght@400;500;700&family=Fira+Code:wght@400;600&display=swap" rel="stylesheet">
  <!-- Tailwind CSS Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
            mono: ['Fira Code', 'Consolas', 'monospace']
          }
        }
      }
    }
  </script>
  <!-- React 18 & ReactDOM 18 UMD -->
  <script crossorigin src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
  <script crossorigin src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
  <!-- Babel Standalone للترجمة المباشرة للـ JSX -->
  <script crossorigin src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.24.4/babel.min.js"></script>
  <style>
    ${IFRAME_DARK_STYLES}
  </style>
</head>
<body>
  <!-- حاوية تركيب مكون React -->
  <div id="root">
    <div id="loading-state" style="display: flex; align-items: center; justify-content: center; gap: 10px; padding: 36px; color: #94a3b8; font-size: 13px;">
      <span style="display: inline-block; width: 18px; height: 18px; border: 2px solid #38bdf8; border-top-color: transparent; border-radius: 50%; animation: spin 0.8s linear infinite;"></span>
      <span>جاري تجميع وتشغيل مكون React الحي...</span>
    </div>
  </div>

  <!-- صندوق التقاط الأخطاء التفاعلي -->
  <div id="runtime-error-box" style="display: none; margin: 16px auto; max-width: 650px; padding: 16px; background: rgba(244, 63, 94, 0.1); border: 1px solid rgba(244, 63, 94, 0.35); border-radius: 14px; color: #fca5a5; font-size: 12px; font-family: monospace; direction: ltr; text-align: left; line-height: 1.6;"></div>

  <script type="text/babel">
    (function() {
      try {
        const { 
          useState, 
          useEffect, 
          useMemo, 
          useCallback, 
          useRef, 
          useReducer, 
          useContext, 
          createContext,
          useId,
          useTransition,
          useDeferredValue
        } = React;

        ${finalExecutableCode}

        const rootContainer = document.getElementById('root');
        if (rootContainer && typeof ${rootComponentName} !== 'undefined') {
          rootContainer.innerHTML = '';
          const root = ReactDOM.createRoot(rootContainer);
          root.render(<${rootComponentName} />);
        } else if (rootContainer) {
          rootContainer.innerHTML = '<div style="color:#fbbf24; padding:20px; text-align:center;">تعذر العثور على المكون الرئيسي لتشغيله.</div>';
        }
      } catch (err) {
        console.error('React Live Preview Error:', err);
        const errBox = document.getElementById('runtime-error-box');
        if (errBox) {
          errBox.style.display = 'block';
          errBox.innerHTML = '<strong>❌ خطأ أثناء تنفيذ مكون React:</strong><br/>' + (err.message || String(err));
        }
      }
    })();
  </script>

  <script>
    // إرسال تحديثات الارتفاع للنافذة الأم لضبط الارتفاع تلقائياً دون قص المحتوى
    function notifyHeight() {
      const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      if (window.parent) {
        window.parent.postMessage({ type: 'LIVE_PREVIEW_HEIGHT', height: h }, '*');
      }
    }
    window.addEventListener('load', () => {
      notifyHeight();
      setTimeout(notifyHeight, 150);
      setTimeout(notifyHeight, 500);
      setTimeout(notifyHeight, 1200);
    });
    window.addEventListener('resize', notifyHeight);
  </script>
</body>
</html>`;
  }

  // 2. مسار وثائق وعناصر HTML التفاعلية (HTML + CSS + Scripts)
  const hasInteractiveHtml = isFullHtmlDoc || /<(?:div|button|form|input|section|main|article|header|table|canvas|svg|style|p|h[1-6]|script)\b/i.test(trimmed);

  if (hasInteractiveHtml) {
    return `<!DOCTYPE html>
<html dir="rtl" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live HTML Preview</title>
  <!-- Google Fonts: Cairo & Tajawal -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Tajawal:wght@400;500;700&family=Fira+Code:wght@400;600&display=swap" rel="stylesheet">
  <!-- Tailwind CSS Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
            mono: ['Fira Code', 'Consolas', 'monospace']
          }
        }
      }
    }
  </script>
  <style>${IFRAME_DARK_STYLES}</style>
</head>
<body>
  ${trimmed}
  <script>
    function notifyHeight() {
      const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      if (window.parent) {
        window.parent.postMessage({ type: 'LIVE_PREVIEW_HEIGHT', height: h }, '*');
      }
    }
    window.addEventListener('load', () => {
      notifyHeight();
      setTimeout(notifyHeight, 150);
      setTimeout(notifyHeight, 500);
    });
    window.addEventListener('resize', notifyHeight);
  </script>
</body>
</html>`;
  }

  // 3. مسار تشغيل سكربتات JavaScript الحية ومخرجات الكونسول
  const escapedCode = trimmed
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  return `<!DOCTYPE html>
<html dir="rtl" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    ${IFRAME_DARK_STYLES}
    pre code {
      font-family: 'Fira Code', 'Cascadia Code', Consolas, Monaco, monospace;
      font-size: 13px;
      line-height: 1.7;
    }
  </style>
</head>
<body>
  <div style="background: #020617; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.4); max-width: 680px; margin: 0 auto;">
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: #0f172a; border-bottom: 1px solid #1e293b;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: #38bdf8; display: inline-block;"></span>
        <span style="font-size: 12px; font-weight: bold; color: #38bdf8;">محاكي التشغيل البرمجي ومخرجات الكود</span>
      </div>
      <button onclick="runCode()" style="background: #0284c7; color: white; border: none; border-radius: 8px; padding: 6px 14px; font-size: 11px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 6px;">
        ▶ تشغيل الكود
      </button>
    </div>

    <div style="padding: 16px; background: #030712; border-bottom: 1px solid #1e293b;">
      <pre style="margin: 0; padding: 0; direction: ltr; text-align: left; overflow-x: auto; color: #e2e8f0; white-space: pre-wrap; word-break: break-word;"><code>${escapedCode}</code></pre>
    </div>

    <div style="padding: 14px; background: #020617;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 11px; color: #94a3b8;">
        <span style="font-weight: bold;">مخرجات الكونسول (Console Output):</span>
        <span id="run-status" style="color: #10b981; font-weight: bold;">جاهز للتشغيل</span>
      </div>
      <div id="console-output" style="background: #000000; border: 1px solid #0f172a; border-radius: 10px; padding: 12px; font-family: monospace; font-size: 12px; color: #38bdf8; min-height: 52px; max-height: 220px; overflow-y: auto; direction: ltr; text-align: left; line-height: 1.6;">
        <span style="color: #64748b; font-style: italic;">// اضغط على زر تشغيل الكود لرؤية النتيجة...</span>
      </div>
    </div>
  </div>

  <script>
    function printLog(msg, type) {
      const out = document.getElementById('console-output');
      if (!out) return;
      const row = document.createElement('div');
      row.style.marginBottom = '4px';
      row.style.wordBreak = 'break-word';
      if (type === 'error') {
        row.style.color = '#f43f5e';
        row.textContent = '❌ ' + msg;
      } else if (type === 'warn') {
        row.style.color = '#fbbf24';
        row.textContent = '⚠️ ' + msg;
      } else {
        row.style.color = '#38bdf8';
        row.textContent = '❯ ' + msg;
      }
      out.appendChild(row);
      out.scrollTop = out.scrollHeight;
    }

    function runCode() {
      const out = document.getElementById('console-output');
      const status = document.getElementById('run-status');
      if (out) out.innerHTML = '';
      if (status) status.innerText = 'جاري التنفيذ...';

      const oldLog = console.log;
      const oldError = console.error;
      const oldWarn = console.warn;

      console.log = function(...args) {
        oldLog.apply(console, args);
        printLog(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '), 'log');
      };
      console.error = function(...args) {
        oldError.apply(console, args);
        printLog(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '), 'error');
      };
      console.warn = function(...args) {
        oldWarn.apply(console, args);
        printLog(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '), 'warn');
      };

      try {
        const raw = ${JSON.stringify(trimmed)};
        const fn = new Function(raw);
        fn();
        if (status) status.innerText = 'تم التنفيذ بنجاح ✓';
      } catch (err) {
        printLog(err.message, 'error');
        if (status) status.innerText = 'اكتمل مع تنبيهات';
      } finally {
        console.log = oldLog;
        console.error = oldError;
        console.warn = oldWarn;
      }
    }

    window.onload = function() {
      setTimeout(runCode, 50);
      setTimeout(() => {
        const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        if (window.parent) {
          window.parent.postMessage({ type: 'LIVE_PREVIEW_HEIGHT', height: h }, '*');
        }
      }, 150);
    };
  </script>
</body>
</html>`;
}

export default function LiveCodePreview({ initialCode, title = "المعاينة التفاعلية المباشرة (Live Runner)" }) {
  const showToast = useToast();
  const [code, setCode] = useState(initialCode);
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' | 'code'
  const [key, setKey] = useState(0);
  const [copied, setCopied] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(280);
  const iframeRef = useRef(null);

  useEffect(() => {
    setCode(initialCode);
    setKey(prev => prev + 1);
  }, [initialCode]);

  // الاستماع لرسائل ضبط الارتفاع التلقائي القادمة من الـ iframe
  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && e.data.type === 'LIVE_PREVIEW_HEIGHT' && typeof e.data.height === 'number') {
        const h = Math.max(180, Math.min(e.data.height + 32, 750));
        setIframeHeight(h);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleIframeLoad = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const doc = iframeRef.current.contentWindow.document;
        if (doc && doc.body) {
          const updateHeight = () => {
            const contentH = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
            if (contentH > 60) {
              setIframeHeight(Math.min(contentH + 32, 720));
            }
          };
          updateHeight();
          setTimeout(updateHeight, 150);
          setTimeout(updateHeight, 500);
        }
      }
    } catch {
      // تجاهل قيود الـ sandbox للأمان
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setKey(prev => prev + 1);
    if (showToast) showToast("تمت إعادة تعيين المعاينة للكود الأصلي ⟲", "info");
  };

  const handleCopyCode = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    if (showToast) showToast("تم نسخ كود المعاينة بنجاح! 📋", "success");
  };

  return (
    <div className="rounded-3xl overflow-hidden border border-slate-800/90 bg-slate-900/95 shadow-2xl my-6 transition-all" dir="rtl">
      {/* شريط رأس المحاكي المتطور */}
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-950/90 border-b border-slate-800/80 gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="size-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 shrink-0">
            <Monitor className="size-4" />
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-bold text-white font-sans truncate block">{title}</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[10px] bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full flex items-center gap-1 font-mono">
                <span className="size-1.5 rounded-full bg-cyan-400 animate-ping inline-block"></span>
                محرك المعاينة المباشرة (Live Engine)
              </span>
            </div>
          </div>
        </div>

        {/* أزرار التبديل وأدوات التحكم */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* تبديل العرض بين المعاينة والكود */}
          <div className="flex items-center bg-slate-900 border border-slate-800 p-0.5 rounded-xl">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'preview' 
                  ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="size-3.5 text-cyan-400" />
              <span>معاينة الواجهة</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'code' 
                  ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="size-3.5 text-cyan-400" />
              <span>الكود المصدري</span>
            </button>
          </div>

          {/* زر نسخ الكود */}
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
            title="نسخ كود المعاينة"
          >
            {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5 text-slate-400" />}
            <span>{copied ? "تم النسخ" : "نسخ الكود"}</span>
          </button>

          {/* زر إعادة التعيين */}
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
            title="إعادة تعيين الكود الأصلي"
          >
            <RotateCcw className="size-3.5 text-amber-400" />
            <span>إعادة تعيين</span>
          </button>
        </div>
      </div>

      {/* منطقة المحتوى: المعاينة الحية أو الكود المصدري */}
      {activeTab === 'preview' ? (
        <div className="p-3 sm:p-5 bg-slate-950/70">
          <div className="border border-slate-800/90 rounded-2xl overflow-hidden bg-[#0b0f19] min-h-[190px] shadow-inner">
            <iframe
              ref={iframeRef}
              key={key}
              onLoad={handleIframeLoad}
              srcDoc={generateSrcDoc(code)}
              title="React Live Component Preview"
              sandbox="allow-scripts allow-modals allow-same-origin"
              style={{ height: `${iframeHeight}px` }}
              className="w-full border-none block transition-all duration-200"
            />
          </div>
          
          <div className="flex items-center justify-between mt-3 text-xs text-slate-400">
            <p className="flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-cyan-400" />
              <span>معاينة تفاعلية حية كاملة التنسيق ومجهزة بمحرك React و Tailwind CSS.</span>
            </p>
            <span className="font-mono text-[10px] text-cyan-400/80 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded-md hidden sm:inline">
              React + Tailwind Playground
            </span>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-6 bg-slate-950/90" dir="ltr">
          <pre className="text-xs font-mono text-slate-200 bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto max-h-[450px] leading-relaxed">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
