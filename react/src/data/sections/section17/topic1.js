// src/data/sections/section17/topic1.js
// الموضوع 17.1: أساسيات المصادقة والأمان في React (Authentication Fundamentals & Security Concepts)

export const topic1 = {
  id: "17.1",
  title: "أساسيات Authentication والمفاهيم الأمنية",
  description:
    "المدخل الهندسي الشامل لترسيخ المفاهيم الأمنية للمصادقة في تطبيقات الويب وReact: من التمييز الدقيق بين إثبات الهوية (Authentication) ومنح الصلاحيات (Authorization)، إلى مقارنة الجلسات التقليدية (Sessions) بالرموز المميزة عديمة الحالة (JWT)، وإتقان آليات عمل Access Tokens وRefresh Tokens، وفهم بروتوكولات OAuth 2.0 وOIDC، وصولاً إلى المقارنة الأمنية الحاسمة بين HttpOnly Cookies وLocalStorage ومخاطر تخزين الرموز.",
  subtopics: [
    // 17.1.a
    {
      id: "17.1.a",
      title: "الفرق الجوهري بين Authentication و Authorization",
      englishTerm: "Authentication vs Authorization (أوثينتيكيشن فيرسس أوثورايزيشن) - إثبات الهوية مقابل منح الصلاحية",
      description:
        "يعد الخلط بين المصادقة (Authentication - وتختصر غالباً بـ AuthN) والترخيص أو منح الصلاحيات (Authorization - وتختصر بـ AuthZ) من أكثر الأخطاء المفاهيمية خطورة في أمن المعلومات. المصادقة (AuthN) تجيب حصراً عن سؤال: 'من أنت؟' (Who are you?)، وهي عملية التحقق من صحة هوية المستخدم المدعاة عبر فحص أوراق اعتماده (اسم المستخدم وكلمة المرور، أو البصمة البيومترية، أو رمز التحقق الثنائي 2FA). أما الترخيص (AuthZ) فيأتي تالياً ليجيب عن سؤال: 'ما الذي يُسمح لك بفعله داخل النظام؟' (What are you allowed to do?)، وهو فحص ما إذا كان هذا المستخدم الموثق يمتلك الإذن للوصول إلى لوحة الإدارة، أو تعديل منشور، أو حذف حساب مستخدم آخر.",
      analogy:
        "تخيل صعودك على متن طائرة في المطار: عند مكتب الجوازات، تبرز جواز سفرك وبطاقة هويتك؛ ضابط الجوازات يتحقق من صورتك واسمك ويتأكد أنك الشخص الحقيقي صاحب الجواز (هذه مصادقة Authentication). بعد ذلك، تصعد للطائرة وتتوجه لمقعدك؛ مضيفة الطيران تفحص تذكرتك لتتأكد هل يحق لك الجلوس في مقصورة الدرجة الأولى أو الدرجة الاقتصادية (هذا ترخيص Authorization). امتلاكك لجواز سفر سليم لا يعني تلقائياً حقك في قيادة الطائرة أو الجلوس في مقصورة القيادة!",
      whyItMatters:
        "الخلط بينهما يقود إلى ثغرات أمنية فادحة مثل ثغرة BOLA (Broken Object Level Authorization): حيث يقوم النظام بالتحقق من تسجيل دخول المستخدم بنجاح، لكنه ينسى التحقق مما إذا كان يمتلك حق تعديل فواتير عملاء آخرين!",
      syntax: `// التمييز في الكود:
// 1. AuthN: التحقق من تسجيل الدخول
const isAuthenticated = Boolean(userToken);

// 2. AuthZ: التحقق من الصلاحيات
const canDeleteInvoice = userRole === 'ADMIN' || userPermissions.includes('INVOICE_DELETE');`,
      simpleExample: `// مثال بسيط يوضح التمييز العملي بين إثبات الهوية ومنح الصلاحية
import React, { useState } from 'react';

export function AuthConceptDemo() {
  // حالة تمثل تسجيل الدخول (Authentication)
  const [currentUser, setCurrentUser] = useState(null);

  // دالة محاكاة تسجيل الدخول (AuthN)
  const handleLogin = (role) => {
    setCurrentUser({
      name: role === 'admin' ? 'عمر فاروق (مدير)' : 'خالد أحمد (مستخدم عادي)',
      role: role,
    });
  };

  // دالة تسجيل الخروج
  const handleLogout = () => setCurrentUser(null);

  // فحص الصلاحية (Authorization - AuthZ)
  const canDeleteDatabase = currentUser?.role === 'admin';

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 max-w-sm">
      <h3 className="text-base font-bold text-white">تجربة AuthN مقابل AuthZ</h3>

      {!currentUser ? (
        <div className="space-y-2">
          <p className="text-xs text-slate-400">أنت غير مسجل الدخول (غير موثق الهوية):</p>
          <div className="flex gap-2">
            <button
              onClick={() => handleLogin('user')}
              className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white rounded transition"
            >
              دخول كمستخدم
            </button>
            <button
              onClick={() => handleLogin('admin')}
              className="flex-1 py-1.5 bg-sky-600 hover:bg-sky-500 text-xs font-bold text-white rounded transition"
            >
              دخول كمدير
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="p-3 bg-slate-850 rounded-lg border border-slate-700">
            <p className="text-xs text-slate-300">
              <span className="text-emerald-400 font-bold">موثق الهوية (AuthN):</span> {currentUser.name}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              الدور الوظيفي: <span className="font-mono text-sky-400">{currentUser.role}</span>
            </p>
          </div>

          {/* فحص الصلاحية AuthZ قبل عرض الزر الحساس */}
          {canDeleteDatabase ? (
            <button
              onClick={() => alert('تمت العملية: صلاحية المدير ممنوحة!')}
              className="w-full py-1.5 bg-rose-600/30 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 text-xs font-bold rounded transition"
            >
              حذف قاعدة البيانات (مسموح للمدير فقط)
            </button>
          ) : (
            <div className="p-2 bg-slate-800/40 rounded border border-slate-700/50 text-[11px] text-slate-400 text-center">
              🔒 ليس لديك صلاحية (AuthZ) لإجراء العمليات الإدارية الحساسة.
            </div>
          )}

          <button
            onClick={handleLogout}
            className="w-full py-1 text-xs text-slate-500 hover:text-white transition"
          >
            تسجيل الخروج
          </button>
        </div>
      )}
    </div>
  );
}`,
      advancedExample: `// محاكي معماري شامل لبوابة أمنية تفحص كلا الطبقتين مع رسائل خطأ دقيقة (401 Unauthorized مقابل 403 Forbidden)
import React, { useState } from 'react';

// قائمة عمليات النظام ومتطلبات كل منها
const SYSTEM_ACTIONS = [
  { id: 'view_dashboard', title: 'عرض لوحة المؤشرات', requiredRole: 'USER' },
  { id: 'edit_article', title: 'تعديل مقال منشور', requiredRole: 'EDITOR' },
  { id: 'manage_billing', title: 'إدارة الفواتير والاشتراكات', requiredRole: 'ADMIN' },
];

export function SecurityGatewaySimulator() {
  // حالة المستخدم الحالي (null يعني غير مسجل الدخول)
  const [session, setSession] = useState(null);
  // سجل العمليات الأمنية
  const [auditLog, setAuditLog] = useState([]);

  // محاولة تنفيذ عملية معينة
  const executeAction = (action) => {
    const timestamp = new Date().toLocaleTimeString('ar-EG');

    // 1. فحص طبقة المصادقة (AuthN): هل المستخدم مسجل الدخول أصلاً؟
    if (!session) {
      setAuditLog((prev) => [
        {
          time: timestamp,
          action: action.title,
          status: 'HTTP 401 Unauthorized',
          color: 'text-amber-400',
          reason: 'فشل AuthN: يجب تسجيل الدخول وإثبات الهوية أولاً للوصول للنظام.',
        },
        ...prev,
      ]);
      return;
    }

    // 2. فحص طبقة الصلاحيات (AuthZ): هل دور المستخدم يمنحه حق تنفيذ هذا الإجراء؟
    const roleHierarchy = { ADMIN: 3, EDITOR: 2, USER: 1 };
    const userLevel = roleHierarchy[session.role] || 0;
    const requiredLevel = roleHierarchy[action.requiredRole] || 0;

    if (userLevel < requiredLevel) {
      setAuditLog((prev) => [
        {
          time: timestamp,
          action: action.title,
          status: 'HTTP 403 Forbidden',
          color: 'text-rose-400',
          reason: 'فشل AuthZ: المستخدم موثق الهوية كـ ' + session.role + ' لكنه يفتقر لصلاحية ' + action.requiredRole + '.',
        },
        ...prev,
      ]);
      return;
    }

    // 3. نجاح الفحصين
    setAuditLog((prev) => [
      {
        time: timestamp,
        action: action.title,
        status: 'HTTP 200 OK',
        color: 'text-emerald-400',
        reason: 'نجحت العملية: الهوية والصلاحيات صالحة بنجاح.',
      },
      ...prev,
    ]);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-6 max-w-xl mx-auto">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-base font-bold text-white">محاكي البوابة الأمنية (AuthN vs AuthZ)</h3>
          <p className="text-xs text-slate-400">تتبع استجابات 401 Unauthorized و 403 Forbidden</p>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setSession(null)}
            className={'px-2.5 py-1 text-xs rounded transition ' + (!session ? 'bg-slate-700 text-white font-bold' : 'bg-slate-800 text-slate-400')}
          >
            زائر مجهول
          </button>
          <button
            onClick={() => setSession({ username: 'طارق', role: 'USER' })}
            className={'px-2.5 py-1 text-xs rounded transition ' + (session?.role === 'USER' ? 'bg-sky-600 text-white font-bold' : 'bg-slate-800 text-slate-400')}
          >
            مستخدم
          </button>
          <button
            onClick={() => setSession({ username: 'سارة', role: 'ADMIN' })}
            className={'px-2.5 py-1 text-xs rounded transition ' + (session?.role === 'ADMIN' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 text-slate-400')}
          >
            مدير
          </button>
        </div>
      </header>

      {/* أزرار العمليات */}
      <div className="space-y-2">
        <label className="text-xs text-slate-400 block font-semibold">حاول طلب الإجراءات التالية:</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {SYSTEM_ACTIONS.map((action) => (
            <button
              key={action.id}
              onClick={() => executeAction(action)}
              className="p-3 bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-xl text-right transition"
            >
              <span className="text-xs font-bold text-white block">{action.title}</span>
              <span className="text-[10px] text-sky-400 font-mono">يتطلب: {action.requiredRole}</span>
            </button>
          ))}
        </div>
      </div>

      {/* سجل المراقبة الأمني */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-400">سجل استجابات الخادم الأمنية (Audit Log):</h4>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl max-h-48 overflow-y-auto space-y-2 font-mono text-xs">
          {auditLog.length === 0 ? (
            <p className="text-slate-600 text-center py-4">انقر على أي إجراء لتسجيل الاستجابة الأمنية...</p>
          ) : (
            auditLog.map((log, idx) => (
              <div key={idx} className="p-2 bg-slate-900 rounded border border-slate-800/80 space-y-1">
                <div className="flex justify-between items-center">
                  <span className={'font-bold ' + log.color}>{log.status}</span>
                  <span className="text-[10px] text-slate-500">{log.time}</span>
                </div>
                <p className="text-slate-300 font-sans text-[11px]">{log.reason}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}`,
      output:
        "يوضح النموذج الفارق العملي بين 401 (المستخدم مجهول ويجب تسجيل دخوله - AuthN) وبين 403 (المستخدم معروف لكنه ممنوع من تنفيذ الإجراء لعدم كفاية الصلاحية - AuthZ).",
      commonMistakes: [
        {
          mistake: "إرجاع كود الاستجابة HTTP 401 عندما يحاول مستخدم عادي فتح لوحة المدير الإدارية.",
          why: "401 تعني 'Unauthorized' بالمعيار التاريخي لـ HTTP ولكنها تعني في الواقع Unauthenticated (غير مسجل الدخول). المستخدم مسجل الدخول بالفعل لكن ليس له صلاحية، لذلك يجب إرجاع 403 Forbidden.",
          fix: "استخدم 401 عند غياب أو تلف رمز تسجيل الدخول، واستخدم 403 عندما يكون الرمز صحيحاً لكن صلاحية المستخدم لا تكفي.",
        },
      ],
      bestPractices: [
        "لا تعتمد مطلقاً على إخفاء الأزرار في الواجهة الأمامية كحماية أمنية وحيدة؛ فالواجهة الأمامية للعرض وتجربة المستخدم فقط، والأمان الحقيقي يُطبق دائماً في الخادم (Backend).",
        "احرص على تصميم نظام الصلاحيات وفق مبدأ الحد الأدنى من الامتيازات (Principle of Least Privilege).",
      ],
      infographic: {
        title: "المقارنة الجوهرية: AuthN مقابل AuthZ",
        caption: "الخطوتان الإلزاميتان لحماية أي نظام برمجي",
        steps: [
          { number: 1, label: "Authentication (AuthN)", desc: "من أنت؟ التحقق من بيانات الدخول (كلمة مرور، بصمة، 2FA)" },
          { number: 2, label: "Authorization (AuthZ)", desc: "ماذا مسموح لك؟ التحقق من الأدوار والصلاحيات (Admin, Editor)" },
          { number: 3, label: "أكواد الرد المقابلة", desc: "فشل الهوية: 401 Unauthorized | فشل الصلاحية: 403 Forbidden" },
        ],
      },
    },

    // 17.1.b
    {
      id: "17.1.b",
      title: "مفهوم جلسات المستخدم (Sessions & Stateful Auth)",
      englishTerm: "Session-Based Authentication (سيشن بيسد أوثينتيكيشن) - المصادقة القائمة على الجلسات",
      description:
        "المصادقة القائمة على الجلسات (Session-Based Auth) هي النموذج التقليدي والتاريخي لإدارة حالة تسجيل الدخول على الويب. في هذا النمط، عندما يرسل المستخدم اسم المستخدم وكلمة المرور بنجاح، يقوم الخادم بإنشاء سجل جلسة وحفظه في ذاكرته النشطة أو في قاعدة بيانات سريعة (مثل Redis)، ويولد معرف جلسة فريد عشوائي (Session ID). يقوم الخادم بعد ذلك بإرسال هذا المعرف إلى المتصفح عبر ملف تعريف ارتباط محمي (Set-Cookie). في كل طلب تالٍ، يرسل المتصفح هذا الـ Cookie تلقائياً، فيبحث الخادم في ذاكرته عن الجلسة المقابلة ليتحقق من هوية المستخدم وصلاحياته. هذا النمط يُسمى Stateful لأن الخادم يحتفظ بحالة كل مستخدم متصل في ذاكرته.",
      analogy:
        "مثل تسليم معطفك في غرفة الأمانات في المسرح: عندما تسلم معطفك الثقيل، يعطيك الموظف قرصاً بلاستيكياً صغيراً يحمل رقماً (مثل 42). الموظف هو من يحتفظ بالمعطف في الخزانة ويسجل أن الرقم 42 ملكك. في نهاية الحفلة، لا تحتاج لشرح مواصفات معطفك؛ بل تبرز القرص الصغير فقط، فيقوم الموظف بمطابقة الرقم وإرجاع معطفك فوراً. القرص الصغير هو الـ Session ID!",
      whyItMatters:
        "ميزة الجلسات العظمى هي 'الإلغاء الفوري' (Instant Invalidation): إذا تم اختراق حساب مستخدم، يستطيع مسؤول النظام حذف جلسة المستخدم من خادم Redis في ثانية واحدة، ليتم طرده فوراً من كافة الأجهزة.",
      syntax: `// تدفق المصادقة عبر الجلسات:
// 1. العميل يرسل بيانات الاعتماد: POST /login { email, password }
// 2. الخادم ينشئ الجلسة ويخزنها في الذاكرة (Stateful)
// 3. الخادم يرسل معرف الجلسة في ترويسة الرد:
Set-Cookie: sessionId=xyz_998877; HttpOnly; Secure; SameSite=Lax;`,
      simpleExample: `// محاكاة بسيطة لكيفية التحقق من وجود جلسة نشطة عند تحميل الصفحة في React
import React, { useState, useEffect } from 'react';

export function SessionStatusWidget() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // محاكاة استدعاء الخادم للتحقق من ملف cookie الجلسة تلقائياً
    setTimeout(() => {
      // إذا وجد الخادم معرف جلسة صالح في الـ cookies المرفقة بالطلب
      setSession({
        sessionId: 'sess_abc123xyz',
        user: 'زينب أحمد',
        loginTime: 'منذ 15 دقيقة',
      });
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return <p className="text-xs text-slate-400 p-4 animate-pulse">جارٍ فحص جلسة المتصفح النشطة...</p>;
  }

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
      <div className="flex justify-between items-center">
        <h4 className="text-xs font-bold text-white">حالة جلسة المستخدم (Stateful Session)</h4>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
      </div>
      <p className="text-xs text-slate-300">المستخدم: <strong className="text-white">{session?.user}</strong></p>
      <p className="text-[11px] text-slate-500 font-mono">معرف الجلسة (Session ID): {session?.sessionId}</p>
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي لإدارة الجلسات مع إمكانية إنهاء الجلسة الفوري من جهة الخادم (Revocation)
import React, { useState } from 'react';

// محاكاة قاعدة بيانات الجلسات المخزنة في خادم Redis
const INITIAL_SERVER_SESSIONS = [
  { id: 'sess_1', device: 'Chrome على Windows (الجلسة الحالية)', ip: '197.35.20.1', isCurrent: true },
  { id: 'sess_2', device: 'Safari على iPhone 15', ip: '41.238.10.4', isCurrent: false },
  { id: 'sess_3', device: 'Firefox على MacBook Pro', ip: '156.204.88.9', isCurrent: false },
];

export function MultiDeviceSessionManager() {
  // حالة الجلسات النشطة المخزنة في الخادم
  const [serverSessions, setServerSessions] = useState(INITIAL_SERVER_SESSIONS);
  const [notice, setNotice] = useState(null);

  // إنهاء جلسة معينة فورياً من جانب الخادم (Stateful Revocation)
  const revokeSession = (sessionId) => {
    setServerSessions((prev) => prev.filter((s) => s.id !== sessionId));
    setNotice('تم إبطال وحذف الجلسة رقم ' + sessionId + ' من الخادم فوراً.');
    setTimeout(() => setNotice(null), 3000);
  };

  // إنهاء كافة الجلسات الأخرى بضغطة زر واحدة
  const revokeAllOthers = () => {
    setServerSessions((prev) => prev.filter((s) => s.isCurrent));
    setNotice('تم تسجيل الخروج من كافة الأجهزة الأخرى فوراً وتطهير سجلات الخادم.');
    setTimeout(() => setNotice(null), 3000);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 max-w-lg mx-auto">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">إدارة الجلسات النشطة (Active Sessions)</h3>
          <p className="text-xs text-slate-400">قوة المصادقة القائمة على الجلسات: إبطال فوري فائق السرعة</p>
        </div>
        <span className="text-xs font-mono px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-500/30 rounded">
          {serverSessions.length} جلسات نشطة
        </span>
      </header>

      {notice && (
        <div className="p-2.5 bg-emerald-950/60 border border-emerald-500/40 rounded-lg text-emerald-300 text-xs animate-fadeIn">
          {notice}
        </div>
      )}

      <div className="space-y-2">
        {serverSessions.map((sess) => (
          <div
            key={sess.id}
            className={'p-3 rounded-xl border flex justify-between items-center transition ' + (
              sess.isCurrent ? 'bg-sky-950/30 border-sky-500/40' : 'bg-slate-850 border-slate-800'
            )}
          >
            <div>
              <p className="text-xs font-bold text-white flex items-center gap-2">
                {sess.device}
                {sess.isCurrent && (
                  <span className="text-[10px] bg-sky-600 text-white px-1.5 py-0.5 rounded font-mono">الحالي</span>
                )}
              </p>
              <p className="text-[10px] text-slate-400 font-mono mt-0.5">IP: {sess.ip} • ID: {sess.id}</p>
            </div>

            {!sess.isCurrent && (
              <button
                onClick={() => revokeSession(sess.id)}
                className="px-2.5 py-1 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 text-xs font-semibold rounded-lg transition"
              >
                إنهاء الجلسة
              </button>
            )}
          </div>
        ))}
      </div>

      {serverSessions.length > 1 && (
        <button
          onClick={revokeAllOthers}
          className="w-full py-2 bg-slate-800 hover:bg-rose-950 hover:text-rose-300 hover:border-rose-500/50 border border-slate-700 text-xs font-bold text-slate-300 rounded-xl transition"
        >
          تسجيل الخروج من كافة الأجهزة الأخرى
        </button>
      )}
    </div>
  );
}`,
      output:
        "يوضح كيف يوفر نظام الجلسات تحكماً مركزياً صارماً؛ حيث يمكن للخادم في أي لحظة حذف جلسة محددة من الذاكرة ليفقد المخترق حق الوصول فوراً في الطلب التالي.",
      commonMistakes: [
        {
          mistake: "تخزين بيانات الجلسات في ذاكرة خادم Node.js العادية (In-Memory Array) في تطبيق إنتاج حقيقي.",
          why: "عند إعادة تشغيل الخادم أو عند استخدام أكثر من خادم وراء Load Balancer، ستضيع كافة جلسات المستخدمين ويُطرد الجميع.",
          fix: "استخدم دائماً مخزن جلسات مركزي وموزع وسريع مثل Redis أو Memcached.",
        },
      ],
      bestPractices: [
        "اضبط دائماً ملفات Session Cookies بخاصية `HttpOnly` لمنع قراءتها عبر ثغرات JavaScript الخبيثة.",
        "حدد عمر انتهاء صلاحية مناسب للجلسات غير النشطة (Inactivity Timeout) لمنع بقاء الجلسات مفتوحة للأبد.",
      ],
      infographic: {
        title: "آلية عمل المصادقة بالجلسات (Session Flow)",
        caption: "تخزين مركزي لحالة المستخدم في الخادم واستدعاؤها بمعرف فريد",
        steps: [
          { number: 1, label: "تسجيل الدخول", desc: "يرسل العميل اسم المستخدم وكلمة المرور إلى الخادم" },
          { number: 2, label: "إنشاء الجلسة وتخزينها", desc: "ينشئ الخادم كائن الجلسة في Redis ويرسل الـ Session ID في Cookie" },
          { number: 3, label: "الطلبات اللاحقة", desc: "يرسل المتصفح الـ Cookie تلقائياً؛ فيطابق الخادم المعرف في ذاكرته" },
        ],
      },
    },

    // 17.1.c
    {
      id: "17.1.c",
      title: "مفهوم JSON Web Tokens (JWT) وهيكليته",
      englishTerm: "JSON Web Tokens: JWT (جيسون ويب توكنز) - الرموز المميزة لشبكة الويب",
      description:
        "رمز JWT هو معيار مفتوح قياسي (RFC 7519) يعرّف طريقة مدمجة ومستقلة بذاتها (Self-Contained) لنقل المعلومات بأمان بين الأطراف ككائن JSON مشفر بتوقيع رقمي. على عكس الجلسات التقليدية التي تتطلب من الخادم حفظ حالة في الذاكرة (Stateful)، فإن الـ JWT عديم الحالة (Stateless): كل المعلومات التي يحتاجها الخادم لمعرفة هوية المستخدم وصلاحياته تكون مخزنة داخل الرمز نفسه! يتألف رمز الـ JWT دائماً من ثلاثة أجزاء مفصولة بنقاط: 1) الرأس (Header): يحدد خوارزمية التوقيع (مثل HS256)، 2) الحمولة (Payload): تحتوي على بيانات المستخدم والمطالبات (Claims مثل userId, role, exp)، 3) التوقيع الرقمي (Signature): يتم توليده بدمج الرأس والحمولة مع سر سري خاص بالخادم (Secret Key) لضمان عدم تلاعب أي طرف بالبيانات.",
      analogy:
        "مثل الشيك البنكي المعتمد أو شهادة الميلاد الرسمية المختومة بختم الدولة البارز: الورقة نفسها تحتوي على اسمك وتاريخ ميلادك وصلاحيتك، وتوقيع الموظف الرسمي وختم النسر يثبتان أن الورقة أصلية ولم يقم أحد بتزويرها. لا يحتاج أي شخص للاتصال بالسجل المدني في كل ثانية؛ طالما أن الختم والتوقيع سليمين، فإن البيانات موثوقة بذاتها!",
      whyItMatters:
        "يتميز JWT بقدرة هائلة على التوسع الأفقي (Scalability): يمكنك تشغيل 100 خادم مختلف لخدمة ملايين المستخدمين دون الحاجة لقاعدة بيانات جلسات مركزية مشتركة؛ فكل خادم يمتلك المفتاح السري يستطيع فك شفرة وتوثيق الرمز فوراً.",
      syntax: `// هيكل رمز JWT:
// header.payload.signature
// مثال: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4ifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

// فك تشفير الحمولة Payload في الواجهة الأمامية:
const payload = JSON.parse(atob(token.split('.')[1]));`,
      simpleExample: `// مثال بسيط لفك تشفير وقراءة حمولة رمز JWT في React دون مكتبات خارجية
import React, { useState } from 'react';

// دالة نقية لفك تشفير حمولة JWT بأمان
function parseJwtPayload(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

export function SimpleJwtViewer() {
  // نموذج لرمز JWT حقيقي مبسط
  const sampleToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c3JfODg4IiwibmFtZSI6Iti52YXYsdmIINi52YTZiiIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTgwMDAwMDAwMH0.signature_sample';

  const [decoded, setDecoded] = useState(() => parseJwtPayload(sampleToken));

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-xs font-bold text-white">فك تشفير حمولة الـ JWT (Client-Side)</h4>
      <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[11px] space-y-1">
        <p className="text-slate-400">معرف المستخدم: <span className="text-sky-400">{decoded?.userId}</span></p>
        <p className="text-slate-400">الاسم: <span className="text-white">{decoded?.name}</span></p>
        <p className="text-slate-400">الدور: <span className="text-emerald-400 font-bold">{decoded?.role}</span></p>
      </div>
      <p className="text-[10px] text-amber-400/80">
        تنبيه: حمولة الـ JWT غير مشفرة سرياً (Base64 فقط)؛ يمكن لأي شخص قراءتها ولكن لا يمكن تعديلها دون كسر التوقيع.
      </p>
    </div>
  );
}`,
      advancedExample: `// استوديو تشريح وتفكيك الـ JWT التفاعلي: يلون الأجزاء الثلاثة ويفحص انتهاء الصلاحية
import React, { useState } from 'react';

// محاكي رمز JWT كامل
const DEFAULT_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTYiLCJuYW1lIjoi2KPZhtmzINmF2K3ZhdivIiwicm9sZSI6IkVkaXRvciIsImlhdCI6MTY5MDAwMDAwMCwiZXhwIjoxODAwMDAwMDAwfQ.uT0_v6G6E-FkP6xJ_mO9X9H8qB7rA1_demoSignature';

export function JwtAnatomyInspector() {
  const [tokenInput, setTokenInput] = useState(DEFAULT_TOKEN);

  // تقسيم الرمز إلى الأجزاء الثلاثة
  const parts = tokenInput.split('.');
  const headerPart = parts[0] || '';
  const payloadPart = parts[1] || '';
  const signaturePart = parts[2] || '';

  // فك شفرة الرأس والحمولة للعرض
  const decodeBase64Json = (str) => {
    try {
      return JSON.stringify(JSON.parse(atob(str)), null, 2);
    } catch {
      return 'خطأ في التنسيق';
    }
  };

  const headerJson = decodeBase64Json(headerPart);
  const payloadJson = decodeBase64Json(payloadPart);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-xl mx-auto">
      <header className="pb-3 border-b border-slate-800">
        <h3 className="text-base font-bold text-white">المشرحة البصرية لرموز JWT (JWT Anatomy)</h3>
        <p className="text-xs text-slate-400">شاهد الأجزاء الثلاثة المشفرة بنظام Base64Url وتوقيعها الرقمي</p>
      </header>

      {/* الرمز الملون بالأجزاء الثلاثة */}
      <div className="space-y-1">
        <label className="text-xs text-slate-400 block font-semibold">الرمز المميز (JWT String):</label>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs break-all leading-relaxed">
          <span className="text-rose-400 font-bold">{headerPart}</span>
          <span className="text-white font-bold">.</span>
          <span className="text-purple-400 font-bold">{payloadPart}</span>
          <span className="text-white font-bold">.</span>
          <span className="text-sky-400 font-bold">{signaturePart}</span>
        </div>
      </div>

      {/* تفكيك الأجزاء المقروءة */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* الرأس Header */}
        <div className="p-4 bg-slate-850 rounded-xl border border-rose-500/30 space-y-2">
          <span className="text-xs font-bold text-rose-400 block">1. الرأس (Header - الخوارزمية والنوع)</span>
          <pre className="p-2.5 bg-slate-950 rounded-lg text-rose-300 font-mono text-[11px] overflow-x-auto">
            {headerJson}
          </pre>
        </div>

        {/* الحمولة Payload */}
        <div className="p-4 bg-slate-850 rounded-xl border border-purple-500/30 space-y-2">
          <span className="text-xs font-bold text-purple-400 block">2. الحمولة (Payload - البيانات والمطالبات)</span>
          <pre className="p-2.5 bg-slate-950 rounded-lg text-purple-300 font-mono text-[11px] overflow-x-auto">
            {payloadJson}
          </pre>
        </div>
      </div>

      {/* التوقيع Signature */}
      <div className="p-4 bg-slate-850 rounded-xl border border-sky-500/30 space-y-1">
        <span className="text-xs font-bold text-sky-400 block">3. التوقيع الرقمي (Signature)</span>
        <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
          يُحسب في الخادم بتطبيق خوارزمية HMACSHA256 على: <code className="text-rose-400 font-mono">base64Url(Header)</code> + <code className="text-purple-400 font-mono">base64Url(Payload)</code> باستخدام المفتاح السري السري الخاص بالخادم.
        </p>
      </div>
    </div>
  );
}`,
      output:
        "استعراض مرئي متقن يبين بوضوح أن رمز JWT يتكون من 3 أجزاء ملونة (أحمر للرأس، بنفسجي للحمولة، وأزرق للتوقيع)، مع التأكيد على أن الحمولة مكشوفة للقراءة وليست مشفرة سرياً.",
      commonMistakes: [
        {
          mistake: "تخزين معلومات حساسة مثل كلمات المرور أو أرقام البطاقات الائتمانية داخل حمولة الـ JWT Payload.",
          why: "حمولة الـ JWT مشفرة بـ Base64 فقط؛ يمكن لأي مستخدم أو إضافة متصفح فك تشفيرها وقراءتها في ثانية واحدة.",
          fix: "ضع في الـ Payload المعرفات العامة فقط مثل `userId` و `role` و `exp` وتجنب وضع أي أسرار إطلاقاً.",
        },
      ],
      bestPractices: [
        "ضع دائماً وقت انتهاء صلاحية إلزامي وصغير (`exp` claim) للرمز لمنع استخدامه إلى الأبد في حال تسريبه.",
        "لا تعتمد على بيانات الـ JWT التي يفكها المتصفح في اتخاذ قرارات الأمان الحساسة في الخادم؛ الخادم يجب أن يتحقق دائماً من صحة التوقيع Signature.",
      ],
      infographic: {
        title: "هندسة رمز الـ JSON Web Token (JWT)",
        caption: "الأجزاء الثلاثة الأساسية لبناء رمز مصادقة آمن وعديم الحالة",
        steps: [
          { number: 1, label: "Header (الرأس)", desc: "يحدد خوارزمية التشفير ونوع الرمز (typ: JWT, alg: HS256)" },
          { number: 2, label: "Payload (الحمولة)", desc: "تحتوي على بيانات المستخدم وتاريخ الانتهاء (Claims)" },
          { number: 3, label: "Signature (التوقيع)", desc: "الختم المشفر بمفتاح الخادم السري لضمان عدم التلاعب" },
        ],
      },
    },

    // 17.1.d
    {
      id: "17.1.d",
      title: "مفهوم Access Tokens و Refresh Tokens",
      englishTerm: "Access Tokens & Refresh Tokens (أكسيس توكنز آند ريفريش توكنز) - رموز الوصول ورموز التجديد",
      description:
        "في الأنظمة الأمنية الحديثة القائمة على الرموز المميزة، تبرز معضلة أمنية كبرى: إذا جعلنا مدة صلاحية رمز الـ JWT طويلة (مثلاً شهر كامل)، فإن تسريب هذا الرمز من جهاز المستخدم يمنح المخترق صلاحية وصول لمدة شهر كامل دون قدرة على طرده! وإذا جعلنا مدته 10 دقائق، فسيضطر المستخدم لإدخال كلمة المرور كل 10 دقائق مما يدمر تجربة الاستخدام. الحل الهندسي العبقري هو الفصل إلى رمزين: 1) رمز الوصول (Access Token): ذو عمر فائق القصر (مثلاً 5 إلى 15 دقيقة)، يُستخدم لإرسال كل طلب إلى الـ API، 2) رمز التجديد (Refresh Token): ذو عمر أطول (مثلاً 7 إلى 30 يوماً)، ويُخزن بأقصى درجات الأمان في ملف تعريف ارتباط محمي (HttpOnly Cookie)، ولا يُستخدم إلا لغرض وحيد: طلب رمز Access Token جديد في الخلفية دون أن يشعر المستخدم (Silent Refresh).",
      analogy:
        "مثل دخولك إلى منتجع ترفيهي ضخم لمدة أسبوع: عند مكتب الاستقبال، يتحقق الموظف من هويتك ويعطيك بطاقة غرفة أسبوعية (Refresh Token) وبطاقة مرور ورقية ليوم واحد فقط (Access Token). عند بوابات الألعاب والمطاعم، تبرز البطاقة الورقية السريعة. في نهاية اليوم، تنتهي صلاحية البطاقة الورقية؛ تذهب لكشك الاستقبال وتبرز بطاقة الغرفة وتستلم بطاقة ورقية جديدة ليوم غد بضغطة زر دون إعادة فحص جواز سفرك!",
      whyItMatters:
        "يقلل نافذة الاختراق (Vulnerability Window) إلى دقائق معدودة؛ فإذا تمكن مخترق من اعتراض الـ Access Token، فإنه سيصبح عديم الفائدة بعد دقائق، بينما يظل الـ Refresh Token محمياً في الخادم وخالياً من إمكانية الوصول من لغة JavaScript.",
      syntax: `// دورة التجديد الصامت (Silent Token Refresh):
// 1. الطلب العادي يفشل بـ 401 لأن Access Token انتهى
// 2. معترض Axios Interceptor يوقف الطلبات المعلقة
// 3. إرسال طلب تجديد: POST /auth/refresh (يرسل الـ Refresh Cookie تلقائياً)
// 4. استلام Access Token جديد وإعادة تنفيذ الطلبات السابقة بنجاح`,
      simpleExample: `// مثال بسيط يوضح فكرة فحص تاريخ انتهاء الـ Access Token قبل إرسال الطلب
import React, { useState } from 'react';

export function TokenExpirationSimulator() {
  // حالة تمثل الثواني المتبقية في عمر الـ Access Token
  const [secondsRemaining, setSecondsRemaining] = useState(12);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // دالة محاكاة التجديد الصامت (Silent Refresh)
  const handleSilentRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      // تجديد الـ Access Token لـ 15 دقيقة (محاكاة: 900 ثانية)
      setSecondsRemaining(900);
      setIsRefreshing(false);
    }, 1000);
  };

  const isExpired = secondsRemaining <= 0;

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <div className="flex justify-between items-center">
        <h4 className="text-xs font-bold text-white">حالة رمز الوصول (Access Token)</h4>
        <span className={'text-xs font-mono font-bold ' + (isExpired ? 'text-rose-400' : 'text-emerald-400')}>
          {isExpired ? 'منتهي الصلاحية' : secondsRemaining + ' ثانية'}
        </span>
      </div>

      <p className="text-[11px] text-slate-400 leading-relaxed">
        {isExpired
          ? 'رمز الوصول منتهي! يجب استخدام الـ Refresh Token للحصول على رمز جديد.'
          : 'الرمز صالح؛ يمكن استخدامه لإرسال طلبات الـ API الآمنة.'}
      </p>

      <button
        onClick={handleSilentRefresh}
        disabled={isRefreshing}
        className="w-full py-2 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 text-white text-xs font-bold rounded-lg transition"
      >
        {isRefreshing ? 'جارٍ التجديد الصامت...' : 'تجديد الرمز الآن (Silent Refresh)'}
      </button>
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي متقدم يوضح عمل معترض الشبكة (Network Interceptor) لتجديد الرموز تلقائياً دون انقطاع تجربة المستخدم
import React, { useState } from 'react';

export function TokenLifecycleOrchestrator() {
  // حالة الرموز
  const [accessTokenAge, setAccessTokenAge] = useState(5); // 5 ثوانٍ متبقية
  const [requestLog, setRequestLog] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // محاكاة إرسال طلب API عادي
  const sendApiRequest = async () => {
    const time = new Date().toLocaleTimeString('ar-EG');

    // إذا كان الرمز منتهياً (أقل أو يساوي 0)
    if (accessTokenAge <= 0) {
      setRequestLog((prev) => [
        { time, text: 'استجابة 401 Unauthorized: الـ Access Token منتهي الصلاحية!', type: 'error' },
        ...prev,
      ]);

      // تشغيل التجديد التلقائي عبر المعترض
      setIsRefreshing(true);
      setRequestLog((prev) => [
        { time, text: 'المعترض يلتقط الـ 401 ويرسل POST /auth/refresh تلقائياً...', type: 'warning' },
        ...prev,
      ]);

      // محاكاة طلب التجديد للخادم
      await new Promise((r) => setTimeout(r, 1200));

      // تجديد الرمز بنجاح
      setAccessTokenAge(60);
      setIsRefreshing(false);

      setRequestLog((prev) => [
        { time, text: 'نجح التجديد! تم استلام Access Token جديد وإعادة إرسال الطلب الأصلي بنجاح 200 OK.', type: 'success' },
        ...prev,
      ]);
    } else {
      // الرمز ما زال صالحاً
      setRequestLog((prev) => [
        { time, text: 'نجح الطلب 200 OK: تم استخدام Access Token صالح (متبقي: ' + accessTokenAge + ' ثانية).', type: 'success' },
        ...prev,
      ]);
      setAccessTokenAge((prev) => Math.max(0, prev - 15));
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 max-w-lg mx-auto">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">محاكي دورة التجديد المزدوجة (Token Flow)</h3>
          <p className="text-xs text-slate-400">كيف يتعامل معترض الشبكة مع انتهاء صلاحية الرموز</p>
        </div>
        <span className={'px-2 py-1 text-xs font-mono font-bold rounded ' + (
          accessTokenAge > 0 ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' : 'bg-rose-950 text-rose-400 border border-rose-500/30'
        )}>
          عمر الرمز: {accessTokenAge}s
        </span>
      </header>

      <div className="flex gap-2">
        <button
          onClick={sendApiRequest}
          disabled={isRefreshing}
          className="flex-1 py-2 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 text-white text-xs font-bold rounded-xl transition"
        >
          {isRefreshing ? 'جارٍ التجديد الصامت بالخلفية...' : 'إرسال طلب بيانات (Fetch Data)'}
        </button>
        <button
          onClick={() => setAccessTokenAge(0)}
          className="px-3 py-2 bg-slate-800 hover:bg-rose-950 hover:text-rose-300 text-slate-300 text-xs font-bold rounded-xl border border-slate-700 transition"
        >
          إنهاء الرمز قسراً
        </button>
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-400">سجل أحداث الشبكة التلقائي:</h4>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl max-h-48 overflow-y-auto space-y-2 font-mono text-xs">
          {requestLog.length === 0 ? (
            <p className="text-slate-600 text-center py-4">انقر على الزر لتجربة دورة التجديد الصامتة...</p>
          ) : (
            requestLog.map((item, idx) => (
              <div
                key={idx}
                className={'p-2 rounded border ' + (
                  item.type === 'error'
                    ? 'bg-rose-950/30 border-rose-800/60 text-rose-300'
                    : item.type === 'warning'
                    ? 'bg-amber-950/30 border-amber-800/60 text-amber-300'
                    : 'bg-emerald-950/30 border-emerald-800/60 text-emerald-300'
                )}
              >
                <div className="flex justify-between text-[10px] opacity-70">
                  <span>{item.time}</span>
                  <span>{item.type.toUpperCase()}</span>
                </div>
                <p className="text-[11px] mt-0.5">{item.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}`,
      output:
        "يوضح النموذج الفائدة الاستثنائية للثنائي Access/Refresh؛ حيث يتم تجديد صلاحية المستخدم في أجزاء من الثانية في الخلفية دون إعادة توجيهه لصفحة تسجيل الدخول ودون مقاطعة عمله.",
      commonMistakes: [
        {
          mistake: "تخزين كل من Access Token و Refresh Token في LocalStorage معاً.",
          why: "يلغي الفائدة الأمنية للثنائي تماماً؛ فإذا تمكن مهاجم من تنفيذ كود XSS، سيسرق الـ Refresh Token ويسيطر على الحساب لأسابيع.",
          fix: "احفظ الـ Access Token في ذاكرة الجافاسكريبت المؤقتة (Memory/State)، واحفظ الـ Refresh Token في HttpOnly Cookie محمية.",
        },
      ],
      bestPractices: [
        "طبق تقنية تدوير رمز التجديد (Refresh Token Rotation): في كل مرة يُستخدم فيها Refresh Token لتوليد Access Token جديد، يرسل الخادم Refresh Token جديد تماماً ويبطل القديم فوراً.",
        "اجعل عمر الـ Access Token قصيراً للغاية (بين 5 و 15 دقيقة كحد أقصى).",
      ],
      infographic: {
        title: "منظومة الثنائي: Access Token و Refresh Token",
        caption: "التوازن المثالي بين أعلى درجات الأمان وسلاسة تجربة الاستخدام",
        steps: [
          { number: 1, label: "Access Token", desc: "عمر قصير (5-15 دقيقة)، يُرسل مع كل طلب API في ترويسة Authorization" },
          { number: 2, label: "انتهاء الرمز (401)", desc: "عند انتهاء صلاحيته، يعترض العميل الرد في الخلفية تلقائياً" },
          { number: 3, label: "Silent Refresh", desc: "يُرسل Refresh Token المحمي في Cookie لاستلام Access Token جديد فوراً" },
        ],
      },
    },

    // 17.1.e
    {
      id: "17.1.e",
      title: "مفهوم OAuth 2.0 و OpenID Connect (تسجيل الدخول الاجتماعي)",
      englishTerm: "OAuth 2.0 & OpenID Connect: OIDC (أو أوث آند أوبن آي دي كونيكت) - بروتوكولات التفويض والهوية الحديثة",
      description:
        "يعد OAuth 2.0 إطار عمل تفويض صناعي قياسي (Authorization Framework) يتيح لتطبيق خارجي الحصول على وصول محدود إلى حساب مستخدم على خدمة أخرى (مثل الوصول إلى ملفات Google Drive دون معرفة كلمة مرور جوجل الخاصة بالمستخدم). ومع ذلك، فإن OAuth 2.0 صُمم في الأصل لمنح الصلاحيات وليس لإثبات الهوية. هنا جاء بروتوكول OpenID Connect (OIDC) كطبقة هوية مضافة مبنية فوق OAuth 2.0 (Identity Layer over OAuth 2.0) لتوفير المصادقة (Authentication). يتيح OIDC ميزة 'تسجيل الدخول باستخدام Google أو GitHub أو Apple': حيث يتولى مزود الهوية الموثوق (Identity Provider - IdP) التحقق من المستخدم، ثم يرجع لتطبيقك رمزين: 1) رمز الهوية ID Token (بصيغة JWT يوضح اسم وبريد المستخدم)، 2) رمز الوصول Access Token للتعامل مع خدمات المزود.",
      analogy:
        "مثل خدمة إيقاف السيارات (Valet Parking) في فندق فاخر: عندما تعطي مفتاح سيارتك المخصص للخدمة (Valet Key) للعامل، فإن هذا المفتاح يسمح له بتشغيل المحرك وقيادة السيارة لركنها فقط، لكنه لا يفتح صندوق السيارة الخلفي المقفل ولا يفتح درج الأسرار (هذا OAuth 2.0 تفويض محدود). أما OIDC فهو مثل إبراز بطاقة عضويتك في الفندق عند البوابة للتحقق من أنك نزيل مسجل لديهم لفتح الباب الرئيسي.",
      whyItMatters:
        "يحرر تطبيقك تماماً من عبء تخزين وتأمين كلمات المرور في قاعدة بياناتك الخاصة، ويزيد معدل تحويل المستخدمين الجدد (Signup Conversion) بنسبة 40% لأنهم ينشئون حسابات بضغطة زر واحدة موثوقة.",
      syntax: `// تدفق تفويض Authorization Code Flow مع PKCE:
// 1. إعادة توجيه المستخدم لمزود الهوية:
// https://accounts.google.com/o/oauth2/v2/auth?client_id=...&response_type=code&scope=openid email profile

// 2. المزود يعيد توجيه المستخدم مع كود مؤقت:
// https://myapp.com/callback?code=AUTH_CODE_XYZ

// 3. الخادم يبدل الكود بـ ID Token و Access Token`,
      simpleExample: `// مثال واجهة بسيطة لأزرار تسجيل الدخول الاجتماعي (Social Login Buttons)
import React from 'react';

export function SocialLoginButtons({ onProviderSelect }) {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 max-w-sm">
      <h4 className="text-sm font-bold text-white text-center">تسجيل الدخول السريع (OIDC)</h4>
      <p className="text-xs text-slate-400 text-center">ادخل بأمان دون الحاجة لتذكر كلمة مرور جديدة</p>

      <div className="space-y-2 pt-2">
        <button
          onClick={() => onProviderSelect('google')}
          className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs rounded-xl flex items-center justify-center gap-3 transition shadow-sm"
        >
          <span className="text-base">🌐</span>
          <span>المتابعة باستخدام Google</span>
        </button>

        <button
          onClick={() => onProviderSelect('github')}
          className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-3 transition border border-slate-700"
        >
          <span className="text-base">🐙</span>
          <span>المتابعة باستخدام GitHub</span>
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي لمسار تفويض OAuth 2.0 مع OIDC خطوة بخطوة (Authorization Code Flow)
import React, { useState } from 'react';

const OAUTH_STEPS = [
  {
    step: 1,
    title: '1. التوجيه لمزود الهوية (Google / GitHub)',
    desc: 'ينقر المستخدم على "دخول بجوجل". يعيد التطبيق توجيهه إلى صفحة جوجل مع معاملات client_id و scope=openid profile email.',
    status: 'redirect',
  },
  {
    step: 2,
    title: '2. موافقة المستخدم والتحقق (Consent & AuthN)',
    desc: 'يوافق المستخدم في صفحة جوجل على مشاركة اسمه وبريده الإلكتروني مع تطبيقك.',
    status: 'consent',
  },
  {
    step: 3,
    title: '3. إعادة التوجيه مع الكود (Authorization Code)',
    desc: 'تعيد جوجل توجيه المستخدم إلى رابط تطبيقك myapp.com/callback ومعه رمز مؤقت code=XYZ_789 لمرة واحدة.',
    status: 'callback',
  },
  {
    step: 4,
    title: '4. استبدال الكود بالرموز (Token Exchange)',
    desc: 'يرسل تطبيقك الكود إلى خادم جوجل السحابي ويستلم رمز الهوية ID Token (يحتوي بيانات المستخدم) ورمز Access Token.',
    status: 'completed',
  },
];

export function OAuthFlowSimulator() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const activeStep = OAUTH_STEPS[currentStepIndex];

  const handleNext = () => {
    setCurrentStepIndex((prev) => (prev < OAUTH_STEPS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="pb-3 border-b border-slate-800 flex justify-between items-center">
        <div>
          <h3 className="text-sm font-bold text-white">محاكي تدفق OAuth 2.0 و OIDC</h3>
          <p className="text-xs text-slate-400">رحلة تسجيل الدخول الاجتماعي خطوة بخطوة</p>
        </div>
        <span className="text-xs font-mono font-bold text-sky-400">
          المرحلة {currentStepIndex + 1} من 4
        </span>
      </header>

      {/* بطاقة المرحلة الحالية */}
      <div className="p-4 bg-slate-850 border border-slate-700 rounded-xl space-y-3">
        <h4 className="text-xs font-bold text-emerald-400">{activeStep.title}</h4>
        <p className="text-xs text-slate-300 leading-relaxed">{activeStep.desc}</p>
      </div>

      {/* رسم بياني مصغر للخطوات */}
      <div className="grid grid-cols-4 gap-1.5 pt-2">
        {OAUTH_STEPS.map((s, idx) => (
          <div
            key={s.step}
            className={'h-1.5 rounded-full transition-all ' + (
              idx <= currentStepIndex ? 'bg-sky-500' : 'bg-slate-800'
            )}
          />
        ))}
      </div>

      <div className="flex justify-between items-center pt-2">
        <button
          onClick={() => setCurrentStepIndex(0)}
          className="text-xs text-slate-500 hover:text-slate-300"
        >
          إعادة المحاكاة من البداية
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition"
        >
          {currentStepIndex === OAUTH_STEPS.length - 1 ? 'إنهاء وتكرار' : 'الخطوة التالية ←'}
        </button>
      </div>
    </div>
  );
}`,
      output:
        "يوضح النموذج الفارق الدقيق بين OAuth (التفويض للوصول لموارد) و OIDC (المصادقة وتأكيد الهوية عبر ID Token)، مع محاكاة بصرية لمراحل تدفق كود التفويض الآمن.",
      commonMistakes: [
        {
          mistake: "استخدام مسار Implicit Flow القديم بدلاً من Authorization Code Flow with PKCE في تطبيقات React الواجهة الأمامية.",
          why: "المسار الضمني يرجع الرموز في رابط المتصفح URL Hash مباشرة، مما يجعلها عرضة للاعتراض من سجلات المتصفح وإضافاته.",
          fix: "استخدم دائماً مسار Authorization Code Flow مع إضافة PKCE (Proof Key for Code Exchange) الإلزامية لتطبيقات الـ SPA.",
        },
      ],
      bestPractices: [
        "اطلب دائماً أقل نطاق صلاحيات ممكن (Minimal Scopes): اطلب `openid profile email` فقط للمصادقة وتجنب طلب صلاحيات زائدة كقراءة جهات الاتصال إلا عند الضرورة القصوى.",
        "تحقق دائماً من خاصية `nonce` و `state` في طلبات التفويض لحماية المستخدم من هجمات تزوير الطلبات CSRF.",
      ],
      infographic: {
        title: "بروتوكول OIDC المبني فوق OAuth 2.0",
        caption: "طبقة الهوية الحديثة لمصادقة المستخدمين عبر الخدمات العالمية",
        steps: [
          { number: 1, label: "OAuth 2.0 (التفويض)", desc: "يمنح الإذن للتطبيق للوصول للبيانات (يرجع Access Token)" },
          { number: 2, label: "OpenID Connect (الهوية)", desc: "يتحقق من هوية المستخدم ومعلوماته الشخصية (يرجع ID Token)" },
          { number: 3, label: "PKCE Security", desc: "تأمين التبادل في تطبيقات React لمنع اعتراض الكود المؤقت" },
        ],
      },
    },

    // 17.1.f
    {
      id: "17.1.f",
      title: "استخدام ملفات تعريف الارتباط الآمنة (Secure Cookies)",
      englishTerm: "Secure Cookies & Flags (سيكيور كوكيز آند فلاجـز) - الكوكيز الآمنة ورايات الحماية",
      description:
        "ملفات تعريف الارتباط (Cookies) هي الآلية المدمجة في متصفحات الويب لإرسال البيانات وحفظها تلقائياً مع كل طلب شبكة. ومع ذلك، فإن ملف الكوكي الافتراضي غير آمن ويمكن التلاعب به أو اعتراضه بسهولة ما لم يتم تأمينه بثلاث رايات حماية إلزامية (Security Flags): 1) راية `Secure`: تمنع المتصفح من إرسال الكوكي نهائياً إلا عبر اتصالات HTTPS المشفرة، مما يحمي الرمز من هجمات التنصت (Man-in-the-Middle)، 2) راية `HttpOnly`: تمنع شيفرات JavaScript في المتصفح تماماً من قراءة الكوكي عبر `document.cookie`، مما يحميه بنسبة 100% من السرقة في حال حدوث ثغرة XSS، 3) راية `SameSite`: تتحكم في إرسال الكوكي في الطلبات القادمة من مواقع أخرى وتتفرع لثلاث خيارات (Strict و Lax و None) لحماية الموقع من هجمات CSRF.",
      analogy:
        "مثل إرسال رسالة بنكية سرية: الكوكي العادي مثل بطاقة بريدية مفتوحة يمكن لأي ساعي بريد قراءتها وتصويرها. وضع راية `Secure` مثل وضع الرسالة في مظروف مضاد للرصاص ومقفل بقفل إلكتروني لا يفتح إلا داخل فرع البنك المشفر. وضع راية `HttpOnly` مثل وضع الرسالة في خزنة لا يملك مفتاحها إلا مدير البنك شخصياً ولا يستطيع أي شخص في الشارع لمسها!",
      whyItMatters:
        "بدون رايات Secure وHttpOnly وSameSite، تكون مصادقة موقعك معرضة للاختراق الفوري عبر هجمات XSS وسرقة الجلسات وهجمات تزوير الطلبات عبر المواقع CSRF.",
      syntax: `// الترويسة القياسية للكوكي الآمن من الخادم:
Set-Cookie: auth_token=jwt_secret_value; 
  Secure; 
  HttpOnly; 
  SameSite=Lax; 
  Path=/; 
  Max-Age=604800;`,
      simpleExample: `// مثال يوضح كيف يتعامل كود React مع الـ Cookies الآمنة
import React from 'react';

export function SecureCookieNotice() {
  // كود React لا يمكنه ولا يجب عليه قراءة HttpOnly Cookie!
  // المتصفح يرسلها تلقائياً مع كل استدعاء fetch عند تفعيل credentials: 'include'
  const handleFetchProtectedData = async () => {
    try {
      const response = await fetch('/api/user/profile', {
        method: 'GET',
        // هذا السطر يخبر المتصفح بإرسال الـ Cookies الآمنة تلقائياً مع الطلب
        credentials: 'include',
      });
      const data = await response.json();
      alert('تم جلب البيانات بنجاح: ' + data.name);
    } catch {
      alert('فشل الاتصال');
    }
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 text-center">
      <h4 className="text-xs font-bold text-white">إرسال الكوكيز الآمنة في React</h4>
      <p className="text-[11px] text-slate-400">
        يتم إرسال الكوكي المحمي تلقائياً مع ترويسة الطلب عبر إعداد <code className="text-sky-400 font-mono">credentials: 'include'</code>.
      </p>
      <button
        onClick={handleFetchProtectedData}
        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition"
      >
        استدعاء API مع الكوكي المحمي
      </button>
    </div>
  );
}`,
      advancedExample: `// لوحة تفاعلية لفحص رايات أمان الـ Cookies وشرح تأثير كل راية على أمان التطبيق
import React, { useState } from 'react';

export function CookieFlagsAuditor() {
  const [flags, setFlags] = useState({
    httpOnly: true,
    secure: true,
    sameSite: 'Lax', // 'Strict', 'Lax', 'None'
  });

  // احتساب درجة الأمان
  const calculateSecurityLevel = () => {
    let score = 0;
    if (flags.httpOnly) score += 40;
    if (flags.secure) score += 35;
    if (flags.sameSite === 'Strict') score += 25;
    else if (flags.sameSite === 'Lax') score += 20;
    return score;
  };

  const score = calculateSecurityLevel();

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">مدقق رايات أمان الـ Cookies</h3>
          <p className="text-xs text-slate-400">تكوين وتأثير رايات HttpOnly و Secure و SameSite</p>
        </div>
        <div className="text-center px-3 py-1 bg-slate-850 border border-slate-700 rounded-xl">
          <span className={'text-sm font-bold font-mono ' + (
            score >= 90 ? 'text-emerald-400' : score >= 60 ? 'text-amber-400' : 'text-rose-400'
          )}>
            {score}%
          </span>
          <span className="text-[10px] text-slate-400 block">درجة الأمان</span>
        </div>
      </header>

      {/* خيارات التبديل */}
      <div className="space-y-3">
        <label className="flex items-center justify-between p-3 bg-slate-850 rounded-xl border border-slate-800 cursor-pointer">
          <div>
            <span className="text-xs font-bold text-white block">راية HttpOnly</span>
            <span className="text-[11px] text-slate-400">حماية الكوكي من القراءة عبر document.cookie في JavaScript (مقاومة XSS)</span>
          </div>
          <input
            type="checkbox"
            checked={flags.httpOnly}
            onChange={(e) => setFlags({ ...flags, httpOnly: e.target.checked })}
            className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500"
          />
        </label>

        <label className="flex items-center justify-between p-3 bg-slate-850 rounded-xl border border-slate-800 cursor-pointer">
          <div>
            <span className="text-xs font-bold text-white block">راية Secure</span>
            <span className="text-[11px] text-slate-400">منع إرسال الكوكي عبر اتصالات HTTP غير المشفرة (تتطلب HTTPS حصراً)</span>
          </div>
          <input
            type="checkbox"
            checked={flags.secure}
            onChange={(e) => setFlags({ ...flags, secure: e.target.checked })}
            className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500"
          />
        </label>

        <div className="p-3 bg-slate-850 rounded-xl border border-slate-800 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-white">راية SameSite</span>
            <span className="text-xs font-mono text-sky-400">{flags.sameSite}</span>
          </div>
          <p className="text-[11px] text-slate-400">تحدد كيفية إرسال الكوكي عند التنقل من مواقع وروابط خارجية (مقاومة CSRF):</p>
          <div className="grid grid-cols-3 gap-2 pt-1">
            {['Strict', 'Lax', 'None'].map((mode) => (
              <button
                key={mode}
                onClick={() => setFlags({ ...flags, sameSite: mode })}
                className={'py-1.5 text-xs font-bold rounded-lg transition ' + (
                  flags.sameSite === mode ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                )}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* استعراض الترويسة المولدة */}
      <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-[11px] text-slate-300 overflow-x-auto">
        <span className="text-slate-500 block mb-1">ترويسة الرد من الخادم (Response Header):</span>
        <p className="text-emerald-400">
          Set-Cookie: session_id=abc123xyz; Path=/; SameSite={flags.sameSite};
          {flags.secure ? ' Secure;' : ''}
          {flags.httpOnly ? ' HttpOnly;' : ''}
        </p>
      </div>
    </div>
  );
}`,
      output:
        "يوضح النموذج الفروق الدقيقة بين رايات الأمان؛ حيث تشكل رايات HttpOnly وSecure وSameSite درعاً ثلاثي الطبقات يحمي جلسات المستخدمين من أخطر هجمات الويب.",
      commonMistakes: [
        {
          mistake: "ضبط `SameSite=None` دون إضافة راية `Secure`.",
          why: "ترفض كافة المتصفحات الحديثة هذا الإعداد وتتجاهل الكوكي تماماً؛ حيث تشترط المواصفات القياسية وجود Secure إلزامياً إذا كان SameSite مضبوطاً على None.",
          fix: "إذا كنت تستخدم SameSite=None للطلبات عبر النطاقات، أضف دائماً راية `Secure` وتأكد من عمل الموقع بـ HTTPS.",
        },
      ],
      bestPractices: [
        "اعتمد `SameSite=Lax` كخيار افتراضي متوازن لمعظم التطبيقات؛ فهو يحمي من CSRF ويسمح بإرسال الكوكي عند نقر المستخدم على رابط قادم من موقع خارجي.",
        "لا تستخدم الكوكيز لتخزين بيانات غير أمنية كبيرة الحجم؛ حجم الكوكي محدود بـ 4KB كحد أقصى ويُرسل مع كل طلب شبكة.",
      ],
      infographic: {
        title: "الرايات الثلاث لتأمين ملفات الـ Cookies",
        caption: "الدفاع الثلاثي ضد هجمات XSS والتنصت وتزوير الطلبات",
        steps: [
          { number: 1, label: "HttpOnly", desc: "يمنع قراءة الكوكي من شيفرات JavaScript لحمايته من ثغرات XSS" },
          { number: 2, label: "Secure", desc: "يشترط تشفير الاتصال بـ HTTPS لمنع اعتراض الرمز عبر الشبكة" },
          { number: 3, label: "SameSite (Lax/Strict)", desc: "يتحكم في إرسال الكوكي عبر النطاقات الخارجية للوقاية من CSRF" },
        ],
      },
    },

    // 17.1.g
    {
      id: "17.1.g",
      title: "المقارنة الأمنية بين HttpOnly Cookies و LocalStorage",
      englishTerm: "HttpOnly Cookies vs LocalStorage (إتش تي تي بي أونلي كوكيز فيرسس لوكال ستوريدج)",
      description:
        "تعد مسألة 'أين نخزن رمز المصادقة في المتصفح؟' واحدة من أكثر النقاشات الأمنية حساسية في عالم React. هناك طريقتان رئيسيتان: الأولى هي التخزين في `LocalStorage`: ميزتها سهولة الاستخدام المطلقة؛ حيث يمكن قراءة الرمز في JavaScript وإرفاقه يدوياً في ترويسة `Authorization: Bearer <token>`. لكن عيبها الأمني الكارثي هو أن أي شيفرة JavaScript خبيثة تُحقن في صفحتك عبر ثغرة XSS تستطيع قراءة `localStorage.getItem('token')` وإرساله فوراً إلى خادم المخترق! الطريقة الثانية هي `HttpOnly Cookies`: ميزتها أنها غير قابلة للقراءة مطلقاً من JavaScript، مما يحصنها تماماً ضد سرقة XSS. عيبها الوحيد أنها قد تكون عرضة لهجمات CSRF إذا لم يتم ضبط راية `SameSite=Lax/Strict` بشكل صحيح. الإجماع الأمني الحديث يفضل بقوة استخدام HttpOnly Cookies للرموز الحساسة (خاصة Refresh Tokens).",
      analogy:
        "تخيل الفرق بين وضع أموالك في جيبك الخارجي الشفاف الشفاف على بنطالك في شارع مزدحم (LocalStorage: سهل الوصول إليه ولكن أي نشال محترف يمر بجانبك يستطيع سرقته في ثانية واحدة دون أن تشعر)، وبين وضع أموالك في خزنة حديدية مغلقة أسفل أرضية المتجر لا تفتح إلا بنظام التعرف التلقائي على الوجه (HttpOnly Cookie: لا يمكن للنشال سرقتها أبداً عبر JavaScript).",
      whyItMatters:
        "آلاف التطبيقات تم اختراق حسابات مستخدميها بالكامل بسبب ثغرة XSS بسيطة في مكتبة طرف ثالث قامت بقراءة كافة رموز LocalStorage وإرسالها لخوادم خارجية.",
      syntax: `// المقارنة الأمنية:
// LocalStorage (عرضة لـ XSS):
localStorage.setItem('token', token); // ⚠️ أي كود JS يستطيع سرقته!

// HttpOnly Cookie (محمي ضد XSS):
// يُضبط من الخادم عبر Set-Cookie ولا يمكن لـ JS الوصول إليه إطلاقاً`,
      simpleExample: `// مثال توضيحي يبين كيف يستطيع كود JavaScript قراءة LocalStorage بسهولة بينما يعجز عن لمس HttpOnly Cookie
import React, { useState } from 'react';

export function StorageComparisonDemo() {
  const [localValue, setLocalValue] = useState('');

  const saveToLocal = () => {
    localStorage.setItem('demo_access_token', 'secret_jwt_xyz_999');
    setLocalValue(localStorage.getItem('demo_access_token'));
  };

  const clearLocal = () => {
    localStorage.removeItem('demo_access_token');
    setLocalValue('');
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-xs font-bold text-white">تجربة قراءة LocalStorage عبر JS</h4>
      <div className="p-2.5 bg-slate-950 rounded border border-slate-800 font-mono text-[11px]">
        <span className="text-slate-500 block">القيمة المقروءة عبر document:</span>
        <span className="text-rose-400 font-bold break-all">
          {localValue || '(فارغ حالياً)'}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={saveToLocal}
          className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white rounded transition"
        >
          حفظ في LocalStorage
        </button>
        <button
          onClick={clearLocal}
          className="px-3 py-1.5 bg-slate-800 hover:bg-rose-900 text-xs text-slate-300 rounded transition"
        >
          مسح
        </button>
      </div>
      <p className="text-[10px] text-slate-400">
        * لاحظ أن أي كود خبيث في التطبيق يستطيع تنفيذ <code className="text-rose-400">localStorage.getItem()</code> وسرقة الرمز فوراً!
      </p>
    </div>
  );
}`,
      advancedExample: `// جدول مقارنة تفاعلي مع محاكاة لهجوم XSS وسرقة البيانات
import React, { useState } from 'react';

export function SecurityVulnerabilityMatrix() {
  const [simulationResult, setSimulationResult] = useState(null);

  // محاكاة هجوم XSS خبيث يحاول سرقة الرموز من كلا المكانين
  const simulateXssAttack = () => {
    // 1. محاولة قراءة LocalStorage
    localStorage.setItem('user_auth_token', 'eyJhbGciOiJIUzI1NiJ9.leak_me_secret');
    const stolenFromLocalStorage = localStorage.getItem('user_auth_token');

    // 2. محاولة قراءة HttpOnly Cookie عبر document.cookie
    const stolenCookie = document.cookie; // لن يحتوي على أي HttpOnly Cookie إطلاقاً!

    setSimulationResult({
      localStorageStatus: stolenFromLocalStorage ? 'تمت السرقة بنجاح 🚨: ' + stolenFromLocalStorage : 'فارغ',
      cookieStatus: stolenCookie.includes('session') ? 'تمت السرقة' : 'محمي تماماً 🛡️: لا يمكن لـ JavaScript قراءة HttpOnly Cookie!',
    });
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="pb-3 border-b border-slate-800">
        <h3 className="text-sm font-bold text-white">المقارنة الأمنية: HttpOnly Cookies مقابل LocalStorage</h3>
        <p className="text-xs text-slate-400">تحليل الصمود أمام هجمات XSS وسرقة الرموز</p>
      </header>

      {/* جدول المقارنة */}
      <div className="overflow-x-auto">
        <table className="w-full text-right text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400">
              <th className="pb-2">المعيار الأمني</th>
              <th className="pb-2 text-rose-400">LocalStorage</th>
              <th className="pb-2 text-emerald-400">HttpOnly Cookie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            <tr>
              <td className="py-2 font-medium">مقاومة هجمات XSS</td>
              <td className="py-2 text-rose-400 font-bold">ضعيفة جداً (مكشوف)</td>
              <td className="py-2 text-emerald-400 font-bold">منيعة 100% (محجوب عن JS)</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">مقاومة هجمات CSRF</td>
              <td className="py-2 text-emerald-400 font-bold">منيعة تلقائياً</td>
              <td className="py-2 text-amber-400 font-bold">تتطلب SameSite=Lax/Strict</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">سهولة الاستخدام بـ React</td>
              <td className="py-2 text-emerald-400 font-bold">سهل جداً (JS API)</td>
              <td className="py-2 text-slate-400">يحتاج إعدادات CORS وخادم</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* زر المحاكاة */}
      <button
        onClick={simulateXssAttack}
        className="w-full py-2 bg-rose-600/30 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 text-xs font-bold rounded-xl transition"
      >
        محاكاة هجوم XSS: محاولة سرقة الرموز عبر JavaScript
      </button>

      {simulationResult && (
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 font-mono text-xs animate-fadeIn">
          <div>
            <span className="text-slate-400 block text-[10px]">نتيجة البحث في LocalStorage:</span>
            <span className="text-rose-400 font-bold break-all">{simulationResult.localStorageStatus}</span>
          </div>
          <div className="pt-2 border-t border-slate-900">
            <span className="text-slate-400 block text-[10px]">نتيجة البحث في HttpOnly Cookies:</span>
            <span className="text-emerald-400 font-bold">{simulationResult.cookieStatus}</span>
          </div>
        </div>
      )}
    </div>
  );
}`,
      output:
        "يوضح النموذج بالأدلة البرمجية لماذا تعد HttpOnly Cookies الحصن الحقيقي لحماية الرموز؛ حيث لا تملك أي شيفرة JS خبيثة القدرة على قراءتها أو تسريبها.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن تشفير رمز الـ JWT داخل LocalStorage يجعله آمناً تماماً من هجمات XSS.",
          why: "إذا استطاع المهاجم حقن كود XSS، فإنه يستطيع أيضاً تشغيل دالة فك التشفير الموجودة في كود تطبيقك أو إرسال الرمز المشفر لخادمه لفك تشفيره لاحقاً.",
          fix: "استخدم HttpOnly Cookies للرموز طويلة الأجل، ولا تعتمد على تشفير العميل المحلي كوسيلة حماية وحيدة.",
        },
      ],
      bestPractices: [
        "المعيار الأمني الأفضل في 2026: احفظ الـ Access Token في ذاكرة React (Memory State) فقط، واحفظ الـ Refresh Token في HttpOnly Cookie.",
        "إذا كنت مضطراً لاستخدام LocalStorage لتطبيقات موبايل هجينة، تأكد من وجود Content Security Policy (CSP) صارمة جداً لمنع XSS.",
      ],
      infographic: {
        title: "مقارنة الحماية: HttpOnly Cookies مقابل LocalStorage",
        caption: "أين تضع رموزك الحساسة لضمان أقصى درجات الأمان؟",
        steps: [
          { number: 1, label: "LocalStorage", desc: "متاح لـ JavaScript، معرض لسرقة XSS بنسبة 100%، غير مناسب للرموز الحساسة" },
          { number: 2, label: "HttpOnly Cookie", desc: "محجوب تماماً عن JavaScript، محمي ضد XSS، يتطلب ضبط SameSite للوقاية من CSRF" },
          { number: 3, label: "الهندسة الذهبية", desc: "Access Token في الذاكرة + Refresh Token في HttpOnly Cookie" },
        ],
      },
    },

    // 17.1.h
    {
      id: "17.1.h",
      title: "مخاطر تخزين رموز المصادقة في المتصفح واستراتيجيات الدفاع",
      englishTerm: "Token Storage Vulnerabilities & Defense in Depth (توكن ستوريدج فولنيرابيليتيز) - ثغرات تخزين الرموز والدفاع المتعدد",
      description:
        "لا توجد بيئة تخزين آمنة بنسبة 100% ومطلقة في متصفحات الويب؛ فالمتصفح بيئة غير موثوقة (Untrusted Client Environment) تقع تحت سيطرة العميل وقد تحتوي على إضافات متصفح خبيثة (Malicious Extensions)، أو برمجيات خبيثة في نظام التشغيل (Malware)، أو تتعرض لهجمات حقن الشيفرات (XSS). تتضمن مخاطر تخزين الرموز: 1) سرقة الرمز بالكامل عبر XSS في LocalStorage، 2) إساءة استخدام الرمز عبر CSRF في Cookies غير المؤمنة، 3) هجمات الرموز المتروكة (Zombie Tokens) عند نسيان إبطالها بعد تسجيل الخروج. لمواجهة هذه المخاطر، تعتمد هندسة الأمان الحديثة على استراتيجية 'الدفاع المتعمق' (Defense in Depth): عدم الاعتماد على وسيلة دفاع واحدة، بل دمج أوقات انتهاء قصيرة، مع تدوير الرموز (Token Rotation)، وسياسات CSP، وبصمة المتصفح (Client Fingerprinting).",
      analogy:
        "مثل تأمين قلعة تاريخية: الحاكم لا يعتمد فقط على باب خشبي واحد قوي عند المدخل؛ بل يبني خندقاً مائياً حول القلعة، وجداراً حجرياً خارجياً ضخماً، وبوابة حديدية متحركة، وحراساً مدربين على الأبراج، وكلمة سر سرية تتغير كل ساعة. إذا نجح العدو في اختراق الجدار الخارجي، سيوقفه الحراس الداخليون فوراً!",
      whyItMatters:
        "الدفاع المتعمق هو المنهجية الوحيدة المقبولة في تدقيقات الأمان للشركات المالية الكبرى (FinTech) واختبارات الاختراق الاحترافية (Penetration Testing).",
      syntax: `// استراتيجية الدفاع المتعمق (Defense in Depth):
// 1. تقليل عمر الرمز: exp = 5m
// 2. تدوير الرموز: Refresh Token Rotation
// 3. كشف الاستخدام المتكرر للرمز (Reuse Detection)
// 4. تقييد نطاق الصلاحيات: Minimal Scopes`,
      simpleExample: `// مثال بسيط يوضح إبطال الرمز من الواجهة والخادم معاً عند تسجيل الخروج لمنع الرموز المتروكة
import React, { useState } from 'react';

export function SecureLogoutDemo() {
  const [token, setToken] = useState('active_secure_token_123');

  const handleFullLogout = async () => {
    try {
      // 1. إخطار الخادم بإبطال الرمز فوراً وحذفه من القائمة البيضاء
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {
      console.log('تم طلب الإلغاء');
    } finally {
      // 2. تنظيف الذاكرة في الواجهة الأمامية تماماً
      setToken(null);
      localStorage.clear();
      sessionStorage.clear();
      alert('تم إنهاء الجلسة وتطهير كافة الرموز بنجاح.');
    }
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm text-center">
      <h4 className="text-xs font-bold text-white">تسجيل الخروج الآمن (Complete Invalidation)</h4>
      <p className="text-[11px] text-slate-400">
        الحالة الحالية: <span className="font-mono text-emerald-400">{token ? 'جلسة نشطة' : 'تم الخروج بنجاح'}</span>
      </p>
      {token && (
        <button
          onClick={handleFullLogout}
          className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition"
        >
          تسجيل خروج آمن وتطهير الرموز
        </button>
      )}
    </div>
  );
}`,
      advancedExample: `// محاكي معماري لآلية كشف سرقة الرموز (Token Reuse Detection) وتدمير الجلسة المخترقة فوراً
import React, { useState } from 'react';

export function TokenTheftDetectorSimulator() {
  // تتبع عائلة الرموز (Token Family)
  const [currentTokenId, setCurrentTokenId] = useState(3);
  const [isCompromised, setIsCompromised] = useState(false);
  const [auditLog, setAuditLog] = useState([]);

  // محاكاة تجديد شرعي من المستخدم الأصلي
  const handleLegitimateRefresh = () => {
    if (isCompromised) return;
    const nextId = currentTokenId + 1;
    setCurrentTokenId(nextId);
    setAuditLog((prev) => [
      {
        time: new Date().toLocaleTimeString('ar-EG'),
        text: 'تجديد شرعي: تم استبدال الرمز رقم ' + currentTokenId + ' بالرمز الجديد رقم ' + nextId + '.',
        status: 'legit',
      },
      ...prev,
    ]);
  };

  // محاكاة هجوم: مخترق يحاول استخدام رمز قديم تم تدويره مسبقاً (Replay Attack)
  const simulateTheftReplayAttack = () => {
    const expiredStolenTokenId = currentTokenId - 1;
    setIsCompromised(true);
    setAuditLog((prev) => [
      {
        time: new Date().toLocaleTimeString('ar-EG'),
        text: '🚨 إنذار أمني خطير! محاولة استخدام رمز ملغي مسبقاً (رقم ' + expiredStolenTokenId + '). تم اكتشاف سرقة الرموز (Token Reuse Detected)!',
        status: 'breach',
      },
      {
        time: new Date().toLocaleTimeString('ar-EG'),
        text: '🛡️ دفاع تلقائي: قام الخادم بإبطال وتدمير كامل عائلة الرموز الخاصة بالمستخدم وإجباره على إعادة إدخال كلمة المرور.',
        status: 'defense',
      },
      ...prev,
    ]);
  };

  const resetSimulation = () => {
    setCurrentTokenId(1);
    setIsCompromised(false);
    setAuditLog([]);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">كشف سرقة الرموز (Token Reuse Detection)</h3>
          <p className="text-xs text-slate-400">كيف يكتشف الخادم استخدام المخترق للرمز القديم المسروق</p>
        </div>
        <span className={'px-2 py-0.5 text-xs font-mono font-bold rounded ' + (
          isCompromised ? 'bg-rose-950 text-rose-400 border border-rose-500/40' : 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
        )}>
          {isCompromised ? 'تم تجميد الحساب 🔒' : 'آمن تماماً ✓'}
        </span>
      </header>

      <div className="p-3 bg-slate-850 rounded-xl border border-slate-800 text-xs flex justify-between items-center font-mono">
        <span className="text-slate-400">معرف الرمز النشط حالياً:</span>
        <span className="text-sky-400 font-bold">RefreshToken_v{currentTokenId}</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleLegitimateRefresh}
          disabled={isCompromised}
          className="flex-1 py-2 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 text-white text-xs font-bold rounded-xl transition"
        >
          تجديد شرعي للرمز (User)
        </button>
        <button
          onClick={simulateTheftReplayAttack}
          disabled={isCompromised || currentTokenId <= 1}
          className="flex-1 py-2 bg-rose-600/30 hover:bg-rose-600 disabled:opacity-40 text-rose-300 hover:text-white border border-rose-500/40 text-xs font-bold rounded-xl transition"
        >
          محاكاة استخدام المخترق للرمز المسروق
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h4 className="text-xs font-bold text-slate-400">سجل الأحداث الأمنية في الخادم:</h4>
          {isCompromised && (
            <button onClick={resetSimulation} className="text-[11px] text-sky-400 hover:underline">
              إعادة تعيين المحاكي
            </button>
          )}
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl max-h-48 overflow-y-auto space-y-2 font-mono text-xs">
          {auditLog.length === 0 ? (
            <p className="text-slate-600 text-center py-4">انقر على أزرار التجديد أو المحاكاة لمشاهدة الاستجابة الأمنية...</p>
          ) : (
            auditLog.map((item, idx) => (
              <div
                key={idx}
                className={'p-2 rounded border ' + (
                  item.status === 'breach'
                    ? 'bg-rose-950/40 border-rose-800 text-rose-300'
                    : item.status === 'defense'
                    ? 'bg-amber-950/40 border-amber-800 text-amber-300'
                    : 'bg-slate-900 border-slate-800 text-slate-300'
                )}
              >
                <div className="flex justify-between text-[10px] opacity-70">
                  <span>{item.time}</span>
                  <span>{item.status.toUpperCase()}</span>
                </div>
                <p className="text-[11px] mt-0.5">{item.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}`,
      output:
        "يوضح كيف تضمن تقنية Token Reuse Detection حماية المستخدم؛ فإذا حاول مخترق استخدام رمز تم تدويره، يعلم الخادم فوراً بوقوع سرقة ويقوم بتدمير كافة جلسات الحساب لحمايته.",
      commonMistakes: [
        {
          mistake: "الاعتماد على إفراغ الـ LocalStorage في المتصفح فقط عند تسجيل الخروج دون إخطار الخادم.",
          why: "رمز الـ JWT عديم الحالة سيظل صالحاً ومقبولاً في الخادم حتى ينتهي تاريخ exp الخاص به؛ فإذا كان مسروقاً لدى شخص آخر فسيستمر في استخدامه!",
          fix: "أرسل دائماً طلباً للخادم لإضافة الرمز في القائمة السوداء (Token Blacklist / Revocation List) فور تسجيل الخروج.",
        },
      ],
      bestPractices: [
        "طبق معمارية 'عدم الثقة المطلقة' (Zero Trust Architecture): اعتبر دائماً أن جهاز العميل قد يكون مخترقاً وصمم الخادم ليكون خط الدفاع الحاسم.",
        "استخدم تقنية تتبع أجهزة المستخدمين (Device Fingerprinting) لتنبيه المستخدم عبر البريد الإلكتروني عند تسجيل الدخول من جهاز أو موقع جغرافي جديد.",
      ],
      infographic: {
        title: "استراتيجية الدفاع المتعمق للرموز (Defense in Depth)",
        caption: "طبقات الحماية المتعددة لتأمين رموز المصادقة",
        steps: [
          { number: 1, label: "عمر فائق القصر", desc: "Access Token لا يتجاوز 10 دقائق لتقليل نافذة الخطر" },
          { number: 2, label: "تدوير الرموز (Rotation)", desc: "توليد Refresh Token جديد مع كل عملية تجديد وإبطال القديم" },
          { number: 3, label: "كشف إعادة الاستخدام", desc: "تدمير كافة جلسات المستخدم فور محاولة استخدام رمز منتهي" },
        ],
      },
    },
  ],

  // الاختبارات التفاعلية للموضوع 17.1
  quizzes: [
    {
      id: "q17.1.1",
      question: "ما هو الفارق الجوهري بين كود الاستجابة HTTP 401 و HTTP 403؟",
      options: [
        "401 تعني أن الخادم متوقف، بينما 403 تعني أن الصفحة غير موجودة.",
        "401 تعني فشل المصادقة (AuthN - المستخدم مجهول)، بينما 403 تعني فشل الصلاحية (AuthZ - المستخدم معروف لكنه ممنوع).",
        "401 خاصة بمتصفح كروم، بينما 403 خاصة بمتصفح سفاري.",
        "لا يوجد أي فرق؛ كلاهما يعني خطأ في كلمة المرور.",
      ],
      correctAnswer: 1,
      explanation:
        "401 Unauthorized تعني أن هوية المستخدم مجهولة ويجب تسجيل الدخول، بينما 403 Forbidden تعني أن هويته موثقة وصحيحة لكن صلاحياته لا تكفي لتنفيذ الإجراء المطلوب.",
    },
    {
      id: "q17.1.2",
      question: "لماذا تعد ملفات تعريف الارتباط HttpOnly أكثر أماناً من LocalStorage لتخزين رموز المصادقة؟",
      options: [
        "لأن حجمها أكبر من LocalStorage بـ 10 أضعاف.",
        "لأنها مشفرة تلقائياً بتقنية البلوك تشين.",
        "لأنها محجوبة تماماً عن لغة JavaScript، مما يمنع سرقتها في حال حدوث ثغرة XSS خبيثة في الصفحة.",
        "لأنها لا تنتهي صلاحيتها أبداً على مدار السنوات.",
      ],
      correctAnswer: 2,
      explanation:
        "خاصية HttpOnly تمنع قراءة الكوكي عبر document.cookie من لغة JavaScript، مما يحصن الرمز تماماً ضد السرقة في حال نجاح هجوم حقن الشيفرات الخبيثة XSS.",
    },
    {
      id: "q17.1.3",
      question: "ما الفائدة المعمارية من استخدام ثنائي Access Token و Refresh Token معاً؟",
      options: [
        "مضاعفة استهلاك سرعة الإنترنت لتسريع التصفح.",
        "الجمع بين عمر Access Token القصير لتقليص نافذة الاختراق، وعمر Refresh Token الطويل لتوفير تجربة استخدام سلسة دون طلب كلمة المرور كل دقائق.",
        "جعل الموقع يعمل دون الحاجة إلى تشغيل خادم خلفي.",
        "استبدال مكتبة React بمكتبة jQuery تلقائياً.",
      ],
      correctAnswer: 1,
      explanation:
        "الثنائي يحل المعضلة الأمنية: عمر Access Token القصير (5-15 دقيقة) يقلل خطر تسريبه، بينما يتولى Refresh Token تجديده في الخلفية بسلاسة تامة.",
    },
  ],

  // التمرين العملي للموضوع 17.1
  exercise: {
    id: "ex17.1",
    title: "تمرين تطبيقي: بناء خطاف useAuthToken لإدارة دورة حياة الرموز بأمان",
    description:
      "المطلوب: بناء خطاف مخصص باسم useAuthToken يقوم بتخزين Access Token في الذاكرة (Memory State)، ويفحص وقت انتهاء صلاحيته قبل أي استدعاء، ويقوم بتنفيذ دالة التجديد الصامت (Silent Refresh) تلقائياً عند انتهاء صلاحية الرمز، مع توفير دالة تسجيل خروج آمنة تطهر كافة الحالات.",
    hints: [
      "احفظ accessToken في useState عادي ليكون في ذاكرة المتصفح فقط.",
      "اكتب دالة refreshToken() تحاكي استدعاء الخادم وتحديث الرمز.",
      "اكتب دالة fetchWithAuth(url) تفحص هل الرمز صالح أولاً؛ فإن كان منتهياً تستدعي refreshToken قبل إرسال الطلب.",
    ],
    solution: `// الحل النموذجي لإدارة دورة حياة الرموز بأمان في React
import React, { useState, useCallback } from 'react';

export function useAuthToken() {
  // حفظ Access Token في الذاكرة الحية فقط (Memory State - آمن ضد XSS المباشر)
  const [accessToken, setAccessToken] = useState(null);
  const [tokenExpiry, setTokenExpiry] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // دالة محاكاة التجديد الصامت (Silent Refresh)
  const refreshAccessToken = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // محاكاة استدعاء POST /api/auth/refresh الذي يرسل HttpOnly Cookie تلقائياً
      await new Promise((r) => setTimeout(r, 800));
      const newToken = 'access_jwt_' + Math.random().toString(36).substring(7);
      const newExpiry = Date.now() + 15 * 60 * 1000; // صلاحية لـ 15 دقيقة

      setAccessToken(newToken);
      setTokenExpiry(newExpiry);
      return newToken;
    } catch (err) {
      // فشل التجديد يعني انتهاء الجلسة تماماً
      setAccessToken(null);
      setTokenExpiry(null);
      throw new Error('انتهت الجلسة؛ يرجى تسجيل الدخول مجدداً.');
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  // دالة مخصصة لإرسال الطلبات المحمية مع التجديد الاستباقي التلقائي
  const secureFetch = useCallback(
    async (url, options = {}) => {
      let currentToken = accessToken;
      const isExpired = !tokenExpiry || Date.now() >= tokenExpiry - 5000; // هامش أمان 5 ثوانٍ

      // إذا كان الرمز منتهياً أو شارف على الانتهاء، نجدده أولاً في الخلفية
      if (isExpired) {
        currentToken = await refreshAccessToken();
      }

      // إرفاق الرمز في ترويسة الطلب
      const headers = {
        ...options.headers,
        Authorization: 'Bearer ' + currentToken,
      };

      return fetch(url, { ...options, headers });
    },
    [accessToken, tokenExpiry, refreshAccessToken]
  );

  // دالة تسجيل الخروج الآمن
  const logout = useCallback(() => {
    setAccessToken(null);
    setTokenExpiry(null);
  }, []);

  return {
    accessToken,
    isAuthenticated: Boolean(accessToken),
    isRefreshing,
    secureFetch,
    refreshAccessToken,
    logout,
  };
}

// مكون تجريبي لاستهلاك الخطاف
export function AuthTokenDemoComponent() {
  const auth = useAuthToken();

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-sm font-bold text-white">تجربة خطاف useAuthToken</h4>
      <p className="text-xs text-slate-300">
        الحالة: {auth.isAuthenticated ? 'مسجل الدخول ✓' : 'غير مسجل ✕'}
      </p>
      {auth.accessToken && (
        <p className="text-[10px] font-mono text-sky-400 break-all bg-slate-950 p-2 rounded">
          Token: {auth.accessToken}
        </p>
      )}
      <div className="flex gap-2">
        <button
          onClick={auth.refreshAccessToken}
          disabled={auth.isRefreshing}
          className="flex-1 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded transition"
        >
          {auth.isRefreshing ? 'جارٍ التجديد...' : 'تجديد الرمز'}
        </button>
        {auth.isAuthenticated && (
          <button
            onClick={auth.logout}
            className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs rounded transition"
          >
            خروج
          </button>
        )}
      </div>
    </div>
  );
}`,
  },

  // الإنفوجرافيك الشامل للموضوع 17.1
  infographic: {
    title: "خريطة المفاهيم الأساسية للمصادقة والأمان في React",
    caption: "الركائز الأربع التي يقوم عليها أمان تطبيقات الويب الحديثة",
    steps: [
      { number: 1, label: "الهوية مقابل الصلاحية", desc: "AuthN (إثبات الشخصية) ← AuthZ (فحص الصلاحيات المسموحة)" },
      { number: 2, label: "ثنائي الرموز المميزة", desc: "Access Token (عمر قصير بالذاكرة) + Refresh Token (طويل الأجل في HttpOnly)" },
      { number: 3, label: "البروتوكولات القياسية", desc: "OAuth 2.0 (تفويض الموارد) + OpenID Connect (إثبات الهوية الاجتماعية)" },
      { number: 4, label: "الحصن المنيع", desc: "HttpOnly + Secure + SameSite=Lax لصد هجمات XSS و CSRF" },
    ],
  },
};
