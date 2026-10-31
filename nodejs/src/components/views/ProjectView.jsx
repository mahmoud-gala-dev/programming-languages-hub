// src/components/views/ProjectView.jsx
import React, { useState } from 'react';
import { FolderGit2, CheckCircle2, Download, Terminal, Layers, Server, Code, FileText } from 'lucide-react';
import CodeBlock from '../lesson/CodeBlock.jsx';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function ProjectView({ sectionData, currentSection, onBackToLessons }) {
  const section = currentSection || sectionData;
  const showToast = useToast();
  const [selectedFileIdx, setSelectedFileIdx] = useState(0);

  const miniProj = section?.miniProject || {};
  const fullProj = section?.project || {};

  const title = miniProj.title || fullProj.title || "مشروع تطبيقي متكامل";
  const scenario = fullProj.scenario || miniProj.description || "بناء مشروع عملي يدمج المفاهيم البرمجية المكتسبة في هذا القسم.";
  const difficulty = miniProj.difficulty || "متوسط";
  const techStack = miniProj.techStack || ["Node.js", "JavaScript"];
  const directoryStructure = miniProj.directoryStructure || "";
  const codeFiles = miniProj.codeFiles || [];
  const stepsToRun = miniProj.stepsToRun || fullProj.requirements || [];
  const completeSolution = fullProj.completeSolution || (codeFiles[0]?.code || "");

  const handleDownloadCode = () => {
    const blob = new Blob([completeSolution], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${section?.id ? `section_${section.id}_project` : 'project_solution'}.js`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("تم تنزيل الشفرة المصدرية للمشروع بنجاح! 🚀", "success");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn text-slate-100" dir="rtl">
      
      {/* الترويسة */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              المشروع التطبيقي للقسم (Mini-Project)
            </span>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
              مستوى: {difficulty}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-2">
            {title}
          </h1>
          <p className="text-xs text-slate-400 mt-1">{section?.title}</p>
        </div>

        <button
          onClick={onBackToLessons}
          className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer shrink-0"
        >
          العودة للدروس ↩
        </button>
      </div>

      {/* سيناريو المشروع والتقنيات */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-start gap-3">
            <Server className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-sm font-bold text-white mb-1">سيناريو المشروع العملي</h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">{scenario}</p>
            </div>
          </div>
          <button
            onClick={handleDownloadCode}
            className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl transition-all shadow-md shadow-emerald-500/20 cursor-pointer shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>تنزيل الحل الكامل</span>
          </button>
        </div>

        {/* حزمة التقنيات */}
        {techStack.length > 0 && (
          <div>
            <h4 className="text-xs font-bold text-emerald-400 mb-2">حزمة التقنيات المستخدمة:</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800 px-3 py-1 rounded-xl"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* هيكل المجلدات */}
        {directoryStructure && (
          <div>
            <h4 className="text-xs font-bold text-emerald-400 mb-2">هيكل الملفات والمجلدات المقترح:</h4>
            <pre className="p-4 bg-slate-950 text-emerald-300 font-mono text-xs rounded-2xl border border-slate-800 overflow-x-auto leading-relaxed" dir="ltr">
              {directoryStructure}
            </pre>
          </div>
        )}

        {/* خطوات التشغيل والمتطلبات */}
        {stepsToRun.length > 0 && (
          <div>
            <h4 className="text-xs font-bold text-emerald-400 mb-2">خطوات التنفيذ والتشغيل:</h4>
            <div className="space-y-2">
              {stepsToRun.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    {idx + 1}
                  </div>
                  <span className="text-xs text-slate-300 font-sans leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ملفات الكود للمشروع */}
      {codeFiles.length > 0 && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4 mb-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">الملفات المصدرية للمشروع ({codeFiles.length})</h3>
            </div>

            {codeFiles.length > 1 && (
              <div className="flex gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
                {codeFiles.map((f, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedFileIdx(idx)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      selectedFileIdx === idx
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {f.filename}
                  </button>
                ))}
              </div>
            )}
          </div>

          {codeFiles[selectedFileIdx] && (
            <div className="space-y-3">
              <p className="text-xs text-slate-300 font-sans">
                {codeFiles[selectedFileIdx].explanation}
              </p>
              <CodeBlock
                code={codeFiles[selectedFileIdx].code}
                title={codeFiles[selectedFileIdx].filename}
                language="javascript"
              />
            </div>
          )}
        </div>
      )}

      {/* الحل النموذجي المتكامل */}
      {completeSolution && (!codeFiles.length || completeSolution !== codeFiles[0]?.code) && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">الكود البرمجي الكامل والحل النموذجي (Complete Solution)</h3>
            </div>
          </div>
          <CodeBlock
            code={completeSolution}
            title={`${title} - Complete Solution`}
            language="javascript"
          />
        </div>
      )}

    </div>
  );
}