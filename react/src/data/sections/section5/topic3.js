// src/data/sections/section5/topic3.js
// الموضوع 3: الخصائص Props (Props, Communication & Children)

export const SECTION_5_TOPIC_3 = {
  id: "5.3",
  title: "الخصائص Props",
  englishTitle: "React Props & Data Passing",
  description: "قنوات الاتصال وشرايين تغذية المكونات بالبيانات: تمرير النصوص والأرقام والكائنات والدوال، تفكيك الـ Props، القيم الافتراضية، حتمية القراءة فقط Read-Only، القوة السحرية لخاصية children، والمقارنة الحاسمة بين Props و State.",
  icon: "Sliders",
  subtopics: [
    {
      id: "5.3.a",
      title: "مفهوم Props",
      englishTitle: "What are Props? (Component Arguments & Configuration)",
      definition: "الخصائص (Props - اختصار Properties) هي وسيلة نقل وتمرير البيانات المعتمدة في React من المكون الأب إلى المكون الابن؛ تشبه تماماً معاملات الدوال العادية (Function Arguments) وسمات وسوم HTML، وتسمح للمكون بأن يكون مرناً وقابلاً للتخصيص بحسب البيانات التي يتلقاها من الخارج.",
      analogy: "تخيل أن المكون هو 'طاهٍ ماهر في مطعم': إذا طلبت منه عجة بيض بالجبن، فإنه يحتاج إلى (بيض، جبن) كمدخلات يضعها في المقلاة ليطهوها لك. كيس المكونات الذي تعطيه للطاهي هو الـ Props؛ هو لا يشتري البيض من جيبه، بل ينتظر منك تمرير المكونات إليه ليصنع لك الطبق المطلوب!",
      why: "بدون الـ Props، ستكون كل المكونات صامتة وثابتة وتطبع نفس الكلمات الحرفية دائماً! الـ Props هي التي تحول المكون من تمثال حجري ميت إلى أداة برمجية ديناميكية حية تعرض أسماء مستخدمين مختلفين، وأسعاراً متغيرة، وصوراً متباينة.",
      terms: [
        { term: "Props (Properties)", pronunciation: "بروبس", meaning: "الخصائص؛ مدخلات المكون الممررة له من المكون الأب" },
        { term: "Parent-to-Child", pronunciation: "بارنت تو تشايلد", meaning: "اتجاه سريان الـ Props الحتمي من الأعلى للأسفل دائماً" },
        { term: "Unidirectional Flow", pronunciation: "يونيديركشنال فلو", meaning: "تدفق البيانات أحادي الاتجاه الصارم في React" }
      ],
      syntax: "// 1. الأب يمرر الخاصية مثل سمات HTML:\n<UserCard name=\"طارق\" age={28} />\n\n// 2. الابن يستقبل كائن الـ props كأول معامل في دالته:\nfunction UserCard(props) {\n  return <h2>{props.name} ({props.age} سنة)</h2>;\n}",
      codeSimple: `// مكون ابن يستقبل كائن props كامل
import React from 'react';

function ProductPrice(props) {
  // قراءة الخصائص من كائن props
  return (
    <div className="price-tag">
      <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#10b981' }}>
        {props.amount}
      </span>
      <span style={{ color: '#94a3b8', marginRight: '4px' }}>
        {props.currency}
      </span>
    </div>
  );
}

// المكون الأب يمرر الخصائص
export default function StoreItem() {
  return (
    <div style={{ padding: '16px', background: '#1e293b', borderRadius: '8px' }}>
      <h3>كتاب احتراف React 19</h3>
      {/* تمرير القيم للابن */}
      <ProductPrice amount={120} currency="ريال سعودي" />
    </div>
  );
}`,
      codeAdvanced: `// إثبات ما هو كائن props في حقيقته: استعراض الكائن البرمجي
function DiagnosticComponent(props) {
  console.log('كائن props المستلم في الابن هو كائن JavaScript عادي 100%:');
  console.log(props);
  // سيعرض: { title: 'مرحبا', count: 5, isFeatured: true }

  return <div>تفقد وحدة التحكم (Console) لمشاهدة كائن الـ props!</div>;
}

// تجربة استدعائه
function App() {
  return <DiagnosticComponent title="مرحبا" count={5} isFeatured={true} />;
}`,
      output: `كائن props المستلم في الابن هو كائن JavaScript عادي 100%:\n{ title: 'مرحبا', count: 5, isFeatured: true }`,
      mistakes: [
        {
          wrong: `// محاولة تعديل قيمة الخاصية داخل المكون الابن مباشرة:\nfunction BadBadge(props) {\n  props.count = props.count + 1; // ❌ خطأ فادح: Cannot assign to read only property 'count' of object '#<Object>'! \n  return <span>{props.count}</span>;\n}`,
          correct: `// الـ Props للقراءة فقط (Read-Only) وغير قابلة للتعديل؛ إذا أردت تعديلها فاستخدم State في الأب أو دالة callback ✅`,
          explanation: "قانون React الأقدس: المكون يجب أن يكون دالة نقية بالنسبة لخصائصه (Pure regarding its props)؛ وتعديل كائن props ممنوع تماماً."
        }
      ],
      bestPractices: [
        "مرر فقط البيانات التي يحتاجها المكون الابن فعلياً ولا تمرر كائنات ضخمة غير مستخدمة.",
        "اختر أسماء معبرة للـ Props تصف طبيعة المعلومة (مثل `userEmail` بدلاً من `data1`).",
        "تذكر أن تدفق الـ Props يسير في اتجاه واحد هابط دائماً: من الأب إلى الابن."
      ],
      infographic: {
        title: "إنفوجرافيك: كيف تسري الـ Props من المكون الأب إلى الابن؟",
        concept: "The Props Pipeline Architecture",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 شريان الـ Props أحادي الاتجاه                │
└─────────────────────────────────────────────────────────────┘
  المكون الأب (Parent):
  <UserBadge name="عمر" role="مدير" />
                 │
                 │  (كائن الخصائص props: { name: 'عمر', role: 'مدير' })
                 ▼
  المكون الابن (Child):
  function UserBadge(props) {
    return <span>{props.name} - {props.role}</span>;
  }
  
  قاعدة حتمية:
  البيانات تهبط من الأعلى للأسفل كالشلال ولا تعود للخلف أبداً 🌊`
      }
    },
    {
      id: "5.3.b",
      title: "تمرير النصوص والأرقام",
      englishTitle: "Passing Strings vs Numbers & Booleans: Quotes vs Curly Braces",
      definition: "عند تمرير الخصائص في JSX، يتم تمرير النصوص الثابتة الحرفية باستخدام علامات التنصيص المزدوجة `prop=\"نص\"` مباشرة دون أقواس. بينما تشترط React تمرير أي نوع بيانات آخر (الأرقام الحسابية، القيم المنطقية true/false، العمليات، والمتغيرات) داخل الأقواس المعقوفة `prop={100}` و `prop={true}`.",
      analogy: "تخيل أنك ترسل طردين بالبريد:\n• الطرد الأول (نص): يحتوي على رسالة ورقية عادية مكتوبة بخط اليد؛ تضعها في ظرف ورقي بسيط (علامات التنصيص \" \") لأنها مجرد نص مقروء.\n• الطرد الثاني (أرقام وحسابات): يحتوي على شيك بنكي أو بطاقة صراف آلي ذكية تحتاج لآلة حاسبة لتشغيلها؛ تضعها في صندوق إلكتروني محكم (الأقواس المعقوفة {}) لكي يفهم النظام أنها قيمة رياضية حقيقية وليست مجرد ورقة كتابة عادية!",
      why: "هو السبب وراء أشهر الأخطاء الحسابية للمبتدئين! فإذا مررت رقماً هكذا `age=\"25\"`، سيعامله JavaScript كنص، وإذا حاولت جمع `props.age + 5` ستكون النتيجة الكارثية `'255'` بدلاً من `30`!",
      terms: [
        { term: "String Prop", pronunciation: "سترينغ بروب", meaning: "خاصية نصية تُمرر بين علامات تنصيص مزدوجة \"...\"" },
        { term: "Number Prop", pronunciation: "نمبر بروب", meaning: "خاصية رقمية تُمرر إجبارياً داخل أقواس معقوفة {123}" },
        { term: "Type Coercion", pronunciation: "تايب كوإيرشن", meaning: "التحويل القسري لنوع البيانات الذي يحدث عند الخلط بين النصوص والأرقام" }
      ],
      syntax: "// 1. تمرير نص (علامات تنصيص فقط):\n<Card title=\"هاتف حديث\" />\n\n// 2. تمرير رقم (أقواس معقوفة إجبارية):\n<Card price={1500} count={3} />\n\n// 3. تمرير قيمة منطقية (أقواس معقوفة أو اختصار):\n<Card inStock={true} />  {/* أو كتابة inStock فقط */}",
      codeSimple: `// توضيح الفرق العملي بين تمرير الرقم كنص وتمريره كرقم حقيقي
function PriceCalculator({ price, taxPercent }) {
  // عملية حسابية صريحة
  const finalTotal = price + (price * (taxPercent / 100));

  return (
    <div className="calc-result">
      <p>السعر الأساسي: {price} ر.س</p>
      <p>الإجمالي مع الضريبة: {finalTotal} ر.س</p>
    </div>
  );
}

// في المكون الأب: نمرر الأرقام داخل {} دائماً
export default function App() {
  return (
    <div>
      {/* تمرير الأرقام بنقاء بالأقواس المعقوفة */}
      <PriceCalculator price={100} taxPercent={15} />
    </div>
  );
}`,
      codeAdvanced: `// محاكاة لكارثة تمرير الأرقام كنصوص (String Concatenation Bug)
function BuggyAgeDisplay(props) {
  // إذا مرر الأب age="20" بدلاً من age={20}:
  const nextYearAge = props.age + 1;

  return (
    <div>
      {/* ستطبع على الشاشة "201" بدلاً من 21 لأن علامة + دمجت النصين! */}
      <p>عمرك في العام القادم: {nextYearAge}</p>
    </div>
  );
}

console.log('تحذير: تمرير "20" + 1 يعطي "201"! دائماً مرر الأرقام داخل {20} لتفادي الكارثة!');`,
      output: `تحذير: تمرير "20" + 1 يعطي "201"! دائماً مرر الأرقام داخل {20} لتفادي الكارثة!`,
      mistakes: [
        {
          wrong: `// تمرير الأرقام أو البوليان داخل علامات تنصيص:\n// <Item count="5" isAvailable="false" /> // ❌ "false" كنص تعتبر Truthy في JavaScript وسيعتبرها متوفرة!`,
          correct: `// استخدام الأقواس المعقوفة لكافة الأرقام والقيم المنطقية:\n// <Item count={5} isAvailable={false} /> // ✅ سليم ومثالي`,
          explanation: "في لغة JavaScript، أي نص غير فارغ بما في ذلك النص `\"false\"` يعتبر قيمة صادقة (Truthy)! ولذلك يجب تمرير القيم المنطقية داخل أقواس معقوفة `{false}`."
        }
      ],
      bestPractices: [
        "استخدم علامات التنصيص `\"...\"` فقط وفقط للنصوص اللغوية الصرفة (مثل العناوين والأسماء).",
        "استخدم الأقواس المعقوفة `{...}` للأرقام، والبوليان، والمتغيرات، والعمليات الحسابية.",
        "يمكنك اختصار القيم المنطقية الإيجابية `true` بكتابة اسم الخاصية فقط: `<Input disabled />` تعادل `<Input disabled={true} />`."
      ],
      infographic: {
        title: "إنفوجرافيك: متى نستخدم علامات التنصيص ومتى نستخدم الأقواس المعقوفة في الـ Props؟",
        concept: "Quotes vs Curly Braces Decision",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 متى نستخدم \" \" ومتى نستخدم { } في الـ Props؟│
└─────────────────────────────────────────────────────────────┘
  علامات التنصيص \" \":
  تستخدم حصرياً للنصوص الثابتة الحرفية فقط:
  • title="متجري"
  • placeholder="ابحث هنا..."
  
  الأقواس المعقوفة { }:
  تستخدم لكل ما عدا ذلك بلا استثناء:
  • الأرقام:            price={100}
  • القيم المنطقية:     isActive={false}
  • المتغيرات:          userName={currentName}
  • العمليات الحسابية:  total={qty * price}`
      }
    },
    {
      id: "5.3.c",
      title: "تمرير الكائنات والمصفوفات",
      englishTitle: "Passing Objects & Arrays: Complex Data Structures as Props",
      definition: "يمكنك في React تمرير هياكل بيانات معقدة كالمصفوفات والكائنات كـ Props للمكونات بسهولة بوضعها داخل الأقواس المعقوفة `items={[1, 2, 3]}` أو `user={{ name: 'سالم', role: 'admin' }}`، مما يسمح للمكون باستعراض قوائم كاملة أو الوصول لخصائص كائن متعدد الحقول.",
      analogy: "تخيل أنك تنقل أمتعتك للمطار: يمكنك تسليم حقيبة صغيرة فيها ساعة يد (خاصية بسيطة)، أو تسليم 'حقيبة سفر ضخمة متكاملة' تحتوي على ملابسك، وأحذيتك، وأدواتك (كائن Object أو مصفوفة Array). المكون يستلم حقيبة السفر كاملة في يده ويفتحها ليستخرج ما يحتاجه!",
      why: "يوفر عليك كتابة عشرات الخصائص المنفصلة؛ فبدلاً من تمرير `<Profile name={u.name} email={u.email} phone={u.phone} city={u.city} />`، يمكنك ببساطة تمرير الكائن كحزمة واحدة نظيفة: `<Profile user={u} />`.",
      terms: [
        { term: "Complex Props", pronunciation: "كومبلكس بروبس", meaning: "تمرير مصفوفات وكائنات معقدة كخصائص للمكونات" },
        { term: "Object Prop", pronunciation: "أوبجكت بروب", meaning: "تمرير كائن يحمل خصائص متعددة كخاصية واحدة" },
        { term: "Array Prop", pronunciation: "أراي بروب", meaning: "تمرير مصفوفة عناصر ليعرضها المكون كقائمة" }
      ],
      syntax: "// 1. تمرير مصفوفة:\n<TagsList tags={['React', 'Vite', 'Tailwind']} />\n\n// 2. تمرير كائن:\n<UserCard user={{ name: 'خالد', score: 95 }} />",
      codeSimple: `// مكون يستقبل مصفوفة سلاسل نصية ويعرضها كقائمة
import React from 'react';

function SkillsList({ skills }) {
  return (
    <ul className="skills-tray" style={{ display: 'flex', gap: '8px', listStyle: 'none' }}>
      {/* تكرار عناصر المصفوفة الممررة عبر الـ Props */}
      {skills.map((skill, index) => (
        <li key={index} style={{ background: '#334155', padding: '4px 10px', borderRadius: '4px', color: '#38bdf8' }}>
          {skill}
        </li>
      ))}
    </ul>
  );
}

// المكون الأب يمرر مصفوفة كاملة
export default function Portfolio() {
  const developerSkills = ['JavaScript', 'React 19', 'Next.js', 'CSS Grid'];

  return (
    <div>
      <h3>مهارات المطور:</h3>
      <SkillsList skills={developerSkills} />
    </div>
  );
}`,
      codeAdvanced: `// خدعة احترافية: استخدام معامل الانتشار (Spread Operator) لتمرير كل خصائص الكائن كـ Props دفعة واحدة!
function ProductBadge({ title, price, inStock, rating }) {
  return (
    <div className="badge">
      <h4>{title} - {price} $</h4>
      <span>التقييم: {rating} ⭐</span>
    </div>
  );
}

function ProductShowcase() {
  const productData = {
    title: 'ساعة يد ذكية',
    price: 250,
    inStock: true,
    rating: 4.8
  };

  return (
    <div>
      {/* بدلاً من كتابة title={productData.title} price={productData.price}... */}
      {/* نستخدم Spread لتمرير كل حقول الكائن كـ Props مستقلة في سطر واحد ساحر! */}
      <ProductBadge {...productData} />
    </div>
  );
}`,
      output: `[عرض مصفوفة المهارات كشارات أنيقة + تمرير كائن المنتج بالكامل في سطر واحد بفضل Spread!]`,
      mistakes: [
        {
          wrong: `// تعريف كائنات مضمنة مباشرة داخل JSX دون داعٍ في مكونات ثقيلة:\n// <HeavyChart config={{ theme: 'dark', animated: true }} /> // ⚠️ ينشئ كائناً جديداً في الذاكرة في كل تصيير مما يفشل تحسينات React.memo!`,
          correct: `// تعريف كائن الإعدادات الثابت خارج دالة المكون أو تثبيته بـ useMemo:\n// const chartConfig = { theme: 'dark', animated: true };\n// <HeavyChart config={chartConfig} /> // ✅ ثابت المرجع في الذاكرة وموفر للأداء`,
          explanation: "كتابة `config={{ ... }}` تنشئ كائناً جديداً بعنوان ذاكرة مختلف في كل تصيير، مما يكسر المقارنة السطحية لـ React."
        }
      ],
      bestPractices: [
        "استخدم تفكيك الخصائص `const { user } = props` أو في معلمات الدالة مباشرة لسهولة الوصول للبيانات.",
        "استخدم خاصية Spread `<Component {...data} />` بحذر عندما تتطابق أسماء خصائص الكائن تماماً مع أسماء الـ Props المتوقعة.",
        "تأكد دائماً من أن المصفوفة الممررة ليست null أو undefined قبل استخدام دالة `.map()` عبر استخدام قيمة افتراضية مثل `skills = []`."
      ],
      infographic: {
        title: "إنفوجرافيك: طرق تمرير الكائنات والمصفوفات كـ Props في React",
        concept: "Passing Objects, Arrays & Spread Props",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 تمرير البيانات المعقدة كـ Props              │
└─────────────────────────────────────────────────────────────┘
  الطريقة 1: تمرير الكائن ككتلة واحدة مسمّاة:
  <UserProfile user={userObj} />
  └── الابن يستلم: props.user.name و props.user.email
  
  الطريقة 2: تفكيك الكائن كخصائص مستقلة بـ Spread (...):
  <UserProfile {...userObj} />
  └── الابن يستلمها مباشرة كـ props منفصلة: props.name و props.email ⚡`
      }
    },
    {
      id: "5.3.d",
      title: "تمرير الدوال (Event Callbacks)",
      englishTitle: "Passing Functions as Props: Child-to-Parent Communication",
      definition: "تمرير الدوال كـ Props هو النمط الهندسي القياسي في React الذي يسمح للمكون الابن بالتواصل مع المكون الأب وإبلاغه بحدوث حدث (مثل نقر زر، أو حذف عنصر، أو إرسال نموذج)؛ حيث يقوم الأب بتعريف دالة ويمرر مرجعها كـ Prop للابن، ويقوم الابن باستدعاء تلك الدالة وتمرير البيانات إليها كمعاملات.",
      analogy: "تخيل أن الأب أعطى ابنه الصغير جهاز لاسلكي (Walkie-Talkie) وقال له: 'إذا وصل رجل البريد، اضغط الزر الأحمر وتحدث معي'. جهاز اللاسلكي هو الدالة الممررة؛ الابن لا يستلم الطرد بنفسه ولا يوقع في الدفتر، بل يضغط الزر (يستدعي الدالة) ليعلم الأب في الأعلى بما حدث فيتولى الأب إدارة الموقف!",
      why: "يحل معضلة تدفق البيانات أحادي الاتجاه (One-Way Data Flow)؛ فبما أن البيانات تسير من الأعلى للأسفل فقط، فإن تمرير دالة Callback هو الطريقة الشرعية الوحيدة التي تمكن المكونات الفرعية في الأسفل من طلب تغيير الحالة (State) الموجودة في الأعلى.",
      terms: [
        { term: "Callback Prop", pronunciation: "كول باك بروب", meaning: "خاصية تحمل مرجعاً لدالة يستدعيها المكون الابن" },
        { term: "Child-to-Parent Communication", pronunciation: "تشايلد تو بارنت", meaning: "إبلاغ المكون الأب بالأحداث عبر استدعاء الدوال الممررة" },
        { term: "Event Handler Prop", pronunciation: "إيفنت هاندلر بروب", meaning: "خاصية تبدأ عادة بكلمة on مثل onSelect أو onDelete" }
      ],
      syntax: "// 1. الأب يمرر دالة معالجة:\n<DeleteItemBtn onDelete={() => handleDelete(item.id)} />\n\n// 2. الابن يستدعي الدالة عند حدث معين:\nfunction DeleteItemBtn({ onDelete }) {\n  return <button onClick={onDelete}>حذف</button>;\n}",
      codeSimple: `// نموذج عملي لتواصل الابن مع الأب عبر تمرير دالة
import React, { useState } from 'react';

// المكون الابن: زر بسيط يستقبل دالة ويستدعيها عند النقر
function LikeButton({ onLikeClicked, currentLikes }) {
  return (
    <button 
      onClick={onLikeClicked}
      style={{ background: '#ec4899', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}
    >
      💖 إعجاب ({currentLikes})
    </button>
  );
}

// المكون الأب: يملك الحالة والدالة ويمررها للابن
export default function Post() {
  const [likes, setLikes] = useState(10);

  const handleIncrementLike = () => {
    // الأب هو من يملك السلطة لتعديل حالته
    setLikes(likes + 1);
  };

  return (
    <div style={{ padding: '20px', background: '#1e293b', borderRadius: '8px' }}>
      <h2>منشور تقني رائع</h2>
      {/* تمرير الدالة كـ Prop للابن */}
      <LikeButton onLikeClicked={handleIncrementLike} currentLikes={likes} />
    </div>
  );
}`,
      codeAdvanced: `// تمرير بيانات من الابن إلى الأب كمعاملات للدالة الممررة (Child Sending Data Up)
function StarRating({ onSelectRating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-picker">
      {stars.map((star) => (
        <button 
          key={star} 
          // الابن يستدعي دالة الأب ويمرر لها رقم النجمة التي اختارها المستخدم!
          onClick={() => onSelectRating(star)}
          style={{ cursor: 'pointer', fontSize: '1.2rem', margin: '0 2px' }}
        >
          ⭐
        </button>
      ))}
    </div>
  );
}

// الأب يستقبل التقييم المختار من الابن ويحدث حالته
function ProductReviewPage() {
  const [rating, setRating] = useState(0);

  const handleUserRate = (selectedStars) => {
    console.log('الأب استلم التقييم المختار من الابن:', selectedStars);
    setRating(selectedStars);
  };

  return (
    <div>
      <h3>قيم هذا المنتج:</h3>
      <StarRating onSelectRating={handleUserRate} />
      {rating > 0 && <p>شكراً لتقييمك: {rating} من 5 نجوم!</p>}
    </div>
  );
}`,
      output: `الأب استلم التقييم المختار من الابن: 5\nشكراً لتقييمك: 5 من 5 نجوم!`,
      mistakes: [
        {
          wrong: `// استدعاء الدالة بالأقواس فوراً أثناء تمريرها كـ Prop للأبناء:\n// <Button onClick={handleClick()} /> // ❌ كارثة! تنفذ الدالة فوراً أثناء التصيير وتسبب حلقة لا نهائية!`,
          correct: `// تمرير مرجع الدالة فقط دون أقواس أو كدالة سهمية:\n// <Button onClick={handleClick} /> أو <Button onClick={() => handleClick(id)} /> // ✅ سليم ومثالي`,
          explanation: "وضع الأقواس `()` يستدعي الدالة في نفس لحظة رسم الصفحة وليس عند نقر المستخدم؛ لذلك يجب تمرير اسم الدالة فقط كمرجع."
        }
      ],
      bestPractices: [
        "اتبع النمط القياسي في التسميات: ابدأ اسم الدالة في الأب بـ `handle` (مثل `handleDelete`)، واسم الخاصية الممررة للابن بـ `on` (مثل `onDelete`).",
        "استخدم دالة سهمية مجهولة إذا كنت تحتاج لتمرير معرّف أو وسيط للدالة: `onClick={() => onRemove(item.id)}`.",
        "اجعل المكون الابن غبياً يكتفي باستدعاء الدالة؛ ودع الأب يتكفل بالمنطق وتحديث قواعد البيانات."
      ],
      infographic: {
        title: "إنفوجرافيك: كيف يتواصل الابن مع الأب عبر تمرير الدوال؟",
        concept: "Child-to-Parent Event Callback Flow",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 تواصل الابن مع الأب (Callback Pattern)        │
└─────────────────────────────────────────────────────────────┘
  1. الأب يملك الحالة ويمرر دالة هابطة:
     const [count, setCount] = useState(0);
     <Child onIncrement={() => setCount(count + 1)} />
                     │
                     │  (تمرير الدالة كـ Prop للأسفل ⬇️)
                     ▼
  2. الابن يستدعي الدالة عند حدث المستخدم:
     function Child({ onIncrement }) {
       return <button onClick={onIncrement}>زيادة</button>;
     }
                     │
                     ▲  (إشارة الحدث تصعد للأعلى ⬆️)
  3. تتحدث حالة الأب ويعاد تصيير الشجرة بنجاح!`
      }
    },
    {
      id: "5.3.e",
      title: "استخدام Destructuring مع Props",
      englishTitle: "Props Destructuring: Clean & Elegant Component Declarations",
      definition: "استخدام التفكيك (Destructuring) مع Props هو أسلوب كتابة عصري وأنيق في React يتيح لك استخراج الخصائص المطلوبة مباشرة من كائن الـ Props وتخزينها في متغيرات محلية مستقلة في نفس سطر تعريف الدالة `function Card({ title, price })` بدلاً من تكرار كلمة `props.title` و `props.price` في كل سطر.",
      analogy: "تخيل أنك استلمت حقيبة مدرسية فيها (دفتر، قلم، ممحاة): بدلاً من أن تضع الحقيبة على مكتبك وكلما احتجت أن تكتب كلمة تقول: 'افتح الحقيبة، اسحب القلم، اكتب، ثم أعد القلم للحقيبة'، تقوم فور جلوسك بتفريغ الدفتر والقلم على الطاولة أمامك لتلتقطهما مباشرة في ثانية واحدة!",
      why: "يجعل كود المكونات فائق النظافة وقصير الحجم؛ والأهم من ذلك أنه يوفر 'توثيقاً فورياً' لأي مبرمج يقرأ الملف ليعرف من السطر الأول بالضبط ما هي الخصائص التي يتوقعها هذا المكون دون الحاجة للبحث في أسطر الـ JSX بالأسفل.",
      terms: [
        { term: "Props Destructuring", pronunciation: "بروبس ديستركتشرينغ", meaning: "تفكيك كائن الخصائص مباشرة في معاملات الدالة" },
        { term: "Clean Code", pronunciation: "كلين كود", meaning: "كود نظيف ومختصر وخالٍ من التكرار والزوائد" },
        { term: "Self-Documenting Code", pronunciation: "سيلف دوكيومنتنغ", meaning: "كود يشرح نفسه بنفسه من سطر التعريف الأول" }
      ],
      syntax: "// 1. التفكيك المباشر في سطر تعريف المكون (المعيار الأكثر احترافية):\nfunction UserBadge({ name, avatar, role = 'عضو' }) {\n  return <div>{name} ({role})</div>;\n}\n\n// 2. التفكيك داخل جسم الدالة:\nfunction UserBadge(props) {\n  const { name, avatar } = props;\n  return <div>{name}</div>;\n}",
      codeSimple: `// مقارنة بين الكود بدون تفكيك والكود بعد التفكيك
// ❌ 1. أسلوب مكرر بدون تفكيك:
function OldProductCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <span>{props.price} ر.س</span>
    </div>
  );
}

// ✅ 2. الأسلوب العصري الأنيق بالتفكيك المباشر:
function ModernProductCard({ title, description, price }) {
  return (
    <div>
      {/* استخدام المتغيرات مباشرة بنظافة تامة */}
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{price} ر.س</span>
    </div>
  );
}

export default ModernProductCard;`,
      codeAdvanced: `// التفكيك المتقدم: استخراج خصائص محددة وجمع البقية بمعامل Rest (...)
// نمط شهير جداً عند بناء مكونات أزرار أو حقول مخصصة
function CustomInput({ label, error, ...nativeHtmlProps }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      {/* تمرير كافة الخصائص المتبقية (type, placeholder, value, onChange) لحقل الـ HTML دفعة واحدة! */}
      <input className={error ? 'input-error' : 'input-normal'} {...nativeHtmlProps} />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
}

// استخدام المكون مع خصائص متعددة بسلاسة
function LoginForm() {
  return (
    <CustomInput 
      label="البريد الإلكتروني:"
      type="email"
      placeholder="user@example.com"
      required
      autoFocus
    />
  );
}`,
      output: `[كود فائق النظافة: تم تفكيك label و error ومررت باقي الخصائص (type, required, autoFocus) للـ input تلقائياً!]`,
      mistakes: [
        {
          wrong: `// نسيان الأقواس المعقوفة {} أثناء التفكيك في سطر الدالة:\nfunction BadBadge(name, role) { // ❌ خطأ فادح! سيعتبر المتغير الأول name هو كائن props بأكمله، وسيكون role مساوياً undefined!\n  return <div>{name}</div>;\n}`,
          correct: `// وضع الأقواس المعقوفة دائماً {} لأن دالة المكون تستقبل كائناً واحداً فقط:\nfunction GoodBadge({ name, role }) { // ✅ سليم ومثالي\n  return <div>{name}</div>;\n}`,
          explanation: "دوال مكونات React تستقبل دائماً معاملاً واحداً فقط هو كائن الـ Props؛ ولتفكيك خصائصه في سطر الدالة يجب إحاطتها بأقواس معقوفة `{ prop1, prop2 }`."
        }
      ],
      bestPractices: [
        "اعتمد التفكيك في سطر الدالة دائماً كخيارك الافتراضي الأول في كل مكون تكتبه.",
        "حدد قيماً افتراضية للخصائص الاختيارية أثناء التفكيك: `{ title, variant = 'primary' }`.",
        "استخدم معامل Rest `...rest` لجمع الخصائص المتبقية وتمريرها للعنصر الجذري."
      ],
      infographic: {
        title: "إنفوجرافيك: قوة تفكيك الـ Props في سطر واحد",
        concept: "Props Destructuring Transformation",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 سحر تفكيك الـ Props في سطر التعريف           │
└─────────────────────────────────────────────────────────────┘
  الكود القديم المكرر الممل:
  function UserCard(props) {
    return <h1>{props.name}</h1> <p>{props.bio}</p>;
  }
                 │
                 ▼ (التحول للتفكيك المباشر)
  الكود الحديث فائق النظافة:
  function UserCard({ name, bio }) {
    return <h1>{name}</h1> <p>{bio}</p>;
  }
  (توفير للكتابة وتوثيق فوري لخصائص المكون في السطر الأول!) 🎯`
      }
    },
    {
      id: "5.3.f",
      title: "القيم الافتراضية للخصائص",
      englishTitle: "Default Props: Fallback Values with JS Default Parameters",
      definition: "القيم الافتراضية للخصائص (Default Props) هي قيم احتياطية محددة مسبقاً يتم تفعيلها واستخدامها تلقائياً إذا لم يقم المكون الأب بتمرير تلك الخاصية، أو إذا كانت قيمتها الممررة تساوي `undefined`، مما يحمي المكون من الانهيار ويوفر سلوكاً افتراضياً منطقياً.",
      analogy: "تخيل أنك تشتري هاتفاً ذكياً جديداً من المتجر: يأتي الهاتف مضبوطاً مسبقاً بنغمة رنين افتراضية، وخلفية شاشة افتراضية زرقاء. إذا لم تقم أنت بتغيير الخلفية (لم تمرر الخاصية)، فسيظل الهاتف يعمل بالخلفية الافتراضية الجميلة دون أن يصبح شاشة سوداء معطوبة!",
      why: "تحميك من أخطاء الـ `undefined` غير المتوقعة وتوفر عليك كتابة شروط وتحققات متكررة في كل مكان في كود المكون، وتجعل مكوناتك مرنة وقابلة للاستخدام السريع بأقل عدد ممكن من الخصائص الإلزامية.",
      terms: [
        { term: "Default Props", pronunciation: "ديفولت بروبس", meaning: "القيم الافتراضية الاحتياطية لخصائص المكون" },
        { term: "Default Parameters", pronunciation: "ديفولت باراميترز", meaning: "ميزة JavaScript القياسية لتحديد قيم افتراضية للمعاملات" },
        { term: "Fallback UI", pronunciation: "فول باك يو آي", meaning: "واجهة بديلة تظهر عند غياب البيانات الأساسية" }
      ],
      syntax: "// المعيار الحديث المعتمد باستخدام JavaScript Default Parameters:\nfunction Alert({ type = 'info', dismissible = true, message }) {\n  return <div className={`alert-${type}`}>{message}</div>;\n}",
      codeSimple: `// مكون زر مع قيم افتراضية متكاملة
import React from 'react';

function CustomActionButton({ 
  text = 'انقر هنا',       // قيمة افتراضية للنص
  variant = 'primary',    // قيمة افتراضية للون
  size = 'medium'         // قيمة افتراضية للحجم
}) {
  return (
    <button className={\`btn btn-\${variant} btn-\${size}\`}>
      {text}
    </button>
  );
}

// تجربة استخدام المكون:
export default function App() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {/* 1. استخدام المكون بدون تمرير أي خاصية (يستخدم كل الافتراضيات!) */}
      <CustomActionButton />

      {/* 2. تخصيص النص واللون فقط */}
      <CustomActionButton text="حذف الحساب" variant="danger" />
    </div>
  );
}`,
      codeAdvanced: `// التعامل الدقيق مع null مقابل undefined في القيم الافتراضية
// تنبيه: ميزة Default Parameters تتفعل فقط عند undefined، ولا تتفعل إذا مرر الأب null صراحة!
function UserGreeting({ name = 'زائر عزيز' }) {
  return <h2>أهلاً بك يا {name}</h2>;
}

// اختبار السيناريوهات:
function TestCases() {
  return (
    <div>
      {/* سيناريو 1: لم تمرر الخاصية (undefined) ──> تطبع: "زائر عزيز" ✅ */}
      <UserGreeting />

      {/* سيناريو 2: مررت null صراحة ──> تطبع: "أهلاً بك يا " (فارغة لأن null قيمة مقصودة!) ⚠️ */}
      <UserGreeting name={null} />

      {/* سيناريو 3: حماية إضافية بـ Nullish Coalescing (??) إذا كانت البيانات قادمة من API كـ null: */}
      {/* const displayName = name ?? 'زائر عزيز'; */}
    </div>
  );
}`,
      output: `أهلاً بك يا زائر عزيز\nأهلاً بك يا [فارغ]\n[توضيح الفرق الحاسم بين undefined و null في تفعيل القيم الافتراضية]`,
      mistakes: [
        {
          wrong: `// استخدام الطريقة القديمة المهجورة MyComponent.defaultProps في React 19:\nfunction Button({ text }) { return <button>{text}</button>; }\nButton.defaultProps = { text: 'حفظ' }; // ⚠️ تحذير رسمي بالإلغاء والإيقاف في React 19!`,
          correct: `// استخدام معيار JavaScript الافتراضي الحديث في سطر الدالة دائماً:\nfunction Button({ text = 'حفظ' }) { return <button>{text}</button>; } // ✅ الأسلوب القياسي المعتمد عالمياً`,
          explanation: "أعلن فريق React رسمياً إيقاف وتجريد خاصية `defaultProps` للمكونات الوظيفية لصالح ميزة لغة JavaScript القياسية `({ text = 'حفظ' })`."
        }
      ],
      bestPractices: [
        "عين دائماً قيماً افتراضية لجميع الخصائص غير الإلزامية في سطر التفكيك مباشرة.",
        "للمصفوفات الممررة التي تستخدم معها `.map()`، عين مصفوفة فارغة كافتراضي: `{ items = [] }` لتفادي انهيار التطبيق.",
        "للدوال الاختيارية، يمكنك تعيين دالة فارغة صامتة كافتراضي: `{ onClick = () => {} }`."
      ],
      infographic: {
        title: "إنفوجرافيك: آلية عمل القيم الافتراضية لخصائص المكونات",
        concept: "Default Props Evaluation Flow",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 آلية تفعيل القيم الافتراضية للـ Props        │
└─────────────────────────────────────────────────────────────┘
  استدعاء المكون:  <Badge />  (الخاصية color لم تُمرر)
                           │
  هل الخاصية تساوي undefined؟
  ├─── نعم ───> تفعيل القيمة الافتراضية: color = 'blue' ✅
  └─── لا  ───> استخدام القيمة التي أرسلها الأب كما هي!
  
  قاعدة React 19:
  اكتب الافتراضيات مباشرة في سطر الدالة:
  function Badge({ color = 'blue', count = 0 })`
      }
    },
    {
      id: "5.3.g",
      title: "مفهوم Read-Only Props",
      englishTitle: "Read-Only Props: Immutability & Pure Component Functions",
      definition: "مفهوم الخصائص للقراءة فقط (Read-Only Props) هو قانون مقدس في بنية React ينص على أن كائن الـ Props الذي يستقبله المكون هو كائن مجمد (Frozen Object) لا يمكن للمكون تعديل قيمه أو حذفها أو الإضافة عليه نهائياً؛ فالمكونات يجب أن تتصرف كدوال نقية لا تغير مدخلاتها أبداً.",
      analogy: "تخيل أنك استلمت شيكاً بنكياً مختوماً بقيمة 1,000 ريال: الشيك للقراءة فقط؛ لا يمكنك استخدام قلم أحمر وتغيير الرقم إلى 10,000 ريال، لأن البنك سيعتبره تزويراً ويلغي الشيك فوراً! إذا أردت مبلغاً مختلفاً، يجب أن تطلب من صاحب الشيك (المكون الأب) إصدار شيك جديد بالقيمة الجديدة.",
      why: "يحمي التطبيق من الفوضى والانهيار؛ فلو سُمح لكل مكون ابن بتعديل الخصائص التي وصلته، فستتغير البيانات في الذاكرة دون علم المكون الأب وباقي المكونات الشقيقة، مما يؤدي لتناقض مرعب في شاشة المستخدم وفقدان تام للسيطرة على تدفق البيانات.",
      terms: [
        { term: "Read-Only", pronunciation: "ريد أونلي", meaning: "للقراءة فقط؛ غير قابل للتعديل أو الكتابة إطلاقاً" },
        { term: "Object.freeze", pronunciation: "أوبجكت فريز", meaning: "دالة JavaScript التي تستخدمها React لتجميد كائن props برمجياً" },
        { term: "Pure Function", pronunciation: "بيور فانكشن", meaning: "دالة نقية لا تعبث بمدخلاتها ولا تحدث أي آثار جانبية" }
      ],
      syntax: "// محاولة تعديل الـ Props محظورة تماماً وتطلق خطأ في Strict Mode:\nfunction Card(props) {\n  // props.title = 'تعديل'; ❌ ممنوع ومرفوض تماماً!\n  return <h2>{props.title}</h2>;\n}",
      codeSimple: `// توضيح التزام المكون بالنقاء وعدم المساس بالخصائص
import React from 'react';

function UserScoreBadge({ score }) {
  // ❌ خطأ ممنوع: score = score + 10;
  
  // ✅ أسلوب نقي وسليم: احسب القيمة الجديدة في متغير محلي جديد تماماً دون مساس بالأصل!
  const bonusScore = score + 10;

  return (
    <div className="score-box">
      <p>النقاط الأصلية (الممررة): {score}</p>
      <p>النقاط مع المكافأة (محسوبة محلياً): {bonusScore}</p>
    </div>
  );
}

export default UserScoreBadge;`,
      codeAdvanced: `// إثبات تجميد كائن الـ props بواسطة محرك React
function FreezeVerificationComponent(props) {
  // فحص هل الكائن مجمد بواسطة محرك JavaScript
  const isFrozen = Object.isFrozen(props);
  console.log('هل كائن الـ props مجمد ومحمي رسمياً من التعديل؟:', isFrozen); // true حتماً!

  return <div>كائن الـ Props محمي بقفل الأمان الصارم: {String(isFrozen)}</div>;
}

// اختبار المكون
function App() {
  return <FreezeVerificationComponent data="اختبار" />;
}`,
      output: `هل كائن الـ props مجمد ومحمي رسمياً من التعديل؟: true`,
      mistakes: [
        {
          wrong: `// تعديل خصائص كائن وصلك عبر الـ props مباشرة:\nfunction BadProfile({ user }) {\n  user.name = 'اسم معدل'; // ❌ خطأ مدمر! يغير الكائن في الذاكرة بالمرجع ويخرب بيانات المكون الأب!\n  return <h1>{user.name}</h1>;\n}`,
          correct: `// استنساخ الكائن بنسخة جديدة إذا أردت تعديله لعرض محلي:\nfunction GoodProfile({ user }) {\n  const modifiedUser = { ...user, name: 'اسم معدل' }; // ✅ نقي وآمن 100%\n  return <h1>{modifiedUser.name}</h1>;\n}`,
          explanation: "الكائنات تُمرر بالمرجع (Pass by Reference)؛ وتعديل خاصية داخل كائن الـ props يغير الكائن الأصلي في الأب مما يدمر مبدأ النقاء في React."
        }
      ],
      bestPractices: [
        "عامل الـ Props دائماً كأحجار مقدسة لا يمكن كسرها أو تشكيلها؛ اقرأ منها فقط.",
        "إذا احتجت لحساب قيمة مشتقة من الخاصية، فاحسبها في متغير محلي مستقل: `const total = props.price * 1.15;`.",
        "إذا أردت تعديل القيمة الأصلية عند الأب، اطلب ذلك بلباقة عبر استدعاء دالة callback مررها لك الأب."
      ],
      infographic: {
        title: "إنفوجرافيك: قانون حماية الخصائص Read-Only في React",
        concept: "The Immutability of React Props",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 قانون الحماية الصارم: Props للقراءة فقط      │
└─────────────────────────────────────────────────────────────┘
  المكون الأب يمرر:  <Profile user={userObj} />
                            │
                            ▼
  داخل المكون الابن:
  function Profile(props) {
    props.name = 'علي';   ──> 🛑 قفل أمان (Object.freeze)
    // TypeError: Cannot assign to read only property!
    
    القاعدة الذهبية:
    اقرأ منها ما تشاء ✅  |  ممنوع لمسها أو تعديلها نهائياً ❌
  }`
      }
    },
    {
      id: "5.3.h",
      title: "استخدام الخاصية children",
      englishTitle: "The Special 'children' Prop: Content Projection in React",
      definition: "الخاصية `children` هي خاصية مدمجة وسحرية في React يتم تمريرها تلقائياً لأي مكون؛ تمثل كل ما يتم كتابته ووضعه 'بين وسمي الفتح والإغلاق' للمكون في كود الـ JSX (سواء كانت نصوصاً، أو وسوم HTML، أو مكونات React كاملة)، وتعتبر الأداة الأقوى لتطبيق مبدأ تركيب المكونات وتصميم الحاويات المرنة.",
      analogy: "تخيل 'ساندويتش البرجر': قطعتي الخبز (العلوية والسفلية) هما المكون الحاضن `Modal` أو `Card`. ما تضعه في قلب الساندويتش بين قطعتي الخبز (شريحة اللحم، الجبن، الخس، أو الطماطم) هو الـ `children`! قطعتي الخبز تحضن أي نكهة تضعها بداخلها بأناقة تامة.",
      why: "تحررك من قيود الـ Props التقليدية المحدودة؛ فبدلاً من إجبار المستخدم على تمرير نصوص مجردة، تسمح له بوضع أي كود وأي أزرار وأي صور بحرية كاملة بين وسوم مكونك الحاضن.",
      terms: [
        { term: "children prop", pronunciation: "تشيلدرن بروب", meaning: "الخاصية السحرية التي تحمل المحتوى الموضوع بين وسمي الفتح والإغلاق" },
        { term: "Content Projection", pronunciation: "كونتنت بروجكشن", meaning: "إسقاط وحقن المحتوى الخارجي في قلب هيكل المكون" },
        { term: "Wrapper Component", pronunciation: "رابر كومبوننت", meaning: "مكون غلاف يوفر إطاراً وتصميماً لحضن أطفاله" }
      ],
      syntax: "// 1. في تعريف المكون الحاضن:\nfunction Box({ children }) {\n  return <div className=\"box-shell\">{children}</div>;\n}\n\n// 2. في الاستخدام بين الوسمين:\n<Box>\n  <h1>هذا هو الـ children!</h1>\n  <button>وهذا أيضاً!</button>\n</Box>",
      codeSimple: `// بناء مكون بطاقة مظهرية أنيقة باستخدام children
import React from 'react';

function FancyCard({ title, children }) {
  return (
    <div style={{ border: '1px solid #334155', borderRadius: '12px', padding: '20px', background: '#1e293b', color: '#f8fafc' }}>
      <h3 style={{ color: '#38bdf8', borderBottom: '1px solid #334155', paddingBottom: '10px', marginBottom: '14px' }}>
        {title}
      </h3>
      
      {/* هنا يتم حقن وعرض كل الأطفال الممررين بين الوسمين */}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// استخدام الحاوية بمحتويات مختلفة كلياً:
export default function Showcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* تمرير نموذج كـ children */}
      <FancyCard title="تسجيل النشرة البريدية ✉️">
        <input type="email" placeholder="بريدك..." style={{ padding: '8px' }} />
        <button style={{ marginLeft: '8px' }}>اشتراك</button>
      </FancyCard>

      {/* تمرير صورة وفقرة كـ children لنفس المكون! */}
      <FancyCard title="صورة الأسبوع 📷">
        <p>لقطة ساحرة لغروب الشمس في واحة الأحساء.</p>
      </FancyCard>
    </div>
  );
}`,
      codeAdvanced: `// استكشاف طبيعة الخاصية children البرمجية في React
// الخاصية children قد تكون:
// 1. undefined (إذا كان المكون فارغاً مغلقاً ذاتياً <Box />)
// 2. نصاً عادياً string (إذا كتبت <Box>مرحباً</Box>)
// 3. كائناً Object (إذا مررت عنصراً واحداً <Box><h1>...</h1></Box>)
// 4. مصفوفة عناصر Array (إذا مررت عدة عناصر متجاورة!)
import React from 'react';

function SmartInspector({ children }) {
  // أداة React.Children القياسية للتعامل الآمن مع مختلف أشكال children
  const count = React.Children.count(children);

  return (
    <div style={{ padding: '12px', background: '#0f172a', borderRadius: '8px', border: '1px solid #38bdf8' }}>
      <p style={{ color: '#38bdf8' }}>عدد العناصر المحقونة في هذا المكون: <strong>{count}</strong></p>
      <div>{children}</div>
    </div>
  );
}

console.log('React.Children توفر دوال آمنة للتعامل مع أطفال المكون المتنوعين!');`,
      output: `React.Children توفر دوال آمنة للتعامل مع أطفال المكون المتنوعين!`,
      mistakes: [
        {
          wrong: `// تمرير المحتوى بين الوسمين ونسيان كتابة {children} في دالة المكون!\nfunction BadBox(props) { return <div className="box">محتوى ثابت</div>; }\n// <BadBox><h1>لن أظهر أبداً!</h1></BadBox> // ❌ لن يظهر العنوان لأن المكون تجاهل props.children!`,
          correct: `// استخراج { children } من الـ Props وعرضها في المكان المطلوب دائماً:\nfunction GoodBox({ children }) { return <div className="box">{children}</div>; } // ✅ يظهر المحتوى فوراً`,
          explanation: "كل ما تضعه بين وسمي الفتح والإغلاق يصل تلقائياً للمكون في خاصية اسمها `children`؛ وإذا لم تضع `{children}` في كود الـ return فلن يظهر شيء."
        }
      ],
      bestPractices: [
        "استخدم `children` لبناء مكونات التخطيط والأغلفة (Layouts, Cards, Modals, Drawers).",
        "استخدم دالة `React.Children.map(children, fn)` إذا كنت تحتاج للتعديل على كل طفل بأمان.",
        "تذكر أن `children` يمكن أن تكون أي شيء صالح في React: عناصر JSX، نصوص، أرقام، أو حتى دالة (Render Props Pattern)."
      ],
      infographic: {
        title: "إنفوجرافيك: سحر الخاصية children وحقن المحتوى في React",
        concept: "The Special children Prop Mechanism",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 سحر الخاصية children وحقن المحتوى            │
└─────────────────────────────────────────────────────────────┘
  المكون الأب يكتب المحتوى بين الوسمين:
  <Card title="مهم">
    <p>هذا النص في القلب</p>  ──┐
    <button>وزر تفاعلي</button> ──┴──> كل هذا يصل تلقائياً في الخاصية:
  </Card                                props.children
                                            │
                                            ▼
  داخل كود مكون Card:
  function Card({ title, children }) {
    return (
      <div className="card-box">
        <h2>{title}</h2>
        <div className="body">{children}</div> ◄── يُحقن ويُرسم هنا! 🎨
      </div>
    );
  }`
      }
    },
    {
      id: "5.3.i",
      title: "الفرق بين Props و State",
      englishTitle: "Props vs State: External Parameters vs Internal Memory",
      definition: "الفرق الجوهري بين الـ Props والـ State هو أحد أركان هندسة React: الـ Props هي بيانات خارجية ممررة للمكون من والده (مثل معاملات الدالة)، يملكها الأب وهي للقراءة فقط بالنسبة للابن (Immutable). بينما الـ State هي ذاكرة داخلية خاصة يملكها المكون ذاته ويديرها بنفسه (مثل المتغيرات المحلية)، وتتغير مع الوقت استجابة لتفاعل المستخدم، وتؤدي إعادة تعيينها إلى إعادة تصيير المكون وتحديث الشاشة.",
      analogy: "تخيل إنساناً:\n• الـ Props (خصائص خارجية): مثل 'لون عينيك، تاريخ ميلادك، واسم عائلتك'؛ أشياء ورثتها من والديك من الخارج ولا يمكنك تغييرها بيدك بمزاجك!\n• الـ State (حالة داخلية): مثل 'مزاجك الحالي (سعيد/غاضب)، رصيد محفظتك، ومستوى جوعك'؛ أشياء داخلية خاصة بك تتغير وتزيد وتنقص كل ساعة بحسب ما يحدث معك في اليوم!",
      why: "الخلط بينهما هو سبب ارتباك كل مطور مبتدئ؛ فإذا وضعت بيانات قابلة للتغير في الـ Props فلن تستطيع تعديلها، وإذا وضعت بيانات ممررة ثابتة في الـ State فقد أهدرت الذاكرة دون مبرر.",
      terms: [
        { term: "Props (External)", pronunciation: "بروبس إكستيرنال", meaning: "بيانات خارجية ممررة من المكون الأب للقراءة فقط" },
        { term: "State (Internal)", pronunciation: "ستيت إنتيرنال", meaning: "حالة وذاكرة داخلية يملكها ويديرها ويغيرها المكون بنفسه" },
        { term: "State-Driven UI", pronunciation: "ستيت دريفن يو آي", meaning: "واجهة تقودها وتحركها تغيرات الحالة الداخلية" }
      ],
      syntax: "// الـ Props: يستلمها المكون كمعامل:\nfunction Card({ title }) { ... }\n\n// الـ State: ينشئها المكون بخطاف useState:\nconst [isOpen, setIsOpen] = useState(false);",
      codeSimple: `// مكون يجمع بين استخدام Props واستخدام State معاً
import React, { useState } from 'react';

function ExpandablePanel({ title, defaultOpen = false, children }) {
  // 1. Props: title و defaultOpen تأتي من الأب من الخارج (للقراءة فقط)
  
  // 2. State: isOpen هي حالة داخلية يملكها هذا المكون ويدير فتح وإغلاق نفسه
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{ border: '1px solid #334155', borderRadius: '8px', marginBottom: '10px' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', padding: '12px', background: '#1e293b', color: '#f8fafc', border: 'none', textAlign: 'right', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
      >
        <span>{title} (Prop)</span>
        <span>{isOpen ? '▲ إغلاق' : '▼ فتح'}</span>
      </button>

      {/* الحالة State تتحكم في ظهور المحتوى */}
      {isOpen && (
        <div style={{ padding: '14px', background: '#0f172a' }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default ExpandablePanel;`,
      codeAdvanced: `// جدول المقارنة الشاملة لترسيخ المفهوم في الذهن البرمجي
const propsVsStateMatrix = [
  { criterion: 'من أين تأتي؟', props: 'من المكون الأب الخارجي', state: 'ينشئها المكون داخلياً بـ useState' },
  { criterion: 'هل يمكن للمكون تعديلها؟', props: 'ممنوع تماماً (للقراءة فقط)', state: 'نعم، عبر دالة التحديث setState' },
  { criterion: 'هل يملكها المكون؟', props: 'لا (يملكها الأب)', state: 'نعم، ملكية حصرية للمكون' },
  { criterion: 'تأثير التغيير؟', props: 'إذا غير الأب الـ Prop يعاد تصيير الابن', state: 'إذا تغيرت الـ State يعاد تصيير المكون فوراً' }
];

console.log('--- المقارنة الحاسمة: Props مقابل State ---');
propsVsStateMatrix.forEach(row => {
  console.log(\`• \${row.criterion.padEnd(25)} | Props: \${row.props.padEnd(25)} | State: \${row.state}\`);
});`,
      output: `--- المقارنة الحاسمة: Props مقابل State ---\n• من أين تأتي؟              | Props: من المكون الأب الخارجي    | State: ينشئها المكون داخلياً بـ useState\n• هل يمكن للمكون تعديلها؟   | Props: ممنوع تماماً (للقراءة فقط) | State: نعم، عبر دالة التحديث setState\n• هل يملكها المكون؟          | Props: لا (يملكها الأب)           | State: نعم، ملكية حصرية للمكون\n• تأثير التغيير؟            | Props: إذا غير الأب الـ Prop يعاد | State: إذا تغيرت الـ State يعاد تصيير المكون فوراً`,
      mistakes: [
        {
          wrong: `// نسخ الـ Prop وتخزينها في State دون داعٍ:\nfunction UserDisplay({ name }) {\n  const [userName, setUserName] = useState(name); // ❌ خطأ شائع! إذا حدث الأب name فلن تتحدث userName تلقائياً!\n  return <h1>{userName}</h1>;\n}`,
          correct: `// استخدام الخاصية name مباشرة دون حفظها في State إلا إذا أردت تعديلها كمسودة نموذج محلي:\nfunction UserDisplay({ name }) {\n  return <h1>{name}</h1>; // ✅ سليم ومحدث دائماً مع الأب\n}`,
          explanation: "تهيئة State بقيمة من Props يُنسخ القيمة في أول تصيير فقط؛ فإذا تغيرت الـ Prop لاحقاً لن تشعر الـ State بالتغيير وستعرض بيانات قديمة."
        }
      ],
      bestPractices: [
        "إذا كانت البيانات لا تتغير طوال حياة المكون، فاجعلها Props عادية.",
        "إذا كانت البيانات تتغير نتيجة لنقر المستخدم أو استجابة شبكة، فاجعلها State.",
        "إذا كان بإمكانك حساب القيمة من Props أو State موجودة مسبقاً، فلا تنشئ لها State جديدة (Avoid Redundant State)."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة حاسمة بين Props و State في شجرة React",
        concept: "Props vs State Comprehensive Matrix",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 المقارنة الكبرى: Props مقابل State           │
└─────────────────────────────────────────────────────────────┘
  الخصائص (Props):                  الحالة الداخلية (State):
  • تأتي من: الخارج (الأب)          • تأتي من: الداخل (المكون نفسه)
  • التعديل: ممنوع (Read-Only)      • التعديل: متاح بدالة setState
  • التشبيه: جيناتك الوراثية 🧬     • التشبيه: أفكارك ومشاعرك الحالية 🧠
  • الهدف:  تخصيص وتغذية المكون     • الهدف:  إدارة تفاعل وحركة الواجهة`
      }
    },
    {
      id: "5.3.j",
      title: "تجنب Props Drilling المفرط",
      englishTitle: "Avoiding Props Drilling: Composition & Context Alternatives",
      definition: "مشكلة حفر الخصائص (Props Drilling) تحدث عندما تضطر لتمرير خاصية (Prop) عبر مستويات وطبقات عديدة متتالية في شجرة المكونات (مثل: الأب ──> الابن ──> الحفيد ──> ابن الحفيد)، حيث تمر الخاصية عبر مكونات وسيطة لا تحتاج إليها على الإطلاق ولا تستخدمها، فقط لكي تسلمها لمكون في قاع الشجرة.",
      analogy: "تخيل أنك في الطابق الخامس وتريد إعطاء مفتاح لشخص في الطابق الأرضي: في أسلوب Props Drilling المرهق، تنزل للطابق الرابع وتعطي المفتاح لشخص، ثم يعطيه هو للشخص في الطابق الثالث، ثم الثاني، ثم الأول، حتى يصل للشخص المطلوب في الأسفل! كل الأشخاص في الوسط تم إزعاجهم وإشغالهم بشيء لا يخصهم! الحل الأذكى هو إلقاء المفتاح في المصعد المباشر (React Context أو التركيب) ليصل للشخص مباشرة دون إزعاج الوسطاء.",
      why: "تجعل الكود هشاً وصعب الصيانة؛ فإذا أردت إعادة تسمية الخاصية أو تغيير نوعها، ستضطر لتعديل 6 ملفات وسيطة في الطريق، وتصبح المكونات الوسيطة معتمدة على بيانات لا تخصها.",
      terms: [
        { term: "Props Drilling", pronunciation: "بروبس دريلينغ", meaning: "حفر وتمرير الخصائص عبر طبقات عميقة متتالية غير معنية" },
        { term: "Lifting State Up", pronunciation: "ليفتنغ ستيت أب", meaning: "رفع الحالة لأقرب أب مشترك" },
        { term: "React Context API", pronunciation: "رياكت كونتكست إيه بي آي", meaning: "المصعد المباشر لتوفير البيانات للشجرة كلها دون حفر" },
        { term: "Component Composition Solution", pronunciation: "كومبوزيشن سوليوشن", meaning: "حل مشكلة الحفر بتمرير المكون كـ children مباشرة" }
      ],
      syntax: "// مشكلة الحفر (Props Drilling):\n<GrandParent user={user}>\n  <Parent user={user}>\n    <Child user={user}>\n      <GrandChild user={user} /> {/* هو الوحيد الذي يحتاجها! */}\n    </Child>\n  </Parent>\n</GrandParent>",
      codeSimple: `// توضيح مشكلة الحفر وكيف يحلها تركيب المكونات (Composition) ببساطة
import React from 'react';

// ❌ الطريقة المرهقة بحفر الخصائص (المكون الوسيط مجبر على تمرير user):
function MiddleComponent({ user }) {
  return (
    <div className="middle">
      <DeepChild user={user} />
    </div>
  );
}

function DeepChild({ user }) {
  return <h4>المستخدم المطلوب: {user.name}</h4>;
}

// ✅ الحل العبقري البسيط بتركيب المكونات (Component Composition عبر children):
// نجعل المكون الوسيط يقبل children؛ ونركب المكون النهائي مباشرة في القمة!
function CleanMiddle({ children }) {
  return <div className="middle-shell">{children}</div>;
}

export default function App() {
  const currentUser = { name: 'مهند الشريف' };

  return (
    <CleanMiddle>
      {/* هنا نمرر user للابن مباشرة دون أن يدري CleanMiddle بأي شيء عن user! */}
      <DeepChild user={currentUser} />
    </CleanMiddle>
  );
}`,
      codeAdvanced: `// استعراض البدائل الثلاثة للتغلب على Props Drilling في المشاريع الحقيقية
const propsDrillingSolutions = [
  {
    solution: '1. تركيب المكونات (Component Composition)',
    whenToUse: 'هو الحل الأول والأبسط؛ مرر المكون كاملاً كـ children أو كـ Slot Prop لتتخطى المكونات الوسيطة.'
  },
  {
    solution: '2. سياق React (Context API)',
    whenToUse: 'عندما تكون البيانات "عالمية حقاً" وتحتاجها عشرات المكونات في شاشات متفرقة (مثل الوضع المظلم Theme، بيانات تسجيل الدخول Auth، أو لغة الموقع).'
  },
  {
    solution: '3. مكتبات إدارة الحالة (Zustand / Redux Toolkit)',
    whenToUse: 'للتطبيقات التجارية الضخمة المعقدة ذات الحالات المترابطة التي تتغير آلاف المرات في الدقيقة.'
  }
];

console.log('--- الحلول الثلاثة المعتمدة عالمياً للقضاء على Props Drilling ---');
propsDrillingSolutions.forEach(s => console.log(\`• \${s.solution}: \${s.whenToUse}\`));`,
      output: `--- الحلول الثلاثة المعتمدة عالمياً للقضاء على Props Drilling ---\n• 1. تركيب المكونات (Component Composition): هو الحل الأول والأبسط؛ مرر المكون كاملاً كـ children أو كـ Slot Prop لتتخطى المكونات الوسيطة.\n• 2. سياق React (Context API): عندما تكون البيانات "عالمية حقاً" وتحتاجها عشرات المكونات في شاشات متفرقة (مثل الوضع المظلم Theme، بيانات تسجيل الدخول Auth، أو لغة الموقع).\n• 3. مكتبات إدارة الحالة (Zustand / Redux Toolkit): للتطبيقات التجارية الضخمة المعقدة ذات الحالات المترابطة التي تتغير آلاف المرات في الدقيقة.`,
      mistakes: [
        {
          wrong: `// التسرع في إنشاء React Context معقد لكل خاصية صغيرة لمجرد تجنب تمريرها لطبقتين فقط!\n// ❌ تعقيد غير مبرر وإهدار للأداء؛ Context مخصص للبيانات العامة الحقيقية!`,
          correct: `// تمرير الخاصية لطبقة أو طبقتين (مستوى أو مستويين) أمر طبيعي وصحي جداً في React؛ استخدم Context فقط عند تجاوز 4-5 مستويات أو للبيانات العامة كالثيم والتوثيق ✅`,
          explanation: "تمرير الـ Props لمستويين أو ثلاثة يسمى تمرير بيانات عادي وليس Drilling مزعج؛ ولا تلجأ لـ Context إلا عندما تصبح المكونات الوسيطة معاقة فعلياً."
        }
      ],
      bestPractices: [
        "جرب حل تركيب المكونات (Component Composition) أولاً قبل التسرع في استخدام Context أو Redux.",
        "لا تخف من تمرير الـ Props لمستوى أو مستويين؛ فهو الأسلوب الأسرع والأكثر صراحة في تتبع البيانات.",
        "اجعل Context محصوراً في شجرة المكونات التي تحتاجه فقط ولا تغلف التطبيق كله بـ Providers عشوائية."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح مشكلة Props Drilling والحلول المعمارية الثلاثة",
        concept: "Props Drilling Problem & Architectural Solutions",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 مشكلة حفر الخصائص (Props Drilling)           │
└─────────────────────────────────────────────────────────────┘
  الأب الأكبر: [ user ]
       │
       ▼ (حفر مزعج ⛏️)
  الابن:      [ user ] (لا يحتاجه!)
       │
       ▼ (حفر مزعج ⛏️)
  الحفيد:     [ user ] (لا يحتاجه!)
       │
       ▼
  ابن الحفيد: [ user ] (هو الوحيد الذي يحتاجه لعرض الاسم!)
  
  الحلول الذكية:
  1. التركيب (Composition عبر children): تخطي الوسطاء بحقن المكون مباشرة 🧩
  2. سياق React (Context API): إرسال البيانات كإشارة لاسلكية مباشرة للهدف 📡`
      }
    }
  ],
  quiz: [
    {
      id: "q5.3.1",
      question: "ما هو الفارق الحاسم بين الـ Props والـ State في React؟",
      options: [
        "الـ Props تُكتب بأحرف عربية والـ State تُكتب بأحرف إنجليزية.",
        "الـ Props بيانات خارجية ممررة من الأب وتعتبر للقراءة فقط (Immutable)، بينما الـ State ذاكرة داخلية يملكها المكون ويديرها ويغيرها بنفسه.",
        "الـ Props تعمل في متصفح Chrome فقط والـ State تعمل في Safari فقط.",
        "لا يوجد فرق؛ هما مصطلحان لنفس المتغير تماماً."
      ],
      correctAnswer: 1,
      explanation: "الـ Props مدخلات ممررة من الخارج للقراءة فقط، بينما الـ State حالة داخلية خاصة بالمكون تتغير مع الوقت وتطلق إعادة التصيير."
    },
    {
      id: "q5.3.2",
      question: "لماذا تفرض React أن تكون الـ Props للقراءة فقط (Read-Only) وتمنع تعديلها في الابن؟",
      options: [
        "لتوفير حبر الطباعة عند طباعة الكود على الورق.",
        "لضمان بقاء المكونات دوالاً نقية والحفاظ على تدفق البيانات أحادي الاتجاه (One-Way Data Flow) ومنع التناقض وفوضى الذاكرة بين الأب والأبناء.",
        "لأن تعديل الـ Props يحذف ملفات المشروع من القرص الصلب.",
        "لأن المتصفح يمنع تعديل النصوص بعد الساعة 12 ليلاً."
      ],
      correctAnswer: 1,
      explanation: "تجميد الـ Props وحظر تعديلها يضمن أن تكون دوال المكونات نقية وتتبع تدفق بيانات هابطاً متوقعاً وخالياً من الفوضى والآثار الجانبية."
    },
    {
      id: "q5.3.3",
      question: "ما هي الخاصية السحرية التي تحتوي على كل ما يُكتب بين وسمي الفتح والإغلاق للمكون؟",
      options: [
        "خاصية content",
        "خاصية innerHTML",
        "خاصية children",
        "خاصية body"
      ],
      correctAnswer: 2,
      explanation: "الخاصية `children` هي الخاصية المدمجة في React التي تحمل تلقائياً كافة العناصر والنصوص الموضوعة بين وسمي فتح وإغلاق المكون `<MyBox>هنا children</MyBox>`."
    }
  ],
  exercise: {
    title: "تمرين عملي: بناء بطاقة منتج تفاعلية مع تفكيك Props، قيم افتراضية، ودالة Callback للشراء",
    description: "المطلوب بناء مكون بطاقة منتج متكامل `ProductShowcaseCard` يطبق كافة مفاهيم الـ Props: تفكيك الخصائص في سطر الدالة، تحديد قيم افتراضية للصورة والعملة، إرجاع المحتوى الإضافي عبر خاصية `children`، وتمرير دالة `onBuyNow` يستدعيها زر الشراء ممرراً معرّف المنتج للأب.",
    starterCode: `// 1. صمم مكون ProductShowcaseCard
export default function ProductShowcaseCard({
  id,
  title,
  price,
  currency = 'ر.س',
  imgUrl = 'https://via.placeholder.com/150',
  onBuyNow,
  children
}) {
  // المطلوب: إرجاع واجهة البطاقة الكاملة وربط زر الشراء
}`,
    hints: [
      "في زر الشراء: اربط `onClick={() => onBuyNow(id)}` لتمرير المعرف للأب.",
      "اعرض خاصية `{children}` في مساحة مخصصة للوصف أو التقييمات.",
      "استخدم القيم الافتراضية للعملة والصورة."
    ],
    solution: `import React from 'react';

// المكون المصمم باحترافية وتفكيك مباشر وقيم افتراضية
export default function ProductShowcaseCard({
  id,
  title,
  price,
  currency = 'ر.س',
  imgUrl = 'https://via.placeholder.com/200x120?text=منتج',
  onBuyNow,
  children
}) {
  return (
    <article style={{ 
      maxWidth: '320px', 
      background: '#1e293b', 
      border: '1px solid #334155', 
      borderRadius: '12px', 
      overflow: 'hidden',
      color: '#f8fafc',
      fontFamily: 'system-ui',
      boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
    }}>
      {/* 1. صورة المنتج مع القيمة الافتراضية */}
      <img 
        src={imgUrl} 
        alt={title} 
        style={{ width: '100%', height: '140px', objectFit: 'cover' }} 
      />

      <div style={{ padding: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.15rem' }}>{title}</h3>
        
        {/* 2. السعر والعملة الافتراضية */}
        <p style={{ margin: '0 0 12px 0', color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem' }}>
          {price} {currency}
        </p>

        {/* 3. حقن المحتوى الإضافي الممرر عبر children */}
        {children && (
          <div style={{ borderTop: '1px solid #334155', paddingTop: '10px', marginBottom: '14px', fontSize: '0.85rem', color: '#94a3b8' }}>
            {children}
          </div>
        )}

        {/* 4. استدعاء دالة الأب Callback وتمرير معرف المنتج */}
        <button 
          onClick={() => onBuyNow(id)}
          style={{ 
            width: '100%', 
            background: '#2563eb', 
            color: 'white', 
            border: 'none', 
            padding: '10px', 
            borderRadius: '6px', 
            fontWeight: 'bold', 
            cursor: 'pointer' 
          }}
        >
          شراء الآن ⚡
        </button>
      </div>
    </article>
  );
}`
  },
  infographic: {
    title: "إنفوجرافيك الموضوع: الدليل الكامل لأسرار وقواعد الـ Props في React",
    badge: "شرايين البيانات 1.0",
    summary: "الـ Props هي وسيلة التغذية والتواصل بين مكونات React. إتقان تمريرها، وتفكيكها، وتعيين افتراضياتها، واستغلال القوة السحرية لخاصية children يمنحك معمارية واجهات عالمية الرقي.",
    points: [
      "Props Concept: مدخلات المكون الممررة من الأب لتخصيص الواجهة.",
      "Quotes vs Curlies: النصوص بـ \" \"؛ الأرقام والبوليان والمتغيرات بـ { }.",
      "Passing Functions: تواصل الابن مع الأب عبر دوال Callbacks.",
      "Destructuring: تفكيك الخصائص في سطر الدالة لكود فائق النظافة.",
      "Default Values: تحديد قيم احتياطية بـ ({ text = 'افتراضي' }).",
      "Special children: الخاصية السحرية لحقن المحتوى بين وسمي الفتح والإغلاق.",
      "Props vs State: الخصائص خارجية وثابتة؛ الحالة داخلية ومتغيرة."
    ]
  }
};
