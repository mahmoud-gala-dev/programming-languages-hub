// src/data/sections/section8/topic3.js
// الموضوع 3: مكتبات إدارة النماذج (React Hook Form, Zod Schema Validation & Multi-Step Forms)

export const SECTION_8_TOPIC_3 = {
  id: "8.3",
  title: "مكتبات إدارة النماذج",
  englishTerm: "Form Libraries (React Hook Form & Zod)",
  description: "المعيار الصناعي الأول في عالم React لبناء النماذج الضخمة فائقة الأداء: التعرف على مكتبة React Hook Form المعتمدة على المكونات غير المضبوطة والمراجع (Uncontrolled / Ref-based)، الربط بـ register، إدارة الإرسال بـ handleSubmit، دمج مكتبة Zod لفحص المخططات (Schema Validation)، التحكم بالمكونات الخارجية عبر Controller، إنشاء الحقول الديناميكية بـ useFieldArray، وهندسة نماذج التسجيل متعددة الخطوات (Multi-Step Wizard).",
  subtopics: [
    {
      id: "8.3.a",
      title: "مقدمة إلى React Hook Form",
      englishTerm: "Introduction to React Hook Form (Architecture & Performance)",
      description: "المفهوم الهندسي لمكتبة React Hook Form ولماذا أصبحت الخيار الأول عالمياً متفوقة على Formik و Redux Form. تعتمد المكتبة على نموذج المكونات غير المضبوطة (Uncontrolled Inputs) باستخدام المراجع (Refs) بدلاً من إعادة تصيير المكون مع كل ضغطة زر في useState. هذا يعني أن كتابة فقرة في نموذج يحتوي على 50 حقلاً لا تعيد تصيير الصفحة إطلاقاً، مما يوفر أداءً خارقاً واستهلاكاً شبه معدوم للذاكرة.",
      realLifeAnalogy: "مثل الفرق بين 'شخص يناديك باسمك في كل مرة ترمش فيها بعينك' (المكون المضبوط التقليدي الذي يعيد تصيير الصفحة 100 مرة في الدقيقة)، وبين 'مراقب صامت يسجل ملاحظاته بهدوء في دفتره ولا يتحدث إلا عندما تسلمه الاستمارة النهائية' (React Hook Form).",
      whyItMatters: "في النماذج الكبيرة (مثل استمارات التوظيف، طلبات القروض، ونماذج إعدادات المنصات)، يسبب استخدام useState التقليدي بطئاً ملحوظاً (Lag) وتجمداً في لوحة المفاتيح على الأجهزة المتوسطة والضعيفة. مكتبة React Hook Form تحافظ على سرعة 60 إطاراً في الثانية في أضخم النماذج.",
      syntax: "import { useForm } from 'react-hook-form';\n\nconst { register, handleSubmit, formState: { errors } } = useForm();",
      simpleExample: `// البنية الأساسية لاستخدام useForm من React Hook Form
import React from "react";
// استيراد خطاف useForm الرئيسي من المكتبة
import { useForm } from "react-hook-form";

export function SimpleRHFDemo() {
  // تفكيك الأدوات الأساسية من خطاف useForm
  const { register, handleSubmit } = useForm();

  // دالة استقبال البيانات بعد نجاح التحقق التلقائي
  const onSubmit = (data) => {
    // طباعة البيانات الصافية المستخرجة
    console.log("البيانات المستلمة بنجاح وبدون أي إعادة تصيير غير ضرورية:", data);
  };

  return (
    // ربط نموذج JSX بدالة handleSubmit
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* تسجيل الحقل في محرك المكتبة عبر register */}
      <input {...register("firstName")} placeholder="الاسم الأول" />
      <button type="submit">إرسال</button>
    </form>
  );
}
`,
      advancedExample: `// محاكي مقارنة عدد الرندرات بين useState التقليدي و React Hook Form
import React, { useState, useRef } from "react";

export function RHFPerformanceVisualizer() {
  const [traditionalVal, setTraditionalVal] = useState("");
  const traditionalRenders = useRef(0);
  traditionalRenders.current += 1;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">فلسفة أداء React Hook Form</h4>
        <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold">
          Zero-Render Architecture
        </span>
      </div>

      <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-slate-300 font-bold">1. النموذج التقليدي (useState):</span>
          <span className="text-[10px] font-mono text-rose-400 bg-rose-950 px-2 py-0.5 rounded">
            عدد الرندرات: {traditionalRenders.current}
          </span>
        </div>
        <input
          type="text"
          value={traditionalVal}
          onChange={(e) => setTraditionalVal(e.target.value)}
          placeholder="اكتب هنا وشاهد عداد الرندرات يرتفع..."
          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none"
        />
        <p className="text-[10px] text-slate-500">
          في كل حرف تكتبه، يعاد تصيير المكون بالكامل مع كافة أبنائه.
        </p>
      </div>

      <div className="p-3 bg-slate-950 rounded-2xl border border-emerald-500/30 space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-emerald-400 font-bold">2. نموذج React Hook Form:</span>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
            عدد الرندرات: 1 فقط!
          </span>
        </div>
        <p className="text-slate-300 text-[11px]">
          تعتمد React Hook Form على DOM Native Inputs وتلتقط البيانات عبر المراجع (Refs)، فلا تطلق إعادة تصيير أثناء الكتابة إطلاقاً مما يضمن سرعة فائقة.
        </p>
      </div>
    </div>
  );
}
`,
      outputExplanation: "من خلال تجنب وضع قيمة كل حرف في State المكون، تتيح React Hook Form بناء نماذج ضخمة تضم مئات الحقول دون أن تتأثر سرعة المتصفح أو يحدث أي بطء في الواجهة.",
      commonMistakes: [
        {
          mistake: "الجمع غير الضروري بين useState العادي و useForm لنفس الحقل.",
          fix: "دع React Hook Form تدير الحقل بالكامل عبر register ولا تنشئ له useState إضافي.",
          reason: "إنشاء useState يفسد ميزة الأداء الرئيسية للمكتبة ويعيد ظاهرة إعادة التصيير مع كل نقرة."
        }
      ],
      bestPractices: [
        "ثبت المكتبة عبر الأمر القياسي: npm install react-hook-form.",
        "استفد من تفكيك formState مثل isSubmitting و isValid و isDirty لدعم تفاعلية الأزرار."
      ],
      infographicCard: {
        title: "جوهر React Hook Form المعماري",
        points: [
          "أداء خارق: الاعتماد على Refs بدلاً من State الرندرية.",
          "كود فائق النظافة: سطر واحد لكل حقل عبر {...register('field')}.",
          "حجم بالغ الصغر: خفيفة جداً وبلا أي اعتماديات خارجية ثقيلة."
        ]
      }
    },
    {
      id: "8.3.b",
      title: "استخدام register",
      englishTerm: "Registering Inputs with Validation Rules",
      description: "دالة التسجيل الأساسية register في React Hook Form. تقوم هذه الدالة بتسجيل حقل الإدخال في المحرك الداخلي للمكتبة عبر تمرير 4 خصائص تلقائياً للحقل: { name, ref, onChange, onBlur }. كما تتيح لك تمرير كائن قواعد التحقق المدمجة (مثل required, minLength, maxLength, pattern, validate) مباشرة داخل الدالة.",
      realLifeAnalogy: "مثل بطاقة الهوية الرقمية التي يسلمها المشرف لكل لاعب قبل الدخول للملعب؛ بمجرد مسح البطاقة (register)، يصبح اللاعب مقيداً في سجلات البطولة ومعروفاً باسمه وموقعه وقواعده.",
      whyItMatters: "تغنيك دالة register عن كتابة name='...' و value={...} و onChange={...} و onBlur={...} و ref={...} لكل حقل على حدة. معامل الانتشار {...register('fieldName')} يختصر 5 أسطر في سطر واحد فائق الأناقة.",
      syntax: "<input {...register('username', {\n  required: 'هذا الحقل إلزامي',\n  minLength: { value: 3, message: '3 أحرف على الأقل' }\n})} />",
      simpleExample: `// تسجيل حقل إدخال مع شروط التحقق المدمجة
import React from "react";
import { useForm } from "react-hook-form";

export function RegisterInputDemo() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {/* تسجيل الحقل مع شرط الوجوب والحد الأدنى */}
      <input
        {...register("username", {
          required: "اسم المستخدم مطلوب",
          minLength: { value: 4, message: "يجب ألا يقل عن 4 أحرف" }
        })}
        placeholder="اسم المستخدم..."
      />
      <button type="submit">إرسال</button>
    </form>
  );
}
`,
      advancedExample: `// لوحة تسجيل متقدمة توضح ما تفعله دالة register في الكواليس
import React from "react";
import { useForm } from "react-hook-form";

export function RegisterInspectorCard() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // فحص ما تعيده دالة register عملياً
  const registeredProps = register("userEmail", { required: true });

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">تشريح دالة register</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          {"{...register()}"}
        </span>
      </div>

      <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
        <span className="text-slate-300 font-bold block">ماذا تحقن دالة register في الحقل؟</span>
        <p>✓ خاصية <code className="text-indigo-400 font-mono">name: "userEmail"</code></p>
        <p>✓ مرجع الـ DOM الداخلي <code className="text-indigo-400 font-mono">ref: refCallback</code></p>
        <p>✓ معالج التغيير الصامت <code className="text-indigo-400 font-mono">onChange: fn</code></p>
        <p>✓ معالج المغادرة واللمس <code className="text-indigo-400 font-mono">onBlur: fn</code></p>
      </div>

      <form onSubmit={handleSubmit((d) => alert(JSON.stringify(d)))} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">البريد الإلكتروني:</label>
          <input
            {...register("userEmail", {
              required: "البريد الإلكتروني إلزامي!",
              pattern: {
                value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
                message: "صيغة البريد غير صحيحة"
              }
            })}
            placeholder="developer@domain.com"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
          {errors.userEmail && (
            <p className="text-rose-400 text-[10px] mt-1 font-bold">
              ✕ {errors.userEmail.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30"
        >
          تجربة الإرسال والتحقق ⚡
        </button>
      </form>
    </div>
  );
}
`,
      outputExplanation: "دالة register تُرجع كائناً يحتوي على name و ref و onChange و onBlur؛ واستخدام معامل الانتشار {...register('name')} يدمج هذه الخصائص تلقائياً داخل عنصر input.",
      commonMistakes: [
        {
          mistake: "نسيان معامل الانتشار وكتابة register('fieldName') مباشرة دون الأقواس الثلاثة {...}.",
          fix: "اكتب دائماً {...register('fieldName')}.",
          reason: "دالة register ترجع كائناً، وعدم استخدام معامل الانتشار يمرر الكائن كخاصية واحدة مجهولة بدلاً من تفكيك خصائصها داخل الحقل."
        }
      ],
      bestPractices: [
        "مرر رسائل الخطأ كنصوص صريحة داخل كائن الشروط مثل required: 'هذا الحقل مطلوب'.",
        "استخدم خاصية valueAsNumber: true عند تسجيل حقول الأرقام لتحويل القيمة إلى number تلقائياً."
      ],
      infographicCard: {
        title: "سحر دالة register",
        points: [
          "تفكيك تلقائي: يحقن name و ref و onChange و onBlur.",
          "شروط مدمجة: required, min, max, pattern, validate.",
          "تحويل الأنواع: valueAsNumber و valueAsDate تلقائياً."
        ]
      }
    },
    {
      id: "8.3.c",
      title: "استخدام handleSubmit",
      englishTerm: "Handling Form Submission with handleSubmit Wrapper",
      description: "دالة التغليف الذكية handleSubmit من React Hook Form. تستقبل هذه الدالة دالتين كمعاملين: الأولى دالة النجاح onValid (التي لا تُستدعى إلا إذا كانت كافة حقول النموذج صالحة ومطابقة للشروط بنسبة 100%)، والثانية اختيارية onError (التي تُستدعى في حال وجود أي أخطاء). تقوم handleSubmit تلقائياً باستدعاء event.preventDefault()، وجمع البيانات وتنسيقها، ونقل التركيز (Focus) تلقائياً إلى أول حقل يحتوي على خطأ.",
      realLifeAnalogy: "مثل الحاجز الأمني الذكي في مواقف السيارات؛ يفحص سيارتك أولاً، فإذا كانت لوحتك مسجلة وصالحة يرفع الحاجز ويسمح لك بالدخول (onValid)، وإن كانت غير مسجلة يطلق صفيراً ويرشدك لمكتب الاستقبال (onError).",
      whyItMatters: "تخلصك handleSubmit من كتابة عشرات الشروط اليدوية مثل if (errors.name || errors.email) return داخل كود المكون. بمجرد وصول الكود إلى داخل دالة onValid، يمكنك التأكد يقيناً من أن البيانات نظيفة تماماً وجاهزة للإرسال.",
      syntax: "const onSubmit = (data) => { /* بيانات سليمة 100% */ };\nconst onError = (errors) => { /* الأخطاء المكتشفة */ };\n<form onSubmit={handleSubmit(onSubmit, onError)}>",
      simpleExample: `// استخدام دالة handleSubmit الذكية
import React from "react";
import { useForm } from "react-hook-form";

export function SubmitDemo() {
  const { register, handleSubmit } = useForm();

  // لا تعمل هذه الدالة إلا بعد اجتياز كافة شروط التحقق!
  const onValidSubmit = (cleanData) => {
    console.log("تم التحقق بنجاح! البيانات جاهزة للإرسال:", cleanData);
  };

  // دالة تعمل فقط عند وجود أخطاء تمنع الإرسال
  const onInvalidSubmit = (validationErrors) => {
    console.warn("تعذر الإرسال بسبب وجود أخطاء:", validationErrors);
  };

  return (
    <form onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}>
      <input {...register("email", { required: true })} placeholder="البريد" />
      <button type="submit">إرسال آمن</button>
    </form>
  );
}
`,
      advancedExample: `// استمارة حجز فندقي مع محاكاة دورة handleSubmit الكاملة
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function BookingSubmitFlow() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [log, setLog] = useState("");

  const onValid = (data) => {
    setLog(\`✓ تم قبول الحجز بنجاح للعميل: \${data.guestName} لعدد \${data.nights} ليالٍ.\`);
  };

  const onError = (fieldErrors) => {
    const errorCount = Object.keys(fieldErrors).length;
    setLog(\`⚠ رفض الإرسال: تم رصد \${errorCount} أخطاء في البيانات المدخلة.\`);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">حارس الإرسال (handleSubmit Pipeline)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Automatic preventDefault
        </span>
      </div>

      <form onSubmit={handleSubmit(onValid, onError)} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">اسم النزيل:</label>
          <input
            {...register("guestName", { required: "اسم النزيل إلزامي" })}
            placeholder="مثال: فيصل الحربي"
            className={\`w-full px-3 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              errors.guestName ? "border-rose-500" : "border-slate-800 focus:border-indigo-500"
            }\`}
          />
          {errors.guestName && (
            <p className="text-rose-400 text-[10px] mt-1">✕ {errors.guestName.message}</p>
          )}
        </div>

        <div>
          <label className="text-slate-300 block mb-1">عدد الليالي (1 - 30):</label>
          <input
            type="number"
            {...register("nights", {
              required: "عدد الليالي إلزامي",
              min: { value: 1, message: "ليلة واحدة على الأقل" },
              max: { value: 30, message: "الحد الأقصى 30 ليلة" }
            })}
            placeholder="3"
            className={\`w-full px-3 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              errors.nights ? "border-rose-500" : "border-slate-800 focus:border-indigo-500"
            }\`}
          />
          {errors.nights && (
            <p className="text-rose-400 text-[10px] mt-1">✕ {errors.nights.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30"
        >
          تأكيد الحجز عبر handleSubmit 🏨
        </button>
      </form>

      {log && (
        <div className={\`p-3 rounded-xl text-xs text-center border animate-fadeIn \${
          log.startsWith("✓")
            ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300"
            : "bg-rose-950/60 border-rose-500/40 text-rose-300"
        }\`}>
          {log}
        </div>
      )}
    </div>
  );
}
`,
      outputExplanation: "تقوم دالة handleSubmit باعتراض الحدث ومنع إعادة تحميل الصفحة تلقائياً دون كتابة e.preventDefault()، وتمرر كائن البيانات النظيفة لدالة onValid فقط عند استيفاء كافة الشروط.",
      commonMistakes: [
        {
          mistake: "استدعاء دالة onSubmit مباشرة دون تغليفها بـ handleSubmit: onSubmit={mySubmitFn}.",
          fix: "غلفها دائماً بـ onSubmit={handleSubmit(mySubmitFn)}.",
          reason: "استدعاء الدالة مباشرة دون handleSubmit يفقدك فحص التحقق وجمع البيانات ويجعل المتصفح يعيد تحميل الصفحة."
        }
      ],
      bestPractices: [
        "استغل ميزة التركيز التلقائي (Auto-Focus on Error) المدمجة في handleSubmit لنقل مؤشر الكتابة لأول حقل خاطئ.",
        "اجعل دالة onValid دالة غير متزامنة async لانتظار طلبات الشبكة بسلاسة."
      ],
      infographicCard: {
        title: "خط أنابيب handleSubmit Pipeline",
        points: [
          "1. منع إعادة تحميل الصفحة تلقائياً.",
          "2. تشغيل كافة فحوصات التحقق في المراجع.",
          "3. نقل التركيز لأول خطأ أو تمرير البيانات النظيفة لـ onValid."
        ]
      }
    },
    {
      id: "8.3.d",
      title: "قراءة أخطاء التحقق",
      englishTerm: "Reading Validation Errors from formState",
      description: "آلية استخراج وتنسيق رسائل الأخطاء من كائن formState: { errors } في React Hook Form. يحتوي كائن errors على مفتاح لكل حقل فشل في التحقق، ويحمل كل حقل خصائص تفصيلية مثل type (نوع الشرط الذي فُشل فيه: 'required', 'minLength', 'pattern') وخاصية message (الرسالة النصية المخصصة).",
      realLifeAnalogy: "مثل تقرير الفحص الدوري للسيارة؛ يسلمك الفني ورقة واضحة تذكر: (الإطارات: ضغط منخفض)، (المكابح: بحاجة لتبديل)، فلا تحتاج للتخمين أو البحث في السيارة كلها.",
      whyItMatters: "يوفر كائن errors طريقة معيارية فائقة القوة للوصول للخطأ بدقة: errors.email?.message. كما يدعم التحقق من وجود الخطأ بـ boolean لتلوين الإطارات وتنسيق الواجهة بسهولة.",
      syntax: "const { formState: { errors } } = useForm();\n// القراءة في JSX:\n{errors.username && <span>{errors.username.message}</span>}",
      simpleExample: `// قراءة رسائل الأخطاء وعرضها للمستخدم
import React from "react";
import { useForm } from "react-hook-form";

export function FormErrorsDemo() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input
        {...register("age", {
          required: "يرجى تحديد العمر",
          min: { value: 18, message: "يجب أن يكون العمر 18 عاماً فأكثر" }
        })}
      />
      {/* قراءة رسالة الخطأ بأمان عبر Optional Chaining */}
      {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      <button type="submit">متابعة</button>
    </form>
  );
}
`,
      advancedExample: `// عارض تفاصيل أخطاء formState مع استعراض كود الخطأ والنوع
import React from "react";
import { useForm } from "react-hook-form";

export function ErrorStateInspector() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty }
  } = useForm({ mode: "onChange" });

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">كائن الأخطاء formState.errors</h4>
        <span className={\`text-[10px] font-mono px-2 py-0.5 rounded font-bold \${
          isValid ? "bg-emerald-950 text-emerald-400" : "bg-rose-950 text-rose-400"
        }\`}>
          {isValid ? "النموذج سليم ✓" : "يوجد أخطاء"}
        </span>
      </div>

      <form onSubmit={handleSubmit(() => {})} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">الرمز السري (6 أرقام):</label>
          <input
            {...register("pinCode", {
              required: "الرمز السري إلزامي تماماً",
              minLength: { value: 6, message: "الرمز يجب أن يتكون من 6 أرقام على الأقل" },
              pattern: { value: /^\\d+$/, message: "يجب إدخال أرقام فقط بدون حروف" }
            })}
            placeholder="123456"
            className={\`w-full px-3 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              errors.pinCode ? "border-rose-500 bg-rose-950/20" : "border-slate-800 focus:border-indigo-500"
            }\`}
          />
          {errors.pinCode && (
            <div className="mt-1 flex items-center justify-between text-[10px]">
              <span className="text-rose-400 font-bold">✕ {errors.pinCode.message}</span>
              <span className="font-mono bg-rose-950 text-rose-300 px-1 rounded">
                type: {errors.pinCode.type}
              </span>
            </div>
          )}
        </div>

        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 flex justify-between">
          <span>هل قام المستخدم بتعديل النموذج (isDirty)؟</span>
          <span className="font-mono text-indigo-300 font-bold">{isDirty ? "نعم (True)" : "لا (False)"}</span>
        </div>
      </form>
    </div>
  );
}
`,
      outputExplanation: "يتتبع كائن formState حالة النموذج في كل لحظة، ويوفر errors.field.message لعرض النص الإرشادي للمستخدم و errors.field.type لمعرفة نوع القاعدة التي تم خرقها.",
      commonMistakes: [
        {
          mistake: "محاولة قراءة formState دون تفكيك الخصائص المطلوبة مباشرة: const state = formState.",
          fix: "فكك الخصائص التي تحتاجها صراحة: const { formState: { errors, isSubmitting } } = useForm().",
          reason: "تعتمد React Hook Form على كائن Proxy لتتبع الخصائص؛ تفكيك الخصائص صراحة يضمن إعادة تصيير الواجهة فقط عند تغير تلك الخصائص المحددة."
        }
      ],
      bestPractices: [
        "استخدم خاصية mode: 'onBlur' أو mode: 'onChange' في useForm لتحديد توقيت فحص الأخطاء.",
        "استخدم دائمًا خاصية errors.field?.message مع التفكيك الآمن لتفادي أخطاء TypeError."
      ],
      infographicCard: {
        title: "خصائص كائن formState الذكي",
        points: [
          "errors: خريطة كاملة لكافة الحقول الخاطئة ورسائلها.",
          "isValid: قيمة منطقية تدل على جاهزية النموذج بالكامل.",
          "isDirty: تدل على ما إذا كان المستخدم قد عدل أي قيمة أولية."
        ]
      }
    },
    {
      id: "8.3.e",
      title: "استخدام Controller",
      englishTerm: "Integrating UI Component Libraries with Controller",
      description: "المكون الوسيط Controller في React Hook Form. يُستخدم لربط مكتبات واجهات المستخدم الخارجية (مثل Material UI, Ant Design, React-Select, Radix UI, shadcn/ui) التي لا تكشف مرجعاً مباشراً لعنصر DOM input أصلي. يوفر Controller واجهة Render Props تُمرر خصائص field (مثل value, onChange, onBlur, ref) لربط المكون المعقد بنظام التحقق بسلاسة متناهية.",
      realLifeAnalogy: "مثل محول المقابس الكهربائية العالمي (Universal Adapter)؛ يتيح لك توصيل شاحنك البريطاني ذي الرؤوس الثلاثة في مقبس جداري ثنائي أمريكي دون كسر أي منهما.",
      whyItMatters: "المكونات المتقدمة مثل محدد التاريخ (DatePicker)، القوائم المخصصة، ومحررات النصوص الغنية (Rich Text Editors) لا تقبل {...register('name')} مباشرة. بدون Controller، يستحيل استخدام هذه المكونات الاحترافية مع React Hook Form.",
      syntax: "<Controller\n  name=\"selectedCity\"\n  control={control}\n  render={({ field, fieldState: { error } }) => (\n    <CustomSelect {...field} error={error} />\n  )}\n/>",
      simpleExample: `// استخدام Controller لربط مكون خارجي
import React from "react";
import { useForm, Controller } from "react-hook-form";

export function ControllerSimpleDemo() {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      {/* استخدام Controller للتحكم بالمكون المعقد */}
      <Controller
        name="rating"
        control={control}
        defaultValue={5}
        render={({ field }) => (
          // المكون الخارجي يستقبل onChange و value من field
          <input
            type="range"
            min="1"
            max="10"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <button type="submit">إرسال التقييم</button>
    </form>
  );
}
`,
      advancedExample: `// ربط محدد تصنيفات مخصص (Custom Tag Selector) بنظام التحقق عبر Controller
import React from "react";
import { useForm, Controller } from "react-hook-form";

const TAGS = ["React 19", "Tailwind CSS", "TypeScript", "Next.js", "Zod"];

export function CustomSelectorWithController() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { selectedTag: "React 19" }
  });

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">الربط المعماري عبر Controller</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          UI Integration
        </span>
      </div>

      <form onSubmit={handleSubmit((d) => alert(JSON.stringify(d)))} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-2 font-bold">اختر التقنية المفضلة لديك:</label>

          {/* تغليف المكون المخصص داخل Controller */}
          <Controller
            name="selectedTag"
            control={control}
            rules={{ required: "يرجى اختيار وسم واحد على الأقل" }}
            render={({ field }) => (
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => field.onChange(tag)}
                    className={\`px-3 py-1.5 rounded-xl border font-bold text-xs transition-all \${
                      field.value === tag
                        ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-950"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                    }\`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          />

          {errors.selectedTag && (
            <p className="text-rose-400 text-[10px] mt-2">✕ {errors.selectedTag.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30"
        >
          تأكيد الاختيار عبر Controller 🎯
        </button>
      </form>
    </div>
  );
}
`,
      outputExplanation: "يمرر Controller كائناً يدعى field يحتوي على onChange و onBlur و value و ref، مما يسمح لأي مكون واجهة مخصص بالتحدث والتكامل مع نظام React Hook Form الداخلي دون أي مشاكل.",
      commonMistakes: [
        {
          mistake: "نسيان استخراج control من useForm وتمريره لمكون Controller.",
          fix: "فكك const { control } = useForm() ومررها كخاصية control={control}.",
          reason: "بدون كائن control، لا يستطيع مكون Controller التواصل مع المحرك المركزي للنموذج."
        }
      ],
      bestPractices: [
        "استخدم Controller فقط للمكونات المعقدة ومكتبات الطرف الثالث، واعتمد على register للحقول العادية لتوفير الأداء.",
        "استفد من fieldState.error داخل دالة render لعرض الخطأ الخاص بالحقل المخصص."
      ],
      infographicCard: {
        title: "جسر الربط Controller Bridge",
        points: [
          "جسر تواصل لمكتبات UI مثل shadcn/ui و Radix UI و Material UI.",
          "توفير كائن field: { onChange, onBlur, value, ref }.",
          "عزل الرندر داخل نطاق المكون المخصص فقط."
        ]
      }
    },
    {
      id: "8.3.f",
      title: "التحقق باستخدام Zod",
      englishTerm: "Schema-First Validation with Zod",
      description: "بناء وفحص مخططات البيانات (Schema Validation) باستخدام مكتبة Zod الحديثة. تتيح لك Zod تعريف هيكل البيانات وشروط التحقق وقواعد الأمان خارج المكونات بصيغة كود تصريحي نقي (Declarative Schema)، مع ميزة استخراج أنواع TypeScript تلقائياً (Type Inference z.infer<typeof Schema>).",
      realLifeAnalogy: "مثل المخطط الهندسي والمعماري للمبنى (Blueprints)؛ يحدد بدقة أبعاد الغرف وسماكة الجدران ومواقع الأسلاك، وأي طوبة توضع بشكل يخالف المخطط يتم رفضها فوراً.",
      whyItMatters: "تعد Zod اليوم المعيار الفعلي لمجتمع جافاسكريبت وتايب سكريبت. بدلاً من كتابة شروط if مبعثرة لكل حقل في ملفات مختلفة، تكتب مخططاً واحداً مركزياً يُستخدم في الواجهة الأمامية وفي الخادم (Full-Stack Type Safety).",
      syntax: "import { z } from 'zod';\n\nconst UserSchema = z.object({\n  name: z.string().min(3, '3 أحرف على الأقل'),\n  email: z.string().email('بريد غير صالح'),\n  age: z.number().min(18)\n});",
      simpleExample: `// تعريف وفحص مخطط بيانات باستخدام Zod
import { z } from "zod";

// 1. تعريف المخطط الصارم للبيانات
const RegisterSchema = z.object({
  username: z.string().min(3, "اسم المستخدم يجب ألا يقل عن 3 أحرف"),
  email: z.string().email("صيغة البريد الإلكتروني غير صالحة"),
  age: z.number().min(18, "يجب أن تكون بعمر 18 عاماً فأكثر")
});

// 2. تجربة فحص كائن بيانات حقيقي
const goodData = { username: "tarek", email: "tarek@dev.com", age: 24 };
const result = RegisterSchema.safeParse(goodData);

if (result.success) {
  console.log("البيانات مطابقة تماماً للمخطط! ✓", result.data);
} else {
  console.error("فشل الفحص:", result.error.errors);
}
`,
      advancedExample: `// محاكي فحص مخطط Zod مع معالجة الأخطاء المعقدة وفحص تطابق كلمتي المرور
import React, { useState } from "react";
import { z } from "zod";

// مخطط تسجيل مع فحص تطابق كلمتي المرور (refine)
const SignupSchema = z
  .object({
    username: z.string().min(3, "اسم المستخدم يجب أن يتكون من 3 أحرف على الأقل"),
    password: z.string().min(6, "كلمة المرور يجب ألا تقل عن 6 أحرف"),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمتا المرور غير متطابقتين!",
    path: ["confirmPassword"] // تحديد موقع الخطأ بدقة
  });

export function ZodPlaygroundVisualizer() {
  const [inputs, setInputs] = useState({ username: "ali", password: "123", confirmPassword: "456" });

  // فحص آمن للبيانات
  const validation = SignupSchema.safeParse(inputs);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مخطط Zod الهندسي (Schema Engine)</h4>
        <span className={\`text-[10px] font-mono px-2 py-0.5 rounded font-bold \${
          validation.success ? "bg-emerald-950 text-emerald-400" : "bg-rose-950 text-rose-400"
        }\`}>
          {validation.success ? "Schema Valid ✓" : "Schema Invalid ✕"}
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">اسم المستخدم:</label>
          <input
            type="text"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none"
          />
        </div>

        <div>
          <label className="text-slate-300 block mb-1">كلمة المرور:</label>
          <input
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none"
          />
        </div>

        <div>
          <label className="text-slate-300 block mb-1">تأكيد كلمة المرور:</label>
          <input
            type="password"
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none"
          />
        </div>
      </div>

      {/* قائمة أخطاء Zod المكتشفة */}
      {!validation.success && (
        <div className="p-3 bg-rose-950/40 border border-rose-500/30 rounded-2xl space-y-1">
          <span className="text-[10px] text-rose-300 font-bold block uppercase font-mono">أخطاء Zod المكتشفة:</span>
          {validation.error.errors.map((err, i) => (
            <p key={i} className="text-rose-400 text-[11px]">
              • [{err.path.join(".")}]: {err.message}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
`,
      outputExplanation: "توفر Zod طريقة safeParse التي لا تطلق استثناءات برمجية بل ترجع كائناً يحتوي إما على { success: true, data } أو { success: false, error }، مما يسهل معالجة الأخطاء بأمان تام.",
      commonMistakes: [
        {
          mistake: "استخدام parse() بدلاً من safeParse() وتوقف التطبيق عند حدوث خطأ.",
          fix: "استخدم دائماً safeParse() في بيئات فحص واجهات المستخدم.",
          reason: "دالة parse() العادية تطلق استثناءً قاتلاً (Throws Error) يؤدي لانهيار التطبيق إذا لم يتم إحاطته بـ try/catch."
        }
      ],
      bestPractices: [
        "استخدم دالة refine() للتحقق المتقدم كفحص تطابق كلمتي المرور أو الشروط المعتمدة على عدة حقول.",
        "استخرج نوع TypeScript تلقائياً عبر: type UserForm = z.infer<typeof UserSchema>."
      ],
      infographicCard: {
        title: "مميزات مخططات Zod Schema",
        points: [
          "تصريح مركزي: تجميع كافة قواعد التطبيق في مخطط نقي.",
          "تكامل TypeScript: استخراج الأنواع تلقائياً بـ z.infer.",
          "دعم الشروط المركبة: refine لفحص التوافق بين عدة حقول."
        ]
      }
    },
    {
      id: "8.3.g",
      title: "ربط Zod مع React Hook Form",
      englishTerm: "Integrating Zod with React Hook Form via zodResolver",
      description: "الاندماج الأقوى في المنظومة الحديثة: ربط مخططات Zod بمكتبة React Hook Form عبر حزمة @hookform/resolvers/zod ودالة zodResolver. يقوم هذا المحول بتحويل أخطاء Zod إلى أخطاء formState.errors تلقائياً، مما يمنحك تجربة تطوير أسطورية: نموذج فائق السرعة مع تدقيق صارم ومخطط موحد في سطرين فقط.",
      realLifeAnalogy: "مثل تركيب محرك صاروخي نفاث (Zod) على سيارة سباق خفيفة الوزن ذات ديناميكية هوائية خارقة (React Hook Form)؛ تحصل على سرعة قصوى وأمان مطلق لا يُضاهى.",
      whyItMatters: "يحذف الحاجة لكتابة قواعد داخل register. يصبح استدعاء الحقل مجرد {...register('email')} فقط، بينما يتولى مخطط Zod فحص كل شيء بدقة متناهية ودعم كامل لـ TypeScript Autocomplete.",
      syntax: "import { zodResolver } from '@hookform/resolvers/zod';\n\nconst { register, handleSubmit } = useForm({\n  resolver: zodResolver(mySchema)\n});",
      simpleExample: `// الربط القياسي بين React Hook Form و Zod
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// 1. تعريف مخطط Zod
const schema = z.object({
  email: z.string().email("يرجى إدخال بريد صالح"),
  password: z.string().min(8, "كلمة المرور يجب ألا تقل عن 8 أحرف")
});

export function ZodRHFFormDemo() {
  // 2. تمرير zodResolver لخطاف useForm
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {/* الحقول مسجلة ببساطة شديدة دون الحاجة لكتابة شروط هنا */}
      <input {...register("email")} placeholder="البريد" />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" {...register("password")} placeholder="كلمة المرور" />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">تسجيل</button>
    </form>
  );
}
`,
      advancedExample: `// نموذج تسجيل حساب مطور متكامل يجمع Zod و React Hook Form
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const DeveloperSchema = z.object({
  fullName: z.string().min(3, "الاسم الكامل يجب أن يتكون من 3 أحرف على الأقل"),
  github: z.string().url("يجب إدخال رابط صالح لحساب GitHub").includes("github.com", { message: "الرابط يجب أن ينتمي لموقع github.com" }),
  experienceYears: z.coerce.number().min(1, "سنة خبرة واحدة على الأقل").max(30, "الحد الأقصى 30 سنة")
});

export function FullZodRHFCard() {
  const [successData, setSuccessData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(DeveloperSchema)
  });

  const onSubmit = (data) => {
    setSuccessData(data);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">تكامل RHF + Zod Resolver</h4>
        <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold">
          Type-Safe Stack
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">الاسم الكامل:</label>
          <input
            {...register("fullName")}
            placeholder="مثال: يوسف القاضي"
            className={\`w-full px-3 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              errors.fullName ? "border-rose-500 bg-rose-950/20" : "border-slate-800 focus:border-indigo-500"
            }\`}
          />
          {errors.fullName && (
            <p className="text-rose-400 text-[10px] mt-1 font-bold">✕ {errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="text-slate-300 block mb-1">رابط حساب GitHub:</label>
          <input
            {...register("github")}
            placeholder="https://github.com/username"
            className={\`w-full px-3 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              errors.github ? "border-rose-500 bg-rose-950/20" : "border-slate-800 focus:border-indigo-500"
            }\`}
          />
          {errors.github && (
            <p className="text-rose-400 text-[10px] mt-1 font-bold">✕ {errors.github.message}</p>
          )}
        </div>

        <div>
          <label className="text-slate-300 block mb-1">سنوات الخبرة البرمجية:</label>
          <input
            type="number"
            {...register("experienceYears")}
            placeholder="5"
            className={\`w-full px-3 py-2 bg-slate-950 border rounded-xl text-white focus:outline-none \${
              errors.experienceYears ? "border-rose-500 bg-rose-950/20" : "border-slate-800 focus:border-indigo-500"
            }\`}
          />
          {errors.experienceYears && (
            <p className="text-rose-400 text-[10px] mt-1 font-bold">✕ {errors.experienceYears.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30"
        >
          حفظ وتدقيق المطور 🚀
        </button>
      </form>

      {successData && (
        <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs">
          ✓ تم اجتياز مخطط Zod بنجاح وتم تخزين المطور في النظام!
        </div>
      )}
    </div>
  );
}
`,
      outputExplanation: "يقوم zodResolver بتحويل أخطاء Zod إلى كائن errors التابع لـ React Hook Form، مما يلغي تماماً الحاجة لكتابة شروط التحقق داخل JSX ويجعل المكون نظيفاً ومختصراً.",
      commonMistakes: [
        {
          mistake: "نسيان تثبيت حزمة @hookform/resolvers بشكل منفصل.",
          fix: "قم بتثبيتها عبر: npm install @hookform/resolvers zod.",
          reason: "المحولات (Resolvers) ليست مدمجة في حزمة react-hook-form الأساسية للحفاظ على حجمها الخفيف."
        }
      ],
      bestPractices: [
        "استخدم z.coerce.number() مع حقول الأرقام لتقوم Zod بتحويل النص القادم من input إلى number تلقائياً.",
        "احفظ مخططات Zod في مجلد مستقل مثل src/schemas/ ليعاد استخدامها في الواجهة والخادم."
      ],
      infographicCard: {
        title: "حلف القوة: React Hook Form + Zod",
        points: [
          "zodResolver: حلقة الوصل لتحويل أخطاء Zod إلى formState.errors.",
          "كود JSX فائق النظافة: {...register('field')} مجردة من الشروط.",
          "Type-Safe 100%: تطابق كامل مع نماذج TypeScript وقواعد الخادم."
        ]
      }
    },
    {
      id: "8.3.h",
      title: "القيم الافتراضية وإعادة التهيئة",
      englishTerm: "Default Values & Form Reset with useForm",
      description: "إدارة القيم الابتدائية (defaultValues) في React Hook Form، واستخدام دالة reset لإعادة تعيين النموذج بعد جلب البيانات غير المتزامنة من الخادم (Async Default Values). على عكس useState الذي قد يعرض مدخلات غير مضبوطة أثناء التحميل، تتيح defaultValues تهيئة الحقول بنقاء، وتمكن دالة reset({ ...data }) من ملء النموذج فور اكتمال طلب الـ API.",
      realLifeAnalogy: "مثل استمارة تعديل البيانات الشخصية في البنك؛ عندما تطلب تعديل بياناتك، يطبع لك الموظف ورقة ممتلئة مسبقاً برقم هاتفك وعنوانك الحاليين (defaultValues)، وعليك فقط تعديل الخانة التي تغيرت.",
      whyItMatters: "في شاشات 'تعديل الملف الشخصي' (Edit Profile) أو 'تعديل المقال'، يحتاج المطور لملء النموذج ببيانات قادمة من السيرفر. استخدام دالة reset(userData) هو الحل الهندسي القياسي لملء الحقول وتصفير حالة isDirty.",
      syntax: "const { reset } = useForm({ defaultValues: async () => fetchUserData() });\n// أو إعادة التعيين يدوياً بعد الجلب:\nuseEffect(() => { if (user) reset(user); }, [user, reset]);",
      simpleExample: `// استخدام defaultValues وإعادة التعيين بـ reset
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export function DefaultValuesDemo() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      username: "الافتراضي",
      role: "admin"
    }
  });

  // محاكاة جلب بيانات مستخدم من الخادم وتحديث النموذج
  useEffect(() => {
    setTimeout(() => {
      // ملء النموذج ببيانات الخادم الجديدة وتصفير التعديلات
      reset({ username: "سالم المنصور", role: "editor" });
    }, 1500);
  }, [reset]);

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input {...register("username")} />
      <button type="submit">حفظ التعديلات</button>
    </form>
  );
}
`,
      advancedExample: `// محرر ملف المستخدم مع مؤشر حالة التعديل (isDirty) وزر التراجع الذكي
import React from "react";
import { useForm } from "react-hook-form";

const ORIGINAL_USER = {
  nickname: "المهندس فهد",
  bio: "مطور واجهات ومحب لـ React 19.",
  newsletter: true
};

export function ProfileEditorCard() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitting }
  } = useForm({
    defaultValues: ORIGINAL_USER
  });

  const onSave = (newData) => {
    alert("تم حفظ البيانات وتحديث القيم الأصلية بنجاح!");
    // إعادة تعيين النموذج بالقيم الجديدة لتصبح هي الأصل الجديد (isDirty = false)
    reset(newData);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">محرر البيانات مع defaultValues</h4>
        <span className={\`text-[10px] font-mono px-2 py-0.5 rounded font-bold \${
          isDirty ? "bg-amber-950 text-amber-400" : "bg-slate-800 text-slate-400"
        }\`}>
          {isDirty ? "تم التعديل (Unsaved)" : "متطابق مع الأصل"}
        </span>
      </div>

      <form onSubmit={handleSubmit(onSave)} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">الاسم المستعار:</label>
          <input
            {...register("nickname")}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="text-slate-300 block mb-1">نبذة عنك:</label>
          <textarea
            rows={2}
            {...register("bio")}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 resize-none"
          />
        </div>

        <label className="flex items-center gap-2 p-2 bg-slate-950 rounded-xl border border-slate-800 cursor-pointer">
          <input
            type="checkbox"
            {...register("newsletter")}
            className="w-4 h-4 accent-indigo-500 rounded"
          />
          <span>استلام النشرات البرمجية الأسبوعية</span>
        </label>

        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            disabled={!isDirty || isSubmitting}
            className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30"
          >
            حفظ التغييرات 💾
          </button>
          <button
            type="button"
            disabled={!isDirty}
            onClick={() => reset(ORIGINAL_USER)}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 rounded-xl text-xs font-bold transition-all"
          >
            تراجع
          </button>
        </div>
      </form>
    </div>
  );
}
`,
      outputExplanation: "خاصية defaultValues تؤمن ملء الحقول مسبقاً وتعمل كمعيار لمقارنة التعديلات، حيث تتحول خاصية isDirty إلى true بمجرد أن يغير المستخدم أي حرف عن الأصل.",
      commonMistakes: [
        {
          mistake: "تمرير قيم غير معرفة undefined داخل كائن defaultValues.",
          fix: "وفر دائماً نصوصاً فارغة '' أو قيماً افتراضية صريحة لكافة الحقول.",
          reason: "تمرير undefined قد يؤدي لحدوث وميض في الحقول أو تحذيرات من React حول التبديل بين المكونات المضبوطة وغير المضبوطة."
        }
      ],
      bestPractices: [
        "استدعِ reset(newValues) فور استلام بيانات السيرفر لتحديث القيم المرجعية وتصفير حالة isDirty.",
        "عطل زر الحفظ disabled={!isDirty} لمنع إرسال طلبات للخادم إذا لم يعدل المستخدم أي شيء."
      ],
      infographicCard: {
        title: "هندسة القيم الافتراضية defaultValues",
        points: [
          "تعريف الحالة المرجعية الأساسية لكافة الحقول في useForm.",
          "تغذية مؤشر isDirty لمراقبة وجود تعديلات غير محفوظة.",
          "دالة reset(newData): لملء النموذج ببيانات الخادم غير المتزامنة."
        ]
      }
    },
    {
      id: "8.3.i",
      title: "الحقول الديناميكية باستخدام useFieldArray",
      englishTerm: "Dynamic Form Fields with useFieldArray Hook",
      description: "إدارة الحقول والمصفوفات الديناميكية المتغيرة (Dynamic Form Arrays) في React Hook Form عبر خطاف useFieldArray. يتيح لك هذا الخطاف إضافة حقول جديدة (append / prepend)، حذف حقول (remove)، تبديل أماكنها (swap / move)، وتعيين مفاتيح فريدة ومستقرة تلقائياً عبر خاصية item.id دون حدوث مشاكل في ترتيب شجرة React.",
      realLifeAnalogy: "مثل إضافة مسافرين إضافيين في حجز الطيران؛ تضغط زر 'إضافة مسافر آخر' لتظهر مجموعة حقول جديدة للمسافر الثاني، مع زر 'حذف' بجانب كل مسافر لإلغائه إذا تراجع عن السفر.",
      whyItMatters: "تستخدم الحقول الديناميكية في فواتير المبيعات (إضافة أصناف الفاتورة)، إضافة روابط حسابات التواصل الاجتماعي، وإدخال الخبرات السابقة في السيرة الذاتية. كتابتها يدوياً بـ useState مصفوفة معقد جداً وعرضة لأخطاء الفهارس والمفاتيح.",
      syntax: "const { fields, append, remove } = useFieldArray({\n  control,\n  name: 'items'\n});",
      simpleExample: `// قائمة ديناميكية لإضافة وحذف أرقام الهواتف
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

export function DynamicPhonesDemo() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: { phones: [{ number: "" }] }
  });

  // ربط المصفوفة الديناميكية بمفتاح phones
  const { fields, append, remove } = useFieldArray({
    control,
    name: "phones"
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      {fields.map((field, index) => (
        // استخدام field.id الإلزامي كمفتاح فريد مستقر
        <div key={field.id}>
          <input {...register(\`phones.\${index}.number\`)} placeholder="رقم الهاتف" />
          <button type="button" onClick={() => remove(index)}>حذف</button>
        </div>
      ))}
      <button type="button" onClick={() => append({ number: "" })}>
        إضافة رقم إضافي +
      </button>
      <button type="submit">حفظ</button>
    </form>
  );
}
`,
      advancedExample: `// استمارة إنشاء فاتورة مشتريات ديناميكية مع حساب فوري للمجموع
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

export function DynamicInvoiceBuilder() {
  const { register, control, handleSubmit, watch } = useForm({
    defaultValues: {
      client: "شركة الأفق للتقنية",
      items: [
        { name: "تصميم واجهة مستخدم (Figma)", price: 1500, qty: 1 },
        { name: "تطوير تطبيق React 19", price: 3500, qty: 1 }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items"
  });

  // مراقبة عناصر الفاتورة لحساب الإجمالي لحظياً
  const watchedItems = watch("items") || [];
  const totalPrice = watchedItems.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (Number(item.qty) || 1),
    0
  );

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">منشئ الفواتير الديناميكي (useFieldArray)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          {fields.length} بنود
        </span>
      </div>

      <form onSubmit={handleSubmit((d) => alert(JSON.stringify(d)))} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">اسم العميل:</label>
          <input
            {...register("client")}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-slate-300 font-bold">بنود الفاتورة:</span>
            <button
              type="button"
              onClick={() => append({ name: "", price: 0, qty: 1 })}
              className="text-[11px] text-indigo-400 hover:text-indigo-300 font-bold"
            >
              + إضافة بند جديد
            </button>
          </div>

          {fields.map((field, idx) => (
            <div key={field.id} className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-slate-500">بند #{idx + 1}</span>
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(idx)}
                    className="text-rose-400 hover:text-rose-300 text-[10px]"
                  >
                    حذف ✕
                  </button>
                )}
              </div>

              <input
                {...register(\`items.\${idx}.name\`)}
                placeholder="اسم الخدمة أو المنتج..."
                className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-white"
              />

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  {...register(\`items.\${idx}.price\`)}
                  placeholder="السعر (ر.س)"
                  className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-white"
                />
                <input
                  type="number"
                  {...register(\`items.\${idx}.qty\`)}
                  placeholder="الكمية"
                  className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-white"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-slate-950 rounded-xl border border-indigo-500/30 flex justify-between items-center">
          <span className="text-slate-400">إجمالي الفاتورة:</span>
          <span className="font-mono text-emerald-400 font-bold text-base">
            {totalPrice.toLocaleString()} ر.س
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30"
        >
          إصدار الفاتورة 📄
        </button>
      </form>
    </div>
  );
}
`,
      outputExplanation: "دالة useFieldArray تدير مصفوفة الحقول بدقة عبر دمج الفهارس items.${index}.field وتوليد معرف ثابت field.id يمنع اختلاط قيم الحقول عند حذف أي عنصر وسطي.",
      commonMistakes: [
        {
          mistake: "استخدام الفهرس index كمفتاح في map بدلاً من field.id: <div key={index}>.",
          fix: "استخدم دائماً <div key={field.id}>.",
          reason: "استخدام index كمفتاح يسبب خطأ خطيراً: عند حذف عنصر وسطي، ستحذف React العنصر الأخير بصرياً وتترك العنصر المحذوف في مكانه!"
        }
      ],
      bestPractices: [
        "استخدم دالة append لإضافة عناصر جديدة بنقاء وسرعة فائقة.",
        "احرص دائماً على تسجيل الحقول بصيغة النقاط: arrayName.${index}.propertyName."
      ],
      infographicCard: {
        title: "هندسة الحقول الديناميكية useFieldArray",
        points: [
          "مفتاح مستقر: استخدام field.id الإلزامي لمنع اختلاط الحقول عند الحذف.",
          "دوال العمليات: append (إضافة)، remove (حذف)، swap (تبديل).",
          "صيغة التسمية المعيارية: items.${index}.name للتكامل مع المحرك."
        ]
      }
    },
    {
      id: "8.3.j",
      title: "بناء نموذج تسجيل متعدد الخطوات",
      englishTerm: "Building Multi-Step Wizard Forms",
      description: "المعمارية المتقدمة لإنشاء نماذج التسجيل والطلبات متعددة الخطوات (Multi-Step Form Wizard / Stepper). يتضمن ذلك تقسيم الاستمارة الضخمة إلى خطوات منطقية صغيرة (مثل: الخطوة 1: الحساب، الخطوة 2: العنوان، الخطوة 3: الدفع والمراجعة)، مع الحفاظ على البيانات السابقة أثناء التنقل، والتحقق فقط من حقول الخطوة الحالية عبر trigger(['field1', 'field2']) قبل السماح بالانتقال للخطوة التالية.",
      realLifeAnalogy: "مثل مسار إنهاء إجراءات السفر في المطار؛ الخطوة الأولى هي تسجيل الأمتعة، الخطوة الثانية هي التفتيش الأمني، والخطوة الثالثة هي ختم الجوازات؛ لا يمكنك الانتقال من التفتيش لختم الجوازات دون اجتياز مرحلة الأمتعة أولاً.",
      whyItMatters: "عرض استمارة تحتوي على 30 حقلاً في صفحة واحدة يصيب المستخدم بالصدمة والإرهاق النفسي (Cognitive Overload). تقسيمها لخطوات مرحلية يرفع معدل إكمال الاستمارات (Conversion Rate) بنسبة تزيد عن 40%.",
      syntax: "const [step, setStep] = useState(1);\n// فحص حقول الخطوة الحالية فقط قبل الانتقال:\nconst isStepValid = await trigger(['name', 'email']);\nif (isStepValid) setStep(step + 1);",
      simpleExample: `// هيكل مبسط لنموذج متعدد الخطوات
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function StepWizardSimple() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, trigger } = useForm();

  // الانتقال للخطوة التالية بعد فحص حقول الخطوة الأولى فقط
  const nextStep = async () => {
    const valid = await trigger(["username"]);
    if (valid) setStep(2);
  };

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      {step === 1 && (
        <div>
          <input {...register("username", { required: true })} placeholder="اسم المستخدم" />
          <button type="button" onClick={nextStep}>التالي</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <input {...register("email", { required: true })} placeholder="البريد" />
          <button type="button" onClick={() => setStep(1)}>السابق</button>
          <button type="submit">تأكيد</button>
        </div>
      )}
    </form>
  );
}
`,
      advancedExample: `// معالج تسجيل احترافي كامل 3 خطوات مع مؤشر تقدم وشاشة مراجعة نهائية
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function MultiStepRegistrationWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      accountType: "personal",
      email: "",
      password: "",
      city: "الرياض",
      phone: ""
    }
  });

  // فحص حقول الخطوة الحالية المحددة فقط
  const handleNext = async () => {
    let fieldsToValidate = [];
    if (currentStep === 1) fieldsToValidate = ["email", "password"];
    if (currentStep === 2) fieldsToValidate = ["city", "phone"];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setCurrentStep((s) => s + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep((s) => s - 1);
  };

  const onFinalSubmit = (data) => {
    alert("تهانينا! تم إرسال كافة خطوات النموذج بنجاح:\n" + JSON.stringify(data, null, 2));
  };

  const formData = getValues();

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-5">
      {/* ترويسة ومؤشر التقدم بين الخطوات */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-indigo-400">
            الخطوة {currentStep} من {totalSteps}
          </span>
          <span className="text-[10px] font-mono text-slate-400">
            {Math.round((currentStep / totalSteps) * 100)}% مكتمل
          </span>
        </div>
        <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
          <div
            className="h-full bg-indigo-600 transition-all duration-300"
            style={{ width: \`\${(currentStep / totalSteps) * 100}%\` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onFinalSubmit)} className="space-y-4 text-xs">
        {/* الخطوة 1: بيانات الحساب والأمان */}
        {currentStep === 1 && (
          <div className="space-y-3 animate-fadeIn">
            <h5 className="font-bold text-sm text-slate-200">الخطوة 1: بيانات الحساب 🔑</h5>
            <div>
              <label className="text-slate-300 block mb-1">البريد الإلكتروني:</label>
              <input
                {...register("email", {
                  required: "البريد الإلكتروني إلزامي",
                  pattern: { value: /\\S+@\\S+\\.\\S+/, message: "بريد غير صالح" }
                })}
                placeholder="user@example.com"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
              />
              {errors.email && <p className="text-rose-400 text-[10px] mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-slate-300 block mb-1">كلمة المرور:</label>
              <input
                type="password"
                {...register("password", {
                  required: "كلمة المرور إلزامية",
                  minLength: { value: 6, message: "6 أحرف على الأقل" }
                })}
                placeholder="••••••"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
              />
              {errors.password && <p className="text-rose-400 text-[10px] mt-1">{errors.password.message}</p>}
            </div>
          </div>
        )}

        {/* الخطوة 2: معلومات التواصل والموقع */}
        {currentStep === 2 && (
          <div className="space-y-3 animate-fadeIn">
            <h5 className="font-bold text-sm text-slate-200">الخطوة 2: العنوان والتواصل 📍</h5>
            <div>
              <label className="text-slate-300 block mb-1">المدينة:</label>
              <input
                {...register("city", { required: "يرجى تحديد المدينة" })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
              />
              {errors.city && <p className="text-rose-400 text-[10px] mt-1">{errors.city.message}</p>}
            </div>

            <div>
              <label className="text-slate-300 block mb-1">رقم الجوال:</label>
              <input
                {...register("phone", {
                  required: "رقم الجوال إلزامي",
                  pattern: { value: /^05\\d{8}$/, message: "يجب أن يبدأ بـ 05 ويتكون من 10 أرقام" }
                })}
                placeholder="05XXXXXXXX"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
              />
              {errors.phone && <p className="text-rose-400 text-[10px] mt-1">{errors.phone.message}</p>}
            </div>
          </div>
        )}

        {/* الخطوة 3: المراجعة النهائية والتأكيد */}
        {currentStep === 3 && (
          <div className="space-y-3 animate-fadeIn">
            <h5 className="font-bold text-sm text-emerald-400">الخطوة 3: المراجعة والتأكيد النهائي 📝</h5>
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-400">البريد الإلكتروني:</span>
                <span className="font-mono text-slate-200">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">المدينة:</span>
                <span className="text-slate-200">{formData.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">رقم الهاتف:</span>
                <span className="font-mono text-slate-200">{formData.phone}</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400">
              بالضغط على تأكيد التسجيل، سيتم حفظ حسابك والانتقال إلى لوحة التحكم.
            </p>
          </div>
        )}

        {/* أزرار التنقل بين الخطوات */}
        <div className="flex gap-2 pt-2">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold transition-all"
            >
              السابق
            </button>
          )}

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all"
            >
              التالي ➔
            </button>
          ) : (
            <button
              type="submit"
              className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-md shadow-emerald-900/30"
            >
              تأكيد التسجيل النهائي ✓
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
`,
      outputExplanation: "من خلال استخدام دالة trigger(['fieldName']) التابعة لـ React Hook Form، يتم فحص الحقول المعروضة في الخطوة الحالية فقط دون منع الانتقال بسبب حقول الخطوات اللاحقة التي لم تظهر للمستخدم بعد.",
      commonMistakes: [
        {
          mistake: "محاولة استدعاء handleSubmit للانتقال للخطوة التالية، مما يرفض الانتقال لأن حقول الخطوة الأخيرة فارغة.",
          fix: "استخدم دالة trigger(['currentStepField']) لفحص حقول الخطوة الحالية فقط قبل زيادة رقم الخطوة.",
          reason: "دالة handleSubmit تفحص النموذج بالكامل من أول حقل لآخر حقل وترفض الإرسال إذا كان أي حقل إلزامي فارغاً."
        }
      ],
      bestPractices: [
        "استخدم شريط تقدم مرئي يوضح للمستخدم نسبة الإكمال ورقم الخطوة الحالية.",
        "وفر خطوة مراجعة نهائية (Review Step) تتيح للمستخدم قراءة ملخص بياناته قبل الإرسال النهائي."
      ],
      infographicCard: {
        title: "معمارية النماذج متعددة الخطوات Multi-Step Wizard",
        points: [
          "تقسيم مرحلي: تقليل العبء الذهني وتوزيع الحقول على شاشات.",
          "دالة trigger: فحص انتقائي لحقول الخطوة الحالية فقط قبل التقدم.",
          "شاشة المراجعة: عرض ملخص شامل للبيانات قبل الإرسال النهائي."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q8-3-1",
      question: "لماذا تقدم مكتبة React Hook Form أداءً أسرع بكثير من إدارة النماذج بـ useState في النماذج الكبيرة؟",
      options: [
        "لأنها مكتوبة بلغة C++ وتعمل خارج متصفح الويب",
        "لأنها تعتمد على المكونات غير المضبوطة والمراجع (Refs) فلا تعيد تصيير المكون مع كل ضغطة مفتاح",
        "لأنها تحذف ملفات CSS تلقائياً عند تحميل الصفحة",
        "لأنها تجبر المتصفح على تشغيل النموذج على خادم بعيد"
      ],
      correctAnswer: 1,
      explanation: "تعتمد React Hook Form على Refs للوصول المباشر لعناصر DOM، مما يعزل تحديثات الإدخال ويمنع إعادة تصيير شجرة المكونات في كل حرف."
    },
    {
      id: "q8-3-2",
      question: "ما هو الدور الرئيسي لمكون Controller في مكتبة React Hook Form؟",
      options: [
        "إيقاف تشغيل الخادم عند حدوث أخطاء أمنية",
        "ربط مكتبات الواجهات الخارجية (مثل Select مخصص أو DatePicker) التي لا تدعم تمرير ref المباشر",
        "تنسيق الألوان والخطوط تلقائياً في صفحة الويب",
        "تخزين كلمات المرور في التخزين السحابي"
      ],
      correctAnswer: 1,
      explanation: "مكون Controller يعمل كجسر وسيط يمرر دوال وخصائص field لمكتبات ومكونات الطرف الثالث المعقدة التي لا تقبل {...register()} بصورة مباشرة."
    },
    {
      id: "q8-3-3",
      question: "كيف نتأكد من صلاحية حقول خطوة معينة فقط قبل الانتقال للخطوة التالية في النماذج متعددة الخطوات؟",
      options: [
        "باستدعاء دالة window.location.reload()",
        "باستخدام دالة trigger(['field1', 'field2']) المخصصة لفحص حقول محددة مسبقاً",
        "بحذف باقي الحقول من ملف JavaScript نهائياً",
        "بالاعتماد على دالة setTimeout فقط"
      ],
      correctAnswer: 1,
      explanation: "دالة trigger تتيح لك تشغيل الفحص البرمجي لقائمة محددة من أسماء الحقول وإرجاع boolean يدل على سلامتها قبل الانتقال للخطوة التالية."
    }
  ],
  exercise: {
    id: "ex8-3",
    title: "بناء استمارة منتج ديناميكية باستخدام React Hook Form و Zod",
    description: "المطلوب بناء نموذج لإضافة منتج يضم: اسم المنتج (مطلوب، 3 أحرف على الأقل)، السعر (رقم إيجابي أكبر من صفر)، وقائمة وسوم ديناميكية (Dynamic Tags) عبر useFieldArray لإضافة وحذف الوسوم. يجب التحقق من الحقول باستخدام مخطط Zod و zodResolver.",
    starterCode: `import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// 1. عرف مخطط Zod للمنتج
// 2. أنشئ النموذج بـ useForm ومخطط Zod
// 3. استخدم useFieldArray لقائمة الوسوم tags
// 4. اعرض الأخطاء وزر إضافة الوسوم

export function DynamicProductForm() {
  return (
    <form className="p-4 text-white">
      {/* استمارة المنتج هنا */}
    </form>
  );
}`,
    hints: [
      "مخطط Zod: z.object({ title: z.string().min(3), price: z.coerce.number().positive(), tags: z.array(z.object({ name: z.string().min(1) })) }).",
      "استخدم useFieldArray({ control, name: 'tags' }).",
      "استخدم key={field.id} دائماً عند عمل map للوسوم."
    ],
    solution: `import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// 1. تعريف مخطط Zod
const ProductSchema = z.object({
  title: z.string().min(3, "اسم المنتج يجب أن يتكون من 3 أحرف على الأقل"),
  price: z.coerce.number().positive("السعر يجب أن يكون رقماً أكبر من صفر"),
  tags: z.array(
    z.object({
      name: z.string().min(1, "اسم الوسم مطلوب")
    })
  )
});

export function DynamicProductForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      title: "",
      price: 0,
      tags: [{ name: "إلكترونيات" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags"
  });

  const onSubmit = (data) => {
    alert("تم حفظ المنتج بنجاح مع وسومه:\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <h4 className="font-bold text-sm text-indigo-400">إضافة منتج مع وسوم ديناميكية</h4>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">اسم المنتج:</label>
          <input
            {...register("title")}
            placeholder="مثال: شاشة ألعاب 4K"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
          {errors.title && <p className="text-rose-400 text-[10px] mt-1 font-bold">✕ {errors.title.message}</p>}
        </div>

        <div>
          <label className="text-slate-300 block mb-1">السعر (ر.س):</label>
          <input
            type="number"
            {...register("price")}
            placeholder="1200"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
          {errors.price && <p className="text-rose-400 text-[10px] mt-1 font-bold">✕ {errors.price.message}</p>}
        </div>

        <div className="space-y-2 pt-1">
          <div className="flex justify-between items-center">
            <label className="text-slate-300 font-bold">وسوم المنتج (Tags):</label>
            <button
              type="button"
              onClick={() => append({ name: "" })}
              className="text-indigo-400 hover:text-indigo-300 text-[11px] font-bold"
            >
              + إضافة وسم
            </button>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 items-center">
              <input
                {...register(\`tags.\${index}.name\`)}
                placeholder="اسم الوسم..."
                className="flex-1 px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none"
              />
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-rose-400 hover:text-rose-300 text-xs px-2 py-1 bg-slate-800 rounded-lg"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30"
        >
          حفظ المنتج في المتجر 🚀
        </button>
      </form>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة منظومة React Hook Form و Zod",
    description: "الدليل المرئي الشامل للمكتبات المعيارية لإدارة النماذج والتحقق عالي الأداء.",
    sections: [
      {
        heading: "1. ركائز الأداء (Performance Pillars)",
        bullets: [
          "المكونات غير المضبوطة (Refs): سرعة 60fps دون رندرات متكررة.",
          "register: دمج التسمية والمراجع ومعالجات الأحداث في سطر واحد.",
          "handleSubmit: التحقق المسبق ونقل التركيز التلقائي للخطأ."
        ]
      },
      {
        heading: "2. المخططات الصارمة (Zod Schema)",
        bullets: [
          "zodResolver: تحويل أخطاء المخطط تلقائياً إلى formState.errors.",
          "Type Inference: استخراج أنواع TypeScript بـ z.infer.",
          "z.coerce: تحويل الأنواع الرقمية تلقائياً من حقول الإدخال."
        ]
      },
      {
        heading: "3. الحقول المتقدمة والأنماط (Advanced Patterns)",
        bullets: [
          "Controller: دمج مكتبات الواجهات مثل Radix و shadcn/ui.",
          "useFieldArray: إدارة القوائم الديناميكية مع مفاتيح field.id المستقرة.",
          "trigger: بناء النماذج متعددة الخطوات وفحص الخطوة الحالية فقط."
        ]
      }
    ]
  }
};
