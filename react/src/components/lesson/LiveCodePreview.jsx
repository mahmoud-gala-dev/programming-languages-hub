// src/components/lesson/LiveCodePreview.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Eye, Monitor, Copy, Check, Sparkles } from 'lucide-react';
import { useToast } from '../../context/UiFeedbackContext.jsx';

// تنسيقات الـ iframe المعزول لضمان دعم كامل للوضع المظلم وتنعيم شريط التمرير بدقة
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
    padding: 16px;
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
`;

export default function LiveCodePreview({ initialCode, title = "المعاينة التفاعلية المباشرة (Live Runner)" }) {
  const showToast = useToast();
  const [code, setCode] = useState(initialCode);
  const [key, setKey] = useState(0);
  const [copied, setCopied] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(240);
  const iframeRef = useRef(null);

  useEffect(() => {
    setCode(initialCode);
    setKey(prev => prev + 1);
  }, [initialCode]);

  const handleIframeLoad = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const doc = iframeRef.current.contentWindow.document;
        if (doc && doc.body) {
          const updateHeight = () => {
            const contentH = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
            if (contentH > 50) {
              setIframeHeight(Math.min(contentH + 28, 650));
            }
          };
          updateHeight();
          setTimeout(updateHeight, 150);
          setTimeout(updateHeight, 400);

          // مراقبة التغير في محتوى المعاينة التفاعلية ديناميكياً
          if (typeof ResizeObserver !== 'undefined' && doc.body) {
            const ro = new ResizeObserver(() => updateHeight());
            ro.observe(doc.body);
          }
        }
      }
    } catch {
      // sandbox restrictions fallback
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
    <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-xl my-6 transition-all" dir="rtl">
      {/* شريط رأس المحاكي */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
            <Monitor className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-white font-sans">{title}</span>
          <span className="text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
            مباشر في المتصفح
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* زر نسخ الكود */}
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            title="نسخ كود المعاينة"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            <span>{copied ? "تم النسخ" : "نسخ الكود"}</span>
          </button>

          {/* زر إعادة التعيين */}
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            title="إعادة تعيين الكود الأصلي"
          >
            <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
            <span>إعادة تعيين</span>
          </button>
        </div>
      </div>

      {/* منطقة المعاينة الحية عبر iframe معزول وآمن ومدعوم بالوضع المظلم المتكامل */}
      <div className="p-4 sm:p-5 bg-slate-950/60">
        <div className="border border-slate-800/90 rounded-xl overflow-hidden bg-[#0b0f19] min-h-[180px] shadow-inner">
          <iframe
            ref={iframeRef}
            key={key}
            onLoad={handleIframeLoad}
            srcDoc={`<!DOCTYPE html><html dir="rtl" class="dark"><head><meta charset="UTF-8"><style>${IFRAME_DARK_STYLES}</style></head><body>${code}</body></html>`}
            title="Live Preview"
            sandbox="allow-scripts allow-modals"
            style={{ height: `${iframeHeight}px` }}
            className="w-full border-none block transition-all duration-200"
          />
        </div>
        
        <div className="flex items-center justify-between mt-2.5 text-[11px] text-slate-500">
          <p className="flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            هذه المعاينة حقيقية تماماً وتعمل داخل محرك متصفحك مباشرة مع أشرطة تمرير معتمة وناعمة.
          </p>
          <span className="font-mono text-[10px] text-slate-600 hidden sm:inline">HTML/CSS/JS Sandbox</span>
        </div>
      </div>
    </div>
  );
}

