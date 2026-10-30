// src/components/views/ProjectView.jsx
import React, { useState } from 'react';
import { Download } from 'lucide-react';
import CodeBlock from '../lesson/CodeBlock.jsx';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function ProjectView({ onBackToLessons }) {
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);
  const showToast = useToast();

  const projects = [
    {
      id: "express-proj-1",
      title: "المشروع 1: نظام إدارة الطلاب (Students Management API)",
      desc: "بناء واجهة REST API كاملة لإدارة الطلاب بـ Express.js مع Router منفصل و Validation وتحكم كامل بالـ HTTP Status Codes.",
      difficulty: "مبتدئ - متوسط",
      tech: ["Express.js", "Node.js", "Zod", "Morgan"],
      structure: `students-api/
├── src/
│   ├── controllers/
│   │   └── studentController.js
│   ├── middlewares/
│   │   ├── errorHandler.js
│   │   └── validateRequest.js
│   ├── routes/
│   │   └── studentRoutes.js
│   └── app.js
├── package.json
└── server.js`,
      codeSample: `// src/controllers/studentController.js
export const getStudents = async (req, res, next) => {
  try {
    const students = [
      { id: 1, name: "أحمد علي", grade: "A" },
      { id: 2, name: "سارة محمد", grade: "A+" }
    ];
    res.status(200).json({ success: true, count: students.length, data: students });
  } catch (error) {
    next(error);
  }
};`
    },
    {
      id: "express-proj-2",
      title: "المشروع 2: متجر إلكتروني Backend متكامل (E-Commerce Backend)",
      desc: "منظومة تجارة إلكترونية كاملة بـ Express 5 و Prisma ORM و PostgreSQL مع مصادقة JWT، سلة شراء، ودفع إلكتروني آمن.",
      difficulty: "متقدم",
      tech: ["Express 5", "TypeScript", "PostgreSQL", "Prisma", "Redis", "JWT"],
      structure: `store-backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   └── app.ts
├── prisma/
│   └── schema.prisma
├── package.json
└── tsconfig.json`,
      codeSample: `// src/routes/orderRoutes.js
import { Router } from 'express';
import { createOrder, getOrderById } from '../controllers/orderController.js';
import { requireAuth } from '../middlewares/authMiddleware.js';

const router = Router();

router.use(requireAuth);
router.route('/')
  .post(createOrder);

router.route('/:id')
  .get(getOrderById);

export default router;`
    }
  ];

  const activeProj = projects[selectedProjectIdx];

  const handleDownloadCode = () => {
    const blob = new Blob([activeProj.codeSample], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeProj.id}_sample.js`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("تم تنزيل الشفرة المصدرية للمشروع بنجاح! 🚀", "success");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn text-slate-100" dir="rtl">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            المشروعات التطبيقية الحقيقية (Real-World Projects)
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-2">
            مستودع المشروعات التطبيقية في Express.js
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            مشروعات برمجية واقعية جاهزة للتنفيذ ومجهزة لـ Portfolio المطورين
          </p>
        </div>

        <button
          onClick={onBackToLessons}
          className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer shrink-0"
        >
          العودة للدروس ↩
        </button>
      </div>

      <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => setSelectedProjectIdx(idx)}
            className={`px-5 py-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
              selectedProjectIdx === idx
                ? "bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20 font-black"
                : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
            }`}
          >
            {proj.title}
          </button>
        ))}
      </div>

      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold text-white">{activeProj.title}</h2>
            <p className="text-xs text-slate-400 mt-1">{activeProj.desc}</p>
          </div>
          <button
            onClick={handleDownloadCode}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black rounded-xl transition-all shadow-md shadow-amber-500/20 cursor-pointer shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>تنزيل نموذج الكود</span>
          </button>
        </div>

        <div>
          <h4 className="text-xs font-bold text-amber-400 mb-2">حزمة التقنيات (Tech Stack):</h4>
          <div className="flex flex-wrap gap-2">
            {activeProj.tech.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800 px-3 py-1 rounded-xl"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-amber-400 mb-2">هيكل الملفات والمجلدات المقترح:</h4>
          <pre className="p-4 bg-slate-950 text-amber-300 font-mono text-xs rounded-2xl border border-slate-800 overflow-x-auto leading-relaxed" dir="ltr">
            {activeProj.structure}
          </pre>
        </div>

        <div>
          <h4 className="text-xs font-bold text-amber-400 mb-2">مقتطف من شفرة المسارات والتحكم:</h4>
          <CodeBlock
            code={activeProj.codeSample}
            title="نموذج من الكود الحقيقي للمشروع"
            language="javascript"
          />
        </div>
      </div>

    </div>
  );
}
