// topic3.js - القسم 15: React Hooks المتقدمة ومفاهيم React الحديثة
// الموضوع 3: استخدام useId و useSyncExternalStore

export const topic3 = {
  id: "15.3",
  title: "استخدام useId و useSyncExternalStore",
  englishTitle: "Using useId & useSyncExternalStore",
  description: "دليل احتراف خطافي useId و useSyncExternalStore في React الحديثة: توليد معرّفات فريدة متوافقة مع SSR وإمكانية الوصول a11y، والاشتراك الآمن في مخازن البيانات الخارجية وواجهات المتصفح مع منع ظاهرة التمزق (Tearing) في المعالجة المتزامنة.",
  subtopics: [
    {
      id: "15.3.a",
      title: "توليد معرّفات باستخدام useId",
      englishTerm: {
        term: "Generating IDs with useId",
        pronunciation: "جينيريتينغ آي ديز وذ يوز آي دي",
        meaning: "خطاف React 18+ لتوليد معرّفات فريدة ومستقرة تماماً بين الخادم والعميل لتفادي أخطاء Hydration Mismatch"
      },
      description: "قبل React 18، كان المطورون يولدون المعرفات عبر عدادات عامة عشوائية أو `Math.random()`. هذه الطرق كانت تسبب خطأ فادحاً في تطبيقات العرض على الخادم (SSR)، حيث يولد الخادم معرفاً مختلفاً عن المعرف الذي يولده المتصفح عند إقلاع التطبيق (Hydration Mismatch). يوفر خطاف `useId` معرفاً فريداً ومبنياً على موقع المكون داخل شجرة React نفسها، مما يضمن تطابقه بنسبة 100% بين شفرة HTML الصادرة من الخادم وشفرة العميل التفاعلية.",
      analogy: "يشبه الأمر رقم المقعد في تذكرة الطائرة؛ التذكرة تطبع على حاسوب شركة الطيران في السيرفر بنفس رقم المقعد المطبوع على بطاقة صعود الطائرة في هاتفك (useId). تخيل لو كان كل من السيرفر وهاتفك يختار رقماً عشوائياً مختلفاً (`Math.random`)؛ لحدث شجار فوضوي في الطائرة بين مسافرين يحمل كل منهما نفس المقعد!",
      whyItMatters: "يحمي `useId` تطبيقك من تحذيرات الـ Hydration المزعجة ويضمن استقرار عناصر الواجهة وإمكانية الوصول إليها دون أي تضارب بين نسخ المكونات المتكررة على الصفحة الواحدة.",
      syntax: "const id = useId();\n// ينتج معرفاً فريداً مثل ':r1:' أو ':r2:'",
      simpleExample: `// استيراد useId من React
import { useId } from 'react';

// مكون حقل نصي بسيط يعتمد على useId لضمان التفرد
export function SimpleIdField({ label }: { label: string }) {
  // توليد معرف فريد ومستقر خاص بهذا المكون
  const inputId = useId();

  return (
    <div className="space-y-1 mb-3">
      {/* ربط الـ label بالـ input عبر المعرف الفريد */}
      <label htmlFor={inputId} className="block text-xs text-slate-300">
        {label} (المعرف: <span className="font-mono text-cyan-400">{inputId}</span>)
      </label>
      <input
        id={inputId}
        type="text"
        placeholder="اكتب هنا..."
        className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white"
      />
    </div>
  );
}`,
      advancedExample: `// استيراد useId و useState من React
import { useId, useState } from 'react';

// مكون نموذج متقدم يوضح كيفية اشتقاق معرّفات متعددة من useId واحد
export function MultiFieldAccessibleCard() {
  // توليد معرف أساسي واحد للمكون ككل
  const baseId = useId();

  // اشتقاق معرفات الحقول المختلفة بإضافة لاحقة بسيطة
  const nameId = \`\${baseId}-name\`;
  const emailId = \`\${baseId}-email\`;
  const hintId = \`\${baseId}-hint\`;
  const errorId = \`\${baseId}-error\`;

  const [email, setEmail] = useState<string>('');
  const hasError = email.length > 0 && !email.includes('@');

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-4">توليد المعرفات الذكية بـ useId</h3>

      {/* حقل الاسم */}
      <div className="space-y-1 mb-4">
        <label htmlFor={nameId} className="block text-xs font-semibold text-slate-300">
          الاسم المستعار:
        </label>
        <input
          id={nameId}
          type="text"
          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:border-cyan-500 focus:outline-none"
          placeholder="مثال: مبرمج الواجهات"
        />
      </div>

      {/* حقل البريد مع تلميح وخطأ مرتبطين عبر aria-describedby */}
      <div className="space-y-1 mb-4">
        <label htmlFor={emailId} className="block text-xs font-semibold text-slate-300">
          البريد الإلكتروني:
        </label>
        <input
          id={emailId}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby={\`\${hintId} \${hasError ? errorId : ''}\`}
          className={\`w-full px-3 py-2 bg-slate-900 border rounded-xl text-xs focus:outline-none transition-colors \${hasError ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'}\`}
          placeholder="name@domain.com"
        />
        {/* تلميح الحقل */}
        <p id={hintId} className="text-[11px] text-slate-500">
          * نستخدم بريدك لإرسال إشعارات التحديث فقط.
        </p>
        {/* رسالة الخطأ المرتبطة برمجياً */}
        {hasError && (
          <p id={errorId} className="text-[11px] text-rose-400 font-medium">
            ⚠️ صيغة البريد الإلكتروني غير صحيحة.
          </p>
        )}
      </div>

      {/* تفاصيل المعرف الأساسي في الكونسول */}
      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 text-[11px] font-mono text-slate-400">
        المعرف الجذري المشتق: <span className="text-emerald-400">{baseId}</span>
      </div>
    </div>
  );
}`,
      outputExplanation: "من خلال استدعاء `useId()` مرة واحدة، نستطيع اشتقاق عدة معرفات تابعة مثل `${baseId}-name` و `${baseId}-email`، مما يوفر معرفات متسقة ومتوافقة تماماً مع قارئات الشاشة والـ SSR دون الحاجة لاستدعاءات متكررة للخطاف.",
      commonMistakes: [
        {
          mistake: "استدعاء `useId()` داخل حلقة تكرارية أو شرط",
          fix: "استدعِ useId دائماً في المستوى الأعلى للمكون وفق قواعد الـ Hooks الصارمة."
        },
        {
          mistake: "توقع أن يكون المعرف المعماري رقماً بسيطاً مثل `1` أو `2`",
          fix: "تنتج React معرفات بنمط مثل `:r1:` مفصولة بنقطتين لحمايتها من التضارب مع أسماء أصناف CSS أو معرفات الـ HTML الأخرى."
        }
      ],
      bestPractices: [
        "استدعِ `useId()` مرة واحدة لكل مكون واشتق معرفات الحقول المختلفة بإضافة لواحق نصية.",
        "استخدم `useId` حصراً لخصائص الـ DOM وسمات إمكانية الوصول وليس لتوليد مفاتيح القوائم."
      ],
      infographic: {
        title: "لماذا useId متفوق على Math.random؟",
        points: [
          "مع Math.random(): السيرفر ينتج `id='abc'` والعميل ينتج `id='xyz'` ➔ خطأ Hydration Mismatch!",
          "مع useId(): السيرفر ينتج `:r0:` والعميل ينتج `:r0:` ➔ تطابق تام بنسبة 100% دون أي تحذيرات.",
          "الأمان: معرفات مبنية على موضع شجرة المكونات وتضمن التفرد حتى مع تكرار نفس المكون 100 مرة."
        ]
      }
    },
    {
      id: "15.3.b",
      title: "ربط Label مع Input",
      englishTerm: {
        term: "Linking Label to Input",
        pronunciation: "لينكينغ ليبل تو إنبوت",
        meaning: "استخدام المعرفات الفريدة لربط عناصر العناوين بحقول الإدخال لتحقيق معايير إمكانية الوصول والتفاعل بالنقر"
      },
      description: "من أهم قواعد إمكانية الوصول (Accessibility - a11y) وتجربة المستخدم هي ربط نص التسمية `<label>` بحقل الإدخال المقابل له باستخدام خاصية `htmlFor` مع `id`. هذا الربط يحقق فائدتين أساسيتين:\n1. عند نقر المستخدم على نص التسمية، يتم توجيه مؤشر الكتابة تلقائياً إلى حقل الإدخال (وهو أمر حيوي جداً في مربعات الاختيار Checkboxes وأزرار الراديو ذات المساحة الصغيرة).\n2. تقوم برامج قراءة الشاشة (Screen Readers) بنطق اسم الحقل للمستخدمين ذوي الإعاقة البصرية بمجرد انتقال المؤشر إليه.",
      analogy: "يشبه الأمر وضع جرس إنتركوم يحمل اسم شقتك ورقمها؛ حين يضغط الزائر على الزر الذي يحمل اسمك (`label`)، يرن الهاتف داخل شقتك أنت حصراً (`input`)، ولا يرن في شقة الجيران بالخطأ!",
      whyItMatters: "المكونات القابلة لإعادة الاستخدام قد تتكرر 5 مرات في نفس الصفحة؛ وبدون `useId`، ستضطر إما لتمرير معرف يدوي لكل نسخة أو كتابة معرف ثابت يتكرر 5 مرات، مما يكسر ربط الـ Label ويجعله يركز دائماً على الحقل الأول فقط في الصفحة.",
      syntax: "const id = useId();\nreturn (\n  <>\n    <label htmlFor={id}>البريد:</label>\n    <input id={id} />\n  </>\n);",
      simpleExample: `// مكون صندوق اختيار مربوط ومعاد استخدامه
import { useId } from 'react';

export function AccessibleCheckbox({ label }: { label: string }) {
  // معرف فريد لكل نسخة من الصندوق
  const checkboxId = useId();

  return (
    <div className="flex items-center gap-2 mb-2">
      {/* حقل الاختيار */}
      <input
        type="checkbox"
        id={checkboxId}
        className="w-4 h-4 rounded text-cyan-600 bg-slate-900 border-slate-700 cursor-pointer"
      />
      {/* التسمية المربوطة بالـ ID: النقر على النص يفعل الاختيار */}
      <label htmlFor={checkboxId} className="text-xs text-slate-300 cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
}`,
      advancedExample: `// نموذج خيارات متعددة يبرز سهولة التفاعل بالنقر بفضل useId
import { useId, useState } from 'react';

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
}

export function NotificationPreferencesCard() {
  const [selected, setSelected] = useState<string[]>(['email']);

  const options: NotificationSetting[] = [
    { id: 'email', title: 'إشعارات البريد', description: 'ملخص يومي بأحدث النشاطات على حسابك' },
    { id: 'sms', title: 'رسائل SMS العاجلة', description: 'تنبيهات أمنية فورية عند تسجيل الدخول من جهاز جديد' },
    { id: 'push', title: 'إشعارات المتصفح الفورية', description: 'تنبيهات حية بالرسائل والمكالمات الواردة' }
  ];

  const toggleOption = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-emerald-400 mb-1">تفضيلات الإشعارات (Accessible Form)</h3>
      <p className="text-xs text-slate-400 mb-4">انقر على أي بطاقة لتفعيل الخيار بفضل الربط الدقيق لـ htmlFor.</p>

      <div className="space-y-3">
        {options.map((opt) => (
          // استخدام مكون فرعي يولد useId فريد لكل صف
          <NotificationRow
            key={opt.id}
            setting={opt}
            isChecked={selected.includes(opt.id)}
            onChange={() => toggleOption(opt.id)}
          />
        ))}
      </div>
    </div>
  );
}

// مكون الصف الفرعي مع useId الخاص به
function NotificationRow({
  setting,
  isChecked,
  onChange
}: {
  setting: NotificationSetting;
  isChecked: boolean;
  onChange: () => void;
}) {
  const inputId = useId();
  const descId = \`\${inputId}-desc\`;

  return (
    <div className={\`p-3.5 border rounded-xl transition-all \${isChecked ? 'bg-slate-900 border-emerald-500/50 ring-1 ring-emerald-500/20' : 'bg-slate-900/40 border-slate-800'}\`}>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id={inputId}
          checked={isChecked}
          onChange={onChange}
          aria-describedby={descId}
          className="mt-0.5 w-4 h-4 rounded text-emerald-500 bg-slate-950 border-slate-700 cursor-pointer"
        />
        <div className="flex-1">
          {/* نص التسمية المربوط بالحقل */}
          <label htmlFor={inputId} className="block text-xs font-bold text-slate-200 cursor-pointer">
            {setting.title}
          </label>
          {/* وصف الحقل التوضيحي المربوط بـ aria-describedby */}
          <p id={descId} className="text-[11px] text-slate-400 mt-0.5">
            {setting.description}
          </p>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "من خلال ربط كل حقل بـ `useId` الخاص به، يصبح النقر على نصوص العناوين أو الأوصاف كافياً تماماً لتبديل حالة مربع الاختيار، بالإضافة لتوفير دعم كامل لقارئات الشاشة بالتعرف على العنوان والوصف معاً.",
      commonMistakes: [
        {
          mistake: "استخدام معرف نصي ثابت مثل `id='my-checkbox'` داخل مكون يعاد استخدامه عدة مرات",
          fix: "تجنب المعرفات الثابتة في المكونات المتكررة واستبدلها بـ `useId()` لمنع وجود عناصر مكررة الـ ID في صفحة واحدة."
        },
        {
          mistake: "كتابة `for` بدلاً من `htmlFor` في خصائص JSX",
          fix: "في React نستخدم `htmlFor` دائماً لأن `for` كلمة محجوزة في لغة JavaScript."
        }
      ],
      bestPractices: [
        "اربط كل `<input>` بـ `<label>` عبر `htmlFor` دائماً لرفع سهولة النقر على شاشات الهواتف.",
        "استخدم `aria-describedby` مع معرف مشتق لتزويد الحقل بتفاصيل أو أخطاء توضيحية إضافية."
      ],
      infographic: {
        title: "تشريح الربط الثنائي بين Label و Input",
        points: [
          "خاصية `htmlFor={id}` في التسمية ➔ تشير بالضبط إلى `id={id}` في حقل الإدخال.",
          "سمة `aria-describedby={descId}` ➔ تربط حقل الإدخال بنص الوصف الإضافي.",
          "الفائدة المباشرة: توسيع مساحة النقر للمستخدم ودعم فوري لقارئات الشاشة."
        ]
      }
    },
    {
      id: "15.3.c",
      title: "حدود استخدام useId",
      englishTerm: {
        term: "Limitations & Anti-patterns of useId",
        pronunciation: "ليميتيشنز آند آنتي باتيرنز أوف يوز آي دي",
        meaning: "الاستخدامات الخاطئة والمحظورة لخطاف useId مثل توليد مفاتيح القوائم key في التكرار"
      },
      description: "رغم فائدة `useId` الكبرى، إلا أن هناك خطأً شائعاً ومحظوراً يقع فيه الكثير من المطورين: وهو استخدام `useId` لتوليد خاصية `key` في القوائم المكررة مثل `items.map(item => <li key={useId()}>)`. هذا الاستخدام خاطئ وفادح ومحرم في React لسببين:\n1. يخالف قاعدة الـ Hooks الأساسية بمنع استدعاء الخطافات داخل الحلقات التكرارية (Loops).\n2. مفاتيح القوائم (Keys) يجب أن تكون مشتقة من بيانات العنصر نفسه (كالمعرف القادم من قاعدة البيانات `item.id`) لكي تتمكن React من تتبع إضافة وحذف وإعادة ترتيب العناصر بنجاح.",
      analogy: "يشبه الأمر استخدام رقم جواز سفرك الخاص كرمز باركود تجاري لعلب العصير في سوبرماركت؛ رقم جواز السفر صمم لتعريف وثيقة رسمية فردية محددة وثابتة، ولا يصح استخدامه لتسعير وتصنيف بضائع المخازن المتحركة!",
      whyItMatters: "استخدام useId كمفاتيح للقوائم يؤدي لتحطيم أداء React، وإعادة بناء شجرة المكونات من الصفر مع كل تصيير، وفقدان حالة الحقول النصية داخل القوائم.",
      syntax: "// ❌ خطأ وممنوع تماماً (Anti-pattern):\nitems.map(item => <div key={useId()} />)\n\n// ✅ الاستخدام الصحيح للمفاتيح:\nitems.map(item => <div key={item.id} />)",
      simpleExample: `// مثال يوضح الاستخدام الخاطئ والصحيح للمفاتيح
interface Todo {
  id: string; // معرف البيانات الفعلي من قاعدة البيانات
  text: string;
}

export function BadVsGoodKeys({ todos }: { todos: Todo[] }) {
  return (
    <ul>
      {/* ✅ الصحيح: استخدام المعرف القادم من كائن البيانات نفسه */}
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}`,
      advancedExample: `// مقارنة توضيحية للحدود المعمارية لـ useId
import { useId, useState } from 'react';

interface Article {
  id: string;
  title: string;
}

export function UseIdBoundariesDemo() {
  const [articles, setArticles] = useState<Article[]>([
    { id: 'art-101', title: 'مقدمة إلى خطافات React الحديثة' },
    { id: 'art-102', title: 'دليل احتراف useId في النماذج' }
  ]);

  // ✅ استخدام صحيح لـ useId: توليد معرف لعنوان القسم الخارجي
  const sectionTitleId = useId();

  const addArticle = () => {
    const newArt: Article = {
      id: \`art-\${Date.now()}\`, // توليد معرف من البيانات
      title: \`مقال جديد \${articles.length + 1}\`
    };
    setArticles((prev) => [newArt, ...prev]);
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 id={sectionTitleId} className="text-xl font-bold text-amber-400 mb-2">
        حدود استخدام useId ومحاذيره
      </h3>
      <p className="text-xs text-slate-400 mb-4">
        useId مخصص لسمات الـ DOM فقط، وليس لمفاتيح الـ key في المصفوفات!
      </p>

      <button
        onClick={addArticle}
        className="w-full mb-4 py-2 bg-blue-600 hover:bg-blue-500 font-bold rounded-xl text-xs transition-colors"
      >
        + إضافة مقال جديد في البداية
      </button>

      {/* قائمة المقالات المعتمدة على item.id الصحيح */}
      <ul className="space-y-2">
        {articles.map((art) => (
          <li
            key={art.id} // ✅ استخدام مفتاح مستقر من البيانات
            className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs flex justify-between items-center"
          >
            <span>{art.title}</span>
            <span className="font-mono text-[10px] text-slate-500">{art.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      outputExplanation: "يوضح الكود أن `useId` استُخدم بشكل قانوني لتعريف عنوان القسم `sectionTitleId`، بينما اعتمدت عناصر القائمة في الـ `key` على `art.id` المستمد من كائن البيانات الفعلي، مما يحافظ على استقرار الترتيب وأداء شجرة الـ DOM.",
      commonMistakes: [
        {
          mistake: "محاولة استدعاء useId داخل دالة map لتوليد مفتاح key لكل عنصر",
          fix: "استخدم المعرف القادم من البيانات `item.id`، أو رقم الفهرس `index` كحل أخير للقوائم الثابتة غير القابلة للترتيب."
        },
        {
          mistake: "استخدام معرف useId في محددات CSS مثل `#my-id { color: red }`",
          fix: "تحتوي معرفات useId على رموز مثل النقطتين `:r1:` مما يتطلب معالجة خاصة في CSS؛ استخدم أصناف Classes للتنسيق واقصر useId على الخصائص البرمجية."
        }
      ],
      bestPractices: [
        "استخدم useId حصراً للـ accessibility (htmlFor, aria-labelledby, aria-describedby).",
        "تذكر دائماً: 'useId is for DOM attributes, data IDs are for list keys'."
      ],
      infographic: {
        title: "الاستخدام الصحيح مقابل الاستخدام المحظور لـ useId",
        points: [
          "مسموح وموصى به ✅: سمات عناصر HTML مثل `id`, `htmlFor`, `aria-describedby`.",
          "محظور وفادح ❌: استدعاؤه داخل `map` لتوليد خاصية `key` في القوائم المكررة.",
          "القاعدة: مفاتيح القوائم تحتاج لمعرف مستقر مرتبط بالبيانات نفسها وليس بموضع الخطاف."
        ]
      }
    },
    {
      id: "15.3.d",
      title: "مفهوم External Stores",
      englishTerm: {
        term: "External Stores Concept",
        pronunciation: "إكستيرنال ستورز كونسيبت",
        meaning: "مخازن البيانات التي تعيش خارج شجرة مكونات React مثل مكتبات إدارة الحالة وواجهات برمجة المتصفح"
      },
      description: "المخزن الخارجي (External Store) هو أي مصدر بيانات يحتفظ بالحالة خارج دورة حياة مكونات React وشجرتها المعتادة. يشمل ذلك: مكتبات إدارة الحالة العامة (مثل Redux و Zustand و MobX)، واجهات المتصفح (مثل `navigator.onLine` لمعرفة الاتصال بالإنترنت، و `window.matchMedia` لمعرفة الوضع الليلي)، بالإضافة إلى اشتراكات WebSockets أو التخزين المحلي `localStorage`. لا تخضع هذه المصادر لقواعد React الداخلية، وتحتاج إلى قناة اتصال مخصصة لإشعار React عند حدوث أي تعديل.",
      analogy: "يشبه الأمر محطة الأرصاد الجوية المركزية في مدينتك؛ المحطة وأجهزتها الاستشعارية تقع فوق قمة جبل بعيد عن منزلك (خارج شجرة React). ولكي تعرف درجة الحرارة في صالة بيتك، تحتاج إلى جهاز راديو صغير في غرفتك يستقبل التردد من المحطة فور تغير الطقس ويعرضه على شاشتك الصغيرة!",
      whyItMatters: "تعتمد التطبيقات الحقيقية بكثافة على بيانات خارج شجرة React؛ وفهم طبيعة المخازن الخارجية هو الأساس الضروري لاستخدام خطاف `useSyncExternalStore` بشكل صحيح وتفادي مشاكل عدم التزامن.",
      syntax: "// نموذج مبسط لمخزن خارجي (External Store) بأسلوب النشر والاشتراك:\nconst store = {\n  state: initialData,\n  listeners: new Set(),\n  subscribe(cb) { this.listeners.add(cb); return () => this.listeners.delete(cb); },\n  getSnapshot() { return this.state; }\n};",
      simpleExample: `// مثال لمخزن خارجي بسيط جداً بأسلوب جافاسكربت النقي
function createCounterStore() {
  let count = 0;
  // مجموعة لحفظ دوال المشتركين
  const listeners = new Set<() => void>();

  return {
    // قراءة القيمة الحالية
    getSnapshot: () => count,
    // دالة التعديل وإشعار كافة المشتركين
    increment: () => {
      count++;
      listeners.forEach((listener) => listener());
    },
    // دالة الاشتراك
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      // إرجاع دالة إلغاء الاشتراك
      return () => listeners.delete(listener);
    }
  };
}

// إنشاء المخزن المستقل تماماً عن React
export const globalCounterStore = createCounterStore();`,
      advancedExample: `// بناء مخزن خارجي متكامل لمراقبة حالة الاتصال بالإنترنت
class NetworkStatusStore {
  private isOnline: boolean;
  private listeners: Set<() => void> = new Set();

  constructor() {
    // القراءة المبدئية من المتصفح
    this.isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;

    // الاستماع لأحداث المتصفح الخارجية
    if (typeof window !== 'undefined') {
      window.addEventListener('online', this.handleNetworkChange);
      window.addEventListener('offline', this.handleNetworkChange);
    }
  }

  // معالج حدث تغير الشبكة
  private handleNetworkChange = () => {
    this.isOnline = navigator.onLine;
    // إشعار كافة المكونات المشتركة فوراً
    this.listeners.forEach((listener) => listener());
  };

  // دالة قراءة لقطة البيانات (Snapshot)
  public getSnapshot = (): boolean => {
    return this.isOnline;
  };

  // دالة الاشتراك للمكونات
  public subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };
}

// إنشاء النسخة المشتركة من المخزن الخارجي
export const networkStore = new NetworkStatusStore();`,
      outputExplanation: "يوضح الكود كيف يعيش `networkStore` كمصدر بيانات نقي ومستقل في بيئة جافاسكربت، حيث يراقب أحداث `online` و `offline` بنفسه، ويوفر دالتي `subscribe` و `getSnapshot` لتمكين React من قراءته والتزامن معه بدقة.",
      commonMistakes: [
        {
          mistake: "محاولة ربط المخزن الخارجي بـ useState و useEffect تقليديين في React 18+",
          fix: "استخدم خطاف `useSyncExternalStore` المخصص رسمياً لهذه الغاية لمنع أخطاء Tearing في المعالجة المتزامنة."
        },
        {
          mistake: "إرجاع كائن جديد في كل مرة تستدعى فيها دالة getSnapshot()",
          fix: "يجب أن تُرجع `getSnapshot` نفس المرجع الصارم طالما لم تتغير البيانات، لمنع الدخول في حلقات تصيير لانهائية."
        }
      ],
      bestPractices: [
        "صمم المخازن الخارجية دائماً بدالتي `subscribe` و `getSnapshot` متوافقتين مع معايير React.",
        "احرص على أن تكون دالة إلغاء الاشتراك (Cleanup) تزيل المستمع بدقة لمنع تسريبات الذاكرة."
      ],
      infographic: {
        title: "هندسة المخازن الخارجية (External Stores)",
        points: [
          "خارج شجرة React: يعيش المخزن في ملف مستقل (JavaScript Class أو Object).",
          "قناة الاشتراك: دالة `subscribe(callback)` تتيح للمكونات تسجيل دوال استجابة.",
          "لقطة البيانات: دالة `getSnapshot()` تقدم أحدث قيمة ثابتة ومستقرة للبيانات.",
          "تحديث فوري: عند حدوث أي تعديل خارجي، يتم إطلاق المشتركين لتحديث الواجهة."
        ]
      }
    },
    {
      id: "15.3.e",
      title: "استخدام useSyncExternalStore",
      englishTerm: {
        term: "Using useSyncExternalStore Hook",
        pronunciation: "يوزينغ يوز سينك إكستيرنال ستور",
        meaning: "الخطاف الرسمي المعتمد في React 18+ للاشتراك في المخازن الخارجية وحل مشكلة تمزق الواجهة Tearing"
      },
      description: "مع إطلاق React 18 وميزة العرض المتزامن (Concurrent Rendering)، أصبحت React قادرة على إيقاف واستئناف تصيير المكونات في الخلفية. هذا أدى إلى ظهور معضلة خطيرة تُعرف بـ التمزق (Tearing): فلو تغير المخزن الخارجي في منتصف عملية التصيير، قد يقرأ المكون الأول القيمة القديمة بينما يقرأ المكون الثاني القيمة الجديدة في نفس الشاشة، مما يسبب تناقضاً بصرياً فادحاً! جاء خطاف `useSyncExternalStore` ليحل هذه المشكلة جذرياً عبر فرض قراءة متزامنة وموحدة تضمن حصول كافة المكونات على نفس اللقطة من البيانات بدون أي تمزق.",
      analogy: "يشبه الأمر التقطيع البصري (Screen Tearing) في ألعاب الفيديو السريعة عندما لا يتطابق معدل إطارات كارت الشاشة مع تردد الشاشة فتظهر الصورة كأنها مشطورة نصفين! تقنية `useSyncExternalStore` تعمل تماماً مثل تقنية G-Sync أو V-Sync؛ تضمن تزامن الإطار بالكامل قبل عرضه للمستخدم!",
      whyItMatters: "هذا الخطاف هو الأساس الذي بنيت عليه أحدث إصدارات مكتبات إدارة الحالة العالمية مثل Redux Toolkit v8+ و Zustand v4+؛ واستخدامه المباشر يتيح لك بناء خطافات مخصصة فائقة الدقة والسرعة.",
      syntax: "const snapshot = useSyncExternalStore(\n  subscribe,\n  getSnapshot,\n  getServerSnapshot // اختياري لـ SSR\n);",
      simpleExample: `// استيراد useSyncExternalStore وربطه بمخزن الاتصال السابق
import { useSyncExternalStore } from 'react';
import { networkStore } from './networkStore'; // المخزن الخارجي

// خطاف مخصص فائق البساطة والأمان لقراءة حالة الشبكة
export function useIsOnline() {
  return useSyncExternalStore(
    networkStore.subscribe,
    networkStore.getSnapshot
  );
}

// مكون يستهلك الخطاف
export function OnlineBadge() {
  const isOnline = useIsOnline();

  return (
    <span className={\`px-2.5 py-1 rounded-full text-xs font-bold \${isOnline ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}\`}>
      {isOnline ? 'متصل بالإنترنت 🟢' : 'غير متصل 🔴'}
    </span>
  );
}`,
      advancedExample: `// تطبيق شامل لمخزن تفاعلي متقدم مع useSyncExternalStore
import { useSyncExternalStore, useState } from 'react';

// 1. بناء مخزن إعدادات التطبيق الخارجي
interface AppThemeStore {
  accentColor: string;
  fontSize: number;
}

let currentTheme: AppThemeStore = {
  accentColor: '#06b6d4', // cyan
  fontSize: 14
};

const themeListeners = new Set<() => void>();

export const themeExternalStore = {
  getSnapshot: (): AppThemeStore => currentTheme,
  subscribe: (listener: () => void) => {
    themeListeners.add(listener);
    return () => themeListeners.delete(listener);
  },
  setAccentColor: (color: string) => {
    currentTheme = { ...currentTheme, accentColor: color };
    themeListeners.forEach((l) => l());
  },
  setFontSize: (size: number) => {
    currentTheme = { ...currentTheme, fontSize: size };
    themeListeners.forEach((l) => l());
  }
};

// 2. خطاف مخصص موثوق لاستهلاك مخزن السمة
export function useAppTheme() {
  return useSyncExternalStore(
    themeExternalStore.subscribe,
    themeExternalStore.getSnapshot
  );
}

// 3. مكون واجهة المستخدم الذي يعكس التزامن اللحظي
export function ThemeSyncDashboard() {
  // قراءة الحالة المتزامنة من المخزن الخارجي
  const theme = useAppTheme();

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-2" style={{ color: theme.accentColor }}>
        لوحة التحكم المتزامنة بـ useSyncExternalStore
      </h3>
      <p className="text-xs text-slate-400 mb-4">
        تحديث المخزن الخارجي يضمن التزامن الفوري دون أي Tearing في React 18+.
      </p>

      {/* معاينة التنسيقات الحية */}
      <div
        className="p-4 bg-slate-900 border border-slate-800 rounded-xl mb-4 transition-all"
        style={{ fontSize: \`\${theme.fontSize}px\` }}
      >
        <p style={{ color: theme.accentColor }} className="font-semibold">
          نص المعاينة الحي بحجم {theme.fontSize}px ولون مخصص!
        </p>
      </div>

      {/* أزرار تغيير اللون في المخزن الخارجي */}
      <div className="space-y-3">
        <div>
          <span className="text-xs text-slate-400 block mb-1.5">اختر لون التمييز:</span>
          <div className="flex gap-2">
            {[
              { label: 'سماوي', color: '#06b6d4' },
              { label: 'زمردي', color: '#10b981' },
              { label: 'كهرماني', color: '#f59e0b' },
              { label: 'وردي', color: '#ec4899' }
            ].map((c) => (
              <button
                key={c.color}
                onClick={() => themeExternalStore.setAccentColor(c.color)}
                style={{ backgroundColor: c.color }}
                className="px-3 py-1 rounded-lg text-xs font-bold text-slate-950 shadow-md"
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* أزرار تغيير الحجم */}
        <div>
          <span className="text-xs text-slate-400 block mb-1.5">حجم الخط:</span>
          <div className="flex gap-2">
            {[12, 14, 16, 18].map((size) => (
              <button
                key={size}
                onClick={() => themeExternalStore.setFontSize(size)}
                className={\`px-3 py-1 rounded-lg text-xs font-bold border \${theme.fontSize === size ? 'bg-slate-800 border-cyan-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'}\`}
              >
                {size}px
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "من خلال `useSyncExternalStore`، يرتبط المكون بمخزن `themeExternalStore` بقوة؛ حيث تضمن React ألا يرى أي مكون في الشجرة ألواناً أو أحجاماً متناقضة مهما كانت سرعة التحديثات، مع الحفاظ على الأداء فائق السلاسة.",
      commonMistakes: [
        {
          mistake: "إنشاء دالة `getSnapshot` جديدة داخل دالة المكون وتمريرها في كل تصيير",
          fix: "عرّف دالة `getSnapshot` خارج المكون أو ثبّتها بـ `useCallback`؛ فتغيير مرجع getSnapshot يسبب إعادة تصيير لا متناهية."
        },
        {
          mistake: "إرجاع قيمة مختلفة في `getSnapshot` عند عدم وجود أي تغيير فعلي في البيانات",
          fix: "استخدم المساواة الصارمة وأرجع نفس المرجع المخزن طالما لم يحدث تحديث."
        }
      ],
      bestPractices: [
        "استخدم `useSyncExternalStore` دائماً عند بناء خطافات تتفاعل مع أحداث وواجهات المتصفح العامة.",
        "اجعل المخزن يعيد قيماً بدائية أو مراجع كائنات مسبقة الإنشاء لضمان الاستقرار المرجعي."
      ],
      infographic: {
        title: "حل مشكلة التمزق (Tearing) في React 18",
        points: [
          "مشكلة التمزق: مقاطعة التصيير المتزامن ➔ مكون يقرأ النسخة القديمة ومكون يقرأ النسخة الجديدة في نفس اللحظة!",
          "حل useSyncExternalStore: توحيد قراءة لقطة البيانات لجميع المكونات بشكل متزامن قبل اكتمال الإطار.",
          "النتيجة: تناغم بصري مطلق واستقرار تام مع كافة مكتبات إدارة الحالة."
        ]
      }
    },
    {
      id: "15.3.f",
      title: "الاشتراك في بيانات خارجية",
      englishTerm: {
        term: "Subscribing to Browser & External APIs",
        pronunciation: "سبسكرايبينغ تو براوزر آند إكستيرنال إيه بي آيز",
        meaning: "تحويل أحداث المتصفح وواجهات Web APIs إلى مصادر بيانات تفاعلية ومتزامنة مع React"
      },
      description: "يوفر المتصفح عشرات الواجهات الغنية بالبيانات الحية، مثل مراقبة استعلامات الوسائط (`window.matchMedia`) لمعرفة ما إذا كان المستخدم يفضل الوضع الداكن أو حجم شاشة معين، أو أحداث التمرير والتخزين. باستخدام `useSyncExternalStore`، نستطيع تحويل هذه الواجهات الخارجية إلى خطافات React مخصصة نظيفة وموثقة بالأنواع، تتفاعل فوراً مع أي تغيير في نظام التشغيل أو نافذة المتصفح دون الحاجة لكتابة كود `useEffect` مكرر في كل صفحة.",
      analogy: "يشبه الأمر توصيل هاتفك الذكي بحساسات منزلك الذكي؛ بمجرد أن تغرب الشمس في الخارج (حدث المتصفح)، يستقبل الحساس التغير ويضيء مصابيح غرفتك فوراً دون أن تضطر للنهوض وتفقد النافذة كل خمس دقائق!",
      whyItMatters: "يقلل هذا النمط من احتمالية حدوث تسريبات الذاكرة (Memory Leaks) الناتجة عن نسيان إلغاء مستمعي الأحداث (`removeEventListener`)، ويمنحك كوداً احترافياً قابلاً لإعادة الاستخدام في عشرات المشاريع.",
      syntax: "function useMediaQuery(query: string) {\n  const subscribe = (cb) => { ... };\n  const getSnapshot = () => window.matchMedia(query).matches;\n  return useSyncExternalStore(subscribe, getSnapshot);\n}",
      simpleExample: `// خطاف مخصص لمراقبة تفضيل الوضع الداكن في نظام التشغيل
import { useSyncExternalStore } from 'react';

export function usePrefersDarkMode(): boolean {
  return useSyncExternalStore(
    // دالة الاشتراك في حدث matchMedia
    (callback) => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', callback);
      return () => mediaQuery.removeEventListener('change', callback);
    },
    // دالة قراءة الحالة اللحظية
    () => window.matchMedia('(prefers-color-scheme: dark)').matches,
    // قيمة افتراضية للـ SSR
    () => true
  );
}`,
      advancedExample: `// خطاف مخصص احترافي لمراقبة أبعاد النافذة واستعلامات الشاشات
import { useSyncExternalStore } from 'react';

// خطاف عام يقبل أي استعلام وسائط CSS مثل '(min-width: 768px)'
export function useMediaQuery(queryString: string): boolean {
  return useSyncExternalStore(
    (notify) => {
      // التحقق من بيئة المتصفح
      if (typeof window === 'undefined') return () => {};

      const mediaQueryList = window.matchMedia(queryString);
      // الاستماع لتغيرات الحجم
      mediaQueryList.addEventListener('change', notify);

      // دالة التنظيف المعتمدة
      return () => {
        mediaQueryList.removeEventListener('change', notify);
      };
    },
    () => {
      if (typeof window === 'undefined') return false;
      return window.matchMedia(queryString).matches;
    },
    // القيمة الافتراضية أثناء الرندرة في الخادم
    () => false
  );
}

// مكون تجريبي يعرض استجابة حية لتغير أبعاد المتصفح
export function ResponsiveDetector() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isMobile = useMediaQuery('(max-width: 767px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">كاشف بيئة المتصفح الخارجي</h3>
      <p className="text-xs text-slate-400 mb-4">
        استهلاك مباشر لأحداث matchMedia بـ useSyncExternalStore فائق السلاسة.
      </p>

      {/* بطاقات المؤشرات */}
      <div className="space-y-2">
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center text-xs">
          <span className="text-slate-300">عرض الحاسوب المكتبي (&gt; 1024px):</span>
          <span className={\`font-bold \${isDesktop ? 'text-emerald-400' : 'text-slate-500'}\`}>
            {isDesktop ? 'نعم 🖥️' : 'لا'}
          </span>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center text-xs">
          <span className="text-slate-300">عرض الجهاز اللوحي (768px - 1023px):</span>
          <span className={\`font-bold \${isTablet ? 'text-amber-400' : 'text-slate-500'}\`}>
            {isTablet ? 'نعم 💻' : 'لا'}
          </span>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center text-xs">
          <span className="text-slate-300">عرض الهاتف الجوال (&lt; 768px):</span>
          <span className={\`font-bold \${isMobile ? 'text-cyan-400' : 'text-slate-500'}\`}>
            {isMobile ? 'نعم 📱' : 'لا'}
          </span>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center text-xs">
          <span className="text-slate-300">تفضيل تقليل الحركات:</span>
          <span className={\`font-bold \${prefersReducedMotion ? 'text-purple-400' : 'text-slate-500'}\`}>
            {prefersReducedMotion ? 'مفعل 🛑' : 'غير مفعل'}
          </span>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "من خلال كتابة خطاف `useMediaQuery`، نقوم بربط واجهة `window.matchMedia` مع React في أسطر معدودة، وتضمن React تحديث المكونات فوراً وبدون أي ارتعاش بمجرد أن يقوم المستخدم بتغيير حجم نافذة المتصفح.",
      commonMistakes: [
        {
          mistake: "نسيان استخدام `removeEventListener` في الدالة المعادة من الاشتراك",
          fix: "احرص على تنظيف المستمع دائماً لتفادي تسريب الذاكرة عند إزالة المكون."
        },
        {
          mistake: "إهمال التحقق من وجود `window` مما يؤدي لانهيار الخادم في بيئات SSR",
          fix: "ضع فحص `typeof window !== 'undefined'` ووفر المعامل الثالث `getServerSnapshot` دائماً."
        }
      ],
      bestPractices: [
        "حول واجهات المتصفح الشائعة (Online, MatchMedia, Geolocation) إلى خطافات قابلة لإعادة الاستخدام عبر useSyncExternalStore.",
        "وفّر قيماً افتراضية منطقية للمعامل الثالث لضمان عمل المكون على الخادم."
      ],
      infographic: {
        title: "تحويل واجهات المتصفح إلى React Hooks",
        points: [
          "المدخل: واجهة ويب أصلية مثل `window.matchMedia` أو `navigator.onLine`.",
          "المحول: `useSyncExternalStore` يتولى تسجيل المستمعين وقراءة اللقطات.",
          "المخرج: خطاف React نظيف مثل `useMediaQuery` يُرجع قيمة منطقية محدثة لحظياً!"
        ]
      }
    },
    {
      id: "15.3.g",
      title: "التعامل مع External Store أثناء SSR",
      englishTerm: {
        term: "External Stores in Server-Side Rendering (SSR)",
        pronunciation: "إكستيرنال ستورز إن سيرفر سايد ريندرينغ",
        meaning: "استخدام المعامل الثالث getServerSnapshot لتوفير قيم أولية آمنة على الخادم وتفادي انهيار الـ Hydration"
      },
      description: "عند استخدام العرض على الخادم (SSR) مع تقنيات مثل Next.js، لا توجد كائنات المتصفح مثل `window` أو `document` أو `localStorage` على خادم Node.js. إذا حاولت استدعاء `getSnapshot` يقرأ من `window` على الخادم، فسينهار الخادم فوراً بخطأ `window is not defined`. يحل المعامل الثالث الاختياري في `useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)` هذه المشكلة؛ حيث يستدعي React دالة `getServerSnapshot` على الخادم وأثناء عملية الـ Hydration الأولى على العميل، لضمان تطابق HTML الأولي بنسبة 100%.",
      analogy: "يشبه الأمر إعداد وجبة في المطبخ الخارجي قبل السفر؛ إذا كنت في المطبخ المنزلي تستخدم الخلاط الكهربائي (`getSnapshot`)، ولكن إذا كنت في رحلة تخييم برية بدون كهرباء (على الخادم)، تستخدم الخفاقة اليدوية البديلة (`getServerSnapshot`) حتى تحصل على نفس العجينة بنجاح دون توقف العمل!",
      whyItMatters: "يمنع هذا المعامل خطأ Hydration Mismatch الشهير، ويسمح لك بكتابة مكونات وخطافات تعمل بكفاءة مطلقة في كلا العالمين: خوادم SSR ومتصفحات العميل.",
      syntax: "const state = useSyncExternalStore(\n  subscribe,\n  getClientSnapshot, // يعمل في المتصفح فقط\n  getServerSnapshot  // يعمل على الخادم وأثناء أول hydration\n);",
      simpleExample: `// خطاف قراءة قيمة من LocalStorage متوافق مع SSR
import { useSyncExternalStore } from 'react';

export function useSafeLocalStorage(key: string, initialValue: string): string {
  return useSyncExternalStore(
    // دالة الاشتراك في حدث التخزين
    (callback) => {
      window.addEventListener('storage', callback);
      return () => window.removeEventListener('storage', callback);
    },
    // دالة قراءة المتصفح
    () => {
      return localStorage.getItem(key) ?? initialValue;
    },
    // دالة قراءة الخادم الآمنة (getServerSnapshot)
    () => {
      // إرجاع القيمة الأولية بأمان تام على الخادم
      return initialValue;
    }
  );
}`,
      advancedExample: `// خطاف شامل لمعرفة حجم الشاشة متوافق مع SSR و Next.js بالكامل
import { useSyncExternalStore } from 'react';

// واجهة أبعاد الشاشة
interface WindowSize {
  width: number;
  height: number;
}

// قيمة افتراضية ثابتة وآمنة للخادم
const SERVER_DEFAULT_SIZE: WindowSize = {
  width: 1280,
  height: 800
};

// خطاف قراءة أبعاد النافذة المتوافق مع SSR
export function useWindowSizeSSR(): WindowSize {
  return useSyncExternalStore(
    // دالة الاشتراك
    (onStoreChange) => {
      if (typeof window === 'undefined') return () => {};
      window.addEventListener('resize', onStoreChange);
      return () => window.removeEventListener('resize', onStoreChange);
    },
    // دالة المتصفح (Client Snapshot)
    (): WindowSize => {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    // دالة الخادم (Server Snapshot) - تمنع Hydration Mismatch!
    (): WindowSize => {
      return SERVER_DEFAULT_SIZE;
    }
  );
}

// مكون العرض المتوافق مع SSR
export function SsrSafeWindowViewer() {
  const { width, height } = useWindowSizeSSR();

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-emerald-400 mb-2">أبعاد النافذة الآمنة مع SSR</h3>
      <p className="text-xs text-slate-400 mb-4">
        يعمل بسلاسة في Next.js وخوادم Node.js بفضل getServerSnapshot.
      </p>

      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs font-mono">
        <div className="flex justify-between">
          <span className="text-slate-400">العرض (Width):</span>
          <span className="font-bold text-cyan-300">{width} px</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">الارتفاع (Height):</span>
          <span className="font-bold text-cyan-300">{height} px</span>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "من خلال تزويد `getServerSnapshot` بقيمة افتراضية ثابتة `SERVER_DEFAULT_SIZE`، يولد الخادم شفرة HTML أولية متسقة ومطابقة، وعندما يبدأ المتصفح بالعمل، يتكفل `useSyncExternalStore` بتحديث القياسات اللحظية بسلاسة بالغة ودون إطلاق أي خطأ Hydration.",
      commonMistakes: [
        {
          mistake: "نسيان المعامل الثالث `getServerSnapshot` في مشاريع تستخدم Next.js أو Remix",
          fix: "وفر المعامل الثالث دائماً عندما تتفاعل مع واجهات تعتمد على كائن `window` لضمان استقرار الخادم."
        },
        {
          mistake: "إرجاع قيم عشوائية متغيرة في `getServerSnapshot`",
          fix: "احرص على أن تكون القيمة المعادة من getServerSnapshot قيمة حتمية وثابتة في كل استدعاء على الخادم."
        }
      ],
      bestPractices: [
        "اجعل `getServerSnapshot` يرجع قيماً افتراضية منطقية ومحايدة تحافظ على تناسق التصميم الأولي.",
        "تأكد من أن القيمة المعادة من `getServerSnapshot` ثابتة ولا تتغير بين استدعاء وآخر."
      ],
      infographic: {
        title: "بروتوكول useSyncExternalStore مع SSR",
        points: [
          "في بيئة الخادم (Node.js): يتم استدعاء `getServerSnapshot()` ➔ إرجاع قيمة افتراضية آمنة وتوليد HTML سليم.",
          "أثناء الـ Hydration الأولي: يستمر استخدام `getServerSnapshot()` لضمان تطابق شجرة المتصفح مع الخادم 100%.",
          "بعد اكتمال الإقلاع (Interactive): يبدأ استدعاء `getSnapshot()` اللحظي لقراءة قياسات وأحداث المتصفح الحقيقية!"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q15.3.1",
      question: "لماذا يُعتبر استخدام useId لتوليد خاصية key في القوائم المكررة مثل `items.map(item => <li key={useId()}>)` خطأً فادحاً؟",
      options: [
        "لأنه يخالف قاعدة الHooks بمنع استدعائها داخل الحلقات، ولأن مفاتيح القوائم تحتاج لمعرف مستقر مشتق من البيانات نفسها لتتبع الإضافة والحذف",
        "لأن useId يعمل فقط مع الأزرار ولا يدعم عناصر القوائم li",
        "لأن useId يجعل شفرة جافاسكربت أكبر حجماً في حزمة الإنتاج",
        "لأن المتصفح يمنع استخدام المعرفات داخل القوائم"
      ],
      correctAnswer: 0,
      explanation: "استدعاء useId داخل الحلقات يخالف قواعد الـ Hooks الأساسية، كما أن React تحتاج لمعرف مستقر مرتبط بالبيانات نفسها (`item.id`) لتتبع حركة العناصر بدقة بدلاً من إعادة بنائها في كل تصيير."
    },
    {
      id: "q15.3.2",
      question: "ما هي المشكلة المعمارية الخطيرة التي صُمم خطاف useSyncExternalStore لحلها في React 18؟",
      options: [
        "تسريع تحميل خطوط الخط العربي في المتصفح",
        "مشكلة التمزق (Tearing)، حيث تقرأ مكونات مختلفة قيماً متناقضة من المخزن الخارجي في نفس الشاشة بسبب مقاطعة التصيير المتزامن",
        "إيقاف تشغيل أدوات المطورين في وضع الإنتاج",
        "منع إرسال طلبات الشبكة المكررة تلقائياً"
      ],
      correctAnswer: 1,
      explanation: "في المعالجة المتزامنة (Concurrent Mode)، قد يتغير المخزن الخارجي في منتصف عملية التصيير؛ مما يسبب ظاهرة Tearing بقراءة أجزاء متناقضة، ويقوم `useSyncExternalStore` بفرض قراءة متزامنة موحدة لكافة المكونات."
    },
    {
      id: "q15.3.3",
      question: "ما فائدة المعامل الثالث getServerSnapshot في خطاف useSyncExternalStore؟",
      options: [
        "لتشفير كلمات مرور المستخدم على السيرفر",
        "لتوفير قيمة افتراضية آمنة على الخادم وأثناء أول عملية Hydration لتفادي انهيار الخادم وأخطاء Hydration Mismatch في تطبيقات SSR",
        "لحذف ملفات الكوكيز تلقائياً عند إغلاق التبويب",
        "لإعادة توجيه المستخدم لصفحة تسجيل الدخول"
      ],
      correctAnswer: 1,
      explanation: "يعمل `getServerSnapshot` كصمام أمان على خوادم SSR (حيث لا يتوفر كائن window)، مما يوفر قيمة مبدئية متسقة تمنع أخطاء عدم تطابق الـ Hydration."
    }
  ],
  exercise: {
    id: "ex-15.3",
    title: "تمرين عملي: بناء خطاف useOnlineStatus المنيع باستخدام useSyncExternalStore ومكون نموذج مؤمّن بـ useId",
    description: "قم بإنشاء خطاف مخصص `useOnlineStatus` متوافق تماماً مع SSR باستخدام `useSyncExternalStore` لمراقبة أحداث `online` و `offline`. ثم أنشئ مكون نموذج اتصال `ContactFormWithId` يستخدم `useId` لربط حقلين نصيين بعناوينهما ورسائل الخطأ بدقة.",
    hints: [
      "في خطاف `useOnlineStatus` اشترك في حدثي `online` و `offline` على كائن `window`.",
      "وفر `getServerSnapshot` يرجع دائماً `true` كقيمة آمنة للخادم.",
      "في مكون النموذج استدعِ `useId()` مرة واحدة واشتق منه معرفات الحقول والتلميحات.",
      "استخدم `htmlFor` و `id` و `aria-describedby` للربط الكامل."
    ],
    solution: `// استيراد الأدوات المطلوبة من React
import { useSyncExternalStore, useId, useState } from 'react';

// 1. خطاف useOnlineStatus المتكامل والمتوافق مع SSR
export function useOnlineStatus(): boolean {
  return useSyncExternalStore(
    // دالة الاشتراك في أحداث المتصفح
    (callback) => {
      if (typeof window === 'undefined') return () => {};
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
      return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
      };
    },
    // دالة العميل اللحظية
    () => (typeof navigator !== 'undefined' ? navigator.onLine : true),
    // دالة الخادم الآمنة لـ SSR
    () => true
  );
}

// 2. مكون نموذج الاتصال عالي الوصول باستخدام useId
export function ContactFormWithId() {
  const isOnline = useOnlineStatus();
  const formId = useId();

  const nameId = \`\${formId}-name\`;
  const messageId = \`\${formId}-message\`;
  const errorId = \`\${formId}-error\`;

  const [message, setMessage] = useState('');
  const hasError = message.length > 0 && message.length < 10;

  return (
    <form className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto space-y-4">
      {/* شارة حالة الاتصال بالإنترنت */}
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h3 className="font-bold text-cyan-400 text-sm">نموذج الاتصال المؤمّن</h3>
        <span className={\`text-[11px] font-bold px-2.5 py-0.5 rounded-full \${isOnline ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}\`}>
          {isOnline ? 'الشبكة متصلة 🟢' : 'الشبكة منقطعة 🔴'}
        </span>
      </div>

      {/* حقل الاسم المربوط بـ useId */}
      <div>
        <label htmlFor={nameId} className="block text-xs text-slate-300 font-semibold mb-1 cursor-pointer">
          الاسم الكريم:
        </label>
        <input
          id={nameId}
          type="text"
          placeholder="أحمد علي"
          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:outline-none focus:border-cyan-500"
        />
      </div>

      {/* حقل الرسالة المربوط بـ useId و aria-describedby */}
      <div>
        <label htmlFor={messageId} className="block text-xs text-slate-300 font-semibold mb-1 cursor-pointer">
          نص الرسالة:
        </label>
        <textarea
          id={messageId}
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby={hasError ? errorId : undefined}
          placeholder="اكتب رسالتك بالتفصيل..."
          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:outline-none focus:border-cyan-500"
        />
        {hasError && (
          <p id={errorId} className="text-[11px] text-rose-400 mt-1">
            ⚠️ يجب ألا تقل الرسالة عن 10 أحرف.
          </p>
        )}
      </div>

      <button
        type="button"
        disabled={!isOnline}
        className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 font-bold rounded-xl text-xs transition-all"
      >
        {isOnline ? 'إرسال الرسالة' : 'تعذر الإرسال: أنت غير متصل'}
      </button>
    </form>
  );
}`
  },
  infographic: {
    title: "خارطة useId و useSyncExternalStore المتقدمة",
    nodes: [
      { id: "1", title: "useId لـ a11y و SSR", desc: "توليد معرّفات فريدة متطابقة 100% بين الخادم والمتصفح" },
      { id: "2", title: "ربط Label و Input", desc: "توسيع مساحة النقر ودعم قارئات الشاشة تلقائياً عبر htmlFor" },
      { id: "3", title: "محاذير useId", desc: "ممنوع في الـ key للقوائم ومخصص حصراً لسمات الـ DOM" },
      { id: "4", title: "مفهوم External Stores", desc: "مخازن بيانات حرة تعيش خارج شجرة React (Zustand, Browser APIs)" },
      { id: "5", title: "useSyncExternalStore", desc: "حظر ظاهرة Tearing وفرض قراءة متزامنة موحدة" },
      { id: "6", title: "دعم SSR الكامل", desc: "المعامل الثالث getServerSnapshot يوفر قيماً افتراضية تمنع الأخطاء" }
    ]
  }
};
