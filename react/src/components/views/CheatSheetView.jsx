// src/components/views/CheatSheetView.jsx
import React, { useState } from 'react';
import { BookMarked, Search, Copy, Check } from 'lucide-react';

export default function CheatSheetView({ cheatSheet = [] }) {
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [filterQuery, setFilterQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = ["الكل", ...new Set(cheatSheet.map(item => item.category))];

  const handleCopy = (syntax, idx) => {
    navigator.clipboard.writeText(syntax);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const filteredItems = cheatSheet.filter(item => {
    const matchesCategory = selectedCategory === "الكل" || item.category === selectedCategory;
    const matchesSearch = item.syntax.toLowerCase().includes(filterQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(filterQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(filterQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn">
      {/* رأس الجدول */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
            <BookMarked className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">جدول المرجع السريع (Cheat Sheet)</h2>
            <p className="text-xs text-slate-400">أهم 20 أمراً وصيغة برمجية في HTML و CSS و أدوات التطوير للنسخ الفوري</p>
          </div>
        </div>

        {/* فلاتر التصنيف وشريط البحث */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="ابحث في الأوامر والصيغ المرجعية..."
              className="w-full bg-slate-950 border border-slate-700 text-xs rounded-xl py-2.5 pr-9 pl-4 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            <Search className="w-4 h-4 text-slate-500 absolute right-3 top-3" />
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap text-xs px-3 py-2 rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* جدول البيانات */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
                <th className="p-3.5 font-bold">التصنيف</th>
                <th className="p-3.5 font-bold">الصيغة / الكود</th>
                <th className="p-3.5 font-bold">الوظيفة والشرح</th>
                <th className="p-3.5 text-center font-bold">نسخ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 text-slate-400 font-semibold text-[11px] whitespace-nowrap">
                    {item.category}
                  </td>
                  <td className="p-3.5 font-mono text-cyan-300 whitespace-nowrap" dir="ltr">
                    <code className="bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                      {item.syntax}
                    </code>
                  </td>
                  <td className="p-3.5 text-slate-300 leading-relaxed">
                    {item.description}
                  </td>
                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => handleCopy(item.syntax, idx)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer inline-block"
                      title="نسخ الصيغة"
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

