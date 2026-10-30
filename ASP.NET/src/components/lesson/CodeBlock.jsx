// src/components/lesson/CodeBlock.jsx
import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { highlightCodeLine } from '../../utils/codeHighlighter.jsx';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function CodeBlock({ code, title = "شفرة برمجية توضيحية", language = "csharp" }) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      showToast("تم نسخ الكود إلى الحافظة بنجاح! 📋", "success", 2000);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast("تعذر نسخ الكود تلقائياً", "error");
    }
  };

  const lines = (code || '').split('\n');

  return (
    <div className="my-5 rounded-2xl overflow-hidden border border-purple-500/20 bg-[#080b1a]/95 shadow-xl transition-all">
      {/* شريط الأدوات العلوي */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f1430]/90 border-b border-purple-500/15 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-purple-400" />
          <span className="font-semibold text-slate-200 font-sans">{title}</span>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
            {language}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 hover:bg-purple-600/30 text-slate-200 hover:text-white transition-all text-xs font-sans cursor-pointer border border-purple-500/20"
          title="نسخ الكود"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-bold">تم النسخ ✓</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-purple-400" />
              <span>نسخ الكود</span>
            </>
          )}
        </button>
      </div>

      {/* منطقة الأسطر البرمجية */}
      <div className="p-4 overflow-x-auto font-mono text-xs sm:text-[13px] leading-relaxed text-slate-100" dir="ltr">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-purple-950/20 transition-colors">
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
