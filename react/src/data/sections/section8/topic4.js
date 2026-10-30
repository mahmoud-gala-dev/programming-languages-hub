// src/data/sections/section8/topic4.js
// الموضوع 4: نماذج React الحديثة (React 19 Form Actions, useActionState, useFormStatus & Optimistic UI)

export const SECTION_8_TOPIC_4 = {
  id: "8.4",
  title: "نماذج React الحديثة",
  englishTerm: "Modern React 19 Form Actions & Hooks",
  description: "الثورة الأحدث في منظومة React 19 لإدارة النماذج: مفهوم Form Actions المدمج، تمرير دوال async مباشرة لخاصية action، خطاف useActionState لإدارة الحالة التلقائية، خطاف useFormStatus لقراءة حالة الإرسال في المكونات الفرعية بدون Props Drilling، التحديثات المتفائلة بـ useOptimistic، والمقارنة المعمارية بين Form Actions والمعالجة التقليدية.",
  subtopics: [
    {
      id: "8.4.a",
      title: "مفهوم Form Actions",
      englishTerm: "The Form Actions Paradigm in React 19",
      description: "المفهوم الهندسي الجديد للـ Form Actions في إصدار React 19. تتيح لك خاصية action={myAction} في عنصر <form> تمرير دالة غير متزامنة (Async Function) تقبل كائن FormData مباشرة. تتكفل React تلقائياً باعتراض حدث الإرسال، ومنع إعادة تحميل الصفحة (Automatic preventDefault)، وإعادة تعيين النموذج بعد النجاح، مع إدارة حالات الانتظار (Transitions) بسلاسة مذهلة دون الحاجة لكتابة onSubmit يدوياً.",
      realLifeAnalogy: "مثل خدمة التوصيل الحديثة الشاملة؛ بدلاً من أن تذهب لمحطة الوقود، وتشتري الكرتون، وتلصق الطابع البريدي بنفسك، تضع الطلب في الصندوق المخصص عند باب منزلك، فتأتي الشركة وتتولى كافة الإجراءات تلقائياً في ثوانٍ.",
      whyItMatters: "ينهي هذا النمط عهد كتابة event.preventDefault() المتكررة في كل نموذج، ويوحد طريقة التعامل مع النماذج في جانب العميل (Client) وجانب الخادم (Server Actions) في أطر العمل الحديثة مثل Next.js.",
      syntax: "async function updateNameAction(formData) {\n  const name = formData.get('userName');\n  await api.update(name);\n}\n\n<form action={updateNameAction}>...</form>",
      simpleExample: `// نموذج React 19 حديث يعتمد على Form Action البحت
import React from "react";

export function SimpleActionForm() {
  // دالة الإجراء تستقبل كائن FormData القياسي تلقائياً
  async function submitAction(formData) {
    // استخراج قيمة الحقل بواسطة اسم الحقل البرمجي
    const enteredEmail = formData.get("userEmail");
    // طباعة القيمة المستخرجة
    console.log("تم استلام البريد عبر Form Action:", enteredEmail);
  }

  return (
    // تمرير دالة الإجراء مباشرة لخاصية action بدلاً من onSubmit
    <form action={submitAction}>
      <input type="email" name="userEmail" placeholder="بريدك الإلكتروني" required />
      <button type="submit">إرسال تلقائي</button>
    </form>
  );
}
`,
      advancedExample: `// نموذج تحديث الملف الشخصي بـ Form Action مع معالجة البيانات دون أي useState
import React, { useState } from "react";

export function ModernProfileActionCard() {
  const [lastUpdated, setLastUpdated] = useState("خالد السبيعي");

  // إجراء غير متزامن لتحديث الاسم
  async function handleUpdateProfile(formData) {
    const newName = formData.get("displayName");
    // محاكاة تأخير الشبكة
    await new Promise((res) => setTimeout(res, 800));
    setLastUpdated(newName);
  }

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">إجراءات النماذج (React 19 Form Actions)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          action={"{asyncFn}"}
        </span>
      </div>

      <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-xs flex justify-between">
        <span className="text-slate-400">الاسم الحالي في الخادم:</span>
        <span className="font-bold text-emerald-400 font-mono">{lastUpdated}</span>
      </div>

      {/* تمرير الإجراء مباشرة لـ action */}
      <form action={handleUpdateProfile} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">الاسم الجديد:</label>
          <input
            type="text"
            required
            name="displayName"
            defaultValue={lastUpdated}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30"
        >
          تحديث الاسم عبر Action ⚡
        </button>
      </form>
    </div>
  );
}
`,
      outputExplanation: "لا توجد أي حاجة لـ e.preventDefault()؛ تعترض React حدث الإرسال تلقائياً وتجهز كائن FormData بكافة الحقول التي تحمل خاصية name وتمررها للإجراء.",
      commonMistakes: [
        {
          mistake: "نسيان وضع خاصية name على حقول الإدخال عند استخدام Form Actions.",
          fix: "تأكد من وجود خاصية name فريدة لكل حقل: <input name='email' />.",
          reason: "يعتمد كائن FormData القياسي في المتصفح على خاصية name حصراً لقراءة القيمة عبر formData.get('name')."
        }
      ],
      bestPractices: [
        "اجعل دوال الـ Actions دوالاً غير متزامنة async دائماً لانتظار عمليات الشبكة وقواعد البيانات.",
        "استخدم خاصية defaultValue بدلاً من value في النماذج المعتمدة على Form Actions."
      ],
      infographicCard: {
        title: "جوهر Form Actions في React 19",
        points: [
          "خاصية action تقبل دوال JavaScript غير متزامنة async مباشرة.",
          "منع تلقائي لإعادة تحميل الصفحة (Auto-preventDefault).",
          "استلام كائن FormData المعياري كمعامل أول."
        ]
      }
    },
    {
      id: "8.4.b",
      title: "استخدام Actions مع النماذج",
      englishTerm: "Form Actions Integration & Button Form Action",
      description: "استخدام الإجراءات المتعددة مع النموذج الواحد وخاصية formAction على الأزرار. في React 19، لا يقتصر الإجراء على وسم <form action={...}> فقط، بل يمكن لأي زر <button formAction={differentAction}> أن يوجه بيانات النموذج إلى إجراء مختلف تماماً (مثل: زر 'حفظ كمسودة' وزر 'نشر فوري').",
      realLifeAnalogy: "مثل صندوق المعاملات الذي يحتوي على فتحتين؛ إذا وضعت الورقة في الفتحة الخضراء تذهب للموافقة الفورية، وإذا وضعتها في الفتحة الزرقاء تذهب للحفظ في الأرشيف المؤقت.",
      whyItMatters: "سابقاً كان المطورون يضطرون لتعريف حالات وسيطة لمعرفة أي زر تم الضغط عليه داخل onSubmit. خاصية formAction تلغي هذا التعقيد وتسمح لكل زر بتنفيذ إجراء مخصص ومستقل بوضوح.",
      syntax: "<form action={publishAction}>\n  <button type=\"submit\">نشر</button>\n  <button formAction={saveDraftAction}>حفظ كمسودة</button>\n</form>",
      simpleExample: `// نموذج يحتوي على زرين بإجراءين مختلفين
import React from "react";

export function MultiActionDemo() {
  async function publishAction(formData) {
    console.log("نشر المقال:", formData.get("title"));
  }

  async function saveDraftAction(formData) {
    console.log("حفظ كمسودة في الأرشيف:", formData.get("title"));
  }

  return (
    <form action={publishAction}>
      <input name="title" placeholder="عنوان المقال..." required />
      {/* هذا الزر ينفذ الإجراء الرئيسي للنموذج */}
      <button type="submit">نشر رسمي</button>
      {/* هذا الزر يتجاوز إجراء النموذج وينفذ إجراء المسودة */}
      <button formAction={saveDraftAction}>حفظ كمسودة</button>
    </form>
  );
}
`,
      advancedExample: `// استمارة تدوين متطورة تدعم النشر المباشر أو الجدولة الزمنية بـ formAction
import React, { useState } from "react";

export function ArticleActionDispatcher() {
  const [resultStatus, setResultStatus] = useState("");

  async function handlePublish(formData) {
    const title = formData.get("articleTitle");
    setResultStatus(\`🚀 تم نشر المقال: "\${title}" بنجاح للجمهور.\`);
  }

  async function handleSchedule(formData) {
    const title = formData.get("articleTitle");
    setResultStatus(\`⏰ تم جدولة المقال: "\${title}" للنشر التلقائي غداً صباحاً.\`);
  }

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">تعدد الإجراءات (formAction on Buttons)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Multi-Action Button
        </span>
      </div>

      <form action={handlePublish} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">عنوان المقال التقني:</label>
          <input
            type="text"
            required
            name="articleTitle"
            placeholder="مستقبل React 19 والـ Actions..."
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="submit"
            className="py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-md shadow-emerald-900/30"
          >
            نشر فوري الآن 🚀
          </button>
          <button
            type="submit"
            formAction={handleSchedule}
            className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl font-bold transition-all"
          >
            جدولة للنشر ⏰
          </button>
        </div>
      </form>

      {resultStatus && (
        <div className="p-3 bg-slate-950 rounded-xl border border-indigo-500/40 text-xs text-indigo-300 animate-fadeIn text-center">
          {resultStatus}
        </div>
      )}
    </div>
  );
}
`,
      outputExplanation: "خاصية formAction على الزر الثاني تتجاوز خاصية action المعرفة على وسم form الأب، وتوجه بيانات كائن FormData مباشرة إلى دالة handleSchedule دون أي تضارب.",
      commonMistakes: [
        {
          mistake: "نسيان تحديد type='submit' على الزر الذي يحمل خاصية formAction.",
          fix: "تأكد من أن الزر إما يحمل type='submit' أو اتركه بدون type ليكون افتراضياً submit.",
          reason: "الزر من نوع type='button' لا يطلق أي إرسال للنموذج وبالتالي لن يتم تفعيل formAction."
        }
      ],
      bestPractices: [
        "استخدم formAction للأزرار الثانوية (مثل الحفظ المؤقت أو التصدير كملف PDF).",
        "احرص على تسمية دوال الإجراءات بأسماء واضحة تصف ما تفعله بالضبط."
      ],
      infographicCard: {
        title: "تعدد الإجراءات في React 19",
        points: [
          "<form action={mainAction}>: الإجراء الافتراضي للنموذج.",
          "<button formAction={customAction}>: إجراء بديل مخصص لهذا الزر.",
          "توجيه نفس كائن FormData للإجراء المختار تلقائياً."
        ]
      }
    },
    {
      id: "8.4.c",
      title: "استخدام useActionState",
      englishTerm: "State Management with useActionState Hook",
      description: "الخطاف القياسي الثوري في React 19: خطاف useActionState (الذي كان يُعرف تجريبياً بـ useFormState). يربط هذا الخطاف دالة الإجراء بحالة الاستجابة المعادة منها، ويرجع 3 عناصر: 1) الحالة الحالية المحدثة من الإجراء (state)، 2) دالة الإجراء المغلفة (formAction) لتمريرها للنموذج، و 3) مؤشر التحميل التلقائي (isPending) لمراقبة سير العملية.",
      realLifeAnalogy: "مثل شاشة عرض التذاكر في صالة الانتظار؛ تسلم الموظف طلبك (Action)، فتتحول الشاشة إلى وضع الانتظار (isPending = true)، وبمجرد معالجة الطلب تعرض الشاشة رقم حسابك الجديد أو رسالة الخطأ (state).",
      whyItMatters: "يختصر خطاف useActionState كل ما كنا نكتبه يدوياً: (حالة البيانات، حالة التحميل، وحالة الأخطاء) في استدعاء واحد فائق الأناقة دون الحاجة لأي مكتبة خارجية.",
      syntax: "const [state, formAction, isPending] = useActionState(async (prevState, formData) => {\n  const res = await apiCall(formData);\n  return res;\n}, initialValue);",
      simpleExample: `// استخدام useActionState لإدارة تحديث البيانات والتحميل
import React, { useActionState } from "react";

// دالة الإجراء تستقبل الحالة السابقة وكائن FormData
async function updateBioAction(previousState, formData) {
  const newBio = formData.get("bioText");
  // محاكاة طلب شبكة يستغرق ثانية
  await new Promise((r) => setTimeout(r, 1000));
  // القيمة المعادة تصبح هي الحالة الجديدة تلقائياً
  return { bio: newBio, time: new Date().toLocaleTimeString() };
}

export function BioActionStateDemo() {
  // استخدام خطاف useActionState
  const [state, formAction, isPending] = useActionState(updateBioAction, {
    bio: "مطور مبتدئ",
    time: "الآن"
  });

  return (
    <form action={formAction}>
      <p>النبذة الحالية: {state.bio} (تم التحديث: {state.time})</p>
      <input name="bioText" placeholder="اكتب نبذة جديدة..." required />
      <button type="submit" disabled={isPending}>
        {isPending ? "جارٍ الحفظ..." : "حفظ النبذة"}
      </button>
    </form>
  );
}
`,
      advancedExample: `// لوحة تسجيل دخول متكاملة تعتمد على useActionState مع كشف الأخطاء وإدارة التحميل
import React, { useActionState } from "react";

// إجراء تسجيل الدخول المحاكي
async function loginAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // محاكاة تأخير التحقق
  await new Promise((r) => setTimeout(r, 1200));

  if (email === "demo@react.dev" && password === "secret123") {
    return { success: true, user: "فهد العتيبي", error: null };
  }

  return { success: false, user: null, error: "البريد الإلكتروني أو كلمة المرور غير صحيحة!" };
}

export function ActionStateLoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, {
    success: false,
    user: null,
    error: null
  });

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">إدارة الحالة بـ useActionState</h4>
        <span className={\`text-[10px] font-mono px-2 py-0.5 rounded font-bold \${
          isPending ? "bg-amber-950 text-amber-400" : "bg-indigo-950 text-indigo-300"
        }\`}>
          {isPending ? "جارٍ المعالجة ⏳" : "جاهز"}
        </span>
      </div>

      {state.success ? (
        <div className="p-5 bg-slate-950 border border-emerald-500/40 rounded-2xl text-center space-y-2 animate-fadeIn">
          <div className="text-2xl">🎉</div>
          <h5 className="font-bold text-sm text-emerald-400">مرحباً بك مجدداً، {state.user}!</h5>
          <p className="text-xs text-slate-400">تم تسجيل دخولك بنجاح عبر خطاف useActionState.</p>
        </div>
      ) : (
        <form action={formAction} className="space-y-3 text-xs">
          <div>
            <label className="text-slate-300 block mb-1">البريد التجريبي (demo@react.dev):</label>
            <input
              type="email"
              required
              name="email"
              defaultValue="demo@react.dev"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-slate-300 block mb-1">كلمة المرور (secret123):</label>
            <input
              type="password"
              required
              name="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          {state.error && (
            <p className="text-rose-400 text-[11px] font-bold">✕ {state.error}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/30"
          >
            {isPending ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>جارٍ التحقق المشفر...</span>
              </>
            ) : (
              <span>تسجيل الدخول الآمن 🔒</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
`,
      outputExplanation: "يوفر useActionState دالة formAction لتمريرها للنموذج، ويدير قيمة isPending تلقائياً طوال فترة تنفيذ دالة async، ويحدث كائن state بالنتيجة المعادة عند اكتمال الإجراء.",
      commonMistakes: [
        {
          mistake: "نسيان أن المعامل الأول لدالة الإجراء هو prevState وليس formData مباشرة.",
          fix: "اكتب دائماً توقيع الدالة هكذا: async (previousState, formData) => { ... }.",
          reason: "في useActionState، تضمن React تمرير الحالة السابقة كمعامل أول تماماً كدوال Reducer."
        }
      ],
      bestPractices: [
        "استغل متغير isPending لتعطيل الأزرار وإظهار مؤشرات الدوران البصرية.",
        "أرجع دائماً كائناً يحتوي على { data, error } لتسهيل عرض رسائل النجاح أو الأخطاء في الواجهة."
      ],
      infographicCard: {
        title: "ثلاثية خطاف useActionState",
        points: [
          "state: أحدث نتيجة معادة من دالة الـ Action.",
          "formAction: دالة الإجراء المغلفة لتمريرها لـ action={formAction}.",
          "isPending: مؤشر التحميل الحقيقي المدار تلقائياً من React."
        ]
      }
    },
    {
      id: "8.4.d",
      title: "استخدام useFormStatus",
      englishTerm: "Context-Free Status Tracking with useFormStatus",
      description: "الخطاف السحري useFormStatus في React 19. يتيح لأي مكون فرعي يعيش داخل وسم <form> معرفة حالة إرسال النموذج الأب دون الحاجة لتمرير أي خصائص (Props) ودون الحاجة لإنشاء React Context. يرجع هذا الخطاف كائناً يحتوي على: { pending, data, method, action }، مما يجعله مثالياً لبناء أزرار إرسال ذكية قابلة لإعادة الاستخدام (Reusable Submit Buttons).",
      realLifeAnalogy: "مثل زر طلب المصعد الكهربائي؛ بمجرد الضغط عليه، يضيء مصباح الزر الداخلي تلقائياً من نظام المصعد المركزي، دون الحاجة لمد سلك خاص من مقصورة المصعد إلى إصبعك.",
      whyItMatters: "سابقاً كان يجب تمرير isLoading كـ Prop من أعلى المكون لأسفله وصولاً لزر الإرسال (Props Drilling). خطاف useFormStatus يقرأ حالة النموذج الأب هوائياً في أي مستوى هرمي داخل الشجرة.",
      syntax: "import { useFormStatus } from 'react-dom';\n\nfunction SubmitButton() {\n  const { pending } = useFormStatus();\n  return <button disabled={pending}>{pending ? 'جارٍ الإرسال...' : 'إرسال'}</button>;\n}",
      simpleExample: `// بناء زر إرسال ذكي وقابل لإعادة الاستخدام بـ useFormStatus
import React from "react";
// استيراد الخطاف من حزمة react-dom
import { useFormStatus } from "react-dom";

// هذا المكون يعيش داخل <form> ويقرأ حالته تلقائياً!
export function SmartSubmitBtn({ label = "إرسال البيانات" }) {
  // قراءة حالة التحميل من النموذج الأب مباشرة
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "جارٍ الإرسال والمعالجة..." : label}
    </button>
  );
}
`,
      advancedExample: `// شاشة إنشاء ملاحظة سريعة مع زر إرسال ذكي متعدد الحالات
import React from "react";
import { useFormStatus } from "react-dom";

// مكون الزر الذكي المعزول بالكامل
function ElegantSubmitButton() {
  const { pending, data } = useFormStatus();
  // يمكننا حتى قراءة العنوان المكتوب أثناء الإرسال من كائن data!
  const noteTitle = data?.get("noteTitle");

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-900/30"
    >
      {pending ? (
        <>
          <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>جارٍ حفظ "{noteTitle || "الملاحظة"}"...</span>
        </>
      ) : (
        <span>حفظ الملاحظة فوراً 📝</span>
      )}
    </button>
  );
}

export function QuickNoteManager() {
  async function saveNoteAction(formData) {
    await new Promise((r) => setTimeout(r, 1500));
    alert("تم حفظ الملاحظة بنجاح: " + formData.get("noteTitle"));
  }

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">زر الإرسال المستقل (useFormStatus)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          No Props Drilling
        </span>
      </div>

      <form action={saveNoteAction} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">عنوان الملاحظة:</label>
          <input
            type="text"
            required
            name="noteTitle"
            placeholder="مثال: مراجعة كود React 19..."
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* المكون الذكي يُستدعى هنا كابن دون أي Props! */}
        <ElegantSubmitButton />
      </form>
    </div>
  );
}
`,
      outputExplanation: "يعمل useFormStatus بمثابة سياق خفي (Context) يربط المكون بالنموذج الأب الحاضن له؛ فيكتشف متى يبدأ الإجراء ومتى ينتهي بدقة متناهية.",
      commonMistakes: [
        {
          mistake: "استدعاء useFormStatus داخل نفس المكون الذي يحتوي على وسم <form>.",
          fix: "استدعِ useFormStatus داخل مكون فرعي (Child Component) يعيش داخل <form>.",
          reason: "القاعدة الصارمة لـ useFormStatus: لا يمكنه قراءة حالة نموذج معرف في نفس المكون، بل يجب أن يكون داخل مكون ابن موضوع بين وسمي <form>...</form>."
        }
      ],
      bestPractices: [
        "استورد الخطاف من react-dom وليس من react الأساسية: import { useFormStatus } from 'react-dom'.",
        "ابنِ مكون زر إرسال موحد SubmitButton في مجلد المكونات المشتركة ليعاد استخدامه في كافة نماذج المشروع."
      ],
      infographicCard: {
        title: "قواعد خطاف useFormStatus",
        points: [
          "يستورد من react-dom حصراً.",
          "يجب أن يُستدعى داخل مكون فرعي يعيش كابن لـ <form>.",
          "يرجع: { pending, data, method, action } دون أي Props."
        ]
      }
    },
    {
      id: "8.4.e",
      title: "التعامل مع Pending States",
      englishTerm: "Pending States & Concurrency in Form Actions",
      description: "إدارة وتنسيق حالات الانتظار (Pending States) والتزامن في React 19. تعتمد Form Actions على معمارية Transitions المدمجة في React، مما يعني أن واجهة المستخدم تظل حية وتفاعلية بالكامل (Responsive) حتى أثناء انتظار استجابة السيرفر، مع إمكانية إلغاء الإجراء أو الانتقال لصفحة أخرى بسلاسة دون تجميد المتصفح.",
      realLifeAnalogy: "مثل قطار فائق السرعة يسير على مسار فرعي خاص؛ بينما القطار يسرع في طريقه، تظل محطة القطار الرئيسية ومحلاتها تعمل بحرية تامة وتستقبل الركاب دون أي توقف أو تعطيل للحركة العامة.",
      whyItMatters: "في التطبيقات القديمة، كانت طلبات الإرسال غير المتزامنة تجمد شاشة المستخدم أحياناً وتمنع النقر على القوائم. في React 19، يتم إرسال النماذج كـ Non-Blocking Transitions تضمن سلاسة حركة الواجهة بنسبة 100%.",
      syntax: "const [isPending, startTransition] = useTransition();\n// أو تلقائياً عبر useActionState:\nconst [state, formAction, isPending] = useActionState(...);",
      simpleExample: `// استخدام حالة الانتظار لتعطيل الحقول وتظليلها
import React, { useActionState } from "react";

async function sampleAction(prev, formData) {
  await new Promise((r) => setTimeout(r, 1000));
  return "تم الحفظ بنجاح!";
}

export function PendingOpacityDemo() {
  const [msg, formAction, isPending] = useActionState(sampleAction, "");

  return (
    <form action={formAction}>
      {/* تخفيف شفافية النموذج بالكامل أثناء الانتظار للإشارة لسير العملية */}
      <div style={{ opacity: isPending ? 0.6 : 1 }}>
        <input name="testInput" disabled={isPending} />
        <button type="submit" disabled={isPending}>حفظ</button>
      </div>
      {msg && <p>{msg}</p>}
    </form>
  );
}
`,
      advancedExample: `// لوحة تحكم بإعدادات متقدمة تدعم التظليل الذكي ومؤشر نبضات الانتظار
import React, { useActionState } from "react";

async function savePreferencesAction(prev, formData) {
  await new Promise((r) => setTimeout(r, 1400));
  return { savedAt: new Date().toLocaleTimeString() };
}

export function PendingStateShowcase() {
  const [state, formAction, isPending] = useActionState(savePreferencesAction, null);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">حالات الانتظار التزامنية (Pending States)</h4>
        <span className={\`text-[10px] font-mono px-2 py-0.5 rounded font-bold \${
          isPending ? "bg-amber-950 text-amber-400 animate-pulse" : "bg-emerald-950 text-emerald-400"
        }\`}>
          {isPending ? "قيد المعالجة (Transition)" : "مستقر (Idle)"}
        </span>
      </div>

      <form action={formAction} className="space-y-3 text-xs">
        <div className={\`space-y-3 transition-opacity duration-300 \${isPending ? "opacity-50 pointer-events-none" : "opacity-100"}\`}>
          <div>
            <label className="text-slate-300 block mb-1">اسم المشروع:</label>
            <input
              type="text"
              name="projectName"
              defaultValue="React 19 Enterprise App"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-slate-300 block mb-1">البيئة البرمجية:</label>
            <select
              name="env"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none"
            >
              <option value="prod">الإنتاج الحقيقي (Production)</option>
              <option value="staging">بيئة الاختبار (Staging)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30"
        >
          {isPending ? "جارٍ حفظ الإعدادات في السيرفر..." : "تطبيق الإعدادات ⚙️"}
        </button>
      </form>

      {state && (
        <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs text-center">
          ✓ تم تطبيق التغييرات بنجاح في الساعة: {state.savedAt}
        </div>
      )}
    </div>
  );
}
`,
      outputExplanation: "بفضل معمارية Transitions في React 19، يتم عزل عملية الإرسال في مسار غير حاجب، وتحديث الواجهة بمؤشر isPending دون أي وميض أو تجميد في استجابة الصفحة.",
      commonMistakes: [
        {
          mistake: "ترك الحقول قابلة للتعديل أثناء isPending مما قد يربك المستخدم.",
          fix: "استخدم pointer-events-none أو خاصية disabled={isPending} أثناء الإرسال.",
          reason: "تعديل النصوص أثناء نقل البيانات يسبب ارتباكاً حول القيمة التي تم إرسالها فعلياً للسيرفر."
        }
      ],
      bestPractices: [
        "استخدم فئات CSS مثل transition-opacity duration-200 لجعل تظليل الحقول انسيابياً ومريحاً للعين.",
        "احرص على ألا تمنع حالات الانتظار المستخدم من تصفح باقي عناصر الصفحة والقوائم الجانبية."
      ],
      infographicCard: {
        title: "التزامن وحالات الانتظار في React 19",
        points: [
          "Transitions غير حاجبة: الواجهة تظل حية بنسبة 60fps.",
          "تظليل الحقول: opacity-50 للإشارة البصرية لتقدم العملية.",
          "حماية البيانات: تجميد الحقول لمنع التعديل أثناء النقل."
        ]
      }
    },
    {
      id: "8.4.f",
      title: "التحديث المتفائل أثناء الإرسال",
      englishTerm: "Optimistic UI Updates with useOptimistic Hook",
      description: "بناء واجهات المستخدم المتفائلة (Optimistic UI) باستخدام خطاف useOptimistic الثوري في React 19. يقوم هذا الخطاف بعرض التعديل في الشاشة فوراً وبلمح البصر بمجرد ضغط المستخدم على زر الإرسال، 'متفائلاً' بنجاح الطلب قبل أن يرد السيرفر أصلاً! وإذا نجح طلب الخادم، تكتمل العملية بسلاسة، وإن فشل، تتراجع React تلقائياً وتلغي التعديل وتعيد الشاشة لحالتها الأصلية.",
      realLifeAnalogy: "مثل تطبيق WhatsApp؛ عندما ترسل رسالة، تظهر فقاعة المحادثة فوراً في الشاشة مع علامة صح رمادية واحدة قبل أن تصل لخوادم واتساب أصلاً، لكي تشعر بالسرعة الفائقة للتطبيق.",
      whyItMatters: "الانتظار لمدة ثانيتين لظهور تعليقك أو إعجابك يجعل التطبيق يبدو بطيئاً وثقيلاً. التحديث المتفائل يمنح المستخدم شعوراً بأن التطبيق يعمل بسرعة صفر ميلي ثانية (Zero Latency Experience).",
      syntax: "const [optimisticState, setOptimistic] = useOptimistic(\n  actualState,\n  (currentState, optimisticValue) => updateLogic(currentState, optimisticValue)\n);",
      simpleExample: `// استخدام useOptimistic لإضافة تعليق متفائل فوراً
import React, { useOptimistic, useState } from "react";

export function OptimisticCommentSnippet() {
  const [comments, setComments] = useState(["مقال رائع جداً!"]);

  // خطاف التحديث المتفائل
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (currentList, newComment) => [...currentList, \`\${newComment} (جارٍ الإرسال...)\`]
  );

  async function handleSend(formData) {
    const text = formData.get("comment");
    // تحديث الشاشة فوراً دون انتظار!
    addOptimisticComment(text);
    // انتظار استجابة السيرفر
    await new Promise((r) => setTimeout(r, 1500));
    // حفظ التعديل الحقيقي الدائم
    setComments((prev) => [...prev, text]);
  }

  return (
    <form action={handleSend}>
      {optimisticComments.map((c, i) => <p key={i}>{c}</p>)}
      <input name="comment" placeholder="اكتب تعليقك..." required />
      <button type="submit">إرسال متفائل</button>
    </form>
  );
}
`,
      advancedExample: `// محاكي قائمة مهام متفائلة مع إظهار شارة (إرسال فوري) والتراجع التلقائي
import React, { useState, useOptimistic } from "react";

export function OptimisticTaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "دراسة قواعد React 19", pending: false },
    { id: 2, text: "بناء مكون بـ useActionState", pending: false }
  ]);

  // خطاف التحديث المتفائل لإضافة المهمة للشاشة بلمح البصر
  const [optimisticTasks, setOptimisticTask] = useOptimistic(
    tasks,
    (current, newText) => [
      ...current,
      { id: Date.now(), text: newText, pending: true }
    ]
  );

  async function addTaskAction(formData) {
    const title = formData.get("taskTitle");
    if (!title.trim()) return;

    // 1. تحديث بصري فوري متفائل
    setOptimisticTask(title);

    // 2. محاكاة طلب الخادم
    await new Promise((r) => setTimeout(r, 1200));

    // 3. التحديث الحقيقي بعد رد السيرفر
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: title, pending: false }
    ]);
  }

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">التحديث المتفائل (useOptimistic)</h4>
        <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold">
          Zero Latency UI
        </span>
      </div>

      {/* قائمة المهام المتفائلة الحية */}
      <div className="space-y-2">
        {optimisticTasks.map((t) => (
          <div
            key={t.id}
            className={\`p-3 rounded-2xl border flex justify-between items-center text-xs transition-all \${
              t.pending
                ? "bg-slate-950/40 border-dashed border-amber-500/50 text-amber-300"
                : "bg-slate-950 border-slate-800 text-slate-100"
            }\`}
          >
            <span>{t.text}</span>
            {t.pending ? (
              <span className="text-[10px] font-mono text-amber-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>متفائل (جارٍ الحفظ)</span>
              </span>
            ) : (
              <span className="text-[10px] font-mono text-emerald-400">محفوظ ✓</span>
            )}
          </div>
        ))}
      </div>

      <form action={addTaskAction} className="flex gap-2 pt-2">
        <input
          type="text"
          name="taskTitle"
          required
          placeholder="اكتب مهمة جديدة ولاحظ ظهورها الفوري..."
          className="flex-1 px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30"
        >
          إضافة ➕
        </button>
      </form>
    </div>
  );
}
`,
      outputExplanation: "بمجرد ضغط زر الإضافة، تظهر المهمة الجديدة في القائمة بشارة صفراء فوراً (صفر ميلي ثانية تأخير)؛ وبعد 1.2 ثانية عندما ينتهي طلب السيرفر، تتحول تلقائياً إلى الحالة الخضراء المحفوظة الدائمة.",
      commonMistakes: [
        {
          mistake: "استدعاء دالة setOptimistic خارج نطاق دالة الـ Action أو Transition.",
          fix: "استدعِ دالة التحديث المتفائل حصراً داخل دالة action أو داخل كتلة startTransition.",
          reason: "خطاف useOptimistic مصمم ليرتبط بدورة حياة الـ Transition فقط، واستدعاؤه خارجها يطلق خطأ برمجياً."
        }
      ],
      bestPractices: [
        "ميز العناصر المتفائلة بصرياً (مثل لون باهت أو إطار متقطع) لإعلام المستخدم بأنها قيد المزامنة.",
        "احرص على معالجة أخطاء السيرفر بـ try/catch لإظهار رسالة تنبيه للمستخدم في حال فشل التحديث والتراجع عن التغيير."
      ],
      infographicCard: {
        title: "معمارية الواجهات المتفائلة useOptimistic",
        points: [
          "1. نقرة المستخدم: عرض النتيجة فوراً في الشاشة (0ms Delay).",
          "2. طلب السيرفر: إرسال البيانات بهدوء في الخلفية.",
          "3. التثبيت أو التراجع: نجاح العملية يثبت البيانات، وفشلها يتراجع للأصل تلقائياً."
        ]
      }
    },
    {
      id: "8.4.g",
      title: "المقارنة بين Form Actions والمعالجة التقليدية",
      englishTerm: "Form Actions vs Traditional onSubmit Architectural Matrix",
      description: "مصفوفة المقارنة المعمارية والقرار الهندسي: متى تستخدم Form Actions الحديثة في React 19، ومتى تفضل استخدام النمط التقليدي (onSubmit + useState)، ومتى تعتمد على مكتبات إدارة النماذج الضخمة (React Hook Form + Zod). يقدم هذا المحور دليلاً شاملاً لاختيار الأداة المناسبة وفق حجم المشروع ومتطلبات الأداء.",
      realLifeAnalogy: "مثل الاختيار بين وسائل المواصلات؛ الدراجة الهوائية (useState) مناسبة للمسافات القصيرة جداً، والسيارة الكهربائية الذكية (React 19 Form Actions) مثالية للمدينة وللرحلات اليومية السلسة، والقطار السريع فائق الحمولة (React Hook Form + Zod) ضروري لنقل مئات الركاب لمسافات طويلة.",
      whyItMatters: "لا توجد أداة واحدة تناسب كافة السيناريوهات. اختيار الأداة الخاطئة يكلف فريق العمل أسابيع من إعادة كتابة الكود أو يتسبب في بطء مفرط في الواجهات المعقدة.",
      syntax: "// القرار الهندسي:\n// نماذج بسيطة إلى متوسطة: React 19 Form Actions\n// نماذج ضخمة جداً (50+ حقل وفواتير وديناميكية): React Hook Form\n// نماذج سريعة وبسيطة جداً (حقل بحث واحد): useState",
      simpleExample: `// مقارنة شكل الكود بين النمطين
// 1. النمط التقليدي القديم (الكثير من الأسطر اليدوية):
function OldWay() {
  const [val, setVal] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await api(val);
    setLoading(false);
  };
  return <form onSubmit={handleSubmit}>...</form>;
}

// 2. نمط React 19 الحديث (نظيف ومدمج تلقائياً):
function ModernWay() {
  const [state, formAction, isPending] = useActionState(async (prev, fd) => {
    return await api(fd.get("val"));
  }, null);
  return <form action={formAction}>...</form>;
}
`,
      advancedExample: `// بطاقة مصفوفة المقارنة الهندسية الشاملة للاختيار المعماري
import React from "react";

export function ArchitecturalFormComparisonCard() {
  const matrix = [
    {
      approach: "React 19 Form Actions",
      bestFor: "تطبيقات الويب الحديثة، Full-Stack، والنماذج العادية إلى المتوسطة",
      pros: "بدون أي مكتبات إضافية، دعم Transitions تلقائي، منع preventDefault مدمج، دعم SSR و Server Actions.",
      cons: "تتطلب React 19+، وتحتاج لكتابة دوال فحص مخصصة إذا لم تدمج مع مكتبة تدقيق."
    },
    {
      approach: "React Hook Form + Zod",
      bestFor: "النماذج المؤسسية الضخمة (Enterprise)، الاستمارات متعددة الخطوات، والفواتير الديناميكية",
      pros: "أداء خارق (Zero Re-renders)، تكامل صارم مع TypeScript، وفحص مخططات Zod الموحدة.",
      cons: "تتطلب تثبيت مكتبات خارجية إضافية في حزمة المشروع (npm dependencies)."
    },
    {
      approach: "useState التقليدي (Controlled)",
      bestFor: "الحقول الفردية جداً (حقل بحث منبثق، حقل فلترة سريع، ومربعات التبديل)",
      pros: "بسيطة ومفهومة دون أي مفاهيم معقدة وتعيش في قلب لغة جافاسكريبت.",
      cons: "إعادة تصيير مع كل حرف، كود متكرر وطويل، وصعوبة في صيانة النماذج متعددة الحقول."
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مصفوفة الاختيار المعماري للنماذج</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Decision Matrix
        </span>
      </div>

      <div className="space-y-3">
        {matrix.map((item, idx) => (
          <div key={idx} className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1.5 text-xs">
            <h5 className="font-bold text-emerald-400">{item.approach}</h5>
            <p className="text-slate-300"><strong className="text-slate-400">الاستخدام الأمثل:</strong> {item.bestFor}</p>
            <p className="text-emerald-300/80 text-[11px]">✓ {item.pros}</p>
            <p className="text-rose-300/80 text-[11px]">⚠ {item.cons}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
`,
      outputExplanation: "توفر هذه المصفوفة دليلاً حاسماً للمهندس البرمجي: اعتمد على React 19 Form Actions كمعيار افتراضي لكافة النماذج الجديدة، وانتقل لـ React Hook Form + Zod في المشاريع الضخمة المعقدة.",
      commonMistakes: [
        {
          mistake: "محاولة استبدال كافة حقول البحث البسيطة بـ Form Actions معقدة.",
          fix: "استخدم useState البسيط لحقول البحث والفلترة الفورية داخل الصفحة.",
          reason: "حقول البحث السريعة تستفيد من التزامن اللحظي للـ State ولا تحتاج لكائن FormData أو إرسال كامل."
        }
      ],
      bestPractices: [
        "اجعل React 19 Form Actions خيارك القياسي الأول في مشاريع React 19 و Next.js الحديثة.",
        "ادمج Zod مع Form Actions لتدقيق كائن FormData قبل تنفيذه في السيرفر."
      ],
      infographicCard: {
        title: "بوصلة القرار الهندسي للنماذج",
        points: [
          "حقول الفلترة والبحث السريع: useState البسيط.",
          "النماذج الحديثة والـ Full-Stack: React 19 Form Actions.",
          "النماذج الضخمة والفواتير المركبة: React Hook Form + Zod."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q8-4-1",
      question: "ما الذي يميز استخدام خاصية action={asyncFn} في React 19 مقارنة بـ onSubmit التقليدية؟",
      options: [
        "أنها تلغي استخدام لغة جافاسكريبت وتستبدلها بلغة بايثون",
        "أنها تمنع إعادة تحميل الصفحة تلقائياً وتمرر كائن FormData القياسي مباشرة لدالة غير متزامنة دون الحاجة لـ e.preventDefault()",
        "أنها تشفر قاعدة البيانات بتشفير 256-bit فوراً",
        "أنها لا تعمل إلا على أجهزة الماك فقط"
      ],
      correctAnswer: 1,
      explanation: "في React 19، تقوم خاصية action باعتراض إرسال النموذج تلقائياً، وتجميع بيانات الحقول في كائن FormData وتمريره لدالة async مع دعم التزامن وإلغاء الحاجة لـ preventDefault."
    },
    {
      id: "q8-4-2",
      question: "ما هي القاعدة الحتمية الواجب اتباعها عند استخدام خطاف useFormStatus؟",
      options: [
        "يجب استدعاؤه داخل ملف CSS فقط",
        "يجب استدعاؤه حصراً داخل مكون فرعي (Child Component) يقع داخل وسم <form> ولا يمكن استدعاؤه في نفس المكون الأب الحاضن للنموذج",
        "يجب تمرير 5 معاملات إلزامية له",
        "يجب تعطيل الإنترنت أثناء استدعائه"
      ],
      correctAnswer: 1,
      explanation: "يعمل useFormStatus كسياق خفي يقرأ حالة النموذج الحاضن، ولذلك يجب استدعاؤه في مكون فرعي يتم تصييره داخل <form>...</form>."
    },
    {
      id: "q8-4-3",
      question: "ما هي الفائدة الجوهرية لاستخدام خطاف useOptimistic في React 19؟",
      options: [
        "تقليل حجم ملفات الصور في السيرفر",
        "تحديث شاشة المستخدم بالبيانات الجديدة فوراً (0ms Delay) قبل رد السيرفر، مع التراجع التلقائي للأصل في حال فشل الطلب",
        "تسريع سرعة اتصال شبكة الإنترنت لدى العميل",
        "إيقاف تشغيل معالجات الأحداث في المتصفح"
      ],
      correctAnswer: 1,
      explanation: "خطاف useOptimistic يبني واجهات متفائلة فائقة الاستجابة، حيث يعرض التعديل فور نقر المستخدم ويتولى التراجع التلقائي للأصل إذا تعثر طلب الخادم."
    }
  ],
  exercise: {
    id: "ex8-4",
    title: "بناء نموذج نشر منشور بـ React 19 Form Action و useActionState وزر useFormStatus مستقل",
    description: "المطلوب بناء نموذج لنشر تدوينة سريعة باستخدام React 19: دالة إجراء action غير متزامنة، استخدام useActionState لإدارة الحالة وعرض رسالة النجاح، ومكون زر مستقل بـ useFormStatus يعرض مؤشر الدوران ويعطل نفسه تلقائياً أثناء الإرسال.",
    starterCode: `import { useActionState } from "react";
import { useFormStatus } from "react-dom";

// 1. ابنِ مكون الزر المستقل باستخدام useFormStatus
function SubmitButton() {
  // اقرأ pending واعرض المؤشر
}

// 2. ابنِ المكون الرئيسي واستخدم useActionState
export function ModernPostPublisher() {
  return (
    <form className="p-4 text-white">
      {/* النموذج هنا */}
    </form>
  );
}`,
    hints: [
      "في دالة الإجراء: async (prevState, formData) => { const title = formData.get('title'); ... }.",
      "في الزر المستقل: const { pending } = useFormStatus(); وضع disabled={pending}.",
      "استخدم <form action={formAction}> داخل المكون الرئيسي."
    ],
    solution: `import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

// 1. مكون الزر المستقل الذي يقرأ الحالة هوائياً بـ useFormStatus
function PostSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-900/30"
    >
      {pending ? (
        <>
          <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>جارٍ نشر التدوينة في الشبكة...</span>
        </>
      ) : (
        <span>نشر التدوينة الآن 🚀</span>
      )}
    </button>
  );
}

// دالة الإجراء غير المتزامنة
async function publishPostAction(previousState, formData) {
  const title = formData.get("postTitle");
  const content = formData.get("postContent");

  // محاكاة تأخير السيرفر
  await new Promise((r) => setTimeout(r, 1200));

  if (!title.trim() || !content.trim()) {
    return { success: false, error: "كافة الحقول مطلوبة لنشر التدوينة!" };
  }

  return {
    success: true,
    post: { title, content, publishedAt: new Date().toLocaleTimeString() }
  };
}

// 2. المكون الرئيسي الحاضن
export function ModernPostPublisher() {
  const [state, formAction] = useActionState(publishPostAction, null);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <h4 className="font-bold text-sm text-indigo-400">ناشر المقالات بـ React 19 Actions</h4>

      <form action={formAction} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">عنوان التدوينة:</label>
          <input
            type="text"
            required
            name="postTitle"
            placeholder="مثال: تجربتي مع React 19 Form Actions..."
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="text-slate-300 block mb-1">محتوى التدوينة:</label>
          <textarea
            rows={3}
            required
            name="postContent"
            placeholder="اكتب أفكارك وملاحظاتك هنا..."
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 resize-none"
          />
        </div>

        {state?.error && (
          <p className="text-rose-400 text-[10px] font-bold">✕ {state.error}</p>
        )}

        {/* استدعاء الزر المستقل كابن دون أي Props */}
        <PostSubmitButton />
      </form>

      {state?.success && (
        <div className="p-4 bg-slate-950 border border-emerald-500/40 rounded-2xl space-y-1 animate-fadeIn">
          <div className="flex justify-between items-center">
            <h5 className="font-bold text-xs text-emerald-400">✓ تم النشر بنجاح: {state.post.title}</h5>
            <span className="text-[10px] font-mono text-slate-500">{state.post.publishedAt}</span>
          </div>
          <p className="text-[11px] text-slate-300">{state.post.content}</p>
        </div>
      )}
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة نماذج React 19 الحديثة",
    description: "الدليل المرئي الشامل لثورة Form Actions والخطافات الحديثة useActionState و useFormStatus و useOptimistic.",
    sections: [
      {
        heading: "1. الإجراءات المدمجة (Form Actions)",
        bullets: [
          "<form action={asyncFn}>: اعتراض تلقائي ومنع إعادة تحميل الصفحة.",
          "كائن FormData المعياري: استخراج الحقول عبر formData.get('name').",
          "زر formAction مخصص: تنفيذ إجراءات فرعية مستقلة من أزرار مختلفة."
        ]
      },
      {
        heading: "2. خطافات الإدارة والتزامن (Modern Form Hooks)",
        bullets: [
          "useActionState: إدارة state و formAction و isPending في استدعاء واحد.",
          "useFormStatus: قراءة حالة النموذج هوائياً داخل المكونات الفرعية بدون Props.",
          "Transitions غير حاجبة: الواجهة تظل حية وتفاعلية 60fps أثناء الإرسال."
        ]
      },
      {
        heading: "3. الواجهات المتفائلة (Optimistic UI)",
        bullets: [
          "useOptimistic: عرض التحديثات في الشاشة بـ 0ms تأخير.",
          "تراجع تلقائي آمن: العودة للحالة الأصلية فوراً في حال فشل طلب الخادم."
        ]
      }
    ]
  }
};
