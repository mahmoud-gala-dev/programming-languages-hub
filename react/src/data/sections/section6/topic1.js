// src/data/sections/section6/topic1.js
// الموضوع 1: التعامل مع الأحداث في React (Event Handling & Synthetic Events)

export const SECTION_6_TOPIC_1 = {
  id: "6.1",
  title: "التعامل مع الأحداث",
  englishTitle: "Event Handling in React",
  description: "الاستجابة لتفاعلات المستخدم (النقر، الكتابة، الإرسال)، وفهم نظام الأحداث الاصطناعية (Synthetic Events)، وكيفية تمرير المعاملات وتفادي فخاخ الاستدعاء الفوري وفقاعات الأحداث.",
  subtopics: [
    {
      id: "6.1.a",
      title: "مفهوم Event Handlers",
      englishTerm: "Event Handlers Concept (User Interactions Listener)",
      description: "دوال جافاسكريبت مخصصة يتم ربطها بعناصر JSX لتنفيذ منطق برمجي محدد استجابةً لفعل يقوم به المستخدم (مثل النقر بالماوس، الضغط على لوحة المفاتيح، تحريك المؤشر، أو سحب الملفات). في React، تُكتب أسماء معالجات الأحداث بصيغة camelCase (مثل onClick بدلاً من onclick).",
      realLifeAnalogy: "مثل جرس باب المنزل؛ الجرس في حد ذاته زر فيزيائي على الجدار، ولكنه متصل بسلك كهربائي بمكبر صوت داخل المنزل. عندما يضغط الضيف على الزر، يُطلق مكبر الصوت نغمة التنبيه فوراً.",
      whyItMatters: "التطبيقات بدون معالجات أحداث هي مجرد وثائق ساكنة لا روح فيها. معالجات الأحداث هي المحرك الأساسي الذي ينقل التطبيق من مجرد صورة بصرية إلى برنامج تفاعلي حي يستجيب لنوايا المستخدم.",
      syntax: "function handleClick() { ... }\n<button onClick={handleClick}>اضغط هنا</button>",
      simpleExample: `// دالة معالج حدث نقر بسيطة
function handleUserClick() {
  // طباعة رسالة ترحيبية في كونسول المتصفح
  console.log("تم النقر على الزر بنجاح!");
}
// مكون يربط معالج الحدث بزر
function ActionButton() {
  // إرجاع زر تفاعلي
  return (
    // ربط الدالة بالزر عبر خاصية onClick بصيغة camelCase
    <button 
      onClick={handleUserClick}
      className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold"
    >
      انقر للتفاعل
    </button>
  );
}`,
      advancedExample: `// مكون لوحة التحكم التفاعلية مع عدة معالجات أحداث
export function InteractiveControlPanel() {
  // معالج حدث النقر بالماوس
  const handleSystemPing = () => {
    // طباعة إشعار فحص النظام
    alert("تم إرسال إشارة تفقد النظام إلى الخادم المركزي!");
  };

  // معالج حدث تمرير الماوس فوق العنصر (Hover)
  const handleMouseEnter = () => {
    // تسجيل نشاط في سجل التطوير
    console.info("المستخدم يمرر المؤشر فوق لوحة الأمان.");
  };

  // إرجاع واجهة التحكم
  return (
    // حاوية البطاقة مع الاستماع لحدث دخول الماوس
    <div 
      onMouseEnter={handleMouseEnter}
      className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4"
    >
      <h3 className="font-bold text-lg text-indigo-400">لوحة العمليات الحية</h3>
      <p className="text-xs text-slate-400">
        حرك الماوس فوق البطاقة ولاحظ الكونسول، أو اضغط الزر لإرسال إشارة اختبار.
      </p>
      {/* زر تفعيل الاختبار */}
      <button 
        onClick={handleSystemPing}
        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-bold transition-all shadow-lg shadow-emerald-900/40"
      >
        اختبار جاهزية الخادم
      </button>
    </div>
  );
}`,
      output: "عند تحريك الماوس فوق البطاقة يُسجل المتصفح حدث Hover، وعند النقر على الزر يظهر تنبيه alert فوراً تأكيداً على التقاط الحدث وتنفيذ الدالة المربوطة.",
      commonMistakes: [
        {
          mistake: "كتابة اسم الحدث بحروف صغيرة مثل onclick بدلاً من صيغة CamelCase: onClick.",
          why: "تعتمد React صيغة camelCase الرسمية لكافة خصائص DOM وأحداثه؛ كتابة onclick بحروف صغيرة يتم تجاهلها أو معاملتها كخاصية HTML غير مدعومة بالكامل.",
          fix: "استخدم دائماً camelCase: onClick, onChange, onSubmit, onKeyDown."
        }
      ],
      bestPractices: [
        "سمِّ معالجات الأحداث بأسماء واضحة تبدأ بكلمة handle متبوعة باسم الحدث أو الفعل (مثل handleClick أو handleUserDelete).",
        "إذا كنت تمرر الدالة كخاصية لمكون فرعي، سمِّ الخاصية بـ onAction (مثل onSave) بينما تسمي الدالة المنفذة handleSave."
      ],
      infographicCard: {
        type: "flow-chart",
        title: "دورة حياة معالج الحدث (Event Handler Cycle)",
        steps: [
          "1. قيام المستخدم بفعل فيزيائي (نقرة ماوس / لمس شاشة)",
          "2. التقاط محرك المتصفح للحدث ونقله لنظام SyntheticEvent في React",
          "3. استدعاء الدالة المربوطة (Handler Function) وتمرير كائن الحدث لها",
          "4. تنفيذ المنطق وتحديث حالة المكون إن وجدت وإعادة رسم الواجهة"
        ]
      }
    },
    {
      id: "6.1.b",
      title: "التعامل مع onClick",
      englishTerm: "Handling onClick Events",
      description: "الحدث الأكثر استخداماً وشهرة في واجهات الويب وتطبيقات React. يستمع لنقرة زر الماوس الأيسر أو لمسة شاشة الهاتف الذكي، ويمكن ربطه بالأزرار والروابط والبطاقات وأي عنصر تفاعلي.",
      realLifeAnalogy: "مثل الضغط على مفتاح تشغيل محرك السيارة (Push Start)؛ نقرة واحدة موثوقة تبدأ سلسلة من العمليات الميكانيكية والكهربائية خلف الكواليس.",
      whyItMatters: "الـ onClick هو البوابة الأساسية لكل تفاعلات المستخدم الحاسمة: فتح النوافذ المنبثقة، شراء المنتجات، حذف البيانات، والتنقل بين علامات التبويب.",
      syntax: '<button onClick={() => console.log("Clicked")}>نقر</button>',
      simpleExample: `// مكون زر إعجاب بسيط
function LikeButton() {
  // دالة تُنفذ عند النقر
  function handleLikeClick() {
    // إظهار تنبيه لطيف للمستخدم
    alert("شكراً لك على الإعجاب بالمحتوى! ❤️");
  }

  return (
    // ربط حدث النقر بالدالة المباشرة
    <button 
      onClick={handleLikeClick}
      className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-bold text-xs"
    >
      أعجبني ❤️
    </button>
  );
}`,
      advancedExample: `// مكون قائمة خيارات سريعة تفاعلية بالنقر
export function QuickActionsBar({ onDownload, onShare, onBookmark }) {
  // إرجاع شريط أدوات بالنقر
  return (
    // حاوية الشريط بتنسيق داكن حديث
    <div className="flex items-center gap-2 p-3 bg-slate-900 border border-slate-800 rounded-xl">
      {/* زر التحميل يربط حدث النقر بدالة خارجية */}
      <button 
        onClick={onDownload}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-colors"
      >
        <span>📥</span>
        <span>تحميل التقرير</span>
      </button>

      {/* زر المشاركة مع دالة مضمنة تفحص دعم المتصفح */}
      <button 
        onClick={() => {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href);
            alert("تم نسخ الرابط إلى الحافظة بنجاح!");
          }
        }}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-colors"
      >
        <span>🔗</span>
        <span>مشاركة الرابط</span>
      </button>

      {/* زر الإشارة المرجعية */}
      <button 
        onClick={onBookmark}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/30 rounded-lg text-xs font-semibold transition-colors"
      >
        <span>🔖</span>
        <span>حفظ في المفضلة</span>
      </button>
    </div>
  );
}`,
      output: "عند النقر على أي زر في الشريط، يُستدعى المعالج المخصص له فقط؛ فالضغط على مشاركة ينسخ رابط الصفحة للحافظة مع إشعار للمستخدم.",
      commonMistakes: [
        {
          mistake: "وضع onClick على عناصر غير تفاعلية كـ <div> أو <span> دون إضافة دور ARIA أو دعم لوحة المفاتيح.",
          why: "يضر هذا بقابلية الوصول (Accessibility)، حيث لا يستطيع مستخدمو قارئات الشاشة أو لوحة المفاتيح الوصول للعنصر بالنقر عبر مفتاح Enter أو Space.",
          fix: "استخدم وسم <button> دائماً للأزرار، أو أضف role='button' وtabIndex={0} وonKeyDown إن اضطررت لاستخدام div."
        }
      ],
      bestPractices: [
        "استخدم عناصر <button> الحقيقية للنقرات للاستفادة المجانية من دعم لوحة المفاتيح وحالات التركيز (Focus states).",
        "احرص على تعطيل الزر (disabled) أثناء العمليات غير المتزامنة لمنع النقر المزدوج المتكرر (Debouncing)."
      ],
      infographicCard: {
        type: "ui-anatomy",
        title: "تشريح حدث النقر في React",
        parts: [
          { name: "العنصر التفاعلي", detail: "<button>" },
          { name: "خاصية الاستماع", detail: "onClick={...}" },
          { name: "المرجع البرمجي", detail: "handleLikeClick (دالة دون أقواس استدعاء)" }
        ]
      }
    },
    {
      id: "6.1.c",
      title: "التعامل مع onChange",
      englishTerm: "Handling onChange Events (Form Inputs & Realtime Updates)",
      description: "الحدث الأساسي المستخدم للاستماع لتغيرات قيم حقول الإدخال (Inputs)، ومربعات النصوص (Textareas)، وقوائم الاختيار (Select dropdowns). في React، يعمل حدث onChange في الوقت الفعلي مع كل ضغطة حرف على عكس HTML الأصلي الذي ينتظر حتى يفقد الحقل التركيز.",
      realLifeAnalogy: "مثل مسجل الصوت الصوتي؛ في كل لحظة تنطق فيها بحرف جديد، يلتقط الميكروفون التردد الصوتي ويسجله على الفور في الشريط المغناطيسي دون انتظار انتهائك من كامل الحديث.",
      whyItMatters: "هو حجر الزاوية لبناء النماذج المضبوطة (Controlled Components)، والتحقق من صحة المدخلات لحظياً (Real-time Validation)، وميزات البحث الحي (Live Search Filtering).",
      syntax: '<input onChange={(e) => console.log(e.target.value)} />',
      simpleExample: `// مكون حقل نصي يطبع ما يكتبه المستخدم في وحدة التحكم
function LiveInputLogger() {
  // دالة تستقبل كائن الحدث e
  function handleTextChange(event) {
    // استخراج القيمة الحالية المكتوبة داخل الحقل
    const currentValue = event.target.value;
    // طباعة القيمة لحظة بلحظة
    console.log("النص المكتوب حالياً:", currentValue);
  }

  return (
    // حقل إدخال مربوط بحدث التغير
    <input 
      type="text"
      placeholder="اكتب هنا..."
      onChange={handleTextChange}
      className="p-2.5 bg-slate-850 border border-slate-700 rounded-lg text-white text-xs w-64"
    />
  );
}`,
      advancedExample: `// مكون صندوق بحث تفاعلي مع عداد أحرف متبقية وتنبيه حدود الكتابة
import { useState } from "react";

export function LiveCharacterCounterInput({ maxLimit = 100 }) {
  // حالة محلية لتخزين النص المكتوب
  const [content, setContent] = useState("");

  // معالج حدث التغيير
  const handleChange = (e) => {
    // الحصول على القيمة المدخلة من كائن الحدث
    const val = e.target.value;
    // فحص ما إذا كان النص لم يتجاوز الحد الأقصى المسموح
    if (val.length <= maxLimit) {
      // تحديث الحالة بالنص الجديد
      setContent(val);
    }
  };

  // حساب الحروف المتبقية
  const remaining = maxLimit - content.length;

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md text-white space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-xs font-bold text-slate-300">أدخل وصف المنتج:</label>
        {/* شارة عدد الأحرف المتبقية بلون شرطي تحذيري */}
        <span className={\`text-xs font-mono font-bold \${
          remaining < 15 ? "text-rose-400" : "text-emerald-400"
        }\`}>
          متبقي: {remaining} حرف
        </span>
      </div>

      {/* مربع نص متعدد الأسطر يستمع لـ onChange */}
      <textarea
        rows={3}
        value={content}
        onChange={handleChange}
        placeholder="صف جهازك بإيجاز..."
        className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
      />
    </div>
  );
}`,
      output: "مع كل ضغطة زر كيبورد، يُستدعى handleChange وتُقرأ e.target.value، ويتم تحديث عداد الحروف المتبقية فوراً أمام عين المستخدم دون أي تأخير.",
      commonMistakes: [
        {
          mistake: "محاولة قراءة القيمة من e.value بدلاً من e.target.value.",
          why: "كائن الحدث e يحتوي على خصائص الحدث العامة، بينما العنصر الذي أطلق الحدث نفسه هو e.target، وقيمته النصية تكون داخل e.target.value.",
          fix: "تذكر دائماً الصيغة القياسية: event.target.value."
        }
      ],
      bestPractices: [
        "اربط حقل الإدخال دائماً بقيمة الحالة value={state} إلى جانب onChange لإنشاء Controlled Component متين.",
        "بالنسبة لحقول الاختيار checkboxes، اقرأ e.target.checked بدلاً من e.target.value."
      ],
      infographicCard: {
        type: "data-flow",
        title: "مسار استخراج بيانات حقل الإدخال عبر onChange",
        flow: [
          "1. المستخدم يكتب حرفاً في الحقل",
          "2. إطلاق حدث onChange وتمرير كائن SyntheticEvent (e)",
          "3. الوصول إلى عنصر DOM المستهدف: e.target",
          "4. قراءة القيمة النصية: e.target.value",
          "5. تخزين القيمة في الـ State لتحديث واجهة المستخدم"
        ]
      }
    },
    {
      id: "6.1.d",
      title: "التعامل مع onSubmit",
      englishTerm: "Handling onSubmit Events (Form Submissions)",
      description: "الحدث المخصص لنماذج HTML وسوم <form>. يتم إطلاقه عندما يضغط المستخدم على زر الإرسال (type='submit') أو يضغط مفتاح Enter داخل أي حقل إدخال في النموذج. يستلزم دائماً إيقاف السلوك الافتراضي للمتصفح لمنع إعادة تحميل الصفحة كلياً.",
      realLifeAnalogy: "مثل صندوق البريد الرسمي؛ بعد أن تنتهي من ملء جميع أوراق المعاملة وتضعها في المظروف، تسلم المظروف كاملاً للموظف بضغطة زر واحدة لمعالجة الحزمة ككتلة واحدة.",
      whyItMatters: "يوفر تجربة مستخدم سلسلة (Single Page Application UX) بحيث يتم إرسال البيانات إلى الخادم عبر Fetch أو Axios في الخلفية دون أن تطرف شاشة المتصفح أو تفقد حالتها المحفوظة في الذاكرة.",
      syntax: '<form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}> ... </form>',
      simpleExample: `// مكون نموذج تسجيل بريد إلكتروني بسيط
function NewsletterSignup() {
  // دالة معالجة إرسال النموذج
  function handleFormSubmit(e) {
    // منع المتصفح من إعادة تحميل الصفحة (إلزامي في React!)
    e.preventDefault();
    // إشعار المستخدم بنجاح الاشتراك
    alert("تم الاشتراك بنجاح في القائمة البريدية!");
  }

  return (
    // ربط الحدث بوسم form وليس بالزر مباشرة
    <form onSubmit={handleFormSubmit} className="flex gap-2">
      {/* حقل البريد الإلكتروني */}
      <input 
        type="email" 
        placeholder="أدخل بريدك الإلكتروني"
        required
        className="px-3 py-2 bg-slate-800 rounded-lg text-xs text-white border border-slate-700"
      />
      {/* زر الإرسال من نوع submit */}
      <button type="submit" className="px-4 py-2 bg-indigo-600 rounded-lg text-xs font-bold text-white">
        اشتراك
      </button>
    </form>
  );
}`,
      advancedExample: `// مكون نموذج تسجيل دخول مصرفي متكامل مع فحص المدخلات
import { useState } from "react";

export function SecureLoginForm({ onLoginSuccess }) {
  // حالات تخزين اسم المستخدم وكلمة المرور
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // معالج إرسال النموذج
  const handleSubmit = (e) => {
    // خطوة 1: منع إعادة التحميل الافتراضية
    e.preventDefault();

    // خطوة 2: التحقق من صحة المدخلات
    if (password.length < 8) {
      setErrorMessage("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل!");
      return;
    }

    // خطوة 3: تصفير رسائل الخطأ وتنفيذ دالة النجاح
    setErrorMessage("");
    onLoginSuccess({ username, timestamp: new Date().toISOString() });
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto text-white space-y-4"
    >
      <h3 className="text-lg font-black text-center text-slate-100">بوابة الدخول الآمن</h3>

      {/* رسالة الخطأ المشروطة */}
      {errorMessage && (
        <div className="p-2.5 bg-rose-500/20 border border-rose-500/40 rounded-lg text-xs text-rose-300">
          {errorMessage}
        </div>
      )}

      <div>
        <label className="text-xs text-slate-400 block mb-1">اسم المستخدم / الهوية:</label>
        <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200"
        />
      </div>

      <div>
        <label className="text-xs text-slate-400 block mb-1">كلمة المرور السرية:</label>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-900/30"
      >
        دخول آمن للمنظومة
      </button>
    </form>
  );
}`,
      output: "عند الضغط على 'دخول آمن' أو ضغط Enter، يتم استدعاء handleSubmit بدون أن تُعاد الصفحة للصفر، وتُفحص الشروط البرمجية، وتُرسل البيانات برمجياً.",
      commonMistakes: [
        {
          mistake: "نسيان استدعاء e.preventDefault() في أول سطر من دالة onSubmit.",
          why: "السلوك الافتراضي لمتصفحات الويب عند إرسال النماذج هو تحديث الصفحة بالكامل (Page Reload)، مما يمسح حالة تطبيق React بالكامل ويعيد التطبيق إلى نقطة الصفر!",
          fix: "اكتب دائماً e.preventDefault(); كأول سطر في كل دالة معالجة نموذج onSubmit."
        },
        {
          mistake: "ربط حدث onClick بزر الإرسال بدلاً من ربط onSubmit بوسم <form>.",
          why: "إذا ربطت الزر فقط بـ onClick، فلن يعمل إرسال النموذج إذا ضغط المستخدم على مفتاح Enter داخل أحد حقول الإدخال، كما ستفقد ميزات التحقق المدمجة في HTML5 مثل required.",
          fix: "اربط المعالج بوسم <form onSubmit={...}> واجعل الزر داخله <button type='submit'>."
        }
      ],
      bestPractices: [
        "ضع onSubmit دائماً على وسم <form> وليس على أزراره الفردية.",
        "استغل التحقق التلقائي لمتصفحات الويب بإضافة required وminLength وtype='email' في وسوم الإدخال لفلترة الأخطاء قبل إرسال النموذج."
      ],
      infographicCard: {
        type: "rule-box",
        title: "القاعدة الذهبية لإرسال النماذج في React",
        rules: [
          "1. الوسم الحاوي: <form onSubmit={handleSubmit}>",
          "2. السطر الأول في الدالة: e.preventDefault() لمنع إعادة تحميل الصفحة",
          "3. الزر الداخلي: <button type='submit'> ليدعم النقر ومفتاح Enter تلقائياً"
        ]
      }
    },
    {
      id: "6.1.e",
      title: "تمرير المعاملات إلى معالج الحدث",
      englishTerm: "Passing Arguments to Event Handlers (Arrow Wrappers)",
      description: "الآلية البرمجية لتمرير بيانات إضافية (مثل معرف العنصر ID، أو كائن مخصص، أو رقم الفهرس) إلى دالة معالج الحدث عند وقوعه. يتم ذلك بتغليف الدالة داخل دالة سهمية مجهولة (Inline Arrow Function) أو باستخدام دالة الإرجاع (Currying / Closure).",
      realLifeAnalogy: "مثل جرس طلب الخدمة في غرف الفندق؛ كل غرفة بها زر جرس، ولكن كل زر مبرمج مسبقاً ليرسل إلى مكتب الاستقبال رقم الغرفة المحددة التي ضغطت الزر (مثل غرفة 402)، ليعرف الموظف إلى أي باب يتوجه تحديداً.",
      whyItMatters: "في القوائم المكررة مثل جداول المستخدمين وسلات التسوق، تحتاج الدالة لمعرفة 'أي عنصر تحديداً' تم النقر عليه لحذفه أو تعديل كميته.",
      syntax: '<button onClick={() => handleDelete(user.id)}>حذف</button>',
      simpleExample: `// مكون زر حذف يقبل معرّف العنصر
function DeleteItemButton({ itemId }) {
  // دالة الحذف تقبل معامل معرف العنصر
  function handleDelete(id) {
    // طباعة رسالة تفيد بحذف العنصر المختار
    console.log("جارٍ حذف العنصر صاحب الرقم:", id);
  }

  return (
    // تغليف الاستدعاء بدالة سهمية لتمرير itemId عند النقر فقط
    <button 
      onClick={() => handleDelete(itemId)}
      className="px-3 py-1 bg-rose-600 text-white text-xs rounded"
    >
      حذف العنصر #{itemId}
    </button>
  );
}`,
      advancedExample: `// مكون إدارة أدوار فريق العمل مع تمرير معرف المستخدم والدور الجديد
export function TeamRoleManager() {
  // مصفوفة أعضاء الفريق
  const members = [
    { id: "u-1", name: "خالد السبيعي", role: "مطور" },
    { id: "u-2", name: "نورة القحطاني", role: "مصممة" },
    { id: "u-3", name: "سلطان العتيبي", role: "مدير منتج" }
  ];

  // دالة تغيير الرتبة تقبل معاملين: معرّف العضو والرتبة الجديدة المستهدفة
  const handleRoleChange = (memberId, newRole, memberName) => {
    // إشعار المستخدم بتحديث الدور
    alert(\`تمت ترقية \${memberName} (المعرف: \${memberId}) إلى رتبة: \${newRole}\`);
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-3">
      <h4 className="font-bold text-sm text-indigo-400">إدارة صلاحيات الفريق</h4>
      <div className="space-y-2">
        {members.map((member) => (
          <div key={member.id} className="flex justify-between items-center p-3 bg-slate-800/80 rounded-xl text-xs">
            <div>
              <span className="font-bold text-slate-100">{member.name}</span>
              <span className="text-slate-400 mr-2">({member.role})</span>
            </div>

            <div className="flex gap-1.5">
              {/* تمرير المعاملات المخصصة عبر دالة سهمية */}
              <button
                onClick={() => handleRoleChange(member.id, "قائد فريق", member.name)}
                className="px-2.5 py-1 bg-indigo-600/30 hover:bg-indigo-600 text-indigo-300 hover:text-white rounded-lg transition-colors font-medium"
              >
                ترقية لقائد
              </button>
              <button
                onClick={() => handleRoleChange(member.id, "مشرف عام", member.name)}
                className="px-2.5 py-1 bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white rounded-lg transition-colors font-medium"
              >
                ترقية لمشرف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "عند النقر على 'ترقية لقائد' بجانب نورة، تستلم الدالة handleRoleChange المعاملات المحددة بدقة: 'u-2' و'قائد فريق' و'نورة القحطاني' دون أي التباس.",
      commonMistakes: [
        {
          mistake: "كتابة الاستدعاء المباشر بالأقواس مثل: onClick={handleDelete(user.id)} بدلاً من دالة سهمية!",
          why: "وضع الأقواس () يؤدي لاستدعاء الدالة فوراً في لحظة رندر المكون وليس عند النقر، مما يؤدي لحذف كافة العناصر تلقائياً بمجرد فتح الصفحة أو الدخول في حلقة لانهائية (Infinite Loop)!",
          fix: "غلف الاستدعاء دائماً بدالة سهمية: onClick={() => handleDelete(user.id)}."
        }
      ],
      bestPractices: [
        "استخدم الدالة السهمية المضمنة () => fn(arg) للبساطة والوضوح العالي.",
        "إذا كنت بحاجة لكائن الحدث الأصلي أيضاً مع المعامل الإضافي، مرره هكذا: onClick={(e) => handleDelete(e, user.id)}."
      ],
      infographicCard: {
        type: "code-comparison",
        title: "الفرق الحاسم في تمرير المعاملات",
        structure: [
          "❌ خطأ كارثي: onClick={deleteItem(5)} -> تُنفذ فوراً أثناء الرندر وتمسح البيانات!",
          "✅ الكود السليم: onClick={() => deleteItem(5)} -> تُنفذ فقط عندما ينقر المستخدم على الزر!"
        ]
      }
    },
    {
      id: "6.1.f",
      title: "الفرق بين تمرير الدالة واستدعائها",
      englishTerm: "Passing Function Reference vs Invoking Function",
      description: "أحد أكثر المفاهيم الفاصلة والحرجة للمبتدئين في React. التمييز بين تمرير مرجع الدالة (Function Reference) لتقوم React باستدعائها لاحقاً عند وقوع الحدث، وبين استدعاء الدالة مباشرة بالأقواس (Function Invocation) الذي ينفذ الكود في زمن بناء الشجرة فوراً.",
      realLifeAnalogy: "مثل إعطاء صديقك رقم هاتف المطعم (تمرير المرجع) ليقوم هو بالاتصال بهم عندما يجوع مساءً، مقابل قيامك بالاتصال بالمطعم بنفسك وطلب الطعام فوراً في هذه اللحظة (استدعاء الدالة).",
      whyItMatters: "الخلط بينهما هو السبب الأول للأخطاء القاتلة من نوع 'Maximum update depth exceeded' والحلقات اللانهائية التي تجمد متصفح العميل بالكامل.",
      syntax: "// سليم: تمرير مرجع الدالة\n<button onClick={handleClick}>\n\n// خطأ: استدعاء فوري\n<button onClick={handleClick()}>",
      simpleExample: `// مثال يوضح الفرق الشاسع بين المرجع والاستدعاء
function ReferenceVsCallDemo() {
  // دالة الإشعار
  function notify() {
    alert("تم النقر بنجاح!");
  }

  return (
    <div className="flex gap-4 p-4 bg-slate-900 rounded-xl">
      {/* 1. السليم: مرجع للدالة دون أقواس () - يُنتظر النقر */}
      <button 
        onClick={notify}
        className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold"
      >
        ✅ كود سليم: يمرر المرجع notify
      </button>

      {/* 2. تحذير: استدعاء فوري notify() ينفذ التنبيه عند تشغيل الصفحة فوراً! */}
    </div>
  );
}`,
      advancedExample: `// استعراض حي لتحليل السلوك في بيئة إنتاجية
import { useState } from "react";

export function ExecutionTrapDemo() {
  const [logs, setLogs] = useState([]);

  // دالة تضيف سجلاً
  const addLog = (msg) => {
    setLogs((prev) => [...prev.slice(-3), \`[\${new Date().toLocaleTimeString()}] \${msg}\`]);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4">
      <h4 className="font-bold text-sm text-indigo-400">مختبر فهم استدعاء الدوال في React</h4>
      
      <div className="flex flex-wrap gap-3">
        {/* الحالة أ: تمرير المرجع (سليم) */}
        <button
          onClick={() => addLog("نقر المستخدم عبر دالة سهمية")}
          className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
        >
          نقر سليم (مرجع سهمي)
        </button>

        {/* الحالة ب: استدعاء دالة ترجع دالة أخرى (Higher-Order Function) */}
        <button
          onClick={((text) => () => addLog(text))("استدعاء ينتج دالة مرجعية")}
          className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-bold transition-all"
        >
          نمط الإغلاق (Closure)
        </button>
      </div>

      {/* شاشة السجلات */}
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-[11px] space-y-1">
        <p className="text-slate-500 font-sans">سجل الأحداث الملتقطة:</p>
        {logs.length === 0 ? (
          <span className="text-slate-600">اضغط الزر بالأعلى لاختبار التسجيل...</span>
        ) : (
          logs.map((log, i) => (
            <div key={i} className="text-emerald-400">{log}</div>
          ))
        )}
      </div>
    </div>
  );
}`,
      output: "الزر الأول لا ينفذ addLog إلا عند حدوث نقرة فعلية بالماوس. هذا يثبت أن تمرير المرجع يمنح React السيطرة على توقيت التنفيذ.",
      commonMistakes: [
        {
          mistake: "كتابة: onClick={setCount(count + 1)} وتفاجؤ المبرمج بانهيار التطبيق بخطأ 'Too many re-renders'.",
          why: "استدعاء setCount(count + 1) أثناء الرندر يغير الحالة، مما يطلق رندراً جديداً، فيستدعي الدالة مجدداً، ليدخل المكون في حلقة لا نهائية فورية تجمد المتصفح!",
          fix: "استخدم دائماً دالة سهمية لتأجيل التنفيذ لوقت النقر: onClick={() => setCount(count + 1)}."
        }
      ],
      bestPractices: [
        "إذا كانت دالتك لا تأخذ معاملات، مرر اسمها مجرداً بدون أقواس: onClick={handleClick}.",
        "إذا كانت دالتك تأخذ معاملات، غلفها بدالة سهمية: onClick={() => handleClick(id)}."
      ],
      infographicCard: {
        type: "rule-box",
        title: "الفيصل في تمرير الدوال في React",
        rules: [
          "بدون معاملات؟ مرر الاسم مجرداً: onClick={doSomething}",
          "مع معاملات؟ استخدم دالة سهمية: onClick={() => doSomething(arg)}",
          "ممنوع وضع الأقواس مباشرة: onClick={doSomething()} ❌"
        ]
      }
    },
    {
      id: "6.1.g",
      title: "مفهوم Synthetic Events",
      englishTerm: "Synthetic Events Concept (Cross-Browser Wrapper)",
      description: "نظام التغليف الذكي للأحداث الذي توفره React. لا تتعامل React مع أحداث المتصفح الأصلية (Native DOM Events) مباشرة، بل تغلفها داخل كائن اصطناعي موحد يُدعى SyntheticEvent. يضمن هذا الكائن توافقاً تاماً واتساقاً لسلوك كافة الأحداث وخصائصها عبر جميع المتصفحات (Chrome, Firefox, Safari, Edge) وفق مواصفة W3C القياسية.",
      realLifeAnalogy: "مثل محول القابس الكهربائي العالمي (Universal Travel Adapter)؛ مقابس الكهرباء الجدارية تختلف في بريطانيا عن أمريكا وعن أوروبا، ولكن المحول العالمي يوفر لك مخرجاً واحداً موحداً يعمل به هاتفك في أي بلد في العالم بنفس الجودة والجهد.",
      whyItMatters: "يحمي المطور من كتابة شروط معقدة لفحص نوع المتصفح وإصداراته؛ كما يتولى نظام الأحداث في React تفويض الأحداث (Event Delegation) مركزياً على مستوى جذر التطبيق لتحقيق أقصى درجات كفاءة الذاكرة والسرعة.",
      syntax: "function handleAction(event) {\n  console.log(event.nativeEvent); // الحدث الأصلي للمتصفح\n  console.log(event.target);      // كائن SyntheticEvent القياسي\n}",
      simpleExample: `// فحص كائن الحدث الاصطناعي SyntheticEvent
function EventInspector() {
  function inspectEvent(e) {
    // طباعة نوع كائن الحدث في React
    console.log("كائن الحدث الاصطناعي:", e);
    // قراءة اسم الحدث
    console.log("نوع الحدث:", e.type);
    // إمكانية الوصول إلى حدث المتصفح الأصلي الخام إن دعت الحاجة
    console.log("حدث المتصفح الأصلي Native:", e.nativeEvent);
  }

  return (
    <button 
      onClick={inspectEvent}
      className="px-4 py-2 bg-slate-800 text-indigo-400 border border-indigo-500/40 rounded-lg text-xs font-bold"
    >
      فحص كائن SyntheticEvent
    </button>
  );
}`,
      advancedExample: `// استخراج إحداثيات مؤشر الماوس ونوع الزر المضغوط عبر كائن الحدث الموحد
import { useState } from "react";

export function MouseCoordinateTracker() {
  // حالة حفظ إحداثيات المؤشر
  const [coords, setCoords] = useState({ x: 0, y: 0, buttonPressed: 0 });

  // معالج حدث حركة الماوس يستقبل SyntheticEvent
  const handleMouseMove = (e) => {
    // استخراج الإحداثيات بالنسبة لحاوية العنصر المستهدف
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    // تحديث الحالة بكائن الإحداثيات
    setCoords({ x, y, buttonPressed: e.buttons });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="p-8 bg-slate-950 border border-slate-800 rounded-2xl text-white select-none cursor-crosshair relative overflow-hidden group"
    >
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-xs text-indigo-400">رادار الإحداثيات الموحد (Synthetic MouseEvent)</h4>
        <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 rounded text-slate-300">
          W3C Compliant
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center font-mono">
        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 block uppercase">الإحداثي X</span>
          <span className="text-xl font-black text-emerald-400">{coords.x} px</span>
        </div>
        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 block uppercase">الإحداثي Y</span>
          <span className="text-xl font-black text-sky-400">{coords.y} px</span>
        </div>
      </div>
    </div>
  );
}`,
      output: "يعمل تتبع حركة الماوس وقراءة e.clientX وe.clientY ونوع الأزرار المضغوطة بنفس الدقة التامة والنتائج على متصفحات Safari وChrome وFirefox وEdge دون أي تفاوت.",
      commonMistakes: [
        {
          mistake: "محاولة استخدام كائن e بشكل غير متزامن داخل setTimeout في إصدارات React القديمة (React 16 وما قبلها).",
          why: "في React 16 كان يتم تفريغ كائن الحدث (Event Pooling) وإعادة استخدامه لتوفير الذاكرة، ولكن تم إلغاء نظام الـ Pooling تماماً في React 17 فصاعداً وأصبح بالإمكان قراءة e في أي وقت بأمان.",
          fix: "في React 18 و 19 الحديثة يمكنك استخدام e مباشرة، ولكن يفضل دائماً استخراج الخصائص المطلوبة في متغير محلي أولاً مثل: const value = e.target.value;."
        }
      ],
      bestPractices: [
        "استخدم e.currentTarget للإشارة إلى العنصر الذي تم ربط معالج الحدث به، بينما يشير e.target إلى العنصر الدقيق الذي نقر عليه المستخدم فعلياً (قد يكون أيقونة فرعية بالداخل).",
        "لا تعتمد على أحداث المتصفح القديمة window.event؛ استخدم دائماً كائن e الممرر كمعامل أول لمعالجك."
      ],
      infographicCard: {
        type: "architecture-layers",
        title: "طبقات عمل نظام SyntheticEvent",
        layers: [
          "طبقة واجهة المكون: <button onClick={(e) => ...}>",
          "طبقة React الموحدة: كائن SyntheticEvent (يحقق مواصفة W3C)",
          "طبقة التفويض المركزي: Event Delegation على مستوى الـ Root Container",
          "طبقة المتصفح الأصلية: Native Browser DOM Events (Chrome, Safari, Firefox)"
        ]
      }
    },
    {
      id: "6.1.h",
      title: "استخدام preventDefault",
      englishTerm: "Using preventDefault() (Stopping Default Actions)",
      description: "دالة قياسية متوفرة في كائن الحدث (event.preventDefault()) تُستخدم لإلغاء السلوك التلقائي المبرمج مسبقاً في المتصفح عند وقوع حدث معين. أشهر استخداماتها: منع إعادة تحميل الصفحة عند إرسال النماذج، ومنع الروابط <a> من فتح عناوين جديدة، ومنع القوائم الافتراضية عند النقر بالزر الأيمن.",
      realLifeAnalogy: "مثل إمساك يد طفل صغير قبل أن يعبر الشارع بمفرده؛ الطفل مبرمج طبيعياً على الركض نحو الشارع (السلوك الافتراضي)، وأنت تتدخل بلطف لمنع تلك الحركة والتحكم بمساره بأمان.",
      whyItMatters: "تطبيقات الويب الحديثة (SPAs) تعتمد على أن الصفحة لا يُعاد تحميلها إطلاقاً أثناء تصفح المستخدم. منع السلوك الافتراضي هو ما يتيح لـ React التحكم الحصري بكل تدفقات البيانات والملاحة والتنقل.",
      syntax: "function handleSubmit(e) {\n  e.preventDefault();\n  // كود معالجة البيانات الخاص بك\n}",
      simpleExample: `// منع رابط من فتح صفحة جديدة ومعالجته برمجياً
function SafeLinkButton() {
  function handleLinkClick(e) {
    // إيقاف السلوك الافتراضي للرابط <a> وهو التنقل الفوري لصفحة جديدة
    e.preventDefault();
    // إظهار تنبيه لطيف بدلاً من مغادرة التطبيق
    alert("تم إلغاء الانتقال! سيتم توجيهك داخلياً عبر موجه React Router.");
  }

  return (
    // رابط مع منع السلوك التلقائي
    <a 
      href="https://google.com" 
      onClick={handleLinkClick}
      className="text-xs text-indigo-400 underline font-bold"
    >
      رابط معطل افتراضياً
    </a>
  );
}`,
      advancedExample: `// مكون منطقة سحب وإفلات ملفات مع منع السلوك الافتراضي للمتصفح
import { useState } from "react";

export function FileDropZone({ onFileSelected }) {
  const [isOver, setIsOver] = useState(false);

  // إيقاف سلوك المتصفح الافتراضي بفتح الملف في علامة تبويب جديدة!
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = (e) => {
    // خطوة حاسمة: منع المتصفح من محاولة تحميل الملف أو فتحه كصفحة
    e.preventDefault();
    setIsOver(false);

    // استخراج الملفات المسحوبة
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      onFileSelected(droppedFile.name);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={\`p-10 border-2 border-dashed rounded-2xl text-center transition-all cursor-pointer \${
        isOver 
          ? "border-indigo-500 bg-indigo-500/10 text-indigo-300 scale-[1.01]" 
          : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700"
      }\`}
    >
      <span className="text-4xl block mb-2">{isOver ? "📥" : "📁"}</span>
      <p className="text-xs font-bold text-slate-200">
        {isOver ? "أفلت الملف الآن لرفعه فوراً!" : "اسحب الملف وأفلته هنا لرفعه إلى السحابة"}
      </p>
      <p className="text-[10px] text-slate-500 mt-1">يتم تعطيل فتح الملفات في تبويب جديد عبر preventDefault</p>
    </div>
  );
}`,
      output: "عند سحب أي ملف من سطح المكتب وإفلاته في الصندوق، لا يقوم المتصفح بفتحه كصورة أو ملف PDF في تبويب جديد، بل يلتقط المكون اسم الملف ويعالجه في الواجهة بسلاسة.",
      commonMistakes: [
        {
          mistake: "محاولة كتابة return false داخل معالج حدث React لمنع السلوك الافتراضي (كما كان شائعاً في jQuery القديمة).",
          why: "في React وجافاسكريبت الحديثة، إرجاع return false لا يمنع السلوك الافتراضي إطلاقاً؛ الطريقة الوحيدة المدعومة هي استدعاء e.preventDefault() صراحة.",
          fix: "استدعِ e.preventDefault(); دائماً ولا تعتمد على return false."
        }
      ],
      bestPractices: [
        "ضع استدعاء e.preventDefault() في بداية معالج الحدث قبل إجراء أي عمليات غير متزامنة (async).",
        "احرص دائماً على منع السلوك التلقائي لأحداث السحب والإفلات onDragOver وonDrop لضمان عدم خروج المتصفح من تطبيقك."
      ],
      infographicCard: {
        type: "danger-fix",
        title: "ماذا يمنع preventDefault() في الويب؟",
        cases: [
          { event: "onSubmit", prevents: "منع إعادة تحميل الصفحة ومسح الذاكرة" },
          { event: "onClick على <a>", prevents: "منع المتصفح من تغيير الرابط وتفريغ التطبيق" },
          { event: "onDragOver / onDrop", prevents: "منع المتصفح من فتح الملف المسحوب كصفحة جديدة" }
        ]
      }
    },
    {
      id: "6.1.i",
      title: "استخدام stopPropagation",
      englishTerm: "Using stopPropagation() (Stopping Event Bubbling)",
      description: "دالة في كائن الحدث (event.stopPropagation()) تُستخدم لإيقاف صعود وانتشار الحدث للأعلى (Event Bubbling) في شجرة عناصر DOM. عندما يقع حدث على عنصر ابن، يصعد الحدث تلقائياً ويستثير كل معالجات الأحداث المشابهة في العناصر الآباء المحيطة به، ما لم يتم إيقافه صراحة.",
      realLifeAnalogy: "مثل رئيس القسم الذي يحل مشكلة الموظف داخل المكتب ويغلق الملف تماماً دون تصعيد الشكوى إلى المدير التنفيذي للشركة. إيقاف التصعيد يمنع إزعاج الإدارة العليا بأمر حُسم محلياً.",
      whyItMatters: "ضروري للغاية في الواجهات المتداخلة؛ مثل وجود زر 'حذف' داخل بطاقة كاملة قابلة للنقر، أو زر 'تفضيل' داخل كرت منتج يفتح صفحة التفاصيل، أو إغلاق نافذة Modal عند النقر على خلفيتها المظلمة دون إغلاقها عند النقر على محتواها الداخلي.",
      syntax: "function handleChildClick(e) {\n  e.stopPropagation();\n  // لن يُستدعى معالج نقر الأب\n}",
      simpleExample: `// مثال بطاقة تحوي زراً داخلياً مع إيقاف انتشار الحدث
function ParentCard() {
  function handleCardClick() {
    alert("تم النقر على البطاقة بالكامل!");
  }

  function handleButtonClick(e) {
    // إيقاف صعود الحدث للبطاقة الأب
    e.stopPropagation();
    alert("تم النقر على الزر الداخلي فقط!");
  }

  return (
    // البطاقة الأب لديها معالج نقر
    <div 
      onClick={handleCardClick}
      className="p-6 bg-slate-900 border border-slate-800 rounded-xl cursor-pointer"
    >
      <h4 className="text-white text-sm font-bold mb-2">بطاقة قابلة للنقر</h4>
      {/* الزر الابن يوقف صعود النقرة للأب */}
      <button 
        onClick={handleButtonClick}
        className="px-3 py-1.5 bg-rose-600 text-white rounded text-xs font-bold"
      >
        حذف (دون فتح البطاقة)
      </button>
    </div>
  );
}`,
      advancedExample: `// مكون النافذة المنبثقة Modal الاحترافية مع منع إغلاقها بالنقر على محتواها الداخلي
export function ModalBackdropDialog({ isOpen, onClose, title, children }) {
  // إذا كانت النافذة مغلقة لا تعرض شيئاً
  if (!isOpen) return null;

  return (
    // 1. الخلفية المظلمة الخارجية: النقر عليها يغلق النافذة
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-all"
    >
      {/* 2. الصندوق الداخلي للمحتوى: النقر هنا يجب ألا يغلق النافذة! */}
      <div 
        onClick={(e) => {
          // إيقاف الصعود: منع وصول النقرة إلى الخلفية المظلمة الأب
          e.stopPropagation();
        }}
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 text-white shadow-2xl relative"
      >
        <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
          <h3 className="font-bold text-base text-slate-100">{title}</h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg text-sm"
          >
            ✕
          </button>
        </div>

        <div className="text-xs text-slate-300 leading-relaxed mb-6">
          {children}
        </div>

        <div className="flex justify-end gap-2">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all"
          >
            إلغاء
          </button>
          <button 
            onClick={() => { alert("تم التأكيد بنجاح!"); onClose(); }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-900/40"
          >
            تأكيد العملية
          </button>
        </div>
      </div>
    </div>
  );
}`,
      output: "عندما ينقر المستخدم داخل صندوق النافذة، يمنع stopPropagation انتقال النقرة للخلفية المظلمة فتبقى النافذة مفتوحة؛ بينما يؤدي النقر في المساحة السوداء المحيطة خارج الصندوق لإغلاقها فوراً.",
      commonMistakes: [
        {
          mistake: "الخلط بين preventDefault وstopPropagation.",
          why: "الأولى تمنع المتصفح من تصرفه الافتراضي (مثل Reload أو فتح الرابط)، بينما الثانية تمنع صعود الحدث في شجرة عناصر DOM إلى المكونات الأب.",
          fix: "تذكر: preventDefault للسلوك الأصلي؛ وstopPropagation لفقاعة الصعود بين العناصر."
        }
      ],
      bestPractices: [
        "استخدم stopPropagation بحكمة وفقط عندما يكون هناك تعارض حقيقي بين معالج الابن ومعالج الأب.",
        "وثق دائماً بتعليق واضح سبب استخدام stopPropagation في الكود ليعرف زملاؤك في الفريق سبب عزل الحدث."
      ],
      infographicCard: {
        type: "bubble-diagram",
        title: "ظاهرة فقاعات الأحداث (Event Bubbling) وإيقافها",
        diagram: [
          "🎯 حدث النقر على الزر الابن: <button>",
          "   ▲ صعود إلى وسم الحاوية: <div className='card'>",
          "   ▲ صعود إلى وسم القسم: <section>",
          "   ▲ صعود إلى جذر الصفحة: <body> و <html>",
          "🛑 عند استدعاء e.stopPropagation() داخل الزر، يقف الصعود فوراً ولا يشعر الأب بأي شيء!"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q6-1-1",
      question: "ما النتيجة المتوقعة للكود التالي عند تحميل الصفحة: <button onClick={deleteAccount()}>حذف</button> ؟",
      options: [
        "لن يحدث شيء حتى يضغط المستخدم على الزر",
        "سيتم استدعاء الدالة deleteAccount فوراً وبشكل تلقائي بمجرد تصيير المكون",
        "ستظهر رسالة خطأ في المتصفح تمنع تشغيل التطبيق بالكامل",
        "سيتم تأجيل الاستدعاء لمدة ثانية واحدة"
      ],
      correctAnswer: 1,
      explanation: "وضع الأقواس () بعد اسم الدالة يعني استدعاءها فوراً (Function Invocation) أثناء مرحلة الرندر، وليس تمرير مرجعها؛ لتأجيل التنفيذ لوقت النقر يجب كتابتها بدون أقواس onClick={deleteAccount} أو كدالة سهمية."
    },
    {
      id: "q6-1-2",
      question: "ما الفائدة الأساسية من نظام الأحداث الاصطناعية (SyntheticEvent) في React؟",
      options: [
        "تسريع اتصال قاعدة البيانات من المتصفح",
        "توفير كائن حدث موحد يعمل بنفس الخصائص والمواصفات القياسية عبر جميع متصفحات الويب",
        "تحويل كود JSX إلى كود بلغة C++ عالية السرعة",
        "منع المتصفح من استخدام الذاكرة العشوائية RAM"
      ],
      correctAnswer: 1,
      explanation: "تغلف React أحداث المتصفح الأصلية داخل كائنات SyntheticEvent لتضمن للمطور اتساقاً مطلقاً وتوافقاً عبر مختلف المتصفحات (Cross-Browser Consistency) دون الحاجة لكتابة شروط خاصة لكل متصفح."
    },
    {
      id: "q6-1-3",
      question: "كيف توقف صعود حدث النقر (Event Bubbling) من زر داخلي إلى البطاقة الأب الحاوية له؟",
      options: [
        "باستدعاء e.preventDefault()",
        "بكتابة return false داخل الدالة",
        "باستدعاء e.stopPropagation() في معالج حدث الزر الداخلي",
        "بحذف خاصية onClick من المكون الأب"
      ],
      correctAnswer: 2,
      explanation: "الدالة e.stopPropagation() توقف صعود الحدث في شجرة DOM، مما يمنع تنشيط معالجات الأحداث في العناصر الأب."
    }
  ],
  exercise: {
    id: "ex6-1",
    title: "بناء بطاقة منتج تفاعلية تمنع تداخل الأحداث وإعادة التحميل",
    description: "المطلوب بناء مكون React تفاعلي باسم InteractiveProductCard يحتوي على بطاقة منتج كاملة قابلة للنقر لفتح التفاصيل، وزر مفضلة داخلي يعزل نقرته بـ stopPropagation لمنع فتح البطاقة، ونموذج إدخال كوبون تخفيض يمنع إعادة تحميل الصفحة عبر preventDefault، مع تمرير معرف المنتج للدوال.",
    starterCode: `export function InteractiveProductCard({ product }) {
  // اكتب معالجات الأحداث هنا
  return (
    <div>
      {/* صمم البطاقة وزر المفضلة ونموذج الكوبون */}
    </div>
  );
}`,
    hints: [
      "ضع معالج نقر البطاقة على الـ div الخارجي.",
      "في زر المفضلة، استدعِ e.stopPropagation() أولاً ثم غير حالة المفضلة.",
      "في نموذج الكوبون، ضع onSubmit واستدعِ e.preventDefault() أولاً.",
      "مرر معرف المنتج productId كمعامل للمعالج عبر دالة سهمية."
    ],
    solution: `import { useState } from "react";

export function InteractiveProductCard({ 
  product = { id: "prd-550", name: "سماعات رأس لاسلكية احترافية", price: 799 } 
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  // 1. معالج النقر العام على كامل البطاقة
  const handleCardClick = () => {
    alert(\`تم فتح صفحة تفاصيل المنتج: \${product.name} (المعرف: \${product.id})\`);
  };

  // 2. معالج زر المفضلة المنعزل (مع إيقاف الصعود)
  const handleFavoriteClick = (e) => {
    // خطوة محورية: منع وصول النقرة للبطاقة الأب حتى لا تفتح صفحة التفاصيل
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };

  // 3. معالج إرسال نموذج الكوبون (مع منع إعادة تحميل الصفحة)
  const handleCouponSubmit = (e) => {
    // خطوة محورية: منع المتصفح من إعادة تحميل الصفحة
    e.preventDefault();
    // إيقاف الصعود أيضاً حتى لا يعتبر نقراً على البطاقة
    e.stopPropagation();

    if (couponCode.toUpperCase() === "SAVE20") {
      setDiscountApplied(true);
      alert("تهانينا! تم تفعيل خصم 20% بنجاح.");
    } else {
      alert("عذراً، هذا الكوبون غير صالح. جرب كود: SAVE20");
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-sm mx-auto text-white shadow-xl cursor-pointer hover:border-indigo-500/50 transition-all select-none space-y-4"
    >
      {/* رأس البطاقة وزر المفضلة المنعزل */}
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded">
            {product.id}
          </span>
          <h3 className="font-extrabold text-base text-slate-100 mt-1">{product.name}</h3>
        </div>

        {/* زر التفضيل المنعزل بـ stopPropagation */}
        <button
          onClick={handleFavoriteClick}
          title="حفظ في المفضلة"
          className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-transform active:scale-90"
        >
          <span className="text-base">{isFavorite ? "❤️" : "🤍"}</span>
        </button>
      </div>

      {/* السعر المالي مع الخصم إن وجد */}
      <div className="pt-2">
        <span className="text-[10px] text-slate-500 block uppercase">السعر الرسمي:</span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-black font-mono text-emerald-400">
            {discountApplied ? Math.round(product.price * 0.8) : product.price} ر.س
          </span>
          {discountApplied && (
            <span className="text-xs line-through text-slate-500 font-mono">
              {product.price} ر.س
            </span>
          )}
        </div>
      </div>

      {/* نموذج إدخال الكوبون المنعزل بـ preventDefault */}
      <form 
        onSubmit={handleCouponSubmit}
        onClick={(e) => e.stopPropagation()} // منع النقر داخل النموذج من تفعيل نقر البطاقة
        className="pt-3 border-t border-slate-800 flex gap-2"
      >
        <input 
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="كود الخصم (جرب: SAVE20)"
          className="flex-1 px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
        >
          تطبيق
        </button>
      </form>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة إتقان الأحداث في React",
    description: "الدليل المرئي الشامل لمنظومة الأحداث، التغليف الاصطناعي، وقواعد العزل النظيف.",
    sections: [
      {
        heading: "1. قواعد التسمية والربط",
        bullets: [
          "صيغة camelCase دائماً: onClick, onChange, onSubmit, onKeyDown.",
          "تمرير المرجع لا الاستدعاء: onClick={handleClick} بدون أقواس إطلاقاً.",
          "تمرير المعاملات: غلف الدالة بسهمية () => handleClick(id) لتأجيل التنفيذ لوقت النقر."
        ]
      },
      {
        heading: "2. كائن SyntheticEvent وخصائصه",
        bullets: [
          "تغليف قياسي W3C: يعمل بنفس الدقة على جميع متصفحات العالم.",
          "الوصول للبيانات: e.target.value للحقول و e.target.checked للمربعات.",
          "العنصر الرابط vs المنقور: e.currentTarget للمستمع و e.target للمنطلق الفعلي."
        ]
      },
      {
        heading: "3. العزل والحماية (Control & Bubbling)",
        bullets: [
          "منع السلوك الافتراضي: e.preventDefault() في أول سطر في onSubmit لمنع Reload.",
          "إيقاف صعود الفقاعة: e.stopPropagation() لعزل الأزرار الفرعية داخل البطاقات القابلة للنقر."
        ]
      }
    ]
  }
};
