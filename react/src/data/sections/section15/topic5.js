// topic5.js - القسم 15: React Hooks المتقدمة ومفاهيم React الحديثة
// الموضوع 5: React الحديثة (React 19 ومستقبل المعالجة)

export const topic5 = {
  id: "15.5",
  title: "React الحديثة (React 19)",
  englishTitle: "Modern React 19 & Beyond",
  description: "الدليل الشامل للثورة المعمارية في React 19: منظومة الإجراءات (Actions)، التحديثات المتفائلة بـ useOptimistic، إدارة النماذج بـ useActionState، الواجهة البرمجية المبتكرة use لقراءة الوعود والسياق شرطياً، وتأثير React Compiler على مستقبل Memoization.",
  subtopics: [
    {
      id: "15.5.a",
      title: "مفهوم Actions في React",
      englishTerm: {
        term: "Actions in React 19",
        pronunciation: "أكشنز إن رياكت ناينتين",
        meaning: "نمط معماري جديد في React 19 يتعامل مع الدوال غير المتزامنة كانتقالات مدمجة تدير حالات التحميل والأخطاء تلقائياً"
      },
      description: "في إصدارات React السابقة، كانت معالجة العمليات غير المتزامنة (مثل إرسال النماذج وتعديل البيانات في الخادم) تتطلب كتابة أكواد روتينية مكررة: تعريف حالات `isLoading` و `error` يدوياً، واستخدام `try/catch`، وإعادة تعيين الحقول. في React 19، تم تقديم مفهوم الإجراءات (Actions)؛ وهي دوال غير متزامنة (Async Functions) تعمل كانتقالات تلقائية (Async Transitions). تتولى React من خلالها إدارة حالة الانتظار، والتحديثات المتفائلة، ورسائل الخطأ، وإعادة ضبط النماذج بشكل قياسي موحد.",
      analogy: "يشبه الأمر النافذة الواحدة لخدمة المستثمرين؛ بدلاً من أن تذهب بنفسك إلى إدارة الضرائب، ثم الغرفة التجارية، ثم السجل التجاري، ثم تدون يدوياً 'جاري المراجعة' في كل خطوة، تودع معاملتك في النافذة الواحدة وتتكفل النافذة بإنهاء كل الإجراءات وإشعارك بالنتيجة النهائية في مستند واحد!",
      whyItMatters: "يقضي مفهوم Actions على آلاف الأسطر من أكواد الحالات اليدوية المكررة في المشاريع، ويوحد طريقة التعامل مع النماذج بين تطبيقات الـ Client-Side Rendering وتطبيقات الـ Fullstack مثل Next.js.",
      syntax: "// دالة Action غير متزامنة تقبل FormData وتدار تلقائياً بـ React:\nasync function updateNameAction(formData: FormData) {\n  const name = formData.get('name');\n  await api.saveName(name);\n}",
      simpleExample: `// مثال تمهيدي يوضح دالة Action غير متزامنة في React 19
export async function updateUsernameAction(formData: FormData) {
  // قراءة الحقل مباشرة من كائن FormData الأصلي
  const newName = formData.get('username') as string;

  // محاكاة طلب خادم غير متزامن
  await new Promise((resolve) => setTimeout(resolve, 600));

  console.log(\`✅ تم تحديث اسم المستخدم إلى: \${newName} بنجاح!\`);
}

// استخدام الـ Action مباشرة في خاصية action لعنصر الـ form
export function SimpleActionForm() {
  return (
    <form action={updateUsernameAction} className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white space-y-3">
      <h4 className="font-bold text-cyan-400 text-sm">تحديث الاسم عبر React 19 Action</h4>
      <input
        type="text"
        name="username"
        placeholder="أدخل الاسم الجديد..."
        className="w-full px-3 py-1.5 bg-slate-800 rounded-lg text-xs border border-slate-700 text-white"
        required
      />
      <button type="submit" className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-bold">
        حفظ عبر الـ Action
      </button>
    </form>
  );
}`,
      advancedExample: `// تطبيق متكامل لإجراء تحديث ملف المستخدم مع المحاكاة الكاملة
import { useState } from 'react';

interface ProfileData {
  name: string;
  bio: string;
}

export function ActionLifecycleManager() {
  const [profile, setProfile] = useState<ProfileData>({
    name: 'سارة خالد',
    bio: 'مهندسة برمجيات متخصصة في واجهات React الحديثة'
  });
  const [feedback, setFeedback] = useState<string | null>(null);

  // دالة الـ Action المتقدمة
  const handleUpdateProfile = async (formData: FormData) => {
    setFeedback('⏳ جاري تنفيذ الإجراء والتواصل مع الخادم...');

    const name = formData.get('name') as string;
    const bio = formData.get('bio') as string;

    try {
      // محاكاة تأخير الشبكة
      await new Promise((r) => setTimeout(r, 800));

      if (name.length < 3) {
        throw new Error('الاسم يجب ألا يقل عن 3 أحرف');
      }

      setProfile({ name, bio });
      setFeedback('✅ تم حفظ التعديلات بنجاح عبر React Action!');
    } catch (err: unknown) {
      setFeedback(\`❌ فشل الإجراء: \${err instanceof Error ? err.message : 'خطأ غير معروف'}\`);
    }
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-emerald-400 mb-2">إدارة البيانات بنمط React 19 Actions</h3>
      <p className="text-xs text-slate-400 mb-4">
        الارتباط المباشر بين عنصر الـ form ودوال الـ Actions غير المتزامنة.
      </p>

      {/* نموذج التعديل المربوط بـ action مباشرة */}
      <form action={handleUpdateProfile} className="space-y-3 mb-4">
        <div>
          <label className="block text-xs text-slate-300 mb-1">الاسم الكامل:</label>
          <input
            type="text"
            name="name"
            defaultValue={profile.name}
            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs text-slate-300 mb-1">النبذة التعريفية:</label>
          <textarea
            name="bio"
            defaultValue={profile.bio}
            rows={2}
            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 font-bold rounded-xl text-xs transition-colors"
        >
          حفظ التغييرات
        </button>
      </form>

      {/* رسالة التغذية الراجعة */}
      {feedback && (
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-cyan-300">
          {feedback}
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "في React 19، أصبحت خاصية `action` في عناصر `<form>` تقبل دوالاً غير متزامنة مباشرة؛ وتقوم React تلقائياً بتمرير كائن `FormData` للدالة وإدارة دورة حياة الانتقال في الخلفية دون الحاجة لاستدعاء `e.preventDefault()` يدوياً.",
      commonMistakes: [
        {
          mistake: "الاستمرار في كتابة `onSubmit={(e) => { e.preventDefault(); ... }}` في مشاريع React 19 الجديدة",
          fix: "استفد من خاصية `action={asyncAction}` المدمجة التي توفر تعاملاً أنظف وتكاملاً تلقائياً مع الـ FormData."
        },
        {
          mistake: "توقع أن تعمل Actions فقط في Next.js أو السيرفر",
          fix: "تعمل ميزة الـ Actions في كافة تطبيقات React 19 سواء كانت تعمل بالكامل في المتصفح (SPA) أو على الخادم."
        }
      ],
      bestPractices: [
        "صمم دوال الـ Actions لتستقبل كائن `FormData` كمعيار قياسي عالمي.",
        "استخدم الـ Actions كحجر زاوية يربط بين خطافي `useActionState` و `useOptimistic`."
      ],
      infographic: {
        title: "تطور معالجة النماذج: React 18 مقابل React 19",
        points: [
          "React 18 القديم: `onSubmit` + `e.preventDefault()` + `useState(loading)` + `useState(error)` + `try/catch` يدوي.",
          "React 19 الحديث: `<form action={asyncAction}>` ➔ React تتولى منع التحديث، واستخراج FormData، وإدارة الانتقال تلقائياً.",
          "النتيجة: كود أقصر بنسبة 60% وتوافق تام مع التحديثات المتفائلة."
        ]
      }
    },
    {
      id: "15.5.b",
      title: "استخدام useOptimistic",
      englishTerm: {
        term: "Using useOptimistic Hook",
        pronunciation: "يوزينغ يوز أوبتيميستيك هوك",
        meaning: "خطاف مدمج في React 19 لتطبيق التحديثات المتفائلة فوراً في الواجهة أثناء انتظار رد الخادم والتراجع التلقائي عند الفشل"
      },
      description: "التحديث المتفائل (Optimistic UI) هو أحد أرقى أنماط تجربة المستخدم؛ فحين ينقر المستخدم على زر 'إعجاب' أو يرسل رسالة في المحادثة، لا يرغب في الانتظار ثانية كاملة لرد الخادم. يقوم خطاف `useOptimistic` بعرض الحالة الجديدة فوراً (0ms) بافتراض أن طلب الشبكة سينجح. إذا نجح الطلب، يتم اعتماد الحالة الحقيقية من الخادم بسلاسة، وإذا فشل الطلب أو حدث خطأ، تقوم React تلقائياً بالتراجع (Rollback) عن التعديل وإعادة الشاشة لحالتها السابقة دون كتابة أي كود تراجع يدوي معقد!",
      analogy: "يشبه الأمر إرسال رسالة في تطبيق واتساب؛ بمجرد الضغط على زر الإرسال، تظهر فقاعة الرسالة فوراً في شاشة المحادثة وعليها أيقونة ساعة صغيرة (تحديث متفائل)، ولا تنتظر التطبيق حتى يذهب للبرج الفضائي ويعود؛ وإذا انقطع الإنترنت تماماً، تتحول الساعة إلى علامة تعجب حمراء تلقائياً!",
      whyItMatters: "يحول `useOptimistic` تجربة التطبيق لتصبح فائقة السرعة ولحظية الاستجابة، مما يجعل المستخدمين يشعرون بأن التطبيق يعمل بسرعة البرق وبدون أي انتظار.",
      syntax: "const [optimisticState, setOptimistic] = useOptimistic(\n  realState,\n  (currentState, optimisticValue) => {\n    return computeNextState(currentState, optimisticValue);\n  }\n);",
      simpleExample: `// استيراد useOptimistic من React
import { useState, useOptimistic } from 'react';

interface Message {
  id: string;
  text: string;
  sending?: boolean;
}

export function SimpleOptimisticChat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'أهلاً بك في نظام المحادثة' }
  ]);

  // إنشاء الحالة المتفائلة المشتقة من messages
  const [optimisticMessages, setOptimisticMessages] = useOptimistic(
    messages,
    (state, newText: string) => [
      ...state,
      { id: 'temp-' + Date.now(), text: newText, sending: true }
    ]
  );

  const sendMessageAction = async (formData: FormData) => {
    const text = formData.get('message') as string;
    // تطبيق التحديث المتفائل فوراً
    setOptimisticMessages(text);

    // محاكاة إرسال للخادم
    await new Promise((r) => setTimeout(r, 1000));

    // اعتماد الرسالة الحقيقية في الحالة الأصلية
    setMessages((prev) => [...prev, { id: String(Date.now()), text }]);
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <div className="space-y-2 mb-3">
        {optimisticMessages.map((m) => (
          <div key={m.id} className="p-2 bg-slate-800 rounded-lg text-xs flex justify-between">
            <span>{m.text}</span>
            {m.sending && <span className="text-amber-400">⏳ جاري الإرسال...</span>}
          </div>
        ))}
      </div>
      <form action={sendMessageAction} className="flex gap-2">
        <input name="message" placeholder="اكتب رسالة..." className="flex-1 px-3 py-1 bg-slate-950 rounded text-xs text-white" required />
        <button type="submit" className="px-3 py-1 bg-blue-600 rounded text-xs font-bold">إرسال</button>
      </form>
    </div>
  );
}`,
      advancedExample: `// تطبيق متكامل لنظام إعجابات متفائل مع محاكاة إمكانية فشل الخادم والتراجع التلقائي
import { useState, useOptimistic } from 'react';

interface ArticlePost {
  id: string;
  title: string;
  likes: number;
}

export function OptimisticLikesStudio() {
  const [post, setPost] = useState<ArticlePost>({
    id: 'post-99',
    title: 'مستقبل React 19 والتحسينات المتفائلة',
    likes: 42
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // استخدام useOptimistic لإدارة عداد الإعجابات اللحظي
  const [optimisticPost, setOptimisticPost] = useOptimistic(
    post,
    (current, addedLikes: number) => ({
      ...current,
      likes: current.likes + addedLikes
    })
  );

  // دالة الـ Action التي تنفذ التعديل مع احتمال الفشل للتجربة
  const handleLikeAction = async (formData: FormData) => {
    setErrorMessage(null);
    const shouldFail = formData.get('fail') === 'true';

    // 1. تحديث متفائل فوري للواجهة بمقدار +1
    setOptimisticPost(1);

    try {
      // محاكاة تأخير الشبكة
      await new Promise((r) => setTimeout(r, 700));

      if (shouldFail) {
        throw new Error('فشل الاتصال بالخادم (رمز الخطأ 500)');
      }

      // 2. تحديث الحالة الحقيقية في حال النجاح
      setPost((prev) => ({ ...prev, likes: prev.likes + 1 }));
    } catch (err: unknown) {
      // عند حدوث خطأ: تتراجع useOptimistic تلقائياً وتعود likes إلى قيمتها الحقيقية السابقة!
      setErrorMessage(err instanceof Error ? err.message : 'حدث خطأ');
    }
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-amber-400 mb-2">استوديو useOptimistic التفاعلي</h3>
      <p className="text-xs text-slate-400 mb-4">
        انقر على الإعجاب لمشاهدة الاستجابة اللحظية بـ 0ms والتراجع التلقائي عند الخطأ.
      </p>

      {/* بطاقة المقال المعروضة بالحالة المتفائلة */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl mb-4">
        <h4 className="font-bold text-sm text-slate-100 mb-2">{optimisticPost.title}</h4>
        <div className="flex justify-between items-center pt-2 border-t border-slate-800">
          <span className="text-sm font-bold text-emerald-400">
            ❤️ {optimisticPost.likes} إعجاب
            {optimisticPost.likes !== post.likes && (
              <span className="text-[10px] text-amber-400 mr-2 font-normal">(متفائل...)</span>
            )}
          </span>
          <span className="text-[11px] text-slate-500 font-mono">
            القيمة على الخادم: {post.likes}
          </span>
        </div>
      </div>

      {/* أزرار التجربة: سيناريو النجاح وسيناريو الفشل */}
      <div className="flex gap-2">
        <form action={handleLikeAction} className="flex-1">
          <input type="hidden" name="fail" value="false" />
          <button
            type="submit"
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 font-bold rounded-xl text-xs transition-colors"
          >
            إعجاب ناجح (+1)
          </button>
        </form>

        <form action={handleLikeAction} className="flex-1">
          <input type="hidden" name="fail" value="true" />
          <button
            type="submit"
            className="w-full py-2 bg-rose-600 hover:bg-rose-500 font-bold rounded-xl text-xs transition-colors"
          >
            إعجاب يفشل للتجربة ⚠️
          </button>
        </form>
      </div>

      {errorMessage && (
        <p className="text-xs text-rose-400 mt-3 p-2 bg-rose-950/40 border border-rose-800 rounded-lg">
          ❌ {errorMessage} (تم التراجع عن الإعجاب تلقائياً!)
        </p>
      )}
    </div>
  );
}`,
      outputExplanation: "يوضح الكود السحر الهندسي لـ `useOptimistic`؛ فعند النقر على 'إعجاب يفشل'، يقفز العداد فورياً من 42 إلى 43 لتشجيع المستخدم، وعندما يرفض الخادم الطلب بعد 700ms، يعود العداد تلقائياً إلى 42 دون كتابة سطر واحد لإعادة ضبط القيمة!",
      commonMistakes: [
        {
          mistake: "محاولة استخدام useOptimistic خارج دالة Action أو Transition",
          fix: "يجب استدعاء `setOptimistic` داخل Action أو دالة محاطة بـ `startTransition` لتعرف React متى ينتهي الانتقال."
        },
        {
          mistake: "تعديل الـ State الأصلية مباشرة مع التحديث المتفائل",
          fix: "التحديث المتفائل مستقل؛ لا تحدث الحالة الأصلية إلا بعد وصول تأكيد النجاح من الخادم."
        }
      ],
      bestPractices: [
        "استخدم `useOptimistic` لعمليات المحادثات والتعليقات وأزرار الإعجاب والتبديل السريع.",
        "قدم مؤشراً بصرياً خفيفاً للعناصر المتفائلة (مثل تخفيف الشفافية أو رمز ساعة صغير)."
      ],
      infographic: {
        title: "دورة حياة التحديث المتفائل مع useOptimistic",
        points: [
          "1. نقرة المستخدم: استدعاء `setOptimistic(value)` ➔ تحديث الواجهة فوراً بـ 0ms.",
          "2. طلب الشبكة: يعمل في الخلفية بالتزامن مع رؤية المستخدم للشاشة الجديدة.",
          "3. سيناريو النجاح: استلام الرد ➔ تحديث الحالة الأصلية ➔ استقرار التحديث.",
          "4. سيناريو الفشل: حدوث خطأ ➔ تراجع تلقائي كامل (Automatic Rollback) بدون كود إضافي!"
        ]
      }
    },
    {
      id: "15.5.c",
      title: "استخدام useActionState",
      englishTerm: {
        term: "Using useActionState Hook",
        pronunciation: "يوزينغ يوز أكشن ستيت هوك",
        meaning: "الخطاف الرسمي في React 19 لإدارة حالات النماذج والإجراءات وتوفير مخرجات دالة الـ Action وحالة الانتظار isPending"
      },
      description: "خطاف `useActionState` (الذي كان يُعرف بـ `useFormState` في النسخ التجريبية السابقة) هو الأداة المعتمدة في React 19 للتحكم الكامل في النماذج. يستقبل الخطاف دالة Action غير متزامنة وقيمة ابتدائية للحالة، ويُرجع ثلاثة عناصر رئيسية:\n1. `state`: الحالة الحالية المعادة من آخر تنفيذ للـ Action (مثل رسائل النجاح أو أخطاء التحقق القادمة من السيرفر).\n2. `formAction`: دالة مجهزة لتمريرها مباشرة كخاصية `action` لعنصر الـ `<form>` أو الزر.\n3. `isPending`: مؤشر منطقي يعبر عما إذا كان الإجراء قيد المعالجة حالياً، مما يلغي تماماً الحاجة لإنشاء `const [loading, setLoading] = useState(false)` يدوياً!",
      analogy: "يشبه الأمر جهاز إرسال الطرود البريدية الذكي؛ تضع الطرد في الصندوق وتضغط الزر (`formAction`)، والجهاز يعرض لك لمبة زرقاء أثناء المعالجة (`isPending`)، وعند الانتهاء يطبع لك إيصالاً رسمياً يحتوي على تفاصيل الشحنة أو سبب الرفض (`state`) في جهاز واحد متكامل!",
      whyItMatters: "يوفر `useActionState` معمارية قياسية خالية من التعقيد لإدارة استمارات الدخول والتسجيل وطلبات السيرفر، مع دعم أصلي كامل لـ Progressive Enhancement (العمل حتى بدون جافاسكربت في بيئات السيرفر).",
      syntax: "const [state, formAction, isPending] = useActionState(\n  async (previousState, formData) => {\n    // منطق الـ Action...\n    return nextState;\n  },\n  initialState\n);",
      simpleExample: `// استيراد useActionState من React
import { useActionState } from 'react';

// دالة الـ Action التي تستقبل الحالة السابقة و formData
async function subscribeAction(prevState: string | null, formData: FormData) {
  const email = formData.get('email') as string;
  // محاكاة حفظ البريد
  await new Promise((r) => setTimeout(r, 600));

  if (!email.includes('@')) {
    return 'البريد الإلكتروني غير صالح!';
  }
  return \`تم اشتراكك بنجاح ببريد: \${email}\`;
}

export function SimpleNewsletterSubscription() {
  // استخدام useActionState
  const [message, formAction, isPending] = useActionState(subscribeAction, null);

  return (
    <form action={formAction} className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white space-y-3">
      <input
        type="email"
        name="email"
        placeholder="أدخل بريدك..."
        className="w-full px-3 py-1.5 bg-slate-950 rounded text-xs text-white"
        required
      />
      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-1.5 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-xs font-bold rounded-lg"
      >
        {isPending ? 'جاري الاشتراك...' : 'اشتراك في النشرة'}
      </button>
      {message && <p className="text-xs text-emerald-400 mt-2">{message}</p>}
    </form>
  );
}`,
      advancedExample: `// نموذج تسجيل دخول احترافي متكامل مع useActionState والتحقق البرمجي
import { useActionState } from 'react';

interface LoginFormState {
  success: boolean;
  errors?: {
    email?: string;
    password?: string;
    form?: string;
  };
  submittedEmail?: string;
}

// دالة Action تحاكي التحقق من بيانات الدخول
async function loginAction(
  prevState: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // محاكاة تأخير الشبكة
  await new Promise((r) => setTimeout(r, 800));

  const errors: LoginFormState['errors'] = {};

  if (!email || !email.includes('@')) {
    errors.email = 'يرجى إدخال عنوان بريد إلكتروني صالح';
  }

  if (!password || password.length < 6) {
    errors.password = 'كلمة المرور يجب ألا تقل عن 6 أحرف';
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors, submittedEmail: email };
  }

  // محاكاة بيانات خاطئة
  if (password === 'wrongpass') {
    return {
      success: false,
      errors: { form: 'بيانات الدخول غير صحيحة، تأكد من كلمة المرور.' },
      submittedEmail: email
    };
  }

  return { success: true, submittedEmail: email };
}

export function ProfessionalLoginForm() {
  const [formState, formAction, isPending] = useActionState(loginAction, {
    success: false
  });

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">تسجيل الدخول (useActionState)</h3>
      <p className="text-xs text-slate-400 mb-4">
        إدارة الحالة والتحميل والأخطاء تلقائياً عبر ميزات React 19 المدمجة.
      </p>

      {formState.success ? (
        <div className="p-4 bg-emerald-950/40 border border-emerald-700/60 rounded-xl text-emerald-300 text-center">
          <h4 className="font-bold text-sm mb-1">🎉 مرحباً بك مجدداً!</h4>
          <p className="text-xs text-slate-300">تم تسجيل دخولك بنجاح بالبريد: {formState.submittedEmail}</p>
        </div>
      ) : (
        <form action={formAction} className="space-y-4">
          {formState.errors?.form && (
            <div className="p-3 bg-rose-950/40 border border-rose-800 text-rose-300 text-xs rounded-xl">
              ❌ {formState.errors.form}
            </div>
          )}

          <div>
            <label className="block text-xs text-slate-300 mb-1">البريد الإلكتروني:</label>
            <input
              type="email"
              name="email"
              defaultValue={formState.submittedEmail || ''}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
              placeholder="user@example.com"
            />
            {formState.errors?.email && (
              <p className="text-[11px] text-rose-400 mt-1">{formState.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1">كلمة المرور:</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
              placeholder="••••••••"
            />
            {formState.errors?.password && (
              <p className="text-[11px] text-rose-400 mt-1">{formState.errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 font-bold rounded-xl text-xs transition-all flex justify-center items-center gap-2"
          >
            {isPending && <span className="w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin"></span>}
            {isPending ? 'جاري التحقق من الحساب...' : 'تسجيل الدخول'}
          </button>
        </form>
      )}
    </div>
  );
}`,
      outputExplanation: "يقدم `useActionState` دورة حياة متكاملة للنموذج؛ فدالة `loginAction` تستقبل البيانات وتفحصها، وتقوم React بتحديث `isPending` تلقائياً لتشغيل دوارة التحميل، ثم تُرجع النتيجة في كائن `formState` الموثق بالأنواع بالكامل.",
      commonMistakes: [
        {
          mistake: "نسيان أن دالة Action في useActionState تستقبل الحالة السابقة كمعامل أول `(prevState, formData)`",
          fix: "تذكر دائماً الترتيب: المعامل الأول هو `prevState` والمعامل الثاني هو `formData`."
        },
        {
          mistake: "البحث عن `useFormState` القديم في توثيق React 19",
          fix: "تمت إعادة تسمية الخطاف رسمياً في React 19 ليصبح `useActionState` ليعبر عن دعمه لكافة أنواع الإجراءات وليس النماذج فقط."
        }
      ],
      bestPractices: [
        "استخدم `useActionState` لإدارة نماذج التسجيل والاتصال والتحقق في كافة تطبيقات React 19.",
        "أرجع كائناً يحتوي على حقول الأخطاء `errors` وحالة النجاح `success` لتسهيل العرض الشرطي."
      ],
      infographic: {
        title: "ثلاثية useActionState في React 19",
        points: [
          "`state`: البيانات المعادة من الـ Action (رسائل الخادم، أخطاء التحقق، النتيجة).",
          "`formAction`: دالة التوصيل المباشر بخاصية `action` في عنصر الـ form.",
          "`isPending`: راية التحميل المدمجة تلقائياً دون الحاجة لـ useState يدوي!"
        ]
      }
    },
    {
      id: "15.5.d",
      title: "استخدام Hook المسمى use",
      englishTerm: {
        term: "Using the 'use' API",
        pronunciation: "يوزينغ ذا يوز إيه بي آي",
        meaning: "الواجهة البرمجية الثورية الجديدة في React 19 لقراءة الوعود Promises والسياق Context مع كسر قيود الـ Hooks التقليدية"
      },
      description: "تعتبر الواجهة البرمجية `use` من أجرأ الابتكارات في تاريخ React. على عكس كافة الخطافات التقليدية (Hooks) التي تفرض عليك عدم استدعائها داخل الشروط `if` أو الحلقات `loops`، فإن `use` ليست خطافاً عادياً، بل هي API خاص يمكن استدعاؤه بشكل شرطي داخل كتل الشروط! تُستخدم `use` لقراءة قيمتين رئيسيتين:\n1. الوعود غير المتزامنة (Promises): لقراءة بيانات الوعود مباشرة داخل المكون بالتعاون مع حدود `<Suspense>`.\n2. سياق React (Context): لقراءة بيانات السياق شرطياً بدلاً من `useContext` الجامد.",
      analogy: "يشبه الأمر بطاقة الائتمان الذهبية التي تفتح لك صالات الانتظار الفاخرة؛ الخطافات العادية تشبه تذاكر الدرجة السياحية التي تفرض عليك مساراً صارماً لا تحيد عنه، بينما `use` تتيح لك حرية استدعاء السياق أو قراءة الوعد فقط إذا احتجت إليه داخل غرفة معينة دون إجبارك على إبرازه عند مدخل المطار الرئيسي!",
      whyItMatters: "تنهي `use` قيوداً عمرها سنوات في معمارية React، وتتيح للمطورين جلب البيانات والاشتراك في السياق بمرونة مطلقة وبأسلوب تعبيري غاية في النظافة.",
      syntax: "// قراءة سياق شرطياً:\nif (condition) {\n  const theme = use(ThemeContext);\n}\n\n// قراءة وعد (Promise) مع Suspense:\nconst data = use(dataPromise);",
      simpleExample: `// استيراد use من React
import { use, createContext } from 'react';

// تعريف سياق السمة
const ThemeContext = createContext<'light' | 'dark'>('dark');

export function ConditionalContextReader({ readTheme }: { readTheme: boolean }) {
  // ميزة ثورية: استدعاء use داخل جملة شرطية if! (محرم ومستحيل مع useContext القديم!)
  if (readTheme) {
    const theme = use(ThemeContext);
    return <p className="text-emerald-400 text-xs">تمت قراءة السمة شرطياً بـ use: {theme}</p>;
  }

  return <p className="text-slate-400 text-xs">تم تخطي قراءة السياق بنجاح.</p>;
}`,
      advancedExample: `// قراءة Promise مع حدود Suspense باستخدام use
import { use, Suspense } from 'react';

// دالة محاكاة لوعد جلب بيانات يولد مرة واحدة
function createUserDataPromise() {
  return new Promise<{ name: string; title: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'م. يوسف المنصور',
        title: 'خبير معماريات React 19 المتزامنة'
      });
    }, 1000);
  });
}

// الوعد يتم تمريره كـ Prop للمكون
const userPromise = createUserDataPromise();

// المكون الذي يستهلك الوعد مباشرة عبر use(promise)
function UserProfileDetails({ dataPromise }: { dataPromise: Promise<{ name: string; title: string }> }) {
  // استخدام use لقراءة الوعد مباشرة؛ تقوم React بتعليق المكون وإظهار Fallback حتى يكتمل الوعد!
  const user = use(dataPromise);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
      <h4 className="font-bold text-sm text-cyan-300">{user.name}</h4>
      <p className="text-xs text-slate-400">{user.title}</p>
    </div>
  );
}

// المكون الحاوي المغلف بـ Suspense
export function ModernUseApiContainer() {
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-emerald-400 mb-2">قراءة الوعود بـ React 19 use API</h3>
      <p className="text-xs text-slate-400 mb-4">
        فكك الـ Promises مباشرة في سطر واحد دون الحاجة لـ useEffect أو useState!
      </p>

      {/* حيز التعليق Suspense يتولى إظهار التحميل ريثما ينتهي الوعد في use */}
      <Suspense
        fallback={
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-center">
            <span className="text-xs text-cyan-400 animate-pulse">⏳ جاري حل الوعد (Unwrapping Promise)...</span>
          </div>
        }
      >
        <UserProfileDetails dataPromise={userPromise} />
      </Suspense>
    </div>
  );
}`,
      outputExplanation: "باستخدام `use(dataPromise)`، لم نعد بحاجة لكتابة `useEffect` أو تخزين البيانات في `useState` يدوياً؛ حيث تفهم React أن المكون ينتظر هذا الوعد، فتقوم بتعليقه تلقائياً وتفعيل الـ `fallback` في Suspense حتى تكتمل البيانات في سطر برمجي واحد.",
      commonMistakes: [
        {
          mistake: "إنشاء Promise جديد داخل دالة المكون وتمريره لـ use مباشرة مثل `use(fetchData())`",
          fix: "تجنب إنشاء الوعود في كل تصيير؛ لأن ذلك يسبب حلقة تعليق لا نهائية. أنشئ الوعد خارج المكون أو استلمه كـ Prop أو من كاش مستقر."
        },
        {
          mistake: "استخدام use(Promise) بدون تغليف المكون بـ `<Suspense>`",
          fix: "يجب دائماً وجود حيز `<Suspense>` أعلى شجرة المكونات للتعامل مع فترة انتظار الوعد."
        }
      ],
      bestPractices: [
        "استفد من إمكانية استدعاء `use(Context)` داخل الشروط لتقليل استهلاك السياقات غير الضرورية.",
        "مرر الـ Promises من الخادم أو من مخازن الكاش واقرأها بسلاسة عبر `use` داخل مكونات العرض."
      ],
      infographic: {
        title: "القدرات الاستثنائية لـ use API في React 19",
        points: [
          "كسر قواعد الـ Hooks: مسموح باستدعائه داخل جمل `if` والكتل الشرطية بحرية.",
          "فك الوعود اللحظي: يفك الـ Promise في سطر واحد بالتعاون مع حدود `<Suspense>`.",
          "استبدال useContext: يقرأ السياق بمرونة فائقة ودون الحاجة لاستدعاءات علوية إجبارية."
        ]
      }
    },
    {
      id: "15.5.e",
      title: "قراءة Context باستخدام use",
      englishTerm: {
        term: "Reading Context with 'use'",
        pronunciation: "ريدينغ كونتيكست وذ يوز",
        meaning: "الاستغناء عن خطاف useContext لصالح use لقراءة بيانات السياق بمرونة شرطية فائقة"
      },
      description: "في الإصدارات السابقة، كان خطاف `useContext(MyContext)` يخضع للقواعد الصارمة للـ Hooks، مما يمنعك من وضعه داخل أي شرط `if`؛ فلو كان لديك مكون يقرأ سياقاً معيناً فقط في وضعية التعديل (Edit Mode) أو للمستخدمين المسجلين، كنت مجبراً على استدعائه دائماً في أعلى المكون. مع واجهة `use(MyContext)`، يمكنك الآن قراءة السياق متى ما احتجت إليه فقط وداخل أي تفرع شرطي، مما يسهل كتابة شفرات شديدة النظافة والتحكم.",
      analogy: "يشبه الأمر استعارة كتاب من مكتبة الجامعة؛ مع النظام القديم كنت مجبراً على الوقوف في طابور استعارة الكتاب يومياً عند باب الجامعة سواء كنت ستذاكر اليوم أم لا (`useContext`). أما مع النظام الجديد، فلا تذهب وتستعير الكتاب إلا في اليوم الذي تقرر فيه فتح المذاكرة فعلياً (`use`)!",
      whyItMatters: "يحسن هذا الأسلوب من كفاءة الشفرة ويمنع الاشتراك الإجباري في سياقات قد لا يحتاجها المكون في كافة سيناريوهات عرضه، مما يقلل من ارتباط المكونات غير الضروري.",
      syntax: "function Card({ isEditing }) {\n  if (isEditing) {\n    const editor = use(EditorContext); // مسموح تماماً!\n  }\n}",
      simpleExample: `// استيراد use والسياق من React
import { use, createContext } from 'react';

interface AuthInfo {
  token: string;
  role: string;
}

const AuthContext = createContext<AuthInfo | null>(null);

export function ModernAdminPanel({ isAdmin }: { isAdmin: boolean }) {
  // قراءة سياق المصادقة فقط وحصراً إذا كان المستخدم مديراً!
  if (isAdmin) {
    const auth = use(AuthContext);
    return <div className="text-xs text-emerald-400">مرحباً بالمدير (الدور: {auth?.role})</div>;
  }

  return <div className="text-xs text-slate-500">لوحة المستخدم العادي (تم تجاوز قراءة السياق).</div>;
}`,
      advancedExample: `// تطبيق شامل يوضح قراءة سياقات متعددة شرطياً بنقاء تام
import React, { use, createContext, useState, ReactNode } from 'react';

// تعريف سياقين مختلفين
interface ThemeCtx {
  primary: string;
}
interface LocalizationCtx {
  lang: 'ar' | 'en';
  t: (key: string) => string;
}

const ThemeContext = createContext<ThemeCtx>({ primary: '#3b82f6' });
const LocContext = createContext<LocalizationCtx>({
  lang: 'ar',
  t: (k) => (k === 'welcome' ? 'أهلاً بك' : k)
});

// مكون يقرأ السياق المخصص بحسب حاجته الحالية فقط
export function AdaptiveContextWidget({ showTheme, showLang }: { showTheme: boolean; showLang: boolean }) {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs">
      <h4 className="font-bold text-slate-200">المكون الذكي ذو القراءة الشرطية:</h4>

      {/* استدعاء use(ThemeContext) شرطياً داخل كتلة JSX */}
      {showTheme && (
        (() => {
          const theme = use(ThemeContext);
          return (
            <p style={{ color: theme.primary }} className="font-semibold">
              🎨 لون السمة المكتشف شرطياً: {theme.primary}
            </p>
          );
        })()
      )}

      {/* استدعاء use(LocContext) شرطياً */}
      {showLang && (
        (() => {
          const loc = use(LocContext);
          return (
            <p className="text-cyan-300">
              🌐 لغة الواجهة الحالية: {loc.lang} ({loc.t('welcome')})
            </p>
          );
        })()
      )}

      {!showTheme && !showLang && (
        <p className="text-slate-500">كافة القراءات معطلة، لم يتم فحص أي سياق.</p>
      )}
    </div>
  );
}

// المكون الحاوي لتجربة التبديل
export function ConditionalContextTester() {
  const [showTheme, setShowTheme] = useState(true);
  const [showLang, setShowLang] = useState(false);

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">قراءة Context بـ use الشرطية</h3>
      <p className="text-xs text-slate-400 mb-4">
        تحكم في تفعيل استهلاك السياقات واختبر قدرة use على العمل داخل الشروط.
      </p>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowTheme((v) => !v)}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${showTheme ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          {showTheme ? 'إخفاء سياق المظهر' : 'قراءة سياق المظهر'}
        </button>
        <button
          onClick={() => setShowLang((v) => !v)}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${showLang ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          {showLang ? 'إخفاء سياق اللغة' : 'قراءة سياق اللغة'}
        </button>
      </div>

      <AdaptiveContextWidget showTheme={showTheme} showLang={showLang} />
    </div>
  );
}`,
      outputExplanation: "يوضح الكود التحرر الكامل من قيود `useContext` الكلاسيكية؛ حيث يمكن استدعاء `use(Context)` داخل الكتل الشرطية وتوابع الدوال المحلية دون التسبب في أي تحذير من قواعد الـ Linter.",
      commonMistakes: [
        {
          mistake: "تمرير كائن سياق غير مهيأ أو فارغ إلى use(Context)",
          fix: "تأكد من تمرير كائن السياق الذي تم إنشاؤه بـ `createContext`."
        },
        {
          mistake: "الاعتقاد بأن useContext أصبح غير مدعوم في React 19",
          fix: "ما زال `useContext` مدعوماً بالكامل، ولكن `use` تعتبر الخيار الأحدث والأكثر مرونة ويُنصح بالانتقال إليها تدريجياً."
        }
      ],
      bestPractices: [
        "استخدم `use(Context)` كبديل مباشر وأكثر مرونة لـ `useContext` في جميع مشاريع React 19 الجديدة.",
        "استفد من استدعائه المشروط لتبسيط المكونات التي تتفرع حسب الصلاحيات أو أدوار المستخدمين."
      ],
      infographic: {
        title: "مقارنة قراءة السياق: useContext مقابل use",
        points: [
          "`useContext(Context)`: خطاف تقليدي ➔ إلزامي في أعلى المكون فقط ➔ ممنوع داخل كتل الشروط `if`.",
          "`use(Context)`: واجهة حديثة في React 19 ➔ مرنة بالكامل ➔ مسموح باستدعائها داخل أي شرط `if`.",
          "الترقية: استبدال فوري سلس؛ كل ما كتبته بـ `useContext` يعمل بـ `use` مباشرة."
        ]
      }
    },
    {
      id: "15.5.f",
      title: "التعامل مع Promises و Suspense",
      englishTerm: {
        term: "Promises & Suspense Integration",
        pronunciation: "بروميسز آند سسبنس إنتيجريشن",
        meaning: "التكامل السلس بين الوعود غير المتزامنة وحواجز Suspense لتعليق المكونات وعرض حالات التحميل بأناقة"
      },
      description: "قبل React 19، كان ربط الوعود (Promises) بـ Suspense يتطلب مكتبات خارجية معقدة أو استخدام آليات غير رسمية لرمي الوعود (Throwing Promises). في React 19، أصبح فك الوعود ميزة مدمجة رسمياً من الدرجة الأولى (First-Class Feature) عبر واجهة `use(promise)`. عندما يستقبل المكون وعداً لم يكتمل بعد ويمرره إلى `use`، تقوم React بتعليق تصيير المكون (Suspends) وتُظهر تلقائياً واجهة البديل (Fallback) المحددة في أقرب حيز `<Suspense>`، ثم تعيد استئناف التصيير لحظة اكتمال الوعد.",
      analogy: "يشبه الأمر شاشات صالة الوصول في المطار الدولي؛ حينما تكون الطائرة قادمة في الجو، تعرض الشاشة في صالة الاستقبال: 'الرحلة قادمة في موعدها' (`fallback`). وبمجرد أن تهبط الطائرة على المدرج ويفتح الباب، تنقل الشاشة الصورة فوراً إلى ركاب الطائرة وهم يخرجون بسلام (`Resolved Data`)!",
      whyItMatters: "يحول هذا النمط كود معالجة البيانات غير المتزامنة من أسلوب متشابك بالـ Callbacks والمؤشرات اليدوية إلى أسلوب تصريحي نقي يشبه كتابة الشفرات التزامنية العادية.",
      syntax: "<Suspense fallback={<LoadingSkeleton />}>\n  <DataComponent promise={fetchPromise} />\n</Suspense>",
      simpleExample: `// مثال لفك وعد غير متزامن مع Suspense
import { use, Suspense } from 'react';

// دالة محاكاة لوعد يجلب اقتباساً ملهماً
function fetchQuotePromise() {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve("أفضل طريقة للتنبؤ بالمستقبل هي أن تصنعه بنفسك."), 1200);
  });
}

const quotePromise = fetchQuotePromise();

// المكون المستهلك
function QuoteViewer({ promise }: { promise: Promise<string> }) {
  // فك الوعد بـ use
  const quote = use(promise);
  return <p className="text-emerald-400 font-semibold italic text-xs">"{quote}"</p>;
}

// المكون الرئيسي
export function SimplePromiseSuspense() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <h4 className="font-bold text-cyan-400 mb-2">اقتباس اليوم (Suspense + use)</h4>
      <Suspense fallback={<p className="text-xs text-slate-500 animate-pulse">جاري جلب الاقتباس من الخادم...</p>}>
        <QuoteViewer promise={quotePromise} />
      </Suspense>
    </div>
  );
}`,
      advancedExample: `// تطبيق متكامل لفك وعود متزامنة مع خيارات إعادة المحاولة وحالات الخطأ
import { use, Suspense, useState } from 'react';

interface WeatherReport {
  city: string;
  temp: number;
  condition: string;
}

// دالة مصنع لتوليد وعود الطقس
function fetchWeather(city: string): Promise<WeatherReport> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        city,
        temp: city === 'الرياض' ? 34 : city === 'القاهرة' ? 28 : 22,
        condition: city === 'الرياض' ? 'مشمس وصافٍ ☀️' : 'معتدل ولطيف 🌤️'
      });
    }, 900);
  });
}

// مكون بطاقة الطقس
function WeatherCard({ weatherPromise }: { weatherPromise: Promise<WeatherReport> }) {
  // فك الوعد مباشرة بواسطة use API
  const report = use(weatherPromise);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold text-white text-sm">{report.city}</h4>
        <span className="text-lg font-bold text-amber-400 font-mono">{report.temp}°C</span>
      </div>
      <p className="text-xs text-slate-400">الحالة الجوية: {report.condition}</p>
    </div>
  );
}

// المكون الحاوي لإدارة الاستعلامات
export function WeatherSuspensePortal() {
  const [selectedCity, setSelectedCity] = useState<string>('الرياض');
  // تخزين الوعد في الحالة بحيث يتجدد فقط عند تغيير المدينة
  const [promise, setPromise] = useState<Promise<WeatherReport>>(() => fetchWeather('الرياض'));

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    // إنشاء وعد جديد عند اختيار مدينة أخرى
    setPromise(fetchWeather(city));
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">نشرة الطقس (use + Suspense)</h3>
      <p className="text-xs text-slate-400 mb-4">
        فك الوعود بسلاسة وبدون أي useEffect أو حالات loading يدوية.
      </p>

      {/* أزرار اختيار المدينة */}
      <div className="flex gap-2 mb-4">
        {['الرياض', 'القاهرة', 'بيروت'].map((city) => (
          <button
            key={city}
            onClick={() => handleCityChange(city)}
            className={\`px-3 py-1.5 rounded-xl text-xs font-bold transition-all \${selectedCity === city ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}\`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* حيز Suspense يغلف المكون لتقديم واجهة الهيكل العظمي أثناء التحميل */}
      <Suspense
        fallback={
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl animate-pulse space-y-2">
            <div className="h-4 bg-slate-800 rounded w-1/2"></div>
            <div className="h-3 bg-slate-800 rounded w-3/4"></div>
          </div>
        }
      >
        <WeatherCard weatherPromise={promise} />
      </Suspense>
    </div>
  );
}`,
      outputExplanation: "يوضح الكود التناغم البديع؛ فعند تبديل المدينة، يتم إنشاء وعد جديد، وتستشعر React فوراً وجود وعد معلق داخل `use(weatherPromise)`، فتستبدل المكون تلقائياً بـ `fallback` الـ Skeleton حتى ينتهي الـ 900ms، لتعرض البطاقة المكتملة دون كتابة سطر واحد لـ `setLoading(true)`.",
      commonMistakes: [
        {
          mistake: "تمرير وعد جديد يُنشأ داخل JSX مثل `<WeatherCard weatherPromise={fetchWeather()} />`",
          fix: "احفظ الوعد في State أو خارج المكون؛ لأن إنشاء وعد جديد في كل تصيير يعيد تعليق المكون إلى الأبد."
        },
        {
          mistake: "نسيان تغليف الشجرة بـ Error Boundary للتعامل مع الوعود المرفوضة (Rejected Promises)",
          fix: "استخدم `<ErrorBoundary>` دائماً بالتزامن مع `<Suspense>` لالتقاط أخطاء فشل الوعود بسلاسة."
        }
      ],
      bestPractices: [
        "صمم واجهات بديلة (Skeleton Fallbacks) تحاكي نفس أبعاد المكون النهائي لمنع القفزات البصرية (CLS).",
        "احرص على كاش واستقرار مراجع الـ Promises لتجنب إعادة استدعاء الشبكة غير المرغوبة."
      ],
      infographic: {
        title: "آلية عمل use مع وعود Suspense",
        points: [
          "1. إرسال الوعد: المكون يستقبل `promise` كـ Prop ويمرره إلى `use(promise)`.",
          "2. التعليق (Suspension): الوعد معلق ➔ React تُظهر شاشة الـ `fallback` المحددة في `<Suspense>`.",
          "3. الاكتمال (Resolution): ينتهي الوعد بنجاح ➔ React تُزيل الـ fallback وتعرض المحتوى النهائي فوراً!"
        ]
      }
    },
    {
      id: "15.5.g",
      title: "استخدام Suspense Boundaries",
      englishTerm: {
        term: "Designing Suspense Boundaries",
        pronunciation: "ديزاينينغ سسبنس باوندريز",
        meaning: "هندسة حواجز التعليق المجزأة لعزل حالات التحميل وتدفق المحتوى بأسلوب البث المباشر Streaming SSR"
      },
      description: "حاجز التعليق (Suspense Boundary) هو مكون `<Suspense>` الذي يحدد النطاق الجغرافي الذي سيتأثر بحالة التحميل داخل شجرة المكونات. بدلاً من وضع حاجز واحد عملاق يغلف الصفحة كاملة (مما يمنع ظهور أي جزء من الصفحة حتى يكتمل أبطأ طلب بيانات)، تتيح لنا React تصميم حواجز مجزأة ودقيقة (Granular Boundaries)؛ بحيث تظهر القوائم العلوية وشريط التصفح فوراً، بينما تتدفق الأقسام الثقيلة كالبطاقات والتحليلات تدريجياً في مكانها الخاص.",
      analogy: "يشبه الأمر بناء جدران مقاومة للماء في الغواصات الحديثة؛ إذا حدث تسرب أو تأخر في حجرة واحدة، يغلق الباب العازل للحجرة وتستمر باقي الغواصة في الإبحار بأمان، بدلاً من غرق الغواصة بأكملها بسبب قطرة ماء في زاوية واحدة!",
      whyItMatters: "حواجز التعليق المجزأة هي الأساس المشغل لميزة البث المباشر (Streaming SSR) في خوادم الويب الحديثة، وتمنح المستخدم محتوى فورياً يرفع من مقاييس سرعة الموقع (First Contentful Paint - FCP).",
      syntax: "<Suspense fallback={<HeaderSkeleton />}>\n  <Header />\n</Suspense>\n<Suspense fallback={<FeedSkeleton />}>\n  <Feed />\n</Suspense>",
      simpleExample: `// مثال يوضح تقسيم الصفحة لحاجزين مستقلين
import { Suspense } from 'react';

export function SimpleMultiBoundary() {
  return (
    <div className="space-y-4">
      {/* حاجز مستقل للجزء السريع */}
      <Suspense fallback={<div className="p-3 bg-slate-800 rounded">تحميل الترويسة...</div>}>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded">الترويسة الرئيسية (جاهزة)</div>
      </Suspense>

      {/* حاجز مستقل للجزء البطيء */}
      <Suspense fallback={<div className="p-6 bg-slate-800 rounded animate-pulse">تحميل المحتوى الإخباري...</div>}>
        <div className="p-6 bg-slate-900 border border-slate-800 rounded">الأخبار والمنشورات الحية</div>
      </Suspense>
    </div>
  );
}`,
      advancedExample: `// لوحة تحكم بمستويات متعددة من حواجز Suspense المتداخلة
import React, { Suspense } from 'react';

// مكون سريع لا يحتاج انتظاراً
function DashboardHeader() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center mb-4">
      <h4 className="font-bold text-white text-sm">لوحة العمليات السحابية</h4>
      <span className="text-xs px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full font-bold">
        النظام متصل ⚡
      </span>
    </div>
  );
}

// مكون بطيء يحتاج وقتاً
function SlowServerMetrics() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
      <h5 className="font-bold text-cyan-400 text-xs">إحصائيات استهلاك الخوادم (محملة ببطء):</h5>
      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
        <div className="p-2 bg-slate-950 rounded">المعالج: 34%</div>
        <div className="p-2 bg-slate-950 rounded">الذاكرة: 62%</div>
      </div>
    </div>
  );
}

// مكون جدول المعاملات
function TransactionsTable() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300">
      قائمة آخر العمليات المالية المسجلة اليوم (15 معاملة).
    </div>
  );
}

// لوحة القيادة التي تجمع الحواجز المجزأة
export function GranularSuspenseDashboard() {
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-amber-400 mb-2">حواجز Suspense المجزأة</h3>
      <p className="text-xs text-slate-400 mb-4">
        ظهور الأجزاء الجاهزة فوراً وتدفق الأجزاء البطيئة بأسلوب متدرج ومستقل.
      </p>

      {/* 1. الترويسة تظهر فوراً وبدون أي تعطيل */}
      <DashboardHeader />

      <div className="space-y-4">
        {/* 2. حاجز مستقل لإحصائيات الخادم */}
        <Suspense
          fallback={
            <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl animate-pulse text-xs text-slate-500">
              ⏳ جاري تدفق إحصائيات المعالج والذاكرة...
            </div>
          }
        >
          <SlowServerMetrics />
        </Suspense>

        {/* 3. حاجز مستقل لجدول المعاملات */}
        <Suspense
          fallback={
            <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl animate-pulse text-xs text-slate-500">
              ⏳ جاري تحميل جدول المعاملات المالية...
            </div>
          }
        >
          <TransactionsTable />
        </Suspense>
      </div>
    </div>
  );
}`,
      outputExplanation: "تظهر أهمية تجزئة الحواجز في أن بطء قسم 'إحصائيات الخوادم' لا يمنع إطلاقاً ظهور الترويسة أو جدول المعاملات فور جاهزيتهما، مما يلغي شاشات التحميل الشاملة ويقدم محتوى مفيداً للعين بأسرع وقت ممكن.",
      commonMistakes: [
        {
          mistake: "وضع حاجز Suspense واحد في جذر التطبيق بالكامل",
          fix: "قسّم الحواجز إلى نطاقات دقيقة حول المكونات التي تتطلب جلب بيانات مستقلة."
        },
        {
          mistake: "استخدام نصوص بسيطة في الـ fallback تسبب قفزة بصرية عند استبدالها بالمحتوى",
          fix: "صمم الـ fallback بهياكل Skeleton مطابقة لحجم المكون المستهدف."
        }
      ],
      bestPractices: [
        "ضع الحواجز حول المكونات البطيئة لعزلها عن الأجزاء السريعة في الواجهة.",
        "ادمج الحواجز مع ميزة Streaming SSR في Next.js لتدفق شفرة HTML تدريجياً عبر الشبكة."
      ],
      infographic: {
        title: "حاجز تعليق وحيد مقابل حواجز مجزأة",
        points: [
          "حاجز وحيد ضخم: بطء مكون واحد يؤخر ظهور الصفحة بأكملها ➔ شاشة بيضاء طويلة ومزعجة.",
          "حواجز مجزأة (Granular): كل مكون يحمل حاجزه الخاص ➔ ظهور فوري للترويسة وشريط القوائم وتدفق متدرج للأقسام الأخرى!",
          "المكسب: تحسين جذري لمؤشرات الأداء وزيادة تفاعل المستخدم."
        ]
      }
    },
    {
      id: "15.5.h",
      title: "الفرق بين Suspense وجلب البيانات التقليدي",
      englishTerm: {
        term: "Suspense vs Traditional Data Fetching",
        pronunciation: "سسبنس فيرسس تراديشونال داتا فيتشينغ",
        meaning: "المقارنة المعمارية بين نمط Fetch-on-Render القديم ونمط Render-as-you-fetch الحديث المعتمد على Suspense"
      },
      description: "في الأسلوب الكلاسيكي لجلب البيانات (Fetch-on-Render بـ `useEffect`)، لا يبدأ المكون في طلب البيانات إلا بعد أن يتم تصييره في الشاشة. وإذا كان المكون يحتوي على مكونات فرعية تجلب بياناتها أيضاً، تقع كارثة الشلالات المتتالية (Network Waterfalls)، حيث ينتظر المكون الأب حتى تنتهي بياناته، ثم ينشئ الابن، ثم ينتظر الابن بياناته، مما يراكم أوقات التحميل. بينما نمط Suspense الحديث يتبنى مبدأ (Render-as-you-fetch)؛ حيث تنطلق طلبات البيانات بالتوازي فوراً، وتقوم React بتنسيق العرض بتناغم مذهل.",
      analogy: "يشبه الأمر الذهاب لمطعم وجبات سريعة؛ النمط الكلاسيكي يشبه أن تقف في الطابور، ثم تطلب البرغر وتنتظر حتى يستوي، ثم تقف في طابور ثانٍ لتطلب البطاطس وتنتظر، ثم طابور ثالث للمشروب! بينما نمط Suspense يشبه حجز وجبة كاملة مسبقاً بالتطبيق؛ يتم تجهيز البرغر والبطاطس والمشروب معاً في نفس اللحظة وتستلم الوجبة كاملة على صينية واحدة!",
      whyItMatters: "يقضي نمط Suspense على شلالات الشبكة (Waterfalls) ويقلل الزمن الإجمالي لجلب بيانات الصفحة المعقدة بنسبة تصل إلى 50% أو أكثر.",
      syntax: "// النمط القديم (Waterfall بـ useEffect):\nuseEffect(() => { fetch().then(...) }, []);\n\n// النمط الحديث (Render-as-you-fetch مع Suspense):\nconst data = use(parallelPromise);",
      simpleExample: `// مقارنة توضيحية لأسلوب الشلال مقابل التوازي
export function WaterfallComparisonOverview() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs space-y-2">
      <div className="p-2 bg-rose-950/30 border border-rose-800 rounded text-rose-300">
        ❌ النمط القديم (useEffect): الأب ينتظر (500ms) ➔ ثم الابن يبدأ وينتظر (500ms) ➔ الإجمالي 1000ms!
      </div>
      <div className="p-2 bg-emerald-950/30 border border-emerald-800 rounded text-emerald-300">
        ✅ نمط Suspense الحديث: الأب والابن ينطلقان بالتوازي معاً في نفس اللحظة ➔ الإجمالي 500ms فقط!
      </div>
    </div>
  );
}`,
      advancedExample: `// تطبيق محاكاة حية يبرهن على الفرق في سرعة الاستجابة وتفادي الـ Waterfall
import { useState, Suspense, use } from 'react';

// دالة محاكاة لجلب بيانات المستخدم
function fetchUser() {
  return new Promise<string>((r) => setTimeout(() => r('سالم العتيبي'), 600));
}

// دالة محاكاة لجلب منشورات المستخدم
function fetchPosts() {
  return new Promise<string[]>((r) => setTimeout(() => r(['مقال 1', 'مقال 2', 'مقال 3']), 600));
}

// المكون الحديث الذي يستهلك الوعود المتوازية بـ use و Suspense
function ModernParallelUser({ userPromise, postsPromise }: { userPromise: Promise<string>; postsPromise: Promise<string[]> }) {
  const user = use(userPromise);
  const posts = use(postsPromise);

  return (
    <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
      <p className="font-bold text-xs text-emerald-400">👤 اسم المستخدم: {user}</p>
      <p className="text-[11px] text-slate-400">عدد المنشورات المحملة بالتوازي: {posts.length}</p>
    </div>
  );
}

export function SuspenseVsTraditionalLab() {
  const [activeTest, setActiveTest] = useState<'traditional' | 'suspense'>('suspense');
  // وعود متوازية تنطلق في نفس اللحظة
  const [promises, setPromises] = useState(() => ({
    user: fetchUser(),
    posts: fetchPosts()
  }));

  const reloadPromises = () => {
    setPromises({
      user: fetchUser(),
      posts: fetchPosts()
    });
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">مختبر Suspense ضد النمط التقليدي</h3>
      <p className="text-xs text-slate-400 mb-4">
        توازي جلب البيانات يقضي على شلالات الشبكة ويضاعف سرعة الاستجابة.
      </p>

      <button
        onClick={reloadPromises}
        className="w-full mb-4 py-2 bg-blue-600 hover:bg-blue-500 font-bold rounded-xl text-xs transition-colors"
      >
        إعادة إطلاق الطلبات واختبار التوازي ⏱️
      </button>

      <Suspense
        fallback={
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-center text-xs text-cyan-400 animate-pulse">
            ⏳ جلب متوازٍ للبيانات عبر Suspense (زمن كلي = زمن أبطأ طلب فقط!)...
          </div>
        }
      >
        <ModernParallelUser userPromise={promises.user} postsPromise={promises.posts} />
      </Suspense>
    </div>
  );
}`,
      outputExplanation: "يوضح المختبر أن نمط Suspense مع إطلاق الوعود المتوازية يجعل إجمالي زمن الانتظار هو زمن الطلب الأطول فقط (600ms)، بينما في نمط `useEffect` التقليدي كان زمن الانتظار سيتراكم ليصل إلى (1200ms) بسبب تسلسل الاعتماديات.",
      commonMistakes: [
        {
          mistake: "الانتظار حتى انتهاء المكون الأب قبل بدء جلب بيانات المكون الابن",
          fix: "أطلق طلبات البيانات في أعلى مستوى ممكن بالتوازي ومرر الوعود إلى حواجز Suspense الفرعية."
        },
        {
          mistake: "الاعتقاد بأن Suspense تقوم بجلب البيانات بنفسها",
          fix: "Suspense هي آلية تنسيق لعرض حالات الانتظار؛ جلب البيانات الفعلي يتم عبر دوال fetch أو مكتبات متوافقة مثل TanStack Query."
        }
      ],
      bestPractices: [
        "استخدم نمط Render-as-you-fetch لتفادي ظاهرة Network Waterfalls تماماً.",
        "ادمج Suspense مع أحدث مكتبات إدارة بيانات الخادم للاستفادة من الكاش التلقائي المدمج."
      ],
      infographic: {
        title: "مقارنة شلال الشبكة مقابل التوازي في Suspense",
        points: [
          "شلال useEffect: طلب 1 ➔ انتظار ➔ رسم الأب ➔ طلب 2 ➔ انتظار ➔ رسم الابن (وقت مضاعف!).",
          "توازي Suspense: طلب 1 + طلب 2 ينطلقان معاً في الميلي ثانية الأولى ➔ رسم الواجهة فوراً عند اكتمالهما!",
          "الفارق الزمني: اختصار يصل لـ 50% من زمن تحميل الشاشات المعقدة."
        ]
      }
    },
    {
      id: "15.5.i",
      title: "مفهوم React Compiler",
      englishTerm: {
        term: "React Compiler (React Forget)",
        pronunciation: "رياكت كومبايلر (رياكت فورغيت)",
        meaning: "المترجم الذكي المدمج في React الحديثة الذي يتولى تحسين الأداء والتخزين المؤقت تلقائياً في وقت البناء"
      },
      description: "لسنوات طويلة، كان على مطوري React التفكير المستمر في الأداء: متى نضع `useMemo`؟ متى نحتاج `useCallback`؟ وأين نضع `React.memo`؟ هذا الإرهاق الذهني ينتهي رسمياً مع إطلاق المترجم الرسمي **React Compiler** (المعروف سابقاً باسم المشروع الرمزي React Forget). يعمل المترجم أثناء خطوة البناء (Build-time) في مشاريع Vite أو Next.js، حيث يقوم بتحليل شفرة جافاسكربت وتطبيق التخزين المؤقت تلقائياً على كل دالة وقيمة ومكون يحتاج إلى ذلك، دون أن يكتب المطور سطراً واحداً من هذه الخطافات اليدوية!",
      analogy: "يشبه الأمر التحول من سيارات التروس اليدوية القديمة (حيث تضطر للضغط على القابض وتغيير عصا التروس بيدك مع كل منعطف) إلى سيارات التروس الأوتوماتيكية الذكية؛ السيارة تختار الترس المثالي لسرعتك تلقائياً وبدقة ميكانيكية مطلقة، وتتركك تركز فقط على متعة القيادة ومراقبة الطريق!",
      whyItMatters: "يحول React Compiler كتابة الشفرة لتعود بسيطة ونقية كما كانت في بدايات React؛ مع التمتع بأقصى درجات الأداء وتوفير آلاف الساعات التي كانت تضيع في تصحيح أخطاء مصفوفات الاعتماديات والتخزين المؤقت اليدوي.",
      syntax: "// قبل المترجم (كود يدوي مجهد):\nconst val = useMemo(() => heavy(), [dep]);\n\n// مع React Compiler (كود نقي وبسيط والمترجم يحسنه تلقائياً):\nconst val = heavy();",
      simpleExample: `// مثال يوضح كيف يرى المطور الكود مع React Compiler
// لا توجد useMemo ولا useCallback ولا React.memo!
export function CompilerCleanComponent({ items, onItemClick }: { items: string[]; onItemClick: (i: string) => void }) {
  // كتابة كود جافاسكربت نقي وعادي
  const sortedItems = [...items].sort();

  return (
    <ul className="p-3 bg-slate-900 rounded-xl text-white text-xs space-y-1">
      {sortedItems.map((it, idx) => (
        <li
          key={idx}
          onClick={() => onItemClick(it)}
          className="p-1 hover:bg-slate-800 rounded cursor-pointer"
        >
          {it}
        </li>
      ))}
    </ul>
  );
  // يتولى React Compiler في وقت البناء حقن التحسين المؤقت تلقائياً بدقة بالغة!
}`,
      advancedExample: `// مقارنة توضيحية لما يقوم به React Compiler خلف الكواليس
import { useState } from 'react';

export function ReactCompilerArchitectureViewer() {
  const [viewMode, setViewMode] = useState<'developerCode' | 'compiledOutput'>('developerCode');

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-lg mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">ثورة React Compiler (React Forget)</h3>
      <p className="text-xs text-slate-400 mb-4">
        شاهد كيف يحول المترجم شفرتك البسيطة إلى شفرة محسنة بأقصى درجات الدقة.
      </p>

      {/* أزرار التبديل */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setViewMode('developerCode')}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${viewMode === 'developerCode' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          الكود الذي يكتبه المطور ✍️
        </button>
        <button
          onClick={() => setViewMode('compiledOutput')}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${viewMode === 'compiledOutput' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          الكود الناتج من المترجم تلقائياً ⚙️
        </button>
      </div>

      {viewMode === 'developerCode' ? (
        <div className="p-4 bg-slate-900 border border-emerald-500/30 rounded-xl font-mono text-xs text-emerald-300 space-y-1">
          <p className="text-slate-500">// كود نظيف، بدون أي useMemo أو useCallback:</p>
          <p>function UserCard(&#123; user, onSelect &#125;) &#123;</p>
          <p>&nbsp;&nbsp;const formattedName = user.firstName + " " + user.lastName;</p>
          <p>&nbsp;&nbsp;return &lt;button onClick=&#123;() =&gt; onSelect(user.id)&#125;&gt;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&#123;formattedName&#125;</p>
          <p>&nbsp;&nbsp;&lt;/button&gt;;</p>
          <p>&#125;</p>
        </div>
      ) : (
        <div className="p-4 bg-slate-900 border border-cyan-500/30 rounded-xl font-mono text-xs text-cyan-300 space-y-1">
          <p className="text-slate-500">// كود فائق الكفاءة يحقنه React Compiler في الـ Build:</p>
          <p>const $ = _c(4); // فتح مساحات كاش داخلية</p>
          <p>if ($[0] !== user.firstName || $[1] !== user.lastName) &#123;</p>
          <p>&nbsp;&nbsp;$[2] = user.firstName + " " + user.lastName;</p>
          <p>&nbsp;&nbsp;$[0] = user.firstName; $[1] = user.lastName;</p>
          <p>&#125;</p>
          <p>return $[3] = &lt;button ...&gt;&#123;$[2]&#125;&lt;/button&gt;;</p>
        </div>
      )}

      <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
        * مع React Compiler، يتوقف المطور عن إدارة الـ Memoization يدوياً، ويتكفل المترجم بحفظ كل قيمة ودالة وعنصر JSX بدقة تفوق البرمجة اليدوية.
      </p>
    </div>
  );
}`,
      outputExplanation: "يوضح العرض المعماري أن المترجم يحقن تعليمات تخزين مؤقت دقيقة على مستوى كل خاصية ومتغير (`Fine-grained Memoization`)، مما يجعل التطبيق في قمة الأداء التلقائي دون أي تدخل بشري.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن React Compiler يسمح بكتابة كود يخرق قواعد React",
          fix: "يشترط المترجم التزامك الصارم بقواعد React الأساسية (مثل نقاء الدوال وعدم تعديل الـ State مباشرة) لكي يتمكن من تحسين الشفرة بأمان."
        },
        {
          mistake: "البدء فوراً بمسح كافة خطافات useMemo القديمة قبل تفعيل المترجم في المشروع",
          fix: "احتفظ بالكود القديم؛ فالمترجم يتعايش بسلام مع useMemo القديمة ولا يكسرها."
        }
      ],
      bestPractices: [
        "استخدم أداة `eslint-plugin-react-compiler` الرسمية للتحقق من جاهزية شفرتك للمترجم.",
        "احرص على كتابة دوال نقية (Pure Functions) تحترم مبدأ عدم تعديل الكائنات (Immutability)."
      ],
      infographic: {
        title: "التحول التاريخي مع React Compiler",
        points: [
          "قبل المترجم: صراع يومي مع `useMemo` و `useCallback` و `exhaustive-deps` وتعقيد ذهني دائم.",
          "مع المترجم: كتابة كود جافاسكربت نقي وبسيط ➔ المترجم يقوم بالـ Memoization تلقائياً في الـ Build.",
          "المكسب الأعظم: إطلاق طاقة المطور للتركيز على ميزات التطبيق بدلاً من حيل الأداء اليدوية."
        ]
      }
    },
    {
      id: "15.5.j",
      title: "فهم تأثير React Compiler على Memoization",
      englishTerm: {
        term: "Impact of React Compiler on Memoization Best Practices",
        pronunciation: "إمباكت أوف رياكت كومبايلر أون ميمويزيشن بست براكتسيز",
        meaning: "كيف يغير المترجم الجديد أفضل الممارسات البرمجية ويجعل الكود البسيط هو المعيار المستقبلي"
      },
      description: "مع دخول React Compiler، تتغير العديد من النصائح البرمجية القديمة التي اعتدنا عليها في مجتمع React:\n1. لا داعي للقلق بشأن إعادة إنشاء الدوال البسيطة وتمريرها للأبناء؛ فالمترجم يتكفل بتثبيتها.\n2. التوقف عن التغليف الروتيني للمكونات بـ `React.memo`، حيث يقوم المترجم بمقارنة Props بدقة فائقة.\n3. أصبحت 'قواعد React' (Rules of React) - وتحديداً نقاء الدوال وعدم تعديل المدخلات (No Mutations) - أكثر أهمية من أي وقت مضى؛ لأن المترجم يعتمد على هذه الافتراضات الصارمة لإجراء تحسيناته دون إدخال أخطاء في زمن التشغيل.",
      analogy: "يشبه الأمر الانتقال إلى طهي الطعام في فرن ذكي مزود بمستشعرات ليزرية ومبرمج آلي؛ لا تحتاج لفتح باب الفرن كل دقيقتين وقياس الحرارة بالشوكة بنفسك، ولكنك ما زلت مطالباً بالالتزام بمقادير الوصفة بدقة حتى تخرج الكعكة مثالية المذاق!",
      whyItMatters: "معرفة هذا التحول يجعلك مستعداً للمستقبل، ويمنعك من تعليم المطورين الجدد ممارسات يدوية معقدة أوشكت على الاندثار لصالح الحلول التلقائية الذكية.",
      syntax: "// الممارسة الحديثة في عصر React Compiler:\n// اكتب كودك النقي مباشرة ودع المترجم يقود الأداء!",
      simpleExample: `// مقارنة الممارسات الحديثة
// الممارسة الحديثة الموصى بها في عصر المترجم:
export function FutureReadyCard({ user, onSelect }: { user: { name: string }; onSelect: () => void }) {
  // دالة عادية ومباشرة بدون useCallback
  const handleClick = () => {
    onSelect();
  };

  return (
    <button onClick={handleClick} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white">
      اختيار: {user.name}
    </button>
  );
}`,
      advancedExample: `// دليل الممارسات المستقبلية في كتابة المكونات مع React Compiler
import { useState } from 'react';

export function CompilerBestPracticesGuide() {
  const [selectedRule, setSelectedRule] = useState<number>(1);

  const rules = [
    {
      id: 1,
      title: "1. الالتزام الصارم بنقاء الدوال (Purity)",
      desc: "دوال المكونات يجب أن تكون نقية 100%؛ نفس المدخلات تعطي نفس الـ JSX دائماً دون تعديل متغيرات خارجية.",
      status: "إلزامي للمترجم ⚠️"
    },
    {
      id: 2,
      title: "2. حظر تعديل الكائنات الممرة (No Mutations)",
      desc: "ممنوع تعديل props أو state باليد مثل 'user.name = new'؛ استخدم دائماً نسخاً جديدة بأسلوب Immutability.",
      status: "حاسم لمنع الأخطاء 🛑"
    },
    {
      id: 3,
      title: "3. الاستغناء عن useMemo و useCallback اليدويين",
      desc: "في المشاريع المفعل فيها المترجم، اكتب كوداً عادياً وبسيطاً؛ فالمترجم يتفوق على البشر في دقة التخزين المؤقت.",
      status: "المعيار المستقبلي 🚀"
    }
  ];

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-emerald-400 mb-2">أفضل الممارسات في عصر المترجم</h3>
      <p className="text-xs text-slate-400 mb-4">
        كيف تصبح شفرتك متوافقة 100% مع تحسينات React Compiler التلقائية.
      </p>

      {/* بطاقات القواعد */}
      <div className="space-y-3 mb-4">
        {rules.map((r) => (
          <div
            key={r.id}
            onClick={() => setSelectedRule(r.id)}
            className={\`p-3.5 border rounded-xl cursor-pointer transition-all \${selectedRule === r.id ? 'bg-slate-900 border-emerald-500/60 ring-1 ring-emerald-500/30' : 'bg-slate-900/40 border-slate-800'}\`}
          >
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-bold text-xs text-slate-200">{r.title}</h4>
              <span className="text-[10px] text-amber-400 font-mono">{r.status}</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح الدليل أن التركيز في مستقبل React لم يعد منصباً على حفظ الدوال بـ useCallback، بل على نقاء المنطق البرمجي واحترام قواعد الـ Immutability، مما يتيح لمحرك المترجم رفع الأداء إلى حدوده القصوى تلقائياً.",
      commonMistakes: [
        {
          mistake: "تعديل محتوى مصفوفة أو كائن ممرر في الـ props داخل المكون",
          fix: "عامل كافة الـ Props والـ State كبيانات للقراءة فقط (Read-only) ولا تعدل عناصرها مباشرة مطلقاً."
        },
        {
          mistake: "الاعتقاد بأن المترجم يلغي الحاجة لتعلم React Hooks الأساسية كـ useState و useEffect",
          fix: "المترجم يلغي فقط التخزين المؤقت اليدوي (useMemo/useCallback)؛ أما خطافات الحالة والآثار الجانبية فتبقى جوهر React."
        }
      ],
      bestPractices: [
        "ركز على وضوح وبساطة الكود البرمجي وتجنب التعقيد المصطنع.",
        "احرص على ألا تحتوي دوال تصيير المكونات على أي آثار جانبية (Side Effects) مباشرة."
      ],
      infographic: {
        title: "ما الذي يتغير مع React Compiler؟",
        points: [
          "ما يندثر: كتابة `useMemo` و `useCallback` و `React.memo` اليدوية في كل ملف.",
          "ما يبقى ويتعزز: قواعد نقاء الدوال (Pure Functions) وعدم تعديل البيانات (Immutability).",
          "الخلاصة: برمج كما كنت تفعل في JavaScript العادية ودع المترجم يتكفل بتفاصيل الأداء."
        ]
      }
    },
    {
      id: "15.5.k",
      title: "متابعة الميزات المستقرة والتجريبية",
      englishTerm: {
        term: "Tracking Stable vs Experimental Features",
        pronunciation: "تراكينغ ستيبل فيرسس إكسبيريمنتال فيتشرز",
        meaning: "منهجية متابعة إصدارات React الرسمية وقنوات الإصدار وتحديد متى تعتمد الميزات في الإنتاج"
      },
      description: "تمتلك React قنوات إصدار واضحة (Release Channels) تضمن استقرار المشاريع الكبرى:\n1. القناة المستقرة (Latest / Stable): تحتوي على الميزات التي خضعت لاختبارات مكثفة في شركة Meta وآلاف الشركات وأصبحت معتمدة للاستخدام في الإنتاج (Production-ready) مثل React 19 المستقرة.\n2. قناة النسخ التجريبية (Canary / Experimental): مخصصة لاختبار الميزات المستقبلية ومقترحات RFC في بيئات تجريبية وأطر العمل الشريكة مثل Next.js.\nيجب على المهندس المحترف معرفة أين تقف كل ميزة في مسار الاستقرار، وعدم بناء أنظمة إنتاج حساسة على ميزات تجريبية قد تتغير هياكلها البرمجية مستقبلاً.",
      analogy: "يشبه الأمر شركات صناعة الطائرات؛ هناك طرازات تجارية معتمدة ومطابقة لكافة معايير السلامة الدولية تحلق بها في رحلاتك اليومية (Stable)، وهناك طائرات اختبار تجريبية يقودها طيارو الاختبار في قواعد عسكرية لتجربة محركات جديدة (Canary)؛ لا تأخذ ركاباً عاديين في طائرة اختبار تجريبية حتى تصدر لها رخصة الطيران الرسمية!",
      whyItMatters: "يحمي هذا الوعي مشروعك من التوقف المفاجئ (Breaking Changes) ويوفر عليك تكلفة إعادة كتابة الأكواد كلما طرأ تغيير على واجهة تجريبية لم تصل لمرحلة الاستقرار النهائي بعد.",
      syntax: "// التحقق من إصدار React المثبت في مشروعك:\n// npm list react react-dom\n// أو في الشفرة:\nimport { version } from 'react';\nconsole.log(`إصدار React الحالي: ${version}`);",
      simpleExample: `// استيراد رقم إصدار React الرسمي
import { version } from 'react';

export function ReactVersionBadge() {
  return (
    <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs flex justify-between items-center">
      <span>إصدار React المشغل في بيئتك:</span>
      <span className="font-mono font-bold text-cyan-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
        v{version}
      </span>
    </div>
  );
}`,
      advancedExample: `// لوحة استعراض خارطة الميزات المستقرة والتجريبية في منظومة React
import { useState } from 'react';

interface ReactFeature {
  name: string;
  channel: 'Stable (مستقرة)' | 'Experimental (تجريبية)';
  recommendedFor: string;
  versionIntroduced: string;
}

const REACT_ECOSYSTEM_FEATURES: ReactFeature[] = [
  { name: 'React Actions (<form action>)', channel: 'Stable (مستقرة)', recommendedFor: 'مشاريع الإنتاج الحالية', versionIntroduced: 'React 19' },
  { name: 'useOptimistic Hook', channel: 'Stable (مستقرة)', recommendedFor: 'تحديثات الواجهة الفورية', versionIntroduced: 'React 19' },
  { name: 'useActionState Hook', channel: 'Stable (مستقرة)', recommendedFor: 'إدارة النماذج والتحميل', versionIntroduced: 'React 19' },
  { name: 'use API (Promises & Context)', channel: 'Stable (مستقرة)', recommendedFor: 'فك الوعود والسياق', versionIntroduced: 'React 19' },
  { name: 'Ref as a regular Prop', channel: 'Stable (مستقرة)', recommendedFor: 'استبدال forwardRef', versionIntroduced: 'React 19' },
  { name: 'React Compiler (Auto-memo)', channel: 'Experimental (تجريبية)', recommendedFor: 'مشاريع حديثة واختبارات الأداء', versionIntroduced: 'Canary / Beta' }
];

export function EcosystemTracker() {
  const [filter, setFilter] = useState<'all' | 'stable' | 'experimental'>('all');

  const filteredFeatures = REACT_ECOSYSTEM_FEATURES.filter((f) => {
    if (filter === 'stable') return f.channel.includes('Stable');
    if (filter === 'experimental') return f.channel.includes('Experimental');
    return true;
  });

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">متابعة ميزات React الرسمية</h3>
      <p className="text-xs text-slate-400 mb-4">
        دليل الاعتماد الهندسي للميزات بين الإنتاج المستقر والتجارب المستقبلية.
      </p>

      {/* أزرار التصفية */}
      <div className="flex gap-2 mb-4">
        {(['all', 'stable', 'experimental'] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => setFilter(mode)}
            className={\`px-3 py-1 rounded-lg text-xs font-semibold \${filter === mode ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-400'}\`}
          >
            {mode === 'all' ? 'الكل' : mode === 'stable' ? 'المستقرة ✅' : 'التجريبية 🧪'}
          </button>
        ))}
      </div>

      {/* قائمة الميزات */}
      <div className="space-y-2">
        {filteredFeatures.map((feat) => (
          <div key={feat.name} className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs space-y-1">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-200">{feat.name}</span>
              <span
                className={\`text-[10px] px-2 py-0.5 rounded-full font-bold \${feat.channel.includes('Stable') ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}\`}
              >
                {feat.channel}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">نطاق الاستخدام: {feat.recommendedFor} ({feat.versionIntroduced})</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح المتتبع خريطة الاستقرار؛ فميزات React 19 مثل `useOptimistic` و `useActionState` و `use` أصبحت رسمية ومستقرة تماماً وجاهزة لبيئات الإنتاج، بينما يواصل React Compiler رحلته في مراحل البيتا تمهيداً لاعتماده التلقائي الشامل.",
      commonMistakes: [
        {
          mistake: "الاعتماد على واجهات برمجية تجريبية في تطبيقات البنوك أو التجارة الحساسة قبل استقرارها",
          fix: "استخدم دائماً القناة المستقرة (Stable Releases) للأنظمة الحيوية لضمان عدم حدوث تكسر في التحديثات."
        },
        {
          mistake: "عدم قراءة وثائق الترقية الرسمية (React Upgrade Guide) قبل الانتقال لإصدار رئيسي جديد",
          fix: "راجع توثيق الترقية الرسمي دائماً لمعرفة التغييرات المعطلة واستراتيجيات التحديث السلسة."
        }
      ],
      bestPractices: [
        "تابع مدونة React الرسمية (react.dev/blog) لمعرفة مواعيد الاستقرار وتوجيهات الفريق الهندسي.",
        "فعّل الميزات المستقرة فور صدورها للاستفادة من تحسينات الأداء وأمان الأنواع وسهولة الصيانة."
      ],
      infographic: {
        title: "خارطة قنوات إصدار React",
        points: [
          "Canary / Alpha: مساحة الابتكار وتجربة ميزات جديدة بالتعاون مع أطر العمل.",
          "Release Candidate (RC): مرحلة تثبيت الواجهات البرمجية والتأكد من خلوها من العيوب.",
          "Latest / Stable: الاعتماد الرسمي للإنتاج العام مع ضمان التوافق طويل الأمد (LTS)."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q15.5.1",
      question: "ما هي الميزة الثورية لـ use API في React 19 مقارنة بكافة خطافات React التقليدية؟",
      options: [
        "أنها تعمل على تسريع اتصال الواي فاي في المتصفح",
        "أنها تسمح بقراءة الوعود Promises وفكها بأسلوب متزامن، ويمكن استدعاؤها شرطياً داخل كتل الشروط if والحلقات خلافاً لقواعد الHooks التقليدية",
        "أنها تلغي لغة TypeScript من المشروع",
        "أنها تقوم بحفظ الملفات تلقائياً على سطح المكتب"
      ],
      correctAnswer: 1,
      explanation: "تتميز واجهة `use` بأنها ليست خطافاً عادياً، بل API متطور يمكن استدعاؤه داخل الشروط `if` لقراءة السياق أو فك الـ Promises مباشرة بالتعاون مع حواجز `<Suspense>`."
    },
    {
      id: "q15.5.2",
      question: "كيف يتصرف خطاف useOptimistic في حال فشل طلب الخادم بعد إرسال التحديث المتفائل؟",
      options: [
        "يقوم بإغلاق المتصفح فوراً",
        "يتراجع تلقائياً وبشكل فوري (Automatic Rollback) عن التعديل المتفائل ويعيد الواجهة لقيمتها الحقيقية السابقة من الخادم دون كود تراجع يدوي",
        "يظل معلقاً في الحالة المتفائلة للأبد",
        "يقوم بحذف قاعدة البيانات"
      ],
      correctAnswer: 1,
      explanation: "من أعظم ميزات `useOptimistic` هي ميزة التراجع التلقائي (Auto-rollback)؛ فإذا فشل الـ Action، تعيد React القيمة فوراً إلى الحالة الأصلية المعتمدة دون الحاجة لكتابة منطق تراجع معقد."
    },
    {
      id: "q15.5.3",
      question: "ما هو الهدف الجوهري لمشروع React Compiler (المعروف بـ React Forget)؟",
      options: [
        "تحويل كود React إلى لغة C++ لتشغيلها على الروبوتات",
        "تحليل الشفرة في وقت البناء (Build-time) وتطبيق التخزين المؤقت (Memoization) تلقائياً على كافة الدوال والمكونات والقيم مما يلغي الحاجة لكتابة useMemo و useCallback يدوياً",
        "منع المطورين من استخدام Tailwind CSS",
        "إجبار جميع المطورين على العودة لـ Class Components"
      ],
      correctAnswer: 1,
      explanation: "يقوم React Compiler بأتمتة التخزين المؤقت في وقت التجميع، مما يحرر المطور من كتابة وإدارة `useMemo` و `useCallback` و `React.memo` يدوياً مع تحقيق أقصى درجات الأداء."
    }
  ],
  exercise: {
    id: "ex-15.5",
    title: "تمرين عملي: بناء استوديو التعليقات المتفائلة بنمط React 19 Actions و useOptimistic",
    description: "قم بإنشاء مكون `OptimisticCommentsStudio` في React 19 يحتوي على:\n1. قائمة تعليقات معتمدة في `useState`.\n2. استخدام `useOptimistic` لإظهار التعليق الجديد فوراً بمجرد الضغط على زر الإرسال مع وسم `(جاري الإرسال...)`.\n3. دالة `commentAction` غير متزامنة تقبل `FormData` وتحاكي تأخير شبكة 800ms ثم تعتمد التعليق في الحالة الأصلية.\n4. زر إرسال يتعطل أثناء الإرسال لتقديم تجربة استخدام مثالية.",
    hints: [
      "عرّف واجهة `Comment` تحتوي على `id`, `text`, `sending?`.",
      "استخدم `useOptimistic(comments, (state, text: string) => [...state, { id: 'temp', text, sending: true }])`.",
      "في دالة الـ Action اقرأ النص عبر `formData.get('comment')`.",
      "استدعِ `setOptimisticComment(text)` أولاً ثم قم بانتظار الـ Promise ثم حدث الحالة الأصلية بـ `setComments`."
    ],
    solution: `// استيراد الأدوات من React 19
import { useState, useOptimistic } from 'react';

// 1. تعريف واجهة بيانات التعليق
interface CommentItem {
  id: string;
  text: string;
  author: string;
  sending?: boolean;
}

export function OptimisticCommentsStudio() {
  // الحالة الأصلية للتعليقات المحفوظة على الخادم
  const [comments, setComments] = useState<CommentItem[]>([
    { id: 'c1', text: 'مقال رائع جداً، وميزات React 19 تبدو واعدة للغاية!', author: 'عبد الله' }
  ]);

  // استخدام useOptimistic لإنشاء نسخة متفائلة لحظية
  const [optimisticComments, setOptimisticComments] = useOptimistic(
    comments,
    (currentList, newCommentText: string) => [
      ...currentList,
      {
        id: \`temp-\${Date.now()}\`,
        text: newCommentText,
        author: 'أنت (الآن)',
        sending: true
      }
    ]
  );

  // دالة الـ Action غير المتزامنة
  const handleAddComment = async (formData: FormData) => {
    const text = (formData.get('comment') as string)?.trim();
    if (!text) return;

    // 1. تفعيل التحديث المتفائل اللحظي (0ms)
    setOptimisticComments(text);

    // 2. محاكاة طلب الشبكة للخادم
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 3. اعتماد التعليق رسمياً في الحالة الأصلية بعد تأكيد الخادم
    setComments((prev) => [
      ...prev,
      {
        id: \`c-\${Date.now()}\`,
        text,
        author: 'أنت'
      }
    ]);
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">استوديو التعليقات المتفائلة (React 19)</h3>
      <p className="text-xs text-slate-400 mb-4">
        التعليق يظهر فوراً على الشاشة قبل رد الخادم بفضل useOptimistic!
      </p>

      {/* قائمة التعليقات المتفائلة */}
      <div className="space-y-2 mb-4 max-h-56 overflow-y-auto">
        {optimisticComments.map((c) => (
          <div
            key={c.id}
            className={\`p-3 rounded-xl border text-xs transition-all \${
              c.sending ? 'bg-slate-900/60 border-amber-500/40 opacity-70' : 'bg-slate-900 border-slate-800'
            }\`}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-slate-200">{c.author}</span>
              {c.sending && (
                <span className="text-[10px] text-amber-400 font-mono animate-pulse">⏳ جاري الإرسال...</span>
              )}
            </div>
            <p className="text-slate-300">{c.text}</p>
          </div>
        ))}
      </div>

      {/* نموذج إضافة تعليق بنمط React 19 Action المباشر */}
      <form action={handleAddComment} className="flex gap-2">
        <input
          type="text"
          name="comment"
          placeholder="اكتب تعليقك وسيظهر فوراً..."
          className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 font-bold rounded-xl text-xs transition-colors"
        >
          إرسال 🚀
        </button>
      </form>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة React 19 ومستقبل المعالجة",
    nodes: [
      { id: "1", title: "React Actions", desc: "دوال غير متزامنة مدمجة تدير حالات النماذج والانتقالات تلقائياً" },
      { id: "2", title: "useOptimistic", desc: "استجابة فورية بـ 0ms وتراجع تلقائي كامل عند حدوث خطأ في الخادم" },
      { id: "3", title: "useActionState", desc: "الخطاف الشامل لإدارة حالات النماذج والأخطاء ومؤشر isPending المدمج" },
      { id: "4", title: "الواجهة use", desc: "فك الوعود والسياق في سطر واحد وكسر قيود الـ Hooks بالعمل داخل if" },
      { id: "5", title: "حواجز Suspense", desc: "تجزئة حالات التحميل ودعم البث المباشر Streaming SSR لتفادي الشاشات الفارغة" },
      { id: "6", title: "React Compiler", desc: "أتمتة التخزين المؤقت في وقت البناء والاستغناء التام عن useMemo اليدوية" }
    ]
  }
};
