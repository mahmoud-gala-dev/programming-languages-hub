// src/data/sections/section32/topic3.js
// القسم 32: مشاريع تطبيقية للمستوى المتوسط
// الموضوع 3: مشروع 8: تطبيق إدارة المستخدمين (User Management Application)

export const topic3 = {
  id: "32.3",
  title: "مشروع 8: تطبيق إدارة المستخدمين",
  description: "مشروع تطبيقي متوسط متكامل لبناء نظام إدارة المستخدمين والصلاحيات (User Management System)؛ يغطي توجيه المسارات بالـ React Router، عرض القوائم والملفات الشخصية، التحقق الصارم من النماذج باستخدام React Hook Form و Zod، إدارة حالة الخادم والتخزين المؤقت عبر TanStack Query، عمليات الحذف الآمن بالنوافذ التأكيدية، ومعالجة حالات التحميل والأخطاء واختبارات التكامل.",
  subtopics: [
    {
      id: "32.3.a",
      title: "إعداد React Router (Routing Setup & Multi-view Architecture)",
      englishTerm: {
        term: "Routing Setup & Multi-view Architecture",
        pronunciation: "راوتينج سيت أب آند مالتي فيو آركيتكتشر",
        meaning: "إعداد التوجيه ومعمارية المشاهد المتعددة لإدارة المستخدمين"
      },
      description: "يتطلب تطبيق إدارة المستخدمين توزيعاً دقيقاً للمسارات يغطي جميع حالات الاستخدام الإدارية: (1) مسار قائمة المستخدمين الرئيسية (`/users`)، (2) مسار عرض الملف الشخصي المفصل وسجل النشاطات (`/users/:userId`)، (3) مسار إنشاء مستخدم جديد (`/users/new`)، و (4) مسار تعديل بيانات مستخدم موجود (`/users/:userId/edit`). يتم ربط هذه المسارات مع تمرير معاملات الرابط (Route Params) واستخراجها داخل المكونات عبر هوك `useParams`، مع توفير أزرار تنقل ديناميكية تمكن المشرف من التنقل بين هذه المشاهد بلمسة واحدة.",
      analogy: "يشبه قسم شؤون الموظفين في شركة كبرى؛ يحتوي على مكتب استقبال مركزي يضم فهرس جميع العاملين، ودواليب خاصة لملف كل موظف، واستمارة طلب توظيف لإضافة موظف جديد، واستمارة ترقية وتعديل بيانات الموظفين الحاليين.",
      whyItMatters: "يوفر هيكلة واضحة للتطبيق تمكن مسؤولي الموارد البشرية من حفظ الروابط المباشرة لملفات الموظفين ومشاركتها في رسائل البريد أو المستندات الرسمية دون فقدان السياق.",
      syntax: `// مسارات نظام إدارة المستخدمين في React Router
<Routes>
  <Route path="/users" element={<UsersListPage />} />
  <Route path="/users/new" element={<CreateUserPage />} />
  <Route path="/users/:id" element={<UserProfilePage />} />
  <Route path="/users/:id/edit" element={<EditUserPage />} />
</Routes>`,
      simpleExample: {
        title: "هيكل مسارات مبسط لإدارة المستخدمين مع روابط التنقل",
        code: `import React, { useState } from "react";

// محاكاة التنقل بين شاشات المستخدمين
function UserRoutingDemo() {
  const [currentRoute, setCurrentRoute] = useState("/users");
  const [selectedUserId, setSelectedUserId] = useState(null);

  const navigateToProfile = (id) => {
    setSelectedUserId(id);
    setCurrentRoute(\`/users/\${id}\`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* شريط التنقل العلوي */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <button onClick={() => setCurrentRoute("/users")}>قائمة المستخدمين</button>
        <button onClick={() => setCurrentRoute("/users/new")}>+ إضافة مستخدم جديد</button>
      </div>

      {/* عرض الشاشة النشطة */}
      <div style={{ padding: "16px", border: "1px solid #e2e8f0", borderRadius: "10px" }}>
        {currentRoute === "/users" && (
          <div>
            <h3>قائمة المستخدمين</h3>
            <button onClick={() => navigateToProfile(101)}>عرض ملف المستخدم #101</button>
          </div>
        )}
        {currentRoute === "/users/new" && <h3>نموذج إنشاء حساب مستخدم جديد</h3>}
        {currentRoute.startsWith("/users/") && currentRoute !== "/users/new" && (
          <div>
            <h3>الملف الشخصي للمستخدم #{selectedUserId}</h3>
            <button onClick={() => setCurrentRoute("/users")}>← العودة للقائمة</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserRoutingDemo;`
      },
      advancedExample: {
        title: "نظام توجيه مستخدمين متكامل يدعم المسارات المحمية، واستخراج المعاملات، والتوجيه التلقائي",
        code: `// مخطط مسارات وحدة إدارة المستخدمين
export const USER_MANAGEMENT_ROUTES = {
  LIST: "/users",
  CREATE: "/users/new",
  VIEW: "/users/:id",
  EDIT: "/users/:id/edit"
};

// فئة مساعدة لتوليد الروابط الديناميكية بأمان
export class UserNavigationHelper {
  // إنشاء رابط الملف الشخصي
  static toProfile(userId) {
    return \`/users/\${encodeURIComponent(userId)}\`;
  }

  // إنشاء رابط صفحة التعديل
  static toEdit(userId) {
    return \`/users/\${encodeURIComponent(userId)}/edit\`;
  }

  // فحص صلاحية المعرف الرقمي أو النصي
  static isValidUserId(id) {
    return Boolean(id && String(id).trim().length > 0);
  }
}

// اختبار توليد الروابط
const profileLink = UserNavigationHelper.toProfile("usr_8829");
console.log("رابط الملف الشخصي المولد:", profileLink); // /users/usr_8829
console.log("رابط صفحة التعديل المولد:", UserNavigationHelper.toEdit("usr_8829"));`
      },
      outputExplanation: "يوضح هذا التأسيس عزل مسارات إدارة المستخدمين وتوليد روابطها عبر دوال مساعدة موحدة (Helper Functions)، مما يمنع الأخطاء الإملائية الشائعة في كتابة مسارات الروابط باليد.",
      commonMistakes: [
        {
          wrong: "// كتابة روابط المسارات كنصوص مشفرة في كل مكون مما يجعل تعديلها أمراً مستحيلاً عند تغيير هيكل الروابط",
          correct: "// تعريف ثوابت مركزية للمسارات مع دوال مساعدة لتركيب المعاملات الديناميكية بأمان"
        }
      ],
      bestPractices: [
        "استخدام التسميات المعيارية الجمعية للموارد (مثل `/users` وليس `/user`) تماشياً مع معايير REST",
        "التحقق من صحة المعرف `id` فور فتح مسار التفاصيل والتوجيه لصفحة 404 في حال عدم صلاحيته",
        "توفير مسارات خبز (Breadcrumbs) في أعلى الصفحة لسهولة العودة من صفحة التفاصيل للقائمة الرئيسية"
      ],
      infographic: {
        title: "مسارات نظام إدارة المستخدمين",
        nodes: [
          { label: "1. القائمة الرئيسية (/users)", detail: "عرض الجدول، البحث، الفلترة، والترقيم" },
          { label: "2. الإضافة الجديدة (/users/new)", detail: "نموذج التسجيل مع التحقق عبر Zod" },
          { label: "3. الملف الشخصي (/users/:id)", detail: "بيانات المستخدم وسجل نشاطاته وصلاحياته" },
          { label: "4. التعديل (/users/:id/edit)", detail: "تحديث البيانات الحالية مع الحفظ المباشر" }
        ]
      }
    },
    {
      id: "32.3.b",
      title: "عرض قائمة المستخدمين (Users List & Responsive Cards/Table)",
      englishTerm: {
        term: "Users Listing, Card View & Table Presentation",
        pronunciation: "يوزرز ليستنج، كارد فيو آند تيبل بريزنتيشن",
        meaning: "عرض قائمة المستخدمين بنمط البطاقات والجدول المتجاوب"
      },
      description: "تتطلب واجهة إدارة المستخدمين تنوعاً في العرض يناسب تفضيلات المشرفين: (1) نمط الجدول المدمج (Table View) للشاشات الكبيرة لتسهيل المقارنة السريعة بين عشرات الموظفين دفعة واحدة، و (2) نمط البطاقات التفاعلية (Card Grid View) للشاشات الصغيرة أو لعرض بيانات الموظف مع صورته ووسام صلاحيته ونشاطه. يتضمن كل سطر في القائمة: الصورة الرمزية (Avatar)، الاسم الكامل، البريد الإلكتروني، الدور الوظيفي (Admin, Editor, Viewer)، حالة الحساب (نشط، معلق، أو محظور)، وأزرار الإجراءات السريعة (عرض، تعديل، حذف).",
      analogy: "يشبه دليل الهاتف وسجل العاملين في المنشآت الكبرى؛ يمكنك تصفحه كجدول سطري سريع، أو كبطاقات هوية شخصية ملونة تحتوي على الصورة والمهنة ورقم الهاتف.",
      whyItMatters: "العرض المنظم والمتجاوب يوفر وقتاً ثميناً على مديري النظام في مراجعة صلاحيات الفرق ومتابعة حالة انضمام الأعضاء الجدد.",
      syntax: `// التبديل بين نمط الجدول والبطاقات
{viewMode === "table" ? <UsersTable users={users} /> : <UsersGrid users={users} />}`,
      simpleExample: {
        title: "عرض قائمة مستخدمين بسيطة مع وسوم الصلاحيات وحالة الحساب",
        code: `import React from "react";

// بيانات مستخدمين تجريبية
const USERS_LIST = [
  { id: 1, name: "عبد الله منصور", email: "abdullah@corp.io", role: "مدير نظام", active: true },
  { id: 2, name: "منى الشريف", email: "mona@corp.io", role: "محررة", active: true },
  { id: 3, name: "فهد العتيبي", email: "fahad@corp.io", role: "مشاهد", active: false }
];

function SimpleUsersListView({ users = USERS_LIST }) {
  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <h3>قائمة مستخدمي النظام ({users.length})</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {users.map(user => (
          <div key={user.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "10px", background: "#fff" }}>
            <div>
              <div style={{ fontWeight: "bold" }}>{user.name}</div>
              <div style={{ fontSize: "12px", color: "#64748b" }}>{user.email} • {user.role}</div>
            </div>
            <div>
              <span style={{ fontSize: "11px", padding: "3px 8px", borderRadius: "6px", backgroundColor: user.active ? "#dcfce7" : "#fee2e2", color: user.active ? "#16a34a" : "#dc2626" }}>
                {user.active ? "نشط" : "معلق"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimpleUsersListView;`
      },
      advancedExample: {
        title: "مكون عرض مستخدمين احترافي متكامل يدعم التبديل بين الجدول والبطاقات وشريط الإجراءات السريعة",
        code: `import React, { useState } from "react";

// مصفوفة المستخدمين الموسعة
const MOCK_TEAM_MEMBERS = [
  { id: "usr_1", name: "إبراهيم الدوسري", email: "ibrahim@org.sa", role: "Admin", status: "Active", department: "الهندسة", avatar: "👨‍💻" },
  { id: "usr_2", name: "سارة القحطاني", email: "sara@org.sa", role: "Manager", status: "Active", department: "المنتج", avatar: "👩‍💼" },
  { id: "usr_3", name: "طارق الصالح", email: "tariq@org.sa", role: "Viewer", status: "Suspended", department: "التسويق", avatar: "👨‍🎨" }
];

// ألوان شارات الصلاحيات
const ROLE_BADGES = {
  Admin: "bg-purple-50 text-purple-700 border-purple-200",
  Manager: "bg-blue-50 text-blue-700 border-blue-200",
  Viewer: "bg-slate-50 text-slate-700 border-slate-200"
};

export function AdvancedUsersDirectory({ members = MOCK_TEAM_MEMBERS, onViewProfile, onEditUser, onDeleteUser }) {
  // حالة نمط العرض (جدول أو شبكة بطاقات)
  const [displayMode, setDisplayMode] = useState("table");

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm font-sans">
      {/* ترويسة الدليل وزر تبديل نمط العرض */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">دليل مستخدمي المؤسسة</h2>
          <p className="text-xs text-slate-400 mt-0.5">إدارة الصلاحيات وحسابات الفريق الإداري</p>
        </div>

        {/* أزرار التبديل بين Table و Grid */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => setDisplayMode("table")}
            className={\`px-3 py-1.5 rounded-xl text-xs font-bold transition \${displayMode === "table" ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm" : "text-slate-500"}\`}
          >
            📋 جدول
          </button>
          <button
            type="button"
            onClick={() => setDisplayMode("cards")}
            className={\`px-3 py-1.5 rounded-xl text-xs font-bold transition \${displayMode === "cards" ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm" : "text-slate-500"}\`}
          >
            🎴 بطاقات
          </button>
        </div>
      </div>

      {/* 1. عرض الجدول للشاشات الكبيرة */}
      {displayMode === "table" ? (
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-400">
                <th className="p-3.5">المستخدم</th>
                <th className="p-3.5">القسم</th>
                <th className="p-3.5">الدور</th>
                <th className="p-3.5">الحالة</th>
                <th className="p-3.5 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition">
                  <td className="p-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm shadow-inner">
                        {member.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">{member.name}</div>
                        <div className="text-[11px] text-slate-400">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3.5 font-medium text-slate-600 dark:text-slate-300">{member.department}</td>
                  <td className="p-3.5">
                    <span className={\`px-2.5 py-0.5 rounded-full border text-[10px] font-bold \${ROLE_BADGES[member.role]}\`}>
                      {member.role}
                    </span>
                  </td>
                  <td className="p-3.5">
                    <span className={\`text-[11px] font-bold \${member.status === "Active" ? "text-emerald-600" : "text-rose-500"}\`}>
                      ● {member.status === "Active" ? "نشط" : "معلق"}
                    </span>
                  </td>
                  <td className="p-3.5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => onViewProfile(member.id)} className="text-slate-400 hover:text-sky-600">👁️</button>
                      <button onClick={() => onEditUser(member.id)} className="text-slate-400 hover:text-amber-600">✏️</button>
                      <button onClick={() => onDeleteUser(member.id)} className="text-slate-400 hover:text-rose-600">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* 2. عرض شبكة البطاقات المتجاوبة */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member) => (
            <div key={member.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-700 flex items-center justify-center text-2xl shadow-sm">
                    {member.avatar}
                  </div>
                  <span className={\`px-2.5 py-0.5 rounded-full border text-[10px] font-bold \${ROLE_BADGES[member.role]}\`}>
                    {member.role}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-xs text-slate-400">{member.email}</p>
                <div className="mt-3 text-xs text-slate-600 dark:text-slate-300">
                  <span>القسم: <strong>{member.department}</strong></span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                <span className={\`font-bold \${member.status === "Active" ? "text-emerald-600" : "text-rose-500"}\`}>
                  {member.status === "Active" ? "نشط" : "معلق"}
                </span>
                <div className="flex gap-2">
                  <button onClick={() => onEditUser(member.id)} className="text-amber-600 hover:underline">تعديل</button>
                  <button onClick={() => onDeleteUser(member.id)} className="text-rose-600 hover:underline">حذف</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`
      },
      outputExplanation: "تتيح هذه الواجهة للمشرف التبديل السلس بين عرض الجدول المسطح للشاشات المكتبية العريضة وشبكة البطاقات البصرية الغنية، مع إبراز شارات الصلاحيات وحالة الحساب وأزرار الإجراءات السريعة.",
      commonMistakes: [
        {
          wrong: "// حصر العرض في جدول ثابت يخرج عن حدود شاشات الجوال مما يجبر المستخدم على تمرير أفقي طويل ومزعج",
          correct: "// توفير خيار التبديل لنمط البطاقات (Card Grid) أو التحول التلقائي في الشاشات الصغيرة"
        }
      ],
      bestPractices: [
        "استخدام ألوان مميزة لكل دور وظيفي (Admin بالبنفسجي، Manager بالأزرق) لتسهيل الفرز البصري السريع",
        "عرض دوائر الأفاتار الملونة لكسر الرتابة وإعطاء طابع إنساني ودود للوحة التحكم",
        "تأكيد عمليات الحذف دائماً قبل إزالتها من القائمة"
      ],
      infographic: {
        title: "أنماط عرض قائمة المستخدمين",
        nodes: [
          { label: "1. نمط الجدول (Table View)", detail: "عرض مدمج ومكثف لفرز ومقارنة عشرات الحسابات" },
          { label: "2. نمط البطاقات (Card Grid)", detail: "عرض مرئي ثري يبرز الصور والأقسام بوضوح" },
          { label: "3. أوسمة الصلاحيات", detail: "ألوان كودية لتمييز المديرين والمحررين والمشاهدين" },
          { label: "4. أزرار الإجراءات السريعة", detail: "معاينة الملف، التعديل المباشر، والحذف الآمن" }
        ]
      }
    },
    {
      id: "32.3.c",
      title: "عرض تفاصيل المستخدم (User Profile & Activity Timeline)",
      englishTerm: {
        term: "User Profile & Activity Timeline",
        pronunciation: "يوزر بروفايل آند أكتيفيتي تايم لاين",
        meaning: "عرض الملف الشخصي للمستخدم والخط الزمني للنشاطات"
      },
      description: "صفحة الملف الشخصي للمستخدم (`/users/:id`) هي مركز التدقيق الأمني والإداري. تعرض هذه الصفحة سجلاً شاملاً يتضمن: البيانات الشخصية والمهنية (الاسم، البريد، الهاتف، تاريخ الانضمام، والقسم)، وبطاقة الصلاحيات المفصلة ومستوى الوصول (Permissions Matrix)، بالإضافة إلى الخط الزمني للنشاطات (Activity Timeline) الذي يسجل أحدث الأحداث المرتبطة بالحساب مثل: تسجيلات الدخول الأخيرة، تغيير كلمة المرور، تعديل الصلاحيات، والعمليات التي أجراها الموظف في النظام.",
      analogy: "يشبه ملف السيرة الذاتية والأرشيف الوظيفي للموظف في الخزانة الحديدية؛ يضم استمارة بياناته الأصلية وشهاداته، ومرفقاً معه سجل يومي يدون فيه موظف الأمن متى دخل وخرج وما هي المعاملات التي قام بالتوقيع عليها.",
      whyItMatters: "يوفر معايير الشفافية والمساءلة الإدارية (Audit Trail) اللازمة للامتثال للمعايير الأمنية، ويساعد الدعم الفني في تتبع وحل مشاكل حسابات الموظفين.",
      syntax: `// مكون الملف الشخصي مع الخط الزمني
<div className="profile-layout">
  <UserProfileCard user={data} />
  <ActivityTimeline events={data.activityLog} />
</div>`,
      simpleExample: {
        title: "مكون عرض ملف مستخدم بسيط مع قائمة سجل الأحداث",
        code: `import React from "react";

// مكون ملف المستخدم البسيط
function SimpleUserProfileView({ user, activities = [] }) {
  if (!user) return <div>لم يتم تحديد مستخدم.</div>;

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", border: "1px solid #e2e8f0", borderRadius: "12px", fontFamily: "sans-serif" }}>
      <h2>👤 {user.name}</h2>
      <p style={{ color: "#64748b", fontSize: "14px" }}>البريد: {user.email} | الدور: {user.role}</p>
      
      <hr style={{ margin: "16px 0", border: "none", borderTop: "1px solid #e2e8f0" }} />
      
      <h4>سجل النشاطات الأخير:</h4>
      <ul style={{ fontSize: "13px", paddingRight: "20px", color: "#334155" }}>
        {activities.map((act, idx) => (
          <li key={idx} style={{ marginBottom: "6px" }}>
            <strong>{act.action}</strong> - <small style={{ color: "#94a3b8" }}>{act.time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleUserProfileView;`
      },
      advancedExample: {
        title: "صفحة ملف شخصي احترافية متكاملة مع خط زمني مرئي (Visual Timeline) ومؤشرات الصلاحيات",
        code: `import React from "react";

// بيانات تجريبية لملف مستخدم مفصل
const MOCK_USER_PROFILE = {
  id: "usr_99",
  name: "د. عبد العزيز الفهد",
  title: "كبير مهندسي البرمجيات",
  email: "a.alfahad@tech.sa",
  phone: "+966 50 123 4567",
  joinDate: "15 يناير 2024",
  status: "Active",
  avatar: "👨‍💻",
  permissions: ["قراءة التقارير", "إدارة الخوادم", "تعديل المبيعات", "تصدير البيانات"],
  timeline: [
    { id: 1, title: "تسجيل دخول ناجح", desc: "تم تسجيل الدخول من جهاز MacBook Pro (الرياض)", time: "منذ 15 دقيقة", icon: "🔑" },
    { id: 2, title: "تعديل صلاحيات النظام", desc: "ترقية صلاحيات حساب سارة القحطاني إلى مشرف", time: "أمس في 04:30 م", icon: "🛡️" },
    { id: 3, title: "تصدير تقرير المبيعات", desc: "تنزيل تقرير الربع الثالث بصيغة CSV", time: "23 أكتوبر 2026", icon: "📥" }
  ]
};

export function DetailedUserProfilePage({ user = MOCK_USER_PROFILE, onBack, onEdit }) {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl font-sans space-y-8">
      {/* شريط الإجراءات العلوي */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center gap-1"
        >
          <span>←</span> العودة لدليل المستخدمين
        </button>
        <button
          type="button"
          onClick={onEdit}
          className="px-4 py-2 bg-sky-600 text-white font-bold text-xs rounded-xl shadow hover:bg-sky-700 transition"
        >
          تعديل الملف الشخصي ✏️
        </button>
      </div>

      {/* بطاقة رأس الملف الشخصي */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-sky-400 to-indigo-600 text-white flex items-center justify-center text-4xl shadow-md">
          {user.avatar}
        </div>
        <div className="flex-1 text-center sm:text-right">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
            <h1 className="text-xl font-black text-slate-900 dark:text-white">{user.name}</h1>
            <span className="inline-block text-[11px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 self-center sm:self-auto">
              ● حساب نشط
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{user.title}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-300">
            <div>✉️ {user.email}</div>
            <div>📱 {user.phone}</div>
            <div>📅 انضم في: {user.joinDate}</div>
          </div>
        </div>
      </div>

      {/* الصلاحيات الممنوحة */}
      <div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">الصلاحيات والامتيازات النشطة:</h3>
        <div className="flex flex-wrap gap-2">
          {user.permissions.map((perm, idx) => (
            <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
              <span>✓</span> {perm}
            </span>
          ))}
        </div>
      </div>

      {/* الخط الزمني لسجل النشاطات (Activity Timeline) */}
      <div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">سجل الأحداث والنشاطات الأخيرة:</h3>
        <div className="relative border-r-2 border-slate-200 dark:border-slate-800 pr-6 space-y-6">
          {user.timeline.map((event) => (
            <div key={event.id} className="relative group">
              {/* نقطة وأيقونة الخط الزمني */}
              <div className="absolute -right-[33px] top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-500 text-xs flex items-center justify-center shadow">
                {event.icon}
              </div>

              {/* تفاصيل الحدث */}
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">{event.title}</h4>
                  <span className="text-[10px] text-slate-400">{event.time}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يوضح هذا التصميم كيف تدمج صفحة الملف الشخصي بين البيانات الوظيفية الأساسية، ووسوم الصلاحيات المحققة، وخط زمني حركي (Visual Timeline) يعرض سجل النشاطات بدقة تسلسلية.",
      commonMistakes: [
        {
          wrong: "// عرض تفاصيل المستخدم كنص جاف وغير منظم بدون سجل أحداث تاريخي لمراقبة النشاط",
          correct: "// استخدام خط زمني بصري (Timeline) بأسلوب أنيق مع أيقونات وطوابع زمنية توضح سجل العمليات"
        }
      ],
      bestPractices: [
        "إتاحة زر العودة السريع لأعلى القائمة لتسهيل التنقل الإداري",
        "توضيح صلاحيات الموظف بوضوح لتسهيل معرفة ما يمكنه وما لا يمكنه فعله في النظام",
        "تنسيق أرقام الهواتف والتواريخ بحسب المعايير المحلية للبلد (Intl.DateTimeFormat)"
      ],
      infographic: {
        title: "مكونات صفحة الملف الشخصي والخط الزمني",
        nodes: [
          { label: "1. ترويسة الحساب (Hero)", detail: "الأفاتار، الاسم، المسمى الوظيفي، وحالة الحساب" },
          { label: "2. مصفوفة الصلاحيات", detail: "وسوم الامتيازات الممنوحة للمستخدم في النظام" },
          { label: "3. الخط الزمني (Timeline)", detail: "أحداث تسجيل الدخول والعمليات السابقة مع التوقيت" },
          { label: "4. إجراءات التعديل والأمان", detail: "تحديث البيانات أو تجميد الصلاحيات بضغطة زر" }
        ]
      }
    },
    {
      id: "32.3.d",
      title: "إنشاء نموذج إضافة مستخدم (User Onboarding Form & Fields)",
      englishTerm: {
        term: "User Onboarding & Creation Form",
        pronunciation: "يوزر أون بوردينج آند كرييشن فورم",
        meaning: "نموذج تسجيل وإضافة مستخدم جديد وحقول البيانات"
      },
      description: "يمثل نموذج إضافة مستخدم جديد البوابة الأساسية لإدخال الأعضاء لمنظومة العمل. يتطلب هذا النموذج تنظيماً هرمياً دقيقاً يمنع تشتت المشرف: حقول البيانات الشخصية (الاسم الأول والأخير)، بيانات الاتصال والاعتماد (البريد الإلكتروني المهني، رقم الهاتف، وكلمة المرور المؤقتة)، البيانات الإدارية (اختيار الدور الوظيفي من قائمة منسدلة، وتحديد القسم أو الفرع)، وتحديد حالة الحساب الأولية (تفعيل فوري أو إرسال رابط تأكيد عبر البريد)، مع أزرار واضحة لحفظ البيانات أو إلغاء العملية والعودة.",
      analogy: "يشبه استمارة التوظيف والبيانات الرسمية في قسم الموارد البشرية؛ يقوم الموظف الجديد بتعبئة حقول الهوية والتخصص ورقم التواصل قبل إصدار بطاقة العمل الرسمية له.",
      whyItMatters: "يوفر تجربة إدخال بيانات سلسة وخالية من الأخطاء تضمن اكتمال كافة البيانات الإلزامية للمستخدم قبل إنشاء سجله في قاعدة البيانات.",
      syntax: `// هيكل نموذج إضافة مستخدم
<form onSubmit={handleSubmit}>
  <InputField label="الاسم الكامل" name="name" required />
  <InputField label="البريد الإلكتروني" name="email" type="email" required />
  <SelectField label="الدور الوظيفي" name="role" options={ROLES} />
  <SubmitButton isSubmitting={loading}>حفظ المستخدم</SubmitButton>
</form>`,
      simpleExample: {
        title: "نموذج إضافة مستخدم بسيط مع معالجة إرسال البيانات",
        code: `import React, { useState } from "react";

// نموذج إضافة مستخدم بسيط
function SimpleCreateUserForm({ onSaveUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Viewer");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    onSaveUser({
      id: "usr_" + Date.now(),
      name: name.trim(),
      email: email.trim(),
      role: role,
      active: true
    });

    setName("");
    setEmail("");
    setRole("Viewer");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", fontFamily: "sans-serif" }}>
      <h3>إضافة مستخدم جديد</h3>
      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", fontSize: "12px", marginBottom: "4px" }}>الاسم الكامل:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required style={{ width: "100%", padding: "6px" }} />
      </div>
      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", fontSize: "12px", marginBottom: "4px" }}>البريد الإلكتروني:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: "100%", padding: "6px" }} />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontSize: "12px", marginBottom: "4px" }}>الدور الوظيفي:</label>
        <select value={role} onChange={e => setRole(e.target.value)} style={{ width: "100%", padding: "6px" }}>
          <option value="Admin">مدير نظام</option>
          <option value="Editor">محرر</option>
          <option value="Viewer">مشاهد</option>
        </select>
      </div>
      <button type="submit" style={{ padding: "8px 16px", backgroundColor: "#0284c7", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
        حفظ المستخدم
      </button>
    </form>
  );
}

export default SimpleCreateUserForm;`
      },
      advancedExample: {
        title: "نموذج إضافة مستخدم احترافي متعدد الأقسام مع توليد كلمة مرور عشوائية وتحديد الصلاحيات",
        code: `import React, { useState } from "react";

// قائمة الأقسام والأدوار
const DEPARTMENTS = ["تقنية المعلومات", "المبيعات والتسويق", "الموارد البشرية", "العمليات"];
const SYSTEM_ROLES = [
  { id: "Admin", label: "مدير نظام كامل الصلاحيات" },
  { id: "Manager", label: "مشرف قسم محدد" },
  { id: "Viewer", label: "مشاهد للاطلاع فقط" }
];

export function AdvancedUserOnboardingWizard({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: DEPARTMENTS[0],
    role: "Viewer",
    tempPassword: "",
    sendInviteEmail: true
  });

  // توليد كلمة مرور مؤقتة عشوائية آمنة
  const generateRandomPassword = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%";
    let pass = "";
    for (let i = 0; i < 10; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData(prev => ({ ...prev, tempPassword: pass }));
  };

  const handleFieldChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl font-sans">
      <div className="mb-6">
        <h2 className="text-xl font-black text-slate-900 dark:text-white">تسجيل مستخدم جديد في النظام</h2>
        <p className="text-xs text-slate-400 mt-0.5">أدخل البيانات الأساسية وحدد مستوى الصلاحيات المناسب</p>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-4">
        {/* صف الاسم والبريد */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">الاسم الكامل *</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleFieldChange}
              placeholder="مثال: عبد العزيز الفهد"
              className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">البريد الإلكتروني المهني *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleFieldChange}
              placeholder="name@company.com"
              className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
            />
          </div>
        </div>

        {/* صف الهاتف والقسم */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">رقم الجوال</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFieldChange}
              placeholder="+966 5x xxx xxxx"
              className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">القسم / الإدارة</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleFieldChange}
              className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
            >
              {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        </div>

        {/* اختيار الدور والصلاحيات */}
        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">الدور الوظيفي والصلاحيات:</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {SYSTEM_ROLES.map(r => (
              <button
                key={r.id}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, role: r.id }))}
                className={\`p-3 rounded-2xl border text-right transition \${formData.role === r.id ? "border-sky-500 bg-sky-50 dark:bg-sky-950/60 font-bold" : "border-slate-200 dark:border-slate-700"}\`}
              >
                <div className="text-xs font-bold">{r.id}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{r.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* كلمة المرور المؤقتة */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">كلمة المرور المؤقتة:</label>
            <button
              type="button"
              onClick={generateRandomPassword}
              className="text-[11px] text-sky-600 font-bold hover:underline"
            >
              توليد عشوائي آمن 🎲
            </button>
          </div>
          <input
            type="text"
            name="tempPassword"
            required
            value={formData.tempPassword}
            onChange={handleFieldChange}
            placeholder="اضغط توليد عشوائي أو اكتب كلمة مرور مؤقتة..."
            className="w-full p-2 text-xs rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-mono outline-none"
          />
        </div>

        {/* أزرار الإجراءات */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-xs text-slate-500 hover:text-slate-800 font-bold"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-slate-900 text-white dark:bg-sky-600 text-xs font-bold rounded-xl shadow hover:opacity-90 transition"
          >
            تأكيد وإنشاء المستخدم ✓
          </button>
        </div>
      </form>
    </div>
  );
}`
      },
      outputExplanation: "يقدم هذا النموذج تدفقاً احترافياً متكاملاً لتسجيل المستخدمين؛ يدمج بين التحقق من الحقول الإلزامية، ومحدد الأدوار البصري، ومولد كلمات المرور الآمنة بنقرة زر واحدة.",
      commonMistakes: [
        {
          wrong: "// الاعتماد على فحص HTML الافتراضي فقط (required) دون التحقق البرمجي الدقيق من صيغ البريد وأرقام الهواتف",
          correct: "// الجمع بين قيود HTML والتحقق البرمجي الصارم من صحة المدخلات قبل الإرسال"
        }
      ],
      bestPractices: [
        "توفير زر لتوليد كلمات مرور عشوائية معقدة لتجنب استخدام كلمات مرور ضعيفة وسهلة التخمين",
        "توضيح الحقول الإلزامية بوضع علامة النجمة (*) لمنع إرباك المستخدم عند الإرسال",
        "توفير زر إلغاء صريح يعيد المستخدم للقائمة الرئيسية دون حفظ أي بيانات مؤقتة"
      ],
      infographic: {
        title: "خطوات نموذج تسجيل المستخدم الجديد",
        nodes: [
          { label: "1. البيانات الشخصية", detail: "الاسم الكامل والبريد الإلكتروني المهني" },
          { label: "2. الهيكل التنظيمي", detail: "اختيار الإدارة أو القسم التابع له الموظف" },
          { label: "3. الدور والصلاحيات", detail: "تحديد مستوى الوصول (Admin / Manager / Viewer)" },
          { label: "4. بيانات الاعتماد الأولية", detail: "توليد كلمة مرور مؤقتة وتفعيل رابط الدعوة" }
        ]
      }
    },
    {
      id: "32.3.e",
      title: "التحقق باستخدام React Hook Form وZod (Schema Validation with Zod & RHF)",
      englishTerm: {
        term: "Form Validation with React Hook Form & Zod",
        pronunciation: "فورم فاليديشن ويذ رياكت هوك فورم آند زود",
        meaning: "التحقق من صحة النماذج باستخدام React Hook Form ومخططات Zod"
      },
      description: "يمثل الثنائي `React Hook Form` و `Zod` المعيار الصناعي الحديث والأعلى كفاءة لإدارة والتحقق من صحة النماذج في بيئة React. يتميز `React Hook Form` بأنه يعتمد على المدخلات غير المقيدة (Uncontrolled Inputs عبر المراجع Refs)؛ مما يعني أنه لا يطلق إعادة تصيير (Re-render) مع كل ضغطة مفتاح كما تفعل الطرق التقليدية، مما يضمن أداءً فائق السرعة حتى في النماذج الضخمة. بينما توفر مكتبة `Zod` صياغة مخططات تحقق صلبة (Schema-first Validation) تضمن صحة صيغ البريد الإلكتروني، وتعقيد كلمات المرور، والحدود الدنيا للأحرف، وترجمة رسائل الأخطاء إلى اللغة العربية بمرونة تامة.",
      analogy: "يشبه وجود قفل أمان ذكي متصل بحاسوب تدقيق؛ يمنع إغلاق الباب إلا إذا كانت جميع الأوراق مكتملة الأختام والتوقيعات الرسمية، وإذا وُجد أي نقص يضيء مصباح أحمر بجانب الخانة الناقصة فوراً مع تنبيه بالسبب.",
      whyItMatters: "يحمي قاعدة البيانات من إدخال نصوص فاسدة أو بيانات غير صالحة، ويقلل كود إدارة النماذج والتحقق بنسبة تزيد عن 60% مقارنة بالـ useState اليدوي.",
      syntax: `// التحقق عبر Zod مع React Hook Form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3, "الاسم يجب أن لا يقل عن 3 أحرف"),
  email: z.string().email("صيغة البريد الإلكتروني غير صحيحة")
});

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(userSchema)
});`,
      simpleExample: {
        title: "نموذج تحقق بسيط يوضح فحص صيغة البريد وطول الاسم",
        code: `// محاكاة لمنطق التحقق الصارم بنمط Zod
function validateUserInput(data) {
  const errors = {};

  // فحص الاسم
  if (!data.name || data.name.trim().length < 3) {
    errors.name = "يجب أن يحتوي الاسم على 3 أحرف على الأقل.";
  }

  // فحص البريد بصيغة Regex
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = "يرجى إدخال بريد إلكتروني صالح (name@domain.com).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

// اختبار دالة الفحص
const testData = { name: "أح", email: "invalid-email" };
const validation = validateUserInput(testData);
console.log("هل النموذج صالح؟", validation.isValid); // false
console.log("الأخطاء المرصودة:", validation.errors);`
      },
      advancedExample: {
        title: "مخطط Zod متكامل للتحقق من بيانات المستخدم مع رسائل خطأ عربية دقيقة وربطه بـ React Hook Form",
        code: `// نموذج كود مخطط Zod الاحترافي
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// تعريف مخطط التحقق الصارم بنمط Zod
export const UserRegistrationSchema = {
  // فحص الاسم الكامل
  validateName: (val) => {
    if (!val || val.trim().length < 3) return "الاسم الكامل يجب ألا يقل عن 3 أحرف.";
    if (val.trim().length > 50) return "الاسم طويل جداً (الحد الأقصى 50 حرفاً).";
    return null;
  },

  // فحص البريد الإلكتروني
  validateEmail: (val) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    if (!val || !re.test(val)) return "يرجى كتابة بريد إلكتروني رسمي صحيح.";
    return null;
  },

  // فحص قوة كلمة المرور
  validatePassword: (val) => {
    if (!val || val.length < 8) return "كلمة المرور يجب ألا تقل عن 8 خانات.";
    if (!/[A-Z]/.test(val)) return "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل (A-Z).";
    if (!/[0-9]/.test(val)) return "يجب أن تحتوي كلمة المرور على رقم واحد على الأقل (0-9).";
    return null;
  }
};

// مكون نموذج التحقق التفاعلي المتقدم
export function ValidatedUserForm({ onValidSubmit }) {
  const [fields, setFields] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // فحص حقل مفرد عند الخروج منه (onBlur)
  const validateSingleField = (name, val) => {
    let err = null;
    if (name === "name") err = UserRegistrationSchema.validateName(val);
    if (name === "email") err = UserRegistrationSchema.validateEmail(val);
    if (name === "password") err = UserRegistrationSchema.validatePassword(val);

    setErrors(prev => ({ ...prev, [name]: err }));
    return err;
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateSingleField(field, fields[field]);
  };

  const handleChange = (field, val) => {
    setFields(prev => ({ ...prev, [field]: val }));
    if (touched[field]) {
      validateSingleField(field, val);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errName = UserRegistrationSchema.validateName(fields.name);
    const errEmail = UserRegistrationSchema.validateEmail(fields.email);
    const errPass = UserRegistrationSchema.validatePassword(fields.password);

    const allErrors = { name: errName, email: errEmail, password: errPass };
    setErrors(allErrors);
    setTouched({ name: true, email: true, password: true });

    if (!errName && !errEmail && !errPass) {
      onValidSubmit(fields);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl font-sans space-y-4">
      <h3 className="font-black text-sm text-slate-900 dark:text-white mb-2">نموذج التحقق الصارم (RHF + Zod Pattern)</h3>

      {/* حقل الاسم */}
      <div>
        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">الاسم الكامل:</label>
        <input
          type="text"
          value={fields.name}
          onBlur={() => handleBlur("name")}
          onChange={e => handleChange("name", e.target.value)}
          placeholder="محمد عبد الله"
          className={\`w-full p-2.5 text-xs rounded-xl border outline-none \${errors.name && touched.name ? "border-rose-500 bg-rose-50/50" : "border-slate-200 bg-slate-50"}\`}
        />
        {errors.name && touched.name && <p className="text-[11px] text-rose-500 mt-1 font-semibold">⚠️ {errors.name}</p>}
      </div>

      {/* حقل البريد */}
      <div>
        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">البريد الإلكتروني:</label>
        <input
          type="email"
          value={fields.email}
          onBlur={() => handleBlur("email")}
          onChange={e => handleChange("email", e.target.value)}
          placeholder="admin@domain.io"
          className={\`w-full p-2.5 text-xs rounded-xl border outline-none \${errors.email && touched.email ? "border-rose-500 bg-rose-50/50" : "border-slate-200 bg-slate-50"}\`}
        />
        {errors.email && touched.email && <p className="text-[11px] text-rose-500 mt-1 font-semibold">⚠️ {errors.email}</p>}
      </div>

      {/* حقل كلمة المرور */}
      <div>
        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">كلمة المرور الآمنة:</label>
        <input
          type="password"
          value={fields.password}
          onBlur={() => handleBlur("password")}
          onChange={e => handleChange("password", e.target.value)}
          placeholder="8 خانات على الأقل مع حرف كبير ورقم"
          className={\`w-full p-2.5 text-xs rounded-xl border outline-none \${errors.password && touched.password ? "border-rose-500 bg-rose-50/50" : "border-slate-200 bg-slate-50"}\`}
        />
        {errors.password && touched.password && <p className="text-[11px] text-rose-500 mt-1 font-semibold">⚠️ {errors.password}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-black text-xs rounded-xl shadow transition"
      >
        تأكيد البيانات وتمرير الفحص ✓
      </button>
    </form>
  );
}`
      },
      outputExplanation: "يوضح هذا التصميم كيف تضمن مخططات Zod فحص البيانات على مستوى الحقل أثناء الخروج منه (onBlur) وعلى مستوى النموذج ككل عند الإرسال، مع عرض رسائل خطأ عربية دقيقة بجانب الحقل المعني.",
      commonMistakes: [
        {
          wrong: "// التحقق من البيانات فقط عند نقر زر الإرسال، مما يفاجئ المستخدم بعشرات الأخطاء دفعة واحدة",
          correct: "// التحقق عند حدث onBlur لكل حقل بعد تفاعل المستخدم معه لتقديم تغذية راجعة فورية وهادئة"
        }
      ],
      bestPractices: [
        "استخدام zodResolver لدمج مخطط Zod مع React Hook Form للحصول على كود نقي ومختصر",
        "تلوين حدود الحقل باللون الأحمر الهادئ عند وجود خطأ لجذب انتباه المستخدم فورياً",
        "كتابة رسائل الأخطاء بلغة واضحة وودية تشرح كيفية حل المشكلة بدلاً من مجرد ذكر كلمة 'خطأ'"
      ],
      infographic: {
        title: "منظومة التحقق بـ React Hook Form و Zod",
        nodes: [
          { label: "1. مخطط Zod (Schema)", detail: "تعريف قواعد الحقول ورسائل الخطأ العربية بدقة" },
          { label: "2. كفاءة RHF غير المقيدة", detail: "استخدام Refs لمنع إعادات الرندر مع كل ضغطة مفتاح" },
          { label: "3. التحقق اللحظي (onBlur)", detail: "فحص الحقل فور انتقال المؤشر للحقل التالي" },
          { label: "4. سلامة البيانات المستلمة", detail: "ضمان وصول كائن بيانات نقي ومفحوص لدالة onSubmit" }
        ]
      }
    },
    {
      id: "32.3.f",
      title: "تعديل بيانات المستخدم (Inline Editing & Form Pre-population)",
      englishTerm: {
        term: "User Mutation & Form Pre-population",
        pronunciation: "يوزر ميوتيشن آند فورم بري بوبيوليشن",
        meaning: "تعديل بيانات المستخدم وتعبئة النموذج المسبقة"
      },
      description: "عملية تعديل بيانات مستخدم موجود (`Update User`) تتطلب تدفقاً برمجياً دقيقاً يتضمن: (1) جلب بيانات المستخدم الحالية وتعبئة حقول النموذج مسبقاً (Form Pre-population) عبر خاصية `defaultValues`، (2) حماية المعرف الأساسي وتاريخ الانضمام من التعديل (Read-only Fields)، (3) رصد الحقول التي طرأ عليها تعديل فعلي (Dirty Fields Tracking) لتفادي إرسال بيانات متطابقة للخادم، و (4) إتاحة إمكانية التحرير المباشر الموضعي (Inline Editing) للأدوار والحالة مباشرة من جدول المستخدمين دون الحاجة لفتح صفحة كاملة.",
      analogy: "يشبه تحديث رخصة القيادة؛ تأخذ استمارة البيانات المطبوعة مسبقاً باسمك وصورتك، وتقوم فقط بتعديل عنوان سكنك الجديد أو رقم هاتفك، مع بقاء رقم الهوية وتاريخ الميلاد ثابتاً لا يتغير.",
      whyItMatters: "يوفر تجربة تعديل سهلة وموثوقة لمديري النظام، ويمنع الكتابة فوق البيانات القديمة عن طريق الخطأ بفضل التعبئة المسبقة الشاملة.",
      syntax: `// التعبئة المسبقة في React Hook Form
const { reset } = useForm({ defaultValues: userData });
useEffect(() => {
  if (userData) reset(userData);
}, [userData, reset]);`,
      simpleExample: {
        title: "تعديل بيانات مستخدم مع تعبئة الحقول مسبقاً",
        code: `import React, { useState } from "react";

// مكون تعديل بيانات مستخدم مبسط
function SimpleEditUserForm({ initialUser, onUpdate }) {
  const [name, setName] = useState(initialUser.name);
  const [role, setRole] = useState(initialUser.role);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      ...initialUser,
      name: name.trim(),
      role: role
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "10px", maxWidth: "350px", fontFamily: "sans-serif" }}>
      <h4>تعديل بيانات: {initialUser.email}</h4>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ fontSize: "12px", display: "block" }}>الاسم:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} style={{ width: "100%", padding: "6px" }} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ fontSize: "12px", display: "block" }}>الدور:</label>
        <select value={role} onChange={e => setRole(e.target.value)} style={{ width: "100%", padding: "6px" }}>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
        </select>
      </div>
      <button type="submit" style={{ padding: "6px 12px", backgroundColor: "#0284c7", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
        تحديث البيانات
      </button>
    </form>
  );
}

export default SimpleEditUserForm;`
      },
      advancedExample: {
        title: "نظام تعديل احترافي مع رصد الحقول المتغيرة (Dirty State) والتحرير الموضعي السريع للدور",
        code: `import React, { useState, useEffect } from "react";

// مكون نموذج تعديل المستخدم المتقدم
export function AdvancedEditUserModal({ user, isOpen, onClose, onSave }) {
  // حالة البيانات قيد التعديل
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    role: "Viewer",
    status: "Active"
  });

  // التعبئة المسبقة عند فتح المودال أو تغير المستخدم
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        department: user.department || "عام",
        role: user.role || "Viewer",
        status: user.status || "Active"
      });
    }
  }, [user]);

  if (!isOpen || !user) return null;

  // التحقق مما إذا كان هناك أي تعديل فعلي على البيانات (isDirty)
  const isDirty =
    formData.name !== user.name ||
    formData.department !== user.department ||
    formData.role !== user.role ||
    formData.status !== user.status;

  const handleSave = (e) => {
    e.preventDefault();
    if (!isDirty) {
      onClose();
      return;
    }
    onSave({
      ...user,
      ...formData,
      updatedAt: Date.now()
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm font-sans animate-fade-in">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white">تعديل ملف المستخدم</h3>
            <span className="text-xs text-slate-400">معرف الحساب: {user.id}</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">✕</button>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          {/* الاسم */}
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">الاسم الكامل</label>
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
            />
          </div>

          {/* البريد الإلكتروني (للقراءة فقط) */}
          <div>
            <label className="text-xs font-bold text-slate-400 block mb-1">البريد الإلكتروني (غير قابل للتعديل)</label>
            <input
              type="email"
              disabled
              value={formData.email}
              className="w-full p-2.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed outline-none font-mono"
            />
          </div>

          {/* الدور والحالة */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">الدور الوظيفي</label>
              <select
                value={formData.role}
                onChange={e => setFormData({ ...formData, role: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
              >
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">حالة الحساب</label>
              <select
                value={formData.status}
                onChange={e => setFormData({ ...formData, status: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
              >
                <option value="Active">نشط</option>
                <option value="Suspended">معلق / محظور</option>
              </select>
            </div>
          </div>

          {/* أزرار الحفظ والإلغاء */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs text-slate-500 font-bold hover:text-slate-800"
            >
              إلغاء
            </button>
            <button
              type="submit"
              disabled={!isDirty}
              className="px-6 py-2.5 bg-sky-600 text-white font-bold text-xs rounded-xl shadow disabled:opacity-40 hover:bg-sky-700 transition"
            >
              {isDirty ? "حفظ التغييرات ✓" : "لم يتم التعديل"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يوضح هذا التصميم نافذة تعديل ذكية تملأ البيانات مسبقاً وتراقب حالة التغيير (isDirty)؛ فلا يتم تفعيل زر الحفظ إلا إذا قام المشرف بتعديل فعلي على الحقول، مع قفل البريد الإلكتروني لمنع العبث بالهوية الأساسية للحساب.",
      commonMistakes: [
        {
          wrong: "// السماح بتعديل البريد الإلكتروني أو المعرف الفرعي دون تحقق مما قد يسبب تكرار الحسابات أو تلف الجلسات",
          correct: "// قفل الحقول الحساسة وجعلها للقراءة فقط (disabled / read-only) أثناء عملية التعديل العادية"
        }
      ],
      bestPractices: [
        "استخدام حالة isDirty لتعطيل زر الحفظ إذا لم يطرأ أي تغيير على البيانات لتفادي استدعاءات الخادم غير الضرورية",
        "تحديث حقل updatedAt تلقائياً عند حفظ التعديل لتوثيق توقيت آخر تحديث في النظام",
        "توفير زر إلغاء صريح يعيد استرجاع القيم الأصلية دون حفظ التغييرات"
      ],
      infographic: {
        title: "دورة تعديل بيانات المستخدم والتعبئة المسبقة",
        nodes: [
          { label: "1. استرجاع السجل الأصلي", detail: "جلب بيانات المستخدم الحالية من الخادم" },
          { label: "2. التعبئة المسبقة (Pre-populate)", detail: "ملء حقول النموذج تلقائياً بالقيم الأصلية" },
          { label: "3. رصد التغييرات (isDirty)", detail: "مقارنة القيم المدخلة بالأصل وتفعيل زر الحفظ" },
          { label: "4. التحديث النقي والمزامنة", detail: "إرسال البيانات المعدلة وتحديث الكاش المحلي" }
        ]
      }
    },
    {
      id: "32.3.g",
      title: "حذف المستخدم مع رسالة تأكيد (Safe Deletion & Confirmation Modal)",
      englishTerm: {
        term: "Safe Deletion & Destructive Confirmation Modal",
        pronunciation: "سيف ديليشن آند ديستراكتيف كونفيرميشن مودال",
        meaning: "الحذف الآمن ونافذة التأكيد للإجراءات التدميرية"
      },
      description: "حذف حساب مستخدم هو إجراء تدميري غير قابل للتراجع (Destructive Action)؛ قد يترتب عليه فقدان صلاحيات الوصول أو إلغاء ارتباط الموظف بسجلات المشاريع والطلبات. يمنع التطبيق الاحترافي الحذف بنقرة زر عفوية؛ بل يفرض استخدام نافذة تأكيد تحذيرية (Destructive Confirmation Modal) تتطلب: (1) توضيح اسم المستخدم والبريد الإلكتروني المراد حذفه بصراحة، (2) تحذير المشرف بأن هذا الإجراء نهائي ولا يمكن التراجع عنه، (3) اشتراط كتابة كلمة 'تأكيد' أو كتابة بريد المستخدم في حقل نصي قبل تفعيل زر الحذف النهائي باللون الأحمر، و (4) إتاحة خيار 'التعليق المؤقت' (Soft Delete / Suspend) كبديل آمن للحذف النهائي.",
      analogy: "يشبه زر إطلاق الصواريخ أو إغلاق المفاعل في الغواصات؛ يوجد فوق الزر غطاء زجاجي أحمر يجب رفعه أولاً، ثم إدخال مفتاحين وكلمة سر لتأكيد الإطلاق حتى لا يضغط أحد الزر بطريق الخطأ.",
      whyItMatters: "يحمي بيانات المنشأة من الأخطاء البشرية الفادحة التي قد تتسبب في شطب حسابات قيادية أو فقدان سجلات تاريخية لا تعوض.",
      syntax: `// التحقق من كتابة كلمة التأكيد قبل الحذف
<ConfirmationModal
  isOpen={isModalOpen}
  title="تأكيد حذف الحساب"
  requireInput="DELETE"
  onConfirm={executeDelete}
  onCancel={() => setIsModalOpen(false)}
/>`,
      simpleExample: {
        title: "نافذة تأكيد حذف بسيطة عبر نافذة الحوار confirm",
        code: `// دالة حذف مستخدم مع تأكيد المتصفح
function confirmAndDeleteUser(userId, userName, onDeleteCallback) {
  // إظهار نافذة التأكيد الرسمية للمتصفح
  const isConfirmed = window.confirm(
    \`تحذير: هل أنت متأكد تماماً من رغبتك في حذف حساب "\${userName}" نهائياً؟ هذا الإجراء لا يمكن التراجع عنه.\`
  );

  if (isConfirmed) {
    onDeleteCallback(userId);
    console.log(\`تم تأكيد وحذف المستخدم ذو المعرف: \${userId}\`);
  } else {
    console.log("تم إلغاء عملية الحذف بواسطة المستخدم.");
  }
}

// اختبار الدالة
confirmAndDeleteUser("usr_12", "طارق الصالح", (id) => console.log("استدعاء API الحذف لـ:", id));`
      },
      advancedExample: {
        title: "نافذة تأكيد حذف احترافية تشترط كتابة اسم المستخدم لتفعيل زر الحذف التدميري الأحمر",
        code: `import React, { useState } from "react";

// مكون نافذة تأكيد الحذف التدميرية الاحترافية
export function DestructiveDeleteUserModal({ user, isOpen, onClose, onConfirmDelete }) {
  // حالة نص التأكيد المكتوب
  const [confirmationInput, setConfirmationInput] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  if (!isOpen || !user) return null;

  // شرط تفعيل زر الحذف: كتابة اسم المستخدم بدقة أو كلمة "حذف"
  const isMatch = confirmationInput.trim() === user.name.trim() || confirmationInput.trim().toUpperCase() === "DELETE";

  const handleExecute = async () => {
    if (!isMatch) return;
    setIsDeleting(true);

    // محاكاة تأخير استدعاء الحذف لمدة ثانية
    setTimeout(() => {
      onConfirmDelete(user.id);
      setIsDeleting(false);
      setConfirmationInput("");
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm font-sans animate-fade-in">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-rose-200 dark:border-rose-900/50 p-6 sm:p-8 shadow-2xl text-center">
        {/* أيقونة التحذير التدميرية */}
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 flex items-center justify-center text-2xl text-rose-600">
          ⚠️
        </div>

        <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
          تأكيد حذف الحساب نهائياً
        </h3>

        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
          أنت على وشك حذف حساب <strong>{user.name}</strong> ({user.email}) بشكل نهائي. سيتم إلغاء كافة صلاحياته ومسح بيانات الجلسة فوراً. هذا الإجراء <strong>لا يمكن التراجع عنه</strong>.
        </p>

        {/* حقل اشتراط كتابة الاسم للتأكيد */}
        <div className="mb-6 text-right">
          <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
            لتأكيد الحذف، اكتب اسم المستخدم <strong>"{user.name}"</strong> في المربع أدناه:
          </label>
          <input
            type="text"
            value={confirmationInput}
            onChange={(e) => setConfirmationInput(e.target.value)}
            placeholder="اكتب اسم المستخدم للتأكيد..."
            className="w-full p-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none text-center font-bold text-rose-600"
          />
        </div>

        {/* أزرار الإجراءات */}
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => { setConfirmationInput(""); onClose(); }}
            disabled={isDeleting}
            className="px-5 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition"
          >
            إلغاء التراجع
          </button>
          <button
            type="button"
            disabled={!isMatch || isDeleting}
            onClick={handleExecute}
            className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
          >
            {isDeleting ? "جاري الحذف..." : "حذف الحساب نهائياً 🗑️"}
          </button>
        </div>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يوفر هذا المودال أقصى درجات الأمان لمنع الحذف العرضي؛ حيث يظل زر الحذف الأحمر معطلاً تماماً حتى يقوم المشرف بكتابة اسم المستخدم المطابق في الحقل النصي، مما يؤكد وعيه الكامل بتبعات الإجراء.",
      commonMistakes: [
        {
          wrong: "// حذف الحساب بمجرد النقر على أيقونة سلة المهملات 🗑️ دون أي نافذة تأكيد أو تحذير",
          correct: "// استخدام نافذة تأكيد مخصصة (Confirmation Modal) تطلب تأكيداً صريحاً قبل إرسال طلب الحذف"
        }
      ],
      bestPractices: [
        "اشتراط كتابة اسم المستخدم أو كلمة 'DELETE' لتأكيد الإجراءات التدميرية الكبرى",
        "توفير خيار 'تعليق الحساب' (Deactivate) كخيار بديل يوقف صلاحيات المستخدم دون حذف سجلاته",
        "إغلاق النافذة وتنظيف حقل الإدخال فور إتمام العملية بنجاح"
      ],
      infographic: {
        title: "بروتوكول الحذف الآمن للحسابات",
        nodes: [
          { label: "1. ضغط زر الحذف 🗑️", detail: "فتح نافذة التأكيد التحذيرية المخصصة" },
          { label: "2. فحص الاسم المطابق", detail: "اشتراط كتابة اسم المستخدم لفك قفل الزر" },
          { label: "3. تنفيذ الإجراء التدميري", detail: "إرسال طلب الحذف وإظهار مؤشر معالجة" },
          { label: "4. تحديث الجدول فورياً", detail: "استبعاد الحساب وعرض إشعار بنجاح الحذف" }
        ]
      }
    },
    {
      id: "32.3.h",
      title: "إدارة البيانات باستخدام TanStack Query (Server State, Caching & Invalidation)",
      englishTerm: {
        term: "Server State Management with TanStack Query",
        pronunciation: "سيرفر ستيت مانجمنت ويذ تان ستاك كويري",
        meaning: "إدارة حالة الخادم والتخزين المؤقت عبر TanStack Query"
      },
      description: "تمثل بيانات المستخدمين 'حالة خادم' (Server State) وليست حالة واجهة محلية؛ فهي مخزنة في قاعدة بيانات بعيدة وتتغير بواسطة مسؤولين آخرين في أي لحظة. مكتبة `TanStack Query` (React Query) هي الأداة القياسية لإدارة حالة الخادم في React؛ حيث تتيح: (1) جلب البيانات وتخزينها تلقائياً في الكاش عبر `useQuery`، (2) تحديد فترة صلاحية البيانات (`staleTime`) لمنع طلبات الشبكة المتكررة، و (3) إبطال الكاش تلقائياً (Cache Invalidation) بعد عمليات الإضافة والتعديل والحذف عبر `queryClient.invalidateQueries({ queryKey: ['users'] })` لضمان مزامنة الجدول فورياً مع الخادم دون إعادة تحميل الصفحة.",
      analogy: "يشبه وجود شاشة عرض ذكية متصلة بالأقمار الاصطناعية؛ تعرض لك بيانات الطقس المخزنة لديها، وعندما ترصد إشارة جديدة من المركز الفلكي تحدث شاشتها تلقائياً دون أن تطلب منها ذلك يدوياً.",
      whyItMatters: "يقضي على 90% من كود useEffect و useState المعقد لجلب البيانات، ويوفر ميزات استثنائية مثل إعادة المحاولة التلقائية عند انقطاع الشبكة (Retry on failure) والتحديث المتفائل (Optimistic Updates).",
      syntax: `// جلب المستخدمين وإبطال الكاش في TanStack Query
const { data: users, isLoading } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsersList,
  staleTime: 60 * 1000 // صالح لدقيقة واحدة
});

const queryClient = useQueryClient();
const mutation = useMutation({
  mutationFn: deleteUserApi,
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] })
});`,
      simpleExample: {
        title: "محاكاة دورة حياة استعلام الكاش وإبطاله عند التعديل",
        code: `// محاكي بسيط لمنطق TanStack Query Client
class SimpleQueryCacheManager {
  constructor() {
    this.cache = new Map();
  }

  // جلب أو قراءة البيانات من الكاش
  async query(key, fetcher, maxAgeMs = 5000) {
    const entry = this.cache.get(key);
    // إذا كانت البيانات مخزنة وحديثة
    if (entry && (Date.now() - entry.time < maxAgeMs)) {
      return { data: entry.data, fromCache: true };
    }

    // جلب من المصدر وتحديث الكاش
    const freshData = await fetcher();
    this.cache.set(key, { data: freshData, time: Date.now() });
    return { data: freshData, fromCache: false };
  }

  // إبطال الكاش فور إجراء تعديل (Invalidate)
  invalidate(key) {
    this.cache.delete(key);
    console.log(\`تم إبطال كاش المفتاح: [\${key}] لضمان جلب بيانات طازجة في الطلب القادم\`);
  }
}

// اختبار الكاش
const client = new SimpleQueryCacheManager();
const mockFetcher = async () => [{ id: 1, name: "علي" }];

// الطلب الأول (من الشبكة)
client.query("users", mockFetcher).then(res => {
  console.log("الطلب الأول (من الكاش؟):", res.fromCache); // false
  // الطلب الثاني فوراً (من الكاش)
  client.query("users", mockFetcher).then(res2 => {
    console.log("الطلب الثاني (من الكاش؟):", res2.fromCache); // true
    // إبطال الكاش بعد إضافة مستخدم جديد
    client.invalidate("users");
  });
});`
      },
      advancedExample: {
        title: "بنية خدمات TanStack Query احترافية لإدارة المستخدمين مع الطفرات (Mutations) والتحديث التلقائي",
        code: `// كود خدمة المستخدمين المتقدمة بنمط TanStack Query
export const USERS_QUERY_KEYS = {
  ALL: ["users"],
  DETAIL: (id) => ["users", id]
};

// فئة محاكاة الطفرات واستعلامات الخادم
export class UsersQueryOrchestrator {
  constructor(initialUsers = []) {
    this.database = [...initialUsers];
  }

  // دالة الاستعلام الرئيسية fetchUsers
  async fetchUsers() {
    await new Promise(r => setTimeout(r, 400)); // محاكاة تأخير الشبكة
    return [...this.database];
  }

  // دالة الطفرة لحذف مستخدم
  async deleteUser(userId) {
    await new Promise(r => setTimeout(r, 300));
    this.database = this.database.filter(u => u.id !== userId);
    return { success: true, deletedId: userId };
  }

  // دالة الطفرة لإضافة مستخدم جديد
  async createUser(newUser) {
    await new Promise(r => setTimeout(r, 300));
    const created = { id: "usr_" + Date.now(), ...newUser };
    this.database.push(created);
    return created;
  }
}

// محاكاة هوك الاستعلام والطفرة
const orchestrator = new UsersQueryOrchestrator([
  { id: "1", name: "خالد بن فهد", role: "Admin" }
]);

// تجربة الإضافة وإعادة المزامنة
async function runQueryDemo() {
  console.log("--- 1. جلب المستخدمين الأولي ---");
  const list1 = await orchestrator.fetchUsers();
  console.log("العدد الحالي:", list1.length);

  console.log("--- 2. تنفيذ طفرة إنشاء مستخدم جديد ---");
  await orchestrator.createUser({ name: "منى الدوسري", role: "Editor" });

  console.log("--- 3. إعادة الاستعلام بعد إبطال الكاش (Refetch) ---");
  const list2 = await orchestrator.fetchUsers();
  console.log("العدد بعد التحديث التلقائي:", list2.length); // 2
}

runQueryDemo();`
      },
      outputExplanation: "يوضح هذا التأسيس كيف تدير طفرات TanStack Query (Mutations) التعديلات غير المتزامنة على الخادم، وتضمن قيام invalidateQueries بطلب أحدث نسخة للبيانات فورياً دون كتابة كود تحديث يدوي مكرر.",
      commonMistakes: [
        {
          wrong: "// استخدام useEffect لجلب البيانات في كل صفحة وتخزينها في useState يدوي مع مواجهة مشاكل السباق الشبكي (Race Conditions)",
          correct: "// استخدام TanStack Query الذي يتكفل بالكاش وإلغاء الطلبات القديمة وإعادة المحاولة وتوحيد حالة الخادم"
        }
      ],
      bestPractices: [
        "تنظيم مفاتيح الاستعلام (Query Keys) في كائن ثابت موحد لتفادي أخطاء الحروف عند استدعاء invalidateQueries",
        "تحديد مدة staleTime مناسبة (مثلاً 1 إلى 5 دقائق) لتفادي استهلاك الخادم بطلبات متطابقة في كل تنقل بين التبويبات",
        "استخدام ميزة التحديث المتفائل (Optimistic Updates) لحذف الصف من الجدول فورياً قبل انتظار رد الخادم لمنح تجربة فائقة السرعة"
      ],
      infographic: {
        title: "دورة حياة حالة الخادم في TanStack Query",
        nodes: [
          { label: "1. useQuery", detail: "جلب المستخدمين وعرضهم مع فحص staleTime في الكاش" },
          { label: "2. تنفيذ الطفرة (Mutation)", detail: "إرسال طلب الإضافة أو التعديل أو الحذف للخادم" },
          { label: "3. إبطال الكاش (Invalidate)", detail: "إعلام النظام بأن كاش ['users'] أصبح قديماً" },
          { label: "4. إعادة الجلب التلقائي", detail: "تحديث الجدول بالبيانات الطازجة دون تدخل يدوي" }
        ]
      }
    },
    {
      id: "32.3.i",
      title: "عرض حالات Loading وError (Skeleton Placeholders & Error Alerts)",
      englishTerm: {
        term: "Loading Skeletons, Error Alerts & Retry Mechanism",
        pronunciation: "لودينج سكيلتونز، إيرور أليرتس آند ريتراي ميكانيزم",
        meaning: "الهياكل العظمية للتحميل وتنبيهات الأخطاء وآلية إعادة المحاولة"
      },
      description: "المستخدم الإداري لا يجب أن يواجه شاشة بيضاء فارغة أو جموداً غير مفسر أثناء انتظار استجابة الخادم؛ لذا فإن هندسة حالات التحميل والأخطاء تعد ركيزة أساسية لجودة المشروع. يغطي هذا الموضوع: (1) بناء هياكل عظمية رمادية نابضة (Skeleton Loaders) تحاكي صفوف الجدول وبطاقات المستخدمين أثناء الجلب الأولي لمنح شعور فوري بالسرعة، و (2) تصميم بطاقة تنبيه بالأخطاء (Error Banner) تشرح بوضوح سبب تعذر الاتصال (انقطاع الإنترنت، انتهاء الجلسة، أو خطأ خادم 500) مع توفير زر صريح لـ 'إعادة المحاولة' (Retry) دون الحاجة لإعادة تحميل الصفحة بالكامل.",
      analogy: "يشبه دخول عيادة الطبيب في موعدك؛ بدلاً من إغلاق الباب في وجهك، تستقبلك الممرضة بابتسامة وتخبرك: 'الدكتور يجري مكالمة سريعة وسيدخل بعد دقيقة، تفضل بالجلوس واستمتع بالمجلة'، فتنتظر بهدوء وراحة بال.",
      whyItMatters: "يحافظ على ثقة المشرف في استقرار المنظومة، ويوجه المستخدم لكيفية حل المشاكل الشبكية العارضة بنقرة واحدة.",
      syntax: `// التعامل مع حالات TanStack Query الثلاثية
const { data, isLoading, isError, error, refetch } = useQuery(...);

if (isLoading) return <UsersTableSkeleton rows={5} />;
if (isError) return <ErrorAlert message={error.message} onRetry={refetch} />;
return <UsersTable users={data} />;`,
      simpleExample: {
        title: "عرض هيكل عظمي لجدول المستخدمين وتنبيه بالخطأ مع زر إعادة المحاولة",
        code: `import React from "react";

// مكون الهيكل العظمي لصفوف الجدول
export function SimpleTableSkeleton({ count = 3 }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "16px" }}>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} style={{ height: "40px", backgroundColor: "#e2e8f0", borderRadius: "8px", marginBottom: "8px", opacity: 0.7 }} />
      ))}
    </div>
  );
}

// مكون رسالة الخطأ مع زر المحاولة
export function SimpleErrorAlert({ message, onRetry }) {
  return (
    <div style={{ padding: "16px", backgroundColor: "#fef2f2", border: "1px solid #fecaca", borderRadius: "8px", color: "#991b1b", textAlign: "center", fontFamily: "sans-serif" }}>
      <p style={{ margin: "0 0 10px", fontWeight: "bold" }}>⚠️ {message}</p>
      {onRetry && (
        <button onClick={onRetry} style={{ padding: "6px 14px", backgroundColor: "#dc2626", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
          إعادة المحاولة
        </button>
      )}
    </div>
  );
}`
      },
      advancedExample: {
        title: "نظام إدارة حالات الواجهة المتقدم مع هيكل عظمي متحرك بتقنية Tailwind وتنبيهات أخطاء تشخيصية",
        code: `import React from "react";

// مكون الهيكل العظمي المتحرك لجدول المستخدمين
export function UsersTableAnimatedSkeleton({ rowsCount = 4 }) {
  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm animate-pulse font-sans">
      {/* ترويسة الجدول العظمية */}
      <div className="flex justify-between items-center mb-6">
        <div className="h-6 w-48 bg-slate-200 dark:bg-slate-800 rounded-xl" />
        <div className="h-8 w-24 bg-slate-200 dark:bg-slate-800 rounded-xl" />
      </div>

      {/* الأسطر العظمية المتكررة */}
      <div className="space-y-4">
        {Array.from({ length: rowsCount }).map((_, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-850 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700" />
              <div className="space-y-1.5">
                <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded" />
                <div className="h-3 w-44 bg-slate-200 dark:bg-slate-700/60 rounded" />
              </div>
            </div>
            <div className="h-6 w-20 bg-slate-200 dark:bg-slate-700 rounded-full hidden sm:block" />
            <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

// مكون تنبيه الخطأ الذكي للوحة المستخدمين
export function DiagnosticErrorCard({ error, onRetry }) {
  return (
    <div className="w-full max-w-lg mx-auto p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-rose-200 dark:border-rose-900/40 text-center shadow-xl font-sans">
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-500 flex items-center justify-center text-3xl">
        ⚡
      </div>
      <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
        تعذر تحميل بيانات المستخدمين
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
        {error?.message || "حدث خطأ غير متوقع أثناء الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت والمحاولة مجدداً."}
      </p>
      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={onRetry}
          className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
        >
          <span>إعادة المحاولة</span>
          <span>↺</span>
        </button>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يوضح هذا التصميم كيف تمنح الهياكل العظمية المتحركة انطباعاً باستجابة النظام وفهمه لشكل البيانات القادمة، وكيف توفر كروت الأخطاء التشخيصية حلاً مباشراً لإعادة المحاولة بضغطة زر دون توتر.",
      commonMistakes: [
        {
          wrong: "// استخدام أيقونة دوران دائرية (Spinner) صغيرة في منتصف صفحة بيضاء ضخمة تجعل الواجهة تبدو معطلة وبطيئة",
          correct: "// استخدام Skeleton Loaders تحاكي شكل الجدول والبطاقات وتملأ مساحة الشاشة بشكل متناسق ومريح للعين"
        }
      ],
      bestPractices: [
        "مطابقة أبعاد وأماكن عناصر الهيكل العظمي مع عناصر الواجهة الفعلية لمنع قفزات التخطيط (Layout Shifts)",
        "توفير زر إعادة المحاولة (Retry) دائماً في جميع بطاقات الأخطاء لتفادي إجبار المشرف على إعادة تحميل الصفحة",
        "تضمين رمز الخطأ أو التشخيص لتمكين المشرف من إبلاغ فريق الدعم الفني عند استمرار العطل"
      ],
      infographic: {
        title: "هندسة حالات الواجهة التفاعلية",
        nodes: [
          { label: "1. حالة التحميل (Loading)", detail: "عرض Skeleton متطابق مع شكل الجدول والبطاقات" },
          { label: "2. حالة الفشل (Error State)", detail: "بطاقة خطأ تشخيصية مع زر إعادة المحاولة ↺" },
          { label: "3. حالة البيانات الفارغة", detail: "رسالة ودية توضح عدم وجود مستخدمين مع زر إضافة" },
          { label: "4. حالة النجاح (Success)", detail: "عرض الجدول والبيانات مع كافة الصلاحيات والأدوات" }
        ]
      }
    },
    {
      id: "32.3.j",
      title: "كتابة Integration Tests (Testing Library Integration & Form Submissions)",
      englishTerm: {
        term: "Integration Testing with React Testing Library",
        pronunciation: "إنتيجريشن تيستينج ويذ رياكت تيستينج لايبراري",
        meaning: "اختبارات التكامل واختبار إرسال النماذج والتحقق"
      },
      description: "اختبارات التكامل (Integration Tests) هي خط الدفاع الحاسم الذي يضمن أن المكونات المتعددة (نموذج الإضافة، التحقق عبر Zod، وجدول المستخدمين) تعمل معاً بتناغم تام كمنظومة واحدة متماسكة. يغطي هذا الموضوع كتابة سيناريوهات اختبار حقيقية تحاكي تصرفات المشرف: (1) محاكاة فتح نموذج إضافة مستخدم وتعبئة حقول الاسم والبريد، (2) التحقق من ظهور رسائل الأخطاء عند كتابة بريد إلكتروني غير صالح، (3) التحقق من استدعاء دالة الحفظ عند تصحيح البيانات، و (4) اختبار ظهور نافذة تأكيد الحذف عند الضغط على سلة المهملات.",
      analogy: "يشبه تمرين الإخلاء والإنقاذ المشترك بين فرق الإطفاء والإسعاف والشرطة؛ لا يتم اختبار كل فرد بمفرده في غرفته، بل يتم اختبار كيفية تعاون وتنسيق الفرق المختلفة معاً عند وقوع حادث حقيقي في الميدان.",
      whyItMatters: "يمنح فريق التطوير الثقة التامة بأن تدفق العمليات الإدارية الحيوية سليم 100%، ويمنع الانتكاسات البرمجية (Regressions) عند إضافة ميزات جديدة.",
      syntax: `// اختبار تكاملي لإرسال نموذج المستخدم بنجاح
test("يجب إرسال النموذج وإضافة المستخدم عند صحة البيانات", async () => {
  render(<UserOnboardingFlow onSave={mockSave} />);
  fireEvent.change(screen.getByPlaceholderText(/الاسم/i), { target: { value: "فهد" } });
  fireEvent.change(screen.getByPlaceholderText(/البريد/i), { target: { value: "fahad@org.io" } });
  fireEvent.click(screen.getByRole("button", { name: /تأكيد وإنشاء/i }));
  await waitFor(() => expect(mockSave).toHaveBeenCalled());
});`,
      simpleExample: {
        title: "اختبار تكاملي بسيط للتحقق من رفض النموذج للبريد غير الصالح",
        code: `// كود اختبار تكاملي لمحاكاة فحص البريد
function runFormValidationIntegrationTest() {
  const formState = { name: "أحمد", email: "wrong-format" };
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  const isValidEmail = emailRegex.test(formState.email);
  const isSubmissionBlocked = !isValidEmail;

  console.log("نتيجة اختبار منع الإرسال عند خطأ البريد:", isSubmissionBlocked ? "PASS ✓" : "FAIL ✕");
  return isSubmissionBlocked;
}

// تشغيل الفحص
runFormValidationIntegrationTest();`
      },
      advancedExample: {
        title: "جناح اختبارات تكامل متكامل لعمليات إضافة وحذف المستخدمين وتدفق نوافذ التأكيد",
        code: `// محاكاة جناح اختبارات التكامل الشامل لنظام المستخدمين
export class UserManagementTestSuite {
  // اختبار 1: التحقق من رفض إرسال اسم أقل من 3 أحرف
  static testShortNameRejection() {
    const inputName = "أح";
    const hasError = inputName.trim().length < 3;
    console.log("[Test 1]: منع تسجيل الأسماء القصيرة (<3 أحرف):", hasError ? "PASS ✓" : "FAIL ✕");
    return hasError;
  }

  // اختبار 2: التحقق من تدفق نافذة الحذف التدميرية واشتراط كتابة الاسم
  static testDestructiveDeleteSafety() {
    const targetUser = { id: "10", name: "سلطان العتيبي" };
    let typedConfirm = "سلطان";
    let isDeleteAllowed = typedConfirm === targetUser.name;
    console.log("[Test 2.A]: منع الحذف عند عدم تطابق الاسم الكامل:", !isDeleteAllowed ? "PASS ✓" : "FAIL ✕");

    typedConfirm = "سلطان العتيبي";
    isDeleteAllowed = typedConfirm === targetUser.name;
    console.log("[Test 2.B]: تفعيل زر الحذف عند تطابق الاسم تماماً:", isDeleteAllowed ? "PASS ✓" : "FAIL ✕");
    return isDeleteAllowed;
  }

  // اختبار 3: التحقق من دورة حياة الكاش وتحديث القائمة
  static testCacheInvalidationAfterMutation() {
    let usersList = [{ id: 1, name: "عمر" }];
    const newUser = { id: 2, name: "ياسر" };
    
    // محاكاة الطفرة وإعادة المزامنة
    usersList = [...usersList, newUser];
    const isUpdated = usersList.length === 2 && usersList[1].name === "ياسر";
    console.log("[Test 3]: تحديث القائمة فور نجاح الطفرة:", isUpdated ? "PASS ✓" : "FAIL ✕");
    return isUpdated;
  }
}

// تشغيل الاختبارات
console.log("--- بدء تشغيل اختبارات التكامل لنظام إدارة المستخدمين ---");
UserManagementTestSuite.testShortNameRejection();
UserManagementTestSuite.testDestructiveDeleteSafety();
UserManagementTestSuite.testCacheInvalidationAfterMutation();`
      },
      outputExplanation: "يوضح هذا الجناح كيفية اختبار تدفقات العمل المتكاملة؛ بدءاً من صد المدخلات غير الصالحة بالنماذج، ومروراً بحماية نوافذ الحذف المشروطة، ووصولاً لتأكيد تحديث القوائم بعد طفرات الإضافة.",
      commonMistakes: [
        {
          wrong: "// الاعتماد فقط على اختبارات الوحدات المنفصلة (Unit Tests) وإهمال اختبار تدفق النماذج والتنقل بين الصفحات معاً",
          correct: "// كتابة اختبارات تكاملية تحاكي السيناريو الكامل الذي يخوضه المشرف الحقيقي في التطبيق"
        }
      ],
      bestPractices: [
        "استخدام waitFor من React Testing Library لانتظار التحديثات غير المتزامنة والتأثيرات الناتجة عن الوعود (Promises)",
        "اختبار حالات الأخطاء (Negative Test Cases) بنفس كثافة اختبار حالات النجاح للتأكد من صلابة النظام",
        "تجنب اختبار التفاصيل التقنية للـ CSS والتركيز على النصوص والأدوار الظاهرة للمستخدم"
      ],
      infographic: {
        title: "هرم اختبارات التكامل لنظام المستخدمين",
        nodes: [
          { label: "1. اختبار النماذج والتحقق", detail: "محاكاة الإدخال وفحص ظهور رسائل أخطاء Zod" },
          { label: "2. اختبار تدفق النوافذ المنبثقة", detail: "فحص نوافذ تأكيد الحذف التدميرية والتعديل" },
          { label: "3. اختبار مزامنة الكاش", detail: "التأكد من تحديث القائمة بعد نجاح الطفرات" },
          { label: "4. سيناريوهات المستخدم الحقيقية", detail: "اختبار التدفق الكامل من القائمة للملف للحذف" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-32.3-1",
      question: "ما هي الفائدة الأساسية من استخدام React Hook Form مقارنة بإدارة النماذج عبر useState التقليدي؟",
      options: [
        "أنها تجبر المتصفح على تشفير البيانات تلقائياً",
        "أنها تعتمد على المدخلات غير المقيدة عبر المراجع (Refs) مما يمنع إعادات الرندر الزائدة مع كل ضغطة مفتاح ويوفر أداءً فائقاً",
        "أنها لا تعمل إلا مع قواعد بيانات Firebase فقط",
        "أنها تحذف الحقول الفارغة من الصفحة فورياً"
      ],
      correctAnswer: 1,
      explanation: "React Hook Form تعتمد على Uncontrolled Inputs عبر الـ Refs؛ فلا تعيد تصيير المكون في كل مرة يكتب فيها المستخدم حرفاً، مما يجعلها فائقة السرعة والخفة مقارنة بـ useState."
    },
    {
      id: "quiz-32.3-2",
      question: "لماذا نستخدم queryClient.invalidateQueries في TanStack Query بعد إتمام عملية حذف مستخدم بنجاح؟",
      options: [
        "لحذف قاعدة البيانات السحابية بالكامل",
        "لإعلام النظام بأن كاش قائمة المستخدمين أصبح قديماً ويجب إعادة جلبه تلقائياً لتحديث الجدول بالبيانات الطازجة",
        "لتسجيل خروج المشرف من لوحة التحكم فورياً",
        "لإلغاء اتصال الإنترنت في المتصفح"
      ],
      correctAnswer: 1,
      explanation: "إبطال الكاش (Invalidation) يخبر TanStack Query بأن البيانات المخزنة محلياً لم تعد صالحة بعد حدوث الطفرة، فيقوم تلقائياً بإعادة جلب القائمة وتحديث الجدول في لمح البصر."
    },
    {
      id: "quiz-32.3-3",
      question: "ما هو أفضل ممارسة أمنية عند تصميم نافذة تأكيد حذف حساب مستخدم نهائياً؟",
      options: [
        "تنفيذ الحذف فوراً عند نقر أيقونة الحذف دون أي نوافذ تحذيرية",
        "اشتراط كتابة اسم المستخدم أو كلمة 'DELETE' في حقل نصي لتفعيل زر الحذف الأحمر لمنع الحذف العرضي",
        "إغلاق المتصفح عند الضغط على زر الحذف",
        "تغيير لون خلفية الصفحة للأخضر لإشعار المستخدم بالهدوء"
      ],
      correctAnswer: 1,
      explanation: "اشتراط كتابة الاسم أو كلمة صريحة يجبر المشرف على التركيز والتأكد من هويته، مما يحمي الحسابات الحيوية من الحذف العرضي أو النقرات غير المقصودة."
    }
  ],
  exercise: {
    id: "exercise-32.3",
    title: "تمرين عملي: بناء مدير مستخدمين مصغر مع التحقق وحذف آمن بنافذة تأكيد",
    description: "قم بإنشاء مكون React يحتوي على حقلين لإضافة مستخدم جديد (الاسم والبريد) مع فحص عدم الفراغ، وعرض قائمة المستخدمين المضافين، وزر حذف يفتح نافذة تأكيد مشروطة قبل إتمام الحذف من المصفوفة.",
    hints: [
      "استخدم useState لمصفوفة المستخدمين، وبيانات الإدخال، وحالة المودال والمستخدم المستهدف",
      "تحقق من أن طول الاسم لا يقل عن 3 أحرف وصيغة البريد تحوي @",
      "لا تقم بالحذف الفعلي إلا بعد نقر زر التأكيد داخل المودال"
    ],
    solution: `import React, { useState } from "react";

export default function MiniUserManagerLab() {
  const [users, setUsers] = useState([
    { id: 1, name: "عمر خالد", email: "omar@test.io" },
    { id: 2, name: "هند سعيد", email: "hind@test.io" }
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [deletingUser, setDeletingUser] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (name.trim().length < 3) {
      setError("الاسم يجب أن لا يقل عن 3 أحرف");
      return;
    }
    if (!email.includes("@")) {
      setError("صيغة البريد غير صحيحة");
      return;
    }

    setUsers([...users, { id: Date.now(), name: name.trim(), email: email.trim() }]);
    setName("");
    setEmail("");
    setError("");
  };

  const confirmDelete = () => {
    if (deletingUser) {
      setUsers(users.filter(u => u.id !== deletingUser.id));
      setDeletingUser(null);
    }
  };

  return (
    <div style={{ maxWidth: "450px", margin: "auto", padding: "16px", fontFamily: "sans-serif" }}>
      <h3>مختبر إدارة المستخدمين المصغر</h3>
      
      <form onSubmit={handleAdd} style={{ marginBottom: "16px", padding: "12px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <input
          type="text"
          placeholder="الاسم الكامل..."
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ width: "100%", padding: "6px", marginBottom: "6px", boxSizing: "border-box" }}
        />
        <input
          type="email"
          placeholder="البريد الإلكتروني..."
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: "100%", padding: "6px", marginBottom: "6px", boxSizing: "border-box" }}
        />
        {error && <p style={{ color: "red", fontSize: "11px", margin: "0 0 6px" }}>{error}</p>}
        <button type="submit" style={{ padding: "6px 12px", background: "#0284c7", color: "#fff", border: "none", borderRadius: "6px" }}>
          إضافة مستخدم
        </button>
      </form>

      <h4>المستخدمين ({users.length})</h4>
      {users.map(u => (
        <div key={u.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px", borderBottom: "1px solid #eee" }}>
          <div>
            <strong>{u.name}</strong> <small style={{ color: "#666" }}>({u.email})</small>
          </div>
          <button onClick={() => setDeletingUser(u)} style={{ color: "red", border: "none", background: "none", cursor: "pointer" }}>
            حذف
          </button>
        </div>
      ))}

      {deletingUser && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", textAlign: "center", maxWidth: "300px" }}>
            <p>هل أنت متأكد من حذف <strong>{deletingUser.name}</strong>؟</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "16px" }}>
              <button onClick={() => setDeletingUser(null)}>إلغاء</button>
              <button onClick={confirmDelete} style={{ background: "red", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "6px" }}>
                تأكيد الحذف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`
  },
  infographic: {
    title: "المخطط الهيكلي لمشروع إدارة المستخدمين (User Management Architecture)",
    nodes: [
      { label: "1. Routing & Views", detail: "المسارات المتعددة: القائمة، الملف الشخصي، الإضافة، والتعديل" },
      { label: "2. Form Validation", detail: "التحقق الصارم عبر React Hook Form ومخططات Zod باللغة العربية" },
      { label: "3. Server State", detail: "إدارة الكاش والطفرات وإبطال الاستعلامات عبر TanStack Query" },
      { label: "4. Safe Mutations", detail: "نوافذ تأكيد تدميرية مشروطة وتحديثات موضعية آمنة" },
      { label: "5. Resiliency & Tests", detail: "هياكل عظمية Skeleton، وتنبيهات أخطاء، واختبارات تكامل بـ RTL" }
    ]
  }
};

