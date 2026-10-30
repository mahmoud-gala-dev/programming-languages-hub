// src/components/views/ProjectView.jsx
import React, { useState } from 'react';
import { FolderGit2, CheckCircle2, Download, Terminal, Layers, Server, Database, Shield, Zap } from 'lucide-react';
import CodeBlock from '../lesson/CodeBlock.jsx';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function ProjectView({ onBackToLessons }) {
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);
  const showToast = useToast();

  const projects = [
    {
      id: "proj-1",
      title: "المشروع 1: نظام إدارة المنتجات المتكامل (Store REST API)",
      desc: "بناء واجهة برمجية متكاملة لمتجر إلكتروني باستخدام Express و PostgreSQL و Prisma مع دعم البحث والفلترة وتخزين Redis المؤقت.",
      difficulty: "متوسط",
      tech: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Redis", "Zod"],
      structure: `ecommerce-api/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── redis.js
│   ├── controllers/
│   │   └── productController.js
│   ├── middlewares/
│   │   ├── errorHandler.js
│   │   └── validateRequest.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── services/
│   │   └── productService.js
│   └── app.js
├── prisma/
│   └── schema.prisma
├── package.json
└── .env`,
      codeSample: `// src/controllers/productController.js
import { productService } from '../services/productService.js';

export const getProducts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search = '', category } = req.query;
    const result = await productService.findAll({
      page: Number(page),
      limit: Number(limit),
      search,
      category
    });
    
    res.status(200).json({
      status: 'success',
      data: result.products,
      pagination: result.pagination
    });
  } catch (error) {
    next(error);
  }
};`
    },
    {
      id: "proj-2",
      title: "المشروع 2: خادم المحادثة الفورية المشفر (Real-time Socket Chat)",
      desc: "بناء منصة تواصل فورية بالاعتماد على WebSockets و Socket.IO مع إدارة الغرف وحالة المستخدمين (Online Status) وتخزين سجل الرسائل.",
      difficulty: "متقدم",
      tech: ["Node.js", "Socket.IO", "Redis Pub/Sub", "MongoDB", "JWT"],
      structure: `chat-server/
├── src/
│   ├── sockets/
│   │   ├── chatHandler.js
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Message.js
│   │   └── Room.js
│   ├── server.js
│   └── app.js
├── package.json
└── .env`,
      codeSample: `// src/sockets/chatHandler.js
export const registerChatHandlers = (io, socket) => {
  const { user } = socket;

  socket.on('join_room', (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user_joined', { userId: user.id, username: user.name });
  });

  socket.on('send_message', async (data) => {
    const messagePayload = {
      senderId: user.id,
      text: data.text,
      timestamp: new Date()
    };
    
    // بث الرسالة لكافة أعضاء الغرفة
    io.to(data.roomId).emit('new_message', messagePayload);
  });
};`
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
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            المشروعات التطبيقية الحقيقية (Real-World Projects)
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-2">
            مستودع المشروعات الهندسية الكاملة
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

      {/* شريط اختيار المشروع */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => setSelectedProjectIdx(idx)}
            className={`px-5 py-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
              selectedProjectIdx === idx
                ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20"
                : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
            }`}
          >
            {proj.title}
          </button>
        ))}
      </div>

      {/* تفاصيل المشروع النشط */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold text-white">{activeProj.title}</h2>
            <p className="text-xs text-slate-400 mt-1">{activeProj.desc}</p>
          </div>
          <button
            onClick={handleDownloadCode}
            className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl transition-all shadow-md shadow-emerald-500/20 cursor-pointer shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>تنزيل نموذج الكود</span>
          </button>
        </div>

        {/* التقنيات المستخدمة */}
        <div>
          <h4 className="text-xs font-bold text-emerald-400 mb-2">حزمة التقنيات (Tech Stack):</h4>
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

        {/* هيكل المجلدات */}
        <div>
          <h4 className="text-xs font-bold text-emerald-400 mb-2">هيكل الملفات والمجلدات المقترح:</h4>
          <pre className="p-4 bg-slate-950 text-emerald-300 font-mono text-xs rounded-2xl border border-slate-800 overflow-x-auto leading-relaxed" dir="ltr">
            {activeProj.structure}
          </pre>
        </div>

        {/* نموذج كود تطبيقي */}
        <div>
          <h4 className="text-xs font-bold text-emerald-400 mb-2">مقتطف من شفرة منطق الأعمال:</h4>
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
