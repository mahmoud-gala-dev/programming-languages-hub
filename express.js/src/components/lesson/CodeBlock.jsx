// src/components/lesson/CodeBlock.jsx
import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { highlightCodeLine } from '../../utils/codeHighlighter.jsx';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function CodeBlock({ code, title = "شفرة Express.js توضيحية", language = "javascript" }) {
  const [copied, setCopied] = useState(false);
  const showToast = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      showToast("تم نسخ الكود بنجاح! 📋", "success", 2000);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast("تعذر نسخ الكود تلقائياً", "error");
    }
  };

  const lines = (code || '').split('\n');

  return (
    <div className="my-5 rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950/90 shadow-xl transition-all">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-amber-400" />
          <span className="font-semibold text-slate-200 font-sans">{title}</span>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
            {language}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all text-xs font-sans cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400">تم النسخ</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>نسخ الكود</span>
            </>
          )}
        </button>
      </div>

      <div className="p-4 overflow-x-auto font-mono text-xs sm:text-[13px] leading-relaxed text-slate-100" dir="ltr">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                <td className="w-8 pr-4 text-right select-none text-slate-600 font-mono text-[11px] align-top">
                  {idx + 1}
                </td>
                <td className="whitespace-pre">
                  {highlightCodeLine(line)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
