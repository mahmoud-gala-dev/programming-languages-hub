// src/data/sections/section8/topic1.js
// الموضوع 1: أساسيات النماذج في React (Form Fundamentals, Controlled Inputs & State Binding)

export const SECTION_8_TOPIC_1 = {
  id: "8.1",
  title: "أساسيات النماذج",
  englishTerm: "Form Fundamentals & Controlled Components",
  description: "الأسس الهندسية لبناء وإدارة استمارات المستخدم التفاعلية في React: ربط حقول الإدخال المختلفة (النصوص، مساحات النصوص المتعددة، القوائم المنسدلة، مربعات الاختيار، وأزرار الراديو) بحالة المكون (Single Source of Truth)، معالجة إرسال النموذج بـ preventDefault، وتصفير الحقول باحترافية.",
  subtopics: [
    {
      id: "8.1.a",
      title: "إنشاء Forms باستخدام JSX",
      englishTerm: "Creating Forms with JSX",
      description: "بناء هيكل استمارة الإدخال في React باستخدام عنصر <form> داخل JSX. على عكس HTML التقليدي الذي يرسل طلباً للمخدم ويعيد تحميل الصفحة بالكامل عند الضغط على إرسال، يعمل نموذج React داخل تطبيق الصفحة الواحدة (SPA) عبر اعتراض حدث الإرسال برمجياً والتحكم في البيانات في الذاكرة المحلية قبل إرسالها عبر الـ API.",
      realLifeAnalogy: "مثل 'استمارة فتح حساب بنكي رقمية على جهاز لوحي داخل الفرع'؛ بدلاً من وضع الورقة في صندوق البريد التقليدي وإغلاق الفرع، تقوم بكتابة بياناتك على الشاشة اللمسية ويقوم الموظف بمراجعتها وحفظها فوراً دون مغادرة الغرفة.",
      whyItMatters: "النماذج هي وسيلة التواصل الأساسية بين المستخدم والتطبيق (تسجيل الدخول، إنشاء الحساب، الدفع الإلكتروني، نشر التدوينات). فهم كيفية بناء نموذج متوافق مع JSX يمنع أخطاء إعادة تحميل الصفحة وفقدان البيانات المدخلة.",
      syntax: "<form onSubmit={handleSubmit}>\n  {/* حقول الإدخال وأزرار الإرسال */}\n  <button type=\"submit\">إرسال</button>\n</form>",
      simpleExample: `// هيكل نموذج بسيط داخل مكون وظيفي
import React from "react";

export function SimpleContactForm() {
  // دالة معالجة إرسال النموذج
  const handleSubmit = (event) => {
    // منع السلوك الافتراضي للمتصفح بإعادة تحميل الصفحة
    event.preventDefault();
    // طباعة رسالة في الكونسول لتأكيد الاستلام
    console.log("تم استلام النموذج بنجاح داخل React!");
  };

  // إرجاع واجهة النموذج عبر JSX
  return (
    <form onSubmit={handleSubmit}>
      {/* عنوان توضيحي للاستمارة */}
      <h2>تواصل معنا</h2>
      {/* حقل إدخال نصي بسيط */}
      <input type="text" placeholder="اكتب اسمك..." />
      {/* زر إرسال النموذج */}
      <button type="submit">إرسال البيانات</button>
    </form>
  );
}
`,
      advancedExample: `// استمارة تواصل أنيقة مع بطاقة ملخص تفاعلية
import React, { useState } from "react";

export function ModernFeedbackForm() {
  // تتبع حالة إرسال النموذج بنجاح
  const [isSubmitted, setIsSubmitted] = useState(false);

  // معالج إرسال النموذج مع تفعيل شارة النجاح
  const handleFormSubmit = (e) => {
    // منع إعادة تحميل المتصفح
    e.preventDefault();
    // تفعيل رسالة النجاح
    setIsSubmitted(true);
    // إخفاء الرسالة تلقائياً بعد 3 ثوانٍ
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">نموذج تفاعلي عبر JSX</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          SPA Architecture
        </span>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-3">
        <div>
          <label className="text-xs text-slate-300 block mb-1">الاسم الكامل:</label>
          <input
            type="text"
            required
            placeholder="مثال: سارة أحمد"
            className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-900/40"
        >
          إرسال الاستمارة 🚀
        </button>
      </form>

      {isSubmitted && (
        <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs text-center animate-fadeIn">
          ✓ تم استلام بياناتك بنجاح دون أي إعادة تحميل للصفحة!
        </div>
      )}
    </div>
  );
}
`,
      outputExplanation: "عند الضغط على الزر، يتم تفعيل معالج onSubmit الخاص بالنموذج، ويقوم event.preventDefault() بمنع المتصفح من إرسال طلب GET أو POST تقليدي، مما يتيح لك تنفيذ كود JavaScript خالص وتحديث الواجهة بسلاسة.",
      commonMistakes: [
        {
          mistake: "نسيان تحديد type='button' للأزرار الإضافية داخل النموذج.",
          fix: "حدد دائماً type='button' لأي زر لا يقصد به إرسال النموذج (مثل أزرار الإلغاء أو التبديل).",
          reason: "أي وسم <button> داخل <form> يعتبر تلقائياً من نوع submit إذا لم يتم تحديد خاصية type صراحة."
        }
      ],
      bestPractices: [
        "استخدم دائماً وسم <form> بدلاً من مجرد <div> لحفظ معايير سهولة الوصول وإتاحة الإرسال عبر زر Enter.",
        "تأكد من ربط كل حقل إدخال بـ <label> عبر خاصية htmlFor لتحسين إمكانية الوصول وقارئات الشاشة."
      ],
      infographicCard: {
        title: "هندسة النماذج في JSX",
        points: [
          "عنصر <form> يعترض الحدث برمجياً عبر onSubmit.",
          "تطبيق SPA يمنع إعادة تحميل الصفحة عبر preventDefault.",
          "دعم زر الإدخال الافتراضي Enter لمعايير إمكانية الوصول."
        ]
      }
    },
    {
      id: "8.1.b",
      title: "التعامل مع input",
      englishTerm: "Handling Controlled Text Inputs",
      description: "المفهوم الجوهري للمكون المضبوط (Controlled Component) مع حقول الإدخال النصية <input>. في React، لا يُترك حقل الإدخال ليحتفظ بقيمته الخاصة في شجرة DOM، بل يتم ربط خاصية value بمتغير في حالة React (useState)، وتحديث تلك الحالة مع كل ضغطة مفتاح عبر حدث onChange. تصبح حالة React هي 'المصدر الوحيد للحقيقة' (Single Source of Truth).",
      realLifeAnalogy: "مثل مقود السيارة الرقمي في ألعاب المحاكاة المتقدمة؛ المقود لا يحرك العجلات مباشرة بسلك ميكانيكي، بل يرسل إشارة رقمية للكمبيوتر (onChange)، ثم يعرض الكمبيوتر زاوية الانعطاف على الشاشة (value).",
      whyItMatters: "التحكم في حقل الإدخال عبر الحالة يتيح لك فحص البيانات فورياً، منع إدخال حروف معينة (مثل منع الأرقام في حقل الاسم)، تحويل الحروف تلقائياً إلى أحرف كبيرة، وتفعيل أو تعطيل زر الإرسال بناءً على محتوى الحقل.",
      syntax: "const [name, setName] = useState('');\n<input type=\"text\" value={name} onChange={(e) => setName(e.target.value)} />",
      simpleExample: `// حقل إدخال نصي مضبوط بالكامل بواسطة useState
import React, { useState } from "react";

export function ControlledInputDemo() {
  // حالة لتخزين نص الإدخال
  const [userName, setUserName] = useState("");

  // معالج التغيير لكل ضغطة مفتاح
  const handleChange = (e) => {
    // قراءة القيمة الجديدة من كائن الحدث
    const nextValue = e.target.value;
    // تحديث الحالة بقيمة الحقل الجديدة
    setUserName(nextValue);
  };

  return (
    <div>
      {/* ربط قيمة الحقل بالحالة وتعيين معالج التغيير */}
      <input
        type="text"
        value={userName}
        onChange={handleChange}
        placeholder="اكتب اسم المستخدم..."
      />
      {/* عرض فوري للقيمة المخزنة في الحالة */}
      <p>الاسم المباشر: {userName}</p>
    </div>
  );
}
`,
      advancedExample: `// حقل إدخال بطاقة دفع مع تنسيق فوري ومنع الرموز غير الرقمية
import React, { useState } from "react";

export function FormattedCardInput() {
  // حالة تخزين أرقام البطاقة
  const [cardNumber, setCardNumber] = useState("");

  // معالج إدخال مخصص يفلتر الأحرف ويضيف مسافات تلقائية
  const handleCardChange = (e) => {
    // استخراج الأرقام فقط وتجاهل أي حرف أو رمز
    const rawDigits = e.target.value.replace(/\\D/g, "").slice(0, 16);
    // تجميع الأرقام في كتل من 4 خانات مفصولة بمسافة
    const formatted = rawDigits.replace(/(\\d{4})(?=\\d)/g, "$1 ");
    // تحديث الحالة بالقيمة المنمقة
    setCardNumber(formatted);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">حقل مضبوط (Controlled Input)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Auto-Formatting
        </span>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs text-slate-300 font-bold block">رقم البطاقة الائتمانية:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={handleCardChange}
          placeholder="4242 4242 4242 4242"
          className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm font-mono text-emerald-400 tracking-wider focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 flex justify-between items-center">
        <span>البيانات الصافية للحفظ:</span>
        <span className="font-mono text-indigo-400 font-bold">
          "{cardNumber.replace(/\\s/g, "")}"
        </span>
      </div>
    </div>
  );
}
`,
      outputExplanation: "في المكون المضبوط، لا تتغير قيمة الحقل إلا لأن React غيرت متغير cardNumber عبر useState. هذا يمنحك سلطة مطلقة لمنع الحروف غير الصالحة وتنسيق المدخلات أثناء الكتابة مباشرة.",
      commonMistakes: [
        {
          mistake: "تمرير value دون تمرير onChange، أو تمرير undefined كقيمة ابتدائية.",
          fix: "وفر دائماً معالج onChange واجعل القيمة الابتدائية نصاً فارغاً '' بدلاً من undefined.",
          reason: "تمرير undefined في البداية ثم تغييره لنص يجعل React تطلق تحذيراً: 'A component is changing an uncontrolled input to be controlled'."
        }
      ],
      bestPractices: [
        "ابدأ دائماً بحالة نصية فارغة: useState('') لتجنب التحذير الشهير في الكونسول.",
        "استفد من onChange لتنظيف وتنسيق النصوص قبل حفظها في الحالة."
      ],
      infographicCard: {
        title: "حلقة المكون المضبوط Controlled Input",
        points: [
          "حالة React تحدد قيمة الحقل عبر خاصية value.",
          "المستخدم يكتب -> يطلق حدث onChange.",
          "دالة التحديث setState تغير القيمة -> يعاد الرندر بالقيمة الجديدة."
        ]
      }
    },
    {
      id: "8.1.c",
      title: "التعامل مع textarea",
      englishTerm: "Handling Controlled Textarea",
      description: "كيفية التعامل مع حقل النصوص متعدد الأسطر <textarea> في React. في HTML التقليدي، توضع النصوص بين وسمي الفتح والإغلاق: <textarea>نص هنا</textarea>. أما في React، يعامل <textarea> تماماً مثل <input> العادي عبر خاصية value الذاتية الإغلاق، مما يجعله مكوناً مضبوطاً ومتناسقاً في المعمارية.",
      realLifeAnalogy: "مثل دفتر الملاحظات الرقمي؛ لا تبحث عن الصفحات الداخلية لتضع القلم بينها، بل لديك واجهة شاشة واحدة تقرأ ما كتبته وتحدثه فوراً في ذاكرة النظام.",
      whyItMatters: "تستخدم مساحات النصوص للمقالات، التعليقات، والرسائل الطويلة. توحيد طريقة التعامل معها باستخدام خاصية value يسهل تتبع عدد الكلمات المتبقية، والتحقق من الحد الأقصى للطول (Max Length).",
      syntax: "const [bio, setBio] = useState('');\n<textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={4} />",
      simpleExample: `// مساحة نصوص مضبوطة تعرض عدد الحروف المتبقية
import React, { useState } from "react";

export function ControlledBioTextarea() {
  // حالة لتخزين السيرة الذاتية
  const [bio, setBio] = useState("");
  // الحد الأقصى للحروف المسموحة
  const MAX_CHARS = 150;

  // معالج التغيير لمساحة النص
  const handleBioChange = (e) => {
    // التأكد من عدم تجاوز الحد الأقصى
    if (e.target.value.length <= MAX_CHARS) {
      setBio(e.target.value);
    }
  };

  return (
    <div>
      {/* وسم textarea يستخدم خاصية value تماماً مثل input في React */}
      <textarea
        value={bio}
        onChange={handleBioChange}
        placeholder="اكتب نبذة قصيرة عنك..."
      />
      {/* عرض عدد الحروف المتبقية للمستخدم */}
      <p>المتبقي: {MAX_CHARS - bio.length} حرف</p>
    </div>
  );
}
`,
      advancedExample: `// محرر ملاحظات متقدم مع عداد حروف ومؤشر بصري لاكتمال النص
import React, { useState } from "react";

export function FeedbackNotesCard() {
  const [notes, setNotes] = useState("");
  const MAX_LIMIT = 200;

  const remaining = MAX_LIMIT - notes.length;
  const progressPercent = Math.min(100, (notes.length / MAX_LIMIT) * 100);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مساحة نصوص متعددة (textarea)</h4>
        <span className="text-[10px] font-mono text-slate-400">
          {notes.length} / {MAX_LIMIT}
        </span>
      </div>

      <div className="space-y-2">
        <label className="text-xs text-slate-300 font-bold block">ملاحظات واقتراحات التطوير:</label>
        <textarea
          rows={4}
          value={notes}
          onChange={(e) => {
            if (e.target.value.length <= MAX_LIMIT) {
              setNotes(e.target.value);
            }
          }}
          placeholder="شاركنا رأيك حول أداء التطبيق وسرعة الاستجابة..."
          className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 resize-none"
        />

        {/* شريط تقدم ملء الحروف */}
        <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
          <div
            className={\`h-full transition-all duration-300 \${
              remaining < 20 ? "bg-rose-500" : "bg-indigo-500"
            }\`}
            style={{ width: \`\${progressPercent}%\` }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center text-[11px] text-slate-400">
        <span>الحروف المتبقية:</span>
        <span className={\`font-mono font-bold \${remaining < 20 ? "text-rose-400" : "text-emerald-400"}\`}>
          {remaining}
        </span>
      </div>
    </div>
  );
}
`,
      outputExplanation: "في React، لا نضع الأطفال بين وسمي <textarea>{text}</textarea> لأن ذلك يسبب أخطاء تصيير؛ بل نمرر القيمة عبر خاصية value={notes} تماماً كما نفعل مع وسم الإدخال العادي.",
      commonMistakes: [
        {
          mistake: "كتابة النص كأبناء داخل الوسم: <textarea>{notes}</textarea>.",
          fix: "استخدم خاصية value دائماً: <textarea value={notes} onChange={...} />.",
          reason: "وسم textarea في React مصمم هندسياً ليتطابق مع واجهة input لتسهيل التحكم البرمجي الموحد."
        }
      ],
      bestPractices: [
        "استخدم خاصية rows لتحديد الارتفاع الأولي بدلاً من الاعتماد على أبعاد عشوائية.",
        "أضف خاصية resize-none في CSS لمنع المستخدم من تشويه التصميم المتجاوب إذا كان الحجم ثابتاً."
      ],
      infographicCard: {
        title: "قواعد وسم textarea في React",
        points: [
          "استخدام خاصية value بدلاً من وضع نصوص بين الوسمين.",
          "معالج onChange لتحديث الذاكرة النصية مع كل سطر جديد.",
          "سهولة مراقبة الحد الأقصى للحروف وشريط التقدم."
        ]
      }
    },
    {
      id: "8.1.d",
      title: "التعامل مع select",
      englishTerm: "Handling Controlled Select Dropdowns",
      description: "إدارة القوائم المنسدلة <select> في React. في HTML القديم، يتم تحديد الخيار النشط بإضافة خاصية selected على وسم <option selected>. أما في React، يتم تحديد الخيار المختار في وسم <select> الأب مباشرة عبر خاصية value={selectedOption}، مما يجعل إدارة القائمة واختيار القيم ديناميكياً في غاية البساطة والأناقة.",
      realLifeAnalogy: "مثل قائمة اختيار الدولة عند حجز تذكرة طيران؛ بدلاً من وضع علامة صح على ورقة داخل الكتيب، تختار اسم الدولة من الشاشة اللمسية لتظهر الدولة المحددة في صندوق الاختيار الرئيسي فوراً.",
      whyItMatters: "القوائم المنسدلة تستخدم في تصنيف المنتجات، اختيار الدول، تحديد اللغات، وتصفية الجداول. ربطها بالحالة يتيح لك إنشاء قوائم منسدلة معتمدة على بعضها (Cascading Dropdowns مثل اختيار الدولة ثم تحميل مدنها تلقائياً).",
      syntax: "const [country, setCountry] = useState('SA');\n<select value={country} onChange={(e) => setCountry(e.target.value)}>\n  <option value=\"SA\">السعودية</option>\n  <option value=\"EG\">مصر</option>\n</select>",
      simpleExample: `// قائمة منسدلة لاختيار لغة الواجهة
import React, { useState } from "react";

export function LanguageSelectDemo() {
  // حالة تخزين كود اللغة المحددة
  const [lang, setLang] = useState("ar");

  // معالج تغيير الخيار المحدد
  const handleSelectChange = (e) => {
    // تعيين القيمة الجديدة المختارة
    setLang(e.target.value);
  };

  return (
    <div>
      {/* خاصية value على وسم select هي المسؤولة عن الخيار النشط */}
      <select value={lang} onChange={handleSelectChange}>
        <option value="ar">العربية (Arabic)</option>
        <option value="en">الإنجليزية (English)</option>
        <option value="fr">الفرنسية (French)</option>
      </select>
      {/* عرض الخيار الحالي */}
      <p>اللغة الحالية: {lang}</p>
    </div>
  );
}
`,
      advancedExample: `// قوائم منسدلة مترابطة (Cascading Dropdowns) لاختيار الدولة والمدينة
import React, { useState } from "react";

const CITIES_BY_COUNTRY = {
  SA: [
    { code: "RUH", name: "الرياض" },
    { code: "JED", name: "جدة" },
    { code: "DMM", name: "الدمام" }
  ],
  AE: [
    { code: "DXB", name: "دبي" },
    { code: "AUH", name: "أبوظبي" }
  ],
  EG: [
    { code: "CAI", name: "القاهرة" },
    { code: "ALX", name: "الإسكندرية" }
  ]
};

export function CascadingSelectCards() {
  const [selectedCountry, setSelectedCountry] = useState("SA");
  const [selectedCity, setSelectedCity] = useState("RUH");

  // عند تغيير الدولة، نغير الدولة ونصفر المدينة لأول مدينة فيها
  const handleCountryChange = (e) => {
    const nextCountry = e.target.value;
    setSelectedCountry(nextCountry);
    setSelectedCity(CITIES_BY_COUNTRY[nextCountry][0].code);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">قوائم منسدلة مترابطة (Cascading)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          select + value
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-xs text-slate-300 block mb-1">اختر الدولة:</label>
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="SA">المملكة العربية السعودية 🇸🇦</option>
            <option value="AE">الإمارات العربية المتحدة 🇦🇪</option>
            <option value="EG">جمهورية مصر العربية 🇪🇬</option>
          </select>
        </div>

        <div>
          <label className="text-xs text-slate-300 block mb-1">اختر المدينة المتاحة:</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
          >
            {CITIES_BY_COUNTRY[selectedCountry].map((city) => (
              <option key={city.code} value={city.code}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 flex justify-between">
        <span>الوجهة المختارة:</span>
        <span className="font-mono text-emerald-400 font-bold">
          {selectedCountry} / {selectedCity}
        </span>
      </div>
    </div>
  );
}
`,
      outputExplanation: "بدلاً من تشتيت الكود بوضع selected على خيارات option، تحدد خاصية value في وسم select الخيار المعروض مباشرة، مما يجعل تحديث الخيارات الفرعية تلقائياً ومستقراً.",
      commonMistakes: [
        {
          mistake: "وضع خاصية selected على وسم <option selected>.",
          fix: "انقل قيمة الخيار النشط إلى خاصية value في وسم <select value={state}> الأب.",
          reason: "تتجاهل React خاصية selected على الخيارات الفرعية وتعتمد حصراً على value المعينة في select الأب."
        }
      ],
      bestPractices: [
        "استخدم المصفوفات ودالة map لتوليد خيارات <option> ديناميكياً مع تحديد key فريد لكل خيار.",
        "ادعم خاصية multiple بتمرير مصفوفة من القيم إذا كنت تريد قائمة متعددة الاختيارات."
      ],
      infographicCard: {
        title: "معمارية القوائم المنسدلة في React",
        points: [
          "خاصية value توضع على وسم <select> الأب فقط.",
          "تجاهل تام لخاصية selected على وسوم <option>.",
          "سهولة بناء القوائم المترابطة (Cascading Dropdowns)."
        ]
      }
    },
    {
      id: "8.1.e",
      title: "التعامل مع checkbox",
      englishTerm: "Handling Controlled Checkboxes",
      description: "إدارة مربعات الاختيار الثنائية <input type=\"checkbox\">. على عكس حقول الإدخال النصية التي تقرأ نصاً عبر e.target.value، فإن مربعات الاختيار تقرأ قيمة منطقية (Boolean) عبر خاصية checked، ويتم استخراج قيمتها الجديدة من كائن الحدث بواسطة e.target.checked.",
      realLifeAnalogy: "مثل مفتاح تشغيل 'التنبيهات التلقائية' في إعدادات الهاتف؛ المفتاح إما مفعل (مصحوب بعلامة صح) أو معطل، وليس هناك نص مكتوب بداخله.",
      whyItMatters: "تستخدم مربعات الاختيار في الموافقة على الشروط والأحكام، تفعيل تذكرني (Remember Me)، واختيار عناصر متعددة في الجداول والقوائم. الخلط بين e.target.value و e.target.checked هو أحد أشهر أخطاء المبتدئين.",
      syntax: "const [agreed, setAgreed] = useState(false);\n<input type=\"checkbox\" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />",
      simpleExample: `// مربع اختيار مضبوط للموافقة على شروط الاستخدام
import React, { useState } from "react";

export function TermsCheckboxDemo() {
  // حالة منطقية لتخزين الموافقة
  const [isAgreed, setIsAgreed] = useState(false);

  // معالج التبديل عند النقر على المربع
  const handleToggle = (e) => {
    // قراءة القيمة المنطقية checked بدلاً من value
    setIsAgreed(e.target.checked);
  };

  return (
    <div>
      <label>
        {/* استخدام خاصية checked بدلاً من value */}
        <input
          type="checkbox"
          checked={isAgreed}
          onChange={handleToggle}
        />
        أوافق على الشروط وسياسة الخصوصية
      </label>
      {/* تفعيل أو تعطيل الزر بناءً على حالة مربع الاختيار */}
      <button disabled={!isAgreed}>متابعة التسجيل</button>
    </div>
  );
}
`,
      advancedExample: `// قائمة تفاعلية لاختيار مهارات المطور مع مصفوفة قيم متعددة
import React, { useState } from "react";

const AVAILABLE_SKILLS = [
  { id: "react", label: "مكتبة React 19" },
  { id: "ts", label: "لغة TypeScript" },
  { id: "tailwind", label: "مكتبة Tailwind CSS" },
  { id: "next", label: "إطار عمل Next.js" }
];

export function MultiSkillsSelector() {
  // مصفوفة لتخزين المعرفات المختارة
  const [selectedSkills, setSelectedSkills] = useState(["react"]);

  // معالج إضافة أو إزالة المهارة من المصفوفة
  const handleSkillToggle = (skillId) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId)
        ? prev.filter((id) => id !== skillId) // إزالة عند إلغاء التحديد
        : [...prev, skillId]                  // إضافة عند التحديد
    );
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مربعات اختيار متعددة (Checkboxes)</h4>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
          {selectedSkills.length} مختار
        </span>
      </div>

      <div className="space-y-2">
        {AVAILABLE_SKILLS.map((skill) => {
          const isChecked = selectedSkills.includes(skill.id);
          return (
            <label
              key={skill.id}
              className={\`flex items-center justify-between p-3 rounded-2xl border cursor-pointer select-none transition-all \${
                isChecked
                  ? "bg-indigo-950/60 border-indigo-500/80 text-white"
                  : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
              }\`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleSkillToggle(skill.id)}
                  className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
                />
                <span className="text-xs font-bold">{skill.label}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">
                {isChecked ? "نشط ✓" : "غير محدد"}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
`,
      outputExplanation: "مع مربعات الاختيار، نستخدم خاصية checked={state} لقراءة وتعيين الحالة البصرية، ونستخدم e.target.checked داخل حدث onChange للحصول على القيمة المنطقية الحقيقية (true أو false).",
      commonMistakes: [
        {
          mistake: "استخدام e.target.value مع حقول checkbox.",
          fix: "استخدم e.target.checked دائماً لقراءة القيمة المنطقية الصائبة.",
          reason: "خاصية e.target.value تعيد النص 'on' دائماً سواء كان المربع محدداً أم غير محدد!"
        }
      ],
      bestPractices: [
        "استخدم خاصية checked للربط بالحالة وتجنب خاصية defaultChecked في المكونات المضبوطة.",
        "احرص على استخدام accent-color في CSS لتلوين علامة الصح بما يناسب هوية تطبيقك."
      ],
      infographicCard: {
        title: "دستور مربعات الاختيار Checkbox",
        points: [
          "الخاصية البصرية: checked={boolean}.",
          "خاصية الحدث: e.target.checked (تعيد true / false).",
          "تجنب e.target.value لأنها تعيد دائماً نص 'on'."
        ]
      }
    },
    {
      id: "8.1.f",
      title: "التعامل مع radio buttons",
      englishTerm: "Handling Controlled Radio Buttons",
      description: "إدارة أزرار الاختيار الدائرية المنفردة <input type=\"radio\">. تستخدم أزرار الراديو عندما يتعين على المستخدم اختيار خيار واحد فقط من بين مجموعة خيارات حصرية متبادلة (Mutually Exclusive). تشترك جميع الأزرار في نفس خاصية name، ويتم تحديد الزر النشط بمقارنة قيمة الزر value مع الحالة الحالية عبر checked={selected === value}.",
      realLifeAnalogy: "مثل أزرار اختيار سرعة المروحة الكهربائية (1، 2، 3، إيقاف)؛ الضغط على زر السرعة 2 يرفع زر السرعة 1 تلقائياً بصوت ميكانيكي، فلا يمكن للمروحة أن تدور بسرعتين في آن واحد.",
      whyItMatters: "تعد أزرار الراديو حاسمة في تحديد طرق الدفع (بطاقة، نقد، باي بال)، واختيار مقاسات الملابس، وتحديد خيارات الشحن السريع. الإدارة الصحيحة لها تضمن عدم اختيار قيمتين متضاربتين في نفس اللحظة.",
      syntax: "<input\n  type=\"radio\"\n  name=\"plan\"\n  value=\"pro\"\n  checked={plan === 'pro'}\n  onChange={(e) => setPlan(e.target.value)}\n/>",
      simpleExample: `// مجموعة أزرار راديو لاختيار نوع الاشتراك
import React, { useState } from "react";

export function SubscriptionRadioGroup() {
  // حالة تخزين الخيار المختار حالياً
  const [plan, setPlan] = useState("free");

  // معالج تغيير الخيار
  const handleChange = (e) => {
    // تعيين القيمة المختارة في الحالة
    setPlan(e.target.value);
  };

  return (
    <div>
      <h3>اختر باقتك:</h3>
      <label>
        {/* فحص المطابقة عبر خاصية checked */}
        <input
          type="radio"
          name="subscription"
          value="free"
          checked={plan === "free"}
          onChange={handleChange}
        />
        الباقة المجانية
      </label>

      <label>
        <input
          type="radio"
          name="subscription"
          value="pro"
          checked={plan === "pro"}
          onChange={handleChange}
        />
        باقة المحترفين
      </label>

      <p>الباقة النشطة: {plan}</p>
    </div>
  );
}
`,
      advancedExample: `// محدد طرق الدفع الإلكتروني المصمم بأناقة مع أزرار راديو خفية
import React, { useState } from "react";

const PAYMENT_METHODS = [
  { id: "apple_pay", name: "Apple Pay", icon: "", fee: "مجاناً" },
  { id: "credit_card", name: "بطاقة ائتمان (Visa/Mastercard)", icon: "💳", fee: "+1.5%" },
  { id: "mada", name: "بطاقة مدى البنكية", icon: "🏧", fee: "مجاناً" }
];

export function PaymentMethodSelector() {
  const [selectedMethod, setSelectedMethod] = useState("apple_pay");

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">أزرار راديو حصرية (Radio Group)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Exclusive Choice
        </span>
      </div>

      <div className="space-y-2">
        {PAYMENT_METHODS.map((method) => {
          const isSelected = selectedMethod === method.id;
          return (
            <label
              key={method.id}
              className={\`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all \${
                isSelected
                  ? "bg-indigo-950/70 border-indigo-500 shadow-md shadow-indigo-950/50"
                  : "bg-slate-950 border-slate-800 hover:border-slate-700"
              }\`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment_group"
                  value={method.id}
                  checked={isSelected}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="w-4 h-4 accent-indigo-500 cursor-pointer"
                />
                <span className="text-lg">{method.icon}</span>
                <div>
                  <p className="text-xs font-bold text-white">{method.name}</p>
                  <p className="text-[10px] text-slate-400">رسوم المعاملة: {method.fee}</p>
                </div>
              </div>

              {isSelected && (
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  محددة ✓
                </span>
              )}
            </label>
          );
        })}
      </div>
    </div>
  );
}
`,
      outputExplanation: "كل زر راديو يحمل نفس خاصية name ليعرف المتصفح أنها تنتمي لنفس المجموعة. وتحدد React الزر النشط بمقارنة checked={selectedMethod === method.id}.",
      commonMistakes: [
        {
          mistake: "نسيان إعطاء نفس خاصية name لأزرار الراديو التابعة لنفس المجموعة.",
          fix: "تأكد من أن جميع الأزرار المتنافسة تشترك في نفس قيمة name.",
          reason: "بدون خاصية name موحدة، لن يعرف المتصفح ومحركات إمكانية الوصول أن الأزرار متبادلة، مما قد يتيح تحديد أكثر من زر معاً."
        }
      ],
      bestPractices: [
        "استخدم اسم مجموعة معبر وثابت في خاصية name (مثل name='shipping_speed').",
        "حدد خياراً افتراضياً دائماً في useState حتى لا تترك المجموعة دون اختيار مبدئي."
      ],
      infographicCard: {
        title: "معمارية أزرار Radio في React",
        points: [
          "خاصية name موحدة لكافة أزرار المجموعة الواحدة.",
          "مقارنة التطابق: checked={state === value}.",
          "تحديث فوري عبر onChange={(e) => setState(e.target.value)}."
        ]
      }
    },
    {
      id: "8.1.g",
      title: "إدارة قيم الحقول باستخدام State",
      englishTerm: "Managing Multi-Field Forms with a Single Object State",
      description: "المعيار الهندسي المتقدم لإدارة النماذج التي تحتوي على عدة حقول مختلفة (اسم، بريد، كلمة مرور، بلد، شروط). بدلاً من تعريف 10 استدعاءات منفصلة لـ useState لكل حقل، نقوم بتخزين كافة قيم النموذج داخل 'كائن حالة موحد' (Object State) واستخدام دالة معالج عامة تعتمد على خاصية name الديناميكية [e.target.name]: e.target.value.",
      realLifeAnalogy: "مثل ملف الموظف في قسم الموارد البشرية؛ بدلاً من وضع كل ورقة في صندوق منفصل في غرفة مختلفة، توضع جميع أوراق الموظف داخل مصنف واحد يحمل اسمه لسهولة التحديث والمراجعة.",
      whyItMatters: "يقلص كود المكون من مئات الأسطر إلى بضعة أسطر نظيفة. إضافة حقل جديد في النموذج يتطلب فقط إضافة سطر واحد في JSX دون الحاجة لإنشاء useState أو معالج أحداث جديد.",
      syntax: "const [formData, setFormData] = useState({ name: '', email: '', role: 'user' });\n\nconst handleChange = (e) => {\n  const { name, value, type, checked } = e.target;\n  setFormData(prev => ({\n    ...prev,\n    [name]: type === 'checkbox' ? checked : value\n  }));\n};",
      simpleExample: `// إدارة نموذج متعدد الحقول بكائن حالة واحد ومعالج موحد
import React, { useState } from "react";

export function MultiFieldForm() {
  // كائن حالة موحد يجمع كافة حقول النموذج
  const [form, setForm] = useState({
    username: "",
    email: "",
    city: "Riyadh",
    subscribe: false
  });

  // معالج موحد لكافة الحقول يعتمد على اسم الحقل البرمجي
  const handleUniversalChange = (e) => {
    // تفكيك خصائص الحقل من كائن الهدف
    const { name, value, type, checked } = e.target;
    // تحديث الكائن بنسخ القديم واستبدال الخاصية المطلوبة ديناميكياً
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleUniversalChange}
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleUniversalChange}
      />
    </form>
  );
}
`,
      advancedExample: `// لوحة تسجيل موظف متكاملة تعتمد على كائن الحالة الموحد
import React, { useState } from "react";

export function EmployeeRegistrationCard() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    department: "engineering",
    isRemote: true
  });

  const handleFieldChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">إدارة النموذج الموحد (Unified Form State)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Dynamic [name]
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">اسم الموظف:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleFieldChange}
            placeholder="مثال: خالد المهيدب"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="text-slate-300 block mb-1">البريد المهني:</label>
          <input
            type="email"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleFieldChange}
            placeholder="khalid@company.com"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="text-slate-300 block mb-1">القسم الهندسي:</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleFieldChange}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="engineering">تطوير البرمجيات (Engineering)</option>
            <option value="design">تصميم الواجهات (Product Design)</option>
            <option value="qa">ضمان الجودة (QA)</option>
          </select>
        </div>

        <label className="flex items-center gap-2 p-2 bg-slate-950 rounded-xl border border-slate-800 cursor-pointer">
          <input
            type="checkbox"
            name="isRemote"
            checked={formData.isRemote}
            onChange={handleFieldChange}
            className="w-4 h-4 accent-indigo-500 rounded"
          />
          <span>العمل عن بُعد بنظام مرن (Remote Work)</span>
        </label>
      </div>

      {/* معاينة كائن الحالة اللحظي بتنسيق JSON */}
      <div className="p-3 bg-slate-950 rounded-2xl border border-indigo-500/30">
        <span className="text-[10px] text-slate-500 uppercase block mb-1 font-mono">الحالة الحالية في الذاكرة:</span>
        <pre className="font-mono text-[10px] text-indigo-300 overflow-x-auto">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
`,
      outputExplanation: "باستخدام الصيغة المحسوبة [name]: value، يقوم معالج واحد بخدمة عشرات الحقول، حيث يطابق اسم الحقل في HTML مع مفتاح الكائن في الحالة ويحدثه بنقاء تام عبر معامل الانتشار ...prev.",
      commonMistakes: [
        {
          mistake: "نسيان وضع خاصية name على عناصر الإدخال، أو كتابة اسم يختلف عن مفتاح الكائن في useState.",
          fix: "تأكد من تطابق قيمة خاصية name في input حرفياً مع اسم المفتاح داخل كائن الحالة.",
          reason: "إذا كانت خاصية name مفقودة، ستصبح النتيجة undefined: value في كائن الحالة مما يسبب تلف البيانات."
        }
      ],
      bestPractices: [
        "استخدم معامل الانتشار (...prev) دائماً للحفاظ على باقي الحقول التي لم تتغير.",
        "قم بفحص نوع الحقل type لمعالجة e.target.checked مع مربعات الاختيار تلقائياً."
      ],
      infographicCard: {
        title: "نمط كائن الحالة الموحد Object State Pattern",
        points: [
          "حالة واحدة تجمع كل حقول النموذج في كائن JSON.",
          "خاصية name على كل وسم input تطابق مفتاح الكائن.",
          "معالج شامل واحد يعتمد على [e.target.name] المطور."
        ]
      }
    },
    {
      id: "8.1.h",
      title: "التعامل مع إرسال النموذج",
      englishTerm: "Handling Form Submission & Data Payloads",
      description: "إدارة دورة حياة إرسال النموذج (Form Submission) في React. يشمل ذلك اعتراض حدث onSubmit، منع إعادة تحميل المتصفح عبر e.preventDefault()، استخراج البيانات وتجهيز الحمولة (Payload)، إظهار حالة التحميل (Loading Spinner)، تعطيل زر الإرسال لمنع الإرسال المزدوج، وإرسال البيانات عبر fetch أو axios.",
      realLifeAnalogy: "مثل إرسال معاملة في تطبيق البنكي؛ عند الضغط على 'تأكيد الحوالة'، يتحول الزر فوراً إلى شكل دائرة تدور وتصبح الشاشة غير قابلة للنقر مرتين حتى يكتمل الطلب ويظهر إشعار النجاح.",
      whyItMatters: "إذا لم تعطل زر الإرسال أثناء التحميل، قد يضغط المستخدم المتعجل 5 مرات متتالية، مما قد يتسبب في خصم المبلغ المالي 5 مرات أو إنشاء 5 حسابات مكررة في قاعدة البيانات.",
      syntax: "const handleSubmit = async (e) => {\n  e.preventDefault();\n  setIsLoading(true);\n  try {\n    await sendData(form);\n  } finally {\n    setIsLoading(false);\n  }\n};",
      simpleExample: `// معالجة إرسال النموذج مع منع الإرسال المزدوج
import React, { useState } from "react";

export function SubmitHandlerDemo() {
  // حالة مراقبة عملية الإرسال الجارية
  const [isSubmitting, setIsSubmitting] = useState(false);

  // دالة الإرسال غير المتزامنة
  const handleSubmit = async (e) => {
    // منع إعادة تحميل الصفحة
    e.preventDefault();
    // تفعيل حالة التحميل وتعطيل الزر
    setIsSubmitting(true);

    // محاكاة طلب شبكة يستغرق ثانيتين
    setTimeout(() => {
      console.log("تم حفظ البيانات في الخادم بنجاح!");
      // إنهاء حالة التحميل
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="اسمك..." required />
      {/* تعطيل الزر أثناء الإرسال وتغيير نصه */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "جارٍ الحفظ..." : "حفظ البيانات"}
      </button>
    </form>
  );
}
`,
      advancedExample: `// محاكي إرسال طلب اشتراك متكامل مع محاكاة الاستجابة وتأكيد العملية
import React, { useState } from "react";

export function AsyncOrderSubmission() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // محاكاة طلب API للخادم
    setTimeout(() => {
      if (email.includes("@")) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">إرسال النموذج (Submission Lifecycle)</h4>
        <span className={\`text-[10px] font-mono px-2 py-0.5 rounded font-bold \${
          status === "loading" ? "bg-amber-950 text-amber-400" :
          status === "success" ? "bg-emerald-950 text-emerald-400" : "bg-slate-800 text-slate-400"
        }\`}>
          الحالة: {status}
        </span>
      </div>

      <form onSubmit={handleOrderSubmit} className="space-y-3">
        <div>
          <label className="text-xs text-slate-300 block mb-1">البريد الإلكتروني للطلب:</label>
          <input
            type="email"
            required
            value={email}
            disabled={status === "loading"}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="client@domain.com"
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/30"
        >
          {status === "loading" ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>جارٍ المعالجة المشفرة...</span>
            </>
          ) : (
            <span>تأكيد الطلب والدفع 💳</span>
          )}
        </button>
      </form>

      {status === "success" && (
        <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs text-center">
          ✓ تم إرسال طلبك بنجاح وحفظ البيانات في السيرفر!
        </div>
      )}
    </div>
  );
}
`,
      outputExplanation: "من خلال إدارة حالة status (idle, loading, success)، يتم تعطيل الحقول وزر الإرسال لمنع التكرار، مع عرض مؤشر دوران بصري ينقل تجربة المستخدم لأعلى درجات الاحترافية.",
      commonMistakes: [
        {
          mistake: "ترك زر الإرسال مفعلاً أثناء انتظار استجابة السيرفر.",
          fix: "أضف خاصية disabled={isLoading} على زر الإرسال لتجميده حتى انتهاء الطلب.",
          reason: "النقر المتكرر السريع ينشئ طلبات متزامنة في الشبكة تؤدي لإنشاء سجلات مكررة في قاعدة البيانات."
        }
      ],
      bestPractices: [
        "استدعِ e.preventDefault() في أول سطر في دالة handleSubmit دائماً.",
        "عطل حقول النموذج أيضاً أثناء الإرسال لمنع التعديل أثناء نقل البيانات."
      ],
      infographicCard: {
        title: "دورة حياة إرسال النموذج Form Submission",
        points: [
          "1. e.preventDefault() لمنع إعادة تحميل الصفحة.",
          "2. تفعيل isLoading وتعطيل زر الإرسال فوراً.",
          "3. إرسال الطلب عبر الشبكة ومعالجة الاستجابة أو الخطأ."
        ]
      }
    },
    {
      id: "8.1.i",
      title: "إعادة تعيين قيم النموذج",
      englishTerm: "Resetting Form Values to Initial State",
      description: "الآلية الصحيحة لتصفير وإعادة تعيين حقول النموذج (Form Reset) بعد اكتمال الإرسال بنجاح أو عند ضغط زر 'إلغاء/مسح'. في المكونات المضبوطة، لا نستخدم دالة DOM القديمة form.reset()، بل نقوم بإعادة تعيين كائن الحالة في React إلى كائن القيم الابتدائية (Initial State) لضمان اتساق الواجهة مع الذاكرة.",
      realLifeAnalogy: "مثل مسح السبورة البيضاء بعد انتهاء الدرس؛ تعود السبورة بيضاء نقية تماماً ومستعدة لكتابة درس جديد من الصفر دون أي آثار من الدرس السابق.",
      whyItMatters: "استخدام الطرق القديمة مثل e.target.reset() يعيد تعيين عناصر DOM السطحية فقط بينما تبقى حالة React محتفظة بالبيانات القديمة، مما يخلق تضارباً خطيراً بين ما يراه المستخدم وما يُرسل للخادم.",
      syntax: "const INITIAL_STATE = { name: '', email: '' };\nconst [form, setForm] = useState(INITIAL_STATE);\n\nconst handleReset = () => {\n  setForm(INITIAL_STATE);\n};",
      simpleExample: `// إعادة تعيين النموذج عبر إعادة ضبط حالة React
import React, { useState } from "react";

// تعريف القيم الابتدائية في كائن مستقل ثابت
const INITIAL_VALUES = {
  taskTitle: "",
  priority: "medium"
};

export function ResetFormDemo() {
  // تهيئة الحالة بالقيم الابتدائية
  const [task, setTask] = useState(INITIAL_VALUES);

  // دالة مسح وتصفير النموذج بالكامل
  const handleClear = () => {
    // إعادة تعيين الحالة للقيم النظيفة الأصلية
    setTask(INITIAL_VALUES);
  };

  return (
    <div>
      <input
        type="text"
        value={task.taskTitle}
        onChange={(e) => setTask({ ...task, taskTitle: e.target.value })}
      />
      {/* زر التصفير يستدعي دالة إعادة التعيين */}
      <button type="button" onClick={handleClear}>
        تصفير ومسح الحقول
      </button>
    </div>
  );
}
`,
      advancedExample: `// نموذج إنشاء تذكرة دعم فني مع دعم الحفظ والتصفير الشامل
import React, { useState } from "react";

const BLANK_TICKET = {
  subject: "",
  category: "technical",
  message: "",
  isUrgent: false
};

export function SupportTicketCard() {
  const [ticket, setTicket] = useState(BLANK_TICKET);
  const [isSaved, setIsSaved] = useState(false);

  const handleField = (e) => {
    const { name, value, type, checked } = e.target;
    setTicket((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleReset = () => {
    setTicket(BLANK_TICKET);
    setIsSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">تصفير النموذج (Form Reset Pattern)</h4>
        <button
          type="button"
          onClick={handleReset}
          className="text-[11px] text-slate-400 hover:text-rose-400 transition-colors"
        >
          مسح الكل ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">موضوع التذكرة:</label>
          <input
            type="text"
            required
            name="subject"
            value={ticket.subject}
            onChange={handleField}
            placeholder="مثال: تعذر تسجيل الدخول..."
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="text-slate-300 block mb-1">تفاصيل المشكلة:</label>
          <textarea
            rows={3}
            required
            name="message"
            value={ticket.message}
            onChange={handleField}
            placeholder="اشرح المشكلة بالتفصيل..."
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 resize-none"
          />
        </div>

        <div className="flex gap-2 pt-1">
          <button
            type="submit"
            className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30"
          >
            إرسال التذكرة ✉️
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-all"
          >
            إلغاء
          </button>
        </div>
      </form>

      {isSaved && (
        <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs text-center flex justify-between items-center">
          <span>✓ تم إرسال التذكرة بنجاح!</span>
          <button
            onClick={handleReset}
            className="text-[10px] underline font-bold hover:text-white"
          >
            كتابة تذكرة جديدة
          </button>
        </div>
      )}
    </div>
  );
}
`,
      outputExplanation: "عن طريق تخزين كائن الحالة الافتراضي في متغير ثابت خارج المكون (BLANK_TICKET)، يمكن تصفير النموذج بلمسة واحدة عبر setTicket(BLANK_TICKET) دون ترك أي بقايا في شجرة المكونات.",
      commonMistakes: [
        {
          mistake: "استخدام e.target.reset() بدلاً من تحديث حالة React.",
          fix: "استدعِ دالة التحديث setForm(INITIAL_STATE) لإعادة تعيين قيم الحالة.",
          reason: "دالة form.reset() المدمجة في المتصفح تتجاهل حالة React وتترك المتغيرات محتفظة بالقيم القديمة."
        }
      ],
      bestPractices: [
        "عرّف كائن القيم الابتدائية INITIAL_STATE كمتغير ثابت خارج دالة المكون لإعادة استخدامه.",
        "تأكد من تحديد type='button' لزر الإلغاء أو التصفير لمنع إطلاق حدث onSubmit بالخطأ."
      ],
      infographicCard: {
        title: "استراتيجية تصفير النماذج Form Reset",
        points: [
          "تخزين القيم الابتدائية في كائن ثابت INITIAL_STATE.",
          "تصفير الحالة البرمجية: setForm(INITIAL_STATE).",
          "تجنب استدعاء form.reset() التقليدي لتفادي تضارب DOM."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q8-1-1",
      question: "ما الذي يجعل حقل الإدخال <input> يُصنف كـ 'مكون مضبوط' (Controlled Component) في React؟",
      options: [
        "إحاطته بوسم <form> وتحديد خاصية required له",
        "ربط خاصية value الخاصة به بحالة React واستخدام حدث onChange لتحديث تلك الحالة",
        "تطبيق تنسيقات CSS صارمة تمنع المستخدم من تغيير حجمه",
        "تثبيته بواسطة مرجع useRef دون استخدام أي حالة"
      ],
      correctAnswer: 1,
      explanation: "المكون المضبوط هو المكون الذي تصبح حالة React هي المصدر الوحيد لحقيقته، حيث تقرأ خاصية value القيمة من State ويقوم onChange بتحديث الـ State مع كل مدخل جديد."
    },
    {
      id: "q8-1-2",
      question: "لماذا يجب قراءة e.target.checked بدلاً من e.target.value عند التعامل مع مربعات الاختيار checkbox؟",
      options: [
        "لأن المتصفح يحظر استخدام e.target.value في لغة جافاسكريبت",
        "لأن e.target.value تعيد دائماً النص 'on' سواء كان المربع محدداً أم غير محدد، بينما checked تعيد قيمة منطقية حقيقية",
        "لأن e.target.checked تقوم بتشفير البيانات قبل إرسالها للسيرفر",
        "لا يوجد فرق بينهما، كلاهما يعمل بنفس الطريقة تماماً"
      ],
      correctAnswer: 1,
      explanation: "في معايير HTML، تعيد خاصية value لمربع الاختيار النص الافتراضي 'on' دائماً، بينما خاصية checked هي التي تعيد القيمة المنطقية الحقيقية (true أو false)."
    },
    {
      id: "q8-1-3",
      question: "كيف نقوم بتحديد الخيار النشط في القوائم المنسدلة <select> داخل React؟",
      options: [
        "بوضع خاصية selected على وسم <option selected> كما في HTML القديم",
        "بإضافة خاصية value على وسم <select value={state}> الأب مباشرة",
        "باستدعاء دالة selectItem() في ملف CSS",
        "بحذف كافة الخيارات غير المرغوبة وإبقاء خيار واحد فقط"
      ],
      correctAnswer: 1,
      explanation: "في React، يتم تمرير القيمة المختارة مباشرة لخاصية value في وسم <select> الأب، وتتجاهل React خاصية selected على خيارات <option> الفرعية."
    }
  ],
  exercise: {
    id: "ex8-1",
    title: "بناء استمارة تسجيل مستخدم متكاملة بنمط كائن الحالة الموحد",
    description: "المطلوب بناء نموذج تسجيل حساب يجمع: اسم المستخدم (نص)، البريد الإلكتروني (بريد)، نوع الحساب (قائمة منسدلة)، والموافقة على الشروط (مربع اختيار). يجب إدارة جميع هذه الحقول داخل كائن حالة واحد عبر useState ومعالج عام واحد [e.target.name]، مع توفير زر لمسح وتصفير النموذج بالكامل.",
    starterCode: `import { useState } from "react";

export function RegisterUserForm() {
  // 1. عرف كائن الحالة الموحد formData
  // 2. اكتب دالة المعالج العام handleChange
  // 3. اكتب دالة التصفير handleReset
  // 4. اربط كافة الحقول بالحالة ومعالج التغيير

  return (
    <form className="p-4 text-white">
      {/* حقول النموذج هنا */}
    </form>
  );
}`,
    hints: [
      "أنشئ كائناً ابتدائياً { username: '', email: '', role: 'user', terms: false }.",
      "استخرج { name, value, type, checked } من e.target داخل المعالج العام.",
      "استخدم [name]: type === 'checkbox' ? checked : value داخل دالة التحديث الوظيفية."
    ],
    solution: `import { useState } from "react";

const INITIAL_FORM = {
  username: "",
  email: "",
  role: "developer",
  terms: false
};

export function RegisterUserForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSuccess, setIsSuccess] = useState(false);

  // المعالج الشامل الموحد لكافة الحقول
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // دالة الإرسال
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("يجب الموافقة على الشروط أولاً!");
      return;
    }
    setIsSuccess(true);
  };

  // دالة التصفير النظيف
  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setIsSuccess(false);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <h4 className="font-bold text-sm text-indigo-400">نموذج تسجيل الحساب الشامل</h4>

      <form onSubmit={handleSubmit} className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">اسم المستخدم:</label>
          <input
            type="text"
            required
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="مثال: tarek_dev"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="text-slate-300 block mb-1">البريد الإلكتروني:</label>
          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tarek@example.com"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="text-slate-300 block mb-1">نوع الحساب:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="developer">مطور برمجيات (Developer)</option>
            <option value="designer">مصمم واجهات (UI Designer)</option>
            <option value="manager">مدير منتج (Product Manager)</option>
          </select>
        </div>

        <label className="flex items-center gap-2 p-2 bg-slate-950 rounded-xl border border-slate-800 cursor-pointer">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="w-4 h-4 accent-indigo-500 rounded"
          />
          <span>أوافق على اتفاقية الاستخدام وسياسة الخصوصية</span>
        </label>

        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
          >
            إنشاء الحساب 🚀
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-all"
          >
            مسح
          </button>
        </div>
      </form>

      {isSuccess && (
        <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs text-center">
          ✓ تم إنشاء حساب المستخدم بنجاح ومزامنة البيانات في State!
        </div>
      )}
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة أساسيات النماذج في React",
    description: "الدليل المرئي الشامل للمكونات المضبوطة، معالجات الأحداث، وإدارة كائن الحالة الموحد.",
    sections: [
      {
        heading: "1. أنواع الحقول المضبوطة (Controlled Elements)",
        bullets: [
          "input & textarea: قيمة value مرتبطة بـ State وحدث onChange.",
          "select: خاصية value على الوسم الأب تحدد الخيار النشط.",
          "checkbox & radio: خاصية checked للربط و e.target.checked للقراءة."
        ]
      },
      {
        heading: "2. المعمارية الموحدة (Unified Architecture)",
        bullets: [
          "كائن حالة واحد: يجمع كل الحقول في كائن موحد لتفادي تكرار useState.",
          "معالج شامل: يعتمد على [e.target.name] لتحديث أي حقل بسطر واحد.",
          "تصفير نظيف: إعادة تعيين الحالة إلى INITIAL_STATE الثابتة."
        ]
      },
      {
        heading: "3. دورة الإرسال والأمان (Submission & Safety)",
        bullets: [
          "e.preventDefault(): لمنع إعادة تحميل الصفحة في تطبيقات SPA.",
          "تعطيل الزر (disabled): لمنع الإرسال المزدوج أثناء انتظار استجابة السيرفر."
        ]
      }
    ]
  }
};
