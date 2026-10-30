// src/components/views/CheatSheetView.jsx
import React, { useState } from 'react';
import { Search, Copy, Check, Terminal, FileCode, Database, Shield, Zap } from 'lucide-react';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function CheatSheetView({ onBackToLessons }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCmd, setCopiedCmd] = useState(null);
  const showToast = useToast();

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCmd(code);
    showToast("تم نسخ الأمر إلى الحافظة! 📋", "success", 1800);
    setTimeout(() => setCopiedCmd(null), 1800);
  };

  const cheatItems = [
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
    },
    {
      category: "Core Modules: Files",
      cmd: "import fs from 'node:fs/promises';\nconst data = await fs.readFile('file.json', 'utf-8');",
      desc: "قراءة محتوى ملف نصي غير متزامن بدون حظر Event Loop",
      type: "code"
    },
    {
      category: "Core Modules: Streams",
      cmd: "import { pipeline } from 'node:stream/promises';\nawait pipeline(readStream, transformStream, writeStream);",
      desc: "ربط ومعالجة تدفقات البيانات مع إدارة تلقائية لـ Backpressure وتنظيف الأخطاء",
      type: "code"
    },
    {
      category: "Express.js Routing",
      cmd: "app.get('/api/users/:id', async (req, res, next) => {\n  const { id } = req.params;\n  res.json({ success: true, id });\n});",
      desc: "إنشاء مسار GET لجلب مستخدم حسب المعرف الرقمي أو النصي",
      type: "code"
    },
    {
      category: "Error Handling Middleware",
      cmd: "app.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(err.statusCode || 500).json({ error: err.message });\n});",
      desc: "وسيط معالجة الأخطاء الشامل Global Error Handler في Express",
      type: "code"
    },
    {
      category: "JWT Authentication",
      cmd: "const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '15m' });",
      desc: "توقيع رمز Access Token مشفر ينتهي بعد 15 دقيقة",
      type: "code"
    },
    {
      category: "Password Hashing",
      cmd: "const hash = await bcrypt.hash(plainPassword, 12);\nconst isMatch = await bcrypt.compare(plainPassword, hash);",
      desc: "تشفير كلمات المرور باستخدام خوارزمية bcrypt مع ملح Salt عشوائي",
      type: "code"
    },
    {
      category: "PostgreSQL Parameterized Query",
      cmd: "const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);",
      desc: "استعلام آمن محصن من ثغرات SQL Injection باستخدام المعاملات المقيدة",
      type: "code"
    },
    {
      category: "Redis Caching",
      cmd: "await redis.set(`user:${id}`, JSON.stringify(userData), 'EX', 3600);",
      desc: "تخزين مؤقت لبيانات المستخدم مع مدة صلاحية (TTL) ساعة واحدة",
      type: "code"
    },
    {
      category: "Validation with Zod",
      cmd: "const userSchema = z.object({\n  email: z.string().email(),\n  password: z.string().min(8)\n});",
      desc: "تعريف هيكل بيانات محكم والتحقق من صحة المدخلات في وقت التشغيل",
      type: "code"
    },
    {
      category: "Graceful Shutdown",
      cmd: "process.on('SIGTERM', async () => {\n  await server.close();\n  await db.disconnect();\n  process.exit(0);\n});",
      desc: "الاستماع لإشارات الإيقاف لإنهاء الطلبات المفتوحة وإغلاق قواعد البيانات بأمان",
      type: "code"
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
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            ورقة المرجع السريع (Cheat Sheet)
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-2">
            دليل الأوامر والشفرات السريعة لـ Node.js
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

      {/* شريط البحث المباشر */}
      <div className="relative mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="ابحث في الأوامر، الدوال، أو الشروحات..."
          className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-3 pr-10 pl-4 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
        />
        <Search className="w-4 h-4 text-slate-400 absolute top-3.5 right-3.5" />
      </div>

      {/* قائمة البطاقات السريعة */}
      <div className="space-y-4">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/40 transition-all shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-emerald-400 font-sans">
                {item.category}
              </span>
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
        ))}
      </div>

    </div>
  );
}
