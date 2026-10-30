// src/data/sections/section17/section17Meta.js
// بيانات وملخص القسم 17: المصادقة والصلاحيات والأمان (Authentication, Authorization & Security)

export const section17Meta = {
  id: "section-17",
  title: "المصادقة والصلاحيات والأمان في React",
  description:
    "المرجع الأمني والهندسي الشامل لبناء تطبيقات React منيعة وعالية الأمان: من التمييز بين إثبات الهوية (AuthN) ومنح الصلاحيات (AuthZ)، وثنائي Access و Refresh Tokens، وإدارة الجلسات وHttpOnly Cookies، إلى تطبيق معمارية التحكم بالوصول القائم على الأدوار (RBAC)، وبوابات الصلاحية (PermissionGate)، وحماية مسارات التنقل (Protected Routes)، وصولاً إلى التصدي لثغرات XSS وCSRF وسياسات أمان المحتوى (CSP) وتأمين سلسلة التوريد البرمجية.",

  // 8 قواعد ذهبية أمنية تلخص القسم
  summary: [
    {
      rule: 1,
      title: "الواجهة الأمامية للعرض (UX)، والخادم للأمان (Security)",
      desc: "لا تعتمد أبداً على إخفاء زر أو حظر مسار في React كوسيلة أمان وحيدة؛ يستطيع أي مستخدم التلاعب بكود المتصفح أو إرسال طلب API مباشر عبر Postman. الأمان الحقيقي والإلزامي يقع دائماً في الخادم الخلفي.",
    },
    {
      rule: 2,
      title: "افصل الهوية (AuthN) عن الصلاحيات (AuthZ)",
      desc: "تسجيل الدخول يثبت من أنت فقط (401 Unauthorized عند الفشل)، بينما فحص الصلاحيات يحدد ما يُسمح لك بفعله (403 Forbidden عند الفشل). لا تخلط بين الحالتين في واجهات وتنبيهات المستخدم.",
    },
    {
      rule: 3,
      title: "الهندسة الذهبية للرموز: الذاكرة المؤقتة و HttpOnly Cookies",
      desc: "احفظ Access Token القصير (5-15 دقيقة) في ذاكرة React المؤقتة (Memory State)، واحفظ Refresh Token في ملف تعريف ارتباط محمي بـ HttpOnly و Secure و SameSite=Lax لمنع سرقة الرموز عبر هجمات XSS.",
    },
    {
      rule: 4,
      title: "اعتمد الصلاحيات الحبيبية (Permissions) بدلاً من فحص الأدوار الجامدة",
      desc: "افحص دائماً الصلاحية المحددة `hasPermission('posts:delete')` بدلاً من فحص الدور `user.role === 'admin'`. يمنح هذا نظامك مرونة لا متناهية لإنشاء وتعديل أدوار وظيفية جديدة دون تعديل سطر واحد في كود React.",
    },
    {
      rule: 5,
      title: "حماية رحلة المستخدم بتذكر الوجهة (Location Memory)",
      desc: "في مكونات Protected Routes، مرر دائماً مسار الوجهة السابقة عبر `state: { from: location }` مع خاصية `replace: true` ليعود المستخدم تلقائياً للصفحة التي كان يقصدها بعد تسجيل الدخول.",
    },
    {
      rule: 6,
      title: "لا تستخدم dangerouslySetInnerHTML بدون تطهير DOMPurify",
      desc: "تجاوز دفاعات JSX الافتراضية عبر dangerouslySetInnerHTML هو الباب الملكي لثغرات XSS. إذا كان استخدامه حتمياً، طهر المحتوى مسبقاً بشكل إلزامي باستخدام مكتبة DOMPurify بقائمة بيضاء صارمة.",
    },
    {
      rule: 7,
      title: "احظر تضمين الأسرار والمفاتيح الحساسة في React",
      desc: "كل متغير يبدأ بـ VITE_ أو يتم استيراده في كود React يتم تجميعه في ملفات JavaScript مكشوفة بالكامل للمتصفح. ضع المفاتيح العامة فقط في الواجهة وانقل العمليات السرية وقواعد البيانات للخادم الخلفي.",
    },
    {
      rule: 8,
      title: "حصن الروابط الخارجية بـ rel='noopener noreferrer'",
      desc: "أي رابط خارجي يُفتح في تبويب جديد عبر `target='_blank'` يجب أن يحمل خاصية `rel='noopener noreferrer'` لمنع الموقع الخارجي من التلاعب بصفحتك الأصلية عبر هجمات Reverse Tabnabbing.",
    },
  ],

  // جدول المرجع السريع (Cheat Sheet) - أكثر من 20 صفاً تفصيلياً
  cheatSheet: [
    {
      concept: "Authentication (AuthN)",
      scope: "إثبات الهوية",
      usage: "التحقق من صحة ادعاء المستخدم لشخصيته عبر كلمات المرور، أو 2FA، أو البصمة.",
      statusFailure: "HTTP 401 Unauthorized",
    },
    {
      concept: "Authorization (AuthZ)",
      scope: "منح الصلاحيات",
      usage: "التحقق مما إذا كان المستخدم الموثق يمتلك إذن تنفيذ إجراء معين على مورد محدد.",
      statusFailure: "HTTP 403 Forbidden",
    },
    {
      concept: "JWT (JSON Web Token)",
      scope: "مصادقة عديمة الحالة",
      usage: "رمز مميز مدمج وموقع رقمياً (Header.Payload.Signature) يتيح التوسع الأفقي للخوادم.",
      statusFailure: "Token Expired / Invalid Signature",
    },
    {
      concept: "Access Token",
      scope: "رمز وصول قصير الأجل",
      usage: "يُرسل في ترويسة Authorization: Bearer مع كل طلب API؛ عمره من 5 إلى 15 دقيقة فقط.",
      statusFailure: "يتطلب تجديد صامت (Silent Refresh)",
    },
    {
      concept: "Refresh Token",
      scope: "رمز تجديد طويل الأجل",
      usage: "يُحفظ بأمان في HttpOnly Cookie ويُستخدم حصراً لطلب Access Token جديد عند انتهائه.",
      statusFailure: "إعادة تسجيل الدخول (Logout)",
    },
    {
      concept: "HttpOnly Cookie",
      scope: "تخزين آمن بالمتصفح",
      usage: "ملف تعريف ارتباط محجوب تماماً عن لغة JavaScript، مما يحصنه بنسبة 100% من سرقة XSS.",
      statusFailure: "لا يمكن قراءته بـ document.cookie",
    },
    {
      concept: "Secure Flag",
      scope: "تشفير الاتصال",
      usage: "راية تمنع المتصفح من إرسال الكوكي إلا عبر اتصالات HTTPS المشفرة فقط.",
      statusFailure: "محجوب على شبكات HTTP العادية",
    },
    {
      concept: "SameSite=Lax",
      scope: "الوقاية من CSRF",
      usage: "راية تمنع إرسال الكوكي في الطلبات الخفية القادمة من مواقع أخرى للتصدي لتزوير الطلبات.",
      statusFailure: "CSRF Blocked",
    },
    {
      concept: "LocalStorage",
      scope: "تخزين بالمتصفح",
      usage: "تخزين متاح لـ JavaScript، مكشوف لثغرات XSS، غير آمن للرموز الحساسة طويلة الأجل.",
      statusFailure: "معرض للسرقة الفورية عند حدوث XSS",
    },
    {
      concept: "OAuth 2.0",
      scope: "بروتوكول تفويض",
      usage: "يمنح تطبيقك وصولاً محدوداً لموارد المستخدم على خدمات خارجية دون معرفة كلمة مروره.",
      statusFailure: "يرجع Access Token للموارد",
    },
    {
      concept: "OpenID Connect (OIDC)",
      scope: "بروتوكول مصادقة",
      usage: "طبقة هوية مبنية فوق OAuth 2.0 تتيح تسجيل الدخول الاجتماعي (Google / GitHub) وترجع ID Token.",
      statusFailure: "يرجع ID Token ببيانات المستخدم",
    },
    {
      concept: "Protected Route",
      scope: "أمان التنقل في React",
      usage: "مكون حارس يعترض المستخدم غير الموثق ويعيد توجيهه لـ /login مع تذكر رابط الوجهة.",
      statusFailure: "Navigate to /login with state.from",
    },
    {
      concept: "Location Memory",
      scope: "تجربة الاستخدام والأمان",
      usage: "تخزين الوجهة المطلوبة في `state: { from: location }` لإعادة المستخدم إليها بعد الدخول.",
      statusFailure: "العودة للرئيسية كخيار بديل",
    },
    {
      concept: "Role-Based Access (RBAC)",
      scope: "معمارية الصلاحيات",
      usage: "توزيع الصلاحيات عبر أدوار هرمية أو مصفوفات أذونات لتأمين أقسام لوحة التحكم.",
      statusFailure: "عرض 403 Forbidden للرتب الأدنى",
    },
    {
      concept: "PermissionGate",
      scope: "عرض مشروط في React",
      usage: "مكون إعلاني حاضن يخفي الأزرار الحساسة أو يعطلها بتلميح Tooltip للمستخدمين غير المصرحين.",
      statusFailure: "عرض Fallback أو إخفاء العنصر",
    },
    {
      concept: "JSX Auto-Escaping",
      scope: "دفاع React الافتراضي",
      usage: "تحويل المحارف الخطرة تلقائياً لنصوص مسالمة (textContent) لمنع ثغرات XSS بنسبة 95%.",
      statusFailure: "معطل فقط مع dangerouslySetInnerHTML",
    },
    {
      concept: "dangerouslySetInnerHTML",
      scope: "حقن مباشر في DOM",
      usage: "عرض محتوى HTML خام منسق؛ يفتح ثغرة XSS كارثية إذا لم يتم تطهيره بـ DOMPurify.",
      statusFailure: "XSS Vulnerability إن لم يُطهر",
    },
    {
      concept: "DOMPurify",
      scope: "مكتبة تطهير HTML",
      usage: "استئصال السكريبتات وأحداث onerror و javascript: مع الحفاظ على التنسيقات الآمنة.",
      statusFailure: "DOMPurify.sanitize(dirty)",
    },
    {
      concept: "Content Security Policy (CSP)",
      scope: "جدار حماية المتصفح",
      usage: "ترويسة تحدد قائمة بيضاء بالنطاقات المسموح بتحميل السكريبتات والاتصال بها (connect-src).",
      statusFailure: "حظر السكريبتات المدمجة والمصادر المجهولة",
    },
    {
      concept: "CORS",
      scope: "مشاركة عبر النطاقات",
      usage: "نظام أمان بالمتصفح يتطلب موافقة الخادم الصريحة قبل السماح لـ React بقراءة البيانات.",
      statusFailure: "Preflight OPTIONS Blocked",
    },
    {
      concept: "rel='noopener noreferrer'",
      scope: "تأمين الروابط الخارجية",
      usage: "عزل التبويب الجديد المفتوح بـ target='_blank' لمنع هجمات الاستيلاء العكسي (Reverse Tabnabbing).",
      statusFailure: "window.opener === null",
    },
    {
      concept: "npm audit & Dependabot",
      scope: "أمان سلسلة التوريد",
      usage: "فحص وتحديث مكتبات الطرف الثالث الدورية لاكتشاف الثغرات وتثبيت التصحيحات.",
      statusFailure: "npm audit fix",
    },
  ],

  // المشروع التطبيقي الختامي للقسم (Capstone Studio)
  capstoneProject: {
    id: "capstone-17",
    title: "AuthShield Pro: منصة أمان ومصادقة React المتكاملة",
    subtitle: "استوديو أمني حي يحاكي تدفقات الرموز المزدوجة، وبوابات الصلاحيات RBAC، وفحص الثغرات المباشر",
    description:
      "مشروع تطبيقي مؤسسي متكامل يعمل كاستوديو أمني شامل للمصادقة في React: يجمع بين 1) محاكي تفاعلي لدورة حياة الرموز المزدوجة (Access/Refresh Tokens) والتجديد الصامت التلقائي، 2) نظام حراسة المسارات وبوابات الصلاحيات الحبيبية (PermissionGate) مع تبديل الأدوار وتصفية القوائم الحية، 3) مختبر فحص ثغرات XSS وCSRF وتطهير الأكواد بـ DOMPurify مع تقارير أمان تفاعلية.",
    techStack: [
      "React 19 Security Architecture",
      "Role-Based Access Control (RBAC)",
      "Silent Token Refresh Engine",
      "DOMPurify Sanitization Protocol",
      "Tailwind CSS v4 Dark Security Theme",
    ],
    features: [
      "محاكي دورة حياة الرموز المزدوجة مع تتبع أعمار الرموز والتجديد الاستباقي الصامت",
      "نظام صلاحيات هرمي تفاعلي يتيح تبديل الأدوار ومراقبة أزرار وقوائم لوحة التحكم",
      "مختبر حقن وتطهير أكواد HTML الحية مع مقارنة قبل وبعد الفلترة بـ DOMPurify",
      "بوابة فحص أمني تحاكي التصدي لهجمات 401 Unauthorized و 403 Forbidden و 429 Rate Limit",
    ],
    code: `import React, { useState, useEffect, createContext, useContext } from 'react';

// ==========================================
// 1. سياق المصادقة والصلاحيات المركزي (Auth Context)
// ==========================================
const AuthContext = createContext(null);

const MOCK_ROLES = {
  USER: { name: 'مستخدم عادي', level: 1, permissions: ['dashboard:view', 'posts:read'] },
  EDITOR: { name: 'محرر محتوى', level: 2, permissions: ['dashboard:view', 'posts:read', 'posts:write'] },
  ADMIN: { name: 'مدير تنفيذي', level: 3, permissions: ['dashboard:view', 'posts:read', 'posts:write', 'posts:delete', 'security:manage'] },
};

function AuthShieldProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    name: 'سارة خالد',
    email: 'sara@authshield.io',
    roleKey: 'EDITOR',
  });

  const [accessTokenRemaining, setAccessTokenRemaining] = useState(15);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // دورة عد تنازلي تحاكي عمر الـ Access Token القصير
  useEffect(() => {
    const timer = setInterval(() => {
      setAccessTokenRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // دالة التجديد الصامت (Silent Refresh)
  const silentRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((r) => setTimeout(r, 800));
    setAccessTokenRemaining(60);
    setIsRefreshing(false);
  };

  const changeRole = (roleKey) => {
    setCurrentUser((prev) => ({ ...prev, roleKey }));
  };

  const roleMeta = MOCK_ROLES[currentUser.roleKey];
  const hasPermission = (perm) => roleMeta.permissions.includes(perm);

  const value = {
    user: currentUser,
    roleMeta,
    hasPermission,
    changeRole,
    accessTokenRemaining,
    silentRefresh,
    isRefreshing,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuthShield() {
  return useContext(AuthContext);
}

// ==========================================
// 2. مكون بوابة الصلاحية (PermissionGate Component)
// ==========================================
function PermissionGate({ permission, fallback = null, children }) {
  const { hasPermission } = useAuthShield();
  if (!hasPermission(permission)) return fallback;
  return <>{children}</>;
}

// ==========================================
// 3. مختبر فحص ثغرات XSS وتطهير DOMPurify
// ==========================================
function XssSanitizerWidget() {
  const defaultMalicious = '<h4 style="color:#38bdf8">تقرير أمني معتمد</h4><p>يمكنك مراجعة المرفقات.</p><img src="x" onerror="alert(\\'تم اعتراض الجلسة عبر ثغرة XSS!\\')" />';
  const [rawInput, setRawInput] = useState(defaultMalicious);
  const [isSanitized, setIsSanitized] = useState(true);

  // دالة تطهير محاكية لـ DOMPurify
  const sanitize = (text) => {
    return text
      .replace(/<script[\\s\\S]*?<\\/script>/gi, '')
      .replace(/\\son\\w+\\s*=\\s*["'][^"']*["']/gi, '')
      .replace(/\\son\\w+\\s*=\\s*[^\\s>]+/gi, '');
  };

  const displayedHtml = isSanitized ? sanitize(rawInput) : rawInput;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">مختبر التصدي لـ XSS وتطهير HTML</h3>
          <p className="text-xs text-slate-400">شاهد كيف يعزل التطهير الشيفرات الخبيثة من DOM</p>
        </div>
        <button
          onClick={() => setIsSanitized(!isSanitized)}
          className={'px-3 py-1 text-xs font-bold rounded-lg border transition ' + (
            isSanitized
              ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500/40'
              : 'bg-rose-600 text-white border-rose-500 animate-pulse'
          )}
        >
          {isSanitized ? 'درع التطهير: مفعل ✓' : 'درع التطهير: معطل ⚠️'}
        </button>
      </header>

      <div className="space-y-1">
        <label className="text-xs text-slate-400 block font-mono">المدخلات الخام (Dirty Input):</label>
        <textarea
          rows={2}
          value={rawInput}
          onChange={(e) => setRawInput(e.target.value)}
          className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-slate-300 focus:outline-none"
        />
      </div>

      <div className="space-y-1">
        <span className="text-xs font-bold text-white block">العرض في شجرة DOM الحية:</span>
        <div
          className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200"
          dangerouslySetInnerHTML={{ __html: displayedHtml }}
        />
      </div>
    </div>
  );
}

// ==========================================
// 4. استوديو إدارة الرموز والصلاحيات الحية
// ==========================================
function TokenAndRbacWidget() {
  const { user, roleMeta, changeRole, accessTokenRemaining, silentRefresh, isRefreshing } = useAuthShield();

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5">
      <header className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">إدارة الرموز والصلاحيات الهرمية</h3>
          <p className="text-xs text-slate-400">المستخدم الحالي: {user.name} ({user.email})</p>
        </div>
        <div className="flex gap-1.5">
          {Object.keys(MOCK_ROLES).map((key) => (
            <button
              key={key}
              onClick={() => changeRole(key)}
              className={'px-3 py-1 text-xs font-bold rounded-lg border transition ' + (
                user.roleKey === key
                  ? 'bg-sky-600 text-white border-sky-500 shadow-md'
                  : 'bg-slate-850 text-slate-400 border-slate-800 hover:text-white'
              )}
            >
              {key}
            </button>
          ))}
        </div>
      </header>

      {/* شريط حالة الرمز القصير */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">⏱️</span>
          <div>
            <span className="text-xs font-bold text-white block">صلاحية Access Token (Memory State):</span>
            <span className={'text-xs font-mono font-bold ' + (accessTokenRemaining > 0 ? 'text-emerald-400' : 'text-rose-400')}>
              {accessTokenRemaining > 0 ? accessTokenRemaining + ' ثانية متبقية' : 'منتهي الصلاحية (401)'}
            </span>
          </div>
        </div>

        <button
          onClick={silentRefresh}
          disabled={isRefreshing}
          className="px-4 py-2 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 text-white font-bold text-xs rounded-xl transition shadow-md"
        >
          {isRefreshing ? 'جارٍ التجديد الصامت...' : 'تجديد الرمز الآن (Silent Refresh)'}
        </button>
      </div>

      {/* لوحة اختبار بوابات الصلاحية */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-400 block">
          الأزرار المحمية بمكون &lt;PermissionGate&gt; للدور ({roleMeta.name}):
        </span>

        <div className="flex flex-wrap gap-2.5">
          <PermissionGate permission="dashboard:view">
            <button className="px-3 py-1.5 bg-slate-800 text-white text-xs font-bold rounded-lg">
              لوحة المؤشرات
            </button>
          </PermissionGate>

          <PermissionGate permission="posts:write">
            <button className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-lg">
              + إنشاء مقال جديد
            </button>
          </PermissionGate>

          <PermissionGate
            permission="posts:delete"
            fallback={
              <button disabled className="px-3 py-1.5 bg-slate-850 text-slate-600 text-xs rounded-lg cursor-not-allowed border border-slate-800">
                حذف المنشورات 🔒
              </button>
            }
          >
            <button className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition">
              حذف المنشورات 🗑️
            </button>
          </PermissionGate>

          <PermissionGate
            permission="security:manage"
            fallback={
              <button disabled className="px-3 py-1.5 bg-slate-850 text-slate-600 text-xs rounded-lg cursor-not-allowed border border-slate-800">
                إدارة خوادم الأمان 🔒
              </button>
            }
          >
            <button className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-lg transition">
              إدارة خوادم الأمان 🛡️
            </button>
          </PermissionGate>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. المكون الرئيسي الشامل لـ AuthShield Pro
// ==========================================
export default function AuthShieldProCapstone() {
  const [activeTab, setActiveTab] = useState('rbac');

  return (
    <AuthShieldProvider>
      <div className="p-8 bg-slate-950 border border-slate-800 rounded-3xl max-w-4xl mx-auto space-y-6 shadow-2xl">
        <header className="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <h2 className="text-2xl font-black text-white tracking-wide">AuthShield Pro Studio</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              المنصة الهندسية المتكاملة لمحاكاة المصادقة والأمان والصلاحيات في React
            </p>
          </div>
          <span className="text-xs px-3 py-1 bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 rounded-full font-mono font-bold">
            Zero-Trust Enterprise Standard
          </span>
        </header>

        {/* أزرار التبويبات */}
        <div className="flex gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
          <button
            onClick={() => setActiveTab('rbac')}
            className={'flex-1 py-2 text-xs font-bold rounded-lg transition ' + (
              activeTab === 'rbac' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            )}
          >
            إدارة الرموز وصلاحيات RBAC
          </button>
          <button
            onClick={() => setActiveTab('xss')}
            className={'flex-1 py-2 text-xs font-bold rounded-lg transition ' + (
              activeTab === 'xss' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            )}
          >
            مختبر تنقية XSS و DOMPurify
          </button>
        </div>

        {/* عرض المحتوى بحسب التبويب */}
        {activeTab === 'rbac' ? <TokenAndRbacWidget /> : <XssSanitizerWidget />}
      </div>
    </AuthShieldProvider>
  );
}`,
  },

  // الإنفوجرافيك الشامل للقسم 17
  infographic: {
    title: "خريطة طريق المصادقة والأمان في React",
    caption: "من تأمين الرموز والصلاحيات إلى الحصن المنيع ضد ثغرات الويب",
    steps: [
      {
        number: 1,
        label: "أساسيات المصادقة",
        desc: "AuthN مقابل AuthZ، ثنائي الرموز Access/Refresh، ومقارنة HttpOnly مع LocalStorage",
      },
      {
        number: 2,
        label: "واجهات وتدفقات الدخول",
        desc: "صفحات الدخول والتسجيل، استعادة كلمة المرور، حراسة Protected Routes، ومعالجة 429",
      },
      {
        number: 3,
        label: "إدارة الصلاحيات (RBAC)",
        desc: "الصلاحيات الحبيبية، مكونات PermissionGate، وحتمية التحقق في الخادم الخلفي",
      },
      {
        number: 4,
        label: "أمان تطبيقات React",
        desc: "التصدي لثغرات XSS و CSRF، تنقية DOMPurify، سياسات CSP، وحظر تسريب الأسرار",
      },
    ],
  },
};
