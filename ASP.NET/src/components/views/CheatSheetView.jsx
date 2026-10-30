// src/components/views/CheatSheetView.jsx
import React, { useState } from 'react';
import { Table, Copy, Check, ArrowRight, Search, FileText } from 'lucide-react';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function CheatSheetView({ sectionData, onBackToLessons }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedIdx, setCopiedIdx] = useState(null);
  const { showToast } = useToast();

  if (!sectionData) return null;
  const tableData = sectionData.summary?.quickReferenceTable || [];

  const filtered = tableData.filter(item => 
    (item.command || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.purpose || '').includes(searchTerm)
  );

  const handleCopy = async (text, idx) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      showToast(`تم نسخ: ${text} 📋`, 'success');
      setTimeout(() => setCopiedIdx(null), 2000);
    } catch {
      showToast('تعذر النسخ تلقائياً', 'error');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6 animate-in fade-in duration-300" dir="rtl">
      {/* الترويسة وأدوات البحث */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#0b0f24] to-indigo-950/40 border border-purple-500/25 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-1 font-mono">
            <Table className="w-4 h-4" />
            <span>الجدول المرجعي السريع (Quick Reference & Cheat Sheet)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white font-sans">
            أهم الأوامر والصيغ: {sectionData.title}
          </h1>
        </div>

        <button
          onClick={onBackToLessons}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#0f1430] border border-purple-500/30 text-slate-200 hover:text-white transition-all cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للدرس</span>
        </button>
      </div>

      {/* حقل البحث السريع */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="ابحث في الأوامر، الدوال، والصيغ..."
          className="w-full bg-[#080b18] border border-purple-500/20 rounded-2xl pr-11 pl-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 font-sans"
        />
      </div>

      {/* الجدول المرجعي التفاعلي */}
      <div className="rounded-3xl border border-purple-500/20 bg-[#080b18] overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse text-xs">
            <thead>
              <tr className="bg-[#0f1430] border-b border-purple-500/20 text-slate-300 font-sans">
                <th className="py-4 px-6 font-bold w-12 text-center">#</th>
                <th className="py-4 px-6 font-bold w-1/3">الأمر / الصيغة البرمجية (Command / Syntax)</th>
                <th className="py-4 px-6 font-bold">الوظيفة والهدف (Purpose & Usage)</th>
                <th className="py-4 px-6 font-bold w-20 text-center">نسخ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-500/10">
              {filtered.map((item, idx) => (
                <tr key={idx} className="hover:bg-purple-950/15 transition-colors">
                  <td className="py-4 px-6 text-center text-slate-500 font-mono text-[11px]">
                    {idx + 1}
                  </td>
                  <td className="py-4 px-6 font-mono text-purple-300 text-xs font-semibold select-all" dir="ltr">
                    {item.command}
                  </td>
                  <td className="py-4 px-6 text-slate-200 font-sans leading-relaxed">
                    {item.purpose}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => handleCopy(item.command, idx)}
                      className="p-1.5 rounded-lg bg-[#0f1430] hover:bg-purple-600/30 text-slate-300 hover:text-white transition-all cursor-pointer border border-purple-500/20"
                      title="نسخ الأمر"
                    >
                      {copiedIdx === idx ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-slate-500 font-sans">
                    لا توجد أوامر مطابقة لكلمة البحث
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
