// src/components/lesson/LiveCodePreview.jsx
import React, { useState } from 'react';
import { Play, RotateCcw, Terminal, CheckCircle2 } from 'lucide-react';

export default function LiveCodePreview({ initialCode, expectedOutput }) {
  const [code, setCode] = useState(initialCode || '');
  const [output, setOutput] = useState(expectedOutput || '');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    const logs = [];

    const mockConsole = {
      log: (...args) => logs.push(args.map(a => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' ')),
      error: (...args) => logs.push(`[ERROR] ${args.join(' ')}`),
      warn: (...args) => logs.push(`[WARN] ${args.join(' ')}`)
    };

    try {
      if (code.includes('express()') || code.includes('app.listen') || code.includes('router.') || code.includes('require(') || code.includes('import ')) {
        setTimeout(() => {
          setOutput(expectedOutput || `[Express.js Server v5.x]\nخادم Express يستمع للطلبات على Port 3000...\n${logs.join('\n')}`);
          setIsRunning(false);
        }, 300);
      } else {
        const fn = new Function('console', code);
        fn(mockConsole);
        setTimeout(() => {
          setOutput(logs.join('\n') || (expectedOutput || 'تم تنفيذ الكود بنجاح دون أخطاء'));
          setIsRunning(false);
        }, 200);
      }
    } catch (err) {
      setOutput(`[Syntax/Runtime Error]: ${err.message}`);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode || '');
    setOutput(expectedOutput || '');
  };

  return (
    <div className="my-6 rounded-2xl border border-amber-500/30 bg-slate-950 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-slate-200">محاكي خادم Express.js التفاعلي (Live Server Simulator)</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>إعادة ضبط</span>
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-md shadow-amber-500/20 cursor-pointer disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isRunning ? "جاري التشغيل..." : "تشغيل الخادم ▶"}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-slate-800">
        <div className="p-3 bg-slate-950/80">
          <div className="text-[10px] text-slate-400 font-mono mb-1.5 flex items-center justify-between">
            <span>محرر الكود (قابل للتعديل):</span>
            <span className="text-amber-400 font-bold">server.js</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={10}
            className="w-full bg-slate-900/90 text-slate-200 font-mono text-xs p-3 rounded-xl border border-slate-800 focus:outline-none focus:border-amber-500 resize-none leading-relaxed"
            dir="ltr"
          />
        </div>

        <div className="p-3 bg-slate-950 flex flex-col">
          <div className="text-[10px] text-slate-400 font-mono mb-1.5 flex items-center justify-between">
            <span>سجل استجابة الخادم (Server Console Logs):</span>
            <span className="text-amber-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Express Listener
            </span>
          </div>
          <div 
            className="flex-1 bg-black/90 text-amber-300 font-mono text-xs p-3 rounded-xl border border-slate-800/80 overflow-y-auto whitespace-pre-wrap leading-relaxed shadow-inner min-h-[140px]"
            dir="ltr"
          >
            {output}
          </div>
        </div>
      </div>
    </div>
  );
}
