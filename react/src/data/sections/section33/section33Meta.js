// section33Meta.js - القسم 33: مشاريع متقدمة واحترافية (Advanced & Enterprise Projects)
// البيانات الوصفية، الملخص الشامل، جدول المرجع السريع، والمشروع الختامي التفاعلي

export const SECTION_33_META = {
  summaryRules: [
    {
      ruleNumber: 1,
      title: "العزل الهرمي لتعدد المستأجرين (Strict Multi-Tenancy Isolation)",
      description: "في معمارية SaaS للمؤسسات، يجب ألا تعتمد أبداً على استعلامات قاعدة بيانات بدون حقن إجباري لمعرف المنظمة `organizationId`، ويفضل تفعيل سياسات الأمان على مستوى الصفوف (PostgreSQL Row-Level Security) كدرع حماية نهائي."
    },
    {
      ruleNumber: 2,
      title: "التطبيع الفعال للبيانات في لوحات العمل (Normalized State Engine)",
      description: "تطبيقات مثل Kanban Boards تتطلب تخزين الكيانات في قواميس مفهرسة بالمعرفات ومصفوفات معرفات منفصلة للترتيب، مما يحول كلفة تحديث أو تحريك أي بطاقة إلى O(1) بدلاً من إعادة تصيير الأعمدة المتداخلة."
    },
    {
      ruleNumber: 3,
      title: "التحديث المتفائل الآمن مع إمكانية التراجع (Optimistic UI with Rollback)",
      description: "قدم استجابة فورية للمستخدم في 0 ميلي ثانية عند السحب والإفلات أو إرسال الرسائل، مع الاحتفاظ بلقطة احتياطية (State Snapshot) للتراجع الهادئ الفوري عند فشل اتصال الخادم."
    },
    {
      ruleNumber: 4,
      title: "فصل وسائط الـ Media عن قنوات المقابس اللحظية (Offload Media from WebSockets)",
      description: "لا ترسل الملفات والصور الكبيرة أبداً عبر مقابس WebSockets؛ بل استخدم روابط التخزين السحابي الموقعة مسبقاً (Presigned URLs) للرفع المباشر إلى S3/GCS، ومرر الرابط النهائي فقط عبر المقبس."
    },
    {
      ruleNumber: 5,
      title: "تثبيت موضع التمرير في التمرير اللانهائي العكسي (Reverse Scroll Anchoring)",
      description: "عند جلب رسائل قديمة في تطبيقات المحادثة وإدراجها في أعلى القائمة، قم بتعويض فارق الارتفاع فورياً عبر معادلة `scrollTop += (newHeight - oldHeight)` لمنع القفز البصري المزعج لعين القارئ."
    },
    {
      ruleNumber: 6,
      title: "الأمان المالي عبر خطافات الويب المتكررة الآمنة (Idempotent Webhooks)",
      description: "تعامل دائماً مع Stripe Webhooks كمصدر الحقيقة النهائي لاشتراكات ومدفوعات العملاء، وتحقق من التوقيع الرقمي الصارم عبر النص الخام للطلب `req.text()` لمنع هجمات التزوير."
    },
    {
      ruleNumber: 7,
      title: "مكونات الخادم للبيانات وإجراءات الخادم للتحقق (RSC & Server Actions)",
      description: "استفد من React Server Components لجلب البيانات مباشرة دون حزم JavaScript، واستخدم Server Actions المحمية بمخططات Zod لتنفيذ التعديلات وحماية قاعدة البيانات بنسبة 100%."
    },
    {
      ruleNumber: 8,
      title: "سجلات التدقيق غير القابلة للتعديل للامتثال المؤسسي (Immutable Audit Trails)",
      description: "اجعل جدول سجلات التدقيق (Audit Logs) للإضافة فقط (Append-only) وسجل هوية الفاعل ونوع الحدث وعنوان الـ IP لتحقيق الامتثال الأمني لمعايير SOC2 وISO27001."
    }
  ],
  cheatSheet: [
    { topic: "Next.js App Router", syntax: "src/app/(dashboard)/[orgSlug]/page.tsx", purpose: "تنظيم المسارات في مجموعات منطقية وعزل تخطيط لوحة التحكم عن التسويق" },
    { topic: "Server Components", syntax: "export default async function Page() { ... }", purpose: "جلب بيانات آمن ومباشر من قاعدة البيانات بحجم حزمة صفرية للمتصفح" },
    { topic: "Server Actions", syntax: "'use server'; async function action(formData) { ... }", purpose: "معالجة نماذج الإدخال والتعديلات مباشرة على الخادم دون مسارات API وسيطة" },
    { topic: "Zod Schema Parsing", syntax: "schema.safeParse(Object.fromEntries(formData))", purpose: "التحقق من صحة ونوعية المدخلات على الخادم بطريقة صارمة ونقية" },
    { topic: "Cache Revalidation", syntax: "revalidatePath('/dashboard/[orgSlug]/projects')", purpose: "إبطال الكاش فورياً لتحديث الواجهة فور نجاح إجراء الخادم" },
    { topic: "Edge Middleware", syntax: "export function middleware(req) { ... }", purpose: "فحص رموز الجلسات وحماية المسارات على حوسبة الحافة في 5 ميلي ثانية" },
    { topic: "Prisma Singleton", syntax: "const prisma = global.prisma || new PrismaClient()", purpose: "منع استنفاد اتصالات قاعدة البيانات (Connection Exhaustion) في بيئة التطوير" },
    { topic: "Stripe Webhook Signature", syntax: "stripe.webhooks.constructEvent(rawText, sig, secret)", purpose: "التحقق المشفر من هوية أحداث الدفع لمنع تزوير الاشتراكات" },
    { topic: "Stripe Customer Portal", syntax: "stripe.billingPortal.sessions.create({ customer })", purpose: "بوابة بنكية مشفرة لإدارة البطاقات وتحميل الفواتير بامتثال PCI-DSS" },
    { topic: "Normalized Board State", syntax: "columns: { [id]: { taskIds: [] } }, tasks: { [id]: {} }", purpose: "هيكلة بيانات الكانبان لتحديث موضعي سريع O(1) وعزل إعادة التصيير" },
    { topic: "Optimistic Mutation", syntax: "onMutate: async () => ({ previousSnapshot })", purpose: "تحديث الواجهة في 0 ميلي ثانية وحفظ لقطة للتراجع الفوري عند الفشل" },
    { topic: "HTML5 Drag & Drop", syntax: "onDragStart, onDragOver, onDrop", purpose: "سحب وإفلات العناصر بين القوائم محلياً دون اعتماد على مكتبات خارجية" },
    { topic: "WebSocket Full-Duplex", syntax: "const ws = new WebSocket(url); ws.onmessage = ...", purpose: "قناة اتصال ثنائية الاتجاه ومستمرة لإرسال واستقبال الرسائل الفورية" },
    { topic: "Heartbeat Ping/Pong", syntax: "setInterval(() => socket.send('PING'), 30000)", purpose: "فحص دوري لحالة الاتصال ورصد انقطاع إنترنت المستخدمين فوراً" },
    { topic: "Exponential Backoff", syntax: "delay = Math.min(1000 * Math.pow(2, n), 30000) + jitter", purpose: "إعادة الاتصال التدريجي مع التشويش العشوائي لمنع انهيار الخوادم" },
    { topic: "Reverse Scroll Anchor", syntax: "container.scrollTop += (container.scrollHeight - prevH)", purpose: "منع قفز شاشة الرسائل عند جلب وتضمين سجل الرسائل القديمة في الأعلى" },
    { topic: "Presigned S3 Upload", syntax: "await fetch(uploadUrl, { method: 'PUT', body: file })", purpose: "رفع الوسائط الكبيرة مباشرة للسحابة دون المرور بخادم التطبيق" },
    { topic: "Intersection Observer", syntax: "new IntersectionObserver(cb, { threshold: 0.7 })", purpose: "رصد ظهور الرسالة في مجال رؤية المستلم لإرسال إشعار القراءة الزرقاء ✓✓" },
    { topic: "Web Crypto AES-GCM", syntax: "crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, data)", purpose: "تشفير الرسائل من طرف لطرف (E2EE) مباشرة في معالج جهاز العميل" },
    { topic: "Playhead Resume", syntax: "videoRef.current.currentTime = savedTimestamp", purpose: "استئناف مشاهدة مقطع الفيديو التعليمي من آخر ثانية توقف عندها الطالب" },
    { topic: "Course Schema JSON-LD", syntax: "<script type=\"application/ld+json\">{ '@type': 'Course' }</script>", purpose: "عرض تقييمات ونجوم وسعر الدورة كبطاقة غنية في نتائج بحث جوجل" },
    { topic: "CSS Logical Properties", syntax: "ms-4, pe-4, text-start, dir='rtl'", purpose: "بناء واجهات تتكيف تلقائياً مع اللغتين العربية والإنجليزية دون تكرار الكود" },
    { topic: "Immutable Audit Log", syntax: "db.auditLog.create({ data: { actorId, action, ip } })", purpose: "توثيق العمليات الحساسة في جدول للإضافة فقط للامتثال لمعايير SOC2" },
    { topic: "Sentry Scope Tags", syntax: "Sentry.setTag('organization_id', orgId)", purpose: "إرفاق سياق المنظمة والمستخدم المتضرر بتقارير الأخطاء اللحظية" },
    { topic: "Multi-Tenancy RLS", syntax: "CREATE POLICY tenant_isolation ON projects USING (org_id = current_setting(...))", purpose: "عزل بيانات المؤسسات إجبارياً على مستوى محرك قاعدة البيانات" }
  ],
  capstoneProject: {
    id: "capstone-33",
    title: "Enterprise Full-Stack Studio Pro",
    description: "استوديو هندسي تطبيقي متكامل يجمع بين ركائز المشاريع المتقدمة الأربعة: لوحة كانبان مع سحب متفائل فوري، محاكاة محادثة فورية مع مؤشرات التواجد، إدارة اشتراكات SaaS متعددة المستأجرين مع محرك الصلاحيات، ومشغل فيديو تعليمي يستأنف موضع المشاهدة تلقائياً.",
    code: `import React, { useState, useEffect, useRef } from 'react';

// ==========================================
// 1. نظام محاكاة البيانات وحالة المستأجرين
// ==========================================
const MOCK_ORGS = [
  { id: 'org_acme', name: 'شركة التقنية الذكية (Acme Inc)', plan: 'pro', role: 'owner' },
  { id: 'org_stark', name: 'مؤسسة الابتكار الرقمي (Stark Labs)', plan: 'enterprise', role: 'admin' }
];

export default function EnterpriseStudioPro() {
  // حالة المنظمة النشطة
  const [activeOrgId, setActiveOrgId] = useState('org_acme');
  // حالة التبويب النشط في الاستوديو
  const [activeTab, setActiveTab] = useState('kanban');

  const currentOrg = MOCK_ORGS.find(o => o.id === activeOrgId) || MOCK_ORGS[0];

  return (
    <div className="w-full min-h-[680px] bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl flex flex-col font-sans overflow-hidden">
      {/* الشريط العلوي الشامل: معلومات المنظمة ومبدل التبويبات */}
      <header className="h-16 bg-slate-900 border-b border-slate-800 px-6 flex flex-wrap items-center justify-between gap-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center font-black text-white text-base shadow-lg shadow-indigo-600/30">
            ES
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xs font-bold text-white">{currentOrg.name}</h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {currentOrg.plan.toUpperCase()}
              </span>
            </div>
            <span className="text-[10px] text-slate-400">دورك: {currentOrg.role} (تعدد مستأجرين آمن)</span>
          </div>
        </div>

        {/* أزرار التبديل بين نماذج المشاريع المتقدمة */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('kanban')}
            className={\`px-3 py-1.5 rounded-lg font-bold transition-all \${activeTab === 'kanban' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}\`}
          >
            📋 لوحة كانبان
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={\`px-3 py-1.5 rounded-lg font-bold transition-all \${activeTab === 'chat' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}\`}
          >
            💬 محادثة فورية
          </button>
          <button
            onClick={() => setActiveTab('saas')}
            className={\`px-3 py-1.5 rounded-lg font-bold transition-all \${activeTab === 'saas' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}\`}
          >
            💳 اشتراكات SaaS
          </button>
          <button
            onClick={() => setActiveTab('lms')}
            className={\`px-3 py-1.5 rounded-lg font-bold transition-all \${activeTab === 'lms' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}\`}
          >
            🎓 مشغل الـ LMS
          </button>
        </div>
      </header>

      {/* منطقة عرض المشروع التفاعلي المختار */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === 'kanban' && <InteractiveKanbanModule />}
        {activeTab === 'chat' && <InteractiveRealtimeChatModule />}
        {activeTab === 'saas' && <InteractiveSaaSBillingModule org={currentOrg} />}
        {activeTab === 'lms' && <InteractiveLmsVideoModule />}
      </main>
    </div>
  );
}

// ==========================================
// 2. وحدة الكانبان التفاعلية مع السحب المتفائل
// ==========================================
function InteractiveKanbanModule() {
  const [board, setBoard] = useState({
    columns: {
      c1: { id: 'c1', title: 'قيد الانتظار', color: 'border-amber-500', taskIds: ['t1', 't2'] },
      c2: { id: 'c2', title: 'جاري العمل', color: 'border-sky-500', taskIds: ['t3'] },
      c3: { id: 'c3', title: 'مكتمل بنجاح', color: 'border-emerald-500', taskIds: [] }
    },
    tasks: {
      t1: { id: 't1', title: 'إعداد Next.js App Router وTypeScript', priority: 'High' },
      t2: { id: 't2', title: 'ربط Stripe Webhooks والتحقق من التوقيع', priority: 'Urgent' },
      t3: { id: 't3', title: 'بناء محرك تشفير Web Crypto للرسائل', priority: 'Medium' }
    },
    columnOrder: ['c1', 'c2', 'c3']
  });

  const [draggedTaskId, setDraggedTaskId] = useState(null);
  const [sourceColId, setSourceColId] = useState(null);

  const handleDragStart = (taskId, colId) => {
    setDraggedTaskId(taskId);
    setSourceColId(colId);
  };

  const handleDrop = (destColId) => {
    if (!draggedTaskId || !sourceColId || sourceColId === destColId) return;

    setBoard(prev => {
      const sourceIds = prev.columns[sourceColId].taskIds.filter(id => id !== draggedTaskId);
      const destIds = [...prev.columns[destColId].taskIds, draggedTaskId];

      return {
        ...prev,
        columns: {
          ...prev.columns,
          [sourceColId]: { ...prev.columns[sourceColId], taskIds: sourceIds },
          [destColId]: { ...prev.columns[destColId], taskIds: destIds }
        }
      };
    });

    setDraggedTaskId(null);
    setSourceColId(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-white">لوحة إدارة المهام الرشيقة (Kanban) - اسحب البطاقات بين الأعمدة</h3>
        <span className="text-[11px] text-emerald-400 font-mono">✓ تحديث متفائل فوري (0ms)</span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {board.columnOrder.map(colId => {
          const col = board.columns[colId];
          return (
            <div
              key={col.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(col.id)}
              className={\`w-72 bg-slate-900 border-t-4 \${col.color} border-slate-800 rounded-2xl p-4 flex flex-col flex-shrink-0 min-h-[360px] shadow-lg\`}
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-bold text-xs text-white">{col.title}</h4>
                <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
                  {col.taskIds.length}
                </span>
              </div>

              <div className="space-y-2.5 flex-1">
                {col.taskIds.map(taskId => {
                  const task = board.tasks[taskId];
                  return (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={() => handleDragStart(task.id, col.id)}
                      className="p-3 bg-slate-800 hover:bg-slate-750 border border-slate-700/60 rounded-xl cursor-grab active:cursor-grabbing text-xs text-white space-y-2 select-none transition-all shadow"
                    >
                      <p className="font-semibold leading-relaxed">{task.title}</p>
                      <span className="inline-block px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-[10px] rounded font-bold">
                        {task.priority}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// 3. وحدة المحادثة الفورية مع التثبيت التلقائي
// ==========================================
function InteractiveRealtimeChatModule() {
  const [messages, setMessages] = useState([
    { id: '1', text: 'أهلاً بالفريق! تم تفعيل نظام الـ WebSockets بنجاح 🚀', sender: 'lead', time: '11:00 ص' }
  ]);
  const [input, setInput] = useState('');
  const chatBottomRef = useRef(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const newMsg = {
      id: Date.now().toString(),
      text: userText,
      sender: 'me',
      time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    setInput('');

    // محاكاة رد من زميل بالفريق بعد ثانية واحدة
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: \`تم الاطلاع على: "\${userText}". التحديثات اللحظية تعمل بانسيابية ممتازة!\`,
          sender: 'peer',
          time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1100);
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl h-[440px] flex flex-col overflow-hidden shadow-xl">
      <div className="p-3 bg-slate-850 border-b border-slate-800 flex justify-between items-center text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
          <span className="font-bold text-white">#engineering-general (3 متصلين)</span>
        </div>
        <span className="text-[10px] text-slate-400 font-mono">Full-Duplex WS Active</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map(m => {
          const isMe = m.sender === 'me';
          return (
            <div key={m.id} className={\`flex flex-col \${isMe ? 'items-end' : 'items-start'}\`}>
              <div className={\`max-w-[75%] px-3.5 py-2 rounded-2xl text-xs leading-relaxed \${
                isMe ? 'bg-indigo-600 text-white rounded-br-xs' : 'bg-slate-800 text-slate-200 rounded-bl-xs border border-slate-700/60'
              }\`}>
                {m.text}
              </div>
              <span className="text-[10px] text-slate-500 mt-1 px-1">{m.time} {isMe && '✓✓'}</span>
            </div>
          );
        })}
        <div ref={chatBottomRef} />
      </div>

      <form onSubmit={handleSend} className="p-3 bg-slate-850 border-t border-slate-800 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اكتب رسالة لحظية..."
          className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
        />
        <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs">
          إرسال
        </button>
      </form>
    </div>
  );
}

// ==========================================
// 4. وحدة اشتراكات SaaS ومحرك الصلاحيات
// ==========================================
function InteractiveSaaSBillingModule({ org }) {
  const [currentPlan, setCurrentPlan] = useState(org.plan);
  const [feedback, setFeedback] = useState(null);

  const upgrade = (newPlan) => {
    setCurrentPlan(newPlan);
    setFeedback(\`تم تحديث باقة المنظمة فوراً إلى: \${newPlan.toUpperCase()} (مزامنة Stripe Webhook محاكاة)\`);
    setTimeout(() => setFeedback(null), 3500);
  };

  return (
    <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
      {feedback && (
        <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs rounded-xl font-bold">
          {feedback}
        </div>
      )}

      <div className="flex justify-between items-center">
        <div>
          <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">فوترة المنظمة</span>
          <h3 className="text-base font-black text-white mt-1">الباقة النشطة: {currentPlan.toUpperCase()}</h3>
        </div>
        <div className="flex gap-2">
          {currentPlan !== 'enterprise' ? (
            <button
              onClick={() => upgrade('enterprise')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-600/20"
            >
              ترقية للمؤسسات (99$) ⬆
            </button>
          ) : (
            <button
              onClick={() => upgrade('pro')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-350 rounded-xl text-xs font-bold"
            >
              الرجوع للباقة الاحترافية
            </button>
          )}
        </div>
      </div>

      <div className="p-4 bg-slate-850 rounded-xl border border-slate-800 space-y-2 text-xs">
        <h4 className="font-bold text-white mb-2">الصلاحيات والامتيازات النشطة:</h4>
        <div className="flex justify-between text-slate-350 py-1 border-b border-slate-800">
          <span>دعم تعدد المستأجرين (Multi-tenancy):</span>
          <span className="text-emerald-400 font-bold">✓ مفعل لجميع الخطط</span>
        </div>
        <div className="flex justify-between text-slate-350 py-1 border-b border-slate-800">
          <span>الربط البرمجي الكامل (API Access):</span>
          <span className="text-emerald-400 font-bold">✓ مفعل</span>
        </div>
        <div className="flex justify-between text-slate-350 py-1">
          <span>سجلات التدقيق المؤسسية (Audit Logs SOC2):</span>
          <span className={currentPlan === 'enterprise' ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
            {currentPlan === 'enterprise' ? '✓ مفعل' : '🔒 يتطلب باقة Enterprise'}
          </span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. وحدة مشغل فيديو الـ LMS مع حفظ موضع التوقف
// ==========================================
function InteractiveLmsVideoModule() {
  const [playhead, setPlayhead] = useState(42); // محاكاة ثواني المشاهدة
  const [isCompleted, setIsCompleted] = useState(false);

  const advanceVideo = () => {
    setPlayhead(prev => {
      const next = prev + 30;
      if (next >= 180) {
        setIsCompleted(true);
        return 180;
      }
      return next;
    });
  };

  const progressPercent = Math.round((playhead / 180) * 100);

  return (
    <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-xl">
      <div className="flex justify-between items-center text-xs">
        <span className="font-bold text-white">الدرس 03: معمارية Next.js App Router وServer Actions</span>
        <span className="text-indigo-400 font-mono font-bold">{progressPercent}% تم إنجازه</span>
      </div>

      <div className="aspect-video bg-black rounded-xl border border-slate-800 flex flex-col items-center justify-center relative p-6 text-center shadow-inner">
        <span className="text-4xl mb-2">▶</span>
        <h4 className="text-sm font-bold text-white">محاكي مشغل الفيديو التعليمي</h4>
        <p className="text-xs text-slate-400 font-mono mt-1">
          موضع التوقف المحفوظ: {Math.floor(playhead / 60)}:{Math.floor(playhead % 60).toString().padStart(2, '0')} / 03:00
        </p>
        {isCompleted && (
          <span className="mt-3 px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full text-xs font-bold">
            🎓 تم إكمال هذا الدرس بنجاح!
          </span>
        )}
      </div>

      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
        <div className="bg-indigo-600 h-full transition-all duration-300" style={{ width: \`\${progressPercent}%\` }} />
      </div>

      <div className="flex justify-between items-center pt-1">
        <button
          onClick={advanceVideo}
          disabled={isCompleted}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold rounded-xl text-xs transition-colors"
        >
          محاكاة مشاهدة +30 ثانية ⏩
        </button>
        <button
          onClick={() => { setPlayhead(0); setIsCompleted(false); }}
          className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
        >
          إعادة تعيين 🔄
        </button>
      </div>
    </div>
  );
}`
  },
  sectionInfographic: `<svg viewBox="0 0 600 240" className="w-full h-auto">
  <rect width="600" height="240" rx="16" fill="#0f172a" />
  <text x="300" y="35" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">Master Architecture: Advanced & Enterprise React Ecosystem</text>
  <rect x="25" y="60" width="130" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="90" y="85" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Kanban Engine</text>
  <text x="90" y="115" fill="#94a3b8" fontSize="9" textAnchor="middle">Normalized Store</text>
  <text x="90" y="135" fill="#94a3b8" fontSize="9" textAnchor="middle">Optimistic DND</text>
  <text x="90" y="155" fill="#94a3b8" fontSize="9" textAnchor="middle">Auto Rollback</text>
  <text x="90" y="185" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">0ms Latency</text>
  <path d="M 160 135 L 175 135" stroke="#94a3b8" strokeWidth="2" />
  <rect x="180" y="60" width="130" height="150" rx="10" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="245" y="85" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Realtime Chat</text>
  <text x="245" y="115" fill="#94a3b8" fontSize="9" textAnchor="middle">Full-Duplex WS</text>
  <text x="245" y="135" fill="#94a3b8" fontSize="9" textAnchor="middle">Scroll Anchoring</text>
  <text x="245" y="155" fill="#94a3b8" fontSize="9" textAnchor="middle">E2EE (AES-GCM)</text>
  <text x="245" y="185" fill="#818cf8" fontSize="9" fontWeight="bold" textAnchor="middle">Instant Sync</text>
  <path d="M 315 135 L 330 135" stroke="#94a3b8" strokeWidth="2" />
  <rect x="335" y="60" width="120" height="150" rx="10" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
  <text x="395" y="85" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">LMS Platform</text>
  <text x="395" y="115" fill="#94a3b8" fontSize="9" textAnchor="middle">Curriculum Tree</text>
  <text x="395" y="135" fill="#94a3b8" fontSize="9" textAnchor="middle">Playhead Resume</text>
  <text x="395" y="155" fill="#94a3b8" fontSize="9" textAnchor="middle">JSON-LD Schema</text>
  <text x="395" y="185" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">SEO & Growth</text>
  <path d="M 460 135 L 475 135" stroke="#94a3b8" strokeWidth="2" />
  <rect x="480" y="60" width="105" height="150" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="532" y="85" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Next.js SaaS</text>
  <text x="532" y="115" fill="#94a3b8" fontSize="9" textAnchor="middle">Multi-Tenant</text>
  <text x="532" y="135" fill="#94a3b8" fontSize="9" textAnchor="middle">RSC + Zod</text>
  <text x="532" y="155" fill="#94a3b8" fontSize="9" textAnchor="middle">Stripe Hooks</text>
  <text x="532" y="185" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">Enterprise</text>
</svg>`
};

