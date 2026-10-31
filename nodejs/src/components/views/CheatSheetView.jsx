// src/components/views/CheatSheetView.jsx
import React, { useState } from 'react';
import { Search, Copy, Check, Terminal, FileCode, Zap, Layers } from 'lucide-react';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function CheatSheetView({ sectionData, currentSection, onBackToLessons }) {
  const section = currentSection || sectionData;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedCmd, setCopiedCmd] = useState(null);
  const showToast = useToast();

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCmd(code);
    showToast("تم نسخ الأمر إلى الحافظة! 📋", "success", 1800);
    setTimeout(() => setCopiedCmd(null), 1800);
  };

  const rawItems = section?.cheatSheet?.items || section?.cheatSheet?.entries || [];
  const cheatItems = rawItems.length > 0 ? rawItems.map(item => ({
    category: item.category || 'عام',
    cmd: item.commandOrSyntax || item.command || item.cmd || item.code || '',
    desc: item.description || item.desc || '',
    type: item.type || 'code'
  })) : [
    {
      category: "Node.js CLI & Execution",
      cmd: "node --watch index.js",
      desc: "تشغيل ملف Node مع إعادة التشغيل التلقائي المدمجة عند حفظ التعديلات",
      type: "cli"
    },
    {
      category: "Node.js CLI & Execution",
      cmd: "node --env-file=.env index.js",
      desc: "تحميل المتغيرات البيئية من ملف .env مباشرة بدون حزم خارجية",
      type: "cli"
    }
  ];

  const categories = ['all', ...new Set(cheatItems.map(i => i.category))];

  const filtered = cheatItems.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = item.cmd.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn text-slate-100" dir="rtl">
      
      {/* الترويسة */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            ورقة المرجع السريع (Cheat Sheet)
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-2">
            {section?.cheatSheet?.title || `دليل الأوامر والشفرات السريعة: ${section?.title || 'Node.js'}`}
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            أهم الأوامر والصيغ البرمجية الجاهزة للنسخ والاستخدام الفوري
          </p>
        </div>

        <button
          onClick={onBackToLessons}
          className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer shrink-0"
        >
          العودة للدروس ↩
        </button>
      </div>

      {/* شريط البحث وتصفية التصنيفات */}
      <div className="space-y-3 mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث في الأوامر، الدوال، أو الشروحات..."
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-3 pr-10 pl-4 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute top-3.5 right-3.5" />
        </div>

        {categories.length > 2 && (
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat === 'all' ? 'كافة التصنيفات' : cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* قائمة البطاقات السريعة */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="p-8 text-center bg-slate-900/60 border border-slate-800 rounded-2xl text-slate-400 text-xs">
            لا توجد أوامر تطابق استعلام البحث الحالي
          </div>
        ) : (
          filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/40 transition-all shadow-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {item.type === 'cli' ? (
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  ) : item.type === 'concept' ? (
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                  ) : (
                    <FileCode className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                  <span className="text-xs font-bold text-emerald-400 font-sans">
                    {item.category}
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(item.cmd)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition-colors cursor-pointer"
                >
                  {copiedCmd === item.cmd ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">تم النسخ</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-300 mb-3 font-sans leading-relaxed">
                {item.desc}
              </p>

              <pre className="p-3 bg-slate-950 text-emerald-300 font-mono text-xs rounded-xl overflow-x-auto whitespace-pre-wrap border border-slate-800/80 leading-relaxed" dir="ltr">
                {item.cmd}
              </pre>
            </div>
          ))
        )}
      </div>

    </div>
  );
}