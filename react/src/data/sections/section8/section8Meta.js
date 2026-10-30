// src/data/sections/section8/section8Meta.js
// بيانات القسم 8: الملخص، جدول المرجع السريع، والمشروع المصغر

export const SECTION_8_META = {
  id: "section-8",
  title: "القسم 8: النماذج والتعامل مع المستخدم",
  englishTitle: "Form Architecture, Validation & Modern React 19 Actions",
  description: "الدليل الشامل لاحتراف استمارات وبيانات المستخدم في React: من المكونات المضبوطة (Controlled Components) والتحقق النظيف من الحقول وكلمات المرور، إلى الأداء الخارق مع React Hook Form ومخططات Zod، وصولاً إلى ثورة React 19 في Form Actions و useActionState و useFormStatus و useOptimistic.",
  summary: [
    "المكونات المضبوطة (Controlled Components): في React، تصبح حالة المكون (State) هي المصدر الوحيد للحقيقة (Single Source of Truth)؛ وتُربط الحقول بـ value={state} وتُحدث عبر حدث onChange.",
    "فروق أنواع الحقول: حقول النصوص و textarea و select تعتمد على e.target.value، بينما مربعات الاختيار checkbox تعتمد حصراً على خاصية checked={state} و e.target.checked.",
    "كائن الحالة الموحد (Unified Object State): المعمارية الأفضل لإدارة النماذج متعددة الحقول بـ useState؛ حيث يخدم معالج موحد يعتمد على [e.target.name] عشرات الحقول بسطر واحد.",
    "التوقيت المثالي للتحقق (Reward Early, Punish Late): لا تقاطع المستخدم باللون الأحمر أثناء كتابته الأولى؛ انتظر حتى يغادر الحقل (onBlur)، ثم أزل الخطأ لحظياً أثناء التصحيح (onChange).",
    "فحص الحقول الصارم: استخدام دالة .trim() إلزامي مع الحقول المطلوبة لمنع المسافات الفارغة، وتطبيق التعبيرات النمطية (Regex) القياسية مع البريد الإلكتروني وسياسات كلمات المرور.",
    "أداء React Hook Form الخارق: تعتمد المكتبة على المكونات غير المضبوطة والمراجع (Refs)، مما يعزل إدخال النصوص ويمنع إعادة تصيير شجرة المكونات (Zero Re-renders) في النماذج الضخمة.",
    "مخططات Zod الصارمة: كتابة مخططات بيانات مركزية (Schemas) مع إمكانية استخراج أنواع TypeScript تلقائياً (z.infer) والربط مع useForm عبر zodResolver لتحقيق أقصى درجات الأمان النوعي.",
    "ثورة React 19 Form Actions: تمرير دوال async لخاصية action يلغي الحاجة لـ e.preventDefault()، ويتيح استخدام useActionState لإدارة الحالة والتحميل، و useFormStatus لقراءة حالة الإرسال في المكونات الفرعية دون Props Drilling، و useOptimistic للتحديثات الفورية بسرعة 0ms."
  ],
  cheatSheet: [
    {
      concept: "حقل نصي مضبوط Controlled Input",
      syntax: "<input value={name} onChange={e => setName(e.target.value)} />",
      note: "حالة React هي المصدر الوحيد للقيمة؛ إلزامي توفير onChange لتفادي تجمد الحقل."
    },
    {
      concept: "مساحة نصوص مضبوطة Controlled Textarea",
      syntax: "<textarea value={bio} onChange={e => setBio(e.target.value)} />",
      note: "تستخدم خاصية value مثل input تماماً في React بدلاً من وضع أطفال بين الوسمين."
    },
    {
      concept: "قائمة منسدلة مضبوطة Controlled Select",
      syntax: "<select value={city} onChange={e => setCity(e.target.value)}>\n  <option value=\"RUH\">الرياض</option>\n</select>",
      note: "توضع خاصية value على وسم select الأب مباشرة وتتجاهل React خاصية selected على option."
    },
    {
      concept: "مربع اختيار مضبوط Controlled Checkbox",
      syntax: "<input type=\"checkbox\" checked={agreed} onChange={e => setAgreed(e.target.checked)} />",
      note: "خاصية checked للربط و e.target.checked للقراءة المنطقية (تجنب e.target.value التي تعيد 'on')."
    },
    {
      concept: "أزرار راديو حصرية Radio Group",
      syntax: "<input type=\"radio\" name=\"plan\" value=\"pro\" checked={plan === 'pro'} onChange={e => setPlan(e.target.value)} />",
      note: "تشترك أزرار المجموعة في نفس خاصية name، ويتم التحديد بمقارنة checked={state === value}."
    },
    {
      concept: "المعالج الموحد للحقول Dynamic Name Handler",
      syntax: "const handleChange = e => {\n  const { name, value, type, checked } = e.target;\n  setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));\n};",
      note: "يخدم عشرات الحقول بسطر واحد باعتماد الصيغة المحسوبة [name]: value مع الحفاظ على البقية بـ ...prev."
    },
    {
      concept: "تصفير النموذج البرمجي Clean Form Reset",
      syntax: "const handleReset = () => setForm(INITIAL_STATE);",
      note: "إعادة تعيين كائن الحالة إلى الثابت الأولي INITIAL_STATE بدلاً من استخدام form.reset() المضللة."
    },
    {
      concept: "منع إعادة تحميل الصفحة e.preventDefault",
      syntax: "function handleSubmit(e) {\n  e.preventDefault();\n  // كود الإرسال\n}",
      note: "إلزامي في أول سطر في معالجات onSubmit في تطبيقات الصفحة الواحدة SPA."
    },
    {
      concept: "فحص الحقول المطلوبة Required Trim Check",
      syntax: "if (!value || !value.trim()) {\n  errors.name = 'هذا الحقل إلزامي';\n}",
      note: "دالة trim() تحذف المسافات وتمنع المستخدم من تجاوز الحقل بالضغط على شريط المسافة فقط."
    },
    {
      concept: "التحقق عند المغادرة On-Blur Validation",
      syntax: "<input onBlur={() => setTouched(prev => ({ ...prev, email: true }))} />",
      note: "يضمن عدم إزعاج المستخدم باللون الأحمر أثناء كتابته الأولى وعرض الخطأ فقط بعد المغادرة."
    },
    {
      concept: "إمكانية الوصول والربط ARIA Describedby",
      syntax: "<input id=\"em\" aria-invalid={!!err} aria-describedby=\"em-err\" />\n{err && <span id=\"em-err\" role=\"alert\">{err}</span>}",
      note: "يربط الحقل بمعرف رسالة الخطأ لتنطقها قارئات الشاشة للمكفوفين فوراً."
    },
    {
      concept: "تسجيل الحقل بـ React Hook Form",
      syntax: "<input {...register('username', { required: 'الاسم مطلوب' })} />",
      note: "يحقن name و ref و onChange و onBlur تلقائياً دون إعادة تصيير المكون أثناء الكتابة."
    },
    {
      concept: "حارس الإرسال handleSubmit",
      syntax: "<form onSubmit={handleSubmit(onValid, onInvalid)}>",
      note: "يفحص كافة الحقول تلقائياً، ينقل التركيز لأول خطأ، ويستدعي onValid فقط عند سلامة البيانات 100%."
    },
    {
      concept: "التحكم بالمكونات الخارجية Controller",
      syntax: "<Controller name=\"tag\" control={control} render={({ field }) => <CustomSelect {...field} />} />",
      note: "جسر وسيط لربط مكتبات الواجهات مثل Radix و shadcn/ui و DatePicker بمحرك useForm."
    },
    {
      concept: "تعريف مخطط Zod Schema",
      syntax: "const schema = z.object({\n  email: z.string().email(),\n  age: z.coerce.number().min(18)\n});",
      note: "تعريف تصريحي مركزي لقواعد البيانات مع دعم z.coerce لتحويل النصوص إلى أرقام تلقائياً."
    },
    {
      concept: "ربط Zod بـ RHF via zodResolver",
      syntax: "const { register } = useForm({ resolver: zodResolver(schema) });",
      note: "يحول أخطاء مخطط Zod إلى formState.errors ويمنحك تدقيقاً نوعياً صارماً Type-Safe."
    },
    {
      concept: "الحقول الديناميكية useFieldArray",
      syntax: "const { fields, append, remove } = useFieldArray({ control, name: 'items' });",
      note: "إدارة المصفوفات المتغيرة ديناميكياً مع مفاتيح field.id المستقرة لمنع أخطاء الحذف."
    },
    {
      concept: "إجراءات النماذج React 19 Form Action",
      syntax: "<form action={async (formData) => {\n  const email = formData.get('email');\n}}>",
      note: "تمرير دالة async مباشرة لخاصية action مع إيقاف preventDefault التلقائي وتمرير FormData."
    },
    {
      concept: "إدارة الحالة الحديثة useActionState",
      syntax: "const [state, formAction, isPending] = useActionState(myAction, initialData);",
      note: "يدير نتيجة الإجراء state ومؤشر التحميل isPending ودالة الإجراء formAction في سطر واحد."
    },
    {
      concept: "زر الإرسال المستقل useFormStatus",
      syntax: "function SubmitBtn() {\n  const { pending } = useFormStatus();\n  return <button disabled={pending}>إرسال</button>;\n}",
      note: "يقرأ حالة إرسال النموذج الأب هوائياً دون الحاجة لتمرير Props داخل المكونات الفرعية."
    },
    {
      concept: "التحديث المتفائل useOptimistic",
      syntax: "const [optList, addOpt] = useOptimistic(list, (cur, item) => [...cur, item]);",
      note: "يعرض التعديل في الشاشة فور نقرة المستخدم (0ms Delay) مع التراجع التلقائي إن فشل الخادم."
    }
  ],
  miniProject: {
    id: "mini-project-section-8",
    title: "منصة FormForge Studio: استوديو النماذج المتكامل وهندسة التحقق",
    englishTitle: "FormForge Studio: Full-Stack Form Architecture & Validation Suite",
    description: "استوديو هندسي تفاعلي متكامل يجمع كافة معايير القسم الثامن في لوحة واحدة فائقة الإبهار: محاكي المكونات المضبوطة مع معالج الحالة الموحد وتصفير الحقول، محرك التحقق المتوازن (On-Blur / Regex / مقياس قوة كلمة المرور التفاعلي)، معالج التسجيل متعدد الخطوات (Multi-Step Wizard)، محاكي أداء React Hook Form و Zod، وتطبيق معايير React 19 في Form Actions واستخدام useOptimistic للتحديثات الفورية.",
    code: `import React, { useState, useOptimistic, useActionState } from "react";

// ==========================================
// 1. ثوابت وبيانات نموذجية للتحقق
// ==========================================
const EMAIL_REGEX = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

const INITIAL_FORM = {
  fullName: "",
  email: "",
  password: "",
  accountType: "developer",
  newsletter: true,
  termsAgreed: false
};

// ==========================================
// 2. المكون الرئيسي: FormForge Studio
// ==========================================
export function FormForgeStudio() {
  // تبويبات أوضاع النموذج للاستعراض المعماري
  const [activeTab, setActiveTab] = useState("unified"); // unified | wizard | optimistic

  // ------------------------------------------
  // القسم الأول: المكونات المضبوطة وكائن الحالة الموحد
  // ------------------------------------------
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [touched, setTouched] = useState({});
  const [submissionLog, setSubmissionLog] = useState(null);

  // حساب الأخطاء بنقاء
  const errors = {};
  if (!formData.fullName.trim()) errors.fullName = "الاسم الكامل مطلوب";
  if (!formData.email.trim()) {
    errors.email = "البريد الإلكتروني مطلوب";
  } else if (!EMAIL_REGEX.test(formData.email.trim())) {
    errors.email = "صيغة البريد الإلكتروني غير صالحة";
  }
  if (!formData.password) {
    errors.password = "كلمة المرور مطلوبة";
  } else if (formData.password.length < 8) {
    errors.password = "يجب ألا تقل عن 8 أحرف";
  }

  // حساب قوة كلمة المرور
  const pwdRules = [
    { label: "8 أحرف على الأقل", ok: formData.password.length >= 8 },
    { label: "رقم واحد على الأقل", ok: /\\d/.test(formData.password) },
    { label: "حرف كبير واحد", ok: /[A-Z]/.test(formData.password) },
    { label: "رمز خاص (!@#$)", ok: /[!@#$%^&*]/.test(formData.password) }
  ];
  const pwdScore = pwdRules.filter((r) => r.ok).length;

  // المعالج الشامل الموحد
  const handleUniversalChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTouched({ fullName: true, email: true, password: true });
    if (Object.keys(errors).length === 0) {
      if (!formData.termsAgreed) {
        alert("يرجى الموافقة على الشروط أولاً!");
        return;
      }
      setSubmissionLog({
        time: new Date().toLocaleTimeString(),
        data: formData
      });
    }
  };

  const handleFormReset = () => {
    setFormData(INITIAL_FORM);
    setTouched({});
    setSubmissionLog(null);
  };

  // ------------------------------------------
  // القسم الثاني: معالج التسجيل متعدد الخطوات (Wizard)
  // ------------------------------------------
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardData, setWizardData] = useState({
    step1_title: "مهندس واجهات أول",
    step2_org: "مؤسسة الأفق السحابية",
    step3_plan: "pro"
  });

  // ------------------------------------------
  // القسم الثالث: التحديث المتفائل بـ useOptimistic
  // ------------------------------------------
  const [comments, setComments] = useState([
    { id: 1, author: "سارة", text: "معمارية Form Actions في React 19 مذهلة!", pending: false }
  ]);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (current, newText) => [
      ...current,
      { id: Date.now(), author: "أنت (الآن)", text: newText, pending: true }
    ]
  );

  async function handleOptimisticSubmit(formData) {
    const commentText = formData.get("commentInput");
    if (!commentText.trim()) return;

    // تحديث متفائل فوري بـ 0ms
    addOptimisticComment(commentText);

    // محاكاة تأخير السيرفر
    await new Promise((r) => setTimeout(r, 1400));

    // تثبيت في الحالة الدائمة
    setComments((prev) => [
      ...prev,
      { id: Date.now(), author: "أنت", text: commentText, pending: false }
    ]);
  }

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-3xl text-white max-w-4xl mx-auto space-y-6 shadow-2xl font-sans" dir="rtl">
      {/* الترويسة الرئيسية */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="p-2.5 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-2xl text-xl">
            📝
          </span>
          <div>
            <h3 className="text-lg font-black text-white">منصة FormForge Studio التفاعلية</h3>
            <p className="text-xs text-slate-400">
              استوديو النماذج المتكامل: Controlled State, Validation Timing, Multi-Step Wizard & Optimistic UI
            </p>
          </div>
        </div>

        {/* أزرار التبديل بين أوضاع الاستعراض المعمارية */}
        <div className="flex bg-slate-900 p-1 rounded-2xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab("unified")}
            className={\`px-3 py-1.5 rounded-xl font-bold transition-all \${
              activeTab === "unified"
                ? "bg-orange-600 text-white shadow-md shadow-orange-950"
                : "text-slate-400 hover:text-white"
            }\`}
          >
            المكونات المضبوطة
          </button>
          <button
            onClick={() => setActiveTab("wizard")}
            className={\`px-3 py-1.5 rounded-xl font-bold transition-all \${
              activeTab === "wizard"
                ? "bg-orange-600 text-white shadow-md shadow-orange-950"
                : "text-slate-400 hover:text-white"
            }\`}
          >
            متعدد الخطوات (Wizard)
          </button>
          <button
            onClick={() => setActiveTab("optimistic")}
            className={\`px-3 py-1.5 rounded-xl font-bold transition-all \${
              activeTab === "optimistic"
                ? "bg-orange-600 text-white shadow-md shadow-orange-950"
                : "text-slate-400 hover:text-white"
            }\`}
          >
            React 19 متفائل
          </button>
        </div>
      </div>

      {/* التبويب 1: المكونات المضبوطة وكائن الحالة الموحد */}
      {activeTab === "unified" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {/* استمارة الإدخال */}
          <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs">
            <div>
              <label className="text-slate-300 block mb-1 font-bold">
                الاسم الكامل: <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onBlur={() => handleBlur("fullName")}
                onChange={handleUniversalChange}
                placeholder="مثال: تركي الشمري"
                className={\`w-full px-3 py-2 bg-slate-900 border rounded-xl text-white focus:outline-none \${
                  touched.fullName && errors.fullName
                    ? "border-rose-500 bg-rose-950/20"
                    : "border-slate-800 focus:border-orange-500"
                }\`}
              />
              {touched.fullName && errors.fullName && (
                <p className="text-rose-400 text-[10px] mt-1 font-bold">✕ {errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-bold">
                البريد الإلكتروني: <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onBlur={() => handleBlur("email")}
                onChange={handleUniversalChange}
                placeholder="turki@domain.com"
                className={\`w-full px-3 py-2 bg-slate-900 border rounded-xl text-white focus:outline-none \${
                  touched.email && errors.email
                    ? "border-rose-500 bg-rose-950/20"
                    : "border-slate-800 focus:border-orange-500"
                }\`}
              />
              {touched.email && errors.email && (
                <p className="text-rose-400 text-[10px] mt-1 font-bold">✕ {errors.email}</p>
              )}
            </div>

            {/* كلمة المرور مع مؤشر القوة اللحظي */}
            <div>
              <label className="text-slate-300 block mb-1 font-bold">
                كلمة المرور: <span className="text-rose-400">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onBlur={() => handleBlur("password")}
                onChange={handleUniversalChange}
                placeholder="••••••••"
                className={\`w-full px-3 py-2 bg-slate-900 border rounded-xl text-white focus:outline-none \${
                  touched.password && errors.password
                    ? "border-rose-500 bg-rose-950/20"
                    : "border-slate-800 focus:border-orange-500"
                }\`}
              />
              {/* شريط القوة */}
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800 mt-2">
                <div
                  className={\`h-full transition-all duration-300 \${
                    pwdScore <= 1 ? "bg-rose-500" : pwdScore <= 3 ? "bg-amber-500" : "bg-emerald-500"
                  }\`}
                  style={{ width: \`\${(pwdScore / 4) * 100}%\` }}
                />
              </div>
              <div className="grid grid-cols-2 gap-1 mt-1.5 text-[10px]">
                {pwdRules.map((r, i) => (
                  <span key={i} className={r.ok ? "text-emerald-400 font-bold" : "text-slate-600"}>
                    {r.ok ? "✓" : "○"} {r.label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-bold">نوع الحساب البرمجي:</label>
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleUniversalChange}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-orange-500"
              >
                <option value="developer">مطور واجهات (Frontend Developer)</option>
                <option value="fullstack">مطور شامل (Full-Stack Engineer)</option>
                <option value="architect">مهندس معمارية نظم (Software Architect)</option>
              </select>
            </div>

            <div className="space-y-2 pt-1">
              <label className="flex items-center gap-2 p-2 bg-slate-900/60 rounded-xl border border-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleUniversalChange}
                  className="w-4 h-4 accent-orange-500 rounded"
                />
                <span>استلام النشرات التحديثية لـ React 19 أسبوعياً</span>
              </label>

              <label className="flex items-center gap-2 p-2 bg-slate-900/60 rounded-xl border border-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleUniversalChange}
                  className="w-4 h-4 accent-orange-500 rounded"
                />
                <span className="font-bold">أوافق على الشروط وسياسة البيانات</span>
              </label>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                className="flex-1 py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-orange-950/40"
              >
                إرسال النموذج (Submit) 🚀
              </button>
              <button
                type="button"
                onClick={handleFormReset}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold transition-all"
              >
                تصفير ومسح
              </button>
            </div>
          </form>

          {/* لوحة مراقبة الذاكرة الصافية في الوقت الحقيقي */}
          <div className="space-y-4">
            <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-2 text-xs">
              <div className="flex justify-between items-center pb-1 border-b border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-mono">الحالة الموحدة المباشرة (Single Source of Truth):</span>
                <span className="text-[10px] font-mono text-orange-400 bg-orange-950 px-2 py-0.5 rounded">
                  {Object.keys(errors).length === 0 ? "VALID ✓" : "INVALID ✕"}
                </span>
              </div>
              <pre className="font-mono text-[11px] text-orange-300/90 overflow-x-auto p-2 bg-slate-950 rounded-xl border border-slate-800">
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>

            {submissionLog && (
              <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl space-y-2 text-xs animate-fadeIn">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-emerald-400">✓ تم الإرسال بنجاح للخدمة!</span>
                  <span className="text-[10px] font-mono text-slate-400">{submissionLog.time}</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  تم استلام بيانات العضو: <strong className="text-white">{submissionLog.data.fullName}</strong> بنوع حساب: {submissionLog.data.accountType}.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* التبويب 2: معالج التسجيل متعدد الخطوات (Wizard) */}
      {activeTab === "wizard" && (
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-lg mx-auto space-y-5 animate-fadeIn">
          {/* مؤشر الخطوات */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5 font-bold">
              <span className="text-orange-400">الخطوة {wizardStep} من 3: {
                wizardStep === 1 ? "المسمى المهني" : wizardStep === 2 ? "بيانات المنظمة" : "الباقة والاشتراك"
              }</span>
              <span className="text-slate-400 font-mono">{Math.round((wizardStep / 3) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-orange-600 transition-all duration-300"
                style={{ width: \`\${(wizardStep / 3) * 100}%\` }}
              />
            </div>
          </div>

          {/* محتوى كل خطوة */}
          <div className="space-y-3 text-xs">
            {wizardStep === 1 && (
              <div className="space-y-2 animate-fadeIn">
                <label className="text-slate-300 block font-bold">المسمى الوظيفي الرئيسي:</label>
                <input
                  type="text"
                  value={wizardData.step1_title}
                  onChange={(e) => setWizardData({ ...wizardData, step1_title: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-orange-500"
                />
              </div>
            )}

            {wizardStep === 2 && (
              <div className="space-y-2 animate-fadeIn">
                <label className="text-slate-300 block font-bold">اسم الشركة أو المؤسسة:</label>
                <input
                  type="text"
                  value={wizardData.step2_org}
                  onChange={(e) => setWizardData({ ...wizardData, step2_org: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-orange-500"
                />
              </div>
            )}

            {wizardStep === 3 && (
              <div className="p-4 bg-slate-950 rounded-2xl border border-orange-500/30 space-y-2 animate-fadeIn">
                <h5 className="font-bold text-orange-400">ملخص ومراجعة بيانات الاشتراك:</h5>
                <p className="text-slate-300">• المسمى: <strong className="text-white">{wizardData.step1_title}</strong></p>
                <p className="text-slate-300">• المنظمة: <strong className="text-white">{wizardData.step2_org}</strong></p>
                <p className="text-slate-300">• الباقة: <span className="font-mono text-emerald-400 font-bold">المحترفين (Pro)</span></p>
              </div>
            )}

            {/* أزرار التنقل */}
            <div className="flex gap-2 pt-3">
              {wizardStep > 1 && (
                <button
                  type="button"
                  onClick={() => setWizardStep((s) => s - 1)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold transition-all"
                >
                  السابق
                </button>
              )}

              {wizardStep < 3 ? (
                <button
                  type="button"
                  onClick={() => setWizardStep((s) => s + 1)}
                  className="flex-1 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold transition-all shadow-md shadow-orange-950"
                >
                  التالي ➔
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => alert("تم اعتماد التسجيل بنجاح في الخطوة 3!")}
                  className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-md shadow-emerald-950"
                >
                  اعتماد التسجيل النهائي ✓
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* التبويب 3: React 19 useOptimistic */}
      {activeTab === "optimistic" && (
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-lg mx-auto space-y-4 animate-fadeIn">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <div>
              <h5 className="font-bold text-sm text-orange-400">التحديثات المتفائلة (Zero Latency UI)</h5>
              <p className="text-[11px] text-slate-400">تظهر الرسالة فوراً في الشاشة قبل أن يرد السيرفر أصلاً</p>
            </div>
            <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold">
              React 19
            </span>
          </div>

          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {optimisticComments.map((c) => (
              <div
                key={c.id}
                className={\`p-3 rounded-2xl border text-xs flex justify-between items-center \${
                  c.pending
                    ? "bg-amber-950/20 border-dashed border-amber-500/50 text-amber-300"
                    : "bg-slate-950 border-slate-800 text-slate-200"
                }\`}
              >
                <div>
                  <span className="font-bold block text-white text-[11px] mb-0.5">{c.author}:</span>
                  <span>{c.text}</span>
                </div>
                {c.pending && (
                  <span className="text-[9px] font-mono text-amber-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    <span>متفائل (جارٍ الحفظ)</span>
                  </span>
                )}
              </div>
            ))}
          </div>

          <form action={handleOptimisticSubmit} className="flex gap-2 pt-2">
            <input
              type="text"
              name="commentInput"
              required
              placeholder="اكتب تعليقاً وشاهد ظهوره الفوري المباشر..."
              className="flex-1 px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-orange-950"
            >
              نشر فوري 💬
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
`,
    infographic: {
      title: "معمارية منصة FormForge Studio الشاملة",
      description: "التنسيق الهيكلي لإدارة النماذج والتحقق وتوقيت الأخطاء والتحديثات المتفائلة في React 19.",
      sections: [
        {
          heading: "1. طبقة المكونات المضبوطة (Controlled Layer)",
          bullets: [
            "كائن الحالة الموحد: إدارة formData كاملة بمعالج واحد يعتمد على [e.target.name].",
            "التصفير النظيف: إعادة التعيين للثابت الأولي INITIAL_FORM.",
            "مؤشر قوة كلمة المرور: فحص فوري متعدد المعايير وشريط تقدم تفاعلي."
          ]
        },
        {
          heading: "2. طبقة التحقق وتجربة المستخدم (Validation & UX)",
          bullets: [
            "نمط On-Blur: حماية المستخدم من الإزعاج وعدم إظهار الأخطاء إلا بعد مغادرة الحقل.",
            "المعالجات متعددة الخطوات (Wizard): تقسيم الاستمارة الطويلة لتقليل الإرهاق الذهني."
          ]
        },
        {
          heading: "3. طبقة الحداثة والتزامن (Modern React 19 Layer)",
          bullets: [
            "Form Actions: تمرير دوال async مباشرة لـ action={fn} مع إلغاء preventDefault التلقائي.",
            "useOptimistic: إظهار التعديلات في الشاشة بسرعة صفر ثانية مع أمان التراجع التلقائي."
          ]
        }
      ]
    }
  },
  infographic: {
    title: "خارطة النماذج والتعامل مع المستخدم الشاملة",
    description: "الدليل المرجعي الكامل للنماذج في React من الصفر إلى احتراف React 19 و Zod.",
    sections: [
      {
        heading: "1. أساسيات النماذج المضبوطة (Form Basics)",
        bullets: [
          "Controlled vs Uncontrolled: الفرق الجوهري بين إدارة State واستخدام المراجع Refs.",
          "كافة الحقول: input, textarea, select, checkbox, radio والقواعد الصارمة لكل نوع.",
          "كائن الحالة الموحد: كتابة معالج موحد يعتمد على [name]: value لتسريع التطوير."
        ]
      },
      {
        heading: "2. التحقق وسهولة الوصول (Validation & a11y)",
        bullets: [
          "توقيت الفحص: Punish Late on Blur, Reward Early on Change.",
          "أمان الحقول: تنظيف المسافات بـ .trim() وتدقيق البريد بـ Regex.",
          "معايير a11y: ربط الوسوم بـ htmlFor و aria-describedby لقارئات الشاشة."
        ]
      },
      {
        heading: "3. المكتبات والأنظمة الحديثة (Libraries & React 19)",
        bullets: [
          "React Hook Form: أداء 60fps خارق دون إعادة تصيير في النماذج المؤسسية.",
          "Zod Schema: تعريف مخططات موحدة ومطابقة للـ TypeScript.",
          "React 19 Actions: Form Actions, useActionState, useFormStatus, useOptimistic."
        ]
      }
    ]
  }
};
