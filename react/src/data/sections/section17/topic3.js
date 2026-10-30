// src/data/sections/section17/topic3.js
// الموضوع 17.3: إدارة الصلاحيات والتحكم بالوصول في React (Role-Based Access Control - RBAC)

export const topic3 = {
  id: "17.3",
  title: "إدارة الصلاحيات (Role-Based Access Control - RBAC)",
  description:
    "الدليل الهندسي المعمق لتصميم وتطبيق أنظمة الصلاحيات في React: من التمييز بين الأدوار (Roles) والصلاحيات الحبيبية الدقيقة (Permissions)، وتطبيق معمارية RBAC عبر مكونات PermissionGate والخطافات المساعدة، وتأمين لوحات التحكم الإدارية، وصولاً إلى القاعدة الذهبية الحاسمة: منع الوهم الأمني للاعتماد على واجهة Frontend فقط وفرض التحقق الإلزامي في الخادم.",
  subtopics: [
    // 17.3.a
    {
      id: "17.3.a",
      title: "مفهوم الأدوار (Roles) والصلاحيات الدقيقة (Permissions)",
      englishTerm: "Roles vs Permissions (رولز فيرسس بيرميشنز) - الأدوار الوظيفية مقابل الصلاحيات الدقيقة",
      description:
        "في الأنظمة البرمجية المبتدئة، يقوم المطورون غالباً بالتحقق من الأدوار مباشرة (مثل: `if (user.role === 'admin')`). ومع نمو النظام، ينهار هذا الأسلوب سريعاً! الحل الهندسي هو التمييز بين الأدوار والصلاحيات: الدور (Role) هو مجرد 'حاوية وظيفية' واسعة تجمع مجموعة من المسؤوليات (مثل 'مدير المتجر'، 'محرر المحتوى'، 'محاسب'). أما الصلاحية (Permission) فهي 'إذن محدد ودقيق وحبيبي' للقيام بإجراء مفرد على مورد معين (مثل: `posts:create`، `posts:delete`، `users:ban`، `invoices:export`). المطور المحترف يفحص دائماً الصلاحية (هل يملك المستخدم إذن `invoice:refund`؟) وليس الدور؛ مما يتيح للإدارة إنشاء أدوار مخصصة وتعديل صلاحياتها مستقبلاً دون تعديل سطر واحد في كود React!",
      analogy:
        "مثل حزمة المفاتيح في فندق كبير: 'الدور' هو المسمى الوظيفي للشخص (مثل: رئيس قسم الصيانة). 'الصلاحيات' هي المفاتيح الفعلية الموجودة في حلقة مفاتيحه (مفتاح غرفة الكهرباء، مفتاح المصعد، مفتاح السطح). عندما يحتاج العامل لفتح غرفة الكهرباء، لا تفحص الباب هل هو 'رئيس قسم الصيانة'؛ بل يفحص قفل الباب هل المفتاح الموجود بيده يناسب هذا القفل المحدد أم لا! إذا تم سحب مفتاح السطح منه غداً، سيظل رئيساً للصيانة ولكن دون إمكانية فتح السطح.",
      whyItMatters:
        "الاعتماد على الصلاحيات الحبيبية (Granular Permissions) يمنح النظام مرونة لا متناهية: يمكنك ترقية مستخدم عادي ليمتلك صلاحية حذف المنشورات فقط دون جعله مديراً عاماً (Admin) يملك صلاحيات تخريبية على قاعدة البيانات.",
      syntax: `// التمييز المعماري:
// الدور (Role): 'EDITOR'
// الصلاحيات (Permissions): ['articles:create', 'articles:edit', 'articles:publish']

// فحص الصلاحية في الكود بدلاً من فحص الدور:
const canDelete = hasPermission(user, 'articles:delete');`,
      simpleExample: `// مثال بسيط يوضح فحص الصلاحية الحبيبية بدلاً من فحص الدور العام
import React from 'react';

export function PermissionCheckSimple() {
  // نموذج مستخدم يمتلك دوراً ومصفوفة صلاحيات دقيقة
  const user = {
    name: 'سليمان خالد',
    role: 'SUPPORT_AGENT',
    permissions: ['tickets:read', 'tickets:reply', 'users:view'],
  };

  // دالة مساعدة لفحص الصلاحية
  const hasPermission = (perm) => user.permissions.includes(perm);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm space-y-4">
      <header className="pb-2 border-b border-slate-800">
        <h4 className="text-sm font-bold text-white">{user.name}</h4>
        <span className="text-[11px] text-sky-400 font-mono">الدور: {user.role}</span>
      </header>

      <div className="space-y-2">
        <span className="text-xs text-slate-400 block font-semibold">الإجراءات المتاحة:</span>

        {/* فحص صلاحية الرد */}
        {hasPermission('tickets:reply') && (
          <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition">
            الرد على التذكرة (tickets:reply ✓)
          </button>
        )}

        {/* فحص صلاحية حذف التذكرة غير الممنوحة له */}
        {hasPermission('tickets:delete') ? (
          <button className="w-full py-2 bg-rose-600 text-white text-xs font-bold rounded-lg">
            حذف التذكرة
          </button>
        ) : (
          <div className="p-2 bg-slate-850 rounded text-[11px] text-slate-500 text-center border border-slate-800">
            🔒 حذف التذكرة يتطلب صلاحية (tickets:delete) غير متوفرة لدورك.
          </div>
        )}
      </div>
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي متقدم لتعيين وتخصيص الصلاحيات وفحص الأزرار الحية (Dynamic RBAC Engine)
import React, { useState } from 'react';

// قائمة الصلاحيات الشاملة في النظام
const ALL_PERMISSIONS = [
  { id: 'posts:create', label: 'إنشاء منشورات جديدة' },
  { id: 'posts:edit', label: 'تعديل المحتوى الحالي' },
  { id: 'posts:delete', label: 'حذف المنشورات نهائياً' },
  { id: 'users:manage', label: 'إدارة وتجميد المستخدمين' },
  { id: 'billing:view', label: 'الاطلاع على التقارير المالية' },
];

export function DynamicRbacSimulator() {
  // حالة الصلاحيات الممنوحة حالياً للمستخدم
  const [grantedPermissions, setGrantedPermissions] = useState(['posts:create', 'posts:edit']);

  const togglePermission = (permId) => {
    setGrantedPermissions((prev) =>
      prev.includes(permId) ? prev.filter((p) => p !== permId) : [...prev, permId]
    );
  };

  const hasPermission = (permId) => grantedPermissions.includes(permId);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="pb-3 border-b border-slate-800">
        <h3 className="text-base font-bold text-white">محاكي مصفوفة الصلاحيات الحبيبية (RBAC Matrix)</h3>
        <p className="text-xs text-slate-400">بدّل الصلاحيات الممنوحة وشاهد تأثر أزرار لوحة التحكم فوراً</p>
      </header>

      {/* لوحة تبديل الصلاحيات الممنوحة */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-300 block">اختر الصلاحيات الممنوحة للمستخدم:</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {ALL_PERMISSIONS.map((perm) => {
            const isChecked = grantedPermissions.includes(perm.id);
            return (
              <label
                key={perm.id}
                className={'p-2.5 rounded-xl border flex items-center justify-between text-xs cursor-pointer transition ' + (
                  isChecked ? 'bg-sky-950/40 border-sky-500/40 text-white' : 'bg-slate-850 border-slate-800 text-slate-400'
                )}
              >
                <span>{perm.label}</span>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => togglePermission(perm.id)}
                  className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500"
                />
              </label>
            );
          })}
        </div>
      </div>

      {/* لوحة الأزرار الناتجة بناءً على الصلاحيات */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
        <span className="text-xs font-bold text-slate-400 block border-b border-slate-800 pb-2">
          معاينة أزرار لوحة التحكم التفاعلية:
        </span>

        <div className="flex flex-wrap gap-2">
          {hasPermission('posts:create') && (
            <button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition">
              + إضافة مقال
            </button>
          )}

          {hasPermission('posts:edit') && (
            <button className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition">
              ✏️ تعديل المقال
            </button>
          )}

          {hasPermission('posts:delete') && (
            <button className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition">
              🗑️ حذف المقال
            </button>
          )}

          {hasPermission('users:manage') && (
            <button className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-lg transition">
              👥 حظر مستخدم
            </button>
          )}

          {hasPermission('billing:view') && (
            <button className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg transition">
              📊 التقرير المالي
            </button>
          )}

          {grantedPermissions.length === 0 && (
            <p className="text-xs text-slate-500 py-2">لا توجد أي إجراءات مصرح بها لهذا المستخدم حالياً.</p>
          )}
        </div>
      </div>
    </div>
  );
}`,
      output:
        "يوضح النموذج كيف يتغير مظهر وسلوك التطبيق ديناميكياً بناءً على الصلاحيات الدقيقة الممنوحة للمستخدم، مما يفصل منطق الشاشات عن مسميات الأدوار الجامدة.",
      commonMistakes: [
        {
          mistake: "فحص الأدوار الحرفية في كل شاشة مثل `user.role === 'admin' || user.role === 'super_editor' || user.role === 'moderator'`.",
          why: "إذا أنشأت الشركة غداً دوراً جديداً يسمى 'content_lead'، سيتعين عليك البحث والتعديل في 50 ملفاً برمجياً!",
          fix: "افحص الصلاحية فقط: `hasPermission(user, 'post:edit')` ودع الخادم يحدد أي الأدوار تمتلك هذه الصلاحية.",
        },
      ],
      bestPractices: [
        "استخدم صيغة موحدة لتسمية الصلاحيات تتبع نمط `resource:action` (مثل: `users:create`, `invoices:read`).",
        "احرص على أن تكون مصفوفة الصلاحيات قادمة مباشرة داخل حمولة الـ JWT أو يتم جلبها فور تسجيل الدخول.",
      ],
      infographic: {
        title: "التسلسل الهرمي: من الدور إلى الصلاحية الحبيبية",
        caption: "بناء أنظمة تصريح مرنة وقابلة للتوسع",
        steps: [
          { number: 1, label: "المستخدم (User)", desc: "يمتلك دوراً وظيفياً واحداً أو أكثر (مثال: محرر Editor)" },
          { number: 2, label: "الدور (Role)", desc: "حزمة وظيفية تحتوي على مجموعة صلاحيات (articles:write, articles:edit)" },
          { number: 3, label: "الصلاحية (Permission)", desc: "المفتاح الدقيق الذي تفحصه الواجهة للسماح بإجراء معين" },
        ],
      },
    },

    // 17.3.b
    {
      id: "17.3.b",
      title: "تطبيق Role-Based Access Control (RBAC) في React",
      englishTerm: "Role-Based Access Control: RBAC (آر باك) - نظام التحكم في الوصول القائم على الأدوار",
      description:
        "معمارية RBAC هي المعيار الأكثر انتشاراً عالمياً للتحكم في الوصول في تطبيقات الويب. في React، تتطلب المعمارية النظيفة لـ RBAC ثلاثة عناصر أساسية: 1) مصفوفة أو شجرة الأدوار (Roles Hierarchy): تحدد التدرج الهرمي (مثلاً `SUPER_ADMIN` يمتلك تلقائياً كافة صلاحيات `ADMIN`، و `ADMIN` يمتلك صلاحيات `USER`)، 2) خطاف مساعدة مخصص مثل `useAuthorization()`: يوفر دوال مثل `can(permission)` و `hasRole(role)`، 3) فحص الصلاحيات ضمن دورة حياة المكونات ومسارات التوجيه لمنع غير المؤهلين من دخول الأقسام المحمية.",
      analogy:
        "مثل الرتب العسكرية في الجيش: الجندي يمتلك صلاحيات محددة، والضابط يمتلك صلاحيات الجندي بالإضافة لصلاحيات التوجيه، واللواء في غرفة القيادة يمتلك صلاحيات الضابط والجندي بالإضافة لصلاحيات تحريك الجيوش وإعلان العمليات الكبرى. لا تحتاج لكتابة اسم اللواء في كل أمر؛ رتبته الأعلى تمنحه الصلاحيات تلقائياً!",
      whyItMatters:
        "يمنع تكرار كود التحقق في عشرات الشاشات، ويوحد منطق الأمان في خطاف واحد يسهل اختباره برمجياً.",
      syntax: `// نموذج خطاف RBAC:
function usePermission() {
  const { user } = useAuth();
  const can = (permission) => user?.permissions?.includes(permission);
  const hasRole = (role) => user?.role === role;
  return { can, hasRole };
}`,
      simpleExample: `// مثال بسيط لخطاف usePermission للتحقق من الأدوار والصلاحيات
import React from 'react';

// خطاف محاكاة للصلاحيات
export function useMockPermissions() {
  // بيانات مستخدم مفترضة
  const currentUser = {
    role: 'MANAGER',
    permissions: ['reports:view', 'employees:evaluate'],
  };

  const can = (perm) => currentUser.permissions.includes(perm);
  const hasRole = (requiredRole) => currentUser.role === requiredRole;

  return { user: currentUser, can, hasRole };
}

export function RbacHookDemo() {
  const { user, can, hasRole } = useMockPermissions();

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-xs font-bold text-white">تجربة خطاف RBAC المخصص</h4>
      <p className="text-xs text-slate-300">الدور الحالي: <span className="text-sky-400 font-mono font-bold">{user.role}</span></p>

      {can('reports:view') && (
        <div className="p-2.5 bg-slate-850 rounded border border-emerald-500/30 text-xs text-emerald-300">
          ✓ مصرح لك بعرض التقارير (can('reports:view'))
        </div>
      )}

      {hasRole('ADMIN') ? (
        <button className="w-full py-1.5 bg-rose-600 text-white text-xs font-bold rounded">
          لوحة الإدارة العليا
        </button>
      ) : (
        <p className="text-[11px] text-slate-500">يتطلب دور ADMIN للدخول للوحة العليا.</p>
      )}
    </div>
  );
}`,
      advancedExample: `// محرك RBAC هرمي كامل مع فحص الأدوار المتدرجة (Role Hierarchy Engine)
import React, { useState } from 'react';

// شجرة التدرج الهرمي للأدوار: كل دور يرث صلاحيات الأدوار الأدنى منه
const ROLE_HIERARCHY = {
  SUPER_ADMIN: 4,
  ADMIN: 3,
  MODERATOR: 2,
  USER: 1,
};

export function HierarchicalRbacEngineDemo() {
  const [activeUserRole, setActiveUserRole] = useState('MODERATOR');

  // دالة فحص الصلاحية الهرمية: هل رتبة المستخدم تساوي أو تعلو الرتبة المطلوبة؟
  const hasMinRole = (requiredMinRole) => {
    const userLevel = ROLE_HIERARCHY[activeUserRole] || 0;
    const requiredLevel = ROLE_HIERARCHY[requiredMinRole] || 0;
    return userLevel >= requiredLevel;
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">محرك الأدوار الهرمية (Hierarchical RBAC)</h3>
          <p className="text-xs text-slate-400">وراثة الصلاحيات التلقائية وفق الرتبة الوظيفية</p>
        </div>
        <span className="text-xs font-mono font-bold px-2 py-0.5 bg-sky-950 text-sky-400 border border-sky-500/30 rounded">
          {activeUserRole} (Level {ROLE_HIERARCHY[activeUserRole]})
        </span>
      </header>

      {/* أزرار تبديل الدور لاختبار الوراثة */}
      <div className="space-y-1">
        <label className="text-xs text-slate-400 block font-semibold">اختر رتبة المستخدم لاختبار الوراثة:</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {Object.keys(ROLE_HIERARCHY).map((role) => (
            <button
              key={role}
              onClick={() => setActiveUserRole(role)}
              className={'py-2 px-2 text-xs font-bold rounded-xl border transition ' + (
                activeUserRole === role
                  ? 'bg-sky-600 text-white border-sky-500 shadow-md'
                  : 'bg-slate-850 text-slate-300 border-slate-800 hover:border-slate-700'
              )}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* استعراض الأقسام المفتوحة بناءً على التدرج الهرمي */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-300 block">الأقسام المتاحة للمستخدم حالياً:</span>

        {/* متاح للجميع (USER فأعلى) */}
        <div className={'p-3 rounded-xl border text-xs flex justify-between items-center ' + (
          hasMinRole('USER') ? 'bg-slate-850 border-slate-700 text-white' : 'bg-slate-950/40 border-slate-900 text-slate-600'
        )}>
          <span>قسم المقالات العامة (يتطلب USER فأعلى)</span>
          <span className="font-mono text-[10px]">{hasMinRole('USER') ? 'مفتوح ✓' : 'مغلق 🔒'}</span>
        </div>

        {/* متاح للمشرفين (MODERATOR فأعلى) */}
        <div className={'p-3 rounded-xl border text-xs flex justify-between items-center ' + (
          hasMinRole('MODERATOR') ? 'bg-sky-950/30 border-sky-500/40 text-sky-200' : 'bg-slate-950/40 border-slate-900 text-slate-600'
        )}>
          <span>لوحة مراجعة التعليقات (يتطلب MODERATOR فأعلى)</span>
          <span className="font-mono text-[10px]">{hasMinRole('MODERATOR') ? 'مفتوح ✓' : 'مغلق 🔒'}</span>
        </div>

        {/* متاح للمديرين (ADMIN فأعلى) */}
        <div className={'p-3 rounded-xl border text-xs flex justify-between items-center ' + (
          hasMinRole('ADMIN') ? 'bg-purple-950/30 border-purple-500/40 text-purple-200' : 'bg-slate-950/40 border-slate-900 text-slate-600'
        )}>
          <span>إعدادات النظام والموظفين (يتطلب ADMIN فأعلى)</span>
          <span className="font-mono text-[10px]">{hasMinRole('ADMIN') ? 'مفتوح ✓' : 'مغلق 🔒'}</span>
        </div>

        {/* متاح للإدارة العليا فقط (SUPER_ADMIN فقط) */}
        <div className={'p-3 rounded-xl border text-xs flex justify-between items-center ' + (
          hasMinRole('SUPER_ADMIN') ? 'bg-rose-950/30 border-rose-500/40 text-rose-200' : 'bg-slate-950/40 border-slate-900 text-slate-600'
        )}>
          <span>إدارة البنية التحتية وقواعد البيانات (SUPER_ADMIN حصراً)</span>
          <span className="font-mono text-[10px]">{hasMinRole('SUPER_ADMIN') ? 'مفتوح ✓' : 'مغلق 🔒'}</span>
        </div>
      </div>
    </div>
  );
}`,
      output:
        "يوضح كيف تتيح شجرة التدرج الهرمي (Role Hierarchy) للرتب الأعلى وراثة صلاحيات الرتب الأدنى تلقائياً دون الحاجة لكتابة شروط مقارنة مكررة ومعقدة.",
      commonMistakes: [
        {
          mistake: "كتابة شروط فحص صارمة بالمساواة المباشرة `user.role === 'ADMIN'` بدلاً من فحص التدرج الهرمي.",
          why: "يجعل دور `SUPER_ADMIN` الأعلى رتبة غير قادر على دخول صفحة المدير العادية إلا إذا تم تكرار اسمه في كل شرط!",
          fix: "استخدم نظام التدرج بالأرقام أو فحص الصلاحيات الحبيبية (Permissions) لضمان وراثة الصلاحيات للرتب العليا.",
        },
      ],
      bestPractices: [
        "اجمع منطق فحص الصلاحيات كاملاً في خطاف مركزي موحد مثل `usePermission()`.",
        "اجعل فحص الصلاحيات سريعاً جداً وخالياً من أي استدعاءات شبكة ثقيلة (In-Memory Lookup).",
      ],
      infographic: {
        title: "معمارية RBAC الهرمية في React",
        caption: "وراثة الصلاحيات التلقائية وتوزيع الأذونات",
        steps: [
          { number: 1, label: "تعريف التدرج الهرمي", desc: "تحديد مستويات القوة: SuperAdmin > Admin > Mod > User" },
          { number: 2, label: "الخطاف الموحد usePermission", desc: "دوال can(perm) و hasMinRole(role) سهلة الاستهلاك" },
          { number: 3, label: "بوابات العبور المحمية", desc: "حماية الواجهات والمسارات وفق الرتبة المحددة" },
        ],
      },
    },

    // 17.3.c
    {
      id: "17.3.c",
      title: "إظهار الواجهات حسب الصلاحيات (Conditional UI Rendering)",
      englishTerm: "Conditional UI Rendering via PermissionGate (بيرميشن غيت) - بوابة الصلاحيات وعرض الواجهات المشروط",
      description:
        "في واجهات المستخدم الاحترافية، يجب ألا يرى المستخدم أزراراً أو خيارات لا يملك حق تنفيذها. الطريقة الأنظف والأكثر معمارية لتنفيذ ذلك في React هي بناء مكون 'بوابة الصلاحية' (PermissionGate Component): مكون حاضن يستقبل الصلاحية المطلوبة `permission` ومحتوى `children`، بالإضافة لخاصية بديلة اختيارية `fallback` (مثل عرض شارة مغلقة أو زر رمادي معطل مع تلميح Tooltip يوضح سبب المنع). فهل الأفضل إخفاء العنصر تماماً (Hiding) أم تعطيله مع إظهاره بلون رمادي (Disabling)؟ القاعدة الذهبية: إذا كان المستخدم يعلم بوجود الميزة لكنه يحتاج لترقية باقته أو طلب إذن للوصول إليها، فقم بتعطيل الزر (Disable with Tooltip) لتحفيزه على الترقية؛ أما إذا كانت عمليات سرية إدارية خاصة، فالإخفاء التام (Hiding) هو الأفضل لمنع لفت الانتباه.",
      analogy:
        "مثل ميزات باقة الاشتراك الذهبية في تطبيق أفلام: الأفلام العادية تفتح فوراً. الأفلام الحصرية تظهر أمامك وبجانبها أيقونة قفل صغيرة ذهبية مع رسالة 'اشترك في الباقة الذهبية للمشاهدة' (هذا Disabling مع إيضاح يحفزك للشراء). بينما لوحة تحكم السيرفرات وإضافة الأفلام محذوفة تماماً من التطبيق ولا تراها مطلقاً (هذا Hiding للأمان).",
      whyItMatters:
        "مكون PermissionGate يوفر مئات أسطر الجمل الشرطية المشوهة (`{canDelete && <Button />}`) ويجعل شفرة JSX مقروءة وذات معنى إعلاني صريح (Declarative UI).",
      syntax: `// استخدام مكون بوابة الصلاحية:
<PermissionGate permission="users:delete" fallback={<Badge text="مغلق" />}>
  <DeleteUserButton id={user.id} />
</PermissionGate>`,
      simpleExample: `// بناء واستهلاك مكون PermissionGate بسيط في React
import React from 'react';

// مكون بوابة الصلاحية
export function PermissionGate({ userPermissions = [], requiredPermission, children, fallback = null }) {
  const hasAccess = userPermissions.includes(requiredPermission);
  if (!hasAccess) return fallback;
  return <>{children}</>;
}

// استهلاك البوابة في بطاقة منتج
export function ProductItemView({ userPerms }) {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-bold text-white">سماعة رأس لاسلكية</h4>
        <span className="text-emerald-400 font-mono text-xs font-bold">\$140</span>
      </div>

      <div className="flex gap-2 pt-2">
        <button className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white rounded transition">
          عرض التفاصيل
        </button>

        {/* استخدام البوابة لحماية زر الحذف */}
        <PermissionGate
          userPermissions={userPerms}
          requiredPermission="products:delete"
          fallback={<button disabled className="px-3 py-1.5 bg-slate-800/40 text-slate-600 text-xs rounded cursor-not-allowed">حذف 🔒</button>}
        >
          <button className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded transition">
            حذف 🗑️
          </button>
        </PermissionGate>
      </div>
    </div>
  );
}`,
      advancedExample: `// نظام متطور لمكون PermissionGate يدعم الصلاحيات المفردة، المتعددة (AND / OR)، والتعطيل التفاعلي مع تلميح
import React, { useState } from 'react';

// مكون بوابة الصلاحية المتطور
export function AdvancedPermissionGate({
  userPermissions,
  permissions = [],
  mode = 'ALL', // 'ALL' (يتطلب جميعها) | 'ANY' (يتطلب واحدة منها على الأقل)
  renderDisabled = false, // تعطيل الزر بدلاً من إخفائه
  disabledMessage = 'ليس لديك صلاحية لتنفيذ هذا الإجراء',
  children,
}) {
  const isAuthorized =
    mode === 'ALL'
      ? permissions.every((p) => userPermissions.includes(p))
      : permissions.some((p) => userPermissions.includes(p));

  // إذا كان مصرحاً له، اعرض المكون كما هو
  if (isAuthorized) return <>{children}</>;

  // إذا تم اختيار وضع التعطيل مع التلميح
  if (renderDisabled) {
    return (
      <div className="relative group inline-block">
        <div className="opacity-40 pointer-events-none cursor-not-allowed">
          {children}
        </div>
        {/* التلميح التوضيحي Tooltip */}
        <div className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 hidden group-hover:block px-2.5 py-1 bg-slate-800 border border-slate-700 text-[10px] text-amber-300 rounded whitespace-nowrap shadow-xl z-20">
          🔒 {disabledMessage}
        </div>
      </div>
    );
  }

  // الإخفاء التام
  return null;
}

// عرض تجريبي تفاعلي للبوابة المتقدمة
export function PermissionGateShowcase() {
  const [currentUserPerms, setCurrentUserPerms] = useState(['invoice:view']);

  const togglePermission = (perm) => {
    setCurrentUserPerms((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">استوديو بوابات الصلاحيات (PermissionGate)</h3>
          <p className="text-xs text-slate-400">الإخفاء التام مقابل التعطيل الذكي مع التلميح</p>
        </div>
        <span className="text-xs font-mono text-sky-400">
          الصلاحيات: {currentUserPerms.length}
        </span>
      </header>

      {/* أزرار منح وسحب الصلاحيات للتجربة */}
      <div className="flex gap-2">
        {['invoice:view', 'invoice:refund', 'invoice:delete'].map((p) => (
          <button
            key={p}
            onClick={() => togglePermission(p)}
            className={'flex-1 py-1.5 text-xs font-mono font-bold rounded-lg border transition ' + (
              currentUserPerms.includes(p)
                ? 'bg-sky-600 text-white border-sky-500'
                : 'bg-slate-850 text-slate-400 border-slate-800'
            )}
          >
            {p}
          </button>
        ))}
      </div>

      {/* استعراض تطبيق البوابات على أزرار الفاتورة */}
      <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-white">فاتورة رقم #INV-88992</span>
          <span className="text-xs font-mono text-emerald-400 font-bold">\$450.00</span>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {/* زر العرض العادي */}
          <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg">
            عرض الفاتورة
          </button>

          {/* زر الاسترجاع: بنمط التعطيل الذكي مع التلميح */}
          <AdvancedPermissionGate
            userPermissions={currentUserPerms}
            permissions={['invoice:refund']}
            renderDisabled={true}
            disabledMessage="يتطلب صلاحية invoice:refund لاسترجاع المبلغ"
          >
            <button className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg">
              استرجاع المبلغ (Refund)
            </button>
          </AdvancedPermissionGate>

          {/* زر الحذف: بنمط الإخفاء التام الحصري */}
          <AdvancedPermissionGate
            userPermissions={currentUserPerms}
            permissions={['invoice:delete']}
            renderDisabled={false}
          >
            <button className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg">
              حذف الفاتورة نهائياً
            </button>
          </AdvancedPermissionGate>
        </div>
      </div>
    </div>
  );
}`,
      output:
        "يوضح كيف يوفر مكون PermissionGate كوداً إعلانياً فائق النقاء؛ حيث يمكن للمطور اختيار نمط الإخفاء التام للعمليات الإدارية الحساسة، أو نمط التعطيل التفاعلي مع تلميح Tooltip للميزات التي تتطلب ترقية.",
      commonMistakes: [
        {
          mistake: "تعطيل الزر في واجهة المستخدم بـ `disabled` ولكن ترك معالج النقر `onClick` متاحاً أو استدعاء الـ API من الكونسول.",
          why: "أي مستخدم يفتح DevTools يستطيع إزالة سمة `disabled` من زر HTML والنقر عليه فوراً!",
          fix: "تأكد من إلغاء ربط دالة الاستدعاء تماماً، والأهم من ذلك: فحص الصلاحية في الخادم قبل تنفيذ العملية.",
        },
      ],
      bestPractices: [
        "استخدم مكون `<PermissionGate>` بدلاً من الشروط المبعثرة لجعل شفرة الواجهة قابلة للقراءة والصيانة كقالب تعاقدي واضح.",
        "ادعم في بوابات الصلاحية إمكانية استقبال مصفوفة صلاحيات مع نمطي (AND / OR) لتغطية الحالات المعقدة.",
      ],
      infographic: {
        title: "استراتيجيات عرض الواجهات بالصلاحيات",
        caption: "متى تخفي العنصر تماماً ومتى تعرضه كمعطل؟",
        steps: [
          { number: 1, label: "الإخفاء التام (Hiding)", desc: "للعمليات الإدارية الحساسة التي لا يجب أن يعلم المستخدم العادي بوجودها" },
          { number: 2, label: "التعطيل مع تلميح (Disabling)", desc: "للميزات التسويقية أو الصلاحيات التي تتطلب ترقية لتحفيز المستخدم" },
          { number: 3, label: "مكون PermissionGate", desc: "الحاضن الإعلاني الموحد لضبط سلوك العرض بنظافة معمارية" },
        ],
      },
    },

    // 17.3.d
    {
      id: "17.3.d",
      title: "إدارة صلاحيات لوحة التحكم والروابط الإدارية",
      englishTerm: "Admin Dashboard Access Control (أدمن داش بورد أكسيس) - حماية لوحة الإدارة وتصفية القوائم",
      description:
        "تحتوي لوحة التحكم الإدارية (Admin Dashboard) عادةً على أقسام متعددة ومتفاوتة الحساسية (لوحة المبيعات، إدارة الموظفين، إعدادات الخوادم، ومحفظة المدفوعات). تتطلب الإدارة الاحترافية للوحة التحكم تطبيق معيارين رئيسيين: 1) تصفية شريط القوائم الجانبي (Dynamic Sidebar Filtering): يتم بناء قائمة الروابط في مصفوفة بيانات واستبعاد الروابط التي لا يملك المستخدم صلاحيتها تلقائياً حتى لا يرى أقساماً لا تخصه، 2) حراسة مسارات لوحة التحكم (Admin Route Guards): وضع حارس صارم يفحص رتبة أو صلاحيات المستخدم؛ فإذا حاول مستخدم عادي كتابة الرابط المباشر `/admin/settings` في المتصفح، يتم منعه وإظهار صفحة خطأ 403 Forbidden بدلاً من توجيهه لصفحة تسجيل الدخول (لأنه مسجل بالفعل ولكن غير مؤهل).",
      analogy:
        "مثل لوحة مصعد ذكي في برج تجاري مكون من 50 طابقاً: عندما يمسح موظف المبيعات بطاقته، تضيء له أزرار الأدوار من 1 إلى 10 فقط. بينما عندما يمسح المدير العام بطاقته، تضيء له كافة أزرار البرج وصولاً إلى الدور 50 ومهبط المروحيات. الموظف العادي لا يستطيع الضغط على زر الدور 50 وإذا حاول كتابة الرقم يدوياً يطلق المصعد صفارة إنذار ويقف مكانه.",
      whyItMatters:
        "يمنع تلوث واجهة المستخدم بعشرات الأقسام غير المجدية لعمله اليومي، ويحصن الروابط المباشرة من الزيارات المتطفلة.",
      syntax: `// تصفية روابط القائمة الجانبية:
const visibleNavItems = navConfig.filter(item => 
  !item.requiredPermission || userPermissions.includes(item.requiredPermission)
);`,
      simpleExample: `// مثال بسيط لتصفية روابط القائمة الجانبية بناءً على صلاحيات المستخدم
import React from 'react';

const MENU_ITEMS = [
  { path: '/home', label: 'الرئيسية', icon: '🏠', perm: null },
  { path: '/articles', label: 'المقالات', icon: '📝', perm: 'articles:read' },
  { path: '/finance', label: 'المالية', icon: '💰', perm: 'finance:view' },
  { path: '/admin', label: 'إعدادات النظام', icon: '⚙️', perm: 'system:manage' },
];

export function FilteredSidebarDemo() {
  // صلاحيات المستخدم الحالي
  const userPerms = ['articles:read'];

  // استبعاد الروابط التي تتطلب صلاحيات غير متوفرة
  const allowedItems = MENU_ITEMS.filter(
    (item) => !item.perm || userPerms.includes(item.perm)
  );

  return (
    <nav className="p-4 bg-slate-900 border border-slate-800 rounded-xl max-w-xs space-y-2">
      <span className="text-[10px] font-bold text-slate-400 block px-2 mb-2">القائمة الجانبية المفلترة:</span>
      {allowedItems.map((item) => (
        <a
          key={item.path}
          href={item.path}
          className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}`,
      advancedExample: `// لوحة تحكم إدارية متكاملة مع تصفية ديناميكية للقائمة الجانبية وحارس مسارات فرعي يظهر شاشة 403 Forbidden
import React, { useState } from 'react';

const ADMIN_NAVIGATION = [
  { id: 'overview', title: 'نظرة عامة', requiredLevel: 1 },
  { id: 'users', title: 'إدارة المستخدمين', requiredLevel: 2 },
  { id: 'finance', title: 'الفواتير والرواتب', requiredLevel: 3 },
  { id: 'security', title: 'سجلات الأمان والخوادم', requiredLevel: 4 },
];

export function DashboardAccessManager() {
  // مستوى صلاحية المستخدم الحالي (1=مستخدم، 2=مشرف، 3=مدير مالي، 4=مدير تنفيذي)
  const [userLevel, setUserLevel] = useState(2);
  const [activeTab, setActiveTab] = useState('overview');

  // تصفية الروابط الجانبية المسموحة فقط
  const visibleNavLinks = ADMIN_NAVIGATION.filter((nav) => nav.requiredLevel <= userLevel);

  // فحص هل القسم المختار مصرح به حالياً
  const selectedNavMeta = ADMIN_NAVIGATION.find((nav) => nav.id === activeTab);
  const hasAccessToActiveTab = selectedNavMeta && selectedNavMeta.requiredLevel <= userLevel;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-2xl mx-auto">
      <header className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">إدارة صلاحيات لوحة التحكم (Dashboard Access)</h3>
          <p className="text-xs text-slate-400">تصفية القوائم وحراسة الشاشات الإدارية الفرعية</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">مستوى الصلاحية:</span>
          <select
            value={userLevel}
            onChange={(e) => setUserLevel(Number(e.target.value))}
            className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white"
          >
            <option value={1}>مستوى 1: موظف عادي</option>
            <option value={2}>مستوى 2: مشرف فريق</option>
            <option value={3}>مستوى 3: مدير مالي</option>
            <option value={4}>مستوى 4: إدارة عليا (All)</option>
          </select>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* القائمة الجانبية المفلترة */}
        <div className="space-y-1">
          <span className="text-[10px] text-slate-500 font-bold block mb-1">الأقسام المصرح بها:</span>
          {visibleNavLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={'w-full p-2.5 text-right text-xs font-bold rounded-xl transition ' + (
                activeTab === item.id
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-slate-850 text-slate-300 hover:bg-slate-800'
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* منطقة عرض المحتوى مع حارس الـ 403 */}
        <div className="md:col-span-3 p-6 bg-slate-950 border border-slate-800 rounded-2xl min-h-48 flex items-center justify-center">
          {hasAccessToActiveTab ? (
            <div className="text-center space-y-2">
              <span className="text-3xl block">📊</span>
              <h4 className="text-base font-bold text-white">محتوى: {selectedNavMeta?.title}</h4>
              <p className="text-xs text-slate-400">تم التحقق من رتبتك بنجاح ومطابقتها لمتطلبات القسم.</p>
            </div>
          ) : (
            // شاشة 403 Forbidden الحارسة
            <div className="text-center space-y-3 p-4">
              <span className="text-3xl block">⛔</span>
              <h4 className="text-sm font-bold text-rose-400">403 - خطأ: غير مصرح لك بالوصول</h4>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                هذا القسم يتطلب مستوى صلاحية ({selectedNavMeta?.requiredLevel}) بينما مستواك الحالي هو ({userLevel}).
              </p>
              <button
                onClick={() => setActiveTab('overview')}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white text-xs rounded-lg transition"
              >
                العودة للقسم الرئيسي
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}`,
      output:
        "يوضح النموذج الإدارة الذكية للوحة التحكم؛ حيث تقتصر القائمة الجانبية على الروابط المسموحة فقط، وإذا حاول المستخدم الوصول لقسم محظور، تظهر شاشة 403 واضحة ومقيدة دون إخراجه من حسابه.",
      commonMistakes: [
        {
          mistake: "إعادة توجيه المستخدم المسجل الذي يفتقر للصلاحية إلى صفحة تسجيل الدخول `/login`.",
          why: "المستخدم مسجل الدخول بالفعل وهويته معروفة؛ توجيهه لصفحة الدخول سيبدو وكأن حسابه انهار وسيسبب حلقة ارتباك لا نهائية.",
          fix: "اعرض صفحة خطأ 403 Forbidden واضحة توضح أن الصلاحية غير كافية، مع زر للعودة للوحة الرئيسية.",
        },
      ],
      bestPractices: [
        "ابنِ هيكل قائمة التنقل (Navigation Config) في ملف إعدادات موحد يحتوي كل رابط وصلاحيته المطلوبة.",
        "احرص دائماً على مزامنة أذونات لوحة التحكم مع خادم الـ API لمنع التلاعب عبر أدوات التعديل.",
      ],
      infographic: {
        title: "حماية لوحة التحكم وتصفية القوائم",
        caption: "تأمين واجهات الإدارة العليا من الوصول غير المصرح",
        steps: [
          { number: 1, label: "تصفية القائمة الجانبية", desc: "إخفاء الروابط التي لا يملك المستخدم صلاحيتها لتحسين التركيز" },
          { number: 2, label: "حراسة المسارات المباشرة", desc: "اعتراض محاولات كتابة الرابط المباشر وفحص الرتبة" },
          { number: 3, label: "استجابة 403 Forbidden", desc: "عرض شاشة الرفض المخصصة بدلاً من الطرد لصفحة تسجيل الدخول" },
        ],
      },
    },

    // 17.3.e
    {
      id: "17.3.e",
      title: "منع الاعتماد على حماية Frontend فقط (Security Fallacy)",
      englishTerm: "Frontend-Only Security Fallacy (فرونت إند سيكيوريتي فالاسي) - وهم الأمان في الواجهة الأمامية",
      description:
        "من أخطر الأوهام القاتلة في هندسة البرمجيات هو الاعتقاد بأن إخفاء زر أو حماية مسار في تطبيق React يعني أن التطبيق محمي وآمن! يجب أن يرسخ في ذهن كل مهندس مبدأ لا يقبل الشك: 'الواجهة الأمامية (Frontend) تقع بالكامل تحت السيطرة المطلقة للمستخدم والمخترق'. يستطيع أي شخص بكبسة زر واحدة فتح أدوات المطور (F12 DevTools)، وتعديل كود الـ JavaScript، وتغيير قيمة `isAdmin = true` في الذاكرة، وإظهار كافة الأزرار المخفية، أو فتح أداة Postman أو curl وإرسال طلب `DELETE /api/users/12` مباشرة إلى خادمك متجاوزاً تطبيق React بأكمله! الحماية في Frontend وظيفتها 'تحسين تجربة الاستخدام' (UX)، بينما الأمان الحقيقي والإلزامي يقع حصراً في الخادم (Backend).",
      analogy:
        "مثل وضع ستارة قماشية خفيفة على باب بنك يحتوي على سبائك ذهبية بملايين الدولارات وإلغاء القفل الحديدي والإنذار الإلكتروني بحجة 'لقد وضعنا ستارة ولن يرى أحد السبائك'! أي لص في الشارع يمكنه إزاحة الستارة بيده وأخذ الذهب دون عناء. الستارة هي واجهة React، بينما القفل الحديدي المصفح هو التحقق في الـ Backend!",
      whyItMatters:
        "الاعتماد على الواجهة الأمامية فقط للأمان يقود لكوارث أمنية وفضائح تسريب بيانات وتغريم الشركات بملايين الدولارات لخرق معايير GDPR وPCI-DSS.",
      syntax: `// الوهم الخطير (مرفوض تماماً):
// الاعتماد على React فقط لحماية الحذف:
{user.isAdmin && <button onClick={deleteUser}>حذف</button>}
// والخادم ينفذ الطلب دون التحقق من الـ Token والصلاحيات!

// المعيار الصحيح:
// الخادم في Backend يتحقق إلزامياً في كل طلب:
// app.delete('/api/users/:id', authenticate, requireRole('ADMIN'), handler);`,
      simpleExample: `// مثال يوضح كيف يمكن التلاعب بمتغيرات React بسهولة في المتصفح
import React, { useState } from 'react';

export function SecurityFallacyDemo() {
  // حالة محلية بسيطة في React
  const [isClientAdmin, setIsClientAdmin] = useState(false);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm space-y-4">
      <h4 className="text-sm font-bold text-white text-center">وهم حماية الـ Frontend</h4>
      
      <div className="p-3 bg-slate-850 rounded-lg text-xs space-y-1">
        <p className="text-slate-300">هل المستخدم مدير في الذاكرة؟</p>
        <span className={'font-mono font-bold ' + (isClientAdmin ? 'text-emerald-400' : 'text-rose-400')}>
          {isClientAdmin ? 'true (مدير)' : 'false (مستخدم عادي)'}
        </span>
      </div>

      {/* محاكاة فتح DevTools والتلاعب بالحالة */}
      <button
        onClick={() => setIsClientAdmin(!isClientAdmin)}
        className="w-full py-1.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-lg transition"
      >
        محاكاة تعديل الحالة عبر React DevTools
      </button>

      {isClientAdmin && (
        <div className="p-3 bg-rose-950/60 border border-rose-500/50 rounded-lg space-y-2 animate-fadeIn">
          <p className="text-xs text-rose-300 font-bold">⚠️ زر حساس ظهر بعد التلاعب في الـ Frontend!</p>
          <button
            onClick={() => alert('إذا لم يكن الخادم يفحص الصلاحية، فسيتم الحذف بنجاح وتحدث الكارثة!')}
            className="w-full py-1.5 bg-rose-600 text-white text-xs font-bold rounded"
          >
            تدمير قاعدة البيانات
          </button>
        </div>
      )}
    </div>
  );
}`,
      advancedExample: `// محاكي معماري يقارن بين الهجوم على تطبيق يعتمد على حماية Frontend فقط وتطبيق يطبق الحماية الصارمة في الخادم
import React, { useState } from 'react';

export function BackendEnforcementSimulator() {
  const [backendType, setBackendType] = useState('secure'); // 'flawed' vs 'secure'
  const [attackLog, setAttackLog] = useState([]);

  // محاكاة إرسال طلب مباشر بـ Postman متجاوزاً واجهة React
  const simulatePostmanBypassAttack = async () => {
    const timestamp = new Date().toLocaleTimeString('ar-EG');

    if (backendType === 'flawed') {
      // خادم معيب: يثق في العميل ولا يفحص الصلاحيات
      setAttackLog((prev) => [
        {
          time: timestamp,
          text: '🚨 كارثة أمنية! أرسل المخترق طلب DELETE عبر Postman مباشرة؛ الخادم وثق بالطلب وحذف بيانات العملاء دون فحص الـ Role!',
          status: 'danger',
        },
        ...prev,
      ]);
    } else {
      // خادم آمن: يفحص الـ JWT والصلاحيات في كل طلب
      setAttackLog((prev) => [
        {
          time: timestamp,
          text: '🛡️ تصدي أمني محكم! أرسل المخترق طلباً مباشراً؛ فالتقطه Middleware الخادم وفحص صلاحيات الـ Token ورفض الطلب فوراً بكود 403 Forbidden!',
          status: 'success',
        },
        ...prev,
      ]);
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="pb-3 border-b border-slate-800 flex justify-between items-center">
        <div>
          <h3 className="text-sm font-bold text-white">محاكي تجاوز الواجهة الأمامية (API Bypass)</h3>
          <p className="text-xs text-slate-400">لماذا يعد فحص الخادم هو خط الدفاع الحقيقي والوحيد</p>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setBackendType('flawed')}
            className={'px-2.5 py-1 text-xs rounded transition ' + (
              backendType === 'flawed' ? 'bg-rose-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
            )}
          >
            خادم معيب (يثق بالواجهة)
          </button>
          <button
            onClick={() => setBackendType('secure')}
            className={'px-2.5 py-1 text-xs rounded transition ' + (
              backendType === 'secure' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
            )}
          >
            خادم محمي (Zero Trust)
          </button>
        </div>
      </header>

      <div className="p-4 bg-slate-850 rounded-xl space-y-2 text-xs leading-relaxed text-slate-300">
        <p>
          حتى لو قمت بإخفاء زر الحذف في كود React بنسبة 100%، يستطيع أي متصفح استخدام سطر أوامر <code className="text-sky-400 font-mono">curl</code> لإرسال الطلب للخادم مباشرة:
        </p>
        <div className="p-2 bg-slate-950 rounded font-mono text-[11px] text-amber-300">
          curl -X DELETE https://api.mysite.com/users/99
        </div>
      </div>

      <button
        onClick={simulatePostmanBypassAttack}
        className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition shadow-lg"
      >
        محاكاة هجوم مباشر عبر أداة خارجية (Bypass React UI)
      </button>

      {/* سجل الاستجابات */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-400">استجابة الخادم الخلفي للطلب المتجاوز:</h4>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl max-h-44 overflow-y-auto space-y-2 font-mono text-xs">
          {attackLog.length === 0 ? (
            <p className="text-slate-600 text-center py-3">انقر على زر المحاكاة لإرسال طلب مباشر للخادم...</p>
          ) : (
            attackLog.map((log, idx) => (
              <div
                key={idx}
                className={'p-2 rounded border ' + (
                  log.status === 'danger'
                    ? 'bg-rose-950/40 border-rose-800 text-rose-300'
                    : 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                )}
              >
                <div className="flex justify-between text-[10px] opacity-70">
                  <span>{log.time}</span>
                  <span>{log.status === 'danger' ? 'VULNERABILITY' : 'BLOCKED'}</span>
                </div>
                <p className="text-[11px] mt-1 font-sans">{log.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}`,
      output:
        "يوضح النموذج للمطور بشكل قاطع أن إخفاء العناصر في React ليس سوى تحسين شكلي للواجهة؛ وأن أي طلب شبكة يجب أن يُفحص بشكل مستقل في الخادم لحماية أمان النظام.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن إخفاء رابط أو زر في React يعفي الخادم من التحقق من صلاحية المستخدم المرسل للطلب.",
          why: "هذه هي الثغرة رقم 1 في قائمة ثغرات الويب العالمية OWASP Top 10 وتسمى Broken Access Control.",
          fix: "افحص دائماً هوية وصلاحية المستخدم في الخادم في كل نقطة نهاية (API Endpoint) دون أي استثناء.",
        },
      ],
      bestPractices: [
        "ضع في اعتبارك دائماً مبدأ: 'الواجهة الأمامية للعرض (UX)، والخادم للأمان (Security)'.",
        "احرص على إجراء اختبارات اختراق دورية تفحص استدعاءات API مباشرة دون فتح المتصفح للتأكد من صمود الخادم.",
      ],
      infographic: {
        title: "حقيقة الأمان: الواجهة الأمامية مقابل الخادم",
        caption: "أين تقع الحماية الحقيقية من الاختراقات؟",
        steps: [
          { number: 1, label: "React Frontend", desc: "إخفاء الأزرار وتحسين التجربة (UX فقط - قابلة للتلاعب تماماً)" },
          { number: 2, label: "وسيط الهجوم (API Client)", desc: "المخترق يتجاوز المتصفح ويرسل طلبات مباشرة عبر Postman / Curl" },
          { number: 3, label: "Backend Server", desc: "الحصن الحقيقي: فحص الـ JWT وتطبيق الصلاحيات ورفض غير المصرحين بـ 403" },
        ],
      },
    },

    // 17.3.f
    {
      id: "17.3.f",
      title: "تطبيق التحقق من الصلاحيات على الخادم وتناغمه مع React",
      englishTerm: "Enforcing Authorization on Backend & Frontend Sync (إنفورسينغ أوثورايزيشن أون باك إند)",
      description:
        "التناغم المعماري الحقيقي بين React والخادم يعتمد على تدفق ثنائي متناسق: في الخادم الخلفي (Backend)، يتم التحقق من الصلاحيات عبر طبقات وسيطة (Authorization Middleware) تفحص رمز الـ JWT وتتأكد من امتلاك المستخدم للصلاحية المطلوبة قبل تنفيذ أي استعلام على قاعدة البيانات؛ فإن لم يكن مؤهلاً، يرد الخادم فوراً بكود `403 Forbidden`. في الواجهة الأمامية (React)، يلتقط معترض الشبكة استجابة 403 ويقوم بإظهار تنبيه توجيهي مناسب للمستخدم، مع إمكانية تحديث الصلاحيات المخزنة محلياً إذا تغير دور المستخدم دون الحاجة لتسجيل الخروج.",
      analogy:
        "مثل تناغم تطبيق حجز تذاكر السينما مع حارس بوابة الصالة: التطبيق على هاتفك يظهر لك المقاعد المحجوزة والمتاحة ويسمح لك باختيار مقعد (React). ولكن عندما تصل للسينما، الحارس عند الباب يفحص شفرة QR في تذكرتك عبر جهازه الموصول بالسيرفر للتأكد من صحتها (Backend Enforcement). الحارس لا يكتفي بالنظر لصورة شاشة هاتفك، بل يفحص السجل المركزي!",
      whyItMatters:
        "يضمن التوافق التام بنسبة 100% بين ما يراه المستخدم في شاشة React وبين ما يسمح به الخادم، ويمنع تجمد التطبيق عند رفض الطلبات الأمنية.",
      syntax: `// التناغم المعماري الكامل:
// 1. في الخادم (Express/Node.js):
router.delete('/articles/:id', verifyToken, checkPermission('articles:delete'), controller);

// 2. في React معترض الأخطاء:
api.interceptors.response.use(res => res, error => {
  if (error.response?.status === 403) {
    notifyUser('ليس لديك صلاحية لتنفيذ هذا الإجراء');
  }
  return Promise.reject(error);
});`,
      simpleExample: `// مثال بسيط لمعالجة استجابة 403 القادمة من الخادم في مكون React
import React, { useState } from 'react';

export function BackendResponseHandlerDemo() {
  const [feedback, setFeedback] = useState(null);

  const triggerProtectedAction = async () => {
    setFeedback({ type: 'loading', msg: 'جارٍ إرسال الطلب للخادم...' });

    // محاكاة استدعاء الخادم وفحص الصلاحيات
    setTimeout(() => {
      // الخادم يرفض الطلب ويعيد 403 Forbidden
      setFeedback({
        type: 'error',
        code: 403,
        msg: 'رفض الخادم العملية (HTTP 403): حسابك لا يملك صلاحية حذف هذه الفاتورة.',
      });
    }, 800);
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-xs font-bold text-white">الاستجابة لرفض الخادم (403 Handler)</h4>
      <button
        onClick={triggerProtectedAction}
        className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-lg transition"
      >
        إرسال إجراء محمي للخادم
      </button>

      {feedback && (
        <div
          className={'p-3 rounded-lg border text-xs leading-relaxed ' + (
            feedback.type === 'error'
              ? 'bg-rose-950/60 border-rose-500/50 text-rose-300'
              : 'bg-slate-800 border-slate-700 text-slate-300'
          )}
        >
          {feedback.msg}
        </div>
      )}
    </div>
  );
}`,
      advancedExample: `// معمارية تناغم كاملة: استدعاء آمن مع معترض شبكة يعالج 403 ويعرض إشعار Toast ويحدث الصلاحيات تلقائياً
import React, { useState } from 'react';

export function FullSyncRbacArchitectureDemo() {
  const [toastNotification, setToastNotification] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // دالة تحاكي عميل الشبكة (API Client) المزود بمعترض أمني للأخطاء
  const secureApiClient = async (endpoint, actionName) => {
    setIsProcessing(true);
    setToastNotification(null);

    // محاكاة استدعاء الشبكة وتأخير الخادم
    await new Promise((r) => setTimeout(r, 900));
    setIsProcessing(false);

    // محاكاة تحقق الخادم: رفض الطلب الحساس
    if (endpoint === '/api/admin/wipe-database') {
      const errorResponse = {
        status: 403,
        message: 'رفض أمني قاطع من الخادم: الإجراء يتطلب صلاحية SUPER_ADMIN غير متوفرة في رمز المصادقة الخاص بك.',
      };

      // المعترض يعترض الـ 403 ويعرض التنبيه
      setToastNotification({
        type: 'forbidden',
        title: 'تم رفض العملية (403 Forbidden)',
        detail: errorResponse.message,
      });
      return;
    }

    setToastNotification({
      type: 'success',
      title: 'نجحت العملية (200 OK)',
      detail: 'تم تنفيذ الإجراء ' + actionName + ' ومطابقة الصلاحيات في الخادم بنجاح.',
    });
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 max-w-lg mx-auto relative">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">التناغم المعماري الكامل (Client & Backend Sync)</h3>
          <p className="text-xs text-slate-400">التعامل التلقائي مع استجابات 403 في معترض الشبكة</p>
        </div>
        <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
          Backend Guard Active
        </span>
      </header>

      {/* أزرار التجربة */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => secureApiClient('/api/profile/update', 'تحديث البيانات')}
          disabled={isProcessing}
          className="p-3 bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-xl text-right transition"
        >
          <span className="text-xs font-bold text-white block">إجراء مسموح به (200)</span>
          <span className="text-[10px] text-slate-400">تحديث الملف الشخصي</span>
        </button>

        <button
          onClick={() => secureApiClient('/api/admin/wipe-database', 'حذف الخادم')}
          disabled={isProcessing}
          className="p-3 bg-rose-950/30 hover:bg-rose-950/60 border border-rose-800/60 rounded-xl text-right transition"
        >
          <span className="text-xs font-bold text-rose-300 block">إجراء محظور بالخادم (403)</span>
          <span className="text-[10px] text-rose-400/80">مسح قاعدة البيانات</span>
        </button>
      </div>

      {isProcessing && (
        <p className="text-center text-xs text-sky-400 animate-pulse py-2">جارٍ التحقق من الصلاحيات في الخادم...</p>
      )}

      {/* إشعار المعترض الأمني (Security Toast) */}
      {toastNotification && (
        <div
          className={'p-4 rounded-xl border text-xs space-y-1 animate-fadeIn ' + (
            toastNotification.type === 'forbidden'
              ? 'bg-rose-950/70 border-rose-500/50 text-rose-200'
              : 'bg-emerald-950/70 border-emerald-500/50 text-emerald-200'
          )}
        >
          <div className="flex justify-between items-center font-bold">
            <span>{toastNotification.title}</span>
            <button onClick={() => setToastNotification(null)} className="text-slate-400 hover:text-white">✕</button>
          </div>
          <p className="text-[11px] opacity-90 leading-relaxed">{toastNotification.detail}</p>
        </div>
      )}
    </div>
  );
}`,
      output:
        "يوضح كيف يعمل معترض الشبكة كحلقة وصل ذكية تلتقط رفض الخادم الأمني 403 وتترجمه فوراً لإشعار توجيهي أنيق للمستخدم دون انهيار التطبيق.",
      commonMistakes: [
        {
          mistake: "معاملة خطأ 403 في معترض الشبكة بنفس طريقة معاملة 401 وإعادة توجيه المستخدم لصفحة تسجيل الدخول.",
          why: "المستخدم مسجل الدخول بالفعل؛ طرده لصفحة الدخول أمر مربك ويجعله يظن أن كلمة مروره نسيت أو أن جلسته ملغية.",
          fix: "افصل بين 401 (توجيه لتسجيل الدخول) و 403 (إظهار إشعار بعدم كفاية الصلاحية مع البقاء في نفس الصفحة).",
        },
      ],
      bestPractices: [
        "ضمن الصلاحيات المحدثة دائماً داخل حمولة الـ JWT أو عبر نقطة نهاية خفيفة مثل `GET /api/auth/me` لمزامنة الواجهة فوراً.",
        "سجل كل محاولة وصول محظورة (403) في سجلات أمان الخادم (Security Audit Logs) لرصد أي محاولات اختراق نشطة.",
      ],
      infographic: {
        title: "التناغم الأمني الكامل: العميل والخادم",
        caption: "دورة التحقق والرد الآمن بين React و Backend",
        steps: [
          { number: 1, label: "إرسال الرمز", desc: "يرسل كود React الطلب مرفقاً برمز الـ JWT في ترويسة Authorization" },
          { number: 2, label: "فحص الخادم", desc: "يتحقق Middleware الخادم من الصلاحيات؛ ويرفض غير المصرح بـ 403" },
          { number: 3, label: "اعتراض الرد", desc: "يلتقط معترض React استجابة 403 ويعرض تنبيهاً آمناً دون طرد المستخدم" },
        ],
      },
    },
  ],

  // الاختبارات التفاعلية للموضوع 17.3
  quizzes: [
    {
      id: "q17.3.1",
      question: "لماذا يفضل في المعماريات الكبيرة فحص الصلاحيات الدقيقة (Permissions) بدلاً من فحص الأدوار (Roles) في مكونات React؟",
      options: [
        "لأن الصلاحيات الدقيقة تجعل حجم ملف JavaScript أصغر بمقدار النصف.",
        "لأنها تتيح تعديل وتخصيص صلاحيات الأدوار في الخادم مستقبلاً دون الحاجة لتعديل أسطر الكود في مئات مكونات الواجهة.",
        "لأن متصفحات الهواتف المحمولة لا تفهم مفهوم الأدوار.",
        "لأن React تمنع استخدام كلمة 'role' في المتغيرات.",
      ],
      correctAnswer: 1,
      explanation:
        "فحص الصلاحيات الدقيقة (مثل `posts:delete`) يحرر كود الواجهة من الارتباط بأسماء الأدوار الجامدة؛ فإذا أضافت الشركة دوراً جديداً، لن تحتاج لتعديل كود المكونات.",
    },
    {
      id: "q17.3.2",
      question: "ما هو الخطر الفادح في الاعتماد على إخفاء الأزرار في الواجهة الأمامية React كوسيلة أمان وحيدة؟",
      options: [
        "قد تتأخر سرعة تحميل خطوط الواجهة.",
        "يستطيع أي مستخدم فتح DevTools وتغيير المتغيرات في الذاكرة أو إرسال طلب API مباشر عبر Postman/Curl متجاوزاً الواجهة بالكامل.",
        "تتوقف خاصية التمرير باللمس في شاشات الموبايل.",
        "لا يوجد أي خطر؛ كود React مشفر ومحمي تماماً من التعديل.",
      ],
      correctAnswer: 1,
      explanation:
        "الواجهة الأمامية بيئة يملكها المستخدم بالكامل ويمكن التلاعب بها؛ الأمان الحقيقي هو الفحص الإلزامي في الخادم لكل طلب قادم.",
    },
    {
      id: "q17.3.3",
      question: "ما هو التصرف الصحيح لمعترض الشبكة في React عند استلام كود الاستجابة HTTP 403 Forbidden؟",
      options: [
        "مسح قاعدة البيانات وإعادة تحميل الصفحة.",
        "توجيه المستخدم لصفحة تسجيل الدخول فوراً ومسح الرمز.",
        "عرض تنبيه إعلامي يوضح أن الصلاحية الحالية لا تكفي لتنفيذ الإجراء مع إبقاء المستخدم في صفحته الحالية.",
        "تغيير لون خط الصفحة إلى الأحمر.",
      ],
      correctAnswer: 2,
      explanation:
        "كود 403 يعني أن المستخدم مسجل الدخول بالفعل لكن صلاحيته لا تكفي؛ طرده لصفحة الدخول خطأ، ويجب تنبيهه بعدم كفاية الصلاحية في مكانه.",
    },
  ],

  // التمرين العملي للموضوع 17.3
  exercise: {
    id: "ex17.3",
    title: "تمرين تطبيقي: بناء مكون PermissionGate متكامل يدعم الصلاحيات المفردة والمتعددة مع Fallback مخصص",
    description:
      "المطلوب: بناء مكون باسم PermissionGate يستقبل مصفوفة صلاحيات `permissions` ونمط فحص `mode` إما 'AND' (يجب توفر جميع الصلاحيات) أو 'OR' (يكفي توفر صلاحية واحدة)، مع إمكانية تمرير مكون بديل `fallback` يتم عرضه في حال عدم توفر الصلاحية.",
    hints: [
      "استهلك useAuth للحصول على مصفوفة صلاحيات المستخدم الحالي user.permissions.",
      "استخدم Array.every لنمط 'AND' واستخدم Array.some لنمط 'OR'.",
      "إذا كان المستخدم مصرحاً له ارجع children، وإلا ارجع fallback.",
    ],
    solution: `// الحل النموذجي لمكون بوابة الصلاحيات الذكي في React
import React from 'react';

export function PermissionGate({
  userPermissions = [],
  permissions = [],
  mode = 'AND', // 'AND' أو 'OR'
  children,
  fallback = null,
}) {
  // التحقق وفق النمط المختار
  const isAuthorized =
    mode === 'AND'
      ? permissions.every((p) => userPermissions.includes(p))
      : permissions.some((p) => userPermissions.includes(p));

  // إذا لم يكن مؤهلاً، اعرض المكون البديل إن وجد
  if (!isAuthorized) {
    return <>{fallback}</>;
  }

  // إذا كان مؤهلاً، اعرض المكونات المحمية
  return <>{children}</>;
}

// مثال عملي لاستهلاك المكون
export function PermissionGateDemoUsage() {
  const currentPerms = ['articles:read', 'articles:write'];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-sm font-bold text-white">تجربة مكون PermissionGate</h4>

      {/* مسموح: يتطلب articles:read أو articles:admin */}
      <PermissionGate
        userPermissions={currentPerms}
        permissions={['articles:read', 'articles:admin']}
        mode="OR"
        fallback={<p className="text-xs text-rose-400">ممنوع من القراءة</p>}
      >
        <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs rounded-lg">
          ✓ تمتلك صلاحية القراءة بنجاح (mode: OR).
        </div>
      </PermissionGate>

      {/* محظور: يتطلب articles:write AND articles:delete */}
      <PermissionGate
        userPermissions={currentPerms}
        permissions={['articles:write', 'articles:delete']}
        mode="AND"
        fallback={
          <div className="p-3 bg-slate-850 rounded-lg text-xs text-slate-500 border border-slate-800 text-center">
            🔒 زر الحذف محجوب لعدم توفر كافة الصلاحيات (mode: AND).
          </div>
        }
      >
        <button className="w-full py-2 bg-rose-600 text-white font-bold text-xs rounded-lg">
          حذف كافة المقالات
        </button>
      </PermissionGate>
    </div>
  );
}`,
  },

  // الإنفوجرافيك التوضيحي للموضوع 17.3
  infographic: {
    title: "منظومة التحكم بالصلاحيات (RBAC) في React",
    caption: "من الصلاحيات الحبيبية إلى حراسة الخادم المنيعة",
    steps: [
      { number: 1, label: "الصلاحيات الحبيبية (Permissions)", desc: "فحص الصلاحيات الدقيقة resource:action بدلاً من الأدوار الجامدة" },
      { number: 2, label: "بوابات العرض (PermissionGate)", desc: "عرض إعلاني نظيف يخفي الأزرار الحساسة أو يعطلها بتلميح" },
      { number: 3, label: "الحماية الحقيقية (Backend Enforcement)", desc: "التحقق الإلزامي في كل طلب شبكة ورفض التجاوزات بـ 403" },
    ],
  },
};
