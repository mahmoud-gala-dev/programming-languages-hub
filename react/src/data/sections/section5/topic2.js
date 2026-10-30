// src/data/sections/section5/topic2.js
// الموضوع 2: إنشاء المكونات (Component Creation & Architecture)

export const SECTION_5_TOPIC_2 = {
  id: "5.2",
  title: "إنشاء المكونات",
  englishTitle: "Creating Components & Architecture",
  description: "فن تحويل الأفكار إلى مكعبات برمجية حية: إنشاء المكونات الوظيفية Functional Components، قواعد التسمية PascalCase، تركيب المكونات Component Composition، استراتيجيات التصدير والاستيراد، وفصل الشاشات إلى مكونات ذرية نقية.",
  icon: "Layers",
  subtopics: [
    {
      id: "5.2.a",
      title: "ما هو Component",
      englishTitle: "What is a Component? (Building Block of React)",
      definition: "المكون (Component) في React هو الوحدة البنائية الأساسية والمستقلة لواجهة المستخدم؛ وهو ببساطة دالة JavaScript تقبل مدخلات (Props) وتقوم بإرجاع كود JSX يصف كيف يجب أن يبدو هذا الجزء من الشاشة. يجمع المكون بداخله الهيكل البصري، ومنطق التفاعل، والبيانات الخاصة به.",
      analogy: "تخيل أن تطبيق React هو 'سيارة حديثة': المكونات هي الأجزاء المستقلة المجمعة؛ هناك مكون لعجلة القيادة (SteeringWheel)، ومكون للمحرك (Engine)، ومكون للمصباح الأمامي (Headlight). كل مكون صُمم واختُبر بمفرده ليعمل بكفاءة، وعندما نركبها معاً نحصل على سيارة متكاملة تسير في الطريق!",
      why: "يقضي تماماً على فوضى الشاشات العملاقة؛ فبدلاً من ملف صفحة ويب تقليدي يمتد لـ 4000 سطر كود متشابك، يقسم مهندس React الشاشة إلى 15 مكوناً صغيراً ومستقلاً يسهل على أي مبرمج قراءته، واختباره، وتعديله دون الخوف من كسر باقي أجزاء الموقع.",
      terms: [
        { term: "Component", pronunciation: "كومبوننت", meaning: "مكون برمجي مستقل يصف جزءاً من واجهة المستخدم" },
        { term: "Building Block", pronunciation: "بيلدنغ بلوك", meaning: "وحدة بناء أساسية يتشكل منها التطبيق" },
        { term: "Encapsulation", pronunciation: "إنكابسوليشن", meaning: "تغليف المنطق والتصميم داخل المكون وعزله عن الخارج" },
        { term: "Single Responsibility", pronunciation: "سينجل ريسبونسبيلتي", meaning: "مبدأ تولي المكون مسؤولية واحدة محددة وإتقانها" }
      ],
      syntax: "// المفهوم الأساسي للمكون:\n// مدخلات (Props) ──> [ دالة المكون Component ] ──> مخرجات (JSX)\nfunction MyComponent(props) {\n  return <div>{props.text}</div>;\n}",
      codeSimple: `// مكون وظيفي بسيط يمثل بطاقة ترحيبية
function GreetingBadge() {
  // 1. منطق داخلي للمكون
  const currentTime = new Date().toLocaleTimeString('ar-EG');

  // 2. إرجاع وصف الواجهة بالـ JSX
  return (
    <div className="greeting-box">
      <h3>أهلاً بك في منصتنا الرقمية! 👋</h3>
      <p>الوقت المحلي لتسجيل حضورك: <strong>{currentTime}</strong></p>
    </div>
  );
}

// تصدير المكون ليعاد استخدامه
export default GreetingBadge;`,
      codeAdvanced: `// محاكاة لمعادلة React الذهبية: الواجهة هي دالة للمدخلات UI = f(props)
// نفس المكون ينتج مخرجات بصرية مختلفة كلياً بحسب البيانات الممررة له
function MetricCard({ title, value, change, isPositive }) {
  return (
    <div className="metric-card" style={{ padding: '16px', background: '#1e293b', borderRadius: '10px', minWidth: '180px' }}>
      <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{title}</span>
      <h3 style={{ fontSize: '1.6rem', color: '#f8fafc', margin: '6px 0' }}>{value}</h3>
      <span style={{ color: isPositive ? '#10b981' : '#ef4444', fontWeight: 'bold', fontSize: '0.85rem' }}>
        {isPositive ? '▲ ' : '▼ '} {change}
      </span>
    </div>
  );
}

// استخدام المكون لبناء لوحة إحصائيات متكاملة
function AnalyticsDashboard() {
  return (
    <div style={{ display: 'flex', gap: '14px' }}>
      <MetricCard title="إجمالي الزوار" value="124,500" change="+12.4%" isPositive={true} />
      <MetricCard title="معدل الارتداد" value="38.2%" change="-4.1%" isPositive={true} />
      <MetricCard title="الطلبات الملغاة" value="23" change="+8.0%" isPositive={false} />
    </div>
  );
}`,
      output: `[لوحة إحصائيات من 3 بطاقات متناسقة تستخدم نفس كود المكون وتتكيف مع البيانات الممررة!]`,
      mistakes: [
        {
          wrong: `// تعريف مكون داخل جسم دالة مكون آخر!\nfunction Parent() {\n  function BadChild() { return <div>خطأ فادح!</div>; } // ❌ كارثة! يعاد إنشاء تعريف المكون في كل تصيير ويفقد State!\n  return <BadChild />;\n}`,
          correct: `// عرف كل مكون في النطاق الخارجي المستقل دائماً (أو في ملف منفصل):\nfunction GoodChild() { return <div>سليم ومثالي</div>; }\nfunction Parent() { return <GoodChild />; } // ✅ صحيح وثابت المرجع في الذاكرة`,
          explanation: "تعريف مكون بداخل دالة مكون آخر يؤدي لإعادة تصنيع نوع المكون بالكامل في كل تحديث، مما يجبر React على تدمير شجرته وفقدان كل حالات الـ State الداخلية."
        }
      ],
      bestPractices: [
        "حافظ على المكون صغيراً ومقتضباً؛ إذا تجاوز كود المكون 200 سطر، فهذا مؤشر قوي على وجوب تقسيمه لمكونات أصغر.",
        "اجعل اسم المكون معبراً عن وظيفته الحقيقية (مثال: `UserProfileHeader` بدلاً من `Header2`).",
        "تذكر أن المكون يجب أن يكون دالة نقية بالنسبة لمدخلاته؛ لا تعدل كائن الـ Props الممرر لك أبداً."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح مكون React ووظيفته في المنظومة",
        concept: "Anatomy of a React Component",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 تشريح مكون React (Component Anatomy)         │
└─────────────────────────────────────────────────────────────┘
  المدخلات (Props):              دالة المكون (Component):
  { name, price, inStock } ──>  function ProductCard(props) {
                                  // المنطق الداخلي والحسابات
                                  const formatted = format(props.price);
                                  
                                  // المخرجات البصرية (JSX)
                                  return (
                                    <div className="card">
                                      <h3>{props.name}</h3>
                                      <span>{formatted}</span>
                                    </div>
                                  );
                                }`
      }
    },
    {
      id: "5.2.b",
      title: "إنشاء Functional Component",
      englishTitle: "Functional Components: Modern Function Syntax vs Class Components",
      definition: "المكون الوظيفي (Functional Component) هو المعيار الرسمي والوحيد المعتمد في React الحديثة لكتابة المكونات كدوال JavaScript نقية (دوال عادية `function` أو دوال سهمية `const MyComp = () => ...`). وقد حلت محل مكونات الأصناف القديمة (Class Components) بالكامل بعد إطلاق خطافات React Hooks.",
      analogy: "تخيل أنك تريد إرسال رسالة: قديماً (Class Components)، كنت تضطر لشراء آلة كاتبة ضخمة وتركيب أشرطة حبر معقدة والالتزام بكلمة `this.state` و `this.props` ودوال دورة حياة مرهقة. بينما مع المكونات الوظيفية الحديثة، أصبحت الرسالة مجرد رسالة نصية ذكية وفورية ترسلها من هاتفك بكلمة واحدة (دالة عادية تقبل المدخلات وترجع الواجهة)! رشيقة، وسريعة، وخالية من الصداع.",
      why: "المكونات الوظيفية أخف وزناً على معالج المتصفح، وأقصر في عدد أسطر الكود بنسبة 40%، وتتخلص نهائياً من ألغاز كلمة `this` المعقدة، وتتوافق بشكل مثالي مع ميزات React الحديثة مثل خطافات Hooks ومترجم React Compiler.",
      terms: [
        { term: "Functional Component", pronunciation: "فانكشنال كومبوننت", meaning: "المكون الوظيفي الحديث المكتوب كدالة JavaScript عادية" },
        { term: "Class Component", pronunciation: "كلاس كومبوننت", meaning: "النمط القديم المتقاعد المعتمد على الأصناف وكلمة class و this" },
        { term: "React Hooks", pronunciation: "رياكت هوكس", meaning: "الخطافات التي منحت المكونات الوظيفية القدرة على إدارة الحالة والحياة" },
        { term: "Arrow Component", pronunciation: "آرو كومبوننت", meaning: "كتابة المكون الوظيفي بصيغة الدالة السهمية المختصرة" }
      ],
      syntax: "// 1. النمط الكلاسيكي المفصل بالدالة العادية (موصى به):\nfunction Welcome(props) {\n  return <h1>أهلاً يا {props.name}</h1>;\n}\n\n// 2. نمط الدالة السهمية:\nconst Welcome = ({ name }) => <h1>أهلاً يا {name}</h1>;",
      codeSimple: `// الطريقة القياسية الموصى بها لإنشاء مكون وظيفي
import React from 'react';

// استخدام الدالة العادية المسماة لسهولة قراءة رسائل الأخطاء في Stack Trace
function ActionButton({ label, onClick, variant = 'primary' }) {
  return (
    <button 
      onClick={onClick} 
      className={\`app-btn btn-\${variant}\`}
      style={{ padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
    >
      {label}
    </button>
  );
}

export default ActionButton;`,
      codeAdvanced: `// مقارنة تاريخية توضح الفرق الشاسع بين النمط القديم المتقاعد والنمط الوظيفي الحديث
// ❌ 1. النمط القديم المتقاعد بـ Class Component (لا تكتب هذا الكود أبداً في 2026!):
/*
class OldCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this); // ربط يدوي مرهق لـ this!
  }
  handleClick() { this.setState({ count: this.state.count + 1 }); }
  render() {
    return <button onClick={this.handleClick}>العداد: {this.state.count}</button>;
  }
}
*/

// ✅ 2. النمط الوظيفي الحديث فائق الرشاقة والأناقة مع React Hooks:
import { useState } from 'react';

export function ModernCounter() {
  const [count, setCount] = useState(0); // إدارة الحالة بسطر واحد بدون this!

  return (
    <button onClick={() => setCount(count + 1)} className="modern-btn">
      العداد الحديث: {count}
    </button>
  );
}`,
      output: `[المكون الوظيفي ينجز في 5 أسطر ما كان يتطلب 20 سطراً معقداً في مكونات الـ Class القديمة!]`,
      mistakes: [
        {
          wrong: `// دراسة وإضاعة أسابيع في تعلم Class Components في دورات قديمة من عام 2017!\n// "يجب أن أتقن ComponentDidMount و componentWillUnmount أولاً!" // ❌ ضياع وقت وجهد على أنماط مهجورة!`,
          correct: `// ركز 100% من طاقتك على المكونات الوظيفية (Functional Components) مع خطافات React Hooks (useState, useEffect) لأنها المعيار المعتمد عالمياً ✅`,
          explanation: "فريق React أعلن رسمياً أن المكونات الوظيفية مع Hooks هي المستقبل، وميزات React 18 و 19 لا تدعم إلا المكونات الوظيفية."
        }
      ],
      bestPractices: [
        "فضل استخدام الدوال العادية `function MyComponent() {}` لتسهيل القراءة وتسهيل الـ Hoisting داخل الملف.",
        "استخدم تفكيك الخصائص (Destructuring) مباشرة في سطر تعريف الدالة: `function Card({ title, price })`.",
        "لا تستخدم الكلمات القديمة مثل `this.props` أو `this.state` إطلاقاً في مشاريعك الحديثة."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة تاريخية بين Class Components والمكونات الوظيفية",
        concept: "Class Components vs Functional Components",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 الماضي القديم مقابل الحاضر الحديث في React   │
└─────────────────────────────────────────────────────────────┘
  الماضي (Class Components):        الحاضر (Functional Components):
  • كود طويل ومعقد (20 سطراً)        • كود فائق الرشاقة (5 أسطر) ⚡
  • صراع مرير مع كلمة this           • لا وجود لكلمة this نهائياً 🕊️
  • دوال دورة حياة متفرقة ومربكة     • خطافات Hooks نقية وموحدة 🪝
  • صعوبة إعادة استخدام المنطق       • خطافات مخصصة Custom Hooks مذهلة`
      }
    },
    {
      id: "5.2.c",
      title: "قواعد تسمية المكونات",
      englishTitle: "Component Naming Rules: The PascalCase Mandate",
      definition: "في React، يجب أن يبدأ اسم كل مكون بحرف كبير إجبارياً وفق نمط سنام الجمل المرتفع (PascalCase مثل `UserProfile` أو `NavigationMenu`)؛ لأن محرك JSX يعتمد على الحرف الأول للتمييز: إذا بدأ الوسم بحرف صغير (`<button>`, `<div>`) يعتبره المتصفح عنصر HTML قياسياً، أما إذا بدأ بحرف كبير (`<Button>`, `<Card>`) فتدرك React أنه مكون برمجي مخصص وتبدأ في استدعاء دالته.",
      analogy: "تخيل أنك تنادي في مدرسة:\n• إذا ناديت بصوت عادي: 'يا طالب' (حرف صغير): يلتفت لك أي طالب في الساحة لأنها صفة عامة عادية (عنصر HTML قياسي مثل div أو span).\n• إذا ناديت باسم علم محدد: 'يا أحمد الشافعي' (حرف كبير PascalCase): يلتفت لك ذلك الشخص بعينه وبمهاراته وتفاصيله المحددة (مكون مخصص صنعته بنفسك)!",
      why: "بدون هذه القاعدة، ستفشل React تماماً في معرفة الفرق؛ فإذا سميت مكونك `mybutton` وكتبت `<mybutton />`، سيبحث المتصفح في معايير الـ HTML العالمية عن وسم اسمه `mybutton` ولن يجده وسيعرض عنصراً ميتاً فارغاً، ولن يستدعي دالتك البرمجية إطلاقاً!",
      terms: [
        { term: "PascalCase", pronunciation: "باسكال كيس", meaning: "نمط تسمية تبدأ فيه كل كلمة بحرف كبير (مثل ShoppingCart)" },
        { term: "HTML Tag vs Component", pronunciation: "تاج ضد كومبوننت", meaning: "التمييز بين وسوم المتصفح الأصلية ومكونات React المخصصة" },
        { term: "Capitalization", pronunciation: "كابيتالايزيشن", meaning: "بدء الكلمة بحرف كبير لتمييزها في مترجم الـ JSX" }
      ],
      syntax: "// ✅ تسميات صحيحة بنمط PascalCase:\nfunction UserAvatar() { ... }\nfunction PrimaryButton() { ... }\n\n// ❌ تسميات خاطئة ومحظورة في React:\n// function userAvatar() { ... } // سيعاملها JSX كوسم HTML مجهول!\n// function my_button() { ... }  // محظور أيضاً!",
      codeSimple: `// إثبات أهمية الحرف الكبير PascalCase
import React from 'react';

// ✅ يبدأ بحرف كبير: ستتعرف عليه React كمكون فوري
function AlertBox({ message }) {
  return (
    <div style={{ padding: '12px', background: '#fef2f2', border: '1px solid #ef4444', color: '#b91c1c', borderRadius: '8px' }}>
      ⚠️ {message}
    </div>
  );
}

// في الاستخدام داخل الشجرة:
export default function App() {
  return (
    <main>
      <h1>تنبيهات النظام</h1>
      {/* يستدعى بالحرف الكبير مطابقة لاسمه */}
      <AlertBox message="انتهت جلسة تسجيل الدخول، يرجى التوثيق مجدداً." />
    </main>
  );
}`,
      codeAdvanced: `// ماذا يحدث خلف الكواليس إذا أخطأت وسميت المكون بحرف صغير؟
// محاكاة لما يفعله مترجم Vite / Babel عند الترجمة:
/*
  1. عندما تكتب: <button />
     تترجم إلى: React.createElement("button") // كنص نصي لعنصر HTML للمتصفح!

  2. عندما تكتب بحرف كبير: <AlertBox />
     تترجم إلى: React.createElement(AlertBox) // كمرجع لدالة برمجية تستدعيها React!

  3. الكارثة عندما تكتب بحرف صغير: <alertBox />
     تترجم إلى: React.createElement("alertBox") // المتصفح يبحث عن وسم HTML اسمه <alertBox> فيفشل تماماً!
*/
console.log('الحرف الكبير ليس زينة شكلية؛ بل هو المفتاح البرمجي الذي يفصل بين نصوص HTML ودوال JavaScript!');`,
      output: `الحرف الكبير ليس زينة شكلية؛ بل هو المفتاح البرمجي الذي يفصل بين نصوص HTML ودوال JavaScript!`,
      mistakes: [
        {
          wrong: `// كتابة اسم المكون بحرف صغير واستدعاؤه في JSX:\nfunction productCard() { return <div>بطاقة</div>; }\n// <productCard /> // ❌ لن تظهر البطاقة على الشاشة وسيعاملها المتصفح كعنصر HTML غريب غير معرّف!`,
          correct: `// تحويل الحرف الأول إلى حرف كبير دائماً:\nfunction ProductCard() { return <div>بطاقة</div>; }\n// <ProductCard /> // ✅ سليم ومثالي وتتعرف عليه React فوراً`,
          explanation: "مترجم JSX مبرمج بقاعدة حتمية: الوسوم التي تبدأ بحرف صغير تُعامل كنصوص HTML قياسية، بينما الوسوم التي تبدأ بحرف كبير تُعامل كمكونات React."
        }
      ],
      bestPractices: [
        "استخدم نمط PascalCase دائماً لأسماء المكونات وأسماء ملفاتها المقابلة (مثل `UserProfile.jsx`).",
        "اختر أسماء أسماء واضحة (Nouns) للمكونات مثل `InvoiceSummary` و `ContactForm` تعبر عن الشيء المعروض.",
        "تجنب استخدام الاختصارات الغامضة؛ اكتب `NavigationMenu` بدلاً من `NavMnu` لسهولة قراءة الكود في الفريق."
      ],
      infographic: {
        title: "إنفوجرافيك: كيف يفرق محرك JSX بين وسوم HTML ومكونات React؟",
        concept: "The PascalCase Resolution Logic",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 كيف يقرر مترجم JSX نوع الوسم؟                │
└─────────────────────────────────────────────────────────────┘
  الوسم يبدأ بـ:
  ├── حرف صغير (lowercase):  <button> أو <header>
  │   └── القرار: وسم HTML قياسي مدمج في المتصفح 🌐
  │       الترجمة: React.createElement('button')
  │
  └── حرف كبير (PascalCase): <Button> أو <Header>
      └── القرار: مكون React مخصص استدعِ دالته فوراً! ⚛️
          الترجمة: React.createElement(Button)`
      }
    },
    {
      id: "5.2.d",
      title: "استيراد المكونات وتصديرها",
      englishTitle: "Importing & Exporting Components: Modular Architecture",
      definition: "استيراد وتصدير المكونات هي الآلية القياسية في JavaScript (ES Modules) التي تسمح لك بوضع كل مكون في ملف مستقل خاص به، وتصديره عبر `export`، واستيراده عبر `import` في أي ملف أو صفحة أخرى في مشروعك لتركيبه في شجرة المكونات.",
      analogy: "تخيل أن مشروعك هو ورشة بناء مبانٍ جاهزة: يتم صب الأبواب في مصنع متخصص وتصديرها بشاحنة نقل (Export)، ويتم استيرادها واستلامها في موقع البناء (Import) لتركيبها في الجدار. لا أحد يبني مصنع الأبواب داخل غرفة النوم!",
      why: "هي الأساس لتنظيم المشاريع الكبيرة وتفادي ملفات الكود العملاقة؛ وتسمح لفريق العمل المكون من 10 مبرمجين بالعمل بالتوازي؛ حيث يعمل مطور على ملف `Navbar.jsx` ويعمل زميله على `Footer.jsx` في نفس اللحظة دون أي تضارب.",
      terms: [
        { term: "Export", pronunciation: "إكسبورت", meaning: "تصدير المكون من ملفه ليكون متاحاً للملفات الأخرى" },
        { term: "Import", pronunciation: "إمبورت", meaning: "استيراد وجلب المكون من ملف خارجي لاستخدامه" },
        { term: "Relative Path", pronunciation: "ريلاتيف باث", meaning: "المسار النسبي للملف مثل './components/Button.jsx'" }
      ],
      syntax: "// في ملف المكون المصدِّر (Button.jsx):\nexport default function Button() { return <button>انقر</button>; }\n\n// في ملف المكون المستورِد (App.jsx):\nimport Button from './components/Button.jsx';\n\n// استخدامه داخل JSX:\n<Button />",
      codeSimple: `// 1. ملف المكون الفرعي: components/SocialLinks.jsx
import React from 'react';

export default function SocialLinks() {
  return (
    <div className="social-tray">
      <a href="https://x.com">منصة X</a>
      <a href="https://github.com">مستودع GitHub</a>
    </div>
  );
}

// 2. ملف الصفحة الرئيسية: App.jsx
// استيراد المكون من مساره النسبي
import SocialLinks from './components/SocialLinks.jsx';

export function HomePage() {
  return (
    <footer>
      <p>تابعنا على الشبكات الاجتماعية:</p>
      {/* استخدام المكون المستورد بنجاح */}
      <SocialLinks />
    </footer>
  );
}`,
      codeAdvanced: `// نمط التصدير المجمع الاحترافي (Barrel Pattern)
// عندما يكون لديك 10 مكونات في مجلد components، أنشئ ملف components/index.js يجمعها:
/*
  // في ملف components/index.js:
  export { default as Header } from './Header.jsx';
  export { default as Footer } from './Footer.jsx';
  export { default as Sidebar } from './Sidebar.jsx';

  // في صفحة App.jsx، استورد كل ما تحتاجه في سطر واحد نظيف وأنيق:
  import { Header, Footer, Sidebar } from './components';
*/
console.log('نمط الـ Barrel يختصر مسارات الاستيراد الطويلة ويجعل كودك فائق النظافة والاحترافية!');`,
      output: `نمط الـ Barrel يختصر مسارات الاستيراد الطويلة ويجعل كودك فائق النظافة والاحترافية!`,
      mistakes: [
        {
          wrong: `// نسيان النقطة والسلاش ./ في بداية المسار النسبي:\n// import Button from 'components/Button.jsx'; // ❌ خطأ فادح: يظن المتصفح أنك تبحث عن حزمة في node_modules وليس في مشروعك!`,
          correct: `// وضع ./ (نفس المجلد) أو ../ (المجلد السابق) في المسارات النسبية دائماً:\n// import Button from './components/Button.jsx'; // ✅ سليم ومثالي`,
          explanation: "المسار الذي لا يبدأ بـ `./` أو `../` يعتبره محرك Vite حزمة خارجية من مستودع npm؛ لذا فإن النقطة إلزامية للملفات المحلية داخل مشروعك."
        }
      ],
      bestPractices: [
        "ضع مكونات الواجهة في مجلد منظم اسمه `src/components`.",
        "استخدم التصدير الافتراضي `export default` للمكون الرئيسي للملف.",
        "استفد من ميزة Auto Import في محرر VS Code؛ ابدأ بكتابة اسم المكون في JSX واضغط Enter وسيقوم المحرر بكتابة سطر الاستيراد تلقائياً في الأعلى."
      ],
      infographic: {
        title: "إنفوجرافيك: شبكة تصدير واستيراد المكونات في مشروع React",
        concept: "Component Export & Import Pipeline",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 شبكة تبادل واستيراد المكونات                 │
└─────────────────────────────────────────────────────────────┘
  ملف المصدر (src/components/UserCard.jsx):
  export default function UserCard() { ... }
                     │
                     │  (شاحنة التصدير والاستيراد عبر المسار النسبي)
                     ▼
  ملف الاستهلاك (src/App.jsx):
  import UserCard from './components/UserCard.jsx';
  
  return (
    <div className="layout">
      <UserCard />  ◄── تم التركيب والتشغيل بنجاح! 🚀
    </div>
  );`
      }
    },
    {
      id: "5.2.e",
      title: "تركيب المكونات Component Composition",
      englishTitle: "Component Composition: Building Complex UIs from Simple Blocks",
      definition: "تركيب المكونات (Component Composition) هو المبدأ الهندسي الأسمى في React الذي يفضل 'تجميع وتركيب المكونات البسيطة معاً' (Composition) على وراثة الفئات المعقدة (Inheritance)، عبر احتضان المكونات لبعضها البعض وتمرير المكونات كأبناء (Children) أو كـ Props مخصصة.",
      analogy: "تخيل إطار صورة خشبي فاخر (Frame Component): الإطار جميل بحد ذاته ويملك حوافاً مذهبة وقاعدة خشبية. يمكنك أن تضع داخل هذا الإطار 'صورة عائلية'، أو 'شهادة تخرج'، أو 'لوحة فنية لطبيعة ساحرة'. الإطار لا يهتم بما في داخله؛ وظيفته أن يوفر الهيكل الحاضن الفاخر، وأنت تركب بداخله المحتوى الذي تريده بحرية!",
      why: "يمنحك مرونة خارقة ويحميك من داء 'انفجار الخصائص' (Props Explosion)؛ فبدلاً من بناء مكون نافذة منبثقة (Modal) يستقبل 50 خاصية متباينة (مثل modalTitle, modalBody, showCancelBtn, confirmText)، تصمم مكون حاوية بسيط وتضع بداخله أي عناصر وأزرار تريدها كأطفال طبيعيين.",
      terms: [
        { term: "Component Composition", pronunciation: "كومبوننت كومبوزيشن", meaning: "تركيب وتجميع المكونات معاً لبناء واجهات معقدة" },
        { term: "Composition over Inheritance", pronunciation: "كومبوزيشن أوفر إنهيريتنس", meaning: "المبدأ البرمجي العالمي الذي يفضل التركيب على الوراثة" },
        { term: "Container Component", pronunciation: "كونتينر كومبوننت", meaning: "مكون الحاوية الذي يوفر تصميماً وهيكلاً لحضن مكونات أخرى" }
      ],
      syntax: "// مكون حاوية يستقبل أطفاله عبر الخاصية السحرية children:\nfunction Card({ children }) {\n  return <div className=\"card-shell\">{children}</div>;\n}\n\n// استخدامه بتركيب أي محتوى بداخله:\n<Card>\n  <h2>عنوان</h2>\n  <button>زر</button>\n</Card>",
      codeSimple: `// مكون إطار حاضر عام (Dialog Shell) يعتمد على مبدأ التركيب
function DialogBox({ title, children }) {
  return (
    <div className="dialog-backdrop" style={{ border: '2px solid #3b82f6', borderRadius: '12px', padding: '16px', background: '#1e293b' }}>
      <div className="dialog-header" style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '12px' }}>
        <h3 style={{ color: '#38bdf8' }}>{title}</h3>
      </div>
      
      {/* هنا يظهر كل ما يُكتب بين وسمي الفتح والإغلاق لهذا المكون */}
      <div className="dialog-content">
        {children}
      </div>
    </div>
  );
}

// استخدام نفس الحاوية لغرضين مختلفين تماماً بفضل التركيب!
export default function CompositionShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 1. استخدام الحاوية لتأكيد حذف */}
      <DialogBox title="تأكيد العملية ⚠️">
        <p>هل أنت متأكد من رغبتك في حذف هذا الملف نهائياً؟</p>
        <button style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px' }}>نعم، احذف</button>
      </DialogBox>

      {/* 2. استخدام نفس الحاوية لعرض إشعار نجاح */}
      <DialogBox title="تهانينا! 🎉">
        <p>تم ترقية حسابك إلى الباقة الماسية بنجاح تام.</p>
        <a href="#perks" style={{ color: '#38bdf8' }}>استكشف المزايا الجديدة</a>
      </DialogBox>
    </div>
  );
}`,
      codeAdvanced: `// نمط تركيب متقدم: تمرير مكونات كـ Props مستقلة (Slot Pattern)
function SplitLayout({ leftPanel, rightPanel }) {
  return (
    <div className="split-view" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px' }}>
      <aside className="left-slot">{leftPanel}</aside>
      <main className="right-slot">{rightPanel}</main>
    </div>
  );
}

// استخدام الـ Slots لتركيب شاشة بريد متقدمة
function EmailApp() {
  return (
    <SplitLayout 
      leftPanel={
        <nav>
          <ul>
            <li>البريد الوارد (5)</li>
            <li>الرسائل المرسلة</li>
            <li>المسودات</li>
          </ul>
        </nav>
      }
      rightPanel={
        <article>
          <h3>عنوان الرسالة: مرحباً بك في React 19</h3>
          <p>محتوى الرسالة الكامل يظهر هنا بسلاسة تامة بفضل نمط التركيب.</p>
        </article>
      }
    />
  );
}`,
      output: `[تركيب مرن: نفس المكون الحاضن يوفر تقسيم الشاشة والمطور يمرر أي محتوى يريده لكل شق!]`,
      mistakes: [
        {
          wrong: `// محاولة استخدام وراثة الـ Classes القديمة لإنشاء مكونات متخصصة (مثل class SpecialButton extends Button)\n// ❌ فريق React يحذر رسمياً من الوراثة ويؤكد أنها غير مجدية في عالم واجهات المستخدم!`,
          correct: `// استخدام التركيب دائماً؛ ابنِ مكون Button عادي، ثم غلفه داخل مكون <DeleteButton> يمرر له لونه الخاص ونصه الخاص ✅`,
          explanation: "الوراثة تجعل الكود صلباً ومعقداً ويصعب تعديله؛ بينما التركيب (Composition) يمنحك مرونة مطلقة لإعادة تشكيل الواجهات كالصلصال."
        }
      ],
      bestPractices: [
        "اعتمد على الخاصية `children` لبناء المكونات الحاضنة (مثل البطاقات، النوافذ المنبثقة، وتخطيطات الصفحات).",
        "استخدم نمط الـ Slots (تمرير JSX كـ Props مسماة) عندما يحتاج المكون لأكثر من مساحة محتوى مخصصة (مثل `headerSlot` و `footerSlot`).",
        "تذكر مبدأ React الأبدي: 'Composition over Inheritance' (التركيب يتفوق على الوراثة دائماً)."
      ],
      infographic: {
        title: "إنفوجرافيك: سحر مبدأ تركيب المكونات Component Composition",
        concept: "Component Composition vs Inheritance",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 سحر تركيب المكونات (Composition)             │
└─────────────────────────────────────────────────────────────┘
  المكون الحاضن (The Shell):
  function Modal({ children }) {
    return <div className="backdrop">{children}</div>;
  }
                 │
                 ▼ (يمكنك تركيب أي شيء تريده في قلبه!)
  ┌─────────────────────────┐      ┌─────────────────────────┐
  │  <Modal>                │      │  <Modal>                │
  │    <LoginForm />        │  أو  │    <VideoPlayer />      │
  │  </Modal>               │      │  </Modal>               │
  └─────────────────────────┘      └─────────────────────────┘
  (مكون واحد يخدم مئات السيناريوهات المختلفة بنقاء تام!)`
      }
    },
    {
      id: "5.2.f",
      title: "إنشاء مكونات قابلة لإعادة الاستخدام",
      englishTitle: "Creating Reusable Components: Configurable UI Elements",
      definition: "المكون القابل لإعادة الاستخدام (Reusable Component) هو مكون تم تصميمه بذكاء وتجريد ليعمل كـ 'أداة عامة مرنة' في عشرات الصفحات والمواضع المختلفة في المشروع، من خلال استقبال معلمات قابلة للتخصيص عبر الخصائص (Props مثل الحجم، واللون، والأيقونة، والحدث)، دون أن يرتبط ببيانات ثابتة خاصة بشاشة واحدة محددة.",
      analogy: "تخيل 'قالب صنع المعمول أو البسكويت': القالب النحاسي نفسه يعطيك شكل الزهرة الجميل دائماً؛ لكن يمكنك أن تضع فيه عجينة شوكولاتة فيخرج بسكويت شوكولاتة، أو تضع فيه عجينة فانيليا فيخرج بسكويت فانيليا، أو ترشه بسكر مطحون. القالب هو المكون القابل لإعادة الاستخدام، والعجينة والنكهة هي الـ Props التي تمررها له في كل مرة!",
      why: "هو المعيار الذي يقاس به نضج المبرمج المحترف؛ فالمبرمج المبتدئ يكتب 20 زراً مختلفاً في مشروعه بـ 20 ملفاً مكرراً، بينما يكتب المحترف مكون زر واحد اسمه `<Button />` يدعم 5 أشكال و3 أحجام، ويعيد استخدامه 200 مرة في مشروعه بانسجام تام وتوفير آلاف أسطر الكود.",
      terms: [
        { term: "Reusable Component", pronunciation: "ريوزابل كومبوننت", meaning: "مكون عام مرن قابل لإعادة الاستخدام في مواضع لا حصر لها" },
        { term: "Component Variants", pronunciation: "فاريانتس", meaning: "تنويعات شكلية للمكون (مثل primary, secondary, danger)" },
        { term: "Design System", pronunciation: "ديزاين سيستم", meaning: "نظام التصميم الموحد لمكونات الشركة وألوانها وخطوطها" }
      ],
      syntax: "// مكون زر عام يدعم التنويع عبر الـ Props:\n<Button variant=\"danger\" size=\"large\" onClick={handleDelete}>\n  حذف الحساب\n</Button>",
      codeSimple: `// بناء مكون شارة تنبيه عامة قابلة لإعادة الاستخدام (Reusable Badge)
import React from 'react';

function StatusBadge({ type = 'info', text }) {
  // مصفوفة سمات المظهر حسب النوع
  const styles = {
    success: { bg: '#dcfce7', text: '#15803d', icon: '✅' },
    warning: { bg: '#fef3c7', text: '#b45309', icon: '⚠️' },
    danger:  { bg: '#fee2e2', text: '#b91c1c', icon: '🛑' },
    info:    { bg: '#e0f2fe', text: '#0369a1', icon: 'ℹ️' }
  };

  const currentTheme = styles[type] || styles.info;

  return (
    <span style={{
      backgroundColor: currentTheme.bg,
      color: currentTheme.text,
      padding: '4px 10px',
      borderRadius: '999px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px'
    }}>
      {currentTheme.icon} {text}
    </span>
  );
}

export default StatusBadge;`,
      codeAdvanced: `// نموذج حقيقي لمكون زر فائق المرونة يعتمد عليه نظام تصميم كامل
function CustomButton({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  isLoading = false, 
  children, 
  onClick 
}) {
  // تحديد مقاسات الخط والحشوات
  const sizeStyles = {
    sm: { padding: '6px 12px', fontSize: '0.8rem' },
    md: { padding: '10px 18px', fontSize: '0.9rem' },
    lg: { padding: '14px 24px', fontSize: '1.05rem' }
  };

  // تحديد ألوان التنويعات
  const variantStyles = {
    primary: { background: '#2563eb', color: '#fff' },
    secondary: { background: '#475569', color: '#fff' },
    danger: { background: '#dc2626', color: '#fff' }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      style={{
        ...sizeStyles[size],
        ...variantStyles[variant],
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      {isLoading && <span className="spinner">⏳</span>}
      {children}
    </button>
  );
}`,
      output: `[مكون زر واحد فائق المرونة يدعم كل الأحجام والألوان وحالات التحميل عبر كامل صفحات الموقع!]`,
      mistakes: [
        {
          wrong: `// تضمين نصوص وعناوين ثابتة مشفرة في كود المكون العام (Hardcoded Text):\nfunction SaveButton() { return <button>حفظ</button>; } // ❌ مكون محدود لا يمكن استخدامه إلا لغرض واحد!`,
          correct: `// جعل النص ممرراً عبر children أو Props لجعل المكون حراً وقابلاً لإعادة الاستخدام:\nfunction Button({ children, ...props }) { return <button {...props}>{children}</button>; } // ✅ مرن جداً`,
          explanation: "تجريد المكون من النصوص المحددة وجعلها مدخلات يتيح استخدامه كزر حفظ، أو زر تسجيل، أو زر حذف دون تعديل ملفه."
        }
      ],
      bestPractices: [
        "عين دائماً قيماً افتراضية للخصائص الشكلية (مثل `variant = 'primary'`).",
        "اجعل المكون يقبل خاصية `children` ليكون نص الزر ومحتواه مرناً تماماً.",
        "اجمع مكونات الواجهة العامة القابلة لإعادة الاستخدام في مجلد مخصص مثل `src/components/ui`."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح المكون القابل لإعادة الاستخدام (Reusable Component)",
        concept: "Anatomy of a Reusable UI Component",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 تشريح المكون العام المرن (Reusable Component) │
└─────────────────────────────────────────────────────────────┘
  المدخلات المرنة (Props):
  • variant: 'primary' | 'danger' | 'outline'  (المظهر واللون)
  • size:    'sm' | 'md' | 'lg'                (المقاس والحشوة)
  • icon:    أيقونة اختيارية                  (الزينة البصرية)
  • disabled / isLoading: true | false         (حالة التفاعل)
  • children: النص والمحتوى الداخلي           (المحتوى الحر)
                 │
                 ▼
  [ مكون واحد فقط يخدم 100 شاشة في موقعك بأناقة تامة ] 🧩`
      }
    },
    {
      id: "5.2.g",
      title: "فصل المكونات إلى ملفات",
      englishTitle: "File Splitting: One Component Per File Convention",
      definition: "فصل المكونات إلى ملفات مستقلة هو العرف الهندسي القياسي الأكثر احتراماً في مجتمع React عالمياً؛ وينص على أن يُوضع كل مكون رئيسي في ملف مستقل خاص به يحمل نفس اسم المكون تماماً مع الامتداد `.jsx` (مثل وضع مكون `UserCard` في ملف `UserCard.jsx`) داخل بنية مجلدات منظمة.",
      analogy: "تخيل مكتبة كتب ضخمة: إذا وضعت قصائد المتنبي، وكتاب الطب لابن سينا، ورواية خيالية كلها مدمجة في مجلد ورقي واحد ضخم من 10,000 صفحة، فلن يجد القارئ ما يريده أبداً! بينما تقوم المكتبة بوضع كل كتاب في غلاف مستقل مع فهرس واضح ليسهل سحبه وقراءته وإعادته لمكانه في ثانية واحدة.",
      why: "يسهل الصيانة وتتبع التغييرات في أنظمة التحكم بالإصدارات مثل Git؛ فعندما يعدل زميلك زر الإعجاب في ملف `LikeButton.jsx`، يظهر في Git تعديل سطرين في ذلك الملف فقط، دون المخاطرة بإحداث تضارب (Merge Conflict) مع باقي أجزاء الصفحة.",
      terms: [
        { term: "File Splitting", pronunciation: "فايل سبليتنغ", meaning: "فصل وتوزيع المكونات في ملفات مستقلة" },
        { term: "One Component Per File", pronunciation: "ون كومبوننت بير فايل", meaning: "المعيار الذهبي لوضع مكون رئيسي واحد في كل ملف" },
        { term: "Co-location", pronunciation: "كولوكيشن", meaning: "وضع الملفات المرتبطة ببعضها (المكون، تنسيقه، واختباره) في نفس المجلد" }
      ],
      syntax: "// الهيكل الشجري للملفات المفصولة:\nsrc/\n├── components/\n│   ├── Button.jsx\n│   ├── Navbar.jsx\n│   └── UserCard.jsx\n└── App.jsx",
      codeSimple: `// 1. ملف المكون المنفصل: src/components/Badge.jsx
import React from 'react';

export default function Badge({ label }) {
  return <span className="badge-tag">{label}</span>;
}

// 2. ملف الاستهلاك: src/App.jsx
import React from 'react';
import Badge from './components/Badge.jsx';

export default function App() {
  return (
    <div>
      <h2>مرحبا بك <Badge label="جديد" /></h2>
    </div>
  );
}`,
      codeAdvanced: `// استراتيجية تنظيم المكونات ذات الأجزاء المتعددة (Component Folder Pattern)
// عندما يحتاج المكون لتنسيق خاص وصور واختبارات، نضعها في مجلد يحمل اسمه:
/*
src/components/Navbar/
├── Navbar.jsx          (كود المكون الرئيسي)
├── Navbar.module.css   (تنسيقات CSS الحصرية المعزولة)
├── NavItem.jsx         (مكون فرعي صغير يخدم النافبار فقط)
└── index.js            (ملف التصدير النظيف: export { default } from './Navbar';)

// في صفحة App.jsx نستورد بنظافة مطلقة:
import Navbar from './components/Navbar';
*/
console.log('تنظيم المكون في مجلد مخصص يعزل أصوله وتنسيقاته ويحمي المشروع من الفوضى!');`,
      output: `تنظيم المكون في مجلد مخصص يعزل أصوله وتنسيقاته ويحمي المشروع من الفوضى!`,
      mistakes: [
        {
          wrong: `// كتابة 8 مكونات مختلفة في ملف واحد App.jsx وتسميته "الملف الرئيسي"!\n// ❌ يصبح الملف طويلاً ويستحيل العثور على المكونات أو اختبارها بشكل مستقل!`,
          correct: `// فصل كل مكون في ملفه الخاص فور تجاوز حجمه 30-40 سطراً أو عند الرغبة في استخدامه في صفحة أخرى ✅`,
          explanation: "المكونات الصغيرة المؤقتة التي تخدم مكوناً واحداً فقط يجوز وضعها معه مؤقتاً؛ ولكن أي مكون عام أو رئيسي يجب أن يستقل بملفه الخاص فوراً."
        }
      ],
      bestPractices: [
        "طابق دائماً اسم الملف مع اسم المكون بالضبط: `ProductCard.jsx` يحتوي على `function ProductCard() {}`.",
        "استخدم مجلد `src/components/ui` للمكونات الذرية العامة (Button, Input, Badge).",
        "استخدم مجلد `src/pages` أو `src/views` للشاشات والصفحات الكاملة لتسهيل فهم هيكل الموقع."
      ],
      infographic: {
        title: "إنفوجرافيك: خريطة فصل المكونات إلى ملفات مستقلة",
        concept: "File Splitting & Directory Structure",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 معيار فصل المكونات في ملفات مستقلة           │
└─────────────────────────────────────────────────────────────┘
  ❌ أسلوب الملف الوحيد الفوضوي:
  App.jsx (3000 سطر يجمع Navbar, Card, Footer, Form...)

  ✅ أسلوب الفصل المعياري النظيف:
  src/
  ├── components/
  │   ├── Navbar.jsx       (60 سطر - مسؤول عن التنقل فقط) 🧭
  │   ├── ProductCard.jsx  (40 سطر - مسؤول عن بطاقة المنتج) 📦
  │   └── Footer.jsx       (30 سطر - مسؤول عن التذييل) 📄
  └── App.jsx              (يركبهم معاً في 20 سطر فقط!) 🎯`
      }
    },
    {
      id: "5.2.h",
      title: "الفرق بين Default Export و Named Export",
      englishTitle: "Default Export vs Named Export in React Components",
      definition: "في نظام وحدات JavaScript ES Modules، التصدير الافتراضي (`export default MyComponent`) يسمح بتصدير شيء رئيسي واحد فقط من الملف، ويتم استيراده في الملفات الأخرى بأي اسم وبدون أقواس معقوفة. بينما التصدير المسمى (`export function Helper()`) يسمح بتصدير عدة عناصر ودوال من نفس الملف، ويشترط استيرادها بنفس اسمها الدقيق داخل أقواس معقوفة `{ Helper }`.",
      analogy: "تخيل كتاباً مؤلفاً من فصول:\n• التصدير الافتراضي (Default Export): هو 'عنوان الكتاب الرئيسي'؛ هناك عنوان رئيسي واحد فقط على الغلاف، وعندما تشتريه تناديه باسم الكتاب دون لبس.\n• التصدير المسمى (Named Export): هو 'المقالات والأدوات في ملحق الكتاب'؛ هناك عشرات الملاحق والخرائط بالداخل، ولكي تستعير خريطة محددة يجب أن تذكر اسمها الدقيق كما هو مفهرس في القائمة!",
      why: "معرفة هذا الفرق يقضي على أشهر أخطاء الاستيراد التي تسبب شاشات بيضاء في React؛ مثل وضع أقواس معقوفة حول تصدير افتراضي بالخطأ مما يعيد `undefined` ويفجر التطبيق بخطأ `Element type is invalid`.",
      terms: [
        { term: "Default Export", pronunciation: "ديفولت إكسبورت", meaning: "تصدير افتراضي وحيد للملف؛ يستورد بدون أقواس وبأي اسم" },
        { term: "Named Export", pronunciation: "نيمد إكسبورت", meaning: "تصدير مسمى لعناصر متعددة؛ يستورد بنفس الاسم داخل أقواس {}" },
        { term: "Element type is invalid", pronunciation: "إليمنت تايب إنفاليد", meaning: "أشهر خطأ استيراد في React عند الخلط بين Default و Named export" }
      ],
      syntax: "// 1. التصدير الافتراضي (Default):\nexport default function App() {}\nimport App from './App.jsx'; // بدون أقواس\n\n// 2. التصدير المسمى (Named):\nexport function Button() {}\nexport const THEME = 'dark';\nimport { Button, THEME } from './components.jsx'; // بأقواس معقوفة {}",
      codeSimple: `// مقارنة عملية بين النمطين
// ملف 1: تصدير افتراضي لمكون رئيسي
// Button.jsx
import React from 'react';

export default function Button({ text }) {
  return <button>{text}</button>;
}

// ملف 2: تصدير مسمى لعدة أدوات ومكونات صغيرة
// icons.jsx
export function CheckIcon() { return <span>✅</span>; }
export function CloseIcon() { return <span>❌</span>; }

// ملف 3: الاستيراد في App.jsx
// استيراد الافتراضي بدون أقواس، واستيراد المسمى داخل أقواس معقوفة {}
import Button from './Button.jsx';
import { CheckIcon, CloseIcon } from './icons.jsx';`,
      codeAdvanced: `// نموذج يجمع النمطين معاً في نفس الملف بأناقة تامة
// مكون رئيسي مع مكونات فرعية تابعة له: Modal.jsx
import React from 'react';

// المكون الرئيسي يصدر كـ Default
export default function Modal({ title, children }) {
  return (
    <div className="modal-dialog">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// مكونات ملحقة تصدر كـ Named Exports
export function ModalHeader({ text }) {
  return <div className="modal-header">{text}</div>;
}

export function ModalFooter({ children }) {
  return <div className="modal-footer">{children}</div>;
}

// عند الاستيراد في ملف آخر:
// import Modal, { ModalHeader, ModalFooter } from './Modal.jsx';
console.log('يمكنك دمج الاستيراد الافتراضي والمسمى في نفس سطر import بأناقة!');`,
      output: `يمكنك دمج الاستيراد الافتراضي والمسمى في نفس سطر import بأناقة!`,
      mistakes: [
        {
          wrong: `// وضع أقواس معقوفة حول تصدير افتراضي:\n// في Button.jsx: export default function Button() {}\n// في App.jsx: import { Button } from './Button.jsx'; // ❌ خطأ فادح: Element type is invalid: expected a string or class/function but got: undefined!`,
          correct: `// الاستيراد الافتراضي يُكتب دائماً بدون أي أقواس معقوفة:\n// import Button from './Button.jsx'; // ✅ سليم ومثالي`,
          explanation: "عند وضع أقواس حول تصدير افتراضي، تبحث React عن خاصية مسماة اسمها Button ولا تجدها فتكون النتيجة undefined مما يكسر تصيير الشجرة."
        }
      ],
      bestPractices: [
        "استخدم التصدير الافتراضي `export default` للمكون الرئيسي المستقل في الملف لتسهيل استيراده وتوافقه مع التحميل الكسول `React.lazy`.",
        "استخدم التصدير المسمى `export const / export function` لملفات الأدوات المساعدة والمكتبات التي تحوي أكثر من دالة.",
        "حافظ على كتابة نفس اسم المكون عند استيراد التصدير الافتراضي لكي لا يربك زملاءك في الفريق بأسماء متضاربة لنفس المكون."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة التصدير الافتراضي والمسمى في React",
        concept: "Default vs Named Export Visual Comparison",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 التصدير الافتراضي (Default) مقابل المسمى (Named)│
└─────────────────────────────────────────────────────────────┘
  التصدير الافتراضي (export default):
  • في ملف المكون:    export default function App() {}
  • في ملف الاستيراد:  import App from './App'  (بدون أقواس، الاسم مرن)
  • العدد المسموح:     واحد فقط لكل ملف! 🥇
  
  التصدير المسمى (Named Export):
  • في ملف المكون:    export function Button() {}
  • في ملف الاستيراد:  import { Button } from './UI'  (بأقواس معقوفة إجبارية)
  • العدد المسموح:     عشرات الدوال في نفس الملف! 📚`
      }
    },
    {
      id: "5.2.i",
      title: "تقسيم الواجهة إلى مكونات صغيرة",
      englishTitle: "Deconstructing UI into Atomic Components: Practical Walkthrough",
      definition: "تقسيم الواجهة إلى مكونات صغيرة هي المهارة التحليلية الأهم لمهندس React؛ حيث يقوم بتفكيك تصميم الصفحة المعقدة (سواء من ملف Figma أو فكرة في الذهن) إلى مستويات هرمية تبدأ بالمكونات الذرية البسيطة (مثل الأزرار والحقول)، ثم المكونات الجزيئية (مثل بطاقة المنتج وشريط البحث)، ثم الكتل الكاملة (مثل الرأسية وقائمة التنقل)، ثم تجميعها في صفحة واحدة.",
      analogy: "تخيل أنك تنظر إلى وجبة غداء فاخرة: يمكنك أن تنظر إليها كطبق واحد ضخم، أو تفككها ذهنياً إلى مكوناتها الأصلية: (أرز، لحم متبل، صلصة طماطم، ومكسرات محمصة). الطباخ الماهر يجهز كل صنف في قدر مستقل بحرارته وتوابله الخاصة، ثم يسكبها معاً في الطبق النهائي بشكل بديع!",
      why: "الواجهات الضخمة غير المقسمة تصبح مستنقعاً للأخطاء ويصعب على المطور اختبارها أو إعادة استخدام أجزائها؛ بينما تقسيم الواجهة يجعل كل قطعة كود مستقلة، ومختبرة، وقابلة لإعادة الاستخدام في 20 صفحة أخرى في نفس المشروع.",
      terms: [
        { term: "UI Deconstruction", pronunciation: "يو آي ديكونستركشن", meaning: "تفكيك وتحليل الواجهة إلى وحدات مكوناتية صغيرة" },
        { term: "Atomic Design", pronunciation: "أتوميك ديزاين", meaning: "منهجية التصميم الذري (ذرات Atoms، جزيئات Molecules، كائنات Organisms)" },
        { term: "Container vs Presentational", pronunciation: "كونتينر ضد بريزنتيشنال", meaning: "فصل مكونات إدارة البيانات عن مكونات العرض الصامتة" }
      ],
      syntax: "// تسلسل هرمي للتفكيك:\n// 1. الذرات: <Avatar />, <Badge />, <Button />\n// 2. الجزيئات: <UserCard /> (يجمع الذرات الثلاث)\n// 3. الكتل: <TeamList /> (يكرر الجزيئات)\n// 4. الصفحة: <CompanyPage /> (تحضن الكتل)",
      codeSimple: `// تطبيق عملي لتفكيك بطاقة خبر إخباري إلى مكونات صغيرة
// 1. مكون التاريخ (ذرة صغيرة)
function PublishDate({ date }) {
  return <span className="news-date" style={{ color: '#94a3b8', fontSize: '0.8rem' }}>📅 {date}</span>;
}

// 2. مكون الوسم (ذرة صغيرة)
function CategoryTag({ label }) {
  return <span className="news-tag" style={{ background: '#38bdf820', color: '#38bdf8', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>#{label}</span>;
}

// 3. مكون البطاقة الذي يجمع الذرات معاً (جزيء مركب)
export default function NewsCard({ title, date, category }) {
  return (
    <article className="news-card" style={{ border: '1px solid #334155', borderRadius: '8px', padding: '14px', background: '#1e293b' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <CategoryTag label={category} />
        <PublishDate date={date} />
      </div>
      <h3 style={{ color: '#f8fafc', fontSize: '1.1rem' }}>{title}</h3>
    </article>
  );
}`,
      codeAdvanced: `// تجميع المكونات الصغيرة لبناء قسم الأخبار الكامل في الموقع
function NewsFeed() {
  const articles = [
    { id: 1, title: 'إطلاق الإصدار التجريبي لـ React 19', date: '29 أكتوبر 2026', category: 'تقنية' },
    { id: 2, title: 'أسرار تحسين أداء الواجهات بـ Vite', date: '28 أكتوبر 2026', category: 'تطوير' }
  ];

  return (
    <section className="feed-container" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ color: '#38bdf8', marginBottom: '16px' }}>📰 أحدث المقالات التقنية</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {articles.map(article => (
          <NewsCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
}

console.log('تم تفكيك وبناء الواجهة بنمط التصميم الذري المتناسق!');`,
      output: `[واجهة أخبار متكاملة مبنية من 3 مكونات صغيرة متناسقة يسهل تعديل أي جزء منها دون مساس بالآخر!]`,
      mistakes: [
        {
          wrong: `// الإفراط المبالغ فيه في التقسيم (Over-engineering): إنشاء ملف مستقل لوسم <p> لا يحتوي إلا على كلمة واحدة ولم يُستخدم إلا مرة واحدة!\n// ❌ تعقيد غير مبرر يشتت المشروع بكثرة الملفات دون فائدة!`,
          correct: `// قسّم المكون عندما ترى أنه: 1) يعاد استخدامه في مكان آخر، أو 2) كوده أصبح طويلاً ومعقداً، أو 3) يدير حالة مستقلة بذاتها ✅`,
          explanation: "التوازن هو سر الحكمة؛ لا تترك الملف يكبر ليصبح عملاقاً فوضوياً، وفي نفس الوقت لا تفرط في التفتيت لدرجة إنشاء 50 ملفاً لسطرين كود."
        }
      ],
      bestPractices: [
        "ارسم صناديق مربعة بالقلم والورقة حول عناصر تصميم الواجهة قبل كتابة أي كود لتحديد المكونات المحتملة.",
        "ابدأ من الأصغر إلى الأكبر (Bottom-Up) أو من الأكبر إلى الأصغر (Top-Down) بحسب ما يناسب تفكيرك.",
        "سمِّ كل مكون باسم يصف وظيفته وليس شكله البصري (مثال: `AuthorBio` أفضل من `SmallGrayBox`)."
      ],
      infographic: {
        title: "إنفوجرافيك: منهجية تفكيك الواجهة إلى مكونات ذرية",
        concept: "Atomic UI Decomposition Strategy",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 منهجية تفكيك الواجهة (UI Decomposition)      │
└─────────────────────────────────────────────────────────────┘
  المستوى 1: الذرات (Atoms):
  [ Avatar ]     [ Badge ]     [ Button ]
       │              │             │
       └──────────────┼─────────────┘
                      ▼
  المستوى 2: الجزيء المركب (Molecule):
  ┌────────────────────────────────────────┐
  │ [ Avatar ]   اسم المستخدم   [ Badge ]  │  ◄── <UserCard />
  │              [ Button ]                │
  └────────────────────────────────────────┘
                      │
                      ▼
  المستوى 3: الصفحة الكاملة (Organism / Page):
  شبكة متناسقة من بطاقات <UserCard /> تشكل دليل الفريق بالكامل!`
      }
    }
  ],
  quiz: [
    {
      id: "q5.2.1",
      question: "ما هي القاعدة الصارمة لتسمية مكونات React لكي يتعرف عليها مترجم JSX؟",
      options: [
        "يجب أن تبدأ بحرف صغير camelCase مثل myComponent.",
        "يجب أن تبدأ بحرف كبير إجبارياً بنمط PascalCase مثل UserProfile.",
        "يجب أن تحتوي على شرطة سفلية مثل user_profile.",
        "لا توجد أي قواعد؛ يمكنك تسميتها بأي حرف وأي رقم."
      ],
      correctAnswer: 1,
      explanation: "مترجم JSX يشترط بدء اسم المكون بحرف كبير (PascalCase)؛ فإذا بدأ بحرف صغير اعتبره وسم HTML مدمجاً في المتصفح وتجاهل دالتك البرمجية."
    },
    {
      id: "q5.2.2",
      question: "ما الفرق الأساسي بين استيراد Default Export واستيراد Named Export؟",
      options: [
        "Default Export يستورد بدون أقواس معقوفة وبأي اسم، بينما Named Export يشترط نفس الاسم الأصلي داخل أقواس معقوفة {}.",
        "Default Export يعمل فقط في الهواتف و Named Export يعمل في الحواسيب.",
        "Named Export أسرع بألف مرة من Default Export.",
        "لا يوجد فرق جوهري؛ كلاهما يقبل الأقواس المعقوفة دائماً."
      ],
      correctAnswer: 0,
      explanation: "التصدير الافتراضي يستورد بدون أقواس معقوفة وباسم حر يختاره المطور، بينما التصدير المسمى يستورد بنفس اسمه الدقيق داخل أقواس معقوفة `{ ComponentName }`."
    },
    {
      id: "q5.2.3",
      question: "ماذا يقصد بمبدأ تركيب المكونات (Component Composition) في React؟",
      options: [
        "دمج أكواد CSS و JavaScript في ملف نصي واحد مضغوط.",
        "بناء واجهات معقدة ومرنة من خلال احتضان وتجميع مكونات بسيطة ومستقلة معاً (مثل استخدام children أو Slots) بدلاً من وراثة الفئات المعقدة.",
        "إعادة تشغيل المتصفح تلقائياً عند حدوث أخطاء برمجية.",
        "تشفير صور الموقع لتقليل استهلاك الإنترنت."
      ],
      correctAnswer: 1,
      explanation: "التركيب (Composition) هو تفضيل جمع المكونات البسيطة كقطع ليجو وحواضن محتوى بدلاً من وراثة الفئات الصلبة المعقدة (Composition over Inheritance)."
    }
  ],
  exercise: {
    title: "تمرين عملي: تفكيك بطاقة مستخدم وتصميم مكونات ذرية بنمط PascalCase والتركيب",
    description: "المطلوب بناء بطاقة ملف شخصي لمطور `DeveloperProfileCard` من خلال تفكيكها إلى 3 مكونات مستقلة: 1) مكون الصورة الرمزية `UserAvatar`، 2) مكون شارة المهارة `SkillBadge`، 3) ومكون البطاقة الجامع `DeveloperProfileCard` الذي يركب المكونات معاً ويدعم تمرير قائمة مهارات ديناميكية.",
    starterCode: `// 1. صمم مكون الصورة الرمزية UserAvatar
function UserAvatar({ imgUrl, altText }) {
  // المطلوب: إرجاع صورة دائرية بنمط JSX السليم
}

// 2. صمم مكون شارة المهارة SkillBadge
function SkillBadge({ skillName }) {
  // المطلوب: إرجاع وسم أنيق يحمل اسم المهارة
}

// 3. صمم المكون الرئيسي الجامع DeveloperProfileCard
export default function DeveloperProfileCard({ developer }) {
  // المطلوب: تركيب المكونين السابقين مع بيانات المطور
}`,
    hints: [
      "في UserAvatar: استخدم `style={{ borderRadius: '50%', width: 60, height: 60 }}` مع إغلاق ذاتي `/>`.",
      "في SkillBadge: استخدم `background: '#38bdf820', color: '#38bdf8'`.",
      "في البطاقة الرئيسية: استخدم `developer.skills.map(s => <SkillBadge key={s} skillName={s} />)`."
    ],
    solution: `import React from 'react';

// 1. مكون الذرة الأولى: الصورة الرمزية الدائرية
function UserAvatar({ imgUrl, altText }) {
  return (
    <img 
      src={imgUrl} 
      alt={altText} 
      style={{ width: 64, height: 64, borderRadius: '50%', border: '2px solid #38bdf8', objectFit: 'cover' }} 
    />
  );
}

// 2. مكون الذرة الثانية: شارة المهارة المصغرة
function SkillBadge({ skillName }) {
  return (
    <span style={{ 
      background: 'rgba(56, 189, 248, 0.15)', 
      color: '#38bdf8', 
      border: '1px solid rgba(56, 189, 248, 0.3)', 
      padding: '3px 8px', 
      borderRadius: '6px', 
      fontSize: '0.75rem',
      fontWeight: 'bold' 
    }}>
      {skillName}
    </span>
  );
}

// 3. المكون الجزيئي المركب: بطاقة المطور الشاملة
export default function DeveloperProfileCard({ developer }) {
  return (
    <article style={{ 
      maxWidth: '380px', 
      padding: '20px', 
      background: '#1e293b', 
      border: '1px solid #334155', 
      borderRadius: '12px', 
      color: '#f8fafc',
      fontFamily: 'system-ui'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
        {/* تركيب مكون الصورة الرمزية */}
        <UserAvatar imgUrl={developer.avatar} altText={developer.name} />
        
        <div>
          <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#f8fafc' }}>{developer.name}</h3>
          <p style={{ margin: '2px 0 0 0', color: '#94a3b8', fontSize: '0.85rem' }}>{developer.jobTitle}</p>
        </div>
      </div>

      <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '14px' }}>
        {developer.bio}
      </p>

      {/* تركيب مكونات الشارات وتكرارها بدالة map */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {developer.skills.map((skill) => (
          <SkillBadge key={skill} skillName={skill} />
        ))}
      </div>
    </article>
  );
}`
  },
  infographic: {
    title: "إنفوجرافيك الموضوع: الدليل الهندسي لبناء وتسمية مكونات React",
    badge: "هندسة المكونات 1.0",
    summary: "المكونات هي قلب React النابض. إتقان صياغتها الوظيفية، والالتزام بقاعدة PascalCase الصارمة، وتبني مبدأ تركيب المكونات وفصل الملفات يصنع منك مهندس واجهات عالمي المستوى.",
    points: [
      "What is a Component: دالة نقية تقبل Props وتعيد JSX يصف الشاشة.",
      "Functional Standard: المكونات الوظيفية مع Hooks هي المعيار الوحيد لـ React الحديثة.",
      "PascalCase Mandate: يبدأ اسم المكون بحرف كبير حتماً لتمييزه عن وسوم HTML العادية.",
      "Import & Export: تنظيم الملفات بـ export default للمكون الرئيسي و named للأدوات.",
      "Component Composition: تركيب المكونات البسيطة معاً بدلاً من الوراثة المعقدة.",
      "Reusable UI: تجريد المكونات عبر الخصائص لتخدم مئات الشاشات في مشروعك."
    ]
  }
};
