// src/components/views/CheatSheetView.jsx
import React, { useState } from 'react';
import { Search, Copy, Check } from 'lucide-react';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function CheatSheetView({ onBackToLessons }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCmd, setCopiedCmd] = useState(null);
  const showToast = useToast();

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCmd(code);
    showToast("تم نسخ الشفرة بنجاح! 📋", "success", 1800);
    setTimeout(() => setCopiedCmd(null), 1800);
  };

  const cheatItems = [
    {
      category: "Express App Setup",
      cmd: "import express from 'express';\nconst app = express();\napp.use(express.json());\napp.listen(3000, () => console.log('Server on 3000'));",
      desc: "تهيئة خادم Express سريع مع تفعيل تحليل الـ JSON"
    },
    {
      category: "Routing Methods",
      cmd: "router.route('/api/users/:id')\n  .get(getUser)\n  .put(updateUser)\n  .delete(deleteUser);",
      desc: "تجميع العمليات المتعددة على نفس المسار باستخدام router.route"
    },
    {
      category: "Request Data Extraction",
      cmd: "const { id } = req.params;\nconst { search, page } = req.query;\nconst { email, password } = req.body;\nconst token = req.get('Authorization');",
      desc: "قراءة المعاملات، نصوص الاستعلام، كائن الطلب، ورؤوس HTTP"
    },
    {
      category: "Response Methods",
      cmd: "res.status(201).json({ success: true, data });\nres.status(404).send('Not Found');\nres.redirect(301, '/new-path');",
      desc: "إرسال استجابات JSON و Status Codes والتحويل"
    },
    {
      category: "Custom Middleware",
      cmd: "const authMiddleware = (req, res, next) => {\n  if (!req.headers.authorization) return res.status(401).json({ error: 'Unauthorized' });\n  next();\n};",
      desc: "وسيط للتحقق من هوية المستخدم قبل الوصول للـ Controller"
    },
    {
      category: "Global Error Handler",
      cmd: "app.use((err, req, res, next) => {\n  const status = err.statusCode || 500;\n  res.status(status).json({\n    success: false,\n    message: err.message || 'Internal Server Error'\n  });\n});",
      desc: "وسيط معالجة الأخطاء العام والمكون من 4 معاملات"
    },
    {
      category: "Security (Helmet & CORS & Rate Limit)",
      cmd: "import helmet from 'helmet';\nimport cors from 'cors';\nimport rateLimit from 'express-rate-limit';\napp.use(helmet());\napp.use(cors({ origin: 'https://example.com' }));\napp.use('/api/', rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));",
      desc: "تحصين الخادم وتفعيل ترويسات الأمان وتحديد معدل الطلبات"
    },
    {
      category: "Static Files & Downloads",
      cmd: "app.use('/static', express.static('public'));\nres.download('/path/to/report.pdf', 'report.pdf');",
      desc: "تقديم الملفات الثابتة وتنزيل الملفات للعميل"
    }
  ];

  const filtered = cheatItems.filter(item => 
    item.cmd.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn text-slate-100" dir="rtl">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            ورقة المرجع السريع (Cheat Sheet)
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-2">
            دليل شفرات Express.js الجاهزة
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

      <div className="relative mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="ابحث في شفرات Express والوسائط والدوال..."
          className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-3 pr-10 pl-4 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
        />
        <Search className="w-4 h-4 text-slate-400 absolute top-3.5 right-3.5" />
      </div>

      <div className="space-y-4">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/40 transition-all shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-400 font-sans">
                {item.category}
              </span>
              <button
                onClick={() => handleCopy(item.cmd)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition-colors cursor-pointer"
              >
                {copiedCmd === item.cmd ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-amber-400 font-bold">تم النسخ</span>
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

            <pre className="p-3 bg-slate-950 text-amber-300 font-mono text-xs rounded-xl overflow-x-auto whitespace-pre-wrap border border-slate-800/80 leading-relaxed" dir="ltr">
              {item.cmd}
            </pre>
          </div>
        ))}
      </div>

    </div>
  );
}
