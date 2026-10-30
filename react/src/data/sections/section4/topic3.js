// src/data/sections/section4/topic3.js
// الموضوع 3: أدوات React (React DevTools & Diagnostic Ecosystem)

export const SECTION_4_TOPIC_3 = {
  id: "4.3",
  title: "أدوات React",
  englishTitle: "React Developer Tools & Ecosystem Diagnostics",
  description: "امتلاك القوة الخارقة للمطور المحترف: إضافة React Developer Tools الرسمية، فحص وتعديل شجرة المكونات و Props و State حياً في المتصفح، مراقبة إعادة التصيير وميضياً، فهم رسائل التحذير، وسر Fast Refresh و Strict Mode.",
  icon: "Wrench",
  subtopics: [
    {
      id: "4.3.a",
      title: "تثبيت React Developer Tools",
      englishTitle: "Installing React Developer Tools: Browser Extension Setup",
      definition: "أدوات مطور رياكت (React Developer Tools) هي الإضافة الرسمية المجانية المفتوحة المصدر التي توفرها شركة Meta لمتصفحات Chrome و Firefox و Edge؛ تضيف تبويبين خارقين إلى شاشة فحص المتصفح (DevTools): تبويب المكونات (Components) لاستكشاف شجرة مكونات التطبيق، وتبويب الأداء (Profiler) لقياس سرعة واستجابة كل مكون.",
      analogy: "تخيل أنك طبيب جراح: المتصفح العادي يعطيك فقط نظرة على جلد المريض الخارجي (شجرة HTML المسطحة). بينما إضافة React DevTools هي مثل 'جهاز الرنين المغناطيسي والأشعة السينية' الخارق؛ يمكنك من رؤية كل عضو داخلي، وعظام شجرة المكونات، وكمية الدم (البيانات والـ State) التي تضخ في كل ثانية داخل شرايين تطبيقك!",
      why: "بدونها، ستكون أعمى أثناء تطوير تطبيقات React؛ فإذا ظهر خطأ في الشاشة ستضطر لتخمين مصدره أو ملء كودك بأسطر `console.log` في كل مكان، بينما تمنحك الأداة القدرة على النقر على أي زر في الشاشة ومعرفة المكون الذي صنعه ومن أين جاءت بياناته في ثانية واحدة.",
      terms: [
        { term: "React Developer Tools", pronunciation: "رياكت ديفلوبر تولز", meaning: "إضافة المتصفح الرسمية لتشريح وفحص تطبيقات React" },
        { term: "Components Tab", pronunciation: "كومبوننتس تاب", meaning: "تبويب استكشاف شجرة المكونات وفحص Props و State" },
        { term: "Profiler Tab", pronunciation: "بروفايلر تاب", meaning: "تبويب قياس سرعة أداء وتكلفة إعادة تصيير المكونات" },
        { term: "Browser Extension", pronunciation: "براوزر إكستنشن", meaning: "إضافة يتم تثبيتها من متجر إضافات المتصفح بنقرة واحدة" }
      ],
      syntax: "// خطوات التثبيت المجاني:\n// 1. افتح متجر Chrome Web Store أو Firefox Add-ons\n// 2. ابحث عن \"React Developer Tools\"\n// 3. انقر على \"Add to Chrome\" / \"تثبيت الإضافة\"\n// 4. افتح أي موقع مبني بـ React واضغط F12 لرؤية تبويبي Components و Profiler",
      codeSimple: `// فحص هل الإضافة مثبتة وتتعرف على صفحتك بنجاح
// بمجرد فتح المتصفح، إذا كانت الصفحة مبنية بـ React:
// تتلون أيقونة الإضافة في شريط المتصفح باللون الأزرق (أثناء التطوير) أو الأسود (في الإنتاج)
console.log('⚛️ أداة React DevTools متصلة بنجاح وتراقب شجرة المكونات الحية!');`,
      codeAdvanced: `// محاكاة لتقرير فحص حالة React في الصفحة الحالية
function inspectReactDevToolsStatus() {
  const isReactPresent = typeof window !== 'undefined' && (
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== undefined
  );

  return {
    isHookDetected: isReactPresent,
    message: isReactPresent 
      ? '✅ خطاف React DevTools نشط بنجاح ومستعد لفحص شجرة المكونات!'
      : '⚠️ تعذر العثور على React DevTools؛ تأكد من تثبيت الإضافة من متجر المتصفح.'
  };
}

console.log(inspectReactDevToolsStatus().message);`,
      output: `⚛️ أداة React DevTools متصلة بنجاح وتراقب شجرة المكونات الحية!\n✅ خطاف React DevTools نشط بنجاح ومستعد لفحص شجرة المكونات!`,
      mistakes: [
        {
          wrong: `// البحث عن مكونات React داخل تبويب Elements العادي في المتصفح والشكوى من عدم العثور عليها!\n// "لا أرى <ProductCard> في تبويب Elements!" // ❌ خطأ شائع؛ تبويب Elements يعرض HTML الخام فقط!`,
          correct: `// افتح تبويب Components المخصص لـ React الجديد المضاف في أقصى اليمين؛ فهو الذي يعرض المكونات بأسمائها الحقيقية ✅`,
          explanation: "تبويب Elements يرى النتيجة النهائية فقط (divs و spans)، بينما تبويب Components الخاص بـ React DevTools يرى الشجرة البرمجية الحقيقية بأسماء مكوناتك."
        }
      ],
      bestPractices: [
        "ثبت إضافة React DevTools فوراً في أول يوم تبدأ فيه تعلم React ولا تؤجل ذلك أبداً.",
        "تأكد من تفعيل صلاحية 'Allow access to file URLs' في إعدادات الإضافة إذا كنت تفتح ملفات HTML مباشرة من قرصك الصلب.",
        "راقب لون أيقونة الإضافة في شريط المتصفح لتعرف هل الموقع الذي تتصفحه في الإنترنت مبني بـ React أم لا."
      ],
      infographic: {
        title: "إنفوجرافيك: رحلة تثبيت واستخدام إضافة React DevTools",
        concept: "React DevTools Setup & Interface",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 إضافة React Developer Tools الرسمية          │
└─────────────────────────────────────────────────────────────┘
  متجر الإضافات (Chrome Web Store) ──> تثبيت بنقرة واحدة
                 │
                 ▼
  فتح شاشة F12 (DevTools) ──> ظهور تبويبين خارقين:
  
  [ ⚛️ Components ]                [ ⏱️ Profiler ]
  • شجرة المكونات الحية           • قياس زمن التصيير بالميلي ثانية
  • فحص وتعديل Props و State       • اكتشاف المكونات البطيئة
  • تتبع الأب والأبناء             • تسجيل وتصوير نبضات الأداء`
      }
    },
    {
      id: "4.3.b",
      title: "استكشاف شجرة المكونات",
      englishTitle: "Inspecting the Component Tree: Navigation & Source Jump",
      definition: "استكشاف شجرة المكونات داخل تبويب Components يتيح لك رؤية الهيكل الشجري الهرمي لكافة مكونات تطبيقك بأسماء دوالها الحقيقية، والبحث عن أي مكون بالاسم، وتحديد المكون بنقرة زر من الصفحة (أداة المؤشر المباشر Inspect Component)، والانتقال فوراً لسطر تعريفه في محرر الكود المصدري.",
      analogy: "تخيل أنك تتجول في مدينة ضخمة ومعك خريطة Google Maps ثلاثية الأبعاد: يمكنك النقر على أي مبنى في الشارع لتعرف فوراً اسمه ومن يسكن فيه وعدد طوابقه والمهندس الذي صممه! استكشاف شجرة المكونات هو خريطة الملاحة الحية لتطبيقك.",
      why: "في المشاريع الكبيرة التي تحتوي على عشرات المجلدات ومئات المكونات، يصبح من الصعب جداً معرفة أي ملف مسؤول عن الزر الذي تراه على الشاشة. تتيح لك أداة التفتيش النقر على الزر لتفتح لك ملف المكون في ثانية واحدة.",
      terms: [
        { term: "Inspect Element / Component", pronunciation: "إنسبكت كومبوننت", meaning: "أداة النقر على الشاشة لتحديد المكون في الشجرة فوراً" },
        { term: "Search Filter", pronunciation: "سيرش فلتر", meaning: "شريط البحث لتصفية المكونات بالاسم داخل الشجرة" },
        { term: "View Source", pronunciation: "فيو سورس", meaning: "أيقونة الانتقال المباشر لسطر الكود في محرر الكود" }
      ],
      syntax: "// داخل تبويب Components:\n// 1. اضغط على أيقونة الفأرة المربعة في أعلى يسار التبويب\n// 2. انقر على أي زر أو بطاقة في شاشة المتصفح\n// 3. سيتم تظليل مكون <Button /> أو <Card /> تلقائياً في الشجرة",
      codeSimple: `// شجرة مكونات متداخلة يسهل فحصها بالأداة
function Price({ val }) {
  return <span>{val} $</span>;
}

function Product({ title, price }) {
  return (
    <div className="prod">
      <h4>{title}</h4>
      <Price val={price} />
    </div>
  );
}

export default function ShopApp() {
  return (
    <main>
      <h2>المتجر</h2>
      <Product title="كاميرا احترافية" price={950} />
    </main>
  );
}`,
      codeAdvanced: `// محاكاة بصرية لما تعرضه شجرة React DevTools في لوحة الفحص
const mockDevToolsTree = {
  name: '<ShopApp>',
  children: [
    {
      name: '<Product title="كاميرا احترافية">',
      renderedBy: 'ShopApp',
      children: [
        {
          name: '<Price val={950}>',
          renderedBy: 'Product'
        }
      ]
    }
  ]
};

console.log('--- محاكاة استعراض شجرة المكونات في DevTools ---');
console.log(mockDevToolsTree.name);
console.log('  └── ' + mockDevToolsTree.children[0].name);
console.log('        └── ' + mockDevToolsTree.children[0].children[0].name);`,
      output: `--- محاكاة استعراض شجرة المكونات في DevTools ---\n<ShopApp>\n  └── <Product title="كاميرا احترافية">\n        └── <Price val={950}>`,
      mistakes: [
        {
          wrong: `// كتابة مكونات مجهولة الاسم مثل الدوال السهمية غير المسماة (Anonymous Functions)\n// export default () => <div>محتوى</div> // ❌ ستظهر في DevTools كـ <_default> أو <Anonymous> مبهمة!`,
          correct: `// تسمية المكونات دائماً بأسماء صريحة وواضحة:\n// export default function UserProfile() { ... } // ✅ تظهر باسم <UserProfile> الجميل في الشجرة`,
          explanation: "تسمية المكونات بأسماء واضحة يسمح لـ React DevTools بعرض اسمها الصريح، مما يجعل استكشاف الأخطاء وتتبع المكونات سهلاً وسريعاً."
        }
      ],
      bestPractices: [
        "استخدم اختصار البحث في شجرة DevTools بكتابة اسم المكون للعثور عليه في أجزاء من الثانية في المشاريع الضخمة.",
        "اضغط على أيقونة العين `< >` في لوحة فحص المكون للانتقال لكود الـ DOM المقابل له فوراً.",
        "استخدم خاصية 'Log this component data to the console' (أيقونة الخنفساء) لتصدير بيانات المكون إلى متغير `$r` في الكونسول لتجربته برمجياً."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح لوحة استكشاف شجرة المكونات في React DevTools",
        concept: "Components Tree Inspection Anatomy",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 لوحة استكشاف المكونات (Components Tab)       │
└─────────────────────────────────────────────────────────────┘
  الجانب الأيسر (الشجرة الهرمية):      الجانب الأيمن (تفاصيل المكون):
  ▼ <App>                              props:
    ▼ <Navbar>                           title: "متجري"
        <Logo />                         theme: "dark"
      ▼ <Feed>                         hooks:
          <Post id={1} /> ◄── (محدد)      1. State: { likes: 5 }
          <Post id={2} />              rendered by:
                                         Feed > App`
      }
    },
    {
      id: "4.3.c",
      title: "فحص Props و State",
      englishTitle: "Inspecting & Live-Editing Props and State in the Browser",
      definition: "لوحة الفحص الجانبية في React DevTools تتيح لك قراءة كافة الخصائص (Props) التي استلمها المكون المحدد، وكافة حالات الـ State والخطافات (Hooks) الخاصة به؛ والأجمل من ذلك أنها تتيح لك 'التعديل الحي الفوري' على قيم الـ State والـ Props مباشرة من المتصفح لرؤية كيف ستتغير الواجهة في التو واللحظة دون تعديل سطر كود واحد في المحرر!",
      analogy: "تخيل أنك تختبر لعبة فيديو: لديك لوحة تحكم سرية للمطورين (Cheat Code Panel)؛ يمكنك النقر على شخصية البطل وتغيير رقم طاقته من 10 إلى 100، أو تفعيل وضع الطيران في ثانية لترى كيف يتصرف البطل في تلك اللحظة بالضبط! لوحة الـ Props والـ State تمنحك هذه القوة الخارقة في موقعك.",
      why: "تسرع عملية تجربة الحالات النادرة؛ فبدلاً من إعادة ملء نموذج طويل 20 مرة لاختبار رسالة خطأ، يمكنك فتح DevTools وتغيير `hasError: false` إلى `true` بضغطة زر لرؤية تصميم رسالة الخطأ فوراً في الشاشة!",
      terms: [
        { term: "Props Inspection", pronunciation: "بروبس إنسبكشن", meaning: "فحص الخصائص الممررة للمكون من الأب" },
        { term: "State Live-Editing", pronunciation: "ستيت لايف إيديتنغ", meaning: "التعديل المباشر على قيم الحالة في الذاكرة الحية للمتصفح" },
        { term: "$r variable", pronunciation: "دولار آر", meaning: "متغير سحري يتيحه DevTools في الكونسول يمثل المكون المحدد حالياً" }
      ],
      syntax: "// داخل لوحة DevTools اليمنى:\n// 1. انقر نقراً مزدوجاً على أي قيمة في قسم props أو hooks (State)\n// 2. اكتب القيمة الجديدة واضغط Enter\n// 3. ستلاحظ تحديث الواجهة فوراً في نفس اللحظة!",
      codeSimple: `// مكون تجريبي يحتوي على Props وحالة State
import React, { useState } from 'react';

function UserStatusWidget({ initialRole = 'عضو' }) {
  // حالة الـ State تظهر في DevTools تحت قسم Hooks
  const [isVip, setIsVip] = useState(false);

  return (
    <div className="status-widget">
      <p>الصفة (Props): <strong>{initialRole}</strong></p>
      <p>حالة التميز (State): <strong>{isVip ? '🌟 عضو ذهبي VIP' : 'عضو عادي'}</strong></p>
      <button onClick={() => setIsVip(!isVip)}>تبديل الحالة</button>
    </div>
  );
}

export default UserStatusWidget;`,
      codeAdvanced: `// الحيلة السحرية المتقدمة: استخدام المتغير $r في وحدة التحكم (Console)
// عندما تحدد أي مكون في React DevTools، يربطه المتصفح بالمتغير $r تلقائياً!
// يمكنك فتح الكونسول وكتابة:
/*
  $r.props          // يعرض لك كافة الخصائص ككائن JS حي
  $r.state          // يعرض الحالة
  console.log($r)   // استكشاف كل أسرار المكون في الكونسول
*/
console.log('💡 نصيحة احترافية: المتغير $r هو بوابتك للتحكم بالمكون المحدد من الكونسول!');`,
      output: `💡 نصيحة احترافية: المتغير $r هو بوابتك للتحكم بالمكون المحدد من الكونسول!`,
      mistakes: [
        {
          wrong: `// تعديل الـ Props في DevTools وتوقع أن تتغير في الكود المصدري على حاسوبك للأبد!\n// "غيرت الاسم في DevTools فلماذا عاد للأصل بعد تحديث الصفحة؟" // ❌ سوء فهم!`,
          correct: `// تعديلات DevTools تجري في الذاكرة اللحظية المؤقتة للمتصفح فقط (In-Memory Testing) للمعاينة السريعة، وتزول بتحديث الصفحة ✅`,
          explanation: "الـ DevTools أداة اختبار مؤقتة وليست محرراً للملفات؛ لتثبيت التعديل يجب أن تكتبه في كود مشروعك الفعلي."
        }
      ],
      bestPractices: [
        "استخدم التعديل الحي للـ State لتجربة حالات الواجهة المختلفة (حالة النجاح، حالة الفشل، حالة القائمة الفارغة) في ثوانٍ.",
        "افحص قيم الـ Props للتأكد من أن الأب يمرر نوع البيانات الصحيح (رقم حقيقي وليس نصاً).",
        "إذا لاحظت أن المكون لا يُحدث الشاشة، فافحص في قسم Hooks هل تغيرت قيمة الـ State فعلياً أم ظلت ثابتة."
      ],
      infographic: {
        title: "إنفوجرافيك: سحر فحص وتعديل الـ State والـ Props حياً",
        concept: "DevTools Props & State Live Editing",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 التعديل الحي للـ Props والـ State            │
└─────────────────────────────────────────────────────────────┘
  في شاشة المتصفح:                       في لوحة React DevTools:
  ┌───────────────────────┐            props:
  │  الرصيد: 0 ر.س       │              currency: "ر.س"
  │  [ سداد الفاتورة ]     │            hooks (State):
  └───────────────────────┘              1. balance: 0  ◄── (انقر وغيره لـ 500)
             ▲                                            │
             │                                            ▼
             └────────── تحديث فوري للشاشة في جزء من الثانية! ⚡`
      }
    },
    {
      id: "4.3.d",
      title: "مراقبة إعادة التصيير",
      englishTitle: "Highlight Updates When Components Render: Visual Profiling",
      definition: "ميزة 'إبراز التحديثات' (Highlight updates when components render) هي ميزة بصرية مذهلة في إعدادات React DevTools تقوم برسم إطار وميضي ملون حول أي مكون على الشاشة في اللحظة التي يُعاد تصييره فيها (Re-rendered). وتكشف لك فوراً أي مكونات يُعاد تصييرها بشكل غير مبرر أو متكرر عند كل نقرة.",
      analogy: "تخيل أن في متجرك جهاز إنذار ضوئي ملون: كلما لمس زبون رفاً من الرفوف، يضيء الرف بنور أخضر فسفوري خفيف. إذا فتح الزبون باب المحل، وفوجئت بأن كل الرفوف في المتجر تومض بالأخضر في نفس الوقت رغم أنه لم يلمسها، ستعرف فوراً أن هناك سلكاً كهربائياً خاطئاً يحتاج للإصلاح! وميض React DevTools يكتشف لك هذه الأسلاك الخاطئة في كودك.",
      why: "هي السلاح الأول لمهندسي الأداء؛ فبدونها قد تظن أن تطبيقك سريع، بينما في الحقيقة كل ضغطة حرف في خانة البحث تعيد تصيير 50 بطاقة منتج في الصفحة دون داعٍ! تفعيل هذا الوميض يكشف لك الخلل البصري في ثانية واحدة.",
      terms: [
        { term: "Highlight Updates", pronunciation: "هايلايت أبديتس", meaning: "إبراز وميضي لعناصر الشاشة التي يعاد تصييرها" },
        { term: "Wasted Renders", pronunciation: "ويستد ريندرز", meaning: "إعادات تصيير مهدرة لا تقدم أي تغيير حقيقي في الواجهة" },
        { term: "Re-render Storm", pronunciation: "ري ريندر ستورم", meaning: "عاصفة إعادات تصيير متتالية تؤدي لثقل المتصفح" }
      ],
      syntax: "// كيفية تفعيل الخاصية في React DevTools:\n// 1. افتح تبويب Components في المتصفح\n// 2. انقر على أيقونة الترس ⚙️ (Settings) في أعلى اليمين\n// 3. ضع علامة صح أمام خيار: \"Highlight updates when components render\"\n// 4. تفاعل مع موقعك وشاهد الأطر الملونة الفسفورية!",
      codeSimple: `// مثال لمكون يعاد تصييره بذكاء فقط عند تغير بياناته
import React, { useState } from 'react';

function ChildComponent({ label }) {
  // سيومض هذا المكون فقط عندما تتغير قيمة label
  return <div className="child-box">{label}</div>;
}

export default function RenderDemo() {
  const [text, setText] = useState('نص أولي');

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ChildComponent label={text} />
    </div>
  );
}`,
      codeAdvanced: `// محاكاة بصرية لتفسير ألوان وميض التحديث في React DevTools
const updateColorsGuide = [
  { color: '🟢 وميض أخضر خفيف', meaning: 'تصيير سريع ونادر (طبيعي وممتاز جداً)' },
  { color: '🟡 وميض أصفر متكرر', meaning: 'تصييرات متتالية متقاربة زمنياً (يحتاج للانتباه)' },
  { color: '🔴 وميض أحمر مكثف', meaning: 'عاصفة إعادات تصيير عنيفة ومكلفة تثقل المعالج (خطر يحتاج لـ React.memo أو useMemo)!' }
];

console.log('--- دليل ألوان وميض فحص الأداء في React DevTools ---');
updateColorsGuide.forEach(g => console.log(\`• \${g.color}: \${g.meaning}\`));`,
      output: `--- دليل ألوان وميض فحص الأداء في React DevTools ---\n• 🟢 وميض أخضر خفيف: تصيير سريع ونادر (طبيعي وممتاز جداً)\n• 🟡 وميض أصفر متكرر: تصييرات متتالية متقاربة زمنياً (يحتاج للانتباه)\n• 🔴 وميض أحمر مكثف: عاصفة إعادات تصيير عنيفة ومكلفة تثقل المعالج (خطر يحتاج لـ React.memo أو useMemo)!`,
      mistakes: [
        {
          wrong: `// الذعر والارتباك من رؤية أي وميض أخضر ومحاولة منعه بأي ثمن!\n// "المكون ومض بالأخضر، يجب أن أضع useMemo و useCallback في كل سطر فوراً!" // ❌ وسوسة أداء غير مبررة (Premature Optimization)!`,
          correct: `// الوميض الأخضر طبيعي جداً وصحي وهو جوهر عمل React في تحديث الواجهة؛ اقلق فقط عندما تجد شاشة كاملة تومض بالأحمر مع كل حركة فأرة تافهة ✅`,
          explanation: "إعادة التصيير ليست شراً؛ بل هي الطريقة التي تعكس بها React التغييرات. التحسين مطلوب فقط للمكونات الثقيلة التي تومض دون تغيير في بياناتها."
        }
      ],
      bestPractices: [
        "فعل خيار 'Highlight updates' أثناء تطوير الميزات الجديدة للتأكد من أن التحديثات تنحصر في الأجزاء المعنية فقط.",
        "عطل الخيار عند الانتهاء من فحص الأداء لكي لا تزعجك الأطر الملونة أثناء العمل التصميمي العادي.",
        "إذا لاحظت أن مكوناً معقداً يعاد تصييره مع كل حرف يُكتب في حقل إدخال، فافصل حقل الإدخال في مكون مستقل يعزل حالته."
      ],
      infographic: {
        title: "إنفوجرافيك: كيف تكشف ميزة Highlight Updates الأخطاء الأدائية؟",
        concept: "Visual Re-render Highlighting",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 ميزة إبراز التحديثات الملونة (Highlight)     │
└─────────────────────────────────────────────────────────────┘
  المستخدم ينقر على زر الإعجاب في المنشور رقم 1:
  
  السلوك السليم والمثالي:
  ┌─────────────────────────┐
  │ [ إطار وميض أخضر 🟢 ]   │  ◄── المنشور 1 فقط يعاد تصييره ✅
  ├─────────────────────────┤
  │ (هادئ دون أي وميض)      │  ◄── المنشور 2 يظل ساكناً
  ├─────────────────────────┤
  │ (هادئ دون أي وميض)      │  ◄── المنشور 3 يظل ساكناً
  └─────────────────────────┘
  
  السلوك المعطوب الذي يفضحه DevTools:
  الصفحة كلها تومض بالأحمر 🔴 دفعة واحدة ──> خلل معماري يحتاج لإصلاح!`
      }
    },
    {
      id: "4.3.e",
      title: "التعامل مع رسائل التحذير",
      englishTitle: "Handling React Warnings & Error Stack Traces",
      definition: "رسائل التحذير (React Warnings) هي إشعارات وتنبيهات ملونة بالأصفر أو الأحمر تظهر في وحدة التحكم (Console) أثناء مرحلة التطوير؛ صممها مهندسو Meta لمساعدتك في اكتشاف الأخطاء المعمارية، مثل نسيان خاصية `key` في القوائم، أو تعديل الحالة داخل جسم المكون مباشرة، أو نسيان وسم الإغلاق.",
      analogy: "تخيل أضواء التنبيه في تابلوه قيادة السيارة (لوحة القيادة): ضوء أصفر ينبهك بأن 'غطاء خزان الوقود غير محكم' أو 'ضغط الإطار منخفض قليلاً'. السيارة لا تزال تسير ولن تنفجر في تلك اللحظة، ولكن تجاهل الضوء وتجاوزه لأسابيع سيؤدي حتماً لعطل كبير يوقفك في منتصف الطريق السريع!",
      why: "رسائل تحذير React هي أفضل معلم ومرشد لك؛ فهي لا تكتفي بإخبارك بوجود خطأ، بل تشرح لك بالضبط: 1) ما هو الخطأ، 2) لماذا حدث، 3) في أي مكون وسط أي سطر كود، 4) رابط رسمي لتوثيق React يشرح كيفية إصلاحه!",
      terms: [
        { term: "Console Warning", pronunciation: "كونسول وورنينغ", meaning: "رسالة تحذيرية صفراء في وحدة تحكم المتصفح" },
        { term: "Missing 'key' Prop", pronunciation: "ميسينغ كي بروب", meaning: "أشهر تحذير في React عند نسيان معرف فريد لعناصر القوائم" },
        { term: "Component Stack Trace", pronunciation: "كومبوننت ستاك تريس", meaning: "مسار شجرة المكونات التي تسببت في صدور الخطأ" }
      ],
      syntax: "// نموذج لأشهر رسالة تحذير في React:\n// Warning: Each child in a list should have a unique \"key\" prop.\n// Check the render method of `ProductList`.",
      codeSimple: `// محاكاة وتصحيح أشهر خطأ تحذيري في تاريخ React
const fruits = ['تفاح', 'موز', 'برتقال'];

// ❌ الكود الذي يطلق التحذير الأصفر في الكونسول:
// return <ul>{fruits.map(f => <li>{f}</li>)}</ul>;

// ✅ الكود المصحح النظيف بإضافة خاصية key فريدة ومستقرة:
export default function SafeList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        // إضافة key فريد يزيل التحذير فوراً
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}`,
      codeAdvanced: `// تشريح رسالة الخطأ والـ Stack Trace الحقيقية في React
/*
  Warning: Cannot update a component (\`UserBadge\`) while rendering a different component (\`ProfilePage\`).
  To locate the bad setState() call inside \`ProfilePage\`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
      at ProfilePage (http://localhost:5173/src/pages/ProfilePage.jsx:24:5)
      at div
      at App (http://localhost:5173/src/App.jsx:12:3)
*/
console.log('دائماً انظر للسطر الأول في الـ Stack Trace: ProfilePage.jsx:24 لمعرفة موضع الخلل!');`,
      output: `دائماً انظر للسطر الأول في الـ Stack Trace: ProfilePage.jsx:24 لمعرفة موضع الخلل!`,
      mistakes: [
        {
          wrong: `// تجاهل التحذيرات الصفراء وإغلاق لوحة الكونسول دون قراءتها والظن بأنها 'غير مهمة طالما الموقع يعمل'!\n// ❌ إهمال التحذيرات يؤدي لأخطاء صامتة وانهيار غير مفسر لتطبيقك في الإنتاج!`,
          correct: `// التعامل مع كل تحذير في الكونسول كفرصة ذهبية للتعلم وإصلاحه فوراً قبل الانتقال للميزة التالية ✅`,
          explanation: "تحذيرات React أثناء التطوير وُضعت لتنقذك من أخطاء ستدمر أداء أو تجربة المستخدم في الإنتاج؛ وإصلاحها يضمن بقاء كودك نقياً ومطابقاً للمعايير."
        }
      ],
      bestPractices: [
        "افتح دائماً نافذة DevTools Console أثناء برمجتك لتكتشف أي تحذير فور صدوره.",
        "اقرأ عنوان الرابط المرفق في نص الخطأ (مثل `reactjs.org/link/...`)؛ فهو يحتوي على أمثلة كود وحلول جاهزة لنفس مشكلتك.",
        "تأكد قبل تسليم أي مهمة برمجية من أن الكونسول نظيف تماماً وخالٍ من أي خطأ أو تحذير أصفر."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح رسالة التحذير في React وكيف تقرأها",
        concept: "Anatomy of a React Console Warning",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 تشريح رسالة تحذير React (Warning Anatomy)     │
└─────────────────────────────────────────────────────────────┘
  ⚠️ Warning: Each child in a list should have a unique "key" prop.
     │
     ├── 1. المشكلة: نسيت وضع خاصية key لعناصر القائمة
     │
     ├── 2. موقع المكون المسؤول: Check the render method of \`ProductList\`
     │
     ├── 3. تتبع المسار (Stack Trace):
     │      at ProductList (ProductList.jsx:15:7) ◄── السطر 15 هو المذنب!
     │      at App (App.jsx:8:3)
     │
     └── 4. الحل الفوري: أضف key={item.id} في السطر 15 وانتهى التحذير!`
      }
    },
    {
      id: "4.3.f",
      title: "فهم Fast Refresh",
      englishTitle: "Fast Refresh: State-Preserving Instant Hot Reloading",
      definition: "التحديث السريع (Fast Refresh) هو الميزة الرسمية المتطورة المدمجة في React و Vite التي تقوم بتحديث كود المكونات في المتصفح فور حفظ الملف في المحرر، مع 'الحفاظ التام على قيم الـ State الحالية' داخل المكونات ودون إعادة تحميل كامل للصفحة، مع القدرة على التعافي الذاتي الفوري من الأخطاء النحوية بمجرد تصحيحها.",
      analogy: "تخيل أنك تملأ استمارة طلب تأشيرة سفر طويلة تحتوي على 30 حقلاً في صفحة الويب: وأثناء كتابتك، لاحظت أن لون زر الإرسال يحتاج لتغيير من رمادي لأزرق. مع Fast Refresh، يقوم المطور بتغيير لون الزر ويحفظ الملف؛ فيتغير لون الزر أمام عينيك فوراً دون أن يُمحى حرف واحد من البيانات الـ 30 التي ملأتها في الاستمارة!",
      why: "توفر ساعات طويلة من الإحباط؛ ففي الأنظمة القديمة (Hot Reloading الكلاسيكي)، كان أي تعديل في الكود يمسح الـ State بالكامل ويعيد ضبط الصفحة للبداية، مما كان يجبر المبرمج على تكرار تسجيل الدخول وإعادة النقر 10 مرات للوصول لنفس الشاشة بعد كل حفظ ملف.",
      terms: [
        { term: "Fast Refresh", pronunciation: "فاست ريفريش", meaning: "تقنية التحديث الفوري المعتمدة في React مع حماية الـ State" },
        { term: "State Preservation", pronunciation: "ستيت بريزيرفيشن", meaning: "الحفاظ على قيم المتغيرات والحالات في الذاكرة دون محوها" },
        { term: "Syntax Error Recovery", pronunciation: "إيرور ريكفري", meaning: "التعافي الذاتي وعودة الصفحة للعمل فور إصلاح الخطأ النحوي" }
      ],
      syntax: "// ميزة تلقائية 100% في مشاريع Vite بفضل إضافة @vitejs/plugin-react\n// لكي تعمل بسلاسة، التزم بقاعدة التصدير النظيفة:\n// كل ملف يجب أن يصدر مكونات React فقط بحروف كبيرة PascalCase",
      codeSimple: `// مكون يوضح سحر Fast Refresh
import React, { useState } from 'react';

export default function FastRefreshDemo() {
  // حتى لو عدلت النصوص أو الألوان أدناه، سيظل العداد محتفظاً برقمه الحالي!
  const [count, setCount] = useState(15);

  return (
    <div style={{ padding: '20px', border: '1px solid #334155', borderRadius: '8px' }}>
      <h3>العداد الحالي المحفوظ بالذاكرة: {count}</h3>
      <button onClick={() => setCount(count + 1)}>زيادة العداد +</button>
      <p style={{ color: '#38bdf8' }}>جرب تعديل هذا النص وحفظ الملف: سيتغير النص فوراً ويبقى الرقم 15 في مكانه!</p>
    </div>
  );
}`,
      codeAdvanced: `// القواعد التي تشترطها React لضمان عمل Fast Refresh بدون إعادة تحميل كاملة (Full Reload)
const fastRefreshRules = [
  { rule: '1. أسماء المكونات بحروف كبيرة', detail: 'يجب أن تبدأ أسماء المكونات بـ PascalCase مثل MyButton وليس myButton' },
  { rule: '2. تصدير مكونات React فقط', detail: 'إذا قمت بتصدير ثوابت عادية مع المكون في نفس الملف، فقد تجبر Vite على إعادة تحميل كاملة' },
  { rule: '3. استخدام دوال وظيفية نقية', detail: 'المكونات الوظيفية المعرفة بـ function تدعم Fast Refresh بأعلى كفاءة واستقرار' }
];

console.log('--- قواعد الحفاظ على سحر Fast Refresh ---');
fastRefreshRules.forEach(r => console.log(\`• \${r.rule}: \${r.detail}\`));`,
      output: `--- قواعد الحفاظ على سحر Fast Refresh ---\n• 1. أسماء المكونات بحروف كبيرة: يجب أن تبدأ أسماء المكونات بـ PascalCase مثل MyButton وليس myButton\n• 2. تصدير مكونات React فقط: إذا قمت بتصدير ثوابت عادية مع المكون في نفس الملف، فقد تجبر Vite على إعادة تحميل كاملة\n• 3. استخدام دوال وظيفية نقية: المكونات الوظيفية المعرفة بـ function تدعم Fast Refresh بأعلى كفاءة واستقرار`,
      mistakes: [
        {
          wrong: `// خلط تصدير كائنات وثوابت عادية مع تصدير المكون في نفس الملف:\n// export const MY_CONSTANT = 100;\n// export default function Card() { ... } // ⚠️ قد يربك خوارزمية Fast Refresh ويجبرها على عمل Full Reload!`,
          correct: `// عزل الثوابت في ملف مستقل مثل constants.js وتصدير المكون بمفرده من ملف Card.jsx ✅`,
          explanation: "خوارزمية Fast Refresh تبحث عن ملفات تصدر مكونات React فقط لتحديثها في مكانها؛ وعند خلطها بمتغيرات عادية تضطر لإعادة تحميل الصفحة لضمان سلامة الذاكرة."
        }
      ],
      bestPractices: [
        "سمِّ مكوناتك دائماً بحروف كبيرة في البداية لتتعرف عليها Vite كأهداف صالحة لـ Fast Refresh.",
        "استمتع بتجربة التطوير السريعة؛ ولا تقلق إذا وقعت في خطأ كتابي، فالشاشة ستتعافى فوراً عند تصحيحه.",
        "إذا لاحظت أن الصفحة تعيد التحميل بالكامل (Full Page Reload)، فافحص الملف للتأكد من عدم وجود تصدير لثوابت غير مكوّناتية."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة الـ Hot Reload القديم بالـ Fast Refresh الحديث",
        concept: "Fast Refresh vs Legacy Hot Reload",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 الـ Hot Reload القديم مقابل Fast Refresh     │
└─────────────────────────────────────────────────────────────┘
  الأسلوب القديم (Hot Reload الكلاسيكي):
  تعديل الكود ──> وميض الصفحة ──> مسح كافة الـ State والعودة للصفر ❌
  (تضطر لإعادة كتابة بيانات النموذج من البداية!)

  الأسلوب الحديث (React Fast Refresh):
  تعديل الكود ──> استبدال المكون فقط ──> الـ State تظل محفوظة 100% ✅
  (تغير التصميم والألوان والبيانات الحية تظل في مكانها بأمان)`
      }
    },
    {
      id: "4.3.g",
      title: "استخدام React Strict Mode",
      englishTitle: "React.StrictMode: Catching Impurities & Deprecations Early",
      definition: "الوضع الصارم لـ رياكت (React.StrictMode) هو مكون مساعِد مدمج في نواة React لا يُنتج أي عناصر مرئية في الـ DOM، بل يعمل كـ 'حارس جودة خفي' يفحص الكود ومكونات الأبناء أثناء مرحلة التطوير (Development Mode فقط)، ويقوم بتشغيل دوال المكونات ومرحلة الـ Render وخطافات التأثير مرتين عمداً لكشف الدوال غير النقية وتنبيهك للأنماط المهجورة والآثار الجانبية الخطيرة.",
      analogy: "تخيل مدرب لياقة بدنية صارماً في معسكر تدريب: في أول يوم، يجعلك تجري مسافة 10 كيلومترات بدلاً من 5 ليختبر قوة تحملك ويكتشف أي تمزق عضلي خفي مبكراً قبل انطلاق البطولة الرسمية! الوضع الصارم يفعل ذلك بالضبط؛ يضغط على كودك بالتشغيل المزدوج ليكتشف أي تسريب ذاكرة قبل وصول الموقع للعملاء في الإنتاج.",
      why: "يحميك من أخبث وأخطر الأخطاء في تطبيقات React المعقدة؛ فهو يضمن أن دوال المكونات نقية 100% ولا تعتمد على متغيرات خارجية متغيرة، ويضمن أنك أضفت دالة تنظيف (Cleanup Function) لكل مؤقت أو اشتراك شبكي في `useEffect`.",
      terms: [
        { term: "Strict Mode", pronunciation: "ستريكت مود", meaning: "وضع الفحص الصارم المخصص لبيئة التطوير" },
        { term: "Double Invocation", pronunciation: "دبل إنفوكيشن", meaning: "التشغيل المزدوج المتعمد لدوال المكونات أثناء التطوير" },
        { term: "Side-Effect Detector", pronunciation: "سايد إيفكت ديتكتور", meaning: "كاشف الآثار الجانبية غير النقية في الكود" },
        { term: "Zero Production Cost", pronunciation: "زيرو برودكشن كوست", meaning: "غياب أي تأثير على الأداء في نسخة الإنتاج النهائية" }
      ],
      syntax: "// يغلف التطبيق بالكامل في ملف main.jsx:\n<React.StrictMode>\n  <App />\n</React.StrictMode>",
      codeSimple: `// مثال لمكون يفضحه StrictMode عند احتوائه على أثر جانبي غير نقي
let globalRunCount = 0; // ❌ متغير عام خارجي غير نقي!

function ImpureBadge() {
  // هذا التعديل المباشر أثناء التصيير هو خرق لقواعد النقاء!
  globalRunCount++;

  return (
    <div>
      {/* في StrictMode، سيظهر الرقم 2 فوراً بدلاً من 1 في أول تحميل! */}
      <p>عدد مرات التشغيل المكتشف بـ StrictMode: {globalRunCount}</p>
    </div>
  );
}

export default ImpureBadge;`,
      codeAdvanced: `// فحص تنظيف الاشتراكات (Cleanup Verification) عبر تشغيل StrictMode المزدوج
import { useEffect } from 'react';

function ChatRoomSubscription({ roomId }) {
  useEffect(() => {
    console.log(\`1. 🔌 فتح الاتصال بغرفة المحادثة رقم: \${roomId}\`);

    // دالة التنظيف الإلزامية
    return () => {
      console.log(\`2. 🧹 إغلاق الاتصال وتنظيف الذاكرة للغرفة: \${roomId}\`);
    };
  }, [roomId]);

  return <div>متصل بغرفة المحادثة #{roomId}</div>;
}
// في بيئة التطوير مع StrictMode، ستشهد في الكونسول:
// 1. فتح الاتصال
// 2. إغلاق الاتصال وتنظيف الذاكرة
// 3. فتح الاتصال مجدداً
// هذا يثبت لك أن دالة التنظيف (Cleanup) تعمل بنجاح 100%!`,
      output: `1. 🔌 فتح الاتصال بغرفة المحادثة رقم: 101\n2. 🧹 إغلاق الاتصال وتنظيف الذاكرة للغرفة: 101\n1. 🔌 فتح الاتصال بغرفة المحادثة رقم: 101\n[إثبات قاطع لسلامة دالة التنظيف]`,
      mistakes: [
        {
          wrong: `// حذف <React.StrictMode> من ملف main.jsx فقط للتخلص من رسائل console.log المزدوجة!\n// "الكونسول يطبع مرتين، سأحذف StrictMode لكي يطبع مرة واحدة!" // ❌ مثل من يكسر جهاز الإنذار في سيارته لكي لا يرن صوته!`,
          correct: `// اترك <React.StrictMode> يعمل دائماً؛ واعلم أن التشغيل المزدوج يحدث في بيئة التطوير فقط، وفي نسخة الإنتاج يعمل مرة واحدة بشكل طبيعي تماماً ✅`,
          explanation: "حذف StrictMode يحرمك من حماية الأخطاء وكشف تسريبات الذاكرة؛ والأفضل هو فهم سبب التشغيل المزدوج وكتابة دوال نقية."
        }
      ],
      bestPractices: [
        "حافظ على تغليف تطبيقك بالكامل بـ `<React.StrictMode>` في ملف `main.jsx`.",
        "تأكد دائماً من أن أي `useEffect` ينشئ اشتراكاً أو مؤقتاً أو مستمع أحداث يرجع دالة تنظيف (Cleanup Function).",
        "تذكر: إذا تصرف مكونك بشكل خاطئ بسبب التشغيل المزدوج في StrictMode، فهذا دليل قاطع على أن كودك غير نقي ويحتوي على أثر جانبي خبيث يحتاج لتصحيح."
      ],
      infographic: {
        title: "إنفوجرافيك: كيف يحمي React Strict Mode جودة مشروعك؟",
        concept: "StrictMode Development Safeguards",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 الوضع الصارم React StrictMode                │
└─────────────────────────────────────────────────────────────┘
  في بيئة التطوير (Development):
  المكون يُصيّر ──> ثم يُلغى ──> ثم يُصيّر ثانية عمداً! ⚡⚡
  
  لماذا هذا الضغط المزدوج؟
  1. لكشف الدوال غير النقية (Impure Functions) التي تعدل متغيرات عامة
  2. للتأكد من أنك كتبت دالة تنظيف (Cleanup) تغلق الاتصالات والمؤقتات
  3. لتنبيهك للواجهات البرمجية القديمة والمهجورة
  
  في نسخة الإنتاج (Production):
  يتوقف كل الفحص التكراري ويعمل التطبيق مرة واحدة بأقصى سرعة! 🚀`
      }
    }
  ],
  quiz: [
    {
      id: "q4.3.1",
      question: "ما الفائدة الكبرى لميزة 'Highlight updates when components render' في React DevTools؟",
      options: [
        "تغيير ألوان خلفيات الموقع لتصبح داكنة تلقائياً.",
        "إظهار أطر وميضية ملونة حول المكونات التي يعاد تصييرها حياً في الشاشة لكشف إعادات التصيير غير المبررة.",
        "تسريع تحميل الموقع على الهواتف الضعيفة.",
        "تحويل كود JavaScript إلى كود لغة C++."
      ],
      correctAnswer: 1,
      explanation: "هذه الميزة ترسم وميضاً بصرياً حول أي مكون يعاد تصييره، مما يتيح لك رؤية المكونات التي تتحدث دون داعٍ واكتشاف مشاكل الأداء في ثوانٍ."
    },
    {
      id: "q4.3.2",
      question: "ما الذي يميز تقنية Fast Refresh عن تقنية Hot Reloading الكلاسيكية القديمة؟",
      options: [
        "أنها تعمل فقط عند إطفاء شاشة الحاسوب.",
        "أنها تعكس تعديلات الكود فور حفظ الملف مع الحفاظ التام على قيم الـ State الحالية دون إعادة تحميل كاملة للصفحة.",
        "أنها تحذف ملفات المشروع التالفة تلقائياً.",
        "أنها تشترط استخدام متصفح Safari فقط."
      ],
      correctAnswer: 1,
      explanation: "الـ Fast Refresh تحافظ على قيم الـ State الحية في مكانها أثناء تعديل وتحديث كود المكون، مما يوفر وقت المطور ويمنع فقدان البيانات المدخلة في النماذج."
    },
    {
      id: "q4.3.3",
      question: "لماذا تقوم أداة React.StrictMode بتشغيل دوال المكونات مرتين في بيئة التطوير؟",
      options: [
        "بسبب خطأ برمجي في محرك JavaScript لم يتم إصلاحه بعد.",
        "لكشف الآثار الجانبية الخبيثة والتأكد من نقاء الدوال البرمجية وسلامة دوال التنظيف في useEffect.",
        "لإبطاء الحاسوب عمداً لكي يتعود المطور على الصبر.",
        "لتوليد نسخ احتياطية من الكود في السحابة."
      ],
      correctAnswer: 1,
      explanation: "التشغيل المزدوج المتعمد هو اختبار إجهاد ذكي لكشف أي دوال غير نقية أو اشتراكات مهملة لم يتم تنظيفها بشكل سليم قبل إطلاق التطبيق للمستخدمين."
    }
  ],
  exercise: {
    title: "تمرين عملي: تشخيص وإصلاح تسريب مؤقت غير منقّى يتسبب في إعادة تصيير مزعجة",
    description: "أمامك مكون عداد زمني يحتوي على خطأ شائع: يقوم بإنشاء مؤقت `setInterval` داخل جسم المكون دون تنظيف في `useEffect`، مما يجعل StrictMode يطلق مؤقتين متسارعين يفجران الذاكرة! المطلوب: إعادة كتابة المكون بأسلوب نقي 100% مستخدماً `useEffect` مع دالة تنظيف `clearInterval` ليعمل بسلاسة مطلقة.",
    starterCode: `import React, { useState } from 'react';

// ❌ كود معطوب غير نقي: ينشئ مؤقتاً جديداً في كل تصيير دون تنظيف!
export default function BrokenTimer() {
  const [seconds, setSeconds] = useState(0);

  // خطأ فادح: وضع setInterval مباشرة في جسم المكون!
  setInterval(() => {
    setSeconds(s => s + 1);
  }, 1000);

  return <div>الثواني المنقضية: {seconds}</div>;
}`,
    hints: [
      "انقل إنشاء المؤقت إلى داخل خطاف `useEffect` مع مصفوفة اعتماديات فارغة `[]`.",
      "احفظ معرف المؤقت في متغير: `const timer = setInterval(...)`.",
      "أرجع دالة تنظيف من `useEffect`: `return () => clearInterval(timer);`"
    ],
    solution: `import React, { useState, useEffect } from 'react';

// ✅ الكود المصحح النقي المتوافق مع معايير React StrictMode
export default function SafeTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. إنشاء المؤقت بأمان داخل سياق الـ Effect
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // 2. دالة تنظيف إلزامية لإلغاء المؤقت عند إزالة المكون أو إعادة تشغيله بـ StrictMode
    return () => {
      clearInterval(intervalId);
      console.log('🧹 تم تنظيف المؤقت بنجاح ومنع تسريب الذاكرة!');
    };
  }, []); // مصفوفة فارغة تعني التشغيل مرة واحدة فقط عند التثبيت

  return (
    <div style={{ padding: '16px', background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc', display: 'inline-block' }}>
      <h3 style={{ color: '#38bdf8' }}>⏱️ العداد الزمني النقي والمستقر</h3>
      <p style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>الثواني المنقضية: {seconds}</p>
    </div>
  );
}`
  },
  infographic: {
    title: "إنفوجرافيك الموضوع: حزمة أدوات المطور والتشخيص الذاتي في React",
    badge: "ترسانة فحص React",
    summary: "المطور المحترف لا يخمن، بل يشخّص بدقة: React DevTools لفحص المكونات، وميض التحديثات لكشف البطء، رسائل التحذير للتوجيه، وسرعة Fast Refresh مع حراسة StrictMode للأمان.",
    points: [
      "React DevTools: تبويبا Components و Profiler لتشريح الواجهة والأداء.",
      "Tree Inspection: استكشاف هرمية المكونات وتعديل Props و State حياً.",
      "Highlight Updates: إبراز وميضي يكشف إعادات التصيير المهدرة فوراً.",
      "Console Warnings: دليلك ومرشدك لاكتشاف وتصحيح الأخطاء المعمارية مبكراً.",
      "Fast Refresh: تعديل الكود في جزء من الثانية مع صمود وحفظ الـ State.",
      "Strict Mode: حارس الجودة الصارم لضمان نقاء الدوال وخلوها من التسريب."
    ]
  }
};
