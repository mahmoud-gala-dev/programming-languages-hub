// src/data/sections/section8/topic2.js
// الموضوع 2: التحقق من البيانات في النماذج (Form Validation, Security, Error States & Accessibility)

export const SECTION_8_TOPIC_2 = {
  id: "8.2",
  title: "التحقق من البيانات",
  englishTerm: "Form Validation & Error Handling",
  description: "الدفاع الهندسي الأول لسلامة بيانات التطبيق وتجربة المستخدم: فحص الحقول الإلزامية، تدقيق صيغ البريد وكلمات المرور، التمييز بين الفحص الفوري (On-Blur / Realtime) وفحص الإرسال (On-Submit)، التعامل مع أخطاء الخادم غير المتزامنة، وتطبيق معايير سهولة الوصول WCAG / ARIA.",
  subtopics: [
    {
      id: "8.2.a",
      title: "مفهوم Form Validation",
      englishTerm: "Understanding Form Validation Architecture",
      description: "المفهوم الهندسي للتحقق من صحة النماذج (Form Validation). هو عملية التأكد من أن البيانات التي يدخلها المستخدم مطابقة تماماً للقواعد والشروط المطلوبة (مثل: البريد مكتوب بصيغة صحيحة، كلمة المرور قوية، الحقول الإلزامية غير فارغة) قبل إرسالها إلى الخادم. ينقسم التحقق إلى: تحقق من جانب العميل (Client-side Validation) لسرعة استجابة الواجهة وإرشاد المستخدم، وتحقق من جانب الخادم (Server-side Validation) للأمان الصارم ومنع الاختراق.",
      realLifeAnalogy: "مثل 'موظف فحص الجوازات في المطار'؛ قبل أن تصعد إلى الطائرة (الخادم)، يفحص الموظف تذكرتك وتأشيرتك عند بوابة الدخول. إذا نسيت التذكرة، يرشدك فوراً عند البوابة قبل أن تضيع وقتك في صعود الطائرة.",
      whyItMatters: "التحقق من البيانات يمنع وصول بيانات تالفة أو ناقصة لقاعدة البيانات، يوفر على الخادم ملايين الطلبات الخاطئة، ويحمي التطبيق من هجمات الحقن (SQL Injection / XSS). كما يوفر تجربة مستخدم سلسة ترشده لتصحيح أخطائه فوراً.",
      syntax: "function validate(values) {\n  const errors = {};\n  if (!values.username) errors.username = 'اسم المستخدم مطلوب';\n  return errors;\n}",
      simpleExample: `// دالة تحقق نقية تفحص بيانات النموذج
function validateLoginForm(formData) {
  // كائن لتخزين رسائل الأخطاء
  const errors = {};

  // فحص حقل اسم المستخدم
  if (!formData.username.trim()) {
    errors.username = "يرجى إدخال اسم المستخدم";
  }

  // فحص حقل كلمة المرور
  if (formData.password.length < 6) {
    errors.password = "كلمة المرور يجب ألا تقل عن 6 أحرف";
  }

  // إرجاع كائن الأخطاء (فارغ يعني أن النموذج سليم 100%)
  return errors;
}

// تجربة فحص مدخلات مستخدم
const testInput = { username: "", password: "123" };
const validationResult = validateLoginForm(testInput);
console.log("نتائج الفحص:", validationResult);
`,
      advancedExample: `// محاكي محرك الفحص الهندسي والتحقق متوازي الأوجه
import React, { useState } from "react";

export function ValidationEngineDemo() {
  const [data, setData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const runValidation = () => {
    const errs = {};
    if (!data.name.trim()) errs.name = "الاسم الثلاثي إلزامي";
    if (!data.email.includes("@")) errs.email = "صيغة البريد الإلكتروني غير صالحة";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleTestSubmit = (e) => {
    e.preventDefault();
    const isValid = runValidation();
    if (isValid) {
      alert("البيانات سليمة ومطابقة لكافة القواعد! ✓");
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">محرك التحقق (Validation Engine)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Pure Logic
        </span>
      </div>

      <form onSubmit={handleTestSubmit} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">الاسم الكامل:</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className={\`w-full px-3 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              errors.name ? "border-rose-500" : "border-slate-800 focus:border-indigo-500"
            }\`}
          />
          {errors.name && <p className="text-rose-400 text-[10px] mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="text-slate-300 block mb-1">البريد الإلكتروني:</label>
          <input
            type="text"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className={\`w-full px-3 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              errors.email ? "border-rose-500" : "border-slate-800 focus:border-indigo-500"
            }\`}
          />
          {errors.email && <p className="text-rose-400 text-[10px] mt-1">{errors.email}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30"
        >
          فحص وإرسال البيانات 🔍
        </button>
      </form>
    </div>
  );
}
`,
      outputExplanation: "تقوم دالة runValidation بفحص الحقول بنقاء، فإذا وجدت أخطاء تخزنها في كائن errors؛ إذا كان كائن الأخطاء فارغاً Object.keys(errs).length === 0 فهذا يعني أن الاستمارة صالحة للإرسال.",
      commonMistakes: [
        {
          mistake: "الاعتماد فقط على التحقق في المتصفح وإهمال التحقق في الخادم (Backend).",
          fix: "قم بالتحقق دائماً في الواجهة الأمامية لتحسين تجربة المستخدم وفي الخادم للأمان المطلق.",
          reason: "يمكن لأي مستخدم تجاوز قيود المتصفح أو إرسال طلبات برمجية مباشرة عبر cURL أو Postman."
        }
      ],
      bestPractices: [
        "افصل منطق الفحص (Validation Logic) في دالة نقية ومستقلة خارج المكون لتسهيل اختبارها.",
        "استخدم كائناً للأخطاء مثل { fieldName: 'error message' } لسهولة ربطه بحقول الواجهة."
      ],
      infographicCard: {
        title: "هرمية التحقق من البيانات Form Validation",
        points: [
          "تحقق الواجهة (Client-side): لتحسين سرعة التغذية الراجعة وتجربة المستخدم.",
          "تحقق الخادم (Server-side): خط الدفاع الإلزامي لأمان وسلامة قاعدة البيانات.",
          "كائن الأخطاء النقي: مفتاح لكل حقل ورسالة واضحة لتوجيه المستخدم."
        ]
      }
    },
    {
      id: "8.2.b",
      title: "التحقق من الحقول المطلوبة",
      englishTerm: "Required Fields Validation",
      description: "آليات فحص الحقول الإلزامية (Required Fields) والتأكد من أنها تحتوي على نصوص حقيقية وليس مجرد مسافات بيضاء فارغة (Whitespace). يتم ذلك باستخدام الدالة المدمجة .trim() لحذف المسافات من البداية والنهاية والتأكد من طول النص الفعلي.",
      realLifeAnalogy: "مثل صندوق الشحن البريدي؛ إذا وضع العميل في الصندوق كرات ورقية فارغة دون أي سلعة حقيقية، يرفض موظف الاستلام تسجيل الشحنة لأنها فارغة في جوهرها رغم أنها تبدو ممتلئة.",
      whyItMatters: "إذا اكتفيت بفحص if (text !== '')، يمكن للمستخدم الضغط على شريط المسافة (Spacebar) 5 مرات وإرسال النموذج بنص فارغ تماماً، مما يلوث قاعدة البيانات بسجلات وهمية.",
      syntax: "if (!value || value.trim().length === 0) {\n  errors.name = 'هذا الحقل إلزامي لا يمكن تركه فارغاً';\n}",
      simpleExample: `// فحص الحقول المطلوبة والتخلص من المسافات الوهمية
function isFieldBlank(inputValue) {
  // فحص القيمة الخالية أو التي تحتوي على مسافات فقط
  if (!inputValue || inputValue.trim() === "") {
    return true; // الحقل فارغ ومرفوض
  }
  return false; // الحقل يحتوي على نص حقيقي مقبول
}

console.log("نص عادي:", isFieldBlank("أحمد"));      // false (مقبول)
console.log("مسافات فقط:", isFieldBlank("   "));     // true (فارغ ومرفوض!)
console.log("قيمة غير معرفة:", isFieldBlank(null));  // true (مرفوض!)
`,
      advancedExample: `// نموذج عنوان الشحن الذكي مع تمييز الحقول الفارغة بنبضات ملونة
import React, { useState } from "react";

export function ShippingAddressValidator() {
  const [fields, setFields] = useState({ street: "", postalCode: "" });
  const [touched, setTouched] = useState({});

  // فحص الحقول الفارغة بعد تنظيف المسافات
  const isStreetMissing = touched.street && !fields.street.trim();
  const isPostalMissing = touched.postalCode && !fields.postalCode.trim();

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">فحص الحقول المطلوبة (.trim())</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Required Defense
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">
            اسم الشارع والحي: <span className="text-rose-400 font-bold">*</span>
          </label>
          <input
            type="text"
            value={fields.street}
            onBlur={() => setTouched((prev) => ({ ...prev, street: true }))}
            onChange={(e) => setFields({ ...fields, street: e.target.value })}
            placeholder="مثال: طريق الملك فهد..."
            className={\`w-full px-3 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              isStreetMissing ? "border-rose-500 bg-rose-950/20" : "border-slate-800 focus:border-indigo-500"
            }\`}
          />
          {isStreetMissing && (
            <p className="text-rose-400 text-[10px] mt-1">⚠ حقل الشارع إلزامي ولا يمكن ملؤه بمسافات فارغة.</p>
          )}
        </div>

        <div>
          <label className="text-slate-300 block mb-1">
            الرمز البريدي: <span className="text-rose-400 font-bold">*</span>
          </label>
          <input
            type="text"
            value={fields.postalCode}
            onBlur={() => setTouched((prev) => ({ ...prev, postalCode: true }))}
            onChange={(e) => setFields({ ...fields, postalCode: e.target.value })}
            placeholder="مثال: 12345"
            className={\`w-full px-3 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              isPostalMissing ? "border-rose-500 bg-rose-950/20" : "border-slate-800 focus:border-indigo-500"
            }\`}
          />
          {isPostalMissing && (
            <p className="text-rose-400 text-[10px] mt-1">⚠ الرمز البريدي إلزامي لاستكمال الشحن.</p>
          )}
        </div>
      </div>
    </div>
  );
}
`,
      outputExplanation: "استخدام .trim() يضمن كشف الحيل البرمجية والمسافات الخادعة، كما أن استخدام حالة touched يمنع إزعاج المستخدم بظهور رسائل الخطأ الحمراء قبل أن يبدأ في كتابة الحقل أصلاً.",
      commonMistakes: [
        {
          mistake: "فحص الحقل بـ if (!val) دون استخدام trim(): يسمح بمرور النصوص المكونة من مسافات فقط.",
          fix: "استخدم دائماً if (!val || !val.trim()).",
          reason: "المسافات البيضاء '   ' تُعامل كقيمة Truthy في لغة جافاسكريبت إن لم يتم قصها بـ trim()."
        }
      ],
      bestPractices: [
        "ضع علامة النجمة الحمراء (*) بجانب تسمية كل حقل إلزامي وفق أعراف الواجهات العالمية.",
        "نظف البيانات المكتوبة بـ .trim() قبل حفظها وإرسالها للخادم لتوفير مساحة التخزين."
      ],
      infographicCard: {
        title: "حماية الحقول الإلزامية Required Logic",
        points: [
          "فحص الوجود: التحقق من عدم كون القيمة null أو undefined.",
          "قص المسافات: استخدام .trim() لمنع الحقول المليئة بالمسافات الفارغة.",
          "حالة التفاعل Touched: إظهار الخطأ فقط بعد مغادرة المستخدم للحقل."
        ]
      }
    },
    {
      id: "8.2.c",
      title: "التحقق من البريد الإلكتروني",
      englishTerm: "Email Format Validation (Regex & Standard Patterns)",
      description: "منهجية تدقيق صحة عناوين البريد الإلكتروني باستخدام التعبيرات النمطية (Regular Expressions / Regex). تضمن هذه العملية أن البريد يحتوي على المعايير العالمية (اسم مستخدم، علامة @، اسم نطاق، وامتداد نطاق شرعي مثل .com أو .org) لمنع الإرسال لعناوين وهمية.",
      realLifeAnalogy: "مثل 'عنوان المنزل في بطاقة الشحن'؛ يجب أن يحتوي على اسم المدينة والشارع ورقم البناية. إذا كتبت 'أحمد فقط'، فلن تتمكن شاحنة التوصيل من معرفة وجهة الطرد.",
      whyItMatters: "البريد الإلكتروني هو وسيلة تفعيل الحسابات واستعادة كلمات المرور وإرسال الفواتير. السماح للمستخدم بتسجيل بريد خاطئ يمنعه من الدخول لحسابه ويفقدك الاتصال بالعميل.",
      syntax: "const EMAIL_REGEX = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconst isValidEmail = EMAIL_REGEX.test(email);",
      simpleExample: `// دالة فحص صيغة البريد الإلكتروني بنمط التعبير النمطي القياسي
function validateEmail(email) {
  // التعبير النمطي الرسمي لفحص بنية البريد الإلكتروني
  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  // اختبار مطابقة النص للتعبير النمطي
  return emailPattern.test(email.trim());
}

console.log("بريد صالح:", validateEmail("user@example.com")); // true
console.log("بدون علامة @:", validateEmail("userexample.com")); // false
console.log("بدون نطاق:", validateEmail("user@"));              // false
`,
      advancedExample: `// حقل بريد إلكتروني تفاعلي مع كشف النطاقات الشهيرة ومؤشر الصلاحية اللحظي
import React, { useState } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

export function SmartEmailChecker() {
  const [email, setEmail] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = EMAIL_REGEX.test(email.trim());
  const showError = isTouched && email.length > 0 && !isValid;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">فحص البريد الإلكتروني (Regex)</h4>
        <span className={\`text-[10px] font-mono px-2 py-0.5 rounded font-bold \${
          isValid ? "bg-emerald-950 text-emerald-400" : "bg-slate-800 text-slate-400"
        }\`}>
          {isValid ? "صيغة معتمدة ✓" : "غير مكتمل"}
        </span>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs text-slate-300 font-bold block">عنوان البريد الإلكتروني:</label>
        <div className="relative">
          <input
            type="email"
            value={email}
            onBlur={() => setIsTouched(true)}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="developer@company.com"
            className={\`w-full px-4 py-2.5 bg-slate-950 border rounded-xl text-xs text-white focus:outline-none \${
              showError ? "border-rose-500 bg-rose-950/20" :
              isValid ? "border-emerald-500/80 bg-emerald-950/10" : "border-slate-800 focus:border-indigo-500"
            }\`}
          />
          <span className="absolute left-3 top-2.5 text-xs">
            {isValid ? "✅" : showError ? "❌" : "✉️"}
          </span>
        </div>

        {showError && (
          <p className="text-rose-400 text-[10px] mt-1">
            صيغة البريد غير صحيحة، يرجى التأكد من كتابة @ واسم النطاق (مثال: name@domain.com).
          </p>
        )}
      </div>
    </div>
  );
}
`,
      outputExplanation: "باستخدام الدالة EMAIL_REGEX.test()، يتم فحص البريد في الوقت الفعلي مع كل حرف؛ ويتم تنبيه المستخدم بلون أحمر ناعم ورسالة إرشادية عند إدخال صيغة غير معتمدة.",
      commonMistakes: [
        {
          mistake: "استخدام تعبيرات نمطية بالغة التعقيد والطول ترفض عناوين بريد حقيقية وحديثة.",
          fix: "استخدم تعبيراً نمطياً قياسياً ومرناً مثل /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.",
          reason: "التعقيد المبالغ فيه قد يمنع عناوين نطاقات جديدة مثل name@ai أو نطاقات الدول الدولية."
        }
      ],
      bestPractices: [
        "حول البريد الإلكتروني دائماً إلى أحرف صغيرة (toLowerCase()) قبل إرساله لقاعدة البيانات.",
        "تذكر دائماً أن أفضل وسيلة للتحقق النهائي من البريد هي إرسال رابط تأكيد وتفعيل (Email Verification OTP)."
      ],
      infographicCard: {
        title: "معايير فحص البريد الإلكتروني",
        points: [
          "اسم المستخدم: حروف وأرقام ونقاط.",
          "رمز الربط الإلزامي: علامة @ المفردة.",
          "اسم النطاق والامتداد: domain.com مع فحص خلو المسافات."
        ]
      }
    },
    {
      id: "8.2.d",
      title: "التحقق من كلمة المرور",
      englishTerm: "Password Strength & Policy Validation",
      description: "بناء نظام متكامل لفحص قوة كلمة المرور (Password Strength Meter) وتطبيق السياسات الأمنية: التحقق من الحد الأدنى للطول (8 أحرف فأكثر)، احتواء الكلمة على حرف كبير (Uppercase)، حرف صغير (Lowercase)، رقم (Number)، ورمز خاص (@, #, $, !). يوفر للمستخدم مؤشراً بصرياً تفاعلياً يشجعه على اختيار كلمة سر يصعب تخمينها.",
      realLifeAnalogy: "مثل قفل الخزنة البنكية المتطور؛ لا يفتح بمجرد مفتاح معدني بسيط، بل يتطلب شفرة رقمية + بصمة إصبع + مفتاحاً خاصاً لضمان عدم تمكن اللصوص من فتحه بسهولة.",
      whyItMatters: "كلمات المرور الضعيفة (مثل 123456 أو password) هي السبب الأول لاختراق الحسابات في العالم. فرض سياسة أمان صارمة في واجهة التسجيل يحمي بيانات المستخدمين وسمعة تطبيقك الأمنية.",
      syntax: "const hasMinLength = password.length >= 8;\nconst hasNumber = /\\d/.test(password);\nconst hasSpecial = /[!@#$%^&*]/.test(password);",
      simpleExample: `// فحص قواعد قوة كلمة المرور
function checkPasswordRules(password) {
  return {
    minLength: password.length >= 8,
    hasNumber: /\\d/.test(password),
    hasUpper: /[A-Z]/.test(password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password)
  };
}

const status = checkPasswordRules("React@2026");
console.log("فحص كلمة المرور:", status);
// النتيجة: { minLength: true, hasNumber: true, hasUpper: true, hasSpecial: true }
`,
      advancedExample: `// مقياس قوة كلمة المرور التفاعلي (Password Strength Meter) وقائمة الشروط الحية
import React, { useState } from "react";

export function PasswordStrengthMeter() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // فحص الشروط الفردية
  const rules = [
    { label: "8 أحرف على الأقل", valid: password.length >= 8 },
    { label: "حرف كبير واحد على الأقل (A-Z)", valid: /[A-Z]/.test(password) },
    { label: "رقم واحد على الأقل (0-9)", valid: /\\d/.test(password) },
    { label: "رمز خاص واحد على الأقل (!@#$)", valid: /[!@#$%^&*]/.test(password) }
  ];

  // حساب النسبة المئوية للقوة
  const passedCount = rules.filter((r) => r.valid).length;
  const strengthPercent = (passedCount / rules.length) * 100;

  const strengthColor =
    passedCount <= 1 ? "bg-rose-500" :
    passedCount <= 3 ? "bg-amber-500" : "bg-emerald-500";

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مقياس قوة كلمة المرور 🔐</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          {passedCount} / {rules.length} معايير
        </span>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="اكتب كلمة مرور قوية..."
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute left-3 top-2.5 text-xs text-slate-400 hover:text-white"
          >
            {showPassword ? "إخفاء 🙈" : "إظهار 👁️"}
          </button>
        </div>

        {/* شريط التقدم المرئي لقوة كلمة المرور */}
        <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
          <div
            className={\`h-full transition-all duration-300 \${strengthColor}\`}
            style={{ width: \`\${strengthPercent}%\` }}
          />
        </div>
      </div>

      {/* قائمة الشروط التفاعلية */}
      <div className="space-y-1.5 pt-1">
        {rules.map((rule, idx) => (
          <div key={idx} className="flex items-center gap-2 text-[11px]">
            <span className={rule.valid ? "text-emerald-400 font-bold" : "text-slate-600"}>
              {rule.valid ? "✓" : "○"}
            </span>
            <span className={rule.valid ? "text-slate-200" : "text-slate-500"}>
              {rule.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
`,
      outputExplanation: "كلما كتب المستخدم حرفاً يطابق أحد الشروط، يضيء المؤشر الأخضر الخاص به فوراً ويزداد شريط القوة بنسبة 25% مع تغيير لونه من الأحمر للبرتقالي ثم للأخضر الكامل.",
      commonMistakes: [
        {
          mistake: "حظر رموز خاصة معينة أو منع المستخدم من لصق كلمة المرور (Disable Paste).",
          fix: "اسمح بجميع الرموز والمسافات وامنع تعطيل خاصية اللصق (Paste).",
          reason: "تعطيل اللصق يمنع المستخدمين من استخدام برامج إدارة كلمات المرور الموثوقة مثل 1Password أو Bitwarden."
        }
      ],
      bestPractices: [
        "وفر زراً لإظهار وإخفاء كلمة المرور لمساعدة المستخدم على مراجعة كتابته على الهواتف.",
        "أضف فحص تطابق كلمة المرور (Confirm Password) عند إنشاء حساب جديد لضمان عدم وجود أخطاء مطبعية."
      ],
      infographicCard: {
        title: "معايير الأمان الأربعة لكلمات المرور",
        points: [
          "الطول الكافي: 8 إلى 12 حرفاً على الأقل.",
          "تنوع الرموز: دمج الأحرف الكبيرة والأرقام والرموز الخاصة.",
          "المؤشر التفاعلي: تشجيع بصري للمستخدم بدلاً من مجرد الرفض الصارم."
        ]
      }
    },
    {
      id: "8.2.e",
      title: "إظهار رسائل الأخطاء",
      englishTerm: "Displaying Error Messages & Visual States",
      description: "التصميم والتنفيذ الهندسي لرسائل الأخطاء البصرية في واجهة المستخدم. يشمل ذلك إبراز الحقل بلون تحذيري (مثل إطار أحمر ووهج خفيف)، عرض رسالة خطأ واضحة ومحددة أسفل الحقل، استخدام أيقونات توضيحية، وربط الرسالة بالحقل عبر معايير سهولة الوصول ARIA aria-describedby.",
      realLifeAnalogy: "مثل لوحة قياس السيارة؛ عند وجود خلل في المحرك، لا تكتفي اللوحة بإصدار صوت خافت، بل تضيء أيقونة محددة باللون الأصفر التحذيري مع رسالة على الشاشة توضح المشكلة بالضبط.",
      whyItMatters: "رسائل الخطأ المبهمة مثل 'حدث خطأ' أو إظهار الخطأ في نافذة alert منبثقة يزعج المستخدم ويشعره بالإحباط. إظهار الخطأ بجوار الحقل المعني مباشرة يوفر وقته ويوجهه لحل المشكلة فوراً.",
      syntax: "<input className={errors.name ? 'border-rose-500' : 'border-slate-800'} />\n{errors.name && <span className=\"text-rose-400 text-xs\">{errors.name}</span>}",
      simpleExample: `// إظهار رسالة خطأ أسفل الحقل بشكل مشروط
import React from "react";

export function ErrorMessageSnippet({ label, error, ...inputProps }) {
  return (
    <div className="field-group">
      <label>{label}</label>
      {/* تلوين الإطار بالأحمر في حال وجود خطأ */}
      <input
        {...inputProps}
        style={{ borderColor: error ? "red" : "#ccc" }}
      />
      {/* إظهار رسالة الخطأ فقط إذا كانت موجودة */}
      {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
    </div>
  );
}
`,
      advancedExample: `// بطاقة حقل نموذج معمارية جاهزة للإنتاج مع تنبيهات ARIA وأيقونات حالة
import React from "react";

export function FormFieldWithError({ label, error, id, ...props }) {
  const hasError = Boolean(error);

  return (
    <div className="space-y-1.5 text-xs">
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="text-slate-300 font-bold block">
          {label}
        </label>
        {hasError && (
          <span className="text-[10px] text-rose-400 font-mono flex items-center gap-1">
            <span>⚠</span>
            <span>تنبيه خطأ</span>
          </span>
        )}
      </div>

      <div className="relative">
        <input
          id={id}
          aria-invalid={hasError}
          aria-describedby={hasError ? \`\${id}-error\` : undefined}
          {...props}
          className={\`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-white focus:outline-none transition-colors \${
            hasError
              ? "border-rose-500 bg-rose-950/20 focus:border-rose-400 focus:ring-1 focus:ring-rose-500/50"
              : "border-slate-800 focus:border-indigo-500"
          }\`}
        />
      </div>

      {hasError && (
        <p
          id={\`\${id}-error\`}
          role="alert"
          className="text-rose-400 text-[11px] flex items-center gap-1.5 pt-0.5 animate-fadeIn"
        >
          <span>✕</span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
`,
      outputExplanation: "من خلال ربط id الحقل بـ id رسالة الخطأ عبر aria-describedby، تتعرف قارئات الشاشة على الخطأ فوراً بمجرد أن ينتقل المستخدم الكفيف إلى الحقل المعني.",
      commonMistakes: [
        {
          mistake: "استخدام ألوان باهتة أو غير واضحة لرسائل الخطأ لا تحقق تباين الألوان الكافي.",
          fix: "استخدم درجات لونية واضحة ومتباينة مثل text-rose-400 على الخلفيات الداكنة.",
          reason: "معايير WCAG تتطلب تباين ألوان لا يقل عن 4.5:1 للنصوص الصغيرة ليتمكن ضعاف البصر من قراءتها."
        }
      ],
      bestPractices: [
        "استخدم صياغة إيجابية وإرشادية في رسائل الأخطاء (مثال: 'يجب أن تبدأ بـ 05' بدلاً من 'رقم خاطئ').",
        "احرص على إضافة دور التنبيه role='alert' لقارئات الشاشة لذوي الاحتياجات الخاصة."
      ],
      infographicCard: {
        title: "المعايير الخمسة لرسائل الأخطاء",
        points: [
          "الموقع: مباشرة أسفل الحقل المسبب للخطأ.",
          "الوضوح: شرح كيفية تصحيح الخطأ وليس فقط الإشارة إليه.",
          "إمكانية الوصول: ربط الحقل بـ aria-describedby و role='alert'."
        ]
      }
    },
    {
      id: "8.2.f",
      title: "الفرق بين Validation الفوري وعند الإرسال",
      englishTerm: "Real-time vs On-Submit vs On-Blur Validation",
      description: "الموازنة الهندسية وتحديد التوقيت المثالي لإجراء التحقق: التحقق اللحظي مع كل ضغطة مفتاح (onChange)، التحقق عند مغادرة الحقل وفقدان التركيز (onBlur)، والتحقق الشامل النهائي عند الضغط على زر الإرسال (onSubmit). أفضل الممارسات المتبعة عالمياً هي 'Reward Early, Punish Late': لا تظهر الخطأ أثناء كتابة المستخدم للمرة الأولى، بل انتظر حتى يغادر الحقل (onBlur)، ولكن بمجرد ظهور الخطأ، قم بإزالته فوراً في الوقت الحقيقي (onChange) بمجرد تصحيحه.",
      realLifeAnalogy: "مثل التحدث مع شخص؛ من قلة الذوق أن تقاطعه وتصحح خطأه في كل نصف كلمة ينطقها! انتظر حتى ينتهي من كلامه ويغادر (onBlur)، ثم نبهه للخطأ بلطف.",
      whyItMatters: "التحقق المفرط والفوري (Aggressive Validation) يظهر رسالة 'بريد غير صالح' بمجرد أن يكتب المستخدم أول حرف فقط 'a'، مما يثير انزعاج المستخدم واستفزازه ويدفعه لمغادرة الموقع.",
      syntax: "// نمط Reward Early, Punish Late:\nonBlur={() => setTouched(true)}\nonChange={(e) => {\n  setValue(e.target.value);\n  if (touched) validateField(e.target.value);\n}}",
      simpleExample: `// مثال يوضح الفرق بين onBlur و onChange في التحقق
import React, { useState } from "react";

export function TimingDemo() {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // إظهار الخطأ فقط بعد أن يلمس المستخدم الحقل ويغادره
  const hasError = isTouched && value.length < 5;

  return (
    <div>
      <input
        type="text"
        value={value}
        // مغادرة الحقل تعني انتهاء المستخدم من المحاولة الأولى
        onBlur={() => setIsTouched(true)}
        // تحديث القيمة بشكل طبيعي
        onChange={(e) => setValue(e.target.value)}
        placeholder="5 أحرف على الأقل..."
      />
      {hasError && <p style={{ color: "red" }}>النص قصير جداً!</p>}
    </div>
  );
}
`,
      advancedExample: `// مقارنة استراتيجيات التحقق الثلاث في واجهة تفاعلية واحدة
import React, { useState } from "react";

export function ValidationStrategyComparer() {
  // الاستراتيجية 1: الفوري الحاد
  const [valInstant, setValInstant] = useState("");
  // الاستراتيجية 2: عند الإرسال فقط
  const [valSubmit, setValSubmit] = useState("");
  const [submitError, setSubmitError] = useState("");
  // الاستراتيجية 3: المتوازنة (On Blur + Instant Clear)
  const [valSmart, setValSmart] = useState("");
  const [smartTouched, setSmartTouched] = useState(false);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-5">
      <div className="pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">استراتيجيات توقيت الفحص (Validation Timing)</h4>
        <p className="text-[11px] text-slate-400">مقارنة تجربة المستخدم بين الاستراتيجيات الثلاث</p>
      </div>

      {/* 1. الفحص الفوري الحاد (مزعج للمستخدم) */}
      <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1.5 text-xs">
        <span className="text-[10px] text-rose-400 font-bold block">1. الفحص الفوري الحاد (onChange Aggressive):</span>
        <input
          type="text"
          value={valInstant}
          onChange={(e) => setValInstant(e.target.value)}
          placeholder="اكتب اسمك..."
          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none"
        />
        {valInstant.length < 4 && valInstant.length > 0 && (
          <p className="text-rose-400 text-[10px]">⚠ مزعج: يصرخ عليك وأنت ما زلت في منتصف الكتابة!</p>
        )}
      </div>

      {/* 2. الفحص الذكي المتوازن (الأفضل عالمياً) */}
      <div className="p-3 bg-slate-950 rounded-2xl border border-emerald-500/40 space-y-1.5 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-emerald-400 font-bold">2. الفحص الذكي المتوازن (On-Blur / Touched):</span>
          <span className="text-[9px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded font-mono">Best Practice</span>
        </div>
        <input
          type="text"
          value={valSmart}
          onBlur={() => setSmartTouched(true)}
          onChange={(e) => setValSmart(e.target.value)}
          placeholder="اكتب اسمك واضغط بالخارج..."
          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none"
        />
        {smartTouched && valSmart.length < 4 && (
          <p className="text-emerald-400 text-[10px]">✓ ممتاز: ينتظر حتى تنهي كتابتك وتغادر الحقل أولاً.</p>
        )}
      </div>
    </div>
  );
}
`,
      outputExplanation: "نمط onBlur مع touched يمثل التوازن الذهبي: لا يقاطع المستخدم أثناء الكتابة لأول مرة، ويعرض الخطأ فقط إذا غادر الحقل وهو ناقص، ثم يزيل الخطأ فوراً أثناء التصحيح.",
      commonMistakes: [
        {
          mistake: "إظهار الأخطاء للمستخدم بمجرد تحميل الصفحة قبل أن يلمس أي حقل.",
          fix: "استخدم متغير boolean لكل حقل يُدعى touched وتأكد من touched[field] قبل عرض الخطأ.",
          reason: "رؤية نموذج مليء باللون الأحمر فور فتح الصفحة يعطي انطباعاً سلبياً منفراً للمستخدم."
        }
      ],
      bestPractices: [
        "طبق قاعدة: 'Punish on Blur, Reward on Change' (عاقب عند المغادرة، وكافئ فور التعديل).",
        "قم بفحص كافة الحقول دفعة واحدة عند الضغط على زر Submit ووضع touched على جميع الحقول."
      ],
      infographicCard: {
        title: "مصفوفة توقيت التحقق Timing Matrix",
        points: [
          "onChange: يزيل الخطأ فوراً بمجرد تصحيحه (Reward Early).",
          "onBlur: يظهر الخطأ للمرة الأولى بعد مغادرة الحقل (Punish Late).",
          "onSubmit: الفحص الشامل الإجباري لكافة حقول النموذج."
        ]
      }
    },
    {
      id: "8.2.g",
      title: "عرض حالة الإرسال والتحميل",
      englishTerm: "Submission Status & Pending Indicators",
      description: "المعايير الهندسية لتمثيل حالات النموذج المختلفة بوضوح: حالة الخمول (Idle)، حالة جاري الإرسال (Submitting/Loading)، حالة النجاح (Success)، وحالة الفشل (Error). يتضمن ذلك تعطيل كافة عناصر الإدخال والأزرار أثناء الإرسال، عرض مؤشرات تقدم بصرية (Spinners)، وتقديم تأكيد فوري يطمئن المستخدم على وصول طلبه.",
      realLifeAnalogy: "مثل ماكينة الصراف الآلي (ATM)؛ عندما تطلب سحب النقود، تعرض الشاشة رسالة 'جارٍ عد النقود يرجى الانتظار' مع إقفال فتحة البطاقة لمنعك من العبث بها حتى تخرج النقود بسلام.",
      whyItMatters: "المستخدم الذي لا يرى أي مؤشر تحميل يظن أن التطبيق قد تجمد أو أن ضغطته لم تسجل، فيكرر الضغط عدة مرات مما يسبب أخطاء فادحة وإرهاقاً للخوادم.",
      syntax: "const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'\n<button disabled={status === 'loading'}>{status === 'loading' ? 'جارٍ الإرسال...' : 'إرسال'}</button>",
      simpleExample: `// زر إرسال يعكس حالة التحميل بنقاء
import React, { useState } from "react";

export function LoadingButtonSnippet() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("تمت المعالجة بنجاح!");
    }, 2000);
  };

  return (
    <button disabled={isLoading} onClick={handleClick}>
      {isLoading ? "جارٍ التحميل والتأكيد..." : "تأكيد الطلب"}
    </button>
  );
}
`,
      advancedExample: `// استمارة دفع كاملة مع بطاقات حالات النجاح والتحميل التفاعلية
import React, { useState } from "react";

export function CheckoutFormWithStates() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">حالات النموذج (Submission States)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          {status.toUpperCase()}
        </span>
      </div>

      {status === "success" ? (
        <div className="p-6 bg-slate-950 border border-emerald-500/40 rounded-2xl text-center space-y-3 animate-fadeIn">
          <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center text-xl mx-auto">
            ✓
          </div>
          <h5 className="font-bold text-sm text-emerald-400">تم تأكيد الدفع بنجاح!</h5>
          <p className="text-xs text-slate-300">
            تم استلام طلبك رقم #98421 وتم إرسال تفاصيل الفاتورة إلى بريدك الإلكتروني.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs rounded-xl transition-all"
          >
            إجراء عملية جديدة
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="text-slate-300 block mb-1">الاسم على البطاقة:</label>
            <input
              type="text"
              required
              disabled={status === "submitting"}
              placeholder="Fahad Al-Otaibi"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/30"
          >
            {status === "submitting" ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>جارٍ المعالجة البنكية...</span>
              </>
            ) : (
              <span>دفع 150 ر.س الآن 💳</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
`,
      outputExplanation: "من خلال حالة status، ينتقل النموذج بين واجهات مختلفة: من نموذج إدخال نشط، إلى زر معطل بمؤشر دوران، ثم إلى شاشة نجاح متكاملة تؤكد اكتمال العملية بنجاح.",
      commonMistakes: [
        {
          mistake: "إبقاء زر الإرسال نشطاً أثناء إرسال البيانات مما يسمح بالضغط المتكرر.",
          fix: "ضع دائماً خاصية disabled={status === 'submitting'} على زر الإرسال.",
          reason: "النقر المتكرر أثناء بطء الشبكة يرسل طلبات متوازية للخادم قد تؤدي لتكرار الدفع أو التخزين."
        }
      ],
      bestPractices: [
        "قدم للمستخدم خياراً لإلغاء العملية إذا استغرق طلب الشبكة وقتاً أطول من المعتاد.",
        "استبدل النموذج بشاشة تأكيد أنيقة عند اكتمال الإرسال بدلاً من مجرد إظهار نافذة alert."
      ],
      infographicCard: {
        title: "حالات النموذج الأربعة State Lifecycle",
        points: [
          "IDLE: جاهز لاستقبال بيانات المستخدم.",
          "SUBMITTING: الحقول معطلة ومؤشر الدوران يعمل لمنع التكرار.",
          "SUCCESS / ERROR: شاشات تغذية راجعة واضحة للنتيجة."
        ]
      }
    },
    {
      id: "8.2.h",
      title: "التعامل مع أخطاء الخادم",
      englishTerm: "Handling Server-Side Validation Errors & HTTP Codes",
      description: "آليات استقبال وعرض أخطاء التحقق القادمة من السيرفر (Server-side Validation Errors / HTTP 422 Unprocessable Entity). قد يجتاز النموذج كافة فحوصات المتصفح بنجاح، لكن الخادم يكتشف تعارضاً (مثل: 'اسم المستخدم مسجل مسبقاً' أو 'رقم الهاتف مستخدم في حساب آخر'). يتم تحويل هذه الأخطاء من استجابة JSON إلى كائن أخطاء الواجهة لربطها بالحقول المعنية.",
      realLifeAnalogy: "مثل اختيار اسم نطاق لموقعك (Domain Name)؛ كل معايير الاسم صحيحة ولا تحتوي على مسافات، ولكن عندما يبحث الموظف في السجل المركزي، يكتشف أن شخصاً آخر اشترى هذا النطاق أمس.",
      whyItMatters: "الواجهة الأمامية لا تملك كل بيانات العالم؛ لا يمكنك معرفة هل البريد مسجل مسبقاً إلا بسؤال قاعدة البيانات. التعامل الاحترافي مع أخطاء الخادم يمنع الانهيار المفاجئ للتطبيق ويوجه المستخدم لتصحيح النزاع بسلاسة.",
      syntax: "try {\n  await api.post('/register', data);\n} catch (err) {\n  if (err.response?.status === 422) {\n    setErrors(err.response.data.fieldErrors);\n  } else {\n    setGeneralError('تعذر الاتصال بالخادم');\n  }\n}",
      simpleExample: `// استقبال أخطاء السيرفر وتعيينها في حالة الأخطاء
import React, { useState } from "react";

export function ServerErrorDemo() {
  const [email, setEmail] = useState("");
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    // محاكاة خطأ سيرفر 422: البريد مستخدم مسبقاً
    if (email === "test@exists.com") {
      setServerError("هذا البريد الإلكتروني مسجل مسبقاً في النظام!");
    } else {
      alert("تم التسجيل بنجاح!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {/* إظهار خطأ الخادم بجوار الحقل */}
      {serverError && <p style={{ color: "red" }}>{serverError}</p>}
      <button type="submit">تسجيل</button>
    </form>
  );
}
`,
      advancedExample: `// محاكي أخطاء السيرفر المتعددة مع التمييز بين أخطاء الحقول والأخطاء العامة
import React, { useState } from "react";

export function ServerErrorDispatcher() {
  const [formData, setFormData] = useState({ username: "admin", code: "999" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [globalError, setGlobalError] = useState("");

  const simulateServerCall = () => {
    setFieldErrors({});
    setGlobalError("");

    // محاكاة استجابة الخادم مع أخطاء الحقول المتضاربة
    setTimeout(() => {
      setFieldErrors({
        username: "اسم المستخدم 'admin' محجوز للنظام ولا يمكن اختياره.",
        code: "رمز الإحالة المدخل غير صالح أو منتهي الصلاحية."
      });
      setGlobalError("تعذر إكمال التسجيل: يرجى مراجعة الحقول المميزة باللون الأحمر.");
    }, 600);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">معالجة أخطاء السيرفر (HTTP 422)</h4>
        <span className="text-[10px] font-mono bg-rose-950 text-rose-300 px-2 py-0.5 rounded">
          Server Response
        </span>
      </div>

      {globalError && (
        <div className="p-3 bg-rose-950/60 border border-rose-500/40 rounded-xl text-rose-300 text-xs flex items-center gap-2">
          <span>⚠️</span>
          <span>{globalError}</span>
        </div>
      )}

      <div className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">اسم المستخدم المطلوب:</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className={\`w-full px-3 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              fieldErrors.username ? "border-rose-500" : "border-slate-800"
            }\`}
          />
          {fieldErrors.username && (
            <p className="text-rose-400 text-[10px] mt-1">✕ {fieldErrors.username}</p>
          )}
        </div>

        <div>
          <label className="text-slate-300 block mb-1">رمز الإحالة الترويجي:</label>
          <input
            type="text"
            value={formData.code}
            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
            className={\`w-full px-3 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              fieldErrors.code ? "border-rose-500" : "border-slate-800"
            }\`}
          />
          {fieldErrors.code && (
            <p className="text-rose-400 text-[10px] mt-1">✕ {fieldErrors.code}</p>
          )}
        </div>

        <button
          onClick={simulateServerCall}
          className="w-full py-2.5 bg-rose-600/90 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition-all"
        >
          محاكاة إرجاع أخطاء السيرفر (HTTP 422) ⚡
        </button>
      </div>
    </div>
  );
}
`,
      outputExplanation: "يتم تفكيك كائن أخطاء السيرفر القادم من استجابة JSON ودمجه في كائن fieldErrors ليظهر كل خطأ أسفل الحقل الذي تسبب فيه تماماً كالأخطاء المحلية.",
      commonMistakes: [
        {
          mistake: "مسح مدخلات المستخدم بالكامل عند حدوث خطأ في السيرفر.",
          fix: "احتفظ دائماً بما كتبه المستخدم في الحقول وأظهر الخطأ بجانبه فقط.",
          reason: "إجبار المستخدم على إعادة كتابة بيانات نموذج طويل من الصفر يدفعه لمغادرة الموقع فوراً."
        }
      ],
      bestPractices: [
        "فرق بين أخطاء الحقول المحددة (توضع تحت الحقل) والأخطاء العامة كالشبكة والـ 500 (توضع في بانر عام).",
        "امسح خطأ السيرفر الخاص بالحقل بمجرد أن يبدأ المستخدم في تعديل نصه لتجربة مستخدم مريحة."
      ],
      infographicCard: {
        title: "معالجة أخطاء السيرفر Server Errors",
        points: [
          "HTTP 422: أخطاء تحقق في البيانات (اسم مكرر، كود منتهي).",
          "HTTP 500 / Network: أخطاء خادم عامة تعرض في شريط تنبيهي علوي.",
          "الاحتفاظ بالمدخلات: عدم مسح نصوص المستخدم عند حدوث خطأ."
        ]
      }
    },
    {
      id: "8.2.i",
      title: "تحسين إمكانية الوصول للنماذج",
      englishTerm: "Form Accessibility (a11y & ARIA Standards)",
      description: "المعايير الهندسية لجعل نماذج React قابلة للوصول والاستخدام الكامل (a11y) من قِبل جميع المستخدمين، بما في ذلك ذوي الإعاقة ومستخدمي قارئات الشاشة (Screen Readers) ومستخدمي لوحة المفاتيح فقط. يشمل ذلك ربط الوسوم بـ htmlFor، واستخدام aria-invalid و aria-describedby، وتوفير مؤشرات تركيز بصرية واضحة (Focus Rings)، ودعم مفتاح Tab للتنقل المنطقي.",
      realLifeAnalogy: "مثل توفير منحدر للكراسي المتحركة إلى جانب الدرج الرخامي عند مدخل المبنى الحكومي، مع كتابة لوحات برايل البارزة على أزرار المصعد ليتمكن الجميع من الدخول دون عوائق.",
      whyItMatters: "أكثر من 15% من سكان العالم يعانون من إعاقات بصرية أو حركية. إهمال إمكانية الوصول يجعل تطبيقك غير قابل للاستخدام لآلاف العملاء ويعرض الشركات لغرامات قانونية صارمة بموجب قوانين سهولة الوصول الدولية مثل ADA و WCAG.",
      syntax: "<label htmlFor=\"user-email\">البريد:</label>\n<input\n  id=\"user-email\"\n  aria-invalid={hasError}\n  aria-describedby=\"email-err\"\n/>\n<span id=\"email-err\" role=\"alert\">{errorText}</span>",
      simpleExample: `// نموذج قياسي ملتزم بقواعد إمكانية الوصول
import React from "react";

export function AccessibleInput() {
  return (
    <div>
      {/* ربط التسمية بمعرف الحقل عبر htmlFor */}
      <label htmlFor="user-phone">رقم الهاتف:</label>
      <input
        id="user-phone"
        type="tel"
        // إخبار قارئات الشاشة بنوع الحقل المطلوب
        autoComplete="tel"
        required
      />
    </div>
  );
}
`,
      advancedExample: `// استمارة تسجيل متكاملة مطابقة لأعلى معايير WCAG 2.1 AA
import React, { useState } from "react";

export function FullyAccessibleForm() {
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);

  const isInvalid = touched && name.trim().length < 3;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">إمكانية الوصول الشاملة (a11y Form)</h4>
        <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-bold">
          WCAG 2.1 Compliant
        </span>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-3 text-xs">
        <div>
          {/* ربط صريح عبر htmlFor */}
          <label htmlFor="full-name-input" className="text-slate-300 font-bold block mb-1">
            الاسم الكامل: <span aria-hidden="true" className="text-rose-400">*</span>
            <span className="sr-only">(حقل مطلوب)</span>
          </label>

          <input
            id="full-name-input"
            type="text"
            required
            aria-required="true"
            aria-invalid={isInvalid}
            aria-describedby={isInvalid ? "name-error-msg" : "name-hint-msg"}
            value={name}
            onBlur={() => setTouched(true)}
            onChange={(e) => setName(e.target.value)}
            placeholder="مثال: عبدالله محمد"
            className={\`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-white outline-none transition-all focus:ring-2 \${
              isInvalid
                ? "border-rose-500 focus:ring-rose-500/50"
                : "border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/40"
            }\`}
          />

          {/* نص التوجيه المساعد */}
          <p id="name-hint-msg" className="text-[10px] text-slate-500 mt-1">
            يرجى كتابة الاسم الثلاثي كما هو مدون في الهوية الوطنية.
          </p>

          {/* رسالة الخطأ المسموعة والمقروءة */}
          {isInvalid && (
            <p id="name-error-msg" role="alert" className="text-rose-400 text-[10px] mt-1 font-bold">
              ⚠ تنبيه: يجب ألا يقل الاسم عن 3 أحرف.
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          حفظ البيانات المدخلة
        </button>
      </form>
    </div>
  );
}
`,
      outputExplanation: "من خلال استخدام aria-describedby مع aria-invalid و htmlFor، يقرأ قارئ الشاشة التسمية، ونوع الحقل، ورسالة التوجيه، وينطق رسالة الخطأ فور حدوثها دون أي ارتباك.",
      commonMistakes: [
        {
          mistake: "إلغاء حلقة التركيز في CSS: outline: none دون توفير بديل focus:ring.",
          fix: "وفر دائماً مؤشراً بصرياً واضحاً لمستخدمي لوحة المفاتيح بواسطة focus:ring-2.",
          reason: "حذف مؤشر التركيز يجعل التنقل عبر مفتاح Tab مستحيلاً لمستخدمي لوحة المفاتيح حيث يفقدون معرفة الحقل النشط حالياً."
        }
      ],
      bestPractices: [
        "استخدم خاصية htmlFor في <label> دائماً وطابقها مع id الخاص بـ <input>.",
        "أضف خاصية autoComplete معيارية (مثل 'email' أو 'new-password') لتسهيل الإكمال التلقائي في المتصفحات."
      ],
      infographicCard: {
        title: "دستور إمكانية الوصول a11y في النماذج",
        points: [
          "htmlFor + id: لربط التسمية بالحقل وتمكين النقر على النص.",
          "aria-describedby: لربط الحقل بنصوص المساعدة ورسائل الخطأ.",
          "حلقات التركيز Focus Rings: لحماية مستخدمي لوحة المفاتيح والتاب."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q8-2-1",
      question: "لماذا يُعتبر التحقق باستخدام trim() إلزامياً عند فحص الحقول المطلوبة؟",
      options: [
        "لأن trim() تقوم بتشفير النص قبل حفظه في الذاكرة",
        "لأنها تحذف المسافات البيضاء الفارغة من البداية والنهاية وتمنع المستخدم من إرسال حقول مليئة بالمسافات فقط",
        "لأنها تحول الحروف الإنجليزية إلى حروف كبيرة تلقائياً",
        "لأنها تمنع تشغيل تأثيرات useEffect غير الضرورية"
      ],
      correctAnswer: 1,
      explanation: "المسافات البيضاء '   ' تُعامل كقيمة حقيقية Truthy في JavaScript؛ واستخدام trim() يزيل هذه المسافات للتأكد من وجود أحرف حقيقية في الحقل."
    },
    {
      id: "q8-2-2",
      question: "ما هو المبدأ الذهبي المفضل عالمياً في توقيت إظهار وإخفاء رسائل أخطاء النماذج؟",
      options: [
        "إظهار كافة الأخطاء فور فتح الصفحة قبل أن يبدأ المستخدم في الكتابة",
        "إظهار الخطأ عند مغادرة الحقل (onBlur) وإزالته فوراً في الوقت الحقيقي أثناء التصحيح (Reward Early, Punish Late)",
        "عدم إظهار أي أخطاء للمستخدم والاعتماد على السيرفر فقط",
        "إظهار الأخطاء في نوافذ alert منبثقة متتالية"
      ],
      correctAnswer: 1,
      explanation: "مبدأ 'Punish Late, Reward Early' يضمن عدم مقاطعة المستخدم أثناء كتابته الأولى، وإظهار الخطأ فقط بعد مغادرته الحقل (onBlur)، ثم مسح الخطأ لحظياً مع أول تصحيح صحيح."
    },
    {
      id: "q8-2-3",
      question: "ما هي الفائدة الأساسية من استخدام خاصية aria-describedby مع حقول النماذج؟",
      options: [
        "تغيير لون خط الحقل إلى اللون الأزرق في متصفح كروم",
        "ربط حقل الإدخال برقم id الخاص برسالة الخطأ أو الملاحظة المساعدة لتنطقها قارئات الشاشة تلقائياً",
        "تسريع تحميل الصفحة بنسبة 50%",
        "منع هجمات القرصنة من نوع Denial of Service"
      ],
      correctAnswer: 1,
      explanation: "خاصية aria-describedby تربط الحقل بمعرف رسالة الخطأ أو الملاحظة، مما يمكن برامج قارئات الشاشة من نطق نص المساعدة أو الخطأ للمستخدم الكفيف."
    }
  ],
  exercise: {
    id: "ex8-2",
    title: "بناء نظام تحقق متكامل لحساب مستخدم مع التحقق الفوري والمتأخر",
    description: "المطلوب بناء نموذج يحتوي على حقلين: البريد الإلكتروني وكلمة المرور. يجب تطبيق التحقق عند مغادرة الحقل (onBlur)، فحص صحة البريد بـ Regex، فحص ألا تقل كلمة المرور عن 8 أحرف، تعطيل زر الإرسال إذا كان هناك أي خطأ، وإظهار رسائل الخطأ بلون أحمر واضح وقابل للوصول.",
    starterCode: `import { useState } from "react";

export function UserValidationForm() {
  // 1. عرف حالات القيم وحالات اللمس touched وحالات الأخطاء errors
  // 2. اكتب دالة الفحص validate()
  // 3. طبق معالج onBlur لكل حقل
  // 4. عطل الزر في حال وجود أخطاء

  return (
    <form className="p-4 text-white">
      {/* استمارة التحقق هنا */}
    </form>
  );
}`,
    hints: [
      "استخدم كائن errors يحتوي على { email: '', password: '' }.",
      "استخدم Regex للبريد: /\\S+@\\S+\\.\\S+/.",
      "افحص طول كلمة المرور: password.length >= 8."
    ],
    solution: `import { useState } from "react";

const EMAIL_PATTERN = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

export function UserValidationForm() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [isSuccess, setIsSuccess] = useState(false);

  // حساب الأخطاء بنقاء تام أثناء الرندر
  const errors = {};
  if (!values.email.trim()) {
    errors.email = "حقل البريد الإلكتروني إلزامي.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "صيغة البريد الإلكتروني غير صالحة.";
  }

  if (!values.password) {
    errors.password = "حقل كلمة المرور إلزامي.";
  } else if (values.password.length < 8) {
    errors.password = "يجب ألا تقل كلمة المرور عن 8 أحرف.";
  }

  const hasErrors = Object.keys(errors).length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!hasErrors) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <h4 className="font-bold text-sm text-indigo-400">نموذج التحقق المتوازن (Validation Form)</h4>

      <form onSubmit={handleSubmit} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">البريد الإلكتروني:</label>
          <input
            type="email"
            value={values.email}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            placeholder="developer@domain.com"
            className={\`w-full px-3.5 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              touched.email && errors.email ? "border-rose-500 bg-rose-950/20" : "border-slate-800 focus:border-indigo-500"
            }\`}
          />
          {touched.email && errors.email && (
            <p className="text-rose-400 text-[10px] mt-1 font-bold">✕ {errors.email}</p>
          )}
        </div>

        <div>
          <label className="text-slate-300 block mb-1">كلمة المرور (8+ أحرف):</label>
          <input
            type="password"
            value={values.password}
            onBlur={() => setTouched((t) => ({ ...t, password: true }))}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            placeholder="••••••••"
            className={\`w-full px-3.5 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              touched.password && errors.password ? "border-rose-500 bg-rose-950/20" : "border-slate-800 focus:border-indigo-500"
            }\`}
          />
          {touched.password && errors.password && (
            <p className="text-rose-400 text-[10px] mt-1 font-bold">✕ {errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={touched.email && touched.password && hasErrors}
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30"
        >
          تسجيل الدخول الآمن 🔒
        </button>
      </form>

      {isSuccess && (
        <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs text-center">
          ✓ تم التحقق بنجاح والبيانات مطابقة لكافة المعايير الأمنية!
        </div>
      )}
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة التحقق من صحة النماذج Form Validation",
    description: "الدليل المرئي الشامل لسلامة البيانات وتجربة المستخدم وإمكانية الوصول في React.",
    sections: [
      {
        heading: "1. القواعد الجوهرية (Validation Rules)",
        bullets: [
          "الحقول الإلزامية: التحقق بـ .trim() لمنع المسافات الوهمية.",
          "البريد الإلكتروني: تدقيق التعبير النمطي القياسي Regex.",
          "كلمات المرور: تطبيق سياسات الطول والرموز مع شريط القوة التفاعلي."
        ]
      },
      {
        heading: "2. التوقيت وتجربة المستخدم (UX Timing)",
        bullets: [
          "نمط Touched: عدم إظهار الخطأ إلا بعد مغادرة الحقل (onBlur).",
          "التصحيح الفوري: إزالة رسالة الخطأ فوراً مع كل حرف سليم.",
          "الاحتفاظ بالمدخلات: عدم مسح الحقول عند حدوث أخطاء من السيرفر."
        ]
      },
      {
        heading: "3. معايير سهولة الوصول (Accessibility a11y)",
        bullets: [
          "ربط الوسوم بـ htmlFor و id المقابل.",
          "ربط رسائل الأخطاء بـ aria-describedby و role='alert'.",
          "الحفاظ على حلقات التركيز المرئية focus:ring لمستخدمي التاب."
        ]
      }
    ]
  }
};
