// src/components/views/ProjectView.jsx
import React, { useState } from 'react';
import { FolderGit2, CheckCircle2, Monitor, Code2, Download, ExternalLink } from 'lucide-react';
import CodeBlock from '../lesson/CodeBlock.jsx';
import LiveCodePreview from '../lesson/LiveCodePreview.jsx';

export default function ProjectView({ project }) {
  const [activeTab, setActiveTab] = useState("preview");

  if (!project) return null;

  const handleDownloadFile = () => {
    const blob = new Blob([project.livePreviewCode], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "index.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn">
      {/* رأس المشروع */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-2xl shadow-lg shadow-emerald-500/10">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                مشروع تطبيقي معتمد 🚀
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            onClick={handleDownloadFile}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>تنزيل ملف المشروع (index.html)</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4">
          {project.description}
        </p>
      </div>

      {/* تبويبات التبديل بين المعاينة المباشرة وكود المشروع الكامل */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${
            activeTab === "preview"
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Monitor className="w-4 h-4" />
          <span>المعاينة التفاعلية الحية</span>
        </button>

        <button
          onClick={() => setActiveTab("code")}
          className={`flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${
            activeTab === "code"
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Code2 className="w-4 h-4" />
          <span>الشفرة البرمجية الكاملة مع الشرح</span>
        </button>
      </div>

      {/* محتوى التبويب */}
      {activeTab === "preview" ? (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-4">
            <LiveCodePreview 
              initialCode={project.livePreviewCode} 
              title="موقع الشركة المباشر (جاهز للنشر)" 
            />
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <CodeBlock 
            code={project.livePreviewCode} 
            title="كود صفحة index.html الكامل والمفصل" 
            language="html" 
          />
        </div>
      )}

      {/* الركائز المطبقة في هذا المشروع */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
        <h4 className="text-xs font-bold text-cyan-400 mb-2">
          المهارات والتقنيات التي وظفناها في هذا المشروع:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="flex items-center gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-200">هيكل HTML5 دلالي كامل (header, main, section, footer)</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-200">شريط تنقل مثبت (Sticky Navbar) بـ Flexbox مع تأثير ضبابي</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-200">شبكة بطاقات خدمات متجاوبة تلقائياً بـ CSS Grid</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-200">نموذج اتصال متكامل مع فحص المدخلات التلقائي في المتصفح</span>
          </div>
        </div>
      </div>

    </div>
  );
}

